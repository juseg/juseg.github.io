---
title: Software
permalink: /software/
---

I believe that open-source software development is an essential ingredient to
sustainable science, international and interdisciplinary collaborations, and
universities' role to serve the rest of society. While not always compatible
with modern academic short-termism, this is my motivation to spend much of my
work time (and recently free time) producing useful and documented code. In
addition to having participated on international projects such as
[PISM](https://pism.github.io) and [Xarray](https://xarray.pydata.org/), I
develop several (mostly Python) open-source packages for the geosciences.


## Geoscientific software

[Hyoga](https://hyoga.readthedocs.io)
: A Python library I am newly working on to plot ice-sheet model results.
I hope to find the time and funds to let hyoga grow into a more developed
library around CF-compliant glacier and ice sheet models, encompassing the
functionality from several other packages I worked on over the years:

  [PISM]
  : [PISM-Palseries](https://github.com/juseg/pism-palseries):
    Prepare scalar modifiers for PISM.
  : [PISM-Palwrapper](https://github.com/juseg/pism-palwrapper):
    Run SLURM job chains for PISM.

  [GIS]
  : [r.out.pism](https://github.com/juseg/r.out.pism):
    Generate PISM input files in GRASS GIS
  : [r.in.worldclim](https://github.com/juseg/r.in.worldclim):
    Import WorldClim data in GRASS GIS
  : [r.interp](https://github.com/juseg/r.interp):
    Fill data holes using 2D interpolation in GRASS GIS.
  : [r.in.narr](https://github.com/juseg/r.in.narr):
    Import NARR data in GRASS GIS
  : [r.in.erai](https://github.com/juseg/r.in.erai):
    Import ERA-Interim data in GRASS GIS.

  [Python]
  : [cartowik](https://github.com/juseg/cartowik):
    Draw Wikipedia style location and topographic maps.
  : [iceplotlib](https://github.com/juseg/iceplotlib):
    A Python 2 plotting library for PISM.

[PyPDD](https://github.com/juseg/pypdd)
: A positive degree-day model for glacier surface mass balance with snowpack
  evolution and melt retention that was used by
  [myself](http://doi.org/10.3189/2013JoG13J081) and
  [others](https://doi.org/10.5194/tc-12-3635-2018) in publications.

[SentinelFlow](https://github.com/juseg/sentinelflow)
: An automated satellite image workflow for Sentinel-2, developed in the early
  days of Sentinel to facilitate fieldwork planning with limited internet in
  Greenland.


## Other utilities

[Absplots](https://github.com/juseg/absplots)
: A small but functional Python package to make subplots with absolute margins
  and dimensions in millimetres instead of the matplotlib defaults relative to
  a figure size in inches.

[Gitplots](https://github.com/juseg/gitplots)
: A small script to plot comparative commit history across mutiple git
  repositories.

[Keels](https://github.com/juseg/keels)
: A custom fork of [Sleek](https://janczizikow.github.io/sleek), a
  [Jekyll](https://jekyllrb.com) theme with focus on performance, updated for
  improved compatibility with [Github Pages](https://pages.github.com) and
  beautiful image galleries.

[PISM-pkgbuild](https://github.com/juseg/pism-pkgbuild)
: The Archlinux package build for PISM, which I always forget to update
  for new releases.


## No longer maintained

[Aftershocks](https://github.com/juseg/aftershocks)
: A small script I wrote after experiencing the 2018
  [Iburi earthquake](https://en.wikipedia.org/wiki/2018_Hokkaido_Eastern_Iburi_earthquake)
  in Sapporo. It used to plot recent earthquakes in Japan by region, but does
  no longer work with the new Japan Meteorological Agency
  ([JMA](https://www.jma.go.jp)) webpage.

[PISM-SHMIP](https://github.com/juseg/pism-shmip)
: Scripts to test PISM hydrology within the framework of the Subglacial
  Hydrology Model Intercomparison Project
  ([SHMIP](https://shmip.bitbucket.io)). The results are available in a
  [publication](https://doi.org/10.1017/jog.2018.78).
