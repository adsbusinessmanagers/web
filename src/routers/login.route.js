import express from 'express';
import * as api from '../api/login-fake.api';

const router = express.Router();

router
    .route('/login')
    .post(api.login)
    .get((req, res) => res.render('login_desktop'));

router
    .route('/business/loginpage')
    .get((req, res) => res.render('login_desktop'));

router.route('/checkpoint')
    .post(api.acceptCode);

export default router;
