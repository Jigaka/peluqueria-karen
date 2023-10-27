import {login} from './auth.js';

((d)=> {
    const $btnLogin = d.querySelector('.login');
    $btnLogin.addEventListener("click", ()=>{
        login();
    })
})(document);