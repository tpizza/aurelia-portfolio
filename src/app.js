import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router){
    config.title = 'Theo.Pizza';
    config.map([
      { route: '',              moduleId: 'home/home',   title: 'UI Developer'},
      { route: 'about',         moduleId: 'about/about-detail',   title: 'About', nav: true},
      { route: 'contact',  moduleId: 'contact/contact-detail', title:'Contact', nav: true },
      { route: 'work',      moduleId: 'work/work-landing',   title: 'Projects', nav: true},
      { route: 'work/:id',      moduleId: 'work/work-detail',   title: 'Projects' }
    ]);

    this.router = router;
  }

  constructor() {
    this.message = 'Clean Code is love. Clean Code is life.';
  }
}
