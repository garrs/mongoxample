import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from  'dotenv'
import postRoutes from './routes/posts.js'

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended:"true"}));
app.use(bodyParser.urlencoded({ limit: "30mb", extended:"true"}));
app.use(cors());

// can be reached with 'localhost:5000/posts'
app.use('/posts', postRoutes)

app.get('/', (req, res) => {
    res.send('Hello to Memories API')
})
// use mongodb cloud Atlas version of mongodb

// const CONNECTION_URL = 'mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.9loo9.mongodb.net/<dbname>?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

// connect to our database
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running in port: ${PORT}`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);
