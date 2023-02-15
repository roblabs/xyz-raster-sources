---
# How to:  have a liquid generated index page for GH-Pages, and
#          maintain a static readme page for GitHub.com
# file:  readme.liquid.md
#   1.  Reads in the contents of index.md
#   2.  liquid formatting is applied to index.md
#   3.  Based on the [Front matter defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/)
#       This file is rendered as _site/readme.md
#       see _config.yml
#   4.  Review _site/readme.md , and post it on GitHub as readme.md
#   5.  cp tmp/_site/www/readme.md .
---

{% if jekyll.environment == "development" %}
<div markdown="1">
    {% include_relative index.md %}
</div>
{% endif %}