import json
import os
from datetime import datetime

class UnifiedPipeline:
    def __init__(self):
        self.supported_types = ["image", "audio", "video", "document"]

    def _get_exif(self, file_path):
        return {
            "created": datetime.now().isoformat(),
            "device": "unknown_device",
            "location": None
        }

    def _run_ocr(self, file_path):
        return "Sample extracted text content from image."

    def _detect_objects(self, file_path):
        return ["person", "laptop", "coffee_cup"]

    def _transcribe_audio(self, file_path):
        return "This is a transcript of the audio file."

    def _extract_video_scenes(self, file_path):
        return [
            {"timestamp": "00:05", "description": "Intro scene"},
            {"timestamp": "01:20", "description": "Action sequence"}
        ]

    def process(self, file_path, file_type):
        if file_type not in self.supported_types:
            return {"error": "Unsupported file type", "status": "failed"}

        result = {
            "status": "success",
            "file_path": file_path,
            "type": file_type,
            "metadata": {},
            "content": {}
        }

        try:
            result["metadata"] = self._get_exif(file_path)

            if file_type == "image":
                result["content"]["ocr_text"] = self._run_ocr(file_path)
                result["content"]["objects"] = self._detect_objects(file_path)
            
            elif file_type == "audio":
                result["content"]["transcript"] = self._transcribe_audio(file_path)
            
            elif file_type == "video":
                result["content"]["scenes"] = self._extract_video_scenes(file_path)
                result["content"]["objects"] = self._detect_objects(file_path)
            
            elif file_type == "document":
                result["content"]["text"] = "Document parsed content."

        except Exception as e:
            result["status"] = "partial_error"
            result["error_log"] = str(e)

        return result

if __name__ == "__main__":
    pipeline = UnifiedPipeline()
    
    files = [
        {"path": "vacation.jpg", "type": "image"},
        {"path": "meeting.mp3", "type": "audio"},
        {"path": "notes.pdf", "type": "document"}
    ]

    for f in files:
        output = pipeline.process(f["path"], f["type"])
        print(json.dumps(output, indent=4))