import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['email', 'password']

  connect() {
    console.log("Hello, Stimulus!", this.element)
  }
}
