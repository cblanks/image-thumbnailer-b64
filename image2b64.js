/*
 * Convert an image into base64 PNG-format thumbnail data for display in HTML.
 *
 */

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//  d e p e n d e n c i e s
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
var child = require('child_process'),
	fs = require('fs'),
	path = require('path'),
	process = require('process');

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//  o p t i o n s
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
var thumbSize = 56; // pixels

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//  f u n c t i o n s
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
function validateImagePath() {

	var imagePath = null;
	
	try {
		imagePath = path.resolve(process.argv[2]);
		
	} catch(err) {
		console.log(err);
		process.exit();
	}

	fs.stat(imagePath, function(err, stats) {
		if(err) {
			console.log(err);
			process.exit();
		
		} else {
			console.log('Image stats:');
			console.log(JSON.stringify(stats, null, 2));
		}
	});
	
	return imagePath;
}


function makeTempDir() {

	var tempDir = path.resolve('temp');

	fs.stat(tempDir, function(err, stats) {
		if(err) {
			try{
				fs.mkdir(tempDir);
			} catch(e) {
				console.log(e);
				process.exit();
			}
		}
	});
	
	return tempDir;
}

//- - - - - - - - - - - - - - - - - - - - - - - - - - -
//  m a i n
//- - - - - - - - - - - - - - - - - - - - - - - - - - -
var imagePath = validateImagePath(),
	pathParts = path.parse(imagePath),
	thumbName = pathParts.name+'_'+thumbSize.toString(),
	thumbPath = path.join(
		makeTempDir(),
		thumbName+'.png'
	),
	cmd = 'convert '+imagePath+' -thumbnail '+thumbSize+' '+thumbPath,
	outputFile = path.resolve(thumbName+'.html');
	
child.exec(cmd, function(error, stdout, stderr) {
	
	fs.readFile(thumbPath, {encoding: 'base64'}, function(err, base64string) {
		
		fs.writeFile(
			outputFile, 
			'<html>\n\t<img src="data:image/png;base64,'+base64string+'" alt="'+pathParts.name+'"/>\n</html>'
			
		, function(err) {
			
			if(err) {
				console.log(err);
			
			} else {
				console.log('Open you new image data file in your default web browser with:');
				console.log('start '+thumbName+'.html');
			}
		});
	});
});
