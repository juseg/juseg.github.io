---
title: Alpine ice sheet
permalink: /alpine-ice-sheet/

gallery:
  - url: "https://live.staticflickr.com/65535/48920309508_3e3d6528a5_b.jpg"
    image_path: "https://live.staticflickr.com/65535/48920309508_3e3d6528a5_w.jpg"
    title: "Roche moutonnée"
  - url: "https://live.staticflickr.com/65535/48838720096_63c8bbc63a_b.jpg"
    image_path: "https://live.staticflickr.com/65535/48838720096_63c8bbc63a_w.jpg"
    title: "Little Ice Age"
  - url: "https://live.staticflickr.com/65535/48844296952_bf69355fdb_b.jpg"
    image_path: "https://live.staticflickr.com/65535/48844296952_bf69355fdb_w.jpg"
    title: "Glacial valley"

---

Context
-------

For nearly 300 years, montane people and early explorers of the European Alps
have learned to understand that glaciers slowly flow downhill by gravity and
thereby reshape the landscape they lie upon.
In fact, the European Alps are the cradle of pioneer glacial studies and one of
the regions where moraines, erratic boulders and other geological markers of
glaciation are most abundant and well-studied. About 25 000 years ago, glaciers
filled most valleys in the Alps, and even extended onto the plains that are now
parts of France, Switzerland, Italy, Austria and Slovenia.

<!-- FIXME add flickr photo album on Alpine geomorphology. -->
{% include gallery
  caption="Photos of Alpine geomorphology (see my [flickr album](
    https://www.flickr.com/photos/pyjeo/albums/72157711308107582) for more)." %}


Glacier modelling
-----------------

In this project I use the Parallel Ice Sheet Model ([PISM][PISM]), an
internationally-developed computer model that contains knowledge of glacier
physics based on modern observations of Greenland and Antarctica and laboratory
experiments on ice. With help from the traces left by glaciers on the
landscape, my colleagues and I attempt to model the evolution of former Alpine
glaciers in time.

The simulations run on the Swiss National Supercomputing Centre ([CSCS][CSCS])
Piz Daint, the fastest supercomputer in Europe and among the fastest in the
World (see [TOP500][TOP500]). In a study recently published in the open-access
journal The Cryosphere (<https://doi.org/10.5194/tc-12-3265-2018>), we
present a detailed reconstruction of Alpine glaciers multiple cycles of growth
and decay from 120000 years ago to today, a period that spans the last glacial
cycle (see [ETH News][ETH News], [NZZ][NZZ]).

{% include vimeo.html
  showcase="5585611"
  caption="Modelled last glacial cycle ice dynamics in the Alps (also in
           [de](https://vimeo.com/showcase/7913179),
           [fr](https://vimeo.com/showcase/7913168),
           [it, jp, nl](https://vimeo.com/showcase/79131689),
           more languages or styles on demand)." %}

[CSCS]: https://www.cscs.ch
[PISM]: https://pism-docs.org
[TOP500]: https://www.top500.org/lists/top500/
[ETH News]: https://www.ethz.ch/en/news-and-events/eth-news/news/2018/11/an-ice-age-lasting-115000-years-in-two-minutes.html
[NZZ]: https://www.nzz.ch/wissenschaft/als-bern-und-zuerich-noch-von-eis-bedeckt-waren-ld.1434273


Outreach
--------

Visualizations of the results were temporarily displayed at the [History museum
of Wallis][Wallis] in Sion, during the 5th night of images in
[Collombey][Collombey] and [Naters][Naters], and are permanently exposed at the
[Archaeological museum of the Canton Solothurn][Solothurn] in Olten. The
simulation provides a detailed picture of glacier growth and decay, but
discrepancies with the geological data remain, and more observations are needed
to validate the accuracy of the results.

<!-- <figure>
  <div id="icemap"></div>
  <script type="text/javascript" src="/assets/js/icemap.js"></script>
  <figcaption>Zoom in and explore different ages. Best viewed fullscreen.</figcaption>
</figure> -->

[Collombey]: https://agenda.culturevalais.ch/fr/event/show/15208
[Naters]: https://agenda.culturevalais.ch/fr/event/show/14762
[Wallis]: https://www.musees-valais.ch/musee-histoire/expositions/archives/item/1229-memoire-de-glace-vestiges-en-peril.html
[Solothurn]: https://hausdermuseen.ch/archaeologisches-museum
