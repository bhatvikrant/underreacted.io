---
title: What is Deno? Is it gonna replace Node?
date: "2020-05-18T22:40:32.169Z"
readTime: 4 min read
description: In this blog I talk about the freshly released javascript runtime Deno.
---

![Deno](./deno_logo.png)

<!-- ### What is Deno? Is it gonna replace Node?

![](https://cdn-images-1.medium.com/max/800/1*FiStM9NRNgVfoSPlYEyINg.png) -->

Version 1 of [Deno](https://deno.land/) was released on 13 May 2020, but what
does that mean for you? Is it gonna replace [Node](https://nodejs.org/en/)? Is
all of the hard work that you spent learning node completely wasted? Let’s find
out!

---

Deno is a new runtime for javascript. So think about [Deno](https://deno.land/)
as an upgraded newer version of [node.js](https://nodejs.org/en/)_._ Also
interestingly it is created by the exact same person who created node.js — [Ryan
Dahl](https://www.google.com/search?q=nodejs+creaor&rlz=1C5CHFA_enIN871IN871&oq=nodejs+creaor&aqs=chrome..69i57j0l7.7646j1j1&sourceid=chrome&ie=UTF-8)

Ryan saw all of the problems with node and the poor design decisions he made
during the development but since now millions of Softwares depend on it, it is
impossible to make amends to the legacy code. Hence he decided to recreate
node.js in a better form and thus Deno was born.

_Fun Fact_ Deno is actually an anagram of Node. Cool right!?

_Check out the video below where Ryan shares his regrets about node.js and why
he is building Deno._

[![](./YTvideoImg.png)](https://www.youtube.com/watch?v=M3BM9TB-8yA)

Bottomline — Deno is a new runtime that is built on Rust, which is going to be
very similar to _node_ and do a lot of things that node does but with a _lot of
advantages._

One of the biggest advantages that Deno has over _node_ is that it has built-in
TypeScript support! So if you are someone who uses TypeScript when you write
JavaScript, you can just use it out of the box with Deno, since it has the
compiler and everything built-in, so you don’t have to worry about any
TypeScript configuration!

Now allow me to blow your mind in the following two points:

1.  A Deno project* doesn’t need node_modules* to keep 3rd party code.
1.  A Deno project *doesn’t need a package.json *to manage your dependencies.

![](https://cdn-images-1.medium.com/max/800/1*HUVVAQ3OSGCz3VfzIJApmQ.png)
<span class="figcaption_hack">A popular meme, comparing the weight of node_modules 😂</span>

Amazing right? Now your next question would be then how do we use 3rd party
libraries in Deno?

The following line shows the syntax of how you will be importing libraries in
Deno.

> import { serve } from “https://deno.land/std@0.50.0/http/server.ts";

That’s right! We will be importing libraries directly from the server! (using
the URL) and during the first compilation, the imported library will be cached
in your computer so that the subsequent compilations are faster.

All of your dependencies are saved in a central location on your computer, so
you don’t have to worry about this massive node_modules folder.

This completely eliminates the use of a package manager like NPM.

---

<br>

![](https://cdn-images-1.medium.com/max/800/1*DZhjBoOmkJMWneMDrHiu9A.png)
<span class="figcaption_hack">[https://deno.land/](https://deno.land/)</span>

As soon as you land on Deno’s website the first thing you see is their tagline:

> **A secure runtime for JavaScript and TypeScript.**

And this brings me to the next important feature of Deno. Deno is secure by
_default_. By default, I mean that a Deno project has no permissions by default.
You have to provide permissions explicitly for each and every resource that you
want Deno to use. For example, even just to start a server on your local machine
you have to provide permissions! This means Deno cannot access anything in your
machine until you explicitly tell it to.

---

### So is Deno gonna replace Node?

Well, I have to say right now, that is not going to be the case. While Deno is
really cool and it has a lot of new features coming to it, it still is in a very
early phase, it just hit v1 recently. Deno is still working on a lot of things,
for example, the browser compatibility is still not 100%, they are still working
on the browser APIs, and it will take them some time to achieve this.

Also, when I mentioned that we don’t use [NPM](https://www.npmjs.com/) with
Deno, that is actually a little bit of a downside right now. Javascript is based
around the NPM packages and the downside is that many of these packages are not
going to be compatible with Deno right away.

Surely over a certain period of time, people will start writing packages
compatible with Deno, but at the time of publishing this article that is not the
case.
