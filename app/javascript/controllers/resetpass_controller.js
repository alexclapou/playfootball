import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['email', 'button']

  connect() {
    this.buttonTarget.setAttribute('disabled', 'disabled')
  }

  isValidEmail(){
    const match = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    if(match.test(this.emailTarget.value.toLowerCase()))
      this.buttonTarget.disabled = false
    else
      this.buttonTarget.setAttribute('disabled', 'disabled')
  }
}
