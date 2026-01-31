import { Injectable, signal } from "@angular/core";


@Injectable({providedIn: "root"})

export class UserInputService{

    userData = signal({
        initial: '',
        annual: '',
        expected: '',
        duration: ''
    })

    setUserData(data: any){
        this.userData.set(data);
    }

    calculateInvestmentResults(initialInvestment: number, annualInvestment: number, expectedReturn: number, duration: number) {
        const annualData = [];
        let investmentValue = initialInvestment;

        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
            });
        }

        return annualData;
    }
    
    getInvestmentsResult(){
        const data = this.userData();

        if (data.initial !== '' && data.annual !== '' && data.expected !== '' && data.duration !== ''){
            return this.calculateInvestmentResults(+data.initial, +data.annual, +data.expected, +data.duration);   // + converted it to number type from string type
        }

        return []
    }
    
    
}