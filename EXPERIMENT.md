> Current implementation status: see LIVE-SETUP.md. The native form implementation supersedes earlier descriptions of simulated forms. Deployment and private form receipt are still unverified. No visitor tracker is enabled; session-rate decisions cannot yet be made.

# IdeaHQ · IHQ-001
Unpublished draft · 18 October 2026 · No spending, outreach, hosting registration or deployment authorised by this package.

## Objective and limits
Test whether non-UAE investors living outside the UAE, owning or considering exactly one completed Dubai property, have a sufficiently urgent problem to discuss a paid pilot. This narrows “foreign” to a non-resident research cohort; UAE-resident foreign investors are recorded as a separate exploratory segment. This is a demand test, not validation of achievable returns, operating feasibility, legal permissions or profitable acquisition.

The previous chat identifies AI-assisted property operations and accounting as concepts. Earlier assistant details were unavailable as readable text. No existing AI, accounting integrations, government-payment automation, licences, property inventory or appointed operators are assumed. Follow-up inspection found the supplied public GitHub repository empty and no Netlify project matching ihq. The package is being saved to that repository after the user requested completion. No existing production site was modified. See LAUNCH.md for deployment status and limits.

## Hypotheses and experimental control
| Variant | Route | Hypothesis | Proposed monetisation to explore |
|---|---|---|---|
| finance | /property-finance | Itemised costs and owner cash-flow visibility prompt qualified interest | Subscription or reporting fee; scope/price unvalidated |
| managed | /property-managed | Remote coordination with clear owner controls prompts qualified interest | Management fee; provider economics and permissions unvalidated |
| yield | /property-yield | Explicit net-income assumptions prompt qualified interest | One-off assessment fee; scope/price unvalidated |

All three use the same qualification form, research CTA, disclosure, contact process and follow-up timing. Keep design, audience, geography, channel and effort comparable. Change only the value proposition and its supporting explanation. Freeze version v1 for the test; material copy changes create a new version/cohort. Do not pool materially changed offers.

Organic allocation: prepare a prequalified prospect roster where permitted, shuffle within each channel and assign finance/managed/yield in repeating blocks of three. Each person sees one variant; keep their original assignment if they return. Use channel-specific neutral invitations with the same wording and a single assigned URL. Do not let prospects choose from the review hub. Record channel and day because organic traffic is not random population sampling. Never claim causal superiority from a small convenience sample.

## Qualification and funnel
A qualified lead has a verified email, is a non-UAE national residing outside the UAE, has exactly one ready unit in scope, owns it or plans a ready-unit purchase, needs help within six months, and agrees to a research conversation. The form captures eligibility but conversation agreement and verification require follow-up. Budget is descriptive, not an exclusion gate; “prefer not to say” is accepted. “Unsure”, multiple units, off-plan and UAE residents go into exploratory counts. Willingness to pay is a separate signal, not required for qualification. One person is one lead across variants; assign to first exposure. Exclude staff, QA, bots and duplicate emails. Review exclusions using predefined rules, never because someone dislikes the concept.

Funnel: delivered invitations → eligible landing sessions → server-accepted leads → verified contacts → qualified leads → interviews booked → interviews attended → explicit paid-pilot interest. Preview form trials are excluded from all live metrics. No lead is real until the future backend acknowledges storage and consent.

An eligible landing session means a measurable human visit from the intended campaign audience, excluding QA, known bots and duplicates. It does not imply that the visitor has passed lead qualification; eligibility cannot be inferred from an unsubmitted form. Report unknown audience eligibility and self-selection bias.

Primary metric: unique qualified leads / eligible unique landing sessions per variant within a 72-hour conversion window. Sessions are first eligible visitor sessions, not page refreshes; record a visit cohort and attribute late conversions to it. Secondary: form starts, accepted leads, attendance, explicit paid-pilot interest. Report each numerator and denominator, channel, consent coverage and exclusions. With analytics declined, do not fingerprint or reconstruct individuals; report that denominator as unavailable. Compare consented-session conversion only with an explicit coverage caveat, alongside qualified leads per delivered invitation. If reliable comparable denominators cannot be measured, no rate-based winner is declared.

## Pre-registered thresholds — management rules, not market facts
Target at least 100 measurable eligible unique landing sessions per variant (300 total), at least two independent organic channels with >=20 sessions each per variant, and 72 hours of follow-up for every included visit cohort. This is an exploratory target; it does not establish statistical power for close variant differences. Show 95% Wilson intervals around conversion rates. Do not stop early because one page looks promising.

PROCEED to budget and feasibility discussion only if at least one variant has >=100 sessions, >=8 qualified leads (>=8%), >=5 attended interviews, and >=3 separate interviewees explicitly interested in discussing a paid pilot with a concrete scope and fee basis. At least two of these three must not be friends, staff or close existing contacts. This permits further validation, not a full build or launch claim.

ITERATE if adequate traffic exists and qualified conversion is 3% to <8%, or >=8% but interview/payment-intent gates fail. Diagnose trust, timing, scope and cost; change one hypothesis and run a new cohort.

STOP that proposition if >=100 sessions yield <3 qualified leads (<3%) and interviews reveal no recurring urgent problem. If interview evidence contradicts the rate, classify as ITERATE and document why. Stop all variants only if all meet this evidence floor and stop condition. Stop immediately for misleading copy, privacy incidents, improper outreach or inability to fulfil research promises.

INCONCLUSIVE if exposure, diversity, attribution quality or follow-up windows are insufficient. No negative verdict from low organic reach. Do not extend, spend or lower thresholds silently. A leading variant must meet proceed gates; overlapping intervals or channel imbalance mean no credible ranking. Multiple variants can pass. Report all three; avoid cherry-picking.

## Organic-first outreach
Draft only; no messages sent. After explicit launch/outreach approval, use two or more permitted sources: opt-in investor communities with moderator consent, introductions from existing contacts who agree to participate, and professional posts inviting overseas single-unit owners. No scraped lists, bought contacts, mass DMs or unapproved claims of partnerships. Check channel and jurisdiction rules before outreach.

Aim for equal daily allocations across variants; record delivered invitations and refusals separately from visits. Plan 30 matched invitations per variant on days 2–4 and another 30 per variant on days 5–7 where permission exists. These are workload targets, not a promise of 100 visits. Community posts can supply additional sessions but record their selection bias. Send at most one reminder after 72 hours only where contact is permitted. Do not post every variant to the same group. Keep copy neutral and offer an easy no-contact choice.

Invitation draft: “We’re researching the practical challenges of owning one completed Dubai property while living abroad. IdeaHQ is a concept, with no service available through this test. Would you review a short proposed offer and, if relevant, share your needs? No payment or obligation. [assigned approved URL]”

Reminder draft: “One follow-up on the IdeaHQ research invitation. If this is not relevant, no reply is needed and we won’t follow up again. [assigned approved URL]”

Interview invitation draft: “Thank you for expressing research interest. If you would like to participate, please reply to verify this email and suggest a time for a 15-minute research conversation. No service or paid booking is being offered. We’ll discuss your needs and possible future scope.” Send only following research consent, once a verified sender and response process are ready.

## Conditional paid traffic — a separate approval
No budget is assumed. Earliest review: end of day 7. Consider paid traffic only if exposure is <50 eligible sessions per variant or forecast misses 100 by day 11, at least five relevant conversations across the test confirm a recurring problem, pages and attribution work, no unresolved trust/privacy issue exists, and permitted organic channels have been reasonably used. If problem evidence is absent, revise research instead of buying visits.

Before paid traffic: request a separate written approval covering platform, audience/countries, creatives, dates, total cap, daily cap and spend owner. No activation or purchase before approval. Do not infer permission from this draft. Use equal allocated spend across variants, common audience and neutral creative; record paid as a separate channel cohort. Organic thresholds cannot simply be rescued by pooling dissimilar paid visitors. Apply the same exposure and follow-up gates to any paid conclusion; otherwise mark it directional/inconclusive.

Economics worksheet before approval: estimated price P minus delivery, partner, support, refunds and payment costs = contribution M for a defined service period. Set maximum CAC as an approved fraction of M; maximum cost per qualified lead = CAC cap × observed qualified-to-paying conversion. Since neither M nor paid conversion is known, there is no defensible numeric CAC cap yet. Any initial paid spend is capped research spend, not proof of profitable acquisition. No deposits or payment collection in IHQ-001.

Pause paid delivery at the approved cap, on tracking failure, privacy complaints or misleading placement. After 30 eligible paid sessions with zero form starts, inspect technical and audience fit before further spend; do not call demand failure from that sample. No auto-renewal or automatic budget increase.

## Fourteen-day protocol
Day 1 starts only after approval and readiness, not on the date this draft was created. Owner roles must be assigned: experiment owner, outreach owner, interviewer, analyst, privacy/data owner. One person may cover multiple roles.

| Day | Actions and evidence | Gate |
|---|---|---|
| 1 | Confirm audience, scope, thresholds, roles, approved notice and disclosures. Implement approved collection, verification and consent; test all routes, keyboard/mobile, errors, duplicate protection, attribution and deletion. Freeze v1 and exclude QA. | No live collection until checklist signed. |
| 2 | Start matched organic invitations in two permitted channels; rotate assignments. Check acceptance and consent logging. | Same effort per variant. |
| 3 | Continue allocation; inspect sources, device errors and drop-off. Schedule research calls after verification. | Fix defects; log version changes. |
| 4 | Complete first invitation tranche; check for duplicate and exploratory cohorts. Begin interviews. | Do not optimise to the apparent winner. |
| 5 | Start second matched tranche. Ask about recent real problems and alternatives. | Record exact evidence, not sales persuasion. |
| 6 | Continue interviews; ask fee basis and procurement steps after problem discussion. | Record objections and non-interest equally. |
| 7 | Review exposure, channel mix and data quality. Forecast traffic. Prepare conditional paid recommendation if gates met. | Written spend approval required separately. |
| 8 | Continue organic or separately approved paid cohort. Compare message comprehension. | Paid stays separately labelled. |
| 9 | Conduct remaining interviews; ask who approves and pays, and what scope would matter. | No promises of unavailable delivery. |
| 10 | Balance channel exposure, follow up once where permitted, reconcile verified leads. | Preserve allocation; avoid repeated reminders. |
| 11 | Close new acquisition by 18:00 Asia/Dubai for primary analysis. Save cohort cut-off and allowed spend totals. | Later arrivals exploratory. |
| 12 | Complete eligibility, verification and interviews; reconcile backend events. | No fabricated conversions for missing data. |
| 13 | Complete follow-up and cost/scope discussions; anonymise notes for analysis. | Attendances are not bookings. |
| 14 | At/after 18:00 Dubai, mature final 72-hour cohort; lock dataset, calculate intervals and gates, report each variant. | Proceed / iterate / stop / inconclusive. |

If backend verification or interviews occur beyond the 72-hour window, show them separately and schedule a disclosed later readout; do not relabel an immature day-14 result as a pass.

## Interview guide and commercial stress test
15 minutes: recent ownership task and time/cost (4 min); current alternatives and switching barrier (3); trust, reporting and approval needs (3); proposed scope, charging basis and next decision (3); permission for a later research follow-up (2). Ask about actual past behaviour before hypothetical willingness.

Record: eligibility, recurring problem, urgency, existing spend, acceptable charging basis/range volunteered by participant, scope needed, purchase decision-maker, objections, and explicit interest or refusal. A “sounds good” is not paid-pilot interest. Count only a clear request to discuss a scoped paid pilot, with permission for follow-up; label it nonbinding. An investor's economics must include vacancy, fees, service charges, maintenance, financing and applicable charges. Unverified rent or cost assumptions cannot become advertised yield figures.

Before any pilot proposal, validate provider availability and qualifications, operational costs, insurance/liability, banking/payment constraints, data access, tax/accounting review, and regulated activity boundaries. A demand pass can still fail operational or commercial feasibility. “Fully managed” is a hypothesis, not hands-free performance assurance.

## Day-14 readout template
For each variant: channel visits and consent coverage; accepted/verified/qualified leads; qualified conversion with Wilson interval; exploratory and excluded counts; booked/attended interviews; nonbinding paid-pilot interest; observed objections; time spent and any approved paid cost; gate result and owner recommendation. Add limitations, missing evidence, next scoped test and budget inputs. No invented results: all counts are currently blank.

## Approval checklist
- [ ] Approve the audience, three propositions, copy, CTA and pre-registered decision rules.
- [ ] Confirm legal entity/controller, working contact, staff owners and ability to conduct research.
- [ ] Obtain qualified review of activity licensing and advertising/permit applicability, including DLD/Trakheesi/Madmoun where relevant; do not assume a concept page is exempt. Separately assess any holiday-home operation with the appropriate authority before offering it.
- [ ] Finalise privacy notice, lawful basis, processors, storage regions, transfers, retention, deletion and applicable international outreach rules.
- [ ] Approve host/domain and deployment change plan separately; inspect relevant GitHub/Netlify configuration read-only then. No production modification is part of this draft.
- [ ] Implement and security-check real collection, email verification, consent records, spam controls and access restrictions; preview is not a backend.
- [ ] Approve analytics provider, consent mechanism, event schema and exclusion checks; verify no personal data enters analytics.
- [ ] Approve outreach channels, recipients, wording and moderator permissions; no messages have been sent.
- [ ] Sign launch/date approval. Replace preview CTA/status only after real end-to-end acceptance tests. Keep visible research disclosures; noindex is not access protection.
- [ ] If needed later, separately approve paid platform/creative/targeting and exact total/daily caps. Default spend is zero.

## Official sources and scope
Reviewed 18 October 2026. These inform review gates, not a legal opinion that this concept is authorised.
- DLD real estate advertisement permit: https://backoffice.dubailand.gov.ae/en/eservices/real-estate-ad-permit/
- DLD Madmoun verification: https://dubailand.gov.ae/en/news-media/dubai-land-department-provides-madmoun-service-to-verify-validity-of-real-estate-ads-via-qr-codes
- UAE government data-protection overview: https://u.ae/en/about-the-uae/digital-uae/data/data-protection-laws.
