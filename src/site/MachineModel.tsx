import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';

const mat=(c:string,metal=.2,rough=.55)=>new THREE.MeshStandardMaterial({color:c,metalness:metal,roughness:rough});
const silver=(rough=.4)=>mat('#c9c8c0',.85,rough),dark=()=>mat('#3a3c3a',.3,.7),gold=(rough=.32)=>mat('#c8a24a',.9,rough),white=()=>mat('#e8e2d5',.15,.6),alu=()=>mat('#b9b8ae',.7,.45);
function box(g:THREE.Group,s:number[],p:number[],m:THREE.Material){const x=new THREE.Mesh(new THREE.BoxGeometry(...s as [number,number,number]),m);x.position.set(...p as [number,number,number]);g.add(x);return x}
function ball(g:THREE.Group,r:number,p:number[],m:THREE.Material){const x=new THREE.Mesh(new THREE.SphereGeometry(r,24,18),m);x.position.set(...p as [number,number,number]);g.add(x);return x}
function rod(g:THREE.Group,a:number[],b:number[],r:number,m:THREE.Material){const av=new THREE.Vector3(...a as [number,number,number]),bv=new THREE.Vector3(...b as [number,number,number]);const d=bv.clone().sub(av);const x=new THREE.Mesh(new THREE.CylinderGeometry(r,r,d.length(),12),m);x.position.copy(av.add(bv).multiplyScalar(.5));x.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());g.add(x);return x}
function disc(g:THREE.Group,r:number,h:number,p:number[],m:THREE.Material){const x=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,32),m);x.position.set(...p as [number,number,number]);g.add(x);return x}
function cyl(g:THREE.Group,rt:number,rb:number,h:number,p:number[],m:THREE.Material,seg=24){const x=new THREE.Mesh(new THREE.CylinderGeometry(rt,rb,h,seg),m);x.position.set(...p as [number,number,number]);g.add(x);return x}

// Procedural textures so panels read as real hardware, not flat paint.
function solarTexture(){const c=document.createElement('canvas');c.width=256;c.height=256;const x=c.getContext('2d')!;x.fillStyle='#141c30';x.fillRect(0,0,256,256);for(let i=0;i<8;i++)for(let j=0;j<8;j++){x.fillStyle=(i+j)%2?'#1a2540':'#182238';x.fillRect(i*32+1,j*32+1,30,30);x.fillStyle='rgba(90,110,160,.25)';x.fillRect(i*32+1,j*32+1,30,4)}x.strokeStyle='#8f9298';x.lineWidth=2;x.strokeRect(0,0,256,256);const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t}
function solarMat(){return new THREE.MeshStandardMaterial({map:solarTexture(),metalness:.35,roughness:.45})}
// Woven zinc-coated steel tire mesh (NSSDC: woven steel strands, titanium chevrons).
function meshTexture(){const c=document.createElement('canvas');c.width=256;c.height=64;const x=c.getContext('2d')!;x.clearRect(0,0,256,64);x.strokeStyle='#b7b7b1';x.lineWidth=2.4;
 for(let i=-64;i<320;i+=8){x.beginPath();x.moveTo(i,0);x.lineTo(i+64,64);x.stroke();x.beginPath();x.moveTo(i+64,0);x.lineTo(i,64);x.stroke()}
 const t=new THREE.CanvasTexture(c);t.wrapS=THREE.RepeatWrapping;t.repeat.set(14,1);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t}
function fabricTexture(){const c=document.createElement('canvas');c.width=128;c.height=128;const x=c.getContext('2d')!;x.fillStyle='#5a5a56';x.fillRect(0,0,128,128);for(let i=0;i<128;i+=8){x.fillStyle=i%16?'#52524e':'#61615d';x.fillRect(0,i,128,4)}for(let i=0;i<128;i+=8){x.fillStyle='rgba(0,0,0,.12)';x.fillRect(i,0,4,128)}const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;return t}

// Surveyor 3: rebuilt from NASA/JPL reference photos (incl. the Apollo 12 visit).
// White thermal boxes, aluminum tripod, dark solar panel, planar-array antenna,
// TV camera with mirror hood, surface sampler scoop, helium spheres.
function makeSurveyor(){const g=new THREE.Group(),s=silver(),w=white(),a=gold(),al=alu(),solar=solarMat();
 // tripod frame: three legs, footpads, crushable blocks, shock struts
 const nodes=Array.from({length:3},(_,i)=>{const t=i*Math.PI*2/3+Math.PI/6;return[Math.cos(t)*.56,1.06,Math.sin(t)*.56]});
 for(let i=0;i<3;i++){const t=i*Math.PI*2/3+Math.PI/6,xx=Math.cos(t)*1.95,zz=Math.sin(t)*1.95,top=nodes[i]; // footpad outer edges touch the documented 4.26 m circle (center radius + 0.18 m pad)
  rod(g,top,[xx,.16,zz],.030,al);rod(g,nodes[(i+1)%3],[xx,.16,zz],.020,al);rod(g,top,nodes[(i+1)%3],.034,al);
  rod(g,[xx*.86,.5,zz*.86],[xx,.16,zz],.042,w); // shock absorber sleeve
  disc(g,.18,.045,[xx,.09,zz],al); // footpad
  box(g,[.16,.13,.16],[xx*.9,.30,zz*.9],w); // crushable block
  cyl(g,.03,.075,.14,[xx*.72,.38,zz*.72],dark())} // vernier engine nozzle, wide end down
 // deck + thermal electronics boxes (white) with gold insulation faces
 box(g,[.72,.34,.30],[-.24,1.08,.12],w);box(g,[.33,.32,.42],[.34,1.05,-.14],w);box(g,[.26,.38,.26],[.05,.94,.32],a);
 box(g,[.72,.02,.30],[-.24,1.26,.12],al);box(g,[.33,.02,.42],[.34,1.22,-.14],al);
 for(const b of [[-.24,1.08,.28],[.34,1.05,.08]])ball(g,.028,b as number[],a);
 // helium / propellant spheres (titanium gold tone) under deck
 for(let i=0;i<3;i++)ball(g,.15,[Math.cos(i*2.09)*.3,.62,Math.sin(i*2.09)*.3],a);
 // mast, solar panel on top, planar-array antenna below
 rod(g,[0,1.1,0],[0,2.88,0],.032,al); // mast: documented overall height ~3.04 m
 const panel=box(g,[1.06,.03,.58],[0,2.92,0],solar);panel.rotation.z=.12;
 const array=box(g,[.78,.92,.022],[0,2.3,-.06],mat('#ded9cc',.35,.5));array.rotation.y=.06;
 for(let i=-3;i<=3;i++)rod(g,[i*.105,1.87,-.045],[i*.105,2.74,-.075],.004,mat('#b9b5a8',.5,.5));
 for(const boom of [[-.5,.4],[.5,-.35]]){rod(g,[0,2.88,0],[boom[0],3.24,boom[1]],.008,al);
  const tip=new THREE.Mesh(new THREE.ConeGeometry(.018,.05,10),al);const bd=new THREE.Vector3(boom[0],.36,boom[1]).normalize();tip.position.set(boom[0]+bd.x*.05,3.24+bd.y*.05,boom[1]+bd.z*.05);tip.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),bd);g.add(tip)}
 // TV camera: white barrel, silver mirror hood, black lens bezel
 const cam=new THREE.Group();const barrel=cyl(cam,.075,.075,.62,[0,0,0],w);barrel.rotation.x=.5;const hood=box(cam,[.2,.04,.2],[0,.3,.14],s);hood.rotation.z=.5;box(cam,[.14,.17,.14],[0,.2,.1],dark());cam.position.set(-.42,1.5,.06);cam.rotation.z=.12;g.add(cam);
 // surface sampler: two-segment arm + scoop with door
 rod(g,[.4,.95,.25],[.76,.58,.68],.026,al);rod(g,[.76,.58,.68],[1.4,.24,.73],.02,al);box(g,[.24,.07,.19],[1.42,.2,.73],al);box(g,[.24,.02,.19],[1.42,.155,.73],dark());
 return g}

// Apollo 11 PSEP: white thermal station, twin dark solar wings, omni antenna,
// and the seismometer dome on its skirt, linked by a surface cable.
function makePSEP(){const g=new THREE.Group(),s=silver(),w=white(),al=alu(),solar=solarMat();
 box(g,[.62,.15,.62],[0,.14,0],w);box(g,[.5,.1,.5],[0,.26,0],w);box(g,[.56,.03,.56],[0,.335,0],al);
 for(const sign of [-1,1]){const panel=box(g,[.86,.028,.62],[sign*.76,.13,0],solar);panel.rotation.z=sign*.06;
  rod(g,[sign*.34,.10,-.3],[sign*.34,.16,-.3],.012,al);rod(g,[sign*1.18,.10,-.3],[sign*1.18,.16,-.3],.012,al)}
 rod(g,[-.2,.36,-.2],[-.2,.36,.2],.014,al);rod(g,[.2,.36,-.2],[.2,.36,.2],.014,al);rod(g,[-.2,.36,0],[.2,.36,0],.014,al);
 rod(g,[0,.34,0],[0,1.5,0],.011,al);const helix=cyl(g,.028,.028,.22,[0,1.6,0],w);rod(g,[0,1.4,0],[.2,1.28,0],.007,al);rod(g,[.2,1.28,0],[.26,1.4,0],.007,al);
 for(const z of [-.2,.2])rod(g,[-.28,.24,z],[.28,.24,z],.01,al);
 // Apollo 11 PSEP is ONE integrated package: the sensor drum sits ON the pallet
 // under a flat-crowned-hat mylar shroud whose brim spreads past the plate edges.
 // (The cable-linked separate dome belongs to the later Apollo 12+ ALSEP layout.)
 cyl(g,.14,.15,.30,[0,.50,0],s);cyl(g,.44,.49,.06,[0,.38,0],al);rod(g,[0,.65,0],[0,.80,0],.008,al);
 return g}

// Apollo LRV: rebuilt from NASA/MSFC references. Steel-mesh wheels with dark
// chevron treads, fenders, gray fabric seats, console with T-handle, LCRU,
// TV camera, mesh high-gain dish, battery covers, aft pallet, whip antenna.
function makeLRV(){const g=new THREE.Group(),s=silver(),w=white(),al=alu(),dg=mat('#4a4a48',.2,.8);
 const fabric=new THREE.MeshStandardMaterial({map:fabricTexture(),roughness:.9,metalness:0});
 // Bodywork sits 0.26 m lower than an earlier pass: NSSDC lists 36 cm ground
 // clearance fully loaded and 1.14 m maximum height; wheels stay at 81.8 cm dia.
 box(g,[3.1,.08,1.45],[0,.40,0],al);box(g,[1.0,.06,1.3],[-1.0,.46,0],al);box(g,[.9,.06,1.3],[1.05,.46,0],al); // chassis sections
 for(const x of [-1.15,1.15])for(const z of [-.9,.9]){
  const wheel=new THREE.Mesh(new THREE.CylinderGeometry(.409,.409,.23,80,10,true),new THREE.MeshStandardMaterial({color:'#9a988f',metalness:.75,roughness:.55,wireframe:true}));wheel.rotation.x=Math.PI/2;wheel.position.set(x,.409,z);g.add(wheel); // woven steel-mesh tire
  const inner=new THREE.Mesh(new THREE.CylinderGeometry(.34,.34,.2,32,1,true),mat('#2b2b29',.2,.9));inner.rotation.x=Math.PI/2;inner.position.copy(wheel.position);g.add(inner); // bump-stop frame visible through the mesh
  const ti=mat('#5f5d57',.55,.5);for(let i=0;i<26;i++){const t=i/26*Math.PI*2;const tr=new THREE.Group();tr.position.set(x+Math.cos(t)*.41,.409+Math.sin(t)*.41,z);tr.rotation.z=t+Math.PI/2;const ch=box(tr,[.055,.008,.235],[0,0,0],ti);ch.rotation.y=.35;g.add(tr)} // slim titanium chevrons
  const hub=new THREE.Mesh(new THREE.CylinderGeometry(.15,.15,.26,24),s);hub.rotation.x=Math.PI/2;hub.position.copy(wheel.position);g.add(hub);
  const cap=new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.24,24),dg);cap.rotation.x=Math.PI/2;cap.position.set(x,.409,z);g.add(cap);cap.scale.set(1,1,.6);
  rod(g,[x,.40,z*.55],[x,.43,z],.026,al);rod(g,[x-.22,.42,z*.55],[x,.43,z],.02,al);
  const fender=box(g,[.86,.02,.5],[x,.86,z],dg);fender.rotation.x=0;box(g,[.5,.015,.16],[x,.85,z+Math.sign(z)*.42],dg)}
 for(const z of [-.4,.4]){ // seats: silver tube frames, gray fabric
  box(g,[.58,.05,.5],[.1,.60,z],fabric);const back=box(g,[.04,.56,.48],[.44,.88,z],fabric);back.rotation.z=-.17;
  rod(g,[-.2,.44,z-.24],[-.2,.60,z-.24],.016,al);rod(g,[-.2,.44,z+.24],[-.2,.60,z+.24],.016,al);rod(g,[.44,.64,z-.24],[.49,1.16,z-.24],.016,al);rod(g,[.44,.64,z+.24],[.49,1.16,z+.24],.016,al)}
 box(g,[.2,.1,.5],[-.32,.56,0],dark());rod(g,[-.32,.61,0],[-.38,.76,0],.018,al);box(g,[.05,.05,.24],[-.38,.79,0],dark()); // console + T-handle
 // forward: LCRU with white thermal top, TV camera, mesh high-gain dish
 box(g,[.66,.3,1.1],[-1.28,.59,0],dg);box(g,[.66,.05,1.1],[-1.28,.76,0],w);
 rod(g,[-1.42,.74,.42],[-1.42,1.40,.42],.02,al);
 const dish=new THREE.Mesh(new THREE.SphereGeometry(.36,36,22,0,Math.PI*2,0,Math.PI*.4),new THREE.MeshStandardMaterial({color:'#c9c4b4',side:THREE.DoubleSide,wireframe:true,metalness:.6,roughness:.5}));dish.rotation.z=.95;dish.position.set(-1.42,1.42,.42);g.add(dish);
 rod(g,[-1.42,1.42,.42],[-1.55,1.60,.42],.008,al);ball(g,.03,[-1.55,1.60,.42],gold());
 rod(g,[-1.34,.74,-.44],[-1.34,1.14,-.44],.018,al);box(g,[.16,.13,.13],[-1.34,1.24,-.44],s);box(g,[.05,.09,.09],[-1.24,1.24,-.44],dark()); // TV camera + lens
 // aft: battery covers, pallet, 16mm camera, whip antenna
 box(g,[.34,.24,1.1],[1.18,.58,0],s);box(g,[.28,.2,1.0],[1.44,.54,0],s); // silver battery covers inside the wheel line
 cyl(g,.05,.05,.14,[.78,.52,-.6],dark());rod(g,[.95,.46,-.55],[.95,1.84,-.55],.008,al);
 rod(g,[-.9,.46,.6],[-1.6,.46,.6],.02,al);rod(g,[-.9,.46,-.6],[-1.6,.46,-.6],.02,al);
 return g}

const GLB_IDS=['opportunity','lro','apollo-17-surface','ladee','insight','odyssey','mro','curiosity','maven','perseverance','ingenuity','voyager-1','voyager-2','new-horizons','pioneer-10'];
const GLB_PATHS:Record<string,string>={'new-horizons':'/models/new-horizons.glb','voyager-1':'/models/voyager.glb','voyager-2':'/models/voyager.glb','pioneer-10':'/models/pioneer-10.glb','ingenuity':'/models/ingenuity.glb','perseverance':'/models/perseverance.glb','maven':'/models/maven.glb','curiosity':'/models/curiosity.glb','mro':'/models/mro.glb','odyssey':'/models/odyssey.glb','insight':'/models/insight.glb','ladee':'/models/ladee.glb','apollo-17-surface':'/models/apollo-lunar-module.glb','lro':'/models/lro.glb','opportunity':'/models/opportunity.glb'};
const SCALES:Record<string,number>={'voyager-1':6,'voyager-2':6,'new-horizons':2.9,'pioneer-10':3.5,'ingenuity':3.0,'perseverance':3.0,'curiosity':4.2,'mro':4.3,'odyssey':3.8,'lro':2.5};
// NASA/Ames Opportunity asset: restore believable PBR response per named part.
const OPP_MATS:Record<string,[number,number]>={'Copper':[.9,.3],'SolarArrays':[.2,.5],'Gold2':[.85,.35],'LightGrayMetal':[.8,.4],'White':[.1,.6],'Gray':[.5,.5],'Black':[.2,.7]};

// Part labels: verified names + one-line notes. Procedural models use exact
// build coordinates; GLB models anchor to a named node inside the NASA asset.
// Models whose official assets carry no identifiable part nodes are not labeled.
type PartTag={n:string;d:string;at?:[number,number,number];node?:string};
const LABELS:Record<string,PartTag[]>={
 'surveyor-3':[
  {n:'Solar panel',d:'Supplied electrical power.',at:[0,2.92,0]},
  {n:'Planar-array antenna',d:'Sent television pictures back to Earth.',at:[0,2.3,-.06]},
  {n:'TV camera',d:'Sent thousands of pictures of the surface.',at:[-.42,1.5,.06]},
  {n:'Surface sampler',d:'Scoop that dug trenches in the lunar soil.',at:[1.42,.2,.73]},
  {n:'Omni antennas',d:'Received commands from Earth.',at:[.5,3.24,-.35]},
  {n:'Propellant tanks',d:'Fed the vernier engines during landing.',at:[.3,.62,0]},
  {n:'Electronics bays',d:'Thermal boxes housing the computers.',at:[-.24,1.08,.12]},
  {n:'Landing legs',d:'Three legs with crushable shock absorbers.',at:[-1.5,.4,.85]}],
 'apollo-11-surface':[
  {n:'Solar panels',d:'Powered the station during lunar days.',at:[.76,.16,0]},
  {n:'Antenna',d:'Sent the seismic readings back to Earth.',at:[0,1.6,0]},
  {n:'Central station',d:'Housed the experiment electronics.',at:[0,.2,0]},
  {n:'Seismometer',d:'Listened for moonquakes and meteorite impacts.',at:[0,.5,0]},
  {n:'Thermal shroud',d:'Mylar cover that steadied the instrument temperature.',at:[.44,.38,0]},
  {n:'Gnomon',d:'Its shadow told the crew the package faced the right way.',at:[0,.82,0]}],
 'apollo-17-surface':[
  {n:'Crew cabin',d:'The two astronauts lived and steered from here.',node:'polysurfac002'},
  {n:'Descent stage',d:'The lower half carried landing fuel and cargo.',node:'pcylinder1'},
  {n:'Descent engine',d:'Its big nozzle slowed the fall to the Moon.',node:'group13_pc_1'},
  {n:'Steering rockets',d:'Small thrusters turned the craft.',node:'group13_g4'},
  {n:'Rendezvous radar',d:'Helped find the command module in orbit.',node:'group51_g5'},
  {n:'Docking hatch',d:'The tunnel back to the command module.',node:'ppipe1'},
  {n:'Ladder',d:'The astronauts climbed down to the Moon.',node:'polysurfa1'},
  {n:'Landing footpad',d:'Wide feet kept the lander steady.',node:'pplane1'}],
 'apollo-17-lrv':[
  {n:'Steel-mesh wheel',d:'Woven steel tire with titanium chevron treads.',at:[1.15,.41,.9]},
  {n:'High-gain antenna',d:'Sent TV and voice directly to Earth.',at:[-1.55,1.64,.42]},
  {n:'LCRU radio',d:'Lunar Communications Relay Unit - the link to Houston.',at:[-1.28,.64,0]},
  {n:'TV camera',d:'Let Mission Control watch the drive live.',at:[-1.34,1.24,-.44]},
  {n:'Seats',d:'Two folding seats for the crew.',at:[.44,.99,0]},
  {n:'Drive console',d:'T-handle controller steered the rover.',at:[-.32,.64,0]},
  {n:'Batteries',d:'Two silver-zinc batteries ran all four wheel motors.',at:[1.3,.58,0]},
  {n:'Fenders',d:'Dust guards over each wheel.',at:[1.15,.86,.9]}],
 ingenuity:[
  {n:'Rotor blades',d:'Counter-rotating blades that flew in the thin Martian air.',node:'rotors_01'},
  {n:'Solar panel',d:'Charged the batteries between flights.',node:'solar_panel'},
  {n:'Helicopter bus',d:'Carried the computer and radios.',node:'bus'},
  {n:'Cameras',d:'Navigation and color cameras.',node:'cams'},
  {n:'Landing legs',d:'Four legs for touchdown.',node:'leg_01'}],
 insight:[
  {n:'Robotic arm',d:'Placed instruments on the surface.',node:'arm_01'},
  {n:'Grapple',d:'The claw that lifted the instruments.',node:'grapple'},
  {n:'Context camera',d:'Mounted on the lander body.',node:'ICC'},
  {n:'Arm camera',d:'Imaged the instrument workspace.',node:'lens_cap_IDC'},
  {n:'Landing leg',d:'Three legs kept the lander level.',node:'leg_r'}],
 'pioneer-10':[
  {n:'High-gain antenna',d:'Kept the probe in contact with Earth.',node:'AO_dish'},
  {n:'RTG power',d:'Radioisotope generators supplied electricity.',node:'AO_rtg'}],
 'new-horizons':[
  {n:'High-gain antenna',d:'Sends stored science through the Deep Space Network.',node:'AO_dish'},
  {n:'Gold insulation',d:'Multi-layer blanket for thermal control.',node:'foil_gold'}],
 maven:[
  {n:'High-gain antenna',d:'Returned the science data to Earth.',node:'dish_frame'},
  {n:'Gold insulation',d:'Thermal blanket on the spacecraft bus.',node:'foil_gold'}],
 'voyager-1':[
  {n:'High-gain antenna',d:'The 3.7-meter dish that kept the probe in contact with Earth.',node:'tex_02_AO'}],
 'voyager-2':[
  {n:'High-gain antenna',d:'The 3.7-meter dish that kept the probe in contact with Earth.',node:'tex_02_AO'}],
 opportunity:[
  {n:'Solar arrays',d:'Twin wings that powered the rover.',node:'SolarArrays'}],
 curiosity:[
  {n:'Aluminum wheels',d:'Six wheels, each with its own drive motor.',node:'wheels'}],
 lro:[
  {n:'Solar array',d:'Powered the orbiter around the Moon.',node:'LRO-solarpanel-1'},
  {n:'High-gain antenna',d:'Sent mapping data to Earth.',node:'LRO-Dish'}],
 mro:[
  {n:'Solar panel wings',d:'Twin wings gathered sunlight for power.',node:'shiny_panel'},
  {n:'High-gain antenna',d:'The big dish that beamed science data to Earth.',node:'foil_silver2'},
  {n:'Gold insulation',d:'Thermal blanket wrapped around the spacecraft bus.',node:'foil_gold'}],
 perseverance:[
  {n:'Wheels and suspension',d:'Six wheels on a rocker-bogie suspension for climbing over rocks.',node:'25223001_1'},
  {n:'Rover body',d:'The warm box that carries the computers and science tools.',node:'Cube006'}],
 ladee:[
  {n:'Solar panels',d:'Body-mounted panels powered the spacecraft.',node:'GPMcore-SolarFaces8'},
],
 odyssey:[
  {n:'Solar array',d:'Generated power in Mars orbit.',node:'shiny_panel'},
  {n:'Spectrometer boom',d:'Held the gamma ray spectrometer away from the craft.',node:'tex_boom'}],
};

export default function MachineModel({id,progress=0,parts=false}:{id:string;progress?:number;parts?:boolean}){const host=useRef<HTMLDivElement>(null),can=useRef<HTMLCanvasElement>(null),api=useRef<any>({}),chipRefs=useRef<(HTMLButtonElement|null)[]>([]);const [status,setStatus]=useState('Preparing the model...'),[wire,setWire]=useState(false),[partsOn,setPartsOn]=useState(parts),[tagList,setTagList]=useState<PartTag[]>([]),[openTag,setOpenTag]=useState(-1);const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
 useEffect(()=>{let alive=true;const el=host.current!,canvas=can.current!;const scene=new THREE.Scene();scene.background=new THREE.Color('#121310');const camera=new THREE.PerspectiveCamera(35,1,.01,100);camera.position.set(5,3.2,5);let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;const GLB=GLB_IDS.includes(id);renderer.toneMappingExposure=GLB?(id==='opportunity'?1.1:.95):1.15;renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap}catch{setStatus('3D unavailable on this device. The archive is still available.');return}
 // Image-based light so metal, foil and dishes read as real materials.
 const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(new RoomEnvironment(),.04).texture;scene.environmentIntensity=GLB_IDS.includes(id)?.4:.5;pmrem.dispose();
 scene.add(new THREE.HemisphereLight(0xfff9e9,0x394039,.55));
 const key=new THREE.DirectionalLight(0xfff2dd,GLB_IDS.includes(id)?1.9:2.6);key.position.set(4,6,3);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-5;key.shadow.camera.right=5;key.shadow.camera.top=5;key.shadow.camera.bottom=-5;key.shadow.bias=-.0004;scene.add(key);
 const fill=new THREE.DirectionalLight(0xe8ecf5,.6);fill.position.set(-4,3,-3);scene.add(fill);
 const rim=new THREE.DirectionalLight(0xffffff,1.1);rim.position.set(-2,5,-6);scene.add(rim);
 const controls=new OrbitControls(camera,canvas);controls.enablePan=false;controls.minDistance=2.4;controls.maxDistance=10;controls.enableZoom=true;controls.zoomSpeed=.6;controls.enableRotate=true;controls.target.set(0,.25,0);const layoutTags=()=>{if(!anchors.length)return;const r=el.getBoundingClientRect(),v=new THREE.Vector3();anchors.forEach((a,i)=>{const chip=chipRefs.current[i];if(!chip)return;a.getWorldPosition(v);v.project(camera);const ax=(v.x*.5+.5)*r.width,ay=(-v.y*.5+.5)*r.height;chip.dataset.ax=ax+'';chip.dataset.ay=ay+'';const cl=Math.max(chip.offsetWidth/2+6,Math.min(r.width-chip.offsetWidth/2-6,ax));chip.style.left=cl+'px';chip.style.top=ay+'px';chip.style.visibility=v.z>1?'hidden':'visible'});
  // Declutter: on narrow canvases several parts project onto the same spot.
  // Keep each chip's horizontal anchor, but separate overlapping chips
  // vertically (deterministic top-down passes) so every label stays tappable.
  // Chips are translated -130% above their anchor, so their VISUAL box is
  // [top-1.3h, top-0.3h]; expanded chips are much taller. Separate visually.
  const vTop=(c:HTMLElement)=>parseFloat(c.style.top)-1.3*c.offsetHeight,vBot=(c:HTMLElement)=>parseFloat(c.style.top)-.3*c.offsetHeight;
  // Separate overlapping chips vertically, then enforce the toolbar band by
  // cascading chips UP (never re-collapsing the separation downward).
  const reserve=r.width<600?64:8,overlapX=(a:HTMLElement,b:HTMLElement)=>Math.abs(parseFloat(a.style.left)-parseFloat(b.style.left))<(a.offsetWidth+b.offsetWidth)/2;
  for(let pass=0;pass<4;pass++){const items=anchors.map((a,i)=>chipRefs.current[i]).filter((c):c is HTMLButtonElement=>!!c&&c.style.visibility!=='hidden').sort((p,q)=>vTop(p)-vTop(q));
   for(const c of items){const minTop=4+1.3*c.offsetHeight;if(parseFloat(c.style.top)<minTop)c.style.top=minTop+'px'}
   for(let j=1;j<items.length;j++){const prev=items[j-1],cur=items[j];if(overlapX(prev,cur)&&vTop(cur)<vBot(prev)+4)cur.style.top=(vBot(prev)+4+1.3*cur.offsetHeight)+'px'}
   for(let j=items.length-1;j>=0;j--){const c=items[j],lim=r.height-reserve+.3*c.offsetHeight;if(parseFloat(c.style.top)>lim)c.style.top=lim+'px';
    for(let k=j-1;k>=0;k--){const p2=items[k];if(overlapX(p2,c)&&vBot(p2)>vTop(c)-4)p2.style.top=(vTop(c)-4+.3*p2.offsetHeight)+'px'}}}
  // Leader lines: decluttered/clamped chips no longer sit on their anchor, so draw
  // a thin line from each chip back to the part it names.
  const svg=el.querySelector('.part-lines');
  if(svg){while(svg.children.length<anchors.length)svg.appendChild(document.createElementNS('http://www.w3.org/2000/svg','line'));
   anchors.forEach((a,i)=>{const ln=svg.children[i] as SVGLineElement,chip=chipRefs.current[i];if(!chip||chip.style.visibility==='hidden'||!chip.style.left){ln.style.display='none';return}
    ln.style.display='';ln.setAttribute('x1',chip.style.left.replace('px',''));ln.setAttribute('y1',(parseFloat(chip.style.top)-.3*chip.offsetHeight)+'');ln.setAttribute('x2',chip.dataset.ax||'');ln.setAttribute('y2',chip.dataset.ay||'')})}};
 const lastCam={p:new THREE.Vector3(),q:new THREE.Quaternion(),a:0};let lastFit=0,trailFit=0;
 const refitIfMoved=()=>{if(camera.position.distanceToSquared(lastCam.p)<1e-6&&camera.quaternion.angleTo(lastCam.q)<1e-4&&camera.aspect===lastCam.a)return;const now=performance.now();if(now-lastFit<120){if(!trailFit)trailFit=window.setTimeout(()=>{trailFit=0;lastFit=performance.now();fitModel();lastCam.p.copy(camera.position);lastCam.q.copy(camera.quaternion);lastCam.a=camera.aspect;render()},150);return}lastFit=now;fitModel();lastCam.p.copy(camera.position);lastCam.q.copy(camera.quaternion);lastCam.a=camera.aspect};
 const render=()=>{if(!alive)return;refitIfMoved();renderer.render(scene,camera);layoutTags()};controls.addEventListener('change',render);const root=new THREE.Group();scene.add(root);const anchors:THREE.Object3D[]=[];api.current.anchors=anchors;let draco:DRACOLoader|undefined;
 const finish=(m:THREE.Group)=>{if(!alive)return;
  m.traverse((o:any)=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;
   if(id==='opportunity')for(const mm of Array.isArray(o.material)?o.material:[o.material]){const tune=OPP_MATS[mm.name];if(tune){mm.metalness=tune[0];mm.roughness=tune[1]}}}});
  // Part-label anchors, in model-local space so centering and scaling carry them.
  const defs=LABELS[id]||[],found:PartTag[]=[];
  for(const def of defs){const a=new THREE.Object3D();
   if(def.at)a.position.set(...def.at);
   else if(def.node){const key=def.node.toLowerCase();let hit:THREE.Object3D|undefined;m.traverse((o:any)=>{if(hit)return;const on=o.name&&o.name.toLowerCase().includes(key);const mn=o.isMesh&&!Array.isArray(o.material)&&o.material.name&&o.material.name.toLowerCase().includes(key);if(on||mn)hit=o});if(!hit)continue;new THREE.Box3().setFromObject(hit).getCenter(a.position)}
   else continue;a.userData.tag=def;m.add(a);anchors.push(a);found.push(def)}
  if(found.length)setTagList(found);
  const b=new THREE.Box3().setFromObject(m),center=b.getCenter(new THREE.Vector3()),sz=b.getSize(new THREE.Vector3());m.position.sub(center);
  const scale=(SCALES[id]??(id==='maven'||id==='insight'?(el.getBoundingClientRect().width<350?4:5):3))/Math.max(sz.x,sz.y,sz.z);
  const wrapper=new THREE.Group();wrapper.add(m);wrapper.scale.setScalar(scale);root.add(wrapper);(wrapper as any).baseScale=scale;
  // Half-extents at base scale, reused by resize() to fit the whole craft in
  // the camera frustum on narrow (portrait phone) canvases.
  // Model-local bounding box (after centering), reused by resize() for the projected fit.
  (wrapper as any).fitBox=b.clone().translate(center.clone().negate());
  // Sampled silhouette points (m-local, post-centering) for the true visual-extent fit in resize().
  {wrapper.updateMatrixWorld(true);const inv=wrapper.matrixWorld.clone().invert(),pts:number[]=[],tmp=new THREE.Vector3();m.traverse((o:any)=>{if(!o.isMesh||!o.geometry?.attributes?.position)return;o.updateWorldMatrix(true,false);const pos=o.geometry.attributes.position,stride=Math.max(1,Math.floor(pos.count/400));for(let vi=0;vi<pos.count;vi+=stride){tmp.fromBufferAttribute(pos,vi).applyMatrix4(o.matrixWorld).applyMatrix4(inv);pts.push(tmp.x,tmp.y,tmp.z)}});(wrapper as any).fitPts=new Float32Array(pts)}
  // Soft contact shadow grounds the craft without changing the page background.
  // Lives inside the wrapper so the phone-fit shrink keeps it under the model.
  const ground=new THREE.Mesh(new THREE.CircleGeometry(Math.max(sz.x,sz.z)*.72,40),new THREE.ShadowMaterial({opacity:.32}));ground.rotation.x=-Math.PI/2;ground.position.y=-sz.y/2-.01;ground.receiveShadow=true;wrapper.add(ground);
  if(new URLSearchParams(location.search).get('scan')==='1'){const out:any[]=[],bb=new THREE.Box3(),vv=new THREE.Vector3(),ss=new THREE.Vector3();m.traverse((o:any)=>{if(o.isMesh){bb.setFromObject(o);bb.getCenter(vv);bb.getSize(ss);out.push({n:o.name||'?',mat:(!Array.isArray(o.material)&&o.material?.name)||'',c:[+vv.x.toFixed(2),+vv.y.toFixed(2),+vv.z.toFixed(2)],s:[+ss.x.toFixed(2),+ss.y.toFixed(2),+ss.z.toFixed(2)]})}});(window as any).__scan=out}
  setStatus('Drag to rotate. Scroll on the model to zoom. Scroll the page or use the view buttons to change view.');requestAnimationFrame(()=>{if(alive){resize();render()}})};
 const resize=()=>{const r=el.getBoundingClientRect();renderer.setSize(Math.max(1,r.width),Math.max(1,r.height),false);camera.aspect=r.width/Math.max(1,r.height);camera.updateProjectionMatrix();camera.projectionMatrix.elements[9]=-(r.width<600?64:8)/r.height;
  // Fit the whole craft inside the frustum on narrow (portrait phone)
  // canvases. Projects the model's actual bounding-box corners from the
  // current camera and shrinks the wrapper until every corner is inside the
  // view, growing or shrinking as needed (two passes absorb the perspective nonlinearity). A diagonal
  // heuristic would over-shrink wide flat craft; this keeps them as large as
  // the current view allows without clipping.
  // Fit the craft's actual silhouette (sampled mesh vertices), not its bounding-box
  // corners: an oblique view of a wide flat craft makes the nearest bbox corner
  // project far wider than anything visible, so a corner fit over-shrinks. Grow or
  // shrink until the silhouette fills 92% of the limiting axis; passes absorb the
  // perspective nonlinearity. Runs on resize AND on every camera pose change
  // (refitIfMoved in render), so no scroll pose can push the craft under the
  // toolbar: the vertical target excludes the toolbar reserve and the projection
  // is shifted up by half that reserve, keeping the silhouette clear of it.
  fitModel();render()};
 const fitModel=()=>{const w=root.children.find(c=>(c as any).baseScale) as any;if(!w||!w.fitPts)return;const pts=w.fitPts as Float32Array,pt=new THREE.Vector3(),r=el.getBoundingClientRect(),res=r.width<600?64:8,cy=res/r.height,tHy=.92*(r.height-res)/r.height;camera.updateMatrixWorld(true);for(let pass=0;pass<3;pass++){let mx=.01,up=.01,dn=.01;for(let vi=0;vi<pts.length;vi+=3){pt.set(pts[vi],pts[vi+1],pts[vi+2]).applyMatrix4(w.matrixWorld).project(camera);const ax=Math.abs(pt.x);if(ax>mx)mx=ax;const dy=pt.y-cy;if(dy>up)up=dy;const dd=-dy;if(dd>dn)dn=dd}const f=Math.min(.92/mx,tHy/Math.max(up,dn));if(Math.abs(f-1)<.002)break;w.scale.multiplyScalar(f);w.updateMatrixWorld(true)}};const ro=new ResizeObserver(resize);ro.observe(el);resize();
 if(GLB_IDS.includes(id)){draco=new DRACOLoader();draco.setDecoderPath('/draco/');const ld=new GLTFLoader();ld.setDRACOLoader(draco);ld.load(GLB_PATHS[id],g=>finish(g.scene),undefined,()=>setStatus('Model could not load. Open the NASA record below.'))}else finish(id==='surveyor-3'?makeSurveyor():id==='apollo-11-surface'?makePSEP():makeLRV());
 api.current={pose:(p:number)=>{if(reduced)return;const paths:Record<string,number[][]>={'surveyor-3':[[5,2.5,5,0,0,0],[0,5.7,5,0,.4,0],[4,2.8,4,0,.4,0],[5,1.3,1,.2,-.2,.2]],'apollo-17-lrv':[[5,3,5,0,0,0],[3,4,4,0,.1,0],[-5,2.6,3,-.5,.2,0],[-4,4,0,-.4,-.1,0]],'apollo-17-surface':[[5.2,3.2,5.2,0,0,0],[0,7,6,0,.1,0],[-7,3,5,0,.4,0],[6,2,6,0,-.4,0]],'voyager-1':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,3,5,0,0,0]],'voyager-2':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,3,5,0,0,0]],'new-horizons':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,3,5,0,0,0]],'pioneer-10':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,3,5,0,0,0]],'ingenuity':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,3,5,0,0,0]],'perseverance':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,2,5,0,0,0]],'maven':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,2,5,0,0,0]],'curiosity':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,2,5,0,0,0]],'mro':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,2,5,0,0,0]],'odyssey':[[5,3,5,0,0,0],[0,6,5,0,0,0],[-5,3,5,0,0,0],[5,2,5,0,0,0]],'insight':[[5.2,3.2,5.2,0,0,0],[0,7,6,0,.2,0],[-5,3,5,0,.2,0],[6,2,5,0,-.2,0]],'ladee':[[5.2,3.2,5.2,0,0,0],[0,7,6,0,.2,0],[-5,3,5,0,.2,0],[6,2,5,0,-.2,0]],'lro':[[7,4,7,0,0,0],[0,8,5,0,0,0],[-7,4,7,0,0,0],[7,4,5,0,0,0]],'apollo-11-surface':[[5,2.7,5,0,0,0],[0,6,3,0,0,0],[4,3,3,0,.2,0],[5,1.5,0,0,0,0]],'opportunity':[[5,1.7,5,0,-.1,0],[0,6,3,0,.1,0],[-4,3,4,0,.3,0],[5,3,-5,0,0,0]]};const pts=paths[id],t=p*3,i=Math.min(2,Math.floor(t)),f=t-i,e=f*f*(3-2*f),v=pts[i].map((x,j)=>x+(pts[i+1][j]-x)*e);camera.position.set(v[0],v[1],v[2]);controls.target.set(v[3],v[4],v[5]);camera.lookAt(controls.target);render()},wire:(v:boolean)=>{root.traverse((o:any)=>{if(o.isMesh)for(const m of Array.isArray(o.material)?o.material:[o.material])m.wireframe=v});render()},view:(i:number)=>{const pos=[[5,3.2,5],[0,1,7],[7,1,0],[0,7,.01]][i];camera.position.set(...pos as [number,number,number]);controls.update();render()},render,anchors};
 return()=>{alive=false;ro.disconnect();controls.dispose();draco?.dispose();scene.traverse((o:any)=>{o.geometry?.dispose();if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material]){if(m.map)m.map.dispose();m.dispose()}});scene.environment?.dispose();renderer.dispose();api.current={}};
 },[id]);useEffect(()=>{api.current.pose?.(progress)},[progress]);useEffect(()=>{api.current.render?.()},[tagList,partsOn,openTag]);return <div className="machine-viewer" data-lenis-prevent><div className="machine-canvas" ref={host} data-lenis-prevent><canvas ref={can} aria-label={`${id} exterior model. Drag to rotate, scroll to zoom, or use the view buttons.`}/><div className="part-layer" hidden={!partsOn}><svg className="part-lines" aria-hidden="true"/>{tagList.map((t,i)=><button key={t.n} ref={el=>{chipRefs.current[i]=el}} className="part-tag" onClick={()=>setOpenTag(openTag===i?-1:i)}>{t.n}{openTag===i&&<small>{t.d}</small>}</button>)}</div></div><div className="machine-toolbar">{['RESET','FRONT','SIDE','TOP'].map((t,i)=><button key={t} onClick={()=>api.current.view?.(i)}>{t}</button>)}<button aria-pressed={wire} onClick={()=>{api.current.wire?.(!wire);setWire(!wire)}}>{wire?'SOLID':'MESH'}</button>{!!LABELS[id]&&<button aria-pressed={partsOn} onClick={()=>{setPartsOn(!partsOn);setOpenTag(-1)}}>{partsOn?'HIDE PARTS':'PARTS'}</button>}</div><span className="machine-status" role="status">{status}</span></div>}
