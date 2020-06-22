import {
  formatMoney,
  formatMoneyPositiveNegative,
  formatPercent,
} from '../helpers/formatter';

export default function CalculateInstallments(ammount, interest, period) {
  const installments = [];

  let newAmmout = ammount;

  for (let i = 1; i <= period; i++) {
    newAmmout = ammount * (1 + interest / 100) ** i;

    const percentValue = ((newAmmout - ammount) / ammount) * 100;

    installments.push({
      id: i,
      value: formatMoney(newAmmout),
      percent: formatPercent(percentValue),
      diference: formatMoneyPositiveNegative(newAmmout - ammount),
    });
  }

  return installments;
}
