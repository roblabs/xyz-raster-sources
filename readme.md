## Raster Tiles

A collection of `xyz` raster tiles for use in maps built for QGIS and Mapbox Styles.  This repo gives sample URLs to various raster `xyz` sources (Some free with attribution, some available with a token key).


| Service Name | `xyz`    | Usage Notes |
| :------------- | :------------- | |
| `openstreetmap` <br> ![](https://tile.openstreetmap.org/9/89/206.png) | `https://tile.openstreetmap.org/{z}/{x}/{y}.png` | [tile usage policy](https://operations.osmfoundation.org/policies/tiles/) |
| `tileservice-charts-noaa-gov`   <br> ![](https://tileservice.charts.noaa.gov/tiles/50000_1/9/89/206.png)   | `https://tileservice.charts.noaa.gov/tiles/50000_1/{z}/{x}/{y}.png`     | [Legal Disclaimer](https://tileservice.charts.noaa.gov/tileset.html) |
| `mapbox-satellite-v9`   <br> ![](https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/9/89/206?access_token=pk.eyJ1Ijoicm9ibGFicyIsImEiOiJwVlg0cnZnIn0.yhekddtKwZohGoORaWjqIw)   | `(https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles/256/{z}/{x}/{y}@2x?access_token=MAPBOX_TOKEN_HERE)`     | [LEGAL](https://www.mapbox.com/legal/tos/) |
| `maptiler-hybrid`   <br> ![](https://api.maptiler.com/maps/hybrid/256/9/89/206.jpg?key=BXYgFRiYbzi5zO17YRpY)   | `https://api.maptiler.com/maps/hybrid/256/{z}/{x}/{y}@2x.jpg?key=MAPTILER_TOKEN_HERE`     | [MapTiler](https://www.maptiler.com/copyright/) |
| `statmen-watercolor`   <br> ![](https://stamen-tiles.a.ssl.fastly.net/watercolor/9/89/206.jpg)   | `https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg`     | [How to Use These Tiles Elsewhere](http://maps.stamen.com/#watercolor/11/32.7134/-117.2059) |
| `statmen-terrain`   <br> ![](https://stamen-tiles.a.ssl.fastly.net/terrain/9/89/206.jpg)   | `https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg`     | [How to Use These Tiles Elsewhere](http://maps.stamen.com/#terrain/11/32.7134/-117.2059) |
| `statmen-toner`   <br> ![](https://stamen-tiles.a.ssl.fastly.net/toner/9/89/206.png)   | `https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png`     | [How to Use These Tiles Elsewhere](http://maps.stamen.com/#toner/11/32.7134/-117.2059) |

---

## Use in a Mapbox Style

Tiles for use in Mapbox GL or Mapbox GL Native for mobile, can easily be configured.  See the Mapbox [documentation](https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster) on details for how to add raster tiles to your Mapbox style.

#### Soft Proofing Tiles

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
