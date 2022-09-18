function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

// when user first visit the application keep the default mode
if(getCookie('theme') == ''){
    document.cookie = 'theme=auto'
}


// user can choose his theme
$(document).on('click', '.choose-theme', function() {
    var radioValue = $("input[name='theme-radio']:checked").val();
    document.cookie = `theme=${radioValue}`
    document.body.classList.remove("dark");
    document.body.classList.remove("auto");
    document.body.classList.remove("light");
    if(radioValue != 'auto')
        document.body.classList.toggle(radioValue);
    console.log(radioValue)
});