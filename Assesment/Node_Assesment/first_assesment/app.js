// if(process.env.NODE_ENV !== "production"){
//     
// }
const express = require('express')
const app = express()

const port = process.env.PORT || 3002;

app.get("/", (req,res)=>{
    res.send("Serving on port" + port)
})

// 2
app.get("/:name",(req,res)=>{
    const name = req.params.name;
    res.send("Hello " + name)
    console.log(name)
})

app.listen(port, (err) => {
        console.log('Server is listening on port '+port);
    }
);