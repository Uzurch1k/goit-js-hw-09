import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{S as r}from"./assets/vendor-c9def49e.js";const t=document.querySelector(".gallery");function i(){return images.map(({preview:a,original:l,description:e})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img class="gallery-image" src="${a}" alt="${e}" />
        </a>
      </li>`).join("")}t.innerHTML=i();new r(".gallery a",{captionsData:"alt",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
