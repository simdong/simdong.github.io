const CARS = [
  { line: "blue", lead: true },
  { line: "red" },
  { line: "yellow" },
  { line: "green", tail: true },
];

/** Enough 4-car blocks to cover ultra-wide viewports; gap between cars is uniform so the loop tiles. */
const LOOP_COPIES = 6;

export default function SubwayStrip() {
  const blocks = Array.from({ length: LOOP_COPIES }, (_, copy) =>
    CARS.map((props, j) => ({ ...props, key: `${copy}-${props.line}-${j}` })),
  ).flat();

  return (
    <div className="subway-strip" aria-hidden="true">
      <div className="subway-strip__track">
        <div className="subway-strip__train">
          {blocks.map(({ key, ...props }) => (
            <Car key={key} {...props} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Car({ line, lead, tail }) {
  const mods = [
    "subway-car",
    `subway-car--${line}`,
    lead ? "subway-car--lead" : "",
    tail ? "subway-car--tail" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={mods}>
      <div className="subway-car__upper">
        <div className="subway-car__roof" />
        <div className="subway-car__body">
          <div className="subway-car__windows">
            <span className="subway-car__window" />
            <span className="subway-car__window" />
            <span className="subway-car__window" />
          </div>
        </div>
      </div>
      <div className="subway-car__wheels">
        <span className="subway-car__wheel" />
        <span className="subway-car__wheel" />
        <span className="subway-car__wheel" />
        <span className="subway-car__wheel" />
      </div>
    </div>
  );
}
