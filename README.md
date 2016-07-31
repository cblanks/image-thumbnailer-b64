# image-thumbnailer-b64

Convert an image into base64 thumbnail data for display in HTML, e.g. 
<img src="data:image/png;base64,'base64 string goes here'">

## Setup
Install [ImageMagick](http://www.imagemagick.org/script/binary-releases.php) with the following options:
- Add application directory to your system path
- Install legacy utilities (e.g. convert)

Install [node.js](https://nodejs.org/en/download/).

## Run
```
$ node image2b64.js /path/to/your/image.ext
```

## Use
To quickly test using this output, just copy the output file contents into the Google Chrome address bar, to see an auto-generated <img> tag.
