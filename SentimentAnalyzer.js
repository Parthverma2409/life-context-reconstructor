class SentimentAnalyzer {
    constructor() {
        this.positiveWords = new Set([
            "happy", "joy", "excellent", "good", "great", "love", "wonderful", 
            "fantastic", "success", "excited", "beautiful", "best", "win"
        ]);
        this.negativeWords = new Set([
            "sad", "bad", "terrible", "awful", "hate", "worst", "fail", 
            "pain", "angry", "upset", "disappointed", "poor", "loss"
        ]);
    }

    analyze(text) {
        if (!text || typeof text !== 'string') return 0;

        const words = text.toLowerCase().match(/\b\w+\b/g) || [];
        if (words.length === 0) return 0;

        let score = 0;
        words.forEach(word => {
            if (this.positiveWords.has(word)) score += 1;
            if (this.negativeWords.has(word)) score -= 1;
        });

        const normalized = Math.max(-1, Math.min(1, score / 5));
        
        return parseFloat(normalized.toFixed(2));
    }

    processBatch(files) {
        return files.map(file => ({
            filename: file.filename,
            text: file.text,
            sentimentScore: this.analyze(file.text)
        }));
    }
}

if (typeof window === 'undefined') {
    const analyzer = new SentimentAnalyzer();
    const mockFiles = [
        { filename: "diary.txt", text: "Today was a wonderful and happy day!" },
        { filename: "complaint.txt", text: "The service was terrible and I am angry." },
        { filename: "notes.txt", text: "Went to the store to buy milk." }
    ];

    console.log(JSON.stringify(analyzer.processBatch(mockFiles), null, 2));
}

export default SentimentAnalyzer;