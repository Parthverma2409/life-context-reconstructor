import json
from datetime import datetime, timedelta

class TimelineEngine:
    def __init__(self):
        self.fmt = "%Y-%m-%d %H:%M:%S"

    def parse(self, t_str):
        try:
            return datetime.strptime(t_str, self.fmt)
        except ValueError:
            return None

    def fix_conflicts(self, events):
        if not events:
            return []

        clean = [events[0]]
        
        for i in range(1, len(events)):
            prev = clean[-1]
            curr = events[i]
            
            if prev['timestamp'] == curr['timestamp']:
                dt = self.parse(curr['timestamp'])
                if dt:
                    dt += timedelta(seconds=1)
                    curr['timestamp'] = dt.strftime(self.fmt)
                    curr['note'] = "Time adjusted"
            
            clean.append(curr)
            
        return clean

    def reconstruct(self, data):
        valid = []
        for e in data:
            if self.parse(e.get('timestamp', '')):
                valid.append(e)

        valid.sort(key=lambda x: datetime.strptime(x['timestamp'], self.fmt))

        return self.fix_conflicts(valid)

if __name__ == "__main__":
    engine = TimelineEngine()
    
    raw = [
        {"timestamp": "2024-01-01 12:00:00", "event": "Lunch"},
        {"timestamp": "2024-01-01 09:00:00", "event": "Wake up"},
        {"timestamp": "2024-01-01 12:00:00", "event": "Check email"},
        {"timestamp": "2024-01-01 18:30:00", "event": "Dinner"}
    ]

    print(json.dumps(engine.reconstruct(raw), indent=4))