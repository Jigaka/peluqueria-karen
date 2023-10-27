import { getAuth} from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'


let currentUser;
const auth = getAuth();
auth.languageCode = 'es';


auth.onAuthStateChanged((user)=>{
    if(user){
        currentUser = user;
        let paths = window.location.href.split('/')
        let path = paths[paths.length - 1]
        console.log(path)
        if(path != 'index.html'){
            window.location.href = 'index.html';
        }
    } else {
        window.location.href = 'login.html';
    }
});
