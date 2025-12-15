class DocumentParser {
    constructor() {
        this.supportedTypes = ['pdf', 'txt', 'md', 'json'];
    }

    async parse(file) {
        return new Promise((resolve, reject) => {
            if (!this.isValid(file)) {
                reject(new Error("Unsupported document format"));
                return;
            }

            const ext = this.getExtension(file.name);

            setTimeout(() => {
                let content = "";
                let metadata = { pages: 1, author: "Unknown" };

                if (ext === 'pdf') {
                    content = "Simulated PDF content extraction. This would use pdfjs-dist in production.";
                    metadata.pages = 5;
                } else if (ext === 'json') {
                    content = '{"key": "value", "note": "Simulated JSON content"}';
                } else {
                    content = "Simulated text content from simple text/markdown file.";
                }

                resolve({
                    filename: file.name,
                    type: ext,
                    text: content,
                    metadata: metadata
                });
            }, 800);
        });
    }

    isValid(file) {
        if (!file || !file.name) return false;
        return this.supportedTypes.includes(this.getExtension(file.name));
    }

    getExtension(filename) {
        return filename.split('.').pop().toLowerCase();
    }
}

if (typeof window === 'undefined') {
    const parser = new DocumentParser();
    const files = [
        { name: "resume.pdf" },
        { name: "notes.md" },
        { name: "config.json" }
    ];

    files.forEach(f => {
        parser.parse(f).then(res => console.log(JSON.stringify(res, null, 2)));
    });
}

export default DocumentParser;