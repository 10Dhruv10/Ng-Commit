import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from "./highlight.directive";
import { NgIf } from '@angular/common';
import { StructuralDirective } from "./structural.directive";


@Component({
  selector: 'app-root',
  standalone : true,
  imports: [RouterOutlet, HighlightDirective, NgIf, StructuralDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '07-directive';

  color = '';
}
