(window["webpackJsonpwho-is-next"]=window["webpackJsonpwho-is-next"]||[]).push([[0],{12:function(e,t,n){e.exports=n(24)},17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),m=n.n(c),i=(n(17),n(4)),o=(n(18),n(25)),l=n(26),u=function(){return r.a.createElement("div",{id:"main-header"},r.a.createElement(o.a,{color:"primary",dark:!0},r.a.createElement(l.a,{href:"/"},"WHO IS NEXT")))},s=n(2),d=function(e){var t=e.member,n=e.members,a=e.setMembers;return r.a.createElement("div",{className:"member-item"},r.a.createElement("div",{className:"member-item__checkbox-container","data-testid":"checkbox-".concat(t.name),onClick:function(){return function(e){e.checked=!e.checked,a(Object(s.a)(n))}(t)}},t.checked&&r.a.createElement("div",{title:"unselect",className:"tick"},"\u2713")),r.a.createElement("div",{className:"member-item__name"},t.name),r.a.createElement("div",{className:"member-item__delete","data-testid":"delete-".concat(t.name),onClick:function(){var e=n.filter(function(e){return e.name!==t.name});a(Object(s.a)(e))}},"\u2718"))},b=n(27),f=(n(22),function(e){var t=e.members,n=e.setMembers,c=Object(a.useState)(""),m=Object(i.a)(c,2),o=m[0],l=m[1];return r.a.createElement("div",null,function(){var e=t.map(function(e){return r.a.createElement(d,{key:e.name,member:e,members:t,setMembers:n})});return r.a.createElement("div",{id:"members"},r.a.createElement("input",{"data-testid":"add-member","aria-label":"members-name",onChange:function(e){l(e.target.value)},value:o}),r.a.createElement(b.a,{"data-testid":"add-btn",color:"primary",onClick:function(){if(o.length<2||t.findIndex(function(e){return e.name.toLowerCase()===o.toLowerCase()})>=0)alert("invalid/duplicate name");else{var e=[].concat(Object(s.a)(t),[{name:o,checked:!0}]);n(e),l("")}}},"Add"),r.a.createElement("h2",null,"Members"),e)}())}),v=function(e){return e.map(function(e){return{name:e,weight:Math.random()}}).sort(function(e,t){return e.weight-t.weight}).map(function(e){return e.name})},h=function(e){var t=e.names;return r.a.createElement("div",null,r.a.createElement("p",null,"History"),[0,1,2].map(function(e){return!!t[e]&&r.a.createElement("p",{key:"".concat(e)},e+1,". ",t[e])}))},E=function(e){var t=e.members,n=Object(a.useState)([]),c=Object(i.a)(n,2),m=c[0],o=c[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),d=u[0],f=u[1],E=Object(a.useState)([]),O=Object(i.a)(E,2),p=O[0],j=O[1],k=Object(a.useState)("WHO IS NEXT?"),w=Object(i.a)(k,2),g=w[0],N=w[1];Object(a.useEffect)(function(){if(m!==t){o(t);var e=t.reduce(function(e,t){return t&&t.checked&&e.push(t.name),e},[]),n=d.filter(function(t){return e.includes(t)}),a=!1,r=[].concat(Object(s.a)(d),Object(s.a)(p));e.forEach(function(e){r.includes(e)||(n.push(e),a=!0)}),a&&(n=v(n)),f(n)}},[t,p,d,m]);return r.a.createElement("div",null,r.a.createElement("div",null,g),r.a.createElement(b.a,{"data-testid":"getName-btn",color:"primary",onClick:function(){var e=t.filter(function(e){return e.checked}).map(function(e){return e.name});if(e.length)if(d.length){var n=d.shift();N(n),j([n].concat(Object(s.a)(p)))}else{var a=v(e);f(Object(s.a)(a)),N("WHO IS NEXT?"),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];j(Object(s.a)(e))}()}else N("Add or Checked Names")}},"getName"),r.a.createElement(h,{names:p}))};var O=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement(u,null),r.a.createElement(E,{members:n}),r.a.createElement(f,{members:n,setMembers:c}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(23);m.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[12,1,2]]]);
//# sourceMappingURL=main.2ebe8052.chunk.js.map