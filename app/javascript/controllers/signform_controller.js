import { Controller } from "@hotwired/stimulus"
import { validEmail } from "helpers/email_helper"

export default class extends Controller {
  static targets = ['email', 'emailInput', 'password', 'passwordInput', 'button', 'warning']

  connect() {
    this.isValidCombination()
    if(this.wrongCredentials())
      this.markInvalidCredentials()
  }

  isValidEmail(){
    if(validEmail(this.emailTarget.value.toLowerCase())){
      this.emailTarget.classList.remove('warning-input')
      this.emailInputTarget.classList.remove('warning-label')
      return true
    }
    if(this.wrongCredentials()){
      this.emailTarget.classList.add('warning-input')
      this.emailInputTarget.classList.add('warning-label')
    }
    return false
  }

  isValidPassword(){
    if(this.passwordTarget.value){
      this.passwordTarget.classList.remove('warning-input')
      this.passwordInputTarget.classList.remove('warning-label')
      return true
    }
    if(this.wrongCredentials()){
      this.passwordTarget.classList.add('warning-input')
      this.passwordInputTarget.classList.add('warning-label')
    }
    return false
  }

  wrongCredentials(){
    return document.getElementById('warningId') != null
  }
  
  markInvalidCredentials(){
    this.emailTarget.classList.add('warning-input')
    this.emailInputTarget.classList.add('warning-label')
    this.passwordTarget.classList.add('warning-input')
    this.passwordInputTarget.classList.add('warning-label')
  }

  isValidCombination(){
    if(this.isValidEmail() && this.isValidPassword())
      this.buttonTarget.disabled = false
    else
      this.buttonTarget.setAttribute('disabled', 'disabled')
  }
}
