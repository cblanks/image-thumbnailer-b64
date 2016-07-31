# image-thumbnailer-b64

Convert an image into base64 thumbnail data for display in HTML, e.g. 
```
<img src="data:image/png;base64,'base64 string goes here'">
```

## Setup
Install [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) with the following options:
- Add application directory to your system path, and
- Install legacy utilities (e.g. convert).

Install [node.js](https://nodejs.org/en/download/).

## Run
Optionally set your desired tumbnail size in [image2b64.js](https://github.com/cblanks/image-thumbnailer-b64/blob/master/image2b64.js):
```
var thumbSize = 56, // pixels
```

```
$ node image2b64.js /path/to/your/image.ext
```

## Use
To quickly test using this output, just copy the output file contents into the Google Chrome address bar, to see an auto-generated `<img>` tag.
