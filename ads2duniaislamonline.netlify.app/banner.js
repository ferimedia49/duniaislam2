var delayInMilliseconds = 10000;
setTimeout(function() {
const mapNextAds=["https://ads2duniaislamonline.netlify.app/costom-botton-shoope.js"],initBannerJs=t=>new Promise(e=>{let s=document.createElement("script");s.setAttribute("src",t),document.body.append(s),s.onload=(()=>{e()})}),initBannerCss=t=>new Promise(e=>{let s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("type","text/css"),s.setAttribute("href",t),document.head.append(s),e()}),getDataOffers=async t=>{let e=null;return new Promise(s=>{fetch(t).then(t=>t.json()).then(function(t){try{const a=t.offers,o=a[parseInt(Math.random()*a.length)];s(e=o)}catch(t){s(e)}}).catch(t=>{s(e)})})};function loadNextAds(){(()=>{for(let t of mapNextAds){const e=document.createElement("script");e.setAttribute("src",t),document.querySelector("body").append(e)}window.scrollTo({top:0})})()}let statusClickSwallClose=!1;function closeSwallFromAdClick(){statusClickSwallClose=!0,Swal.close()}(async()=>{await initBannerJs("https://ads2duniaislamonline.netlify.app/sweetalert2.min.js"),await initBannerCss("https://ads2duniaislamonline.netlify.app/sweetalert2.min.css"),Swal.fire({title:"",html:'<a href="https://shope.ee/4fJau0wu5y" target="_blank" rel="nofollow" onclick="closeSwallFromAdClick()"><img src="https://ads2duniaislamonline.netlify.app/img/shopee_mall.jpg" /></a>',showCloseButton:!0,showCancelButton:!1,focusConfirm:!1,confirmButtonText:"Please Wait...",didOpen:async()=>{let t=Swal.getConfirmButton();await t.setAttribute("disabled",!0),await new Promise(e=>{setTimeout(()=>{t.removeAttribute("disabled"),t.innerText="Close ADS",e()},2e3)})},willClose:()=>{0==statusClickSwallClose&&(locCountry&&"ID"==locCountry?window.open("https://shope.ee/4fJau0wu5y","_blank"):window.open("https://shope.ee/4fJau0wu5y","_blank")),loadNextAds()}})})();
}, delayInMilliseconds);