# image-thumbnailer-b64

Convert an image into base64, PNG-format thumbnail data for display in HTML, e.g. here is a string encoding a little [red dot](https://en.wikipedia.org/wiki/Data_URI_scheme#HTML):
```html
<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA
AAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO
9TXL0Y4OHwAAAABJRU5ErkJggg==" alt="Red dot" />
```

## Setup
Install [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) with the following options:
- Add application directory to your system path, and
- Install legacy utilities (e.g. convert).

Install [node.js](https://nodejs.org/en/download/).

## Run
Optionally set your desired tumbnail size in [image2b64.js](https://github.com/cblanks/image-thumbnailer-b64/blob/master/image2b64.js):
```javascript
var thumbSize = 56, // pixels
```

```
$ node image2b64.js /path/to/your/image.ext
```
