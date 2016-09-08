import {bindable} from 'aurelia-framework';

export class ContactPanel {
	
	@bindable app;
	message = 'Say Hi!';
	contactVisible = false;

	toggleForm(animator){
		this.contactVisible;
		
		if(animator === undefined)
			throw new TypeError(`Please bind and pass the Animator from your View`);
	    
	    let animationClass = this.contactVisible ? 'formFlyout' : 'formFlyin';
	    animator.animateElement('.animatedFlyout', animationClass, this.contactVisible);
	    this.contactVisible = this.contactVisible ? false : true;
  	}
}