import express from 'express';
import cookieParser from 'cookie-parser';

export default function expressinit(app) {
    app.use(express.urlencoded({ extended: false }));
    app.use(express.static('public'));
    app.use(cookieParser());
};