/* IdeaHQ exploration registry, newest first.
   Add one record here to add the venture to both the homepage exploration rows
   and every founder-updates Exploration dropdown. No network calls or trackers. */
(() => {
  "use strict";
  const explorations = Object.freeze([
    {
      id:"XYS-001", name:"XyLyX Studios", theme:"xylyx",
      category:"Creative exploration",
      question:"Can original songs, visual storytelling and audiovisual experiments build an audience that returns, engages and wants more?",
      websiteUrl:"https://xylyxstudios.com/", websiteLabel:"Explore XyLyX Studios ↗",
      experimentHeading:"Sound. Image. Story.",
      experimentText:[
        "Original songs, visual pieces and experiments that bring them together are already being published.",
        "The question now is whether releases generate repeat listening, meaningful feedback and interest in future work—not just first-time views."
      ],
      links:[
        {url:"/xylyx-studios/",text:"Explore the test framework ↗"},
        {url:"https://xylyxstudios.com/works/",text:"Music and releases ↗"},
        {url:"https://xylyxstudios.com/visuals/",text:"Visual experiments ↗"}
      ],
      thinking:"Creating a catalogue is the starting point. The real experiment is discovering what audiences choose to return for, before scaling production or spending on promotion.",
      noteMeta:"XYS-001 · Founder exploration note",
      noteUrl:"/notes/#xylyx-studios-exploration"
    },
    {
      id:"VS-001", name:"Verified Stays", theme:"stays",
      category:"Research concept",
      question:"Would overseas owners of one Dubai property pay more for clearer evidence and spending controls?",
      websiteUrl:"/verified-stays/", websiteLabel:"Explore the research concept ↗",
      experimentHeading:"Evidence before service.",
      experimentText:[
        "We are testing invoice-linked expenses, task evidence and owner-defined approval limits for a proposed property-management service.",
        "Trust-layer research VS-001-T follows the original VS-001 concept comparison; no operating service or live platform is claimed."
      ],
      links:[
        {url:"/property-finance/",text:"Financial transparency ↗"},
        {url:"/property-managed/",text:"Managed ownership ↗"},
        {url:"/property-yield/",text:"Net rental assessment ↗"}
      ],
      thinking:"A compelling property-management concept does not prove people will pay a premium. Research must establish the real problem, credible alternatives and what owners are willing to trade off.",
      noteMeta:"VS-001 · 18 October 2026 · Founder note",
      noteUrl:"/notes/#starting-with-questions"
    }
  ]);

  function el(tag, className, content) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (content !== undefined) node.textContent = content;
    return node;
  }
  function addLink(container, url, label, className) {
    const a = el("a", className, label);
    a.href = url;
    if (/^https:\/\//.test(url)) a.rel = "noopener noreferrer";
    container.appendChild(a);
    return a;
  }
  function panel(type, label, heading, paragraphs) {
    const node = el("div", "exploration-panel exploration-panel--"+type);
    node.appendChild(el("p", "exploration-panel-label", label));
    node.appendChild(el("h4", "", heading));
    paragraphs.forEach(text => node.appendChild(el("p", "", text)));
    return node;
  }
  function renderExploreRow(record, index) {
    const row = el("article", "exploration-row exploration-row--"+record.theme);
    const headingId = "explore-"+record.id.toLowerCase();
    row.id = "exploration-"+record.id.toLowerCase();
    row.setAttribute("aria-labelledby", headingId);

    const identity = el("div", "exploration-panel exploration-panel--identity");
    identity.appendChild(el("p", "exploration-kicker", String(index+1).padStart(2,"0")+" · "+record.id+" · "+record.category));
    const heading = el("h3", "", record.name);
    heading.id = headingId;
    identity.appendChild(heading);
    identity.appendChild(el("p", "exploration-question", record.question));
    addLink(identity, record.websiteUrl, record.websiteLabel, "exploration-cta");

    const test = panel("test", "02 / The exploration", record.experimentHeading, record.experimentText);
    const links = el("div", "exploration-links");
    record.links.forEach(item => addLink(links,item.url,item.text));
    test.appendChild(links);

    const thinking = panel("thinking","03 / IdeaHQ Notes","The thinking behind the building.",[record.thinking]);
    thinking.appendChild(el("p","exploration-note-meta",record.noteMeta));
    if (record.noteUrl) addLink(thinking,record.noteUrl,"Read the thinking ↗","exploration-note-link");
    else thinking.appendChild(el("p","exploration-note-meta","Founder note not published yet"));

    row.append(identity,test,thinking);
    return row;
  }

  // The homepage includes static cards as a no-JavaScript fallback. Both the
  // cards and the dropdown are hydrated from this one registry when JS runs.
  const directory = document.querySelector(".exploration-directory");
  if (directory) {
    const existing = directory.querySelectorAll(":scope > .exploration-row");
    const rows = explorations.map(renderExploreRow);
    existing.forEach(row => row.remove());
    rows.forEach(row => directory.appendChild(row));
  }

  // Newest-first homepage references; full details live on /explorations/.
  document.querySelectorAll("[data-exploration-teasers]").forEach(list => {
    const cards = explorations.map((record,index) => {
      const card = el("article","exploration-teaser-card exploration-teaser-card--"+record.theme);
      card.appendChild(el("span","exploration-teaser-rank",String(index+1).padStart(2,"0")+" · "+record.id));
      card.appendChild(el("h3","",record.name));
      card.appendChild(el("p","",record.question));
      addLink(card,"/explorations/#exploration-"+record.id.toLowerCase(),"View exploration ↗");
      return card;
    });
    list.replaceChildren(...cards);
  });

  document.querySelectorAll('select[data-exploration-select]').forEach(select => {
    const selected = select.value;
    const options = [new Option("Select an exploration", "", true, true)];
    explorations.forEach(item => options.push(new Option(item.name + " (" + item.id + ")",item.id)));
    options.push(new Option("Updates", "updates")); // Always last.
    select.replaceChildren(...options);
    if (selected && Array.from(select.options).some(o=>o.value===selected)) select.value=selected;
    else select.value="";
  });
})();
