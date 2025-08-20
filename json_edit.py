import os, json

sound_dir = "sounds"
files = [f for f in os.listdir(sound_dir) if os.path.isfile(os.path.join(sound_dir, f))]

with open("sounds.json", "w") as f:
    json.dump(files, f, indent=2)

print(f"Generated sounds.json with {len(files)} entries.")