(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{50:function(e,t,a){e.exports=a(63)},58:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),o=a.n(c),l=(a(58),a(32)),i=a(98),m=a(90),s=a(96),u=a(99),p=a(93),h=a(94),d=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),d=Object(l.a)(o,2),g=d[0],b=d[1],y=Object(n.useState)(!1),E=Object(l.a)(y,2),f=E[0],w=E[1];return r.a.createElement(i.a,{m:2,style:{backgroundImage:'url("https://images.pexels.com/photos/2114014/pexels-photo-2114014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',backgroundSize:"cover",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"space-around"}},r.a.createElement(i.a,null,r.a.createElement(m.a,{variant:"h4",gutterBottom:!0,style:{color:"white",textAlign:"center"}},"Weather by city"),r.a.createElement("p",{style:{color:"white",textAlign:"center"}},"please enter the city name"),r.a.createElement(s.a,{label:"Enter City Name",value:a,onChange:function(e){c(e.target.value)},variant:"outlined"}),r.a.createElement(u.a,{variant:"contained",color:"primary",onClick:function(){var e="https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=").concat("0eb75fbb260fe905c23785f0c50f02ba","&units=metric");fetch(e).then(function(e){return e.json()}).then(function(e){b(e),w(!0)}).catch(function(e){console.error("Error fetching weather data:",e),b(null),w(!1)})},style:{marginTop:"11px"}},"Get Weather")),f&&g&&r.a.createElement(p.a,{variant:"outlined",style:{backgroundImage:'url("https://images.pexels.com/photos/2909083/pexels-photo-2909083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',width:500,height:400}},r.a.createElement(h.a,null,r.a.createElement("p",{style:{color:"white",textAlign:"center"}},"Clouds"),r.a.createElement(m.a,{variant:"h6"},r.a.createElement("span",null,"Weather Details for city: "),g.name),g.weather&&g.weather.length>0&&r.a.createElement(m.a,{variant:"body1"},r.a.createElement("span",null,"Summary: "),g.weather[0].description),g.main&&r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,{variant:"body1"},"Temperature: ".concat(g.main.temp,"\xb0C")),r.a.createElement(m.a,{variant:"body1"},"Humidity: ".concat(g.main.humidity,"%"))),g.wind&&r.a.createElement(m.a,{variant:"body1"},"Wind Speed: ".concat(g.wind.speed," m/s")))))},g=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,95)).then(function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null))),g()}},[[50,3,2]]]);
//# sourceMappingURL=main.0e1e0eb0.chunk.js.map