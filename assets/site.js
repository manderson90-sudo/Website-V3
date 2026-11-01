const menu=document.querySelector('#mobile-menu'),openButton=document.querySelector('#open-menu');
openButton.addEventListener('click',()=>{menu.showModal();openButton.setAttribute('aria-expanded','true');document.querySelector('#close-menu').focus()});
function closeMenu(){menu.close();openButton.setAttribute('aria-expanded','false');openButton.focus()}
document.querySelector('#close-menu').addEventListener('click',closeMenu);
menu.addEventListener('cancel',e=>{e.preventDefault();closeMenu()});
menu.addEventListener('close',()=>{openButton.setAttribute('aria-expanded','false');openButton.focus()});
menu.addEventListener('click',e=>{if(e.target===menu&&e.clientX<menu.getBoundingClientRect().left)menu.close()});
document.querySelectorAll('.recommendation-carousel').forEach(carousel=>{let index=0;const slides=[...carousel.querySelectorAll('.slide')],dots=[...carousel.querySelectorAll('[data-slide]')];function show(n){index=(n+slides.length)%slides.length;slides.forEach((s,i)=>{s.hidden=i!==index});dots.forEach((b,i)=>b.setAttribute('aria-pressed',String(i===index)));carousel.querySelector('[data-status]').textContent=`Recommendation ${index+1} of ${slides.length}`};carousel.querySelector('[data-prev]').addEventListener('click',()=>show(index-1));carousel.querySelector('[data-next]').addEventListener('click',()=>show(index+1));dots.forEach((b,i)=>b.addEventListener('click',()=>show(i)))});
