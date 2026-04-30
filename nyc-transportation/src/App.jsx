import ArticleSection from "./components/ArticleSection.jsx";
import ChartFigure from "./components/ChartFigure.jsx";
import Hero from "./components/Hero.jsx";
import InsetPhoto from "./components/InsetPhoto.jsx";
import PullQuote from "./components/PullQuote.jsx";
import ReadingProgress from "./components/ReadingProgress.jsx";
import SourcesFooter from "./components/SourcesFooter.jsx";
import SubwayStrip from "./components/SubwayStrip.jsx";

export default function App() {
  const mtaCrzAbout = "https://www.mta.info/fares-tolls/tolls/congestion-relief-zone/about";

  return (
    <>
      <ReadingProgress />
      <Hero
        title="NYC's transportation system is still living in COVID's shadow"
        author="Simeon Dong"
        dateline="April 2026"
        imageCredit="Photo: Unsplash (New York City skyline)."
      />
      <SubwayStrip />
      <article className="article">
        <ArticleSection>
          <p>
            COVID-19 was a global shock that disrupted daily life and triggered the deepest global economic downturn since
            the Great Depression. Its effects reached into health, education, work, and local economies. In New York City,
            one of the clearest places to see those disruptions was transportation. During the initial shock, public
            transit use fell dramatically as people avoided shared spaces and daily routines were upended. The more
            important issue is what happened after the collapse. New York did not simply rebound along its old path.
            Instead, the recovery exposed lasting changes in commuting, mode choice, and the city’s overall mobility
            pattern.
          </p>
        </ArticleSection>

        <ArticleSection>
          <p>
            For generations, the subway had been one of the city’s constants, running through blackouts, blizzards, and
            fiscal crises. During the first wave of COVID, even New York’s 24-hour system paused for a brief window each
            night. In May 2020, the MTA suspended overnight service for cleaning and disinfection, the first planned
            overnight shutdown in 115 years. The people who still rode were often those with the fewest choices, including
            nurses and delivery workers. At the same time, transit workers were getting sick and dying. By spring 2020,
            more than 100 MTA workers had died from the virus, a grim measure of how dangerous the transportation system
            had become in the pandemic’s early months.
          </p>
        </ArticleSection>

        <ArticleSection>
          <ChartFigure
            src="images/chart1.png"
            alt="Line chart: monthly ridership for subway, bus, LIRR, and Metro-North from 2018 through 2025, showing a sharp drop in 2020 and a partial recovery."
          />
        </ArticleSection>

        <ArticleSection>
          <p>
            The numbers show that shock clearly. Ridership fell off a cliff in early 2020, then climbed back slowly and
            unevenly. But the deeper story is not only that transit fell and rose. The city that returned was not the
            same city that left.
          </p>
          <PullQuote>
            Compared with February 2019, February 2026 ridership remains well below pre-pandemic levels across major
            transit modes, down{" "}
            <span className="pull-quote__stat pull-quote__stat--subway">25 percent on the subway</span>,{" "}
            <span className="pull-quote__stat pull-quote__stat--bus">47 percent on NYCT Bus</span>,{" "}
            <span className="pull-quote__stat pull-quote__stat--lirr">15 percent on the LIRR</span>, and{" "}
            <span className="pull-quote__stat pull-quote__stat--mnr">23 percent on Metro-North</span>.
          </PullQuote>
        </ArticleSection>

        <ArticleSection>
          <p>
            Public transportation was not the only part of the system disrupted by COVID. Taxis and app-based for-hire
            vehicles also collapsed in the first months of the pandemic, as tourism fell and everyday trips disappeared.
            But their rebound followed a different path. Trip volumes in these services recovered faster than ridership
            on major transit modes, pointing to a broader shift in how people moved through the city after the initial
            shock. New Yorkers were still traveling, but many trips became more individualized and point-to-point rather
            than tied to traditional transit patterns.
          </p>
        </ArticleSection>

        <InsetPhoto
          src="images/inset-fhv-nyc.jpg"
          alt="Yellow taxis on the Avenue of the Americas in Midtown Manhattan."
          caption={
            <>
              Photo:{" "}
              <a
                href="https://commons.wikimedia.org/wiki/File:Avenue_of_the_Americas.jpg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Jeremy Keith
              </a>
              .
            </>
          }
        />

        <ArticleSection>
          <ChartFigure
            src="images/chart2.png"
            alt="Line chart: average daily yellow taxi and high-volume for-hire trips from 2018 through 2025, with a 2020 collapse and uneven recovery."
          />
        </ArticleSection>

        <ArticleSection>
          <p>
            The February 2026 versus February 2019 comparison shows a clear divide within the for-hire market.
          </p>
          <PullQuote>
            <span className="pull-quote__stat pull-quote__stat--fhv">
              High-volume FHV trips are only about 1 percent below pre-pandemic levels
            </span>
            , while{" "}
            <span className="pull-quote__stat pull-quote__stat--yellowcab">
              yellow taxis remain down roughly 53 percent
            </span>
            , a deeper decline than several major transit modes.
          </PullQuote>
          <p>
            Rather than moving together, these services followed very different recovery paths. A plausible explanation
            is that many riders now favor app-based booking, upfront fares, and seamless payment, which can be
            especially attractive for trips that are less routine and more time-sensitive.
          </p>
        </ArticleSection>

        <ArticleSection>
          <p>
            A broader change in work helps explain these travel shifts. During the pandemic, many jobs moved remote, and a
            meaningful share stayed remote or hybrid. That altered both commute frequency and trip timing across the
            week. As a result, transit can recover substantially and still remain below 2019 levels, because the
            pre-pandemic baseline assumed a larger pool of daily office commuters. In that sense, today’s lower ridership
            is not only a recovery gap. It also reflects a changed pattern of urban travel demand.
          </p>
        </ArticleSection>

        <ArticleSection>
          <ChartFigure
            src="images/chart3.png"
            alt="Bar chart: share of NYC workers working from home by year, showing a rise after COVID and an elevated level versus 2019."
          />
        </ArticleSection>

        <ArticleSection>
          <p>
            This is where the policy story becomes more complicated. New York’s Congestion Relief Zone, the tolled area of
            Manhattan at and below 60th Street, was designed to reduce traffic, improve bus and vehicle speeds, cut
            emissions, and raise dedicated funding for transit improvements. Yet weekday morning entries into the zone
            still cluster at peak times. That pattern fits what the earlier charts suggest: overall transportation volumes
            remain below 2019 in part because remote and hybrid work reduced routine commuting, but the trips that do
            remain are still heavily tied to work-related travel into the core.
          </p>
        </ArticleSection>

        <InsetPhoto
          src="images/crz-map.png"
          alt="Map of the Manhattan Congestion Relief Zone south of 60th Street, with the West Side Highway, FDR Drive, and Hugh L. Carey Tunnel connections excluded."
          caption={
            <>
              The tolled zone covers local streets in Manhattan south of and including 60th Street, with major highways
              excluded. Map from (
              <a href={mtaCrzAbout} target="_blank" rel="noopener noreferrer">
                MTA
              </a>
              ).
            </>
          }
        />

        <ArticleSection>
          <ChartFigure
            src="images/chart4.png"
            alt="Heat map: congestion relief zone entries by hour of day and day of week in 2025, with darker cells showing more entries."
          />
        </ArticleSection>

        <ArticleSection>
          <p>
            New York’s post-COVID transportation story is one of adaptation. The city has not returned to its old pattern,
            but people are still moving in large numbers every day.
          </p>
          <p>
            Transit remains the backbone of daily life, even as travel behavior has become more varied. Hybrid work
            changed when people moved, and different modes now serve different needs across the day. Some drivers still
            surge into the core on weekday mornings, while many riders return on less uniform schedules than before 2020.
          </p>
          <p>
            Although travel routines and needs now vary more across the city, New York’s transportation system still
            commits to its daily churn, providing service whenever New Yorkers need it.
          </p>
        </ArticleSection>
      </article>

      <SourcesFooter />
    </>
  );
}
