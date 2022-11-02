---
title: Back to glacier research and open-source
header:
  teaser: "https://i.vimeocdn.com/video/764738148-3bbe1457a7a5239908d5ba4cbb9ea1bf27e791c651e62a0a35640e4832061407-d_400x266"
  image: "https://i.vimeocdn.com/video/764738148-3bbe1457a7a5239908d5ba4cbb9ea1bf27e791c651e62a0a35640e4832061407-d?mw=1920"
  image_description: "Glacier streamlines on high-resolution topography."
  caption: "Interpolated visual of modelled Linth and Reuss paleoglaciers."
---

After the last two posts, I wanted to write something a bit more positive on
this blog. It took some time, but I believe that I am finally here. Yesterday,
I released hyoga v0.2.0 "Bale". This release may not seem like much in terms of
functionality, but it means a lot to me. As for the first release, this blog
post is about the story behind the code.

A little over two years ago, my employment and residence permit in Zurich were
coming to an end. At that time, I wrote a mediocre proposal to a small funding
source from the Japanese Society for the Promotion of Science ([JSPS]). In a
condensed two pages of text and figures, I proposed to reconstruct past
glaciations in Japan using the Parallel Ice Sheet Model ([PISM]).

My motivation was twofold. Arguably, the academic interest of modelling such
tiny glaciers as once dotted the Hida, Kiso, Akaishi and Hidaka mountain ranges
with such a powerful tool as PISM is limited. But first, I believed that the
outreach opportunities for this project were immense. And second, the Japanese
mountains would provide a perfect testing ground for a more ambitious,
longer-haul project. This project is Hyoga.

On December 4th, 2019, while working on the proposal, I performed a
now-familiar series of actions. I opened my computer, created a new directory,
initiated a git repository, and signed the notorious "initial commit". Lacking
better inspiration, I named this new project "PISMX", as "PISM for
eX-glaciers", or "PISM with Xarray", I was not really sure.

Academia as other sectors suffers from short-termism, and as researchers, our
work constantly involves finding a balance between fixed-term contracts and
long-term goals. That time, I failed to get the funding. But with savings from
my Swiss years, a little balcony overlooking the Aegean Sea, and covid
lockdowns looming seawards in all directions, I decided to get started anyway.

These uncertain times finished to convinced me that as a researcher, I needed
to do better in terms of sharing my work. "One of my worries about leaving
academia", I [wrote](a-python-library-to-plot-ice-sheet-model-results/) at the
time, "is to see the programmatic core of my work disappear in the vast
graveyard of undocumented methodologies". Now I am back in academia, but think
spending that time away from work was very useful.

As a researcher, I have, of course, published my findings into research papers.
But papers are dead products. They are cited, sometimes read, and almost never
reworked, a bit like religious books. I want to produce something more directly
useful, something that others could actually use to repeat and better my work,
instead of trying to figure out the bits and pieces from instantly outdated
journal articles.

A few months into my Greek stay, PISMX became hyoga v0.1.0 "Akaishi". I got a
job in Japan, and decided to put the project aside until I got there, still
innocently believing this was a matter of weeks As for many others, my
[painful wait](/research-is-not-tourism-the-long-wait-for-japan/) for Japan did
not end well, but that is another story. Hyoga's development took a really long
break. Until now.

In April this year, I finally gave up playing the immigration pachinko and
started on my current job in Europe's beautiful capital of rain, Bergen. It
took some time to recover from the past year, and to be honest I am not quite
there yet, but I have an office, income, a desktop machine, supercomputer
access, colleagues that I actually meet and not just email, and my gratitude
for such things outweigh my longing for the Aegean light.

Hyoga v0.2.0 merges [cartowik], a little Python package I had developed over
the years to make topographic maps in the green-yellow-brown style that was
developed for the French [Wikipedia] many years ago and that I used in several
of my [publications] and [animations]. But to be honest, that code base has
been largely rewritten in order to leverage the amazing object-oriented
interface to vectors provided by [GeoPandas].

With this new release, hyoga now implements several cartographic features. It
adds custom colormaps and plot methods for [shaded reliefs] and an interface to
[open and plot] Natural Earth data and paleoglacier extents. The documentation
uses a new theme. A logo and new [examples] were added.

More importantly for myself, the package structure has been reworked and is now
much readier for future changes. Hyoga's plotting component is almost where I
want it to be for now, meaning that I will soon be able to start working on a
compeletely different and very exciting part of the project. More about that
in a couple of months.

Once again, I decided to name the release after a formerly glaciated mountain
range. A little before leaving Zurich, I was invited by a research group in
Bern who were interested to learn more about my work, and perhaps apply it
to study former glaciations in Ethiopia. As I had never imagined that Ethiopia,
one of the hottest countries on Earth, could ever have hosted glaciers, my
curiosity was directly triggered. This is how I learned that sometime between
[42 and 28 thousand years ago](https://doi.org/10.1126/sciadv.abb6826), an ice
cap not unlike those currently surrounding Bergen carved U-shaped valleys and
deposited moraines on an African equatorial plateau 4000 metres above sea
level. This release is called Bale after the Bale Mountains that hosted this
ice cap.

[publications]: /publications/
[animations]: /outreach/

[JSPS]: https://www.jsps.go.jp/english/e-fellow/postdoctoral.html
[PISM]: https://pism-docs.org
[Wikipedia]: https://en.wikipedia.org/wiki/Wikipedia:WikiProject_Maps/Conventions
[cartowik]: https://github.com/juseg/cartowik
[geopandas]: https://geopandas.org
[hyoga]: https://hyoga.readthedocs.io
[xarray]: https://xarray.dev

[shaded reliefs]: https://hyoga.readthedocs.io/en/stable/datasets/shading.html
[open and plot]: https://hyoga.readthedocs.io/en/stable/datasets/vectors.html
[examples]: https://hyoga.readthedocs.io/en/stable/examples/index.html
