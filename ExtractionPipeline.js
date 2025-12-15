class ExtractionPipeline {
    constructor() {
        this.supportedTypes = ['image', 'document', 'audio', 'video'];
    }

    async process(file) {
        try {
            if (!file || !file.name) throw new Error("Invalid file object");

            const type = this.detectType(file.name);
            const result = {
                filename: file.name,
                type: type,
                timestamp: new Date().toISOString(),
                data: {},
                status: "processing"
            };

            switch (type) {
                case 'image':
                    result.data = await this.extractImage(file);
                    break;
                case 'document':
                    result.data = await this.extractDocument(file);
                    break;
                case 'audio':
                    result.data = await this.extractAudio(file);
                    break;
                case 'video':
                    result.data = await this.extractVideo(file);
                    break;
                default:
                    result.status = "skipped";
                    result.data = { message: "Unsupported file type" };
            }

            result.status = "success";
            return result;

        } catch (error) {
            console.error(error);
            return {
                filename: file ? file.name : "unknown",
                error: error.message || "Extraction failed",
                status: "failed"
            };
        }
    }

    detectType(filename) {
        if (filename.match(/\.(jpg|jpeg|png|webp)$/i)) return 'image';
        if (filename.match(/\.(pdf|txt|md|json)$/i)) return 'document';
        if (filename.match(/\.(mp3|wav|m4a)$/i)) return 'audio';
        if (filename.match(/\.(mp4|mov|avi)$/i)) return 'video';
        return 'unknown';
    }

    async extractImage(file) {
        return {
            ocr: "Detected text content",
            objects: ["person", "outdoor", "sky"],
            exif: { camera: "Simulated Camera", date: "2023-01-01" },
            faces: 2
        };
    }

    async extractDocument(file) {
        return {
            text: "Full document content extracted here...",
            entities: ["Company Name", "Date"],
            pageCount: 1
        };
    }

    async extractAudio(file) {
        return {
            transcript: "This is a simulated audio transcription.",
            durationSeconds: 125,
            speakers: 2
        };
    }

    async extractVideo(file) {
        return {
            scenes: 4,
            keyObjects: ["car", "road"],
            durationSeconds: 45
        };
    }
}

if (typeof window === 'undefined') {
    const pipeline = new ExtractionPipeline();
    const mockFile = { name: "vacation.jpg" };

    pipeline.process(mockFile).then(result => {
        console.log(JSON.stringify(result, null, 2));
    });
}

export default ExtractionPipeline;