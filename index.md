---
# file:  index.md
---

[<img src="https://avatars.githubusercontent.com/u/118112" style="border-radius:4px" width="20" />](https://roblabs.com)
[![GitHub Repo Source](https://img.shields.io/github/stars/{{ site.repository }}?label=Source&style=social)](https://github.com/{{ site.repository }})
![GitHub](https://img.shields.io/github/license/{{ site.repository }})

## XYZ Raster Tiles

A collection of `xyz` raster tiles for use in maps built for mobile devices, QGIS and MapLibre Styles.  This repo gives sample URLs to various raster `xyz` sources.

Created by [RobLabs.com](https://roblabs.com) in Summer 2020 for use in production of our [#mapsForNonProfits](https://twitter.com/hashtag/mapsForNonProfits).

---

| Sample Tile <img width=150/> | XYZ — selecting the XYZ URL will copy <img width=200/> |
| :-------------  | :------------- |{% for source in site.data.sources %}
| <br><img width="128px" alt="{{ source.name }}" src="{{ source.sample }}"> | <input style="width: 250%" onclick="this.select(); document.execCommand('copy');" type='text' value='{{ source.xyz }}'/> <br> [{{ source.name }}]({{ source.usage }}) | {% endfor %}

---

## CodePen

See examples of several `style.json` in [CodePen.io](https://codepen.io/roblabs/pen/JjXXMLz).

## Use in geojson.io

> *[geojson.io](https://geojson.io) is a quick, simple tool for creating, viewing, and sharing maps.*

You can use [geojson.io](https://geojson.io) to add in `xyz` raster tiles:

* Hover over `Meta` > `Add map layer`
  * You will prompted for a `Layer URL`, you can add in one of the `xyz` layers from above
  * Add in a `Layer name`
  * You can toggle layers via the checkboxes in the lower right hand corner

![geojson.io](https://user-images.githubusercontent.com/118112/89742168-624ffb80-da4c-11ea-9a9f-8a8e6ce786b0.gif)

---   

## Use in a Mapbox or MapLibre Style

Tiles for use in Mapbox GL or Mapbox GL Native for mobile, can easily be configured.  See the Mapbox [documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster) or MapLibre [documentation](https://maplibre.org/maplibre-gl-js-docs/example/map-tiles/) on details for how to add raster tiles to your style.

### Mapbox Styles hosted as `https`

You can also find several styles hosted by MapLibre.org.  See <https://github.com/maplibre/demotiles>.

| style.json — selecting the style URL will copy <img width=200/> |
| :-- |{% for data in site.data.styles %}
| <input style="width: 150%" onclick="this.select(); document.execCommand('copy');" type='text' value='{{ data.style }}'/> | {% endfor %}

---

*Example of XYZ rasters in iOS*

<img src="https://user-images.githubusercontent.com/118112/135372760-578dfe9a-4688-4fb1-a69f-58f05de34225.gif" width="256px%">

### TileServer GL

You can inspect *"Vector and raster maps with GL styles"* before they are installed onto production or  mobile by using [TileServer GL](https://maptiler-tileserver.readthedocs.io).


```bash
# Create a short alias for TileServer GL
alias tsgl="docker run --rm -it -v $(pwd):/data -p 8080:8080 maptiler/tileserver-gl"
tsgl -v
tsgl -h
```

---

## Use in TileJSON.io

<https://www.azavea.com/blog/2019/03/04/introducing-tilejson-io>

---

## Use in QGIS

This tiles can easily be pulled into QGIS.

From the QGIS [documentation](https://docs.qgis.org/3.10/en/docs/user_manual/managing_data_source/opening_data.html#using-xyz-tile-services) site:  

> You can add other services that use the XYZ Tile protocol by choosing New Connection in the XYZ Tiles context menu (right-click to open).

![](https://docs.qgis.org/3.10/en/_images/xyz_tiles_dialog_osm.png)

