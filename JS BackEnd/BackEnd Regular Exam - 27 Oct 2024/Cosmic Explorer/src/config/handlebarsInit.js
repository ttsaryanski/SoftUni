import handlebars from 'express-handlebars';

export default function handlebarsInit (app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: { eq: function (a, b) { return a === b }, increment: function (idx) { return parseInt(idx) + 1 } },

    }));
    app.set('view engine', 'hbs');
    app.set('views', './src/views');
};