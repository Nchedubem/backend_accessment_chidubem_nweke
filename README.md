[5:02 AM, 9/21/2023] Chidubem Nwachinere: const fs = require("fs");

function appendTextToFile(text) {
  // Open the file in append mode.
  const fileStream = fs.createWriteStream("citizen.txt", { flags: "a" });

  // Write the text to the file.
  fileStream.write(text);

  // Close the file.
  fileStream.close();
}
[5:06 AM, 9/21/2023] Chidubem Nwachinere: const fs = require("fs");

function listenForFolderChanges(folderPath) {
  // Create a watcher object for the folder.
  const watcher = fs.watch(folderPath, (eventType, filename) => {
    // Print the task in the format "fileName changes" to the console.
    console.log(`${filename} changes`);
  });

  // Return the watcher object.
  return watcher;
}