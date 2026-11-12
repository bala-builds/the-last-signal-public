import React,{useEffect,useRef,useState} from 'react';
import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';
import {DRACOLoader} from 'three/addons/loaders/DRACOLoader.js';
import {RoomEnvironment} from 'three/addons/environments/RoomEnvironment.js';
import {createStage} from './teardown/stage3d.js';

// Stage adapted from elvarofficial/teardown (MIT). NASA/Ames model, not invented geometry.
export default function Rover3D(){
 const canvas=useRef<HTMLCanvasElement>(null),actions=useRef<any>({});
 const [status,setStatus]=useState('Loading NASA model...'),[ready,setReady]=useState(false),[wire,setWire]=useState(false);
 useEffect(()=>{let alive=true;let clean=()=>{};
 try{
 const st=createStage(canvas.current!,{viewport:()=>({top:0,bottom:0})},{bg:'#111110',bloom:{strength:0,radius:0,threshold:1},exposure:1.1,pr:Math.min(devicePixelRatio,1.5)});
 const {scene,camera,renderer}=st;
 const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromScene(new RoomEnvironment(),.04).texture;scene.environmentIntensity=.5;pmrem.dispose();
 scene.add(new THREE.HemisphereLight(0xe8e1d5,0x55554d,.6));const key=new THREE.DirectionalLight(0xfff2dd,2.6);key.position.set(4,6,5);scene.add(key);const fill=new THREE.DirectionalLight(0xdad6cd,.7);fill.position.set(-5,3,-3);scene.add(fill);const rim=new THREE.DirectionalLight(0xffffff,1.1);rim.position.set(-2,5,-6);scene.add(rim);
 const controls=new OrbitControls(camera,canvas.current!);controls.enableDamping=false;controls.enablePan=false;controls.minDistance=2;controls.maxDistance=12;controls.maxPolarAngle=Math.PI*.94;
 let model:THREE.Group|undefined;const render=()=>{if(alive)st.render()};const resize=()=>{st.resize();render()};controls.addEventListener('change',render);
 const draco=new DRACOLoader();draco.setDecoderPath('/draco/');const loader=new GLTFLoader();loader.setDRACOLoader(draco);
 loader.load('/models/opportunity.glb',g=>{if(!alive)return;model=g.scene;const box=new THREE.Box3().setFromObject(model);const center=box.getCenter(new THREE.Vector3());const size=box.getSize(new THREE.Vector3());model.position.sub(center);model.traverse((o:any)=>{if(o.isMesh)for(const m of Array.isArray(o.material)?o.material:[o.material]){m.roughness=Math.max(m.roughness||0,.5);if(m.name==='Gold2'||m.name==='Copper'){m.metalness=.85;m.roughness=.32}}});const group=new THREE.Group();group.add(model);group.scale.setScalar(3.2/Math.max(size.x,size.y,size.z));scene.add(group);
 const view=(kind='three-quarter')=>{camera.position.set(...(kind==='front'?[0,1,5]:kind==='side'?[5,1,0]:kind==='top'?[0,5,.01]:[4,2.6,4]) as [number,number,number]);controls.target.set(0,0,0);controls.update();render()};
 actions.current={view,wire:(v:boolean)=>{model!.traverse((o:any)=>{if(o.isMesh){for(const m of Array.isArray(o.material)?o.material:[o.material])m.wireframe=v}});render()},zoom:(factor:number)=>{camera.position.multiplyScalar(factor);controls.update();render()}};
 view();if(alive){setStatus('NASA model ready. Drag to orbit.');setReady(true)}
 },undefined,()=>{if(alive)setStatus('3D could not load. The historical photographs and archive remain available.')});
 const ro=new ResizeObserver(resize);ro.observe(canvas.current!);resize();
 clean=()=>{ro.disconnect();controls.dispose();draco.dispose();scene.traverse((o:any)=>{o.geometry?.dispose();if(o.material)for(const m of Array.isArray(o.material)?o.material:[o.material])m.dispose()});st.composer.dispose();renderer.dispose()};
 }catch{setStatus('WebGL is unavailable. Use the historical photographs and archive below.')}
 return()=>{alive=false;actions.current={};clean()};
 },[]);
 return <div className="rover3d" data-lenis-prevent><div className="rover-canvas" data-lenis-prevent>{!ready&&<div className="telemetry-shimmer" aria-hidden="true"><span className="shimmer-pulse"/><span className="shimmer-lbl">RECEIVING NASA 3D TELEMETRY…</span></div>}<canvas ref={canvas} aria-label="Interactive NASA Opportunity rover model. Use the buttons below for keyboard-operated camera views."/><span className="model-label">NASA / AMES MODEL · EXTERIOR ONLY</span></div><p className="model-status" role="status">{status}</p><div className="model-controls" aria-label="3D model controls">{[['three-quarter','RESET VIEW'],['front','FRONT'],['side','SIDE'],['top','TOP']].map(([k,v])=><button className="outline" disabled={!ready} key={k} onClick={()=>actions.current.view?.(k)}>{v}</button>)}<button className="outline" disabled={!ready} aria-pressed={wire} onClick={()=>{setWire(!wire);actions.current.wire?.(!wire)}}>{wire?'SOLID':'WIREFRAME'}</button><button className="outline" disabled={!ready} onClick={()=>actions.current.zoom?.(.85)}>ZOOM IN +</button><button className="outline" disabled={!ready} onClick={()=>actions.current.zoom?.(1.18)}>ZOOM OUT −</button></div><p className="muted">Touch and drag to orbit; pinch to zoom. No automatic motion. Wireframe reveals the model mesh, not the rover's real interior. This is an exterior educational model, not a working engineering simulation or a disassembly.</p><p className="model-credit">Model: <a href="https://science.nasa.gov/3d-resources/mars-exploration-rover-opportunity-mer-b/" target="_blank" rel="noreferrer">NASA/Ames Research Center ↗</a>. 3D stage adapted from <a href="https://github.com/elvarofficial/teardown" target="_blank" rel="noreferrer">elvarofficial/teardown (MIT) ↗</a>. Three.js (MIT). License notices included in source.</p></div>
}
