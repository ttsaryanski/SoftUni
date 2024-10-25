import handlebars from 'express-handlebars';

export default function handlebarsInit (app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: { eq: function (a, b) { return a === b } }
    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
};