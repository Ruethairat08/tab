import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  profile={
    image:'https://pbs.twimg.com/media/Cjyar3VUgAASSP8.jpg:large',
    name:'ด.ช. เจบี',
    lastname:'คิม'
  }

  constructor(
    public route: NavController
  ) { }

  ngOnInit() {
  }

  back(){
    this.route.navigateForward ('/tabs/tab3');
  }
}
