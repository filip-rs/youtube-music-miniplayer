# YouTube Music Miniplayer Extension

A simple browser extension for automatically forcing YouTube Music to always play in the miniplayer mode whenever a song is clicked. This is designed to avoid the full-screen video mode and make your listening experience more compact and enjoyable. 

## Warning

Currently the script searches for a button named "Åpne minispilleren" in norwegian. This WILL vary from language to language, so make sure to change it in **content.js**:

```js
const miniPlayerButton = document.querySelector('tp-yt-paper-icon-button[title="Whatever-the-closebutton-is-called-in-your-language"] tp-yt-iron-icon');
```

## Disclaimer

This script is fully coded by chatgpt

## Features

- Automatically forces YouTube Music to enter miniplayer mode after song change.
- Minimal user interaction required.
- Customizable delay to ensure proper loading before forcing miniplayer.
- Prevents excessive triggers using a debounce mechanism.

## Installation

### 1. Clone the repository or download the code

You can either clone this repository or download it as a zip.

```bash
git clone https://github.com/filip-rs/youtube-music-miniplayer.git
```

### 2. Load the extension in Chrome

1. Open Chrome and go to chrome://extensions/ 2. Enable Developer mode at the top right of the page. 3. Click on Load unpacked and select the folder containing the extension files. 4. The extension should now be installed and working.

### 3. (Optional) Customize the Delay

The default delay is 3 seconds before forcing the miniplayer, and 3 seconds debounce time between triggers. You can adjust these times in the content.js file:
```js
setTimeout(() => {
forceMiniplayer();
}, 3000); // Adjust the delay before forcing miniplayer

if (currentTime - lastMutationTime > 3000) { // Adjust debounce time
  forceMiniplayer();
}
```

## How It Works

This extension listens for changes in the DOM of YouTube Music to detect when a new song starts playing. When a song change is detected, it waits a few seconds to ensure the page has loaded properly and then forces the player into miniplayer mode by clicking the "Miniplayer" button.

It uses a MutationObserver to monitor changes in the DOM and debounce the calls to avoid multiple triggers in a short period.

### Core Functions: - forceMiniplayer(): Finds and clicks the miniplayer button to enter the miniplayer mode. - MutationObserver: Observes changes in the DOM (like when a new song starts) and triggers the miniplayer button click when necessary. - Debouncing: Ensures that the miniplayer isn't forced too frequently, improving performance and user experience.

## Contributing

If you want to contribute to this project, feel free to fork the repository and submit a pull request. Make sure to follow these steps:

1. Fork the repository 2. Create a feature branch (git checkout -b feature-branch) 3. Commit your changes (git commit -am 'Add new feature') 4. Push to the branch (git push origin feature-branch) 5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

Thanks to chatgpt for cooking this all in literally like 5 minutes.