"use client";

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"

const navItems = [
  { name: "Dashboard", href: "/" },
  { name: "Inventory", href: "/inventory" },
  { name: "Sales", href: "/sales" },
  { name: "Financing", href: "/financing" },
  { name: "Compliance", href: "/compliance" },
  { name: "Banking", href: "/banking" },
  { name: "DMV Processing", href: "/dmv-processing" },
  { name: "Reports", href: "/reports" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <nav className="w-64 bg-background border-r p-4 flex flex-col">
      <h1 className="mb-4 text-2xl font-bold">Car Dealership</h1>
      <ul className="flex-grow">
        {navItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link
              href={item.href}
              className={cn(
                "block rounded p-2 hover:bg-accent hover:text-accent-foreground",
                pathname === item.href && "bg-accent text-accent-foreground font-bold",
              )}
              prefetch
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </nav>
  )
}

