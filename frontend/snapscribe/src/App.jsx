import React, { useState } from 'react';

const AudioRecorder = () => {
    const [isRecording, setIsRecording] = useState(false);
    const [webSocket, setWebSocket] = useState(null);

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();

            const socket = new WebSocket('ws://localhost:8000/ws/audio');  // WebSocket to FastAPI
            setWebSocket(socket);

            mediaRecorder.ondataavailable = async (event) => {
                if (socket.readyState === WebSocket.OPEN) {
                    socket.send(await event.data.arrayBuffer());  // Send as an ArrayBuffer
                }
            };

            mediaRecorder.onstop = () => {
                socket.close();
                setWebSocket(null);
            };

            setIsRecording(true);
        });
    };

    const stopRecording = () => {
        if (webSocket) {
            webSocket.close();
        }
        setIsRecording(false);
    };

    return (
        <div>
            <h1>Audio Recorder</h1>
            <button onClick={isRecording ? stopRecording : startRecording}>
                {isRecording ? "Stop Recording" : "Start Recording"}
            </button>
        </div>
    );
};

export default AudioRecorder;
