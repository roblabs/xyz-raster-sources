[<img src="https://avatars.githubusercontent.com/u/118112" style="border-radius:4px" width="20" />](https://roblabs.com)
[![GitHub Repo Source](https://img.shields.io/github/stars/roblabs/xyz-raster-sources?label=Source&style=social)](https://github.com/roblabs/xyz-raster-sources)
![GitHub](https://img.shields.io/github/license/roblabs/xyz-raster-sources)

## Raster Tiles

A collection of `xyz` raster tiles for use in maps built for mobile devices, QGIS and Mapbox Styles.  This repo gives sample URLs to various raster `xyz` sources (Some free with attribution, some available with a token key).

Created by [RobLabs.com](https://roblabs.com) in Summer 2020 for use in production of our [#mapsForNonProfits](twitter.com/hashtag/mapsForNonProfits).


| Service Name | `xyz` <br> and Usage Notes |
| :-------------  | :------------- |
| `openstreetmap` <br> ![](https://tile.openstreetmap.org/9/89/206.png) | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` <br><br> [tile usage policy](https://operations.osmfoundation.org/policies/tiles/) |
| `naturalearthtiles` <br><br> ![](https://naturalearthtiles.roblabs.com/tiles/natural_earth_2.raster/2/0/1.png) | `https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png` <br><br> [Developed by Lukas Martinelli](https://github.com/lukasmartinelli/naturalearthtiles#license)<br>`"maxzoom": 6` |
| `mapbox-satellite-v9`   <br> ![](https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/9/89/206?access_token=pk.eyJ1Ijoicm9ibGFicyIsImEiOiJwVlg0cnZnIn0.yhekddtKwZohGoORaWjqIw)   | `https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=MAPBOX_TOKEN_HERE` <br><br> [LEGAL](https://www.mapbox.com/legal/tos/) |
| `maptiler-hybrid`   <br> ![](https://api.maptiler.com/maps/hybrid/256/9/89/206.jpg?key=BXYgFRiYbzi5zO17YRpY)   | `https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}@2x.jpg?key=MAPTILER_TOKEN_HERE` <br><br> [MapTiler](https://www.maptiler.com/copyright/) |
| `statmen-watercolor`   <br> ![](https://stamen-tiles.a.ssl.fastly.net/watercolor/9/89/206.jpg)   | `https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg` <br><br> [How to Use These Tiles Elsewhere](http://maps.stamen.com/#watercolor/11/32.7134/-117.2059) |
| `statmen-terrain`   <br> ![](https://stamen-tiles.a.ssl.fastly.net/terrain/9/89/206.jpg)   | `https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg` <br><br> [How to Use These Tiles Elsewhere](http://maps.stamen.com/#terrain/11/32.7134/-117.2059) |
| `statmen-toner`   <br> ![](https://stamen-tiles.a.ssl.fastly.net/toner/9/89/206.png)   | `https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png` <br><br>  [How to Use These Tiles Elsewhere](http://maps.stamen.com/#toner/11/32.7134/-117.2059) |
| `arcgis-world-imagery-ZYX`   <br> ![](https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/9/206/89)   | `https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}` <br><br>  Note order is `ZYX`.  Data is `jpeg`, but there is no extension in the template URL.  `maxzoom = 17` <br><br> <a target='_blank' href='https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'>Source: Esri, Maxar, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community</a> |
| `NAIP-USDA_CONUS_PRIME-ZYX` (updated 2022)   <br> ![](https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/9/206/89)   | `https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/{z}/{y}/{x}` <br><br>  Note order is `ZYX`.  Data is `jpeg`, but there is no extension in the template URL.  `maxzoom = 17` <br><br> <a target='_blank' href='https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer'>Source: USDA NAIP</a> |
| `PortlandMaps.com`   <br> ![](https://user-images.githubusercontent.com/118112/161826591-7519f5bd-1434-447f-b47b-709cb45431ed.gif)   | `https://www.portlandmaps.com/arcgis/rest/services/Public/Aerial_Photos_Summer_2021/MapServer/tile/{z}/{y}/{x}` <br><br>  Note order is `ZYX`.  Data is `jpeg`, but there is no extension in the template URL.  <br><br> <a target='_blank' href='https://www.portlandmaps.com/arcgis/rest/services/Public'>Source: @PortlandGov, © City of Portland, Oregon</a> |

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

## Use in a Mapbox Style

Tiles for use in Mapbox GL or Mapbox GL Native for mobile, can easily be configured.  See the Mapbox [documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster) on details for how to add raster tiles to your Mapbox style.

### Mapbox Styles hosted as `https`

There are Mapbox styles for some of the XYZ rasters.  See the full list at [roblabs/xyz-raster-sources/styles](https://github.com/roblabs/xyz-raster-sources/tree/master/styles), or you can use these hosted styles in your application.

* https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/naturalearthtiles.json
* https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/arcgis-world-imagery.json
* https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/mapbox-satellite.json
* https://raw.githubusercontent.com/roblabs/xyz-raster-sources/master/styles/stamen-multi-rasters.json

*Example of XYZ rasters in iOS*

<img src="https://user-images.githubusercontent.com/118112/135372760-578dfe9a-4688-4fb1-a69f-58f05de34225.gif" width=50%>

### Soft Proofing Tiles

You can Soft Proof your tiles before they are installed into mobile by using [Tileserver GL](https://github.com/maptiler/tileserver-gl#readme).  See the file


```
alias tsgl='docker run --rm -it -v "$(pwd)":/data -p 8081:80 maptiler/tileserver-gl --no-cors --verbose'
```

---

## Use in QGIS

This tiles can easily be pulled into QGIS.

From the QGIS [documentation](https://docs.qgis.org/3.10/en/docs/user_manual/managing_data_source/opening_data.html#using-xyz-tile-services) site:  

> You can add other services that use the XYZ Tile protocol by choosing New Connection in the XYZ Tiles context menu (right-click to open).

![](https://docs.qgis.org/3.10/en/_images/xyz_tiles_dialog_osm.png)
