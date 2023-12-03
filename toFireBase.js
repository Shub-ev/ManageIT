import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getDatabase, ref, set, child, update, remove } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

function writeToFireBase(data){
    const firebaseConfig = {
        apiKey: "AIzaSyCj5LC4StqSNAZXptkpsOv19sAuMwD54d4",
        authDomain: "manageit-5887a.firebaseapp.com",
        databaseURL: "https://manageit-5887a-default-rtdb.asia-southeast1.firebasedatabase.app",
        projectId: "manageit-5887a",
        storageBucket: "manageit-5887a.appspot.com",
        messagingSenderId: "645655264990",
        appId: "1:645655264990:web:86498441d935a40d9a8c4f"
    };

    const app = initializeApp(firebaseConfig);
    const db = getDatabase();

    /****************Write to firebase******************/
    set(ref(db, "products" + data), {
        product: data,
    })
        .then(() => {
            alert("data stored");
        })
        .catch((error) => {
            console.log("Uncessessful, error" + error);
        })
    /****************Write to firebase******************/
}