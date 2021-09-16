    // Import the functions you need from the SDKs you need
    import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
    import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-analytics.js";
    import { getDatabase , ref, set ,onValue } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-database.js";
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries
  
    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
      apiKey: "AIzaSyBW1fqC3JnY9If0tvrssTpqL-2GRiJMHG0",
      authDomain: "testweb-4de8c.firebaseapp.com",
      databaseURL: "https://testweb-4de8c-default-rtdb.firebaseio.com",
      projectId: "testweb-4de8c",
      storageBucket: "testweb-4de8c.appspot.com",
      messagingSenderId: "144542427520",
      appId: "1:144542427520:web:8a9b9b81ec2a3d2942f965",
      measurementId: "G-R7JLW850QV"
    };
  
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app);


    function writeUserData(userId, name, email, imageUrl) {
      const db = getDatabase();
      set(ref(db, 'users/' + userId), {
        username: name,
        email: email,
        profile_picture : imageUrl
      });
    }

    window.addEventListener("load" , ()=>{
      writeUserData("rupel","shubha","rup@g","asdasd" )
    })



    const db = getDatabase();
    const starCountRef = ref(db, 'users/' );
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      document.getElementById("display").innerHTML = JSON.stringify(data)
    });