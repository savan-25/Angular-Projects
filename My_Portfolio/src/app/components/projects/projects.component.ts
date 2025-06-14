import { Component } from '@angular/core';


interface project {
  title: string;
  description: string;
  image: string;
  link: string;
}
@Component({
  selector: 'app-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: project[] = [
    {
      title: 'Personal PortFolio Website',
      description: 'A Personal PortFolio Website Showcase my projects,skills and experience',
      image: '/assets/images/portfolio.png',
      link: 'https://github.com/savan-25/Virtual_File_Management_System'
    },
      {
      title: 'Restorent Management Website',
      description: 'A FullStack Restorent Website with user Authentication',
      image: '/assets/images/Restorentmanagement.jpg',
      link: 'https://github.com/savan-25/Virtual_File_Management_System'
    },
    {
      title: 'Customized Database Management System',
      description: 'A Research Based Project which behave like Mysql',
      image: '/assets/images/Restorentmanagement.jpg',
      link: 'https://github.com/savan-25/Virtual_File_Management_System'
    },
    {
      title: 'Customized Database Management System',
      description: 'A Research Based Project which behave like Mysql',
      image: '/assets/images/Restorentmanagement.jpg',
      link: 'https://github.com/savan-25/Virtual_File_Management_System'
    }

  ]

}
