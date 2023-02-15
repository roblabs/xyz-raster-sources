
<div>
  <div class="language-plaintext highlighter-rouge"><div class="highlight"><pre class="highlight"><code>---
</code></pre></div>  </div>

  <hr />

  <p><a href="https://roblabs.com"><img src="https://avatars.githubusercontent.com/u/118112" style="border-radius:4px" width="20" /></a>
<a href="https://github.com/roblabs/xyz-raster-sources"><img src="https://img.shields.io/github/stars/roblabs/xyz-raster-sources?label=Source&amp;style=social" alt="GitHub Repo Source" /></a>
<img src="https://img.shields.io/github/license/roblabs/xyz-raster-sources" alt="GitHub" /></p>

  <h2 id="xyz-raster-tiles">XYZ Raster Tiles</h2>

  <p>A collection of <code class="language-plaintext highlighter-rouge">xyz</code> raster tiles for use in maps built for mobile devices, QGIS and MapLibre Styles.  This repo gives sample URLs to various raster <code class="language-plaintext highlighter-rouge">xyz</code> sources.</p>

  <p>Created by <a href="https://roblabs.com">RobLabs.com</a> in Summer 2020 for use in production of our <a href="https://twitter.com/hashtag/mapsForNonProfits">#mapsForNonProfits</a>.</p>

  <hr />

  <table>
    <thead>
      <tr>
        <th style="text-align: left">Sample Tile <img width="150" /></th>
        <th style="text-align: left">XYZ <img width="200" /></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="OpenStreetMap" src="https://tile.openstreetmap.org/9/89/206.png" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://tile.openstreetmap.org/{z}/{x}/{y}.png</code> <br /> <a href="https://operations.osmfoundation.org/policies/tiles/" target="_blank">OpenStreetMap</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Natural Earth Tiles" src="https://naturalearthtiles.roblabs.com/tiles/natural_earth_2.raster/2/0/1.png" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png</code> <br /> <a href="https://github.com/lukasmartinelli/naturalearthtiles#license" target="_blank">Natural Earth Tiles</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Stamen watercolor" src="https://stamen-tiles.a.ssl.fastly.net/watercolor/9/89/206.jpg" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg</code> <br /> <a href="http://maps.stamen.com/#watercolor/11/32.7134/-117.2059" target="_blank">Stamen watercolor</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Stamen terrain" src="https://stamen-tiles.a.ssl.fastly.net/terrain/9/89/206.jpg" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg</code> <br /> <a href="http://maps.stamen.com/#terrain/11/32.7134/-117.2059" target="_blank">Stamen terrain</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Stamen toner" src="https://stamen-tiles.a.ssl.fastly.net/toner/9/89/206.png" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png</code> <br /> <a href="http://maps.stamen.com/#toner/11/32.7134/-117.2059" target="_blank">Stamen toner</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="ArcGIS World Imagery" src="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/9/206/89" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}</code> <br /> <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer" target="_blank">ArcGIS World Imagery</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="USDA NAIP" src="https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/9/206/89" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/{z}/{y}/{x}</code> <br /> <a href="https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer" target="_blank">USDA NAIP</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="PortlandMaps.com" src="https://user-images.githubusercontent.com/118112/161826591-7519f5bd-1434-447f-b47b-709cb45431ed.gif" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://www.portlandmaps.com/arcgis/rest/services/Public/Aerial_Photos_Summer_2021/MapServer/tile/{z}/{y}/{x}</code> <br /> <a href="https://www.portlandmaps.com/arcgis/rest/services/Public" target="_blank">PortlandMaps.com</a></td>
      </tr>
    </tbody>
  </table>

  <h2 id="use-in-a-mapbox-or-maplibre-style">Use in a Mapbox or MapLibre Style</h2>

  <p>Tiles for use in Mapbox GL or Mapbox GL Native for mobile, can easily be configured.  See the Mapbox <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster">documentation</a> or MapLibre <a href="https://maplibre.org/maplibre-gl-js-docs/example/map-tiles/">documentation</a> on details for how to add raster tiles to your style.</p>

  <h3 id="mapbox-styles-hosted-as-https">Mapbox Styles hosted as <code class="language-plaintext highlighter-rouge">https</code></h3>

  <p>You can also find several styles hosted by MapLibre.org.  See <a href="https://github.com/maplibre/demotiles">https://github.com/maplibre/demotiles</a>.</p>

  <table>
    <thead>
      <tr>
        <th style="text-align: left">style.json <img width="200" /></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left"><a href="https://roblabs.com/xyz-raster-sources/styles/arcgis-world-imagery.json">https://roblabs.com/xyz-raster-sources/styles/arcgis-world-imagery.json</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><a href="https://roblabs.com/xyz-raster-sources/styles/naturalearthtiles.json">https://roblabs.com/xyz-raster-sources/styles/naturalearthtiles.json</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><a href="https://roblabs.com/xyz-raster-sources/styles/openstreetmap.json">https://roblabs.com/xyz-raster-sources/styles/openstreetmap.json</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><a href="https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json">https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><a href="https://roblabs.com/xyz-raster-sources/styles/usda-naip.json">https://roblabs.com/xyz-raster-sources/styles/usda-naip.json</a></td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h2 id="codepen">CodePen</h2>

  <p>See examples of several <code class="language-plaintext highlighter-rouge">style.json</code> in <a href="https://codepen.io/roblabs/pen/JjXXMLz">CodePen.io</a>.</p>

  <h2 id="use-in-geojsonio">Use in geojson.io</h2>

  <blockquote>
    <p><em><a href="https://geojson.io">geojson.io</a> is a quick, simple tool for creating, viewing, and sharing maps.</em></p>
  </blockquote>

  <p>You can use <a href="https://geojson.io">geojson.io</a> to add in <code class="language-plaintext highlighter-rouge">xyz</code> raster tiles:</p>

  <ul>
    <li>Hover over <code class="language-plaintext highlighter-rouge">Meta</code> &gt; <code class="language-plaintext highlighter-rouge">Add map layer</code>
      <ul>
        <li>You will prompted for a <code class="language-plaintext highlighter-rouge">Layer URL</code>, you can add in one of the <code class="language-plaintext highlighter-rouge">xyz</code> layers from above</li>
        <li>Add in a <code class="language-plaintext highlighter-rouge">Layer name</code></li>
        <li>You can toggle layers via the checkboxes in the lower right hand corner</li>
      </ul>
    </li>
  </ul>

  <p><img src="https://user-images.githubusercontent.com/118112/89742168-624ffb80-da4c-11ea-9a9f-8a8e6ce786b0.gif" alt="geojson.io" /></p>

  <hr />

  <h3 id="tileserver-gl">TileServer GL</h3>

  <p>You can inspect <em>“Vector and raster maps with GL styles”</em> before they are installed onto production or  mobile by using <a href="https://maptiler-tileserver.readthedocs.io">TileServer GL</a>.</p>

  <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c"># Create a short alias for TileServer GL</span>
<span class="nb">alias </span><span class="nv">tsgl</span><span class="o">=</span><span class="s2">"docker run --rm -it -v </span><span class="si">$(</span><span class="nb">pwd</span><span class="si">)</span><span class="s2">:/data -p 8080:8080 maptiler/tileserver-gl"</span>
tsgl <span class="nt">-v</span>
tsgl <span class="nt">-h</span>
</code></pre></div>  </div>

  <hr />

  <h2 id="use-in-tilejsonio">Use in TileJSON.io</h2>

  <p><a href="https://www.azavea.com/blog/2019/03/04/introducing-tilejson-io">https://www.azavea.com/blog/2019/03/04/introducing-tilejson-io</a></p>

  <hr />

  <h2 id="use-in-qgis">Use in QGIS</h2>

  <p>This tiles can easily be pulled into QGIS.</p>

  <p>From the QGIS <a href="https://docs.qgis.org/3.10/en/docs/user_manual/managing_data_source/opening_data.html#using-xyz-tile-services">documentation</a> site:</p>

  <blockquote>
    <p>You can add other services that use the XYZ Tile protocol by choosing New Connection in the XYZ Tiles context menu (right-click to open).</p>
  </blockquote>

  <p><img src="https://docs.qgis.org/3.10/en/_images/xyz_tiles_dialog_osm.png" alt="" /></p>

  <hr />

  <p><em>Example of XYZ rasters in iOS</em></p>

  <p><img src="https://user-images.githubusercontent.com/118112/135372760-578dfe9a-4688-4fb1-a69f-58f05de34225.gif" width="31.8%" /></p>

</div>
