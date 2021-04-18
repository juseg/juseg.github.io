---
title: Code and data
permalink: /software-data/
---


Software packages
-----------------

### Hyoga

{% include badges.html pypi="hyoga" zenodo="227465038" %}

Hyoga is Python library I am newly working on to plot ice-sheet model results.
Documentation is under construction at <https://hyoga.readthedocs.io>. I hope
to find the time and funds to let hyoga grow into a more developed library
around CF-compliant glacier and ice sheet models, encompassing the
functionality from several smaller packages I worked on over the years:

* Tools for the Parallel Ice Sheet Model:
  - [PISM-Palseries](https://github.com/juseg/pism-palseries):
    Prepare scalar modifiers for PISM.
  - [PISM-Palwrapper](https://github.com/juseg/pism-palwrapper):
    Run SLURM job chains for PISM.
* Python modules for GRASS GIS:
  - [r.out.pism](https://github.com/juseg/r.out.pism):
    Generate PISM input files in GRASS GIS
  - [r.in.worldclim](https://github.com/juseg/r.in.worldclim):
    Import WorldClim data in GRASS GIS
  - [r.interp](https://github.com/juseg/r.interp):
    Fill data holes using 2D interpolation in GRASS GIS.
  - [r.in.narr](https://github.com/juseg/r.in.narr):
    Import NARR data in GRASS GIS
  - [r.in.erai](https://github.com/juseg/r.in.erai):
    Import ERA-Interim data in GRASS GIS.
* And perhaps:
  - [cartowik](https://github.com/juseg/cartowik):
    Draw Wikipedia style location and topographic maps.

### PyPDD

{% include badges.html pypi="pypdd" zenodo="8483394" %}

[PyPDD](https://github.com/juseg/pypdd)
is a positive degree-day model for glacier surface mass balance with snowpack
evolution and melt retention that was used by
[myself](http://doi.org/10.3189/2013JoG13J081) and
[others](https://doi.org/10.5194/tc-12-3635-2018) in publications.

### PISM-SHMIP

<!-- not on pypi, slightly different badges here -->
[![](https://img.shields.io/github/license/juseg/pism-shmip.svg)](https://www.gnu.org/licenses/gpl-3.0.txt)
[![](https://img.shields.io/github/release/juseg/pism-shmip.svg)](https://github.com/juseg/pism-shmip)
[![](https://zenodo.org/badge/87446424.svg)](https://zenodo.org/badge/latestdoi/87446424)
[![](https://img.shields.io/github/stars/juseg/pism-shmip.svg?style=social)](https://github.com/juseg/pism-shmip)

[PISM-SHMIP](https://github.com/juseg/pism-shmip)
contains the scripts to test PISM hydrology within the framework of the
Subglacial Hydrology Model Intercomparison Project ([SHMIP][SHMIP]). The
results are available in a [publication](https://doi.org/10.1017/jog.2018.78).

[SHMIP]: https://shmip.bitbucket.io

### Sentinelflow

{% include badges.html pypi="sentinelflow" zenodo="86336966" %}

[SentinelFlow](https://github.com/juseg/sentinelflow)
Automated satellite image workflow for Sentinel-2.

### Absplots

{% include badges.html pypi="absplots" zenodo="186842763" %}

[Absplots](https://github.com/juseg/absplots)
is a small but functional python package to make subplots with absolute margins
and dimensions in millimetres instead of the matplotlib defaults relative to a
figure size in inches.

### Aftershocks

{% include badges.html pypi="aftershocks" zenodo="149678580" %}

[Aftershocks](https://github.com/juseg/aftershocks) is a small script I wrote
after experiencing the 2018
[Iburi earthquake](https://en.wikipedia.org/wiki/2018_Hokkaido_Eastern_Iburi_earthquake)
in Sapporo. It plots recent earthquakes in Japan by region, as reported by the
Japan Meteorological Agency ([JMA][JMA]).

[JMA]: https://www.jma.go.jp

### Gitplots

{% include badges.html pypi="gitplots" zenodo="87937696" %}

[Gitplots](https://github.com/juseg/gitplots)
makes plots from git commit logs.


Archived data
-------------

[6]
: **J. Seguinot**.
  Alpine ice sheet erosion potential aggregated variables.
  *Zenodo*. <http://doi.org/10.5281/zenodo.4495419>, 2021.


[5]
: **J. Seguinot**.
  Cordilleran ice sheet glacial cycle simulations continuous variables.
  *Zenodo*, <https://doi.org/10.5281/zenodo.3606536>, 2020.

[4]
: **J. Seguinot**.
  Alpine ice sheet glacial cycle simulations aggregated variables.
  * v2, *Zenodo*, <https://doi.org/10.5281/zenodo.3604174>, 2020,
  * v1, *Zenodo*, <https://doi.org/10.5281/zenodo.1423160>, 2018.

[3]
: **J. Seguinot**.
  Alpine ice sheet glacial cycle simulations continuous variables.

  * v2, *Zenodo* <https://doi.org/10.5281/zenodo.3604142>, 2020,
  * v1, *Zenodo* <https://doi.org/10.5281/zenodo.1423176>, 2018.

[2]
: M. Werder, B. de Fleurian, S. Beyer, D. J. Brinkerhoff, I. Delaney, C. Dow,
  J. Downs, O. Gagliardini, M. Hoffman, R. Hooke, **J. Seguinot** and A. Sommers.
  Data-submissions for the paper "SHMIP: The Subglacial Hydrology Model
  Intercomparison Project" submitted to Journal of Glaciology.
   *ETH Zurich*, <https://doi.org/10.3929/ethz-b-000249168>, 2018.

[1]
: **J. Seguinot**.
  Monthly standard deviation of air temperature from ERA-Interim.
  *IGS*, https://www.igsoc.org/hyperlink/13j081, 2013.
