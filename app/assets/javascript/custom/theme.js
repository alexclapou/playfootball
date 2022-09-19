import { getCookie } from "./cookies";

// when user first visit the application keep the default mode
if(getCookie('theme') == ''){
    document.cookie = 'theme=auto;path=/'
}

// user can choose his theme
$(document).on('click', '.choose-theme', function() {
    var radioValue = $("input[name='theme-radio']:checked").val();
    document.body.classList.remove("dark");
    document.body.classList.remove("auto");
    document.body.classList.remove("light");
    document.cookie = `theme=${radioValue};path=/`
    
    if(radioValue != 'auto')
        document.body.classList.toggle(radioValue);
});
