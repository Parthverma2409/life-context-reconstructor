import json
from datetime import datetime

class YearbookGenerator:
    def __init__(self):
        self.keywords = {
            "Travel": ["flight", "train", "trip", "hotel", "beach", "mountain"],
            "Work": ["meeting", "deadline", "project", "code", "office", "email"],
            "Social": ["party", "dinner", "friend", "birthday", "celebration"],
            "Fitness": ["run", "gym", "workout", "hike", "sport"]
        }

    def get_themes(self, events):
        text_blob = " ".join([e['text'].lower() for e in events])
        themes = []
        
        for category, words in self.keywords.items():
            for w in words:
                if w in text_blob:
                    themes.append(category)
                    break
        return list(set(themes))

    def get_monthly(self, events):
        grouped = {}
        for e in events:
            dt = datetime.strptime(e['timestamp'], "%Y-%m-%d")
            m = dt.strftime("%B")
            if m not in grouped:
                grouped[m] = []
            grouped[m].append(e['text'])
        
        summary = {}
        for m, txts in grouped.items():
            highlight = max(txts, key=len)
            summary[m] = f"{len(txts)} memories. Highlight: {highlight}"
        
        return summary

    def generate(self, events):
        themes = self.get_themes(events)
        monthly = self.get_monthly(events)
        
        top = [e['text'] for e in events if "!" in e['text']]
        if not top:
            top = [events[0]['text']]

        story = f"Year Theme: {', '.join(themes)}\n\n"
        story += "MONTHLY RECAP:\n"
        for m, s in monthly.items():
            story += f"- {m}: {s}\n"
        
        story += "\nTOP MOMENTS:\n"
        for t in top:
            story += f"* {t}\n"

        return story

if __name__ == "__main__":
    gen = YearbookGenerator()
    
    data = [
        {"timestamp": "2024-01-15", "text": "Started a new coding project!"},
        {"timestamp": "2024-03-10", "text": "Trip to the beach with friends."},
        {"timestamp": "2024-06-20", "text": "Big deadline at work today."},
        {"timestamp": "2024-12-31", "text": "New Year party was amazing!"}
    ]

    print(gen.generate(data))