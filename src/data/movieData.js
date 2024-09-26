import fs from 'fs/promises';
import path from 'path';

const dbPath = path.resolve('./src/db.json');

async function getDb() {
    const dbPath = path.resolve('./src/db.json');
    const jsonResult = await fs.readFile(dbPath, { encoding: 'utf-8' });
    const data = JSON.parse(jsonResult);
    return data;
};

function saveDB(data) {
    return fs.writeFile(dbPath, JSON.stringify(data, {}, 2));
};

async function getAll() {
    const db = await getDb();
    return db.movies;
};

async function create(movieData) {
    const db = await getDb();
    db.movies.push(movieData);
    return saveDB(db);
};

export default {
    getAll,
    create,
};