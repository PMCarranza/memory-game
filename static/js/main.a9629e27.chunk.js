(this["webpackJsonpno-double-tap"]=this["webpackJsonpno-double-tap"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"image":"images/aphrodite.jpg","name":"aphrodite"},{"id":2,"image":"images/apollo.jpeg","name":"apollo"},{"id":3,"image":"images/artemis.jpeg","name":"artemis"},{"id":4,"image":"images/athena.jpeg","name":"athena"},{"id":5,"image":"images/demeter.jpg","name":"demeter"},{"id":6,"image":"images/hades.jpeg","name":"hades"},{"id":7,"image":"images/hephaestus.jpg","name":"hephaestus"},{"id":8,"image":"images/hera.jpeg","name":"hera"},{"id":9,"image":"images/hermes.jpeg","name":"hermes"},{"id":10,"image":"images/hestia.jpeg","name":"hestia"},{"id":11,"image":"images/mars.jpg","name":"mars"},{"id":12,"image":"images/persephone.jpeg","name":"persephone"},{"id":13,"image":"images/poseidon.jpeg","name":"poseidon"},{"id":14,"image":"images/zeus.jpeg","name":"zeus"}]')},,,,,,,,function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),n=t(3),r=t.n(n),c=(t(14),t(4)),o=t(5),m=t(7),l=t(6),d=t(8),g=t(1);t(15);var h=function(e){return s.a.createElement("header",{className:"scoreB"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h6",null,"High Score: ",e.topScore)),s.a.createElement("div",{className:"col-md-6"},s.a.createElement("h6",null,"Current Score: ",e.score))))},p=(t(16),function(e){return s.a.createElement("div",{className:"card",onClick:function(){return e.clickedImage(e.id)}},s.a.createElement("div",{className:"img-container"},s.a.createElement("img",{alt:e.name,src:e.image}),s.a.createElement("div",{className:"overlay"})))});function u(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),i=[e[t],e[a]];e[a]=i[0],e[t]=i[1]}return e}var f=function(e){function a(){var e,t;Object(c.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(s)))).state={deities:g,score:0,topScore:0,alreadyClicked:0,showSuccess:0,clickedDeities:[]},t.clickedImage=function(e){var a=t.state.clickedDeities,i=t.state.score,s=t.state.topScore;t.setState({alreadyClicked:0}),-1===a.indexOf(e)?(a.push(e),t.updateScore(),t.reShuffle()):12===t.state.score?t.setState({showSuccess:1,score:0,clickedDeities:[]}):(t.setState({score:0,clickedDeities:[]}),t.setState({alreadyClicked:1})),i>s&&t.setState({topScore:i})},t.updateScore=function(){t.setState({score:t.state.score+1})},t.reShuffle=function(){t.setState({deities:u(g)})},t}return Object(d.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"alert alert-danger",style:{opacity:this.state.alreadyClicked}},"You should have been paying more attention, that was a double tap... click an image to start again."),s.a.createElement("div",{className:"alert alert-success",style:{opacity:this.state.showSuccess}},"Nicely done!"),s.a.createElement(h,{score:this.state.score,topScore:this.state.topScore}),s.a.createElement("div",{className:"row"},this.state.deities.map((function(a){return s.a.createElement(p,{key:a.id,id:a.id,image:a.image,clickedImage:e.clickedImage})}))))}}]),a}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.a9629e27.chunk.js.map