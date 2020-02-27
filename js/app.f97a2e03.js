(function(e){function t(t){for(var n,o,i=t[0],l=t[1],p=t[2],c=0,v=[];c<i.length;c++)o=i[c],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&v.push(a[o][0]),a[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,p||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},a={app:0},s=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/tp-plattform/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var p=0;p<i.length;p++)t(i[p]);var u=l;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0d03":function(e,t,r){},"1cbb":function(e,t,r){},"212f":function(e,t,r){"use strict";var n=r("8f53"),a=r.n(n);a.a},3521:function(e,t,r){"use strict";var n=r("b7ec"),a=r.n(n);a.a},"4bcc":function(e,t,r){"use strict";var n=r("dee7"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header"),r("router-view",{staticClass:"content"}),r("Footer")],1)},s=[],o=r("f564"),i={components:{Header:o["Header"],Footer:o["Footer"]}},l=i,p=(r("5c0b"),r("2877")),u=Object(p["a"])(l,a,s,!1,null,null,null),c=u.exports,v=r("8c4f"),m=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Marvin"},[r("iframe",{staticClass:"iframe_container",attrs:{title:"marvin",src:"https://marvin.k8s.oslo.kommune.no"}})])}],d={name:"Marvin"},f=d,_=(r("4bcc"),Object(p["a"])(f,m,h,!1,null,"5546034c",null)),k=_.exports,g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Help"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("img",{staticStyle:{position:"fixed",bottom:"2em",right:"2em"},attrs:{alt:"clippy",src:"https://media.giphy.com/media/13V60VgE2ED7oc/giphy.gif"}}),r("h1",[e._v("Hjelp")]),e._m(0),r("h2",[e._v("Komponenter")]),r("p",[e._v(" Vi har laget noen komponenter dere kan bruke for å komme kjapt i gang. For eksempel har dere tilgang til komponenten BaseButton som kan brukes slik: "),r("br"),r("TextInput",{staticStyle:{display:"inline-block","margin-right":"1em"},model:{value:e.exampleText,callback:function(t){e.exampleText=t},expression:"exampleText"}}),r("BaseButton",{staticStyle:{margin:"1em 0 1em 0"},attrs:{primary:""}},[e._v("Submit")]),r("br"),e._v(" Dere står fritt til å modifisere de eksisterende komponentene eller lage egne om dere trenger det. Ta en titt på "),r("a",{attrs:{href:"https://tuuturu.github.io/vue/?path=/story/buttons-button--primary"}},[e._v("oversikten over komponentene")]),e._v(" for å se hva som er tilgjengelig. ")],1),r("h2",[e._v("Farger")]),e._m(1),r("br"),r("div",{staticClass:"exampleColor",attrs:{id:"exampleRed"}},[e._v("$red")]),r("div",{staticClass:"exampleColor",attrs:{id:"examplePurple"}},[e._v("$purple-visited")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleGreen"}},[e._v("$green")]),r("div",{staticClass:"exampleColor",attrs:{id:"exampleBeige"}},[e._v("$beige")]),r("h2",[e._v("Typografi")]),e._m(2),r("h2",[e._v("Vue + IDE")]),e._m(3)])},b=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Eksempler på bruk av følgende komponenter, farger og verktøy finnes i kildekoden til denne filen. Denne ligger i "),r("a",{attrs:{href:"https://github.com/oslokommune/hackathon-app-template/blob/master/src/views/Help.vue"}},[e._v(" prosjekt-mappe/src/views/Help.vue ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Fargene er hentet ut fra "),r("a",{attrs:{href:"https://styleguide.oslo.kommune.no/#/pattern/globals-colors-palette"}},[e._v("Oslo Styleguide")]),e._v(" og dere har tilgang til alle fargene via scss importen "),r("code",[e._v("@import '~@tuuturu/styling/style';")]),r("br"),e._v(" For eksempel kan man bruke: ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Vi har lagt til stiler på lenker, H1, H2 og H3 samt paragrafer. Hvis dere ønsker å endre disse globale stilene eller legge til egne kan dette gjøres i "),r("a",{attrs:{href:"https://github.com/oslokommune/hackathon-app-template/blob/master/src/App.vue"}},[e._v("prosjekt-mappe/src/App.vue")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Pro tip for utvikling i Vue med et IDE: pek på "),r("span",{staticClass:"bold"},[e._v("/node_modules/@vue/cli-service/webpack.config.js")]),e._v(" for å fortelle IDE'et hvordan Vue gjør webpack config. ")])}],w=r("6789"),y=r("36b8"),j={name:"help",components:{BaseButton:w["BaseButton"],TextInput:y["TextInput"]},data:function(){return{exampleText:"Mye rar text"}}},x=j,E=(r("66dd"),Object(p["a"])(x,g,b,!1,null,"37aa5db3",null)),$=E.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Inspiration"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Inspirasjon")]),e._m(0),e._m(1),e._m(2),r("h2",[e._v("Minispill")]),e._m(3),r("h2",[e._v("God storytelling")]),e._m(4),r("h2",[e._v("Kommunikasjonskanal")]),e._m(5),r("h2",[e._v("Videoer")]),e._m(6),r("h2",[e._v("Klassiske produktpresentasjonssider")]),e._m(7)])},I=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Tenk utenfor boksen!"),r("br"),e._v("Det er mange måter man kan presentere et produkt! Dere kan fokusere på forklarende tekster og bilder eller lage en video, lage et minispill, lage en superenkel chatbot eller fokusere på en liten bit av funksjonaliteten produktet deres tilbyr✨")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h2",[e._v("Rett på sak! "),r("br"),e._v("Demo/miniversjon/getting started guide av produktet")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.jetbrains.com/lp/mono/"}},[e._v("https://www.jetbrains.com/lp/mono/")])]),r("li",[r("a",{attrs:{href:"https://safe.page/buildsecurely/"}},[e._v("https://safe.page/buildsecurely/")])]),r("li",[r("a",{attrs:{href:"https://www.duolingo.com/"}},[e._v("https://www.duolingo.com/")])]),r("li",[r("a",{attrs:{href:"https://trello.com/guide"}},[e._v("https://trello.com/guide")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://im-a-good-boye.itch.io/down-scroll"}},[e._v("https://im-a-good-boye.itch.io/down-scroll")])]),r("li",[r("a",{attrs:{href:"https://ohmaigawd.itch.io/afterlife-the-game"}},[e._v("https://ohmaigawd.itch.io/afterlife-the-game")])]),r("li",[r("a",{attrs:{href:"https://leodantas.itch.io/the-cake-is-a-what"}},[e._v("https://leodantas.itch.io/the-cake-is-a-what")])]),r("li",[r("a",{attrs:{href:"https://ncase.me/trust/"}},[e._v("https://ncase.me/trust/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html"}},[e._v("https://joshworth.com/dev/pixelspace/pixelspace_solarsystem.html")])]),r("li",[r("a",{attrs:{href:"https://www.defeatboco.com/worlds.html"}},[e._v("https://www.defeatboco.com/worlds.html")])]),r("li",[r("a",{attrs:{href:"https://thebearandhisscarf.com/"}},[e._v("https://thebearandhisscarf.com/")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"http://insomnobot3000.com/"}},[e._v("http://insomnobot3000.com/")])]),r("li",[r("a",{attrs:{href:"https://growthbot.org/chat"}},[e._v("https://growthbot.org/chat")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl"}},[e._v("https://www.bouvet.no/prosjekter/nytt-informasjons-og-velkomstsenter-pa-osl")])]),r("li",[r("a",{attrs:{href:"https://mailchimp.com/"}},[e._v("https://mailchimp.com/")])])])}],O={name:"inspiration"},P=O,C=(r("212f"),Object(p["a"])(P,H,I,!1,null,"8395b308",null)),T=C.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Premier 🏆️")]),r("p",[e._v("I tillegg til å bli vurdert av en jury vil dere kunne samle inn ekstra poeng og creds om dere gjør noen oppgaver forbundet med løsningen og utviklingen av den. Disse er:")]),r("br"),e._m(0),r("br"),e._m(1)])},B=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("⭐ Brukt/integrert mot ekstern ressurs (API, datasett, Slack, bilde etc.)")]),r("li",[e._v("⭐ Brukertestet")]),r("li",[e._v("⭐ Integrasjon med annet team sitt produkt")]),r("li",[e._v("⭐ Skissert ut flere konsepter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Oppdater disse målene underveis ettersom dere klarer dem i vår eminente "),r("a",{attrs:{href:"https://okr.oslo.systems/product/hackathon",target:"_blank"}},[e._v("OKR-tracker")])])}],D={name:"awards"},A=D,R=(r("9aa7"),Object(p["a"])(A,S,B,!1,null,"2afce1f6",null)),M=R.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Awards"},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/Help"}},[e._v("Hjelp")]),e._v(" | "),r("router-link",{attrs:{to:"/Inspiration"}},[e._v("Inspirasjon")]),e._v(" | "),r("router-link",{attrs:{to:"/Awards"}},[e._v("Premier")]),e._v(" | "),r("router-link",{attrs:{to:"/Resources"}},[e._v("Ressurser")])],1),r("h1",[e._v("Ressurser️")]),r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hULJEx092QZYeUhy5K15L67b0vYTlYnDDw7qQIrjuBg/edit#slide=id.g6ea9cd5290_2_122"}},[e._v("Presentasjonen")]),r("h2",[e._v("Beskrivelse av produktområdene")]),e._m(0),r("h2",[e._v("Maler og verktøy")]),e._m(1),r("h2",[e._v("Skrivetips")]),r("h3",[e._v("Hvordan skrive klartekst")]),e._m(2),r("h3",[e._v("Aktiv stemme")]),r("p",[e._v("Passiv stemme gir en tekst en høytidelig og formell stil og skaper avstand mellom tekst og leser. En aktiv stemme gir en mindre formell stil og avstand mellom tekst og leser blir mindre. Derfor vil vi bruke aktiv stemme i dokumentasjonen vår. Aktiv stemme bruker konkrete, aktive verb, korte setninger og direkte tiltale (du-form). Denne teksten bruker aktiv stemme, hvor du som leser dette tiltales direkte.")]),r("h3",[e._v("Eksempel på passiv stemme:")]),r("span",[e._v("Maskinen kan skrus på ved å trykke på knappen")]),r("h3",[e._v("Eksempel på aktiv stemme:")]),r("span",[e._v("Trykk på knappen for å skru av maskinen")])])},F=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1hqH6mUmLMdX9TtFVXjfqvUze5kuYzq-ZyN9v1Va5xm0/edit#slide=id.g7e2e960ec4_2_18",target:"_blank"}},[e._v("Dataplattform")])]),r("li",[r("a",{attrs:{href:"https://docs.google.com/presentation/d/1G9a7gGHC7JrWv4levx8we8iVeEfbKyr9z7X6CequxTs/edit#slide=id.g7df26df15c_0_87",target:"_blank"}},[e._v("Informasjonsforvaltning")])]),r("li",[r("a",{attrs:{href:"#",target:"_blank"}},[e._v("Infrastruktur")])]),r("li",[r("a",{attrs:{href:"https://confluence.oslo.kommune.no/pages/viewpage.action?spaceKey=UKENC&title=2020-02-11+Presentasjon+ITAS+-+Marvin+-+Sky+OPaaS",target:"_blank"}},[e._v("Plattform")])]),r("li",[r("a",{attrs:{href:"https://sites.google.com/byr.oslo.kommune.no/okr-og-oppdrag/utviklerportalen",target:"_blank"}},[e._v("Utviklerportalen")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://medium.com/kjernemodellen/slik-bruker-du-kjernemodellen-40de60a46850",target:"_blank"}},[e._v("Kjernemodellen")]),e._v(" - et verktøy for å forenkle, prioritere og få ting til å skje.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[e._v("Plasser viktig informasjon først")]),r("li",[e._v("Skriv korte setninger: En idé per setning")]),r("li",[e._v("Varier rytmen i setninger: Forskjellig lengde")]),r("li",[e._v("Bryt opp teksten i paragrafer: Hver paragraf handler om hver sin ting")]),r("li",[e._v("Unngå sjargong. Hvis du må likevel, forklar hva det betyr første gang du bruker begrepet.")]),r("li",[e._v('Unngå tvetydige svar, som for eksempel "mange ganger", "fort" og "mye"')]),r("li",[e._v("Bruk vanlige ord - unngå lange ord og ukjente forkortelser")]),r("li",[e._v("Bruk aktiv stemme")])])}],K={name:"awards"},U=K,q=(r("3521"),Object(p["a"])(U,V,F,!1,null,"7553d664",null)),G=q.exports;n["a"].use(v["a"]);var J=[{path:"/",name:"Home",component:k},{path:"/help",name:"Help",component:$},{path:"/inspiration",name:"Inspiration",component:T},{path:"/awards",name:"Awards",component:M},{path:"/resources",name:"Resources",component:G}],Y=new v["a"]({routes:J}),z=Y;n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(e){return e(c)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var n=r("9c0c"),a=r.n(n);a.a},"66dd":function(e,t,r){"use strict";var n=r("1cbb"),a=r.n(n);a.a},"8f53":function(e,t,r){},"9aa7":function(e,t,r){"use strict";var n=r("0d03"),a=r.n(n);a.a},"9c0c":function(e,t,r){},b7ec:function(e,t,r){},dee7:function(e,t,r){}});
//# sourceMappingURL=app.f97a2e03.js.map