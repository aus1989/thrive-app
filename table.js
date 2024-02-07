fetch("https://api.coinlore.net/api/tickers/?start=0&limit=10").then((data) => {
  return data.json();
}).then((objectData) => {
  // console.log(objectData.data[0].name);
  let tableData = "";
  objectData.data.map((coin) => {
    tableData += `
    <tr>
      <td>${coin.rank}</td>
      <td>${coin.name} &#xb7; ${coin.symbol}</td>
      <td>$${coin.price_usd}</td>
      <td>${coin.percent_change_1h}%</td>
      <td id="mkt">${coin.market_cap_usd}</td>
    </tr>`
  });
  document.getElementById("table-body").innerHTML = tableData;
})

