import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Theo.Pizza';
    config.map([
      { route: '',              moduleId: 'default-landing',   title: 'UI Developer'},
      { route: 'about',         moduleId: 'about-detail',   title: 'About', nav: true},
      { route: 'contact',  moduleId: 'contact-detail', title:'Contact', nav: true },
      { route: 'work',      moduleId: 'work-landing',   title: 'Projects', nav: true},
      { route: 'work/:id',      moduleId: 'work-detail',   title: 'Projects' }
    ]);

    this.router = router;
  }

  constructor() {
    this.message = 'My First Stab at Aurelia';
  }
}
