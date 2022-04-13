# Installation

```bash
npm i node-pdf-ocr
```

Install Tesseract from [GitHub](https://tesseract-ocr.github.io/tessdoc/Downloads.html)

Install Ghostscript from [GitHub](https://github.com/ArtifexSoftware/ghostpdl-downloads/releases)

Edit .env file and set the following variables:

```env
TESSERACT_PATH = /path/to/tesseract/tessdata
GHOSTSCRIPT_PATH = /path/to/ghostscript
```

Note: You may remove GHOSTSCRIPT_PATH if you have installed Ghostscript on your system and added it to PATH.

# Usage

```js
require('dotenv').config();                           // To load executable paths from .env file
const PdfOcr = require('node-pdf-ocr');

PdfOcr('/path/to/pdf/file.pdf')
  .then((text) => console.log(text))
  .catch((err) => console.error(err));
```

# License

MIT License

### Made by [JAGUARAVI](https://github.com/JAGUARAVI)