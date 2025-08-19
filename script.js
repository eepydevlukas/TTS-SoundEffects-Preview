 // List of your audio file names
    const sounds = [
      "falsch",
      "metal pipe",
      "vine boom",
      "rizz",
      "wow"
      // Add more files here
    ];

    const soundListDiv = document.getElementById('sound-list');

    const searchBox = document.getElementById('search-box');

    function renderSounds(filter = "") {
        soundListDiv.innerHTML = ""; // Clear previous list
        sounds
        .filter(filename => filename.toLowerCase().includes(filter.toLowerCase()))
        .forEach(filename => {
        const container = document.createElement('div');
        container.className = 'sound';

        const name = document.createElement('span');
        name.className = 'sound-name';
        name.textContent = filename;

        const audio = document.createElement('audio');
        audio.controls = true;
        audio.src = `sounds/${filename}` + ".mp3";

        container.appendChild(name);
        container.appendChild(audio);

        soundListDiv.appendChild(container);
        });
    }

    // Initial render
    renderSounds();

    // Update as user types
    searchBox.addEventListener('input', () => {
    renderSounds(searchBox.value);
    });