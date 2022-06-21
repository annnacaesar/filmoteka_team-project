function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire37c5;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequire37c5=a),a("kyEFX").register(JSON.parse('{"5ZPII":"index.51c575ab.js","9cBl5":"noImageAvailable.4bf2d6d5.jpg","b9auz":"index.152a0ed9.js"}')),a("72Z32");var i=e(a("amrNH")).template({1:function(e,t,n,r,a){var i,o=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",l=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'  <li class="films__item" data-id='+l(typeof(i=null!=(i=u(n,"id")||(null!=t?u(t,"id"):t))?i:s)===c?i.call(o,{name:"id",hash:{},data:a,loc:{start:{line:2,column:34},end:{line:2,column:40}}}):i)+'>\n\n    <a href="" class="films__wrapper">\n      <div class="films__img-wrapper">\n        <img class="films__img" src="'+l(typeof(i=null!=(i=u(n,"img")||(null!=t?u(t,"img"):t))?i:s)===c?i.call(o,{name:"img",hash:{},data:a,loc:{start:{line:6,column:37},end:{line:6,column:44}}}):i)+'" alt="'+l(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(o,{name:"title",hash:{},data:a,loc:{start:{line:6,column:51},end:{line:6,column:60}}}):i)+'" loading="lazy" />\n      </div>\n\n      <div class="films__info">\n        <p class="films__name">'+l(typeof(i=null!=(i=u(n,"title")||(null!=t?u(t,"title"):t))?i:s)===c?i.call(o,{name:"title",hash:{},data:a,loc:{start:{line:10,column:31},end:{line:10,column:40}}}):i)+'</p>\n\n        <p class="films__description">\n          '+l(typeof(i=null!=(i=u(n,"genre")||(null!=t?u(t,"genre"):t))?i:s)===c?i.call(o,{name:"genre",hash:{},data:a,loc:{start:{line:13,column:10},end:{line:13,column:19}}}):i)+"\n          |\n          "+l(typeof(i=null!=(i=u(n,"releaseDate")||(null!=t?u(t,"releaseDate"):t))?i:s)===c?i.call(o,{name:"releaseDate",hash:{},data:a,loc:{start:{line:15,column:10},end:{line:15,column:25}}}):i)+"\n        </p>\n      </div>\n    </a>\n    \n  </li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,r,a){var i;return null!=(i=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:21,column:9}}}))?i:""},useData:!0}),o={28:"Action",12:"Adventure",16:"Animation",35:"Comedy",80:"Crime",99:"Documentary",18:"Drama",10751:"Family",14:"Fantasy",36:"History",27:"Horror",10402:"Music",9648:"Mystery",10749:"Romance",878:"Science Fiction",10770:"TV Movie",53:"Thriller",10752:"War",37:"Western"};[1,2,3,4,5,6,7].slice(0,4);var s,c=a("gC8Yz");s=new URL(a("kyEFX").resolve("9cBl5"),import.meta.url).toString();const{API_KEY:l,BASE_URL:u,IMG_URL:d}=c.default,h=e=>e.map((e=>o[`${e}`])),p=e=>e.map((e=>e.name)),f=({genres:t=null,genre_ids:n=null,id:r,original_title:a,overview:i,popularity:o,poster_path:c,release_date:l,vote_average:u,vote_count:f})=>{return{genre:n?h(n):p(t),id:r,title:a,about:i,popularity:o,img:(g=c,g?`${d}${g}`:`${e(s)}`),releaseDate:l?(m=l,m?m.slice(0,4):data):"",vote:u,votes:f};var m,g};function m(e,t){const n=e.map((e=>{let t=f(e);return t.genre.length<=3?t.genre=t.genre.join(", "):t.genre=[t.genre[0],t.genre[1],"Other"].join(", "),t}));t.insertAdjacentHTML("beforeend",i(n))}const g=document.querySelector(".js-films-list-index");function b(){g.innerHTML=""}var v=a("72Z32");const y=document.querySelector(".search-span");function _(e,t){const n=`View the trending list for the day, page ${t}`,r=`View the list by keywords "${e}", page ${t}`;y.innerHTML=""===e?n:r}const E=new(0,v.default),w={arrowLeft:document.querySelector("button[aria-label='previous-page'"),arrowRight:document.querySelector("button[aria-label='next-page'"),pagination:document.querySelector(".pagination"),firstButton:document.querySelector(".firstButton-and-threeDots"),lastButton:document.querySelector(".lastButton-and-threeDots"),filmsContainerIndex:document.querySelector(".js-films-list-index"),inputError:document.querySelector(".input__error"),searchSpan:document.querySelector(".search-span")};let S,I=1;function C(e,t){if(I>S)return;I=e,S=t;let n=I-2,r=I+2;I!==S&&I+1!==S||(n=I-3,r=S),I+3===S&&(r=S),n<3&&(n=1,r=5),S<=5&&(n=I,r=S);for(let e=n;e<=r;e+=1)if(e===I){const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton active">${e}</button>`;w.pagination.insertAdjacentHTML("beforeend",t)}else{const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton">${e}</button>`;w.pagination.insertAdjacentHTML("beforeend",t)}if(n>=3){if(M())return;!function(){const e='<button id="paginationButton" data-page="1" class="button-page paginationButton">1</button>',t="<span class='page-buttons__first-points'>···</span>";w.firstButton.insertAdjacentHTML("beforeend",e),w.firstButton.insertAdjacentHTML("beforeend",t)}()}if(n<3&&M()&&(w.firstButton.innerHTML=""),I===S||I+1===S||I+2===S||I+3===S)return w.lastButton.innerHTML="",void(w.lastButton.style.marginRight=0);null===document.querySelector(".page-buttons__last-points")&&(!function(e){const t=`<button id="paginationButton" data-page="${e}" class="button-page paginationButton">${e}</button>`,n="<span class='page-buttons__last-points'>···</span>";w.lastButton.insertAdjacentHTML("beforeend",n),w.lastButton.insertAdjacentHTML("beforeend",t),w.lastButton.style.marginRight="10px"}(S),w.arrowLeft.onclick=A,w.arrowRight.onclick=O,w.pagination.onclick=B,w.firstButton.onclick=D,w.lastButton.onclick=L)}function D(e){"BUTTON"===e.target.nodeName&&(I=1,N(E.query,I))}function L(e){"BUTTON"===e.target.nodeName&&(I=S,N(E.query,I))}function A(){1!==I&&(I-=1,N(E.query,I))}function O(){I!==S&&(I+=1,N(E.query,I))}function T(){w.pagination.innerHTML="",w.firstButton.innerHTML="",w.lastButton.innerHTML=""}function B(e){e.preventDefault(),e.target!==e.currentTarget&&(I=Number(e.target.dataset.page),N(E.query,I))}function M(){return null!==document.querySelector(".page-buttons__first-points")}function N(e,t){if(""===e)return _(e,t),I=t,E.page=I,E.query="",sessionStorage.setItem("query",E.query),sessionStorage.setItem("page",I),E.fetchPopular().then((({results:e,total_pages:t})=>{b(),m(e,w.filmsContainerIndex),T(),C(E.page,t)})),void k();_(e,t),function(e,t){E.query=e,E.page=t,sessionStorage.setItem("query",e),sessionStorage.setItem("page",t),E.fetchMoviesySearch().then((({results:e,total_pages:t})=>{0!==e.length?(b(),m(e,w.filmsContainerIndex),T(),C(E.page,t)):w.inputError.textContent="Search result not successful. Enter the correct movie name and smile : )"}))}(e,t),k()}function k(){window.scrollTo(pageXOffset,0)}const $=document.querySelector(".logo"),j=document.querySelector("#modal-btn-auth");window.addEventListener("load",(function(){let e=sessionStorage.getItem("query"),t=sessionStorage.getItem("page"),n=sessionStorage.getItem("sign-in");null===e&&(e="");null===t&&(t=1);n&&(j.textContent="log out");N(e,Number(t))})),$.addEventListener("click",(function(e){e.preventDefault();N("",1)}));var H=/^\s+|\s+$/g,P=/^[-+]0x[0-9a-f]+$/i,R=/^0b[01]+$/i,x=/^0o[0-7]+$/i,q=parseInt,F="object"==typeof t&&t&&t.Object===Object&&t,V="object"==typeof self&&self&&self.Object===Object&&self,W=F||V||Function("return this")(),U=Object.prototype.toString,z=Math.max,G=Math.min,J=function(){return W.Date.now()};function K(e,t,n){var r,a,i,o,s,c,l=0,u=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function p(t){var n=r,i=a;return r=a=void 0,l=t,o=e.apply(i,n)}function f(e){return l=e,s=setTimeout(g,t),u?p(e):o}function m(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-l>=i}function g(){var e=J();if(m(e))return b(e);s=setTimeout(g,function(e){var n=t-(e-c);return d?G(n,i-(e-l)):n}(e))}function b(e){return s=void 0,h&&r?p(e):(r=a=void 0,o)}function v(){var e=J(),n=m(e);if(r=arguments,a=this,c=e,n){if(void 0===s)return f(c);if(d)return s=setTimeout(g,t),p(c)}return void 0===s&&(s=setTimeout(g,t)),o}return t=Q(t)||0,Z(n)&&(u=!!n.leading,i=(d="maxWait"in n)?z(Q(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),v.cancel=function(){void 0!==s&&clearTimeout(s),l=0,r=c=a=s=void 0},v.flush=function(){return void 0===s?o:b(J())},v}function Z(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function Q(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==U.call(e)}(e))return NaN;if(Z(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=Z(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(H,"");var n=R.test(e);return n||x.test(e)?q(e.slice(2),n?2:8):P.test(e)?NaN:+e}const X=new(0,(v=a("72Z32")).default),Y=document.querySelector(".input__wraper"),ee=document.querySelector(".input__error");document.querySelector(".js-films-list-index");Y.addEventListener("submit",(function(e){if(e.preventDefault(),X.query=e.currentTarget.searchQuery.value.trim(),ee.textContent=" ",X.resetPage(),!X.query)return void(ee.textContent="Please enter something to search ");N(X.query,X.page)})),a("jxohN");let te={};const ne=[],re=[],ae=(e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}},ie=e=>{try{const t=localStorage.getItem(e);return null===t?void 0:JSON.parse(t)}catch(e){console.error("Get state error: ",e.message)}};function oe(e){const t=document.querySelector(".btn-watch.is-active");e.currentTarget.classList.toggle("is-active");const n=ie("allWatchedMovies");if(t){let e;n.forEach((({id:t},n)=>t===te.id?e=n:n)),ne.splice(e,1),ae("allWatchedMovies",ne)}!!n&&n.find((({id:e})=>e===te.id))||(ne.push(te),ae("allWatchedMovies",ne))}function se(e){const t=document.querySelector(".btn-queue.is-active");e.currentTarget.classList.toggle("is-active");const n=ie("allQueueMovies");if(t){let t;e.currentTarget.textContent="add to Queue",n.forEach((({id:e},n)=>e===te.id?t=n:n)),re.splice(t,1),ae("allQueueMovies",re)}!!n&&n.find((({id:e})=>e===te.id))||(re.push(te),ae("allQueueMovies",re))}var ce=a("9B8F0"),le=(v=a("72Z32"),c=a("gC8Yz"),a("cgPbV"));const{IMG_URL:ue}=c.default,de=new(0,v.default);async function he(e){const t=await de.getMovieDetails(e).then((e=>e)),n=f(t);return te=n,n}({cardContainer:document.querySelector(".films__container")}).cardContainer.addEventListener("click",(async function(e){if(e.preventDefault(),"DIV"!==e.target.nodeName&&"UL"!==e.target.nodeName){if("IMG"===e.target.nodeName){const n=e.target.parentElement.parentElement.parentElement.dataset.id;t(await he(n))}if("P"===e.target.nodeName){const n=e.target.parentElement.parentElement.parentElement.dataset.id;t(await he(n))}}function t({id:e,img:t,title:n,popularity:r,vote:a,votes:i,about:o,genre:s}){const c=ce.create(`\n    <div class="modal__container">\n      <div class="modal__close">\n        <div class="modal__close-first"></div>\n        <div class="modal__close-second"></div>\n      </div>\n      <div class="modal-wrap">\n        <div class="modal__picture-wrap">\n          <img\n          class="modal__picture"\n          src="${t}"\n          alt="film-picture"\n          />\n          <button class="modal__button-play trailer-button" data-id="${e}">\n            <img class="modal__img-play" src="https://www.freepnglogos.com/uploads/play-button-png/play-button-file-youtube-play-buttom-icon-svg-wikimedia-commons-27.png" alt="play trailer" width="100" height="100" />\n\t\t\t\t\t</button>\n        </div>\n        <div class="modal__desc-wrap">\n          <h2 class="modal-heading">${n}</h2>\n          <div class="modal__rating-wrap">\n            <ul class="modal__rating-left-list">\n              <li class="modal__rating-left-item">Vote / Votes</li>\n              <li class="modal__rating-left-item">Popularity</li>\n              <li class="modal__rating-left-item">Original Title</li>\n              <li class="modal__rating-left-item">Genre</li>\n            </ul>\n            <ul class="modal__rating-right-list">\n              <li class="modal__rating-right-item">\n                <span class="modal__rating-right-item--color">${a}</span> /\n                <span class="modal__rating-right-item--shadow">${i}</span>\n              </li>\n              <li class="modal__rating-right-item">${r}</li>\n              <li class="modal__rating-right-item modal__rating-right-item--uppercase">${n}</li>\n              <li class="modal__rating-right-item">${s}</li>\n            </ul>\n          </div>\n          <div class="modal__content-wrap">\n            <h4 class="modal__content-heading">About</h4>\n            <p class="modal__content">\n              ${o}\n            </p>\n          </div>\n          <div class="modal__button-wrap" data-id="${e}">\n            <button class="modal__button btn-watch">add to Watched</button>\n            <button class="modal__button btn-queue">add to queue</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  `,{onShow:e=>{window.addEventListener("keydown",l),window.addEventListener("click",u),e.element().querySelector(".modal__close").onclick=e.close},onClose:e=>{window.removeEventListener("keydown",l),window.removeEventListener("click",u)}});function l(e){"Escape"===e.code&&(c.element().classList.contains("visually-hidden")||c.close())}function u(e){"basicLightbox__placeholder"===e.target.classList.value&&c.close()}c.show()}const n=e.target.parentElement.parentElement.parentElement.dataset.id;(0,le.addListener)(n),document.querySelector(".btn-watch").addEventListener("click",oe),document.querySelector(".btn-queue").addEventListener("click",se)})),a("iiPHV"),a("cgPbV");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const pe=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=63&a|128):55296==(64512&a)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++r)),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=63&a|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=63&a|128)}return t},fe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const a=e[t],i=t+1<e.length,o=i?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=a>>2,u=(3&a)<<4|o>>4;let d=(15&o)<<2|c>>6,h=63&c;s||(h=64,i||(d=64)),r.push(n[l],n[u],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(pe(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const i=e[n++];t[r++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){const i=((7&a)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(1023&i))}else{const i=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&a)<<12|(63&i)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const a=n[e.charAt(t++)],i=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==a||null==i||null==o||null==s)throw Error();const c=a<<2|i>>4;if(r.push(c),64!==o){const e=i<<4&240|o>>2;if(r.push(e),64!==s){const e=o<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},me=function(e){return function(e){const t=pe(e);return fe.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ge{wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ve.prototype.create)}}class ve{create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,a=this.errors[e],i=a?function(e,t){return e.replace(ye,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(a,n):"Error",o=`${this.serviceName}: ${i} (${r}).`;return new be(r,o,n)}constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}}const ye=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const a of n){if(!r.includes(a))return!1;const n=e[a],i=t[a];if(Ee(n)&&Ee(i)){if(!_e(n,i))return!1}else if(n!==i)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function Ee(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Se{get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ge;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),a=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;a.add(e),this.onInitCallbacks.set(r,a);const i=this.instances.get(r);return i&&e(i,r),()=>{a.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,"[DEFAULT]"===r?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:"[DEFAULT]":e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class Ie{addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Se(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}constructor(e){this.name=e,this.providers=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ce=[];var De,Le;(Le=De||(De={}))[Le.DEBUG=0]="DEBUG",Le[Le.VERBOSE=1]="VERBOSE",Le[Le.INFO=2]="INFO",Le[Le.WARN=3]="WARN",Le[Le.ERROR=4]="ERROR",Le[Le.SILENT=5]="SILENT";const Ae={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Oe=De.INFO,Te={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},Be=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),a=Te[t];if(!a)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[a](`[${r}]  ${e.name}:`,...n)};let Me,Ne;const ke=new WeakMap,$e=new WeakMap,je=new WeakMap,He=new WeakMap,Pe=new WeakMap;let Re={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return $e.get(e);if("objectStoreNames"===t)return e.objectStoreNames||je.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Fe(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function xe(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Ne||(Ne=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Ve(this),t),Fe(ke.get(this))}:function(...t){return Fe(e.apply(Ve(this),t))}:function(t,...n){const r=e.call(Ve(this),t,...n);return je.set(r,t.sort?t.sort():[t]),Fe(r)}}function qe(e){return"function"==typeof e?xe(e):(e instanceof IDBTransaction&&function(e){if($e.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{t(),r()},i=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));$e.set(e,t)}(e),t=e,(Me||(Me=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Re):e);var t}function Fe(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{t(Fe(e.result)),r()},i=()=>{n(e.error),r()};e.addEventListener("success",a),e.addEventListener("error",i)}));return t.then((t=>{t instanceof IDBCursor&&ke.set(t,e)})).catch((()=>{})),Pe.set(t,e),t}(e);if(He.has(e))return He.get(e);const t=qe(e);return t!==e&&(He.set(e,t),Pe.set(t,e)),t}const Ve=e=>Pe.get(e);function We(e,t,{blocked:n,upgrade:r,blocking:a,terminated:i}={}){const o=indexedDB.open(e,t),s=Fe(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(Fe(o.result),e.oldVersion,e.newVersion,Fe(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),s.then((e=>{i&&e.addEventListener("close",(()=>i())),a&&e.addEventListener("versionchange",(()=>a()))})).catch((()=>{})),s}const Ue=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],Ge=new Map;function Je(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Ge.get(t))return Ge.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!a&&!Ue.includes(n))return;const i=async function(e,...t){const i=this.transaction(e,a?"readwrite":"readonly");let o=i.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),a&&i.done]))[0]};return Ge.set(t,i),i}Re=(e=>({...e,get:(t,n,r)=>Je(t,n)||e.get(t,n,r),has:(t,n)=>!!Je(t,n)||e.has(t,n)}))(Re);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}constructor(e){this.container=e}}const Ze=new class{get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Ae[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}constructor(e){this.name=e,this._logLevel=Oe,this._logHandler=Be,this._userLogHandler=null,Ce.push(this)}}("@firebase/app"),Qe={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},Xe=new Map,Ye=new Map;function et(e,t){try{e.container.addComponent(t)}catch(n){Ze.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function tt(e){const t=e.name;if(Ye.has(t))return Ze.debug(`There were multiple attempts to register component ${t}.`),!1;Ye.set(t,e);for(const t of Xe.values())et(t,e);return!0}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const nt=new ve("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new we("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e,t,n){var r;let a=null!==(r=Qe[e])&&void 0!==r?r:e;n&&(a+=`-${n}`);const i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const e=[`Unable to register library "${a}" with version "${t}":`];return i&&e.push(`library name "${a}" contains illegal characters (whitespace or "/")`),i&&o&&e.push("and"),o&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void Ze.warn(e.join(" "))}tt(new we(`${a}-version`,(()=>({library:a,version:t})),"VERSION"))}let it=null;function ot(){return it||(it=We("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore("firebase-heartbeat-store")}}).catch((e=>{throw nt.create("storage-open",{originalErrorMessage:e.message})}))),it}async function st(e,t){var n;try{const n=(await ot()).transaction("firebase-heartbeat-store","readwrite"),r=n.objectStore("firebase-heartbeat-store");return await r.put(t,ct(e)),n.done}catch(e){throw nt.create("storage-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message})}}function ct(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=ut();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=ut(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const a of e){const e=n.find((e=>e.agent===a.agent));if(e){if(e.dates.push(a.date),ht(n)>t){e.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),ht(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=me(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new dt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}}function ut(){return(new Date).toISOString().substring(0,10)}class dt{async runIndexedDBEnvironmentCheck(){return"object"==typeof indexedDB&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){var t;try{return(await ot()).transaction("firebase-heartbeat-store").objectStore("firebase-heartbeat-store").get(ct(e))}catch(e){throw nt.create("storage-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function ht(e){return me(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt;pt="",tt(new we("platform-logger",(e=>new Ke(e)),"PRIVATE")),tt(new we("heartbeat",(e=>new lt(e)),"PRIVATE")),at("@firebase/app","0.7.26",pt),at("@firebase/app","0.7.26","esm2017"),at("fire-js","");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
at("firebase","9.8.3","app");const ft={apiKey:"AIzaSyC3mAeoJSkVgXp7W5wSmHtE9e1wFGsySmc",authDomain:"filmoteka-209ce.firebaseapp.com",projectId:"filmoteka-209ce",storageBucket:"filmoteka-209ce.appspot.com",messagingSenderId:"68393581409",appId:"1:68393581409:web:5521fb7cea0b94cd42e320"};!function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw nt.create("bad-app-name",{appName:String(r)});const a=Xe.get(r);if(a){if(_e(e,a.options)&&_e(n,a.config))return a;throw nt.create("duplicate-app",{appName:r})}const i=new Ie(r);for(const e of Ye.values())i.addComponent(e);const o=new rt(e,n,i);Xe.set(r,o)}(ft);function mt(e,t){return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${ft.apiKey}`,{method:"POST",body:JSON.stringify({email:e,password:t,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}const gt=new class{create(e){return fetch("https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json",{method:"POST",body:JSON.stringify(e),header:{"Content-Type":"application/json"}}).then((e=>e.json())).then((t=>(e.nameId=t.name,e))).then((e=>function(e){const t=JSON.parse(localStorage.getItem("film")||"[]");console.log(t),t.push(e),((e,t)=>{try{const n=JSON.stringify(t);localStorage.setItem(e,n)}catch(e){console.error("Set state error: ",e.message)}})("film",t)}(e)))}fetch(e){return e?fetch(`https://filmoteka-209ce-default-rtdb.firebaseio.com/films.json?auth=${e}`).then((e=>e.json())).then((e=>(console.log("films:",e),e&&e.error?`<p class="error">${e.error}</p>`:e?Object.keys(e).map((t=>({...e[t],id:t}))):[]))):Promise.resolve('<p class="error"> you don\'t have a token</p>')}},bt=document.querySelector("#modal-btn-auth"),vt=document.querySelector(".auth__backdrop"),yt=document.querySelector("#js-auth__error");function _t(e){e.preventDefault();mt(e.target.querySelector("#email").value.trim(),e.target.querySelector("#password").value.trim()).then((e=>gt.fetch(e))).then(Et)}function Et(e){"string"==typeof e?yt.textContent="INVALID EMAIL OR PASSWORD":(yt.textContent="",vt.classList.add("visually-hidden"),bt.textContent="log out",sessionStorage.setItem("sign-in","true")),console.log(e)}function wt(e){"Escape"===e.code&&vt.classList.add("visually-hidden")}function St(e){e.target===e.currentTarget&&vt.classList.add("visually-hidden")}bt.addEventListener("click",(function(e){if(console.log(bt.textContent),"log out"!==bt.textContent){vt.classList.remove("visually-hidden");document.querySelector(".auth__form").addEventListener("submit",_t)}else sessionStorage.removeItem("sign-in"),bt.textContent="sign in";window.addEventListener("keydown",wt),vt.addEventListener("click",St)}));
//# sourceMappingURL=index.51c575ab.js.map
