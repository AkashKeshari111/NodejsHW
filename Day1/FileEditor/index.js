// Here I am playing with file using CRUD operat


const express=require("express");
const fs=require("fs")

const app= express();

app.use(express.json())

let file=fs.readFileSync("./db.json",{encoding:"utf-8"})

let db=JSON.parse(file)



let updatedDb=(updatedProducts)=>{
    fs.writeFileSync(`${__dirname}/./db.json`,JSON.stringify(updatedProducts),{encoding:"utf-8"})
}



let products=db.products



app.get("/",(req,res)=>{
    res.send(db)
})




app.get("/products",(req,res)=>{
    res.send(products)
})

app.get("/products/:id",(req,res)=>{

    let {id}=req.params;

    let Sproduct=products.find((el)=>(el.id===Number(id)))

    if(!Sproduct){
        res.status(404).send(`I'm not present ${id}`)
    }
 
    res.send(Sproduct)
})




app.post("/products",(req,res)=>{
   console.log("aadsdasd",req.body)
  products.push({
    ...req.body,
    id:products.length+1
  })
  updatedDb({...db,products})
   res.send(products)
})




app.delete("/products/:id",(req,res)=>{
    console.log("aadsdasd",req.params)
    let {id}=req.params

    let index=products.findIndex((el)=>(el.id===Number(id)))
    let updatedProducts= products.splice(index,1)
 
 
   updatedDb({...db,products})
    res.send(updatedProducts)
 })



 app.patch("/products/:id",(req,res)=>{
    console.log("aadsdasd",req.params)
    let {id}=req.params

    let updatedProducts=products.map((el)=>{
        if(el.id===Number(id)){ return {...el,...req.body}}else{return el}
    })

    updatedDb({...db,products})
      res.send(updatedProducts)

 })



//listen to server
app.listen(8080,(req,res)=>{
   console.log("I'm port 8080")
})



