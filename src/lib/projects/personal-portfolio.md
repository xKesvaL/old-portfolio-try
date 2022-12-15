---
slug: personal-portfolio
title: My personal portfolio
date: 2022-12-15
excerpt: "This is the website you're on! Check out the source code and see the tech stack used"
tags: [Svelte, Open Source, SvelteKit, FrontEnd]
---

[Svelte](https://svelte.dev/) is a new cool kid on the JS block - it was launched in 2016, but it really started getting traction when its 3.0 version was launched in 2019. It is a competitor to the big JS frameworks - React, Vue, Angular - but, instead of simply being an alternative way of doing things, it differentiates itself on a fundamental level: it is a compiler, not a framework.

This means that it does its job at build time, not at runtime. While other frameworks (React, for example) need JavaScript code that runs on the client in order for your components to work properly, Svelte does not, because it interprets your code on build time, and only ships exactly what it needs to run. This means websites made with Svelte can be much smaller in size and faster because it has less code to run.

[SvelteKit](https://kit.svelte.dev/) is a framework built on top of that. It is an opinionated set of rules that helps you get a Svelte app built pretty quickly. You can compare it to NextJS (for React) or Nuxt (for Vue). It has great defaults and encourages good practices, like server-side rendering, for example. At the time of building this website, SvelteKit was still in Beta. However, progress is steady and its API seems to be already stable, so it's unlikely there will be any breaking changes before 1.0 arrives.

Using both of the above allowed my website to have two important characteristics:

- Every single page is rendered at build time (server-side rendering). This means that as long as the HTML and CSS files are downloaded, it will look as it was meant to be;
- JavaScript is not needed. Try disabling JavaScript on your browser. You'll still be able to read this blog post and everything will look the same.

## Progressive Enhancement

One of the concepts that really caught my eye with Svelte is the idea of Progressive Enhancement: making sure your app runs for everyone, and making it progressively more featureful if the user's device supports it. My website is a pretty simple project, but still there are instances of this:

If there's no JavaScript, the website uses the browser's native navigation API. Which means you can navigate between pages normally without any client-side code. _However_, if JavaScript is available, a client-side router will be used to make the transition between pages smoother and faster. This means that even if the user's device doesn't support
