(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[11],{100:function(t,e,c){"use strict";c.r(e),c.d(e,"default",(function(){return f}));var n=c(14),a=c(2),s=c(16),r=c.n(s),i=c(88),o=c(10),l=c(6),u=function(t){var e=t.api_key,c=t.groupId,a=t.scenes;return Object(l.jsxs)(l.Fragment,{children:[Object.entries(a).filter((function(t){return t[1].group===c})).map((function(t){var c=Object(n.a)(t,2),a=c[0],s=c[1];return Object(l.jsx)("div",{className:"sceneContainer",onClick:function(){return function(t){r.a.put("http://localhost/api/".concat(e,"/groups/0/action"),{scene:t})}(a)},children:Object(l.jsx)("p",{style:{color:"#ccc"},children:s.name})},a)})),Object(l.jsx)("div",{className:"clear"})]})},j=c(89),h=c(85),d=function(t){var e=t.api_key,c=t.id,n=t.light,a=function(t){console.log("Apply state "+JSON.stringify(t)),r.a.put("http://localhost/api/".concat(e,"/lights/").concat(c,"/state"),t)};return Object(l.jsxs)("div",{className:"lightContainer ".concat(n.state.on?"textDark":"textLight"),style:function(){if(n.state.on)return{background:"xy"===n.state.colormode?Object(h.a)(n.state.xy[0],n.state.xy[1],254):"ct"===n.state.colormode?Object(h.b)(n.state.ct):"linear-gradient(90deg, rgba(255,212,93,1))"}}(),children:[Object(l.jsx)("div",{className:"iconContainer",children:Object(l.jsx)(o.j,{})}),Object(l.jsx)("div",{className:"textContainer",children:Object(l.jsxs)("p",{children:[n.name," ",n.state.reachable||Object(l.jsx)(j.a,{title:"Unrechable"})]})}),Object(l.jsx)("div",{className:"switchContainer",children:Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",defaultChecked:n.state.on,onChange:function(t){return a({on:t.currentTarget.checked})}}),Object(l.jsx)("span",{className:"slider"})]})}),Object(l.jsx)("div",{className:"slideContainer",children:Object(l.jsx)("input",{type:"range",min:"1",max:"254",defaultValue:"50",className:"slider",onChange:function(t){return a({bri:t.currentTarget.value})}})})]})},b=c(93);function g(t){var e=t.api_key,c=t.lights,s=t.groupLights,o=Object(a.useRef)(null),u=Object(a.useRef)(null),j=Object(a.useState)(!0),d=Object(n.a)(j,2),g=d[0],p=d[1];Object(a.useEffect)((function(){return p(!1),function(){p(!1)}}),[]);var f,O=[],x=Object(i.a)(s.entries());try{for(x.s();!(f=x.n()).done;){var v=Object(n.a)(f.value,2),m=(v[0],v[1]);"xy"in c[m].state&&O.push(Object(h.a)(c[m].state.xy[0],c[m].state.xy[1],254))}}catch(N){x.e(N)}finally{x.f()}var y=function(t){var c=t.rgb;console.log(t.rgb),console.log("Apply state "+JSON.stringify(t)),r.a.put("/api/".concat(e,"/lights/").concat(s[t.index],"/state"),{xy:Object(h.c)(c.r,c.g,c.b)})};return Object(a.useEffect)((function(){o.current&&!u.current&&(u.current=new b.a.ColorPicker(o.current,{layout:[{component:b.a.ui.Wheel,options:{}}],colors:O}),u.current.on("input:end",y))}),[o.current]),Object(l.jsx)("div",{ref:o,className:g?"hide":"show"})}var p=function(t){var e=t.api_key,c=t.id,s=t.group,j=t.lights,b=t.scenes,p=Object(a.useState)("closed"),f=Object(n.a)(p,2),O=f[0],x=f[1],v=Object(a.useState)(s.state.any_on),m=Object(n.a)(v,2),y=m[0],N=m[1],k=Object(a.useState)(s.action.bri),C=Object(n.a)(k,2),M=(C[0],C[1]);return Object(l.jsxs)("div",{className:"groupContainer ".concat(s.state.any_on?"textDark":"textLight"," ").concat("closed"!==O?"expanded":""),style:function(){if(s.state.any_on){var t,e="linear-gradient(90deg, ",c=100/s.lights.length,a=Object(i.a)(s.lights.entries());try{for(a.s();!(t=a.n()).done;){var r=Object(n.a)(t.value,2),o=r[0],l=r[1];"xy"===j[l].state.colormode?(1===s.lights.length&&(e+="rgba(200,200,200,1) 0%,"),e=e+Object(h.a)(j[l].state.xy[0],j[l].state.xy[1],254)+" "+Math.floor(c*(o+1))+"%,"):"ct"===j[l].state.colormode?(1===s.lights.length&&(e+="rgba(200,200,200,1) 0%,"),e=e+Object(h.b)(j[l].state.ct)+" "+Math.floor(c*(o+1))+"%,"):(1===s.lights.length&&(e+="rgba(200,200,200,1) 0%,"),e=e+"rgba(255,212,93,1) "+Math.floor(c*(o+1))+"%,")}}catch(u){a.e(u)}finally{a.f()}return{background:e.slice(0,-1)+")"}}}(),children:["closed"!==O&&Object(l.jsxs)("div",{className:"header",children:[Object(l.jsxs)("div",{onClick:function(){return x("closed")},children:[Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)(o.c,{})}),Object(l.jsx)("div",{className:"text",children:"close"})]}),Object(l.jsx)("div",{className:"tab ".concat("lights"===O?"active":""),onClick:function(){return x("lights")},children:Object(l.jsx)(o.l,{})}),Object(l.jsx)("div",{className:"tab ".concat("scenes"===O?"active":""),onClick:function(){return x("scenes")},children:Object(l.jsx)(o.m,{})}),Object(l.jsx)("div",{className:"tab ".concat("colorPicker"===O?"active":""),onClick:function(){return x("colorPicker")},children:Object(l.jsx)(o.p,{})})]}),Object(l.jsx)("div",{className:"overlayBtn",onClick:function(){return x("colorPicker")}}),Object(l.jsx)("div",{className:"iconContainer",children:Object(l.jsx)(o.f,{})}),Object(l.jsx)("div",{className:"textContainer",children:Object(l.jsx)("p",{children:s.name})}),Object(l.jsx)("div",{className:"switchContainer",children:Object(l.jsxs)("label",{className:"switch",children:[Object(l.jsx)("input",{type:"checkbox",value:y,checked:s.state.any_on,onChange:function(t){return function(t){var n={on:t};N(t),s.state.any_on=t,console.log("Apply state "+JSON.stringify(n)),r.a.put("http://localhost/api/".concat(e,"/groups/").concat(c,"/action"),n)}(t.target.checked)}}),Object(l.jsx)("span",{className:"slider"})]})}),Object(l.jsx)("div",{className:"slideContainer",children:Object(l.jsx)("input",{type:"range",min:"1",max:"254",value:s.action.bri,step:"1",className:"slider",onChange:function(t){return function(t){var n={bri:t};M(t),s.action.bri=t,console.log("Apply state "+JSON.stringify(n)),r.a.put("http://localhost/api/".concat(e,"/groups/").concat(c,"/action"),n)}(t.target.value)}})}),Object(l.jsxs)("div",{className:"dimmer",children:["scenes"===O&&Object(l.jsx)(u,{api_key:e,groupId:c,scenes:b}),"lights"===O&&Object(l.jsx)("div",{className:"lightsContainer",children:s.lights.map((function(t){return Object(l.jsx)(d,{api_key:e,id:t,light:j[t]},t)}))}),"colorPicker"===O&&Object(l.jsx)(g,{api_key:e,lights:j,groupLights:s.lights})]})]})};function f(t){var e=t.API_KEY,c=Object(a.useState)({config:{},lights:{},groups:{},scenes:{}}),s=Object(n.a)(c,2),i=s[0],o=s[1],u=function(){void 0!==e&&r.a.get("/api/".concat(e)).then((function(t){console.log(t.data),o(t.data)})).catch((function(t){console.error(t)}))};return Object(a.useEffect)((function(){u();var t=setInterval((function(){u()}),2e3);return function(){return clearInterval(t)}}),[e]),Object(l.jsx)("div",{className:"content",children:Object(l.jsx)("div",{className:"cardGrid",children:Object.entries(i.groups).filter((function(t){return"Entertainment"!==t[1].type})).map((function(t){var c=Object(n.a)(t,2),a=c[0],s=c[1];return Object(l.jsx)(p,{api_key:e,id:a,group:s,lights:i.lights,scenes:i.scenes},a)}))})})}},85:function(t,e,c){"use strict";function n(t,e,c){void 0===c&&(c=254);var n=1-t-e,a=(c/254).toFixed(2),s=a/e*t,r=a/e*n,i=1.656492*s-.354851*a-.255038*r,o=.707196*-s+1.655397*a+.036152*r,l=.051713*s-.121364*a+1.01153*r;return i>l&&i>o&&i>1?(o/=i,l/=i,i=1):o>l&&o>i&&o>1?(i/=o,l/=o,o=1):l>i&&l>o&&l>1&&(i/=l,o/=l,l=1),i=i<=.0031308?12.92*i:1.055*Math.pow(i,1/2.4)-.055,o=o<=.0031308?12.92*o:1.055*Math.pow(o,1/2.4)-.055,l=l<=.0031308?12.92*l:1.055*Math.pow(l,1/2.4)-.055,i=Math.round(255*i),o=Math.round(255*o),l=Math.round(255*l),isNaN(i)&&(i=0),isNaN(o)&&(o=0),isNaN(l)&&(l=0),"rgba("+Math.floor(i)+","+Math.floor(o)+","+Math.floor(l)+",1)"}function a(t){var e,c,n,a=2e4/t;return a<=66?(e=255,c=99.4708025861*Math.log(a)-161.1195681661,n=a<=19?0:138.5177312231*Math.log(a-10)-305.0447927307):(e=329.698727446*Math.pow(a-60,-.1332047592),c=288.1221695283*Math.pow(a-60,-.0755148492),n=255),e=e>255?255:e,c=c>255?255:c,n=n>255?255:n,"rgba("+Math.floor(e)+","+Math.floor(c)+","+Math.floor(n)+",1)"}function s(t,e,c){var n=.664511*(t=t>.04045?Math.pow((t+.055)/1.055,2.4):t/12.92)+.154324*(e=e>.04045?Math.pow((e+.055)/1.055,2.4):e/12.92)+.162028*(c=c>.04045?Math.pow((c+.055)/1.055,2.4):c/12.92),a=.283881*t+.668433*e+.047685*c,s=88e-6*t+.07231*e+.986039*c,r=(n/(n+a+s)).toFixed(4),i=(a/(n+a+s)).toFixed(4);return isNaN(r)&&(r=0),isNaN(i)&&(i=0),[parseFloat(r),parseFloat(i)]}c.d(e,"a",(function(){return n})),c.d(e,"b",(function(){return a})),c.d(e,"c",(function(){return s}))}}]);
//# sourceMappingURL=11.9204c905.chunk.js.map