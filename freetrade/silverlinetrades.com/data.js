var firebaseConfig = {
    apiKey: "AIzaSyAgeNwdzyMgCR9QfBePpVAE_Btpx5GGVLo",
    authDomain: "signuppage-1630a.firebaseapp.com",
    projectId: "signuppage-1630a",
    storageBucket: "signuppage-1630a.appspot.com",
    messagingSenderId: "1024097672268",
    appId: "1:1024097672268:web:103b88b20504129f10a8e9",
    measurementId: "G-Q3ZW9FJ6CG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
    firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
    }).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
    });
    }
    const auth = firebase.auth();
    function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
    window.open("./index.html","_self");
    }
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        password : getId('lpassword')
    });
    alert("Successfully Signed Up");
    console.log("sent");
    document.getElementById('form').reset();
    });
    function  getId(id){
    return document.getElementById(id).value;
    }