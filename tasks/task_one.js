Q1 








  Q2
const fs = require("fs");
const { Module } = require("module");

function appendTextToFile(text) {
  const fileStream = fs.createWriteStream("citizen.txt", { flags: "a" });

  fileStream.write(text);

  fileStream.close();
}




Q3
function listenForFolderChanges(folderPath) {
  const watcher = fs.watch(folderPath, (eventType, filename) => {
    console.log(`${filename} changes`);
  });

  return watcher;
}



Q4
const os = require('os');
const arch = os.arch();

const freemem = os.freemem();
const hostname = os.hostname();

console.log(`Operating system architecture: ${arch}`);
console.log(`Operating system free memory available: ${freemem}`);
console.log(`Hostname: ${hostname}`);



Q.6. node.js



Q.7
MVC Means Model view controller




Q.8



Q.9 YES 




Q.10
500
400
501
301
401
501
302











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
