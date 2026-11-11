import React, { useEffect, useRef, useState } from 'react';

export type Seq = { id: string; label: string; parts: Array<() => Promise<{ default: string[] }>>; count: number; w: number; h: number };

/** Scroll-scrubbed image sequence: sticky stage, scroll position picks the frame. */
export function Sequence({ seq }: { seq: Seq }) {
    const wrap = useRef<HTMLDivElement>(null);
    const canvas = useRef<HTMLCanvasElement>(null);
    const imgs = useRef<HTMLImageElement[]>([]);
    const [ready, setReady] = useState(0);
    const reduce = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const [stills, setStills] = useState<string[]>([]);
    useEffect(() => {
        if (!reduce) return;
        let alive = true;
        Promise.all([seq.parts[0](), seq.parts[seq.parts.length - 1]()]).then(([first, last]) => {
            if (alive) setStills([first.default[0], last.default[last.default.length - 1]]);
        });
        return () => { alive = false; };
    }, [seq.id, reduce]);

    const draw = (i: number) => {
        const c = canvas.current; const im = imgs.current[i];
        if (!c || !im || !im.complete || !im.naturalWidth) return;
        const x = c.getContext('2d'); if (!x) return;
        x.drawImage(im, 0, 0, c.width, c.height);
    };

    useEffect(() => {
        if (reduce) return;
        let alive = true;
        imgs.current = [];
        let idx = 0;
        (async () => {
            for (const load of seq.parts) {
                const mod = await load();
                if (!alive) return;
                for (const u of mod.default) {
                    const i = idx++;
                    const im = new Image();
                    im.decoding = 'async';
                    im.onload = () => { if (alive) { setReady((r) => r + 1); if (i === 0) draw(0); } };
                    im.src = u;
                    imgs.current[i] = im;
                }
            }
        })();
        return () => { alive = false; };
    }, [seq.id]);

    useEffect(() => {
        let raf = 0;
        const scroller = () => wrap.current?.closest('.ls') as HTMLElement | null;
        const sc0 = scroller();
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(() => {
                const el = wrap.current; if (!el) return;
                const sc = scroller();
                const vh = sc ? sc.clientHeight : window.innerHeight;
                const r = el.getBoundingClientRect();
                const top = sc ? r.top - sc.getBoundingClientRect().top : r.top;
                const total = el.offsetHeight - vh;
                const p = Math.min(1, Math.max(0, -top / Math.max(1, total)));
                const i = Math.round(p * (seq.count - 1));
                let j = i; while (j > 0 && !(imgs.current[j]?.complete && imgs.current[j]?.naturalWidth)) j--;
                draw(j);
            });
        };
        (sc0 || window).addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        onScroll();
        return () => { (sc0 || window).removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf); };
    }, [seq.id, ready]);

    if (reduce) {
        return <figure className="seq-static">
            {stills.map((u, i) => <img key={i} src={u} alt={i === 0 ? 'AI-guided Surveyor exterior still' : 'Imagined cutaway interior still'} />)}
            <figcaption>Illustrative AI reconstruction. Not NASA footage or exact hardware.</figcaption>
        </figure>;
    }
    return <div className="seq" ref={wrap} style={{ height: `${seq.count * 3.2 + 100}vh` }}>
        <div className="seq-stick">
            <canvas ref={canvas} width={seq.w} height={seq.h} aria-label={seq.label} role="img" />
            <p className="seq-cap">Illustrative AI reconstruction. Not NASA footage or exact hardware. Scroll to zoom in. The inside is imagined.</p>
        </div>
    </div>;
}
