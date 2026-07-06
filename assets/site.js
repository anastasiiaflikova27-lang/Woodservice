const img=(n)=>`assets/img/${n}`;

const projects=[
 {id:'storage-office',cat:'storage',title:'Встроенная мебель и рабочая зона',desc:'Мебель и системы хранения для частного интерьера.',cover:img('kitchens-storage/built-in-office-cabinet-private-interior.jpg')},
 {id:'storage-kitchen',cat:'storage',title:'Классическая кухня под заказ',desc:'Кухня и островная зона в процессе установки.',cover:img('kitchens-storage/classic-kitchen-in-progress.jpg')},
 {id:'storage-bathroom',cat:'storage',title:'Мебель для ванной комнаты',desc:'Тумба и деревянные элементы под размеры помещения.',cover:img('kitchens-storage/wood-bathroom-vanity-custom.jpg')},
 {id:'storage-kids',cat:'storage',title:'Встроенная мебель и рабочее место',desc:'Система хранения, рабочая зона и мебель под размер.',cover:img('kitchens-storage/built-in-kids-room-workplace-storage.jpg')},
 {id:'storage-wardrobe',cat:'storage',title:'Гардеробная система хранения',desc:'Встроенная гардеробная с полками, ящиками и подсветкой.',cover:img('kitchens-storage/walk-in-closet-built-in-storage.jpg')},
 {id:'storage-mirror-wardrobe',cat:'storage',title:'Встроенный шкаф с зеркальными фасадами',desc:'Шкаф под размер с акцентной фурнитурой и зеркальными секциями.',cover:img('kitchens-storage/modern-built-in-wardrobe-mirrors.jpg')},
 {id:'storage-island',cat:'storage',title:'Кухонный остров с декоративным фасадом',desc:'Интерьерное решение для кухни и гостиной.',cover:img('kitchens-storage/kitchen-island-decorative-facade.jpg')},
 {id:'storage-dining',cat:'storage',title:'Обеденная группа для частного интерьера',desc:'Стол и стулья в классическом интерьере.',cover:img('kitchens-storage/classic-dining-table-and-chairs.jpg')},
 {id:'storage-stairs',cat:'storage',title:'Встроенный стеллаж под лестницей',desc:'Деревянная система хранения под нестандартную геометрию.',cover:img('kitchens-storage/stair-built-in-wood-shelving.jpg')},
 {id:'storage-bookcase',cat:'storage',title:'Открытая встроенная система хранения',desc:'Стеллаж и шкаф под размер для частного интерьера.',cover:img('kitchens-storage/white-built-in-bookcase-open.jpg')},
 {id:'blue-laundry',cat:'storage',title:'Встроенная мебель для постирочной зоны',desc:'Голубая встроенная мебель, фасады и хранение под бытовую технику.',cover:img('work-groups/blue-laundry/laundry-blue-built-in-storage-jalousie.jpg'),gallery:[img('work-groups/blue-laundry/laundry-blue-built-in-storage-jalousie.jpg'),img('work-groups/blue-laundry/laundry-blue-built-in-storage-open.jpg')]},

 {id:'jalousie-white',cat:'jalousie',title:'Жалюзийные фасады для системы хранения',desc:'Белые фасады для шкафа в частном интерьере.',cover:img('jalousie-facades/jalousie-white-wardrobe-private-interior.jpg')},
 {id:'jalousie-black',cat:'jalousie',title:'Фасады для технической зоны',desc:'Чёрные жалюзийные дверцы для ниши.',cover:img('jalousie-facades/jalousie-black-technical-doors-closed.jpg'),gallery:[img('jalousie-facades/jalousie-black-technical-doors-closed.jpg'),img('jalousie-facades/jalousie-black-technical-doors-open.jpg')]},
 {id:'jalousie-bath',cat:'jalousie',title:'Мебель и фасады для ванной комнаты',desc:'Шкафчик и фасады под цвет интерьера.',cover:img('jalousie-facades/jalousie-green-bathroom-cabinet.jpg')},
 {id:'jalousie-black-storage',cat:'jalousie',title:'Встроенная система хранения',desc:'Большой шкаф с жалюзийными фасадами.',cover:img('jalousie-facades/jalousie-black-built-in-storage-brick-wall.jpg')},
 {id:'jalousie-oak-niches',cat:'jalousie',title:'Жалюзийные фасады в частном интерьере из массива дуба',desc:'Деревянные фасады, декоративные ниши и системы хранения под размер.',cover:img('jalousie-facades/jalousie-wood-private-interior-niches.jpg'),gallery:[img('jalousie-facades/jalousie-wood-private-interior-niches.jpg'),img('jalousie-facades/jalousie-wood-storage-around-pink-door.jpg')]},
 {id:'jalousie-cottage',cat:'jalousie',title:'Жалюзийные фасады для шкафа',desc:'Фасады под размер в деревянном интерьере.',cover:img('jalousie-facades/jalousie-beige-closet-cottage-interior.jpg')},
 {id:'jalousie-green',cat:'jalousie',title:'Зелёные жалюзийные фасады',desc:'Система хранения в деревянном интерьере.',cover:img('jalousie-facades/jalousie-green-cottage-storage.jpg')},

 {id:'horeca-restaurant-table',cat:'horeca',title:'Стол для ресторанного интерьера',desc:'Деревянный стол для камерной зоны ресторана.',cover:img('business-horeca/restaurant-wood-table-private-dining.jpg')},
 {id:'horeca-lotte-counter',cat:'horeca',title:'Изделие для отельного пространства',desc:'Чёрная тумба/стойка с декоративной отделкой.',cover:img('business-horeca/lotte-hotel-black-gold-counter.jpg')},
 {id:'horeca-hotel-cabinet',cat:'horeca',title:'Встроенная мебель для общественного пространства',desc:'Шкаф с зеркальными фасадами для холла.',cover:img('business-horeca/hotel-public-space-mirrored-cabinet.jpg')},
 {id:'horeca-sintoho',cat:'horeca',title:'Декоративное изделие для коммерческого интерьера',desc:'Нестандартное изделие для ресторанного пространства.',cover:img('business-horeca/sintoho-black-decorative-commercial-piece.jpg')},
 {id:'horeca-shelving',cat:'horeca',title:'Стеллаж для ресторанного интерьера',desc:'Деревянный стеллаж и зонирование.',cover:img('business-horeca/restaurant-wood-display-shelving.jpg')},
 {id:'horeca-dessert',cat:'horeca',title:'Мебель и витрина для ресторанного пространства',desc:'Витрина и мебель для зоны с десертами.',cover:img('business-horeca/hotel-dessert-display-counter.jpg')},
 {id:'horeca-cafe-panels',cat:'horeca',title:'Мебель и панели для кафе',desc:'Столы и декоративная деревянная стена.',cover:img('business-horeca/restaurant-tables-and-wood-wall-panels.jpg')},
 {id:'green-cabinet',cat:'horeca',title:'Мебель и предметы интерьера для кабинета',desc:'Премиальный кабинет: стеновая мебель, витраж, письменный стол и декоративные элементы.',cover:img('work-groups/green-cabinet/premium-green-office-black-desk.jpg'),gallery:[img('work-groups/green-cabinet/premium-green-office-black-desk.jpg'),img('work-groups/green-cabinet/premium-green-cabinet-office-interior.jpg'),img('work-groups/green-cabinet/premium-green-cabinet-fireplace.jpg'),img('work-groups/green-cabinet/premium-green-cabinet-wide.jpg'),img('work-groups/green-cabinet/premium-black-desk-detail.jpg')]},

 {id:'custom-doors-classic',cat:'custom',title:'Классические межкомнатные двери',desc:'Двери и декоративное оформление проёма.',cover:img('misc-custom/classic-white-double-doors.jpg')},
 {id:'custom-hotel-door',cat:'custom',title:'Двери для номерного фонда в отеле',desc:'Деревянные двери и оформление входной зоны для номерного фонда.',cover:img('misc-custom/hotel-room-door-wood-finish.jpg')},
 {id:'custom-production-zone',cat:'custom',title:'Производственная / рабочая зона',desc:'Пример рабочей зоны и мебели под проект.',cover:img('misc-custom/production-office-kitchen-zone.jpg')},
 {id:'custom-chairs-production',cat:'custom',title:'Кресла в производстве',desc:'Серия кресел в процессе готовности.',cover:img('misc-custom/production-chair-series-workshop.jpg')},
 {id:'custom-bench',cat:'custom',title:'Банкетка для частного интерьера',desc:'Нестандартное изделие под интерьер.',cover:img('misc-custom/upholstered-bench-private-interior.jpg')},
 {id:'custom-screens',cat:'custom',title:'Декоративные ширмы для зонирования пространства',desc:'Нестандартное решение для зонирования пространства.',cover:img('misc-custom/outdoor-decorative-privacy-screens.jpg')},
 {id:'custom-spa',cat:'custom',title:'Лежаки и столики для SPA-зоны',desc:'Изделия для зоны отдыха и коммерческого пространства.',cover:img('misc-custom/spa-lounge-chaise-and-side-tables.jpg')},
 {id:'custom-wine',cat:'custom',title:'Винный стеллаж с подсветкой',desc:'Интерьерное хранение под размер.',cover:img('misc-custom/wine-rack-led-premium.jpg')},
 {id:'custom-boxes',cat:'custom',title:'Брендированные деревянные боксы',desc:'Серия изделий для отельного проекта.',cover:img('misc-custom/lotte-branded-wood-boxes.jpg')},
 {id:'custom-luggage',cat:'custom',title:'Декоративные багажницы / подставки для сумок',desc:'Декоративные подставки для багажа и сумок под задачу объекта.',cover:img('misc-custom/small-leather-wood-stands.jpg')},
 {id:'custom-mirror',cat:'custom',title:'Декоративное зеркало с подсветкой',desc:'Нестандартная деталь для ванной комнаты.',cover:img('misc-custom/round-decorative-wood-mirror.jpg')},
];

const extraWorks=[
 {id:'ex-blue-open',cat:'storage',title:'Постирочная зона — дополнительный ракурс',desc:'Открытое хранение и секции под бытовую технику.',cover:img('work-groups/blue-laundry/laundry-blue-built-in-storage-open.jpg')},
 {id:'ex-green-wall',cat:'horeca',title:'Кабинет — стеновая мебель и каминная зона',desc:'Дополнительный ракурс зелёного кабинета.',cover:img('work-groups/green-cabinet/premium-green-cabinet-fireplace.jpg')},
 {id:'ex-green-wide',cat:'horeca',title:'Кабинет — мебель и декоративные панели',desc:'Широкий ракурс кабинета с мебелью и витражом.',cover:img('work-groups/green-cabinet/premium-green-cabinet-wide.jpg')},
 {id:'ex-green-desk',cat:'horeca',title:'Письменный стол — детали отделки',desc:'Фурнитура, декоративные линии и покрытие.',cover:img('work-groups/green-cabinet/premium-black-desk-detail.jpg')},
 {id:'ex-jal-open',cat:'jalousie',title:'Фасады для ниши — открытый ракурс',desc:'Дополнительный вид технического шкафа.',cover:img('jalousie-facades/jalousie-black-technical-doors-open.jpg')},
 {id:'ex-jal-pink',cat:'jalousie',title:'Жалюзийные фасады из массива дуба — второй ракурс',desc:'Фасады под размер вокруг дверного проёма.',cover:img('jalousie-facades/jalousie-wood-storage-around-pink-door.jpg')},
 {id:'ex-legacy-wine',cat:'custom',title:'Винный стеллаж — дополнительный кадр',desc:'Фото из предыдущей подборки, оставлено в дополнительных работах.',cover:img('legacy/old-wine-rack.jpg')},
 {id:'ex-legacy-kitchen',cat:'storage',title:'Классическая кухня / интерьерная мебель',desc:'Фото из предыдущей подборки, оставлено в дополнительных работах.',cover:img('legacy/old-classic-kitchen.jpg')},
];

const cats={storage:'Кухни и встроенная мебель',jalousie:'Жалюзийные фасады',horeca:'Бизнес / HoReCa',custom:'Разное / нестандартное'};
const allWorks=[...projects,...extraWorks];
function escapeAttr(s){return String(s).replace(/'/g,'’').replace(/"/g,'&quot;')}
function card(p){return `<article class="work-card" data-cat="${p.cat}" onclick="openProject('${p.id}')"><div class="work-img"><img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.closest('.work-card').classList.add('image-missing')"></div><div class="work-body"><div class="work-cat">${cats[p.cat]||p.cat}</div><div class="work-title">${p.title}</div><p class="work-desc">${p.desc}</p></div></article>`}
function uniqueByCover(list){const seen=new Set();return list.filter(p=>{if(seen.has(p.cover))return false;seen.add(p.cover);return true;});}
function renderPortfolio(filter='all'){
 const root=document.querySelector('#portfolioGrid'); if(!root)return;
 root.innerHTML='';
 const list=uniqueByCover(projects.filter(p=>filter==='all'||p.cat===filter));
 list.forEach(p=>root.insertAdjacentHTML('beforeend',card(p)));
 document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
}
function openProject(id){
 const p=allWorks.find(x=>x.id===id); if(!p)return;
 const old=document.querySelector('.image-lightbox'); if(old) old.remove();
 const gallery=(p.gallery&&p.gallery.length?p.gallery:[p.cover]);
 const lb=document.createElement('div'); lb.className='image-lightbox';
 lb.innerHTML=`<button type="button" aria-label="Закрыть">×</button><figure><img class="lightbox-main" src="${gallery[0]}" alt="${escapeAttr(p.title)}"><figcaption>${p.title}</figcaption>${gallery.length>1?`<div class="lightbox-thumbs">${gallery.map((src,i)=>`<img src="${src}" alt="${escapeAttr(p.title)} ${i+1}" data-src="${src}" class="${i===0?'active':''}">`).join('')}</div>`:''}</figure>`;
 lb.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.remove()});
 lb.querySelectorAll('.lightbox-thumbs img').forEach(t=>t.addEventListener('click',e=>{e.stopPropagation();lb.querySelector('.lightbox-main').src=t.dataset.src;lb.querySelectorAll('.lightbox-thumbs img').forEach(x=>x.classList.remove('active'));t.classList.add('active');}));
 document.body.appendChild(lb);
}
function openImage(src,title){
 const tmp={id:'tmp',title:title||'',cover:src};
 projects.push(tmp); openProject('tmp'); projects.pop();
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelector('.image-lightbox')?.remove()});
document.addEventListener('DOMContentLoaded',()=>{
 const params=new URLSearchParams(location.search);
 const start=params.get('cat')||'all';
 renderPortfolio(start);

 document.querySelectorAll('.filter').forEach(btn=>{
   btn.addEventListener('click',()=>{
     const f=btn.dataset.filter || 'all';
     renderPortfolio(f);
     const url=f==='all'?'portfolio.html':`portfolio.html?cat=${encodeURIComponent(f)}`;
     history.replaceState(null,'',url);
   });
 });

 const btn = document.querySelector('.mobile-toggle');
 const menu = document.querySelector('.menu');
 if(btn && menu){
   btn.addEventListener('click',()=>{menu.classList.toggle('open');btn.textContent=menu.classList.contains('open')?'×':'☰';});
   menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');btn.textContent='☰';}));
 }
 const hero=document.querySelector('.hero-center');
 if(hero){
   const style=getComputedStyle(hero).getPropertyValue('--hero-image');
   const match=style.match(/url\(["']?([^"')]+)["']?\)/);
   if(match){const test=new Image();test.onerror=()=>hero.classList.add('hero-no-image');test.src=match[1];}
 }
});
