---
title: A Python library to plot ice sheet model results
header:
  teaser: "https://i.vimeocdn.com/video/764738148_960x540.jpg"
  image: "https://i.vimeocdn.com/video/764738148_1920x1080.jpg"
  image_description: "Glacier streamlines on high-resolution topography."
  caption: "Interpolated visual of modelled Linth and Reuss paleoglaciers."
---

One of my worries about leaving academia is to see the programmatic core of my
work disappear in the vast graveyard of undocumented methodologies. This was
one of my motivations to, earlier this year, publish the first versions of
[hyoga], a Python library to plot results from numerical ice sheet models.

**Tip:** Hyōga ([氷河]) is the Japanese word for glacier (lit. ice river).
{: .notice--info}

[hyoga]: https://hyoga.readthedocs.io
[氷河]: https://jisho.org/word/氷河

{% include vimeo.html id="321913054"
   caption="Visualization of modelled Linth and Reuss paleoglaciers using an
            interpolation method now included in hyoga." %}


## A bit of history

### My beginnings with Python

In the spring of 2011, I was at a turning point in my doctoral studies. I had
been a Ph.D. student at [Stockholm University][SU] for more than a year, yet I
had achieved little besides taking some of the necessary courses for my
diploma. My project was moving very much too slow and, even more importantly in
hindsight, it was boring. I came to my advisors with a bold proposition, to
essentially dump all the methodological work I'd done thus far, and to start
over with a different code. For the second time.

[SU]: https://www.natgeo.su.se

My advisors gave me two weeks to attempt the ambitious move. Within the first
week, I could compile the Parallel Ice Sheet Model ([PISM], the code we had
settled on) on my office workstation, and to make it run. PISM produced a
[netCDF] file, a totally new format for me at the time. Since I had a vague
notion that netCDF was somewhat standard in the climate sciences, I asked an
oceanographer friend what to do. He recommended [Python], pointed me to the
beautiful example gallery on the [matplotlib] website (much smaller at that
time), and gave me a fifty-line Python code he'd used on his files. Another
week later, I had my first Python script, my first plots, and my first PhD
results. They were faulty, and I was certainly not at the end of my pains. But
without knowing it, I had built the foundations for a workflow I have used and
improved continuously to this day.

[PISM]: https://pism-docs.org
[netCDF]: https://www.unidata.ucar.edu/software/netcdf/
[Python]: https://www.python.org
[matplotlib]: https://www.matplotlib.org


### Towards an object-oriented library

Two years later, I was working hard on my first scientific publications and
found that I was often re-using the same pieces of code in my figure scripts.
So came the idea for an object-oriented ice-sheet-model plotting library. I
began developing an extension on the [python-netcdf4] `Dataset` class in a
little Python 2 package called [iceplotlib], which has been used with more or
less success by some of my co-workers. Soon, however, the little work I had
done became very, very largely outpaced by the powerful new additions to the
growing Python geoscience ecosystem such as [cartopy], [pandas], [dask], and
[xarray]. One day I made the move to xarray, and gave up developing iceplotlib.

[python-netcdf4]: https://unidata.github.io/netcdf4-python/
[iceplotlib]: https://github.com/juseg/iceplotlib
[cartopy]: https://scitools.org.uk/cartopy/
[pandas]: https://pandas.pydata.org
[dask]: https://docs.dask.org
[xarray]: https://xarray.pydata.org

Fast-forward to late 2019, as I was looking for a new academic position, a
new library building upon these tools imposed itself as the evident technical
ground for future research work. However, science proposals for that work were
rejected, and I abandoned the idea again for several months. It is only in
early 2021, as new openings fueled once more my hopes to get back to research,
and to perhaps rejoin academia, that I decided to get going anyway, and to
develop [hyoga] even without funding, as a hobby. Hyoga's first version (v0.1)
was finally released on March 1st, 2021, exactly a year after my last,
pre-pandemic, position ended.

### Passing the baton

Today, my motivations to continue development work on [hyoga] have changed. As
I see my chance to remain in academia on the long run diminish, I have decided
to face the underlying fear that all the methodological work that I've done may
be lost. A fear which, paradoxically, also prevents me from fully leaving
research work and moving on to new things. While my research results have been
published in [academic journals](/research-papers/), I've arguably done
comparatively little so far to ensure their reproducibility, and their
applicability to other regions. Hyoga is thus my attempt to leave more than a
few obscure articles (and undocumented code) to the younger generation of
scientific programmers.

**Warning:**
hyoga is being developed slowly, on an entirely voluntary basis, and comes with
absolutely no warranty. As you could read above, so far all my attempts to get
(research) funds have failed. It's actually worse: I have not even received
feedback on any of my proposals. Suggestions would be greatly appreciated.
{: .notice--warning}


## Using hyoga

### Installation

Hyoga works as a thin wrapper around the very powerful Python package [xarray].
So far, the library has only been tested on output files from the Parallel Ice
Sheet Model ([PISM]). However, the code follows Climate and Forecast ([CF])
conventions, so that it should in principle work with any CF-compliant ice
sheet models. Starting with the next version (v0.2), this functionality will be
assured by the separate package [cf_xarray].

[CF]: http://cfconventions.org
[cf_xarray]: https://cf-xarray.readthedocs.io

While hyoga's plotting capabilities are still limited, getting started with it
should be relatively straightforward. Hyoga is on [PyPI] and I recommend
to install it via:

[PyPI]: https://pypi.org/project/hyoga/

```
pip install hyoga
```

The latest development source code is also available on [Github], where I
invite you to please report bugs and potentially missing dependencies.

[Github]: https://github.com/juseg/hyoga

### Getting started

Given a two-dimensional netCDF filename following the CF conventions and
containing, in this case, ice thickness and ice surface altitude variables,
plotting model output data should be as as easy as:

```python
import hyoga
import xarray as xr

# open data file
with xr.open_dataset('filename.nc') as ds:
    ds = ds.hyoga.where_thicker(1)

    # plot model output
    ds.hyoga.plot.bedrock_altitude(vmin=0, vmax=4500)
    ds.hyoga.plot.ice_margin(facecolor='tab:blue')
```

Many more plotting methods are available. To learn more about them, please take
a look at the online documentation and particularly the matplotlib-style
examples [gallery].

[gallery]: https://hyoga.readthedocs.io/en/latest/examples/index.html

### Plotting interpolated results

One currently available functionality of hyoga is to interpolate
two-dimensional ice-sheet model results onto a higher resolution topography.
This follows the method I have used to produce detailed animations of
[Alpine paleoglaciers](/alpine-ice-sheet/) for museums and education, such as
the one included above. Once again, I invite you to take a look at the
relevant examples in the [gallery] if interested about this functionality.

**Tip:**
assign bedrock uplift first so that it is corrected for during interpolation.
{: .notice--info}

{% include figure.html
   src="https://hyoga.readthedocs.io/en/latest/_images/sphx_glr_plot_interpolated_resolutions_001.png"
   caption="Interpolation of model results on topographies with increasing resolution." %}
