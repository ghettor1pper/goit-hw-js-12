import{S as L,a as b,i as u}from"./assets/vendor-b42c18af.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const i=document.querySelector(".gallery"),w=new L(".gallery a",{});function S(){const o=i.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*o,behavior:"smooth"})}function P(){i.innerHTML=""}function q(o,r=!1){const a=o.map(s=>`<li class="gallery-item">
      <a class="gallery-link" href="${s.largeImageURL}">
        <img
          class="gallery-image"
          src="${s.previewURL}"
        />
      </a>
      <div class="description">
        <div class="field">
          <span class="label">Likes</span>
          <span class="value">${s.likes}</span>
        </div>
        <div  class="field">
          <span class="label">Views</span>
          <span class="value">${s.views}</span>
        </div>
        <div  class="field">
          <span class="label">Comments</span>
          <span class="value">${s.comments}</span>
        </div>
        <div  class="field">
          <span class="label">Downloads</span>
          <span class="value">${s.downloads}</span>
        </div>
      </div>
    </li>`).join("");i.insertAdjacentHTML("beforeend",a),console.log("gallery = "+i.childElementCount),w.refresh(),r&&S()}async function M(o,r,a){const s=new URLSearchParams({key:"42800487-0338ab50e10ef15f71fc3313e",q:`${o.trim()}`,image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:r,page:a});console.log(s.toString());const e=`https://pixabay.com/api/?${s}`;console.log(e);const t={method:"GET"};try{const n=await b.get(e,t);return{images:n.data.hits,totalImages:n.data.totalHits}}catch(n){console.log("error = "+n)}}const p=document.querySelector(".form"),g=document.querySelector(".loader"),d=document.querySelector("#load-more");document.querySelector("#load-more-end-message");let c;const f=15;let m,l=1;function $(){d.classList.remove("hidden")}function y(){d.classList.add("hidden")}function I(){g.classList.remove("hidden")}function h(){g.classList.add("hidden")}async function v(o,r=!1){o||console.error("Search query is empty"),I();const{images:a,totalImages:s}=await M(o.trim(),f,l);if(m=Math.ceil(s/f),h(),a.length===0){u.error({message:"Sorry, there are no images matching your searchImages query. Please try again!"});return}++l,q(a,r),$(),l>m&&(h(),y(),u.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."}))}function E(o){o.preventDefault();const r=p.elements.searchBar.value;if(!r){alert`Please enter something to search for!`;return}l=1,y(),P(),c=r,v(c)}function O(o){v(c,!0)}p.addEventListener("submit",E);d.addEventListener("click",O);
//# sourceMappingURL=commonHelpers.js.map
