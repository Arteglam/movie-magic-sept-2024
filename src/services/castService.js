import Cast from "../models/Cast.js";

const getAll = () => Cast.find();

// const getAllWithout = (castIds) => Cast.find({ _id: { $nin: castIds } });
const getAllWithout = (casts) => {
    // Some kind of error. Casts its not an array when I try to click attach on a movie without assigned cast. This check fixes the error for now.
    const castsInput = Array.isArray(casts) ? casts : [];
    const castIds = castsInput.map(cast => cast.cast._id);SVGAnimateElement
    return Cast.find().nin('_id', castIds);
};

const create = (cast) => Cast.create(cast);

export default {
    create,
    getAll,
    getAllWithout,
};