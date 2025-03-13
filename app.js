//import express and other dependencies
import express from 'express';

const app = express();

app.use(express.static('public'));

let wishlist = [];

app.use(express.urlencoded ({ extended: true }));

app.set('view engine', 'ejs');

const PORT = 3000;


app.get('/', (req, res) => {
    res.render('home');
});


app.post('/submit', (req, res) => {
    console.log(req.body);

    const{BookTitle, ratings, notes} = req.body;
    const wishlistItem = 
    {
        BookTitle: BookTitle,
        Rating: ratings,
        Comments: notes
    }

    wishlist.push(wishlistItem);

    res.redirect('/summary');
});



app.get('/summary', (req, res) => {
    res.render('summary', {wishlist});
});

app.listen (PORT, () => {
    console.log(`server is running http://localhost:${PORT}`);
});

