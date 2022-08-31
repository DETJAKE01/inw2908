const { app } = require("../config/servidor")

module.exports = (app)=>{
    app.get('/generic',(req,res)=>{
        res.render('generic.ejs')
    })
}