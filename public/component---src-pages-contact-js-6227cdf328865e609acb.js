(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"Cuy+":function(e,a,t){"use strict";t.r(a);var n=t("q1tI"),l=t.n(n),r=t("Bl7J"),c=t("Hx9t"),m=t("QSOs"),s=t("rai8"),o=t("qhky");a.default=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(r.a,null,l.a.createElement(o.a,{title:"Contact | James Reule "}),l.a.createElement(m.a,{pathExt:e.path}),l.a.createElement(s.a,{spanFirst:"",contextHeading:"Contact"}),l.a.createElement("main",{className:"flexMainContainer"},l.a.createElement("div",{className:"flex-container-fx"},l.a.createElement("p",{className:"contactMessage"},"Hello! Are you having a good day? Anyway, if you have any concerns or you just want to share something, please feel free to drop me a line. I would love to hear anything from you."),l.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a=e.target,t=new FormData(a),n=new XMLHttpRequest;n.open(a.method,a.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE&&(200===n.status?(alert("Succesfully sent!"),a.reset()):console.log("something went wrong"))},n.send(t)},action:"https://formspree.io/f/mbjqoneo",method:"POST"},l.a.createElement("div",{className:"columns",id:"form-wrapper"},l.a.createElement("div",{className:"column is-half"},l.a.createElement(c.a,{name:"fullname",type:"text"}),l.a.createElement("input",{name:"author",type:"hidden",value:"James Reule"}),l.a.createElement(c.a,{name:"phone",type:"text"})),l.a.createElement("div",{className:"column is-half"},l.a.createElement(c.a,{name:"email",type:"email"}),l.a.createElement(c.a,{name:"address",type:"text"}))),l.a.createElement("div",{className:"columns"},l.a.createElement("div",{className:"column is-full",id:"textAreaContainer"},l.a.createElement("label",{htmlFor:"message"}," Message "),l.a.createElement("textarea",{type:"text",name:"message",id:"message",className:"textArea",placeholder:"Message",required:!0}),l.a.createElement("div",{className:"buttonContainer"},l.a.createElement("input",{className:"abtiaryButton",value:"Submit",type:"submit"}))))),l.a.createElement("div",{className:"info-section-address"},l.a.createElement("span",null,l.a.createElement("h5",null,"Address"),l.a.createElement("p",{style:{color:"black"}},"831 N Tatnall Street, Suite M #188, Wilmington, DE 19801")),l.a.createElement("span",null,l.a.createElement("h5",null,"Phone"),l.a.createElement("a",{href:"tel:8883237009",style:{color:"black"}},"888-323-7009")),l.a.createElement("span",null,l.a.createElement("h5",null,"Email"),l.a.createElement("a",{href:"mailto:publish@stratton-press.com",style:{color:"black"}},"publish@stratton-press.com")))))))}},QSOs:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("8XLk"),m=t.n(c);a.a=function(e){var a=Object(n.useRef)(),t=Object(n.useState)(!1),c=t[0],s=t[1],o=["Home","About-the-Author","About-the-Book","Contact"].map((function(e){var a=e.replace(/[ /]/g,"-").trim().toLowerCase(),t="home"===a?"/":"/"+a;return l.a.createElement("li",null,l.a.createElement(r.Link,{to:t},e.replace(/[-/]/g," ").trim()))})),i=function(e){s(!c)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navigation"},l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/about-the-author"},"About the Author")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/"},l.a.createElement("img",{alt:"author-logo",src:m.a}))),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/about-the-book"},"About the Book")),l.a.createElement("li",null,l.a.createElement(r.Link,{to:"/contact"},"Contact"))),l.a.createElement("nav",{className:"burger-nav"},l.a.createElement("h1",null,l.a.createElement(r.Link,{style:"/"===e.pathExt||""===e.pathExt?{color:"rgb(255, 202, 0)"}:{color:"#000"},to:"/"},l.a.createElement("img",{className:"logo-img",src:m.a,alt:"logo"}))),l.a.createElement("ul",{className:"hamburger-ul",onClick:function(e){return i()},ref:a},l.a.createElement("span",{className:"hamburger-span"}),l.a.createElement("span",{className:"hamburger-span"})),l.a.createElement("section",{className:c?"active-nav":"non-active-nav"},l.a.createElement("span",{className:"close-mark",onClick:function(e){return i()}},l.a.createElement("span",{className:"hamburger-x-mark"}),l.a.createElement("span",{className:"hamburger-x-mark"})),l.a.createElement("ul",null,l.a.createElement("p",{class:"list-label"},"Navigations"),o))))}},rai8:function(e,a,t){"use strict";var n=t("q1tI"),l=t.n(n);a.a=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"web-banner"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"wrapper-ds"},l.a.createElement("span",null,e.spanFirst),l.a.createElement("h1",null,e.contextHeading)))))}}}]);
//# sourceMappingURL=component---src-pages-contact-js-6227cdf328865e609acb.js.map