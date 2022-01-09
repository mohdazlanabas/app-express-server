const express = require("express")
const app = express()

app.use(logger)

app.get('/', (req, res) => {
    console.log('Home Page')
    res.send('Home Page')
    })

app.get('/users', auth, (req,res) => {
    console.log('User is admin = ${req.admin}')
    console.log('Users Page')
    res.send('Users Page')
})

    function logger(req, res, next) {
        console.log(req.originalUrl)
        next()
    }

    function auth(req, res, next) {
        if (req.query.admin === 'true') {
            req.admin = true
            next()
        }   else {
            res.send('No auth')
        }
    }

    /*
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.set("view engine", "ejs") 

const userRouter = require("./routes/users") 

app.use("/users", userRouter) */

app.listen(3000) 
