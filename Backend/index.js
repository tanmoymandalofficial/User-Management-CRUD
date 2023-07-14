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

app.post('/create', (req, res)=>{
    UserModel.create(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
})

app.put('/update/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate({_id: id}, {
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile
    }).then( user => res.json(user))
    .catch(err => res.json(err))
})

app.delete('/delete/:id',(req, res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id: id})
    .then( user => res.json(user))
    .catch(err => res.json(err))
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