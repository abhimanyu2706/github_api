document.getElementById("xml").addEventListener('click',function (){

    var user = document.getElementById("user").value;
    var xhttp =new XMLHttpRequest();
    xhttp.addEventListener("load",function() {
            var details = JSON.parse(xhttp.responseText);
            console.log(details);
            document.getElementById("avatar").innerHTML = "<img src= '"+details.avatar_url+"'>";
            document.getElementById("name").innerHTML = "Name: "+ details.name;
            document.getElementById("bio").innerHTML = "Bio: "+ details.bio;
            document.getElementById("email").innerHTML = "Email: "+ details.email;
    });
    xhttp.open("GET","https://api.github.com/users/" + user, true);
    xhttp.send();
});