$(document).on('click', '#showPassword', function() {
  const password_input = $("#sh-ps").get(0)
  if ($('#showPassword').is(":checked")){
    password_input.type = 'text'
  }
  else{
    password_input.type = 'password'
  }
});
