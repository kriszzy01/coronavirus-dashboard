(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{48:function(e,t,a){e.exports=a(79)},57:function(e,t,a){},79:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a(2),s=a(20),l=a(3),i=(a(57),a(5)),u=a.n(i),d=a(15),m=a(16),v=a(30),p=a.n(v),h=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://disease.sh/v3/covid-19/".concat(t||"all"),e.prev=1,e.next=4,p.a.get(a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(d.a)(u.a.mark((function e(t){var a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="https://disease.sh/v3/covid-19/historical/".concat(t||"all","?lastdays=270"),e.prev=1,e.next=4,p.a.get(a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),b=function(e){e.status="pending",e.error=null},y=function(e,t){var a=t.payload;e.status="failure",e.error=a},E=Object(m.b)({name:"statistics",initialState:{status:"idle",error:null,cummulative:{active:0,affectedCountries:0,todayCases:0,todayDeaths:0,todayRecovered:0,recovered:0,deaths:0,updated:0,cases:0,confirmed:0},historical:{cases:{},deaths:{},recovered:{}}},reducers:{fetchWorldWideStart:b,fetchWorldWideSuccess:function(e,t){var a=t.payload;e.status="success",e.cummulative=a,e.error=null},fetchWorldWideFailure:y,fetchAllHistoricalStart:b,fetchAllHistoricalSuccess:function(e,t){var a=t.payload;e.status="success",e.historical=a,e.error=null},fetchAllHistoricalFailure:y}}),g=E.actions,w=g.fetchWorldWideFailure,O=g.fetchWorldWideStart,C=g.fetchWorldWideSuccess,j=g.fetchAllHistoricalStart,S=g.fetchAllHistoricalSuccess,k=g.fetchAllHistoricalFailure,x=E.reducer,D=a(19),z=a(11);function M(e){return{type:"FeatureCollection",features:Object.values(e).map((function(e){return t=e,{type:"Feature",properties:Object(z.a)({},t),geometry:{type:"Point",coordinates:[+t.coordinates.longitude,+t.coordinates.latitude]}};var t}))}}function A(e){var t=String(e);return t=(t=(t=t.split("").reverse()).reduce((function(e,a,n){var r=(n+1)%3===0&&n+1<t.length,c="".concat(e).concat(a);return r&&(c="".concat(c,",")),c}),"")).split("").reverse().join("")}function H(e){return e<=1e3?[4,4]:e>1e3&&e<=1e4?[6,6]:e>1e4&&e<=5e4?[8,8]:e>5e4&&e<=3e5?[10,10]:e>3e5&&e<=2e6?[12,12]:e>2e6&&e<=5e6?[14,14]:[16,16]}var N=a(4),L=a.n(N),R="https://api.mapbox.com/styles/v1/kriszzy01/ckkcxmtt12ax117mn75yqjd4a/tiles/256/{z}/{x}/{y}@2x?access_token=".concat("pk.eyJ1Ijoia3Jpc3p6eTAxIiwiYSI6ImNra2N4a3R2ZzA1eGgyb255aDVwb2o4eXQifQ.I_ecRnkH46P6IHs1UCtB_A");function T(e,t){return function(a,n){var r,c=function(e,t){var a=e.properties,n=a.stats,r=a.active,c=a.tests,o=a.province,s=a.country;switch(t){case"Active":return{size:r,class:"icon-active",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-active">').concat(A(r),"</span> \n              Active Cases\n          </p>\n      </div>\n      ")};case"Tests":return{size:c/25,class:"icon-tests",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-active">').concat(A(c),"</span> Tests carried out\n          </p>\n      </div>\n      ")};case"Case-Fatality Ratio":return{size:100*n.deaths/n.confirmed,class:"icon-ratio",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-deaths">\n              ').concat((100*n.deaths/n.confirmed).toFixed(2),"</span>% Case-Fatality Ratio\n          </p>\n      </div>\n      ")};default:return{size:n.confirmed,class:"",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-active">').concat(A(n.confirmed),'</span> Cases</p>\n          <p>\n            <span class="color-deaths">').concat(A(n.deaths),'</span> Deaths</p>\n          <p>\n            <span class="color-recovered">').concat(A(n.recovered),"</span> Recovered</p>\n      </div>\n      ")}}}(a,e),o=L.a.marker(n,{icon:L.a.divIcon({className:"icon ".concat(c.class),iconSize:"icon-ratio"===c.class?(r=c.size,r<=1.5?[4,4]:r>1.5&&r<=3?[6,6]:r>3&&r<=4.5?[8,8]:r>4.5&&r<=8?[10,10]:r>8&&r<=12.5?[12,12]:r>12.5&&r<=16?[14,14]:[16,16]):H(c.size)})}),s=L.a.popup().setLatLng(n).setContent(c.html);return o.bindTooltip(c.html),o.on("click",(function(e){var a=e.target,n=a._map,r=a.feature,c=e.latlng;t(r.properties.country),n.flyTo(c,5),n.once("moveend",(function(){return s.openOn(n)}))})),o}}var _=a(47);function W(e){var t,a=[];for(var n in e){if(t){var r=e[n]-t,c=new Date(n),o=new Date(c);o.setDate(o.getDate()+2);var s=o.toUTCString();a=[].concat(Object(_.a)(a),[{x:s,y:r<0?0:r}])}t=e[n]}return a}function F(e,t,a){return W("Global"===e?t:a)}function I(e){var t=String(e),a={1:"k",2:"M",3:"B",4:"T"},n=function(e){return A(+e).split("").filter((function(e){return","===e})).length}(t),r=t.split(""),c=r.reverse().slice(0,3).join(""),o=+t.replace(c,"");r.length<=3&&(o=+t);var s=A(o).replace(",",".");return s.includes(".")&&s.endsWith("0")&&(s=String(+s)),s.endsWith(".")&&(s=s.replaceAll(".","")),s+(a[n]?a[n]:"")}var G={maintainAspectRatio:!1,legend:{display:!1},tooltips:{mode:"index",intersect:!1},scales:{xAxes:[{type:"time",time:{unit:"month",displayFormats:{month:"MMM"}},gridLines:{display:!1}}],yAxes:[{position:"right",gridLines:{display:!1},ticks:{callback:function(e){return I(e)}}}]}},B={bar:Object(z.a)({},G),line:Object(z.a)({},G)},J=function(e){e.status="pending",e.error=null},V=function(e,t){var a=t.payload;e.status="failure",e.error=a},q=Object(m.b)({name:"country",initialState:{status:"idle",error:null,cummulative:{},historical:{}},reducers:{fetchCountryStart:J,fetchCountrySuccess:function(e,t){var a=function(e){return e.reduce((function(e,t){var a=t.countryInfo,n=a.lat,r=a.long,c=a.flag,o={country:t.country,active:t.active,tests:t.tests,flag:c,stats:{deaths:t.deaths,recovered:t.recovered,confirmed:t.cases,todayCases:t.todayCases,todayDeaths:t.todayDeaths,todayRecovered:t.todayRecovered},coordinates:{latitude:n,longitude:r}};return Object(z.a)(Object(z.a)({},e),{},Object(D.a)({},t.country,o))}),{})}(t.payload);e.status="success",e.cummulative=a,e.error=null},fetchCountryFailure:V,fetchCountryHistoryStart:J,fetchCountryHistorySuccess:function(e,t){var a=t.payload;e.status="success",e.historical=Object(z.a)(Object(z.a)({},e.historical),{},Object(D.a)({},a.country,a.timeline)),e.error=null},fetchCountryHistoryFailure:V}}),U=q.actions,P=U.fetchCountryStart,Q=U.fetchCountrySuccess,Y=U.fetchCountryFailure,Z=U.fetchCountryHistoryStart,X=U.fetchCountryHistorySuccess,K=U.fetchCountryHistoryFailure,$=q.reducer,ee=a(6),te=function(e){return e.worldwide.cummulative},ae=function(e){return e.worldwide.historical},ne=function(e){return e.country.cummulative},re=function(e){return e.country.historical},ce=function(e){return e.mapData.activeData},oe=function(e){return e.mapData.targetData},se=Object(m.b)({name:"mapData",initialState:{activeData:"Cummulative",targetData:"Global"},reducers:{setMapData:function(e,t){var a=t.payload;e.activeData=a},setTargetData:function(e,t){var a=t.payload;e.targetData=a}}}),le=se.actions,ie=le.setMapData,ue=le.setTargetData,de=se.reducer,me=function(e){var t=e.searchResult,a=e.searchTerm,c=e.setSearchTerm,s=Object(o.b)(),l=t.length>0,i=""!==a;return Object(n.useEffect)((function(){var e;a&&(null===(e=document.querySelector("body"))||void 0===e||e.setAttribute("data-scroll",""));return function(){var e;null===(e=document.querySelector("body"))||void 0===e||e.removeAttribute("data-scroll")}}),[a,i]),r.a.createElement("div",{className:"dropdown",id:"dropdown","data-expanded":""!==a},l?r.a.createElement("ul",null,t.map((function(e){var t=e.flag,a=e.country;return r.a.createElement("li",{key:a,onClick:function(){return s(ue(a)),void c("")}},r.a.createElement("span",null,r.a.createElement("img",{src:t,alt:"flag of ".concat(a)})),r.a.createElement("span",null,a))}))):r.a.createElement("p",null,"Country not found"))},ve=function(e){var t=e.setOpenSearchbar,a=e.openSearchbar,c=Object(n.useRef)(null),s=function(e,t){var a=Object(n.useState)(e),r=Object(ee.a)(a,2),c=r[0],o=r[1];return Object(n.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&o("")};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[t]),[c,o]}("",c),l=Object(ee.a)(s,2),i=l[0],u=l[1],d=function(e,t){return Object.values(e).filter((function(e){var a=e.country;return""===t?null:a.toLowerCase().startsWith(t.toLowerCase())}))}(Object(o.c)(ne),i),m=Object(n.useRef)(null);Object(n.useEffect)((function(){var e;a&&(null===(e=m.current)||void 0===e||e.focus())}),[a]);return r.a.createElement("div",{className:"searchbar-container",ref:c},r.a.createElement("div",{className:"searchbar","aria-expanded":""!==i,"aria-controls":"dropdown"},r.a.createElement("div",null,r.a.createElement("span",{"aria-hidden":"true",style:{height:"24px"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))),r.a.createElement("input",{type:"text",value:i,placeholder:"Search by Country",onChange:function(e){return u(e.target.value)},ref:m})),r.a.createElement(me,{searchResult:d,searchTerm:i,setSearchTerm:u})),r.a.createElement("button",{type:"button","aria-label":"close searchbar",onClick:function(){u(""),t(!1)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}))))},pe=function(e){var t=e.openMenu,a=e.setOpenMenu;return Object(n.useEffect)((function(){var e;t&&(null===(e=document.querySelector("body"))||void 0===e||e.setAttribute("data-scroll",""));return function(){var e;null===(e=document.querySelector("body"))||void 0===e||e.removeAttribute("data-scroll")}}),[t]),r.a.createElement("nav",{id:"sidebar",className:"sidebar","data-expanded":t,onClick:function(){return a(!1)}},r.a.createElement("div",null,r.a.createElement(s.b,{to:"/coronavirus-dashboard",role:"presentation"},"Overview"),r.a.createElement("a",{role:"presentation"},"Data Table")),r.a.createElement("div",{className:"external-links"},r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019",target:"_blank"},"WHO (COVID-19) Homepage"),r.a.createElement("a",{href:"https://coronavirus.jhu.edu/map.html",target:"_blank"},"Johns Hopkins COVID-19 Map")),r.a.createElement("div",{className:"sidebar__donate"},r.a.createElement("p",null,"WHO's Covid-19 Response Fund"),r.a.createElement("a",{href:"https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate",target:"_blank"},"Donate")))},he=function(){var e=Object(n.useState)(!1),t=Object(ee.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),l=Object(ee.a)(o,2),i=l[0],u=l[1];return r.a.createElement("header",null,r.a.createElement("div",{"data-searchcountry":a},r.a.createElement("button",{type:"button","aria-labelledby":"menu-label","aria-expanded":i,"aria-controls":"sidebar",onClick:function(){return u(!i)}},r.a.createElement("span",{className:"vh",id:"menu-label"},i?"close menu":"open menu")),r.a.createElement("h1",null,"COVID-19 Dashboard"),r.a.createElement("button",{type:"button","aria-label":"open searchbar",onClick:function(){return c(!0)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))),r.a.createElement(ve,{setOpenSearchbar:c,openSearchbar:a}),r.a.createElement("nav",{className:"desktop"},r.a.createElement(s.b,{to:"/coronavirus-dashboard",role:"presentation"},"Overview"),r.a.createElement("a",{role:"presentation"},"Data Table"))),r.a.createElement(pe,{openMenu:i,setOpenMenu:u}))},fe=a(46),be=a.n(fe),ye={"Confirmed cases":"rgb(0, 147, 213)",Deaths:"rgb(236, 0, 0)",Recovered:"green"},Ee=function(e){var t=e.type,a=e.label,c=e.data,o=e.id;return Object(n.useEffect)((function(){var e=new be.a(o,{type:t,data:{datasets:[{data:c,backgroundColor:ye[a[1]],hoverBackgroundColor:"rgb(2, 20, 34)",borderColor:"rgba(32, 33, 36, 0.5)",pointRadius:0}]},options:B[t]});return function(){e.destroy()}}),[t,c,o,a]),r.a.createElement("div",{className:"chart"},r.a.createElement("p",{style:{color:"".concat(ye[a[1]])}},r.a.createElement("span",null,A(a[0]))," ",r.a.createElement("br",null),r.a.createElement("span",null,a[1])),r.a.createElement("div",{className:"chart__container"},r.a.createElement("canvas",{id:o})))},ge=function(){var e,t,a,c=Object(n.useState)("bar"),s=Object(ee.a)(c,2),l=s[0],i=s[1],u=Object(o.c)(ae),d=Object(o.c)(re),m=Object(o.c)(oe),v=Object(o.c)(te),p=function(e,t,a){if("Global"===a)return{deaths:t.deaths,cases:t.cases,recovered:t.recovered};var n=e[a].stats;return{deaths:n.deaths,cases:n.confirmed,recovered:n.recovered}}(Object(o.c)(ne),v,m),h=p.cases,f=p.deaths,b=p.recovered,y=F(m,u.deaths,null===(e=d[m])||void 0===e?void 0:e.deaths),E=F(m,u.deaths,null===(t=d[m])||void 0===t?void 0:t.cases),g=F(m,u.deaths,null===(a=d[m])||void 0===a?void 0:a.recovered);return r.a.createElement("div",{className:"datachart"},r.a.createElement("div",{className:"datachart__header"},r.a.createElement("h3",null,"Global"===m?"Global Situation":"Situation in ".concat(m)),r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:function(){return i("bar")},"data-active":"bar"===l},"Bar"),r.a.createElement("button",{type:"button",onClick:function(){return i("line")},"data-active":"line"===l},"Line"))),r.a.createElement(Ee,{type:l,data:E,id:"confirmed",label:[h,"Confirmed cases"]}),r.a.createElement(Ee,{type:l,data:y,id:"deaths",label:[f,"Deaths"]}),r.a.createElement(Ee,{type:l,data:g,id:"recovered",label:[b,"Recovered"]}))},we=a(84),Oe=a(83),Ce=function(e){var t=e.title,a=e.today,n=e.total;return r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"color-".concat(null===t||void 0===t?void 0:t.toLowerCase())},t),r.a.createElement("p",null,A(a)," ",r.a.createElement("span",null,"Today")),r.a.createElement("p",null,A(n)," ",r.a.createElement("span",null,"Total")))},je=a(81),Se=["Cummulative","Active","Tests","Case-Fatality Ratio"],ke=function(){var e=Object(je.a)(),t=Object(o.b)(),a=Object(o.c)(ne),c=Object(o.c)(re),s=Object(o.c)(ce),l=Object(o.c)(oe);!function(e,t,a){if(t[e]){var n=t[e].coordinates,r=n.latitude,c=n.longitude,o=L.a.latLng(+r,+c);a.flyTo(o,5),a.eachLayer((function(t){var n=t.feature,r=t._tooltip,c=null===n||void 0===n?void 0:n.properties;(null===c||void 0===c?void 0:c.country)===e&&L.a.popup().setLatLng(o).setContent(null===r||void 0===r?void 0:r._content).addTo(a)}))}}(l,a,e);var i,m,v,p=(i=M(a),m=s,v=function(e){return t(ue(e))},L.a.geoJSON(i,{pointToLayer:T(m,v)}));return Object(n.useEffect)((function(){return p.addTo(e),function(){p.removeFrom(e)}})),Object(n.useEffect)((function(){var e;"Global"===l||c[l]||t((e=l,function(){var t=Object(d.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(Z()),t.next=4,f(e);case 4:n=t.sent,a(X(n)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),a(K(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()))})),r.a.createElement("div",{className:"mapcontrols"},r.a.createElement("div",{className:"mapcontrols__buttons"},Se.map((function(e){return r.a.createElement("button",{type:"button",onClick:function(){return t(ie(e))},"data-selected":s===e,key:e},e)}))),r.a.createElement("button",{type:"button","aria-label":"view globe",onClick:function(){var a=window.innerWidth>700?2:1;e.setView([20,0],a),t(ue("Global"))}},r.a.createElement("svg",{width:"20",height:"20"},r.a.createElement("path",{fill:"white",d:"M6.64 3.928C7.5 1.478 8.785 0 10 0c1.216 0 2.5 1.478 3.36 3.928H6.64zM6.75.544a10.022 10.022 0 00-4.688 3.384h3.072C5.484 2.72 6.03 1.576 6.75.544zM4.284 10c-.005-1.56.155-3.117.478-4.644H1.147a9.975 9.975 0 000 9.288h3.615A22.031 22.031 0 014.284 10zm1.432 0c-.01 1.563.163 3.121.515 4.644h7.538c.352-1.523.525-3.081.515-4.644a20.078 20.078 0 00-.515-4.644H6.23A20.078 20.078 0 005.716 10zm12.222-6.072A10.022 10.022 0 0013.25.544a11.522 11.522 0 011.616 3.384h3.072zM13.25 19.456a10.022 10.022 0 004.688-3.384h-3.072a11.522 11.522 0 01-1.616 3.384zM2.062 16.072a10.022 10.022 0 004.688 3.384 11.522 11.522 0 01-1.616-3.384H2.062zM15.238 5.356c.323 1.527.483 3.084.478 4.644a22.031 22.031 0 01-.478 4.644h3.615a9.975 9.975 0 000-9.288h-3.615zM6.64 16.072C7.5 18.522 8.784 20 10 20c1.216 0 2.5-1.478 3.36-3.928H6.64z",fillRule:"nonzero"}))))},xe=a(82),De=function(e){var t=e.children,a=new L.a.LatLng(-90,-180),n=new L.a.LatLng(90,180),c=L.a.latLngBounds(a,n),o=window.innerWidth>700?2:1;return r.a.createElement("div",null,r.a.createElement(xe.a,{center:[20,0],zoom:o,minZoom:o,zoomControl:!1,maxBounds:c,maxBoundsViscosity:.75},t))},ze=function(){var e=Object(o.c)(te),t=Object(o.c)(ne),a=Object(o.c)(oe),n=function(e,t,a){var n,r=t[a],c=e.affectedCountries,o=e.updated;if(r){var s=r.stats;n={active:r.active,cases:s.confirmed,deaths:s.deaths,recovered:s.recovered,todayCases:s.todayCases,todayDeaths:s.todayDeaths,todayRecovered:s.todayRecovered,updated:o,affectedCountries:c}}return"Global"===a&&(n=e),n}(e,t,a),c=n.active,s=n.cases,l=n.deaths,i=n.recovered,u=n.todayCases,d=n.todayDeaths,m=n.todayRecovered,v=n.updated;n.affectedCountries;return r.a.createElement("div",{className:"summary"},r.a.createElement("div",{className:"summary__data"},r.a.createElement("div",null,r.a.createElement(Ce,{title:"Active",today:u,total:c}),r.a.createElement(Ce,{title:"Recovered",today:m,total:i}),r.a.createElement(Ce,{title:"Deaths",today:d,total:l})),r.a.createElement(De,null,r.a.createElement(we.a,{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',url:R}),r.a.createElement(Oe.a,{position:"bottomright"}),r.a.createElement(ke,null))),r.a.createElement("div",{className:"summary__text"},r.a.createElement("h3",null,r.a.createElement("span",null,"Global"===a?"Globally":"In ".concat(a)),", as of ",r.a.createElement("span",null,new Date(v).toString()),", there has been"," ",r.a.createElement("span",{className:"color-active"},A(s)," confirmed cases")," ","of COVID-19, including"," ",r.a.createElement("span",{className:"color-deaths"},A(l)," deaths")," ","reported by Johns Hopkins University.")))},Me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ze,null),r.a.createElement(ge,null))},Ae=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(O()),e.next=4,h();case 4:a=e.sent,t(C(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(w(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(P()),e.next=4,h("countries");case 4:a=e.sent,t(Q(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(Y(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(j()),e.next=4,f();case 4:a=e.sent,t(S(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(k(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(s.a,null,r.a.createElement(he,null),r.a.createElement(l.c,null,r.a.createElement("main",null,r.a.createElement(l.a,{path:"/coronavirus-dashboard",component:Me}))),r.a.createElement("footer",null,r.a.createElement("p",null,"Made by Dhikhan")))},He=a(9),Ne=Object(He.c)({worldwide:x,mapData:de,country:$}),Le=Object(m.a)({reducer:Ne});Object(c.render)(r.a.createElement(o.a,{store:Le},r.a.createElement(Ae,null)),document.querySelector("#root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.0c51b7a4.chunk.js.map