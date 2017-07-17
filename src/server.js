const path = require('path')
const express = require('express')

module.exports = {
    app: function () {
        const app = express()
        app.use(express.static('public'));
        app.get('*', function (req, res) {
            const index = path.join(__dirname, 'public', 'index.html');
            res.sendFile(index);
        });

        return app
    }
}