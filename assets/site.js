const img=(n)=>`assets/img/${n}`;
const projects=[
 {id:'p1',cat:'storage',title:'Встроенная мебель и рабочая зона',desc:'Мебель и системы хранения для частного интерьера.',cover:img('kitchens-storage/built-in-office-cabinet-private-interior.jpg')},
 {id:'p2',cat:'storage',title:'Классическая кухня под заказ',desc:'Кухня и островная зона в процессе установки.',cover:img('kitchens-storage/classic-kitchen-in-progress.jpg')},
 {id:'p3',cat:'storage',title:'Мебель для ванной комнаты',desc:'Тумба и деревянные элементы под размеры помещения.',cover:img('kitchens-storage/wood-bathroom-vanity-custom.jpg')},
 {id:'p4',cat:'storage',title:'Встроенная мебель и рабочее место',desc:'Система хранения, рабочая зона и мебель под размер.',cover:img('kitchens-storage/built-in-kids-room-workplace-storage.jpg')},
 {id:'p5',cat:'storage',title:'Гардеробная система хранения',desc:'Встроенная гардеробная с полками, ящиками и подсветкой.',cover:img('kitchens-storage/walk-in-closet-built-in-storage.jpg')},
 {id:'p6',cat:'storage',title:'Встроенный шкаф с зеркальными фасадами',desc:'Шкаф под размер с акцентной фурнитурой и зеркальными секциями.',cover:img('kitchens-storage/modern-built-in-wardrobe-mirrors.jpg')},
 {id:'p7',cat:'storage',title:'Кухонный остров с декоративным фасадом',desc:'Интерьерное решение для кухни и гостиной.',cover:img('kitchens-storage/kitchen-island-decorative-facade.jpg')},
 {id:'p8',cat:'storage',title:'Обеденная группа для частного интерьера',desc:'Стол и стулья в классическом интерьере.',cover:img('kitchens-storage/classic-dining-table-and-chairs.jpg')},
 {id:'p9',cat:'storage',title:'Встроенный стеллаж под лестницей',desc:'Деревянная система хранения под нестандартную геометрию.',cover:img('kitchens-storage/stair-built-in-wood-shelving.jpg')},
 {id:'p10',cat:'storage',title:'Открытая встроенная система хранения',desc:'Стеллаж и шкаф под размер для частного интерьера.',cover:img('kitchens-storage/white-built-in-bookcase-open.jpg')},
 {id:'p11',cat:'jalousie',title:'Жалюзийные фасады для системы хранения',desc:'Белые фасады для шкафа в частном интерьере.',cover:img('jalousie-facades/jalousie-white-wardrobe-private-interior.jpg')},
 {id:'p12',cat:'jalousie',title:'Фасады для технической зоны',desc:'Чёрные жалюзийные дверцы для ниши.',cover:img('jalousie-facades/jalousie-black-technical-doors-closed.jpg')},
 {id:'p13',cat:'jalousie',title:'Фасады для ниши / технического шкафа',desc:'Открытые дверцы и внутреннее пространство.',cover:img('jalousie-facades/jalousie-black-technical-doors-open.jpg')},
 {id:'p14',cat:'jalousie',title:'Мебель и фасады для ванной комнаты',desc:'Шкафчик и фасады под цвет интерьера.',cover:img('jalousie-facades/jalousie-green-bathroom-cabinet.jpg')},
 {id:'p15',cat:'jalousie',title:'Встроенная система хранения',desc:'Большой шкаф с жалюзийными фасадами.',cover:img('jalousie-facades/jalousie-black-built-in-storage-brick-wall.jpg')},
 {id:'p16',cat:'jalousie',title:'Жалюзийные фасады в частном интерьере',desc:'Деревянные фасады и декоративные ниши.',cover:img('jalousie-facades/jalousie-wood-private-interior-niches.jpg')},
 {id:'p17',cat:'jalousie',title:'Системы хранения с жалюзийными фасадами',desc:'Фасады под размер вокруг дверного проёма.',cover:img('jalousie-facades/jalousie-wood-storage-around-pink-door.jpg')},
 {id:'p18',cat:'jalousie',title:'Жалюзийные фасады для шкафа',desc:'Фасады под размер в деревянном интерьере.',cover:img('jalousie-facades/jalousie-beige-closet-cottage-interior.jpg')},
 {id:'p19',cat:'jalousie',title:'Зелёные жалюзийные фасады',desc:'Система хранения в деревянном интерьере.',cover:img('jalousie-facades/jalousie-green-cottage-storage.jpg')},
 {id:'p20',cat:'horeca',title:'Стол для ресторанного интерьера',desc:'Деревянный стол для камерной зоны ресторана.',cover:img('business-horeca/restaurant-wood-table-private-dining.jpg')},
 {id:'p21',cat:'horeca',title:'Изделие для отельного пространства',desc:'Чёрная тумба/стойка с декоративной отделкой.',cover:img('business-horeca/lotte-hotel-black-gold-counter.jpg')},
 {id:'p22',cat:'horeca',title:'Встроенная мебель для общественного пространства',desc:'Шкаф с зеркальными фасадами для холла.',cover:img('business-horeca/hotel-public-space-mirrored-cabinet.jpg')},
 {id:'p23',cat:'horeca',title:'Декоративное изделие для коммерческого интерьера',desc:'Нестандартное изделие для ресторанного пространства.',cover:img('business-horeca/sintoho-black-decorative-commercial-piece.jpg')},
 {id:'p24',cat:'horeca',title:'Стеллаж для ресторанного интерьера',desc:'Деревянный стеллаж и зонирование.',cover:img('business-horeca/restaurant-wood-display-shelving.jpg')},
 {id:'p25',cat:'horeca',title:'Мебель и витрина для ресторанного пространства',desc:'Витрина и мебель для зоны с десертами.',cover:img('business-horeca/hotel-dessert-display-counter.jpg')},
 {id:'p26',cat:'horeca',title:'Мебель и панели для кафе',desc:'Столы и декоративная деревянная стена.',cover:img('business-horeca/restaurant-tables-and-wood-wall-panels.jpg')},
 {id:'p27',cat:'horeca',title:'Деревянная витрина для коммерческого пространства',desc:'Шкаф и витринная зона под интерьер объекта.',cover:img('business-horeca/commercial-wood-display-cabinet.jpg')},
 {id:'p28',cat:'custom',title:'Классические межкомнатные двери',desc:'Двери и декоративное оформление проёма.',cover:img('misc-custom/classic-white-double-doors.jpg')},
 {id:'p29',cat:'custom',title:'Дверь для отельного номера',desc:'Деревянная дверь и оформление входной зоны.',cover:img('misc-custom/hotel-room-door-wood-finish.jpg')},
 {id:'p30',cat:'custom',title:'Производственная / рабочая зона',desc:'Пример рабочей зоны и мебели под проект.',cover:img('misc-custom/production-office-kitchen-zone.jpg')},
 {id:'p31',cat:'custom',title:'Кресла в производстве',desc:'Серия кресел в процессе готовности.',cover:img('misc-custom/production-chair-series-workshop.jpg')},
 {id:'p32',cat:'custom',title:'Банкетка для частного интерьера',desc:'Нестандартное изделие под интерьер.',cover:img('misc-custom/upholstered-bench-private-interior.jpg')},
 {id:'p33',cat:'custom',title:'Декоративные ширмы для пространства',desc:'Нестандартное решение под задачу объекта.',cover:img('misc-custom/outdoor-decorative-privacy-screens.jpg')},
 {id:'p34',cat:'custom',title:'Лежаки и столики для SPA-зоны',desc:'Изделия для зоны отдыха и коммерческого пространства.',cover:img('misc-custom/spa-lounge-chaise-and-side-tables.jpg')},
 {id:'p35',cat:'custom',title:'Винный стеллаж с подсветкой',desc:'Интерьерное хранение под размер.',cover:img('misc-custom/wine-rack-led-premium.jpg')},
 {id:'p36',cat:'custom',title:'Брендированные деревянные боксы',desc:'Серия изделий для отельного проекта.',cover:img('misc-custom/lotte-branded-wood-boxes.jpg')},
 {id:'p37',cat:'custom',title:'Декоративные мини-стойки',desc:'Небольшие деревянные изделия под задачу клиента.',cover:img('misc-custom/small-leather-wood-stands.jpg')},
 {id:'p38',cat:'custom',title:'Декоративное зеркало',desc:'Нестандартная деталь для ванной комнаты.',cover:img('misc-custom/round-decorative-wood-mirror.jpg')},
];

const cats={storage:'Кухни и встроенная мебель',jalousie:'Жалюзийные фасады',horeca:'Бизнес / HoReCa',custom:'Разное / нестандартное'};
function escapeAttr(s){return String(s).replace(/'/g,'’').replace(/"/g,'&quot;')}
function card(p){return `<article class="work-card" data-cat="${p.cat}" onclick="openImage('${p.cover}','${escapeAttr(p.title)}')"><div class="work-img"><img src="${p.cover}" alt="${p.title}" loading="lazy" onerror="this.closest('.work-card').classList.add('image-missing')"></div><div class="work-body"><div class="work-cat">${cats[p.cat]||p.cat}</div><div class="work-title">${p.title}</div><p class="work-desc">${p.desc}</p></div></article>`}
function renderPortfolio(filter='all'){
 const root=document.querySelector('#portfolioGrid'); if(!root)return;
 root.innerHTML='';
 const seen=new Set();
 const list=projects.filter(p=>filter==='all'||p.cat===filter).filter(p=>{ if(seen.has(p.cover)) return false; seen.add(p.cover); return true; });
 list.forEach(p=>root.insertAdjacentHTML('beforeend',card(p)));
 document.querySelectorAll('.filter').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
}
function openImage(src,title){
 const old=document.querySelector('.image-lightbox'); if(old) old.remove();
 const lb=document.createElement('div'); lb.className='image-lightbox';
 lb.innerHTML=`<button type="button" aria-label="Закрыть">×</button><figure><img src="${src}" alt="${title}"><figcaption>${title}</figcaption></figure>`;
 lb.addEventListener('click',e=>{if(e.target===lb||e.target.tagName==='BUTTON')lb.remove()});
 document.body.appendChild(lb);
}
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelector('.image-lightbox')?.remove()});
document.addEventListener('DOMContentLoaded',()=>{
 const params=new URLSearchParams(location.search);
 const start=params.get('cat')||'all';
 renderPortfolio(start);
 document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{
   const f=btn.dataset.filter; renderPortfolio(f);
   const url=f==='all'?'portfolio.html':`portfolio.html?cat=${encodeURIComponent(f)}`;
   history.replaceState(null,'',url);
 }));
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
