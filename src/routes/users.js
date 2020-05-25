import { Router } from 'express'

const router = Router()

router.get('/', function(req,res){
    //return res.send(Object.values(req.context.dummy.users))
    return res.send(Object.values(req.context.models.Users.GetList))
})

/*router.get('/:userId', function(req,res){
    return res.send(req.context.models.Users.add_list[req.params.userId])
})*/
router.post('/add', function(req,res){
    return res.send(Object.values(req.context.models.Users.AddList(JSON.stringify(req.body.username))))
})

export default router