"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Sales() {
  const [vehiclePrice, setVehiclePrice] = useState("")
  const [downPayment, setDownPayment] = useState("")
  const [tradeInValue, setTradeInValue] = useState("")
  const [loanTerm, setLoanTerm] = useState("")
  const [interestRate, setInterestRate] = useState("")
  const [state, setState] = useState("")
  const [salesTaxRate, setSalesTaxRate] = useState("")
  const [result, setResult] = useState<{
    totalPrice: number
    monthlyPayment: number
    totalInterest: number
    salesTax: number
  } | null>(null)

  const calculateSales = () => {
    const price = Number.parseFloat(vehiclePrice)
    const down = Number.parseFloat(downPayment)
    const tradeIn = Number.parseFloat(tradeInValue)
    const term = Number.parseInt(loanTerm)
    const rate = Number.parseFloat(interestRate) / 100 / 12
    const tax = Number.parseFloat(salesTaxRate) / 100

    const loanAmount = price - down - tradeIn
    const salesTax = price * tax
    const totalPrice = price + salesTax

    const monthlyPayment = (loanAmount * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1)
    const totalInterest = monthlyPayment * term - loanAmount

    setResult({
      totalPrice,
      monthlyPayment,
      totalInterest,
      salesTax,
    })
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Sales Calculator</h1>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="vehiclePrice">Vehicle Price</Label>
          <Input
            id="vehiclePrice"
            value={vehiclePrice}
            onChange={(e) => setVehiclePrice(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="downPayment">Down Payment</Label>
          <Input id="downPayment" value={downPayment} onChange={(e) => setDownPayment(e.target.value)} type="number" />
        </div>
        <div>
          <Label htmlFor="tradeInValue">Trade-in Value</Label>
          <Input
            id="tradeInValue"
            value={tradeInValue}
            onChange={(e) => setTradeInValue(e.target.value)}
            type="number"
          />
        </div>
        <div>
          <Label htmlFor="loanTerm">Loan Term (months)</Label>
          <Input id="loanTerm" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} type="number" />
        </div>
        <div>
          <Label htmlFor="interestRate">Interest Rate (%)</Label>
          <Input
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            type="number"
            step="0.1"
          />
        </div>
        <div>
          <Label htmlFor="state">State</Label>
          <Select value={state} onValueChange={setState}>
            <SelectTrigger id="state">
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="CA">California</SelectItem>
              <SelectItem value="NY">New York</SelectItem>
              <SelectItem value="TX">Texas</SelectItem>
              {/* Add more states as needed */}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="salesTaxRate">Sales Tax Rate (%)</Label>
          <Input
            id="salesTaxRate"
            value={salesTaxRate}
            onChange={(e) => setSalesTaxRate(e.target.value)}
            type="number"
            step="0.1"
          />
        </div>
      </div>
      <Button className="mt-4" onClick={calculateSales}>
        Calculate
      </Button>
      {result && (
        <div className="mt-6">
          <h2 className="mb-2 text-xl font-semibold">Results:</h2>
          <p>Total Price: ${result.totalPrice.toFixed(2)}</p>
          <p>Monthly Payment: ${result.monthlyPayment.toFixed(2)}</p>
          <p>Total Interest: ${result.totalInterest.toFixed(2)}</p>
          <p>Sales Tax: ${result.salesTax.toFixed(2)}</p>
        </div>
      )}
    </div>
  )
}

