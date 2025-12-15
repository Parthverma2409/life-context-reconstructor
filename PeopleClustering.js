class PeopleClustering {
    constructor() {
        this.people = new Map();
        this.relationships = [];
    }

    analyze(dataInputs) {
        this.identifyPeople(dataInputs);
        this.buildRelationshipGraph(dataInputs);

        return {
            people: Array.from(this.people.values()),
            graph: this.relationships,
            totalIdentified: this.people.size
        };
    }

    identifyPeople(inputs) {
        inputs.forEach(input => {
            if (input.faces) {
                input.faces.forEach(face => {
                    const id = face.id || `person_${Math.random().toString(36).substr(2, 9)}`;
                    if (!this.people.has(id)) {
                        this.people.set(id, {
                            id: id,
                            name: face.name || "Unknown Person",
                            appearances: 1,
                            confidence: face.confidence || 0.85
                        });
                    } else {
                        const person = this.people.get(id);
                        person.appearances++;
                        this.people.set(id, person);
                    }
                });
            }
        });
    }

    buildRelationshipGraph(inputs) {
        inputs.forEach(input => {
            if (input.faces && input.faces.length > 1) {
                for (let i = 0; i < input.faces.length; i++) {
                    for (let j = i + 1; j < input.faces.length; j++) {
                        this.addRelationship(input.faces[i].id, input.faces[j].id);
                    }
                }
            }
        });
    }

    addRelationship(p1, p2) {
        const existing = this.relationships.find(r => 
            (r.source === p1 && r.target === p2) || (r.source === p2 && r.target === p1)
        );

        if (existing) {
            existing.strength += 1;
            existing.confidence = Math.min(0.99, existing.confidence + 0.05);
        } else {
            this.relationships.push({
                source: p1,
                target: p2,
                strength: 1,
                confidence: 0.75,
                type: "co-occurrence"
            });
        }
    }
}

if (typeof window === 'undefined') {
    const clusterer = new PeopleClustering();
    const mockData = [
        { id: 1, faces: [{ id: "p1", name: "Alice" }, { id: "p2", name: "Bob" }] },
        { id: 2, faces: [{ id: "p2", name: "Bob" }, { id: "p3", name: "Charlie" }] },
        { id: 3, faces: [{ id: "p1", name: "Alice" }, { id: "p3", name: "Charlie" }] }
    ];

    console.log(JSON.stringify(clusterer.analyze(mockData), null, 2));
}

export default PeopleClustering;