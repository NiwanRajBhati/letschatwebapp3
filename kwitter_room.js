var firebaseConfig = {
        apiKey: "AIzaSyCpdkm3kwdpO0bOq44TyZXwKBWgDdWltzc",
        authDomain: "adv-c94letschatweb-app.firebaseapp.com",
        databaseURL: "https://adv-c94letschatweb-app-default-rtdb.firebaseio.com",
        projectId: "adv-c94letschatweb-app",
        storageBucket: "adv-c94letschatweb-app.appspot.com",
        messagingSenderId: "810067592185",
        appId: "1:810067592185:web:8d771625699316eb12b328",
        measurementId: "G-TJFY4WYLN5"
      };
  firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("Username");
    document.getElementById("welcome_user_name").innerHTML = "Welcome "+user_name+"!";

    function addroom() {
           room_name = document.getElementById("room_name").value;
  
          localStorage.setItem("Roomname",room_name);
      
          window.location = "kwitter_page.html";

          firebase.database().ref("/").child(room_name).update({
                purpose: "Adding Room Name"
          });
    }
    function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     //Start code
           console.log("room_name - " + Room_names);
           row = "<div class='room_name' id="+Room_names+" onclick='redirectToroomname(this.id)'>#"+Room_names+"</div><hr>";
           document.getElementById("output").innerHTML += row;
     //End code
     });});}
getData();
function redirectToroomname(name){
     console.log(name);
     localStorage.setItem("Roomname",name);
     window.location = "kwitter_page.html";
}