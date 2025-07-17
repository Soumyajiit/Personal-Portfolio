import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent {
  skills = [
    'Angular', 'TypeScript', 'HTML', 'CSS',
    'Node.js', 'Express', 'MongoDB', 'REST APIs'
  ];

  projects = [
    {
      icon: '📘',
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio made with Angular.'
    },
    {
      icon: '🍀',
      title: 'File Share App',
      description: 'File sharing app using links and QR codes.'
    }
  ];
}
