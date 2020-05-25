// Custom classes
// --------------

// Custom TimeDimension tile layer
// FIXME allow differnt tile path
L.TimeDimension.Layer.Custom = L.TimeDimension.Layer.extend({
    initialize: function(layer, options) {
        L.TimeDimension.Layer.prototype.initialize.call(this, layer, options);
        this._baseLayer.on('load', (function() {
            this._baseLayer.setLoaded(true);
            this.fire('timeload', {
                time: 95000
            });
        }).bind(this));
    },
    //_onNewTimeLoading: function(ev) {
    //    this._baseLayer.show()
    //},
    //isReady: function(time) {
    //    return this._baseLayer.isLoaded();
    //},
    _update: function() {
        var time = map.timeDimension.getCurrentTime();
        var url = 'https://people.ee.ethz.ch/~juliens/_tiles/alpcyc/' + String(time).padStart(6, '0') + '/{z}/{x}/{y}.png';
        this._baseLayer.setUrl(url)
    },
})


// Custon Control using ms as year
L.Control.TimeDimension.Custom = L.Control.TimeDimension.extend({
    _getDisplayDateFormat: function(date){
        return String(120-date.getTime()/1000) + ' ka'
    }
});


// Main program
// ------------

// Initialize Leaflet map object
var map = L.map('icemap', {
    center: [46.13, 10.35],
    zoom: 8,
    minZoom: 6,
    maxZoom: 10,
    maxBounds: [[43.0, 18.0], [49.0, 4.0]],
    fullscreenControl: true,
    timeDimension: true,
    timeDimensionOptions: {
        times: Array.from(new Array(120),(val,idx)=>1000*(idx+1)),
        currentTime: 95000,
    },
});

// Fit data bounds
map.fitBounds([[44.5, 16.5], [47.5, 5.5]]);

// Add Stamen Terrain Bacground
var stb = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 18,
	ext: 'png'
});
stb.addTo(map);

// Prepare fixed-time base layer
// (not sure why this is needed)
var lyr = L.tileLayer('', {
    tms: true,
    opacity: 1.0,
    attribution: 'and <a href="https://doi.org/10.5194/tc-12-3265-2018"> J. Seguinot et al. (2018)</a>',
});
lyr.addTo(map);

// Add TimeDimension layer
var tdl = new L.TimeDimension.Layer.Custom(lyr)
tdl.addTo(map);

// Add custom time control
var ctrl = new L.Control.TimeDimension.Custom({
    playReverseButton: true,
    timeSliderDragUpdate: true,
    limitSliders: true,
    speedSlider: false,
    loopButton: false,
});
ctrl.addTo(map);
