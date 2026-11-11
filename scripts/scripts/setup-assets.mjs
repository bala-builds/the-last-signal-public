import { existsSync, readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
if (existsSync('src/story-assets/im2-rest.jpg') && existsSync('public/models/curiosity.glb') && existsSync('src/fonts/fonts.css')) process.exit(0);
const manifest=JSON.parse(readFileSync('asset-bundle/manifest.json','utf8'));
const chunks=manifest.parts.map(p=>{const b=readFileSync('asset-bundle/'+p.name);if(b.length!==p.bytes || createHash('sha256').update(b).digest('hex')!==p.sha256) throw Error('Asset part checksum mismatch: '+p.name);return b});
const archive=Buffer.concat(chunks);if(createHash('sha256').update(archive).digest('hex')!==manifest.archiveSha256) throw Error('Asset bundle checksum mismatch');
mkdirSync('.asset-cache',{recursive:true});writeFileSync('.asset-cache/assets.tar.gz',archive);
execFileSync('tar',['xzf','.asset-cache/assets.tar.gz']);rmSync('.asset-cache',{recursive:true,force:true});console.log('Restored credited app assets.');
