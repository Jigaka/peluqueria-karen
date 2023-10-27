import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getFirestore } from 'https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js'


let app;
(()=> {
    // Implementar estas claves aqui no es lo optimo,
    // Para estos propositos es suficiente
    // Recordar tener bien implementado las configuraciones de firebase
    // para no tener peticiones de otros dominios distintos a este
    const firebaseConfig = {
        apiKey: "AIzaSyBHFbkLb25RY4wF0wTW1mOA15shLBmVW60",
        authDomain: "pelukaren-529d7.firebaseapp.com",
        projectId: "pelukaren-529d7",
        storageBucket: "pelukaren-529d7.appspot.com",
        messagingSenderId: "563591256242",
        appId: "1:563591256242:web:f1120fe2a88e0d26f211ab",
        measurementId: "G-9445YEXMP2"
    };
    app = initializeApp(firebaseConfig);
})();


const analytics = getAnalytics(app);