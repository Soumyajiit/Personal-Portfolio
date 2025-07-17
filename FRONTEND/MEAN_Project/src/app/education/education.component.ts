import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  educationEntries = [
    {
      degree: 'Bachelor of Technology in Electronics and Communication Engineering',
      institution: 'Narula Institute of Technology',
      year: '2023 - 2027',
      details: [
        'Relevant Coursework: Data Structures & Algorithms, Web Technologies, Database Management Systems, Object-Oriented Programming, Operating Systems.',
        'GPA: X.X/4.0 (or equivalent)',
        'Key Projects: [Mention a relevant academic project or two, e.g., "Developed a secure online voting system as part of Database course project."]'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Baranagar Narendranath Vidyamandir',
      year: '2021 - 2023',
      details: [
        'Focus: Science Stream (Physics, Chemistry, Mathematics, Computer Science)',
        'Achieved 82% in Board Examinations'
      ]
    }
    // Add more education entries as needed
  ];
}
