This is the repository for *French Silver in the J. Paul Getty Museum*, by Charissa Bremer-David. This digital book was first published April 12, 2023, by the J. Paul Getty Museum. It is available online at https://www.getty.edu/publications/french-silver/ and may be downloaded there free of charge in multiple formats.

## About the Book

The collection of seventeenth- and eighteenth-century French silver at the J. Paul Getty Museum is of extraordinary quality and state of preservation. Each piece is remarkable for its beauty, inventive form, skillful execution, illustrious provenance, and the renown of its maker. Never having been the subject of a cohesive study, this catalogue is the first to thoroughly explore these exquisite objects with over two hundred fifty color photographs, bringing into focus miniscule makers’ marks, inscriptions, and heraldic armorials.

The publication begins with an essay that details the formation of the Museum’s collection of French silver, several pieces of which were selected by Mr. Getty himself, and continues with notes to the reader concerning the regulations of the historic Parisian guild of gold- and silversmiths that set quality controls and consumer protections. The ten catalogue entries cover a total of thirty-three pieces along with comprehensive descriptions, provenance and exhibition histories, and technical information. The related commentaries shed light on the function of these objects and the roles they played in the daily lives of their prosperous owners. The catalogue includes maker biographies and a full bibliography.

## Using this Repository

This is one in series of multiformat publications using [Quire](http://quire.getty.edu)™, Getty’s multiformat publishing tool. 

We are dedicated to maintaining this publication for years to come at the permanent URL, https://www.getty.edu/publications/french-silver/, and in its various formats and incarnations. For any updates to the book, we will be following something between an app and traditional book publication model. Updates will only be made in regulated chunks as formal revisions and new editions and will always be thoroughly documented here in the repository, as well as in the revision history included with each of the book’s many formats.

The primary content pieces of the book can be found in the `content` directory. The `main` branch represents the current, published edition at all times, and the `revisions` branch, when present, will show changes currently under consideration. We invite you to submit suggestions or corrections via pull request on the revisions branch, by posting an issue, or by emailing us at [pubsinfo@getty.edu](mailto:pubsinfo@getty.edu).


## Development Notes

This project was last built with the following software versions:

- Node 20.18.1
- Quire CLI 1.0.0-rc.25

### Branches

| branch | about |
| --- | --- |
| `main` | The primary branch. Currently the same as `prototype`. |
| `prototype` | An early prototype of the catalogue using the Hugo version of Quire. |
| `forthcoming` | A static placeholder page that is displayed at the book’s final URL on getty.edu prior to publication |
| `first-pages`, `second-pages`, `final-pages`| 11ty versions of the project at various stages. All working branches should be made off of these. |

### Figure Images Submodule

Figure images for *French Silver* are kept in a separate, private repository, https://github.com/thegetty/french-silver-images/, which is linked to this main publication repository as a submodule in `content/_assets/images/figures/`. When cloning this repo for further development, you’ll permissions for the private repository and will need to clone recursively in order to clone both the main repo and the submodule.

```
git clone --recursive https://github.com/thegetty/french-silver.git
```

### Previewing the Online Edition Locally

1. Install Node.js 18.16.0 and verify with with `node --version`

2. Install the Quire CLI with `npm install -g @thegetty/quire-cli@1.0.0-rc.10`

3. Clone this repository and select the appropriate branch

4. Run `npm install` to install the project dependencies (this just needs to be done once when first cloning the project, or whenever the core template/code files are updated)

5. Change the `url` in `content/_data/publication.yaml` to `http://localhost:8080/`

6. See the preview with `quire preview`

## Creating a PDF Version

1. Temporarily switch `url` in publication.yaml to `url: 'http://localhost:8080'`

2. Run `quire build`

3. With PrinceXML 15.3 installed, run `quire pdf --lib prince`

### Customizations

**_includes/components/figure/image/html.js**
Added back in Annotations UI on inline figures

**_includes/components/head.js**
Changed location and file type of favicon.

**_includes/components/license-icons.js**
Exclude SVG icons from EPUB output

**_includes/components/navigation.js**
Include current page name instead of homepage link in center nav.
Add missing `<span class="nav-label">` for hiding elements on mobile.

**_includes/components/analytics.js**
**_includes/components/head.js**
**_layouts/base.11ty.js**
Updated snippets for Google Analytics 4

**_layouts/cover.liquid**
Changed the main title to come from {{ publication.cover_title }}, which includes some HTML markup to tag key words in the title to display larger.

**_plugins/shortcodes/contributors.js**
Fixed logic on creation of contribuor `id` to avoid retunring undefines.

**_plugins/shortcodes/figureGroup.js**
Output simple group of figures rather than in rows.

**_plugins/transforms/outputs/pdf/transform.js**
Fix external links in PDF output

**content/_assets/styles/epub.scss**
Replace all default EPUB styles

## License

© 2023 J. Paul Getty Trust

Unless otherwise indicated, this work is licensed under a <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="license">Creative Commons Attribution-NonCommercial 4.0 International License</a>.