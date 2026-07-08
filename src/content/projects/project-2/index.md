---
title: "A stability-based investigation of K-means with potential application to disease trajectories"
description: "My Bachelor Thesis investigating how we can construct stable clusterings in an unsupervised setting."
date: "Jun 08 2024"
draft: false
image: "./cover.png"
---

This project was my bachelor thesis in Applied Mathematics at DTU, supervised by Anders Stockmarr and Nikolaj Olerud Holm. The thesis investigated when K-means clustering produces meaningful and reproducible clusters, with a focus on clustering stability, simulation studies, and potential applications to disease trajectory data.

The main motivation was that clustering is often used in exploratory data analysis, but in unsupervised settings there is no direct ground truth. This makes it difficult to know whether a clustering represents meaningful structure or whether it is mainly an artifact of noise, initialization, symmetry, or arbitrary choices such as the number of clusters.

## What I investigated

The project studied the variability of K-means solutions through controlled simulation experiments. I systematically varied properties such as cluster separation, noise level, symmetry, number of fitted clusters, and initialization. This made it possible to compare fitted K-means labels with known data-generating structures.

A central part of the thesis was studying how well K-means can recover two Gaussian clusters as the distance between the true means changes. I found that misclassification is better understood through separation measured in units of within-cluster standard deviation, rather than raw Euclidean distance alone.

I also investigated symmetric data configurations, where K-means can converge to several equally plausible local solutions. These experiments showed how symmetry and initialization can make clustering less reproducible, even when the underlying structure is visually clear.

## Methods and tools

The thesis combined mathematical reasoning, simulation studies, and empirical evaluation of clustering validation metrics. Topics included:

- K-means clustering
- Clustering stability
- Gaussian simulation experiments
- Adjusted Rand Index
- Internal validation metrics
- Misclassification analysis
- Local minima and initialization sensitivity
- Gaussian null models
- Rim-data analysis
- Application to multimorbidity data

The simulation code was written to generate data, run repeated K-means experiments, compute evaluation metrics, and produce figures for analysis.

## Main takeaways

The main lesson from the project was that clustering quality cannot be judged from one metric alone. K-means can appear to find structure even in noisy or symmetric settings, and different validation metrics capture different aspects of clustering quality.

A more reliable approach is to combine internal validation metrics with stability-based analysis and suitable null models. In applied settings, especially with high-dimensional health data, this can help distinguish robust structure from artifacts of the clustering procedure.

## Relevance

This project strengthened my interest in statistical modelling, simulation, machine learning, and uncertainty. It also gave me experience with designing controlled experiments, evaluating algorithms empirically, and communicating quantitative results clearly.