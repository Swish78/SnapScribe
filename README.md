# SnapScribe

SnapScribe is a real-time audio transcription and summarization app that leverages machine learning to convert speech to text and summarize key points. Designed for meetings, lectures, interviews, and personal note-taking, SnapScribe provides an efficient way to capture, organize, and review spoken content.

## Features

### Real-Time Audio Transcription
- Converts live audio into text in real-time.
- Supports multiple languages and accents.
- Differentiates between multiple speakers using speaker identification.

### Text Summarization
- Summarizes transcribed text into concise key points.
- Offers options for different summary lengths (e.g., brief, detailed).
- Highlights important phrases and keywords for better context.

### Voice Recognition
- Identifies individual speakers by recognizing their unique voice profiles.
- Annotates transcripts with speaker names for improved clarity.
- Allows users to manage and update their voice profiles.

### Searchable Transcripts
- Enables users to search for specific keywords or phrases within transcripts.
- Provides timestamps for easier navigation through the content.

### Export and Share
- Exports transcripts and summaries to various formats such as PDF and DOCX.
- Allows sharing via email or cloud services for seamless collaboration.

### User Management
- Secure user authentication and profile management.
- Stores and organizes saved transcripts and summaries for easy access.

## Technology Stack

### Frontend
- **React**: For building an interactive user interface.
- **Tailwind CSS**: For modern and responsive design.
- **WebSockets**: To enable real-time communication for live transcription.

### Backend
- **FastAPI**: A high-performance web framework for building APIs.
- **WebSockets**: For real-time data exchange.
- **TensorFlow / PyTorch**: For machine learning models.
- **Hugging Face Transformers**: For transcription, summarization, and voice recognition tasks.
- **pyannote.audio / SpeechBrain**: For speaker identification and voice recognition.

### Database
- **MongoDB** or **PostgreSQL**: For storing user data, transcripts, and voice profiles.

## Installation

### Prerequisites
- Python 3.8 or higher
- Node.js 16 or higher
- npm or yarn
- Virtual environment manager (e.g., venv or conda)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/snapscribe.git
   ```
2. Navigate to the backend directory and install dependencies:
   ```bash
   cd snapscribe/backend
   pip install -r requirements.txt
   ```
3. Navigate to the frontend directory and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```
4. Start the backend server:
   ```bash
   uvicorn main:app --reload
   ```
5. Start the frontend development server:
   ```bash
   npm start
   ```

## Usage

1. Open the application in your browser.
2. Log in or create an account to access features.
3. Upload or provide live audio input for transcription.
4. View real-time transcription and summaries.
5. Manage, search, and export your transcripts and summaries.

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch for your feature or bugfix:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push the branch to your fork:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request on the main repository.

## License

This project is licensed under the [MIT License](LICENSE).

[//]: # (## Acknowledgments)

[//]: # ()
[//]: # (- **OpenAI Whisper** and **Hugging Face Transformers** for their powerful transcription and summarization tools.)

[//]: # (- **pyannote.audio** and **SpeechBrain** for speaker identification support.)

[//]: # (- **FastAPI** and **React** for enabling rapid development of robust web applications.)

