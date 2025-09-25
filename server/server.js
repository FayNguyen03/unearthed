import express from 'express';
import dotenv from "dotenv";
import giftsRouter from './routes/gifts.js'
const app = express();
///process.env.PORT refers toaa PORT environment variable
const PORT = process.env.PORT || 3001;

//a middleware function to serve static files from the public directory
app.use('/public', express.static('./public'));

//a middleware function to serve static files from the scripts directory
app.use('/scripts', express.static('./public/scripts'));

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
}) 

app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
});

app.use('/gifts', giftsRouter)

