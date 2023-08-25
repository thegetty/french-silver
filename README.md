# french-silver

https://www.getty.edu/publications/french-silver/

| branch | about |
| --- | --- |
| `main` | The primary branch. Currently the same as `prototype`. |
| `prototype` | An early prototype of the catalogue using the Hugo version of Quire. |
| `forthcoming` | A static placeholder page that is displayed at the book’s final URL on getty.edu prior to publication |
| `first-pages`, `second-pages`, `final-pages`| 11ty versions of the project at various stages. All working branches should be made off of these. |

## Previewing the Site

1. Clone this repository and select the appropriate branch.

2. With Quire CLI `1.0.0-rc.5` and Node `18.12.1`, run `quire preview`.

## Using NVM to Manage Different Node Verisons

The full instructions are here: https://github.com/nvm-sh/nvm. But this condensed version should cover the basics.

1. Install the script with the following command:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. Verify with this command, which should return `nvm`. If it does not, see the Troubleshooting info at https://github.com/nvm-sh/nvm#troubleshooting-on-macos.

```
command -v nvm
```

3. Install the versions of node you want to use:

```
nvm install 14.18.1
```

```
nvm install 16.15.0
```

4. Optionally, set a default version to use with `nvm alias default 14.18.1` or `nvm alias default 16.15.0`. This default will be the one used every time you open a new Terminal window.

5. To choose/change a Node version to run use `nvm use 14` or `nvm use 16`. This will be the version used for as long as that Terminal window is open, or until you change it again.

## Creating a PDF Version

While the paged.js work is ongoing, a PDF of *French Silver* should be created with PrinceXML 14.2.

1. Clear the `_epub`, `_site`, and `public` directories and then run `quire build`

2. In `_site/pdf.css` find all instances of `/_assets/fonts/` and replace with `_assets/fonts/`. (Or, prior to running `quire build`, change the value of `$assets-dir` in `content/_assets/styles/fonts.scss`.)

3. Open `_site/index.html`, find the SVG element that has the Creative Commons license icons, and copy and past it right after the opening `<body>` tag in `_site/pdf.html`

7. Run `quire pdf --lib prince`

## Customizations Made to 11ty Templates/Files

**_includes/components/figure/image/html.js**
Added back in Annotations UI on inline figures

**_includes/components/head.js**
Changed location and file type of favicon.

**_includes/components/navigation.js**
Include current page name instead of homepage link in center nav.

**_includes/components/analytics.js**
**_includes/components/head.js**
**_layouts/base.11ty.js**
Updated snippets for Google Analytics 4

**_layouts/cover.liquid**
Changed the main title to come from {{ publication.cover_title }}, which includes some HTML markup to tag key words in the title to display larger.

**content/_assets/styles/components/q-figure.scss**
Adjusted SCSS for classic theme figure styles.

**_plugins/figures/iiif/config.js**
Increased print-image.jpg size and set withoutEnlargement to true

**_plugins/shortcodes/figureGroup.js**
Output simple group of figures rather than in rows.
