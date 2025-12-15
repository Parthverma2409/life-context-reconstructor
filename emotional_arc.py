import json

class EmotionalArcBuilder:
    def __init__(self):
        self.pos = ["happy", "good", "great", "love", "excellent", "excited", "best", "success"]
        self.neg = ["sad", "bad", "terrible", "hate", "awful", "worst", "angry", "fail"]

    def get_score(self, text):
        score = 0
        words = text.lower().split()
        for w in words:
            w = w.strip(".,!?")
            if w in self.pos:
                score += 1
            elif w in self.neg:
                score -= 1
        return score

    def build_timeline(self, logs):
        logs.sort(key=lambda x: x['timestamp'])
        results = []

        for log in logs:
            s = self.get_score(log['text'])
            mood = "Neutral"
            if s > 0:
                mood = "Positive"
            elif s < 0:
                mood = "Negative"

            results.append({
                "timestamp": log['timestamp'],
                "sentiment": s,
                "mood": mood
            })
            
        return results

if __name__ == "__main__":
    analyzer = EmotionalArcBuilder()
    
    data = [
        {"timestamp": "2023-10-01 10:00:00", "text": "I woke up feeling terrible"},
        {"timestamp": "2023-10-01 12:00:00", "text": "Lunch was good"},
        {"timestamp": "2023-10-01 18:00:00", "text": "I love this party"}
    ]

    print(json.dumps(analyzer.build_timeline(data), indent=4))