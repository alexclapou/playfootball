import { Controller } from "@hotwired/stimulus"
import { validEmail } from "helpers/email_helper"

export default class extends Controller {
  static targets = ['firstName', 'firstNameInput', 'lastName', 'lastNameInput', 'email', 'emailInput',
                    'password', 'passwordInput', 'dateOfBirth', 'dateOfBirthInput', 'button', 'warning']

  connect() {
    this.isValidCombination()
    if(this.wrongCredentials())
      this.markInvalidCredentials()
  }

  isValidEmail(){
    if(validEmail(this.emailTarget.value.toLowerCase())){
      this.emailTarget.classList.remove('warning-input')
      // this.emailInputTarget.classList.remove('warning-label')
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
  
  isValidFirstName(){
    if(this.firstNameTarget.value){
      this.firstNameTarget.classList.remove('warning-input')
      this.firstNameInputTarget.classList.remove('warning-label')
      return true
    }
    if(this.wrongCredentials()){
      this.firstNameTarget.classList.add('warning-input')
      this.firstNameInputTarget.classList.add('warning-label')
    }
    return false
  }

  isValidLastName(){
    if(this.lastNameTarget.value){
      this.lastNameTarget.classList.remove('warning-input')
      this.lastNameInputTarget.classList.remove('warning-label')
      return true
    }
    if(this.wrongCredentials()){
      this.lastNameTarget.classList.add('warning-input')
      this.lastNameInputTarget.classList.add('warning-label')
    }
    return false
  }

  isValidDob(){
    console.log(this.firstNameTarget)
    console.log(this.dateOfBirthTarget)
    return false;
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
    console.log('ads')
    if(this.isValidEmail() && this.isValidPassword() && this.isValidFirstName() && this.isValidLastName() && this.isValidDob())
      this.buttonTarget.disabled = false
    else
      this.buttonTarget.setAttribute('disabled', 'disabled')
  }
}
