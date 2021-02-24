(this["webpackJsonpcoronavirus-dashboard"]=this["webpackJsonpcoronavirus-dashboard"]||[]).push([[0],{34:function(e,t,a){e.exports=a(64)},45:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),o=a(2),s=(a(45),a(1)),l=a.n(s),i=a(7),u=a(8),d=a(15),m=a.n(d),v=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/jhucsse",e.prev=1,e.next=4,m.a.get("https://disease.sh/v3/covid-19/jhucsse");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/countries",e.prev=1,e.next=4,m.a.get("https://disease.sh/v3/covid-19/countries");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://disease.sh/v3/covid-19/all",e.prev=1,e.next=4,m.a.get("https://disease.sh/v3/covid-19/all");case 4:return t=e.sent,e.abrupt("return",t.data);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),f=function(e){e.status="pending",e.error=null},y=function(e,t){var a=t.payload;e.status="failure",e.error=a},b=Object(u.b)({name:"statistics",initialState:{status:"idle",error:null,cummulative:{active:0,affectedCountries:0,todayCases:0,todayDeaths:0,todayRecovered:0,recovered:0,deaths:0,updated:0,cases:0,confirmed:0},historical:{cases:{},deaths:{},recovered:{}}},reducers:{fetchWorldWideStart:f,fetchWorldWideSuccess:function(e,t){var a=t.payload;e.status="success",e.cummulative=a,e.error=null},fetchWorldWideFailure:y,fetchAllHistoricalStart:f,fetchAllHistoricalSuccess:function(e,t){var a=t.payload;e.status="success",e.historical=a,e.error=null},fetchAllHistoricalFailure:y}}),E=b.actions,g=E.fetchWorldWideFailure,w=E.fetchWorldWideStart,C=E.fetchWorldWideSuccess,O=(E.fetchAllHistoricalStart,E.fetchAllHistoricalSuccess,E.fetchAllHistoricalFailure,b.reducer),S=a(13),j=a(10),x={"Bosnia and Herzegovina":"Bosnia",Burma:"Myanmar","Congo (Brazzaville)":"Congo","Congo (Kinshasa)":"DRC",Eswatini:"Swaziland","Holy See":"Holy See (Vatican City State)","Korea, South":"S. Korea",Laos:"Lao People's Democratic Republic",Libya:"Libyan Arab Jamahiriya","North Macedonia":"Macedonia",Syria:"Syrian Arab Republic","Taiwan*":"Taiwan",US:"USA","United Arab Emirates":"UAE","United Kingdom":"UK","West Bank and Gaza":"Palestine","Cote d'Ivoire":"C\xf4te d'Ivoire"};function z(e){return Object.values(e).map((function(e){return t=e,{type:"Feature",properties:Object(j.a)({},t),geometry:{type:"Point",coordinates:[+t.coordinates.longitude,+t.coordinates.latitude]}};var t}))}function k(e){var t=String(e);return t=(t=(t=t.split("").reverse()).reduce((function(e,a,n){var r=(n+1)%3===0&&n+1<t.length,c="".concat(e).concat(a);return r&&(c="".concat(c,",")),c}),"")).split("").reverse().join("")}function D(e){return e<=1e3?[4,4]:e>1e3&&e<=1e4?[6,6]:e>1e4&&e<=5e4?[8,8]:e>5e4&&e<=3e5?[10,10]:e>3e5&&e<=2e6?[12,12]:e>2e6&&e<=5e6?[14,14]:[16,16]}function A(e){return function(e){var t=[];return e.forEach((function(e){"Kosovo"!==e.country&&"Unknown"!==e.province&&"Recovered"!==e.province&&(x[e.country]||t.push(e),x[e.country]&&(e.country=x[e.country],t.push(e)))})),t}(e).reduce((function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(S.a)({},"".concat(t.province?"".concat(t.province,","):""," ").concat(t.country),t))}),{})}var R=a(3),M=a.n(R),H="https://api.mapbox.com/styles/v1/kriszzy01/ckkcxmtt12ax117mn75yqjd4a/tiles/256/{z}/{x}/{y}@2x?access_token=".concat("pk.eyJ1Ijoia3Jpc3p6eTAxIiwiYSI6ImNra2N4a3R2ZzA1eGgyb255aDVwb2o4eXQifQ.I_ecRnkH46P6IHs1UCtB_A");function T(e,t){return function(a,n){var r,c=function(e,t){var a=e.properties,n=a.stats,r=a.active,c=a.tests,o=a.province,s=a.country;switch(t){case"Active":return{size:r,class:"icon-active",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-active">').concat(k(r),"</span> \n              Active Cases\n          </p>\n      </div>\n      ")};case"Tests":return{size:c/25,class:"icon-tests",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-active">').concat(k(c),"</span> Tests carried out\n          </p>\n      </div>\n      ")};case"Case-Fatality Ratio":return{size:100*n.deaths/n.confirmed,class:"icon-ratio",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-deaths">\n              ').concat((100*n.deaths/n.confirmed).toFixed(2),"</span>% Case-Fatality Ratio\n          </p>\n      </div>\n      ")};default:return{size:n.confirmed,class:"",html:"\n      <div>\n          <h2>".concat(o?"".concat(o,","):""," ").concat(s,'</h2>\n          <p>\n            <span class="color-active">').concat(k(n.confirmed),'</span> Cases</p>\n          <p>\n            <span class="color-deaths">').concat(k(n.deaths),'</span> Deaths</p>\n          <p>\n            <span class="color-recovered">').concat(k(n.recovered),"</span> Recovered</p>\n      </div>\n      ")}}}(a,e),o=M.a.marker(n,{icon:M.a.divIcon({className:"icon ".concat(c.class),iconSize:"icon-ratio"===c.class?(r=c.size,r<=1.5?[4,4]:r>1.5&&r<=3?[6,6]:r>3&&r<=4.5?[8,8]:r>4.5&&r<=8?[10,10]:r>8&&r<=12.5?[12,12]:r>12.5&&r<=16?[14,14]:[16,16]):D(c.size)})});return o.bindPopup(c.html),o.bindTooltip(c.html),o.on("click",(function(e){var a=e.target,n=a._map,r=a.feature,c=e.latlng;t(r.properties.country),n.flyTo(c,5)})),o}}a(33);var N=Object(u.b)({name:"country",initialState:{status:"idle",error:null,cummulative:{},historical:{}},reducers:{fetchCountryStart:function(e){e.status="pending",e.error=null},fetchCountrySuccess:function(e,t){var a=function(e){return e.reduce((function(e,t){var a=t.countryInfo,n=a.lat,r=a.long,c=a.flag,o={country:t.country,active:t.active,tests:t.tests,flag:c,stats:{deaths:t.deaths,recovered:t.recovered,confirmed:t.cases,todayCases:t.todayCases,todayDeaths:t.todayDeaths,todayRecovered:t.todayRecovered},coordinates:{latitude:n,longitude:r}};return Object(j.a)(Object(j.a)({},e),{},Object(S.a)({},t.country,o))}),{})}(t.payload);e.status="success",e.cummulative=a,e.error=null},fetchCountryFailure:function(e,t){var a=t.payload;e.status="failure",e.error=a}}}),L=N.actions,F=L.fetchCountryStart,I=L.fetchCountrySuccess,W=L.fetchCountryFailure,_=N.reducer,P=Object(u.b)({name:"country",initialState:{status:"idle",error:null,cummulative:{},historical:{}},reducers:{fetchProvinceStart:function(e){e.status="pending",e.error=null},fetchProvinceSuccess:function(e,t){var a=A(t.payload);e.status="success",e.cummulative=a,e.error=null},fetchProvinceFailure:function(e,t){var a=t.payload;e.status="failure",e.error=a}}}),B=P.actions,U=B.fetchProvinceStart,G=B.fetchProvinceSuccess,J=B.fetchProvinceFailure,K=P.reducer,V=a(9),q=function(e){return e.province.cummulative},Q=function(e){return e.worldwide.cummulative},Y=function(e){return e.country.cummulative},Z=function(e){return e.mapData.activeData},X=function(e){return e.mapData.targetData},$=Object(u.b)({name:"mapData",initialState:{activeData:"Cummulative",targetData:"Global"},reducers:{setMapData:function(e,t){var a=t.payload;e.activeData=a},setTargetData:function(e,t){var a=t.payload;e.targetData=a}}}),ee=$.actions,te=ee.setMapData,ae=ee.setTargetData,ne=$.reducer,re=function(e){var t=e.searchResult,a=e.searchTerm,c=e.setSearchTerm,s=Object(o.b)(),l=t.length>0,i=Object(n.useRef)(null);return Object(n.useEffect)((function(){var e;l&&(null===(e=i.current)||void 0===e||e.focus())}),[t]),Object(n.useEffect)((function(){var e;a&&(null===(e=document.querySelector("body"))||void 0===e||e.setAttribute("data-scroll",""));return function(){var e;null===(e=document.querySelector("body"))||void 0===e||e.removeAttribute("data-scroll")}}),[""!==a]),r.a.createElement("div",{className:"dropdown",id:"dropdown","data-expanded":""!==a,ref:i},l?r.a.createElement("ul",null,t.map((function(e){var t=e.flag,a=e.country;return r.a.createElement("li",{key:a,onClick:function(){return s(ae(a)),void c("")}},r.a.createElement("span",null,r.a.createElement("img",{src:t,alt:"flag of ".concat(a)})),r.a.createElement("span",null,a))}))):r.a.createElement("p",null,"Country not found"))},ce=function(e){var t=e.setOpenSearchbar,a=Object(n.useState)(""),c=Object(V.a)(a,2),s=c[0],l=c[1],i=Object(o.c)(Y),u=Object.values(i).filter((function(e){var t=e.country;return""===s?null:t.toLowerCase().startsWith(s.toLowerCase())}));return r.a.createElement("div",{className:"searchbar-container"},r.a.createElement("div",{className:"searchbar"},r.a.createElement("div",null,r.a.createElement("span",{"aria-hidden":"true",style:{height:"24px"}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))),r.a.createElement("input",{type:"text",value:s,placeholder:"Search by Country",onChange:function(e){return l(e.target.value)}})),r.a.createElement(re,{searchResult:u,searchTerm:s,setSearchTerm:l})),r.a.createElement("button",{type:"button","aria-label":"close searchbar",style:{height:"24px"},onClick:function(){return t(!1)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}))))},oe=function(){var e=Object(n.useState)(!1),t=Object(V.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(V.a)(o,2),l=s[0],i=s[1];return r.a.createElement("header",null,r.a.createElement("div",{"data-searchcountry":a},r.a.createElement("button",{type:"button","aria-labelledby":"open menu","aria-expanded":l,onClick:function(){return i(!l)}},r.a.createElement("span",{className:"vh",id:"menu-label"},l?"close menu":"open menu")),r.a.createElement("h1",null,"COVID-19 Dashboard"),r.a.createElement("button",{type:"button","aria-label":"open searchbar",style:{height:"24px"},onClick:function(){return c(!a)}},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"24",width:"24"},r.a.createElement("path",{d:"M0 0h24v24H0z",fill:"none"}),r.a.createElement("path",{d:"M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}))),r.a.createElement(ce,{setOpenSearchbar:c}),r.a.createElement("nav",null,r.a.createElement("a",{role:"presentation"},"Overview"),r.a.createElement("a",{role:"presentation"},"Data Table"))))},se=a(69),le=a(68),ie=function(e){var t=e.title,a=e.today,n=e.total;return r.a.createElement("div",{className:"card"},r.a.createElement("h2",{className:"color-".concat(null===t||void 0===t?void 0:t.toLowerCase())},t),r.a.createElement("p",null,k(a)," ",r.a.createElement("span",null,"Today")),r.a.createElement("p",null,k(n)," ",r.a.createElement("span",null,"Total")))},ue=a(66),de=["Cummulative","Active","Tests","Case-Fatality Ratio"],me=function(){var e=Object(ue.a)(),t=Object(o.b)(),a=Object(o.c)(q),c=Object(o.c)(Y),s=Object(o.c)(Z),l=Object(o.c)(X),i=z(a),u=z(c),d=s.includes("Cummulative")||s.includes("Ratio")?i:u;!function(e,t,a){if(t[e]){var n=t[e].coordinates,r=n.latitude,c=n.longitude,o=M.a.latLng(+r,+c);a.flyTo(o,5)}}(l,c,e);var m,v,p,h=(m={type:"FeatureCollection",features:d},v=s,p=function(e){return t(ae(e))},M.a.geoJSON(m,{pointToLayer:T(v,p)}));return Object(n.useEffect)((function(){return h.addTo(e),function(){h.removeFrom(e)}})),r.a.createElement("div",{className:"mapcontrols"},r.a.createElement("div",{className:"mapcontrols__buttons"},de.map((function(e){return r.a.createElement("button",{type:"button",onClick:function(){return t(te(e))},"data-selected":s===e,key:e},e)}))),r.a.createElement("select",{className:"mapcontrols__dropdown",value:s,onChange:function(e){return t(te(e.target.value))}},de.map((function(e){return r.a.createElement("option",{value:e,key:e},e)}))),r.a.createElement("button",{type:"button","aria-label":"view globe",onClick:function(){e.setView([20,0],2),t(ae("Global"))}},r.a.createElement("svg",{width:"20",height:"20"},r.a.createElement("path",{fill:"white",d:"M6.64 3.928C7.5 1.478 8.785 0 10 0c1.216 0 2.5 1.478 3.36 3.928H6.64zM6.75.544a10.022 10.022 0 00-4.688 3.384h3.072C5.484 2.72 6.03 1.576 6.75.544zM4.284 10c-.005-1.56.155-3.117.478-4.644H1.147a9.975 9.975 0 000 9.288h3.615A22.031 22.031 0 014.284 10zm1.432 0c-.01 1.563.163 3.121.515 4.644h7.538c.352-1.523.525-3.081.515-4.644a20.078 20.078 0 00-.515-4.644H6.23A20.078 20.078 0 005.716 10zm12.222-6.072A10.022 10.022 0 0013.25.544a11.522 11.522 0 011.616 3.384h3.072zM13.25 19.456a10.022 10.022 0 004.688-3.384h-3.072a11.522 11.522 0 01-1.616 3.384zM2.062 16.072a10.022 10.022 0 004.688 3.384 11.522 11.522 0 01-1.616-3.384H2.062zM15.238 5.356c.323 1.527.483 3.084.478 4.644a22.031 22.031 0 01-.478 4.644h3.615a9.975 9.975 0 000-9.288h-3.615zM6.64 16.072C7.5 18.522 8.784 20 10 20c1.216 0 2.5-1.478 3.36-3.928H6.64z",fillRule:"nonzero"}))))},ve=a(67),pe=function(e){var t=e.children,a=new M.a.LatLng(-90,-180),n=new M.a.LatLng(90,180),c=M.a.latLngBounds(a,n);return r.a.createElement("div",null,r.a.createElement(ve.a,{center:[20,0],zoom:2,minZoom:2,zoomControl:!1,maxBounds:c,maxBoundsViscosity:.75},t))},he=function(){var e=Object(o.c)(Q),t=Object(o.c)(Y),a=Object(o.c)(X),n=function(e,t,a){var n,r=t[a],c=e.affectedCountries,o=e.updated;if(r){var s=r.stats;n={active:r.active,cases:s.confirmed,deaths:s.deaths,recovered:s.recovered,todayCases:s.todayCases,todayDeaths:s.todayDeaths,todayRecovered:s.todayRecovered,updated:o,affectedCountries:c}}return"Global"===a&&(n=e),n}(e,t,a),c=n.active,s=n.cases,l=n.deaths,i=n.recovered,u=n.todayCases,d=n.todayDeaths,m=n.todayRecovered,v=n.updated;n.affectedCountries;return r.a.createElement("div",{className:"summary"},r.a.createElement("div",{className:"summary__data"},r.a.createElement("div",null,r.a.createElement(ie,{title:"Active",today:u,total:c}),r.a.createElement(ie,{title:"Recovered",today:m,total:i}),r.a.createElement(ie,{title:"Deaths",today:d,total:l})),r.a.createElement(pe,null,r.a.createElement(se.a,{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',url:H}),r.a.createElement(le.a,{position:"bottomright"}),r.a.createElement(me,null))),r.a.createElement("div",{className:"summary__text"},r.a.createElement("h3",null,r.a.createElement("span",null,"Global"===a?"Globally":"In ".concat(a)),", as of ",r.a.createElement("span",null,new Date(v).toString()),", there has been"," ",r.a.createElement("span",{className:"color-active"},k(s)," confirmed cases")," ","of COVID-19, including"," ",r.a.createElement("span",{className:"color-deaths"},k(l)," deaths")," ","reported by Johns Hopkins University.")))},fe=function(){var e=Object(o.b)();return Object(n.useEffect)((function(){e(function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(U()),e.next=4,v();case 4:a=e.sent,t(G(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(J(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(w()),e.next=4,h();case 4:a=e.sent,t(C(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(g(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()),e(function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(F()),e.next=4,p();case 4:a=e.sent,t(I(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(W(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),r.a.createElement(r.a.Fragment,null,r.a.createElement(oe,null),r.a.createElement("main",null,r.a.createElement(he,null)),r.a.createElement("footer",null))},ye=a(5),be=Object(ye.c)({worldwide:O,mapData:ne,country:_,province:K}),Ee=Object(u.a)({reducer:be});Object(c.render)(r.a.createElement(o.a,{store:Ee},r.a.createElement(fe,null)),document.querySelector("#root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.cb70effd.chunk.js.map