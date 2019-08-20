document.getElementById("fetch").addEventListener('click', function (){
    var user = document.getElementById("user").value;
    fetch("https://api.github.com/users/" + user)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        document.getElementById("avatar").innerHTML = "<img src= '"+data.avatar_url+"'>";
        document.getElementById("name").innerHTML = "Name: "+ data.name;
        document.getElementById("bio").innerHTML = "Bio: "+ data.bio;
        document.getElementById("email").innerHTML = "Email: "+ data.email;
    });
});