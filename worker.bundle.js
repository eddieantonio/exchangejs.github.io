!function(e){function t(o){if(n[o])return n[o].exports;var s=n[o]={exports:{},id:o,loaded:!1};return e[o].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";console.log("SW startup"),self.addEventListener("install",function(e){console.log("SW installed")}),self.addEventListener("activate",function(e){console.log("SW activated")}),self.addEventListener("fetch",function(e){console.log("Caught a fetch!"),e.respondWith(new Response("Hello world!"))})}]);
//# sourceMappingURL=worker.bundle.js.map