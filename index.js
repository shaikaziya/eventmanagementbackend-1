// const express = require('express'); // 3rd party package 
// const { MongoClient } = require("mongodb")
import dotenv from "dotenv"
import express from "express";
import  { MongoClient } from "mongodb";

dotenv.config()
const app = express();
const PORT = process.env.PORT
// const PORT =9000
const verifydata = [
    {
    "name":"name11",
    "email":"email11"
    },
    {
        "name":"name2",
        "email":"email2"
        },
    
    ]
const MONGO_URL =process.env.MONGO_URL

async function createConnection() {
    const client = new MongoClient(MONGO_URL)
    await client.connect();
    return client;
  }

const client =  await createConnection();


// Rest Api endpoints

app.get("/", (request, response) =>  {
    response.send("Hello Everyone")
});



app.get("/verify",async (request, response) =>  {

    const verify=await client.db("B37WD").collection("verify").find(request.query).toArray();
    response.send(verify);
});

// app.get("/verify/:id", (request, response) =>  {    
//     const { id } = request.params;
//     console.log(id)
//     const verifyd = verify.find((mv) => mv.id == id);
//     response.send(verifyd)
// });
app.get("/verify/:id", async (request, response) =>  {    
    const { id } = request.params;
    console.log(id)
    //db.movies.findOne({id: "102"})
    const verifyd = await client
    .db("B37WD")
    .collection("verify")
    .findOne({ id: id })
    
    console.log(verifyd)
    verifyd 
    ? response.send(verifyd) 
    : response.status(404).send({ message: "No movie found" });
});

app.delete("/verify/:id", async (request, response) =>  {    
    const { id } = request.params;
    console.log(id)
    //db.movies.deleteOne({id: "102"})
    const verifyd = await client
    .db("B37WD")
    .collection("verify")
    .deleteOne({ id: id })
    response.send(verifyd)
});


app.post("/verify",express.json(), async (request, response) =>  {    
    
    const newdata=request.body;
    
    //db.movies.findOne({id: "102"})
    const result = await client
    .db("B37WD")
    .collection("verify")
    .insertMany(newdata)
    response.send(result)

});
//create a server
app.listen(PORT, () => console.log("Server started on port", PORT));

// mongodb+srv://shaikaziya:<password>@cluster0.bpnjhgc.mongodb.net/?retryWrites=true&w=majority