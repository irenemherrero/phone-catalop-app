(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/spinner.cffa9d9d.gif"},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(15),r=a.n(l),i=(a(26),a(5)),s=a(6),m=a(8),o=a(7),u=a(9),p=a(34),d=a(20),h=a(16),E=Object(h.a)(function(e,t){return"UPDATE_STATE"===t.type?Object(d.a)({},e,{devicesData:t.devicesData}):e},{devicesData:[]}),v=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={devicesData:E.getState().devicesData},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("ul",{className:"container-list-phones"},this.state.devicesData.map(function(e){return c.a.createElement("li",{key:e.id,className:"phone-container"},c.a.createElement(p.a,{to:"/".concat(e.id)},c.a.createElement("h2",{className:"phone-title"},e.title),c.a.createElement("img",{className:"phone-image",src:e.image,alt:e.title}),c.a.createElement("p",{className:"phone-description"},e.description),c.a.createElement("p",{className:"phone-color"},e.color),c.a.createElement("p",{className:"phone-price"},e.price)))}))}}]),t}(n.Component),f=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={phoneData:E.getState().devicesData},e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e,t=this.props.match.params.id,a=parseInt(t);0!==this.state.phoneData.length?(e=this.state.phoneData[a],localStorage.setItem("savedDevice",JSON.stringify(e))):e=JSON.parse(localStorage.getItem("savedDevice"));var n=e,l=n.title,r=n.image,i=n.bands,s=n.camera,m=n.color,o=n.cpu,u=n.dimensions,p=n.system,d=n.price,h=n.ram,E=n.screen,v=n.sim,f=n.weight,b=n.languages;return c.a.createElement("div",{className:"detail-data-container"},c.a.createElement("div",{className:"detail-data-container-primary"},c.a.createElement("h2",{className:"phone-title"},l),c.a.createElement("img",{className:"phone-image",src:r,alt:l}),c.a.createElement("p",{className:"phone-color"},m),c.a.createElement("p",{className:"phone-price"},d)),c.a.createElement("div",{className:"detail-data-container-secondary"},c.a.createElement("h3",null,"Detalles:"),c.a.createElement("p",null,"SIM: ",v),c.a.createElement("p",null,"CPU: ",o),c.a.createElement("p",null,"Sistema operativo: ",p),c.a.createElement("p",null,"RAM: ",h),c.a.createElement("p",null,"Peso: ",f),c.a.createElement("p",null,"Tama\xf1o: ",u),c.a.createElement("p",null,"Idiomas:"),c.a.createElement("ul",{className:"list-detail"},null!==b?b.map(function(e,t){return c.a.createElement("li",{className:"list-item-detail",key:t},e)}):null),c.a.createElement("p",null,"Bandas:"),c.a.createElement("ul",{className:"list-detail longline"},i.map(function(e,t){return c.a.createElement("li",{className:"list-item-detail",key:t},e)})),c.a.createElement("p",null,"Pantalla:"),c.a.createElement("ul",{className:"list-detail"},E.map(function(e,t){return c.a.createElement("li",{className:"list-item-detail",key:t},e)})),c.a.createElement("p",null,"C\xe1mara:"),c.a.createElement("ul",{className:"list-detail"},s.map(function(e,t){return c.a.createElement("li",{className:"list-item-detail",key:t},e)}))))}}]),t}(n.Component),b=a(18),N=a.n(b),g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(o.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"placeholder"},c.a.createElement("img",{className:"placeholder-spinner",src:N.a,alt:"Cargando..."}))}}]),t}(n.Component),O=a(37),j=a(36),D=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(m.a)(this,Object(o.a)(t).call(this))).state={devicesData:null},E.subscribe(function(){e.setState({devicesData:E.getState().devicesData})}),e}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){fetch("https://my-json-server.typicode.com/irenemherrero/demo/devices/").then(function(e){return e.json()}).then(function(e){localStorage.setItem("savedPhonesData",JSON.stringify(e)),E.dispatch({type:"UPDATE_STATE",devicesData:e})}).catch(function(e){console.log("Ha sucedido un error: ".concat(e))})}},{key:"render",value:function(){var e=this;return c.a.createElement(O.a,null,c.a.createElement(j.a,{exact:!0,path:"/",render:function(){return null===e.state.devicesData?c.a.createElement(g,null):c.a.createElement(v,null)}}),c.a.createElement(j.a,{path:"/:id",render:function(e){return c.a.createElement(f,{match:e.match})}}))}}]),t}(n.Component),y=a(35);r.a.render(c.a.createElement(y.a,null,c.a.createElement(D,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.f1c0b801.chunk.js.map