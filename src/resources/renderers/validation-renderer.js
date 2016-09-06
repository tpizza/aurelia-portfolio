import {ValidationError, RenderInstruction} from 'aurelia-validation';

export class CustomValidationRenderer {

  render(instruction) {
    console.log(instruction);
    for (let {error, elements} of instruction.unrender) {
      for (let element of elements) {
        this.remove(element, error);
      }
    }

    for (let {error, elements} of instruction.render) {
      for (let element of elements) {
        this.add(element, error);
      }
    }
  }

  add(element, error) {
    element.classList.add('has-error');
    // add error div
    const MESSAGE = document.createElement('div');
    MESSAGE.className = 'validation-message-div text-danger';
    MESSAGE.textContent = error.message;
    MESSAGE.id = `validation-message-${error.id}`;
    element.parentNode.insertBefore(MESSAGE, element.nextSibling);
  }

  remove(element, error) {
    // remove error div
    const MESSAGE = element.parentElement.querySelector(`#validation-message-${error.id}`);
    if (MESSAGE) {
      element.parentElement.removeChild(MESSAGE);
      element.classList.remove('has-error');
    }
  }
}

 