import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
loadedFeature:string='recipe'
  onNavigation(feature:string){
    this.loadedFeature=feature
    console.log(feature)
  }
}
