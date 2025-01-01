//Q1
// Array 
const fruits = [
    { name: "Apple", img: "img/apple.webp" },
    { name: "Banana", img: "img/banana.webp" },
    { name: "Mango", img: "img/mango.jpg" },
    { name: "Orange", img: "img/orange.jpg" },
    { name: "Grapes", img: "img/grapes.webp" }
];
// Select 
const fruitsList = document.getElementById('fruitsList');

// Create Elements & Append
for (let i = 0; i < fruits.length; i++) {
    const li = document.createElement('li');
    const text = document.createTextNode(fruits[i].name);
    const img = document.createElement('img');
    img.src = fruits[i].img;

    li.appendChild(img);
    li.appendChild(text);
    fruitsList.appendChild(li);
}


//Q2
function findNumInArray(arr,number) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == number){
            return i;
        }
    }
    return -1;
}
const arr = [4 ,2 ,5];
alert(findNumInArray(arr,0));