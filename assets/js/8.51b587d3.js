(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{303:function(t,e,n){},355:function(t,e,n){"use strict";n(303)},377:function(t,e,n){"use strict";n.r(e);n(13);function o(t,e,n=50,o=3e3){var i=document.querySelectorAll(".global-tip"),s=(new Date).getTime(),a=0==i.length?0:i[i.length-1].getAttribute("data-top"),c=parseInt(a)+(0!=i.length?i[i.length-1].offsetHeight+17:n);let l=document.createElement("div");l.className=`global-tip tip-${e} ${s} gloablTip`,l.style.top=parseInt(a)+"px",l.setAttribute("data-top",c),"info"==e||1==e?l.innerHTML=`<i class="iconfont icon-info icon"></i><p class="tip-info-content">${t}</p>`:"success"==e||2==e?l.innerHTML=`<i class="iconfont icon-dagouyouquan icon"></i><p class="tip-success-content">${t}</p>`:"danger"==e||3==e?l.innerHTML=`<i class="iconfont icon-cuowu icon"></i><p class="tip-danger-content">${t}</p>`:"warning"!=e&&4!=e||(l.innerHTML=`<i class="iconfont icon-gantanhao icon"></i><p class="tip-warning-content">${t}</p>`),document.body.appendChild(l);let p=document.getElementsByClassName(s)[0];setTimeout(()=>{p.style.top=parseInt(c)+"px",p.style.opacity="1"},10),setTimeout(()=>{p.style.top="0px",p.style.opacity="0";var t=function(t){for(var e=[],n=t;n;n=n.nextSibling)1===n.nodeType&&n!==t&&e.push(n);return e}(p);for(let o=0;o<t.length;o++){var e=t[o],n=parseInt(e.getAttribute("data-top"))-e.offsetHeight-17;e.setAttribute("data-top",n),e.style.top=n+"px"}setTimeout(()=>{p.remove()},500)},o)}var i={mounted(){"/"!=this.$route.path&&this.bgTimeColor()},watch:{$route(t,e){document.getElementsByClassName("gloablTip").length<=0&&"/"!=this.$route.path&&""==this.$route.hash&&this.bgTimeColor()}},methods:{bgTimeColor(){var t=(new Date).getHours(),e=(new Date).getMinutes(),n=(new Date).getSeconds();t=t<10?"0"+t:t,e=e<10?"0"+e:e,n=n<10?"0"+n:n;let i=document.createElement("div");i.className="banner-color",t>=6&&t<11?o(`早上好呀~~，现在是 ${t}:${e}:${n}，吃早餐了吗？😊🤭`,"info",50,4e3):t>=12&&t<=16?o(`下午好呀~~，现在是 ${t}:${e}:${n}，繁忙的下午也要适当休息哦🥤🏀~~`,"info",50,4e3):t>=16&&t<=19?o(`到黄昏了~~，现在是 ${t}:${e}:${n}，该准备吃饭啦🥗🍖~~`,"info",50,4e3):t>=19&&t<24?o(`晚上好呀~~，现在是 ${t}:${e}:${n}，该准备洗漱睡觉啦🥱😪~~`,"info",50,4e3):t>=0&&t<6&&o(`别再熬夜了~~，现在是 ${t}:${e}:${n}，早点睡吧，让我们一起欣赏早上的太阳~~😇🛏`,"info",50,4e3),document.body.append(i)}}},s=(n(355),n(0)),a=Object(s.a)(i,(function(){return(0,this._self._c)("div")}),[],!1,null,null,null);e.default=a.exports}}]);