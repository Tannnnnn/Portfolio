(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},21:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(7),c=a.n(l),r=(a(13),a(1)),s=a(2),i=a(4),m=a(3),u=a(5),d=(a(15),a(21),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={randomValue:"",selectCountry:"SP"},a.handleSetSelectCountry=function(e){a.setState({randomValue:"",selectCountry:e.target.value,copyText:""})},a.handleSetRandomValue=function(){var e=a.state.selectCountry,t="SP"===e?99999999:999999999,n="SP"===e?"+65":"+855",o=Math.floor(Math.random()*Math.floor(t));a.setState({randomValue:n+o})},a.handleCopyText=function(){document.getElementById("randomInput").select(),document.execCommand("copy"),a.setState({copyText:"\u0e01\u0e47\u0e2d\u0e1b\u0e1b\u0e35\u0e49\u0e2a\u0e33\u0e40\u0e23\u0e47\u0e08!"}),setTimeout(function(){a.setState({copyText:""})},3e3)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("header",{className:"App-Header"},o.a.createElement("center",null,o.a.createElement("h1",{className:"title",style:{color:"#fff",marginBottom:40}},"\u0e42\u0e1b\u0e23\u0e41\u0e01\u0e23\u0e21\u0e2a\u0e38\u0e48\u0e21\u0e2b\u0e21\u0e32\u0e22\u0e40\u0e25\u0e02\u0e42\u0e17\u0e23\u0e28\u0e31\u0e1e\u0e17\u0e4c")),o.a.createElement("div",{className:"field has-addons"},o.a.createElement("p",{className:"control is-expanded"},o.a.createElement("span",{className:"select"},o.a.createElement("select",{onChange:this.handleSetSelectCountry},o.a.createElement("option",{value:"SP"},"\u0e2a\u0e34\u0e07\u0e04\u0e4c\u0e42\u0e1b\u0e23 +65"),o.a.createElement("option",{value:"KB"},"\u0e01\u0e31\u0e21\u0e1e\u0e39\u0e0a\u0e32 +855")))),o.a.createElement("p",{className:"control is-expanded"},o.a.createElement("input",{className:"input",type:"text",placeholder:"\u0e01\u0e14\u0e1b\u0e38\u0e48\u0e21 Random \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e38\u0e48\u0e21",value:this.state.randomValue,id:"randomInput"})),o.a.createElement("p",{className:"control is-expanded"},o.a.createElement("a",{className:"button is-info",onClick:this.handleSetRandomValue},"Random")),o.a.createElement("a",{className:"button is-warning","data-tooltip":"Tooltip Text",onClick:this.handleCopyText},"Copy")),o.a.createElement("center",null,o.a.createElement("h2",{className:"title",style:{color:"#fff"}},this.state.copyText))))}}]),t}(n.Component)),p=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Parallax-bg"},o.a.createElement(d,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(23);c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(25)}},[[8,2,1]]]);
//# sourceMappingURL=main.a2a205af.chunk.js.map