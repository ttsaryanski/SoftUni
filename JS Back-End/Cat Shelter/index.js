import express from 'express';
import handlebars from 'express-handlebars';

const app = express();
const port = 5000;

app.use(express.static('public'));

app.engine('hbs', handlebars.engine({ extname: 'hbs' }));
app.set('view engine', 'hbs');

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

app.get('/', (req, res) => {   
    res.render('./home/index', {
        cat: cats,
        title: '/',
        showForm: true
    });
});

app.get('/cats/add-breed', (req, res) => {   
    res.render('./addBreed');
});

app.get('/cats/add-cat', (req, res) => {   
    res.render('./addCat');
});

app.get('/editCat', (req, res) => {   
    res.render('./editCat');
});

app.get('/catShelter', (req, res) => {   
    res.render('./catShelter');
});

app.listen(port, () => console.log(`Server is running on http://localhost:${port}`));


