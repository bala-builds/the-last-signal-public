import heroWide from '../photos/hero-wide.jpg';
import heroTall from '../photos/hero-tall.jpg';
import aiMoon from '../photos/ai-moon.jpg';
import aiMars from '../photos/ai-mars.jpg';
import aiSignal from '../photos/ai-signal.jpg';
import s3Crater from '../photos/s3-crater.jpg';
import s3Conrad from '../photos/s3-conrad.jpg';
import a17Far from '../photos/a17-rover-far.jpg';
import a17Fender from '../photos/a17-fender.jpg';
import oppShadow from '../photos/opp-shadow.jpg';
import oppSelfie from '../photos/opp-selfie.jpg';

export { heroWide, heroTall, aiSignal };

export type Beat = { kicker: string; title: string; text: string; img: string; ai?: boolean; alt: string; credit: string };
export type Challenge = { q: string; options: { t: string; ok?: boolean; why: string }[]; science: string };
export type Chapter = {
    id: string; no: string; name: string; world: string; years: string; status: string; hook: string;
    stat: { label: string; a: string; b: string; aw: number; bw: number };
    beats: Beat[]; challenge: Challenge; sources: { t: string; href: string }[];
};

const NASA = 'NASA';
export const chapters: Chapter[] = [
    {
        id: 'surveyor-3', no: '01', name: 'Surveyor 3', world: 'Moon', years: '1967 to 1969', status: 'Visited by Apollo 12 astronauts. Some parts were returned to Earth',
        hook: 'A robot that waited on the Moon until people came to find it.',
        stat: { label: 'On the surface', a: 'Landed April 1967', b: 'Visited Nov 20, 1969', aw: 100, bw: 100 },
        beats: [
            { kicker: 'Landing', title: 'It soft-landed in April 1967.', text: 'Surveyor 3 touched down on the Moon to look at the ground before any crew did. Its television camera sent pictures home.', img: s3Crater, alt: 'Surveyor 3 sitting in a lunar crater', credit: `${NASA}, Apollo 12 photo AS12-48-7121` },
            { kicker: 'Waiting', title: 'Then it went quiet.', text: 'Last contact was May 4, 1967. The lander stayed in its crater through the Moon’s days and nights.', img: s3Crater, alt: 'Surveyor 3 in the crater', credit: `${NASA}, Apollo 12 photo AS12-48-7121` },
            { kicker: 'Return', title: 'Apollo 12 landed close by.', text: 'Apollo 12 landed on November 19, 1969. During their second moonwalk on November 20, Pete Conrad and Alan Bean visited Surveyor 3.', img: s3Conrad, alt: 'Astronaut Conrad beside Surveyor 3', credit: `${NASA}, Apollo 12 photo AS12-48-7133` },
            { kicker: 'After', title: 'Parts came home for study.', text: 'The crew examined the television camera, and the camera and other parts were returned to Earth so engineers could see how they had aged on the Moon.', img: s3Conrad, alt: 'Conrad examining Surveyor 3', credit: `${NASA}, Apollo 12 photo AS12-48-7133` },
        ],
        challenge: {
            q: 'Engineers get the camera back after about two and a half years on the Moon. What is the most useful thing to look for?',
            options: [
                { t: 'How the materials changed in sun, cold and dust', ok: true, why: 'Right. Real Moon exposure tells designers which materials and coatings last, which no lab test can fully copy.' },
                { t: 'Whether the paint colour looks nicer', why: 'Looks matter less than whether surfaces and parts still work after exposure.' },
                { t: 'Nothing. A switched-off machine has nothing to teach', why: 'The opposite is true. Hardware that sat out there is evidence nobody else could produce.' },
            ],
            science: 'Engineering decision: choose materials by how they behave in the real environment, not only in the lab.',
        },
        sources: [{ t: 'NASA LRO: Apollo 12 and Surveyor 3 landing sites', href: 'https://www.nasa.gov/missions/lunar-reconnaissance-orbiter-looks-at-apollo-12-surveyor-3-landing-sites/' }],
    },
    {
        id: 'apollo-17-lrv', no: '02', name: 'Apollo 17 Lunar Rover', world: 'Moon', years: 'December 1972', status: 'Parked at Taurus-Littrow',
        hook: 'A broken fender, a handful of maps, and a fix made on the Moon.',
        stat: { label: 'Crew time with the rover', a: 'Three days of exploring', b: 'Parked to televise lift-off', aw: 100, bw: 100 },
        beats: [
            { kicker: 'Arrival', title: 'December 11, 1972.', text: 'Eugene Cernan and Harrison Schmitt landed in the Taurus-Littrow valley. The rover let them reach places far beyond walking range.', img: a17Far, alt: 'Apollo 17 rover in the distance, archival context photograph', credit: `${NASA}, AS17-145-22162. Context image, not the landing itself` },
            { kicker: 'Problem', title: 'A hammer broke the fender.', text: 'Part of the right rear fender came off. Lunar dust flew up behind the wheel and coated the crew and the rover.', img: a17Fender, alt: 'Apollo 17 rover with a makeshift fender', credit: `${NASA}, Apollo 17 photo AS17-137-20979` },
            { kicker: 'Fix', title: 'Maps and lamp clamps.', text: 'Mission Control passed up a procedure from astronaut John Young. The crew built a new fender from lunar maps and clamps from a lamp.', img: a17Fender, alt: 'Makeshift fender on the rover', credit: `${NASA}, Apollo 17 photo AS17-137-20979` },
            { kicker: 'Final position', title: 'Parked to watch them leave.', text: 'The rover was left in its final position so its camera could show the lift-off of Apollo 17 from the Moon.', img: a17Far, alt: 'Apollo 17 rover in the distance', credit: `${NASA}, Apollo 17 photo AS17-145-22162` },
        ],
        challenge: {
            q: 'The fender is broken and dust is flying. You have maps, clamps and a few minutes. What do you build?',
            options: [
                { t: 'A stiff paper shield clamped over the wheel to catch the dust', ok: true, why: 'That is what the crew did. Dust was a real problem for the crew and the equipment, so they blocked it with what they had.' },
                { t: 'Nothing. Drive slower and ignore it', why: 'Slower driving does not stop dust landing on the crew and the rover.' },
                { t: 'Wait for a replacement from Earth', why: 'No replacement was coming. Fixing it on the spot was the only option.' },
            ],
            science: 'Engineering decision: simple, repairable designs let crews improvise when something breaks far from home.',
        },
        sources: [{ t: 'NASA: 50 years ago, Apollo 17 lands at Taurus-Littrow', href: 'https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/' }],
    },
    {
        id: 'opportunity', no: '03', name: 'Opportunity', world: 'Mars', years: '2004 to 2019', status: 'Last heard June 10, 2018',
        hook: 'Built for 90 Mars days. It worked for more than fourteen years.',
        stat: { label: 'Planned vs actual', a: 'Designed for 90 sols (about 3 months)', b: 'Operated almost 15 years', aw: 6, bw: 100 },
        beats: [
            { kicker: 'Landing', title: 'January 2004. Bounce, bounce, bounce.', text: 'Opportunity landed at Meridiani Planum inside airbags and bounced at least 26 times before it stopped.', img: oppShadow, alt: 'Opportunity shadow on Mars, photographed later in 2004', credit: `${NASA}/JPL-Caltech, PIA06739. Later surface image, not landing footage` },
            { kicker: 'Beyond plan', title: 'It kept going for more than fourteen years.', text: 'It was designed to work for 90 sols. It kept driving for years, and in 2015 it became the first rover to go farther than a marathon.', img: oppShadow, alt: 'Opportunity\u2019s shadow on Mars', credit: `${NASA}/JPL-Caltech, PIA06739` },
            { kicker: 'Distance', title: '28.06 miles in total.', text: 'In 2013 it passed the Apollo 17 rover\u2019s distance record. It finished with 28.06 miles, or 45.16 km, on its odometer.', img: oppSelfie, alt: 'Opportunity self-portrait', credit: `${NASA}/JPL-Caltech, PIA17759` },
            { kicker: 'Last signal', title: 'A dust storm in June 2018.', text: 'Opportunity\u2019s last communication with Earth was June 10, 2018. NASA declared the mission complete on February 13, 2019.', img: oppSelfie, alt: 'Opportunity self-portrait', credit: `${NASA}/JPL-Caltech, PIA17759` },
        ],
        challenge: {
            q: 'A huge dust storm covers the sky over a solar-powered rover. What is the biggest risk?',
            options: [
                { t: 'Not enough sunlight reaching the solar panels', ok: true, why: 'Yes. The rover runs on sunlight, and a dark sky cuts the power it needs to stay in contact.' },
                { t: 'The wheels will slip on the dust', why: 'Dust on the ground is a smaller concern than losing power from above.' },
                { t: 'The cameras will fill with sand', why: 'Cameras matter less than keeping the power system alive.' },
            ],
            science: 'Engineering decision: power design decides how long a machine can last, and how it can fail.',
        },
        sources: [{ t: 'NASA Science: Mars Exploration Rover Opportunity', href: 'https://science.nasa.gov/mission/mer-opportunity/' }],
    },
];
