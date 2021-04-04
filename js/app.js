'use strict';
///////////////////// Seattle
let hourlyCust = [];
let hourlyAvgCookieArr = [];

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
    for (let i = 0; i < this.openTimes.length; i++) {
      hourlyCust.push(this.randomCustNum());
    }
    return hourlyCust;
  },
  hourlyAvgCookie: function () {
    // let hourlyCust = this.hourlyCust();
    for (let j = 0; j < hourlyCust.length; j++) {
      hourlyAvgCookieArr.push(Math.floor(hourlyCust[j] * this.avgCookie));
    }
    return hourlyAvgCookieArr;
  },
  totalCookie: function () {
    // let hourlyAvgCookie = this.hourlyAvgCookie();
    let total = 0;
    for (let i = 0; i < hourlyAvgCookieArr.length; i++) {
      total = total + hourlyAvgCookieArr[i];
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
  seattleLi.textContent = `${seattle.openTimes[index]}: ${hourlyAvgCookieArr[index]} cookies`;
}
let seattleLiTotal = document.createElement('li');
seattleUl.appendChild(seattleLiTotal);
seattleLiTotal.textContent = `Total: ${seattle.totalCookie()} cookies`;

///////////////////// Tokyo
let hourlyCustTokyo = [];
let hourlyAvgCookieArrTokyo = [];

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
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      hourlyCustTokyo.push(this.randomCustNum());
    }
    return hourlyCustTokyo;
  },
  hourlyAvgCookie: function () {
    // let hourlyCust = this.hourlyCust();
    for (let j = 0; j < hourlyCustTokyo.length; j++) {
      hourlyAvgCookieArrTokyo.push(
        Math.floor(hourlyCustTokyo[j] * this.avgCookie)
      );
    }
    return hourlyAvgCookieArrTokyo;
  },
  totalCookie: function () {
    // let hourlyAvgCookie = this.hourlyAvgCookie();
    let total = 0;
    for (let i = 0; i < hourlyAvgCookieArrTokyo.length; i++) {
      total = total + hourlyAvgCookieArrTokyo[i];
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
  tokyoLi.textContent = `${tokyo.openTimes[index]}: ${hourlyAvgCookieArrTokyo[index]} cookies`;
}
let tokyoLiTotal = document.createElement('li');
tokyoUl.appendChild(tokyoLiTotal);
tokyoLiTotal.textContent = `Total: ${tokyo.totalCookie()} cookies`;

///////////////////// Dubai
let hourlyCustDubai = [];
let hourlyAvgCookieArrDubai = [];

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
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      hourlyCustDubai.push(this.randomCustNum());
    }
    return hourlyCustDubai;
  },
  hourlyAvgCookie: function () {
    // let hourlyCust = this.hourlyCust();
    for (let j = 0; j < hourlyCustDubai.length; j++) {
      hourlyAvgCookieArrDubai.push(
        Math.floor(hourlyCustDubai[j] * this.avgCookie)
      );
    }
    return hourlyAvgCookieArrDubai;
  },
  totalCookie: function () {
    // let hourlyAvgCookie = this.hourlyAvgCookie();
    let total = 0;
    for (let i = 0; i < hourlyAvgCookieArrDubai.length; i++) {
      total = total + hourlyAvgCookieArrDubai[i];
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
  dubaiLi.textContent = `${dubai.openTimes[index]}: ${hourlyAvgCookieArrDubai[index]} cookies`;
}
let dubaiLiTotal = document.createElement('li');
dubaiUl.appendChild(dubaiLiTotal);
dubaiLiTotal.textContent = `Total: ${dubai.totalCookie()} cookies`;

///////////////////// Paris
let hourlyCustParis = [];
let hourlyAvgCookieArrParis = [];

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
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      hourlyCustParis.push(this.randomCustNum());
    }
    return hourlyCustParis;
  },
  hourlyAvgCookie: function () {
    // let hourlyCust = this.hourlyCust();
    for (let j = 0; j < hourlyCustParis.length; j++) {
      hourlyAvgCookieArrParis.push(
        Math.floor(hourlyCustParis[j] * this.avgCookie)
      );
    }
    return hourlyAvgCookieArrParis;
  },
  totalCookie: function () {
    // let hourlyAvgCookie = this.hourlyAvgCookie();
    let total = 0;
    for (let i = 0; i < hourlyAvgCookieArrParis.length; i++) {
      total = total + hourlyAvgCookieArrParis[i];
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
  parisLi.textContent = `${paris.openTimes[index]}: ${hourlyAvgCookieArrParis[index]} cookies`;
}
let parisLiTotal = document.createElement('li');
parisUl.appendChild(parisLiTotal);
parisLiTotal.textContent = `Total: ${paris.totalCookie()} cookies`;

///////////////////// Lima
let hourlyCustLima = [];
let hourlyAvgCookieArrLima = [];

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
  randomCustNum: function () {
    return (
      Math.floor(Math.random() * (this.maxCust - this.minCust)) + this.minCust
    );
  },
  hourlyCust: function () {
    for (let i = 0; i < this.openTimes.length; i++) {
      hourlyCustLima.push(this.randomCustNum());
    }
    return hourlyCustLima;
  },
  hourlyAvgCookie: function () {
    // let hourlyCust = this.hourlyCust();
    for (let j = 0; j < hourlyCustLima.length; j++) {
      hourlyAvgCookieArrLima.push(
        Math.floor(hourlyCustLima[j] * this.avgCookie)
      );
    }
    return hourlyAvgCookieArrLima;
  },
  totalCookie: function () {
    // let hourlyAvgCookie = this.hourlyAvgCookie();
    let total = 0;
    for (let i = 0; i < hourlyAvgCookieArrLima.length; i++) {
      total = total + hourlyAvgCookieArrLima[i];
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
  limaLi.textContent = `${lima.openTimes[index]}: ${hourlyAvgCookieArrLima[index]} cookies`;
}
let limaLiTotal = document.createElement('li');
limaUl.appendChild(limaLiTotal);
limaLiTotal.textContent = `Total: ${lima.totalCookie()} cookies`;
