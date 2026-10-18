// Native Netlify form POST: no simulated success, trackers or browser storage.
const form=document.querySelector('form');
const allowedSources=new Set(['community-a','community-b','introduction','professional-post','direct']);
const source=new URLSearchParams(location.search).get('utm_source');
if(allowedSources.has(source))form.elements.source_code.value=source;
// A scope preference is a local interaction, not an analytics event or paid commitment.
function record(){}

// Ask for a short explanation only when the visitor requests more detail.
const detailField=document.querySelector('#detail-field');
const detailInput=document.querySelector('#request-details');
function syncDetailField(){
 const needsDetail=form.elements.price.value==='Maybe, need more detail';
 detailField.hidden=!needsDetail;
 detailInput.required=needsDetail;
 detailInput.disabled=!needsDetail;
 if(!needsDetail)detailInput.value='';
}
form.elements.price.addEventListener('change',syncDetailField);
window.addEventListener('pageshow',syncDetailField);
syncDetailField();
