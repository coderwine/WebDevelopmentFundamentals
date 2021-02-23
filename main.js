// $(document).ready(() => {
//     $('#javascriptPage').load('./javascript/javascriptPage.html');
// });

// NAVBAR
const navOne = document.getElementById('navWK-1');
const navTwo = document.getElementById('navWK-2');
const navThree = document.getElementById('navWK-3');
const navFour = document.getElementById('navWK-4');
// const navFive = document.getElementById('navWK-5');
// const navSix = document.getElementById('navWK-6');
// const navSeven = document.getElementById('navWK-7');
// const navEight = document.getElementById('navWK-8');

// SIDEBAR
const sidebar = document.querySelector('.sideBar');
const sideOne = document.getElementById('wkOne-topics');
const sideTwo = document.getElementById('wkTwo-topics');
const sideThree = document.getElementById('wkThree-topics');
const sideFour = document.getElementById('wkFour-topics');

//DEFAULT DISPLAY
// sidebar.style.display = 'none';

//NAV CLICKS
navOne.addEventListener('click', () => {
    displaySideBarNotes(navOne, sideOne);    
})

//BUTTON CLICK DISPLAY
function displaySideBarNotes(bar, side) {
    //NOTE: I want this to be something when we select a certain Week, it will showcase just the topics covered in that week.
}