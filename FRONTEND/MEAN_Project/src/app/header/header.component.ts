import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core'; // Import Input and OnInit
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { // Implement OnInit
  @Output() darkModeToggled = new EventEmitter<boolean>();
  @Input() initialDarkModeState: boolean = false; // New: Input property to receive initial state from parent

  // Internal state for the checkbox, initialized in ngOnInit
  isDarkModeChecked: boolean = false;

  constructor(private viewportScroller: ViewportScroller) {}

  ngOnInit(): void {
    // Initialize the checkbox's visual state based on the input from AppComponent
    this.isDarkModeChecked = this.initialDarkModeState;
  }

  scrollToSection(anchor: string): void {
    this.viewportScroller.scrollToAnchor(anchor);
  }

  onDarkModeToggle(event: Event): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    this.isDarkModeChecked = isChecked; // Update internal state when toggle is used
    this.darkModeToggled.emit(isChecked); // Emit the new state to AppComponent
  }
}
