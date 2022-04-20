
$(document).ready(function () {
	

    
    // khiểm tra email
        const email =
            document.getElementById('email');
        email.addEventListener('blur', ()=>{
        let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if(regex.test(s)){
            email.classList.remove(
                    'không hợp lệ');
            emailError = true;
            }
            else{
                email.classList.add(
                    'không hợp lệ');
                emailError = false;
            }
        })
        
    // kiểm tra mật khẩu
        $('#passcheck').hide();
        let passwordError = true;
        $('#password').keyup(function () {
            validatePassword();
        });
        function validatePassword() {
            let passwordValue =
                $('#password').val();
            if (passwordValue.length == '') {
                $('#passcheck').show();
                passwordError = false;
                return false;
            }
            if ((passwordValue.length < 6)||
                (passwordValue.length > 20)) {
                $('#passcheck').show();
                $('#passcheck').html
    ("mật khẩu phải trên 6 ký tự và không được vượt quá 20 ký tự");
                $('#passcheck').css("color", "red");
                passwordError = false;
                return false;
            } else {
                $('#passcheck').hide();
            }
        }
        
    // Submit 
        $('#submitbtn').click(function () {
            validateUsername();
            validatePassword();
            validateConfirmPassword();
            validateEmail();
            if ((usernameError == true) &&
                (passwordError == true) &&
                (confirmPasswordError == true) &&
                (emailError == true)) {
                return true;
            } else {
                return false;
            }
        });
    });
    