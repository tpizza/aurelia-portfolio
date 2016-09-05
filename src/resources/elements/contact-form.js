import {customElement, bindable} from 'aurelia-framework';
import {inject, NewInstance} from 'aurelia-dependency-injection'; 
import {ValidationControllerFactory, ValidationRules} from 'aurelia-validation';

@inject(ValidationControllerFactory)
@customElement('contact-form')
export class ContactForm {
  
  controller;

  firstName;
  lastName;
  phoneNum;
  preferredContact;

  
  email;
  comment;
  ask;

  nature = [
    { id: 0, name: 'Inquiry'},
  	{ id: 1, name: 'Request'}
  ];

  contactMethod = [
  	{ id: 0, name: 'Email'},
  	{ id: 1, name: 'Phone'}
  ];

  constructor(controllerFactory){
   
    this.activateRules();
    this.controller = controllerFactory.createForCurrentScope();
  
  }

  activateRules(){

    ValidationRules.customRule(
      'Mouthoff',
      (value, obj) => {
        let valid = !(/damn/gi).test(value);
        return valid;
      },
      `Watch your mouth!`
    );
    ValidationRules
      .ensure(ContactForm => firstName).required().minLength(2).satisfiesRule('Mouthoff').on(this)
      .ensure(ContactForm => lastName).required().minLength(2).on(this)
      .ensure(ContactForm => phoneNum).required().when(ContactForm => this.preferredContact === 'Phone').on(this)
      .ensure(ContactForm => email).email().required().when(ContactForm => this.preferredContact === 'Email').on(this);

  }

  submit(){
    
    let errors = this.controller.validate();

    errors.then(v => {
      if(v.length === 0){
        console.info('nada');
      } else {
        console.info('error');
      }
    });
    
  }

}
