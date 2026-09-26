function go(p){
    document.querySelector(".mobileNav")?.classList.add("hide");
    if(p === 'home') location.href = 'index.html';
    else location.href = p + '.html';
}

function protectImages(){
document.querySelectorAll("img").forEach(img=>{
img.addEventListener("error",()=>{
if(img.dataset.fallback) return;
img.dataset.fallback="1";
const label=(img.alt||"HealthHands").replace(/[<>&"]/g,"");
img.src="data:image/svg+xml;charset=UTF-8,"+encodeURIComponent(
'<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="700" viewBox="0 0 1200 700"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#0b3144"/><stop offset=".55" stop-color="#087c73"/><stop offset="1" stop-color="#19b8c8"/></linearGradient></defs><rect width="1200" height="700" fill="url(#g)"/><circle cx="600" cy="270" r="105" fill="#ffffff12"/><path d="M600 214v112M544 270h112" stroke="#fff" stroke-width="18" stroke-linecap="round" opacity=".9"/><text x="600" y="380" text-anchor="middle" font-family="Arial,sans-serif" font-size="38" font-weight="700" fill="#fff">HealthHands</text><text x="600" y="425" text-anchor="middle" font-family="Arial,sans-serif" font-size="20" fill="#e2fbfb">'+label+'</text></svg>'
);
},{once:true});
});
}

function initReveal(){
const items=document.querySelectorAll(".section,.pageHero,.card,.stat,.timeline .card,.profile,.bentoBig,.serviceFeature");
items.forEach(el=>el.classList.add("reveal"));
if(!("IntersectionObserver" in window)){items.forEach(el=>el.classList.add("in-view"));return;}
const io=new IntersectionObserver((entries,observer)=>{
entries.forEach(entry=>{
if(entry.isIntersecting){entry.target.classList.add("in-view");observer.unobserve(entry.target);}
});
},{threshold:.08,rootMargin:"0px 0px -35px"});
items.forEach(el=>io.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
    protectImages();
    initReveal();
});

window.onscroll=()=>document.getElementById("topBtn")?.classList.toggle("show",scrollY>400);
