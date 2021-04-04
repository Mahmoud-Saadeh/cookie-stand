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

let tokyoParentElement = document.getElementById('parent');
let tokyohead = document.createElement('h2');
tokyoParentElement.appendChild(tokyohead);

tokyohead.textContent = tokyo.name;

let tokyoUl = document.createElement('ul');
tokyoParentElement.appendChild(tokyoUl);

for (let index = 0; index < tokyo.openTimes.length; index++) {
  let tokyoLi = document.createElement('li');
  tokyoUl.appendChild(tokyoLi);
  tokyoLi.textContent = `${tokyo.openTimes[index]}: ${
    tokyo.hourlyAvgCookie()[index]
  } cookies`;
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

let dubaiParentElement = document.getElementById('parent');
let dubaihead = document.createElement('h2');
dubaiParentElement.appendChild(dubaihead);

dubaihead.textContent = dubai.name;

let dubaiUl = document.createElement('ul');
dubaiParentElement.appendChild(dubaiUl);

for (let index = 0; index < dubai.openTimes.length; index++) {
  let dubaiLi = document.createElement('li');
  dubaiUl.appendChild(dubaiLi);
  dubaiLi.textContent = `${dubai.openTimes[index]}: ${
    dubai.hourlyAvgCookie()[index]
  } cookies`;
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

let parisParentElement = document.getElementById('parent');
let parishead = document.createElement('h2');
parisParentElement.appendChild(parishead);

parishead.textContent = paris.name;

let parisUl = document.createElement('ul');
parisParentElement.appendChild(parisUl);

for (let index = 0; index < paris.openTimes.length; index++) {
  let parisLi = document.createElement('li');
  parisUl.appendChild(parisLi);
  parisLi.textContent = `${paris.openTimes[index]}: ${
    paris.hourlyAvgCookie()[index]
  } cookies`;
}
let parisLiTotal = document.createElement('li');
parisUl.appendChild(parisLiTotal);
parisLiTotal.textContent = `Total: ${paris.totalCookie()} cookies`;
