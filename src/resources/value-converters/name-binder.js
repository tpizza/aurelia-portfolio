import {computedFrom, bindable} from 'aurelia-framework';

export class NameBinder {

	firstname;
	lastname;

	@computedFrom( 'firstname', 'lastname' )
	get fullName(){

		return this.caseName( this.stripName( `${this.firstname} ${this.lastname}` ) );

	}

	stripName(value){
		return value.replace( /[^A-Za-z\- ]+/g, '' );
	}

	caseName(value){
		let normalize = this.normalizeName;
		return value.replace( /\b[\w']+\b/g, (word) => normalize(word) );
	}

	normalizeName(value){
		return value.charAt(0).toUpperCase() + value.substr(1).toLowerCase();
	}

}
