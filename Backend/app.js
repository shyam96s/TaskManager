const express = require('express');
const app = express();
const Task = require('./database/models/task');
const List = require ('./database/models/list');
const User =require('./database/models/user');
const Email = require('./database/models/user')
const mongoose = require('./database/mongoose');
const rgxIndex = require('./Routes/index.route')
//const rgxIndex = require('./index.route.js');
const bodyParser = require('body-parser');
const cors = require('cors');



//middleware
app.use(bodyParser.json());
app.use(cors());

app.use(express.json());
//userReg

app.use('/api',rgxIndex);



app.use( (req,res,next) =>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, HEAD , OPTIONS, PUT, PATCH , DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

/*
LIST end point CREATION
*/
    app.get('/lists', (req, res) => {
        List.find({})
            .then((lists) => res.send(lists))
            .catch((error)=> console.log(error));
    });

    app.post('/lists', (req,res)=> {
        (new List({ 'title': req.body.title }))
            .save()
            .then((list) => res.send(list))
            .catch((error) => console.log(error));    
            });
    
    app.get('/lists/:listId', (req,res) =>{
        List.find({ _id: req.params.listId})
            .then((list) => res.send(list))
            .catch((error) => console.log(error));  

    });

    app.patch('/lists/:listId', (req,res)=>{
        List.findOneAndUpdate({'_id': req.params.listId}, {$set : req.body} )
            .then((list) => res.send(list))
            .catch((error) => console.log(error));  
    });

    app.delete('/lists/:listId', (req, res)=>{
        const deleteTask = (list) =>{
            Task.deleteMany({_listId: list._id})
                .then(()=> list)
                .catch(console.log(error));
        
        }
        List.findByIdAndDelete(req.params.listId)
            .then((list) =>res.send(deleteTask(list)))
            .catch((error)=>console.log(error));
   
    })

    /*TASKS END POINT */

    app.get('/lists/:listId/tasks', (req,res)=>{
        Task.find({ _listId : req.params.listId})
            .then((tasks)=> res.send(tasks))
            .catch((error)=>console.log(error));
    })

    app.post('/lists/:listId/tasks', (req,res)=> {
        (new Task({ '_listId': req.params.listId, 'title': req.body.title }))
            .save()
            .then((task) => res.send(task))
            .catch((error) => console.log(error));    
            }); 


    app.get('/lists/:listId/tasks/:taskId', (req,res)=>{
        Task.findOne({ _listId : req.params.listId, '_id': req.params.taskId})
            .then((task)=> res.send(task))
            .catch((error)=>console.log(error));
            })

    app.patch('/lists/:listId/tasks/:taskId', (req,res)=>{
        Task.findOneAndUpdate({_listId: req.params.listId,'_id':req.params.taskId }, {$set : req.body} )
            .then((task) => res.send(task))
            .catch((error) => console.log(error));  
    });

    app.delete('/lists/:listId/tasks/:taskId', (req, res)=>{
        Task.findByIdAndDelete({_listId: req.params.listId, '_id': req.params.taskId})
            .then((task) =>res.send(task))
            .catch((error)=>console.log(error));
    })

// END point for user registration
     
     /*app.post('/register', (req,res)=>{
        (new User({'fullname': req.body.fullname , 'email': req.body.email, 'password': req.body.password}))
        .save((err,doc)=>{
            if(!err)
                res.send(doc);
        })
            .then((user)=>res.send(user))
            .catch((error)=> console.log(error));
    })
    */
//End point to get users
    app.get('/users', (req,res)=>{
        User,Email.find({})
            .then((users)=> res.send(users))
            .catch((error)=>console.log((error)))
    })

//Global Error handling
    app.use((req,res,next,err)=>{
        if(err.name == 'ValidationError'){
        var  valErrors= [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors);
        }
    });

        

app.listen(3000, () => console.log("Server connected on port 3000"));