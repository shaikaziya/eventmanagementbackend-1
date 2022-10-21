import { client } from "./index.js";

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


