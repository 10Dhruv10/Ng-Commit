import { Component, inject, computed } from '@angular/core';
import { UserInputService } from '../user-input/user-input.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [ CurrencyPipe ],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  private userInputService = inject(UserInputService);

  investmentResults = computed(() => this.userInputService.getInvestmentsResult()) ;
}
