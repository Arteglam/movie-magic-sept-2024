import { Router } from "express";
import validator from 'validator';

import authService from "../services/authService.js";

const router = Router();

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const { email, password, rePassword } = req.body;
// Validate email format using validator library
    // if (!validator.isEmail(email)) {
    //     return res.status(400).end();
    // }

// Validate if rePassword is the same
    // if (password !== rePassword) {
    //     return res.status(400).end();
    // }

    try {
        await authService.register(email, password, rePassword);
    } catch (err) {
        console.log(err.message);
        return res.end();
    }

    const token = await authService.login(email, password);
    res.cookie('auth', token, { httpOnly: true });
    res.redirect('/');
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.cookie('auth', token, { httpOnly: true });
    res.redirect('/');
});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    // Some process of token invalidation???
    res.redirect('/');
});

export default router;