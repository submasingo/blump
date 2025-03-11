// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCs05hfhZKdxi5leZDrIlxQWznAs5eLgkQ",
    authDomain: "blumpbros-406c8.firebaseapp.com",
    projectId: "blumpbros-406c8",
    storageBucket: "blumpbros-406c8.firebasestorage.app",
    messagingSenderId: "173169183530",
    appId: "1:173169183530:web:1d0207a90c1a0b8c14ec53",
    measurementId: "G-HYV7HJ11EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Signup Function
window.signUp = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("status").innerText = "Account Created!";
        })
        .catch((error) => {
            document.getElementById("status").innerText = error.message;
        });
}

// Login Function
window.logIn = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            document.getElementById("status").innerText = "Logged In!";
        })
        .catch((error) => {
            document.getElementById("status").innerText = error.message;
        });
}

// Logout Function
window.logOut = function() {
    signOut(auth).then(() => {
        document.getElementById("status").innerText = "Logged Out!";
    });
}
