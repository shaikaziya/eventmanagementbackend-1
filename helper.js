import { client } from "./index.js";
import bcrypt from "bcrypt";
export async function getAllMovies(request) {
    return await client.db("B37WD").collection("verify").find(request.query).toArray();
}
export async function getAllMoviesById(id) {
    return await client
        .db("B37WD")
        .collection("verify")
        .findOne({ id: id })
}
export async function deleteMoviesById(id) {
    return await client
        .db("B37WD")
        .collection("verify")
        .deleteOne({ id: id })
}
export async function addMovies(newdata) {
    return await client
        .db("B37WD")
        .collection("verify")
        .insertMany(newdata)
}
export async function updateMovieById(id,updateMovie) {
    return await client
        .db("B37WD")
        .collection("verify")
        .updateOne({ id: id }, { $set: updateMovie })
}
export async function genPassword(password)
{
  const salt  = await bcrypt.genSalt(10); //bcrypt.genSalt(no of rounds)
  console.log(salt)
  const hashPassword =  await bcrypt.hash(password, salt)
  return hashPassword
}


export async function createUser(username, hashedPassword) {
    return await client.db("B37WD").collection("user1")
    .insertOne({username: username, password: hashedPassword});
}


export async function getUserByName(username) {
    return await client.db("B37WD").collection("user1")
    .findOne({username: username});
}


