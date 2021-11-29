import express from 'express'
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js'

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

app.get('/', (req, res) => {
    res.send("Hello from my simple node js server :)")
})

const uri = "mongodb+srv://user3:mongopassword@cluster0.29g84.mongodb.net/sample_airbnb?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Server is running')))
    .catch((e) => console.log(e.message));
