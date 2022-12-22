const container = document.querySelector(".container");

const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image }) =>
      (output += `
              <div class="card">
                <img class="card--avatar" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Taste</a>
              </div>
              `)
  );
  container.innerHTML = output;
};
{
const form = [];
function saveForm(description, date, category, amount) {
  form.push({ description, date, category, amount });
  let f = JSON.stringify(form);
  window.localStorage.setItem('form', f);
}
var betrag = 1000;

function myFunction() {
var table = document.getElementById("myTable");
var list = JSON.parse(localStorage.getItem("form"));

for (let i = 0; i < list.length; i++) {
var row = table.insertRow(i+1);
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
var cell5 = row.insertCell(4);

cell1.innerHTML = list[i].description;
cell2.innerHTML = list[i].date;
cell3.innerHTML = list[i].category;
cell4.innerHTML = list[i].amount;
betrag = parseFloat(betrag) + parseFloat(list[i].amount);
cell5.innerHTML = betrag;
}
}
}

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}
