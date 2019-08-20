$('#jq').click(function (){
    var user = $('#user').val();

    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/users/' + user,
        success: function(details){
            console.log('success', details);
            
            $('#avatar').html('<img src = "'+details.avatar_url+'">');
            $('#name').html("name: " +details.name);
            $('#bio').html("bio: " +details.bio);
            $('#email').html("email: " +details.email);

        }
    });
});