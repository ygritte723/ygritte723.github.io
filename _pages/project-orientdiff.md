---
layout: research
title: "Orientation-aware diffusion"
permalink: /projects/orientdiff/
---

<p class="eyebrow">First-author research · MIDL 2026</p><p class="intro">Orientation-Aware Diffusion Super-Resolution for 3T-Like Fetal MRI from Routine 1.5T Scans.</p><div class="link-row"><a class="button primary" href="https://proceedings.mlr.press/v315/zhong26a.html">Official paper ↗</a></div>
<figure class="paper-figure"><a href="/images/research/orientdiff-framework.png"><img src="/images/research/orientdiff-framework.png" alt="OrientDiff dual-stream architecture with a conditioning encoder, orientation-conditioned gated FiLM, and a Swin-UNet" width="1538" height="916"></a><figcaption>Framework overview, Figure 1 from the MIDL 2026 paper. Select the figure to view it at full size.</figcaption></figure>
<h2>The problem</h2><p>Routine fetal MRI trades spatial resolution for acquisition speed. Different scan orientations introduce different anatomical appearances and degradation patterns, making a single orientation-agnostic restoration model less effective.</p>
<h2>Our approach</h2><p>We combine an orientation-conditioned Swin-UNet with gated FiLM embeddings and residual error-shifting diffusion. The network restores detail relative to the input, using orientation as an explicit conditioning signal.</p><p>Paired synthetic training data use FaBiAN phantoms with intensity remapping, geometric perturbations, and signal-void simulation. Evaluation includes image restoration and downstream reconstruction and segmentation workflows.</p>
<figure class="paper-figure results"><a href="/images/research/orientdiff-results.png"><img src="/images/research/orientdiff-results.png" alt="Published comparison of input, reference, baseline methods, and OrientDiff on a clinical CHOA subject, across axial, coronal, and sagittal views" width="930" height="785" loading="lazy"></a><figcaption>Clinical comparison reproduced from Figure 3. This is one published example; see the paper for the complete evaluation and limitations.</figcaption></figure>
