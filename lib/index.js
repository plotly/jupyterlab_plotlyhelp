Object.defineProperty(exports, "__esModule", { value: true });
const ILayoutRestorer = require('@jupyterlab/application').ILayoutRestorer;
const IMainMenu = require('@jupyterlab/mainmenu').IMainMenu;
const ICommandPalette = require('@jupyterlab/apputils').ICommandPalette;

const plugin = {
    id: 'jupyterlab_plotlyhelp',
    autoStart: true,
    requires: [IMainMenu, ICommandPalette, ILayoutRestorer],
    activate: function(app, mainMenu, palette, restorer) {
        const helpMenu = mainMenu.helpMenu;

        const group = [
            { command: 'help:open', args: {text: 'plotly.py', url: 'https://plot.ly/python/'}},
            { command: 'help:open', args: {text: 'plotly.py Full Reference', url: 'https://plot.ly/python/reference/'}}
        ];
        mainMenu.helpMenu.addGroup(group, 10);

        console.log('JupyterLab extension jupyterlab_plotlyhelp is activated!');
        console.log(app.commands);
    }
};

// module.exports = [plugin];
exports.default = plugin;