export type Metric = "usefulness" | "facilitation";

export type Series = "egan" | "other";

export type CasePoint = {
  id: string;
  series: Series;
  body: string;
  title: string;
  plotLabel: string;
  /** Measured working days, or a sideways slot inside the peer band so labels do not stack. */
  plotX: number | null;
  xIsMeasured: boolean;
  labelBelow: boolean;
  when: string;
  latencyLabel: string;
  latencyDetail: string;
  usefulness: number;
  facilitation: number;
  outcome: string;
  whyUsefulness: string;
  whyFacilitation: string;
  refs?: string;
};

export const PEER_BAND = { from: 10, to: 20 } as const;

export const STATUTORY_DAYS = 20;

/**
 * Usefulness follows the scale in the correspondence review:
 * 0 = a refusal or redirect with nothing you can use,
 * 5 = detailed records, advice, and continued engagement.
 * Facilitation is a second reading of the same replies: search description,
 * advice and assistance, statutory care, and willingness to continue.
 * Both are integers on purpose. The review is qualitative.
 */
export const cases: CasePoint[] = [
  {
    id: "egan-oct",
    series: "egan",
    body: "Paul Egan, Clerk, Llandough Community Council",
    title: "Section 12 cost refusal",
    plotLabel: "Clerk · s.12",
    plotX: 14,
    xIsMeasured: true,
    labelBelow: false,
    when: "Request with the clerk about 21 Sep 2026. Reply dated 11 Oct 2026.",
    latencyLabel: "14 working days",
    latencyDetail:
      "21 September 2026 was a Monday and 11 October was a Sunday. By Friday 9 October, 14 working days had passed. That matches the count in the review. It is inside the 20-day limit. The 14th day is not the interesting part.",
    usefulness: 1,
    facilitation: 1,
    outcome:
      "A pure section 12 refusal. The estimate is built on reading or assessing about 224 sets of minutes from 2002 to 2016. The only refinement offered is to narrow those minutes to 2002–2006. Other matters were deferred to the October council meeting. The review records no described search of correspondence, photographs, indexes, or electronic records, no confirm-or-deny by category, and no EIR analysis for the land, verge, or green elements.",
    whyUsefulness:
      "Rung 1. It is a refusal with a single narrowing suggestion and no document, identifier, or category-by-category answer. It is not a zero: there is a statutory footing and one suggested window.",
    whyFacilitation:
      "Rung 1. Suggesting 2002–2006 is some advice. It does not separate the parts of the request that would not require reading every minute book, and the review says the estimate’s own minutes do not add up.",
    refs: "About 224 minute sets, 2002–2016. Arithmetic flagged in the internal review: a 20-minute plus 10-minute breakdown against a 10-minute total.",
  },
  {
    id: "egan-jun",
    series: "egan",
    body: "Paul Egan, Clerk, Llandough Community Council",
    title: "Section 21 — minutes already at the Archives",
    plotLabel: "Clerk · s.21",
    plotX: 18,
    xIsMeasured: true,
    labelBelow: true,
    when: "FOI dated 18 May 2026. Acknowledgement 20 May. Substantive reply 14 June 2026.",
    latencyLabel: "18 working days",
    latencyDetail:
      "18 May 2026 was a Monday. The acknowledgement on 20 May is working day 2, and it is not plotted — an acknowledgement is not the substantive reply. The reply is dated Sunday 14 June. Counting as FOIA does (receipt day is day 0; skip weekends and the late-May bank holiday on Monday 25 May) the substantive reply falls on working day 18. If that Monday is not treated as a bank holiday, it is day 19. Either way it is inside 20.",
    usefulness: 2,
    facilitation: 2,
    outcome:
      "Minutes from 1982 onwards were deposited with Glamorgan Archives in 2002. The refusal relies on section 21: the information is accessible by other means. No further material held by the council was identified.",
    whyUsefulness:
      "Rung 2. A lawful redirect to a named place, with a year for the deposit. That is more than a brush-off, and less than a document. You still have to start again at the Archives.",
    whyFacilitation:
      "Rung 2. Time limit kept, exemption named, destination given. There is no account of what else was searched before ‘nothing further held’.",
  },
  {
    id: "egan-nov",
    series: "egan",
    body: "Paul Egan, Clerk, Llandough Community Council",
    title: "“Unable to assist”",
    plotLabel: "Not plotted",
    plotX: null,
    xIsMeasured: false,
    labelBelow: false,
    when: "November 2025, “BP vs Buckler”.",
    latencyLabel: "No day-count in the review",
    latencyDetail:
      "The review describes a short reply and does not give the date it was sent, so it has no position on the time axis. It is the third contact in the pattern, not a third measured dot.",
    usefulness: 0,
    facilitation: 0,
    outcome:
      "“I regret to inform you that we are unable to assist with the matter you raise.” No search is described, no referral, and no statutory framing.",
    whyUsefulness:
      "Rung 0. Nothing you can take to the next archive. A pure brush-off, on the scale the review itself set.",
    whyFacilitation:
      "Rung 0. It does not treat the enquiry as a request for recorded information. It may not have been logged as one.",
  },
  {
    id: "glamorgan",
    series: "other",
    body: "Glamorgan Archives",
    title: "Catalogue-level replies, repeatedly",
    plotLabel: "Archives",
    plotX: 11,
    xIsMeasured: false,
    labelBelow: true,
    when: "Several 2026 enquiries on the same subject.",
    latencyLabel: "Usually 10–20 working days",
    latencyDetail:
      "The review’s band, not a stopwatch on one file: usually within 10–20 working days, often with faster follow-ups. The dot is drawn inside that grey band so it can be told apart from the others. Its left–right position is not a measured day-count. Follow-ups are not plotted as if they were first replies.",
    usefulness: 5,
    facilitation: 5,
    outcome:
      "Detailed catalogue hits, specific references (including DBDT, ACA, and D153 notes), answers to numbered questions, copied quotations, corrections, order-form attachments, and advice on examining originals. Helpful even when the material was limited or held at the National Library of Wales.",
    whyUsefulness:
      "Rung 5. This is the top of the scale the review described: repeated, specific, corrected, and enough to take a next step without guessing.",
    whyFacilitation:
      "Rung 5. Patient and iterative. The review’s word for the tone is professional. They keep going when the first answer is incomplete.",
    refs: "Case threads named in the review include 2026/2372, 2475, 3893, 3941, 4097 and 4274.",
  },
  {
    id: "museum",
    series: "other",
    body: "Museum Wales / Amgueddfa Cymru",
    title: "Partial disclosures and re-examination",
    plotLabel: "Museum",
    plotX: 16.6,
    xIsMeasured: false,
    labelBelow: false,
    when: "FOIs 2026-020, 024, 032 and 036, as cited in the review.",
    latencyLabel: "Inside the statutory window",
    latencyDetail:
      "Acknowledgements and responses within the statutory window; follow-ups in days. Plotted inside the shared 10–20 day band for legibility only. The height is the score. The sideways slot is not a claim that this file took 17 days.",
    usefulness: 4,
    facilitation: 4,
    outcome:
      "Partial disclosures of records and schedules, internal reviews, and clarifications of scope, including what was treated as unrelated. Actual pages were released, and the museum was willing to look again.",
    whyUsefulness:
      "Rung 4. Real documents and a filtered schedule, not only a pointer. Short of the Archives’ repeated catalogue work, which is why it is not a 5.",
    whyFacilitation:
      "Rung 4. Formal, but it engages with corrections and with what is still outstanding.",
    refs: "2026-020, 2026-024, 2026-032, 2026-036.",
  },
  {
    id: "tna",
    series: "other",
    body: "National Archives and National Library of Wales",
    title: "Clear locations, or a clear not-held",
    plotLabel: "NLW / TNA",
    plotX: 13.2,
    xIsMeasured: false,
    labelBelow: false,
    when: "The same period, same subject, as grouped in the review.",
    latencyLabel: "Variable, generally prompt",
    latencyDetail:
      "The review says acknowledgement was usually prompt and the substantive reply or the refusal was clear, without giving a tighter day-count. The dot sits in the 10–20 day band used for every peer. Do not read the horizontal position as a timed case.",
    usefulness: 4,
    facilitation: 4,
    outcome:
      "Location advice, catalogue confirmations, internal reviews, and answers on retention schedules. Where the material exists the review rates them medium–high. Where it does not, they say so and say where else.",
    whyUsefulness:
      "Rung 4. A catalogue confirmation or a precise ‘elsewhere’ is usable. Grouped because the review grouped them; this is not two separately timed cases.",
    whyFacilitation:
      "Rung 4. Rights-focused and professional. A clear not-held with a pointer outranks a cost refusal that does not say what was searched.",
  },
  {
    id: "vale",
    series: "other",
    body: "Vale of Glamorgan Council FOI unit",
    title: "Structured, and sometimes chased",
    plotLabel: "Vale",
    plotX: 15.2,
    xIsMeasured: false,
    labelBelow: true,
    when: "Case references cited in the review, including 00210772 and 00211463.",
    latencyLabel: "Window kept; some reviews dragged",
    latencyDetail:
      "Acknowledgements carried case numbers. The review notes delay and chasing on some reviews and appendices, not a measured day-count for the first substantive reply. The dot is only a slot inside the peer band.",
    usefulness: 3,
    facilitation: 3,
    outcome:
      "Partial disclosures, internal-review outcomes, and formal FOIA or EIR framing. Process-compliant. Some outstanding appendices had to be chased.",
    whyUsefulness:
      "Rung 3. You received a proper file: references, a framed decision, some disclosure. You also had to chase. That is the middle of the scale, not the Archives.",
    whyFacilitation:
      "Rung 3. Bureaucratic in the review’s own word, but structured. Rights information and case numbers are there. Chasing is why it is not a 4.",
    refs: "00210772, 00211463, and related review threads.",
  },
  {
    id: "mod",
    series: "other",
    body: "MOD, South Wales Police, Welsh Government / Cadw",
    title: "Exemptions, with the process followed",
    plotLabel: "MOD group",
    plotX: 19.2,
    xIsMeasured: false,
    labelBelow: false,
    when: "Grouped in the review. Security constraints differ by body.",
    latencyLabel: "Formal handling; some delays",
    latencyDetail:
      "Auto-acknowledgements and formal handling, with some delays. The review does not quantify those delays, so this dot is not a day-count. It is the right-hand slot in the peer band so the label has room. Length of delay is unstated.",
    usefulness: 3,
    facilitation: 4,
    outcome:
      "Structured refusals or partial releases, with proper notices. Content varies because some material is exempt, including on national-security grounds. The review’s contrast is deliberate: exemption-based, not cost-based avoidance.",
    whyUsefulness:
      "Rung 3. A proper notice can still leave you empty-handed. Where a security exemption was used, the content was thinner than the Archives. It remains a structured answer, which is why it is not down with the cost refusal.",
    whyFacilitation:
      "Rung 4. The process is followed. Switch the vertical axis to facilitation and this group rises, while the clerk does not. A lawful exemption is not the same defect as a thin estimate.",
  },
];

export const metricCopy: Record<
  Metric,
  { axis: string; hint: string; insight: string }
> = {
  usefulness: {
    axis: "Usefulness of what came back",
    hint: "0 is a reply you cannot use. 5 is records, advice, and a next step.",
    insight:
      "The clerk is not the slow point. Both of his FOI replies sit inside the same 10–20 day band the other bodies are described as using. They sit at the bottom of it.",
  },
  facilitation: {
    axis: "How the request was handled",
    hint: "Search, advice and assistance, statutory care, willingness to continue.",
    insight:
      "Bodies that withheld material under a real exemption move up on this axis. A proper refusal is not the same thing as a thin one. The clerk stays on 1 and 2.",
  },
};

export function plottedCases(): CasePoint[] {
  return cases.filter((item) => item.plotX !== null);
}

export function caseById(id: string): CasePoint {
  return cases.find((item) => item.id === id) ?? cases[0];
}
