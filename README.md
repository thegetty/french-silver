# french-silver

https://www.getty.edu/publications/french-silver/

| branch | about |
| --- | --- |
| `main` | The primary branch. Currently the same as `prototype`. |
| `prototype` | An early prototype of the catalogue using the Hugo version of Quire. |
| `forthcoming` | A static placeholder page that is displayed at the book’s final URL on getty.edu prior to publication |
| `first-pages`, `second-pages`, `final-pages`| 11ty versions of the project at various stages. All working branches should be made off of these. |

## Using the 11ty Version

1. Clone this repository and select the appropriate branch.

2. In Terminal, make sure you are using Node 16.15.0 or higher, with `node --version`. (See section on NVM below.)

3. Run `npm install` to install the project dependencies. This just needs to be done once when first cloning the project, or whenever the core template/code files are updated.

4. Enter the following command to add the preview URL to your environment variables. This is hopefully temporary, but currently required because of the way IIIF images are set up. Doing so with `export URL=http://localhost:8080` adds it just for the current session. This will need to be repeated each time you close and reopen your command-line shell. Or you can add it to your .bash-profile to make it persist.

```
export URL=http://localhost:8080
```

5. See the preview with `npm run dev`. I find it needs to be stopped and restarted often to get it to refresh changes, especially with YAML.

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

While the paged.js work is ongoing, a PDF of French Silver can be created with PrinceXML on the command line.

1. Comment out `outputs: [pdf, epub]` from both `content/copyright.md` and `content/title-pages.md`, so that these pages will appear online.

2. Run `npm run dev` to see the preview.

3. With the preview running, run this command in another Terminal window.

    ```
    prince http://localhost:8080/ http://localhost:8080/title-pages/ http://localhost:8080/copyright/ http://localhost:8080/contents/ http://localhost:8080/foreword/ http://localhost:8080/acknowledgments/ http://localhost:8080/intro/ http://localhost:8080/reader-note-1/ http://localhost:8080/reader-note-2/ http://localhost:8080/catalogue/ http://localhost:8080/catalogue/1/ http://localhost:8080/catalogue/2/ http://localhost:8080/catalogue/3/ http://localhost:8080/catalogue/4/ http://localhost:8080/catalogue/5/ http://localhost:8080/catalogue/6/ http://localhost:8080/catalogue/7/ http://localhost:8080/catalogue/8/ http://localhost:8080/catalogue/9/ http://localhost:8080/catalogue/10/ http://localhost:8080/makers/ http://localhost:8080/appendix/ http://localhost:8080/bibliography/ http://localhost:8080/authors/ --style=bin/application.css --style=content/_assets/styles/custom.css -o output.pdf
    ```

(Note that `bin/application.css`) is a static output of the SCSS styles in `content/_assets/styles/`. So changes to those files would necessitate manual changes be made to `bin/application.css` to keep them aligned.

First pages was created using Prince 14.2.

## Customizations Made to 11ty Templates/Files

**_layouts/cover.liquid**
Changed the main title to come from {{ publication.cover_title }}, which includes some HTML markup to tag key words in the title to display larger.

**content/_assets/styles/components/q-figure.scss**
Adjusted SCSS for classic theme figure styles.

**_layouts/bibliography.liquid**
Pointed it to layout: essay, rather than layout: page so that it would be two-column in PDF.

**_plugins/shortcodes/figureGroup.js**
Output simple group of figures rather than in rows.
