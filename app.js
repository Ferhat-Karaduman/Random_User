const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  getPerson(getData);
});

function getPerson(cb) {
    const url = "https://randomuser.me/api/";
    const request = new XMLHttpRequest();
  
    request.open("GET", url, true);
    request.onload = function () {
      if (this.status === 200) {
        cb(this.responseText, showData);
      }
    };
  
    request.send();
  }