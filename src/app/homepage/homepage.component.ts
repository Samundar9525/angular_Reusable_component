import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements AfterViewInit {

  cards = [
    {index:1,name:'Dialog Component'},
    {index:2,name:'Form Component'},
    {index:3,name:'Table Component'},
    {index:4,name:'Snackbar Component'},
    {index:5,name:'Charts Component'},
  ]
  @Output() cardSelected = new EventEmitter();
  constructor(private router: Router){

  }

  ngAfterViewInit(): void {
    const stars = document.getElementById("stars") as HTMLElement;
    const moon = document.getElementById("moon") as HTMLElement;
    const mountains_back = document.getElementById("mountains_back") as HTMLElement;
    const mountains_front = document.getElementById("mountains_front") as HTMLElement;

    window.addEventListener("scroll", () => {
      const value = window.scrollY;
      stars.style.left = value * 0.25 + "px";
      moon.style.top = value * 1.05 + "px";
      mountains_back.style.top = value * 0.5 + "px";
      mountains_front.style.top = value * 0 + "px";
    });
  }

  cardClicked(card:any){
    this.router.navigate(['dashboard',card.index])
  }
}
