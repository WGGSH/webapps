if(!self.define){let e,n={};const t=(t,i)=>(t=new URL(t+".js",i).href,n[t]||new Promise((n=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=n,document.head.appendChild(e)}else e=t,importScripts(t),n()})).then((()=>{let e=n[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let r={};const u=e=>t(e,o),l={module:{uri:o},exports:r,require:u};n[o]=Promise.all(i.map((e=>l[e]||u(e)))).then((e=>(s(...e),r)))}}define(["./workbox-dbb64b4e"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_nuxt/builds/latest.json",revision:"0cc93f3fc424b02363a40bc8a4865ee7"},{url:"_nuxt/builds/meta/41398f21-8954-4737-826a-3f84e5411a59.json",revision:null},{url:"_nuxt/builds/meta/dev.json",revision:null},{url:"manifest.webmanifest",revision:"0795879b9387c0493e1be8a3f92e05d2"}],{}),e.cleanupOutdatedCaches()}));
