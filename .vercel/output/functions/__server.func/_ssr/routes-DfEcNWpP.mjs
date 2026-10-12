import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { a as CartesianGrid, c as ResponsiveContainer, i as Scatter, l as Tooltip, n as YAxis, o as ReferenceArea, r as XAxis, s as ReferenceLine, t as ScatterChart } from "../_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DfEcNWpP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PEER_BAND = {
	from: 10,
	to: 20
};
/**
* Usefulness follows the scale in the correspondence review:
* 0 = a refusal or redirect with nothing you can use,
* 5 = detailed records, advice, and continued engagement.
* Facilitation is a second reading of the same replies: search description,
* advice and assistance, statutory care, and willingness to continue.
* Both are integers on purpose. The review is qualitative.
*/
var cases = [
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
		latencyDetail: "21 September 2026 was a Monday and 11 October was a Sunday. By Friday 9 October, 14 working days had passed. That matches the count in the review. It is inside the 20-day limit. The 14th day is not the interesting part.",
		usefulness: 1,
		facilitation: 1,
		outcome: "A pure section 12 refusal. The estimate is built on reading or assessing about 224 sets of minutes from 2002 to 2016. The only refinement offered is to narrow those minutes to 2002–2006. Other matters were deferred to the October council meeting. The review records no described search of correspondence, photographs, indexes, or electronic records, no confirm-or-deny by category, and no EIR analysis for the land, verge, or green elements.",
		whyUsefulness: "Rung 1. It is a refusal with a single narrowing suggestion and no document, identifier, or category-by-category answer. It is not a zero: there is a statutory footing and one suggested window.",
		whyFacilitation: "Rung 1. Suggesting 2002–2006 is some advice. It does not separate the parts of the request that would not require reading every minute book, and the review says the estimate’s own minutes do not add up.",
		refs: "About 224 minute sets, 2002–2016. Arithmetic flagged in the internal review: a 20-minute plus 10-minute breakdown against a 10-minute total."
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
		latencyDetail: "18 May 2026 was a Monday. The acknowledgement on 20 May is working day 2, and it is not plotted — an acknowledgement is not the substantive reply. The reply is dated Sunday 14 June. Counting as FOIA does (receipt day is day 0; skip weekends and the late-May bank holiday on Monday 25 May) the substantive reply falls on working day 18. If that Monday is not treated as a bank holiday, it is day 19. Either way it is inside 20.",
		usefulness: 2,
		facilitation: 2,
		outcome: "Minutes from 1982 onwards were deposited with Glamorgan Archives in 2002. The refusal relies on section 21: the information is accessible by other means. No further material held by the council was identified.",
		whyUsefulness: "Rung 2. A lawful redirect to a named place, with a year for the deposit. That is more than a brush-off, and less than a document. You still have to start again at the Archives.",
		whyFacilitation: "Rung 2. Time limit kept, exemption named, destination given. There is no account of what else was searched before ‘nothing further held’."
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
		latencyDetail: "The review describes a short reply and does not give the date it was sent, so it has no position on the time axis. It is the third contact in the pattern, not a third measured dot.",
		usefulness: 0,
		facilitation: 0,
		outcome: "“I regret to inform you that we are unable to assist with the matter you raise.” No search is described, no referral, and no statutory framing.",
		whyUsefulness: "Rung 0. Nothing you can take to the next archive. A pure brush-off, on the scale the review itself set.",
		whyFacilitation: "Rung 0. It does not treat the enquiry as a request for recorded information. It may not have been logged as one."
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
		latencyDetail: "The review’s band, not a stopwatch on one file: usually within 10–20 working days, often with faster follow-ups. The dot is drawn inside that grey band so it can be told apart from the others. Its left–right position is not a measured day-count. Follow-ups are not plotted as if they were first replies.",
		usefulness: 5,
		facilitation: 5,
		outcome: "Detailed catalogue hits, specific references (including DBDT, ACA, and D153 notes), answers to numbered questions, copied quotations, corrections, order-form attachments, and advice on examining originals. Helpful even when the material was limited or held at the National Library of Wales.",
		whyUsefulness: "Rung 5. This is the top of the scale the review described: repeated, specific, corrected, and enough to take a next step without guessing.",
		whyFacilitation: "Rung 5. Patient and iterative. The review’s word for the tone is professional. They keep going when the first answer is incomplete.",
		refs: "Case threads named in the review include 2026/2372, 2475, 3893, 3941, 4097 and 4274."
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
		latencyDetail: "Acknowledgements and responses within the statutory window; follow-ups in days. Plotted inside the shared 10–20 day band for legibility only. The height is the score. The sideways slot is not a claim that this file took 17 days.",
		usefulness: 4,
		facilitation: 4,
		outcome: "Partial disclosures of records and schedules, internal reviews, and clarifications of scope, including what was treated as unrelated. Actual pages were released, and the museum was willing to look again.",
		whyUsefulness: "Rung 4. Real documents and a filtered schedule, not only a pointer. Short of the Archives’ repeated catalogue work, which is why it is not a 5.",
		whyFacilitation: "Rung 4. Formal, but it engages with corrections and with what is still outstanding.",
		refs: "2026-020, 2026-024, 2026-032, 2026-036."
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
		latencyDetail: "The review says acknowledgement was usually prompt and the substantive reply or the refusal was clear, without giving a tighter day-count. The dot sits in the 10–20 day band used for every peer. Do not read the horizontal position as a timed case.",
		usefulness: 4,
		facilitation: 4,
		outcome: "Location advice, catalogue confirmations, internal reviews, and answers on retention schedules. Where the material exists the review rates them medium–high. Where it does not, they say so and say where else.",
		whyUsefulness: "Rung 4. A catalogue confirmation or a precise ‘elsewhere’ is usable. Grouped because the review grouped them; this is not two separately timed cases.",
		whyFacilitation: "Rung 4. Rights-focused and professional. A clear not-held with a pointer outranks a cost refusal that does not say what was searched."
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
		latencyDetail: "Acknowledgements carried case numbers. The review notes delay and chasing on some reviews and appendices, not a measured day-count for the first substantive reply. The dot is only a slot inside the peer band.",
		usefulness: 3,
		facilitation: 3,
		outcome: "Partial disclosures, internal-review outcomes, and formal FOIA or EIR framing. Process-compliant. Some outstanding appendices had to be chased.",
		whyUsefulness: "Rung 3. You received a proper file: references, a framed decision, some disclosure. You also had to chase. That is the middle of the scale, not the Archives.",
		whyFacilitation: "Rung 3. Bureaucratic in the review’s own word, but structured. Rights information and case numbers are there. Chasing is why it is not a 4.",
		refs: "00210772, 00211463, and related review threads."
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
		latencyDetail: "Auto-acknowledgements and formal handling, with some delays. The review does not quantify those delays, so this dot is not a day-count. It is the right-hand slot in the peer band so the label has room. Length of delay is unstated.",
		usefulness: 3,
		facilitation: 4,
		outcome: "Structured refusals or partial releases, with proper notices. Content varies because some material is exempt, including on national-security grounds. The review’s contrast is deliberate: exemption-based, not cost-based avoidance.",
		whyUsefulness: "Rung 3. A proper notice can still leave you empty-handed. Where a security exemption was used, the content was thinner than the Archives. It remains a structured answer, which is why it is not down with the cost refusal.",
		whyFacilitation: "Rung 4. The process is followed. Switch the vertical axis to facilitation and this group rises, while the clerk does not. A lawful exemption is not the same defect as a thin estimate."
	}
];
var metricCopy = {
	usefulness: {
		axis: "Usefulness of what came back",
		hint: "0 is a reply you cannot use. 5 is records, advice, and a next step.",
		insight: "The clerk is not the slow point. Both of his FOI replies sit inside the same 10–20 day band the other bodies are described as using. They sit at the bottom of it."
	},
	facilitation: {
		axis: "How the request was handled",
		hint: "Search, advice and assistance, statutory care, willingness to continue.",
		insight: "Bodies that withheld material under a real exemption move up on this axis. A proper refusal is not the same thing as a thin one. The clerk stays on 1 and 2."
	}
};
function caseById(id) {
	return cases.find((item) => item.id === id) ?? cases[0];
}
function Tip({ active, payload }) {
	const row = payload?.[0]?.payload;
	if (!active || !row) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-56 border border-line bg-card px-3 py-2 shadow-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-semibold text-ink",
			children: row.plotLabel
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-sm text-muted",
			children: [
				"Score ",
				row.y,
				row.xIsMeasured ? ` · ${row.latencyLabel}` : " · day-count not measured"
			]
		})]
	});
}
function ComparisonChart({ points, metric, selectedId, onSelect, showLabels }) {
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		setReady(true);
	}, []);
	const rows = points.flatMap((point) => point.plotX === null ? [] : [{
		...point,
		x: point.plotX,
		y: point[metric]
	}]);
	const egan = rows.filter((row) => row.series === "egan");
	const peers = rows.filter((row) => row.series === "other");
	function renderDot({ cx, cy, payload }) {
		if (cx == null || cy == null || !payload) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {});
		const selected = payload.id === selectedId;
		const isEgan = payload.series === "egan";
		const radius = isEgan ? 9 : 8;
		const labelY = payload.labelBelow ? cy + 20 : cy - 14;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
			onClick: () => onSelect(payload.id),
			style: { cursor: "pointer" },
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: 20,
					fill: "transparent"
				}),
				selected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: radius + 6,
					fill: "none",
					stroke: "var(--color-ink)",
					strokeWidth: 1.5
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx,
					cy,
					r: radius,
					fill: isEgan ? "var(--color-egan)" : "var(--color-other)",
					stroke: isEgan ? "var(--color-egan)" : "var(--color-card)",
					strokeWidth: isEgan ? 0 : 1.5
				}),
				showLabels ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
					x: cx,
					y: labelY,
					textAnchor: "middle",
					fill: isEgan ? "var(--color-egan)" : "var(--color-other)",
					fontSize: 13,
					fontFamily: "inherit",
					fontWeight: selected ? 700 : 600,
					children: payload.plotLabel
				}) : null
			]
		});
	}
	if (!ready) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex h-full items-end border border-dashed border-line px-4 pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-sm text-muted",
			children: "Drawing the scatter from the correspondence review…"
		})
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
		width: "100%",
		height: "100%",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ScatterChart, {
			margin: {
				top: 16,
				right: 12,
				bottom: 8,
				left: 0
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceArea, {
					x1: PEER_BAND.from,
					x2: PEER_BAND.to,
					y1: 0,
					y2: 5,
					fill: "var(--color-band)",
					fillOpacity: .85,
					strokeOpacity: 0,
					ifOverflow: "hidden"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
					stroke: "var(--color-line)",
					vertical: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
					type: "number",
					dataKey: "x",
					domain: [0, 22],
					ticks: [
						0,
						5,
						10,
						15,
						20
					],
					tick: {
						fill: "var(--color-muted)",
						fontSize: 12,
						fontFamily: "inherit"
					},
					axisLine: { stroke: "var(--color-line)" },
					tickLine: false,
					dy: 6
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
					type: "number",
					dataKey: "y",
					domain: [-.25, 5.45],
					ticks: [
						0,
						1,
						2,
						3,
						4,
						5
					],
					width: 28,
					tick: {
						fill: "var(--color-muted)",
						fontSize: 12,
						fontFamily: "inherit"
					},
					axisLine: false,
					tickLine: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReferenceLine, {
					x: 20,
					stroke: "var(--color-rule)",
					strokeDasharray: "4 4",
					label: {
						value: "Day 20",
						position: "insideTopRight",
						fill: "var(--color-rule)",
						fontSize: 12,
						fontFamily: "inherit"
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
					cursor: false,
					content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tip, {}),
					wrapperStyle: {
						outline: "none",
						zIndex: 5
					}
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
					name: "Other bodies",
					data: peers,
					shape: renderDot,
					isAnimationActive: false
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scatter, {
					name: "Clerk",
					data: egan,
					shape: renderDot,
					isAnimationActive: false
				})
			]
		})
	});
}
var rungs = [
	["0", "Nothing you can use. No search, no pointer, no statute."],
	["1", "A refusal, plus at most one suggestion to narrow. Categories not answered."],
	["2", "A lawful redirect to a named place. Still no document from this body."],
	["3", "A proper file: partial disclosure or a clear decision, a reference, some iteration."],
	["4", "Records, schedules, or catalogue identifiers, and a willingness to look again."],
	["5", "Repeated, specific, corrected, and enough to take the next step."]
];
function ComparisonView() {
	const [metric, setMetric] = (0, import_react.useState)("usefulness");
	const [showPeers, setShowPeers] = (0, import_react.useState)(true);
	const [selectedId, setSelectedId] = (0, import_react.useState)("egan-oct");
	const [wide, setWide] = (0, import_react.useState)(true);
	const selected = caseById(selectedId);
	const copy = metricCopy[metric];
	const plotted = cases.filter((item) => item.plotX !== null && (showPeers || item.series === "egan"));
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(min-width: 720px)");
		const apply = () => setWide(mq.matches);
		apply();
		mq.addEventListener("change", apply);
		return () => mq.removeEventListener("change", apply);
	}, []);
	function select(id) {
		setSelectedId(id);
		const reduce = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		document.getElementById("case-inspector")?.scrollIntoView({
			behavior: reduce ? "auto" : "smooth",
			block: "nearest"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "mx-auto max-w-6xl px-4 py-5 md:px-10 md:py-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-3xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-semibold tracking-wide text-egan",
						children: "FOI correspondence · about 18 months · Ty Mawr and BP v Buckler"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-1 text-3xl text-ink md:text-5xl",
						children: "Not slower. Less useful."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl text-base text-ink",
						children: "Paul Egan’s replies for Llandough Community Council, set against the other public bodies asked about the same records."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-4 border border-line bg-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-3 gap-2 border-b border-line px-4 py-3 sm:px-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								figure: "1 and 2",
								label: "The clerk, on either axis"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								figure: "3 to 5",
								label: "The other bodies"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
								figure: "14 and 18",
								label: "His working days, inside 20"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3 px-4 py-3 sm:px-5 md:flex-row md:items-end md:justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl text-ink",
							children: "The scatter"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 max-w-xl text-sm text-muted",
							children: copy.hint
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "no-print flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									pressed: metric === "usefulness",
									onClick: () => setMetric("usefulness"),
									children: "Usefulness"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									pressed: metric === "facilitation",
									onClick: () => setMetric("facilitation"),
									children: "Facilitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chip, {
									pressed: showPeers,
									onClick: () => setShowPeers((value) => !value),
									children: showPeers ? "Peers on" : "Peers off"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 px-2 pt-3 sm:px-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "hidden px-2 text-sm text-muted sm:block",
								children: [
									"Vertical axis · ",
									copy.axis,
									". Horizontal axis · working days to the substantive reply, not the acknowledgement."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 overflow-x-auto",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "chart-frame",
									role: "img",
									"aria-label": ariaLabel(metric, showPeers),
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ComparisonChart, {
										points: plotted,
										metric,
										selectedId,
										onSelect: select,
										showLabels: wide
									})
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-2 pb-4 text-sm text-ink",
								children: copy.insight
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "flex flex-wrap gap-x-5 gap-y-2 border-t border-line px-5 py-3 text-sm text-muted",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block size-3 rounded-full bg-egan",
									"aria-hidden": true
								}), "Red · the clerk, plotted from the dates"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block size-3 rounded-full bg-other",
									"aria-hidden": true
								}), "Teal · other bodies, score is the height"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block h-3 w-5 bg-band",
									"aria-hidden": true
								}), "Grey · the 10–20 day band in the review"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "inline-block h-0 w-5 border-t border-dashed border-rule",
									"aria-hidden": true
								}), "Day 20 · statutory limit"]
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-muted",
				children: "Teal dots are spread inside the grey band so each body can be seen. That sideways position is not a day-count. Only the red dots are timed. Tap a point or a name."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6 flex flex-wrap gap-2",
				children: cases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => select(item.id),
					"aria-pressed": item.id === selectedId,
					className: clsx("min-h-11 border px-3 py-2 text-left text-sm font-semibold", item.id === selectedId ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"),
					children: [item.plotLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-2 font-normal tabular-nums",
						children: item[metric]
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				id: "case-inspector",
				className: clsx("mt-4 border border-line bg-card p-5 md:p-6", selected.series === "egan" ? "border-l-4 border-l-egan" : "border-l-4 border-l-other"),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: clsx("text-sm font-semibold", selected.series === "egan" ? "text-egan" : "text-other"),
						children: [
							selected.series === "egan" ? "Clerk" : "Comparison body",
							" ·",
							" ",
							metric === "usefulness" ? "Usefulness" : "Facilitation",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "tabular-nums",
								children: selected[metric]
							}),
							" of 5"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-1 text-3xl text-ink",
						children: selected.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-sm text-muted",
						children: selected.body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
						className: "mt-4 grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-semibold text-ink",
							children: "When"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "text-sm text-muted",
							children: selected.when
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm font-semibold text-ink",
							children: "Time to the real reply"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dd", {
							className: "text-sm text-muted",
							children: [
								selected.latencyLabel,
								". ",
								selected.latencyDetail
							]
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-ink",
						children: selected.outcome
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: metric === "usefulness" ? selected.whyUsefulness : selected.whyFacilitation
					}),
					selected.refs ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: ["Named in the review: ", selected.refs]
					}) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 grid gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-ink",
						children: "The scale, in the open"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted",
						children: "Taken from the review’s own axis. Integers only, so the chart does not pretend to a precision the letters do not have."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-4",
						children: rungs.map(([score, text]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3 border-t border-line py-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "w-6 font-serif text-xl text-egan tabular-nums",
								children: score
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-ink",
								children: text
							})]
						}, score))
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl text-ink",
						children: "What the pattern will and will not prove"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink",
						children: "The replies are curt, broad, and low on help. That is different from every other body in this set, at a similar speed. It is not, on its own, proof of bad faith. A community council with limited paid capacity can lawfully reach the cost ceiling. The tone described is correct, not openly hostile."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink",
						children: "Calling it obstructive is supported where the handling is thinner than the request required — not where the council simply does not hold a record. The November line may never have been treated as an FOI at all."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-sm text-muted",
						children: "This is a reading of the correspondence for an internal review or a later complaint about handling. It is not an ICO determination."
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12 border border-line bg-egan-soft p-5 md:p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-ink",
					children: "The October estimate is the live lever"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 grid gap-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink",
						children: "The 11 October reply refuses under section 12. The cost is described as reading or assessing about 224 sets of minutes, 2002 to 2016. The internal review already says the arithmetic does not agree with itself: a 20-minute plus 10-minute breakdown set against a 10-minute total."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-ink",
						children: "The request was wider than minute books. It asked for post-2002 records, photographs of any date, and the 1982 transfer. Pricing the whole of that as “read every set” does not describe a search of correspondence, images, or the deposit paperwork."
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-ink",
							children: "Section 12 can also cover the duty to say whether information is held, but only if that narrower job would itself exceed the limit. The reply, as described, does not show that calculation separately from the cost of reading the minutes."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-ink",
							children: "For a community council the FOIA ceiling is £450, which at the £25 hourly rate is 18 hours. A lawful ceiling is not the same thing as a reasonable estimate. The one suggestion on offer was 2002–2006. Everything else was deferred to a meeting."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm text-muted",
							children: "Land, verge, or green strands can be environmental information. The FOIA cost limit does not simply carry over to the EIR. The question there is whether the request is manifestly unreasonable, and the public interest applies. The October reply did not make that distinction."
						})
					] })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl text-ink",
					children: "Every contact in the review"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto border border-line",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
						className: "ledger w-full border-collapse text-left text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
							className: "bg-band text-ink",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-semibold",
									children: "Reply"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-semibold",
									children: "Usefulness"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-semibold",
									children: "Facilitation"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-semibold",
									children: "Time"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
									className: "px-3 py-3 font-semibold",
									children: "On the plot"
								})
							] })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: cases.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: clsx("border-t border-line", item.id === selectedId ? "bg-card" : "bg-paper"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
									className: "px-3 py-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => select(item.id),
										className: "text-left font-semibold text-ink underline decoration-line underline-offset-4",
										children: item.body
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-1 block text-muted",
										children: item.title
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3 tabular-nums",
									children: item.usefulness
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3 tabular-nums",
									children: item.facilitation
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3",
									children: item.latencyLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "px-3 py-3",
									children: item.xIsMeasured ? "Yes · dated" : item.plotX === null ? "No date to plot" : "Height only"
								})
							]
						}, item.id)) })]
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "mt-12 border-t border-line pt-6 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Drawn from the correspondence review of the Gmail threads through 11 October 2026: the clerk against Glamorgan Archives, Museum Wales, the Vale of Glamorgan FOI unit, the National Archives, the National Library of Wales, the MOD, South Wales Police, and the Welsh Government / Cadw. Scores apply that review to one published scale. They are not the council’s figures." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3",
					children: "Working days follow FOIA. The day of receipt does not count. Saturdays, Sundays, and Monday 25 May 2026 (the late-May bank holiday) are skipped. The May–June reply is day 18 on that count, or day 19 if the bank holiday is ignored. The September–October reply is day 14 by the Friday before a Sunday letter."
				})]
			})
		]
	});
}
function Stat({ figure, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "px-1 py-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-serif text-2xl leading-none text-ink tabular-nums",
			children: figure
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 text-sm text-muted",
			children: label
		})]
	});
}
function Chip({ pressed, onClick, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": pressed,
		onClick,
		className: clsx("min-h-11 border px-3 text-sm font-semibold", pressed ? "border-ink bg-ink text-paper" : "border-line bg-card text-ink"),
		children
	});
}
function ariaLabel(metric, showPeers) {
	const axis = metric === "usefulness" ? "usefulness" : "facilitation";
	const egan = metric === "usefulness" ? "Clerk section 12 at 14 working days, score 1. Clerk section 21 at 18 working days, score 2." : "Clerk section 12 at 14 working days, facilitation 1. Clerk section 21 at 18 working days, facilitation 2.";
	if (!showPeers) return `Scatter of ${axis}. ${egan} Other bodies hidden.`;
	return `Scatter of ${axis}. ${egan} Other bodies score between 3 and 5 and are placed inside a 10 to 20 day band without individual day-counts.`;
}
var SplitComponent = ComparisonView;
//#endregion
export { SplitComponent as component };
