(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AGzW:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){var e=o("eAkX");return{page:e.default||e}}])},eAkX:function(e,t,o){"use strict";o.r(t);var a=o("0iUn"),s=o("sLSF"),r=o("MI3g"),i=o("a7VT"),n=o("AT/M"),d=o("Tit0"),c=o("vYYK"),l=o("MX0m"),p=o.n(l),h=o("q1tI"),m=o.n(h),f=o("YNhk"),g=o("wOhW"),b=m.a.createElement,x=function(e){function t(){return Object(a.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return b("div",{className:p.a.dynamic([["2790990276",[this.props.modalstate]]])+" port-modal"},b("h1",{className:p.a.dynamic([["2790990276",[this.props.modalstate]]])},"close",b("a",{onClick:this.props.closemodal,className:p.a.dynamic([["2790990276",[this.props.modalstate]]])+" close-button"},"[x]")),b("img",{src:this.props.projectimage,className:p.a.dynamic([["2790990276",[this.props.modalstate]]])+" port-image"}),b("div",{className:p.a.dynamic([["2790990276",[this.props.modalstate]]])+" desc-panel"},b("h2",{className:p.a.dynamic([["2790990276",[this.props.modalstate]]])+" desc-header"},this.props.projectname,b("a",{style:{fontSize:"70%",fontWeight:"bold",paddingLeft:"0.5em",textTransform:"lowercase"},href:this.props.projectlink,className:p.a.dynamic([["2790990276",[this.props.modalstate]]])},this.props.projectlink)),b("h2",{className:p.a.dynamic([["2790990276",[this.props.modalstate]]])},this.props.projectdesc_s)),b(p.a,{id:"2790990276",dynamic:[this.props.modalstate]},[".port-modal.__jsx-style-dynamic-selector{display:".concat(this.props.modalstate,";position:fixed;top:50%;left:50%;height:90vh;width:70vw;margin-left:-35vw;margin-top:-45vh;border-left:1px solid black;border-right:1px solid black;border-bottom:1px solid black;box-shadow:0 5pt 10pt rgba(0,0,0,0.2);z-index:999;background:slategray;border-radius:5px 5px 0 0;overflow:hidden;}"),".port-image.__jsx-style-dynamic-selector{width:100%;height:100%;object-fit:cover;}","h1.__jsx-style-dynamic-selector{margin:0;position:relative;text-align:left;padding:5px 0 5px 20px;font-size:1.8em;font-family:'Major Mono Display',monospace;top:0;color:whitesmoke;background:rgb(0,25,0);border-radius:5px 5px 0 0;z-index:10;}",".desc-panel.__jsx-style-dynamic-selector{background:whitesmoke;float:left;position:absolute;bottom:0;width:100%;padding:2em;border-left:5pt solid slateblue;}",".desc-header.__jsx-style-dynamic-selector{font-weight:bolder;text-transform:capitalize;font-size:1.8em;}","h2.__jsx-style-dynamic-selector{color:black;font-size:1.5em;font-family:'Livvic',sans-serif;font-weight:200;}","h1.__jsx-style-dynamic-selector .close-button.__jsx-style-dynamic-selector{padding-left:1rem;cursor:pointer;color:red;fontWeight:bolder;-webkit-transition:0.1s ease-in;transition:0.1s ease-in;}","h1.__jsx-style-dynamic-selector .close-button.__jsx-style-dynamic-selector:hover{-webkit-filter:drop-shadow(0 1px 0 red)  drop-shadow(0 -1px 0 red) drop-shadow(1px 0 0 red) drop-shadow(-1px 0 0 red);filter:drop-shadow(0 1px 0 red)  drop-shadow(0 -1px 0 red) drop-shadow(1px 0 0 red) drop-shadow(-1px 0 0 red);}","@media only screen and (max-width:600px){.port-modal.__jsx-style-dynamic-selector{height:50vh;margin-top:-25vh;width:95vw;margin-left:-47.5vw;}h1.__jsx-style-dynamic-selector{font-size:1em;}h2.__jsx-style-dynamic-selector{font-size:1em;}.desc-panel.__jsx-style-dynamic-selector{padding:0.5em;}.desc-header.__jsx-style-dynamic-selector{font-size:1.5em;}}","@media only screen and (device-width:768px),only screen and (device-width:1024px){.port-modal.__jsx-style-dynamic-selector{height:50vh;margin-top:-25vh;width:95vw;margin-left:-47.5vw;}}"]))}}]),t}(m.a.Component),j=m.a.createElement,u=function(e){function t(){var e,o;Object(a.a)(this,t);for(var s=arguments.length,d=new Array(s),l=0;l<s;l++)d[l]=arguments[l];return o=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(d))),Object(c.a)(Object(n.a)(o),"state",{cards:o.props.cardlist,cardmodal:"",modalvis:"none"}),Object(c.a)(Object(n.a)(o),"loadModal",function(e){o.setState({cardmodal:e}),o.setState({modalvis:"inline-block"})}),Object(c.a)(Object(n.a)(o),"hideModal",function(){o.setState({modalvis:"none"})}),o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return j("div",{className:"jsx-3686956710 cardcontainer"},j("div",{className:"jsx-3686956710"},j(x,{projectname:this.state.cardmodal.header,projectimage:this.state.cardmodal.image,projectdesc_s:this.state.cardmodal.desc_s,projectlink:this.state.cardmodal.href,modalstate:this.state.modalvis,closemodal:this.hideModal})),this.state.cards.map(function(t){return j(f.a,{href:"https://robwbutler.github.io/portfolio#"+t.header.split(" ").join("-"),key:t.key},j("div",{title:t.header,style:{backgroundImage:"url(".concat(t.image,")")},onClick:function(){return e.loadModal(t)},className:"jsx-3686956710 homecard"},j("h1",{className:"jsx-3686956710"},t.header),j("div",{className:"jsx-3686956710 hovercontainer"},j("h2",{style:{visibility:"hidden"},className:"jsx-3686956710"},j("span",{className:"jsx-3686956710"},t.desc_s)))))}),j(p.a,{id:"3686956710"},[".cardcontainer.jsx-3686956710{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}",".homecard.jsx-3686956710{display:block;overflow:hidden;wrap:flex;background:slategray;box-shadow:0 5px 5px slategray;margin:10px;width:437px;height:270px;cursor:-webkit-zoom-in;cursor:-moz-zoom-in;cursor:zoom-in;border-radius:5px 5px 0 0;line-height:240px;background-position:center;background-repeat:no-repeat;background-size:cover;}",".homecard.jsx-3686956710:hover{box-shadow:0 5px 5pt slategray;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);border-bottom:5pt solid white;-webkit-transition:0.3s ease-out;transition:0.3s ease-out;z-index:50;background-position:center;background-repeat:no-repeat;background-size:cover;}",".homecard.jsx-3686956710:hover h1.jsx-3686956710{color:rgb(0,25,0);background:whitesmoke;text-shadow:0 0.5px 0 rgb(0,25,0), 0.5px 0 0 rgb(0,25,0), 0 -0.5px 0 rgb(0,25,0), -0.5px 0 0 rgb(0,25,0);}",".homecard.jsx-3686956710:hover .hovercontainer.jsx-3686956710{background:rgba(115,124,201,0.8);background-size:cover;}",".homecard.jsx-3686956710:hover h2.jsx-3686956710 span.jsx-3686956710{visibility:visible;text-shadow:0pt 1pt 0pt black,0pt 0pt 5pt black;-webkit-filter:none;filter:none;z-index:1;}","h1.jsx-3686956710{margin:0;position:relative;text-align:left;padding:5px 0 5px 20px;font-size:1.5em;font-family:'Major Mono Display',monospace;top:0;color:whitesmoke;background:rgb(0,25,0);border-radius:5px 5px 0 0;z-index:10;}","h2.jsx-3686956710{color:whitesmoke;font-size:1.5em;font-family:'Livvic',sans-serif;font-weight:200;text-align:center;position:relative;}","span.jsx-3686956710{display:inline-block;vertical-align:middle;padding-top:3em;padding-left:1em;padding-right:1em;height:240px;}","@media only screen and (max-width:600px){.homecard.jsx-3686956710{height:30vh;}span.jsx-3686956710{padding:2em;}h1.jsx-3686956710{font-size:1em;}h2.jsx-3686956710{font-size:1em;}}"]))}}]),t}(m.a.Component),y={major:[{header:"hot drop",image:"../../static/portfolio/portfolio6.jpg",href:"https://www.hotdrop.games/",desc_s:"A proof of concept video game search, news, and video website.",key:1},{header:"duckery",image:"../static/portfolio/portfolio11.jpg",href:"https://duckery.herokuapp.com/",desc_s:"A character creator for an... attempted site.",key:2},{header:"hot drop (android)",image:"../static/portfolio/portfolio14.jpg",href:"https://play.google.com/store/apps/details?id=com.hotdrop",desc_s:"A React Native port of Hot Drop for Android devices..",key:14}],minor:[{header:"hangman",image:"../../static/portfolio/portfolio1.jpg",href:"https://robwbutler.github.io/Word-Guess-Game",desc_s:"A rough hangman game. One of my first projects.",key:3},{header:"mario rpg",image:"../../static/portfolio/portfolio2.jpg",href:"https://robwbutler.github.io/unit-4-game",desc_s:"A simple RPG made entirely with JS.",key:4},{header:"trivia",image:"../../static/portfolio/portfolio3.jpg",href:"https://robwbutler.github.io/TriviaGame",desc_s:"A trivia game based on paleontology and human evolution.",key:5},{header:"giphy",image:"../../static/portfolio/portfolio4.jpg",href:"https://robwbutler.github.io/giphy/giphy.html",desc_s:"A simple Giphy API search app.",key:6},{header:"train schedule",image:"../../static/portfolio/portfolio5.jpg",href:"https://robwbutler.github.io/Train-Schedule/",desc_s:"Using Google Firebase to search and add things to a database.",key:7},{header:"liri",image:"../../static/portfolio/portfolio7.jpg",href:"https://github.com/RobWButler/liri-node-app",desc_s:"A Node command line app for searching media.",key:8},{header:"bamazon",image:"../static/portfolio/portfolio8.jpg",href:"https://github.com/RobWButler/bamazon",desc_s:"A proof of concept command line inventory management app.",key:9},{header:"friend finder",image:"../static/portfolio/portfolio9.jpg",href:"https://young-crag-32749.herokuapp.com/",desc_s:"A simple quiz and match.",key:10},{header:"eat the burger",image:"../static/portfolio/portfolio10.jpg",href:"https://rocky-caverns-81386.herokuapp.com/",desc_s:"A database and templating app.",key:11},{header:"clicky game",image:"../static/portfolio/portfolio12.jpg",href:"https://robwbutler.github.io/clickygame/",desc_s:"A simple clicking game made in React.",key:12},{header:"google books reader",image:"../static/portfolio/portfolio13.jpg",href:"https://radiant-eyrie-63694.herokuapp.com/",desc_s:"A React based site for searching for books and adding them to a reading list.",key:13}]},k=m.a.createElement,w=function(e){function t(){var e,o;Object(a.a)(this,t);for(var s=arguments.length,d=new Array(s),l=0;l<s;l++)d[l]=arguments[l];return o=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(d))),Object(c.a)(Object(n.a)(o),"state",{cards:y}),o}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return k("div",{className:"jsx-2846999522"},k(g.a,null),k("div",{className:"jsx-2846999522 jumbotron"},k("h2",{className:"jsx-2846999522 jumbohead"},"portfolio"),k(f.a,{href:"https://robwbutler.github.io/about"},k("h2",{className:"jsx-2846999522 jumbolink"},"about")),k(f.a,{href:"https://robwbutler.github.io/portfolio#top"},k("h2",{className:"jsx-2846999522 jumbolink current"},"portfolio")),k(f.a,{href:"https://robwbutler.github.io/contact"},k("h2",{className:"jsx-2846999522 jumbolink"},"contact"))),k("div",{className:"jsx-2846999522 container mt-5"},k("div",{className:"jsx-2846999522 content"},k("div",{className:"jsx-2846999522 port-section"},k("h2",{className:"jsx-2846999522"},"major projects"),k(u,{cardlist:this.state.cards.major})),k("div",{className:"jsx-2846999522 port-section"},k("h2",{className:"jsx-2846999522"},"other"),k(u,{cardlist:this.state.cards.minor})))),k(p.a,{id:"2846999522"},[".content.jsx-2846999522 h2.jsx-2846999522{background:darkslateblue;color:whitesmoke;font-size:28px;font-family:'Major Mono Display',monospace;font-weight:bold;padding:0.5rem;text-align:left;}",".port-section.jsx-2846999522{margin-bottom:1rem;}",".port-section.jsx-2846999522:hover h2.jsx-2846999522{border-left:5pt solid slateblue;color:darkslateblue;background:whitesmoke;text-shadow:0 0.5px 0 darkslateblue, 0.5px 0 0 darkslateblue, 0 -0.5px 0 darkslateblue, -0.5px 0 0 darkslateblue;}"]))}}]),t}(m.a.Component);t.default=w}},[["AGzW",1,0]]]);