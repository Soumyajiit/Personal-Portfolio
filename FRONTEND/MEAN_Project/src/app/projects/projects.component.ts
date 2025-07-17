import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Portfolio Website',
      description: 'Developed this responsive portfolio using Angular to showcase my skills and projects, focusing on a clean and modern design.',
      link: '#' // Replace with actual project link
    },
    {
      title: 'Discord Bot',
      description: 'Created an interactive Discord bot with custom commands and features to enhance community engagement and automate tasks.',
      link: 'https://github.com/Soumyajiit/Discord-Bot'
    },
    {
      title: 'File Sharing Application',
      description: 'Engineered a robust file sharing app from scratch using the MEAN stack (MongoDB, Express.js, Angular, Node.js), demonstrating full-stack development capabilities.',
      link: 'https://github.com/Soumyajiit/FileShare-Webapp'
    }
  ];
}
