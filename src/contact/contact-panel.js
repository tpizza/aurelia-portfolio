import {bindable} from 'aurelia-framework';

export class ContactPanel {
	
	@bindable app;
	formName = 'Portfolio Contact Form';
	message = 'Say Hi!';
	contactVisible = false;

	toggleForm(animator){
		
		if(animator === undefined)
			throw new TypeError(`Please bind and pass the Animator`);
	    
	    let animationClass = this.contactVisible ? 'formFlyout' : 'formFlyin';
	    animator.animateElement('.animatedFlyout', animationClass, this.contactVisible);
	    this.contactVisible = this.contactVisible ? false : true;
  	}

  	closeForm(animator){
  		console.info(this.contactVisible);
  		if(animator === undefined)
			throw new TypeError(`Please bind and pass the Animator`);
	    
	    animator.animateElement('.animatedFlyout', 'formFlyout', true);
	    this.contactVisible = false;
  	}
}