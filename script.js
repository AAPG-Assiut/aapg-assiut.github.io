(function(){var d=document.getElementById('depth');if(!d)return;var b=d.querySelector('b');
function u(){var h=document.documentElement,m=h.scrollHeight-h.clientHeight,p=m>0?h.scrollTop/m:0;b.textContent=Math.round(p*3500).toLocaleString('ar-EG')+' م';}
addEventListener('scroll',u,{passive:true});u();})();
(function(){
var s=document.querySelector('.sky'),r=matchMedia('(prefers-reduced-motion: reduce)').matches;
if(r){if(s&&s.pauseAnimations)s.pauseAnimations();return;}
if(!('IntersectionObserver' in window))return;
var els=document.querySelectorAll('.card,details,.links a,.steps li,.why li,.member');
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var el=e.target;
setTimeout(function(){el.classList.add('in');setTimeout(function(){el.classList.remove('rv','in');},700);},(el.dataset.d|0));io.unobserve(el);}});},{threshold:.15});
els.forEach(function(el,i){el.classList.add('rv');el.dataset.d=(i%4)*90;io.observe(el);});
})();
(function(){var h=document.querySelector('.hero');if(!h||matchMedia('(prefers-reduced-motion: reduce)').matches)return;
h.addEventListener('pointerdown',function(e){var b=h.getBoundingClientRect(),r=document.createElement('span');r.className='rip';r.style.left=(e.clientX-b.left)+'px';r.style.top=(e.clientY-b.top)+'px';h.appendChild(r);setTimeout(function(){r.remove()},950);});})();
(function(){var s=document.getElementById('sj'),c=document.getElementById('committees');
if(s&&c){var u=function(){var r=c.getBoundingClientRect(),v=r.top<innerHeight*.6&&r.bottom>innerHeight*.2;s.classList.add('show');};addEventListener('scroll',u,{passive:true});u();}
var sh=document.getElementById('share');
if(sh)sh.addEventListener('click',function(){var d={title:document.title,url:location.href};
if(navigator.share){navigator.share(d).catch(function(){});}
else if(navigator.clipboard){navigator.clipboard.writeText(location.href).then(function(){sh.textContent='اتنسخ اللينك ✓';});}});})();

(function(){var d=document.getElementById('deadline');if(!d)return;
var o=new Date(d.dataset.open),c=new Date(d.dataset.close),n=new Date(),t=document.getElementById('dl-text'),w=document.getElementById('win-status');
if(n<o){var days=Math.ceil((o-n)/864e5);t.textContent='التقديم بيفتح الأربعاء 25 نوفمبر ويقفل الجمعة 27 نوفمبر 2026';}
else if(n<c){var left=Math.ceil((c-n)/864e5);t.textContent=left>1?'التقديم مفتوح دلوقتي · بيقفل الجمعة 27 نوفمبر':'آخر يوم للتقديم النهاردة · الجمعة 27 نوفمبر';
if(w)w.textContent=left>1?'التقديم مفتوح دلوقتي وبيقفل الجمعة 27 نوفمبر.':'النهاردة آخر يوم للتقديم. قدّم دلوقتي.';}
else{t.textContent='التقديم اتقفل. تابعنا عشان تعرف الفرص الجاية.';if(w)w.textContent='التقديم اتقفل. تابع صفحاتنا للفرص الجاية.';}})();
