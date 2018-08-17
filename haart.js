const crypto = require('crypto')
const fs = require('fs')
const path = require('path')
const ArgumentParser = require('argparse').ArgumentParser

var parser = new ArgumentParser({
	version: "0.0.0",
	addHelp: true,
	description: "Haart: pretty-printing for checksums inspired by RSA-keygen randomart"
})

parser.addArgument(
	['-i', '--input'],
	{
		help: 'Input file to generate Haart for.'
	}
)

parser.addArgument(
	['-o', '--output'],
	{
		help: 'Output file, specifiy format with -f, --format'
	}
)

parser.addArgument(
	['-f', '--format'],
	{
		help: 'Format of output file. Options: html, sh, ascii. Default: ascii'
	}
)

var args = parser.parseArgs()
console.log(args)

console.log("Haart: Pretty-printing for checksums")
if ( args.input != null )
{
	let filePath = path.join(__dirname, args.input)
	
	if ( args.format == "html" )
	{
		var end = "</b>"
		var red = '<b class="red">'
		var green = '<b class="green">'
		var blue = '<b class="blue">'
		var background = '<b class="background">'
		var prefix = '<pre><code>'
		var suffix = "</code></pre> <style> .red{color:#ce5c68;}.blue{color:#5cacce;}.green{color:5cce75;}.background{background:#e6cc38;color:#fff;} </style>"
	} else {
		var end = "\x1b[0m"
		var red = "\x1b[31m"
		var green = "\x1b[32m"
		var blue = "\x1b[36m"
		var background = "\033[43m"
		var prefix = ""
		var suffix = ""
	}

    fs.readFile(filePath, {encoding: 'utf-8'}, ( err, data ) => {
		if ( !err ) {
			var hash = crypto.createHash("md5")
			hash.setEncoding('hex')
			hash.write(data)
			hash.end()
			let result = hash.read()

			let replaceHash = {
				"a": `-`,
				"b": `|`,
				"c": `+`,
				"d": `x`,
				"e": `${red}-${end}`,
				"f": `${red}|${end}`,
				"1": `${red}+${end}`,
				"2": `${red}x${end}`,
				"3": `${green}-${end}`,
				"4": `${green}|${end}`,
				"5": `${green}+${end}`,
				"6": `${green}x${end}`,
				"7": `${blue}-${end}`,
				"8": `${blue}|${end}`,
				"9": `${blue}+${end}`,
				"0": `${blue}x${end}`,
			}
			let hs = []
			console.log(result)
			result = result.split('')
			for ( var item in result )
			{
				hs.push(replaceHash[result[item]])
			}
			// ugly indentation required because this is a raw string
			let template = `
${prefix}
${background}               ${end}
${background} ${end} ${hs[0]} ${hs[1]} ${hs[2]} ${hs[3]} ${hs[4]} ${hs[5]} ${background} ${end}
${background} ${end} ${hs[6]} ${hs[7]} ${hs[8]} ${hs[9]} ${hs[10]} ${hs[11]} ${background} ${end}
${background} ${end} ${hs[12]} ${hs[13]}${background} ha  ${end}${hs[14]} ${hs[15]} ${background} ${end}
${background} ${end} ${hs[16]} ${hs[17]}${background} art ${end}${hs[18]} ${hs[19]} ${background} ${end}
${background} ${end} ${hs[20]} ${hs[21]} ${hs[22]} ${hs[23]} ${hs[24]} ${hs[25]} ${background} ${end}
${background} ${end} ${hs[26]} ${hs[27]} ${hs[28]} ${hs[29]} ${hs[30]} ${hs[31]} ${background} ${end}
${background}               ${end}${suffix}`
			console.log(template)

			if ( args.output != null )
			{
				fs.writeFile(args.output, template, (err) => {
					if ( err ) throw err
					console.log(green + "Haart has been saved to " + args.output + end)
				})
			}
		} else {
			console.log("No such file! Please specify a valid file path.")
		}
	})
}