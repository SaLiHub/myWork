"use strict";(()=>{const e=document.querySelector("#sliderContainer"),t=document.querySelector("#sliderWrapper"),s=document.querySelectorAll("#slide"),a=document.querySelector("#sliderPagination"),l=document.querySelector("#countNumber"),n=(document.querySelector("#prev"),document.querySelector("#next"),s[0].offsetHeight);s[0].offsetWidth;let c,i,r=!1,o=0,d=0;l.innerHTML=d+1>=10?"".concat(d+1):"0".concat(d+1);for(let e=0;e<s.length;e++){let e=document.createElement("span");e.classList.add("slider-pagination-bullet"),a.appendChild(e)}const u=document.querySelectorAll(".slider-pagination-bullet");u[d].classList.add("active-bullet");for(let e=0;e<u.length;e++)u[e].addEventListener("click",(()=>{o=n*e,t.style.transform="translate3d(0, -".concat(o,"px, 0)"),t.style.transitionDuration="300ms",document.querySelector(".active-slide").classList.remove("active-slide"),document.querySelector(".active-bullet").classList.remove("active-bullet"),s[e].classList.add("active-slide"),u[e].classList.add("active-bullet"),d=e,l.innerHTML=d+1>=10?"".concat(d+1):"0".concat(d+1)}));s[d].classList.add("active-slide"),o=n*d,t.style.transform="translate3d(0, -".concat(o,"px, 0)");const v=t=>{console.log("scroll"),r&&i<0?L():r&&i>0&&m(),r=!1,e.style.cursor="pointer"},m=()=>{s[0].classList.contains("active-slide")||(d--,o=n*d,t.style.transform="translate3d(0, -".concat(o,"px, 0)"),s[d+1].classList.remove("active-slide"),s[d].classList.add("active-slide"),u[d+1].classList.remove("active-bullet"),u[d].classList.add("active-bullet"),t.style.transitionDuration="300ms",l.innerHTML=d+1>=10?"".concat(d+1):"0".concat(d+1))},L=()=>{s[s.length-1].classList.contains("active-slide")||(d++,o=n*d,t.style.transform="translate3d(0, -".concat(o,"px, 0)"),s[d-1].classList.remove("active-slide"),s[d].classList.add("active-slide"),u[d-1].classList.remove("active-bullet"),u[d].classList.add("active-bullet"),t.style.transitionDuration="300ms",l.innerHTML=d+1>=10?"".concat(d+1):"0".concat(d+1))};t.addEventListener("transitionend",(()=>{t.style.transitionDuration="0ms"})),e.addEventListener("mousedown",(t=>{r=!0,c=t.pageY,e.style.cursor="grab"})),e.addEventListener("mousemove",(e=>{if(r){e.preventDefault();{const a=e.pageY-c;if(a>0&&s[0].classList.contains("active-slide"))return;if(a<0&&s[s.length-1].classList.contains("active-slide"))return;i=a,t.style.transform="translate3d(0, -".concat(o-a,"px, 0)")}}})),e.addEventListener("mouseleave",v),e.addEventListener("mouseup",v)})();