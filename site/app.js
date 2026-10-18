// Native Netlify form POST: no simulated success, trackers or browser storage.
const form=document.querySelector('form');
const allowedSources=new Set(['community-a','community-b','introduction','professional-post','direct']);
const source=new URLSearchParams(location.search).get('utm_source');
if(allowedSources.has(source))form.elements.source_code.value=source;
// A scope preference is a local interaction, not an analytics event or paid commitment.
function record(){}
