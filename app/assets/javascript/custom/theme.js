import { getCookie } from "./cookies";

// when user first visit the application keep the default mode
if(getCookie('theme') == ''){
    document.cookie = 'theme=auto;path=/'
}

document.addEventListener("turbo:before-cache", function() {
    // const flash_message_element = document.querySelector(".flash")
    // if (flash_message_element) {
    //   flash_message_element.remove()
    // }
    console.log('asd')
  })
