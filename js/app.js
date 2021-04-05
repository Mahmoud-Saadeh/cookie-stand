'use strict';
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
  hourlyCustArr: [],
  hourlyAvgCookieArr: [],
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      this.hourlyCustArr.push(this.randomCustNum());
    }
  },
  hourlyAvgCookie: function () {
    for (let j = 0; j < this.hourlyCustArr.length; j++) {
      this.hourlyAvgCookieArr.push(
        Math.floor(this.hourlyCustArr[j] * this.avgCookie)
      );
    }
  },
  totalCookie: function () {
    let total = 0;
    for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
      total = total + this.hourlyAvgCookieArr[i];
    }
    return total;
  },
};
seattle.hourlyCust();
seattle.hourlyAvgCookie();

let seattleParentElement = document.getElementById('parent');
let seattlehead = document.createElement('h2');
seattleParentElement.appendChild(seattlehead);

seattlehead.textContent = seattle.name;

let seattleUl = document.createElement('ul');
seattleParentElement.appendChild(seattleUl);

for (let index = 0; index < seattle.openTimes.length; index++) {
  let seattleLi = document.createElement('li');
  seattleUl.appendChild(seattleLi);
  seattleLi.textContent = `${seattle.openTimes[index]}: ${seattle.hourlyAvgCookieArr[index]} cookies`;
}
let seattleLiTotal = document.createElement('li');
seattleUl.appendChild(seattleLiTotal);
seattleLiTotal.textContent = `Total: ${seattle.totalCookie()} cookies`;

///////////////////// Tokyo

let tokyo = {
  name: 'Tokyo',
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
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,
  hourlyCustArr: [],
  hourlyAvgCookieArr: [],
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      this.hourlyCustArr.push(this.randomCustNum());
    }
  },
  hourlyAvgCookie: function () {
    for (let j = 0; j < this.hourlyCustArr.length; j++) {
      this.hourlyAvgCookieArr.push(
        Math.floor(this.hourlyCustArr[j] * this.avgCookie)
      );
    }
  },
  totalCookie: function () {
    let total = 0;
    for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
      total = total + this.hourlyAvgCookieArr[i];
    }
    return total;
  },
};
tokyo.hourlyCust();
tokyo.hourlyAvgCookie();

let tokyoParentElement = document.getElementById('parent');
let tokyohead = document.createElement('h2');
tokyoParentElement.appendChild(tokyohead);

tokyohead.textContent = tokyo.name;

let tokyoUl = document.createElement('ul');
tokyoParentElement.appendChild(tokyoUl);

for (let index = 0; index < tokyo.openTimes.length; index++) {
  let tokyoLi = document.createElement('li');
  tokyoUl.appendChild(tokyoLi);
  tokyoLi.textContent = `${tokyo.openTimes[index]}: ${tokyo.hourlyAvgCookieArr[index]} cookies`;
}
let tokyoLiTotal = document.createElement('li');
tokyoUl.appendChild(tokyoLiTotal);
tokyoLiTotal.textContent = `Total: ${tokyo.totalCookie()} cookies`;

///////////////////// Dubai

let dubai = {
  name: 'Dubai',
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
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,
  hourlyCustArr: [],
  hourlyAvgCookieArr: [],
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      this.hourlyCustArr.push(this.randomCustNum());
    }
  },
  hourlyAvgCookie: function () {
    for (let j = 0; j < this.hourlyCustArr.length; j++) {
      this.hourlyAvgCookieArr.push(
        Math.floor(this.hourlyCustArr[j] * this.avgCookie)
      );
    }
  },
  totalCookie: function () {
    let total = 0;
    for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
      total = total + this.hourlyAvgCookieArr[i];
    }
    return total;
  },
};
dubai.hourlyCust();
dubai.hourlyAvgCookie();

let dubaiParentElement = document.getElementById('parent');
let dubaihead = document.createElement('h2');
dubaiParentElement.appendChild(dubaihead);

dubaihead.textContent = dubai.name;

let dubaiUl = document.createElement('ul');
dubaiParentElement.appendChild(dubaiUl);

for (let index = 0; index < dubai.openTimes.length; index++) {
  let dubaiLi = document.createElement('li');
  dubaiUl.appendChild(dubaiLi);
  dubaiLi.textContent = `${dubai.openTimes[index]}: ${dubai.hourlyAvgCookieArr[index]} cookies`;
}
let dubaiLiTotal = document.createElement('li');
dubaiUl.appendChild(dubaiLiTotal);
dubaiLiTotal.textContent = `Total: ${dubai.totalCookie()} cookies`;

///////////////////// Paris

let paris = {
  name: 'Paris',
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
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hourlyCustArr: [],
  hourlyAvgCookieArr: [],
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      this.hourlyCustArr.push(this.randomCustNum());
    }
  },
  hourlyAvgCookie: function () {
    for (let j = 0; j < this.hourlyCustArr.length; j++) {
      this.hourlyAvgCookieArr.push(
        Math.floor(this.hourlyCustArr[j] * this.avgCookie)
      );
    }
  },
  totalCookie: function () {
    let total = 0;
    for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
      total = total + this.hourlyAvgCookieArr[i];
    }
    return total;
  },
};
paris.hourlyCust();
paris.hourlyAvgCookie();

let parisParentElement = document.getElementById('parent');
let parishead = document.createElement('h2');
parisParentElement.appendChild(parishead);

parishead.textContent = paris.name;

let parisUl = document.createElement('ul');
parisParentElement.appendChild(parisUl);

for (let index = 0; index < paris.openTimes.length; index++) {
  let parisLi = document.createElement('li');
  parisUl.appendChild(parisLi);
  parisLi.textContent = `${paris.openTimes[index]}: ${paris.hourlyAvgCookieArr[index]} cookies`;
}
let parisLiTotal = document.createElement('li');
parisUl.appendChild(parisLiTotal);
parisLiTotal.textContent = `Total: ${paris.totalCookie()} cookies`;

///////////////////// Lima

let lima = {
  name: 'Lima',
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
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
  hourlyCustArr: [],
  hourlyAvgCookieArr: [],
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      this.hourlyCustArr.push(this.randomCustNum());
    }
  },
  hourlyAvgCookie: function () {
    for (let j = 0; j < this.hourlyCustArr.length; j++) {
      this.hourlyAvgCookieArr.push(
        Math.floor(this.hourlyCustArr[j] * this.avgCookie)
      );
    }
  },
  totalCookie: function () {
    let total = 0;
    for (let i = 0; i < this.hourlyAvgCookieArr.length; i++) {
      total = total + this.hourlyAvgCookieArr[i];
    }
    return total;
  },
};
lima.hourlyCust();
lima.hourlyAvgCookie();

let limaParentElement = document.getElementById('parent');
let limahead = document.createElement('h2');
limaParentElement.appendChild(limahead);

limahead.textContent = lima.name;

let limaUl = document.createElement('ul');
limaParentElement.appendChild(limaUl);

for (let index = 0; index < lima.openTimes.length; index++) {
  let limaLi = document.createElement('li');
  limaUl.appendChild(limaLi);
  limaLi.textContent = `${lima.openTimes[index]}: ${lima.hourlyAvgCookieArr[index]} cookies`;
}
let limaLiTotal = document.createElement('li');
limaUl.appendChild(limaLiTotal);
limaLiTotal.textContent = `Total: ${lima.totalCookie()} cookies`;
