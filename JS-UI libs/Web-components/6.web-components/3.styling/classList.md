using classes in css dev

cslx


observer / 

  /** The current value:  */
  @property({ type: String, notify: true, observer:'addLabelFloat' })
  value: string = '';

  @property({ type: Boolean, notify: true, observer:'addWidth' })
  width: boolean = false;

  addWidth(newValue) {
    if (newValue) {
      const input = this.shadowRoot.querySelector('input')
      input.style.width = '256px'
    }
  }
  addLabelFloat() {
    const label = this.shadowRoot.querySelector('label')
    label.classList.add('mdc-floating-label--float-above');
  }
=======
  /** The current value */
  @property({ type: String, notify: true, observer: MdcTextFieldComponent.prototype._valueChanged })
  value: string = '';

  private _valueChanged(value, oldValue) {
    if (!oldValue && value) {
      this.shadowRoot.querySelector('label').classList.add('mdc-floating-label--float-above');
    } else if (!value) {
      this.shadowRoot.querySelector('label').classList.remove('mdc-floating-label--float-above');
    }
  }