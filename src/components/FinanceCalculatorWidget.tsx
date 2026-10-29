"use client"

import { useState } from "react"
import { Calculator, ShieldCheck, ArrowRight, Check, AlertCircle, Info } from "lucide-react"
import { Link } from "react-router-dom"

interface FinanceCalculatorWidgetProps {
  initialPrice?: number
}

export default function FinanceCalculatorWidget({ initialPrice = 16500 }: FinanceCalculatorWidgetProps) {
  const [clientType, setClientType] = useState<"fizica" | "juridica">("fizica")
  const [vehiclePrice, setVehiclePrice] = useState<number>(initialPrice)
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(15)
  const [periodMonths, setPeriodMonths] = useState<number>(48)

  // Explicit hypothetical parameters
  // Persoane Fizice: hypothetical fixed rate ~8.9% per annum (estimated DAE ~9.8% with typical legal fees)
  // Persoane Juridice: hypothetical leasing reference rate ~7.9% per annum
  const annualInterestRate = clientType === "juridica" ? 0.079 : 0.089
  const estimatedDae = clientType === "fizica" ? "9.8%" : "8.7%"
  const monthlyRate = annualInterestRate / 12

  // Calculations
  const downPaymentAmount = Math.round((vehiclePrice * downPaymentPercent) / 100)
  const financedAmount = Math.max(0, vehiclePrice - downPaymentAmount)

  const monthlyPayment =
    financedAmount > 0
      ? Math.round(
          (financedAmount * (monthlyRate * Math.pow(1 + monthlyRate, periodMonths))) /
            (Math.pow(1 + monthlyRate, periodMonths) - 1)
        )
      : 0

  const totalRepayable = monthlyPayment * periodMonths
  const totalCost = Math.max(0, totalRepayable - financedAmount)

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
            Calcul matematic strict orientativ pentru configurarea bugetului personal sau al companiei.
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
                Preț Automobil (EUR)
              </label>
              <span className="text-lg font-black text-slate-900 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
                {vehiclePrice.toLocaleString()} €
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
                {downPaymentAmount.toLocaleString()} €
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
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 space-y-1.5">
            <div className="font-bold text-slate-800 flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-slate-500" />
              <span>Ipoteze tehnice ale simulării:</span>
            </div>
            <p className="leading-relaxed">
              Rată anuală indicativă fixă de calcul: <strong className="text-slate-900">{(annualInterestRate * 100).toFixed(1)}%</strong> | DAE orientativ estimat: <strong className="text-slate-900">{estimatedDae}</strong>.
              Răspuns preliminar al partenerilor bancari: de la 15–120 minute (TBI) până la 24 de ore (UniCredit).
            </p>
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
                ~{monthlyPayment} €
              </span>
              <span className="text-xs text-slate-400 font-medium">/ lună</span>
            </div>

            <div className="space-y-2 py-3 border-t border-b border-white/10 text-xs sm:text-sm">
              <div className="flex justify-between text-slate-300">
                <span>Sumă Finanțată:</span>
                <span className="font-bold text-white">{financedAmount.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Avans Achitat ({downPaymentPercent}%):</span>
                <span className="font-bold text-white">{downPaymentAmount.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Total Estimativ de Rambursat:</span>
                <span className="font-bold text-white">~{totalRepayable.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Cost Finanțare (Dobândă):</span>
                <span className="font-bold text-white">~{totalCost.toLocaleString()} €</span>
              </div>
              <div className="flex justify-between text-slate-300">
                <span>Tip Produs:</span>
                <span className="font-bold text-[#E5D5B8]">
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
              * Calcul ipotetic demonstrativ. Nu reprezintă o ofertă fermă. Aprobarea și condițiile finale (dobândă, DAE, comisioane) sunt stabilite exclusiv de finanțator în funcție de bonitatea clientului.
            </p>
          </div>
        </div>
      </div>

      {/* Mandatory Representative Example & Responsible Lending Footer */}
      <div className="bg-slate-50 border-t border-slate-200/80 p-5 sm:p-6 text-xs text-slate-500 space-y-2">
        <p className="font-semibold text-slate-700">
          Exemplu reprezentativ orientativ (conform legislației privind creditul de consum):
        </p>
        <p className="leading-relaxed text-[11px]">
          Pentru un autoturism în valoare de 15.000 € (echivalent ~75.000 lei), cu avans de 15% (2.250 €), suma finanțată este de 12.750 € pe o durată de 48 de luni. La o rată a dobânzii anuale fixe indicative de 8.9% și un DAE estimativ de 9.8%, rata lunară orientativă este de ~316 €/lună (total plătibil ~15.168 €). Prezentul simulator are caracter strict orientativ și nu constituie angajament legal. Soluțiile sunt furnizate în parteneriat cu UniCredit Consumer Financing, TBI Bank și BT Direct.
        </p>
        <div className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Împrumută responsabil. Asigură-te că poți achita ratele lunare pe întreaga durată a contractului.</span>
        </div>
      </div>
    </div>
  )
}
