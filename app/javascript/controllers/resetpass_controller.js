import { Controller } from "@hotwired/stimulus"
import { validEmail } from "helpers/email_helper"
export default class extends Controller {
  static targets = ['email', 'button']

  connect() {
    this.isValidEmail()
  }

  isValidEmail(){
    if(validEmail(this.emailTarget.value.toLowerCase()))
      this.buttonTarget.disabled = false
    else
      this.buttonTarget.setAttribute('disabled', 'disabled')
  }
}
