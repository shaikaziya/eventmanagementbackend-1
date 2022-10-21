import express from "express";
import {getAllMovies,addMovies,deleteMoviesById,getAllMoviesById,updateMovieById} from "../helper.js"

const router=express.Router();



router.get("/", async (request, response) =>  {

    // if(request.query.rating){
    //     request.query.rating = +request.query.rating;
    // }
    // console.log(request.query)
    const verify = await getAllMovies(request);
    response.send(verify);
});


router.get("/:id", async (request, response) =>  {    
    const { id } = request.params;
    console.log(id)

    const verifyd = await getAllMoviesById(id)
    
    console.log(movie)
    verifyd 
    ? response.send(verifyd) 
    : response.status(404).send({ message: "No movie found" });
});



//Delete a movie id

router.delete("/:id", async (request, response) =>  {    
    const { id } = request.params;
    console.log(id)
    //db.movies.deleteOne({id: "102"})
    const verifyd = await deleteMoviesById(id)
    response.send(verifyd)
});

router.post("/", async (request, response) =>  {    
    
    const newdata=request.body;
    
    //db.movies.findOne({id: "102"})
    const result = await addMovies(newdata)
    response.send(result)

});

router.put("/:id", async (request, response) =>  {    
    const{id}=request.params;
    const updateVerifyd=request.body;
    
    //db.movies.findOne({id: "102"})
    const result = await updateMovieById(id,updateVerifyd)
    response.send(result)

});

export const verifyRouter = router;


