import os, json

sounds = os.listdir("sounds")
with open("sounds.json", "w") as f:
    json.dump(sounds, f, indent=2)