/* ============================================================
   THE BIFROST SCHOOL - SITE BEHAVIOR
   Tab navigation, content injection, the five-year financial
   model, the budget modal, and the contact form.
   Site text lives in content.js; styles in styles.css.
   ============================================================ */

// Optional overrides saved by the admin page (bifrost_admin.html) via
// localStorage. These take precedence over content.js in that browser only.
function getConfig(){try{const r=localStorage.getItem('bifrost_config');if(r)return JSON.parse(r);}catch(e){}return null;}
const CFG={...(window.BIFROST_CONTENT||{}),...(getConfig()||{})};

// Fixed annual operating costs used by the five-year model
const FIXED={insurance:1200,supplies:1800,admin:1200,misc:1800};
const FOUNDER=175000; // Executive Director salary per year

const ART_YEARS=['images/year-art-1.jpg','images/year-art-2.jpg','images/year-art-3.jpg','images/cta-art.jpg','images/year-art-4.jpg'];
const ART_YEAR_POS=['center 70%','center 62%','center 65%','center 35%','center 35%'];

// ── FIVE-YEAR FINANCIAL MODEL ─────────────────────────────────────────────────
function computeYear(r){
  const ipC=r.ipC,onC=r.onC,sz=CFG.cohortSize,wk=CFG.weeks/48;
  const ipSt=ipC*sz,onSt=onC*sz,tot=ipSt+onSt;
  const tuit=ipSt*CFG.priceIP*12*wk+onSt*CFG.priceON*12*wk+tot*50+tot*30;
  const audio=r.audioT*CFG.audioPrice*r.audioU;
  const lic=r.lic*CFG.curriculumPrice;
  const productRev=tuit+audio+lic;
  const pay=CFG.payroll/100,hpw=3;
  const opCosts=ipC*hpw*CFG.weeks*CFG.rateIP*(1+pay)+onC*hpw*CFG.weeks*CFG.rateON*(1+pay)+CFG.platform*12+CFG.marketing*12+FIXED.insurance+FIXED.supplies+FIXED.admin+FIXED.misc;
  const totalCosts=opCosts+FOUNDER;
  const net=productRev-totalCosts;
  const donNeeded=Math.max(-net,0);
  return{tuit,audio,lic,productRev,opCosts,totalCosts,net,donNeeded,
    totalSt:tot,ipC,onC,audioTitles:r.audioT,audioUnits:r.audioU,curriculumSales:r.lic,label:r.label,note:r.note};
}

// ── HELPERS ───────────────────────────────────────────────────────────────────
function fmt(n,d=0){return Math.abs(n).toLocaleString('en-US',{minimumFractionDigits:d,maximumFractionDigits:d})}
function fmtC(n){return n<0?'($'+fmt(-n)+')':'$'+fmt(n)}
function fmtK(n){return n>=1000?'$'+fmt(n/1000,0)+'k':fmtC(n)}
function fmt$(n){return '$'+Math.round(n).toLocaleString('en-US')}
function st(id,v){const e=document.getElementById(id);if(e)e.textContent=v;}
function ht(id,v){const e=document.getElementById(id);if(e)e.innerHTML=v;}
// Accepts an array of paragraphs or a string with blank-line breaks
function paras(v){const a=Array.isArray(v)?v:String(v||'').split('\n\n');return a.filter(Boolean).map(p=>'<p>'+p+'</p>').join('');}

// ── CONTENT INJECTION ─────────────────────────────────────────────────────────
function injectContent(){
  document.title=(CFG.schoolName||'The Bifrost School')+' — A Five-Year Vision';
  st('d-school-name',CFG.schoolName||'The Bifrost School');
  st('d-hero-lede',CFG.heroLede||'');
  st('d-hero-tagline',CFG.heroSubLede||'');
  st('d-mission-quote',CFG.missionQuote||'');
  st('d-principles-eyebrow',CFG.principlesEyebrow||'Our Philosophy');
  st('d-principles-subtitle',CFG.principlesSubtitle||'');
  if(CFG.principles&&CFG.principles.length){const pg=document.getElementById('d-principles-grid');if(pg){pg.innerHTML=CFG.principles.map(p=>'<div class="principle-card"><div class="principle-title">'+p.title+'</div><div class="principle-body">'+p.body+'</div></div>').join('');}}
  const fvSrc=document.getElementById('founder-video-src');
  const fvVideo=document.getElementById('founder-video');
  const fvHolder=document.getElementById('founder-video-placeholder');
  if(CFG.founderVideoFile){if(fvSrc)fvSrc.src=CFG.founderVideoFile;if(fvVideo){fvVideo.load();fvVideo.style.display='block';}if(fvHolder)fvHolder.style.display='none';}
  st('d-founder-video-eyebrow',CFG.founderVideoEyebrow||'From the Founder');
  st('d-founder-video-caption',CFG.founderVideoCaption||'');
  ht('d-wmud-grid',(CFG.wmudCards||[]).map((c,i)=>{
    const isLast=i===(CFG.wmudCards.length-1)&&(CFG.wmudCards.length%2!==0);
    return '<div class="wmud-card'+(isLast?' wmud-card--wide':'')+'"><div class="wmud-title">'+c.title+'</div><div class="wmud-body">'+c.body+'</div></div>';
  }).join(''));
  st('d-streams-eyebrow',CFG.streamsEyebrow||'Revenue Streams');
  st('d-streams-title',CFG.streamsTitle||'');
  ht('d-streams-body',CFG.streamsBody||'');
  ht('d-streams-grid',(CFG.streams||[]).map(s=>'<div class="stream-card '+s.cls+'"><div class="sc-label">'+s.label+'</div><div class="sc-body">'+s.body+'</div></div>').join(''));
  st('d-funding-eyebrow',CFG.fundingEyebrow||'');
  st('d-funding-title',CFG.fundingTitle||'');
  st('d-funding-amount',fmtC(CFG.fundingGoal||300000));
  st('d-funding-sub',CFG.fundingSub||'');
  st('d-funding-blurb',CFG.fundingBlurb||'');
  st('d-milestones-label',CFG.milestonesLabel||'');
  ht('d-milestones-list',(CFG.milestones||[]).map(m=>'<li><span class="milestone-num">'+m.num+'</span><div class="milestone-text"><strong>'+m.strong+'</strong> '+m.body+'</div></li>').join(''));
  renderFundingBar();
  st('d-roadmap-eyebrow',CFG.roadmapEyebrow||'');
  st('d-roadmap-title',CFG.roadmapTitle||'');
  ht('d-roadmap-intro',CFG.roadmapIntro||'');
  st('d-chart-eyebrow',CFG.chartEyebrow||'');
  st('d-chart-title',CFG.chartTitle||'');
  ht('d-chart-body',CFG.chartBody||'');
  renderTotalRaisedBar();
  st('d-cta-eyebrow',CFG.ctaEyebrow||'');
  st('d-cta-title',CFG.ctaTitle||'');
  ht('d-cta-body',CFG.ctaBody||'');
  st('d-donate-btn-text',CFG.donateBtnText||'');
  ht('d-about-story',paras(CFG.aboutStory));
  st('d-about-story-title',CFG.aboutStoryTitle||'');
  st('d-about-founder-name',CFG.aboutFounderTitle||'Jesse Livingston');
  st('d-about-founder-role',CFG.aboutFounderRole||'Founder');
  ht('d-fiscal-note',(CFG.fiscalNote||'')+(CFG.fiscalNote2?'<br>'+CFG.fiscalNote2:''));
  st('d-contact-title',CFG.contactTitle||'');
  ht('d-contact-body',CFG.contactBody||'');
  st('d-form-name-label',CFG.formNameLabel||'');
  st('d-form-email-label',CFG.formEmailLabel||'');
  st('d-form-interest-label',CFG.formInterestLabel||'');
  st('d-form-message-label',CFG.formMessageLabel||'');
  st('d-form-submit-text',CFG.formSubmitText||'');
  st('d-form-success-text',CFG.formSuccessText||'');
  const db=document.getElementById('d-donate-btn');
  if(db&&CFG.donateUrl&&CFG.donateUrl!=='#'){db.href=CFG.donateUrl;db.target='_blank';}
  const fb=document.getElementById('float-donate-btn');
  if(fb&&CFG.donateUrl&&CFG.donateUrl!=='#'){fb.href=CFG.donateUrl;fb.target='_blank';}
  ht('d-tiers',(CFG.tiers||[]).map((t,i)=>'<div class="tier'+(t.featured?' featured':'')+((CFG.tiers.length===5&&i>=3)?' tier-offset':'')+'"><span class="tier-amount">$'+fmt(t.amount)+'</span><span class="tier-name">'+t.name+'</span><div class="tier-desc">'+t.desc+'</div></div>').join(''));
  const nav=document.getElementById('year-nav');
  if(nav)nav.innerHTML=(CFG.yearRamps||[]).map((r,i)=>'<button class="yr-btn'+(i===0?' active':'')+'" data-yr="'+i+'">Year '+(i+1)+'<small>'+r.label+'</small></button>').join('');
  document.querySelectorAll('.yr-btn').forEach(b=>b.addEventListener('click',()=>switchYear(parseInt(b.dataset.yr))));
  renderChart();
}

// ── FUNDING BARS ──────────────────────────────────────────────────────────────
function renderFundingBar(){
  const goal=CFG.fundingGoal||300000,raised=CFG.amountRaised||0;
  const pct=goal>0?Math.min(raised/goal*100,100):0;
  const bar=document.getElementById('d-funding-bar');if(bar)bar.style.width=pct+'%';
  st('d-funding-pct',Math.round(pct)+'% funded');
}

function renderTotalRaisedBar(){
  const raised=CFG.amountRaised||0;
  const devGoal=CFG.fundingGoal||300000;
  const years=(CFG.yearRamps||[]).map(r=>computeYear(r));
  const opTotal=years.reduce((sum,r)=>sum+r.donNeeded,0);
  const totalNeeded=devGoal+opTotal;
  const pct=totalNeeded>0?Math.min(raised/totalNeeded*100,100):0;
  st('trb-raised',fmtC(raised)+' raised');
  st('trb-goal','of '+fmtC(totalNeeded)+' total goal');
  st('trb-pct',Math.round(pct)+'% funded');
  const fill=document.getElementById('trb-fill');if(fill)fill.style.width=pct+'%';
}

// ── YEAR DETAIL ───────────────────────────────────────────────────────────────
let curYear=0;
function switchYear(i){
  curYear=i;
  document.querySelectorAll('.yr-btn').forEach((b,j)=>b.classList.toggle('active',j===i));
  renderYear(i);
}

function renderYear(i){
  const ramp=(CFG.yearRamps||[])[i];if(!ramp)return;
  const R=computeYear(ramp);
  const el=document.getElementById('year-content');if(!el)return;
  const artSrc=ART_YEARS[i]||ART_YEARS[0];
  const pos=ART_YEAR_POS[i]||'center 55%';
  el.innerHTML=
    '<div class="yr-art-band"><img src="'+artSrc+'" alt="" style="width:100%;height:100%;object-fit:cover;object-position:'+pos+';filter:brightness(.65)">'+
    '<div class="yr-art-band-overlay"><div>'+
    '<div class="yr-art-band-label">Year '+(i+1)+': '+R.label+'</div>'+
    '<div class="yr-art-band-note">'+R.note+'</div>'+
    '</div></div></div>'+
    '<div class="yr-metrics" style="margin-top:2px">'+
    '<div class="yr-metric"><span class="mv" style="color:var(--gold)">'+fmtC(R.tuit)+'</span><div class="ml">Tuition</div></div>'+
    '<div class="yr-metric"><span class="mv blue">'+fmtC(R.audio)+'</span><div class="ml">Audio</div></div>'+
    '<div class="yr-metric"><span class="mv teal">'+fmtC(R.lic)+'</span><div class="ml">Curriculum Sales</div></div>'+
    '</div>'+
    '<div class="funding-goal-box">'+
    '<div class="fg-title">Year '+(i+1)+' Donation Goal</div>'+
    '<div class="fg-row">'+
    '<div class="fg-item"><span class="fgv" style="color:var(--gold2)">'+fmtC(R.productRev)+'</span><div class="fgl">Total Program Revenue</div></div>'+
    '<div class="fg-item"><span class="fgv" style="color:rgba(255,255,255,.55)">'+fmtC(R.totalCosts)+'</span><div class="fgl">Total Costs (incl. all staff)</div></div>'+
    '</div>'+
    (R.donNeeded>0
      ?'<div class="fg-donation-goal"><div class="fg-donation-label">Donations needed to close the gap</div><div class="fg-donation-amount">'+fmtC(R.donNeeded)+'</div></div>'
      :'<div class="fg-break-even">Program revenue covers all costs</div>'
    )+
    '</div>'+
    '<div class="milestone-grid">'+
    '<div class="milestone"><div class="mt"><strong>'+R.ipC+' in-person + '+R.onC+' online cohorts</strong>, serving '+R.totalSt+' students.</div></div>'+
    '<div class="milestone"><div class="mt"><strong>'+R.audioTitles+' audio titles</strong>, '+fmt(R.audioUnits,0)+' units sold per title.</div></div>'+
    '<div class="milestone"><div class="mt"><strong>'+R.curriculumSales+' curriculum packages sold</strong>'+(R.curriculumSales===0?' (sales launch in Year 2).':', '+fmtC(R.lic)+' in one-time sales.')+'</div></div>'+
    '</div>';
}

// ── REVENUE CHART ─────────────────────────────────────────────────────────────
function renderChart(){
  const el=document.getElementById('all-years-chart');if(!el)return;
  const years=(CFG.yearRamps||[]).map(r=>computeYear(r));
  const maxVal=Math.max(...years.map(r=>Math.max(r.productRev,r.donNeeded)),1);
  el.innerHTML=years.map((R,i)=>{
    const revH=maxVal>0?R.productRev/maxVal*100:0;
    const donH=maxVal>0?R.donNeeded/maxVal*100:0;
    return'<div class="chart-col" data-yr="'+i+'">'+
      '<div class="chart-col-bars">'+
      '<div class="chart-seg" style="height:'+revH+'%;background:rgba(212,168,75,.35);border-radius:3px 3px 0 0"></div>'+
      '<div class="chart-seg" style="height:'+donH+'%;background:#5cd68c;opacity:.85"></div>'+
      '</div>'+
      '<div class="chart-col-label">Yr '+(i+1)+'</div>'+
      '<div class="chart-col-don">'+fmtK(R.donNeeded)+'</div>'+
      '</div>';
  }).join('');
  document.querySelectorAll('.chart-col').forEach(c=>c.addEventListener('click',()=>switchYear(parseInt(c.dataset.yr))));
  const lg=document.getElementById('chart-legend');
  if(lg)lg.innerHTML='<div class="chart-legend-item"><div class="chart-legend-dot" style="background:rgba(212,168,75,.5)"></div>Program Revenue</div><div class="chart-legend-item"><div class="chart-legend-dot" style="background:#5cd68c"></div>Donations Needed</div>';
}

// ── DEVELOPMENT TAB PASSWORD ──────────────────────────────────────────────────
const DEV_AUTH_KEY='bifrost_dev_auth';
function getDonorPassword(){return CFG.donorPassword||'bifrost';}

function checkDevPassword(){
  const val=document.getElementById('dev-pw-input').value;
  if(val===getDonorPassword()){
    sessionStorage.setItem(DEV_AUTH_KEY,'1');
    const devG=document.getElementById('dev-pw-gate');
    if(devG)devG.remove();
    const devC=document.getElementById('dev-content');
    if(devC)devC.style.display='block';
    setTimeout(()=>{
      document.querySelectorAll('#dev-content .reveal').forEach(el=>observer.observe(el));
      renderChart();
      switchYear(curYear||0);
    },80);
  }else{
    const err=document.getElementById('dev-pw-err');
    err.style.display='block';
    setTimeout(()=>err.style.display='none',2500);
  }
}

// ── TAB SWITCHING ─────────────────────────────────────────────────────────────
function switchTab(name){
  // Development tab is gated until the passphrase is entered this session
  if(name==='development'&&sessionStorage.getItem(DEV_AUTH_KEY)!=='1'){
    document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
    document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.id==='tab-'+name));
    window.scrollTo({top:0,behavior:'instant'});
    const gate=document.getElementById('dev-pw-gate');
    const content=document.getElementById('dev-content');
    if(gate)gate.style.display='flex';
    if(content)content.style.display='none';
    return;
  }
  if(name==='development'){
    const gate=document.getElementById('dev-pw-gate');
    const content=document.getElementById('dev-content');
    if(gate)gate.style.display='none';
    if(content)content.style.display='block';
    setTimeout(()=>switchYear(curYear||0),50);
  }
  document.querySelectorAll('.tab-btn').forEach(b=>b.classList.toggle('active',b.dataset.tab===name));
  document.querySelectorAll('.tab-panel').forEach(p=>p.classList.toggle('active',p.id==='tab-'+name));
  window.scrollTo({top:0,behavior:'instant'});
  // Trigger reveals for the newly visible panel
  setTimeout(()=>{
    document.querySelectorAll('#tab-'+name+' .reveal').forEach(el=>{
      if(!el.classList.contains('visible'))observer.observe(el);
    });
  },50);
  if(name==='development')renderChart();
}

let observer;

// ── BUDGET MODAL ──────────────────────────────────────────────────────────────
function openBudgetModal(){
  const c=CFG;
  st('bm-title',c.budgetTitle||'12-Month Development Plan');
  st('bm-sub',c.budgetSub||'Pilot Year Budget Breakdown');
  const total=c.budgetTotal||254000;
  st('bm-total',fmt$(total));
  st('bm-note',c.budgetNote||'');
  let rows='<thead><tr><th>Category</th><th>Amount</th></tr></thead><tbody>';
  (c.budgetCategories||[]).forEach(cat=>{
    rows+='<tr><td>'+cat.label+(cat.desc?'<div class="bm-cat-desc">'+cat.desc+'</div>':'')+'</td><td>'+fmt$(cat.amount)+'</td></tr>';
  });
  rows+='<tr class="bm-total"><td>Total funding ask</td><td>'+fmt$(total)+'</td></tr></tbody>';
  document.getElementById('bm-table').innerHTML=rows;
  document.getElementById('budget-modal').classList.add('open');
}

// ── PAGE SETUP ────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{
  // Budget modal: click outside or press Escape to close
  const bm=document.getElementById('budget-modal');
  if(bm)bm.addEventListener('click',function(e){if(e.target===this)this.classList.remove('open');});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'){const m=document.getElementById('budget-modal');if(m)m.classList.remove('open');}});

  // Mobile hamburger menu
  const hamburger=document.getElementById('hamburger-btn');
  const mobileNav=document.getElementById('mobile-nav');
  if(hamburger&&mobileNav){
    hamburger.addEventListener('click',()=>{hamburger.classList.toggle('open');mobileNav.classList.toggle('open');});
    mobileNav.querySelectorAll('.tab-btn').forEach(btn=>{
      btn.addEventListener('click',()=>{switchTab(btn.dataset.tab);hamburger.classList.remove('open');mobileNav.classList.remove('open');});
    });
  }
  document.querySelectorAll('.tab-btn').forEach(b=>b.addEventListener('click',()=>switchTab(b.dataset.tab)));

  injectContent();
  switchYear(0);

  // Scroll-reveal animations
  observer=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible');});
  },{threshold:.06});
  document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
  document.querySelectorAll('.hero .reveal').forEach(el=>el.classList.add('visible'));

  // Development tab passphrase
  const devPwBtn=document.getElementById('dev-pw-btn');
  if(devPwBtn)devPwBtn.addEventListener('click',checkDevPassword);
  const devPwIn=document.getElementById('dev-pw-input');
  if(devPwIn)devPwIn.addEventListener('keydown',e=>{if(e.key==='Enter')checkDevPassword();});

  // Contact form submission (web3forms)
  document.getElementById('interest-form')?.addEventListener('submit',async function(e){
    e.preventDefault();
    const btn=this.querySelector('.submit-btn');
    const successDiv=document.getElementById('form-success');
    btn.disabled=true;
    btn.querySelector('span').textContent='Sending…';
    const data=new FormData(this);
    try{
      const res=await fetch('https://api.web3forms.com/submit',{method:'POST',body:data});
      const json=await res.json();
      if(json.success){
        this.reset();
        if(successDiv){successDiv.style.display='block';setTimeout(()=>successDiv.style.display='none',6000);}
        btn.querySelector('span').textContent=CFG.formSubmitText||'Send Message';
        btn.disabled=false;
      }else{btn.querySelector('span').textContent='Error. Please try again';btn.disabled=false;}
    }catch(err){btn.querySelector('span').textContent='Error. Please try again';btn.disabled=false;}
  });
});
