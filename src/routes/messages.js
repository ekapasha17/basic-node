import { Router } from 'express'
import { v4 as uuidv4 } from 'uuid'

const router = Router()

router.get('/', function(req,res){
    return res.send(Object.values(req.context.dummy.messages));
})

router.post('/add', function(req,res){

    const id        =  uuidv4()
    const message   = {
        id,
        text:req.body.text,
        userId:req.context.me.id
    }
    req.context.dummy.messages[id] = message
    return res.send(message)
})

router.delete('/:messageId', (req, res) => {
    const {
        [req.params.messageId]: message,
        ...otherMessages
    } = req.context.dummy.messages
   
    req.context.dummy.messages = otherMessages
   
    return res.send(message);
})

export default router