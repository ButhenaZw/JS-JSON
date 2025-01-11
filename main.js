// const info = {
//     name: "Adam",
//     age: 22,
//     email: "adam@mail.ru"
// };
// const infoJSON = JSON.stringify(info);
// console.log(infoJSON)
// const infojs = JSON.parse(infoJSON);
// console.log(infojs)
////////////////Task2///////////////
// function properties(jsons) {
//     return Object.keys(jsons).length;
// }
// const info = {
//     name: "Isac",
//     age:21,
//     email: "isac@mail.ru",
//     country:"Russia",
// };
// const prop = properties(info);
// console.log(`properties number: ${prop}`);
///////////////////Task3////////////////////
// const books = [
//     {
//         title: "Blood and Fire",
//         author:"George R. R. Martin",
//         publicationDate:"November 20, 2018"
//     },
//     {
//         title: "Game Of Thrones",
//         author:"George R. R. Martin",
//         publicationDate:" August 1, 1996"
//     },
//     {
//         title: "Pride and Prejudice",
//         author:"Jane Austen",
//         publicationDate:"January 28, 1813"
//     },
//     {
//         title: "Salem's Lot",
//         author:"Stephen King",
//         publicationDate:"October 17, 1975"
//     }
// ];
// function bookstitle(book){
//     return book.map(boook => boook.title);
// }
// const bookstittle = bookstitle(books);
// console.log(bookstittle)
//////////////Task4///////////////
// function calculate(json, property) {
//     const total = json.reduce((acc, obj) => acc + obj[property], 0);
//     return total / json.length;
//   }
//     const students = [
//     { name: "Ariana", grade: 85 },
//     { name: "Abel", grade: 90 },
//     { name: "Jason", grade: 78 },
//     { name: "Samira", grade: 92 }
//   ]
//   const average = calculate(students, "grade");
//   console.log(`Average Grade: ${average}`);
////////////////////Task5////////////////////
// function sorted(json, property) {
//     return json.sort((a, b) => {
//       if (a[property] < b[property]) return -1;
//       if (a[property] > b[property]) return 1;
//       return 0;
//     });
//   }
  
//   const students = [
//     { name: "Ariana", grade: 85 },
//     { name: "Abel", grade: 90 },
//     { name: "Jason", grade: 78 },
//     { name: "Samira", grade: 92 }
//   ];
//   const sortedd = sorted(students, "grade");
//   console.log(sortedd);
///////////////////////Task6///////////////
// عندي خطأ هون بس بدي اراجع الكوتش فيه
// const cities = [
//     { name: "Riyadh", population: 7800000, country: "Saudi Arabia" },
//     { name: "Dubai", population: 3500000, country: "United Arab Emirates" },
//     { name: "Cairo", population: 10200000, country: "Egypt" },
//     { name: "Muscat", population: 1590000, country: "Oman" },
//     { name: "Doha", population: 2600000, country: "Qatar" },
//     { name: "Kuwait City", population: 3200000, country: "Kuwait" }
//   ];
//   function getCitiesSortedByPopulation(jsonArray) {
//     const sortedCities = jsonArray.sort();
//   }
//   const sortedCityNames = getCitiesSortedByPopulation(cities);
//   console.log(sortedCityNames);
/////////////////////////////Task7//////////////////////
// fetch('data.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(products => {
//     console.log('Products:', products);
//     const totalRevenue = products.reduce((total, product) => {
//       return total + product.price * product.quantity;
//     }, 0);
//     console.log(`Total Revenue: $${totalRevenue}`);
//   })
//   .catch(error => console.error('Error fetching JSON:', error));
/////////////////////Task8/////////////////////////
// const username = 'ButhenaZw';
// const apiUrl = `https://api.github.com/users/${username}/repos`;
// fetch(apiUrl)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(repos => {
//     console.log(`Repositories for user: ${username}`);
//     repos.forEach(repo => {
//       console.log(repo.name);
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching repositories:', error);
//   });
