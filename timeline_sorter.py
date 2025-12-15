import json
from datetime import datetime

class TimelineSorter:
    def __init__(self):
        self.fmt = "%Y-%m-%d %H:%M:%S"

    def parse(self, date_str):
        try:
            return datetime.strptime(date_str, self.fmt)
        except:
            return None

    def sort_items(self, items):
        valid = []
        no_date = []

        for item in items:
            if 'timestamp' in item and self.parse(item['timestamp']):
                valid.append(item)
            else:
                no_date.append(item)

        valid.sort(key=lambda x: self.parse(x['timestamp']))
        
        return valid + no_date

if __name__ == "__main__":
    sorter = TimelineSorter()
    
    data = [
        {"id": 1, "timestamp": "2023-12-25 08:00:00", "name": "Christmas"},
        {"id": 2, "name": "Old photo with no date"},
        {"id": 3, "timestamp": "2023-01-01 00:00:00", "name": "New Year"},
        {"id": 4, "timestamp": "broken-date", "name": "Error entry"}
    ]

    result = sorter.sort_items(data)
    print(json.dumps(result, indent=4))