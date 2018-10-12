module.exports={
    login: (req,res)=>{
        const dbInstance=req.app.get('db')

        dbInstance.login([req.body.username,req.body.password])
        .then( user => 
            {req.session.user=user[0].id
                // console.log("session", req.session.user)
            res.status(200).send(user)
            }).catch(err=>{
                res.status(500).send({errorMessage:"Alert"})
                console.log(err)
            })
    },

    register: (req,res)=>{
        const dbInstance=req.app.get('db')
// console.log("test", req.body.username)
        const {username,password}=req.body;
        dbInstance.register([username,password])
        .then( user => {req.session.user=user[0].id
            // console.log("session", req.session.user)
            res.status(200).send(user)
        }).catch(err=>{
                res.status(500).send({errorMessage:"Alert"})
                console.log(err)
            })
    },

    posts: (req,res)=>{
        const dbInstance=req.app.get('db')

        if(req.query.checked===true && req.query.search!==''){
            dbInstance.selfSearch([req.query.search])
            .then(posts=>res.status(200).send(posts))
            .catch(err=>{
                res.status(500).send({errorMessage: "Error"})
                console.log(err)
            })
        }else if(req.query.checked===false && req.query.search!==''){
            dbInstance.othersSearch([req.session.user.id,req.query.search])
            .then(posts=>res.status(200).send(posts))
            .catch(err=>{
                res.status(500).send({errorMessage: "Error"})
                console.log(err)
            })  
        }else if(req.query.checked===false){
            dbInstance.allOthers([req.session.user.id])
            .then(posts=>res.status(200).send(posts))
            .catch(err=>{
                res.status(500).send({errorMessage: "Error"})
                console.log(err)
            })
        }else{
            dbInstance.all([req.session.user.id])
            .then(posts=>res.status(200).send(posts))
            .catch(err=>{
                res.status(500).send({errorMessage: "Error"})
                console.log(err)
            })
        }
    }
}