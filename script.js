fetch("sounds.json")
  .then(response => response.json())
  .then(sounds => {
    const soundListDiv = document.getElementById('sound-list');
    const searchBox = document.getElementById('search-box');

    function renderSounds(filter = "") {
      soundListDiv.innerHTML = "";
      sounds
        .filter(filename => filename.toLowerCase().includes(filter.toLowerCase()))
        .forEach(filename => {
          const container = document.createElement('div');
          container.className = 'sound';

          // 🔹 Remove extension for display
          const displayName = filename.replace(/\.[^/.]+$/, "");

          const name = document.createElement('span');
          name.className = 'sound-name';
          name.textContent = displayName;

          const audio = document.createElement('audio');
          audio.controls = true;
          audio.src = `sounds/${filename}`;

          container.appendChild(name);
          container.appendChild(audio);

          soundListDiv.appendChild(container);
        });
    }

    renderSounds();
    searchBox.addEventListener('input', () => renderSounds(searchBox.value));
  });