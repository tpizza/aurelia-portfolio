import {Router, RouterConfiguration} from 'aurelia-router';
import {inject} from 'aurelia-dependency-injection';
import {AppAnimations} from './resources/binding-behaviors/form-animation';

@inject(AppAnimations)
export class App {
  router: Router;
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

  constructor(animator) {
    this.message = 'Clean Code is love. Clean Code is life.';
    this.animator = animator;
  }
}
