# Mac Screenshot Mover

This is a Node.js script that moves all the screenshot files on your Mac desktop to a folder named `screenshots`. The script works by searching for all files on the desktop that match the name pattern of a Mac screenshot file (`"Screen Shot *.*"`) and then moves those files to the specified folder.

## Prerequisites

- Node.js (https://nodejs.org/en/)

## Installation

1. Clone this repository or download the script file (`move.js`) to your local machine.
2. Open your terminal and navigate to the directory where the `move.js` file is located.
3. Install the required dependencies by running the command `npm install`.
4. Create a folder on your desktop named `screenshots`. This is the folder where the screenshot files will be moved.
5. Run the script by running the command `node move.js`.

## Customizing the Script

- You can modify the file name pattern by changing the `fileNamePattern` variable in the `move.js` file.
- You can modify the destination folder by changing the `folderPath` variable in the `move.js` file.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
