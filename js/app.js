///////////////////// Seattle
let seattle = {
  name: 'Seattle',
  openTimes: [
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
  ],
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    let hourlyCust = [];
    for (let i = 0; i < this.openTimes.length; i++) {
      hourlyCust.push(this.randomCustNum());
    }
    return hourlyCust;
  },
  hourlyAvgCookie: function () {
    let hourlyCust = this.hourlyCust();
    let hourlyAvgCookieArr = [];
    for (let j = 0; j < hourlyCust.length; j++) {
      hourlyAvgCookieArr.push(Math.floor(hourlyCust[j] * this.avgCookie));
    }
    return hourlyAvgCookieArr;
  },
  totalCookie: function () {
    let hourlyAvgCookie = this.hourlyAvgCookie();
    let total = 0;
    for (let i = 0; i < hourlyAvgCookie.length; i++) {
      total = total + hourlyAvgCookie[i];
    }
    return total;
  },
};

let seattleParentElement = document.getElementById('parent');
let seattlehead = document.createElement('h2');
seattleParentElement.appendChild(seattlehead);

seattlehead.textContent = seattle.name;

let seattleUl = document.createElement('ul');
seattleParentElement.appendChild(seattleUl);

for (let index = 0; index < seattle.openTimes.length; index++) {
  let seattleLi = document.createElement('li');
  seattleUl.appendChild(seattleLi);
  seattleLi.textContent = `${seattle.openTimes[index]}: ${
    seattle.hourlyAvgCookie()[index]
  } cookies`;
}
let seattleLiTotal = document.createElement('li');
seattleUl.appendChild(seattleLiTotal);
seattleLiTotal.textContent = `Total: ${seattle.totalCookie()} cookies`;
