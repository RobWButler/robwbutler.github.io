// Initialize Firebase
var config = {
    apiKey: "AIzaSyBcPe7CFxyh1lzGfKQiZ8ilY79x14qXEcQ",
    authDomain: "gtsav2019.firebaseapp.com",
    databaseURL: "https://gtsav2019.firebaseio.com",
    projectId: "gtsav2019",
    storageBucket: "gtsav2019.appspot.com",
    messagingSenderId: "1022037644586"
};

firebase.initializeApp(config);

  
$("#contact").on("click", function (){
    
    console.log("Add comment clicked!");
    author = $("#usr").val().trim();
    console.log(author)
    email = $("#email").val().trim();
    console.log(email)
    comment = $("#comment").val().trim();
    console.log(comment)

    if (author === "") {
        $("#usr").val("");
        $("#usr").attr("placeholder", "Please enter a name");
        $("#usr").addClass("emptybox");
        return false
    }
    else{
        $("#usr").attr("placeholder", "");
        $("#usr").attr("style", "color:#495057");
    }

    if (email === "") {
        $("#email").val("");
        $("#email").attr("placeholder", "Please enter a valid email address");
        $("#email").addClass("emptybox");
        return false
    }

    else{
        $("#email").attr("placeholder", "");
        $("#email").attr("style", "color:#495057");
    }
    
    if (comment === "") {
        $("#comment").val("");
        $("#comment").attr("placeholder", "Please enter a comment");
        $("#comment").addClass("emptybox");
        return false
    }
    else{
        $("#comment").attr("placeholder", "");
        $("#comment").attr("style", "color:#495057");
    }



    $("#usr").val("");
    $("#email").val("");
    $("#comment").val("");
})
