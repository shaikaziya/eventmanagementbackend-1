import express from "express";
import { genPassword, createUser, getUserByName } from "../helper.js"


const router = express.Router();


//post method  - to insert data to db
router.post("/signup", async (request, response) =>  {  
    const { username, password } = request.body;
    console.log(username, password);
    //db.movies.insertMany(movies) 
  const isUserExist = await getUserByName(username)
  console.log(isUserExist);
  //username already exist
  if  (isUserExist ) {
    response.status(400).send({ message: " Username already taken" });
    return;   
  }
   const hashedPassword = await genPassword(password);
   const result = await createUser(username, hashedPassword )
   response.send(result);
    });


    
 export const userRouter = router;

//  step
 //Validate username is already present 
 //Validate if password matches (and check criteria like does it match the pattern )


 //store the user details - users collection - username & password 