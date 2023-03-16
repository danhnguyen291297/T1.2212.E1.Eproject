function signup(){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // var user = {
    //     username : username,
    //     email : email,
    //     password : password,
    // }
    // var json = JSON.stringify(user);
    localStorage.setItem("username",username);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    //  localStorage.setItem('foo', JSON.stringify({foo: 'bar'}));

    alert("Dang ky thanh cong")
    window.location.href="home.html"
}
function signin(){
    event.preventDefault();
    var Iusername = document.getElementById("username").value;
    var Iemail = document.getElementById("email").value;
    var Ipassword = document.getElementById("password").value;
    var user = localStorage.getItem("username");
    var mail = localStorage.getItem("email");
    var pass = localStorage.getItem("password");
    // var data = JSON.parse(user);
    if(Iusername == ""){
        alert("Vui long nhap Username va password")
    }
    else if (Iusername == user && Iemail == mail && Ipassword == pass){
        alert("Dang nhap thanh cong")
        window.location.href="home.html"
    }
    else{
        alert("Dang nhap that bai")
    }
}