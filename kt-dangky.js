// Document is ready
$(document).ready(function () {
	
    // ho
        $('#hocheck').hide();
        let hoError = true;
        $('#ho').keyup(function () {
            validateho();
        });
        
        function validateho() {
        let hoValue = $('#ho').val();
        if (hoValue.length == '') {
        $('#hocheck').show();
            hoError = false;
            return false;
        }
        else if((hoValue.length < 1)||
                (hoValue.length > 20)) {
            $('#hocheck').show();
            $('#hocheck').html
    ("họ không được ít hơn 1 ký tự và lớn hơn 20 ký tự");
            hoError = false;
            return false;
        }
        else {
            $('#hocheck').hide();
        }
        }
        // ten
        $('#tencheck').hide();
        let tenError = true;
        $('#tennames').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#tennames').val();
        if (usernameValue.length == '') {
        $('#tencheck').show();
            usernameError = false;
            return false;
        }
        else if((tenValue.length < 1)||
                (tenValue.length > 20)) {
            $('#tencheck').show();
            $('#tencheck').html
    ("tên không được ít hơn 1 ký tự và lớn hơn 20 ký tự");
            tenError = false;
            return false;
        }
        else {
            $('#tencheck').hide();
        }
        }
        // Username
        $('#usercheck').hide();
        let usernameError = true;
        $('#usernames').keyup(function () {
            validateUsername();
        });
        
        function validateUsername() {
        let usernameValue = $('#usernames').val();
        if (usernameValue.length == '') {
        $('#usercheck').show();
            usernameError = false;
            return false;
        }
        else if((usernameValue.length < 3)||
                (usernameValue.length > 20)) {
            $('#usercheck').show();
            $('#usercheck').html
    ("tài khoản không được ít hơn 3 ký tự và lớn hơn 20 ký tự");
            usernameError = false;
            return false;
        }
        else {
            $('#usercheck').hide();
        }
        }
    
    // Validate Email
        const email =
            document.getElementById('email');
        email.addEventListener('blur', ()=>{
        let regex =
    /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if(regex.test(s)){
            email.classList.remove(
                    'is-invalid');
            emailError = true;
            }
            else{
                email.classList.add(
                    'is-invalid');
                emailError = false;
            }
        })
        
    // Validate Password
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
            if ((passwordValue.length < 3)||
                (passwordValue.length > 20)) {
                $('#passcheck').show();
                $('#passcheck').html
    ("mật khẩu không được ít hơn 1 ký tự và lớn hơn 20 ký tự");
                $('#passcheck').css("color", "red");
                passwordError = false;
                return false;
            } else {
                $('#passcheck').hide();
            }
        }
            
    // Validate Confirm Password
        $('#conpasscheck').hide();
        let confirmPasswordError = true;
        $('#conpassword').keyup(function () {
            validateConfirmPassword();
        });
        function validateConfirmPassword() {
            let confirmPasswordValue =
                $('#conpassword').val();
            let passwordValue =
                $('#password').val();
            if (passwordValue != confirmPasswordValue) {
                $('#conpasscheck').show();
                $('#conpasscheck').html(
                    "*mật khẩu không khớp");
                $('#conpasscheck').css(
                    "color", "red");
                confirmPasswordError = false;
                return false;
            } else {
                $('#conpasscheck').hide();
            }
        }
        
    // Submit button
        $('#submitbtn').click(function () {
            validateUsername();
            validatePassword();
            validateConfirmPassword();
            validateEmail();
            if ((hoError == true) &&
                (tenError == true) &&
                (usernameError == true) &&
                (passwordError == true) &&
                (confirmPasswordError == true) &&
                (emailError == true)) {
                return true;
            } else {
                return false;
            }
        });
    });
    