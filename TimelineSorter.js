class TimelineSorter {
    sort(events) {
        const validEvents = [];
        const undatedEvents = [];

        events.forEach(event => {
            if (event.timestamp && !isNaN(new Date(event.timestamp).getTime())) {
                validEvents.push(event);
            } else {
                undatedEvents.push(event);
            }
        });

        validEvents.sort((a, b) => {
            return new Date(a.timestamp) - new Date(b.timestamp);
        });

        return [...validEvents, ...undatedEvents];
    }
}

if (typeof window === 'undefined') {
    const sorter = new TimelineSorter();
    const data = [
        { id: 1, timestamp: "2023-12-25 08:00:00", name: "Christmas" },
        { id: 2, name: "Old photo with no date" },
        { id: 3, timestamp: "2023-01-01 00:00:00", name: "New Year" },
        { id: 4, timestamp: "invalid-date", name: "Error entry" }
    ];

    console.log(JSON.stringify(sorter.sort(data), null, 2));
}

export default TimelineSorter;