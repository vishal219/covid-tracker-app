(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{39:function(e,a,t){e.exports=t.p+"static/media/cc.26166282.jpg"},45:function(e,a,t){e.exports=t(73)},50:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(32),c=t.n(l),o=(t(50),t(86)),s=Object(o.a)({nav:{color:"#fff",backgroundColor:"#ee6e73",width:"100%",height:"56px"},navwrapper:{display:"flex",justifyContent:"center"},brand:{color:"#fff",display:"inline-block",fontSize:"2.1rem",padding:"0",textDecoration:"none"}});function i(){var e=s();return r.a.createElement("nav",{className:e.nav},r.a.createElement("div",{className:e.navwrapper},r.a.createElement("a",{href:"#",class:e.brand},"Covid-Info")))}var m=t(40),d=t(2),u=t(36),p=t(37),h=t(42),v=t(41),f=t(14),E=t(38),b=t.n(E),g=t(39),w=t.n(g),N=t(88),k=function(e){Object(h.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=a.call.apply(a,[this].concat(r))).state={post:[],overall:[]},e}return Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://api.covid19api.com/summary").then((function(a){var t=a.data.Countries,n=a.data.Global;e.setState({post:t,overall:n})}))}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",null,r.a.createElement("img",{src:w.a,alt:"Covid-19",style:{width:"100%"}}),r.a.createElement("div",{className:e.container},r.a.createElement("div",{className:e.card},r.a.createElement("h2",{className:e.small},"Total"),r.a.createElement("p",{className:e.big},this.state.overall.TotalConfirmed)),r.a.createElement("div",{className:"".concat(e.card," ").concat(e.recovered)},r.a.createElement("h2",{className:e.small},"Recovered"),r.a.createElement("p",{className:e.big},this.state.overall.TotalRecovered)),r.a.createElement("div",{className:"".concat(e.card," ").concat(e.deaths)},r.a.createElement("h2",{className:e.small},"Deaths"),r.a.createElement("p",{className:e.big},this.state.overall.TotalDeaths)),r.a.createElement("div",{className:"".concat(e.card," ").concat(e.deaths)},r.a.createElement("h2",{className:e.small},"New Cases"),r.a.createElement("p",{className:e.big},this.state.overall.NewConfirmed))),r.a.createElement("h1",{className:"center"},"Covid-19 Stats"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Total"),r.a.createElement("th",null,"Recovered"),r.a.createElement("th",null,"Deaths"))),r.a.createElement("tbody",null,this.state.post.map((function(e){return r.a.createElement("tr",{key:e.Country},r.a.createElement("td",null,e.Country),r.a.createElement("td",null,e.TotalConfirmed,"  "),r.a.createElement("td",null,e.TotalRecovered," "),r.a.createElement("td",null,e.TotalDeaths))})))))}}]),t}(n.Component),y=Object(N.a)((function(e){var a;return{container:{width:"90%",display:"flex",justifyContent:"space-between",margin:"0 auto",flexWrap:"wrap"},card:(a={padding:"20px",backgroundColor:"#a8b9cf",display:"flex",flexDirection:"column",justifyContent:"center",color:"white",width:"20%"},Object(f.a)(a,e.breakpoints.down("sm"),{width:"30%",margin:"0 auto",marginBottom:"10px",padding:"10px"}),Object(f.a)(a,"borderRadius","6%"),a),recovered:{backgroundColor:"#276749",backgroundImage:"none"},deaths:{backgroundColor:"#ff3333",backgroundImage:"none"},big:Object(f.a)({fontSize:"40px",padding:"0px"},e.breakpoints.down("sm"),{fontSize:"20px"}),small:Object(f.a)({textAlign:"center",padding:"0px"},e.breakpoints.down("sm"),{fontSize:"15px"})}}))(k);var x=function(){return r.a.createElement(m.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i,null),r.a.createElement(d.c,null,r.a.createElement(d.a,{path:"/",component:y}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.1d5efae2.chunk.js.map