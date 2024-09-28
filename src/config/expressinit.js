import express from 'express';

export default function expressinit(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public'));
};