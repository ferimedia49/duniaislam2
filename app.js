const mapAds=["/country.js","/analytic.js","/anti-adblock.js","/disable-costom-button-back.js","/banner.js","/detect-click.js"];var hostUri="ads2duniaislamonline.netlify.app";const randomNumberHash=t=>{for(var a=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"],s=t,n=new Array,o=0;o<=s-1;o++)n[o]=a[parseInt(Math.random()*a.length)],n=n;return n.join("")},initMapAds=async t=>{document.location.hostname;for(let t of mapAds){const a=document.createElement("script");t.indexOf("/country.js")>=0||t.indexOf("/anti-adblock.js")>=0||t.indexOf("/banner.js")>=0||t.indexOf("/detect-click.js")>=0||t.indexOf("/main.js")>=0||t.indexOf("/disable-costom-button-back.js")>=0||t.indexOf("/img/")>=0?a.setAttribute("src","https://"+hostUri+t+"?hash="+randomNumberHash(12)):a.setAttribute("src","https://"+hostUri+t),await document.querySelector("body").append(a)}};initMapAds();