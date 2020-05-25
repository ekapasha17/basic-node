import { Router } from 'express'

const router = Router()

router.get('/', function(req,res){
    return res.send(req.context.dummy.users[req.context.me.id])
})

export default router