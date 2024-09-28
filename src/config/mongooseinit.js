import { connect } from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/magic-movies';

export default async function mongooseinit() {
    try {
        await connect(dbUrl);
        console.log('Successfully connected to DB!');
    } catch (error) {
        console.log('Cannot connect to DB!' + error.message);
    }
};
