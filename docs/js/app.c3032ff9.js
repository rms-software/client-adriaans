(function(e){function t(t){for(var a,s,i=t[0],c=t[1],l=t[2],d=0,p=[];d<i.length;d++)s=i[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,i=1;i<r.length;i++){var c=r[i];0!==n[c]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/client-adriaans/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"09f7":function(e,t,r){"use strict";r("e172")},1041:function(e,t,r){"use strict";r("8927")},"14c9":function(e,t,r){"use strict";r("ae39")},"21bb":function(e,t,r){"use strict";r("2dad")},"2dad":function(e,t,r){},3609:function(e,t,r){"use strict";r("719d")},"49af":function(e,t,r){"use strict";r("ef74")},"4c91":function(e,t,r){},"4cde":function(e,t,r){"use strict";r("4c91")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.rmsConnection?[r("Header",{attrs:{logo:e.companyInfo.companyLogo,navLinks:e.navLinks,linkWidth:120}}),r("div",{staticStyle:{margin:"50px","flex-grow":"1"}},[r("router-view")],1),r("Footer",{attrs:{socials:e.companyInfo.socials,image:e.companyInfo.companyLogo}})]:r("div",{attrs:{id:"connection-error"}},[e._v(" ERROR: Connection with server failed ")])],2)},s=[],i=r("1da1"),c=(r("96cf"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("span",[r("div",{staticClass:"header"},[e.logo?r("span",{attrs:{id:"logo"}},[r("img",{attrs:{src:e.logo,alt:"logo"}})]):e._e(),e.title?r("span",{attrs:{id:"title"}},[e._v(" "+e._s(e.title)+" ")]):e._e(),r("span",{attrs:{id:"navbar"}},e._l(e.navLinks,(function(t){return r("router-link",{key:t.to,staticClass:"router-link",style:"width: "+e.linkWidth+"px;",attrs:{to:t.to}},[e._v(" "+e._s(t.name)+" ")])})),1)]),r("div",{staticClass:"navigator"},e._l(e.navLinks,(function(t){return r("router-link",{key:t.to,staticClass:"router-link",style:"width: "+e.linkWidth+"px;",attrs:{to:t.to}},[e._v(" "+e._s(t.name)+" ")])})),1),e.navLinks.length>0?r("div",{staticClass:"mobile-navigator"},[r("button",{staticClass:"btn",on:{click:e.toggleBurger}},[r("unicon",{attrs:{name:"bars",fill:"black"}})],1),e.burgerOpen?r("div",{staticClass:"link-list"},e._l(e.navLinks,(function(t){return r("router-link",{key:t.to,staticClass:"router-link",attrs:{to:t.to},nativeOn:{click:function(t){e.burgerOpen=!1}}},[e._v(" "+e._s(t.name)+" ")])})),1):e._e()]):e._e()])}),l=[],u=(r("a9e3"),{props:{title:{type:String,default:null},logo:{type:String,default:null},navLinks:{type:Array,default:function(){return[]}},linkWidth:{type:Number,default:40}},data:function(){return{burgerOpen:!1}},methods:{toggleBurger:function(){this.burgerOpen=!this.burgerOpen}}}),d=u,p=(r("3609"),r("2877")),m=Object(p["a"])(d,c,l,!1,null,"3de1626d",null),v=m.exports,f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"footer"},[e.socials?r("DoubleSection",{scopedSlots:e._u([{key:"left",fn:function(){return[r("span",{attrs:{id:"image-and-version"}},[r("div",[e.image?r("img",{staticStyle:{width:"200px",padding:"20px 20px 20px 0px"},attrs:{src:e.image,alt:"footer image"}}):e._e()]),r("div",[e._v(" v"+e._s(e.version)+" ")])])]},proxy:!0},{key:"right",fn:function(){return[r("span",{attrs:{id:"socials"}},[r("a",{attrs:{rel:"noopener",href:"https://www.facebook.com/"+e.socials.facebook,target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"facebook"}}),e._v(" "+e._s(e.socials.facebook)+" ")],1)]),r("a",{attrs:{rel:"noopener",href:"mailto:"+e.socials.email,target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"at"}}),e._v(" "+e._s(e.socials.email)+" ")],1)]),r("a",{attrs:{rel:"noopener",href:"tel:"+e.socials.tel,target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"phone"}}),e._v(" "+e._s(e.socials.tel)+" ")],1)]),r("a",{attrs:{rel:"noopener",href:"https://api.whatsapp.com/send?phone="+e.socials.tel+"&app=DWWSite",target:"_blank"}},[r("div",{staticClass:"social"},[r("unicon",{attrs:{name:"whatsapp"}}),e._v(" "+e._s(e.socials.tel)+" ")],1)])])]},proxy:!0}],null,!1,1758362901)}):e._e()],1)},b=[],h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"double-section"},[r("span",{staticClass:"left"},[e._t("left")],2),r("span",[e._t("right")],2)])},g=[],w={},k=w,_=(r("14c9"),Object(p["a"])(k,h,g,!1,null,"5a86c134",null)),y=_.exports,C=r("9224"),x={components:{DoubleSection:y},props:{socials:{type:Object,default:function(){}},image:{type:String,default:null}},data:function(){return{version:C["a"]}}},P=x,j=(r("4cde"),Object(p["a"])(P,f,b,!1,null,"6f13a715",null)),O=j.exports,S=(r("99af"),r("bc3a")),D=r.n(S),N={socials:{facebook:"BakkerijAdriaans",email:"bakkerijadriaans@gmail.com",tel:"0624939954"},server_url:"https://rhino-ms.herokuapp.com",company_id:2},$={},E=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!$[t]){e.next=4;break}return e.abrupt("return",$[t]);case 4:return e.next=6,r();case 6:return $[t]=e.sent,e.abrupt("return",$[t]);case 8:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(N.server_url,"/api/ping"),e.prev=1,e.next=4,D.a.get(t);case 4:return r=e.sent,e.abrupt("return",200===r.status);case 8:return e.prev=8,e.t0=e["catch"](1),e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),z=function(){return E("getCompanyInfo",Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(N.server_url,"/api/open/").concat(N.company_id,"/general/get-info"),e.next=3,D.a.get(t);case 3:return r=e.sent,r.data.socials=N.socials,e.abrupt("return",r.data);case 6:case"end":return e.stop()}}),e)}))))},L=function(){return E("getCompanyProducts",Object(i["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="".concat(N.server_url,"/api/open/").concat(N.company_id,"/products/all"),e.next=3,D.a.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)}))))},I=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r="".concat(N.server_url,"/api/open/").concat(N.company_id,"/orders"),e.next=3,D.a.post(r,t);case 3:return a=e.sent,e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W={getCompanyInfo:z,getProductList:L,testConnection:R,placeOrder:I},T={components:{Header:v,Footer:O},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W.testConnection();case 2:return e.rmsConnection=t.sent,console.log(e.rmsConnection),t.next=6,W.getCompanyInfo();case 6:e.companyInfo=t.sent,document.title=e.companyInfo.companyName;case 8:case"end":return t.stop()}}),t)})))()},data:function(){return{companyInfo:{},rmsConnection:!0,navLinks:[{name:"Home",to:"/home"},{name:"Producten",to:"/producten"},{name:"Winkelwagen",to:"/cart"}],socials:[{type:"facebook",link:"https://www.facebook.com/De-Wit-Worstenbrood-100184555272377/",name:"De Wit Worstenbrood"},{type:"at",link:"mailto:john@dewitworstenbrood.nl",name:"john@dewitworstenbrood.nl"},{type:"phone",link:"tel:31610184265",name:"31610184265"},{type:"whatsapp",link:"https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text=Hallo, ik zou graag <aantal> <product> willen afhalen, wanneer kan ik ze komen ophalen?",name:"31610184265"}]}}},A=T,B=(r("5c0b"),Object(p["a"])(A,o,s,!1,null,null,null)),M=B.exports,F=r("cb81"),J=r.n(F),q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("OverlayPopup",{ref:"orderCount"},[r("div",{staticClass:"order-count-wrapper"},[r("div",{staticClass:"order-count-announcement"},[e._v(" U staat op het punt om '"+e._s(e.activeProduct.name)+"' toe te voegen aan uw winkelmand ")]),r("div",{staticClass:"order-count-counter"},[r("span",{staticStyle:{"margin-right":"20px"}},[e._v("Hoeveelheid: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.productCount,expression:"productCount"}],attrs:{type:"number"},domProps:{value:e.productCount},on:{input:function(t){t.target.composing||(e.productCount=t.target.value)}}})]),r("div",{staticClass:"order-count-counter"},[r("span",{staticStyle:{"margin-right":"20px"}},[e._v("Minder pittig: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.lessSpicy,expression:"lessSpicy"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.lessSpicy)?e._i(e.lessSpicy,null)>-1:e.lessSpicy},on:{change:function(t){var r=e.lessSpicy,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,s=e._i(r,o);a.checked?s<0&&(e.lessSpicy=r.concat([o])):s>-1&&(e.lessSpicy=r.slice(0,s).concat(r.slice(s+1)))}else e.lessSpicy=n}}})]),r("span",[r("button",{staticClass:"btn cancle",staticStyle:{"margin-right":"20px"},on:{click:function(t){e.$refs.orderCount.show=!1}}},[e._v(" ANNULEER ")]),r("button",{staticClass:"btn confirm",on:{click:e.addProductsToBasket}},[e._v(" TOEVOEGEN € "+e._s((e.productCount*e.activeProduct.price).toFixed(2))+" ")])])])]),r("OverlayPopup",{ref:"basketView"},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"order-count-wrapper"},[r("div",{staticClass:"order-count-announcement"},[e._v(" Winkelmand • "),r("span",{staticClass:"price"},[e._v("€ "+e._s(e.basketTotal.toFixed(2)))])]),r("table",{staticClass:"basket-list"},[r("thead",[r("tr",[r("th",[e._v("Product")]),r("th",[e._v("Aantal")]),r("th",[e._v("Prijs totaal")])])]),r("tbody",e._l(Object.entries(e.basket),(function(t,a){return r("tr",{key:a},[r("td",[e._v(" "+e._s(t[0])+" ")]),r("td",[e._v(" "+e._s(t[1].count)+" ")]),r("td",[e._v(" € "+e._s((t[1].count*t[1].price).toFixed(2))+" ")])])})),0)]),r("span",[r("span",[e._v("Ophaal datum   ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.pickupDate,expression:"pickupDate"}],staticStyle:{width:"120px","margin-bottom":"20px"},attrs:{type:"date"},domProps:{value:e.pickupDate},on:{input:function(t){t.target.composing||(e.pickupDate=t.target.value)}}})]),r("span",[r("button",{class:{"btn confirm":!0},staticStyle:{"margin-right":"20px"},on:{click:function(t){e.$refs.basketView.show=!1}}},[e._v(" VERDER WINKELEN ")]),r("button",{class:{"btn confirm":!0,disabled:""===e.pickupDate},attrs:{disabled:""===e.pickupDate},on:{click:function(t){e.$refs.basketView.show=!1,e.$refs.orderPlacer.show=!0}}},[e._v(" BESTELLEN € "+e._s(e.basketTotal.toFixed(2))+" ")])])])])])]),r("OverlayPopup",{ref:"orderPlacer"},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("div",{staticClass:"order-count-wrapper"},[r("div",{staticClass:"order-count-announcement"},[e._v(" Bestellen ")]),r("div",{staticStyle:{"margin-bottom":"40px"}},[e._v(" Kies Uw methode om te bestellen: ")]),r("div",{staticClass:"order-methods"},[r("a",{staticClass:"order-method-card",attrs:{rel:"noopener",href:"https://api.whatsapp.com/send?phone=31610184265&app=DWWSite&text="+e.GetOrderMessage(),target:"_blank"}},[r("unicon",{attrs:{name:"whatsapp"}})],1),r("a",{staticClass:"order-method-card",attrs:{rel:"noopener",href:"mailto:john@dewitworstenbrood.nl?subject=bestelling&body="+e.GetOrderMessage(),target:"_blank"}},[r("unicon",{attrs:{name:"envelope"}})],1)]),r("span",{staticStyle:{"margin-top":"40px"}},[r("button",{staticClass:"btn cancle",staticStyle:{"margin-right":"20px"},on:{click:function(t){e.$refs.orderPlacer.show=!1}}},[e._v(" TERUG ")])])])])])]),e._m(0)],1)},U=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticStyle:{margin:"50px","flex-grow":"1"}},[r("div",{staticClass:"content-wrapper"},[r("div",{staticClass:"content"},[r("span",{staticClass:"center",staticStyle:{padding:"20px 0px"}},[r("h1",[e._v("Bakkerij Adriaans")]),r("h3",{staticStyle:{"margin-top":"-30px"}},[e._v("Lorem Ipsum")]),r("p",[e._v(" lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ")]),r("p",[e._v(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium optio officiis consequatur, facilis sapiente ipsum commodi eos ullam tenetur iste corrupti nam quas nobis illo id odit natus nihil temporibus? ")])]),r("br"),r("br"),r("br")])])])}],H=(r("e9c4"),r("b0c0"),r("d81d"),r("4fad"),r("d3b7"),r("159b"),r("b680"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.show?r("div",{staticClass:"overlay"},[e._t("default")],2):e._e()}),G=[],V={data:function(){return{show:!1}}},Q=V,X=(r("86e8"),Object(p["a"])(Q,H,G,!1,null,null,null)),K=X.exports,Y={components:{OverlayPopup:K},methods:{orderItem:function(e){this.productCount=1,this.lessSpicy=!1,this.activeProduct=JSON.parse(JSON.stringify(this.products[e])),this.$refs.orderCount.show=!0},addProductsToBasket:function(){this.lessSpicy&&(this.activeProduct.name+=" (minder pittig)");var e=this.basket[this.activeProduct.name];e?e.count=Number(e.count)+Number(this.productCount):this.basket[this.activeProduct.name]={count:this.productCount,price:this.activeProduct.price},this.$refs.orderCount.show=!1,this.$refs.basketView.show=!0,this.calcBasketTotal()},calcBasketTotal:function(){var e=Object.entries(this.basket).map((function(e){return e[1]}));this.basketTotal=e.reduce((function(e,t){return e+t.price*t.count}),0)},GetOrderMessage:function(){var e="Beste John, ik zou graag een bestelling willen plaatsen bij de Wit worstenbroodjes. %0A%0AIk zou graag het volgende willen bestellen:%0A";return Object.entries(this.basket).forEach((function(t){e+="".concat(t[1].count,"x ").concat(t[0]," %0A")})),e+="%0ADat wordt dan in totaal ".concat(this.basketTotal.toFixed(2)," euro, en ik zou de bestelling graag af willen halen op ").concat(this.pickupDate),e}},data:function(){return{basketTotal:0,lessSpicy:!1,pickupDate:"",activeProduct:{},basket:{},productCount:1,products:[{image:"products/worstenbroodje.jpg",name:"Worstenbroodjes",description:["Normaal standaard worstenbroodje zijn altijd vers gebakken uit de oven, en handgemaakt door een hobbybakker.   Ze zijn in te vriezen als u ze heeft opgehaald.","Houd je niet van pittig bestel dan de mildere versie."],weight:"90 - 95 gram",price:1},{image:"products/worstenbroodje-klein.png",name:"Worstenbroodjes klein",description:["Deze worstenbroodjes zijn de kleinere variant van onze standaard worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper. Ze zijn in te vriezen als u ze heeft opgehaald.","Houd je niet van pittig bestel dan de mildere versie."],weight:"40 - 45 gram",price:.5},{image:"products/worstenbol.jpg",name:"Witbollen",description:["Deze worstenbroodjes zijn de bol vormige variant van onze standaard pittige worstenbroodjes, ze zijn ongeveer de helft in gewicht, en dus ook de helft goedkoper.","hou je niet van pittig? dan kun je ook in de bestelling aangeven dat je het worstenbroodje wat milder wilt hebben."],weight:"40 - 45 gram",price:.5},{image:"products/worstenbrood-xxxl.png",name:"Worstenbrood XXXL",description:["Op verzoek maken we ook XXXL worstenbroodjes. Deze worstenbroodjes zijn rond de 200 gram dus bijna een maaltijd. Leuk om cadeau te geven.","Het is ook mogelijk om er een cijfer in te laten bakken."],weight:"200 gram",price:2.5}]}}},Z=Y,ee=(r("21bb"),Object(p["a"])(Z,q,U,!1,null,null,null)),te=ee.exports,re=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"products-wrapper"},[r("div",{staticClass:"products"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],staticClass:"form-control",attrs:{type:"text",placeholder:"zoeken..."},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),r("ProductList",{attrs:{products:e.filteredProducts},on:{order:e.askAddToCart}})],1),r("Modal",{ref:"modalShoppingCart",attrs:{title:(e.orderProduct?e.orderProduct.name:"")+" bestellen"}},[r("br"),r("label",{attrs:{for:"amount"}},[e._v("Aantal")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderCount,expression:"orderCount"}],staticClass:"form-control",attrs:{type:"number",id:"order-amount"},domProps:{value:e.orderCount},on:{input:function(t){t.target.composing||(e.orderCount=t.target.value)}}}),r("br"),r("br"),r("br"),r("button",{staticClass:"btn confirm",attrs:{type:"button"},on:{click:e.putItemInBasket}},[e._v(" In winkelwagen stoppen ")])])],1)},ae=[],ne=(r("4de4"),r("caad"),r("2532"),r("7db0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"order-list"},e._l(e.products,(function(t,a){return r("div",{key:a},[r("DoubleSection",[r("p",{staticClass:"product-image-wrapper",attrs:{slot:"left"},slot:"left"},[r("img",{staticClass:"product-image",attrs:{src:t.image,alt:t.name+" product image"}})]),r("div",{staticClass:"product-info",attrs:{slot:"right"},slot:"right"},[r("div",{staticClass:"title"},[e._v(" "+e._s(t.name)+" ")]),r("div",{staticClass:"weight"},[e._v(" "+e._s(t.weight)+" • "),r("span",{staticClass:"price"},[e._v("€ "+e._s(t.basePrice.toFixed(2)))]),e._v(" per stuk ")]),r("div",{staticClass:"description"},[e._v(" "+e._s(t.description)+" ")]),r("div",[r("button",{staticClass:"btn",on:{click:function(r){return e.$emit("order",t)}}},[e._v("BESTELLEN € "+e._s(t.basePrice.toFixed(2))+" ")])])])]),r("br"),r("hr",{staticStyle:{color:"white"}}),r("br"),r("br"),r("br")],1)})),0)}),oe=[],se={props:{products:{type:Array,required:!0}},components:{DoubleSection:y}},ie=se,ce=(r("49af"),Object(p["a"])(ie,ne,oe,!1,null,"4cb5f0c9",null)),le=ce.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isOpen?r("div",{attrs:{id:"modal-wrapper"}},[r("div",{attrs:{id:"modal"}},[r("div",{attrs:{id:"header"}},[r("div",{attrs:{id:"title"}},[e._v(e._s(e.title))]),r("div",{attrs:{id:"closer"},on:{click:function(t){e.isOpen=!1}}},[e._v("x")])]),e._t("default")],2)]):e._e()},de=[],pe={props:{title:{type:String,default:"Modal Title"}},data:function(){return{isOpen:!1}}},me=pe,ve=(r("ca29"),Object(p["a"])(me,ue,de,!1,null,"f90726c0",null)),fe=ve.exports,be={components:{DoubleSection:y,ProductList:le,Modal:fe},data:function(){return{products:[],orderCount:1,searchQuery:"",orderProduct:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,W.getProductList();case 2:e.products=t.sent;case 3:case"end":return t.stop()}}),t)})))()},computed:{filteredProducts:function(){var e=this;return this.products.filter((function(t){return t.name.toLowerCase().includes(e.searchQuery.toLowerCase())}))}},methods:{askAddToCart:function(e){this.orderCount=1,this.orderProduct=e,this.$refs.modalShoppingCart.isOpen=!0},putItemInBasket:function(){var e=JSON.parse(localStorage.getItem("basket")||"[]");e.push({product:this.orderProduct,amount:this.orderCount});var t=e.reduce((function(e,t){var r=e.find((function(e){return e.product.id===t.product.id}));return r?r.amount=Number(r.amount)+Number(t.amount):e.push(t),e}),[]);localStorage.setItem("basket",JSON.stringify(t)),this.$refs.modalShoppingCart.isOpen=!1}}},he=be,ge=(r("baa1"),Object(p["a"])(he,re,ae,!1,null,"d9ac9b7c",null)),we=ge.exports,ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reviews-wrapper"},[r("div",{staticClass:"reviews"},[r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[e._v("Hoeveel sterren geef jij mijn worstenbroodjes?")]),r("div",{staticClass:"entry stars"},[r("Unicon",{staticClass:"star",attrs:{name:"star",fill:e.form.stars>=1?"gold":"gray"},on:{click:function(t){e.form.stars=1}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:e.form.stars>=2?"gold":"gray"},on:{click:function(t){e.form.stars=2}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:e.form.stars>=3?"gold":"gray"},on:{click:function(t){e.form.stars=3}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:e.form.stars>=4?"gold":"gray"},on:{click:function(t){e.form.stars=4}}}),r("Unicon",{staticClass:"star",attrs:{name:"star",fill:e.form.stars>=5?"gold":"gray"},on:{click:function(t){e.form.stars=5}}})],1)]),r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[e._v("Wat is jouw naam?")]),r("div",{staticClass:"entry stars"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.name,expression:"form.name"}],attrs:{type:"text"},domProps:{value:e.form.name},on:{input:function(t){t.target.composing||e.$set(e.form,"name",t.target.value)}}})])]),r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[e._v("Wanneer heb jij jouw worstenbroodjes afgehaald?")]),r("div",{staticClass:"entry stars"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.date,expression:"form.date"}],attrs:{type:"date"},domProps:{value:e.form.date},on:{input:function(t){t.target.composing||e.$set(e.form,"date",t.target.value)}}})])]),r("div",{staticClass:"section"},[r("div",{staticClass:"question"},[e._v("Waarom vind je mijn worstenbroodjes zo lekker?")]),r("div",{staticClass:"entry stars"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.form.comment,expression:"form.comment"}],attrs:{resize:"none"},domProps:{value:e.form.comment},on:{input:function(t){t.target.composing||e.$set(e.form,"comment",t.target.value)}}})])]),r("button",{class:{"section btn confirm":!0,disabled:!e.formCompleted},attrs:{disabled:!e.formCompleted},on:{click:e.sendForm}},[e._v("Verstuur beoordeling")]),r("br"),r("br"),r("br"),r("br"),r("br"),r("br"),e._v(" Reviews van anderen: "),r("div",{staticClass:"review-list"},e._l(e.reviews,(function(t){return r("div",{key:"review-"+t.id,staticClass:"review-item"},[r("hr",{staticStyle:{border:"1px solid #ddd"}}),r("div",{staticClass:"top"},[r("span",{staticClass:"reviewer"},[e._v(" "+e._s(t.name)+" ")]),e._l(t.stars,(function(e){return r("span",{key:"star-"+e,staticClass:"star"},[r("Unicon",{attrs:{name:"star",fill:"gold"}})],1)}))],2),r("div",{staticClass:"mid"},[e._v(" "+e._s(t.date.split(" ")[0])+" ")]),r("div",{staticClass:"bottom"},[e._v(" "+e._s(t.comment)+" ")])])})),0)])])},_e=[],ye={data:function(){return{reviews:[],form:{stars:4,name:"",comment:"",date:""}}},computed:{formCompleted:function(){return""!==this.form.name&&""!==this.form.comment&&""!==this.form.date}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://api.dewitworstenbrood.nl/reviews");case 2:r=t.sent,e.reviews=r.data;case 4:case"end":return t.stop()}}),t)})))()},methods:{sendForm:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,D.a.post("https://api.dewitworstenbrood.nl/reviews",e.form);case 2:t.sent,location.reload();case 4:case"end":return t.stop()}}),t)})))()}}},Ce=ye,xe=(r("09f7"),Object(p["a"])(Ce,ke,_e,!1,null,"60b7b958",null)),Pe=xe.exports,je=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Restrictor",{attrs:{width:800}},[e.cart.length>0?r("div",{attrs:{id:"shopping-cart"}},[r("div",{attrs:{id:"header"}},[r("h3",[e._v("Winkelwagen")]),r("div",[e._v(e._s(e.cart.length)+" Items")])]),r("hr"),r("div",{attrs:{id:"cart-list"}},[r("span",{staticClass:"thead"},[e._v("Producten")]),r("span",{staticClass:"thead"},[e._v("Prijs")]),r("span",{staticClass:"thead"},[e._v("Totaal")]),e._l(e.cart,(function(t){return[r("span",{key:t.id,staticClass:"overview"},[r("img",{staticClass:"item-pic",attrs:{src:t.product.image}}),r("div",[r("b",[e._v(e._s(t.product.name))]),r("br"),e._v(" "+e._s(t.amount)+"x ")])]),r("span",{key:t.id},[e._v("€ "+e._s(t.product.basePrice.toFixed(2)))]),r("span",{key:t.id},[e._v("€ "+e._s((t.amount*t.product.basePrice).toFixed(2)))])]}))],2),r("hr"),r("div",{attrs:{id:"footer"}},[r("h3",[e._v("Totaal")]),r("div",[e._v("€ "+e._s(e.totalPrice.toFixed(2)))])]),r("br"),r("br"),r("button",{staticClass:"btn confirm",on:{click:e.askPlaceOrder}},[e._v("Bestellen")])]):r("div",[e._v(" Geen producten in uw winkelmand ")]),r("Modal",{ref:"orderModal",attrs:{title:"Bestelling plaatsen"}},[r("div",[e._v("Totaal bedrag: € "+e._s(e.totalPrice.toFixed(2)))]),r("br"),r("div",{attrs:{id:"user-data-form"}},[r("label",{attrs:{for:"email"}},[e._v("E-mail")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderPersonData.email,expression:"orderPersonData.email"}],staticClass:"form-control",attrs:{type:"email",id:"email"},domProps:{value:e.orderPersonData.email},on:{input:function(t){t.target.composing||e.$set(e.orderPersonData,"email",t.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"name"}},[e._v("Naam")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderPersonData.name,expression:"orderPersonData.name"}],staticClass:"form-control",attrs:{type:"text",id:"name"},domProps:{value:e.orderPersonData.name},on:{input:function(t){t.target.composing||e.$set(e.orderPersonData,"name",t.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"address"}},[e._v("Adres")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderPersonData.address,expression:"orderPersonData.address"}],staticClass:"form-control",attrs:{type:"text",id:"address"},domProps:{value:e.orderPersonData.address},on:{input:function(t){t.target.composing||e.$set(e.orderPersonData,"address",t.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"phone"}},[e._v("Telefoonnummer")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderPersonData.phoneNumber,expression:"orderPersonData.phoneNumber"}],staticClass:"form-control",attrs:{type:"text",id:"phone"},domProps:{value:e.orderPersonData.phoneNumber},on:{input:function(t){t.target.composing||e.$set(e.orderPersonData,"phoneNumber",t.target.value)}}}),r("br"),r("br"),r("label",{attrs:{for:"delivery"}},[e._v("Bezorgen")]),r("br"),r("input",{directives:[{name:"model",rawName:"v-model",value:e.orderPersonData.delivery,expression:"orderPersonData.delivery"}],attrs:{type:"checkbox",id:"delivery"},domProps:{checked:Array.isArray(e.orderPersonData.delivery)?e._i(e.orderPersonData.delivery,null)>-1:e.orderPersonData.delivery},on:{change:function(t){var r=e.orderPersonData.delivery,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,s=e._i(r,o);a.checked?s<0&&e.$set(e.orderPersonData,"delivery",r.concat([o])):s>-1&&e.$set(e.orderPersonData,"delivery",r.slice(0,s).concat(r.slice(s+1)))}else e.$set(e.orderPersonData,"delivery",n)}}})]),r("br"),r("button",{staticClass:"btn confirm",on:{click:e.placeOrder}},[e._v("Bestelling plaatsen")])])],1)},Oe=[],Se=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"wrapper"}},[r("div",{style:"max-width: "+e.width+"px",attrs:{id:"restrictor"}},[e._t("default")],2)])},De=[],Ne={props:{width:{type:Number,default:800}}},$e=Ne,Ee=(r("8c7b"),Object(p["a"])($e,Se,De,!1,null,"1973f329",null)),Re=Ee.exports,ze={components:{Restrictor:Re,Modal:fe},data:function(){return{cart:[],orderPersonData:{email:"",name:"",address:"",phoneNumber:"",delivery:!1}}},computed:{totalPrice:function(){return this.cart.reduce((function(e,t){return e+t.amount*t.product.basePrice}),0)}},mounted:function(){this.cart=JSON.parse(localStorage.getItem("basket")||"[]")},methods:{askPlaceOrder:function(){this.$refs.orderModal.isOpen=!0},placeOrder:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=JSON.parse(localStorage.getItem("basket")||"[]"),t.next=3,e.registerOrderOnRMS(r);case 3:localStorage.setItem("basket",[]),e.cart=JSON.parse(localStorage.getItem("basket")||"[]"),e.$refs.orderModal.isOpen=!1,alert("Bestelling is geplaatst");case 7:case"end":return t.stop()}}),t)})))()},registerOrderOnRMS:function(e){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t.orderPersonData,a=[],t.cart.forEach((function(e){for(var t=0;t<e.amount;t++)a.push({productId:e.product.id,settings:{}})})),console.log(a),W.placeOrder({customerDetails:{address:r.address,email:r.email,name:r.name,phoneNumber:r.phoneNumber,delivery:""+r.delivery},orderItems:a});case 5:case"end":return e.stop()}}),e)})))()}}},Le=ze,Ie=(r("1041"),Object(p["a"])(Le,je,Oe,!1,null,"433a0461",null)),We=Ie.exports,Te=r("a584"),Ae=r("d327");J.a.add([Ae["b"],Ae["d"],Ae["e"],Ae["a"],Ae["g"],Ae["c"],Ae["f"]]),a["a"].use(J.a),a["a"].use(n["a"]),a["a"].use(Te["a"],{config:{id:"G-LLJJC2YYJ6"},appName:"Dewit worstenbrood website",pageTrackerScreenviewEnabled:!0},Me);var Be=[{path:"/",component:te,name:"home"},{path:"*",component:te,name:"home"},{path:"/home",component:te,name:"home"},{path:"/cart",component:We,name:"winkelwagen"},{path:"/producten",component:we,name:"producten"},{path:"/reviews",component:Pe,name:"reviews"}],Me=new n["a"]({routes:Be});a["a"].config.productionTip=!1,new a["a"]({router:Me,render:function(e){return e(M)}}).$mount("#app")},"5b73":function(e,t,r){},"5c0b":function(e,t,r){"use strict";r("9c0c")},"6d3d":function(e,t,r){},"719d":function(e,t,r){},"7a1b":function(e,t,r){},"86e8":function(e,t,r){"use strict";r("6d3d")},8927:function(e,t,r){},"8c7b":function(e,t,r){"use strict";r("5b73")},9224:function(e){e.exports=JSON.parse('{"a":"1.5.0"}')},"9c0c":function(e,t,r){},ae39:function(e,t,r){},baa1:function(e,t,r){"use strict";r("7a1b")},bd0b:function(e,t,r){},ca29:function(e,t,r){"use strict";r("bd0b")},e172:function(e,t,r){},ef74:function(e,t,r){}});
//# sourceMappingURL=app.c3032ff9.js.map