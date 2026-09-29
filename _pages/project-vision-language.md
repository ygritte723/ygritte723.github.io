---
layout: research
title: "Fine-grained vision–language learning"
permalink: /projects/vision-language/
---

<p class="eyebrow">First-author research · IEEE CAI 2024 · Spotlight</p><p class="intro">Enhancing Biomedical Multi-modal Representation Learning with Multi-scale Pre-training and Perturbed Report Discrimination.</p><div class="link-row"><a class="button primary" href="https://arxiv.org/abs/2506.01902">Read paper ↗</a><a href="https://www.computer.org/csdl/proceedings-article/cai/2024/540900a480/1Z06qAdl8vS">Proceedings ↗</a></div>
<figure class="paper-figure"><a href="/images/research/vlm-framework.png"><img src="/images/research/vlm-framework.png" alt="Biomedical vision-language framework aligning image regions and report words while distinguishing perturbed reports" width="1270" height="780"></a><figcaption>Original framework diagram, Figure 1 from the IEEE CAI 2024 paper.</figcaption></figure>
<h2>The problem</h2><p>Matching an image to a report is not sufficient to understand clinical semantics. Reports can contain the same words yet express different relationships, and coarse alignment can miss local detail.</p>
<h2>Our approach</h2><p>We combine global image–report contrastive learning, local region–word alignment, and perturbed-report discrimination. Nine report-perturbation types challenge the model to recognize semantic structure rather than simply shared vocabulary.</p>
<div class="result-note"><strong>49.0% vs. 44.3%</strong><p>Our model versus GLoRIA on zero-shot semantic structure evaluation using 469 held-out image–report pairs. This result describes that specific task, not general retrieval accuracy.</p></div>
