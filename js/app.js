'use strict';

const parentElement = document.getElementById('parent');
const table = document.createElement('table');
parentElement.appendChild(table);

const openTimes = [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];
const allLocations = [];
function Cookie(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hourlyCustArr = [];
  this.hourlyAvgCookieArr = [];
  this.total = 0;

  allLocations.push(this);
}
Cookie.prototype.randomCustNum = function () {
  return (
    Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
  );
};
Cookie.prototype.hourlyCust = function () {
  for (let i = 0; i < openTimes.length; i++) {
    this.hourlyCustArr.push(this.randomCustNum());
  }
};
Cookie.prototype.hourlyAvgCookie = function () {
  for (let j = 0; j < this.hourlyCustArr.length; j++) {
    this.hourlyAvgCookieArr.push(
      Math.floor(this.hourlyCustArr[j] * this.avgCookie)
    );
  }
};
Cookie.prototype.totalCookie = function () {
  for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
    this.total = this.total + this.hourlyAvgCookieArr[i];
  }
};
Cookie.prototype.render = function () {
  this.hourlyCust();
  this.hourlyAvgCookie();
  this.totalCookie();

  const tableRow = document.createElement('tr');
  table.appendChild(tableRow);

  const tableDataCityName = document.createElement('td');
  tableRow.appendChild(tableDataCityName);
  tableDataCityName.textContent = this.name;

  for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
    const tableData = document.createElement('td');
    tableRow.appendChild(tableData);
    tableData.textContent = `${this.hourlyAvgCookieArr[i]}\ncookies`;
  }

  const tableDataTotal = document.createElement('td');
  tableRow.appendChild(tableDataTotal);
  tableDataTotal.textContent = `${this.total}\ncookies`;
};

renderHeader();

const seattle = new Cookie('Seattle', 23, 65, 6.3);
const tokyo = new Cookie('Tokyo', 3, 24, 1.2);
const dubai = new Cookie('Dubai', 11, 38, 3.7);
const paris = new Cookie('Paris', 20, 38, 2.3);
const lima = new Cookie('Lima', 2, 16, 4.6);

// seattle.render();
// tokyo.render();
// dubai.render();
// paris.render();
// lima.render();
for (let i = 0; i < allLocations.length; i++) {
  allLocations[i].render();
}

function submitHandler(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const minCustomer = event.target.minCustomer.value;
  const maxCustomer = event.target.maxCustomer.value;
  const avgCookie = event.target.avgCookie.value;

  const newLocation = new Cookie(name, minCustomer, maxCustomer, avgCookie);
  const removeFooter = document.getElementById('footerTotal');
  removeFooter.remove();

  newLocation.render();

  renderFooter();
}
const form = document.getElementById('new-place-form');

form.addEventListener('submit', submitHandler);
renderFooter();
/////////// FUNCTIONS

/////////// HEADER FUNCTIONS

function renderHeader() {
  const tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  const tableHeadEmpty = document.createElement('th');
  tableRow.appendChild(tableHeadEmpty);
  tableHeadEmpty.textContent = '';
  for (let i = 0; i < openTimes.length; i++) {
    const tableHead = document.createElement('th');
    tableRow.appendChild(tableHead);
    tableHead.textContent = openTimes[i];
  }
  const tableHeadTotal = document.createElement('th');
  tableRow.appendChild(tableHeadTotal);
  tableHeadTotal.textContent = 'Daily Location Total';
}

/////////// FOOTER FUNCTIONS

function renderFooter() {
  const tableRow = document.createElement('tr');
  tableRow.setAttribute('id', 'footerTotal');
  table.appendChild(tableRow);

  const tableHeadEmpty = document.createElement('th');
  tableRow.appendChild(tableHeadEmpty);
  tableHeadEmpty.textContent = 'Totals';

  let totalOfTotals = 0;

  for (let j = 0; j < openTimes.length; j++) {
    let totalEachHour = 0;

    for (let i = 0; i < allLocations.length; i++) {
      totalEachHour += allLocations[i].hourlyAvgCookieArr[j];
    }

    totalOfTotals += totalEachHour;

    const tableFooterData = document.createElement('th');
    tableRow.appendChild(tableFooterData);
    tableFooterData.textContent = totalEachHour;
  }

  const tableFooterTotal = document.createElement('th');
  tableRow.appendChild(tableFooterTotal);
  tableFooterTotal.textContent = totalOfTotals;
}
