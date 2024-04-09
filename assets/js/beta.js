    // Importar las funciones necesarias del SDK de Firebase
    import {initializeApp }  from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
    import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firestore.js";
  
    // Import the functions you need from the SDKs you need
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBHlmXg1wRROxMBB0mktkUvICTUdQJ3Z2o",
      authDomain: "proyecto-alhipo-app.firebaseapp.com",
      databaseURL: "https://proyecto-alhipo-app-default-rtdb.firebaseio.com",
      projectId: "proyecto-alhipo-app",
      storageBucket: "proyecto-alhipo-app.appspot.com",
      messagingSenderId: "36916623748",
      appId: "1:36916623748:web:0bd93450fb98a0b2b4c5d1",
      measurementId: "G-YWM65DEMTH"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    console.log("Initializing Firebase");
    export async function saveEmail() {
    var email = document.getElementById('email').value;

    try {
      // Añadir el correo electrónico a la colección "correos" en Firestore
      const docRef = await addDoc(collection(firestore, 'correos'), {
        correo: email
      });
      console.log("Correo electrónico almacenado con ID: ", docRef.id);
      alert('Correo electrónico almacenado con éxito.');
    } catch (error) {
      console.error("Error al almacenar el correo electrónico: ", error);
      alert('Error al almacenar el correo electrónico.');
    }
  }
  