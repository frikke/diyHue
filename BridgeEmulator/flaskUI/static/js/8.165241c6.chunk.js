(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[8],{127:function(e,t,n){"use strict";n.r(t);var r=n(14),o=n(2),c=n(16),i=n.n(c),a=n(97),s=n(6);t.default=function(e){var t=e.HOST_IP,n=e.API_KEY,c=Object(o.useState)("none"),u=Object(r.a)(c,2),l=u[0],f=u[1],p=Object(o.useState)("no message"),d=Object(r.a)(p,2),b=d[0],h=d[1],m=Object(o.useState)(!1),y=Object(r.a)(m,2),j=y[0],O=y[1],v=Object(o.useState)("127.0.0.1"),g=Object(r.a)(v,2),x=g[0],T=g[1],S=Object(o.useState)(8443),P=Object(r.a)(S,2),_=P[0],w=P[1],k=Object(o.useState)(""),z=Object(r.a)(k,2),C=z[0],D=z[1];Object(o.useEffect)((function(){i.a.get("".concat(t,"/api/").concat(n,"/config/deconz")).then((function(e){O(e.data.enabled),T(e.data.deconzHost),w(e.data.deconzPort),D(e.data.deconzUser)})).catch((function(e){console.error(e)}))}),[t,n]);return Object(s.jsxs)("div",{className:"inner",children:["none"!==l&&Object(s.jsx)(a.a,{type:l,message:b,duration:"5000",setType:f}),Object(s.jsxs)("div",{className:"contentContainer",children:[Object(s.jsx)("div",{class:"headline",children:"Deconz Config"}),Object(s.jsxs)("form",{className:"add-form",onSubmit:function(e){return function(e){e.preventDefault(),i.a.post("http://".concat(x,":").concat(_,"/api"),{devicetype:"diyhue#bridge"},{timeout:2e3}).then((function(e){"success"in e.data[0]?(D(e.data[0].success.username),i.a.put("".concat(t,"/api/").concat(n,"/config"),{deconz:{enabled:j,deconzHost:x,deconzPort:_,deconzUser:e.data[0].success.username}}).then((function(e){console.log(e.data),h("Connected, service restart required."),f("none"),f("success")}))):(h(e.data[0].error.description),f("none"),f("error"))})).catch((function(e){console.error(e),h(e.message),f("none"),f("error")}))}(e)},children:[Object(s.jsx)("div",{className:"switchContainer",children:Object(s.jsxs)("label",{className:"switch",children:[Object(s.jsx)("input",{type:"checkbox",value:j,checked:j,onChange:function(e){return function(e){O(e),i.a.put("".concat(t,"/api/").concat(n,"/config"),{deconz:{enabled:e}}).then((function(t){console.log(t.data),h("Deconz ".concat(e?"enabled":"disabled")),f("none"),f("success")})).catch((function(e){console.error(e),h("Error occured, check browser console"),f("none"),f("error")}))}(e.target.checked)}}),Object(s.jsx)("span",{className:"slider"})]})}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"Deconz host"}),Object(s.jsx)("input",{type:"text",placeholder:"Deconz host",value:x,onChange:function(e){return T(e.target.value)}})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"Deconz port"}),Object(s.jsx)("input",{type:"number",placeholder:"Deconz port",value:_,onChange:function(e){return w(parseInt(e.target.value))}})]}),Object(s.jsxs)("div",{className:"form-control",children:[Object(s.jsx)("label",{children:"Deconz User"}),Object(s.jsx)("input",{type:"text",placeholder:"Automatically populated",readOnly:!0,value:C})]}),Object(s.jsx)("div",{className:"form-control",children:Object(s.jsx)("input",{type:"submit",value:"string"===typeof C&&C.length>0?"Pair again":"Pair",className:"btn btn-block"})})]})]})]})}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(12),o=n(98),c=n.n(o),i=n(6);function a(e){var t=e.type,n=e.message,o=e.duration,a=e.setType;return Object(i.jsx)(c.a,{duration:o,persistOnHover:!0,children:Object(i.jsx)("div",{className:"notificationContainer",children:Object(i.jsxs)("div",{className:"notification ".concat(t),children:[Object(i.jsx)("p",{children:n}),Object(i.jsx)("div",{className:"icon",children:Object(i.jsx)(r.o,{onClick:function(){return a("none")}})})]})})})}},98:function(e,t,n){e.exports=function(){var e={433:function(e,t,n){"use strict";var r=n(642);function o(){}function c(){}c.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,c,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:c,resetWarningCache:o};return n.PropTypes=n,n}},74:function(e,t,n){e.exports=n(433)()},642:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},368:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var o=n(2),c=r.n(o),i=r(74);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?l(e):t}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(r){var o=f(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return u(this,e)});function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).state={isVisible:!0},t.hide=t.hide.bind(l(t)),t.resumeTimer=t.resumeTimer.bind(l(t)),t.pauseTimer=t.pauseTimer.bind(l(t)),t}return(t=[{key:"componentDidMount",value:function(){var e=this.props.duration;this.remaining=e,this.resumeTimer()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"hide",value:function(){this.setState({isVisible:!1})}},{key:"resumeTimer",value:function(){window.clearTimeout(this.timer),this.start=new Date,this.timer=setTimeout(this.hide,this.remaining)}},{key:"pauseTimer",value:function(){this.props.persistOnHover&&(clearTimeout(this.timer),this.remaining-=new Date-this.start)}},{key:"render",value:function(){var e=this.state.isVisible,t=this.props.children;return e?c().createElement("div",{onMouseEnter:this.pauseTimer,onMouseLeave:this.resumeTimer},t):null}}])&&function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(i.prototype,t),i}(o.Component);p.defaultProps={duration:5e3,children:null,persistOnHover:!0},p.propTypes={children:i.node,duration:i.number,persistOnHover:i.bool};var d=p}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r(368)}()}}]);
//# sourceMappingURL=8.165241c6.chunk.js.map