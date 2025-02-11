"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface Vehicle {
  id: number
  make: string
  model: string
  year: number
  price: number
  vin: string
  status: string
}

const initialVehicles: Vehicle[] = [
  {
    id: 1,
    make: "Toyota",
    model: "Camry",
    year: 2022,
    price: 25000,
    vin: "1HGBH41JXMN109186",
    status: "Available",
  },
  {
    id: 2,
    make: "Honda",
    model: "Civic",
    year: 2023,
    price: 22000,
    vin: "2HGES16515H567890",
    status: "Sold",
  },
]

export default function Inventory() {
  const [vehicles, setVehicles] = useState<Vehicle[]>(initialVehicles)

  const handleEdit = (id: number) => {
    // Implement edit functionality
    console.log("Edit vehicle with id:", id)
  }

  const handleDelete = (id: number) => {
    setVehicles(vehicles.filter((vehicle) => vehicle.id !== id))
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Inventory</h1>
        <Button>Add Vehicle</Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Make</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Year</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>VIN</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {vehicles.map((vehicle) => (
            <TableRow key={vehicle.id}>
              <TableCell>{vehicle.id}</TableCell>
              <TableCell>{vehicle.make}</TableCell>
              <TableCell>{vehicle.model}</TableCell>
              <TableCell>{vehicle.year}</TableCell>
              <TableCell>${vehicle.price.toLocaleString()}</TableCell>
              <TableCell>{vehicle.vin}</TableCell>
              <TableCell>{vehicle.status}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" className="mr-2" onClick={() => handleEdit(vehicle.id)}>
                  Edit
                </Button>
                <Button variant="destructive" size="sm" onClick={() => handleDelete(vehicle.id)}>
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

