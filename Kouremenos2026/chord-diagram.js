/*
 * Self-contained, light-theme port of the interactive chord diagram from the
 * LSST DESC AI/ML white paper (arXiv:2601.14235).
 * Original: https://lsstdesc.org/AI_For_DESC/figures/chord-diagram.html
 * Data is copied verbatim; rendering is vanilla SVG (no React / CDN needed).
 */
(function () {
  const COLORS = {
    scienceCase: { color: '#a10034' },   /* DESC red (as in the original figure) */
    methodology: { color: '#426b78' },   /* Slate Blue (theme --lc-secondary)     */
    challenge:   { color: '#a67c3c' }    /* Antique Gold (theme --lc-warm)        */
  };

  const SBI = 'Simulation-based inference';

  const DATA = [
    { id: 'photoz',     name: 'Photo-z',
      methodologies: [SBI, 'Hierarchical Bayesian models', 'Emulators', 'Generative models'],
      challenges: ['Covariate shift', 'Uncertainty quantification', 'Scalability', 'Metrics & evaluation'] },
    { id: 'stronglens', name: 'Strong lensing',
      methodologies: [SBI, 'Generative models'],
      challenges: ['Data sparsity & rare events', 'Covariate shift', 'Uncertainty quantification'] },
    { id: 'weaklens',   name: 'Weak lensing',
      methodologies: [SBI, 'Differentiable programming', 'Hierarchical Bayesian models', 'Generative models'],
      challenges: ['Covariate shift', 'Uncertainty quantification', 'Scalability'] },
    { id: 'clusters',   name: 'Galaxy clusters',
      methodologies: [SBI, 'Hierarchical Bayesian models'],
      challenges: ['Covariate shift', 'Uncertainty quantification', 'Scalability'] },
    { id: 'sn',         name: 'Supernovae & transients',
      methodologies: [SBI, 'Active learning', 'Anomaly detection', 'Hierarchical Bayesian models', 'Generative models'],
      challenges: ['Covariate shift', 'Data sparsity & rare events', 'Scalability', 'Uncertainty quantification'] },
    { id: 'theory',     name: 'Theory & modeling',
      methodologies: ['Emulators', 'Differentiable programming', SBI],
      challenges: ['Covariate shift', 'Scalability'] },
    { id: 'sims',       name: 'Simulations',
      methodologies: ['Emulators', 'Generative models', 'Differentiable programming', SBI],
      challenges: ['Covariate shift', 'Scalability', 'Metrics & evaluation'] },
    { id: 'classify',   name: 'Object classification',
      methodologies: ['Active learning'],
      challenges: ['Covariate shift', 'Data sparsity & rare events', 'Scalability', 'Uncertainty quantification'] },
    { id: 'deblend',    name: 'Deblending',
      methodologies: ['Generative models', SBI],
      challenges: ['Data sparsity & rare events', 'Metrics & evaluation', 'Uncertainty quantification'] },
    { id: 'shape',      name: 'Shape measurement',
      methodologies: ['Differentiable programming', SBI],
      challenges: ['Covariate shift', 'Uncertainty quantification', 'Data sparsity & rare events', 'Scalability'] }
  ];

  const NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs, parent) {
    const e = document.createElementNS(NS, tag);
    for (const k in attrs) e.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(e);
    return e;
  }

  function processData() {
    const methods = new Map(), challenges = new Map();
    DATA.forEach(sc => {
      sc.methodologies.forEach(m => methods.set(m, (methods.get(m) || 0) + 1));
      sc.challenges.forEach(c => challenges.set(c, (challenges.get(c) || 0) + 1));
    });
    return {
      scienceCases: DATA,
      methodologies: Array.from(methods.keys()).sort(),
      challenges: Array.from(challenges.keys()).sort((a, b) => challenges.get(b) - challenges.get(a))
    };
  }

  window.renderDescChord = function (container) {
    container = typeof container === 'string' ? document.querySelector(container) : container;
    if (!container) return;

    const data = processData();
    const W = 1200, H = 680, cx = 560, cy = 335, R = 290, FONT = 26, GAP = 31;
    const svg = el('svg', { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: 'xMidYMid meet',
                            style: 'width: 100%; height: 100%; display: block; font-family: var(--lc-font-ui), system-ui, sans-serif;' }, container);

    const defs = el('defs', {}, svg);
    const filter = el('filter', { id: 'desc-chord-glow' }, defs);
    el('feGaussianBlur', { stdDeviation: '3', result: 'blur' }, filter);
    const merge = el('feMerge', {}, filter);
    el('feMergeNode', { in: 'blur' }, merge);
    el('feMergeNode', { in: 'SourceGraphic' }, merge);

    const pos = (angle, r) => {
      const rad = angle * Math.PI / 180;
      return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad), angle };
    };
    const calcPositions = (items, start, end, margin) => {
      const m = new Map(), size = end - start, ms = size * margin;
      const step = (size - 2 * ms) / Math.max(1, items.length - 1);
      items.forEach((it, i) => m.set(it.id || it, pos(start + ms + i * step, R)));
      return m;
    };
    const casePos = calcPositions(data.scienceCases, 93, 207, 0.1);
    const methodPos = calcPositions(data.methodologies, 213, 327, 0.05);
    const chalPos = calcPositions(data.challenges, 333, 447, 0.1);

    // Background circle + section arcs + separators
    el('circle', { cx, cy, r: R, fill: 'none', stroke: 'rgba(78,90,112,0.12)', 'stroke-width': 1 }, svg);
    [[90, 210, COLORS.scienceCase.color], [210, 330, COLORS.methodology.color], [330, 450, COLORS.challenge.color]]
      .forEach(([s, e, c]) => {
        const a = pos(s, R), b = pos(e, R);
        el('path', { d: `M ${a.x} ${a.y} A ${R} ${R} 0 0 1 ${b.x} ${b.y}`, fill: 'none',
                     stroke: c, 'stroke-width': 6, 'stroke-opacity': 0.45 }, svg);
      });
    [90, 210, 330].forEach(a => {
      const p = pos(a, R + 30);
      el('line', { x1: cx, y1: cy, x2: p.x, y2: p.y, stroke: 'rgba(78,90,112,0.35)',
                   'stroke-width': 2, 'stroke-dasharray': '4,4' }, svg);
    });

    // Chords
    const chordsG = el('g', {}, svg);
    const chords = [];
    const addChord = (a, b, ctrl, kind, color, base) => {
      const p = el('path', { d: `M ${a.x} ${a.y} Q ${ctrl.x} ${ctrl.y} ${b.x} ${b.y}`, fill: 'none',
                             stroke: color, 'stroke-linecap': 'round',
                             style: 'transition: stroke-opacity 0.25s ease, stroke-width 0.25s ease;' }, chordsG);
      chords.push({ p, kind, base, ...kind });
      return p;
    };
    data.scienceCases.forEach(sc => {
      const cp = casePos.get(sc.id);
      sc.methodologies.forEach(m => addChord(cp, methodPos.get(m), { x: cx, y: cy - 120 },
        { c: sc.id, m }, COLORS.methodology.color, { op: 0.28, w: 2.5 }));
      sc.challenges.forEach(ch => addChord(cp, chalPos.get(ch), { x: cx + 120, y: cy },
        { c: sc.id, ch }, COLORS.scienceCase.color, { op: 0.2, w: 2 }));
    });
    const mc = new Set();
    data.scienceCases.forEach(sc => sc.methodologies.forEach(m => sc.challenges.forEach(ch => mc.add(m + '::' + ch))));
    mc.forEach(key => {
      const [m, ch] = key.split('::');
      addChord(methodPos.get(m), chalPos.get(ch), { x: cx, y: cy + 120 },
        { m, ch }, COLORS.challenge.color, { op: 0.12, w: 1.5 });
    });

    // Nodes
    const nodes = [];
    const nodesG = el('g', {}, svg);
    const addNode = (item, p, type, cfg) => {
      const key = item.id || item;
      const g = el('g', { style: 'cursor: pointer;' }, nodesG);
      const circle = el('circle', { cx: p.x, cy: p.y, r: type === 'method' ? 12 : 10, fill: cfg.color,
                                    stroke: cfg.color, 'stroke-width': 2,
                                    style: 'transition: all 0.2s ease;' }, g);
      // Horizontal label beside the node: cases read leftwards, challenges
      // rightwards, methods away from the top pole. Crowded labels are
      // nudged apart afterwards (see resolveLabels) with a thin leader line.
      const a = ((p.angle % 360) + 360) % 360;
      let anchor = 'middle', lx = p.x, ly = p.y;
      if (type === 'case') { anchor = 'end'; lx = p.x - 16; }
      else if (type === 'challenge') { anchor = 'start'; lx = p.x + 16; }
      else if (Math.abs(a - 270) < 1) { anchor = 'middle'; ly = p.y - 22; }
      else if (a < 270) { anchor = 'end'; lx = p.x - 16; }
      else { anchor = 'start'; lx = p.x + 16; }
      const leader = el('line', { x1: p.x, y1: p.y, x2: p.x, y2: p.y, stroke: 'rgba(78,90,112,0.45)',
                                  'stroke-width': 1.5, style: 'transition: opacity 0.2s ease;' }, g);
      const text = el('text', { x: lx, y: ly, 'text-anchor': anchor, 'dominant-baseline': 'middle',
                                'font-size': FONT, 'font-weight': type === 'method' ? 600 : 400,
                                fill: type === 'method' ? '#221f20' : '#3a3d45',
                                style: 'pointer-events: none; transition: opacity 0.2s ease;' }, g);
      text.textContent = item.name || item;
      g.insertBefore(leader, circle);
      // Invisible larger hit area so hovering is forgiving during a talk.
      el('circle', { cx: p.x, cy: p.y, r: 26, fill: 'transparent' }, g);
      const n = { key, type, g, circle, text, leader, cfg, baseR: type === 'method' ? 12 : 10,
                  group: type === 'method' ? (a < 269 ? 'method-l' : a > 271 ? 'method-r' : 'method-t') : type,
                  px: p.x, py: p.y, lx, ly, anchor };
      nodes.push(n);
      g.addEventListener('mouseenter', () => highlight(type, key));
      g.addEventListener('mouseleave', () => highlight(null, null));
      return n;
    };
    data.scienceCases.forEach(sc => addNode(sc, casePos.get(sc.id), 'case', COLORS.scienceCase));
    data.methodologies.forEach(m => addNode(m, methodPos.get(m), 'method', COLORS.methodology));
    data.challenges.forEach(c => addNode(c, chalPos.get(c), 'challenge', COLORS.challenge));

    // Push vertically-overlapping labels apart within each side group,
    // spreading the shift symmetrically so the group stays centred on its
    // nodes, then draw a leader line for any label that moved.
    (function resolveLabels() {
      const groups = {};
      nodes.forEach(n => (groups[n.group] = groups[n.group] || []).push(n));
      Object.values(groups).forEach(list => {
        list.sort((a, b) => a.ly - b.ly);
        const ys = list.map(n => n.ly);
        for (let i = 1; i < ys.length; i++) if (ys[i] - ys[i - 1] < GAP) ys[i] = ys[i - 1] + GAP;
        // Re-centre: share the accumulated shift between top and bottom.
        const shift = (ys[ys.length - 1] - list[list.length - 1].ly) / 2;
        list.forEach((n, i) => {
          n.ly = ys[i] - shift;
          n.text.setAttribute('y', n.ly);
          if (Math.abs(n.ly - n.py) > 3) {
            const dir = n.anchor === 'end' ? -1 : n.anchor === 'start' ? 1 : 0;
            n.leader.setAttribute('x2', n.lx - dir * 6);
            n.leader.setAttribute('y2', n.ly);
          } else {
            n.leader.remove();
            n.leader = null;
          }
        });
      });
    })();

    function highlight(type, value) {
      const cases = new Set(), methods = new Set(), chals = new Set();
      if (type === 'case') {
        cases.add(value);
        const sc = DATA.find(s => s.id === value);
        sc.methodologies.forEach(m => methods.add(m));
        sc.challenges.forEach(c => chals.add(c));
      } else if (type === 'method') {
        methods.add(value);
        DATA.forEach(sc => { if (sc.methodologies.includes(value)) { cases.add(sc.id); sc.challenges.forEach(c => chals.add(c)); } });
      } else if (type === 'challenge') {
        chals.add(value);
        DATA.forEach(sc => { if (sc.challenges.includes(value)) { cases.add(sc.id); sc.methodologies.forEach(m => methods.add(m)); } });
      }
      const active = !!type;
      chords.forEach(ch => {
        const k = ch.kind;
        let hit;
        if (k.c && k.m) hit = cases.has(k.c) && methods.has(k.m);
        else if (k.c && k.ch) hit = cases.has(k.c) && chals.has(k.ch);
        else hit = methods.has(k.m) && chals.has(k.ch);
        const op = !active ? ch.base.op : (hit ? 0.85 : 0.04);
        ch.p.setAttribute('stroke-opacity', op);
        ch.p.setAttribute('stroke-width', active && hit ? ch.base.w + 1 : ch.base.w);
        ch.p.style.filter = active && hit ? 'url(#desc-chord-glow)' : 'none';
      });
      nodes.forEach(n => {
        const isActive = n.type === type && n.key === value;
        const hit = (n.type === 'case' && cases.has(n.key)) || (n.type === 'method' && methods.has(n.key))
                 || (n.type === 'challenge' && chals.has(n.key));
        const dim = active && !hit;
        n.circle.setAttribute('r', isActive ? n.baseR + 4 : n.baseR);
        n.circle.setAttribute('opacity', dim ? 0.3 : 1);
        n.text.setAttribute('opacity', dim ? 0.3 : 1);
        if (n.leader) n.leader.setAttribute('opacity', dim ? 0.3 : 1);
        n.text.setAttribute('font-weight', isActive ? 700 : (n.type === 'method' ? 600 : 400));
      });
    }
    highlight(null, null);

    // Fit the viewBox to the rendered content (rotated labels overshoot the
    // nominal canvas) so the figure fills its box without clipping. Only
    // works once the slide is laid out, so it is also exposed for Reveal
    // hooks (ready / slidechanged) and re-run once web fonts are in.
    window.fitDescChord = function () {
      try {
        const b = svg.getBBox(), pad = 8;
        if (b.width > 0) svg.setAttribute('viewBox', `${b.x - pad} ${b.y - pad} ${b.width + 2 * pad} ${b.height + 2 * pad}`);
      } catch (e) { /* hidden or not attached yet: keep current viewBox */ }
    };
    window.fitDescChord();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(window.fitDescChord);
  };
})();
