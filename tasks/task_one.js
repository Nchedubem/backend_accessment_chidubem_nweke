Q1 









const fs = require("fs");

function appendTextToFile(text) {
  const fileStream = fs.createWriteStream("citizen.txt", { flags: "a" });

  fileStream.write(text);

  fileStream.close();
}





function listenForFolderChanges(folderPath) {
  const watcher = fs.watch(folderPath, (eventType, filename) => {
    console.log(`${filename} changes`);
  });

  return watcher;
}








const os = require('os');
const arch = os.arch();

const freemem = os.freemem();
const hostname = os.hostname();

console.log(`Operating system architecture: ${arch}`);
console.log(`Operating system free memory available: ${freemem}`);
console.log(`Hostname: ${hostname}`);










async function fetchData(urls) {
  try {
    const responses = await Promise.all(urls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    }));
    return responses;
  } catch (error) {
    throw error;
  }
}
const urls = ['https://jsonplaceholder.typicode.com/posts'];
fetchData(urls).then((results) => {
  console.log(results);
}).catch((err) => {
  console.error(err);
});
