"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Loan {
  id: number
  customerName: string
  vehicle: string
  loanAmount: number
  term: number
  interestRate: number
  status: string
}

const initialLoans: Loan[] = [
  {
    id: 1,
    customerName: "John Doe",
    vehicle: "2022 Toyota Camry",
    loanAmount: 25000,
    term: 60,
    interestRate: 3.5,
    status: "Active",
  },
  {
    id: 2,
    customerName: "Jane Smith",
    vehicle: "2023 Honda Civic",
    loanAmount: 22000,
    term: 48,
    interestRate: 4.0,
    status: "Pending",
  },
]

export default function Financing() {
  const [loans, setLoans] = useState<Loan[]>(initialLoans)

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log("Edit loan with id:", id)
  }

  const handleDelete = (id: number) => {
    setLoans(loans.filter((loan) => loan.id !== id))
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Financing</h1>
        <Button>Add New Loan</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Customer Name</TableHead>
            <TableHead>Vehicle</TableHead>
            <TableHead>Loan Amount</TableHead>
            <TableHead>Term (months)</TableHead>
            <TableHead>Interest Rate</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {loans.map((loan) => (
            <TableRow key={loan.id}>
              <TableCell>{loan.id}</TableCell>
              <TableCell>{loan.customerName}</TableCell>
              <TableCell>{loan.vehicle}</TableCell>
              <TableCell>${loan.loanAmount.toLocaleString()}</TableCell>
              <TableCell>{loan.term}</TableCell>
              <TableCell>{loan.interestRate}%</TableCell>
              <TableCell>{loan.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEdit(loan.id)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(loan.id)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

