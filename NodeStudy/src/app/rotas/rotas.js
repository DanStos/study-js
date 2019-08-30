const db = require('../../config/database');

module.exports = (app) => {
    app.get ('/', function(req, resp) {
        resp.send(
            `
                <html>
                    <head>
                        <meta charset="utf-8">
                    </head>
                    <body>
                        <h1> Casa do Código </h1>
                    </body> 
                </html>
            `
        );
    });

    app.get ('/livros', function(req, resp) {
        
        db.all('SELECT * FROM livros', function(error, resultados) {
            resp.marko(require('../views/livros/listagem/lista.marko'),
            {
                livros : resultados
            }
            );
        })
    });
}