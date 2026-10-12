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
          FOI correspondence · about 18 months · Ty Mawr and BP v Buckler
        </p>
        <h1 className="mt-1 text-3xl text-ink md:text-5xl">Not slower. Less useful.</h1>
        <p className="mt-2 max-w-2xl text-base text-ink">
          Paul Egan’s replies for Llandough Community Council, set against the
          other public bodies asked about the same records.
        </p>
      </header>

      <section aria-labelledby="at-a-glance" className="mt-6 border border-line bg-card">
        <div className="border-b border-line px-4 py-4 sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-egan">At a glance</p>
          <h2 id="at-a-glance" className="mt-1 text-2xl text-ink md:text-3xl">
            Replies within the limit. Answers at the bottom of the scale.
          </h2>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            The scores below are the correspondence review’s qualitative ratings, not measurements issued by the organisations.
            The two dated clerk replies average 1.5/5 for usefulness and facilitation. The five comparison entries average 3.8/5 and 4.0/5 respectively.
          </p>
        </div>
        <div className="grid gap-6 p-4 sm:p-6 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-ink">Answer quality and help</h3>
            <div className="mt-4 space-y-5">
              <ScoreRow
                label="Llandough clerk · two dated FOI replies"
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
                label="November 2025 · “unable to assist”"
                usefulness={0}
                facilitation={0}
                note="0/5 on both scales. No reply date is given, so it is not included in the timed comparison."
                clerk
              />
            </div>
            <div className="mt-5 border-l-4 border-egan bg-egan-soft px-4 py-3">
              <p className="font-semibold text-ink">Lowest-rated in this reviewed set</p>
              <p className="mt-1 text-sm text-ink">
                The evidence points to poor usefulness and little assistance, not unusually slow handling. It does not establish a population-wide statistical ranking or prove bad faith.
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
          <Stat figure="1 and 2" label="The clerk, on either axis" />
          <Stat figure="3 to 5" label="The other bodies" />
          <Stat figure="14 and 18" label="His working days, inside 20" />
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
            Red · the clerk, plotted from the dates
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
          {selected.series === "egan" ? "Clerk" : "Comparison body"} ·{" "}
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
          <h2 className="text-2xl text-ink">What the pattern will and will not prove</h2>
          <p className="mt-3 text-ink">
            The replies are curt, broad, and low on help. That is different
            from every other body in this set, at a similar speed. It is not,
            on its own, proof of bad faith. A community council with limited
            paid capacity can lawfully reach the cost ceiling. The tone described
            is correct, not openly hostile.
          </p>
          <p className="mt-3 text-ink">
            Calling it obstructive is supported where the handling is thinner
            than the request required — not where the council simply does not
            hold a record. The November line may never have been treated as an
            FOI at all.
          </p>
          <p className="mt-3 text-sm text-muted">
            This is a reading of the correspondence for an internal review or a
            later complaint about handling. It is not an ICO determination.
          </p>
        </div>
      </section>

      <section className="mt-12 border border-line bg-egan-soft p-5 md:p-6">
        <h2 className="text-2xl text-ink">The October estimate is the live lever</h2>
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
          Drawn from the correspondence review of the Gmail threads through 11
          October 2026: the clerk against Glamorgan Archives, Museum Wales, the
          Vale of Glamorgan FOI unit, the National Archives, the National
          Library of Wales, the MOD, South Wales Police, and the Welsh
          Government / Cadw. Scores apply that review to one published scale.
          They are not the council’s figures.
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
