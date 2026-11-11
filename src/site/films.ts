import {chapters}from './data';
export type Scene={art:string;title:string;date:string;credit:string;source:string;alt:string;kind?:string;model?:string;note?:string;narration?:string};
const art=import.meta.glob('../story-assets/*',{eager:true,query:'?url',import:'default'}) as Record<string,string>;
const a=(s:string)=>art['../story-assets/'+s];
const S='https://science.nasa.gov/mission/surveyor-3/';
const P='https://ntrs.nasa.gov/citations/19670023253';
const O='https://science.nasa.gov/mission/mer-opportunity/';
const A='https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/';
export const films:Record<string,{title:string;subtitle:string;scenes:Scene[]}>=
{
"surveyor-3": {
"title": "THE ROBOT\nTHEY CAME BACK FOR.",
"subtitle": "A small machine. A giant rehearsal.",
"scenes": [
{
"art": "s3-voyage.jpg",
"title": "First, send a robot.",
"date": "17 APR 1967",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/surveyor-3/",
"alt": "An illustrated Earth-to-Moon journey, not a scale trajectory",
"kind": "voyage",
"note": "Surveyor 3 launched on an Atlas-Centaur. The path is a symbolic illustration, not navigation data."
},
{
"art": "s3-landed.jpg",
"title": "Three touches. One landing.",
"date": "20 APR 1967",
"credit": "NASA \u00b7AS 12-48-7099 \u00b7photographed NOV 1969",
"source": "https://science.nasa.gov/mission/surveyor-3/",
"alt": "Surveyor 3 on the Moon, photographed by Apollo 12 in 1969",
"kind": "arrival",
"note": "The lander bounced twice before settling. This later Apollo 12 photograph shows the landed machine, not the landing itself."
},
{
"art": "s3-camera-sees.png",
"title": "A robot looks around.",
"date": "APR-MAY 1967",
"credit": "NASA SP-146 \u00b7figure 3-37",
"source": "https://ntrs.nasa.gov/citations/19670023253",
"alt": "Original Surveyor 3 television picture showing its camera and solar-panel shadows",
"kind": "scan",
"note": "The lander sent thousands of pictures. This is an original Surveyor 3 television image, not a reconstruction."
},
{
"art": "s3-dig.png",
"title": "A little scoop. A big test.",
"date": "APR 1967",
"credit": "NASA SP-146 \u00b7figure 3-39(a)",
"source": "https://ntrs.nasa.gov/citations/19670023253",
"alt": "An original Surveyor 3 image of a sampler trench",
"kind": "investigate",
"note": "Commands from Earth made the sampler dig four trenches. The soil could support an Apollo lunar module."
},
{
"art": "s3-eclipse.png",
"title": "It even watched Earth.",
"date": "24 APR 1967",
"credit": "NASA SP-146 \u00b7figure 3-43(a)",
"source": "https://ntrs.nasa.gov/citations/19670023253",
"alt": "Earth blocking the Sun as seen by Surveyor 3, original television image",
"kind": "eclipse",
"note": "Surveyor 3 photographed an eclipse of the Sun by Earth. The original image is reproduced from NASA's preliminary report."
},
{
"art": "s3-night.jpg",
"title": "Then came the long night.",
"date": "LAST CONTACT \u00b7 04 MAY 1967",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/surveyor-3/",
"alt": "Illustrated lunar night, not a photograph of the actual site",
"kind": "silence",
"note": "NASA records the last contact on May 4, two days after lunar night began. No invented last words are played."
},
{
"art": "s3-visit.jpg",
"title": "People came to find it.",
"date": "20 NOV 1969",
"credit": "NASA \u00b7AS 12-48-7136",
"source": "https://science.nasa.gov/solar-system/moon/footpads-and-footprints-humans-and-machine-meet-on-the-moon/",
"alt": "Charles Conrad examines Surveyor 3 during Apollo 12",
"kind": "visit",
"note": "Pete Conrad and Alan Bean visited during their second moonwalk and removed selected parts."
},
{
"art": "s3-return.png",
"title": "Its camera came home.",
"date": "APOLLO 12 \u00b7NOV 1969",
"credit": "NASA \u00b7returned-hardware report \u00b7figure 2",
"source": "https://ntrs.nasa.gov/citations/19720019081",
"alt": "Surveyor 3 camera in the Lunar Receiving Laboratory after return",
"kind": "legacy",
"note": "The camera, scoop and other selected material came back for study. The whole lander did not return."
}
]
},
"apollo-17-lrv": {
"title": "THE LITTLE CAR\nTHAT WENT TO THE MOON.",
"subtitle": "Four wheels. Two explorers. One clever repair.",
"scenes": [
{
"art": "a17-launch.jpg",
"title": "A car leaves Earth.",
"date": "07 DEC 1972",
"credit": "NASA \u00b7S 72-55070",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "Apollo 17 SaturnV launches at night with the folded rover aboard",
"kind": "launch"
},
{
"art": "a17-arrival.jpg",
"title": "Folded for the ride.",
"date": "11 DEC 1972",
"credit": "NASA \u00b7AS 17-151-23199",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "The lunar module in lunar orbit, carrying the folded rover on its descent stage",
"kind": "arrival",
"note": "The rover traveled folded on the lunar module. This is Challenger in lunar orbit, before landing."
},
{
"art": "a17-test.jpg",
"title": "Unfold. Drive. Explore.",
"date": "11 DEC 1972",
"credit": "NASA \u00b7AS 17-147-22526",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "Cernan test drives the Apollo 17 rover near the lunar module",
"kind": "drive"
},
{
"art": "a17-repair.jpg",
"title": "Maps became a mudguard.",
"date": "12 DEC 1972",
"credit": "NASA \u00b7AS 17-137-20979",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "The replacement rear fender built from maps and clamps",
"kind": "investigate",
"note": "A hammer broke the right-rear fender. After an early tape repair failed, maps and clamps made a new dust shield."
},
{
"art": "a17-orange.jpg",
"title": "A surprise in the dust.",
"date": "12 DEC 1972",
"credit": "NASA \u00b7AS 17-137-20990",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "Actual orange lunar soil at Shorty crater",
"kind": "investigate",
"note": "At Shorty crater, Schmitt found orange soil. Returned samples showed tiny volcanic glass beads."
},
{
"art": "a17-unused.jpg",
"title": "Farther than footsteps.",
"date": "13 DEC 1972",
"credit": "NASA \u00b7Apollo 17 Station 6 geology photograph",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "An astronaut beside a large boulder visited during the third excursion",
"kind": "scale",
"note": "The rover carried astronauts and tools between geology stops. The NASA history identifies this boulder stop in the third excursion."
},
{
"art": "a17-leaving.jpg",
"title": "Bootprints stayed behind.",
"date": "14 DEC 1972",
"credit": "NASA \u00b7AS 17-145-22196",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/",
"alt": "Bootprints, rover tracks and a discarded backpack seen from Challenger after the last excursion",
"kind": "silence",
"note": "After three excursions, the crew packed samples and prepared to leave. This view is through Cernan's window."
},
{
"art": "a17-liftoff.jpg",
"title": "The rover watched them go.",
"date": "14 DEC 1972",
"credit": "NASA \u00b7S 72-55421 \u00b7television frame",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-heads-home-to-earth/",
"alt": "Challenger lifts off, seen through the camera mounted on the rover",
"kind": "legacy",
"note": "The rover's remotely controlled camera followed the liftoff. This is a television frame, not its exact final radio packet."
}
]
},
"opportunity": {
"title": "NINETY DAYS.\nA MUCH LONGER ADVENTURE.",
"subtitle": "A small robot that kept on going.",
"scenes": [
{
"art": "opp-launch.jpg",
"title": "Off to a red world.",
"date": "08 JUL 2003 UTC",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "Illustrated Delta II launch carrying Opportunity",
"kind": "launch",
"note": "Opportunity launched at 20:18 PDT on July 7, or July 8 UTC. The illustration is not launch photography."
},
{
"art": "opp-airbags.jpg",
"title": "Bounce into a new home.",
"date": "25 JAN 2004 UTC",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "Illustrated protective airbags at the Mars landing, not a hardware diagram",
"kind": "bounce",
"note": "The lander bounced inside protective airbags before stopping. This is an illustration, not landing footage or an exact airbag model."
},
{
"art": "opp-eagle.jpg",
"title": "Open up. Look around.",
"date": "JAN 2004",
"credit": "NASA/JPL \u00b7PIA 05151",
"source": "https://science.nasa.gov/photojournal/over-the-rover/",
"alt": "Opportunity's original navigation-camera projection shortly after touchdown",
"kind": "arrival",
"note": "The original view is projected from navigation-camera images. It shows the rover and lander shortly after touchdown at Meridiani Planum."
},
{
"art": "opp-water.jpg",
"title": "Rocks held watery clues.",
"date": "03 MAR 2004",
"credit": "NASA/JPL-Caltech \u00b7PIA 18885",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "Original microscopic image of the Last Chance rock target studied by Opportunity",
"kind": "investigate",
"note": "Rock textures and minerals helped scientists understand ancient water on Mars. This target is Last Chance, examined on sol 39."
},
{
"art": "opp-crater.jpg",
"title": "Bigger craters. Bigger questions.",
"date": "VICTORIA \u00b7SEP 2006",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "Illustrated Martian crater landscape, not a photographic terrain reconstruction",
"kind": "scale",
"note": "Opportunity reached Victoria crater in 2006. The setting is an illustration, not a photographic terrain reconstruction."
},
{
"art": "opp-tracks.jpg",
"title": "A marathon on Mars.",
"date": "MAR 2015",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "Illustrated long rover tracks across an empty Martian plain",
"kind": "route",
"note": "Opportunity became the first rover to exceed a marathon's distance on another world. These illustrated tracks are not an actual route map."
},
{
"art": "opp-storm.jpg",
"title": "The sky stole the sunlight.",
"date": "LAST COMMUNICATION \u00b7 10 JUN 2018",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "An illustrated dim Martian landscape during a dust storm",
"kind": "storm",
"note": "A planet-wide dust storm reduced the sunlight available to the solar-powered rover. NASA received no further communication after June 10."
},
{
"art": "opp-valley.jpg",
"title": "The journey still teaches us.",
"date": "MISSION COMPLETE \u00b7 13 FEB 2019",
"credit": "Flow illustration \u00b7NASA mission history",
"source": "https://science.nasa.gov/mission/mer-opportunity/",
"alt": "A quiet illustrated Mars valley after the rover's mission ended",
"kind": "legacy",
"note": "NASA declared the mission complete after recovery attempts. Opportunity drove 45.16 km over more than 14 years. The illustration does not document its exact present condition."
}
]
}
} as any;
films['ranger-7']={
"title": "THE CAMERA\nTHAT HAD ONE CHANCE.",
"subtitle": "A journey that ended with a closer look.",
"scenes": [
{
"art": "r7-build.jpg",
"title": "Built to see the unknown.",
"date": "BEFORE FLIGHT \u00b71964",
"credit": "NASA/JPL \u00b7Ranger 7 assembly",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "Ranger 7 under assembly at JPL",
"note": "Ranger 7 was built to return high-resolution pictures before human landings. Six earlier Rangers had returned no lunar close-up photographs.",
"kind": "arrival"
},
{
"art": "r7-cameras.jpg",
"title": "Six cameras. One chance.",
"date": "BLOCK III DESIGN",
"credit": "NASA/JPL \u00b7Ranger Block III schematic",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "NASA schematic of the BlockIII Ranger spacecraft",
"note": "The six television cameras had wide- and narrow-angle capabilities. Their combined system could take 300 pictures per minute.",
"kind": "scan"
},
{
"art": "r7-launch.jpg",
"title": "A three-day ride to the Moon.",
"date": "28 JUL 1964",
"credit": "NASA \u00b7Ranger 7 launch",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "Atlas-Agena launches Ranger 7 from Cape Canaveral",
"note": "The Atlas-Agena first placed Ranger 7 in Earth orbit, then sent it toward the Moon. A course correction followed the next day.",
"kind": "launch"
},
{
"art": "r7-first.jpg",
"title": "At last, a picture came home.",
"date": "31 JUL 1964",
"credit": "NASA/JPL \u00b7first Ranger 7 image",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "The first Ranger 7 image, showing Alphonsus among the lunar craters",
"note": "The first image came from an altitude of 1,311 miles. These were the first pictures of the Moon taken by an American spacecraft.",
"kind": "scan"
},
{
"art": "r7-closer.jpg",
"title": "Closer. Sharper. Stranger.",
"date": "31 JUL 1964",
"credit": "NASA/JPL \u00b7image from 352 miles",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "Ranger 7 photograph taken from an altitude of 352 miles",
"note": "The cameras sent 4,308 images during the final 17 minutes of flight. This original image was taken at 352 miles altitude.",
"kind": "investigate"
},
{
"art": "r7-last.jpg",
"title": "One final frame.",
"date": "31 JUL 1964",
"credit": "NASA/JPL \u00b7final Ranger 7 image",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "The final partial image from Ranger 7 before planned impact",
"note": "The last image was taken 2.3 seconds before impact. NASA states that the finest details were about 15 inches across. No invented final words are presented.",
"kind": "silence"
},
{
"art": "r7-impact.jpg",
"title": "This landing was a planned crash.",
"date": "IMPACT \u00b731 JUL 1964",
"credit": "NASA \u00b7Apollo 16 image \u00b71972",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "The Ranger 7 impact crater photographed during Apollo 16 in 1972",
"note": "The spacecraft was designed to impact after sending its close-up pictures. This later Apollo 16 photograph shows its crater, not footage of the impact.",
"kind": "arrival"
},
{
"art": "r7-mark.jpg",
"title": "The small mark left a big story.",
"date": "LRO IMAGE \u00b72010",
"credit": "NASA/LRO \u00b7Ranger 7 impact crater",
"source": "https://www.nasa.gov/history/60-years-ago-ranger-7-photographs-the-moon/",
"alt": "Ranger 7 impact crater imaged by the Lunar Reconnaissance Orbiter in 2010",
"note": "LRO photographed the impact crater decades later. Ranger 7 helped prepare the way for the Surveyor soft-landing missions.",
"kind": "legacy"
}
]
};
films['surveyor-1']={
"title": "THE SCOUT\nTHAT LANDED GENTLY.",
"subtitle": "Three feet. A camera. A place to stand.",
"scenes": [
{
"art": "s1-launch.png",
"title": "A gentle landing starts with a roar.",
"date": "30 MAY 1966",
"credit": "NASA SP-126 \u00b7Figure 1 \u00b7launch",
"source": "https://science.nasa.gov/mission/surveyor-1/",
"alt": "Atlas-Centaur launching Surveyor 1",
"note": "Surveyor 1 launched from Cape Canaveral on an Atlas-Centaur. The flight to the surface lasted about 64 hours.",
"kind": "launch"
},
{
"art": "s1-descent.png",
"title": "Slow down. Then slower still.",
"date": "2 JUN 1966 \u00b7UTC",
"credit": "NASA SP-126 \u00b7Figure 6 \u00b7descent diagram",
"source": "https://ntrs.nasa.gov/citations/19660020191",
"alt": "Original NASA diagram of Surveyor 1 descent stages",
"note": "A large retrorocket slowed the spacecraft. Smaller vernier engines controlled the final descent. This diagram shows the planned sequence, not a recording.",
"kind": "descent"
},
{
"art": "s1-pad.png",
"title": "The dust held its feet.",
"date": "2 JUN 1966",
"credit": "NASA SP-126 \u00b7Figure 12 \u00b7footpad 2",
"source": "https://science.nasa.gov/mission/surveyor-1/",
"alt": "Surveyor 1 footpad resting on the Moon with displaced material around it",
"note": "The lander settled on three feet in Oceanus Procellarum. Original pictures showed where its footpads disturbed the surface.",
"kind": "arrival"
},
{
"art": "s1-camera.png",
"title": "A mirror helped it look around.",
"date": "LUNAR TELEVISION CAMERA",
"credit": "NASA SP-126 \u00b7Figure 4 \u00b7camera cutaway",
"source": "https://ntrs.nasa.gov/citations/19660020191",
"alt": "NASA cutaway drawing of Surveyor 1 television camera and mirror",
"note": "Commands from Earth could move the camera mirror, change focus and adjust the lens. This is a real NASA instrument drawing, not an imagined interior.",
"kind": "scan"
},
{
"art": "s1-horizon.png",
"title": "A horizon no person had seen.",
"date": "FIRST LUNAR DAY \u00b7JUN 1966",
"credit": "NASA SP-126 \u00b7Figure 23 \u00b7crater rim",
"source": "https://ntrs.nasa.gov/citations/19660020191",
"alt": "Surveyor 1 view of a large crater rim southeast of the spacecraft",
"note": "The camera could see a large crater rim on the horizon. Original pictures let scientists study distant terrain as well as the ground beside the lander.",
"kind": "horizon"
},
{
"art": "s1-rock.png",
"title": "Even a rock had a story.",
"date": "FIRST LUNAR DAY \u00b7JUN 1966",
"credit": "NASA SP-126 \u00b7Figure 26 \u00b7lunar block",
"source": "https://ntrs.nasa.gov/citations/19660020191",
"alt": "Lunar rock with rounded edges and nearby fragments imaged by Surveyor 1",
"note": "Surveyor pictures let scientists study the shapes, fractures and shadows of nearby rocks. The original report describes this block as having rounded edges.",
"kind": "investigate"
},
{
"art": "s1-shadow.png",
"title": "Its shadow stretched across a new world.",
"date": "12 JUN 1966 \u00b7 10:58:28 GMT",
"credit": "NASA SP-126 \u00b7Report cover photograph",
"source": "https://ntrs.nasa.gov/citations/19660020191",
"alt": "Surveyor 1 camera and panel shadow on the lunar surface",
"note": "The report cover records this shadow photograph late in the lunar afternoon. The date comes from the original cover caption.",
"kind": "shadow"
},
{
"art": "s1-frame.png",
"title": "The first scout left a quiet frame.",
"date": "CONTACT ENDED \u00b7 7 JAN 1967",
"credit": "NASA SP-126 \u00b7Figure 3 \u00b7spacecraft reference",
"source": "https://science.nasa.gov/mission/surveyor-1/",
"alt": "NASA reference image labeling the parts of Surveyor 1",
"note": "The primary mission was complete by July 14, 1966. NASA maintained contact until January 7, 1967. This source does not give a cause for the end of contact.",
"kind": "legacy"
}
]
};
films['apollo-11-surface']={
"title": "THE LITTLE LAB\nLEFT AT TRANQUILITY.",
"subtitle": "An empty home. A listener. A patient mirror.",
"scenes": [
{
"art": "a11-eagle.jpg",
"title": "A home with two halves.",
"date": "20 JUL 1969",
"credit": "NASA \u00b7AS11-40-5924",
"source": "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/A11_PAOMissionReport.html",
"alt": "Eagle lunar module on the surface, with Earth above it",
"note": "The astronauts landed in Eagle. Its lower descent stage would stay while the upper ascent stage took them back to lunar orbit.",
"kind": "arrival",
"narration": "Eagle brought two astronauts down. Only its top half would take them back up."
},
{
"art": "a11-carry.jpg",
"title": "Leave a little science behind.",
"date": "JUL 1969 \u00b7SURFACE WORK",
"credit": "NASA \u00b7AS11-40-5942",
"source": "https://www.nasa.gov/missions/apollo/apollo-11/the-apollo-experiment-that-keeps-on-giving/",
"alt": "Buzz Aldrin carrying the seismic experiment and laser reflector",
"note": "Aldrin carried the seismic package in his left hand and the laser reflector in his right. The crew set up experiments south of the lunar module.",
"kind": "deploy",
"narration": "Aldrin carried two small experiments away from the lunar module."
},
{
"art": "a11-foot.jpg",
"title": "A machine that could hear a footstep.",
"date": "JUL 1969 \u00b7FIRST DATA",
"credit": "NASA/JPL \u00b7PIA24439",
"source": "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/A11_PAOMissionReport.html",
"alt": "An astronaut footprint in the lunar surface material",
"note": "The seismometer returned data immediately and was sensitive enough to register astronaut footsteps. The footprint photograph is a documentary illustration of the activity, not a seismic measurement.",
"kind": "footstep",
"narration": "Tiny movements in the ground were enough for the new seismometer to notice."
},
{
"art": "a11-mirror.jpg",
"title": "A mirror with no batteries.",
"date": "JUL 1969 \u00b7PASSIVE REFLECTOR",
"credit": "NASA \u00b7AS11-40-5952",
"source": "https://www.nasa.gov/missions/apollo/apollo-11/the-apollo-experiment-that-keeps-on-giving/",
"alt": "Apollo 11 laser reflector on the lunar surface",
"note": "Apollo 11 left 100 quartz corner cubes. They reflect light back toward its source and need no electrical power. No switch-on animation implies that the reflector itself was powered.",
"kind": "reflector",
"narration": "A hundred little glass prisms could bounce a laser beam back toward Earth."
},
{
"art": "a11-depart.jpg",
"title": "The top half lifted off.",
"date": "21 JUL 1969 \u00b7LUNAR LIFTOFF",
"credit": "NASA \u00b7later rendezvous photo",
"source": "https://www.nasa.gov/wp-content/uploads/static/history/alsj/a11/A11_PAOMissionReport.html",
"alt": "Apollo 11 ascent stage approaching rendezvous above the Moon",
"note": "The ascent stage returned the crew to lunar orbit. This photograph shows the later approach to rendezvous, not liftoff from the surface. The descent stage remained below.",
"kind": "departure",
"narration": "The crew left the science gear and Eagle bottom half behind."
},
{
"art": "a11-power.jpg",
"title": "Sunlight kept the listener awake.",
"date": "LUNAR DAYS \u00b7 1969",
"credit": "NASA/NASM \u00b7Needell annotations, 2010",
"source": "https://science.nasa.gov/resource/apollo-11-seismic-experiment/",
"alt": "Diagram of the Apollo 11 passive seismic instrument with its solar panels",
"note": "Solar cells supplied operating power to the seismic instrument. It operated during lunar days; a radioisotope heater protected it during the cold lunar night.",
"kind": "solar",
"narration": "Two solar panels powered the seismometer. A heater helped it survive cold nights."
},
{
"art": "a11-silent.jpg",
"title": "One listener fell quiet.",
"date": "25 AUG 1969 \u00b7COMMANDS LOST",
"credit": "NASA \u00b7earlier July deployment photo",
"source": "https://science.nasa.gov/resource/apollo-11-seismic-experiment/",
"alt": "Astronaut working at the deployed Apollo 11 seismic experiment in July 1969",
"note": "NASA states that the package stopped responding to commands at 0400 UT on August 25, probably from overheating. This image shows earlier deployment, not a photograph of the failure. The passive reflector needed no power and was a separate experiment.",
"kind": "silence",
"narration": "The seismic package stopped taking commands, probably because of the heat."
},
{
"art": "a11-site.jpg",
"title": "The empty home was still there.",
"date": "LRO VIEW \u00b7PUBLISHED 2019",
"credit": "NASA/GSFC/Arizona State University",
"source": "https://science.nasa.gov/resource/apollo-11-landing-site/",
"alt": "LRO image of the Apollo 11 landing site with descent stage and astronaut trails",
"note": "Decades later, LRO imaged the descent stage and astronaut trails. The 2019 NASA reflector article reports continuing laser-ranging science. A quiet radio does not mean every kind of experiment has stopped.",
"kind": "legacy",
"narration": "From orbit, LRO could still see the descent stage and the paths the astronauts made."
}
]
};
films['lro']={
"title": "THE MOON'S\nMAPMAKER.",
"subtitle": "Not every distant explorer has fallen silent.",
"scenes": [
{
"art": "lro-build.jpg",
"title": "A mapmaker left home.",
"date": "18 JUN 2009 / LAUNCH",
"narration": "LRO flew to the Moon with a companion called LCROSS. Its job was to help us know the Moon better.",
"source": "https://science.nasa.gov/mission/lro/about/",
"credit": "NASA/GSFC \u00b7artist concept",
"alt": "Artist concept of LRO with Earth behind it",
"kind": "voyage",
"note": "This is a NASA artist concept, not a launch photograph. Launch date and shared ride are from the NASA mission history."
},
{
"art": "lro-orbit.jpg",
"title": "Go around. Look down.",
"date": "23 JUN 2009 / LUNAR ORBIT",
"narration": "LRO entered orbit around the Moon. Seven instruments gave it different ways to explore.",
"source": "https://science.nasa.gov/mission/lro/about/",
"credit": "NASA/GSFC \u00b7artist concept",
"alt": "Artist concept of LRO above the lunar surface",
"kind": "scan",
"note": "NASA records lunar orbit insertion on June 23, 2009 and seven science instruments. This image is an artist concept, not a photo of LRO in flight."
},
{
"art": "lro-heights.jpg",
"title": "Where is it steep?",
"date": "LOLA / SURFACE SLOPES",
"narration": "Laser measurements turn the surface into maps. They help people choose safer places to land.",
"source": "https://science.nasa.gov/mission/lro/science-and-data/",
"credit": "NASA \u00b7LOLA slope data",
"alt": "Color-coded polar map with a degrees-of-slope scale",
"kind": "data-map",
"note": "This is a scientific slope map, not the natural colors of the Moon. LOLA measures surface shape, elevations and slopes. Do not read these colors as height or temperature."
},
{
"art": "lro-heat.jpg",
"title": "Where is it cold?",
"date": "DIVINER / THE POLAR MOON",
"narration": "Diviner measures the warmth of the ground. Deep shadows can be very cold hiding places.",
"source": "https://science.nasa.gov/mission/lro/spacecraft-and-instruments/",
"credit": "NASA \u00b7Diviner data visualization",
"alt": "Polar data visualization on the NASA Diviner instrument page",
"kind": "data-map",
"note": "False-color data visualization. Diviner makes orbital thermal measurements, including information about polar cold traps. The scene does not assign temperatures to individual colors."
},
{
"art": "lro-water.jpg",
"title": "Clues, not a blue ocean.",
"date": "LEND / WATER-ICE SEARCH",
"narration": "Hidden hydrogen can be a clue to water. Blue marks on this map show possible ice deposits.",
"source": "https://science.nasa.gov/mission/lro/science-and-data/",
"credit": "NASA \u00b7LRO data visualization",
"alt": "South-pole map with possible water-ice deposits marked in blue",
"kind": "data-map",
"note": "NASA captions this map as possible deposits of water ice based on LRO data. Blue is a data overlay, not liquid water photographed on the Moon. LEND senses hydrogen using neutrons."
},
{
"art": "lro-tracks.jpg",
"title": "It found the old visitors.",
"date": "2013 / SITE COMPARISON",
"narration": "LRO could see Surveyor 3, Apollo 12 hardware and the tracks people left nearby.",
"source": "https://www.nasa.gov/missions/lunar-reconnaissance-orbiter-looks-at-apollo-12-surveyor-3-landing-sites/",
"credit": "NASA Goddard/Arizona State University",
"alt": "Surveyor crater compared between LRO and Lunar Orbiter 3 views",
"kind": "compare",
"note": "Left: LRO. Right: Lunar Orbiter 3. The LRO view was stretched to match the older view. These are different spacecraft and dates, not before-and-after photographs by LRO."
},
{
"art": "lro-radiation.jpg",
"title": "An invisible weather report.",
"date": "CRaTER / 2009-2011 DATA",
"narration": "Space radiation cannot be seen with our eyes. CRaTER measurements help scientists study its risks.",
"source": "https://science.nasa.gov/mission/lro/science-and-data/",
"credit": "NASA \u00b7CRaTER proton map, 2012",
"alt": "Color-coded cosmic-ray albedo proton map from the first nineteen months of CRaTER data",
"kind": "data-map",
"note": "This 2012 map uses CRaTER observations from July 2009 through early January 2011. It is a historical data product, not a live radiation monitor or today forecast."
},
{
"art": "lro-earth.jpg",
"title": "This story has no ending yet.",
"date": "STATUS CHECK / 11 NOV 2026",
"narration": "NASA still lists LRO as studying the Moon. Its maps help the explorers who will come next.",
"source": "https://science.nasa.gov/mission/lro/",
"credit": "NASA/Goddard/Arizona State University \u00b7 2015 composite",
"alt": "Earthrise composite assembled from LRO camera images",
"kind": "ongoing",
"note": "Active status checked on the NASA mission page on November 11, 2026. Earthrise image is a composite from October 12, 2015, not a live view. No invented final signal or guaranteed future schedule."
}
]
};
films['apollo-12-surface']={
"title": "THE LABORATORY\nTHEY LEFT BEHIND.",
"subtitle": "The astronauts went home. The instruments kept asking questions.",
"scenes": [
{
"art": "a12-arrive.jpg",
"title": "A second home on the Moon.",
"date": "19 NOV 1969 / INTREPID",
"narration": "Intrepid carried two explorers down to the Ocean of Storms. They brought a science station to leave behind.",
"source": "https://www.nasa.gov/missions/apollo/apollo-12-the-pinpoint-mission/",
"credit": "NASA \u00b7AS12-51-7507",
"alt": "Intrepid in lunar orbit before descent, seen from the command module",
"kind": "voyage",
"note": "Original lunar-orbit photograph, not footage of landing. This story follows the descent stage and long-lived surface experiments, not the parts flown back to orbit."
},
{
"art": "a12-carry.jpg",
"title": "Carry the laboratory.",
"date": "19 NOV 1969 / FIRST MOONWALK",
"narration": "Alan Bean carried two packages away from the lander. Inside were instruments for the Moon.",
"source": "https://images-assets.nasa.gov/image/as12-46-6807/collection.json",
"credit": "NASA \u00b7AS12-46-6807",
"alt": "Alan Bean carrying two ALSEP packages across the Moon",
"kind": "still",
"note": "NASA original image metadata identifies Bean carrying the two ALSEP subpackages. No distance is printed here because source accounts use different descriptions."
},
{
"art": "a12-fuel.jpg",
"title": "Power without sunshine.",
"date": "19 NOV 1969 / RTG",
"narration": "A special generator supplied the station with power. It did not need solar panels.",
"source": "https://images-assets.nasa.gov/image/as12-46-6790/collection.json",
"credit": "NASA \u00b7AS12-46-6790",
"alt": "Alan Bean moving the RTG fuel element from the descent-stage cask",
"kind": "power",
"note": "NASA identifies the RTG fuel transfer from the descent-stage cask. RTG means radioisotope thermoelectric generator. No unsupported wattage or design-life number is included."
},
{
"art": "a12-seismic.jpg",
"title": "A listener and a messenger.",
"date": "19 NOV 1969 / ALSEP",
"narration": "A seismometer listened for ground movement. A central station helped send the measurements home.",
"source": "https://images-assets.nasa.gov/image/as12-47-6918/collection.json",
"credit": "NASA \u00b7AS12-47-6918",
"alt": "Apollo 12 seismometer and central station on the lunar surface",
"kind": "footstep",
"note": "NASA original caption identifies the Passive Seismic Experiment in the foreground, the Central Station as the largest object, and SIDE as the white object on legs. The rings are symbolic, not measured seismic data."
},
{
"art": "a12-magnet.jpg",
"title": "A magnetic question.",
"date": "19 NOV 1969 / MAGNETOMETER",
"narration": "Another instrument measured the Moon's magnetic field. Different tools asked different questions.",
"source": "https://images-assets.nasa.gov/image/as12-46-6813/collection.json",
"credit": "NASA \u00b7AS12-46-6813",
"alt": "Alan Bean deploying the Lunar Surface Magnetometer",
"kind": "magnetic",
"note": "The NASA caption identifies deployment of the Lunar Surface Magnetometer. The scene does not claim a global dipole like Earth or invent numerical readings."
},
{
"art": "a12-solarwind.jpg",
"title": "A wind you cannot feel.",
"date": "1969 / SOLAR-WIND SPECTROMETER",
"narration": "Tiny particles from the Sun stream through space. This instrument measured their energies.",
"source": "https://images-assets.nasa.gov/image/6903621/collection.json",
"credit": "NASA \u00b7 6903621",
"alt": "Apollo 12 Solar Wind Spectrometer photographed on the surface",
"kind": "particle",
"note": "NASA original metadata identifies a Solar Wind Spectrometer measuring the energies of solar-wind particles. This is not wind made of air, and not the separate foil experiment returned by the crew."
},
{
"art": "a12-control.jpg",
"title": "Other missions rang its bell.",
"date": "4 FEB 1971 / LATER IMPACT",
"narration": "When Apollo 14's rocket stage hit the Moon, Apollo 12's seismometer felt the ground move.",
"source": "https://images-assets.nasa.gov/image/S71-17609/collection.json",
"credit": "NASA \u00b7S71-17609",
"alt": "Researchers examining Apollo 14 impact seismic readings in the ALSEP control room",
"kind": "scan",
"note": "This is a 1971 Apollo 14 event measured by the already-deployed Apollo 12 seismometer. NASA identifies Maurice Ewing and David Lammlein examining the reading. Not an image of the 1969 ascent-stage impact."
},
{
"art": "a12-end.jpg",
"title": "The listening job was finished.",
"date": "30 SEP 1977 / PLANNED SHUTDOWN",
"narration": "Years after the astronauts left, NASA ended ALSEP support. The equipment stayed on the Moon.",
"source": "https://ntrs.nasa.gov/citations/19790014808",
"credit": "NASA \u00b7AS12-47-6919 \u00b7earlier 1969 deployment photo",
"alt": "Earlier 1969 photograph of Bean setting up ALSEP, illustrating equipment later decommissioned",
"kind": "silence",
"note": "Earlier deployment photograph from 1969, not a photograph of the 1977 shutdown. NASA's termination report dates the end of support operations and scientific-data receiving/processing to September 30, 1977. This is not a claimed exact last radio carrier or packet."
}
]
};
films['apollo-14-surface']={
"title": "THE STATION\nAND THE HANDCART.",
"subtitle": "A laboratory. A little cart. A mirror with a different ending.",
"scenes": [
{
"art": "a14-training.jpg",
"title": "Practice on Earth.",
"date": "JUL 1970 / TRAINING",
"credit": "NASA/JSC \u00b7S70-46152 \u00b7Earth simulation",
"source": "https://images-assets.nasa.gov/image/S70-46152/collection.json",
"alt": "Two crew men of the Apollo 14 lunar landing mission participate in lunar surface simulation training at the Kennedy Space Center (KSC). They are deploying components of the Apollo lunar surface experiments package (ALSEP). Standing in the center next to the ALSEP central station is astronaut Alan B. Shepard Jr. (wearing red stripe on space suit), commander. Astronaut Edgar D. Mitchell, lunar module pilot, is in the left foreground. Both crew men are wearing the Extravehicular Mobility Units (EMU).",
"note": "NASA identifies this as a simulation at Kennedy Space Center, not a lunar photograph. Shepard stands beside the central station; Mitchell is in the foreground.",
"kind": "still",
"narration": "Before the Moon, the crew practiced setting up their science station on Earth."
},
{
"art": "a14-land.jpg",
"title": "Antares brought the laboratory.",
"date": "5 FEB 1971",
"credit": "NASA/JSC \u00b7as14-66-09277",
"source": "https://images-assets.nasa.gov/image/as14-66-09277/collection.json",
"alt": "An excellent view of the Apollo 14 Lunar Module (LM) on the moon, as photographed during the first Apollo 14 extravehicular activity (EVA) on the lunar surface. The astronauts have already deployed the U.S. flag. Note the laser ranging retro reflector (LR-3) at the foot of the LM ladder. The LR-3 was deployed later.",
"note": "Antares landed at Fra Mauro. The reflector is still at the foot of the ladder in this image; it was deployed later. The descent stage would remain when the ascent stage departed.",
"kind": "arrival",
"narration": "Shepard and Mitchell reached Fra Mauro. Their little laboratory had work to do."
},
{
"art": "a14-station.jpg",
"title": "A station with several jobs.",
"date": "5 FEB 1971 / FIRST MOONWALK",
"credit": "NASA/JSC \u00b7as14-67-09361",
"source": "https://images-assets.nasa.gov/image/as14-67-09361/collection.json",
"alt": "A close-up view of two components of the Apollo lunar surface experiments package (ALSEP) which the Apollo 14 astronauts deployed on the moon during their first extravehicular activity (EVA). In the center background is the ALSEP's central station (CS); and in the foreground is the mortar package assembly of the ALSEP's active seismic experiment (ASE). The modularized equipment transporter (MET) can be seen in the right background.",
"note": "The central station is in the center background; the active seismic mortar package is in the foreground, and the handcart is in the right background. Do not confuse this mortar package with the hand-held thumper.",
"kind": "still",
"narration": "The crew spread scientific equipment across the ground. A central station connected it."
},
{
"art": "a14-thump.jpg",
"title": "Make a tiny tremor. Listen.",
"date": "5 FEB 1971 / ACTIVE SEISMIC WORK",
"credit": "NASA/JSC \u00b7S71-19509",
"source": "https://ntrs.nasa.gov/citations/19710021485",
"alt": "Astronaut Edgar D. Mitchell, lunar module pilot, operates the Active Seismic Experiment's (ASE) thumper during the first Apollo 14 extravehicular activity (EVA) on the moon. Astronaut Alan B. Shepard Jr., commander, walks near deployed components of the Apollo Lunar Surface Experiments Package (ALSEP) in the background. This photograph was taken by an automatic 16mm camera mounted on the Apollo lunar hand tool carrier aboard the Modularized Equipment Transporter (MET).",
"note": "NASA image S71-19509 identifies Mitchell operating the active seismic thumper. The 1971 NASA experiment report describes active seismic signal analysis. The drawn rings are symbolic, not measured seismic data.",
"kind": "thumper",
"narration": "Mitchell operated a thumper. The experiment studied signals traveling through lunar ground."
},
{
"art": "a14-particles.jpg",
"title": "Another box watched particles.",
"date": "5 FEB 1971 / CPLEE",
"credit": "NASA/JSC \u00b7as14-67-09364",
"source": "https://images-assets.nasa.gov/image/as14-67-09364/collection.json",
"alt": "A close-up view of the charged particle lunar environment experiment (CPLEE), a component of the Apollo lunar surface experiments package (ALSEP) which was deployed on the moon by the Apollo 14 astronauts.",
"note": "NASA identifies this instrument as the Charged Particle Lunar Environment Experiment (CPLEE), one part of ALSEP. It is not the seismometer.",
"kind": "still",
"narration": "A different instrument watched charged particles near the Moon."
},
{
"art": "a14-cart.jpg",
"title": "A handcart, not a Moon car.",
"date": "6 FEB 1971 / SECOND MOONWALK",
"credit": "NASA/JSC \u00b7AS14-68-9405",
"source": "https://images-assets.nasa.gov/image/AS14-68-9405/collection.json",
"alt": "Astronaut Alan B. Shepard Jr., Apollo 14 commander, assembles a double core tube as he stands beside the rickshaw-type portable workbench or modularized equipment transporter (MET) unique to this mission. The photograph was taken by astronaut Edgar D. Mitchell, lunar module pilot, standing some 170 meters northeast of the Lunar Module (LM), during the mission's second extravehicular activity (EVA) on Feb. 6, 1971.",
"note": "NASA identifies the modularized equipment transporter (MET) as a rickshaw-type portable workbench unique to this mission. Shepard assembles a double core tube in this photograph. It is not an electric lunar rover.",
"kind": "still",
"narration": "Shepard worked beside a two-wheeled cart carrying tools and samples."
},
{
"art": "a14-end.jpg",
"title": "This station failed before the others.",
"date": "JAN 1976 / ALSEP FAILED",
"credit": "NASA/JSC \u00b7as14-67-09376 \u00b7earlier 1971 deployment photo",
"source": "https://www.nasa.gov/wp-content/uploads/2023/04/sp-4029.pdf",
"alt": "Several components of the Apollo lunar surface experiments package (ASLEP) are deployed in this photograph taken during the first Apollo 14 extravehicular activity (EVA). The larger object with antenna is the ALSEP central station (CS). The active seismic experiment (ASE) mortar package assembly is to the rear left of the CS. The charged particle lunar environment experiment (CPLEE) is to the right rear of the CS. A portion of the modularized equipment transporter (MET) can be seen in the left foreground.",
"note": "NASA SP-4029 lists Apollo 14 as \"Failed Jan 1976\" in the lunar surface experiment status table. This is an earlier February 1971 equipment photograph, not an image of the failure. No exact final words or failure cause are invented. The separately deployed laser reflector is not part of this powered-station ending.",
"kind": "silence",
"narration": "The powered ALSEP station failed in January 1976. Its equipment stayed behind."
},
{
"art": "a14-mirror.jpg",
"title": "But a mirror needs no radio.",
"date": "FEB 1971 / PASSIVE REFLECTOR",
"credit": "NASA/JSC \u00b7as14-67-09386",
"source": "https://images-assets.nasa.gov/image/as14-67-09386/collection.json",
"alt": "A close-up view of the laser ranging retro reflector (LR3) which the Apollo 14 astronauts deployed on the moon during their lunar surface extravehicular activity (EVA).",
"note": "NASA identifies this as Apollo 14 laser-ranging retroreflector AS14-67-9386. SP-4029 lists 100 corner cubes for Apollo 14. The passive light-reflection principle is described in NASA laser-ranging history; the drawn light path is symbolic, not to scale or proof of a current measurement.",
"kind": "reflector",
"narration": "The crew also left a laser reflector. Its job was to bounce light back, without a powered radio."
}
]
};
films['apollo-15-surface']={
"title": "THE FIRST\nMOON CAR.",
"subtitle": "A folded rover. A mountain laboratory. Science that stayed behind.",
"scenes": [
{
"art": "a15-training.jpg",
"title": "First, practice the drill.",
"date": "JUL 1971 / EARTH TRAINING",
"credit": "NASA \u00b7 71pc0468 \u00b7Earth simulation",
"source": "https://images-assets.nasa.gov/image/71pc0468/collection.json",
"alt": "KENNEDY SPACE CENTER, FLA. - Apollo 15 Commander David R. Scott operates the battery-powered Lunar Surface Drill during a training exercise at a man-made replica of the Moon's Hadley-Apennine region at the Kennedy Space Center.  During his upcoming mission, scheduled to begin no earlier than July 26, 1971, Scott will drill to a depth of about 10 feet to obtain lunar surface core samples and conduct the Heat Flow Experiment.  This experiment is designed to measure the rate of heat loss from the interior of the Moon.  Lunar Module Pilot James B. Irwin will accompany Scott on the surface while Astronaut Alfred M. Worden will pilot the Command  Module while in lunar orbit.",
"note": "NASA identifies this as training at Kennedy Space Center, not lunar work. The drill supported core sampling and the heat-flow experiment. No numerical heat-flow value is asserted.",
"narration": "Scott practiced drilling on Earth. On the Moon, a heat-flow experiment would study warmth escaping from inside.",
"kind": "still"
},
{
"art": "a15-land.jpg",
"title": "A new home beside the mountains.",
"date": "30 JUL 1971 / FALCON LANDS",
"credit": "NASA \u00b7as15-086-11600 \u00b7photographed 31 JUL 1971",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
"alt": "A view of the Lunar Module (LM) \"Falcon\" taken early in the first Apollo 15 lunar surface extravehicular activity (EVA) at the Hadley-Apennine landing site prior to deployment of lunar surface equipment. Hadley Delta Mountain is in the background.",
"note": "The photo shows Falcon during the first moonwalk on July 31, after landing, before surface-equipment deployment. It is not a picture of touchdown.",
"narration": "Falcon carried Scott and Irwin to Hadley-Apennine. A rover and a laboratory came with them.",
"kind": "arrival"
},
{
"art": "a15-unfold.jpg",
"title": "Unpack a folded Moon car.",
"date": "31 JUL 1971 / FIRST MOONWALK",
"credit": "NASA \u00b7NASA history image",
"source": "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
"alt": "TV still of Scott and Irwin deploying the rover during first moonwalk",
"note": "This is a still from the original television downlink of rover deployment. NASA describes its hinged three-part chassis and foldable seats. It is not modern animation or a photograph of Apollo17.",
"narration": "The rover unfolded from the side of Falcon. Two seats and four wheels were ready to explore.",
"kind": "still"
},
{
"art": "a15-drive.jpg",
"title": "Wheels carried science farther.",
"date": "JUL-AUG 1971 / THREE TRAVERSES",
"credit": "NASA \u00b7as15-85-11437",
"source": "https://nssdc.gsfc.nasa.gov/planetary/lunar/apollo_lrv.html",
"alt": "Astronaut David R. Scott, commander, with tongs and gnomon in hand, studies a boulder on the slope of Hadley Delta during the Apollo 15 lunar landing mission's first extravehicular activity (EVA). The Lunar Roving Vehicle (LRV), \"Rover\", is in the right foreground. The view is looking slightly south of west. \"Bennett Hill\" is at extreme right. Astronaut James B. Irwin, lunar module pilot, took this photograph.",
"note": "NASA records 27.8 km across three traverses for Apollo 15. This July31 photograph shows Scott studying a boulder on Hadley Delta, with the rover in the foreground.",
"narration": "The first lunar rover covered 27.8 kilometers. The crew could stop to study rocks along the way.",
"kind": "still"
},
{
"art": "a15-rock.jpg",
"title": "A very old piece of the Moon.",
"date": "COLLECTED 1 AUG 1971 / LATER LAB PHOTO",
"credit": "NASA \u00b7S71-42955",
"source": "https://science.nasa.gov/solar-system/moon/genesis-rock/",
"alt": "A close-up view of Apollo 15 lunar sample no. 15415 in the Non-Sterile Nitrogen Processing Line (NNPL) in the Lunar Receiving Laboratory (LRL) at the Manned Spacecraft Center (MSC). This sample is the white anorthositic rock (Genesis Rock) collected by astronauts David R. Scott and James B. Irwin in container no. 196 at Site no. 7 at a Ground Elapsed Time of 145 hours and 42 minutes, on the mission's second extravehicular activity (EVA).",
"note": "Sample 15415 is anorthosite. NASA dates the finding to August 1 and reports a later age estimate of about 4 billion years. This image shows the returned sample in a terrestrial laboratory, not where it sat on the Moon.",
"narration": "The Genesis Rock was a piece of ancient lunar crust. The crew brought it home for scientists to study.",
"kind": "still"
},
{
"art": "a15-station.jpg",
"title": "The laboratory could stay.",
"date": "JUL-AUG 1971 / ALSEP DEPLOYMENT",
"credit": "NASA \u00b7NASA history image",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-15-on-the-moon-at-hadley-apennine/",
"alt": "Irwin behind the ALSEP central station",
"note": "The photograph shows Irwin behind the ALSEP central station. NASA describes difficult drilling and heat-flow work over the first two moonwalks. The exact heat-flow numerical value from the secondary outline is omitted.",
"narration": "A central station linked the experiments. The crew also worked hard to drill holes for heat-flow probes.",
"kind": "still"
},
{
"art": "a15-departure.jpg",
"title": "The top half was ready to leave.",
"date": "2 AUG 1971 / BEFORE LIFTOFF",
"credit": "NASA \u00b7S71-41511",
"source": "https://images-assets.nasa.gov/image/S71-41511/collection.json",
"alt": "The Apollo 15 Lunar Module (LM) \"Falcon\" is seen only seconds before ascent stage liftoff in this color reproduction taken from a transmission made by the RCA color television camera mounted on the Lunar Roving Vehicle (LRV). The LRV was parked about 300 feet east of the LM. The LRV-mounted TV camera, remotely controlled from the Mission Control Center (MCC), made it possible for people on Earth to watch the LM's launch from the moon. The LM liftoff was at 171:37 ground elapsed time. The \"Falcon\" ascent stage, with astronauts David R. Scott, commander; and James B. Irwin, lunar module pilot, aboard, returned from the lunar surface to rejoin the Command and Service Modules (CSM) orbiting the moon. Astronaut Alfred M. Worden, command module pilot, remained with the CSM in lunar orbit while Scott and Irwin explored the moon. The LM descent stage is used as a launching platform and remains behind on the moon. This is part one of a four-part sequence.",
"note": "NASA S71-41511 is a color reproduction from the rover television transmission only seconds BEFORE ascent-stage liftoff. It is not a still of a vehicle already rising.",
"narration": "The rover camera watched Falcon. The crew would leave the bottom half and the science equipment behind.",
"kind": "departure"
},
{
"art": "a15-end.jpg",
"title": "The powered station was switched off.",
"date": "30 SEP 1977 / COMMANDED OFF",
"credit": "NASA \u00b7S71-43941 \u00b7earlier 1971 window mosaic",
"source": "https://www.nasa.gov/wp-content/uploads/2023/04/sp-4029.pdf",
"alt": "A photographic mosaic showing a portion of the Apollo 15 Hadley-Apennine landing site with a field of view from about south by southwest to about north by northwest. The photographs were taken from the windows of the Lunar Module (LM) which was resting on the lunar surface facing west. Note bootprints and tracks of the Lunar Roving Vehicle (LRV) in the foreground. Visible on the horizon from left to right are: Hadley Delta Mountain and St. George Crater; Bennett Hill; and Hill 305, with the ALSEP equipment deployed in front of it.",
"note": "NASA SP-4029 lists September 30, 1977 as Apollo 15 ALSEP commanded-off date. This earlier 1971 window mosaic shows tracks and the deployed station in the distance, not a photograph of shutdown. No exact final radio packet is reconstructed.",
"narration": "Years after the crew left, NASA commanded this ALSEP station off. No astronaut came to pack it away.",
"kind": "silence"
},
{
"art": "a15-mirror.jpg",
"title": "From above, the pieces were still there.",
"date": "LRO IMAGE / PUBLISHED 2010",
"credit": "NASA/GSFC/Arizona State University \u00b7PIA13037",
"source": "https://science.nasa.gov/photojournal/the-apollo-15-lunar-laser-ranging-retroreflector-a-fundamental-point-on-the-moon/",
"alt": "The Apollo 15 Lunar Laser Ranging Retroreflector - A Fundamental Point on the Moon",
"note": "PIA13037 is calibrated LRO imagery, with labels and circled reflector site preserved. NASA described working laser-ranging in this 2010 release, not as live 2026 telemetry. The reflector is passive; ALSEP shutdown does not describe every object at the site.",
"narration": "LRO later saw the stage, rover and reflector. The reflector had a different job: returning laser light.",
"kind": "data"
}
]
};
films['apollo-16-surface']={
"title": "THE LABORATORY\nWITH ONE BROKEN CABLE.",
"subtitle": "A rover, a listener and a plan that had to change.",
"scenes": [
{
"art": "a16-land.jpg",
"title": "A window onto the highlands.",
"date": "APR 1972 / DESCARTES",
"credit": "NASA \u00b7as16-113-18298",
"source": "https://www.nasa.gov/history/apollo-16-on-the-moon-at-descartes/",
"alt": "Window view of Descartes shortly after Apollo 16 touchdown",
"narration": "Orion reached the lunar highlands. Young and Duke looked out at a new place to explore.",
"note": "NASA identifies this as a window view shortly after touchdown. It shows terrain, not a photograph of the lander exterior.",
"kind": "arrival"
},
{
"art": "a16-rover.jpg",
"title": "A test drive in lunar dust.",
"date": "APR 1972 / SURFACE EXPLORATION",
"credit": "NASA \u00b7s72-37002",
"source": "https://www.nasa.gov/history/apollo-16-on-the-moon-at-descartes/",
"alt": "NASA film still of Young demonstrating the rover",
"narration": "The crew had a rover again. Young demonstrated how it could drive across the Moon.",
"note": "NASA describes this as a still from the Grand Prix film demonstrating rover driving. It is not a continuous video here or an Apollo15 picture.",
"kind": "still"
},
{
"art": "a16-station.jpg",
"title": "Leave a listener on the ground.",
"date": "APR 1972 / ALSEP DEPLOYED",
"credit": "NASA \u00b7as16-113-18347",
"source": "https://www.nasa.gov/history/apollo-16-on-the-moon-at-descartes/",
"alt": "Passive seismometer in foreground, central station behind, RTG in background",
"narration": "A seismometer listened for ground motion. A central station and generator helped the experiments work.",
"note": "NASA identifies the passive seismic instrument in the foreground, central station behind, and radioisotope thermoelectric generator in the background.",
"kind": "still"
},
{
"art": "a16-heat.jpg",
"title": "One cable changed the plan.",
"date": "APR 1972 / HEAT-FLOW EXPERIMENT LOST",
"credit": "NASA \u00b7as16-113-18367",
"source": "https://www.nasa.gov/history/apollo-16-on-the-moon-at-descartes/",
"alt": "Apollo 16 heat-flow equipment",
"narration": "Young accidentally broke the heat-flow cable. That experiment could not send its planned measurements.",
"note": "NASA mission history records accidental cable disconnection and complete loss of heat-flow data. The photograph documents the equipment, not the instant the cable broke. The other experiments did not all fail with it.",
"kind": "still"
},
{
"art": "a16-magnet.jpg",
"title": "Other instruments kept their jobs.",
"date": "APR 1972 / SURFACE MAGNETOMETER",
"credit": "NASA \u00b7as16-113-18373",
"source": "https://www.nasa.gov/history/apollo-16-on-the-moon-at-descartes/",
"alt": "Lunar surface magnetometer with Young and central station behind",
"narration": "Another instrument studied the lunar magnetic field. One broken experiment was not the whole station.",
"note": "NASA identifies the lunar surface magnetometer, with Young and the central station in the background. No claim of a specific field value or duration is made from the photograph.",
"kind": "still"
},
{
"art": "a16-sky.jpg",
"title": "A telescope in the shade.",
"date": "APR 1972 / ULTRAVIOLET CAMERA",
"credit": "NASA \u00b7as16-114-18439",
"source": "https://www.nasa.gov/history/apollo-16-on-the-moon-at-descartes/",
"alt": "Ultraviolet camera in Orion shadow, with Young and rover behind",
"narration": "Beside Orion, a special camera looked at ultraviolet light that human eyes cannot see.",
"note": "NASA identifies the far-ultraviolet camera/spectrograph in the shadow of Orion, with Young and the rover behind. This is separate equipment, not part of the heat-flow experiment.",
"kind": "still"
},
{
"art": "a16-memory.jpg",
"title": "A personal memory, too.",
"date": "APR 1972 / A HUMAN KEEPSAKE",
"credit": "NASA \u00b7as16-114-18423 \u00b7Duke at work, not family photo",
"source": "https://www.nasa.gov/former-astronaut-charles-m-duke-jr/",
"alt": "Duke working at Plum Crater, rover behind",
"narration": "Duke also left a family picture on the Moon. Machines were not the only things the crew left behind.",
"note": "NASA biography documents the family picture and inscription. This scene uses a NASA photograph of Duke working at Plum Crater, not the family portrait itself. No new family image or likeness is generated.",
"kind": "still"
},
{
"art": "a16-departure.jpg",
"title": "The camera watched them go.",
"date": "23 APR 1972 / LUNAR LIFTOFF",
"credit": "NASA \u00b7S72-35614",
"source": "https://images-assets.nasa.gov/image/S72-35614/collection.json",
"alt": "S72-35614 (23 April 1972) --- The Apollo 16 Lunar Module \"Orion\" ascent stage makes its liftoff from the lunar surface in this reproduction taken from a color television transmission made by the RCA color TV camera mounted on the Lunar Roving Vehicle (LRV). Remotely controlled from NASA's Mission Control Center (MCC) in Houston, the LRV-mounted camera made it possible for persons on Earth to watch the LM's launch from the moon. Liftoff occurred at 175:44 ground elapsed time, 7:26 p.m. (CST), April 23, 1972. The \"Orion\" ascent stage, with astronauts John W. Young and Charles M. Duke Jr. aboard, returned from the lunar surface to rejoin the Command and Service Modules (CSM) orbiting the moon. Astronaut Thomas K. (Ken) Mattingly II remained with the CSM in lunar orbit while Young and Duke descended in the LM to explore the Descartes landing site. The LM descent stage is used as a launching platform and remains behind on the moon.",
"narration": "Orion top half lifted the crew away. The rover camera watched from its final parking place.",
"note": "NASA S72-35614 is a reproduction from the rover television transmission showing Orion ascent-stage liftoff. Surface equipment and the descent stage stayed behind.",
"kind": "departure"
},
{
"art": "a16-end.jpg",
"title": "The station was switched off.",
"date": "30 SEP 1977 / ALSEP COMMANDED OFF",
"credit": "NASA \u00b7earlier 1972 pre-departure view",
"source": "https://www.nasa.gov/wp-content/uploads/2023/04/sp-4029.pdf",
"alt": "Orion seen from final rover position before crew departure",
"narration": "The surviving ALSEP work continued after the crew left. NASA commanded the station off in 1977.",
"note": "NASA SP-4029 lists September 30, 1977 as the Apollo 16 ALSEP commanded-off date. This earlier 1972 photograph is a view of Orion from the final rover position before departure, not shutdown footage or proof the heat-flow experiment worked. No exact last packet is invented.",
"kind": "silence"
}
]
};
films['apollo-17-surface']={
"title": "THE LAST APOLLO\nSURFACE LABORATORY.",
"subtitle": "The valley crew went home. Their instruments stayed.",
"scenes": [
{
"art": "a17s-orbit.jpg",
"title": "Challenger heads for the valley.",
"date": "11 DEC 1972 / BEFORE DESCENT",
"credit": "NASA \u00b7as17-151-23203",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "Challenger in lunar orbit after undocking",
"narration": "Cernan and Schmitt flew Challenger toward Taurus-Littrow, a valley between lunar mountains.",
"note": "This NASA photograph shows Challenger after undocking in lunar orbit. It is not the surface landing. Apollo17 was the final lunar landing mission of the Apollo program.",
"kind": "arrival"
},
{
"art": "a17s-land.jpg",
"title": "A view from their new home.",
"date": "DEC 1972 / AFTER LANDING",
"credit": "NASA \u00b7as17-147-22481",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "View from Challenger left window after landing",
"narration": "The astronauts looked through a window at the valley floor. Their scientific work could begin.",
"note": "This is a view from Challenger left-side window after touchdown. It documents the landscape, not an exterior image of the lander.",
"kind": "still"
},
{
"art": "a17s-station.jpg",
"title": "Unpack a laboratory for the Moon.",
"date": "DEC 1972 / ALSEP DEPLOYMENT",
"credit": "NASA \u00b7as17-147-22549hr",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "An overall view of the Apollo17 ALSEP site",
"narration": "The crew carried a central station, power unit and instruments away from Challenger.",
"note": "NASA describes Schmitt carrying the instruments in a barbell configuration and both astronauts deploying the station and power unit. This overview is a genuine surface photograph. The rover has its own separate story.",
"kind": "still"
},
{
"art": "a17s-heat.jpg",
"title": "Measure warmth beneath the dust.",
"date": "DEC 1972 / HEAT-FLOW PROBES",
"credit": "NASA \u00b7heat-flow probe schematic",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "NASA schematic of a heat-flow probe, not a lunar photograph",
"narration": "Cernan drilled holes for probes that studied heat moving through the lunar ground.",
"note": "NASA mission history documents the drilling. The illustration is a NASA probe schematic, not a photograph inside the Moon. Numerical heat-flow values from the provisional outline are omitted.",
"kind": "data"
},
{
"art": "a17s-lace.jpg",
"title": "A whisper-thin atmosphere.",
"date": "DEC 1972 / LACE INSTRUMENT",
"credit": "NASA \u00b7preflight instrument photograph",
"source": "https://ntrs.nasa.gov/citations/19740010334",
"alt": "Lunar Atmospheric Composition Experiment before flight",
"narration": "LACE studied the gases close to the lunar surface. The Moon atmosphere is extremely thin.",
"note": "NASA reports this mass spectrometer deployed at Taurus-Littrow, with initial activation on December27,1972 during lunar night. This is a preflight instrument photograph, not lunar deployment footage. NASA LADEE history later documents argon-40 observations, but this image is not a current gas measurement.",
"kind": "still"
},
{
"art": "a17s-dust.jpg",
"title": "Watch for tiny visitors.",
"date": "DEC 1972 / EJECTA AND METEORITES",
"credit": "NASA \u00b7as17-134-20500hr",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-astronauts-prepare-for-lunar-science/",
"alt": "Lunar Ejecta and Meteorite experiment with other ALSEP components",
"narration": "Another instrument was built to detect tiny particles arriving from space or kicked off the surface.",
"note": "NASA describes LEAM as studying primary particle impacts and lunar ejecta. The foreground instrument is LEAM, with other ALSEP equipment behind it. It is not a dust-storm photograph.",
"kind": "still"
},
{
"art": "a17s-seismic.jpg",
"title": "Listen after a planned jolt.",
"date": "1972 / SEISMIC PROFILING EQUIPMENT",
"credit": "NASA \u00b7preflight instrument photograph",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-astronauts-prepare-for-lunar-science/",
"alt": "Lunar Seismic Profiling Experiment components before flight",
"narration": "A seismic experiment used sensors and planned explosive charges to learn about the ground.",
"note": "NASA describes the Lunar Seismic Profiling Experiment, its geophones and charges deployed along traverses. This preflight photograph shows components, not an explosion, actual seismic waveform or passive Apollo11 seismometer.",
"kind": "still"
},
{
"art": "a17s-core.jpg",
"title": "A sample from below.",
"date": "DEC 1972 / CORE-SAMPLE SITE",
"credit": "NASA \u00b7as17-136-20720",
"source": "https://www.nasa.gov/history/50-years-ago-apollo-17-lands-at-taurus-littrow/",
"alt": "Deep-core sampling site on the lunar surface",
"narration": "The crew also drilled a deep core sample. Some science came home; the station stayed behind.",
"note": "NASA identifies the photograph as the deep-core sample site and describes the crew carrying core samples back toward the lander. Sampling equipment is distinct from the heat-flow probes.",
"kind": "still"
},
{
"art": "a17s-end.jpg",
"title": "The station signed off.",
"date": "30 SEP 1977 / ALSEP COMMANDED OFF",
"credit": "NASA \u00b7earlier 1972 before-departure photo",
"source": "https://www.nasa.gov/wp-content/uploads/2023/04/sp-4029.pdf",
"alt": "Earth over Challenger before departure",
"narration": "The crew left in 1972. The station kept a longer watch, until NASA commanded it off in 1977.",
"note": "NASA SP-4029 lists Apollo17 ALSEP commanded off September 30,1977. This earlier1972 image shows Earth over Challenger before departure, not the shutdown. The descent stage remained when the ascent stage left. No exact final words or packet are reconstructed.",
"kind": "silence"
}
]
};
films['lcross']={
"title": "THE CRASH\nTHAT FOUND WATER.",
"subtitle": "A deliberate ending. A hidden lunar answer.",
"scenes": [
{
"art": "lc-launch.jpg",
"title": "One rocket. Two lunar jobs.",
"date": "18 JUN 2009 / LAUNCH",
"credit": "NASA \u00b7Atlas V launch photograph",
"source": "https://www.nasa.gov/history/15-years-ago-lunar-reconnaissance-orbiter-begins-moon-mapping-mission/",
"alt": "Atlas V launches LRO and LCROSS on18June2009",
"narration": "LCROSS launched with LRO. One would map the Moon; the other would end in a planned crash.",
"note": "NASA identifies this launch photograph as the Atlas V carrying LRO and LCROSS. LCROSS later guided the spent Centaur upper stage toward the Moon. LRO has its own active-mission story.",
"kind": "voyage"
},
{
"art": "lc-instruments.jpg",
"title": "Nine ways to look.",
"date": "2009 / SCIENCE PAYLOAD",
"credit": "NASA \u00b7instrument illustration",
"source": "https://www.nasa.gov/history/15-years-ago-lunar-reconnaissance-orbiter-begins-moon-mapping-mission/",
"alt": "NASA diagram showing LCROSS and its scientific instruments",
"narration": "Five cameras, three spectrometers and a photometer would watch a cloud of lunar debris.",
"note": "NASA instrument illustration. Spectrometers separate light to help identify materials. The full image is retained so its labels are not cut off. This is not flight photography or a view inside an operating spacecraft.",
"kind": "data"
},
{
"art": "lc-target.jpg",
"title": "Aim for a dark crater.",
"date": "2009 / CABEUS TARGET",
"credit": "NASA/Goddard SVS \u00b7pre-impact visualization",
"source": "https://svs.gsfc.nasa.gov/3654",
"alt": "Pre-impact NASA visualization of the Cabeus target and viewing geometry, not a photograph",
"narration": "The target was a permanently shadowed part of Cabeus crater near the lunar south pole.",
"note": "NASA/Goddard SVS made this visualization before impact to show terrain and viewing geometry. Colored arcs and labels are a planning overlay, not observed debris or natural lunar colors. No liquid lake is shown.",
"kind": "data"
},
{
"art": "lc-separate.jpg",
"title": "The rocket stage goes first.",
"date": "9 OCT 2009 / SEPARATION",
"credit": "NASA \u00b7artist illustration",
"source": "https://www.nasa.gov/general/what-is-lcross-the-lunar-crater-observation-and-sensing-satellite/",
"alt": "NASA artist illustration of LCROSS separating from the Centaur stage near the Moon",
"narration": "The empty Centaur stage separated. LCROSS followed behind with its instruments ready.",
"note": "NASA artist illustration of separation, not a real photograph of two spacecraft in flight. NASA records separation and two later planned impacts. The observing interval is approximately four minutes, not a fabricated exact countdown.",
"kind": "arrival"
},
{
"art": "lc-before.jpg",
"title": "Send the view home.",
"date": "9 OCT 2009 / BEFORE IMPACT",
"credit": "NASA \u00b7payload power-up Moon image",
"source": "https://www.nasa.gov/blogs/watch-the-skies/2009/10/09/lcross-hits-its-mark/",
"alt": "Moon photographed when the LCROSS payload was powered up before impact",
"narration": "The instruments powered up and began sending views toward a team waiting on Earth.",
"note": "This genuine Moon image is from the payload power-up described in NASA impact-day coverage. It is not a photograph of water or an image of the spacecraft striking the surface.",
"kind": "still"
},
{
"art": "lc-plume.jpg",
"title": "Lift the hidden soil.",
"date": "9 OCT 2009 / AFTER CENTAUR IMPACT",
"credit": "NASA \u00b7visible camera / about 20 seconds after impact",
"source": "https://www.nasa.gov/general/what-is-lcross-the-lunar-crater-observation-and-sensing-satellite/",
"alt": "LCROSS visible-camera image of the ejecta plume about 20 seconds after impact",
"narration": "The first crash threw material upward, where sunlight and instruments could reveal its secrets.",
"note": "NASA identifies this visible-camera image as the ejecta plume about 20 seconds after impact. Its faint markings are real data, not a dramatic explosion added to the photograph. The image is preserved without simulated fire.",
"kind": "data"
},
{
"art": "lc-nir.jpg",
"title": "A final look in infrared.",
"date": "9 OCT 2009 / FINAL APPROACH",
"credit": "NASA \u00b7near-infrared camera image",
"source": "https://www.nasa.gov/general/what-is-lcross-the-lunar-crater-observation-and-sensing-satellite/",
"alt": "Moon surface seen by an LCROSS near-infrared camera",
"narration": "LCROSS studied the debris for approximately four minutes, then struck the Moon too. That ending was planned.",
"note": "NASA identifies this as a near-infrared camera image of the lunar surface. The 2009 release supports approximately four minutes of observation; it gives approximate impact times. No exact last message or final image timestamp is invented.",
"kind": "data"
},
{
"art": "lc-water.jpg",
"title": "The spacecraft ended. The answer arrived.",
"date": "13 NOV 2009 / WATER ANNOUNCEMENT",
"credit": "NASA \u00b7 2010 spectral graph / cropped PDF page 29",
"source": "https://ntrs.nasa.gov/citations/20100036401",
"alt": "Cropped spectral-identification graph from NASA LCROSS2010 presentation PDF page 29; axes and legend preserved",
"narration": "Back on Earth, the data showed water. Looking carefully at light had revealed what darkness hid.",
"note": "NASA announced preliminary water results on November 13, 2009. This cropped graph is from a later 2010 NASA mission presentation, PDF page 29, with its axes and legend preserved. It compares spectral identifications, not a photograph of ice or a current measurement. Numerical water concentration is omitted.",
"kind": "data"
}
]
};
films['ladee']={
"title": "THE MOON\nHAS A WHISPER.",
"subtitle": "A thin atmosphere. Tiny dust. A close look.",
"scenes": [
{
"art": "ld-test.jpg",
"title": "Start with a test on Earth.",
"date": "2008 / HOVER TEST VEHICLE",
"credit": "NASA Ames \u00b7ground test vehicle",
"source": "https://science.nasa.gov/gallery/ladee/",
"alt": "Ground hover-test version of the Modular Common Spacecraft Bus at NASA Ames, 2008",
"narration": "Before a Moon mission, engineers tested a modular spacecraft idea here on Earth.",
"note": "NASA identifies this as a Modular Common Spacecraft Bus hover test vehicle at Ames. It is an early ground test, not the completed LADEE orbiter flying inside a room.",
"kind": "still"
},
{
"art": "ld-launch.jpg",
"title": "A small explorer leaves Virginia.",
"date": "6 SEP 2013 EDT / LAUNCH",
"credit": "NASA/Carla Cioffi \u00b7launch photograph",
"source": "https://science.nasa.gov/mission/ladee/in-depth/",
"alt": "Minotaur V launching LADEE from Wallops at night",
"narration": "A Minotaur V rocket carried LADEE upward from Wallops, bound for the Moon.",
"note": "NASA launch photograph, credited to Carla Cioffi. Launch was September 6 at 11:27 p.m. in Virginia, September 7 at 03:27 UTC. Both dates describe the same launch. LADEE is pronounced laddie.",
"kind": "voyage"
},
{
"art": "ld-orbit.jpg",
"title": "Circle the Moon, close to home.",
"date": "6 OCT 2013 / LUNAR ORBIT",
"credit": "NASA \u00b7artist depiction of lunar approach",
"source": "https://science.nasa.gov/mission/ladee/in-depth/",
"alt": "NASA artist depiction of LADEE approaching lunar orbit",
"narration": "After a month of looping outward from Earth, LADEE entered lunar orbit.",
"note": "NASA mission history records the October 6 lunar orbit insertion. This artist depiction shows an approach to lunar orbit, not a real photograph or an exact path-to-scale animation.",
"kind": "arrival"
},
{
"art": "ld-laser.jpg",
"title": "Say it with light.",
"date": "2013-2014 / LASER COMMUNICATIONS",
"credit": "NASA \u00b7LLCD artwork / illustrative beam",
"source": "https://www.nasa.gov/mission/lunar-laser-communications-demonstration-llcd/",
"alt": "NASA LLCD artwork showing an illustrative optical link between the Moon and Earth",
"narration": "A laser experiment sent data between the Moon and Earth. Light could carry the message.",
"note": "NASA LLCD artwork, not a photograph of a visible beam in space. The dedicated demonstration reached downlinks up to 622 megabits per second. This is historical technology evidence, not a current speed promise.",
"kind": "data"
},
{
"art": "ld-built.jpg",
"title": "Give the thin air a closer look.",
"date": "2013-2014 / SCIENCE INSTRUMENTS",
"credit": "NASA Ames \u00b7earlier preflight hardware photo",
"source": "https://science.nasa.gov/mission/ladee/in-depth/",
"alt": "Technicians preparing LADEE hardware in a clean room before flight",
"narration": "LADEE used instruments to study gases, light and dust around the Moon. Its atmosphere is called an exosphere.",
"note": "This is an actual preflight hardware preparation photograph, not an interior view in lunar orbit. The flight carried a neutral mass spectrometer, ultraviolet/visible spectrometer and Lunar Dust Experiment. The picture alone does not show gas measurements.",
"kind": "still"
},
{
"art": "ld-science.jpg",
"title": "Tiny dust. A big question.",
"date": "2013-2014 / LUNAR SCIENCE",
"credit": "NASA \u00b7artist concept / not dust footage",
"source": "https://science.nasa.gov/mission/ladee/in-depth/",
"alt": "NASA artist concept of LADEE above the Moon, not a dust photograph",
"narration": "LADEE recorded tiny dust impacts and identified argon in the extremely thin lunar atmosphere.",
"note": "NASA reports LDEX recorded more than 11,000 dust-particle impacts, and NMS identified argon-40. This orbiting-spacecraft picture is an artist concept, not a photograph of individual grains or a visible lunar atmosphere. No dust storm is invented.",
"kind": "still"
},
{
"art": "ld-lower.jpg",
"title": "One last, low flight.",
"date": "APR 2014 / FINAL ORBITS",
"credit": "NASA \u00b7artist concept of maneuvering / not final footage",
"source": "https://www.nasa.gov/news-release/nasa-completes-ladee-mission-with-planned-impact-on-moons-surface/",
"alt": "NASA artist concept of LADEE firing maneuvering thrusters",
"narration": "The team lowered the orbit for more science, then let the mission end in a planned impact.",
"note": "NASA mission closure confirms an intentional lunar impact on April 18 UTC, after final low-altitude science. This earlier artist concept shows maneuvering thrusters, not actual final-orbit footage or the impact itself. Exact final words and impact seconds are not reconstructed.",
"kind": "silence"
},
{
"art": "ld-crater.jpg",
"title": "Another explorer found the mark.",
"date": "28 OCT 2014 / CRATER REPORT",
"credit": "NASA/Goddard/Arizona State University \u00b7LRO ratio image",
"source": "https://www.nasa.gov/solar-system/nasas-lro-spacecraft-captures-images-of-ladees-impact-crater/",
"alt": "Processed LRO before-after ratio image marking LADEE impact changes, with a200meter scale bar",
"narration": "LRO later found the new crater. LADEE was gone, but its data and a tiny surface scar remained.",
"note": "NASA reports the impact near the eastern rim of Sundman V on the far side. This ratio image compares LRO before/after images to reveal changes. It is a processed data product, not the flash of impact or natural lunar contrast. The scale bar is preserved.",
"kind": "data"
}
]
};
films['grail']={
"title": "LUNAR TWINS.\nONE HIDDEN MOON.",
"subtitle": "Ebb and Flow followed the pull of gravity.",
"scenes": [
{
"art": "gr-build.jpg",
"title": "Build a pair of lunar detectives.",
"date": "2010 / FUEL-TANK FIT CHECK",
"credit": "NASA/JPL-Caltech \u00b7ground assembly photograph",
"source": "https://www.jpl.nasa.gov/news/grail-spacecraft-takes-shape/",
"alt": "Engineers checking the fit of a GRAIL spacecraft fuel tank in2010",
"narration": "Two small spacecraft would help scientists look beneath the Moon without drilling into it.",
"note": "NASA/JPL identifies this photograph as a fuel-tank fit check on one GRAIL spacecraft in June 2010. Engineers were checking manufactured parts before integration. It is not a Moon photograph or an image of both completed probes.",
"kind": "still"
},
{
"art": "gr-together.jpg",
"title": "Travel together. Explore as twins.",
"date": "AUG 2011 / LAUNCH PREPARATION",
"credit": "NASA/JPL-Caltech/KSC \u00b7launch preparation",
"source": "https://science.nasa.gov/photojournal/grail-mission-comes-together/",
"alt": "Twin GRAIL probes wrapped for protection being lowered onto the rocket second stage",
"narration": "Ebb and Flow rode the same rocket toward the Moon. Each would later fly its own orbit.",
"note": "NASA identifies the wrapped twin probes being lowered onto the Delta II second stage. The photograph is launch preparation, not liftoff. They launched on September 10, 2011. Students chose the names Ebb and Flow through a national contest.",
"kind": "still"
},
{
"art": "gr-tandem.jpg",
"title": "Measure a tiny tug.",
"date": "2012 / FORMATION FLYING",
"credit": "NASA/JPL-Caltech \u00b7artist illustration",
"source": "https://science.nasa.gov/mission/grail/",
"alt": "NASA illustration of two GRAIL spacecraft mapping lunar gravity",
"narration": "As gravity changed, the distance between the twins changed slightly. Radio signals measured the difference.",
"note": "NASA illustration, not flight photography. The Moon pulls unevenly because mass is not distributed evenly. GRAIL measured changes in relative motion to map the gravity field. The illustration is not a scale drawing or a visible picture through the crust.",
"kind": "data"
},
{
"art": "gr-moonkam.jpg",
"title": "Let students choose the view.",
"date": "MAR 2012 / MOONKAM",
"credit": "NASA/JPL-Caltech/MIT/SRS \u00b7MoonKAM image",
"source": "https://www.jpl.nasa.gov/news/nasa-grail-returns-first-student-selected-moon-images/",
"alt": "MoonKAM image of lunar farside terrain with distant Earth, requested by students in March 2012",
"narration": "Students asked the spacecraft to photograph places on the Moon. A classroom could reach another world.",
"note": "This genuine MoonKAM image from Ebb shows far-side terrain and Earth in the background. NASA/JPL describes the first student-requested images in March 2012. MoonKAM was an education program led by Sally Ride and her team. The students did not remotely pilot the spacecraft.",
"kind": "still"
},
{
"art": "gr-gravity.jpg",
"title": "A new kind of Moon map.",
"date": "MAR-MAY 2012 / GRAVITY DATA",
"credit": "NASA/JPL-Caltech/MIT/GSFC \u00b7gravity map",
"source": "https://www.nasa.gov/image-article/grails-gravity-map-of-moon/",
"alt": "False-color GRAIL gravity map from March-May2012, not natural lunar colors",
"narration": "The new map revealed where the pull of gravity was stronger and weaker. Hidden mass left a clue.",
"note": "NASA data product from the primary mapping mission. Red corresponds to mass excesses; blue to mass deficiencies. These are gravity variations, not the natural colors or temperatures of the Moon, and not a photograph of liquid below the crust. The colors are preserved.",
"kind": "data"
},
{
"art": "gr-final.jpg",
"title": "An ending chosen by the team.",
"date": "17 DEC 2012 / PLANNED IMPACTS",
"credit": "NASA/JPL-Caltech \u00b7cropped path illustration",
"source": "https://www.jpl.nasa.gov/news/nasas-grail-lunar-impact-site-named-for-astronaut-sally-ride/",
"alt": "Diagram of the planned final GRAIL flight paths, not a photograph of impact",
"narration": "With their science done and fuel running low, the twins were sent into a mountain near the north pole.",
"note": "Cropped NASA/JPL final-flight-path illustration. This is a planning visualization, not recorded impact footage. NASA sources give differing exact impact intervals and times, so this story keeps the supported date and order without a second-by-second reconstruction.",
"kind": "data"
},
{
"art": "gr-scars.jpg",
"title": "Two tiny marks remain.",
"date": "LRO FOLLOW-UP / BEFORE AND AFTER",
"credit": "NASA/GSFC/Arizona State University \u00b7LRO comparison",
"source": "https://science.nasa.gov/resource/grail-impact-sites/",
"alt": "LRO before-and-after views of both GRAIL impact sites",
"narration": "Another spacecraft found the impact marks of the twins. Their journey had left a small trace on the Moon.",
"note": "NASA/GSFC/Arizona State University LRO before-and-after comparison. Labels and scale bars are retained. Dark ejecta is documented; its cause is not known for sure, so no definitive cause is asserted. No intact spacecraft is shown in these tiny craters.",
"kind": "data"
},
{
"art": "gr-team.jpg",
"title": "A name for the impact site.",
"date": "17 DEC 2012 / A MISSION REMEMBERED",
"credit": "NASA/JPL-Caltech \u00b7Maria Zuber and Bear Ride",
"source": "https://www.jpl.nasa.gov/news/nasas-grail-lunar-impact-site-named-for-astronaut-sally-ride/",
"alt": "Maria Zuber and Bear Ride after the twin GRAIL mission ended",
"narration": "NASA named the impact site for Sally Ride, who helped students become part of this adventure.",
"note": "NASA/JPL mission-close photograph shows principal investigator Maria Zuber at left and Bear Ride, the sister of Sally Ride, at right. This is not a photograph of Sally Ride. The naming honors her role in MoonKAM. No invented final radio message is supplied.",
"kind": "still"
}
]
};
films['viking-1']={
"title": "THE FIRST\nLONG LOOK FROM MARS.",
"subtitle": "A laboratory that made another planet feel real.",
"scenes": [
{
"art": "v1-drawing.jpg",
"title": "A laboratory with three feet.",
"date": "1970S / LANDER DESIGN",
"credit": "NASA \u00b7labelled lander drawing",
"source": "https://science.nasa.gov/mission/viking-1/",
"alt": "NASA labelled line drawing of Viking lander instruments",
"narration": "Viking 1 was built to photograph, scoop soil and study the weather on Mars.",
"note": "NASA labelled engineering illustration, not a photograph on Mars. Each Viking mission combined an orbiter and lander. The lander had cameras, a sampling arm, weather instruments and laboratory experiments. No real interior or exact engineering dimensions are reconstructed.",
"kind": "data"
},
{
"art": "v1-launch.jpg",
"title": "Begin a long trip to Mars.",
"date": "20 AUG 1975 / LAUNCH",
"credit": "NASA \u00b7Viking 1 launch photograph",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "Viking 1 launching on20August1975",
"narration": "A Titan-Centaur rocket carried Viking 1 away from Earth. The journey would take nearly a year.",
"note": "NASA identifies this as the Viking 1 launch, not Viking 2. Viking 1 reached Mars orbit in June 1976. Orbital photographs showed the first landing area was too rough, so the team chose a safer place before descent.",
"kind": "voyage"
},
{
"art": "v1-first.jpg",
"title": "The first look from the ground.",
"date": "20 JUL 1976 / AFTER TOUCHDOWN",
"credit": "NASA/JPL \u00b7first Viking 1 surface photograph",
"source": "https://science.nasa.gov/resource/first-photograph-taken-on-mars-surface-2/",
"alt": "First Viking 1 surface photograph with rocks and a lander footpad",
"narration": "The lander reached Chryse Planitia safely. Its first picture showed rocks, dust and one of its feet.",
"note": "This is the actual first Viking 1 surface photograph. NASA describes the footpad and nearby rocks. Viking 1 made the first long-lasting successful Mars landing; the earlier Soviet Mars 3 briefly survived touchdown in 1971, so this story does not claim no machine had ever reached Mars.",
"kind": "data"
},
{
"art": "v1-color.jpg",
"title": "A rocky world in color.",
"date": "21 JUL 1976 / FIRST COLOR VIEW",
"credit": "NASA/JPL \u00b7first Viking 1 color image",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "First Viking 1 color photograph showing rocks and a dusty landscape",
"narration": "The next day brought a color view of the dusty ground. Earth could see a new place more clearly.",
"note": "NASA Viking resources dates this first color picture to July 21, 1976. Color is an image product, not a promise of exactly what a human eye would see. This is Viking 1, not the rockier Viking 2 landing site.",
"kind": "still"
},
{
"art": "v1-soil.jpg",
"title": "Scoop a little Mars.",
"date": "SURFACE MISSION / SOIL SAMPLING",
"credit": "NASA/JPL \u00b7Viking 1 sampler trenches",
"source": "https://nssdc.gsfc.nasa.gov/imgcat/html/object_page/vl1_11d128.html",
"alt": "Trenches dug by the Viking sampler arm in the Martian soil",
"narration": "A robot arm dug and delivered soil to experiments. Could this place hold clues to life?",
"note": "NASA mission history records sampling beginning in July 1976. The trenches are from the Viking 1 sampler at Sandy Flats per the NASA image catalog. The biology experiments produced no definitive evidence of life. A scoop mark is not proof of organisms.",
"kind": "still"
},
{
"art": "v1-dawn.jpg",
"title": "Watch a different morning.",
"date": "SURFACE MISSION / WEATHER AND SKY",
"credit": "NASA/JPL \u00b7Viking 1 sunrise view",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "Martian sky at sunrise photographed by Viking 1",
"narration": "The lander kept watching temperature, pressure and wind as Martian days came and went.",
"note": "NASA history identifies this as a Viking 1 sunrise view. The weather package measured the environment, but the picture itself is not a thermometer or live forecast. Viking 1 later sent daily and then weekly weather reports.",
"kind": "still"
},
{
"art": "v1-orbiter.jpg",
"title": "Its partner looked from above.",
"date": "MISSION ERA / ORBITER IMAGE",
"credit": "NASA/JPL \u00b7Viking 1 ORBITER image",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "Valles Marineris photographed by the Viking 1 orbiter, not the surface lander",
"narration": "Above the lander, the orbiter explored a much bigger world of valleys and moons.",
"note": "NASA history identifies Valles Marineris in this image from the Viking 1 orbiter. It is not a horizon seen from the lander. Orbiter and lander had separate hardware and different operational endings. The orbiter ended operations in 1980.",
"kind": "still"
},
{
"art": "v1-sunset.jpg",
"title": "Years later, the radio went quiet.",
"date": "11 NOV 1982 / CONTACT ENDS",
"credit": "NASA/JPL \u00b7earlier 1976 near-sunset photo",
"source": "https://science.nasa.gov/mission/viking-1/",
"alt": "Viking 1 view of Martian surface shortly before sunset, with a lander leg",
"narration": "The lander worked for more than six years. A faulty command interrupted contact, and it never answered again.",
"note": "NASA mission record and history give November 11, 1982 for the lander ending. This earlier sunset photograph shows the surface in 1976, not the moment contact ended. NASA says recovery attempts failed. No exact last words, sound or final packet is invented.",
"kind": "silence"
},
{
"art": "v1-mro.jpg",
"title": "A later visitor found its home.",
"date": "2006 / ORBITAL FOLLOW-UP",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7MRO image",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "MRO image identifying Viking 1 lander at its landing site in2006",
"narration": "Decades later, MRO photographed the old landing site. The quiet explorer was still there.",
"note": "NASA history identifies this December 2006 Mars Reconnaissance Orbiter image of the Viking 1 lander. It is a later overhead observation, not a new photograph sent by Viking 1. The lander occupies only a few pixels; this is not an intact-hardware close-up.",
"kind": "data"
}
]
};
films['viking-2']={
"title": "A SECOND HOME\nON A ROCKY WORLD.",
"subtitle": "A stationary explorer watched Utopia Planitia change.",
"scenes": [
{
"art": "v2-launch.jpg",
"title": "A second laboratory sets out.",
"date": "9 SEP 1975 / LAUNCH",
"credit": "NASA \u00b7Viking 2 launch photograph",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "Viking 2 launch on9September1975",
"narration": "Viking 2 followed its twin toward Mars. It would explore a different part of the planet.",
"note": "NASA photograph of the Viking 2 launch, not Viking 1. Each mission paired a lander with an orbiter. This story follows the stationary lander; its twin has a separate story.",
"kind": "voyage"
},
{
"art": "v2-first.jpg",
"title": "Rocks at a new address.",
"date": "3 SEP 1976 / UTOPIA PLANITIA",
"credit": "NASA/JPL \u00b7first Viking 2 surface photograph",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "First Viking 2 surface photograph including a footpad",
"narration": "The lander reached a plain scattered with rocks. Its first picture included one of its own feet.",
"note": "NASA history identifies the first Viking 2 surface photograph. The image is not from Viking 1 or a moving rover. The lander was tilted slightly after touchdown, but the rock-strewn ground was still within reach of its instruments.",
"kind": "data"
},
{
"art": "v2-color.jpg",
"title": "Another view of the red planet.",
"date": "1976 / FIRST COLOR VIEW",
"credit": "NASA/JPL \u00b7first Viking 2 color image",
"source": "https://www.nasa.gov/history/45-years-ago-viking-1-touches-down-on-mars/",
"alt": "First Viking 2 color view across Utopia Planitia",
"narration": "A color picture showed how rocky the new neighborhood was. The horizon looked tilted.",
"note": "The first Viking 2 color image. NASA describes the apparent horizon tilt as a result of the tilted spacecraft, not a steeply sloping plain. Color is an imaging product rather than a guarantee of human-eye appearance.",
"kind": "still"
},
{
"art": "v2-trench.jpg",
"title": "Dig a little deeper.",
"date": "SEP 1976 / SOIL SAMPLING",
"credit": "NASA/JPL \u00b7sampler trench in shadow",
"source": "https://www.jpl.nasa.gov/images/pia00526-trench-left-by-sampler-scoop/",
"alt": "Trench left by Viking 2 sampler scoop in a rock shadow",
"narration": "The sampler arm dug a trench and delivered soil to the biology experiment.",
"note": "NASA/JPL identifies this trench from sampling on September 12, 1976. It lies in shadow and is difficult to see. The mission biology results were inconclusive, not proof of life. The image does not show living organisms or laboratory reactions.",
"kind": "data"
},
{
"art": "v2-rock.jpg",
"title": "Move a rock called Mister Badger.",
"date": "SURFACE MISSION / ROBOT ARM",
"credit": "NASA/JPL \u00b7before-and-after rock-push images",
"source": "https://www.jpl.nasa.gov/images/pia00528-mister-badger-pushing-mars-rock/",
"alt": "Viking 2 before-and-after views of rock called Mister Badger moved by sampler arm",
"narration": "The arm pushed a rock aside so the team could investigate soil that had been sheltered underneath.",
"note": "NASA/JPL before-and-after images document the rock push. The source contains a weekday/year conflict, so no exact date is printed here. Mister Badger is a flight-team nickname for a rock, not an animal found on Mars.",
"kind": "data"
},
{
"art": "v2-frost.jpg",
"title": "A cold world leaves a clue.",
"date": "18 MAY 1979 / FROST RETURNS",
"credit": "NASA/JPL \u00b7PIA00571 / thin frost on rocks and soil",
"source": "https://www.jpl.nasa.gov/images/pia00571-ice-on-mars-utopia-planitia-again/",
"alt": "Thin pale frost between dark rocks in a wider Viking 2 surface image, 18 May 1979",
"narration": "Pale frost coated patches of ground between dark rocks. Mars had changing seasons too.",
"note": "NASA/JPL PIA00571, photographed May 18, 1979 and relayed by Viking Orbiter 1 on June 7. Pale ground between the dark rocks is the thin frost described in the original caption. No dramatic snowfield or confirmed formation mechanism is invented. The full frame is retained, including foreground hardware.",
"kind": "data"
},
{
"art": "v2-dawn.jpg",
"title": "Its watch lasted for years.",
"date": "12 APR 1980 / LANDER MISSION ENDS",
"credit": "NASA/JPL/LaRC \u00b7earlier 1978 sunrise / camera artifacts",
"source": "https://science.nasa.gov/mission/viking-2/",
"alt": "Viking 2 sunrise on14June1978; bands and bright glow include camera artifacts",
"narration": "Long after its first pictures, the lander kept reporting. Its mission finally ended in 1980.",
"note": "NASA mission record gives April 12, 1980 for the lander ending. This earlier sunrise image was taken June 14, 1978. Bright bands and color separation are camera artifacts described by NASA, not glowing atmospheric layers. No final words or exact final packet are invented.",
"kind": "data"
},
{
"art": "v2-mro.jpg",
"title": "Found again from the sky.",
"date": "2006 / MRO FOLLOW-UP",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7MRO lander cutout",
"source": "https://science.nasa.gov/photojournal/viking-lander-2-gerald-a-soffen-memorial-station-imaged-from-orbit/",
"alt": "MRO HiRISE cutout showing the small Viking 2 lander feature, 2006",
"narration": "MRO later photographed the quiet lander. A small dot connected new maps with old discoveries.",
"note": "NASA/JPL-Caltech/University of Arizona lander cutout from PIA01882. The small dark feature is shown without adding invented detail. NASA confirmed the lander location; the heat shield and backshell locations in the wider scene were only likely identifications. This cutout does not claim all landing hardware is confirmed.",
"kind": "data"
}
]
};
films['pathfinder']={
"title": "SMALL WHEELS.\nA NEW WAY TO EXPLORE.",
"subtitle": "Pathfinder and Sojourner opened the rover era on Mars.",
"scenes": [
{
"art": "pf-test.jpg",
"title": "First, test a giant cushion.",
"date": "BEFORE LAUNCH / EARTH TEST",
"credit": "NASA \u00b7Earth airbag test",
"source": "https://science.nasa.gov/mission/mars-pathfinder/",
"alt": "Engineers beside large Pathfinder airbags during an Earth test",
"narration": "How do you land gently on a rocky planet? Engineers tested huge airbags before sending a real spacecraft.",
"note": "This is an Earth airbag test photograph, not a photograph of the Mars landing. The airbag landing used a parachute and an inflatable protective system. No imaginary landing footage is shown.",
"kind": "still"
},
{
"art": "pf-launch.jpg",
"title": "A little rover takes a big ride.",
"date": "4 DEC 1996 / LAUNCH",
"credit": "NASA/JPL \u00b7PIA04754 / Delta launch",
"source": "https://science.nasa.gov/photojournal/delta-rocket-launch-carrying-mars-pathfinder/",
"alt": "Mars Pathfinder launching on a Delta rocket in December 1996",
"narration": "Pathfinder carried a small rover named Sojourner. Together they would try a new way to explore Mars.",
"note": "NASA/JPL launch photograph PIA04754. The exact launch minute is omitted because NASA captions differ. The calendar date agrees with the mission record.",
"kind": "voyage"
},
{
"art": "pf-open.jpg",
"title": "The bags flatten. The petals open.",
"date": "4 JUL 1997 / LANDED",
"credit": "NASA/JPL/University of Arizona \u00b7sol1 camera mosaic",
"source": "https://www.jpl.nasa.gov/images/pia00621-color-mosaic-of-rover-terrain/",
"alt": "Pathfinder camera mosaic of stowed Sojourner and deflated airbags on Mars, 4 July 1997",
"narration": "After bouncing to a stop, Pathfinder opened. Sojourner waited on a petal above the deflated airbags.",
"note": "Real lander-camera mosaic PIA00621 from sol 1, corrected for parallax. Sojourner is still stowed and its ramps are not yet unfurled. This is not a computer illustration or a picture of the airbag bounce.",
"kind": "data"
},
{
"art": "pf-drive.jpg",
"title": "Six wheels touch a new world.",
"date": "5 JUL 1997 / ROVER DEPLOYMENT",
"credit": "NASA/JPL \u00b7PIA01551 / eight-image mosaic",
"source": "https://science.nasa.gov/mission/mars-pathfinder/",
"alt": "Newly deployed Sojourner rover in a lander-camera mosaic",
"narration": "Sojourner rolled down a ramp. For the first time, a robot rover was exploring the surface of Mars.",
"note": "NASA mission page identifies the newly deployed rover in the sol 2 insurance panorama. This mosaic combines eight images. Sojourner is a small six-wheeled rover, not one of the larger later Mars rovers.",
"kind": "data"
},
{
"art": "pf-yogi.jpg",
"title": "A rock gets a checkup.",
"date": "SOLS 8-10 / ROCK YOGI",
"credit": "NASA/JPL \u00b7PIA00766 / Yogi close view",
"source": "https://science.nasa.gov/resource/sojourner-yogi/",
"alt": "Sojourner placing its spectrometer against rock Yogi",
"narration": "The rover placed an instrument against a rock called Yogi. It could measure what the rock was made of.",
"note": "The Alpha Proton X-Ray Spectrometer measured elemental composition. This close view combines lander images from sols 8, 9 and 10; background distortion comes from parallax. Yogi is a nickname for a rock, not a Martian animal.",
"kind": "still"
},
{
"art": "pf-spectrum.jpg",
"title": "More colors. More clues.",
"date": "1997 / BARNACLE BILL",
"credit": "NASA/JPL/Johns Hopkins University \u00b7spectral map",
"source": "https://science.nasa.gov/resource/high-spectral-resolution-image-of-barnacle-bill/",
"alt": "False-color spectral map of Barnacle Bill with blue and red regions",
"narration": "Special filters helped scientists study another rock. The colors in this science map mark differences, not a rainbow painted on Mars.",
"note": "PIA00762 is a spectral analysis graphic. Blue marks the relatively dark measured region, while red marks soil in surface pits. These are mapped science colors, not natural-looking rock colors. The original graphic labels are retained without recoloring.",
"kind": "data"
},
{
"art": "pf-home.jpg",
"title": "Look back at the home base.",
"date": "SOL 39 / ROVER CAMERA",
"credit": "NASA/JPL \u00b7lander photographed by Sojourner",
"source": "https://www.nasa.gov/history/25-years-ago-mars-pathfinder-launches-to-mars-to-deploy-sojourner-the-first-planetary-rover/",
"alt": "Pathfinder lander photographed by Sojourner on sol 39",
"narration": "Sojourner photographed Pathfinder from the ground. The lander was its link to Earth.",
"note": "NASA history identifies this as a sol 39 rover view. Sojourner could communicate with the lander, not directly with Earth, as NASA/JPL explained in the later MRO follow-up.",
"kind": "data"
},
{
"art": "pf-clouds.jpg",
"title": "Mars has morning clouds too.",
"date": "SOL 39 / WEATHER WATCH",
"credit": "NASA/JPL \u00b7sol 39 cloud image",
"source": "https://www.nasa.gov/history/25-years-ago-mars-pathfinder-launches-to-mars-to-deploy-sojourner-the-first-planetary-rover/",
"alt": "Morning clouds photographed by Pathfinder on sol 39",
"narration": "The lander watched thin clouds cross the sky. A little station could study the weather as well as the rocks.",
"note": "NASA history identifies these as sol 39 clouds, most likely made of ice crystals. The picture is not rain, and no active storm is invented. Mission instruments also measured temperature, wind and other weather conditions.",
"kind": "data"
},
{
"art": "pf-sunset.jpg",
"title": "The last transmission arrived.",
"date": "27 SEP 1997 / LAST DATA",
"credit": "NASA/JPL \u00b7earlier 28 AUG 1997 sunset / PIA00920",
"source": "https://www.nasa.gov/history/25-years-ago-mars-pathfinder-launches-to-mars-to-deploy-sojourner-the-first-planetary-rover/",
"alt": "Earlier Pathfinder sunset image from August1997",
"narration": "For weeks, the pair sent home pictures and measurements. Then Pathfinder stopped sending data that Earth could hear.",
"note": "Final data were received September 27, 1997. Contact attempts continued afterward; the project was terminated March 10, 1998. This sunset was photographed August 28, 1997, not at the final transmission. The final Sojourner operating moment is not independently known, because its path to Earth ran through the lander.",
"kind": "data"
},
{
"art": "pf-mro.jpg",
"title": "A tiny landmark, years later.",
"date": "21 DEC 2006 / MRO IMAGE",
"credit": "NASA/JPL/University of Arizona \u00b7MRO lander view",
"source": "https://www.nasa.gov/history/25-years-ago-mars-pathfinder-launches-to-mars-to-deploy-sojourner-the-first-planetary-rover/",
"alt": "Pathfinder lander seen from MRO in December2006",
"narration": "A later orbiter spotted the lander from above. The little mission still had a place on the map.",
"note": "NASA/JPL/University of Arizona MRO lander cutout. The lander is identified; the proposed rover location in the wider scene was tentative. This story does not call that tentative feature a confirmed final Sojourner position.",
"kind": "data"
}
]
};
films['mars-global-surveyor']={
"title": "THE PLANET\nBECAME A MAP.",
"subtitle": "An orbiting observer helped reveal a changing Mars.",
"scenes": [
{
"art": "mgs-tools.jpg",
"title": "Six tools. A whole planet.",
"date": "BEFORE LAUNCH / INSTRUMENTS",
"credit": "NASA \u00b7spacecraft schematic",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "Six tools. A whole planet. NASA labelled science diagram or map",
"narration": "A camera, a laser and other instruments would study Mars in different ways. One orbiter could build many kinds of map.",
"note": "NASA labelled spacecraft schematic showing major components. It is an explanatory drawing, not a photograph, flight CAD or real interior.",
"kind": "data"
},
{
"art": "mgs-launch.jpg",
"title": "The mapmaker leaves Earth.",
"date": "7 NOV 1996 / LAUNCH",
"credit": "NASA \u00b7MGS Delta launch",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "The mapmaker leaves Earth. NASA original mission image",
"narration": "A Delta rocket sent Mars Global Surveyor on its way. Its work would help later explorers choose where to land.",
"note": "NASA launch photograph, not a picture of Pathfinder, which launched the following month.",
"kind": "data"
},
{
"art": "mgs-brake.jpg",
"title": "Let the air help slow you down.",
"date": "1997-1999 / AEROBRAKING",
"credit": "NASA \u00b7baseline plan / not actual flown path",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "Let the air help slow you down. NASA labelled science diagram or map",
"narration": "Careful dips into the upper atmosphere helped change the orbit. The team adjusted the plan after a solar-array problem.",
"note": "NASA baseline aerobraking-plan diagram. It shows the original plan, not the exact flown path; operations changed after a solar-array deployment problem. The story does not treat dates inside the planning graphic as the final executed schedule.",
"kind": "data"
},
{
"art": "mgs-storm.jpg",
"title": "A planet hides in dust.",
"date": "2001 / GLOBAL DUST STORM",
"credit": "NASA/JPL/MSSS \u00b7dust-storm comparison",
"source": "https://science.nasa.gov/mission/mars-global-surveyor/",
"alt": "A planet hides in dust. NASA original mission image",
"narration": "Two pictures showed how quickly dust could change the view of an entire planet.",
"note": "NASA MOC before-and-after views of Mars in 2001. The second image is obscured by globally distributed dust haze. This is not a disappearance of the surface or a new color for the planet.",
"kind": "data"
},
{
"art": "mgs-map.jpg",
"title": "A map of highs and lows.",
"date": "MAPPING MISSION / MOLA",
"credit": "NASA \u00b7MOLA topographic map",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "A map of highs and lows. NASA labelled science diagram or map",
"narration": "The laser measured the shape of Mars. Bright colors on this map show height, not the colors of the ground.",
"note": "NASA MOLA color-coded topography with the map key retained. This is a measured elevation product, not a natural-color photograph or a heat map.",
"kind": "data"
},
{
"art": "mgs-delta.jpg",
"title": "Old rivers leave shapes behind.",
"date": "2003 / EBERSWALDE CRATER",
"credit": "NASA/JPL/MSSS \u00b7ancient delta image",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "Old rivers leave shapes behind. NASA original mission image",
"narration": "Branching ridges looked like an ancient river delta. They helped scientists investigate a wetter past.",
"note": "NASA history identifies the Eberswalde ancient-delta image. The scene does not claim a river is flowing in this picture, or that modern gullies prove liquid water today.",
"kind": "data"
},
{
"art": "mgs-phobos.jpg",
"title": "Look beyond the planet.",
"date": "2003 / PHOBOS",
"credit": "NASA/JPL/MSSS \u00b7Phobos image",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "Look beyond the planet. NASA original mission image",
"narration": "The camera could study a Martian moon too. Phobos was a rocky world with craters and grooves.",
"note": "NASA history identifies this Mars Global Surveyor image of Phobos. It is not the surface of Mars. No landing on the moon took place.",
"kind": "data"
},
{
"art": "mgs-rover.jpg",
"title": "Help the next explorers.",
"date": "2004 / OPPORTUNITY SITE",
"credit": "NASA/JPL/MSSS \u00b7labelled Opportunity site",
"source": "https://www.nasa.gov/history/25-years-ago-mars-global-surveyor-launches-to-the-red-planet/",
"alt": "Help the next explorers. NASA original mission image",
"narration": "Maps and radio relays supported missions on the ground. The orbiter even photographed the hardware at Opportunity's landing site.",
"note": "NASA MGS labelled Opportunity-site image, retaining the original labels. This is an orbital view rather than a close-up rover portrait.",
"kind": "data"
},
{
"art": "mgs-streak.jpg",
"title": "Watch the ground change.",
"date": "28 MAY 2005 / DUST STREAKS",
"credit": "NASA/JPL/MSSS \u00b7slope-streaked knob",
"source": "https://science.nasa.gov/mission/mars-global-surveyor/science-highlights/",
"alt": "Watch the ground change. NASA original mission image",
"narration": "Dark streaks marked dust slipping down a slope. Repeated pictures let scientists spot changes.",
"note": "NASA describes these Amazonis Planitia streaks as dry-dust mass movement. They are not rivers, water spills or rover tracks. The scene is distinct from the mission historical debates about gullies.",
"kind": "data"
},
{
"art": "mgs-earth.jpg",
"title": "A distant Earth. A final silence.",
"date": "2 NOV 2006 / LAST CONTACT",
"credit": "NASA/JPL/MSSS \u00b7earlier 8 MAY 2003 Earth-Moon view",
"source": "https://www.jpl.nasa.gov/news/report-reveals-likely-causes-of-mars-spacecraft-loss/",
"alt": "A distant Earth. A final silence. NASA original mission image",
"narration": "After years of mapping, its last message reached Earth. The maps kept helping people long after the radio fell quiet.",
"note": "Earlier May 8, 2003 Earth-Moon image from Mars orbit, not a final picture. NASA/JPL gives November 2, 2006 as last communication; the NASA mission page lists November 14 as mission end. The 2007 board described a likely chain involving computer memory, commands, orientation and overheated batteries. This picture does not visualize or prove that failure.",
"kind": "data"
}
]
};
films['spirit']={
"title": "A LITTLE ROVER.\nA LONG WAY BEYOND THE PLAN.",
"subtitle": "Spirit followed the rocks into a wetter Martian past.",
"scenes": [
{
"art": "spirit-launch.jpg",
"title": "Another robot geologist lifts off.",
"date": "10 JUN 2003 / LAUNCH",
"credit": "NASA \u00b7Spirit Delta II launch",
"source": "https://www.nasa.gov/missions/mer/nasa-celebrates-decade-of-mars-exploration-by-spirit-opportunity/",
"alt": "Another robot geologist lifts off. NASA Spirit mission photograph or camera mosaic",
"narration": "Spirit would examine rocks and soil on Mars. Its twin, Opportunity, would explore a different place.",
"note": "NASA launch photograph of Spirit, not Opportunity. Spirit launched on June 10, 2003. The later image archive article includes both missions, so the photograph and caption have been matched to Spirit.",
"kind": "data"
},
{
"art": "spirit-first.jpg",
"title": "A new view inside Gusev Crater.",
"date": "4 JAN 2004 UTC / LANDED",
"credit": "NASA/JPL/Cornell \u00b7first color panorama",
"source": "https://www.jpl.nasa.gov/news/spirits-surroundings-beckon-in-color-panorama/",
"alt": "A new view inside Gusev Crater. NASA Spirit mission photograph or camera mosaic",
"narration": "After landing, Spirit looked out across a rocky plain. Distant hills offered places to explore.",
"note": "NASA/JPL first 360-degree color panorama, stitched from 225 frames. Landing was January 4 UTC, January 3 PST. The opening panorama was assembled before Spirit drove off its platform.",
"kind": "data"
},
{
"art": "spirit-grind.jpg",
"title": "Look beneath a rock's skin.",
"date": "6 FEB 2004 / ADIRONDACK",
"credit": "NASA/JPL/Cornell \u00b7PIA05223 / ground rock patch",
"source": "https://science.nasa.gov/photojournal/first-grinding-of-a-rock-on-mars/",
"alt": "Look beneath a rock's skin. NASA Spirit mission photograph or camera mosaic",
"narration": "A tool ground a small circle in a rock. Fresh material could tell a different story from the dusty surface.",
"note": "NASA PIA05223 shows the ground patch on Adirondack, made on sol 34. It is a shallow 45.5-millimeter-wide abrasion, not a deep drill hole or a sample returned to Earth.",
"kind": "data"
},
{
"art": "spirit-tracks.jpg",
"title": "Leave tracks. Follow questions.",
"date": "MAY 2004 / SURFACE TRAVEL",
"credit": "NASA/JPL/Cornell \u00b7Spirit wheel tracks",
"source": "https://www.nasa.gov/missions/mer/nasa-celebrates-decade-of-mars-exploration-by-spirit-opportunity/",
"alt": "Leave tracks. Follow questions. NASA Spirit mission photograph or camera mosaic",
"narration": "Six wheels carried the rover from one science target to another. Pictures recorded the trail behind it.",
"note": "NASA identifies these tracks as Spirit images from May 21, 25 and 26, 2004. The tubular object at lower right is the low-gain antenna. This is not Opportunity's track scene.",
"kind": "data"
},
{
"art": "spirit-summit.jpg",
"title": "Climb a hill. See farther.",
"date": "2005 / HUSBAND HILL",
"credit": "NASA/JPL-Caltech/Cornell \u00b7summit panorama",
"source": "https://science.nasa.gov/resource/summit-panorama-with-rover-deck",
"alt": "Climb a hill. See farther. NASA Spirit mission photograph or camera mosaic",
"narration": "Spirit climbed Husband Hill. A wide panorama showed new terrain and its own dusty deck.",
"note": "This summit panorama combines 653 images acquired August 24-27, 2005. NASA mission-page prose gives a different summit-arrival date; the story uses 2005 rather than merging the inconsistent dates. Approximately true-color rendering; sky seams were processed out. It is a panorama, not a single instant or a spacecraft selfie.",
"kind": "data"
},
{
"art": "spirit-silica.jpg",
"title": "A broken wheel uncovers a clue.",
"date": "21 MAY 2007 / BRIGHT SOIL",
"credit": "NASA/JPL-Caltech/Cornell \u00b7PIA11758 / silica soil",
"source": "https://science.nasa.gov/resource/rovers-wheel-churns-up-bright-martian-soil",
"alt": "A broken wheel uncovers a clue. NASA Spirit mission photograph or camera mosaic",
"narration": "A wheel that no longer turned scraped the ground. It exposed bright, silica-rich soil linked to ancient water.",
"note": "NASA PIA11758, acquired on sol 1202. Instruments identified nearly pure silica. Possible hot springs or volcanic steam vents are ancient environmental interpretations, not proof that Spirit found life. Approximately true-color camera mosaic; black edges are missing image coverage.",
"kind": "data"
},
{
"art": "spirit-troy.jpg",
"title": "The ground turns soft.",
"date": "MAY-JUN 2009 / TROY",
"credit": "NASA/JPL-Caltech/Cornell \u00b7Troy panorama",
"source": "https://www.nasa.gov/image-article/spirit-embedded-soft-soil-mars-as-engineers-devise-methods-free-spirit/",
"alt": "The ground turns soft. NASA Spirit mission photograph or camera mosaic",
"narration": "Spirit became stuck in soft soil. The team studied the ground and tried ways to free the rover.",
"note": "This Troy panorama combines images from May 14 through June 20, 2009, not a final-day photograph. The dragged right-front wheel made the more obvious track. No invented successful escape is shown.",
"kind": "data"
},
{
"art": "spirit-winter.jpg",
"title": "The radio grew quiet. The science stayed.",
"date": "22 MAR 2010 / LAST CONTACT",
"credit": "NASA/JPL-Caltech/Cornell \u00b7earlier FEB 2010 / FALSE COLOR",
"source": "https://www.jpl.nasa.gov/news/nasas-spirit-rover-completes-mission-on-mars/",
"alt": "The radio grew quiet. The science stayed. NASA Spirit mission false-color soil mosaic with inset detail",
"narration": "Winter approached and sunlight became scarce. Spirit fell silent. After more attempts, its mission was declared complete in 2011.",
"note": "This earlier February 2-16, 2010 mosaic shows soil disturbed during escape attempts. It is false color, with inset close views and the moving arm turret appearing twice, not two arms. Last contact was March 22, 2010; NASA ended attempts May 25, 2011. No final image, farewell or exact failure moment is invented.",
"kind": "data"
}
]
};
films['phoenix']={
"title": "A FROZEN WORLD.\nA HIDDEN LAYER.",
"subtitle": "Phoenix dug into the history of the Martian arctic.",
"scenes": [
{
"art": "phx-test.jpg",
"title": "Open the wings on Earth.",
"date": "BEFORE LAUNCH / SOLAR-ARRAY TEST",
"narration": "Before its trip, Phoenix spread its solar panels in a cleanroom. Sunlight would power its work on Mars.",
"note": "Earth hardware test photograph. Both arrays are open; the lander is not already on Mars. Phoenix launched August 4, 2007.",
"credit": "NASA/JPL-Caltech/UA/Lockheed Martin \u00b7Earth test",
"source": "https://science.nasa.gov/mission/mars-phoenix/",
"alt": "Open the wings on Earth. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-descent.jpg",
"title": "Another spacecraft watches it arrive.",
"date": "25 MAY 2008 / DESCENT",
"narration": "As Phoenix came down on a parachute, MRO took a picture from orbit. One explorer watched another arrive.",
"note": "NASA identifies this as the actual HiRISE parachute-descent image. The large crater is background terrain, not the target where Phoenix landed. No fabricated landing video is shown.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7HiRISE descent",
"source": "https://science.nasa.gov/mission/mars-phoenix/",
"alt": "Another spacecraft watches it arrive. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-panorama.jpg",
"title": "A flat, patterned plain.",
"date": "2008 / MARTIAN ARCTIC",
"narration": "The new neighborhood had pebbles and low troughs instead of big hills. Phoenix stayed in one place to study it.",
"note": "Phoenix camera panorama of the northern plains and lander deck. The date label does not claim it is the first image or a single instant. It is a stationary lander, not a rover.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7surface panorama",
"source": "https://science.nasa.gov/mission/mars-phoenix/",
"alt": "A flat, patterned plain. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-trench.jpg",
"title": "Dig where the ice may be.",
"date": "2008 / SAMPLING TRENCHES",
"narration": "A robotic arm scooped into the ground. A hidden layer was close enough to investigate.",
"note": "Real camera view of the lander sampling area. Phoenix followed earlier orbital evidence of shallow ice. Trench names are team nicknames, not Martian place signs.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7sampling trenches",
"source": "https://science.nasa.gov/mission/mars-phoenix/",
"alt": "Dig where the ice may be. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-ice.jpg",
"title": "Small bright pieces disappear.",
"date": "JUN 2008 / ICE EVIDENCE",
"narration": "Bright crumbs in a trench vanished between pictures. Their disappearance helped show that the material was water ice.",
"note": "Two frames extracted from the NASA animation are placed side by side and labelled by sol. NASA comparison shows sublimation in Dodo-Goldilocks across sols 20 and 24. Captions disagree on the second Earth date, so the story uses June 2008. The pictures are not liquid water flowing, and the disappearing pieces are not animals moving away.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7PIA10906 comparison",
"source": "https://www.jpl.nasa.gov/images/pia10906-disappearing-ice/",
"alt": "Small bright pieces disappear. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-dust.jpg",
"title": "A tiny tool for tiny clues.",
"date": "AUG 2008 / ATOMIC FORCE MICROSCOPE",
"narration": "A sharp tip mapped a sample held in tiny pits. This colored shape is a height map, not a giant red dust grain.",
"note": "NASA/JPL identifies a dust particle held in the left pit of this height-map view. The visible pits belong to the silicon sample holder, not giant holes in the dust grain. Red is high and purple is low. This is a processed science visualization, not a living cell or a picture of atoms.",
"credit": "NASA/JPL-Caltech/University of Arizona/University of Neuchatel/Imperial College London \u00b7sample-holder height map / FALSE COLOR",
"source": "https://www.jpl.nasa.gov/news/phoenix-microscope-takes-first-image-of-martian-dust-particle/",
"alt": "A tiny tool for tiny clues. NASA Phoenix science visualization",
"kind": "data"
},
{
"art": "phx-deck.jpg",
"title": "A laboratory, far from home.",
"date": "2008 / SOIL ANALYSIS",
"narration": "The lander tested soil and ice with several tools. Finding ingredients and past water clues was different from finding life.",
"note": "Real instrument-deck image. The scene does not claim the image itself proves soil chemistry. NASA reports ice confirmation, perchlorate and other chemical findings from the mission instruments. No microorganism was detected in this picture.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7instrument deck",
"source": "https://science.nasa.gov/mission/mars-phoenix/",
"alt": "A laboratory, far from home. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-panel.jpg",
"title": "The sunlight grew scarce.",
"date": "2 NOV 2008 / LAST CONTACT",
"narration": "The lander worked beyond its planned season. As sunlight faded, Phoenix fell silent. It was not built to survive the harsh winter.",
"note": "Earlier solar-panel camera composite, not a final-day picture. NASA mission record gives November 2, 2008 as mission end. Later listening campaigns did not recover contact. No imagined final radio words are used.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7earlier solar-panel composite",
"source": "https://www.jpl.nasa.gov/news/phoenix-mars-lander-is-silent-new-image-shows-damage/",
"alt": "The sunlight grew scarce. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
},
{
"art": "phx-mro.jpg",
"title": "Compare the shadows, years later.",
"date": "2010 / ORBITAL FOLLOW-UP",
"narration": "MRO looked again. Changed shadows suggested that winter had damaged the solar panels.",
"note": "NASA/JPL before-and-after 2008/2010 comparison. The evidence is consistent with severe winter damage, not a direct close-up of a panel breaking. The exact ice load and detailed damage mechanism were expectations and interpretation, not a photographed event.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b72008/2010 comparison",
"source": "https://www.jpl.nasa.gov/news/phoenix-mars-lander-is-silent-new-image-shows-damage/",
"alt": "Compare the shadows, years later. NASA Phoenix mission photograph or image mosaic",
"kind": "data"
}
]
};
films['insight']={
"title": "LISTEN CLOSELY.\nA PLANET HAS SECRETS.",
"subtitle": "InSight studied Mars from the surface down.",
"scenes": [
{
"art": "ins-build.jpg",
"title": "Build a listener for Mars.",
"date": "2015 / EARTH SOLAR-ARRAY TEST",
"narration": "InSight would stay in one place. Its instruments would study what lies beneath the planet's surface.",
"note": "Actual cleanroom test on April 30, 2015. InSight used a design based on Phoenix but carried a different science payload. It is a stationary lander, not a rover.",
"source": "https://science.nasa.gov/mission/insight/",
"credit": "NASA/JPL-Caltech/Lockheed Martin \u00b7Earth test",
"alt": "Build a listener for Mars. NASA InSight mission photograph or graphic",
"kind": "data"
},
{
"art": "ins-launch.jpg",
"title": "Ready for another world.",
"date": "5 MAY 2018 / LAUNCH",
"narration": "A rocket from California sent InSight toward Mars. It landed on a broad plain in November.",
"note": "NASA photograph of the rocket at Vandenberg before launch, not liftoff. The mission landed November 26, 2018 in Elysium Planitia. No landing photograph or animation is invented here.",
"source": "https://www.nasa.gov/missions/insight/nasa-prepares-to-say-farewell-to-insight-spacecraft/",
"credit": "NASA \u00b7InSight rocket on the launch pad",
"alt": "Atlas V rocket on its launch pad before InSight left Earth",
"kind": "data"
},
{
"art": "ins-place.jpg",
"title": "Set the instrument on the ground.",
"date": "19 DEC 2018 / SEIS DEPLOYMENT",
"narration": "A robotic arm carefully placed the seismometer on Mars. It would measure very small ground movements.",
"note": "NASA/JPL deployment image. SEIS was supplied by CNES and partners. The visible copper-colored instrument is not a drill. InSight did not bring the first seismometer ever sent to Mars; Viking had earlier instruments aboard its landers.",
"source": "https://www.jpl.nasa.gov/news/nasas-insight-places-first-instrument-on-mars/",
"credit": "NASA/JPL-Caltech \u00b7seismometer deployment",
"alt": "Set the instrument on the ground. NASA InSight mission photograph or graphic",
"kind": "data"
},
{
"art": "ins-quake.jpg",
"title": "A faint tremble becomes a clue.",
"date": "6 APR 2019 / FIRST LIKELY MARSQUAKE",
"narration": "A tiny signal seemed to come from inside Mars. More quakes would help scientists study the planet's layers.",
"note": "NASA announced this as a likely marsquake in April 2019. The photo shows the protective wind and thermal shield on sol 110, not the ground visibly shaking on April 6. The earliest signal was too small by itself to settle the interior structure.",
"source": "https://science.nasa.gov/missions/insight/nasas-insight-detects-first-likely-quake-on-mars/",
"credit": "NASA/JPL-Caltech \u00b7SEIS shield / earlier sol 110",
"alt": "A faint tremble becomes a clue. NASA InSight mission photograph or graphic",
"kind": "data"
},
{
"art": "ins-inside.jpg",
"title": "Learn what cannot be photographed.",
"date": "MISSION SCIENCE / SEISMIC WAVES",
"narration": "Waves travel differently through different materials. Quake measurements helped scientists work out what was inside Mars.",
"note": "NASA artist rendition with seismic-wave graphics. It is an explanation of the science goal, not an X-ray photograph, current live signal or a measured cross-section. No interior dimensions are invented.",
"source": "https://science.nasa.gov/mission/insight/",
"credit": "NASA/JPL-Caltech \u00b7science-goal illustration",
"alt": "Learn what cannot be photographed. NASA InSight science illustration",
"kind": "data"
},
{
"art": "ins-mole.jpg",
"title": "One tool could not go deep enough.",
"date": "9 JAN 2021 / MOLE ATTEMPTS END",
"narration": "A heat probe nicknamed the mole tried to hammer downward. Unusual soil stopped it from reaching the depth it needed.",
"note": "DLR heat probe shown after the final January 9, 2021 attempt. Soil did not provide the needed friction. The deep heat-flow objective was not achieved; the scene does not imply every planned experiment succeeded. No animal or deep underground tunnel is pictured.",
"source": "https://www.jpl.nasa.gov/images/pia24263-insights-mole-comes-to-rest/",
"credit": "NASA/JPL-Caltech \u00b7PIA24263 / heat probe",
"alt": "One tool could not go deep enough. NASA InSight mission photograph or graphic",
"kind": "data"
},
{
"art": "ins-power.jpg",
"title": "Dust makes sunlight harder to use.",
"date": "SPRING 2022 / POWER COMPARISON",
"narration": "Dust collected on the solar panels. Less power meant fewer instruments could keep working.",
"note": "NASA graphic compares roughly 5,000 watt-hours per sol after landing with roughly 500 by spring 2022. The photos used in the comparison are December 2018 and March-April 2019, not two photographs both taken in 2022. Original labels and values retained.",
"source": "https://science.nasa.gov/resource/insights-power-generation-after-landing-and-spring-2022/",
"credit": "NASA/JPL-Caltech \u00b7power graphic / dated photo context",
"alt": "Dust makes sunlight harder to use. NASA InSight mission photograph or graphic",
"kind": "data"
},
{
"art": "ins-selfie.jpg",
"title": "The listener fell silent. The record remains.",
"date": "15 DEC 2022 / LAST CONTACT",
"narration": "InSight's final contact came in December. Scientists could keep learning from the quakes it had already measured.",
"note": "Final selfie taken April 24, 2022, months before the last contact on December 15. NASA declared the mission retired December 21 after two missed contacts. Final selfie does not mean final transmitted image. No invented last words are quoted. The completed mission recorded 1,319 marsquakes.",
"source": "https://www.nasa.gov/missions/insight/nasa-retires-insight-mars-lander-mission-after-years-of-science/",
"credit": "NASA/JPL-Caltech \u00b7earlier 24 APR 2022 final selfie",
"alt": "The listener fell silent. The record remains. NASA InSight mission photograph or graphic",
"kind": "data"
}
]
};
films['mars-climate-orbiter']={
"title": "ONE SMALL MISMATCH.\nA WORLD TOO CLOSE.",
"subtitle": "Mars Climate Orbiter was lost at arrival, not after a mapping mission.",
"scenes": [
{
"art": "mco-build.jpg",
"title": "A weather station for another planet.",
"date": "1998 / EARTH PREPARATION",
"narration": "Mars Climate Orbiter was built to study Mars from above. It would watch weather and help relay a lander's messages.",
"note": "Actual Earth processing photograph. This caption was written before launch and names a planned December 10 date. The actual launch was December 11, 1998. These are goals, not an achieved mapping mission.",
"source": "https://images-api.nasa.gov/search?q=KSC-98pc1351",
"credit": "NASA/KSC \u00b7KSC-98pc1351",
"alt": "Technician works on Mars Climate Orbiter on Earth",
"kind": "data"
},
{
"art": "mco-launch.jpg",
"title": "A small machine on a tall rocket.",
"date": "11 DEC 1998 / LAUNCH",
"narration": "A Delta II carried the orbiter away from Florida. Its journey to Mars would take about nine months.",
"note": "Actual liftoff, not a simulation. NASA records launch December 11, 1998. Launch did not put it directly into a successful Mars orbit.",
"source": "https://images-api.nasa.gov/search?q=KSC-98pc1838",
"credit": "NASA/KSC \u00b7KSC-98pc1838",
"alt": "Delta II lifts off carrying Mars Climate Orbiter",
"kind": "data"
},
{
"art": "mco-trajectory.jpg",
"title": "Follow the long road.",
"date": "1998-1999 / CRUISE",
"narration": "The spacecraft followed a curved path around the Sun. Small engine firings helped aim it toward Mars.",
"note": "Original NASA/JPL arrival press-kit trajectory figure, extracted from PDF page 16 (printed page 14). This is a mission-planning diagram, not a live position map or exact reconstructed flight track.",
"source": "https://www.jpl.nasa.gov/news/press_kits/mcoarrivehq.pdf",
"credit": "NASA/JPL \u00b7original cruise-plan diagram",
"alt": "Original planned Earth-to-Mars cruise path around the Sun",
"kind": "data"
},
{
"art": "mco-approach.jpg",
"title": "Mars appeared as a small bright world.",
"date": "7 SEP 1999 / APPROACH IMAGE",
"narration": "The camera saw Mars from millions of kilometers away. The world was still only a small shape in its view.",
"note": "Actual MARCI approach image PIA02330, taken September 7, 1999 at about 4.5 million kilometers. This low-resolution image is not a close-up; detail has not been invented or AI sharpened. The original prearrival page describes later plans that never happened.",
"source": "https://science.nasa.gov/photojournal/mars-climate-orbiter-marci-approach-image/",
"credit": "NASA/JPL/MSSS \u00b7PIA02330",
"alt": "Small low-resolution Mars disk photographed by MARCI from far away",
"kind": "data"
},
{
"art": "mco-diagram.jpg",
"title": "Numbers need the same language.",
"date": "NAVIGATION / UNIT MISMATCH",
"narration": "A unit mix-up changed the navigation calculations. Numbers sent in one set of units were used as though they were in another.",
"note": "Spacecraft diagram from the original NASA/JPL press kit, PDF page 23 (printed page 21). This is hardware context, not a picture of software. NASA identifies a failure to translate English units to metric. It is not accurate to blame a physical ruler or suggest the science instruments caused the error.",
"source": "https://science.nasa.gov/mission/mars-climate-orbiter/",
"credit": "NASA/JPL \u00b7labelled spacecraft diagram",
"alt": "Labelled NASA Mars Climate Orbiter spacecraft diagram",
"kind": "data"
},
{
"art": "mco-aerobrake.jpg",
"title": "The orbit that never happened.",
"date": "SEPTEMBER 1999 / THE PLAN",
"narration": "The plan was to slow into orbit and gradually reshape it. The spacecraft instead came too close to Mars.",
"note": "NASA/JPL prearrival aerobraking plan, PDF page 17 (printed page 15). All orbital loops and dates shown are planned, not achieved tracks. Aerobraking and the mapping campaign did not take place. This is not an animation of the loss.",
"source": "https://science.nasa.gov/mission/mars-climate-orbiter/",
"credit": "NASA/JPL \u00b7unflown aerobraking plan",
"alt": "Original planned aerobraking loops, not flown",
"kind": "data"
},
{
"art": "mco-concept.jpg",
"title": "No signal came back.",
"date": "23 SEP 1999 / LAST CONTACT",
"narration": "Contact was lost at arrival after a navigation error sent the spacecraft too close to Mars. Its exact final fate was not confirmed.",
"note": "Artist concept shows the intended spacecraft near Mars, not the actual final moment. The mishap report leaves two possibilities: destruction in the atmosphere or a return to orbit around the Sun. NASA's current mission summary simplifies this to burning up; this story preserves the investigation's uncertainty. No photograph of destruction, confirmed wreck location, last words or recovered surface equipment is claimed.",
"source": "https://discovery.larc.nasa.gov/pdf_files/MCO_report_2.pdf",
"credit": "NASA/JPL \u00b7artist concept / not the loss",
"alt": "Artist concept of Mars Climate Orbiter above Mars",
"kind": "data"
},
{
"art": "mco-both.jpg",
"title": "Check the handoff, not only the number.",
"date": "AFTER THE LOSS / ENGINEERING LESSON",
"narration": "A spacecraft depends on people and software working together. This mission is a reminder to check what every number means.",
"note": "Earlier Earth photograph shows Climate Orbiter in the foreground and Mars Polar Lander behind it. It is not a photograph after the loss. The two flew separately; the lander was lost on a different arrival in December. This lesson does not claim any particular later mission was saved by this loss.",
"source": "https://science.nasa.gov/mission/mars-climate-orbiter/",
"credit": "NASA/KSC \u00b7earlier Earth photo / KSC-98pc1352",
"alt": "Two separate spacecraft prepared together on Earth",
"kind": "data"
}
]
};
films['mars-polar-lander']={
"title": "THREE MACHINES.\nNO CALL FROM THE POLE.",
"subtitle": "Mars Polar Lander and Deep Space 2 were lost at arrival.",
"scenes": [
{
"art": "mpl-build.jpg",
"title": "A polar question, a small lander.",
"date": "1998 / EARTH PREPARATION",
"narration": "Mars Polar Lander would dig near the south polar cap. Its tools were built to search for clues about water and climate.",
"note": "Actual Earth preparation, not a surface photograph. The mission aimed near the southern polar cap, not Phoenix's northern site. Its planned digging and weather science did not return surface results.",
"source": "https://science.nasa.gov/mission/mars-polar-lander-deep-space-2/",
"credit": "NASA/KSC \u00b7Earth preparation / KSC-98pc1625",
"alt": "Mars Polar Lander prepared on Earth before its mission",
"kind": "data"
},
{
"art": "mpl-measure.jpg",
"title": "Two tiny experiments came along.",
"date": "1998 / DEEP SPACE 2 HARDWARE",
"narration": "Two small probes would test a different idea: hit the soil and place tiny tools below it. Engineers carefully prepared them on Earth.",
"note": "Workers measure a Deep Space 2 microprobe before flight. Designed impact and below-surface measurements were mission goals, not confirmed successful penetrations. The probes were not little rovers.",
"source": "https://www.jpl.nasa.gov/nmp/ds2/",
"credit": "NASA/KSC \u00b7DS2 measurement / KSC-98pc1644",
"alt": "Two workers measure a Deep Space 2 microprobe on Earth",
"kind": "data"
},
{
"art": "mpl-carry.jpg",
"title": "A ride together, separate jobs.",
"date": "1998 / PROBE INTEGRATION",
"narration": "The two probes rode with the lander toward Mars. They were meant to separate before arrival and work on their own.",
"note": "A worker carries one probe during integration. The probes were mounted to the cruise-stage assembly for the trip. NASA's old captions sometimes loosely say mounted on the lander; this scene does not imply the probes stayed on its deck to dig. Their fate is separate from the likely lander failure.",
"source": "https://www.jpl.nasa.gov/nmp/ds2/",
"credit": "NASA/KSC \u00b7probe integration / KSC-98pc1646",
"alt": "Worker carries a Deep Space 2 probe toward the spacecraft",
"kind": "data"
},
{
"art": "mpl-launch.jpg",
"title": "Through the clouds toward Mars.",
"date": "3 JAN 1999 / LAUNCH",
"narration": "A Delta II launched from Florida. The lander and its two small companions began their journey.",
"note": "Actual Delta II liftoff on January 3, 1999. Planned operations in the historical image caption are not reports of completed experiments.",
"source": "https://science.nasa.gov/mission/mars-polar-lander-deep-space-2/",
"credit": "NASA/KSC \u00b7KSC-99pc05 / actual launch",
"alt": "Delta II launches Mars Polar Lander through cloudy skies",
"kind": "data"
},
{
"art": "mpl-map.jpg",
"title": "Choose a place near the ice.",
"date": "28 NOV 1999 / PREARRIVAL ORBITER VIEW",
"narration": "Another spacecraft photographed the target region. Bright frost and dark patches of sand marked the polar landscape.",
"note": "PIA02348 was taken by Mars Global Surveyor on November 28, 1999. It is a landing-zone view, not an image sent by Polar Lander or a confirmed wreck location. The source's future-tense arrival plan did not establish a successful landing.",
"source": "https://www.jpl.nasa.gov/images/pia02348-latest-color-view-of-polar-landing-site/",
"credit": "NASA/JPL/MSSS \u00b7MGS / planned landing region",
"alt": "Mars Global Surveyor view of the intended southern polar landing region",
"kind": "data"
},
{
"art": "mpl-concept.jpg",
"title": "The expected call never came.",
"date": "3 DEC 1999 / LOST AT ARRIVAL",
"narration": "The lander did not call home after arrival. Investigators thought a false touchdown signal probably stopped its engines too soon.",
"note": "Artist concept of the intended lander on Mars, not proof of a safe landing or a picture of the crash. Early engine cutoff is a most-likely explanation, not observed final telemetry. The two DS2 probes also stayed silent; the same lander failure is not claimed as their cause.",
"source": "https://science.nasa.gov/mission/mars-polar-lander-deep-space-2/",
"credit": "NASA/JPL \u00b7intended surface artist concept",
"alt": "Artist concept of the intended Mars Polar Lander on the surface",
"kind": "data"
},
{
"art": "mpl-search.jpg",
"title": "Look from above. Keep listening.",
"date": "DEC 1999-JAN 2000 / SEARCH",
"narration": "Teams tried to contact the missing lander. Mars Global Surveyor searched the region from orbit, but did not find it.",
"note": "MGS search-area image PIA02349, not a Polar Lander camera image. NASA dates an orbital search December 16, 1999 and termination of lander contact attempts January 17, 2000. Search images do not show confirmed hardware. No final transmitted surface photograph or last words are invented.",
"source": "https://science.nasa.gov/mission/mars-polar-lander-deep-space-2/",
"credit": "NASA/JPL/MSSS \u00b7orbital search / PIA02349",
"alt": "Mars Global Surveyor images covering the Polar Lander search area",
"kind": "data"
},
{
"art": "mpl-notfound.jpg",
"title": "A promising dot was not the answer.",
"date": "2000 / 2005 IMAGES COMPARED",
"narration": "Years later, scientists checked a possible landing-site clue. Better pictures showed that the first interpretation was wrong.",
"note": "PIA03044 compares January 2000 and September 2005 MGS images. The possible parachute was a hill; the apparent lander spot was image noise. This is a rejected candidate, not a confirmed wreck. It demonstrates why a bright pixel alone is not enough evidence. This historical result is not a claim that every later search has been reviewed here.",
"source": "https://science.nasa.gov/photojournal/mars-polar-lander-not-found/",
"credit": "NASA/JPL/MSSS \u00b7rejected candidate / PIA03044",
"alt": "Comparison showing a rejected possible lander location in 2000 and 2005",
"kind": "data"
}
]
};
films['odyssey']={
"title": "A LONG VIEW.\nA CHANGING WORLD.",
"subtitle": "Odyssey keeps looking at Mars. This story has no final signal.",
"scenes": [
{
"art": "ody-concept.jpg",
"title": "A mapmaker keeps circling.",
"date": "2001 MARS ODYSSEY / ORBITER",
"narration": "Odyssey studies Mars from above. Its maps reveal the surface in ways ordinary eyes cannot.",
"note": "NASA artist concept, not a real spacecraft portrait at Mars. The mission launched April 7, 2001 and entered Mars orbit October 24, 2001. Current status is checked separately in the last scene.",
"source": "https://science.nasa.gov/mission/odyssey/",
"credit": "NASA/JPL \u00b7artist concept",
"alt": "A gold-colored spacecraft orbits over Mars, with a dish antenna extending from its top, a spindly boom extending from the front of it toward the viewer, and a large three-paneled solar array attached vertically to its left side. Mars appears as a dusty tan color covering the lower half of the frame, with patches of white at its top, against a black sky flecked with stars in the upper frame.",
"kind": "data"
},
{
"art": "ody-launch.jpg",
"title": "Begin a long journey.",
"date": "7 APR 2001 / LAUNCH",
"narration": "A Delta II sent Odyssey toward Mars. Months later, the spacecraft slowed into orbit.",
"note": "Actual liftoff PIA20331. Launch date is April 7; arrival date is October 24, 2001. Flight and commissioning came before the primary mapping phase.",
"source": "https://science.nasa.gov/mission/odyssey/",
"credit": "NASA \u00b7PIA20331 / liftoff",
"alt": "At 11:02 a.m. EDT on April 7, 2001, crowds watch a Boeing Delta II rocket lift off from Cape Canaveral Air Force Station, Florida, carrying NASA's 2001 Mars Odyssey spacecraft into space on its seven-month journey to Mars.",
"kind": "data"
},
{
"art": "ody-hydrogen.jpg",
"title": "A hidden ingredient leaves a clue.",
"date": "2002 / NEUTRON MAP",
"narration": "The spacecraft measured neutrons escaping from Mars. Those measurements helped scientists look for hydrogen, a clue to buried water ice.",
"note": "PIA03800 uses the first three months of neutron mapping. Deep blue means low epithermal neutron intensity and more hydrogen, not a blue ocean. Polar hydrogen was interpreted as shallow ice; equatorial hydrogen need not be ice. Original science colors are retained.",
"source": "https://www.jpl.nasa.gov/images/pia03800-global-map-of-epithermal-neutrons/",
"credit": "NASA/JPL/University of Arizona/LANL \u00b7neutron map",
"alt": "NASA Mars Odyssey observations are used in this global view of Mars in intermediate-energy, or epithermal, neutrons. Soil enriched by hydrogen is indicated by the deep blue colors on the map, which show a low intensity of epithermal neutrons.",
"kind": "data"
},
{
"art": "ody-frost.jpg",
"title": "Watch the cold ground change.",
"date": "THEMIS / FROST SCIENCE",
"narration": "Frost comes and goes across Mars. Looking in infrared helps scientists compare cold surfaces and changing seasons.",
"note": "PIA25233 displays largely carbon-dioxide frost as blueish-white in THEMIS science products. These colors do not mean water is flowing or a natural-color view from a human eye. Separate views are retained rather than presented as one continuous landscape.",
"source": "https://science.nasa.gov/mission/odyssey/odyssey-celebrates-25-years/",
"credit": "NASA/JPL-Caltech/ASU \u00b7THEMIS frost views",
"alt": "Four side-by-side images, overhead views of different landscapes on Mars: The first image shows a flat area with a few small craters. The terrain around the edge of the frame is a dull copper color, while the rest is very bright, in shades of very light green and turquoise. The second image appears to be a crater or valley, but looks like the right half of a sunflower bloom, although colored in shades of tan and brown, except for the petals at the top of the frame, which are highlighted in very light shades of mint green. The third image shows a much more uneven and rocky surface, with rust-colored craters and outcroppings; on each of those the south-facing edges are dabbed with higlights of whitish light blue. The fourth image is of mostly flat ground, colored a dull copper, resembling a face with rocky outcroppings creating two eyes up top, a nose in the middle, and a crooked mouth at the bottom of the frame. The eyes shine brightly and the nose is highlighted slightly in bright blue, coloring the south-facing slopes.",
"kind": "data"
},
{
"art": "ody-phobos.jpg",
"title": "Turn toward a little moon.",
"date": "MARCH 2020 / PHOBOS VIEWS",
"narration": "Odyssey also looked at Phobos. Temperature patterns helped scientists study the material covering the small moon.",
"note": "Six THEMIS views of Phobos shown in NASA PIA23893 as of March 2020. Colors indicate infrared temperature information, not natural-color terrain, a landed photograph or a new moon discovered by Odyssey.",
"source": "https://science.nasa.gov/mission/odyssey/odyssey-celebrates-25-years/",
"credit": "NASA/JPL-Caltech/ASU \u00b7Phobos infrared views",
"alt": "Six views of the Martian moon Phobos captured by NASA's Odyssey orbiter as of March 2020. The orbiter's THEMIS camera is used to measure temperature variations that suggest what kind of material the moon is made of.",
"kind": "data"
},
{
"art": "ody-lakes.jpg",
"title": "Read an old landscape together.",
"date": "2016 / ANCIENT LAKES AND STREAMS",
"narration": "Images and height maps can fit together like puzzle pieces. They show shapes left by water long ago.",
"note": "PIA20838 combines Odyssey THEMIS imagery with MGS MOLA heights. White/purple are lower and yellow higher elevations. The landscape records ancient water, not a present-day lake, and is a joint-data product rather than solely Odyssey measurements.",
"source": "https://www.jpl.nasa.gov/images/pia20838-landscape-of-former-lakes-and-streams-on-northern-mars/",
"credit": "NASA/JPL-Caltech/ASU \u00b7THEMIS + MOLA",
"alt": "Valleys much younger than well-known ancient valley networks on Mars are evident near the informally named 'Heart Lake' on Mars. This map based on NASA's MGS data presents color-coded topographical information overlaid onto a photo mosaic.",
"kind": "data"
},
{
"art": "ody-horizon.jpg",
"title": "See the edge of a world.",
"date": "2023 / EARLIER HORIZON VIEW",
"narration": "Engineers turned the camera toward the horizon. Thin layers of atmosphere curved above the ground.",
"note": "PIA26203 is an earlier THEMIS horizon view from a special observation, not a live window, human astronaut photograph or current weather forecast. The broad panorama is shown whole so the horizon is not replaced with invented scenery.",
"source": "https://science.nasa.gov/mission/odyssey/odyssey-celebrates-25-years/",
"credit": "NASA/JPL-Caltech/ASU \u00b7earlier horizon panorama",
"alt": "This unusual view of the horizon of Mars was captured by NASA's Odyssey orbiter using its THEMIS camera, in an operation that took engineers three months to plan.",
"kind": "data"
},
{
"art": "ody-team.jpg",
"title": "The story is still being written.",
"date": "STATUS CHECK / 11 NOV 2026",
"narration": "NASA still lists Odyssey as an ongoing Mars mission. Scientists keep using its maps to learn and help plan exploration.",
"note": "Active status checked against NASA's current mission page November 11, 2026. Photo shows the team celebrating on a giant map on April 15, 2026, not the latest spacecraft telemetry. No guaranteed future lifetime, invented final signal or current relay traffic rate is claimed.",
"source": "https://science.nasa.gov/mission/odyssey/",
"credit": "NASA/JPL-Caltech \u00b7earlier 15 APR 2026 team photo",
"alt": "A group of several dozen scientists and engineers pose together, standing atop an auditorium-size colorful map of the Martian globe that shows patches of blue, green, red, and yellow.",
"kind": "ongoing"
}
]
};
films['mro']={
"title": "CLOSER LOOKS.\nBIGGER QUESTIONS.",
"subtitle": "MRO reads the small details of a changing planet. Its work continues.",
"scenes": [
{
"art": "mro-concept.jpg",
"title": "Look closer than ever.",
"date": "MARS RECONNAISSANCE ORBITER",
"narration": "From orbit, MRO studies small details and big patterns. It is helping us read the history of water on Mars.",
"source": "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",
"note": "PIA04916 is an artist concept, not a spacecraft photograph at Mars. Active status is checked separately. NASA mission page lists 2006 - ongoing.",
"credit": "NASA/JPL \u00b7artist concept",
"alt": "NASA MRO concept image",
"kind": "data"
},
{
"art": "mro-launch.jpg",
"title": "Take the first step from Earth.",
"date": "12 AUG 2005 / LAUNCH",
"narration": "An Atlas V sent the spacecraft toward Mars. It entered Mars orbit on March 10, 2006.",
"source": "https://science.nasa.gov/photojournal/mars-reconnaissance-orbiter-mro-launches/",
"note": "Actual launch PIA04141 at 7:43 a.m. EDT on August 12, 2005. The spacecraft then cruised for seven months and used months of aerobraking before its main science orbit.",
"credit": "NASA/JPL/KSC/Lockheed Martin Space Systems \u00b7liftoff",
"alt": "NASA's Mars Reconnaissance Orbiter (MRO) launched at 7:43 a.m. EDT atop a Lockheed Martin Atlas V rocket from Launch Complex 41 at Cape Canaveral Air Force Station in Florida on Aug. 12, 2005.",
"kind": "data"
},
{
"art": "mro-valley.jpg",
"title": "Follow the shape of an old valley.",
"date": "HIRISE / HARMAKHIS VALLIS",
"narration": "A long channel cuts across the ground. Surface collapse and flowing water probably helped shape it.",
"source": "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",
"note": "PIA25707 HiRISE image of Harmakhis Vallis. Probable formation processes are not proof of present flowing water. The image shows a portion of the roughly 800-kilometer channel, not the entire valley. Science colors retained.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7HiRISE",
"alt": "Harmakhis Vallis, an approximately 800-kilometer long outflow channel located in eastern Hellas on Mars. This is a large rock formation.",
"kind": "data"
},
{
"art": "mro-fluids.jpg",
"title": "Read the cracks in the rocks.",
"date": "EARLY MRO SCIENCE / FRACTURES",
"narration": "Long ago, liquid or gas moved through cracks underground. The rock patterns may help scientists understand possible ancient habitats.",
"source": "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",
"note": "The mission page describes ancient underground fluids, liquid or gas. This does not establish present liquid water, organisms or a confirmed habitat. The overhead orbital image is not a cross-section or a view inside the ground.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7orbital geology",
"alt": "An overhead view of a rock formation on the surface of Mars",
"kind": "data"
},
{
"art": "mro-ice.jpg",
"title": "Find ice under a fresh scar.",
"date": "1 NOV 2008 / IMPACT ICE",
"narration": "A small impact uncovered bright material. Another MRO instrument helped confirm that it was water ice.",
"source": "https://science.nasa.gov/photojournal/material-excavated-by-a-fresh-impact-and-identified-as-water-ice/",
"note": "PIA12220 covers 50 meters across. HiRISE took this view November 1, 2008; CRISM confirmed water ice. Bright material was excavated by an earlier 2008 impact, not flowing water photographed in real time. The 400-pixel NASA image is not enlarged with invented detail.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7PIA12220",
"alt": "The Compact Reconnaissance Imaging Spectrometer for Mars, an instrument on NASA's Mars Reconnaissance Orbiter, obtained information confirming material excavated by a fresh impact and Identified as water ice.",
"kind": "data"
},
{
"art": "mro-relay.jpg",
"title": "Help a message get home.",
"date": "MARS RELAY / ARTIST CONCEPT",
"narration": "Orbiters can carry messages between surface explorers and Earth. MRO is part of that communications bridge.",
"source": "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",
"note": "NASA artist concept of the Mars relay network, not a photograph, current network inventory or a live transmission diagram. Historical relay artwork may include spacecraft no longer operating. No signal audio or live data traffic is simulated.",
"credit": "NASA/JPL-Caltech \u00b7relay concept",
"alt": "Artist's concept of communications relay supporting other Mars missions.",
"kind": "data"
},
{
"art": "mro-tracks.jpg",
"title": "Spot the marks of another explorer.",
"date": "HIRISE / PERSEVERANCE TRACKS",
"narration": "A rover leaves tracks on Mars. From above, MRO can help us see where surface explorers have traveled.",
"source": "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",
"note": "The current NASA mission page identifies these as Perseverance tracks. This is an earlier orbital image, not current rover location or a live map. Original science colors are retained.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7earlier orbital tracks",
"alt": "Tracks from the Perseverance Rover on the Mars surface",
"kind": "data"
},
{
"art": "mro-crater.jpg",
"title": "Keep turning pages on Mars.",
"date": "STATUS CHECK / 11 NOV 2026",
"narration": "NASA lists MRO as an ongoing mission. Its pictures keep helping people ask new questions about Mars.",
"source": "https://science.nasa.gov/mission/mars-reconnaissance-orbiter/",
"note": "NASA currently lists the mission duration as 2006 - ongoing. The background is an earlier HiRISE view, PIA11777, of a relatively fresh crater near Sirenum Fossae featured for the mission anniversary. It is not a current spacecraft condition report. No final signal or guaranteed future lifetime is invented.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7earlier crater image",
"alt": "NASA MRO crater image",
"kind": "ongoing"
}
]
};
films['curiosity']={
"title": "A ROVING LAB.\nA ROCKY HISTORY.",
"subtitle": "Curiosity asks what ancient Mars was like. The journey continues.",
"scenes": [
{
"art": "cur-launch.jpg",
"title": "Carry a laboratory to Mars.",
"date": "26 NOV 2011 / LAUNCH",
"narration": "An Atlas V lifted Curiosity from Earth. The rover carried tools to ask whether Mars once had places where microbes could live.",
"source": "https://science.nasa.gov/resource/curiositys-lift-off/",
"note": "Actual launch from Cape Canaveral at 10:02 a.m. EST November 26, 2011. This mission studied habitability, not proof of living microbes.",
"credit": "NASA/Scott Andrews/Canon \u00b7launch",
"alt": "With NASA's Mars Science Laboratory (MSL) spacecraft sealed inside its payload fairing, the United Launch Alliance Atlas V rocket rides smoke and flames as it rises from the launch pad at Space Launch Complex-41 on Cape Canaveral Air Force Station in Florida at 10:02 a.m. EST Nov. 26.",
"kind": "data"
},
{
"art": "cur-landing.jpg",
"title": "Touch down in Gale Crater.",
"date": "6 AUG 2012 UTC / LANDING",
"narration": "Curiosity arrived safely. A camera on MRO later spotted the rover and the landing hardware around it.",
"source": "https://science.nasa.gov/photojournal/scene-of-a-martian-landing/",
"note": "PIA16001 is MRO HiRISE imagery taken about 24 hours after landing, not a descent photograph. It labels rover, heat shield, backshell/parachute and sky-crane impact. Landing was August 6 UTC, August 5 Pacific time. The separate landing hardware was not still flying.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7PIA16001",
"alt": "The four main pieces of hardware that arrived on Mars with NASA's Curiosity rover were spotted by NASA's Mars Reconnaissance Orbiter (MRO) which captured this image about 24 hours after landing.",
"kind": "data"
},
{
"art": "cur-selfie.jpg",
"title": "Meet a rolling science lab.",
"date": "GALE CRATER / EARLIER SELF-PORTRAIT",
"narration": "Curiosity uses cameras, a drill and a small laboratory inside its body. Rocks can hold clues about the planet long ago.",
"source": "https://science.nasa.gov/mission/msl-curiosity/",
"note": "Earlier PIA24173 self-portrait, not a current rover condition report. Rover selfies are assembled from multiple camera images rather than taken by another astronaut or a flying camera. No exposed interior is reconstructed.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7earlier self-portrait",
"alt": "NASA Curiosity selfie image",
"kind": "data"
},
{
"art": "cur-drills.jpg",
"title": "Collect a little rock powder.",
"date": "2024 / EARLIER DRILL-HOLE GRID",
"narration": "The arm drills into selected rocks. Powder from some rocks goes to instruments that study what the rocks contain.",
"source": "https://science.nasa.gov/mission/msl-curiosity/",
"note": "PIA26403 is an earlier grid of 42 sample-collection holes, not the current drilling total. Each panel shows a different earlier drilling target. Sampling is not evidence that all drill attempts succeeded or that life was found.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7earlier 42-hole grid",
"alt": "NASA's Curiosity Mars rover has collected 42 powderized rock samples with the drill on the end of its robotic arm. This grid shows all 42 holes made by the drill when collecting the samples.",
"kind": "data"
},
{
"art": "cur-organic.jpg",
"title": "Find carbon-bearing clues.",
"date": "CUMBERLAND / ORGANIC MOLECULES",
"narration": "Tools inside the rover found large organic molecules in a drilled sample. Scientists keep testing how these molecules formed.",
"source": "https://science.nasa.gov/mission/msl-curiosity/",
"note": "NASA graphic illustrates decane, undecane and dodecane found using SAM in the Cumberland sample. Molecules are drawn, not photographed on the ground. Organic molecules can have biological or non-biological origins. These results do not prove life.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7science graphic",
"alt": "The image features a rover with its robotic arm and various instruments visible on a rocky, reddish-brown terrain. In the background is a barren landscape with scattered rocks and hills under a hazy sky. Overlaying the left side of the image is a semi-transparent panel with the title \"Large Organics on Mars\" in bold black letters. Below the title, three molecular chains are displayed, consisting of black spheres representing carbon atoms and white spheres representing hydrogen atoms. Labels indicate \"carbon\" as the black spheres and \"hydrogen\" as the white spheres. A faint circular blur appears in the background of the panel.",
"kind": "data"
},
{
"art": "cur-boxwork.jpg",
"title": "Wonder about rocky spiderwebs.",
"date": "EARLIER VIEW / BOXWORK REGION",
"narration": "Ridges cross the landscape like a rocky web. Curiosity explores patterns like these to learn how Mars changed.",
"source": "https://science.nasa.gov/mission/msl-curiosity/",
"note": "Earlier PIA26693 boxwork panorama shown on the current NASA mission page, not real spider silk or a discovery of animals. Original image processing is retained. No present water flow or living ecosystem is claimed.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7earlier boxwork panorama",
"alt": "NASA Curiosity boxwork image",
"kind": "data"
},
{
"art": "cur-night.jpg",
"title": "Turn on a light at night.",
"date": "6 DEC 2025 / NIGHTTIME ROCK VIEW",
"narration": "Lights on the arm illuminated a drilled rock. A camera on the mast made this unusual nighttime picture.",
"source": "https://science.nasa.gov/mission/msl-curiosity/",
"note": "PIA26695 shows Nevado Sajama on sol 4740, December 6, 2025. MAHLI LED lights illuminated the scene and Mastcam took the image. This is not natural daylight, a flash photograph by an astronaut or a live camera.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7Mastcam with LED lighting",
"alt": "A color photograph, taken at night on the Martian surface, shows a hole drilled into a mostly flat slab of brownish-gray rock, at the center of the frame. The hole is dark, and surrounding its opening is mounded lighter-toned, tan soil and small rocks, extracted from the hole by the drill. The scene is illuminated by artificial light, but fades to darkness around the edges of the image. The upper right corner of the image is blocked by a portion of the Curiosity rover, unlit and creating a black silhouette over that part of the scene.",
"kind": "data"
},
{
"art": "cur-horizon.jpg",
"title": "Keep climbing through the story.",
"date": "STATUS CHECK / 11 NOV 2026",
"narration": "NASA still lists Curiosity as exploring Mars. In August 2026, the rover reached a total elevation gain of one kilometer.",
"source": "https://science.nasa.gov/mission/msl-curiosity/",
"note": "NASA mission page dates the one-kilometer elevation-gain milestone August 26, 2026. That is elevation gain on its journey from the Gale floor, not a one-kilometer drive or a single-day climb. PIA26691 is an earlier panorama, not current location or live telemetry. No final signal is invented.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7earlier Valle Grande panorama",
"alt": "A wide panoramic view captures the rocky, desolate landscape of Mars, featuring layered hills, scattered stones and rover tracks disappearing into the distance.",
"kind": "ongoing"
}
]
};
films['maven']={
"title": "WHERE DID\nTHE AIR GO?",
"subtitle": "MAVEN studied an atmosphere escaping into space. Its mission has ended; the data remain.",
"scenes": [
{
"art": "mav-structure.jpg",
"title": "Build a new kind of explorer.",
"date": "8 SEP 2011 / PRIMARY STRUCTURE",
"narration": "Before the journey, people built a frame to hold the instruments, fuel and tools. MAVEN would study the air high above Mars.",
"source": "https://science.nasa.gov/photojournal/primary-structure-for-maven-spacecraft/",
"note": "PIA14754 shows technicians inspecting the primary structure on September 8, 2011. This is not a completed flight spacecraft, a Mars photo or a reconstruction of the failure. The historical caption describes the mission before launch.",
"credit": "NASA/Lockheed Martin \u00b7primary structure",
"alt": "NASA's Mars Atmosphere and Volatile EvolutioN (MAVEN) spacecraft is scheduled to launch in November 2013 and will be the first mission devoted to understanding the Martian upper atmosphere.",
"kind": "data"
},
{
"art": "mav-launch.jpg",
"title": "Leave Earth with a question.",
"date": "18 NOV 2013 / LAUNCH",
"narration": "An Atlas V sent MAVEN toward Mars. How had this world lost so much of its atmosphere?",
"source": "https://science.nasa.gov/blogs/maven/2013/11/18/launch-images/",
"note": "Actual earlier launch image from the NASA mission blog. This small source frame is retained without generating missing hardware detail. MAVEN entered Mars orbit September 21, 2014 in EDT, September 22 UTC.",
"credit": "NASA \u00b7earlier launch frame",
"alt": "maven_launch_grab17_720",
"kind": "data"
},
{
"art": "mav-instrument.jpg",
"title": "Bring ultraviolet eyes.",
"date": "2013 / INSTRUMENT ON EARTH",
"narration": "One instrument could see ultraviolet light. That light helps scientists study gases and the upper atmosphere.",
"source": "https://science.nasa.gov/resource/maven-imaging-ultraviolet-spectrograph",
"note": "Imaging Ultraviolet Spectrograph delivered to Lockheed Martin. Hardware on Earth, not a cutaway of the whole spacecraft or a real instrument view at Mars. The source credits LASP.",
"credit": "LASP / NASA-hosted instrument photo",
"alt": "MAVEN Imaging Ultraviolet Spectrograph (IUVS) delivered to Lockheed Martin.",
"kind": "data"
},
{
"art": "mav-uvsouth.jpg",
"title": "See a world in different light.",
"date": "2023 RELEASE / ULTRAVIOLET MARS",
"narration": "MAVEN looked at Mars in wavelengths our eyes cannot see. Scientists turned the measurements into colors we can read.",
"source": "https://science.nasa.gov/resource/maven-spacecraft-stuns-with-ultraviolet-views-of-red-planet/",
"note": "One of two ultraviolet views released June 22, 2023, taken at different points in the Martian year. Display colors are false color, not what a human eye would see or a map of liquid oceans. The source separates the northern-hemisphere Figure A.",
"credit": "NASA/LASP/CU Boulder \u00b7ultraviolet false color",
"alt": "NASA\u2019s MAVEN (Mars Atmosphere and Volatile EvolutioN) mission acquired stunning views of Mars in two ultraviolet images taken at different points along our neighboring planet\u2019s orbit around the Sun.",
"kind": "data"
},
{
"art": "mav-clouds.jpg",
"title": "Watch the clouds change.",
"date": "EARLIER UV OBSERVATIONS / CLOUDS",
"narration": "Several views help us compare clouds as Mars turns. A planet can change even while a spacecraft stays far above it.",
"source": "https://science.nasa.gov/mission/maven/",
"note": "The NASA mission page describes four MAVEN ultraviolet images over about seven hours. It notes that simulated intermediate views were used in the original sequence. This displayed multi-view product is not a live rotation video or four simultaneous images; colors represent ultraviolet data.",
"credit": "NASA/MAVEN/University of Colorado \u00b7UV cloud sequence",
"alt": "A series of four full disc images of Mars show clouds moving across the globe.",
"kind": "data"
},
{
"art": "mav-aurora.jpg",
"title": "Discover a different light show.",
"date": "14-20 MAY 2024 / AURORA OBSERVATIONS",
"narration": "Energetic particles from a solar storm reached Mars. MAVEN measured auroras across the nightside.",
"source": "https://science.nasa.gov/photojournal/maven-detects-auroras-during-solar-storm-in-2024/",
"note": "PIA26304 is the NASA still associated with the aurora sequence. Purple displays ultraviolet auroral measurements, not natural-color light. Brighter purple marks more auroral emission; the end of the original animation contains instrument noise from the strongest particles. No invented audio is played.",
"credit": "NASA/University of Colorado/LASP \u00b7ultraviolet aurora",
"alt": "The purple color in this animated GIF shows auroras on Mars' nightside as detected by the ultraviolet instrument aboard NASA's MAVEN orbiter between May 14 and 20, 2024. The brighter the purple, the more auroras were present.",
"kind": "data"
},
{
"art": "mav-uvnorth.jpg",
"title": "Keep a record for future questions.",
"date": "2023 RELEASE / NORTHERN VIEW",
"narration": "A second ultraviolet view shows another season and side of Mars. The measurements became part of a long record of its atmosphere.",
"source": "https://science.nasa.gov/resource/maven-spacecraft-stuns-with-ultraviolet-views-of-red-planet/",
"note": "Figure A identifies the northern hemisphere. This is a separate earlier observation, not a zoomed duplicate of the other ultraviolet scene. It is false color and does not show current weather or a final image from December 2025.",
"credit": "NASA/LASP/CU Boulder \u00b7northern ultraviolet view",
"alt": "Image of Mars\u2019northern hemisphere",
"kind": "data"
},
{
"art": "mav-end.jpg",
"title": "The signal ended. The learning did not.",
"date": "LAST CONTACT / 6 DEC 2025",
"narration": "MAVEN fell silent. NASA declared the mission ended on June 3, 2026. Years of atmosphere measurements remain for people to study.",
"source": "https://dataverse.jpl.nasa.gov/api/access/datafile/101021",
"note": "Earlier artist concept, not a last photograph, wreck or final radio packet. NASA mission record distinguishes December 6, 2025 last contact from June 3, 2026 mission-end declaration. The July 17 ARB final report could not conclusively identify a single root cause. It judged an unrequested computer reboot followed by faulty IMU rate data and unrecovered spin most likely, with radiation upset or software issue as possible reboot triggers. Board considers the spacecraft likely intact in stable orbit, not directly confirmed.",
"credit": "NASA \u00b7earlier artist concept",
"alt": "NASA MAVEN end image",
"kind": "data"
}
]
};
films['perseverance']={
"title": "ROCKS TO KEEP.\nQUESTIONS TO ASK.",
"subtitle": "Perseverance studies the past and saves samples for a possible future. Its journey continues.",
"scenes": [
{
"art": "per-launch.jpg",
"title": "Carry the questions farther.",
"date": "30 JUL 2020 / LAUNCH",
"narration": "Perseverance left Earth with tools to study rocks and collect samples. Could ancient Mars once have supported life?",
"source": "https://science.nasa.gov/resource/roaring-perseverance-launch/",
"note": "Actual Atlas V launch with Mars 2020 aboard from Florida. The mission searches for signs of ancient microbial life, not proof that living organisms have been found.",
"credit": "NASA/Joel Kowsky \u00b7launch",
"alt": "Image shows the dramatic launch of a United Launch Alliance Atlas V rocket with NASA\u2019s Mars 2020 Perseverance rover onboard rom Space Launch Complex 41, Thursday, July 30, 2020, at Cape Canaveral Air Force Station in Florida.",
"kind": "data"
},
{
"art": "per-landing.jpg",
"title": "Hang on for a gentle arrival.",
"date": "18 FEB 2021 / LANDING",
"narration": "A descent stage lowered the rover on cables. A camera above the rover caught this moment near the surface.",
"source": "https://science.nasa.gov/resource/high-resolution-still-image-of-perseverances-landing/",
"note": "PIA24428 is actual video-camera imagery from the descent stage on February 18, 2021, not an artist concept or a photo from a hovering visitor. The descent stage later flew away from the landed rover.",
"credit": "NASA/JPL-Caltech \u00b7descent-camera frame",
"alt": "Mars Perseverance rover descends to the surface of Mars",
"kind": "data"
},
{
"art": "per-delta.jpg",
"title": "Read layers like pages.",
"date": "17 APR 2021 / SCARP A",
"narration": "Layers in an old delta help tell a watery story. Long ago, a lake, rivers and a delta shaped this part of Jezero Crater.",
"source": "https://science.nasa.gov/mission/mars-2020-perseverance/",
"note": "PIA24813 Mastcam-Z image of Scarp a. It records evidence of ancient environments, not a lake still full of water or evidence of organisms in the photograph.",
"credit": "NASA/JPL-Caltech/ASU/MSSS \u00b7Mastcam-Z",
"alt": "The escarpment the science team refers to as Scarp a, is seen in this image captured by Perseverance rover's Mastcam-Z instrument on April 17, 2021.",
"kind": "data"
},
{
"art": "per-lava.jpg",
"title": "Find a surprising crater floor.",
"date": "10 SEP 2021 / ROCHETTE",
"narration": "Some rocks on the crater floor began as volcanic rock. Water changed them later, leaving more clues to investigate.",
"source": "https://science.nasa.gov/mission/mars-2020-perseverance/",
"note": "PIA24836 is an earlier selfie over Rochette on sol 198. The NASA mission page describes two types of volcanic floor rock that interacted with water. The selfie is assembled imagery, not a photo taken by another astronaut.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7earlier selfie",
"alt": "NASA\u2019s Perseverance Mars rover took this selfie over a rock nicknamed \"Rochette,\" on September 10, 2021, the 198th Martian day, or sol of the mission.",
"kind": "data"
},
{
"art": "per-river.jpg",
"title": "Follow a river without getting wet.",
"date": "17 MAY 2024 / NERETVA VALLIS",
"narration": "Today the channel is dry and filled with dunes. Billions of years ago, it helped feed water into the crater.",
"source": "https://science.nasa.gov/mission/mars-2020-perseverance/",
"note": "PIA26335 looks downstream along the ancient Neretva Vallis channel. The wide mosaic is kept whole, including its original edges. No present river, live weather or invented extension is shown.",
"credit": "NASA/JPL-Caltech/ASU/MSSS \u00b7earlier panorama",
"alt": "Perseverance captured this mosaic looking downstream of the dune-filled Neretva Vallis river channel on May 17, 2024. The channel fed Jezero Crater with fresh water billions of years ago.",
"kind": "data"
},
{
"art": "per-tubes.jpg",
"title": "Leave a backup rock collection.",
"date": "2022-2023 / THREE FORKS DEPOT",
"narration": "The rover left ten sealed sample tubes on the ground. They are a backup collection for a possible future return to Earth.",
"source": "https://science.nasa.gov/photojournal/watsons-photomontage-of-mars-sample-depot/",
"note": "Photomontage of ten separate WATSON tube images after deposition December 21, 2022 to January 28, 2023. Tubes are not arranged side by side on Mars as shown in this montage. They remain samples on Mars, not already returned to Earth; future retrieval is not guaranteed.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7tube photomontage",
"alt": "This photomontage shows each of the sample tubes deposited by NASA's Perseverance Mars rover at the Three Forks sample depot, as viewed by the WATSON camera on the end of the rover's robotic arm.",
"kind": "data"
},
{
"art": "per-biosignature.jpg",
"title": "A clue is not yet an answer.",
"date": "23 JUL 2024 / CHEYAVA FALLS",
"narration": "One sample holds possible signs linked to ancient life. More data and study are needed before scientists can say whether life was there.",
"source": "https://science.nasa.gov/mission/mars-2020-perseverance/",
"note": "Earlier PIA26344 selfie, assembled from 62 images July 23, 2024. NASA describes potential biosignatures in the Sapphire Canyon sample from Cheyava Falls, with results published September 2025. Potential biosignature is not proof of life. Other explanations need testing. This is not a microscope image of organisms.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7earlier selfie",
"alt": "NASA Perseverance biosignature image",
"kind": "data"
},
{
"art": "per-distance.jpg",
"title": "Keep rolling into new questions.",
"date": "STATUS CHECK / 11 NOV 2026",
"narration": "NASA still lists Perseverance as exploring Mars. In October 2026, it passed the record for distance driven on another world.",
"source": "https://science.nasa.gov/mission/mars-2020-perseverance/",
"note": "NASA states 45.22 km as of October 11, 2026, passing Opportunity at 45.16 km. The chart is a dated historical comparison, not current odometer telemetry. The file name includes August, but its caption and displayed data are October 11. No promised future route or final signal is invented.",
"credit": "NASA/JPL-Caltech \u00b7dated distance comparison",
"alt": "An infographic compares driving distances on Mars and the Moon by various rovers, with NASA\u2019s Perseverance leading as of Oct. 11, 2026, at more than 45 kilometers.",
"kind": "ongoing"
}
]
};
films['perseverance-backshell']={
"title": "THE GEAR\nTHAT STAYED BEHIND.",
"subtitle": "Mars 2020 landing hardware protected a rover, then became a trail of engineering clues.",
"scenes": [
{
"art": "bs-assembly.jpg",
"title": "Protect the explorer inside.",
"date": "4 MAY 2020 / EARTH ASSEMBLY",
"narration": "The backshell and heat shield helped protect Perseverance on the way down. The parachute waited inside the cone-shaped backshell.",
"source": "https://science.nasa.gov/resource/prepping-perseverance-descent-and-entry-components/",
"note": "Photo from Kennedy preparation, before attachment to the rover. Backshell is different from the heat shield, powered descent stage and rover. Not an exposed Mars wreck or an exact interior cutaway.",
"credit": "NASA/Christian Mangano \u00b7Earth preparation",
"alt": "In the Payload Hazardous Servicing Facility at Kennedy Space Center in Florida, the Backshell-Powered Descent Vehicle and Entry Vehicle assemblies are being prepared to be attached to the Perseverance rover on May 4, 2020.",
"kind": "data"
},
{
"art": "bs-wind.jpg",
"title": "Test a giant parachute.",
"date": "JUN 2017 / WIND TUNNEL",
"narration": "A wind tunnel helped engineers test how the parachute design behaved. Testing came long before the trip to Mars.",
"source": "https://science.nasa.gov/resource/wind-tunnel-testing-perseverances-parachute",
"note": "PIA23916 shows testing of the parachute design at NASA Ames. It is Earth test hardware, not the final flight canopy open in a Martian sky. The NASA source was published May 2020 but identifies June 2017 in its caption.",
"credit": "NASA/JPL-Caltech/Ames \u00b7wind-tunnel test",
"alt": "an image of a test of the parachute that will allow Perseverance to land on Mars",
"kind": "data"
},
{
"art": "bs-flighttest.jpg",
"title": "Try it in fast-moving air.",
"date": "7 SEP 2018 / ASPIRE TEST",
"narration": "A test flight checked the parachute at high speed. Engineers used the results to prepare for a difficult landing.",
"source": "https://science.nasa.gov/resource/parachute-for-perseverance/",
"note": "One still extracted from the NASA ASPIRE test GIF, September 7, 2018. It was a test on Earth, not descent at Mars. This page shows a still, not a new reconstruction or the whole test video.",
"credit": "NASA/JPL-Caltech \u00b7earlier test frame",
"alt": "This animated GIF shows a successful test of the parachute that will be used to land NASA's Perseverance rover on Mars",
"kind": "data"
},
{
"art": "bs-descent.jpg",
"title": "A tiny traveler under a parachute.",
"date": "18 FEB 2021 / SEEN FROM ORBIT",
"narration": "MRO caught the arriving spacecraft below its parachute. Careful timing let one explorer photograph another.",
"source": "https://science.nasa.gov/resource/hirise-captured-perseverance-during-descent-to-mars/",
"note": "PIA24270 is actual HiRISE orbital imagery of the Mars 2020 descent, with an annotated inset. The small spacecraft is not enlarged with invented detail. It is before backshell/parachute separation and is not a photograph of the rover alone flying.",
"credit": "NASA/JPL-Caltech/University of Arizona \u00b7HiRISE",
"alt": "in this image, the descent stage holding NASA\u2019s Perseverance rover can be seen falling thorough the Martian atmosphere, its parachute trailing behind",
"kind": "data"
},
{
"art": "bs-orbital.jpg",
"title": "Different pieces. Different resting places.",
"date": "19 FEB 2021 / ORBITAL CONTEXT",
"narration": "After the rover landed safely, its landing hardware stayed behind. The backshell and parachute came down away from the rover.",
"source": "https://science.nasa.gov/photojournal/perseverance-and-mars-2020-spacecraft-components-on-the-surface/",
"note": "PIA24333 source caption identifies CTX for this broad context image and separate close-up products. The backshell/parachute were jettisoned at about 2.1 km altitude and struck the ground at about 126 km/h. The rover and powered descent stage were separate objects.",
"credit": "NASA/JPL-Caltech/MSSS \u00b7CTX context",
"alt": "This first image of NASA's Perseverance Rover on the surface of Mars from the Context Camera (CTX) aboard NASA's Mars Reconnaissance Orbiter (MRO) shows the many parts of the Mars 2020 mission landing system that got the rover safely on the ground.",
"kind": "data"
},
{
"art": "bs-shell.jpg",
"title": "A helicopter returns to look.",
"date": "19 APR 2022 / FLIGHT 26",
"narration": "Ingenuity flew above the discarded backshell. Its pictures gave engineers a closer look at equipment that had done its job.",
"source": "https://www.jpl.nasa.gov/news/nasas-mars-helicopter-spots-gear-that-helped-perseverance-rover-land/",
"note": "PIA25219, actual Ingenuity Flight 26 image. The shell is upright but damaged by impact. This is not an alien object, a complete rover or an exact photo of the impact itself. Interpretations of performance in the April release were preliminary.",
"credit": "NASA/JPL-Caltech \u00b7Ingenuity aerial image",
"alt": "This image of Perseverance's backshell and parachute was collected by NASA's Ingenuity Mars Helicopter during its 26th flight on April 19, 2022.",
"kind": "data"
},
{
"art": "bs-chute.jpg",
"title": "The canopy rests in the dust.",
"date": "19 APR 2022 / PARACHUTE VIEW",
"narration": "The orange-and-white parachute lies spread across the ground. Some lines and fabric can still be seen in the picture.",
"source": "https://www.jpl.nasa.gov/news/nasas-mars-helicopter-spots-gear-that-helped-perseverance-rover-land/",
"note": "PIA25217 from Flight 26. Only about a third of the roughly 21.5-meter-wide canopy is visible. The full deployed parachute shape and hidden fabric are not reconstructed, and no current condition is inferred.",
"credit": "NASA/JPL-Caltech \u00b7earlier parachute view",
"alt": "This image of Perseverance's backshell and supersonic parachute was captured by NASA's Ingenuity Mars Helicopter during its 26th flight on Mars on April 19, 2022.",
"kind": "data"
},
{
"art": "bs-debris.jpg",
"title": "Even discarded gear can teach.",
"date": "2022 FOLLOW-UP / DEBRIS FIELD",
"narration": "Engineers studied the shell, parachute and pieces around them. A landing can leave clues for the people planning the next one.",
"source": "https://science.nasa.gov/resource/debris-field-from-perseverance-landing-gear-seen-by-mars-helicopter/",
"note": "PIA25218 is a cropped and processed aerial image from April 19, 2022 at about 8 meters altitude. This is a planned jettison after protective duties, not a separately failed transmitting mission or an invented final radio message. Possible future uses of the engineering lessons do not guarantee any sample-return plan.",
"credit": "NASA/JPL-Caltech \u00b7processed debris panorama",
"alt": "Perseverance\u2019s backshell, supersonic parachute, and associated debris field is strewn across the Martian surface in this image captured by NASA\u2019s Ingenuity Mars Helicopter during its 26th flight on April 19, 2022.",
"kind": "data"
}
]
};
films['ingenuity']={
"title": "A SMALL FLYER.\nA NEW VIEW.",
"subtitle": "Ingenuity proved flight on Mars was possible. Its flying mission ended; its lessons remain.",
"scenes": [
{
"art": "ing-deployment.jpg",
"title": "Unfold a tiny flyer.",
"date": "26 MAR-3 APR 2021 / DEPLOYMENT",
"narration": "Ingenuity traveled under Perseverance. Step by step, the rover placed its little passenger on the ground.",
"source": "https://science.nasa.gov/resource/ingenuitys-complete-deployment/",
"note": "Still extracted from the WATSON deployment GIF, which spans March 26 to April 3, 2021. It is an actual deployment frame, not a single instant covering the entire sequence or an animated rotor demonstration.",
"credit": "NASA/JPL-Caltech \u00b7deployment sequence frame",
"alt": "Animation shows each step of the Ingenuity helicopter deploying from the belly of the rover",
"kind": "data"
},
{
"art": "ing-firstflight.jpg",
"title": "Lift off on another world.",
"date": "19 APR 2021 / FIRST FLIGHT",
"narration": "The helicopter rose above Mars, hovered and landed. For the first time, powered, controlled flight worked on another planet.",
"source": "https://science.nasa.gov/resource/perseverances-navcam-view-of-ingenuitys-first-flight",
"note": "One frame from the actual Navcam flight sequence PIA24586, observed by Perseverance about 64 meters away. Ingenuity rose to about three meters on its first flight. Still frame, not a live feed or a simulated flight.",
"credit": "NASA/JPL-Caltech \u00b7first-flight Navcam frame",
"alt": "NASA\u2019s Ingenuity Mars Helicopter achieves powered, controlled flight for the first time on another planet, hovering for several seconds before touching back down on April 19, 2021. The image was taken by the left Navcam aboard the agency\u2019s Perseverance Mars rover.",
"kind": "data"
},
{
"art": "ing-tracks.jpg",
"title": "See the rover trail from above.",
"date": "5 JUL 2021 / FLIGHT 9",
"narration": "An aerial view showed wheel tracks winding over the ground. A flying scout could help people see what lay ahead.",
"source": "https://science.nasa.gov/resource/ingenuity-spots-rover-tracks-during-ninth-flight",
"note": "PIA24730, captured during Flight 9. The rover tracks are on the ground and part of the helicopter landing gear appears at top left. This is a real aerial image, not an orbital photograph or a guaranteed safe route.",
"credit": "NASA/JPL-Caltech \u00b7helicopter color camera",
"alt": "This is a colored image of the sandy surface of Mars. There are small rocks and marks of the rovers wheels on the sandy surface.",
"kind": "data"
},
{
"art": "ing-engineering.jpg",
"title": "Look back at the landing gear.",
"date": "19 APR 2022 / FLIGHT 26",
"narration": "Ingenuity photographed the shell and parachute that helped the rover arrive. Its new viewpoint gave engineers more clues.",
"source": "https://www.jpl.nasa.gov/news/nasas-mars-helicopter-spots-gear-that-helped-perseverance-rover-land/",
"note": "PIA25217, one of the Flight 26 aerial images of Mars 2020 entry/descent hardware. This is a separate task from rover route scouting. No recovered equipment or new return mission is claimed.",
"credit": "NASA/JPL-Caltech \u00b7Flight 26",
"alt": "This image of Perseverance's backshell and supersonic parachute was captured by NASA's Ingenuity Mars Helicopter during its 26th flight on Mars on April 19, 2022.",
"kind": "data"
},
{
"art": "ing-numbers.jpg",
"title": "Five planned flights became seventy-two.",
"date": "FLIGHT RECORD / 2021-2024",
"narration": "A short experiment grew into nearly three years of flying. Ingenuity completed 72 flights and more than two hours in the air.",
"source": "https://science.nasa.gov/mission/mars-2020-perseverance/ingenuity-mars-helicopter/",
"note": "NASA summary infographic, not raw camera imagery. NASA mission page lists 128.8 minutes and approximately 17.0 km, while this graphic rounds distance to 11 miles (17.7 km). Those published summaries differ; no exact distance is inferred here. Graphic is a historical summary, not an active flight counter or current aircraft condition.",
"credit": "NASA/JPL-Caltech \u00b7mission totals infographic",
"alt": "Flight Log by the Numbers: 72 flights, ~128.8 mins flight time, distance flown 11 miles/17 km, max ground speed 22.4 mph/10 m/s, highest altitude 24 meters/79 ft",
"kind": "data"
},
{
"art": "ing-damage.jpg",
"title": "The flying chapter ends.",
"date": "18 JAN 2024 / FINAL FLIGHT",
"narration": "A hard landing damaged the rotor blades. Ingenuity could no longer fly, but the story did not end with instant silence.",
"source": "https://www.nasa.gov/missions/mars-2020-perseverance/ingenuity-helicopter/nasas-ingenuity-mars-helicopter-team-says-goodbye-for-now/",
"note": "PIA26238 was taken by Perseverance February 24, 2024, about five weeks after Flight 72. Part of a blade lies about 15 meters west. This distant aftermath photo is not footage of the hard landing. Mission completion was announced January 25; communications were reestablished after the flight.",
"credit": "NASA/JPL-Caltech/LANL/CNES/CNRS \u00b7earlier aftermath panorama",
"alt": "NASA\u2019s Ingenuity Mars Helicopter, right, stands near the apex of a sand ripple in an image taken by Perseverance on Feb. 24, about five weeks after the rotorcraft\u2019s final flight. Part of one of Ingenuity\u2019s rotor blades lies on the surface about 49 feet (15 meters) west of helicopter (left of center in the image).",
"kind": "data"
},
{
"art": "ing-chain.jpg",
"title": "Ask what happened.",
"date": "DEC 2024 / INVESTIGATION EXPLANATION",
"narration": "Engineers studied the last flight. Their most likely explanation starts with a navigation camera struggling to track the nearly featureless sand.",
"source": "https://science.nasa.gov/photojournal/ingenuitys-hard-landing/",
"note": "NASA explanatory diagram, not a photograph of Flight 72. Most-likely chain: too few trackable surface features, high horizontal touchdown speed, hard impact on a sloping ripple, pitch/roll and rotor loads beyond design limits. The diagram simplifies the sequence and labels blade-tip ground contact; its accompanying caption instead describes rotor overload from rapid attitude change. Neither establishes an observed exact impact sequence. Multiple scenarios remain viable. December 2024 source said a technical report was forthcoming; no later final report is asserted here.",
"credit": "NASA/JPL-Caltech \u00b7most-likely scenario diagram",
"alt": "This graphic depicts the most likely scenario for the hard landing of NASA's Ingenuity Mars Helicopter during its 72nd and final flight on Jan. 18, 2024.",
"kind": "data"
},
{
"art": "ing-team.jpg",
"title": "Say goodbye to a flying pioneer.",
"date": "16 APR 2024 / FINAL TEAM SHIFT",
"narration": "The team checked a software update for a stationary testbed. The helicopter could keep collecting data even after the rover traveled beyond radio range.",
"source": "https://www.nasa.gov/missions/mars-2020-perseverance/ingenuity-helicopter/nasas-ingenuity-mars-helicopter-team-says-goodbye-for-now/",
"note": "PIA26318 records the final joint operations shift, not the last-ever radio signal. The April release describes a stored-data plan, not proof of present operation. NASA December 2024 reported occasional weather/avionics data through the rover. Do not confuse final flight, mission-end announcement, final team shift and final communication. A farewell containing team names had been uploaded by people and returned by the helicopter; no invented spoken last words are played.",
"credit": "NASA/JPL-Caltech \u00b7Earth control-room photograph",
"alt": "Engineers working on NASA\u2019s Ingenuity",
"kind": "data"
}
]
};
films['pioneer-10']={
"title": "FIRST INTO\nTHE UNKNOWN.",
"subtitle": "Pioneer 10 opened a path to Jupiter. Its last weak signal arrived in 2003.",
"scenes": [
{
"art": "p10-assembly.jpg",
"title": "Build for a place no probe had visited.",
"date": "1971 / EARTH ASSEMBLY",
"narration": "Pioneer 10 was made to travel beyond Mars. Its next big stop was Jupiter, a giant world still waiting for a close look.",
"source": "https://www.nasa.gov/history/50-years-ago-pioneer-10-launches-to-explore-jupiter/",
"note": "Earth construction photograph used in NASA history, filename identifies December 12, 1971. Not a spacecraft photographed at Jupiter. No Smithsonian mockup photo or separately credited artist work is used in this scene.",
"credit": "NASA \u00b7Earth assembly",
"alt": "pioneer_10_launch_during_construction_dec_12_1971",
"kind": "data"
},
{
"art": "p10-launch.jpg",
"title": "Begin the long trip.",
"date": "2 MAR 1972 LOCAL / LAUNCH",
"narration": "An Atlas-Centaur sent Pioneer 10 away from Earth. It passed the distance of the Moon in less than eleven hours.",
"source": "https://www.nasa.gov/history/50-years-ago-pioneer-10-launches-to-explore-jupiter/",
"note": "Launch date is March 2 in Florida, March 3 at 01:49 UTC per JPL Horizons. The NASA mission summary pairs March 2 with UT time, a date/time mismatch. This scene keeps the local date and does not silently label it UTC.",
"credit": "NASA \u00b7Atlas-Centaur launch",
"alt": "pioneer 10 launch",
"kind": "data"
},
{
"art": "p10-tools.jpg",
"title": "Bring more than a camera.",
"date": "ELEVEN SCIENCE INSTRUMENTS",
"narration": "Tools could study particles, magnetic fields and heat. A special imaging instrument would help people see Jupiter up close.",
"source": "https://www.nasa.gov/history/50-years-ago-pioneer-10-launches-to-explore-jupiter/",
"note": "NASA instrument diagram, not a photograph of the inside or a live science display. Photopolarimeter supplied images. Radioisotope generators supplied power; no nuclear reactor or solar panels are invented.",
"credit": "NASA \u00b7labeled hardware diagram",
"alt": "pioneer 10 launch instruments simple",
"kind": "data"
},
{
"art": "p10-route.jpg",
"title": "Cross the asteroid belt.",
"date": "JUL 1972-FEB 1973 / FIRST CROSSING",
"narration": "Would the spacecraft make it through safely? It crossed the belt and kept going, helping later explorers plan their trips.",
"source": "https://www.nasa.gov/history/50-years-ago-pioneer-10-launches-to-explore-jupiter/",
"note": "NASA trajectory diagram, not a camera image of a crowded asteroid field. July 15, 1972 entry to February 15, 1973 exit. Diagram dates and planet locations describe the historical journey, not current positions.",
"credit": "NASA \u00b7historical trajectory diagram",
"alt": "pioneer 10 launch interplanetary trajectory color",
"kind": "data"
},
{
"art": "p10-jupiter.jpg",
"title": "Meet the giant and its moons.",
"date": "DEC 1973 / JUPITER FLYBY",
"narration": "Jupiter filled the pictures with clouds and stripes. Pioneer 10 also returned early close views of several large moons.",
"source": "https://www.nasa.gov/history/50-years-ago-pioneer-10-launches-to-explore-jupiter/",
"note": "Composite of Pioneer 10 images of Jupiter, Europa and Ganymede. Planet and moons are NOT to scale or arranged as a simultaneous family portrait. Closest approach December 4 UTC, December 3 US local time. Radiation disrupted some imaging; no successful Io close-up is asserted.",
"credit": "NASA \u00b7not-to-scale image composite",
"alt": "pioneer 10 launch jupiter_europa_ganymede_composite",
"kind": "data"
},
{
"art": "p10-ganymede.jpg",
"title": "A moon becomes more than a dot.",
"date": "DEC 1973 / GANYMEDE",
"narration": "This early view looks fuzzy beside pictures we have today. It was still a new chance to study a faraway moon.",
"source": "https://science.nasa.gov/mission/pioneer-10/",
"note": "Actual Pioneer 10 Ganymede image shown on the NASA mission page. Low resolution is retained rather than replaced with imagined surface detail or a modern Voyager/Galileo image.",
"credit": "NASA \u00b7Pioneer 10 Ganymede image",
"alt": "Pioneer 10 Ganymede",
"kind": "data"
},
{
"art": "p10-crescent.jpg",
"title": "Watch Jupiter fade behind.",
"date": "4 DEC 1973 UTC / DEPARTURE VIEWS",
"narration": "After the closest pass, Jupiter became a crescent. The spacecraft was moving onward, carrying its discoveries into the next part of the trip.",
"source": "https://science.nasa.gov/image-detail/amf-c8c6fe68-5ef7-4392-91b8-bedba5b2bff2/",
"note": "NASA AC73-9341 sequence panel. These are separate images across the encounter, not simultaneous planets. The crescent is distorted by the imaging process; no generated detail or exact natural-color appearance is promised.",
"credit": "NASA \u00b7historical Jupiter image sequence",
"alt": "Several images of Jupiter that increase in size. The planet appears to have bands of oranges, red, and beige.",
"kind": "data"
},
{
"art": "p10-plaque.jpg",
"title": "A quiet traveler keeps a message.",
"date": "23 JAN 2003 / LAST WEAK SIGNAL",
"narration": "The spacecraft sent a final faint signal that Earth could detect. Its power had weakened, but the plaque it carried would keep traveling.",
"source": "https://science.nasa.gov/missions/pioneer/pioneer-10-sends-last-signal/?linkId=197891890",
"note": "Earlier Earth photograph of the plaque installed on Pioneer 10, not a final space image. Last telemetry April 27, 2002; last weak carrier January 23, 2003 had no telemetry. Final March 3-5, 2006 attempt found no signal. Power decline is the engineering explanation, not a photographed failure. Plaque is a human-made physical message, not alien contact or fictional spoken last words. Current position/condition and arrival at Aldebaran are not asserted.",
"credit": "NASA \u00b7earlier installed-plaque photograph",
"alt": "pioneer_10_launch_plaque_installed_on_spacecraft",
"kind": "data"
}
]
};
films['pioneer-11']={
"title": "ANOTHER GIANT.\nA NEW FIRST.",
"subtitle": "Pioneer 11 followed Jupiter with the first close encounter at Saturn.",
"scenes": [
{
"art": "p11-assembly.jpg",
"title": "Prepare another pioneer.",
"date": "16 MAR 1973 / EARTH PREPARATION",
"narration": "Pioneer 11 waited for its protective rocket cover. Its first destination was Jupiter, following the path of its twin.",
"source": "https://images-assets.nasa.gov/image/KSC-73P-0116/collection.json",
"note": "NASA KSC-73P-0116 identifies Pioneer G before launch. Actual Earth hardware, not Pioneer10, a museum mockup or a photograph taken in deep space. Collection metadata and NASA photo credit checked in the public NASA Images API.",
"credit": "NASA/KSC \u00b7KSC-73P-0116",
"alt": "Pioneer G awaiting its payload fairing at Cape Kennedy, March 16, 1973",
"kind": "data"
},
{
"art": "p11-launch.jpg",
"title": "Leave Earth at night.",
"date": "5 APR 1973 LOCAL / LAUNCH",
"narration": "The second Pioneer headed away from Earth. A long journey would take it past two giant planets.",
"source": "https://www.nasa.gov/solar-system/planets/saturn/40-years-ago-pioneer-11-first-to-explore-saturn/",
"note": "Actual Pioneer11 Atlas-Centaur launch. April 5 Florida local equals April 6 at 02:11 UTC per NASA mission record. Dates are not contradictory when their timezones are retained.",
"credit": "NASA \u00b7night launch",
"alt": "pioneer_11_launch",
"kind": "data"
},
{
"art": "p11-route.jpg",
"title": "Use one planet to reach another.",
"date": "1973-1979 / TRAJECTORY",
"narration": "Jupiter\u2019s gravity changed the spacecraft\u2019s path. That swing set up a second encounter, this time with Saturn.",
"source": "https://www.nasa.gov/solar-system/planets/saturn/40-years-ago-pioneer-11-first-to-explore-saturn/",
"note": "NASA historical trajectory diagram. It is not a live position plot, an orbit around Jupiter/Saturn or a prediction that the spacecraft has crossed the heliopause. The planets are schematic and not at current locations. NASA mission summary dates asteroid-belt completion to mid-March 1974; the 2019 historical narrative says April. No single exact belt-exit day is asserted.",
"credit": "NASA \u00b7historical route diagram",
"alt": "pioneer_11_trajectory",
"kind": "data"
},
{
"art": "p11-jupiter.jpg",
"title": "Look toward Jupiter\u2019s north.",
"date": "DEC 1974 / JUPITER FLYBY",
"narration": "Pioneer 11 saw Jupiter from a new direction. It sent back early pictures of the giant planet\u2019s polar regions.",
"source": "https://science.nasa.gov/resource/pioneer-11s-jupiter/",
"note": "NASA/Ames Pioneer11 north-polar view from 1974. The pole lies near the day/night boundary at the top of the planet. Historical low resolution is retained, not replaced by a modern Juno image or an imagined polar storm.",
"credit": "NASA/Ames \u00b7earlier Jupiter polar view",
"alt": "Fuzzy color image of Jupiter",
"kind": "data"
},
{
"art": "p11-saturn.jpg",
"title": "Meet the rings up close.",
"date": "1 SEP 1979 / SATURN ENCOUNTER",
"narration": "Pioneer 11 became the first spacecraft to study Saturn nearby. Rings, clouds and a distant moon came into view.",
"source": "https://www.nasa.gov/solar-system/planets/saturn/40-years-ago-pioneer-11-first-to-explore-saturn/",
"note": "NASA/Ames view of Saturn and Titan from about 1.8 million miles, not a scale model of the whole system or a picture at closest approach. Preliminary-image ring/shadow irregularities are processing artifacts, not real giant gaps. Flyby closest approach was about 21,000 km from cloud tops.",
"credit": "NASA/Ames \u00b7Saturn and Titan image",
"alt": "saturn_from_pioneer_11",
"kind": "data"
},
{
"art": "p11-titan.jpg",
"title": "A moon behind a cloudy veil.",
"date": "1979 / TITAN VIEW",
"narration": "Titan looked like a fuzzy orange ball. Its clouds hid the surface, leaving more questions for later explorers.",
"source": "https://www.nasa.gov/solar-system/planets/saturn/40-years-ago-pioneer-11-first-to-explore-saturn/",
"note": "Actual Pioneer11 Titan view from about 2.2 million miles in NASA history. This does not show Titan terrain or a landing. It is not a Cassini/Huygens photograph; the low resolution is part of this earlier record.",
"credit": "NASA/Ames \u00b7Titan flyby image",
"alt": "pioneer_11_saturn_titan",
"kind": "data"
},
{
"art": "p11-departure.jpg",
"title": "Leave Saturn behind.",
"date": "1979 / POST-ENCOUNTER VIEW",
"narration": "After the flyby, Saturn grew smaller behind the traveler. Measurements and pictures gave the next missions a head start.",
"source": "https://www.nasa.gov/solar-system/planets/saturn/40-years-ago-pioneer-11-first-to-explore-saturn/",
"note": "NASA history identifies this as a Pioneer11 post-encounter Saturn image. It is not the final-ever camera frame or last communication. No new close-up detail is generated and no exact image time is invented.",
"credit": "NASA \u00b7post-encounter Saturn view",
"alt": "pioneer_11_saturn_post_encounter",
"kind": "data"
},
{
"art": "p11-radio.jpg",
"title": "One last small packet reaches home.",
"date": "24 NOV 1995 / LAST ENGINEERING DATA",
"narration": "The mission had ended in September. A few minutes of engineering data arrived in November, before contact was lost again.",
"source": "https://science.nasa.gov/mission/pioneer-11/",
"note": "Earlier Pioneer 11 instrument/antenna diagram from NASA/GSFC 1973 report Figure 2 (PDF page 16), not a final space photograph or a reconstructed failure. NASA summary calls September 30 last contact/mission end but also records November 24 engineering data; NASA history names November 24 final signal. Both dates are retained. The spacecraft antenna could no longer keep Earth in view. No continuing transmission or current state is known here, and crossing Neptune orbit in 1990 is not a measured heliopause crossing. Diagram source: https://ntrs.nasa.gov/api/citations/19730022673/downloads/19730022673.pdf",
"credit": "NASA/GSFC \u00b7earlier Pioneer 11 hardware diagram",
"alt": "NASA/GSFC Pioneer 11 hardware diagram showing antenna, magnetometers and other instruments",
"kind": "data"
}
]
};
films['voyager-1']={
"title": "A TINY HOME.\nA VAST BEYOND.",
"subtitle": "From Jupiter and Saturn to measurements beyond the solar bubble.",
"scenes": [
{
"art": "v1-launch.jpg",
"title": "Take the faster road.",
"date": "5 SEP 1977 / LAUNCH",
"narration": "Voyager 1 left Earth after its twin. Its faster path would bring it to Jupiter first.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Actual Voyager 1 launch. Voyager 2 launched first on August 20; numbers are not launch order. September 5 at 12:56 UTC for Voyager 1.",
"credit": "NASA \u00b7Voyager 1 launch",
"alt": "NASA \u00b7Voyager 1 launch: Take the faster road.",
"kind": "data"
},
{
"art": "v1-tools.jpg",
"title": "Carry a whole science toolbox.",
"date": "1977 / SPACECRAFT INSTRUMENTS",
"narration": "Cameras could see clouds and moons. Other instruments measured particles, magnetic fields and waves.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Historical NASA schematic of Voyager instruments, not a current instrument-status display or a photograph of internal machinery. The cameras have been off since 1990. The current status table and April 2026 release supersede older claims that four Voyager 1 science instruments remain on.",
"credit": "NASA \u00b7historical instrument diagram",
"alt": "NASA \u00b7historical instrument diagram: Carry a whole science toolbox.",
"kind": "data"
},
{
"art": "v1-route.jpg",
"title": "Let gravity bend the road.",
"date": "1977-1980 / PLANETARY TRAJECTORY",
"narration": "A close trip past Jupiter sent Voyager 1 toward Saturn. Its path would then lead away from the planets.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Historical twin-Voyager trajectory diagram. Voyager 1 did not visit Uranus or Neptune; Voyager 2 did. This is not a live position plot or a claim of leaving the Sun\u2019s gravity.",
"credit": "NASA \u00b7historical trajectories",
"alt": "NASA \u00b7historical trajectories: Let gravity bend the road.",
"kind": "data"
},
{
"art": "v1-earth.jpg",
"title": "Look back at a pair of worlds.",
"date": "18 SEP 1977 / EARTH AND MOON",
"narration": "Soon after launch, Voyager 1 looked homeward. Earth and the Moon shared a picture from far away.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "NASA identifies the September 18, 1977 Earth-Moon image from about 7.25 million miles. This is not the 1990 Pale Blue Dot or a view from interstellar space.",
"credit": "NASA/JPL \u00b7Earth-Moon view",
"alt": "NASA/JPL \u00b7Earth-Moon view: Look back at a pair of worlds.",
"kind": "data"
},
{
"art": "v1-jupiter.jpg",
"title": "Clouds swirl around a giant spot.",
"date": "1979 / JUPITER ENCOUNTER",
"narration": "The Great Red Spot became a world of moving cloud bands. New pictures showed how busy Jupiter\u2019s atmosphere could be.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Voyager 1 Jupiter image, not a current weather view or an animated fluid simulation. Closest approach March 5, 1979. Original image colors and resolution retained; no invented cloud detail.",
"credit": "NASA/JPL \u00b7earlier Jupiter image",
"alt": "NASA/JPL \u00b7earlier Jupiter image: Clouds swirl around a giant spot.",
"kind": "data"
},
{
"art": "v1-ring.jpg",
"title": "Find a faint ring.",
"date": "1979 / JUPITER RING",
"narration": "Saturn was not the only planet with rings. Voyager 1 found a thin, dark ring around Jupiter too.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Actual Voyager 1 ring image. The faint signal is retained without painting a thick Saturn-like ring around the planet. Historical image, not a live sensor feed.",
"credit": "NASA/JPL \u00b7Jupiter ring image",
"alt": "NASA/JPL \u00b7Jupiter ring image: Find a faint ring.",
"kind": "data"
},
{
"art": "v1-saturn.jpg",
"title": "Pass a world of rings.",
"date": "NOV 1980 / SATURN FLYBY",
"narration": "Voyager 1 studied Saturn\u2019s clouds, rings and moons. Then it looked back at the planet as it moved away.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Departure view identified as November 16, 1980 from about 3.3 million miles, not closest approach November 12. This is a photograph, not a model or a view taken in the present.",
"credit": "NASA/JPL \u00b7Saturn departure view",
"alt": "NASA/JPL \u00b7Saturn departure view: Pass a world of rings.",
"kind": "data"
},
{
"art": "v1-titan.jpg",
"title": "See a moon hidden by haze.",
"date": "12 NOV 1980 / TITAN",
"narration": "Titan\u2019s thick atmosphere kept its surface out of sight. Studying that veil helped prepare later explorers.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Voyager 1 Titan globe from November 12, 1980. No visible terrain is invented below the atmosphere, and no Cassini/Huygens image is substituted. Titan targeting helped send Voyager 1 out of the planets\u2019plane.",
"credit": "NASA/JPL \u00b7Titan globe",
"alt": "NASA/JPL \u00b7Titan globe: See a moon hidden by haze.",
"kind": "data"
},
{
"art": "v1-earthdot.jpg",
"title": "Home fits inside a tiny dot.",
"date": "14 FEB 1990 / PALE BLUE DOT",
"narration": "Voyager 1 looked back across billions of kilometers. Earth was a small point in a scattered ray of sunlight.",
"source": "https://www.nasa.gov/history/45-years-ago-voyager-1-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "2020 reprocessing of the February 14, 1990 Pale Blue Dot frame, not a new 2020 exposure. Bright bands are scattered sunlight within the camera. Earth is smaller than a pixel, not a resolved blue globe. Cameras were then turned off, not still taking interstellar photos.",
"credit": "NASA/JPL-Caltech \u00b7 1990 image reprocessed in 2020",
"alt": "NASA/JPL-Caltech \u00b7 1990 image reprocessed in 2020: Home fits inside a tiny dot.",
"kind": "data"
},
{
"art": "v1-interstellar.jpg",
"title": "Keep listening beyond the solar bubble.",
"date": "2012-2026 / INTERSTELLAR MISSION",
"narration": "Voyager 1 crossed the boundary of the Sun\u2019s particle bubble. It still sends measurements, while the team saves its fading power.",
"source": "https://science.nasa.gov/blogs/voyager/2026/04/17/nasa-shuts-off-instrument-on-voyager-1-to-keep-spacecraft-operating/",
"note": "Illustration of interstellar travel, not a camera image or live position. August 25, 2012 heliopause crossing is not escape beyond the Oort Cloud or the Sun\u2019s gravity. April 17, 2026 release says two science instruments remain operating: MAG and PWS after LECP shutdown. Older NASA page paragraphs saying four are stale. No exact present distance, final transmission, or future shutdown date is invented.",
"credit": "NASA/JPL \u00b7illustrative interstellar geometry",
"alt": "NASA/JPL \u00b7illustrative interstellar geometry: Keep listening beyond the solar bubble.",
"kind": "data"
}
]
};
films['voyager-2']={
"title": "FOUR GIANTS.\nTHEN FARTHER.",
"subtitle": "A grand planetary journey that continues between the stars.",
"scenes": [
{
"art": "v2-assembly.jpg",
"title": "Prepare a traveler on Earth.",
"date": "23 MAR 1977 / EARTH PREPARATION",
"narration": "Engineers checked Voyager 2 before launch. It would visit more giant planets than any spacecraft before it.",
"source": "https://www.nasa.gov/missions/voyager-program/voyager-2/voyager-nasas-longest-lived-mission-logs-45-years-in-space/",
"note": "NASA/JPL-Caltech archival Earth preparation image dated March 23, 1977. Actual Voyager 2, not a model or a craft photographed at Neptune.",
"credit": "NASA/JPL-Caltech \u00b7Earth preparation",
"alt": "NASA/JPL-Caltech \u00b7Earth preparation: Prepare a traveler on Earth.",
"kind": "data"
},
{
"art": "v2-launch.jpg",
"title": "The second Voyager goes first.",
"date": "20 AUG 1977 / LAUNCH",
"narration": "Voyager 2 lifted off before Voyager 1. Its longer route would take it past four giant planets.",
"source": "https://science.nasa.gov/mission/voyager/voyager-2/",
"note": "NASA image PIA21744 identifies Voyager 2 launch at 10:29 a.m. Florida local, August 20, 1977, equivalent 14:29 UTC. The name does not mean it launched second.",
"credit": "NASA \u00b7PIA21744 launch photograph",
"alt": "NASA \u00b7PIA21744 launch photograph: The second Voyager goes first.",
"kind": "data"
},
{
"art": "v2-jupiter-saturn.jpg",
"title": "Visit two giants, then keep going.",
"date": "1979-1981 / JUPITER AND SATURN",
"narration": "Jupiter and Saturn bent the spacecraft\u2019s path. Each encounter helped it reach the next world without landing.",
"source": "https://www.jpl.nasa.gov/news/45-years-ago-voyager-2-begins-its-epic-journey-to-the-outer-planets-and-beyond/",
"note": "Composite of separate Voyager 2 Jupiter and Saturn images, not simultaneous or to scale. Jupiter flyby July 9, 1979. NASA pages differ August 25/26 for Saturn; its close pass at 01:21 UTC August 26 was August 25 US Pacific. No landings occurred.",
"credit": "NASA/JPL \u00b7separate planetary views",
"alt": "NASA/JPL \u00b7separate planetary views: Visit two giants, then keep going.",
"kind": "data"
},
{
"art": "v2-uranus.jpg",
"title": "Meet a pale, tilted world.",
"date": "JAN 1986 / URANUS",
"narration": "Voyager 2 became the first spacecraft to visit Uranus. Instruments studied its rings, moons and unusual magnetic field.",
"source": "https://science.nasa.gov/resource/uranus-as-seen-by-nasas-voyager-2/",
"note": "PIA18182 image taken January 14, 1986, about 12.7 million kilometers away, before January 24 closest approach. Pale planet image retained, not replaced by a sharp modern telescope picture or exaggerated blue-green rendering.",
"credit": "NASA/JPL \u00b7PIA18182 approach image",
"alt": "NASA/JPL \u00b7PIA18182 approach image: Meet a pale, tilted world.",
"kind": "data"
},
{
"art": "v2-neptune.jpg",
"title": "Reach the last giant on the route.",
"date": "AUG 1989 / NEPTUNE",
"narration": "Neptune showed dark storms and bright clouds. It was the fourth giant planet on Voyager 2\u2019s journey.",
"source": "https://science.nasa.gov/mission/voyager/voyager-2/",
"note": "NASA mission-page Neptune full-disk image PIA01492. Historical processed image, not an exact present color/weather measurement. Voyager images of Neptune are often contrast/color enhanced; no claim this is exactly human-eye color. Closest approach August 25, 1989.",
"credit": "NASA/JPL \u00b7processed Neptune image",
"alt": "NASA/JPL \u00b7processed Neptune image: Reach the last giant on the route.",
"kind": "data"
},
{
"art": "v2-triton.jpg",
"title": "Find dark trails on an icy moon.",
"date": "25 AUG 1989 / TRITON",
"narration": "Voyager 2 saw streaks across Triton\u2019s bright ground. They offered clues that this cold moon was still changing.",
"source": "https://science.nasa.gov/photojournal/triton-south-polar-terrain/",
"note": "PIA00059 south-polar terrain shows dark plumes or wind streaks. NASA says sources may be vents with gas erupting from below; do not turn that into certain Earth-like lava volcanoes. Voyager flew by, not landed.",
"credit": "NASA/JPL \u00b7Triton south-polar terrain",
"alt": "NASA/JPL \u00b7Triton south-polar terrain: Find dark trails on an icy moon.",
"kind": "data"
},
{
"art": "v2-boundary.jpg",
"title": "Read the change in the particles.",
"date": "5 NOV 2018 / HELIOPAUSE CROSSING",
"narration": "A sharp change in particles told scientists the spacecraft had left the Sun\u2019s bubble. It had entered the space between stars.",
"source": "https://science.nasa.gov/photojournal/several-signs-pointing-to-interstellar-space/",
"note": "PIA22923: PLS and CRS graphs, horizontal axis numbered days of 2018. The data show solar-particle decreases and galactic-particle increases, not a photograph of a wall. November 5 is the crossing; December 10 was the announcement. A NASA mission-page key date incorrectly says November 25. The owning release and mission overview agree November 5. No escape beyond the Oort Cloud is claimed.",
"credit": "NASA/JPL-Caltech \u00b7historical instrument data",
"alt": "NASA/JPL-Caltech \u00b7historical instrument data: Read the change in the particles.",
"kind": "data"
},
{
"art": "v2-record.jpg",
"title": "Carry a greeting while the science continues.",
"date": "1977 RECORD / ONGOING MISSION",
"narration": "A golden record travels with Voyager 2. For now, the team still hears from the spacecraft as it explores interstellar space.",
"source": "https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/",
"note": "Earlier Earth photograph of the Golden Record, not an image sent today or a music player currently transmitting songs. Latest NASA status table checked November 11, 2026 lists MAG, PWS and CRS on for Voyager 2, with LECP and PLS off. Older forecasts of a 2025 mission end were predictions, not events. No final-contact date, present exact distance or future operating guarantee is invented.",
"credit": "NASA/JPL \u00b7earlier Golden Record photograph",
"alt": "NASA/JPL \u00b7earlier Golden Record photograph: Carry a greeting while the science continues.",
"kind": "data"
}
]
};
films['new-horizons']={
"title": "BEYOND THE BLUR.\nBEYOND PLUTO.",
"subtitle": "First close looks at Pluto and Arrokoth, with science still coming home.",
"scenes": [
{
"art": "nh-launch.jpg",
"title": "Begin a nine-year trip.",
"date": "19 JAN 2006 / LAUNCH",
"narration": "An Atlas V sent New Horizons toward Pluto. A long journey began with a fast departure from Earth.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "Actual Atlas V launch, January 19, 2006 at 19:00 UTC, 2 p.m. Florida EST. Fastest Earth departure does not mean fastest spacecraft at every later point in flight. No claim that it is a present speed record.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: Begin a nine-year trip.",
"kind": "data"
},
{
"art": "nh-tools.jpg",
"title": "Pack a small science laboratory.",
"date": "SEVEN INSTRUMENTS / HARDWARE DIAGRAM",
"narration": "Cameras, particle sensors and other tools traveled together. They would study distant worlds and the space around them.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "Labeled historical spacecraft/instrument illustration, not an inside cutaway or a live instrument readout. Power comes from one radioisotope generator, not solar arrays or a nuclear reactor.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical diagram",
"alt": "New Horizons: Pack a small science laboratory.",
"kind": "data"
},
{
"art": "nh-route.jpg",
"title": "Use Jupiter as a stepping stone.",
"date": "2006-2015 / CRUISE ROUTE",
"narration": "Jupiter\u2019s gravity helped shorten the trip. The spacecraft kept going toward a world no probe had seen nearby.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "Historical route labeled January 19, 2021, not current navigation telemetry. Diagram includes historical targets and old 2014 MU69 naming, now Arrokoth. No heliopause crossing or completed travel beyond the Sun\u2019s gravity is claimed.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical diagram",
"alt": "New Horizons: Use Jupiter as a stepping stone.",
"kind": "data"
},
{
"art": "nh-jupiter.jpg",
"title": "Catch a moon in the act.",
"date": "FEB 2007 / JUPITER FLYBY",
"narration": "A plume rose from Io while New Horizons visited Jupiter. The flyby was a chance to learn and test its instruments.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "Composite of infrared Jupiter and Io imagery, not a single natural-color family portrait or planets arranged to scale. Tvashtar plume visible at the upper-right dark limb of Io. Jupiter gravity assist February 28, 2007.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: Catch a moon in the act.",
"kind": "data"
},
{
"art": "nh-pluto.jpg",
"title": "A small world has a big story.",
"date": "14 JUL 2015 / PLUTO ENCOUNTER",
"narration": "Pluto was no longer a distant blur. The pictures showed bright plains, dark regions and a heart-shaped landmark.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "History caption identifies true-color approach view from about 22,025 miles. An assembled instrument image, not the exact closest-approach view or a landing. Pluto is a dwarf planet; the 2006 launch-release wording ninth planet is historical.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: A small world has a big story.",
"kind": "data"
},
{
"art": "nh-charon.jpg",
"title": "Meet Pluto\u2019s largest companion.",
"date": "2015 / CHARON",
"narration": "Charon showed a dark northern cap and a varied surface. This moon was a world worth studying in its own right.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "NASA history identifies true-color Charon image from about 46,091 miles. Original source resolution retained, not a modern telescope replacement or present conditions. No claim of life or a confirmed current subsurface ocean.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: Meet Pluto\u2019s largest companion.",
"kind": "data"
},
{
"art": "nh-haze.jpg",
"title": "Look back through a thin atmosphere.",
"date": "14 JUL 2015 / AFTER CLOSEST APPROACH",
"narration": "Sunlight outlined layers of haze above Pluto. Mountains and plains stretched below the thin atmosphere.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "NASA identifies image taken 15 minutes after closest approach, with low-angle sunlight highlighting mountains and haze. It is not an image from the ground, a current sunset, or proof of liquid water flowing on Pluto.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: Look back through a thin atmosphere.",
"kind": "data"
},
{
"art": "nh-arrokoth.jpg",
"title": "Reach a little world beyond Pluto.",
"date": "1 JAN 2019 / ARROKOTH FLYBY",
"narration": "Two joined lobes made Arrokoth look unusual. This small Kuiper Belt object kept clues from the early solar system.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "Historical processed color image from about 10,300 miles per NASA history. Do not assume exact human-eye color. Arrokoth is the current name, not the superseded Ultima Thule nickname. This is a flyby, not a landing.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: Reach a little world beyond Pluto.",
"kind": "data"
},
{
"art": "nh-departure.jpg",
"title": "Watch another target slip behind.",
"date": "1 JAN 2019 / DEPARTURE",
"narration": "Backlighting revealed a different view of Arrokoth. The spacecraft kept traveling while the team studied what it had sent.",
"source": "https://www.nasa.gov/history/15-years-ago-new-horizons-launched-to-pluto-and-beyond/",
"note": "NASA history identifies departure view from about 5,494 miles beyond Arrokoth, backlit by the Sun. Not the last-ever camera image or final transmission. No new reachable flyby target is guaranteed by this story.",
"credit": "NASA/Johns Hopkins APL/SwRI \u00b7historical image",
"alt": "New Horizons: Watch another target slip behind.",
"kind": "data"
},
{
"art": "nh-team.jpg",
"title": "Wake up and send the science home.",
"date": "JUN-JUL 2026 / MISSION CONTINUES",
"narration": "New Horizons woke after a long hibernation. Its team prepared to receive measurements stored far beyond Pluto.",
"source": "https://science.nasa.gov/missions/new-horizons/nasas-new-horizons-spacecraft-wakes-from-hibernation-in-good-health/",
"note": "Earth team photograph dated June 24, 2026, not a live mission-control feed. NASA July 7 release confirms June 23 awakening after 321-day hibernation. Weekly status beacons continued during sleep, and three instruments kept collecting. The quoted 5.9-billion-mile distance and 8h52m signal time belong to that report, not today. Continued heliophysics is confirmed, not an interstellar/heliopause crossing or a final contact.",
"credit": "NASA/Johns Hopkins APL/SwRI/Justin Gladden \u00b7June 2026 team photo",
"alt": "New Horizons: Wake up and send the science home.",
"kind": "data"
}
]
};
films['peregrine-1']={
"title": "A MOON DREAM.\nA DIFFERENT ENDING.",
"subtitle": "Peregrine never landed. Its instruments still learned something in flight.",
"scenes": [
{
"art": "pg-prepare.jpg",
"title": "A lander packs a science bag.",
"date": "NOV 2023 / EARTH PREPARATION",
"narration": "Peregrine carried five NASA experiments. Astrobotic built and operated the lander, with other customers aboard too.",
"source": "https://www.nasa.gov/missions/artemis/clps/nasa-sending-five-payloads-to-moon-on-astrobotics-peregrine-lander/",
"note": "NASA/Isaac Watson photograph from November 14,2023. The NASA decal identifies a payload partnership, not NASA ownership of the commercial lander. This is Earth preparation, not a Moon surface scene.",
"credit": "NASA/Isaac Watson",
"alt": "Teams with Astrobotic install the NASA meatball decal on Astrobotic\u2019s Peregrine lunar lander on Tuesday, Nov. 14, 2023, at the Astrotech Space Operations Facility near the agency\u2019s Kennedy Space Center in Florida. Peregrine will launch onboard a United Launch Alliance Vulcan rocket targeted for no earlier than Dec. 24, 2023, from Launch Complex 41 at Cape Canaveral Space Force Station in Florida. The lander will carry a suite of NASA payloads to the Moon as part of the agency\u2019s CLPS (Commercial Lunar Payload Services) initiative and Artemis program.",
"kind": "data"
},
{
"art": "pg-launch.jpg",
"title": "Lift off toward the Moon.",
"date": "8 JAN 2024 / LAUNCH",
"narration": "A Vulcan rocket carried Peregrine away from Florida. After separation, a propulsion problem stopped the planned lunar landing.",
"source": "https://www.nasa.gov/news-release/nasa-science-astrobotic-peregrine-mission-one-concludes/",
"note": "NASA/Isaac Watson actual mission launch photograph. Launch was 02:18 EST from Cape Canaveral. NASA end release confirms successful separation followed by a propulsion issue; no exact failure chain or successful lunar arrival is invented.",
"credit": "NASA/Isaac Watson",
"alt": "On the first flight of NASA\u2019s CLPS (Commercial Lunar Payload Services) initiative and Artemis program, a United Launch Alliance Vulcan rocket carrying Astrobotic\u2019s Peregrine lunar lander lifts off at 2:18 a.m. EST from Space Launch Complex 41 at Cape Canaveral Space Force Station in Florida on Monday, Jan. 8, 2024. Astrobotic\u2019s Peregrine Mission One will carry NASA and commercial payloads to the Moon to study the lunar exosphere, thermal properties, and hydrogen abundance of the lunar regolith, magnetic fields, and the radiation environment of the lunar surface.",
"kind": "data"
},
{
"art": "pg-lets.jpg",
"title": "Count the invisible visitors.",
"date": "JAN 2024 / SCIENCE IN FLIGHT",
"narration": "LETS was a tiny radiation watcher. It powered on during the flight, measuring a space environment people must learn to handle.",
"source": "https://science.nasa.gov/lunar-science/clps-deliveries/to2-astrobotic/",
"note": "Earlier Earth reference view of LETS electronics, not a photograph transmitted from inside Peregrine. NASA end release confirms LETS collected data in flight. Radiation counts shown here are not live measurements.",
"credit": "NASA/JSC \u00b7 LETS reference hardware",
"alt": "Linear Energy Transfer Spectrometer (LETS) motherboard with measurements",
"kind": "data"
},
{
"art": "pg-nss.jpg",
"title": "Look for a hydrogen clue.",
"date": "JAN 2024 / SCIENCE IN FLIGHT",
"narration": "The neutron instrument was built to look for hydrogen clues in lunar soil. It gathered flight data, but never made that surface survey.",
"source": "https://science.nasa.gov/lunar-science/clps-deliveries/to2-astrobotic/",
"note": "NASA/Ames reference hardware. NSS measures neutrons to infer hydrogen; this does not prove water was discovered or lunar ground was measured by Peregrine. End release confirms flight data only.",
"credit": "NASA/Ames \u00b7 NSS reference hardware",
"alt": "Neutron Spectrometer System payload developed by NASA",
"kind": "data"
},
{
"art": "pg-nirvss.jpg",
"title": "Read light like a secret code.",
"date": "JAN 2024 / SCIENCE IN FLIGHT",
"narration": "NIRVSS used light to study materials and temperature. It worked in flight, while its planned view of lunar soil stayed out of reach.",
"source": "https://science.nasa.gov/lunar-science/clps-deliveries/to2-astrobotic/",
"note": "NASA/Ames earlier instrument view. NIRVSS includes imaging, spectroscopy and a temperature calibration sensor. Its planned lunar surface science is distinguished from collected flight data. No water discovery or successful landing is claimed.",
"credit": "NASA/Ames \u00b7 NIRVSS reference hardware",
"alt": "Near-Infrared Volatile Spectrometer System (NIRVSS) CLPS NASA scientific payload for task order TO2-AB Astrobotic Peregrine lander",
"kind": "data"
},
{
"art": "pg-pitms.jpg",
"title": "Sort the gases nearby.",
"date": "JAN 2024 / SCIENCE IN FLIGHT",
"narration": "PITMS could sort tiny traces of gas. It joined the other working experiments, sending useful tests home from a journey that had changed.",
"source": "https://www.nasa.gov/news-release/nasa-science-astrobotic-peregrine-mission-one-concludes/",
"note": "NASA/Peter Steigner Earth integration photograph of the joint NASA-ESA instrument. NASA end release reports PITMS powered on and collected flight data; preliminary chemical detections near the lander are not a lunar exosphere survey.",
"credit": "NASA/Peter Steigner \u00b7 Earth integration",
"alt": "A lab scientist works with the the PITMS instrument which has been integrated onto the Astrobotic Peregrine lander.",
"kind": "data"
},
{
"art": "pg-lra.jpg",
"title": "One tool needed a landing.",
"date": "JAN 2024 / AN UNFINISHED TASK",
"narration": "The little reflector needed no electricity. But without a landing, it could not become the Moon marker that scientists had planned.",
"source": "https://www.nasa.gov/news-release/nasa-science-astrobotic-peregrine-mission-one-concludes/",
"note": "Earlier NASA/GSFC reference LRA photograph. This passive instrument does not power on and its intended surface role was never achieved. The other four NASA instruments powered on; saying all five failed would be wrong.",
"credit": "NASA/GSFC \u00b7 LRA reference hardware",
"alt": "Laser Retroreflector Array (LRA) payload",
"kind": "data"
},
{
"art": "pg-earth.jpg",
"title": "Come back without a touchdown.",
"date": "18 JAN 2024 / EARTH RE-ENTRY",
"narration": "After ten days and thirteen hours, the journey ended over the South Pacific. Peregrine burned up on return, leaving data instead of a lunar footprint.",
"source": "https://www.nasa.gov/news-release/nasa-science-astrobotic-peregrine-mission-one-concludes/",
"note": "NASA end release gives controlled Earth re-entry at about 16:04 EST January 18,2024 after 10 days 13 hours. The separate September 2026 DSCOVR/EPIC Pacific image is Earth context only, not a re-entry photograph, spacecraft camera image, final transmitted view or exact disposal-site map. No final spoken words or wreck are invented.",
"credit": "NASA Earth Observatory \u00b7 DSCOVR/EPIC \u00b7 1 September 2026 context",
"alt": "In a full-disk satellite view of Earth, three tropical cyclones\u2014named Lowell, Karina, and Marie\u2014swirl above the blue waters of the Pacific Ocean and to the west of Central America.",
"kind": "data"
}
]
};
films['im-2-athena']={
"title": "A SMALL DRILL.\nA SHORT LUNAR DAY.",
"subtitle": "Athena reached the Moon. Its science team had only hours to work.",
"scenes": [
{
"art": "im2-drill.jpg",
"title": "Make a drill for another world.",
"date": "MAR 2020 / EARTH TESTING",
"narration": "TRIDENT was built to turn and tap into lunar soil. Engineers tested it long before the ride to the Moon.",
"source": "https://www.nasa.gov/image-article/polar-resources-ice-mining-experiment-1-prime-1-2/",
"note": "NASA Earth testing photograph, not the drill operating on the Moon. The instrument was designed to reach one meter, but this mission did not achieve that lunar drilling goal.",
"credit": "NASA \u00b7 TRIDENT Earth testing, 2020",
"alt": "Honeybee Robotics Systems Engineer Zach Mank installs TRIDENT on a trolley for thermal vacuum chamber testing. Credits: NASA",
"kind": "data"
},
{
"art": "im2-hardware.jpg",
"title": "Give it a partner for gases.",
"date": "JUN 2022 / EARTH PREPARATION",
"narration": "MSOLO would look for gases near the lander. Together, the two tools made a science team called PRIME-1.",
"source": "https://science.nasa.gov/lunar-science/clps-deliveries/prime-1-im/",
"note": "NASA/Kim Shiflett Earth hardware photograph. Planned analysis of drill samples is a mission goal, not proof that Athena recovered lunar ice.",
"credit": "NASA/Kim Shiflett",
"alt": "Inside the Space Station Processing Facility at NASA\u2019s Kennedy Space Center in Florida, the Mass Spectrometer observing lunar operations (MSolo) is being installed on a radiator bracket on June 14, 2022. Having successfully completed its thermal vacuum testing, the unit will undergo vibration testing later this month. This spectrometer is part of the PRIME-1 (Polar Resources Ice Mining Experiment-1) payload suite, slated to launch to the Moon in 2023 with Intuitive Machines. MSolo is a commercial off-the-shelf mass spectrometer modified to work in space and it will help analyze the chemical makeup of landing sites on the Moon, as well as study water on the lunar surface. MSolo is manifested to fly on four of the agency\u2019s Commercial Lunar Payload Delivery Service missions where under Artemis, commercial deliveries beginning in 2023 will perform science experiments, test technologies, and demonstrate capabilities to help NASA explore the Moon and prepare for human missions. ",
"kind": "data"
},
{
"art": "im2-shake.jpg",
"title": "Shake it before the rocket does.",
"date": "AUG 2022 / EARTH TESTING",
"narration": "A launch is a rough ride. MSOLO faced vibration tests on Earth so the team could check its space-ready design.",
"source": "https://images-assets.nasa.gov/image/KSC-20220803-PH-KLS01_0028/collection.json",
"note": "NASA/Kim Shiflett vibration-test photograph from August 3, 2022. This is laboratory testing, not an interior view of Athena in flight.",
"credit": "NASA/Kim Shiflett",
"alt": "A Kennedy Space Center engineer prepares the Mass Spectrometer observing lunar operations (MSolo) instrument for vibration testing inside the Florida spaceport\u2019s Cryogenics Laboratory on Aug. 3, 2022. MSolo is a commercial off-the-shelf mass spectrometer modified to work in space and will help analyze the chemical makeup of landing sites on the Moon, as well as study water on the lunar surface. Researchers and engineers are preparing MSolo instruments to launch on four robotic missions as part of NASA\u2019s Commercial Lunar Payload Services (CLPS) \u2013 commercial deliveries that will perform science experiments, test technologies, and demonstrate capabilities to help NASA explore the Moon and prepare for crewed missions to the lunar surface. This particular MSolo instrument is slated to fly on the agency\u2019s Polar Resources Ice Mining Experiment-1 (PRIME-1) mission \u2013 the first in-situ resource utilization demonstration on the Moon \u2013 as part of the agency\u2019s CLPS initiative.",
"kind": "data"
},
{
"art": "im2-practice.jpg",
"title": "Practice as one team.",
"date": "NOV 2023 / MISSION SIMULATION",
"narration": "Engineers rehearsed commands together. The practice linked the gas instrument and the drill before the real lunar work.",
"source": "https://www.nasa.gov/image-article/prime-1-simulation/",
"note": "NASA/Frank Michaux photograph of November 2, 2023 simulation training at Kennedy. This image shows rehearsal, not the final mission control shift.",
"credit": "NASA/Frank Michaux",
"alt": "A team of engineers participates in simulation training for the Polar Resources Ice Mining Experiment-1 (PRIME-1) on Thursday, Nov. 2, 2023, inside the Neil Armstrong Operations and Checkout Building at NASA\u2019s Kennedy Space Center in Florida. The purpose of the training is to get the integrated PRIME-1 team \u2013 engineers with PRIME-1\u2019s MSOLO (Mass Spectrometer Observing Lunar Operations) and Honeybee Robotics\u2019 TRIDENT (The Regolith and Ice Drill for Exploring New Terrain) drill \u2013 prepared to operate the instrument on the lunar surface. The team commanded the PRIME-1 hardware, located at Intuitive Machines in Houston, to operate MSOLO and TRIDENT. PRIME-1 is scheduled to launch through NASA\u2019s CLPS (Commercial Lunar Payload Delivery Service) initiative and will be the first in-situ resource utilization demonstration on the Moon, with MSOLO and TRIDENT making up its two primary components. Through Artemis missions, CLPS deliveries will be used to perform science experiments, test technologies, and demonstrate capabilities to help NASA explore the Moon and prepare for human deep space exploration missions.",
"kind": "data"
},
{
"art": "im2-launch.jpg",
"title": "Carry Athena into the night.",
"date": "26 FEB 2025 / LAUNCH",
"narration": "A Falcon 9 launched Athena from Florida. Intuitive Machines operated the lander; NASA supplied experiments for its journey.",
"source": "https://www.nasa.gov/missions/artemis/nasas-lunar-drill-technology-passes-tests-on-the-moon/",
"note": "NASA/Frank Michaux actual IM-2 launch photograph. Launch was at 7:16 p.m. EST. The commercial lander is not described as NASA-owned.",
"credit": "NASA/Frank Michaux",
"alt": "A SpaceX Falcon 9 rocket carrying Intuitive Machines\u2019 Nova-C lunar lander (IM-2) launches at 7:16 p.m. EST on Wednesday, Feb. 26, 2025, from Launch Complex 39A at NASA\u2019s Kennedy Space Center in Florida as part of NASA\u2019s CLPS (Commercial Lunar Payload Services) initiative. The IM-2 launch is carrying NASA science, technology demonstrations, and other commercial payloads to Mons Mouton, a lunar plateau to advance our understanding of the Moon and planetary processes, while paving the way for future crewed missions.",
"kind": "data"
},
{
"art": "im2-map.jpg",
"title": "A touchdown that tipped the plan.",
"date": "6 MAR 2025 / LUNAR LANDING",
"narration": "Athena reached a crater near the Moon's south pole, but came to rest on its side. Its solar cells could not recharge as planned.",
"source": "https://www.nasa.gov/missions/artemis/nasas-lunar-drill-technology-passes-tests-on-the-moon/",
"note": "NASA/SVS terrain context for Mons Mouton. This is a regional view, not a descent camera frame, exact landing reconstruction, or picture of the tipped lander. NASA reports landing roughly 400 meters from the intended site.",
"credit": "NASA/SVS \u00b7 Mons Mouton terrain context",
"alt": "A zooming overhead view of Mons Mouton in natural color.",
"kind": "data"
},
{
"art": "im2-gas.jpg",
"title": "Use the hours that remain.",
"date": "6 MAR 2025 / A SHORT SURFACE TEST",
"narration": "The drill moved, and MSOLO made gas scans. The mission was short, but both instruments sent useful engineering data.",
"source": "https://www.nasa.gov/missions/artemis/nasas-lunar-drill-technology-passes-tests-on-the-moon/",
"note": "Earlier NASA/Isaac Watson Earth integration photograph used as an explicitly labeled hardware reference. NASA April 29 results describe drill rotation, extension, percussion and heating tests. They do not report a completed subsurface ice sample. The detected gases initially appeared human in origin, including spacecraft propellants and traces of Earth water; no lunar water discovery is claimed.",
"credit": "NASA/Ben Smegelsky",
"alt": "Engineers install multilayer insulation (MLI) on the Mass Spectrometer Observing Lunar Operations (MSolo) instrument inside Kennedy Space Center\u2019s Space Station Processing Facility on Oct. 20, 2022. The activity is in preparation for the Polar Resources Ice Mining Experiment-1 (PRIME-1) mission, which will be the first in-situ resource utilization demonstration on the Moon. MLI protects the instrument from thermal temperature extremes, helping to insulate at cold temperatures and to cool at higher temperatures when solar lighting conditions or lunar infrared reflects onto the instrument. Researchers and engineers are preparing MSolo instruments to launch on four robotic missions as part of NASA\u2019s Commercial Lunar Payload Services \u2013 commercial deliveries beginning in 2023 that will perform science experiments, test technologies, and demonstrate capabilities to help NASA explore the Moon and prepare for crewed missions to the lunar surface. ",
"kind": "data"
},
{
"art": "im2-rest.jpg",
"title": "Another spacecraft finds the resting place.",
"date": "7 MAR 2025 / MISSION ENDS",
"narration": "The mission ended the next day. From orbit, NASA's LRO photographed the place where Athena remained, while scientists kept studying the data.",
"source": "https://www.nasa.gov/image-article/nasas-lunar-reconnaissance-orbiter-views-im-2-on-moons-surface/",
"note": "Actual LRO observation at 12:54 p.m. EST March 7, 2025, with the white arrow identifying Athena. This is an orbital picture, not a final image sent by Athena, a spacecraft close-up or a precise depiction of its current condition. NASA reports the mission ended March 7; no final words are invented.",
"credit": "NASA/GSFC/Arizona State University \u00b7 7 MAR 2025",
"alt": "Black and white image of the Moon taking from above from the Lunar Reconnaissance Orbiter. A tiny white arrow in the center points to the location of Intuitive Machines' Athena lander.",
"kind": "data"
}
]
};
const narration:Record<string,string[]>={
"surveyor-3": [
"Before people could land, a robot went to test the ground.",
"It bounced twice, then settled on the Moon.",
"Its television camera sent thousands of pictures back to Earth.",
"A tiny scoop dug four trenches to test the soil.",
"From the Moon, it watched Earth move in front of the Sun.",
"Lunar night began. The last contact came on May 4, 1967.",
"Two years later, Apollo 12 astronauts walked over to visit.",
"They brought selected parts home for study. The lander stayed behind."
],
"apollo-17-lrv": [
"Apollo 17 carried a small electric rover toward the Moon.",
"Folded beside the lunar module, it took up as little room as possible.",
"On the surface, Cernan and Schmitt unfolded their new ride.",
"Maps and clamps became a new shield against flying lunar dust.",
"Orange soil at Shorty crater turned out to contain tiny volcanic glass beads.",
"With wheels, the astronauts could reach geology stops farther away.",
"The crew packed their samples and prepared to leave the valley.",
"Left behind, the rover camera watched the lunar module lift off."
],
"opportunity": [
"A solar-powered explorer set off to read the rocks of Mars.",
"Protective airbags helped it bounce safely onto the surface.",
"Its first views showed a new home at Meridiani Planum.",
"Rocks and minerals held clues to water in the ancient past.",
"At Victoria crater, a larger landscape offered new questions.",
"A rover planned for 90 sols drove farther than a marathon.",
"A planet-wide dust storm darkened the sky. No more messages came home.",
"NASA ended recovery attempts in 2019. The rover discoveries stayed with us."
],
"ranger-7": [
"Six earlier Rangers had returned no close-up lunar photographs. This one would try again.",
"Six television cameras could take wide views and tiny details.",
"An Atlas-Agena launched it toward the Moon on July 28, 1964.",
"At last, an American spacecraft was sending pictures of the Moon.",
"During the final 17 minutes, 4,308 pictures streamed back to Earth.",
"The last picture was taken just 2.3 seconds before impact.",
"The crash was planned. This later Apollo photograph shows the mark it left.",
"Decades later, LRO found the crater again. The next scouts would try gentle landings."
],
"surveyor-1": [
"An Atlas-Centaur launched a three-legged scout toward the Moon.",
"A big rocket slowed the fall. Smaller engines controlled the final approach.",
"Three feet came to rest on the surface in the Ocean of Storms.",
"Earth could command the camera mirror to turn and the lens to focus.",
"A large crater rim was visible on the horizon, far beyond the lander feet.",
"Pictures let scientists study the cracks and shapes of nearby rocks.",
"As the Sun sank lower, the little scout cast a long shadow.",
"Its main job ended in July 1966. NASA kept contact until January 1967."
]
};
for(const [id,f] of Object.entries(films))f.scenes.forEach((s,i)=>s.narration=s.narration??narration[id]?.[i]);
for(const f of Object.values(films))for(const s of f.scenes){s.art=a(s.art);if(s.model)s.model=a(s.model)}
export const storyCatalog=[...chapters,{id:'ranger-7',no:'04',name:'Ranger 7',world:'Moon',years:'1964'},{id:'surveyor-1',no:'05',name:'Surveyor 1',world:'Moon',years:'1966-1967'},{id:'apollo-11-surface',no:'06',name:'Apollo 11 Surface Station',world:'Moon',years:'1969'},{id:'lro',no:'07',name:'Lunar Reconnaissance Orbiter',world:'Moon',years:'2009 - ongoing'},{id:'apollo-12-surface',no:'08',name:'Apollo 12 Surface Station',world:'Moon',years:'1969-1977'},{id:'apollo-14-surface',no:'09',name:'Apollo 14 Surface Station',world:'Moon',years:'1971-1976'},{id:'apollo-15-surface',no:'10',name:'Apollo 15 Surface Equipment',world:'Moon',years:'1971-1977'},{id:'apollo-16-surface',no:'11',name:'Apollo 16 Surface Equipment',world:'Moon',years:'1972-1977'},{id:'apollo-17-surface',no:'12',name:'Apollo 17 Surface Station',world:'Moon',years:'1972-1977'},{id:'lcross',no:'13',name:'LCROSS',world:'Moon',years:'2009'},{id:'ladee',no:'14',name:'LADEE',world:'Moon',years:'2013-2014'},{id:'grail',no:'15',name:'GRAIL: Ebb and Flow',world:'Moon',years:'2011-2012'},{id:'viking-1',no:'16',name:'Viking 1 Lander',world:'Mars',years:'1975-1982'},{id:'viking-2',no:'17',name:'Viking 2 Lander',world:'Mars',years:'1975-1980'},{id:'pathfinder',no:'18',name:'Pathfinder + Sojourner',world:'Mars',years:'1996-1997'},{id:'mars-global-surveyor',no:'19',name:'Mars Global Surveyor',world:'Mars',years:'1996-2006'},{id:'spirit',no:'20',name:'Spirit',world:'Mars',years:'2003-2011'},{id:'phoenix',no:'21',name:'Phoenix',world:'Mars',years:'2007-2008'},{id:'insight',no:'22',name:'InSight',world:'Mars',years:'2018-2022'},{id:'mars-climate-orbiter',no:'23',name:'Mars Climate Orbiter',world:'Mars',years:'1998-1999'},{id:'mars-polar-lander',no:'24',name:'Mars Polar Lander + Deep Space 2',world:'Mars',years:'1999'},{id:'odyssey',no:'25',name:'2001 Mars Odyssey',world:'Mars',years:'2001 - ongoing'},{id:'mro',no:'26',name:'Mars Reconnaissance Orbiter',world:'Mars',years:'2005 - ongoing'},{id:'curiosity',no:'27',name:'Curiosity',world:'Mars',years:'2011 - ongoing'},{id:'maven',no:'28',name:'MAVEN',world:'Mars',years:'2013-2026'},{id:'perseverance',no:'29',name:'Perseverance',world:'Mars',years:'2020 - ongoing'},{id:'perseverance-backshell',no:'30',name:'Mars 2020 Backshell + Parachute',world:'Mars',years:'2020-2021'},{id:'ingenuity',no:'31',name:'Ingenuity',world:'Mars',years:'2020-2024'},{id:'pioneer-10',no:'32',name:'Pioneer 10',world:'Deep Space',years:'1972-2003'},{id:'pioneer-11',no:'33',name:'Pioneer 11',world:'Deep Space',years:'1973-1995'},{id:'voyager-1',no:'34',name:'Voyager 1',world:'Deep Space',years:'1977 - ongoing'},{id:'voyager-2',no:'35',name:'Voyager 2',world:'Deep Space',years:'1977 - ongoing'},{id:'new-horizons',no:'36',name:'New Horizons',world:'Deep Space',years:'2006 - ongoing'},{id:'peregrine-1',no:'37',name:'Peregrine Mission One',world:'Moon',years:'2024'},{id:'im-2-athena',no:'38',name:'IM-2 Athena',world:'Moon',years:'2025'}];
export const activeIds=['new-horizons','voyager-1','voyager-2','lro','odyssey','mro','curiosity','perseverance'];
export const activeRecords=[{id:'lro',mission:'Lunar Reconnaissance Orbiter',world:'Moon',launch:'18 June 2009',status:'NASA lists LRO as studying the Moon. Checked 11 November 2026.',purpose:'Map lunar terrain, temperatures, radiation and clues to resources for future exploration.',source:'https://science.nasa.gov/mission/lro/',image:a('lro-record.jpg'),credit:'NASA/GSFC · artist concept',alt:'NASA artist concept showing LRO exterior instruments'}];
activeRecords.push({id:'odyssey',mission:'2001 Mars Odyssey',world:'Mars',launch:'7 April 2001',status:'NASA lists Odyssey as ongoing. Checked 11 November 2026.',purpose:'Map surface composition, ice clues, rocks, frost and atmosphere from Mars orbit.',source:'https://science.nasa.gov/mission/odyssey/',image:a('ody-concept.jpg'),credit:'NASA/JPL · artist concept',alt:'NASA artist concept of Odyssey above Mars'});
activeRecords.push({id:'mro',mission:'Mars Reconnaissance Orbiter',world:'Mars',launch:'12 August 2005',status:'NASA lists MRO as ongoing. Checked 11 November 2026.',purpose:'Study the surface, subsurface and atmosphere, examine water history and relay surface-mission data.',source:'https://science.nasa.gov/mission/mars-reconnaissance-orbiter/',image:a('mro-concept.jpg'),credit:'NASA/JPL · artist concept',alt:'NASA artist concept of MRO above Mars'});
activeRecords.push({id:'curiosity',mission:'Curiosity',world:'Mars',launch:'26 November 2011',status:'NASA lists Curiosity as exploring Mars. Checked 11 November 2026.',purpose:'Study rocks and ancient environments to ask whether Mars could once support microbial life.',source:'https://science.nasa.gov/mission/msl-curiosity/',image:a('cur-selfie.jpg'),credit:'NASA/JPL-Caltech/MSSS · earlier self-portrait',alt:'Earlier Curiosity self-portrait in Gale Crater'});
activeRecords.push({id:'perseverance',mission:'Perseverance',world:'Mars',launch:'30 July 2020',status:'NASA lists Perseverance as exploring Mars. Checked 11 November 2026.',purpose:'Investigate ancient environments and potential biosignatures and collect samples for possible Earth return.',source:'https://science.nasa.gov/mission/mars-2020-perseverance/',image:a('per-biosignature.jpg'),credit:'NASA/JPL-Caltech/MSSS · earlier selfie',alt:'Earlier Perseverance selfie near Cheyava Falls'});
activeRecords.push({"id": "voyager-1", "mission": "Voyager 1", "world": "Deep Space", "launch": "5 September 1977", "status": "NASA lists ongoing interstellar operations; MAG and PWS science instruments remain on after April 2026 LECP shutdown. Checked 11 November 2026.", "purpose": "Study magnetic fields and plasma waves beyond the heliopause.", "source": "https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/", "image": a('v1-earthdot.jpg'), "credit": "NASA/JPL \u00b7earlier historical image", "alt": "Voyager 1 historical mission image"});
activeRecords.push({"id": "voyager-2", "mission": "Voyager 2", "world": "Deep Space", "launch": "20 August 1977", "status": "NASA current status lists MAG, PWS and CRS on; LECP and PLS off. Checked 11 November 2026.", "purpose": "Study particles, fields and plasma waves beyond the heliopause after the only close visits to all four giant planets.", "source": "https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/", "image": a('v2-assembly.jpg'), "credit": "NASA/JPL \u00b7earlier historical image", "alt": "Voyager 2 historical mission image"});
activeRecords.push({"id": "new-horizons", "mission": "New Horizons", "world": "Deep Space", "launch": "19 January 2006", "status": "NASA July 2026 confirms successful awakening and continued outer-heliosphere science. Checked 11 November 2026.", "purpose": "Study the distant particle, dust and hydrogen environment after Pluto and Arrokoth flybys.", "source": "https://science.nasa.gov/missions/new-horizons/nasas-new-horizons-spacecraft-wakes-from-hibernation-in-good-health/", "image": a('nh-pluto.jpg'), "credit": "NASA/Johns Hopkins APL/SwRI \u00b7earlier Pluto encounter image", "alt": "New Horizons historical Pluto encounter image"});
export const modelIds=['new-horizons','voyager-1','pioneer-10','ingenuity','perseverance','maven','curiosity','mro','odyssey','insight','surveyor-3','apollo-17-lrv','opportunity','apollo-11-surface','lro','apollo-17-surface','ladee'];
export const archiveArt={
'im-2-athena':{src:a('im2-rest.jpg'),credit:'NASA/GSFC/ASU · LRO, 7 MAR 2025',alt:'LRO orbital view of Athena, identified by a white arrow'},
'peregrine-1':{src:a('pg-prepare.jpg'),credit:'NASA/Isaac Watson · Earth preparation',alt:'Peregrine during Earth preparation in November2023'},
'pioneer-11':{src:a('p11-assembly.jpg'),credit:'NASA/KSC · KSC-73P-0116',alt:'Pioneer G awaiting its launch fairing, March 1973'},
'pioneer-10':{src:a('p10-assembly.jpg'),credit:'NASA · Earth assembly',alt:'Pioneer 10 during assembly on Earth'},
'ingenuity':{src:a('ing-damage.jpg'),credit:'NASA/JPL-Caltech/LANL/CNES/CNRS · February 2024 view',alt:'Ingenuity at Valinor Hills after its final flight'},
'perseverance-backshell':{src:a('bs-shell.jpg'),credit:'NASA/JPL-Caltech · Ingenuity Flight 26',alt:'Discarded Mars 2020 backshell photographed by Ingenuity in April 2022'},
'maven':{src:a('mav-uvnorth.jpg'),credit:'NASA/LASP/CU Boulder · earlier ultraviolet false-color view',alt:'Earlier MAVEN northern-hemisphere ultraviolet image of Mars'},
'mars-polar-lander':{src:a('mpl-build.jpg'),credit:'NASA/KSC · Earth preparation',alt:'Mars Polar Lander on Earth, not landed on Mars'},
'mars-climate-orbiter':{src:a('mco-build.jpg'),credit:'NASA/KSC · Earth processing, not at Mars',alt:'Technician with Mars Climate Orbiter on Earth'},
'insight':{src:a('ins-archive.jpg'),credit:'NASA/JPL-Caltech · Earth replica ForeSight',alt:'Engineers practice with ForeSight, an Earth replica, not the InSight lander on Mars'},
'phoenix':{src:a('phx-archive.jpg'),credit:'NASA/JPL-Caltech/University of Arizona · surface panorama',alt:'Phoenix camera view of polygon-patterned northern plains'},
'spirit':{src:a('spirit-archive.jpg'),credit:'NASA · rover artist concept',alt:'NASA illustration of Spirit on Mars, not a real rover portrait'},
'mars-global-surveyor':{src:a('mgs-archive.jpg'),credit:'NASA · spacecraft artist concept',alt:'NASA illustration of Mars Global Surveyor above Mars, not a spacecraft selfie'},
'pathfinder':{src:a('pf-archive.jpg'),credit:'NASA/JPL · Ares Vallis boulders',alt:'Boulders across the dry flood plain seen by Pathfinder'},
'viking-2':{src:a('v2-archive.jpg'),credit:'NASA/JPL · PIA01522 / Utopia Planitia',alt:'Viking 2 hardware in the foreground of a rock-strewn Utopia Planitia view'},
'viking-1':{src:a('v1-archive.jpg'),credit:'NASA · Viking orbiter/lander artist concept',alt:'NASA artist concept of the Viking spacecraft, lander enclosed below orbiter'},
'grail':{src:a('gr-archive.jpg'),credit:'NASA/GSFC/Arizona State University · topographic map',alt:'LRO preliminary topographic map marking the GRAIL impact area'},
'ladee':{src:a('ld-archive.jpg'),credit:'NASA · Wallops preflight encapsulation',alt:'Engineers preparing LADEE inside the rocket fairing before launch'},
'lcross':{src:a('lc-archive.jpg'),credit:'NASA · LRO above LCROSS / prelaunch',alt:'LRO and LCROSS being placed inside the launch shroud'},
'apollo-17-surface':{src:a('a17s-archive.jpg'),credit:'NASA · AS17-147-22517',alt:'Challenger on the Moon during first surface excursion'},
'apollo-16-surface':{src:a('a16-archive.jpg'),credit:'NASA · AS16-116-18649',alt:'Duke collecting a sample at Outhouse Rock'},
'apollo-15-surface':{src:a('a15-archive.jpg'),credit:'NASA · AS15-88-11901',alt:'Apollo 15 rover parked at its final position'},
'apollo-14-surface':{src:a('a14-archive.jpg'),credit:'NASA/JSC · AS14-67-9379',alt:'Apollo14 ALSEP central station on the Moon'},
'apollo-12-surface':{src:a('a12-archive.jpg'),credit:'NASA · AS12-48-7034',alt:'Intrepid descent-stage footpad and emptied RTG fuel cask'},
'apollo-11-surface':{src:a('a11-archive.jpg'),credit:'NASA · AS11-37-5437 · lunar approach',alt:'Moon seen from Apollo 11 in lunar orbit'},
'surveyor-1':{src:a('s1-archive.png'),credit:'NASA SP-126 · lunar soil near footpad',alt:'Lunar surface photographed by Surveyor 1'},
'ranger-7':{src:a('r7-archive.jpg'),credit:'NASA · Ranger impact-sites map',alt:'Map of the Ranger7,8and9 impact sites'},
'surveyor-3':{src:a('s3-archive.jpg'),credit:'NASA · AS12-48-7110',alt:'Surveyor3 footpad and surface sampler, photographed by Apollo12'},
'apollo-17-lrv':{src:a('a17-archive.jpg'),credit:'NASA · AS17-134-20379',alt:'Apollo17 rover, astronaut and lunar module'},
'opportunity':{src:new URL('../photos/opp-selfie.jpg',import.meta.url).href,credit:'NASA/JPL-Caltech · PIA17759',alt:'Opportunity self-portrait'}
};
