import  Express from "express";
import data from "./data.js";
const App = Express()

App.get('/api/products',(req, res)=> {
    res.send(data.products)
})

const port = process.env.PORT || 5000;
App.listen(port,()=> {
    console.log(`serve at http://localhost:${port}`);
})