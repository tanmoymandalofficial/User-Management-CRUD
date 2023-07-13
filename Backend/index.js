const express = require('express');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const UserModel = require('./Models/User')



const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    UserModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err));
})

app.listen(3002, ()=>{
    console.log('server is Running');
})

// Connect to Mongo DB ********************************

const mongoURI = "mongodb+srv://gofood:tanmoy@cluster0.qvrm1la.mongodb.net/user_crud?retryWrites=true&w=majority"

        // mongoose.connect(mongoURI)

const mongoDB = async ()=>{
    console.log('riched');
    try {
        await mongoose.connect(mongoURI);
        console.log('connected');

    } catch (error) {
        console.log('---',error)
    }
}

mongoDB()