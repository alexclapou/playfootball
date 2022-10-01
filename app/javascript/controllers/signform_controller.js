import { Controller } from "@hotwired/stimulus"
import { validEmail } from "helpers/email_helper"

export default class extends Controller {
  static targets = ['email', 'password', 'button']

  connect() {
    this.isValidCombination()
  }
  
  isValidEmail(){
    if(validEmail(this.emailTarget.value.toLowerCase()))
      return true
    return false
  }

  isValidPassword(){
    if(this.passwordTarget.value)
      return true
    return false
  }
  cons(event){
    console.log('sex')
  }

  isValidCombination(){
    if(this.isValidEmail() && this.isValidPassword())
      this.buttonTarget.disabled = false
    else
      this.buttonTarget.setAttribute('disabled', 'disabled')
  }

  sbmt(){
    console.log('s')
  }
}
