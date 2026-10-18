// Draft only: no network requests, cookies, persistent storage or external analytics.
const form=document.querySelector('form');
const events=[]; window.IHQPreview={events};
function record(name,extra={}){if(document.querySelector('#analytics').checked)events.push({event:name,experiment_id:'IHQ-001',variant:document.body.dataset.variant,mode:'preview',...extra});}
document.querySelector('#analytics').addEventListener('change',e=>{if(e.target.checked)record('preview_page_view');else events.length=0;});
document.querySelector('.button').addEventListener('click',()=>record('preview_cta_click'));
let started=false;form.addEventListener('input',()=>{if(!started){record('preview_form_start');started=true;}});
form.addEventListener('submit',e=>{e.preventDefault();record('preview_form_valid');document.querySelector('#result').textContent='Preview complete. Nothing was sent or saved. A live version would ask you to verify your email before counting your interest.';form.reset();events.length=0;started=false;});
