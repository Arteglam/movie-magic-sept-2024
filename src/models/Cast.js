import { Schema, model } from "mongoose";

const castSchema = new Schema({
    name: {
        type: String,
        validate: [/^[A-Za-z0-9 ]+$/, 'Name can contain only alpha numeric characters!']
    },
    age: {
        type: Number,
        min: [1, 'The person need to be at least 1 year old!'],
        max: [120, 'The person can not be older then 120 years!']
    },
    born: {
        type: String,
        minLength: [2, 'The origin of birth (born) must be at least 2 characters'],
        validate: [/^[A-Za-z0-9 ]+$/, 'Born can contain only alpha numeric characters!']
    },
    imageUrl: {
        type: String,
        required: [true, 'Image is required!'],
        validate: [/^https?:\/\//, 'Invalid image url!']
    },
});

const Cast = model('Cast', castSchema);

export default Cast;