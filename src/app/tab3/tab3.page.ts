import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }
  goProfile() {
    this.route.navigateForward('/profile');
  }
}
