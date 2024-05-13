/* eslint-disable no-unused-expressions */
/* eslint-disable camelcase */
// import puppeteer from 'puppeteer';

const getIPInfo = async (ip) => {
    try {
        const url = `https://ipinfo.io/${ip}/json`;
        const response = await fetch(url);
        const result = await response.json();
        console.log('LOG:: Get IP', url, result);
        return result && result.country.toLowerCase();
    } catch (error) {
        return null;
    }
};

const getProxy = async (countryCode) => {
    try {
        // # url = 'https://open.proxy302.com/open_api/v3/user/users/token?username=balam312&password=7s1SWuCNvwafciti5P'
        // # p = requests.get(url)
        // # token = p.json()['data']['token']
        // # print(token)
        const token = 'Basic YmFsYW0zMTI6N3MxU1d1Q052d2FmY2l0aTVQ';
        const url = `https://open.proxy302.com/open_api/v3/proxy/api/proxy/static/traffic?country=${countryCode}`;
        const response = await fetch(url, {
            method: 'POST',
            headers: { Authorization: token },
        });
        const result = await response.json();
        console.log('LOG:: Get Proxy', url, result);
        const { data } = result;
        return data;
    } catch (error) {
        return null;
    }
};

export {
    getIPInfo,
    getProxy,
};
