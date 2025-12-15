class AudioTranscriber {
    constructor() {
        this.supportedFormats = ['mp3', 'wav', 'm4a', 'ogg'];
    }

    async transcribe(file) {
        return new Promise((resolve, reject) => {
            if (!this.isValidFile(file)) {
                reject(new Error("Unsupported audio format"));
                return;
            }

            
            setTimeout(() => {
                const mockTranscript = this.generateMockTranscript(file.name);
                
                resolve({
                    filename: file.name,
                    transcript: mockTranscript,
                    duration: "02:15",
                    confidence: 0.98,
                    language: "en-US"
                });
            }, 1500);
        });
    }

    isValidFile(file) {
        if (!file || !file.name) return false;
        const ext = file.name.split('.').pop().toLowerCase();
        return this.supportedFormats.includes(ext);
    }

    generateMockTranscript(filename) {
        
        if (filename.includes("meeting")) {
            return "Okay everyone, let's get started. The main goal for Q4 is...";
        }
        if (filename.includes("lecture")) {
            return "The concept of polymorphism in object-oriented programming implies...";
        }
        if (filename.includes("nature")) {
            return "[Birds chirping] [Wind blowing] [Walking steps]";
        }
        return "This is a transcribed audio recording containing generic speech content.";
    }
}

if (typeof window === 'undefined') {
    const transcriber = new AudioTranscriber();
    const fakeAudio = { name: "team_meeting.mp3" };

    console.log("Transcribing...");
    transcriber.transcribe(fakeAudio)
        .then(result => console.log(result))
        .catch(err => console.error(err));
}

export default AudioTranscriber;