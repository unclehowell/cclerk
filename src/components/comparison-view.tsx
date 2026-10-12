import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { ComparisonChart } from "@/components/comparison-chart";
import {
  caseById,
  cases,
  metricCopy,
  type Metric,
} from "@/data/comparison";

const rungs = [
  ["0", "Nothing you can use. No search, no pointer, no statute."],
  ["1", "A refusal, plus at most one suggestion to narrow. Categories not answered."],
  ["2", "A lawful redirect to a named place. Still no document from this body."],
  ["3", "A proper file: partial disclosure or a clear decision, a reference, some iteration."],
  ["4", "Records, schedules, or catalogue identifiers, and a willingness to look again."],
  ["5", "Repeated, specific, corrected, and enough to take the next step."],
];

export function ComparisonView() {
  const [metric, setMetric] = useState<Metric>("usefulness");
  const [showPeers, setShowPeers] = useState(true);
  const [selectedId, setSelectedId] = useState("egan-oct");
  const [wide, setWide] = useState(true);
  const selected = caseById(selectedId);
  const copy = metricCopy[metric];
  const plotted = cases.filter((item) => item.plotX !== null && (showPeers || item.series === "egan"));

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 720px)");
    const apply = () => setWide(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  function select(id: string) {
    setSelectedId(id);
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("case-inspector")?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "nearest",
    });
  }

  return (
    <main className="mx-auto max-w-6xl px-4 py-5 md:px-10 md:py-6">
      <header className="max-w-3xl">
        <p className="text-sm font-semibold tracking-wide text-egan">
          Public-body benchmark · 2026 correspondence · Great House Farm / Tŷ Mawr
        </p>
        <h1 className="mt-1 text-3xl text-ink md:text-5xl">Response and accountability benchmark</h1>
        <p className="mt-2 max-w-2xl text-base text-ink">
          Separate views of Llandough Community Council’s information handling, the Clerk’s administrative role,
          elected-member casework, and the Vale of Glamorgan Council’s oversight response. Scores apply only to the
          records and issue described; they are not overall performance ratings.
        </p>
      </header>

      <section aria-labelledby="accountability-layers" className="mt-6">
        <div className="mb-3">
          <h2 id="accountability-layers" className="text-2xl text-ink md:text-3xl">Institutional and elected-member record</h2>
          <p className="mt-1 max-w-4xl text-sm text-muted">
            FOI scores below concern the Council’s two dated replies. The casework scores use a separate,
            issue-specific review scale. Shared correspondence is not counted as an independent observation twice.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <article className="border border-line bg-card p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-egan">Institutional information handling</p>
            <h3 className="mt-1 text-xl text-ink">Llandough Community Council</h3>
            <p className="mt-1 text-sm text-muted">Two dated FOI replies · signed by the Clerk</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div>
                <p className="text-xs text-muted">Usefulness</p>
                <StarRating score={1.5} label="Llandough Community Council FOI usefulness" />
              </div>
              <div>
                <p className="text-xs text-muted">Facilitation</p>
                <StarRating score={1.5} label="Llandough Community Council FOI facilitation" />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2 border-y border-line py-3">
              <div><p className="font-serif text-2xl tabular-nums text-ink">14 / 20</p><p className="text-xs text-muted">working days · Oct reply</p></div>
              <div><p className="font-serif text-2xl tabular-nums text-ink">18 / 20</p><p className="text-xs text-muted">working days · Jun reply</p></div>
              <div><p className="font-serif text-2xl tabular-nums text-ink">2 / 3</p><p className="text-xs text-muted">request categories not separately answered</p></div>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-ink">
              <li><strong>11 October:</strong> section 12 refusal; a 2002–2006 narrowing option and internal review offered.</li>
              <li><strong>Coverage:</strong> the response explains an estimate for minute books, but gives no separate outcome for photographs or the 1982 transfer/deposit records.</li>
              <li><strong>Arithmetic:</strong> 224 sets × (20 minutes reading + 10 minutes assessment) = 6,720 minutes (112 hours); the letter states “over 2,240 minutes” (37 hours).</li>
            </ul>
            <p className="mt-3 text-xs text-muted">
              This is the Council’s response record, not a finding of personal misconduct by the Clerk.
              The cost-estimate and scope issues remain subject to review.
            </p>
            <p className="mt-3 text-sm">
              <a className="font-semibold underline decoration-line underline-offset-4 text-ink" href="https://greathousefarmwiki.wordpress.com/llandough-community-council-cllr-carroll-correspondence-chronology/" target="_blank" rel="noreferrer">Council correspondence chronology</a>
              <span className="text-muted"> · </span>
              <a className="font-semibold underline decoration-line underline-offset-4 text-ink" href="https://greathousefarmwiki.wordpress.com/evidence-library/ghf-e170-llandough-council-foi-eir-request-section-12-refusal-2026/" target="_blank" rel="noreferrer">Request and refusal record</a>
            </p>
          </article>

          <article className="border border-line bg-card p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-other">Elected-member casework</p>
            <h3 className="mt-1 text-xl text-ink">Cllr George Carroll</h3>
            <p className="mt-1 text-sm text-muted">Great House Farm / Church View Close correspondence</p>
            <div className="mt-3">
              <p className="text-xs text-muted">Follow-through in the reviewed case chronology</p>
              <StarRating score={1} label="Case-specific casework follow-through" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3 border-y border-line py-3">
              <div><p className="font-serif text-2xl tabular-nums text-ink">5</p><p className="text-xs text-muted">follow-up dates listed: 16 Feb, 4 May, 7 Jun, 25 Jun, 13 Jul 2026</p></div>
              <div><p className="font-serif text-2xl tabular-nums text-ink">0</p><p className="text-xs text-muted">substantive follow-up replies shown in the chronology reviewed</p></div>
            </div>
            <p className="mt-3 text-sm text-ink">
              The initial approach received an offer to help; the later correspondence file records no substantive
              follow-through on the Great House Farm questions. The 1/5 score is limited to that chronology and is
              not a finding of a Code of Conduct breach.
            </p>
            <div className="mt-4 border-t border-line pt-3">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted">Separate issue · fireworks, October 2026</p>
              <div className="mt-2">
                <p className="text-xs text-muted">Issue-raising and follow-up reported by the member</p>
                <StarRating score={3} label="Fireworks issue-raising and follow-up reported in the member newsletter" />
              </div>
              <p className="mt-2 text-sm text-ink">
                The 11 October newsletter includes a letter dated 8 October to the Police and Vale Council and says
                the issue was raised at Full Council, both authorities responded promptly, and the Council agreed to
                a multi-agency meeting. The underlying authority replies and meeting outcome were not in the records reviewed.
              </p>
              <a className="mt-2 inline-block text-sm font-semibold underline decoration-line underline-offset-4 text-ink" href="https://mailchi.mp/237c8aa90f9a/in-touch-with-llandough-17666381" target="_blank" rel="noreferrer">11 October newsletter</a>
            </div>
          </article>

          <article className="border border-line bg-card p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Chair · response routing</p>
            <h3 className="mt-1 text-xl text-ink">Dr Mo Misra</h3>
            <p className="mt-1 text-sm text-muted">Llandough Community Council</p>
            <p className="mt-3 text-sm text-ink">No overall star score assigned: the available sample is too limited for a fair role-wide rating.</p>
            <ol className="mt-3 space-y-3 border-l-2 border-line pl-4 text-sm">
              <li><strong>20 September 2026:</strong> “We have nothing more to add.” This wording is quoted in the 28 September email; the original message was not separately recovered.</li>
              <li><strong>28 September 2026:</strong> replied that the request had been passed to the Clerk for consideration.</li>
              <li><strong>Pending:</strong> the 11 October refusal said the remaining matters would be considered at the October meeting. The reviewed record does not yet contain the meeting date or outcome.</li>
            </ol>
            <p className="mt-3 text-sm">
              <a className="font-semibold underline decoration-line underline-offset-4 text-ink" href="https://greathousefarmwiki.wordpress.com/records-access-chronology/foi-reply-register/ghf-e106-r54-llandough-council-transfer-to-clerk-28-september-2026/" target="_blank" rel="noreferrer">28 September reply</a>
              <span className="text-muted"> · </span>
              <a className="font-semibold underline decoration-line underline-offset-4 text-ink" href="https://greathousefarmwiki.wordpress.com/records-access-chronology/foi-reply-register/ghf-e106-r53-llandough-council-initial-response-20-september-2026-quoted/" target="_blank" rel="noreferrer">20 September wording (quoted)</a>
            </p>
          </article>

          <article className="border border-line bg-card p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted">Member-conduct screening</p>
            <h3 className="mt-1 text-xl text-ink">Vale of Glamorgan Council</h3>
            <p className="mt-1 text-sm text-muted">Monitoring Officer · correspondence dated 12 and 24 August 2026</p>
            <div className="mt-3 grid grid-cols-3 gap-2 border-y border-line py-3">
              <div><p className="font-serif text-2xl tabular-nums text-ink">2</p><p className="text-xs text-muted">substantive replies</p></div>
              <div><p className="font-serif text-2xl tabular-nums text-ink">0</p><p className="text-xs text-muted">member replies sought by officer</p></div>
              <div><p className="font-serif text-2xl tabular-nums text-ink">No action</p><p className="text-xs text-muted">Code referral</p></div>
            </div>
            <p className="mt-3 text-sm text-ink">
              The Monitoring Officer explained the screening decision and why the submitted material was not considered
              to disclose evidence capable of amounting to a Code breach. The officer said a member response was not
              sought because it was not considered necessary at that stage. This was a screening decision, not a full
              investigation or a determination of the underlying land and planning issues.
            </p>
            <p className="mt-3 text-sm text-muted">
              The officer also stated that the Members’ Code does not impose a general duty to respond to every item
              of public correspondence. This is distinct from the quality of the Council’s FOI/EIR handling.
            </p>
          </article>
        </div>
        <div className="mt-3 border-t border-line pt-3">
          <h3 className="text-sm font-semibold text-ink">Casework indicator scale (separate from the FOI score)</h3>
          <p className="mt-1 text-sm text-muted">
            1/5 = an initial offer to help is recorded, but no substantive follow-through appears in the reviewed
            Great House Farm chronology. 3/5 = issue-raising and follow-up are reported by the councillor, but
            supporting authority replies and the meeting outcome were not independently reviewed. These are
            issue-specific reviewer judgements, not overall ratings of the councillor. No overall score is assigned
            to the Chair or the Council’s wider performance. The Monitoring Officer screening did not establish a
            Code breach; the 20 September Chair wording remains a quotation, not a recovered original.
          </p>
        </div>
      </section>

      <section aria-labelledby="at-a-glance" className="mt-6 border border-line bg-card">
        <div className="border-b border-line px-4 py-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-egan">At a glance</p>
          <h2 id="at-a-glance" className="mt-1 text-2xl text-ink md:text-3xl">
            Both dated Council replies met the time limit; the review rated usefulness and facilitation low.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            These are qualitative review ratings, not scores issued by the organisations. The Council’s two dated replies average
            1.5/5 for usefulness and facilitation. Five peer entries average 3.8/5 and 4.0/5; some entries group multiple bodies.
            The November 2025 enquiry is shown separately because no reply date is recorded.
          </p>
        </div>
        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-ink">Answer quality and help</h3>
            <div className="mt-4 space-y-5">
              <ScoreRow
                label="Llandough Community Council · two dated FOI replies (signed by the Clerk)"
                usefulness={1.5}
                facilitation={1.5}
                note="Section 12: 1/5. Section 21: 2/5. Average shown; not a score for every contact."
                clerk
              />
              <ScoreRow
                label="Other bodies · five comparison entries"
                usefulness={3.8}
                facilitation={4}
                note="Some entries group several bodies. Their scores are review judgements, not independent statistical samples."
              />
              <ScoreRow
                label="Llandough CC · November 2025 enquiry"
                usefulness={0}
                facilitation={0}
                note="Qualitative 0/5 on both scales based on the transcribed wording. No reply date is given; this is not included in the timed comparison or dated-reply average."
                clerk
              />
            </div>
            <div className="mt-5 border-l-4 border-egan bg-egan-soft px-4 py-3">
              <p className="font-semibold text-ink">Lowest-rated response set in this comparison</p>
              <p className="mt-1 text-sm text-ink">
                The review’s lowest scores concern usefulness and advice, not response time. This is a small, selected set rather than a representative statistical sample; the scores do not establish motive or bad faith.
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-ink">Response time</h3>
            <p className="mt-1 text-sm text-muted">
              Both dated replies are inside the 20-working-day limit. The peer timings are not individually measured.
            </p>
            <div className="mt-5 space-y-5">
              <TimeRow label="11 Oct 2026 · section 12 cost refusal" days={14} />
              <TimeRow label="14 Jun 2026 · section 21 redirect" days={18} />
              <div>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-sm font-semibold text-ink">Other bodies in the review</span>
                  <span className="text-sm tabular-nums text-muted">10–20 days described</span>
                </div>
                <div className="relative mt-2 h-3 overflow-hidden bg-line">
                  <div className="absolute inset-y-0 left-1/2 w-1/2 bg-band" />
                </div>
                <p className="mt-1 text-xs text-muted">
                  Grey band = 10–20 working days as described in the review, not five measured reply times.
                </p>
              </div>
            </div>
            <div className="mt-6 border-t border-line pt-4">
              <div className="flex items-center justify-between gap-3 text-xs text-muted">
                <span>Day 0</span><span>Day 10</span><span className="font-semibold text-ink">Day 20 · limit</span>
              </div>
              <div className="mt-1 h-px bg-line" />
              <p className="mt-3 text-sm text-ink">
                The distinction is clear: response time is broadly compliant; the quality of the answers and help offered is materially lower on this review’s scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-4 border border-line bg-card">
        <div className="grid grid-cols-3 gap-2 border-b border-line px-4 py-3 sm:px-5">
          <Stat figure="1.5 / 5" label="Council reply average on both axes" />
          <Stat figure="3.8 / 4.0" label="Peer average: usefulness / facilitation" />
          <Stat figure="14 and 18" label="Working days to Council replies; both within 20" />
        </div>
        <div className="flex flex-col gap-3 px-4 py-3 sm:px-5 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl text-ink">The scatter</h2>
            <p className="mt-1 max-w-xl text-sm text-muted">{copy.hint}</p>
          </div>
          <div className="no-print flex flex-wrap gap-2">
            <Chip pressed={metric === "usefulness"} onClick={() => setMetric("usefulness")}>
              Usefulness
            </Chip>
            <Chip
              pressed={metric === "facilitation"}
              onClick={() => setMetric("facilitation")}
            >
              Facilitation
            </Chip>
            <Chip pressed={showPeers} onClick={() => setShowPeers((value) => !value)}>
              {showPeers ? "Peers on" : "Peers off"}
            </Chip>
          </div>
        </div>

        <div className="min-w-0 px-2 pt-3 sm:px-4">
          <p className="hidden px-2 text-sm text-muted sm:block">
            Vertical axis · {copy.axis}. Horizontal axis · working days to the
            substantive reply, not the acknowledgement.
          </p>
          <div className="mt-2 overflow-x-auto">
            <div
              className="chart-frame"
              role="img"
              aria-label={ariaLabel(metric, showPeers)}
            >
              <ComparisonChart
                points={plotted}
                metric={metric}
                selectedId={selectedId}
                onSelect={select}
                showLabels={wide}
              />
            </div>
          </div>
          <p className="px-2 pb-4 text-sm text-ink">{copy.insight}</p>
        </div>

        <ul className="flex flex-wrap gap-x-5 gap-y-2 border-t border-line px-5 py-3 text-sm text-muted">
          <li className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-full bg-egan" aria-hidden />
            Red · Council’s dated FOI replies (the Clerk signed them)
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block size-3 rounded-full bg-other" aria-hidden />
            Teal · other bodies, score is the height
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-3 w-5 bg-band" aria-hidden />
            Grey · the 10–20 day band in the review
          </li>
          <li className="flex items-center gap-2">
            <span className="inline-block h-0 w-5 border-t border-dashed border-rule" aria-hidden />
            Day 20 · statutory limit
          </li>
        </ul>
      </section>

      <p className="mt-3 text-sm text-muted">
        Teal dots are spread inside the grey band so each body can be seen. That
        sideways position is not a day-count. Only the red dots are timed. Tap a
        point or a name.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {cases.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => select(item.id)}
            aria-pressed={item.id === selectedId}
            className={clsx(
              "min-h-11 border px-3 py-2 text-left text-sm font-semibold",
              item.id === selectedId
                ? "border-ink bg-ink text-paper"
                : "border-line bg-card text-ink",
            )}
          >
            {item.plotLabel}
            <span className="ml-2 font-normal tabular-nums">
              {item[metric]}
            </span>
          </button>
        ))}
      </div>

      <article
        id="case-inspector"
        className={clsx(
          "mt-4 border border-line bg-card p-5 md:p-6",
          selected.series === "egan" ? "border-l-4 border-l-egan" : "border-l-4 border-l-other",
        )}
      >
        <p
          className={clsx(
            "text-sm font-semibold",
            selected.series === "egan" ? "text-egan" : "text-other",
          )}
        >
          {selected.series === "egan" ? "Council FOI reply" : "Comparison body"} ·{" "}
          {metric === "usefulness" ? "Usefulness" : "Facilitation"}{" "}
          <span className="tabular-nums">{selected[metric]}</span> of 5
        </p>
        <h2 className="mt-1 text-3xl text-ink">{selected.title}</h2>
        <p className="mt-1 text-sm text-muted">{selected.body}</p>
        <dl className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-sm font-semibold text-ink">When</dt>
            <dd className="text-sm text-muted">{selected.when}</dd>
          </div>
          <div>
            <dt className="text-sm font-semibold text-ink">Time to the real reply</dt>
            <dd className="text-sm text-muted">
              {selected.latencyLabel}. {selected.latencyDetail}
            </dd>
          </div>
        </dl>
        <p className="mt-4 text-ink">{selected.outcome}</p>
        <p className="mt-3 text-sm text-muted">
          {metric === "usefulness" ? selected.whyUsefulness : selected.whyFacilitation}
        </p>
        {selected.refs ? (
          <p className="mt-3 text-sm text-muted">Named in the review: {selected.refs}</p>
        ) : null}
      </article>

      <section className="mt-12 grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl text-ink">The scale, in the open</h2>
          <p className="mt-2 text-sm text-muted">
            Taken from the review’s own axis. Integers only, so the chart does
            not pretend to a precision the letters do not have.
          </p>
          <ol className="mt-4">
            {rungs.map(([score, text]) => (
              <li key={score} className="flex gap-3 border-t border-line py-3">
                <span className="w-6 font-serif text-xl text-egan tabular-nums">{score}</span>
                <span className="text-sm text-ink">{text}</span>
              </li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-2xl text-ink">Interpretation and limits</h2>
          <p className="mt-3 text-ink">
            The review rates the two dated Council replies lower for usefulness and facilitation than the comparison entries.
            Both dated replies fell within the stated 20-working-day limit. A section 12 cost refusal can be lawful; the
            estimate arithmetic, coverage of the requested categories and treatment of possible environmental information
            remain questions for the offered internal review.
          </p>
          <p className="mt-3 text-ink">
            The November 2025 wording is scored separately because the date and formal status of the enquiry are not
            established in the reviewed record. It is not included in the timed comparison or average.
          </p>
          <p className="mt-3 text-sm text-muted">
            These are qualitative review judgements, not an ICO decision, legal finding or finding about motive.
          </p>
        </div>
      </section>

      <section className="mt-12 border border-line bg-egan-soft p-5 md:p-6">
        <h2 className="text-2xl text-ink">Issues raised by the 11 October estimate</h2>
        <div className="mt-4 grid gap-6 lg:grid-cols-2">
          <div>
            <p className="text-ink">
              The 11 October reply refuses under section 12. The cost is
              described as reading or assessing about 224 sets of minutes,
              2002 to 2016. The internal review already says the arithmetic does
              not agree with itself: a 20-minute plus 10-minute breakdown set
              against a 10-minute total.
            </p>
            <p className="mt-3 text-ink">
              The request was wider than minute books. It asked for post-2002
              records, photographs of any date, and the 1982 transfer. Pricing
              the whole of that as “read every set” does not describe a search
              of correspondence, images, or the deposit paperwork.
            </p>
          </div>
          <div>
            <p className="text-ink">
              Section 12 can also cover the duty to say whether information is
              held, but only if that narrower job would itself exceed the
              limit. The reply, as described, does not show that calculation
              separately from the cost of reading the minutes.
            </p>
            <p className="mt-3 text-ink">
              For a community council the FOIA ceiling is £450, which at the
              £25 hourly rate is 18 hours. A lawful ceiling is not the same
              thing as a reasonable estimate. The one suggestion on offer was
              2002–2006. Everything else was deferred to a meeting.
            </p>
            <p className="mt-3 text-sm text-muted">
              Land, verge, or green strands can be environmental information.
              The FOIA cost limit does not simply carry over to the EIR. The
              question there is whether the request is manifestly unreasonable,
              and the public interest applies. The October reply did not make
              that distinction.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl text-ink">Every contact in the review</h2>
        <div className="mt-4 overflow-x-auto border border-line">
          <table className="ledger w-full border-collapse text-left text-sm">
            <thead className="bg-band text-ink">
              <tr>
                <th className="px-3 py-3 font-semibold">Reply</th>
                <th className="px-3 py-3 font-semibold">Usefulness</th>
                <th className="px-3 py-3 font-semibold">Facilitation</th>
                <th className="px-3 py-3 font-semibold">Time</th>
                <th className="px-3 py-3 font-semibold">On the plot</th>
              </tr>
            </thead>
            <tbody>
              {cases.map((item) => (
                <tr
                  key={item.id}
                  className={clsx(
                    "border-t border-line",
                    item.id === selectedId ? "bg-card" : "bg-paper",
                  )}
                >
                  <td className="px-3 py-3">
                    <button
                      type="button"
                      onClick={() => select(item.id)}
                      className="text-left font-semibold text-ink underline decoration-line underline-offset-4"
                    >
                      {item.body}
                    </button>
                    <span className="mt-1 block text-muted">{item.title}</span>
                  </td>
                  <td className="px-3 py-3 tabular-nums">{item.usefulness}</td>
                  <td className="px-3 py-3 tabular-nums">{item.facilitation}</td>
                  <td className="px-3 py-3">{item.latencyLabel}</td>
                  <td className="px-3 py-3">
                    {item.xIsMeasured ? "Yes · dated" : item.plotX === null ? "No date to plot" : "Height only"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <footer className="mt-12 border-t border-line pt-6 text-sm text-muted">
        <p>
          This chart compares Llandough Community Council’s two dated FOI replies, signed by the Clerk,
          against five comparison entries covering other public bodies. The scores are qualitative assessments
          in this review, not ratings issued by the organisations or findings by the Information Commissioner.
          The Clerk, elected-member casework and Monitoring Officer records are assessed separately above; they
          are not additional FOI peer observations.
        </p>
        <p className="mt-3">
          Working days follow FOIA. The day of receipt does not count. Saturdays,
          Sundays, and Monday 25 May 2026 (the late-May bank holiday) are
          skipped. The May–June reply is day 18 on that count, or day 19 if the
          bank holiday is ignored. The September–October reply is day 14 by the
          Friday before a Sunday letter.
        </p>
      </footer>
    </main>
  );
}

function StarRating({ score, label }: { score: number; label: string }) {
  const clamped = Math.max(0, Math.min(5, score));
  return (
    <span className="inline-flex items-center gap-2" role="img" aria-label={`${label}: ${clamped} out of 5 stars`}>
      <span className="relative inline-block whitespace-nowrap text-xl leading-none tracking-widest text-line" aria-hidden="true">
        ☆☆☆☆☆
        <span
          className="absolute inset-y-0 left-0 overflow-hidden whitespace-nowrap text-egan"
          style={{ width: `${(clamped / 5) * 100}%` }}
          aria-hidden="true"
        >★★★★★</span>
      </span>
      <span className="text-sm font-semibold tabular-nums text-ink">{clamped.toFixed(1)}/5</span>
    </span>
  );
}

function ScoreRow({
  label,
  usefulness,
  facilitation,
  note,
  clerk = false,
}: {
  label: string;
  usefulness: number;
  facilitation: number;
  note: string;
  clerk?: boolean;
}) {
  return (
    <div className={clsx("border-l-4 pl-3", clerk ? "border-l-egan" : "border-l-other")}>
      <p className="font-semibold text-ink">{label}</p>
      <div className="mt-2 grid gap-2 sm:grid-cols-2">
        <div>
          <p className="text-xs text-muted">Usefulness</p>
          <StarRating score={usefulness} label="Usefulness" />
        </div>
        <div>
          <p className="text-xs text-muted">Facilitation</p>
          <StarRating score={facilitation} label="Facilitation" />
        </div>
      </div>
      <p className="mt-2 text-xs text-muted">{note}</p>
    </div>
  );
}

function TimeRow({ label, days }: { label: string; days: number }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-sm font-semibold text-ink">{label}</span>
        <span className="shrink-0 text-sm font-semibold tabular-nums text-egan">{days}/20 days</span>
      </div>
      <div
        className="relative mt-2 h-3 bg-band"
        role="img"
        aria-label={`${label}: ${days} working days out of the 20-working-day limit`}
      >
        <div className="absolute inset-y-0 left-0 bg-egan" style={{ width: `${(days / 20) * 100}%` }} />
        <div className="absolute inset-y-0 right-0 w-0.5 bg-ink" />
      </div>
    </div>
  );
}

function Stat({ figure, label }: { figure: string; label: string }) {
  return (
    <div className="px-1 py-1">
      <p className="font-serif text-2xl leading-none text-ink tabular-nums">{figure}</p>
      <p className="mt-1 text-sm text-muted">{label}</p>
    </div>
  );
}

function Chip({
  pressed,
  onClick,
  children,
}: {
  pressed: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={clsx(
        "min-h-11 border px-3 text-sm font-semibold",
        pressed ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink",
      )}
    >
      {children}
    </button>
  );
}

function ariaLabel(metric: Metric, showPeers: boolean): string {
  const axis = metric === "usefulness" ? "usefulness" : "facilitation";
  const egan =
    metric === "usefulness"
      ? "Clerk section 12 at 14 working days, score 1. Clerk section 21 at 18 working days, score 2."
      : "Clerk section 12 at 14 working days, facilitation 1. Clerk section 21 at 18 working days, facilitation 2.";
  if (!showPeers) return `Scatter of ${axis}. ${egan} Other bodies hidden.`;
  return `Scatter of ${axis}. ${egan} Other bodies score between 3 and 5 and are placed inside a 10 to 20 day band without individual day-counts.`;
}
