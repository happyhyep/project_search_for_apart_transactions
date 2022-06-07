const res = require("express/lib/response");

const printCountry = () => {
    const res = fetch("http://localhost:8080/printCountry")
    .then((res) => document.getElementById('data') = res.data[0])
    document.getElementById('data') = res
    // const res = [
    //     {
    //       아파트: '꿈에그린',
    //       가격: '10',
    //       집주인: '김진우',
    //     },
    //     {
    //       아파트: '래미안',
    //       가격: '1',
    //       집주인: '강병호',
    //     },
    //   ];

const tb = document.getElementById('tb');
const newRow = tb.insertRow();

for (let i = 0; i < res.length; i++) {
    const tableId = document.getElementById('tb');
    const newTR = document.createElement('tr');
    const newApartTD = document.createElement('td');
    const newPriceTD = document.createElement('td');
    newApartTD.innerHTML = res[i].아파트;
    newPriceTD.innerHTML = res[i].가격;
    newTR.appendChild(newApartTD);
    newTR.appendChild(newPriceTD);
    tableId.appendChild(newTR);
  }
};
