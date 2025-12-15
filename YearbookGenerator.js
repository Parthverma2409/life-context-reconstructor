class YearbookGenerator {
    constructor() {
        this.themes = ["Adventure", "Growth", "Connection", "Discovery"];
    }

    generate(timelineEvents) {
        if (!timelineEvents || timelineEvents.length === 0) {
            return this.getEmptyTemplate();
        }

        const sorted = timelineEvents.sort((a, b) => new Date(a.date) - new Date(b.date));
        const totalEvents = sorted.length;
        const year = new Date().getFullYear();

        return {
            title: `The Story of ${year}`,
            narrative: `This year contained ${totalEvents} significant moments. It was a time defined by ${this.getRandomTheme()} and ${this.getRandomTheme()}.`,
            monthlySummaries: this.createMonthlySummaries(sorted),
            topMoments: sorted.slice(0, 3),
            majorThemes: [this.getRandomTheme(), this.getRandomTheme()]
        };
    }

    createMonthlySummaries(events) {
        const summaries = {};
        events.forEach(event => {
            const date = new Date(event.date);
            const month = date.toLocaleString('default', { month: 'long' });
            if (!summaries[month]) {
                summaries[month] = [];
            }
            summaries[month].push(event.title);
        });
        return summaries;
    }

    getRandomTheme() {
        return this.themes[Math.floor(Math.random() * this.themes.length)];
    }

    getEmptyTemplate() {
        return {
            title: "A Quiet Year",
            narrative: "No significant events were recorded this year.",
            monthlySummaries: {},
            topMoments: [],
            majorThemes: []
        };
    }
}

if (typeof window === 'undefined') {
    const generator = new YearbookGenerator();
    const mockData = [
        { date: "2023-01-15", title: "Started learning React" },
        { date: "2023-06-10", title: "Summer Roadtrip" },
        { date: "2023-12-25", title: "Holiday Party" }
    ];

    console.log(generator.generate(mockData));
}

export default YearbookGenerator;