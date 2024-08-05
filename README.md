# SnapScribe

SnapScribe is a real-time audio transcription and summarization app that leverages machine learning to convert speech to text and summarize key points. Ideal for meetings, lectures, interviews, and personal note-taking, SnapScribe provides an efficient way to capture and review spoken content.

## Features

- **Real-Time Audio Transcription:**
  - Converts live audio into text in real-time.
  - Supports multiple languages and accents.
  - Offers speaker identification to differentiate between multiple speakers.

- **Text Summarization:**
  - Summarizes transcribed text into concise key points.
  - Provides options for different summary lengths (e.g., brief, detailed).
  - Highlights important phrases and keywords.

- **Searchable Transcripts:**
  - Allows users to search for specific keywords or phrases within transcripts.
  - Provides timestamps for easier navigation.

- **Export and Share:**
  - Exports transcripts and summaries to various formats (e.g., PDF, DOCX).
  - Shares transcripts and summaries via email or cloud services.

- **User Management:**
  - Supports user authentication and profile management.
  - Allows users to manage their saved transcripts and summaries.

## Technology Stack

- **Frontend:**
  - React
  - Tailwind CSS
  - WebSockets

- **Backend:**
  - FastAPI
  - WebSockets
  - TensorFlow/PyTorch
  - Hugging Face Transformers

## Getting Started

### Prerequisites

- Node.js
- Python 3.7+
- FastAPI
- TensorFlow/PyTorch
- Hugging Face Transformers

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/SnapScribe.git
   cd SnapScribe
   ```

2. **Frontend Setup:**
   ```bash
   cd frontend
   npm install
   npm start
   ```

3. **Backend Setup:**
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   uvicorn main:app --reload
   ```

### Project Structure

```
SnapScribe/
├── backend/
│   ├── app/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── main.py
│   └── requirements.txt
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── App.js
│   ├── package.json
│   └── tailwind.config.js
└── README.md
```

### Usage

1. **Start the Backend Server:**
   ```bash
   cd backend
   uvicorn main:app --reload
   ```

2. **Start the Frontend Development Server:**
   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to start using SnapScribe.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [FastAPI](https://fastapi.tiangolo.com/)
- [TensorFlow](https://www.tensorflow.org/)
- [PyTorch](https://pytorch.org/)
- [Hugging Face](https://huggingface.co/)
