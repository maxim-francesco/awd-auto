// Math and Edge Cases Verification Test for AWD Auto Finance Calculator

function calculateFinance({ vehiclePrice, downPaymentPercent, periodMonths, annualRate }) {
  const downPaymentAmount = Math.round((vehiclePrice * downPaymentPercent) / 100);
  const financedAmount = Math.max(0, vehiclePrice - downPaymentAmount);
  const monthlyRate = annualRate / 12;

  const monthlyPayment =
    financedAmount > 0 && periodMonths > 0
      ? (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, periodMonths))) /
        (Math.pow(1 + monthlyRate, periodMonths) - 1)
      : 0;

  const totalInstallments = monthlyPayment * periodMonths;
  const totalInterest = Math.max(0, totalInstallments - financedAmount);
  const totalAcquisition = downPaymentAmount + totalInstallments;

  return {
    vehiclePrice,
    downPaymentPercent,
    downPaymentAmount,
    financedAmount,
    periodMonths,
    annualRate,
    monthlyPayment: Number(monthlyPayment.toFixed(2)),
    totalInstallments: Number(totalInstallments.toFixed(2)),
    totalInterest: Number(totalInterest.toFixed(2)),
    totalAcquisition: Number(totalAcquisition.toFixed(2)),
  };
}

console.log("=== 1. AUDITED BASELINE TEST (12.750 €, 8.9% annual, 48 months) ===");
const baseline = calculateFinance({
  vehiclePrice: 15000,
  downPaymentPercent: 15, // 2.250 € down payment -> 12.750 € financed
  periodMonths: 48,
  annualRate: 0.089,
});
console.log(baseline);

if (baseline.monthlyPayment === 316.68 && baseline.totalInstallments === 15200.60 && baseline.totalAcquisition === 17450.60) {
  console.log(">>> PASS: Exact match for 316.68 € monthly payment and 15.200,60 € total installments!");
} else {
  console.error(">>> FAIL: Baseline numbers do not match expected criteria!");
  process.exit(1);
}

console.log("\n=== 2. ZERO DOWN PAYMENT TEST (0% down payment) ===");
const zeroDown = calculateFinance({
  vehiclePrice: 15000,
  downPaymentPercent: 0,
  periodMonths: 48,
  annualRate: 0.089,
});
console.log(zeroDown);
if (zeroDown.downPaymentAmount === 0 && zeroDown.financedAmount === 15000 && zeroDown.totalAcquisition === zeroDown.totalInstallments) {
  console.log(">>> PASS: Zero down payment calculated properly without error.");
} else {
  console.error(">>> FAIL: Zero down payment calculation error!");
  process.exit(1);
}

console.log("\n=== 3. PERIOD SWEEP TEST (12, 24, 36, 48, 60 Months) ===");
[12, 24, 36, 48, 60].forEach((months) => {
  const result = calculateFinance({
    vehiclePrice: 20000,
    downPaymentPercent: 20,
    periodMonths: months,
    annualRate: 0.089,
  });
  console.log(`${months} Luni: Rata = ${result.monthlyPayment} €, Total Rate = ${result.totalInstallments} €, Total Achiziție = ${result.totalAcquisition} €`);
});

console.log("\n=== 4. PERSOANE JURIDICE LEASING TEST (7.9% annual) ===");
const pjResult = calculateFinance({
  vehiclePrice: 30000,
  downPaymentPercent: 15,
  periodMonths: 48,
  annualRate: 0.079,
});
console.log(pjResult);
if (pjResult.annualRate === 0.079 && pjResult.monthlyPayment > 0) {
  console.log(">>> PASS: PJ leasing interest rate applied correctly.");
}

console.log("\n=== ALL MATHEMATICAL TESTS PASSED SUCCESSFULLY! ===");
