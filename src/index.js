import 'dotenv/config'
import routes from './routes'
import dummy from './dummy'
import cors from 'cors'
import express from 'express'
import models, { Sequelizer } from './models'

const app   =   express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors())

app.use((req, res, next) => {
    req.context = {
        dummy,
        models,
        me: dummy.users[2],
    }
    next()
})

app.use('/users', routes.users)
app.use('/messages', routes.messages)

/*



app.put('/users/:userId', function(req,res){
    return res.send(`PUT HTTP method on user/ ${req.params.userId} resource`)
})

app.post('/users', function(req,res){
    return res.send(`POST HTTP method on user resource with ${req.params.startdate}`)
})

app.use((req, res, next) => {
    req.me = users[1];
    next();
})

app.post('/messages', function(req,res){
    const id        =  uuidv4()
    const message   = {
        id,
        text:req.body.text,
        userId:req.me.id
    }
    messages[id]    =   message
    return res.send(message)
})

app.get('/messages', function(req,res){
    res.send(Object.values(messages))
})

app.get('/messages/:messageId', function(req,res){
    res.send(messages[req.params.messageId])
})

app.delete('/messages/:messageId', function(req,res){
    const {
        [req.params.messageId]: message,...otherMessages
    } = messages

    messages    =   otherMessages
    //delete messages[req.params.messageId]
    
    return res.send(messages)
})*/
Sequelizer.sync().then(() => {
    app.listen(process.env.PORT, function(){
        console.log(`Example app listening on port ${process.env.PORT}`)
    })
})