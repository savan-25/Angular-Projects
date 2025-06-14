import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
   
  activeTab : string = 'skills';
  
  setActiveTab(tab:string)
  {
    this.activeTab = tab;
  }
}
