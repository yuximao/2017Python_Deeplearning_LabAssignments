function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var a = new XMLHttpRequest();
    a.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            showUser(JSON.parse(this.responseText));
        }
        else{noSuchUser(user);}
    };

    a.open("GET","https://api.github.com/users/"+user,true);
    a.send();
}
function getGithubInfo2(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var a = new XMLHttpRequest();
    a.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var userset;
            userset=(JSON.parse(this.responseText));
            showUser2(userset)
        }
        else{noSuchUser(user);}
    };

    a.open('GET',"https://api.github.com/users/"+user+"/followers",true);
    a.send();
}

function getGithubInfo3(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it. The function should finally return the object(it now contains the response!)
    var a = new XMLHttpRequest();
    a.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            var userrepo;
            userrepo=(JSON.parse(this.responseText));
            showUser3(userrepo)
        }
        else{noSuchUser(user);}
    };

    a.open('GET',"https://api.github.com/users/"+user+"/repos",true);
    a.send();
}

function showUser(user) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $('#profile h2').html("username:"+user.login);
    $('#profile .userid').html("userid:"+user.id);
    $('#profile .avatar').html("<img src=https://avatars0.githubusercontent.com/u/"+user.id+"?v=4?s=220/>");
    $('#profile .information').html("<a href='https://github.com/"+user.login+"'>Visit this guy Now!</a>");
    $('#profile .creat').html("creat date is: "+user.created_at);
    $('#profile .follower').html("The number of his followers is: "+user.followers);
    $('#profile .public_repos').html("The number of his public repos is: "+user.public_repos);

}

function showUser2(userset) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $('#profile .followers').html("The 5 of his followers name is: <br/>username:"+userset[0].login);
    $('#profile .followers2').html("username:"+userset[1].login);
    $('#profile .followers3').html("username:"+userset[2].login);
    $('#profile .followers4').html("username:"+userset[3].login);
    $('#profile .followers5').html("username:"+userset[4].login);
}

function showUser3(userrepo) {

    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    $('#profile .public1').html("The 5 of his followers name is: <br/> name:"+userrepo[0].name);
    $('#profile .public2').html("name:"+userrepo[1].name);
    $('#profile .public3').html("name:"+userrepo[2].name);
    $('#profile .public4').html("name:"+userrepo[3].name);
    $('#profile .public5').html("name:"+userrepo[4].name);
}

     function noSuchUser(username) {
//     //3. set the elements such that a suitable message is displayed
        document.getElementById('error').innerHTML="No such person! Try again."
    }

$(document).ready(function(){
    $(document).on('keypress', '#username', function(e){
        // //check if the enter(i.e return) key is pressed
        if (e.which == 13) {
        //     //get what the user enters
             username = $(this).val();
        //
        //     //reset the text typed in the input
             $(this).val("");
        //     //get the user's information and store the respsonse
             getGithubInfo(username);
             getGithubInfo2(username);
            getGithubInfo3(username);
        //     //if the response is successful show the user's details
        //     if (response.status == 200) {
        //         showUser(JSON.parse(response.responseText));
        //         //else display suitable message
        //     } else {
        //         noSuchUser(username);
        //     }
        }
    })
});
