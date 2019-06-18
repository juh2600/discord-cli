/**
 * If 'debug', then some additional debugging output will be logged.
 * Otherwise, nothing.
 */
process.env.NODE_ENV = 'debug';
package = require('./package.json');

var blessed = require('blessed');
var ui = {};

var layout = {
	inputbar: {
		height: 2
	}
};

ui.screen = blessed.screen();
ui.inputbar = blessed.box({
	bottom:	0,
	left:	'0%',
	width:	'100%',
	height:	layout.inputbar.height,
	content:	'input bar',
	style:	{
		fg: 'white',
		bg: '#803030'
	}
});

ui.screen.append(ui.inputbar);
ui.screen.key(['escape','q','C-c'], function(ch, key) {return process.exit(0);});

ui.inputbar.focus();
ui.screen.render();
module.exports = {
	ui: ui,
	layout: layout
};
