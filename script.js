/*
* Author: Isiah Abad
* Last Updated: 7/6/21
* Copyright @MochiMunchi2021
*/

let hamburger = document.getElementById("hamburger-container");
let nav = document.getElementById("nav-links");
let lines = document.getElementsByClassName("line");
let links = document.getElementsByClassName("links");
let fixedPage = document.getElementById("main-container");
let lines_classLength = lines.length;
let links_classLength = links.length;


function openNav(){
    //check for 'active' classlist
    if(hamburger.classList[1] === "active"){
        console.log("Removed active");
        hamburger.classList.remove("active");
        nav.classList.remove("active");
        fixedPage.classList.remove("active");

        for(let i = 0; i < lines_classLength; i++){
            lines[i].classList.remove("active");
        }
        for(let j = 0; j < links_classLength; j++){
            links[j].classList.remove("active");
        }
    }
    else{
        console.log("Added active");
        hamburger.classList.add("active");
        nav.classList.add("active");
        fixedPage.classList.add("active");
        for(let i = 0; i < lines_classLength; i++){
            lines[i].classList.add("active");
        }
        for(let j = 0; j < links_classLength; j++){
            links[j].classList.add("active");
        }
       
    }
    
}

//**************************************menu functions********************************************

//let mochiNumber = document.getElementById('incrButton').addEventListener("click", increaseNum);

// let packNumber2 = document.getElementById("mochiNumber2");
// let packNumber3 = document.getElementById("mochiNumber3");
// let packNumber4 = document.getElementById("mochiNumber4");


let matchaItem = document.getElementById('matchaItem');
let popUpMatcha = document.getElementById('popUpMatcha');
let menuClassItems = document.getElementsByClassName('addPopUp-container');
let cover = document.getElementById('cover');
let found = false;
let open = false;
const menuItemsArray = ['matcha', 'strawberry', 'chocolate', 'custom'];

function openMenuPopUp(itemName){

    //check for different items
    console.log(itemName);
    open = true;
    //fixedPage.classList.add("active");
    if(searchMenu(itemName)){
        cover.style.display = 'block';
    }

}

function closeMenuPopUp(itemName){
    open = false;
    //fixedPage.classList.remove("active");
    if(searchMenu(itemName)){
        cover.style.display = 'none';
    }
}

function searchMenu(itemName){


    for(let i = 0; i < menuItemsArray.length; i++){
        if(itemName === menuItemsArray[i]){
            if(!open){
                menuClassItems[i].classList.remove('popUp-active');
                found = true;
                return found;
            }
            menuClassItems[i].classList.add('popUp-active');
            found = true;
            return found;
        }
        
    }

    return found; //returns false if not found
}

function increaseNum(mochiNumber){

    console.log(mochiNumber);
    let packNumber = document.getElementById(mochiNumber);
    let num = parseInt(packNumber.getAttribute('value')) + 1;
    packNumber.setAttribute('value', num);

    console.log(packNumber.getAttribute('value'));
    


}

function decreaseNum(mochiNumber){

    console.log(mochiNumber);
    let packNumber = document.getElementById(mochiNumber);
    let num = parseInt(packNumber.getAttribute('value'));
    if(num != 0){
        num = parseInt(packNumber.getAttribute('value')) - 1;
        packNumber.setAttribute('value', num);
    }
    
    console.log(packNumber.getAttribute('value'));
    


}