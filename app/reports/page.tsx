"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState("")

  const handleDownload = () => {
    // Implement report download logic here
    console.log("Downloading report:", selectedReport)
  }

  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Reports</h1>
      <div className="max-w-md">
        <div className="mb-4">
          <Select value={selectedReport} onValueChange={setSelectedReport}>
            <SelectTrigger>
              <SelectValue placeholder="Select a report" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="sales">Sales Report</SelectItem>
              <SelectItem value="inventory">Inventory Report</SelectItem>
              <SelectItem value="finance">Finance Report</SelectItem>
              <SelectItem value="compliance">Compliance Report</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button onClick={handleDownload} disabled={!selectedReport}>
          Download Report
        </Button>
      </div>
    </div>
  )
}

