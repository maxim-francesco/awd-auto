"use client"

import { useState } from "react"
import { Calculator, ShieldCheck, ArrowRight, Info } from "lucide-react"
import { Link } from "react-router-dom"

interface FinanceCalculatorWidgetProps {
  initialPrice?: number
}

export default function FinanceCalculatorWidget({ initialPrice = 15000 }: FinanceCalculatorWidgetProps) {
  const [clientType, setClientType] = useState<"fizica" | "juridica">("fizica")
  const [vehiclePrice, setVehiclePrice] = useState<number>(initialPrice)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(15)
  const [periodMonths, setPeriodMonths] = useState<number>(48)

  // Explicit hypothetical parameters
  // Persoane Fizice: hypothetical fixed nominal interest rate ~8.9% per annum (Credit Auto / Nevoi Personale)
  // Persoane Juridice: hypothetical leasing reference nominal rate ~7.9% per annum (Leasing Financiar PJ)
  const annualInterestRate = clientType === "juridica" ? 0.079 : 0.089
  const monthlyRate = annualInterestRate / 12

  // Exact calculations using standard banking amortization formula:
  // A = P * [r(1+r)^n] / [(1+r)^n - 1]
  const downPaymentAmount = Math.round((vehiclePrice * downPaymentPercent) / 100)
  const financedAmount = Math.max(0, vehiclePrice - downPaymentAmount)

  const monthlyPayment =
    financedAmount > 0 && periodMonths > 0
      ? (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, periodMonths))) /
        (Math.pow(1 + monthlyRate, periodMonths) - 1)
      : 0

  const totalInstallments = monthlyPayment * periodMonths
  const totalInterest = Math.max(0, totalInstallments - financedAmount)
  const totalAcquisition = downPaymentAmount + totalInstallments

  const formatEuro = (val: number, decimals: number = 2) => {
    return new Intl.NumberFormat("ro-RO", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(val)
  }

  return (
    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xl overflow-hidden text-slate-900">
      {/* Top Header Bar */}
      <div className="bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-[#C8A86B] uppercase tracking-wider mb-2">
            <Calculator className="w-3.5 h-3.5" />
            Simulator Matematic Demonstrativ • Estimare Ipotetică
          </div>
          <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white font-heading">
            Simulează Bugetul de Finanțare
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-xl">
            Calcul matematic de amortizare strict orientativ pentru configurarea bugetului personal sau al companiei.
          </p>
        </div>

        {/* Client Type Toggle */}
        <div className="inline-flex p-1 rounded-xl bg-slate-800 border border-slate-700 self-start sm:self-auto">
          <button
            type="button"
            onClick={() => setClientType("fizica")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              clientType === "fizica"
                ? "bg-[#C8A86B] text-slate-950 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Credit Auto (Pers. Fizică)
          </button>
          <button
            type="button"
            onClick={() => setClientType("juridica")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
              clientType === "juridica"
                ? "bg-[#C8A86B] text-slate-950 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Leasing Auto (Pers. Juridică)
          </button>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Sliders Form Controls */}
        <div className="lg:col-span-7 space-y-6">
          {/* Price Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Preț Automobil (EUR{clientType === "fizica" ? " • TVA inclus" : ""})
              </label>
              <span className="text-lg font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                {formatEuro(vehiclePrice, 0)} €
              </span>
            </div>
            <input
              type="range"
              min={5000}
              max={65000}
              step={500}
              value={vehiclePrice}
              onChange={(e) => setVehiclePrice(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C8A86B]"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>5.000 €</span>
              <span>35.000 €</span>
              <span>65.000 €</span>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Avans ({downPaymentPercent}%)
              </label>
              <span className="text-sm font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                {formatEuro(downPaymentAmount, 0)} €
              </span>
            </div>
            <input
              type="range"
              min={clientType === "juridica" ? 10 : 0}
              max={50}
              step={5}
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C8A86B]"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>{clientType === "juridica" ? "10% (Avans minim PJ)" : "0% (Opțiune fără avans PF)"}</span>
              <span>25%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Period Slider */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Perioadă Finanțare
              </label>
              <span className="text-sm font-black text-slate-900 bg-slate-100 px-2.5 py-1 rounded-lg border border-slate-200">
                {periodMonths} Luni ({Math.round(periodMonths / 12)} Ani)
              </span>
            </div>
            <input
              type="range"
              min={12}
              max={60}
              step={12}
              value={periodMonths}
              onChange={(e) => setPeriodMonths(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#C8A86B]"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-medium">
              <span>12 Luni</span>
              <span>36 Luni</span>
              <span>60 Luni (Max 5 Ani)</span>
            </div>
          </div>

          {/* Parameters & Criteria Highlights */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-2">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span>Ipoteze tehnice și structura de calcul:</span>
            </div>
            <ul className="space-y-1.5 text-[11px] leading-relaxed">
              <li>
                • <strong className="text-slate-800">Dobândă anuală nominală orientativă fixă:</strong> {(annualInterestRate * 100).toFixed(1)}% (amortizare lunară pe anuități egale).
              </li>
              <li>
                • <strong className="text-slate-800">Mențiune DAE contractual:</strong> Dobânda Anuală Efectivă (DAE) contractuală depinde de comisioanele de analiză dosar, administrare lunară și polița CASCO/RCA, dacă este solicitată de bancă. Aceasta este stabilită exclusiv de finanțator în oferta precontractuală individuală.
              </li>
              <li>
                • <strong className="text-slate-800">Specific PJ (Leasing):</strong> Deductibilitate TVA conform destinației de utilizare (50% mixt / 100% comercial). Valoarea reziduală (uzual 1% inclusă sau achitată la final) și comisioanele de leasing se stabilesc prin contractul de leasing financiar.
              </li>
              <li>
                • <strong className="text-slate-800">Timp estimativ răspuns preliminar parteneri:</strong> de la 15–120 minute (TBI Bank) până la 24 de ore (UniCredit Consumer Financing).
              </li>
            </ul>
          </div>
        </div>

        {/* Result Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg border border-slate-800">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-[#C8A86B] mb-1">
              Rată Lunară Orientativă
            </div>
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-4xl sm:text-5xl font-black text-white tracking-tight font-heading">
                ~{formatEuro(monthlyPayment, 2)} €
              </span>
              <span className="text-xs text-slate-400 font-medium">/ lună</span>
            </div>

            <div className="space-y-2 py-3 border-t border-b border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Preț Automobil:</span>
                <span className="font-bold text-white">{formatEuro(vehiclePrice, 0)} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Avans Achitat ({downPaymentPercent}%):</span>
                <span className="font-bold text-white">{formatEuro(downPaymentAmount, 0)} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Sumă Finanțată (Principal):</span>
                <span className="font-bold text-white">{formatEuro(financedAmount, 0)} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Totalul Ratelor (Principal + Dobândă):</span>
                <span className="font-bold text-[#E5D5B8] font-mono">~{formatEuro(totalInstallments, 2)} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Cost Finanțare (Dobândă totală):</span>
                <span className="font-bold text-white font-mono">~{formatEuro(totalInterest, 2)} €</span>
              </div>
              <div className="flex justify-between text-slate-300 pt-2 border-t border-white/10">
                <span className="text-white font-semibold">Total Achiziție (Avans + Rate):</span>
                <span className="font-bold text-[#C8A86B] font-mono">~{formatEuro(totalAcquisition, 2)} €</span>
              </div>
              <div className="flex justify-between text-slate-300 pt-1">
                <span>Tip Produs:</span>
                <span className="font-semibold text-slate-200">
                  {clientType === "juridica" ? "Leasing Financiar PJ" : "Credit Auto Pers. Fizică"}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            <Link
              to="/finantare"
              className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#C8A86B] text-slate-950 font-extrabold text-sm hover:bg-[#d8b87b] transition-all shadow-md"
            >
              <span>Solicită Consultanță Finanțare</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-[10px] text-slate-400 text-center leading-relaxed">
              * Calcul ipotetic orientativ bazat exclusiv pe formula de amortizare matematică a capitalului și dobânzii nominale. Aprobarea finală, DAE contractual și eventualele comisioane sunt stabilite exclusiv de partenerul financiar.
            </p>
          </div>
        </div>
      </div>

      {/* Mandatory Representative Example & Responsible Lending Footer */}
      <div className="bg-slate-50 border-t border-slate-200/80 p-5 sm:p-6 text-xs text-slate-500 space-y-2.5">
        <p className="font-semibold text-slate-800">
          Exemplu demonstrativ de calcul matematic (fără valoare precontractuală obligatorie):
        </p>
        <p className="leading-relaxed text-[11px]">
          Pentru un autoturism rulat în valoare de 15.000 € (TVA inclus pentru PF), achitat cu un avans de 15% (2.250 €), suma finanțată este de 12.750 € pe o durată de 48 de luni. La o rată a dobânzii anuale nominale fixe de 8,9%, rata lunară de amortizare este de aproximativ 316,68 €/lună. Totalul ratelor de rambursat (principal + dobândă) este de aproximativ 15.200,60 € (dobândă totală achitată: 2.450,60 €), iar costul total al achiziției (avans + totalul ratelor) este de aproximativ 17.450,60 €, în ipoteza lipsei altor comisioane sau costuri conexe.
        </p>
        <p className="leading-relaxed text-[11px] text-slate-400">
          * Prezentul simulator oferă o estimare orientativă și nu reprezintă un angajament legal sau o promisiune fermă de creditare. DAE contractual include comisioanele bancare de dosar și administrare și este calculat exclusiv de instituțiile finanțatoare autorizate (UniCredit Consumer Financing, TBI Bank, BT Direct etc.) pe baza analizei de bonitate. Condițiile comerciale necesită confirmare cu un consultant AWD Auto.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Împrumută responsabil. Asigură-te că poți achita ratele lunare pe întreaga durată a contractului.</span>
        </div>
      </div>
    </div>
  )
}

