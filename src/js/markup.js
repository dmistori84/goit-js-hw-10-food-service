import data from '../menu.json';
// import template from '../mk.hbs';
// console.log(template);
console.log('это это');

console.log(localStorage);
localStorage.setItem('my-data', 'wewewe');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const themeLovaleStorage = JSON.stringify(Theme);

console.log(themeLovaleStorage);

localStorage.setItem('my-data', themeLovaleStorage);