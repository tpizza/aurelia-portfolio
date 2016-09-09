import {customElement, bindable} from 'aurelia-framework';
import {inject} from 'aurelia-dependency-injection'; 
import {ValidationControllerFactory, ValidationRules} from 'aurelia-validation';
import {HttpClient} from 'aurelia-http-client';
import {CustomValidationRenderer} from '../../renderers/validation-renderer';

@inject(ValidationControllerFactory)
@customElement('contact-form')
export class ContactForm {
  
  controller;
  client;

  firstName;
  lastName;
  phoneNumber;
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
    this.controller.addRenderer(new CustomValidationRenderer());
    this.client = new HttpClient()
      .configure( x => {
        x.withBaseUrl('http://theopizza.com')
      });

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
      .ensure(ContactForm => phoneNumber).required().when(ContactForm => this.preferredContact === 'Phone').on(this)
      .ensure(ContactForm => email).email().required().when(ContactForm => this.preferredContact === 'Email').on(this);

  }

  submit(){
    
    let errors = this.controller.validate();

    errors.then(v => {
      if(v.length === 0){
        console.info('passed');
        let formData = new FormData();
        formData.append('formName', 'Portfolio Contact Form');
        formData.append('firstName', this.firstName);
        formData.append('lastName', this.lastName);
        formData.append('email', this.email);
        formData.append('phoneNumber', this.phoneNumber);
        formData.append('comment', this.comment);
        formData.append('preferredContactMethod', this.preferredContact);

        console.info(formData);
        this.client.post('request/ContactSubmit.php', formData); 
        
      } else {
        console.info('error');
      }
    });
    
  }

}
