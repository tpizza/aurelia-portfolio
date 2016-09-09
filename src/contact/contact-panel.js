import {bindable} from 'aurelia-framework';

export class ContactPanel {
	
	@bindable app;
	formName = 'Portfolio Contact Form';
	message = 'Say Hi!';
	contactVisible = false;

	toggleForm(animator){
		
		if(animator === undefined)
			throw new TypeError(`Please bind and pass the Animator`); 

	    animator.animateElement('.animatedFlyout', this.contactVisible ? 'formFlyout' : 'formFlyin', this.contactVisible);
		
		animator.animator[this.contactVisible ? 'removeClass' : 'addClass'](document.body, 'toggled');

	    this.contactVisible = this.contactVisible ? false : true;
  	}

  	closeForm(animator){
  		console.info(this.contactVisible);
  		if(animator === undefined)
			throw new TypeError(`Please bind and pass the Animator`);
	    
	    animator.animateElement('.animatedFlyout', 'formFlyout', true);
	    animator.animator.removeClass(document.body, 'toggled');

	    this.contactVisible = false;
  	}
}