import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-dependency-injection';
import {ElementAnimations} from './resources/binding-behaviors/element-animations';
import {ContactPanel} from './contact/contact-panel';

@inject(ElementAnimations, ContactPanel)
export class App {
  router;
  app;
  contact;
  animator;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Theo';
    config.map([
      { route: '',              moduleId: 'home/home',   title: 'UI Developer'},
      { route: 'about',         moduleId: 'about/about-detail',   title: 'About', nav: false},
      { route: 'work',      moduleId: 'work/work-landing',   title: 'Projects', nav: false},
      { route: 'work/:id',      moduleId: 'work/work-detail',   title: 'Projects' }
    ]);

    this.router = router;
  }

  constructor(animator, contact) {
    this.message = 'Clean Code is love. Clean Code is life.';
    this.animator = animator;
    this.contact = contact;
    this.app = this;

  }

}
