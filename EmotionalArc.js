class EmotionalArc {
    constructor() {
        this.timeline = [];
    }

    addEvent(date, score) {
        this.timeline.push({ date: new Date(date), score });
    }

    build() {
        this.timeline.sort((a, b) => a.date - b.date);

        return this.timeline.map(event => ({
            date: event.date.toISOString().split('T')[0],
            mood: this.categorize(event.score),
            score: event.score
        }));
    }

    categorize(score) {
        if (score > 0.5) return "Happy";
        if (score < -0.5) return "Sad";
        return "Neutral";
    }
}

if (typeof window === 'undefined') {
    const arc = new EmotionalArc();
    arc.addEvent("2023-01-10", 0.8);
    arc.addEvent("2023-01-05", -0.2);
    arc.addEvent("2023-02-14", 0.9);
    arc.addEvent("2023-03-01", -0.6);

    console.log(arc.build());
}

export default EmotionalArc;