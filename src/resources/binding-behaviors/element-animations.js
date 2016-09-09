import {CssAnimator} from 'aurelia-animator-css';
import {inject} from 'aurelia-framework';

@inject(CssAnimator, Element)
export class ElementAnimations {
	
	constructor(animator, element){
		this.animator = animator;
		this.element = element;
	}

	animateElement(selector, animation, classy){
		

		if(selector === undefined || animation === undefined)
			throw new TypeError(`A selector and CSS animation name must be passed to the animator.`);
		
		let element = this.element.querySelector(selector);

		if(element === null)
			throw new TypeError(`The element you are trying to Animate is null`);

		let classed = classy ? this.animator.removeClass(element, 'toggled') : this.animator.addClass(element, 'toggled');
	
		this.animator.animate(element, animation);
	}

	animate(element, animation){

		this.animator.animate(element, animation);
	}

}