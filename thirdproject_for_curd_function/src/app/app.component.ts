import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './Services/myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'secondproject';
  inputvar = "  I am your parent component(App component) of child component(list component) ";
  constructor(@Inject(MyserviceService) myservice) {
  
    console.log(myservice);
    console.log("This is @Component decorator also called (component decorator) with sign of (@) from app.component.ts")
  }

  @HostListener('click',['$event'])
  onhostclick(event:Event){
    alert("This is @hostlistner");
  }
  numberOfClicks = 0;

  @HostListener('click', ['$event'])
  onClick(btn) {
    console.log('button', btn, 'number of clicks:', this.numberOfClicks++);
}

}