function check(){
    var _name=document.getElementById('name');
    var _pass=document.getElementById('password');
    var _repassword=document.getElementById('repass');
//name
    if(_name.value==('')){
    document.getElementById('name').classList.add('red_border');
    document.getElementById('error_name').classList.remove('error');
    return false;
    } else {
    document.getElementById('name').classList.remove('red_border');
    document.getElementById('error_name').classList.add('error');
    }
//password    
if(_pass.value==('')){
    document.getElementById('password').classList.add('red_border');
    document.getElementById('error_password').classList.remove('error');
    return false;
    } else {
        document.getElementById('password').classList.remove('red_border');
        document.getElementById('error_password').classList.add('error');
    }
//repassword
    if(_repassword.value==('')){
        document.getElementById('repass').classList.add('red_border');
        document.getElementById('error_repass').classList.remove('error');
        return false;
    } else {
        document.getElementById('repass').classList.remove('red_border');
        document.getElementById('error_repass').classList.add('error');
    }
}