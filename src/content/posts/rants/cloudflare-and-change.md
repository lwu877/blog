---
title: "Swapping from Cloudflare Pages to Workers, and why change sucks"
published: 2025-10-25
tags: [Rant]
draft: true
---

Typically, when you're swapping from one platform to another (especially within the same company), you'd want to make transitioning as easy as possible. I'd say they've done that - for anyone who's technically savvy enough to figure it out by themselves.

I am not that technically savvy person. Yes, I know how to code (somewhat), and I know how to make an Astro template bend to my will with the power of Javascript and a little bit of styling. However, that doesn't mean I'm perfect at everything.

## Cloudflare

I started out by installing the @astrojs/cloudflare adapter, as stated in [Astro's integration guide.](https://docs.astro.build/en/guides/integrations-guide/cloudflare/) Every time I tried to build my website after installing it, it always failed for almost no apparent reason. (Granted, I was new at the time, but still. Not encouraging.)

I eventually gave up on the Cloudflare adapter at first, but as time grew on, I realized I'd probably need to learn it after all. Still, nothing was compelling me to learn how it worked - until Cloudflare announced that they were essentially going to focus their efforts on Workers (which makes sense - Pages is built on Workers.)

Knowing everything about what big tech companies do when they shift focus (see: [Firebase shutting down Dynamic Links,](https://firebase.google.com/support/dynamic-links-faq) [Atlassian shutting down their Data Center and Server services,](https://www.atlassian.com/migration) and countless more), I decided to try and actually get ahead of the curve this time by migrating in a timely manner.

Cue about two hours of agonizing troubleshooting over why my deployment isn't... well, deploying,
