Object.defineProperty(exports, "__esModule", { value: true });
const IMainMenu = require('@jupyterlab/mainmenu').IMainMenu;
const ICommandPalette = require('@jupyterlab/apputils').ICommandPalette;

const plugin = {
    id: 'jupyterlab_plotlyhelp',
    autoStart: true,
    requires: [IMainMenu, ICommandPalette],
    activate: function(app, mainMenu, palette) {
        const category = 'Help';

        const group = [
            { command: 'help:open', args: {text: 'Plotly Python Reference', url: 'https://plot.ly/python/'}},
            { command: 'help:open', args: {text: 'Dash User Guide', url: 'https://dash.plot.ly/'}},
            { command: 'help:open', args: {text: 'Plotly Property Reference', url: 'https://plot.ly/python/reference/'}},
            { command: 'help:open', args: {text: 'Plotly R Reference', url: 'https://plot.ly/r/'}},
            { command: 'help:open', args: {text: 'Plotly R Book', url: 'https://plotly-book.cpsievert.me/'}},
        ];
        mainMenu.helpMenu.addGroup(group, 10);

        // Add to command palette
        group.forEach(item => {
            palette.addItem({ args: item.args, command: item.command, category });
        });
    }
};

exports.default = plugin;
