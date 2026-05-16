'use client'

import { ReactNode } from 'react'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'
import { cn } from '@/lib/utils'

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-background-50">
      <Sidebar />
      <main className="lg:ml-64">
        <Navbar />
        <div className="p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
