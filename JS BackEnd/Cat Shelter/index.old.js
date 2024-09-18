const http = require('http');
const fs = require('fs/promises');
const path = require('path');
const formidable = require('formidable');

const siteCss = require('./content/styles/site.css');

const port = 5000;

const cats = [
    {
        id: 1,
        imageUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/12A9B/production/_111434467_gettyimages-1143489763.jpg",
        name: 'Cat 1',
        price: 100,
        breed: 'Bombay Cat 1',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        id: 2,
        imageUrl: "https://cdn.pixabay.com/photo/2015/06/19/14/20/cat-814952_1280.jpg",
        name: 'Cat 2',
        price: 200,
        breed: 'Bombay Cat 2',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        id: 3,
        imageUrl: "https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg",
        name: 'Cat 3',
        price: 300,
        breed: 'Bombay Cat 3',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        id: 4,
        imageUrl: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
        name: 'Cat 4',
        price: 400,
        breed: 'Bombay Cat 4',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    },
    {
        id: 5,
        imageUrl: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
        name: 'Cat 5',
        price: 500,
        breed: 'Bombay Cat 5',
        description: 'Dominant and aggressive to other cats. Will probably eat you in your sleep. Very cute tho.'
    }
];

async function readFile(path) {
    return fs.readFile(path, { encoding: 'utf-8' });
}

function renderer(html, data) {
    const resultHtml = Object.keys(data).reduce((result, key) => result.replaceAll(`{{${key}}}`, data[key]), html);

    return resultHtml;
};

async function renderCat(catInfo) {
    let catHtml = await readFile('./views/cat.html');

    return renderer(catHtml, catInfo);
};

async function renderIndexHtml(cats) {
    let homeHtml = await readFile('./views/home/index.html');

    const catsHtmlResult = await Promise.all(cats.map(renderCat));

    return renderer(homeHtml, { cats: catsHtmlResult.join('') });
};

const server = http.createServer(async (req, res) => {
    if (req.url === '/styles/site.css') {
        res.writeHead(200, {
            'content-type' : 'text/css'
        });
        res.write(siteCss);
        return res.end();
    };

    res.writeHead(200, {
        'content-type' : 'text/html'
    });

    switch (req.url) {
        case '/':
            const indexHtml = await renderIndexHtml(cats);
            res.write(indexHtml);
            res.end();
            break;
        case '/cats/add-breed':
            const addBreadHtml = await readFile('./views/addBreed.html');
            res.write(addBreadHtml);
            res.end();
            break;
        case '/cats/add-cat':
            if (req.method === 'GET') {
                const addCatHtml = await readFile('./views/addCat.html');
                res.write(addCatHtml);
                res.end();
            } else if (req.method === 'POST') {
                let body = [];

                req.on('data', (chunk) => {
                    body.push(chunk);
                });

                req.on('end', async () => {
                    const form = new formidable.IncomingForm();
                    form.parse(req, (err, fields, files) => {
                        const savePath = path.join(__dirname, 'uploads', files['upload'].at(0).originalFilename);

                        fs.copyFile(files['upload'].at(0).filepath, savePath, (err) => {
                            console.log('Image uploaded');
                        });
                    });
                });
                res.end();
            }
            break;
        case '/editCat':
            const editCatHtml = await readFile('./views/editCat.html');
            res.write(editCatHtml);
            res.end();
            break;
        case '/catShelter':
            const catShelterHtml = await readFile('./views/catShelter.html');
            res.write(catShelterHtml);
            res.end();
            break;
        default:
            res.write(`<h1>Page Not Found!</h1>`);
            res.end();
            break;
    }

});

server.listen(port);
console.log(`Server is running on http://localhost:${port}`);
