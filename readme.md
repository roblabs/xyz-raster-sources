<!--
// https://jekyllrb.com/docs/configuration/environments/
jekyll.environment: development
jekyll.version: 3.9.3

TEST

* [index.md](https://RobLabs.com/xyz)
* [index.md](https://RobLabs.com/xyz-raster-sources)
* [readme.md](https://github.com/roblabs/xyz-raster-sources)

 -->

  <p><a href="https://roblabs.com"><img src="https://avatars.githubusercontent.com/u/118112" style="border-radius:4px" width="20" /></a>
<a href="https://github.com/roblabs/xyz-raster-sources"><img src="https://img.shields.io/github/stars/roblabs/xyz-raster-sources?label=Source&amp;style=social" alt="GitHub Repo Source" /></a>
<img src="https://img.shields.io/github/license/roblabs/xyz-raster-sources" alt="GitHub" /></p>

  <h2 id="xyz-raster-tiles-sources">XYZ Raster Tiles Sources</h2>

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
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://tile.openstreetmap.org/{z}/{x}/{y}.png</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/openstreetmap.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/openstreetmap.json</a> <br /> Usage &amp; License: <a href="https://operations.osmfoundation.org/policies/tiles/" target="_blank">OpenStreetMap</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Natural Earth Tiles" src="https://naturalearthtiles.roblabs.com/tiles/natural_earth_2.raster/2/0/1.png" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://naturalearthtiles.roblabs.com/tiles/natural_earth_cross_blended_hypso_shaded_relief.raster/{z}/{x}/{y}.png</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/naturalearthtiles.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/naturalearthtiles.json</a> <br /> Usage &amp; License: <a href="https://github.com/lukasmartinelli/naturalearthtiles#license" target="_blank">Natural Earth Tiles</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Stamen watercolor" src="https://stamen-tiles.a.ssl.fastly.net/watercolor/9/89/206.jpg" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json</a> <br /> Usage &amp; License: <a href="http://maps.stamen.com/#watercolor/11/32.7134/-117.2059" target="_blank">Stamen watercolor</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Stamen terrain" src="https://stamen-tiles.a.ssl.fastly.net/terrain/9/89/206.jpg" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json</a> <br /> Usage &amp; License: <a href="http://maps.stamen.com/#terrain/11/32.7134/-117.2059" target="_blank">Stamen terrain</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="Stamen toner" src="https://stamen-tiles.a.ssl.fastly.net/toner/9/89/206.png" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/stamen-multi-rasters.json</a> <br /> Usage &amp; License: <a href="http://maps.stamen.com/#toner/11/32.7134/-117.2059" target="_blank">Stamen toner</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="ArcGIS World Imagery" src="https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/9/206/89" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/arcgis-world-imagery.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/arcgis-world-imagery.json</a> <br /> Usage &amp; License: <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer" target="_blank">ArcGIS World Imagery</a></td>
      </tr>
      <tr>
        <td style="text-align: left"><br /><img width="128px" alt="USDA NAIP" src="https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/9/206/89" /></td>
        <td style="text-align: left"><code class="language-plaintext highlighter-rouge">https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer/tile/{z}/{y}/{x}</code> <br /> Style:  <a href="https://roblabs.com/xyz-raster-sources/styles/usda-naip.json" target="_blank">https://roblabs.com/xyz-raster-sources/styles/usda-naip.json</a> <br /> Usage &amp; License: <a href="https://gis.apfo.usda.gov/arcgis/rest/services/NAIP/USDA_CONUS_PRIME/ImageServer" target="_blank">USDA NAIP</a></td>
      </tr>
    </tbody>
  </table>

  <hr />

  <h2 id="mapbox-or-maplibre-style">Mapbox or MapLibre Style</h2>

  <p>Tiles for use in Mapbox or MapLibre for mobile or web applications, can easily be configured.  See the <a href="styles" target="blank">styles</a> directory for sample style JSON.  These styles follow the <a href="https://github.com/mapbox/tilejson-spec/tree/master/3.0.0">TileJSON <code class="language-plaintext highlighter-rouge">v3.0.0</code></a> specification.</p>

  <p>You can also find several styles hosted by MapLibre.org.  See <a href="https://github.com/maplibre/demotiles">https://github.com/maplibre/demotiles</a>.</p>

  <p>See the Mapbox <a href="https://docs.mapbox.com/mapbox-gl-js/style-spec/sources/#raster">documentation</a> or MapLibre <a href="https://maplibre.org/maplibre-gl-js-docs/example/map-tiles/">documentation</a> on details for how to add raster tiles to your style.</p>

  <hr />

  <h2 id="tilejsonio">TileJSON.io</h2>

  <p><a href="https://www.azavea.com/blog/2019/03/04/introducing-tilejson-io">https://www.azavea.com/blog/2019/03/04/introducing-tilejson-io</a></p>

  <hr />

  <h2 id="codepen">CodePen</h2>

  <p>See examples of several <code class="language-plaintext highlighter-rouge">style.json</code> in <a href="https://codepen.io/roblabs/pen/JjXXMLz">CodePen.io</a>.</p>

  <hr />

  <h2 id="geojsonio">GeoJSON.io</h2>

  <blockquote>
    <p><em>geojson.io is a quick, simple tool for creating, viewing, and sharing maps.</em></p>
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

  <h2 id="qgis">QGIS</h2>

  <p>These tiles can easily be pulled into QGIS.  From the QGIS <a href="https://docs.qgis.org/3.10/en/docs/user_manual/managing_data_source/opening_data.html#using-xyz-tile-services">documentation</a> site:</p>

  <blockquote>
    <p>You can add other services that use the XYZ Tile protocol by choosing New Connection in the XYZ Tiles context menu (right-click to open).</p>
  </blockquote>

  <p><img src="https://docs.qgis.org/3.10/en/_images/xyz_tiles_dialog_osm.png" alt="" /></p>

  <hr />

  <h3 id="tileserver-gl">TileServer GL</h3>

  <p>You can inspect <em>“Vector and raster maps with GL styles”</em> before they are installed onto production or  mobile by using <a href="https://maptiler-tileserver.readthedocs.io">TileServer GL</a>.</p>

  <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c"># Create a short alias for TileServer GL</span>
<span class="nb">alias </span><span class="nv">tsgl</span><span class="o">=</span><span class="s2">"docker run --rm -it -v </span><span class="si">$(</span><span class="nb">pwd</span><span class="si">)</span><span class="s2">:/data -p 8080:8080 maptiler/tileserver-gl"</span>
tsgl <span class="nt">-v</span>
tsgl <span class="nt">-h</span>
</code></pre></div>  </div>
  <hr />

  <h3 id="mapkit-with-tileoverlay">MapKit with <code class="language-plaintext highlighter-rouge">TileOverlay</code></h3>

  <h4 id="swift">Swift</h4>

  <p>See the details for iOS &amp; tvOS at <a href="https://developer.apple.com/documentation/mapkit/mktileoverlay">https://developer.apple.com/documentation/mapkit/mktileoverlay</a>.</p>

  <div class="language-swift highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c1">// coordinate the loading and management of the tiles</span>
<span class="c1">// https://developer.apple.com/documentation/mapkit/mktileoverlay</span>
<span class="k">let</span> <span class="nv">urlTemplate</span> <span class="o">=</span> <span class="s">"https://tile.openstreetmap.org/{z}/{x}/{y}.png"</span>
<span class="k">let</span> <span class="nv">overlay</span> <span class="o">=</span> <span class="kt">MKTileOverlay</span><span class="p">(</span><span class="nv">urlTemplate</span><span class="p">:</span> <span class="n">urlTemplate</span><span class="p">)</span>
<span class="n">overlay</span><span class="o">.</span><span class="n">canReplaceMapContent</span> <span class="o">=</span> <span class="kc">true</span>
<span class="n">overlay</span><span class="o">.</span><span class="n">minimumZ</span> <span class="o">=</span> <span class="mi">8</span>
<span class="n">overlay</span><span class="o">.</span><span class="n">maximumZ</span> <span class="o">=</span> <span class="mi">19</span>
<span class="n">overlay</span><span class="o">.</span><span class="n">tileSize</span> <span class="o">=</span> <span class="kt">CGSize</span><span class="p">(</span><span class="nv">width</span><span class="p">:</span> <span class="mi">256</span><span class="p">,</span> <span class="nv">height</span><span class="p">:</span> <span class="mi">256</span><span class="p">)</span>

<span class="c1">// handle the actual drawing of the tiles on the map</span>
<span class="c1">// https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer</span>
<span class="kd">func</span> <span class="nf">mapView</span><span class="p">(</span><span class="n">_</span> <span class="nv">mapView</span><span class="p">:</span> <span class="kt">MKMapView</span><span class="p">,</span> <span class="n">rendererFor</span> <span class="nv">overlay</span><span class="p">:</span> <span class="kt">MKOverlay</span><span class="p">)</span> <span class="o">-&gt;</span> <span class="kt">MKOverlayRenderer</span> <span class="p">{</span>
    <span class="k">if</span> <span class="n">overlay</span> <span class="k">is</span> <span class="kt">MKTileOverlay</span> <span class="p">{</span>
        <span class="k">let</span> <span class="nv">renderer</span> <span class="o">=</span> <span class="kt">MKTileOverlayRenderer</span><span class="p">(</span><span class="nv">overlay</span><span class="p">:</span><span class="n">overlay</span><span class="p">)</span>
        <span class="k">return</span> <span class="n">renderer</span>
    <span class="p">}</span>
    <span class="k">return</span> <span class="kt">MKTileOverlayRenderer</span><span class="p">(</span><span class="nv">tileOverlay</span><span class="p">:</span> <span class="n">overlay</span> <span class="k">as!</span> <span class="kt">MKTileOverlay</span><span class="p">)</span>
<span class="p">}</span>
</code></pre></div>  </div>

  <h4 id="javascript">JavaScript</h4>

  <p>See the details for MapKit JS: <a href="https://developer.apple.com/documentation/mapkitjs/tileoverlay">https://developer.apple.com/documentation/mapkitjs/tileoverlay</a></p>

  <p>See a live demo of MapKit JS with an OpenStreetMap tile overlay: <a href="https://roblabs.com/projects/mapkitjs/Tile-Overlay">https://roblabs.com/projects/mapkitjs/Tile-Overlay</a>.</p>

  <div class="language-javascript highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kd">var</span> <span class="nx">map</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">mapkit</span><span class="p">.</span><span class="nb">Map</span><span class="p">(</span><span class="dl">"</span><span class="s2">map</span><span class="dl">"</span><span class="p">);</span>

<span class="c1">// https://developer.apple.com/documentation/mapkitjs/mapkit/tileoverlay/2974035-mapkit_tileoverlay</span>
<span class="kd">const</span> <span class="nx">openstreetmap</span> <span class="o">=</span> <span class="dl">"</span><span class="s2">https://tile.openstreetmap.org/{z}/{x}/{y}.png</span><span class="dl">"</span>
<span class="kd">var</span> <span class="nx">customOverlay</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">mapkit</span><span class="p">.</span><span class="nx">TileOverlay</span><span class="p">(</span><span class="nx">openstreetmap</span><span class="p">);</span>

<span class="c1">// https://developer.apple.com/documentation/mapkitjs/tileoverlayconstructoroptions</span>
<span class="nx">customOverlay</span><span class="p">.</span><span class="nx">minimumZ</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span>
<span class="nx">customOverlay</span><span class="p">.</span><span class="nx">maximumZ</span> <span class="o">=</span> <span class="mi">16</span><span class="p">;</span>
<span class="nx">customOverlay</span><span class="p">.</span><span class="nx">opacity</span> <span class="o">=</span> <span class="mf">1.0</span><span class="p">;</span>
<span class="nx">customOverlay</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="p">{</span>
    <span class="na">lang</span><span class="p">:</span> <span class="nx">mapkit</span><span class="p">.</span><span class="nx">language</span>
<span class="p">};</span>
<span class="nx">map</span><span class="p">.</span><span class="nx">addTileOverlay</span><span class="p">(</span><span class="nx">customOverlay</span><span class="p">);</span>
</code></pre></div>  </div>

  <hr />

  <p><em>Example of XYZ rasters in iOS</em></p>

  <p><img src="https://user-images.githubusercontent.com/118112/135372760-578dfe9a-4688-4fb1-a69f-58f05de34225.gif" width="31.8%" /></p>

</div>
