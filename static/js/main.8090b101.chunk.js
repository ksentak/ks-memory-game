(this["webpackJsonpks-memory-game"]=this["webpackJsonpks-memory-game"]||[]).push([[0],[,function(e){e.exports=JSON.parse('[{"id":1,"name":"Jon Snow","image":"https://66.media.tumblr.com/4e97ba542835d94e1d9ec98f8b6c15d5/tumblr_owfszqPGXE1rxkqbso1_1280.png"},{"id":2,"name":"Daenerys Targaryen","image":"https://img.pngio.com/daenerys-targaryen-png-322-by-decepticon44-on-deviantart-daenerys-png-763_1047.png"},{"id":3,"name":"Tyrion Lannister","image":"https://www.stickpng.com/assets/images/5cb834df32c4f52f2e5ea210.png"},{"id":4,"name":"Sansa Stark","image":"https://66.media.tumblr.com/b4b625294c59ccd02804316f87049105/tumblr_ocuftjlx2h1rxkqbso1_1280.png"},{"id":5,"name":"Arya Stark","image":"https://66.media.tumblr.com/183369ca5430c23374838dce9bff1ce7/tumblr_oxiihltHp61rxkqbso1_1280.png"},{"id":6,"name":"The Knight King","image":"https://img.pngio.com/night-king-png-by-buffy2ville-on-deviantart-the-night-king-png-1024_1389.png"},{"id":7,"name":"Bran Stark","image":"https://cache.popcultcha.com.au/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/t/h/thr3z0093dv-game-of-thrones-bran-stark-deluxe-1-6th-scale-action-figure-01.1562112768.png"},{"id":8,"name":"Cersai Lannister","image":"https://66.media.tumblr.com/98f47855b97c5cb902fc06f9375cb52f/tumblr_owfspgQezi1rxkqbso1_1280.png"},{"id":9,"name":"Jamie Lannister","image":"https://www.stickpng.com/assets/images/5cb58625cba3dd2a29200ca8.png"},{"id":10,"name":"Sir Brienne of Tarth","image":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5a7b01d7-c325-4ebc-bf0f-448ad3d831ec/dd51grx-e2952707-cc42-4cba-bee7-4ce67a07bf4f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzVhN2IwMWQ3LWMzMjUtNGViYy1iZjBmLTQ0OGFkM2Q4MzFlY1wvZGQ1MWdyeC1lMjk1MjcwNy1jYzQyLTRjYmEtYmVlNy00Y2U2N2EwN2JmNGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PLk4EHArj0PfizEciruQvJ4fzxrtvztmw5KFY1flYqA"},{"id":11,"name":"King Joffrey","image":"https://66.media.tumblr.com/89a0501856d195cb327b6755f77af311/tumblr_onqn8nFgg31rxkqbso1_1280.png"},{"id":12,"name":"Tormund Giantsbane","image":"https://i.pinimg.com/originals/bb/0c/1c/bb0c1c652a7581221bd275bb12d8ec08.png"}]')},,,,,,,,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var c=t(0),r=t.n(c),n=t(3),i=t.n(n),s=(t(14),t(4)),o=t(5),m=t(7),l=t(6),g=t(8),d=(t(15),t(16),function(e){return r.a.createElement("div",{className:"true"===e.waggleWrapper?"wrapperShake":"wrapper"},e.pictures)}),p=(t(17),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{className:"img-thumbnail img-responsive",src:e.image,alt:e.name,onClick:function(){return e.clickCharacter(e.id)}})))}),h=t(1),u=function(e){function a(){var e,t;Object(s.a)(this,a);for(var c=arguments.length,r=new Array(c),n=0;n<c;n++)r[n]=arguments[n];return(t=Object(m.a)(this,(e=Object(l.a)(a)).call.apply(e,[this].concat(r)))).state={characters:h,clickedArray:[],topScore:0,score:0,cardWaggle:"false",message:""},t.clickCharacter=function(e){var a=t.shuffleArray(h);t.setState({characters:a}),t.state.clickedArray.includes(e)?t.setState({score:0,clickedArray:[],message:"Incorrect, Game Over! Click an image to start again!",cardWaggle:"true"}):t.setState({clickedArray:t.state.clickedArray.concat([e]),score:t.state.score+1,cardWaggle:"false",message:"Correct"}),t.state.score>t.state.topScore&&t.setState({topScore:t.state.score})},t.shuffleArray=function(e){for(var a=e.length-1;a>0;a--){var t=Math.floor(Math.random()*(a+1)),c=[e[t],e[a]];e[a]=c[0],e[t]=c[1]}return e},t}return Object(g.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"jumbotron text-center"},r.a.createElement("h2",null,"GAME OF THRONES MEMORY GAME"))),r.a.createElement("h3",{className:"directions text-white text-center col-sm-10 offset-1"},r.a.createElement("p",null,"Click on one character to begin. Remember who you click and try to get all 12 characters in a row without repeating a pick. Your high score will be logged."),r.a.createElement("p",{className:"score"},r.a.createElement("strong",null,"Score: ",this.state.score," | High Score: ",this.state.topScore)),r.a.createElement("p",{className:"message"},r.a.createElement("strong",null,this.state.message))),r.a.createElement(d,{waggleWrapper:this.state.cardWaggle,pictures:this.state.characters.map((function(a){return r.a.createElement(p,{key:a.id,id:a.id,clickCharacter:e.clickCharacter,name:a.name,image:a.image})}))}))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(u,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.8090b101.chunk.js.map