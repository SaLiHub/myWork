"use strict";let hamburger=document.querySelector(".header__hamburger"),hamburgerMenuText=document.querySelector(".header__hamburger-text"),hamburgerMenu=document.querySelector(".header__hamburger-menu"),headerCloseSign=document.querySelector(".header__toggle-menu-cross-sign"),pageBody=document.querySelector(".page__body"),headerToggleMenuLink=document.querySelectorAll(".header__toggle-menu-link"),headerToggleMenu=document.querySelector(".header__toggle-menu");function closeMenu(){pageBody.style.overflow="visible",pageBody.classList.add("opacity_off"),setTimeout((()=>{hamburgerMenu.classList.remove("active"),pageBody.classList.remove("opacity_off")}),500),hamburgerMenu.style.cursor="pointer"}hamburger.addEventListener("click",(()=>{pageBody.style.overflow="hidden",pageBody.classList.add("opacity_off"),hamburgerMenu.style.cursor="auto",setTimeout((()=>{hamburgerMenu.classList.add("active"),pageBody.classList.remove("opacity_off")}),500)})),hamburgerMenuText.addEventListener("click",(()=>{pageBody.style.overflow="hidden",pageBody.classList.add("opacity_off"),hamburgerMenu.style.cursor="auto",setTimeout((()=>{hamburgerMenu.classList.add("active"),pageBody.classList.remove("opacity_off")}),500)})),headerCloseSign.addEventListener("click",(()=>{closeMenu()})),headerToggleMenuLink.forEach((e=>{e.addEventListener("click",(()=>{closeMenu()}))}));const firebaseConfig={apiKey:"AIzaSyA4apyHWSRjMvYyvrzegqNv5weVktk-XMs",authDomain:"wooder-1fb11.firebaseapp.com",projectId:"wooder-1fb11",storageBucket:"wooder-1fb11.appspot.com",messagingSenderId:"852775924188",appId:"1:852775924188:web:5107a8944b53cc1a705f19"};function databaseInit(){return firebase.database().ref("/").once("value")}firebase.initializeApp(firebaseConfig),databaseInit().then((e=>{let t=e.val(),a=document.querySelector(".swiper-wrapper");for(let e=0;e<t.sliderContent.length;e++){let n=document.createElement("div");n.classList.add("swiper-slide");let o=document.createElement("div");o.classList.add("banner__content"),o.innerHTML='\n        <div class="banner__title-container">\n            <h2 class="banner__title">'.concat(t.sliderContent[e].title,'</h2>\n        </div>\n        <div class="banner__text-container">\n            <p class="banner__text">').concat(t.sliderContent[e].text,"</p>\n        </div>\n        "),n.appendChild(o),a.appendChild(n)}let n="vertical",o=!1;window.innerWidth<1010&&(n="horizontal",o=!0);new Swiper(".swiper-container",{direction:"".concat(n),pagination:{el:".swiper-pagination",clickable:!0}});window.addEventListener("resize",(()=>{window.innerWidth<1010?0==o&&(console.log("small"),o=!0,location=location):1==o&&(console.log("big"),o=!1,location=location)}))}));