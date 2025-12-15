import json
import hashlib

class PeopleClusterer:
    def __init__(self):
        self.people = {}
        self.graph = {}

    def get_id(self, data):
        return hashlib.md5(data.encode()).hexdigest()[:8]

    def get_names(self, text):
        found = []
        words = text.split()
        skip = ["The", "And", "With", "For", "But", "This", "Meeting"]
        
        for w in words:
            clean = w.strip(".,!?")
            if clean and clean[0].isupper() and clean.isalpha():
                if clean not in skip:
                    found.append(clean)
        return found

    def update(self, group):
        unique = list(set(group))
        
        for p in unique:
            if p not in self.people:
                self.people[p] = {"count": 0, "conf": 0.5}
            
            self.people[p]["count"] += 1
            c = self.people[p]["conf"]
            self.people[p]["conf"] = min(c + 0.1, 0.99)

            if p not in self.graph:
                self.graph[p] = []

            for other in unique:
                if p != other and other not in self.graph[p]:
                    self.graph[p].append(other)

    def process(self, stream):
        for item in stream:
            group = []
            
            if 'text' in item:
                names = self.get_names(item['text'])
                group.extend(names)
            
            if 'faces' in item:
                for f in item['faces']:
                    fid = f"Face_{self.get_id(f)}"
                    group.append(fid)
            
            self.update(group)

        nodes = []
        for name, data in self.people.items():
            nodes.append({
                "id": name,
                "seen": data['count'],
                "confidence": round(data['conf'], 2)
            })

        return {
            "nodes": nodes,
            "edges": self.graph
        }

if __name__ == "__main__":
    app = PeopleClusterer()
    
    data = [
        {"text": "Dinner with Alice and Bob", "faces": []},
        {"text": "Alice brought Charlie", "faces": ["face_blob_1"]},
        {"text": "Bob and Dave meeting", "faces": []},
        {"text": "Party time", "faces": ["face_blob_1", "face_blob_2"]}
    ]

    print(json.dumps(app.process(data), indent=4))