import { getAuth, signInWithPopup,  GoogleAuthProvider } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-auth.js'


const auth = getAuth();
auth.languageCode = 'es';
const provider = new GoogleAuthProvider();

auth.onAuthStateChanged((user)=>{
    if(user){
        window.location.href = 'index.html';
    }
});


export  function login(){
    try {
        const response =  signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } catch (err) {}
}


export  function logout(){
    try {
        const response =  signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(user)
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    } catch (err) {}
}