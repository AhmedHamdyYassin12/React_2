(this.webpackJsonpnotes=this.webpackJsonpnotes||[]).push([[0],{11:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);n(8);var c=n(5),i=n(2),s=n(1),r=n(0),a=function(e){return Object(r.jsx)("div",{className:"notes-section",children:e.children})},o=function(e){return Object(r.jsx)("ul",{className:"notes-list",children:e.children})},l=function(e){var t=e.title,n=e.active,c=e.noteClicked;return Object(r.jsx)("li",{className:"note-item  ".concat(n&&"active"),onClick:c,children:t})};n(11);var j=function(){var e=Object(s.useState)([]),t=Object(i.a)(e,2),n=t[0],j=t[1],d=Object(s.useState)(""),u=Object(i.a)(d,2),b=u[0],O=u[1],h=Object(s.useState)(""),f=Object(i.a)(h,2),x=f[0],v=f[1],m=Object(s.useState)(null),p=Object(i.a)(m,2),g=p[0],N=p[1],S=Object(s.useState)(!1),C=Object(i.a)(S,2),k=C[0],I=C[1],w=Object(s.useState)(!1),J=Object(i.a)(w,2),y=J[0],E=J[1];Object(s.useEffect)((function(){localStorage.getItem("notes")?j(JSON.parse(localStorage.getItem("notes"))):localStorage.setItem("notes",JSON.stringify([]))}),[]);var A=function(e){localStorage.setItem("notes",JSON.stringify(e))};return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsxs)(a,{children:[Object(r.jsx)(o,{children:n.map((function(e){return Object(r.jsx)(l,{title:e.title,noteClicked:function(){return t=e.id,void N(t);var t},active:e.id===g},e.id)}))}),Object(r.jsx)("button",{className:"add-btn",onClick:function(){I(!0)},children:"+"})]}),Object(r.jsx)("div",{className:"preview-section",children:k?Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:"Add New Note"}),Object(r.jsxs)("div",{children:[Object(r.jsx)("input",{type:"text",name:"title",className:"form-input mb-30",placeholder:"Title",value:b,onChange:function(e){O(e.target.value)}}),Object(r.jsx)("textarea",{rows:"10",name:"content",className:"form-input",placeholder:"text",value:x,onChange:function(e){v(e.target.value)}}),Object(r.jsx)("a",{href:"#",className:"button green",onClick:function(){if(y){var e=Object(c.a)(n);e[n.findIndex((function(e){return e.id===g}))]={id:g,title:b,content:x},A(e),j(e)}else{var t={id:new Date,title:b,content:x},i=[].concat(Object(c.a)(n),[t]);A(i),j(i),N(t.id)}I(!1),E(!1),O(""),v("")},children:"Save"})]})]}):function(){if(0===n.length)return Object(r.jsx)("h2",{children:"There is no notes"});if(!g)return Object(r.jsx)("h2",{children:"Choose one note"});var e=n.find((function(e){return e.id===g}));return Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{className:"note-operations",children:[Object(r.jsx)("a",{href:"#",onClick:function(){return function(e){O(e.title),v(e.content),E(!0),I(!0)}(e)},children:Object(r.jsx)("p",{children:"Edit"})}),Object(r.jsx)("a",{href:"#",onClick:function(){var e=Object(c.a)(n).findIndex((function(e){return e.id===g}));n.splice(e,1),A(n),j(n),N(null)},children:Object(r.jsx)("p",{children:"Delete"})})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h2",{children:e.title}),Object(r.jsx)("p",{children:e.content})]})]})}()})]})},d=n(7);n.n(d).a.render(Object(r.jsx)(j,{}),document.getElementById("root"))},8:function(e,t,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.c27c6426.chunk.js.map