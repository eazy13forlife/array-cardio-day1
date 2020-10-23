
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const inventors1500=inventors.filter((inventor)=>{
  return inventor.year>=1500&&inventor.year<=1600
})
console.log(inventors1500)

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const fullName=inventors.map((inventor)=>{
  return `${inventor.first} ${inventor.last}`
})
console.log(fullName)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventors.sort((a,b)=>{
  if(a.year<b.year){
    return -1;
  }else if(b.year<a.year){
    return 1;
  }else{
    return 0
  }
})
console.table(inventors)
// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
const yearsLived=inventors.reduce((total,inventor)=>{
  return total+(inventor.passed-inventor.year)
},0);
console.log(yearsLived)
// 5. Sort the inventors by years lived
inventors.sort((a,b)=>{
  if(a.passed-a.year<b.passed-b.year){
    return 1;
  }else if(b.passed-b.year<a.passed-a.year){
    return -1
  }else{
    return 0
  }
})
console.table(inventors)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const links=Array.from(document.querySelectorAll(".mw-category-group li"));
const cityNames=links.map((link)=>{
  return link.textContent;
})

const de=cityNames.filter((city)=>{
  return city.includes("de")
})
console.log(de)
// 7. sort Exercise
// Sort the people alphabetically by last name
console.table(people)
const sortPeopleAlpha=()=>{
  const alphabeticalArray= people.map((person)=>{
     const reverseSplitArray=person.split(", ").reverse().join(", ");
     return reverseSplitArray;
  })
  return alphabeticalArray.sort((a,b)=>{
    const aItem=a.split(", ")[1];
    const bItem=b.split(", ")[1]
    if(aItem<bItem){
      return -1;
    }else if(bItem<aItem){
      return 1;
    }
  })
}
console.log(sortPeopleAlpha());



// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
/*
const total=data.reduce((totalObj,item)=>{
  if(item==="car"){
    totalObj[item]++;
  }else if(item==="truck"){
    totalObj[item]++
  }else if(item==="bike"){
    totalObj[item]++
  }else if(item==="van"){
    totalObj[item]++
  }
  return totalObj;
},{car:0,
truck:0,
bike:0,
van:0,})
*/


const total=data.reduce((totalObject,item)=>{
if(!totalObject[item]){
  totalObject[item]=1;
  console.log("hi")
}else{
  totalObject[item]++;
  console.log("totalObject")
}


return totalObject;
},{})
