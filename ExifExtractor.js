class ExifExtractor {
    constructor() {
        this.defaultData = {
            make: "Unknown Camera",
            model: "Unknown Model",
            datetime: null
        };
    }

    async extract(file) {
        return new Promise((resolve, reject) => {
            if (!file || !file.name.match(/\.(jpg|jpeg|png)$/i)) {
                resolve(this.defaultData);
                return;
            }

            setTimeout(() => {
                const mockMetadata = {
                    make: "Canon",
                    model: "EOS 80D",
                    datetime: "2023-10-15 14:30:00",
                    software: "Adobe Photoshop 2024"
                };

                const isCorrupt = Math.random() < 0.1;

                if (isCorrupt) {
                    resolve(this.defaultData);
                } else {
                    resolve(mockMetadata);
                }
            }, 500);
        });
    }

    formatTimestamp(exifDate) {
        if (!exifDate) return "No Date";
        return exifDate.replace(/^(\d{4}):(\d{2}):(\d{2})/, '$1-$2-$3');
    }
}

if (typeof window === 'undefined') {
    const extractor = new ExifExtractor();
    const fakeFile = { name: "vacation_photo.jpg" };
    
    extractor.extract(fakeFile).then(data => {
        console.log(data);
    });
}

export default ExifExtractor;