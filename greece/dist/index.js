"use strict";let inputs=document.querySelectorAll("input");inputs.forEach((e=>e.setAttribute("autocomplete","off")));let i,placesCardTitles=document.querySelectorAll(".places-card__title"),wraperTitles=document.querySelectorAll(".places-card-wrapper__title");for(i=0;i<placesCardTitles.length;i++)wraperTitles[i].innerHTML=placesCardTitles[i].innerHTML;const swiper=new Swiper(".swiper-container",{cssMode:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination"},mousewheel:!0,keyboard:!0});let viewAllOffers=document.querySelector(".more-cards__button"),cards=document.querySelector(".cards"),cardAllInfo={cardInfo:[{title:"El Grece",price:"225$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Zhytomyr",price:"230$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Ioannina",price:"235$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Peristeri",price:"240$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Galatsi",price:"245$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Palaio Faliro",price:"250$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Lamia",price:"255$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Katerini",price:"260$","button-text":"View More","background-image":"url(images/card1.jpg)"},{title:"Chania",price:"265$","button-text":"View More","background-image":"url(images/card1.jpg)"}]},cardIndex=0,cardCreate=()=>{for(let e=cardIndex;e<cardIndex+4;e++)if(cardAllInfo.cardInfo[e]){let t=document.createElement("div");t.className="card",t.style.backgroundImage=cardAllInfo.cardInfo[e]["background-image"],t.innerHTML='<div class="card__content">\n          <h5 class="card__title">'.concat(cardAllInfo.cardInfo[e].title,'</h5>\n          <span class="card__price">').concat(cardAllInfo.cardInfo[e].price,'</span></div>\n          <button class="card__button button">').concat(cardAllInfo.cardInfo[e]["button-text"],"</button>"),cards.appendChild(t)}else viewAllOffers.remove();cardIndex+=4};cardCreate(cardIndex,cardIndex+2),viewAllOffers.addEventListener("click",cardCreate);let toggleMenuLinks=document.querySelectorAll(".link"),hamRotate=document.querySelector(".hamRotate");for(let e=0;e<toggleMenuLinks.length;e++)toggleMenuLinks[e].addEventListener("click",(()=>{hamRotate.classList.remove("active")}));let placesCardButons=document.querySelectorAll(".places-card-buttons"),placesCard=document.querySelectorAll(".places-card");function loopingPlacesCards(){for(let e=0;e<placesCard.length;e++)placesCardButons[e].style.fontSize="".concat(placesCard[e].offsetHeight/50+10,"px"),placesCardTitles[e].style.fontSize="".concat(placesCard[e].offsetWidth/10-5,"px"),wraperTitles[e].style.fontSize="".concat(placesCard[e].offsetWidth/10-5,"px");console.log("luck")}loopingPlacesCards(),window.addEventListener("resize",loopingPlacesCards);