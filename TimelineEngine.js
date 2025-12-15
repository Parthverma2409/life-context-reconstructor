class TimelineEngine {
    constructor() {
        this.events = [];
    }

    addEvent(event) {
        if (event) {
            this.events.push(event);
        }
    }

    parseDate(timestamp) {
        if (!timestamp) return null;
        const date = new Date(timestamp);
        return isNaN(date.getTime()) ? null : date;
    }

    resolveConflicts(events) {
        const uniqueEvents = [];
        const seenIds = new Set();

        for (const evt of events) {
            if (!seenIds.has(evt.id)) {
                seenIds.add(evt.id);
                uniqueEvents.push(evt);
            }
        }
        return uniqueEvents;
    }

    generate() {
        const withTime = [];
        const withoutTime = [];

        this.events.forEach(evt => {
            if (this.parseDate(evt.timestamp)) {
                withTime.push(evt);
            } else {
                withoutTime.push(evt);
            }
        });

        withTime.sort((a, b) => {
            return this.parseDate(a.timestamp) - this.parseDate(b.timestamp);
        });

        const sortedUnique = this.resolveConflicts(withTime);

        return [...sortedUnique, ...withoutTime];
    }
}

if (typeof window === 'undefined') {
    const engine = new TimelineEngine();
    engine.addEvent({ id: 1, timestamp: "2023-12-25", title: "Christmas" });
    engine.addEvent({ id: 2, timestamp: "2023-01-01", title: "New Year" });
    engine.addEvent({ id: 1, timestamp: "2023-12-25", title: "Christmas Duplicate" }); 
    engine.addEvent({ id: 3, timestamp: null, title: "Undated Event" });

    console.log(engine.generate());
}

export default TimelineEngine;