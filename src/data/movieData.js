import fs from 'fs/promises';
import path from 'path';

async function getDb() {
    const dbPath = path.resolve('./src/db.json');
    const jsonResult = await fs.readFile(dbPath, { encoding: 'utf-8'});
    const data = JSON.parse(jsonResult);
    return data;
};

async function getAll() {
    const db = await getDb();
    return db.movies;
};

export default {
    getAll,
};