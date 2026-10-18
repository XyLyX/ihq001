> Form update: request_details is a short optional-purpose note (maximum 500 characters), shown and required when willingness is “Maybe, need more detail”. It is stored only with the private research submission, never in analytics. JavaScript hides/disables it for other choices; without JavaScript it remains visible and optional. Contact section uses Navvin S Bhalla, Dubai, UAE, idhq1@ideahq.io.

> Current implementation status: see LIVE-SETUP.md. The native form implementation supersedes earlier descriptions of simulated forms. Deployment and private form receipt are still unverified. No visitor tracker is enabled; session-rate decisions cannot yet be made.

# IHQ-001 analytics and form contract
Specification only. No external tracker or submission endpoint is installed. Preview events are named preview_* and are never live evidence.

## Assignment and attribution
Required live event envelope: schema_version=1, experiment_id=IHQ-001, page_version=v1, variant=finance|managed|yield, channel=organic|paid|direct|unknown, source_code from a fixed allowlist, occurred_at UTC, event_id random UUID, consent_state, environment=production|test. Browser-generated anonymous visit/session IDs only after analytics consent, with a defined short expiry; no fingerprinting. Server lead IDs stay in restricted operations data, not advertising platforms. Map /property-finance→finance; /property-managed→managed; /property-yield→yield. Validate route/variant against an allowlist server-side; do not trust hidden fields.

Preserve first eligible experiment assignment and 72-hour attribution window. One session expires after 30 minutes inactivity; denominator is first eligible session per consented visitor for the test. Attribution storage requires the approved consent mechanism; without it, use aggregate source totals and restricted consented lead records, report uncertainty and do not fabricate visitor identity. Analytics consent is optional and separate from research and marketing permissions. Render pages and accept research without it. Revoke stops tracking and clears analytics identifiers. The draft only supports ephemeral preview consent, not a production consent-management system.

UTM draft: utm_campaign=IHQ-001, utm_medium=organic or paid, utm_source=<approved channel>, utm_content=finance-v1|managed-v1|yield-v1. Strip unexpected query values and never ingest full URLs, referrers, emails or free text. No sensitive audience labels in campaign names. Test example: /property-finance/?utm_campaign=IHQ-001&utm_medium=organic&utm_source=community-a&utm_content=finance-v1. Review hub is never a traffic destination.

| Event | Trigger / deduplication | Properties / interpretation |
|---|---|---|
| landing_view | Visible page after analytics consent; once per session/variant | Envelope + anonymous session; denominator candidate, exclude bots/QA |
| primary_cta_click | Research CTA activated | Envelope + cta_id=research_interest; repeat counts separate from unique sessions |
| qualification_start | First edit in shared form | Once/session; no field values |
| qualification_validation_error | Submit fails client validation | Allowed field code and error code only; no input content |
| lead_submit_attempt | Valid form requests future backend | Once/request id; not a conversion |
| lead_submit_success | Backend confirms durable accepted record | Server idempotency key; count one per deduped contact; no email in event |
| lead_submit_failure | Request failed/timeout | Allowlisted error code; never raw response or stack with personal data |
| email_verified | Contact verifies by single-use link or recorded reply | Restricted operational record; once/contact |
| lead_qualified | Human checks defined eligibility + conversation permission | Restricted record with reason codes; once/contact |
| interview_booked | Agreed appointment recorded | Restricted record; once/contact, reschedules do not add conversions |
| interview_attended | Interview actually completed | Restricted record; once/contact |
| paid_pilot_interest | Explicit nonbinding scoped paid discussion interest | Restricted record + evidence reference; once/contact; no payment claim |
| consent_updated | Separate versioned operational consent record | Purpose, yes/no, notice version, UTC timestamp, source; not general analytics |

Apply every event to each route with its matching variant. Example safe browser event:
```json
{"schema_version":1,"experiment_id":"IHQ-001","page_version":"v1","variant":"yield","channel":"organic","source_code":"community-a","occurred_at":"2026-10-18T18:00:00Z","event_id":"example-only","consent_state":"analytics_granted","environment":"test","event":"primary_cta_click","cta_id":"research_interest"}
```
No actual date or this sample event belongs in experiment results. Test environment and preview_* events are excluded at ingestion and analysis. Operational lead milestones may be processed under approved research consent without optional analytics; report differences between operational leads and the consented analytics cohort.

## Shared form schema
Required select fields: residence (outside UAE / UAE); citizenship (non-UAE yes/no/prefer not); units (one ready/multiple/off-plan/exploring); stage (owner/buying/exploring); timeline (0–3/3–6/>6 months/unsure); budget AED band (<750k/750k–1.499m/1.5m–2.999m/>=3m/prefer not); rental model (long-term/holiday home/compare/unsure); pain (costs/remote management/net income/other); willingness (discuss paid/maybe/free only); email. Required research consent; optional marketing consent and separate analytics consent, all unchecked by default. Never request passports, exact property addresses or financial documents here.

Future backend: validate enums/lengths/consent and email server-side, normalise email for deduplication, preserve first attribution, accept idempotency key, timestamp receipt, store notice/consent versions, return success only after durable write. Rate-limit and implement accessible spam handling; protect staff access. Do not reveal whether an email already exists. On retry preserve answers and show honest failure until acknowledged. Store contact details separately from analysis exports. Hashing an email does not make it anonymous and is unnecessary for advertising analytics. No form action, network POST or booking/payment integration exists in this package.

## Calculation and QA
Qualified rate = deduped qualified people attributed within 72h / measurable eligible unique landing sessions. Match numerator to the same consented cohort for that rate. Also report all operational qualified leads separately. Form completion = accepted leads / starts in the same measurable cohort. Paid cost per qualified lead = approved spend / deduped paid qualified leads; report undefined when zero, not zero cost. Delivered invitation conversion is a separate measure; never substitute its denominator into landing conversion.

Wilson 95% interval for k/n: z=1.96; centre=(k/n+z²/(2n))/(1+z²/n); half=z*sqrt((k/n)*(1-k/n)/n+z²/(4n²))/(1+z²/n). Example 8/100 is roughly 4.1%–15.0%, illustrating uncertainty. No p-value or powered winner claim is implied.

Launch QA: verify each variant mapping, consent reject/revoke paths, no tracking before consent, successful backend acknowledgement, failure and retry, duplicate contact, refresh/back navigation, 72h boundary, QA exclusions, source sanitisation and mobile/keyboard completion. Inspect actual network payloads and storage before approval. The local draft's simulated success must never be used as lead_submit_success.
