/*
 * Convert an image into base64 thumbnail data for display in HTML, e.g. 
 * <img src="data:image/png;base64,'base64 string goes here'">
 *
 * To quickly test the output, just copy the output file contents into the 
 * Google Chrome address bar, to see an auto-generated <img> tag.
 *
 * Christopher.Blanks@HPE.com
 */

/*
 * d e p e n d e n c i e s
 */
var child = require('child_process'),
	fs = require('fs'),
	path = require('path'),
	process = require('process');

/*
 * v a r i a b l e s
 */
var thumbSize = 56, // pixels
	outputFile = 'b64str.txt';

/*
 * m a i n
 */
try {
	var imagePath = path.resolve(process.argv[2]);
	
} catch(e) {
	console.log(e);
	process.exit();
}

var pathParts = path.parse(imagePath),
	thumbPath = './'+pathParts.name+'-'+thumbSize.toString()+'.png',
	cmd = 'convert '+imagePath+' -thumbnail '+thumbSize+' '+thumbPath;
 
child.exec(cmd, function(error, stdout, stderr) {
	
	fs.readFile(thumbPath, {encoding: 'base64'}, function(err, base64string) {
		
		fs.writeFileSync(outputFile, 'data:image/png;base64,'+base64string);
	});
});
