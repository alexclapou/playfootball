import { getCookie } from "./cookies";

// when user first visit the application keep the default mode
if(getCookie('theme') == ''){
    document.cookie = 'theme=auto;path=/'
}