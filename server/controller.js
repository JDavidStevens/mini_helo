module.exports={
    login: (req,res)=>{
        const dbInstance=req.app.get('db')

        dbInstance.login([req.body.username,req.body.password])
        .then( user => 
            {req.session.user=user[0]
            res.status(200).send()
            }).catch(err=>{
                res.status(500).send({errorMessage:"Alert"})
                console.log(err)
            })
    },

    register: (req,res)=>{
        const dbInstance=req.app.get('db')

        dbInstance.register([req.body.username,req.body.password])
        .then( user => 
            {req.session.user=user[0]
            res.status(200).send()
            }).catch(err=>{
                res.status(500).send({errorMessage:"Alert"})
                console.log(err)
            })
    }
}