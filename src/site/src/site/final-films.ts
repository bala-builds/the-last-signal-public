import type {Scene} from './films';
export const finalFilms:Record<string,{title:string;subtitle:string;scenes:Scene[]}>= {};
finalFilms['peregrine-1']={
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
finalFilms['im-2-athena']={
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
finalFilms['im-1-odysseus']={
  "title": "SIX EXPERIMENTS.\nONE LUNAR WEEK.",
  "subtitle": "Odysseus leaned over. Its instruments still sent a week of learning home.",
  "scenes": [
    {
      "art": "im1-prepare.jpg",
      "title": "First, rehearse the approach.",
      "date": "NOV 2022 / EARTH PREPARATION",
      "narration": "A lander needs to know where it is. Teams tested Nova-C navigation sensors over a pretend lunar landscape on Earth.",
      "source": "https://images-assets.nasa.gov/image/KSC-20221118-PH-ILW01_0019/collection.json",
      "note": "NASA/Isaac Watson photograph of navigation pod preparation before helicopter tests at Kennedy on November 18, 2022. This is a Nova-C development test, not an image of the later Moon landing, and these company sensors are not mislabeled as NASA NDL.",
      "credit": "NASA/Isaac Watson",
      "alt": "Two Intuitive Machines employees ready navigation pod sensors for the company\u2019s Nova-C lunar lander in preparation for testing at NASA\u2019s Kennedy Space Center in Florida on Nov. 18, 2022. The test involved flying the sensors over a simulated lunar surface at the Launch and Landing Facility on a private helicopter. Intuitive Machines is scheduled to launch two missions to the Moon in 2023 \u2013 one of which will carry NASA\u2019s Mass Spectrometer observing lunar operations (MSolo) instrument that will help analyze the chemical makeup of landing sites on the Moon, as well as study water on the lunar surface. Through NASA\u2019s Commercial Lunar Payload Services initiative, the agency selected Intuitive Machines to deliver science and technology demonstration payloads to the Moon, contributing to NASA\u2019s goal of establishing a sustainable human presence on the lunar surface.",
      "kind": "data"
    },
    {
      "art": "im1-cameras.jpg",
      "title": "Pack cameras for flying dust.",
      "date": "BEFORE LAUNCH / EARTH TESTING",
      "narration": "SCALPSS was built to watch rocket exhaust stir the ground. Four tiny cameras faced a big question about safer landings.",
      "source": "https://science.nasa.gov/lunar-science/clps-deliveries/to2-im/",
      "note": "Earlier NASA Langley reference hardware in laboratory environmental testing. IM-1 SCALPSS later took transit and post-landing images, but it did not capture the planned plume-surface landing sequence. Planned goals are not reported as achieved.",
      "credit": "NASA/Langley \u00b7 Earth reference hardware",
      "alt": "A set of four cameras mounted on a metal wheel, along with control circuitry and processing units, undergo vibration testing in a lab. For some reason, there is a tape dispenser that appears to be from the 70s in the background. I imagine this wasn't part of the experiment.",
      "kind": "data"
    },
    {
      "art": "im1-launch.jpg",
      "title": "Odysseus leaves Earth.",
      "date": "15 FEB 2024 / LAUNCH",
      "narration": "A Falcon 9 carried Odysseus from Florida. The Intuitive Machines lander brought six NASA experiments and other customer payloads.",
      "source": "https://www.nasa.gov/missions/artemis/clps/nasa-collects-first-surface-science-in-decades-via-commercial-moon-mission/",
      "note": "NASA/Kim Shiflett actual IM-1 launch photograph. This was a commercial lander carrying NASA payloads under CLPS, not a NASA-owned lander.",
      "credit": "NASA/Kim Shiflett",
      "alt": "A SpaceX Falcon 9 rocket carrying Intuitive Machines\u2019 Nova-C lunar lander lifts off from Launch Pad 39A at NASA\u2019s Kennedy Space Center in Florida at 1:05 a.m. EST\u00a0on Thursday, Feb. 15, 2024. As part of NASA\u2019s CLPS (Commercial Lunar Payload Services) initiative and Artemis campaign, Intuitive Machines\u2019 first lunar mission will carry NASA science and commercial payloads to the Moon to study plume-surface interactions, space weather/lunar surface interactions, radio astronomy, precision landing technologies, and a communication and navigation node for future autonomous navigation technologies.",
      "kind": "data"
    },
    {
      "art": "im1-lidar.jpg",
      "title": "A laser helper steps in.",
      "date": "22 FEB 2024 / LUNAR DESCENT",
      "narration": "When a navigation sensor problem appeared, NASA's laser instrument helped. Its light measured speed and height during the descent.",
      "source": "https://www.nasa.gov/news-release/nasa-tech-contributes-to-soft-moon-landing-agency-science-underway/",
      "note": "Earlier NASA Langley reference image of NDL with three telescopes. NDL helped navigation after a company sensor issue; this laboratory image is not the actual descent or an accident reconstruction.",
      "credit": "NASA/Langley \u00b7 Earth reference hardware",
      "alt": "Three telescopes are sitting to the left of the payload which is the shape of a rectangular box. The telescopes are a dark blue color all mounted on the same piece of equipment. The payload box is a silver grey with black knobs on the front side.",
      "kind": "data"
    },
    {
      "art": "im1-radio.jpg",
      "title": "Listen from the Moon.",
      "date": "FEB 2024 / SURFACE SCIENCE",
      "narration": "Odysseus landed leaning over, but science could still work. ROLSES listened to radio noise from Earth and the Sun.",
      "source": "https://www.nasa.gov/missions/artemis/clps/nasa-collects-first-surface-science-in-decades-via-commercial-moon-mission/",
      "note": "Earlier NASA Goddard ROLSES hardware photograph. NASA confirms surface radio observations; no audio is represented as a recorded final transmission. The lander orientation limited communications and operations.",
      "credit": "NASA/Goddard \u00b7 Earth reference hardware",
      "alt": "Four sensors sit on a table connected with a series of silver-colored wires. Each sensor consists of a silver base plate with a black cylinder attached at a 45-degree angle. At the end of the cylinder sits a silver flat plate, which angle varies from sensor to sensor.",
      "kind": "data"
    },
    {
      "art": "im1-beacon.jpg",
      "title": "Try a lighthouse made of signals.",
      "date": "FEB 2024 / SURFACE TECHNOLOGY",
      "narration": "Lunar Node 1 tested navigation and communication ideas. One day, signals like these could help explorers find their way.",
      "source": "https://www.nasa.gov/missions/artemis/clps/nasa-collects-first-surface-science-in-decades-via-commercial-moon-mission/",
      "note": "NASA/MSFC concept-of-operations diagram, not a map of a working lunar GPS network. LN-1 powered on and returned surface data; the many future spacecraft in the drawing are a design concept, not all deployed by this mission.",
      "credit": "NASA/MSFC \u00b7 navigation concept diagram",
      "alt": "The Earth and Moon hover against a dark background on opposite sides. On the Moon, graphics represent a rover and landers. A satellite is positioned above Earth, representing a \u201cground station,\u201d while instruments positioned on the Moon represent rovers and landers. A CubeSat hovers over the Moon. A network of data sharing occurs between the objects, represented by arrows and red wavy lines. They are pointing in different directions to indicate communications between the objects.",
      "kind": "data"
    },
    {
      "art": "im1-reflector.jpg",
      "title": "Leave a little mirror marker.",
      "date": "FEB 2024 / PASSIVE HARDWARE",
      "narration": "A small reflector needed no battery. It was designed to bounce laser light back toward spacecraft that could measure the distance.",
      "source": "https://science.nasa.gov/lunar-science/clps-deliveries/to2-im/",
      "note": "NASA/GSFC Earth reference LRA image. The passive array is not a powered radio experiment. Its intended long-term role is stated as a design, not proof that it remains usable today. It is too small for laser ranging directly from Earth.",
      "credit": "NASA/GSFC \u00b7 Earth reference hardware",
      "alt": "The device is a gold-colored ball with a large square flat plate running through the middle and out the sides of the sphere. The gold-colored sphere is hollow with many holes going through it. These holes have a black edge as well as are equidistant from one another.",
      "kind": "data"
    },
    {
      "art": "im1-rest.jpg",
      "title": "The instruments finish a lunar week.",
      "date": "29 FEB 2024 / SCIENCE OPERATIONS CEASE",
      "narration": "After seven days on the surface, the NASA instruments stopped science and technology operations. Their data came home, while Odysseus stayed on the Moon.",
      "source": "https://www.nasa.gov/missions/artemis/clps/nasa-collects-first-surface-science-in-decades-via-commercial-moon-mission/",
      "note": "Earlier LRO orbital observation from February 24, 2024, shown as site context, not a final image sent by Odysseus. NASA March 1 report says science and technology operations ceased seven days after landing. Not every goal was completed; SCALPSS missed its planned plume sequence. No final words or exact present condition are invented.",
      "credit": "NASA/GSFC/Arizona State University \u00b7 LRO, 24 FEB 2024",
      "alt": "grayscale image of Moon's rocky surface from above, with a small white dot at the center of the frame: IM-1 lander, location indicated with white arrow",
      "kind": "data"
    }
  ]
};
finalFilms['blue-ghost-1']={
  "title": "TEN EXPERIMENTS.\nONE LONG LUNAR DAY.",
  "subtitle": "Blue Ghost brought a busy science team to Mare Crisium.",
  "scenes": [
    {
      "art": "bg-shield.jpg",
      "title": "Build a way to push dust away.",
      "date": "JAN 2023 / EARTH PREPARATION",
      "narration": "Moon dust sticks to almost everything. NASA tested an electric dust shield that could move the grains without a brush.",
      "source": "https://images-assets.nasa.gov/image/KSC-20230118-PH-CSH01_0002/collection.json",
      "note": "NASA/Cory Huston Earth laboratory photograph. The technology later flew on Blue Ghost, but this scene shows preparation on Earth, not live lunar conditions.",
      "credit": "NASA/Cory Huston",
      "alt": "Inside of the Electrostatics and Surface Physics Laboratory at NASA\u2019s Kennedy Space Center in Florida, an electrodynamic dust shield (EDS) is in view on Jan. 18, 2023. The dust shield is one of the payloads that will fly aboard Firefly Aerospace\u2019s Blue Ghost lunar lander as part of NASA\u2019s Commercial Lunar Payload Services (CLPS) initiative. During the mission, EDS will generate a non-uniform electric field using varying high voltage on multiple electrodes. This traveling field, in turn, carries away the particles and has potential applications in thermal radiators, spacesuit fabrics, visors, camera lenses, solar panels, and many other technologies. The CLPS initiative is a key part of NASA\u2019s Artemis lunar exploration efforts. The science and technology payloads sent to the Moon\u2019s surface as part of the initiative will help lay the foundation for human missions and a sustainable human presence on the lunar surface. ",
      "kind": "data"
    },
    {
      "art": "bg-cameras.jpg",
      "title": "Give the landing six eyes.",
      "date": "BEFORE LAUNCH / CAMERA DESIGN",
      "narration": "SCALPSS 1.1 used six cameras to study the ground and flying dust. Stereo views could help scientists understand a landing in three dimensions.",
      "source": "https://www.nasa.gov/general/nasa-cameras-on-blue-ghost-capture-first-of-its-kind-moon-landing-footage/",
      "note": "Frame from NASA Langley hardware reference turntable animation, not an exact photograph of the installed exterior or flight video. Four short-focal-length cameras and two long-focal-length cameras made up SCALPSS 1.1.",
      "credit": "NASA/Langley \u00b7 SCALPSS 1.1 reference animation",
      "alt": "Frame from NASA SCALPSS 1.1 hardware turntable, a reference animation, not flight imagery",
      "kind": "data"
    },
    {
      "art": "bg-pad.jpg",
      "title": "Ten experiments wait for a ride.",
      "date": "14 JAN 2025 / LAUNCH PREPARATION",
      "narration": "Blue Ghost carried ten NASA payloads. Firefly built and operated the commercial lander that would deliver them.",
      "source": "https://images-assets.nasa.gov/image/KSC-20250114-PH-KLS01_0039/collection.json",
      "note": "NASA/Kim Shiflett actual rocket preparation photograph from the day before launch. The rocket contains the lander; it is not shown exposed. This is a commercial NASA-payload delivery, not NASA ownership of the lander.",
      "credit": "NASA/Kim Shiflett",
      "alt": "A SpaceX Falcon 9 rocket carrying Firefly Aerospace\u2019s Blue Ghost Mission One lander prepares for a launch to the Moon on Tuesday, Jan. 14, 2025 from Launch Complex 39A at the agency\u2019s Kennedy Space Center in Florida as part of NASA\u2019s CLPS (Commercial Lunar Payload Services) initiative. The Blue Ghost lander will carry 10 NASA science and technology instruments to the lunar surface to further understand the Moon and help prepare for future human missions. Liftoff is targeted for 1:11 a.m. EST.",
      "kind": "data"
    },
    {
      "art": "bg-launch.jpg",
      "title": "Leave Florida before dawn.",
      "date": "15 JAN 2025 / LAUNCH",
      "narration": "A Falcon 9 carried Blue Ghost away from Earth. A weeks-long journey would bring it to the Moon's near side.",
      "source": "https://www.nasa.gov/news-release/nasa-science-continues-after-fireflys-first-moon-mission-concludes/",
      "note": "NASA/Frank Michaux actual mission launch photograph. Landing occurred March 2, not immediately after launch; this scene does not invent a direct one-day journey.",
      "credit": "NASA/Frank Michaux",
      "alt": "A SpaceX Falcon 9 rocket carrying Firefly Aerospace\u2019s Blue Ghost Mission One is on its way to the Moon as part of NASA\u2019s CLPS (Commercial Lunar Payload Services) initiative. The Blue Ghost lander launched from Launch Complex 39A at NASA\u2019s Kennedy Space Center in Florida on Wednesday, Jan. 15, 2025 carrying 10 NASA science and technology instruments to the lunar surface to further understand the Moon and help prepare for future human missions.",
      "kind": "data"
    },
    {
      "art": "bg-descent.jpg",
      "title": "Watch the dust rise.",
      "date": "2 MAR 2025 / DESCENT AND LANDING",
      "narration": "The cameras watched rocket plumes stir the lunar ground. Blue Ghost touched down in Mare Crisium, and the dust began to settle.",
      "source": "https://www.nasa.gov/general/nasa-cameras-on-blue-ghost-capture-first-of-its-kind-moon-landing-footage/",
      "note": "Frame from the NASA/Olivia Tyrrell preliminary four-camera SCALPSS descent sequence. It is original instrument imagery, not a simulated landing or Firefly camera image. NASA labels altitude data approximate and processing preliminary.",
      "credit": "NASA/Olivia Tyrrell \u00b7 SCALPSS 1.1 landing sequence",
      "alt": "Four NASA SCALPSS camera views during Blue Ghost descent; altitude overlays approximate",
      "kind": "data"
    },
    {
      "art": "bg-clean.jpg",
      "title": "An electric field clears the surface.",
      "date": "MAR 2025 / SURFACE DEMONSTRATION",
      "narration": "The dust shield lifted and moved lunar grains. Other instruments studied heat, navigation, radiation and the Moon's hidden interior.",
      "source": "https://www.nasa.gov/news-release/nasa-science-continues-after-fireflys-first-moon-mission-concludes/",
      "note": "After-activation frame from NASA EDS before/after comparison. This shows the actual dust demonstration, not a spotless whole lander. NASA reports all ten payloads activated, collected data and operated, but this image does not illustrate every payload result.",
      "credit": "NASA \u00b7 actual EDS lunar demonstration",
      "alt": "After-activation frame from NASA electrodynamic dust shield demonstration on the Moon",
      "kind": "data"
    },
    {
      "art": "bg-sunset.jpg",
      "title": "Watch a very long day end.",
      "date": "MAR 2025 / LUNAR SUNSET",
      "narration": "After about fourteen Earth days on the surface, sunlight faded. A NASA camera kept watching as the long lunar night arrived.",
      "source": "https://www.nasa.gov/image-article/goodnight-moon-nasa-cameras-on-blue-ghost-capture-lunar-sunset/",
      "note": "A sunlit frame from the NASA/Olivia Tyrrell compressed sunset sequence, which sampled images every ten minutes. Bright swirling light is sunlight reflected off the lander, not a dust storm or glowing lunar material. This is not claimed as the final transmitted frame.",
      "credit": "NASA/Olivia Tyrrell \u00b7 SCALPSS sunset sequence",
      "alt": "Earlier sunlit frame from NASA SCALPSS sunset sequence on Blue Ghost, March 2025",
      "kind": "data"
    },
    {
      "art": "bg-place.jpg",
      "title": "The lander rests. The science continues.",
      "date": "16 MAR 2025 / MISSION CONCLUDES",
      "narration": "Blue Ghost worked for a few hours into lunar night, then its mission ended. The lander stayed in Mare Crisium while teams studied the data on Earth.",
      "source": "https://www.nasa.gov/news-release/nasa-science-continues-after-fireflys-first-moon-mission-concludes/",
      "note": "Separate NASA Science Mare Crisium terrain context, not Blue Ghost camera imagery, an exact landing-site marker, a close-up of the resting lander or its current condition. NASA reports mission end March 16 after about fourteen surface days. The reference terrain view is used to locate the region, not as a final transmission. No final words are invented.",
      "credit": "NASA Science \u00b7 Mare Crisium terrain context",
      "alt": "Overhead view of a pockmarked landform on the Moon. Light catches the curved edge of the ridge on the left; its right edge is in shadow.",
      "kind": "data"
    }
  ]
};
finalFilms['lunar-trailblazer']={
  "title": "A WATER MAP\nTHAT NEVER CAME.",
  "subtitle": "A small orbiter, a lost connection, and lessons for the next mission.",
  "scenes": [
    {
      "art": "lt-instrument.jpg",
      "title": "Build an eye for hidden water.",
      "date": "DEC 2022 / INSTRUMENT PREPARATION",
      "narration": "HVM3 was built to read the fingerprints of water in reflected light. It was one of two instruments aboard the small Lunar Trailblazer orbiter.",
      "source": "https://www.jpl.nasa.gov/missions/lunar-trailblazer/",
      "note": "NASA/JPL-Caltech actual HVM3 photograph before spacecraft integration. It shows one science instrument, not the whole spacecraft. The mission never collected its intended lunar maps.",
      "credit": "NASA/JPL-Caltech",
      "alt": "The HVM\u00b3 instrument sits in a JPL clean room in early December 2022. The instrument was built at JPL then shipped to Lockheed Martin Space in Colorado to be integrated with NASA's Lunar Trailblazer spacecraft.",
      "kind": "data"
    },
    {
      "art": "lt-water.jpg",
      "title": "Ask where the water hides.",
      "date": "SCIENCE GOAL / EARLIER MISSION CONTEXT",
      "narration": "Earlier missions had found signs of lunar water. Trailblazer aimed to show where it was, what form it took and how it changed.",
      "source": "https://science.nasa.gov/photojournal/water-detected-at-high-latitudes/",
      "note": "NASA M3 science product from ISRO Chandrayaan-1,2009. Blue indicates water and hydroxyl signatures, not blue lakes or a natural-color view. This is earlier mission context, not Trailblazer data.",
      "credit": "NASA/JPL \u00b7 M3 on ISRO Chandrayaan-1 \u00b7 2009 context",
      "alt": "Earlier Moon Mineralogy Mapper water and hydroxyl signatures; not Trailblazer data",
      "kind": "data"
    },
    {
      "art": "lt-thermal.jpg",
      "title": "Pair water clues with temperature.",
      "date": "SCIENCE GOAL / EARLIER MISSION CONTEXT",
      "narration": "A second instrument, the Lunar Thermal Mapper, was meant to measure surface temperature. Together, the two instruments could test how heat and water were connected.",
      "source": "https://www.jpl.nasa.gov/missions/lunar-trailblazer/",
      "note": "Earlier LRO Diviner temperature map used to explain the science goal, not a Trailblazer measurement or image of its Oxford-built thermal mapper. Color represents mapped temperature. Trailblazer did not reach its intended lunar science orbit.",
      "credit": "NASA/GSFC/UCLA \u00b7 LRO Diviner \u00b7 2009 context",
      "alt": "Earlier LRO Diviner south-polar temperature map, not Trailblazer science",
      "kind": "data"
    },
    {
      "art": "lt-launch.jpg",
      "title": "Share a rocket. Follow another path.",
      "date": "26 FEB 2025 / LAUNCH",
      "narration": "Trailblazer launched with the IM-2 lunar lander, but it was a separate spacecraft. It separated from the rocket about forty-eight minutes later.",
      "source": "https://www.nasa.gov/missions/small-satellite-missions/lunar-trailblazer/nasas-lunar-trailblazer-moon-mission-ends/",
      "note": "NASA/Frank Michaux actual February26 launch photograph. Trailblazer was a NASA orbiter rideshare, not a commercial surface lander. This scene does not imply it landed with IM-2.",
      "credit": "NASA/Frank Michaux",
      "alt": "A SpaceX Falcon 9 rocket carrying Intuitive Machines\u2019 Nova-C lunar lander (IM-2) launches at 7:16 p.m. EST on Wednesday, Feb. 26, 2025, from Launch Complex 39A at NASA\u2019s Kennedy Space Center in Florida as part of NASA\u2019s CLPS (Commercial Lunar Payload Services) initiative. The IM-2 launch is carrying NASA science, technology demonstrations, and other commercial payloads to Mons Mouton, a lunar plateau to advance our understanding of the Moon and planetary processes, while paving the way for future crewed missions.",
      "kind": "data"
    },
    {
      "art": "lt-signal.jpg",
      "title": "A first signal reaches Australia.",
      "date": "26 FEB 2025 / FIRST CONTACT",
      "narration": "An antenna near Canberra heard the small spacecraft. The team made contact and began checking how it was doing.",
      "source": "https://science.nasa.gov/blogs/lunar-trailblazer/2025/02/26/initial-signal-acquired-nasas-lunar-trailblazer-powered-up/",
      "note": "NASA2016 DSS-36 reference photograph. The station received the initial Trailblazer signal in2025, but this image is not from that event. NASA later established two-way communications after launch.",
      "credit": "NASA \u00b7 DSS-36 \u00b7 2016 ground-station context",
      "alt": "Deep Space Station 36 in Canberra in 2016, not a photograph of the 2025 signal acquisition",
      "kind": "data"
    },
    {
      "art": "lt-power.jpg",
      "title": "Then the power problem appears.",
      "date": "27 FEB 2025 / CONTACT LOST",
      "narration": "Contact was lost the next day. Limited data showed the solar panels were not aimed properly at the Sun, and the batteries ran down.",
      "source": "https://www.nasa.gov/missions/small-satellite-missions/lunar-trailblazer/nasas-lunar-trailblazer-moon-mission-ends/",
      "note": "Original explanatory diagram based on the NASA mission-end report. Generic shapes are not actual Trailblazer hardware, measured attitude or a full root-cause reconstruction. NASA could not fully diagnose the spacecraft without two-way contact.",
      "credit": "THE LAST SIGNAL \u00b7 NASA-grounded explanatory diagram",
      "alt": "Simplified sunlight, generic edge-on solar panels and spacecraft diagram, not actual Trailblazer geometry or attitude data",
      "kind": "data"
    },
    {
      "art": "lt-network.jpg",
      "title": "People keep listening.",
      "date": "MAR-JUL 2025 / RECOVERY EFFORT",
      "narration": "Teams around the world listened and tracked the spacecraft for months. It was slowly spinning and traveling farther into deep space.",
      "source": "https://www.nasa.gov/missions/small-satellite-missions/lunar-trailblazer/nasas-lunar-trailblazer-moon-mission-ends/",
      "note": "NASA reference map of the Deep Space Network, not a comprehensive list of all collaborating organizations or a recovery trajectory. Ground radar and optical observations indicated slow spin. This does not show spacecraft camera imagery or its current position.",
      "credit": "NASA \u00b7 Deep Space Network reference map",
      "alt": "Reference map of the three Deep Space Network complexes, not a plotted Trailblazer recovery track",
      "kind": "data"
    },
    {
      "art": "lt-legacy.jpg",
      "title": "The flight ends. The learning stays.",
      "date": "31 JUL 2025 / MISSION ENDS",
      "narration": "Lunar Trailblazer never reached its Moon-mapping goal. NASA ended the mission, but the instrument design and lessons could help future science.",
      "source": "https://www.nasa.gov/missions/small-satellite-missions/lunar-trailblazer/nasas-lunar-trailblazer-moon-mission-ends/",
      "note": "Separate NASA/JPL-Caltech earlier HVM3 milestone photograph, not a final transmitted image or view of the drifting spacecraft. NASA reported the selected UCIS-Moon instrument uses an identical spectrometer design. No final words, impact, lunar landing or successful mapping are invented.",
      "credit": "NASA/JPL-Caltech",
      "alt": "The High-resolution Volatiles and Minerals Moon Mapper (HVM&#xB3;) is one of two instruments that will be carried aboard NASA's Lunar Trailblazer, launching in 2023.",
      "kind": "data"
    }
  ]
};
