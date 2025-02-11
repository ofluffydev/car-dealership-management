"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Banking() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [ssn, setSsn] = useState("")
  const [birthdate, setBirthdate] = useState("")
  const [creditScore, setCreditScore] = useState<number | null>(null)

  const handleCreditCheck = () => {
    // Generate a random credit score between 300 and 850
    const randomScore = Math.floor(Math.random() * (850 - 300 + 1)) + 300
    setCreditScore(randomScore)
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Banking</h1>
      <div className="max-w-md">
        <h2 className="mb-4 text-xl font-semibold">Credit Check</h2>
        <div className="mb-4">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="mb-4">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="mb-4">
          <Label htmlFor="ssn">SSN</Label>
          <Input id="ssn" value={ssn} onChange={(e) => setSsn(e.target.value)} type="password" />
        </div>
        <div className="mb-4">
          <Label htmlFor="birthdate">Birthdate</Label>
          <Input id="birthdate" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} type="date" />
        </div>
        <Button onClick={handleCreditCheck}>Check Credit Score</Button>
        {creditScore !== null && (
          <div className="mt-4">
            <p>Credit Score: {creditScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}

