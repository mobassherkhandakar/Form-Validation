//from validation
function validation() {
    var userName = document.getElementById('username'),
    userMail = document.getElementById('useremail');
// Username
if (userName.value == '') {
    document.getElementById('user-error').innerHTML = 'please enter your name';
    return false;
}
else {
    document.getElementById('user-error').innerHTML = '';
}
//Email
if (userMail.value == '') {
    document.getElementById('mail-error').innerHTML = 'please enter your email';
    return false;
}
else {
    document.getElementById('mail-error').innerHTML = '';
}
}