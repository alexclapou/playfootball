import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['email']

  connect() {
    this.submitButton().setAttribute('disabled', 'disabled')
  }

  typeEmail(){
    this.validEmail(this.emailTarget.value)
  }

  validEmail(email){
    const match = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(match.test(email.toLowerCase()))
      this.submitButton().disabled = false
    else
      this.submitButton().setAttribute('disabled', 'disabled')
  }

  submitButton() {
    return this.element.querySelector("input[type='submit']")
  }
}
