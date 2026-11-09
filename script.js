var T=[["",""],["AI Training & Evaluation · Freelance","I review and improve AI responses, mostly around computer science and code, checking that they’re accurate, clear and useful."],["ICT Support","Sorting out laptops, networks and software problems, then explaining the fix so it doesn’t happen again."]];
var tl=document.querySelectorAll('.tile');
function show(i){tl.forEach(function(t,k){t.classList.toggle('on',k==i)});}
tl.forEach(function(t){t.addEventListener('click',function(){show(+t.dataset.i)})});show(1);
var f=document.getElementById('f'),st=document.getElementById('st');
function msg(){var x=new FormData(f);return{t:'Hello from your portfolio',b:'Hi Ronny,\n\n'+x.get('m')+'\n\n– '+x.get('n')+'\n'+x.get('e')+(x.get('p')?'\n'+x.get('p'):'')}}
function open_(u,blank){var a=document.createElement('a');a.href=u;if(blank){a.target='_blank';a.rel='noopener'}document.body.appendChild(a);a.click();a.remove()}
function go(via){if(!f.reportValidity())return;var m=msg();
if(via=='gmail'){open_('https://mail.google.com/mail/?view=cm&fs=1&to=adederonny@gmail.com&su='+encodeURIComponent(m.t)+'&body='+encodeURIComponent(m.b),1);st.textContent='Gmail is opening. Press send there to deliver your message.'}
else if(via=='wa'){open_('https://wa.me/254797357506?text='+encodeURIComponent(m.t+'\n\n'+m.b),1);st.textContent='WhatsApp is opening. Press send there to deliver your message.'}
else{open_('mailto:adederonny@gmail.com?subject='+encodeURIComponent(m.t)+'&body='+encodeURIComponent(m.b));st.textContent='Opening your email app. If nothing happens, try Gmail or WhatsApp.'}}
f.addEventListener('submit',function(e){e.preventDefault();go('mail')});
document.querySelectorAll('[data-via]').forEach(function(b){b.addEventListener('click',function(){go(b.dataset.via)})});
