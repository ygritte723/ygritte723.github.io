---
layout: research
title: "Compositional image–text retrieval"
permalink: /projects/retrieval/
---

<p class="eyebrow">Emory CS 534 · September–December 2024</p><p class="intro">Adapting image–text representations to recognize attributes and relationships.</p><p><a class="button primary" href="https://github.com/ygritte723/cs534-dac">Project code ↗</a></p>
<h2>Method</h2><p>Building on <a href="https://proceedings.neurips.cc/paper_files/paper/2023/hash/efe406d6d2674d176cdcd958ce605d17-Abstract-Conference.html">Dense and Aligned Captions</a>, the project uses LLM-generated dense captions, semantic filtering, and LoRA fine-tuning of CLIP. Hard negatives selected from contrastive logits strengthen a multi-instance learning objective.</p><h2>Evaluation</h2><p>Positive and negative captions are ranked by cosine similarity. Evaluation uses top-1/top-3 caption ranking on 1,000 VL-Checklist images spanning attributes and relations.</p><p><strong>Tools:</strong> PyTorch, CLIP, LoRA, contrastive learning.</p>
