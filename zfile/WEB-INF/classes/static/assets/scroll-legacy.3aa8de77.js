System.register(["./base-legacy.79a28316.js"],(function(e){"use strict";var t,r;return{setters:[function(e){t=e.Q,r=e.ak}],execute:function(){e("s",(function(e,r){if(t)if(r){for(var o=[],n=r.offsetParent;null!==n&&e!==n&&e.contains(n);)o.push(n),n=n.offsetParent;var i=r.offsetTop+o.reduce((function(e,t){return e+t.offsetTop}),0),l=i+r.offsetHeight,s=e.scrollTop,f=s+e.clientHeight;i<s?e.scrollTop=i:l>f&&(e.scrollTop=l-e.clientHeight)}else e.scrollTop=0}));var o,n=function(e,o){if(!t)return!1;var n={undefined:"overflow",true:"overflow-y",false:"overflow-x"}[String(o)],i=r(e,n);return["scroll","auto","overlay"].some((function(e){return i.includes(e)}))};e("g",(function(e,r){if(t){for(var o=e;o;){if([window,document,document.documentElement].includes(o))return window;if(n(o,r))return o;o=o.parentNode}return o}})),e("a",(function(e){var r;if(!t)return 0;if(void 0!==o)return o;var n=document.createElement("div");n.className="".concat(e,"-scrollbar__wrap"),n.style.visibility="hidden",n.style.width="100px",n.style.position="absolute",n.style.top="-9999px",document.body.appendChild(n);var i=n.offsetWidth;n.style.overflow="scroll";var l=document.createElement("div");l.style.width="100%",n.appendChild(l);var s=l.offsetWidth;return null==(r=n.parentNode)||r.removeChild(n),o=i-s}))}}}));
