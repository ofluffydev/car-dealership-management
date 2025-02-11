import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Dashboard() {
  return (
    <div>
      <h1 className="mb-6 text-3xl font-bold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Inventory</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">150</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sales This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">32</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Active Loans</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">87</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pending DMV Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">12</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Source Code</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            This application is open-source and available under the GNU Affero General Public License v3.0 (AGPL-3.0).
            You can view, modify, and distribute the source code according to the terms of the license.
          </p>
          <Button asChild>
            <Link
              href="https://github.com/ofluffydev/car-dealership-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              View Source on GitHub
            </Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

