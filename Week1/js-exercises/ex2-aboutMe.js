/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */
document.body.style.fontFamily = "Arial, sans-serif";

let myName = document.getElementById('nickname')
myName.innerText = "Memo";

let myFavFood = document.getElementById('fav-food')
myFavFood.innerText = "Falafel";

let myHomeTown = document.getElementById('hometown')
myHomeTown.innerText = "Syria";

let listItems = document.getElementsByTagName('li');
for (let i = 0; i < listItems.length ; i++){
    listItems[i].className = 'list-item';
}
let myPic = document.createElement('img');
myPic.src = 'me.jpg';
document.body.appendChild(myPic);

