//your JS code here. If required.
function updateOutput() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  }).then((message) => {
    document.getElementById("output").innerHTML = message;
  });
}

updateOutput();
