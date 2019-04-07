const express= require('express')





const app = express()

app.get('/home' , (req, res) =>{
 res.sendFile(__dirname + '/public/index.html')
})
app.get('/contact', (req, res) =>{
    res.sendFile(__dirname+ '/public/coord.html')
})












// app.use(date = (req, res, next )=> {
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
// })


// addRequestDate = (req, res, next) => {
//     let requestAt = new Date()
//     console.log(requestAt)
//     next()
//     }
// app.get('/home',(req, res) =>{
//     res.send('<input placeHolder="type here..."> <button>search</button> </input>')
// })

// app.get('/contact', (req, res) =>{
//     res.send(
// {        telephone : 71717171,
//     adress : "lac tunis"
// }    )
// })

// app.get('/product', (req, res) =>{
//     res.send('<img src="https://1645110239.rsc.cdn77.org/image/f330x470/q50/mm/befr/movies13796/posters/venom.20190201000000.jpg" alt="venom">')
// })  
// app.get('/users/:nom', (req, res)=>{
//     console.log(req.params.nom)
//     res.send(req.params.nom + ' is connected')
// })


app.listen(3000, (err) =>{
if(err) console.log("server is not running")
else console.log("server is running on port 3000")
})