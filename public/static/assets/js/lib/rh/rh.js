"use strict";(()=>{function I(g,r){let d=(n,e)=>(n%e+e)%e,a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~-",l="_rhs",S=function(){let n="",e=a.split("");for(;e.length>0;)n+=e.splice(Math.floor(Math.random()*e.length),1)[0];return n};class v{constructor(e=S()){this.dictionary=e}shuffle(e){if(e.startsWith(l))return e;let t="";for(let o=0;o<e.length;o++){let s=e.charAt(o),f=a.indexOf(s);s==="%"&&e.length-o>=3?(t+=s,t+=e.charAt(++o),t+=e.charAt(++o)):f===-1?t+=s:t+=this.dictionary.charAt(d(f+o,a.length))}return l+t}unshuffle(e){if(!e.startsWith(l))return e;e=e.slice(l.length);let t="";for(let o=0;o<e.length;o++){let s=e.charAt(o),f=this.dictionary.indexOf(s);s==="%"&&e.length-o>=3?(t+=s,t+=e.charAt(++o),t+=e.charAt(++o)):f===-1?t+=s:t+=a.charAt(d(f-o,a.length))}return t}}function i(n,e,t=!1){var o=new XMLHttpRequest;o.open("GET",n,!0),o.send(),o.onerror=function(){t||console.log("Cannot communicate with the server")},o.onload=function(){o.status===200?e(o.responseText):t||console.log('unexpected server response to not match "200". Server says "'+o.responseText+'"')}}var u={newsession(n){i(r?r+"/newsession":"/newsession",n)},sessionexists(n,e){r?i(r+"/sessionexists?id="+encodeURIComponent(n),function(t){if(t==="exists")return e(!0);if(t==="not found")return e(!1);console.log("unexpected response from server. received"+t)}):i("/sessionexists?id="+encodeURIComponent(n),function(t){if(t==="exists")return e(!0);if(t==="not found")return e(!1);console.log("unexpected response from server. received"+t)})},shuffleDict(n,e){console.log("Shuffling",n),r?i(r+"/api/shuffleDict?id="+encodeURIComponent(n),function(t){e(JSON.parse(t))}):i("/api/shuffleDict?id="+encodeURIComponent(n),function(t){e(JSON.parse(t))})}},y="rammerhead_sessionids",m="rammerhead_default_sessionid",h={get(){var n=localStorage.getItem(y);if(!n)return[];try{var e=JSON.parse(n);if(!Array.isArray(e))throw"getout";return e}catch(t){return[]}},set(n){if(!n||!Array.isArray(n))throw new TypeError("must be array");localStorage.setItem(y,JSON.stringify(n))},getDefault(){var n=localStorage.getItem(m);if(n){var e=h.get();if(e.filter(function(t){return t.id===n}),e.length)return e[0]}return null},setDefault(n){localStorage.setItem(m,n)}};function w(n){var e=h.get();e.unshift({id:n,createdOn:new Date().toLocaleString()}),h.set(e)}function p(){return new Promise(n=>{var e=localStorage.getItem("session-string");u.sessionexists(e,function(t){t?n(e):(console.log("Session validation failed"),u.newsession(function(o){w(o),localStorage.setItem("session-string",o),console.log(o),console.log("^ new id"),n(o)}))})})}var c;return p().then(n=>new Promise((e,t)=>{u.shuffleDict(n,function(o){var s=new v(o);r?c=r+"/"+n+"/"+s.shuffle(g):c=n+"/"+s.shuffle(g),console.log(c),e(c)})}))}window.RammerheadEncode=I;})();
//# sourceMappingURL=index.js.map
