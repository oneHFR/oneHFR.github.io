---
permalink: /
layout: home
title: "Hongrui Wu"
description: "Hongrui Wu: M.S. student in Electrical Engineering at Stanford. Research on agent harnesses and 3D/4D spatial intelligence."
tagline: "M.S. EE @ Stanford · B.Eng. CS @ Tongji"
redirect_from:
  - /about/
  - /about.html
links:
  - { label: "Email",          icon: "mail",     url: "mailto:wuhongrui2152131@gmail.com" }
  - { label: "Google Scholar", icon: "scholar",  url: "https://scholar.google.com/citations?user=JjjYCN8AAAAJ&hl=en" }
  - { label: "GitHub",         icon: "github",   url: "https://github.com/oneHFR" }
  - { label: "LinkedIn",       icon: "linkedin", url: "https://www.linkedin.com/in/hongrui-wu-7546b734b/" }
chat:
  label: "Ask my AI twin"
  title: "Cyber Rui · AI twin"
  url: "/chat/"
---

<!-- Each <section> with an id and an <h2> shows up in the table of contents automatically. -->

<section class="section intro" id="about">
  <h2 class="visually-hidden">About</h2>
  <p>Hi there!</p>
  <p>
    I am a Master's student in Electrical Engineering at <a href="https://www.stanford.edu/">Stanford University</a>. I graduated with my Bachelor's degree in <a href="https://see-en.tongji.edu.cn/info/1010/1271.htm">Computer Science</a> from <a href="https://en.tongji.edu.cn/p/">Tongji University</a> in June 2026.
  </p>
  <p>
    I conducted research at <a href="https://ucsd.edu/">UC San Diego</a>, advised by Prof. <a href="https://scholar.google.com/citations?user=9oz-dvgAAAAJ">Zhuowen Tu</a>. I was also fortunate to work with Prof. <a href="https://scholar.google.com/citations?user=GDvt570AAAAJ">Jiaqi Wang</a> during my internship at <a href="https://github.com/jd-opensource">JD Explore Academy</a>, part of JD.com. My research interests include agent harnesses and 3D/4D spatial intelligence.
  </p>
  <ul class="interests" aria-label="Research interests">
    <li>Agent harnesses</li>
    <li>Multimodal deep research</li>
    <li>3D/4D spatial intelligence</li>
  </ul>
</section>

<section class="section" id="news">
  <div class="section__head"><h2>News</h2></div>
  <ul class="news">
    <li><time>2026.09</time><span><a href="#pub-mmmc">MMMC</a> has been accepted to <span class="tag">NeurIPS 2026</span></span></li>
    <li><time>2026.05</time><span>I joined <a href="https://github.com/jd-opensource" target="_blank" rel="noopener">JD Explore Academy</a> as a research intern</span></li>
    <li><time>2026.02</time><span>One paper has been accepted to <span class="tag">CVPR 2026</span> See you in Denver!</span></li>
    <li><time>2026.01</time><span>One paper has been accepted to <span class="tag">ICASSP 2026</span> See you in Barcelona!</span></li>
    <li><time>2025.07</time><span>I joined UC San Diego <a href="https://pages.ucsd.edu/~ztu/Group.htm" target="_blank" rel="noopener">MLPC Lab</a> as a research intern</span></li>
    <li><time>2025.06</time><span>One paper has been accepted to <span class="tag">ICCV 2025</span> See you in Hawaii!</span></li>
  </ul>
</section>

<section class="section" id="publications">
  <div class="section__head">
    <h2>Publications</h2>
    <p class="section__note">* equal contribution · click a figure to pause it</p>
  </div>

  <div class="pubs">
    <article class="pub" id="pub-mira">
      <div class="pub__cover pub__cover--type" style="--cover: linear-gradient(135deg, #1f3c88, #3f7de0 55%, #57c0d8)"><span>MIRA</span></div>
      <div>
        <div class="pub__venue"><span class="badge">Preprint</span></div>
        <h3><b>MIRA:</b> A Multimodal Illustrated Deep Research Agent for Controllable Reports</h3>
        <p class="pub__authors"><strong>Hongrui Wu*</strong>, Kaiwen Tuo*, Congcong Wang*, Gen Li, Shuai Dong, Xinlei Yu, Haowen Hou, Zelin Peng, Jiaqi Wang</p>
      </div>
    </article>

    <article class="pub" id="pub-mmmc">
      <div class="pub__cover pub__cover--type" style="--cover: linear-gradient(135deg, #6b2fb3, #c04d8f 60%, #f08a5d)"><span>MMMC</span></div>
      <div>
        <div class="pub__venue"><span class="badge">NeurIPS 2026</span></div>
        <h3><b>MMMC:</b> Towards Realistic Conversational Multimodal Instruction Following</h3>
        <p class="pub__authors">Kaiwen Tuo*, Congcong Wang*, Shuai Dong*, <strong>Hongrui Wu*</strong>, Siyuan Wang, Xuefeng Yin, Yuhang Cao, Nan Duan, Jiaqi Wang</p>
      </div>
    </article>

    <article class="pub" id="pub-pixarmesh">
      <div class="pub__cover" data-anim="/images/PixARMesh-optimized.webp">
        <img class="still" src="/images/PixARMesh-static.jpg" alt="PixARMesh" width="960" height="540" decoding="async">
        <img class="anim" alt="" width="720" height="405" decoding="async">
        <span class="hint">Click to pause</span>
      </div>
      <div>
        <div class="pub__venue"><span class="badge">CVPR 2026</span></div>
        <h3><img src="/images/PixARMesh_logo.png" alt=""><b>PixARMesh:</b> Auto-Regressive Mesh-Native Single-View Scene Reconstruction</h3>
        <p class="pub__authors">Xiang Zhang*, Sohyun Yoo*, <strong>Hongrui Wu*</strong>, Chuan Li, Jianwen Xie, Zhuowen Tu</p>
        <div class="chips">
          <a class="chip" href="https://arxiv.org/abs/2603.05888" target="_blank" rel="noopener">Paper</a>
          <a class="chip" href="https://mlpc-ucsd.github.io/PixARMesh/" target="_blank" rel="noopener">Project</a>
          <a class="chip" href="https://github.com/mlpc-ucsd/PixARMesh" target="_blank" rel="noopener">Code</a>
        </div>
      </div>
    </article>

    <article class="pub" id="pub-folk">
      <div class="pub__cover" data-anim="/images/FOLK-optimized.webp">
        <img class="still" src="/images/FOLK-static.jpg" alt="FOLK" width="960" height="540" loading="lazy" decoding="async">
        <img class="anim" alt="" width="720" height="405" decoding="async">
        <span class="hint">Click to pause</span>
      </div>
      <div>
        <div class="pub__venue"><span class="badge">ICASSP 2026</span></div>
        <h3><img src="/images/FOLK_logo.png" alt="" loading="lazy"><b>FOLK:</b> Fast Open-Vocabulary 3D Instance Segmentation via Label-guided Knowledge Distillation</h3>
        <p class="pub__authors"><strong>Hongrui Wu*</strong>, Zhicheng Gao*, Jin Cao, Kelu Yao, Wen Shen, Zhihua Wei</p>
        <div class="chips">
          <a class="chip" href="https://arxiv.org/abs/2510.08849" target="_blank" rel="noopener">Paper</a>
          <a class="chip" href="https://github.com/oneHFR/FOLK" target="_blank" rel="noopener">Code</a>
        </div>
      </div>
    </article>

    <article class="pub" id="pub-universe">
      <div class="pub__cover" data-anim="/images/universe-optimized.webp">
        <img class="still" src="/images/universe-static.jpg" alt="UniVerse" width="960" height="540" loading="lazy" decoding="async">
        <img class="anim" alt="" width="720" height="405" decoding="async">
        <span class="hint">Click to pause</span>
      </div>
      <div>
        <div class="pub__venue"><span class="badge">ICCV 2025</span></div>
        <h3><img src="/images/universe_logo-128.png" alt="" loading="lazy"><b>UniVerse:</b> Unleashing the Scene Prior of Video Diffusion Models for Robust Radiance Field Reconstruction</h3>
        <p class="pub__authors">Jin Cao*, <strong>Hongrui Wu*</strong>, Ziyong Feng, Hujun Bao, Xiaowei Zhou, Sida Peng</p>
        <div class="chips">
          <a class="chip" href="https://arxiv.org/abs/2510.01669" target="_blank" rel="noopener">Paper</a>
          <a class="chip" href="https://jin-cao-tma.github.io/UniVerse.github.io/" target="_blank" rel="noopener">Project</a>
          <a class="chip" href="https://github.com/zju3dv/UniVerse" target="_blank" rel="noopener">Code</a>
        </div>
      </div>
    </article>
  </div>
</section>

<section class="section" id="demos">
  <div class="section__head">
    <h2>Demos</h2>
    <p class="section__note">Things you can try in the browser</p>
  </div>
  <div class="demos">
    <a class="demo" href="/chat/" data-chat-open>
      <span class="demo__top">
        <span class="demo__icon"><svg aria-hidden="true"><use href="#i-chat"/></svg></span>
        <h3>Cyber Rui</h3>
        <span class="status">Live</span>
      </span>
      <p>My AI twin. Ask it about my research, projects and experience.</p>
      <span class="demo__cta">Start a chat <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
    </a>
    <a class="demo" href="/datatool-demo/">
      <span class="demo__top">
        <span class="demo__icon"><svg aria-hidden="true" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M4 5h16v14H4z M4 9h16 M9 9v10"/></svg></span>
        <h3>JoyDataTool</h3>
        <span class="status">Live</span>
      </span>
      <p>A viewer for multimodal training data that renders each record by its task: agent trajectories, image–text interleaved data and 3D perception data.</p>
      <span class="demo__cta">Open demo <svg aria-hidden="true"><use href="#i-arrow"/></svg></span>
    </a>
  </div>
</section>

<section class="section" id="experience">
  <div class="section__head"><h2>Experience</h2></div>
  <ol class="timeline">
    <li>
      <div class="exp__head"><h3>JD Explore Academy</h3><span class="exp__date">May 2026 – Oct 2026</span></div>
      <p class="exp__role">Research Intern · Mentor: <a href="https://scholar.google.com/citations?user=GDvt570AAAAJ" target="_blank" rel="noopener">Jiaqi Wang</a></p>
      <p class="exp__body">Multimodal deep research agents, agent training data, and multimodal instruction following.</p>
      <div class="exp__papers"><a class="chip" href="#pub-mira">MIRA</a><a class="chip" href="#pub-mmmc">MMMC</a><a class="chip" href="/datatool-demo/">JoyDataTool demo</a></div>
    </li>
    <li>
      <div class="exp__head"><h3>UC San Diego, <a href="https://pages.ucsd.edu/~ztu/Group.htm" target="_blank" rel="noopener">MLPC Lab</a></h3><span class="exp__date">Jul 2025 – Dec 2025</span></div>
      <p class="exp__role">Research Intern · Advisor: <a href="https://pages.ucsd.edu/~ztu/" target="_blank" rel="noopener">Prof. Zhuowen Tu</a></p>
      <div class="exp__papers"><a class="chip" href="#pub-pixarmesh">PixARMesh</a></div>
    </li>
    <li>
      <div class="exp__head"><h3>Zhejiang University</h3><span class="exp__date">Dec 2024 – Mar 2025</span></div>
      <p class="exp__role">Research Intern · Advisors: <a href="https://pengsida.net/" target="_blank" rel="noopener">Prof. Sida Peng</a> and <a href="https://xzhou.me/" target="_blank" rel="noopener">Prof. Xiaowei Zhou</a></p>
      <div class="exp__papers"><a class="chip" href="#pub-universe">UniVerse</a></div>
    </li>
    <li>
      <div class="exp__head"><h3>Tongji University</h3><span class="exp__date">Nov 2024 – Aug 2025</span></div>
      <p class="exp__role">Research Intern · Advisors: <a href="https://openreview.net/profile?id=~Zhihua_Wei1" target="_blank" rel="noopener">Prof. Zhihua Wei</a> and <a href="https://scholar.google.com/citations?user=9ZZzAS0AAAAJ&hl=en" target="_blank" rel="noopener">Prof. Wen Shen</a></p>
      <div class="exp__papers"><a class="chip" href="#pub-folk">FOLK</a></div>
    </li>
  </ol>

  <p class="subhead">Before research · I miss those happy days</p>
  <div class="canoe">
    <div class="canoe__row">
      <div>
        <h3><a href="https://onehfr.github.io/portfolio/project-1/">ASCE Concrete Canoe Competition</a></h3>
        <p>Hull designer · May 2022 – Apr 2024 · Hosted by <a href="https://www.linkedin.com/company/americansocietyofcivilengineers" target="_blank" rel="noopener">ASCE</a> in Sacramento, CA</p>
        <div class="chips">
          <a class="chip" href="/portfolio/">Works</a>
          <a class="chip" href="https://docs.google.com/presentation/d/12NBXRfv-bkYV1_H_B_a9v2MSho-ZQoks/edit?usp=drive_link&ouid=104071984654367651910&rtpof=true&sd=true" target="_blank" rel="noopener">Slides</a>
          <a class="chip" href="/files/ASCE_project_proposal.pdf" target="_blank" rel="noopener">Paper</a>
        </div>
      </div>
      <video autoplay loop muted controls playsinline preload="none" data-lazy-src="/images/p4-video2-960.mp4" aria-label="Concrete canoe project video"></video>
    </div>
    <div class="canoe__media">
      <iframe title="Canoe2024-Tongji-Yangtze 3D model - Sketchfab" data-lazy-src="https://sketchfab.com/models/8775df6e6d034f1ebfdcba0f3ba1b717/embed?autostart=0&amp;internal=1&amp;tracking=0&amp;ui_infos=0&amp;ui_snapshots=1&amp;ui_stop=0&amp;ui_watermark=0" loading="lazy" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen></iframe>
      <img src="/images/p4-poster-960.jpg" alt="Canoe project poster" loading="lazy" decoding="async" width="960" height="1474">
    </div>
  </div>
</section>

<section class="section" id="honors">
  <div class="section__head"><h2>Honors</h2></div>
  <ul class="honors">
    <li><span>National Scholarship <em>· top 0.2% nationwide, the highest scholarship in China</em></span></li>
    <li><span>Interdisciplinary Contest in Modeling (COMAP), Finalist Prize <em>· top 1.8% worldwide</em></span></li>
    <li><span>Outstanding Undergraduate Thesis Award <em>· much to my surprise; graduated just fine anyway</em></span></li>
    <li><span>ASCE Concrete Canoe Competition, 2nd Place in California Section, 2024 <em>· almost beat UC Berkeley, lol</em></span></li>
    <li><span>School Sports Meet, Silver Medal in 4×100 m Relay and Bronze Medal in 4×400 m Relay <em>· I used to be fast</em></span></li>
  </ul>
</section>
