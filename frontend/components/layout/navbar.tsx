'use client'

import { Bell, Search, User, Menu } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-surface-200/60 bg-surface-50/80 backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-6">
        {/* Left: Search */}
        <div className="flex items-center gap-4 flex-1">
          <button className="lg:hidden rounded-lg p-2 text-text-tertiary hover:bg-surface-200 hover:text-text-primary">
            <Menu size={20} />
          </button>
          
          <div className="relative hidden sm:block w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              placeholder="Search anything..."
              className="w-full rounded-lg bg-surface-100 px-4 py-2.5 pl-10 text-sm text-text-primary placeholder:text-text-muted transition-all focus:bg-surface-200 focus:outline-none"
            />
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <button className="relative rounded-lg p-2.5 text-text-tertiary transition-colors hover:bg-surface-200 hover:text-text-primary">
            <Bell size={20} />
            <span className="absolute right-2 top-2.5 h-2 w-2 rounded-full bg-accent-red" />
          </button>

          {/* Profile */}
          <button className="flex items-center gap-3 rounded-lg px-3 py-2 text-left transition-colors hover:bg-surface-200">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent-blue to-accent-green flex items-center justify-center text-white text-sm font-medium">
              JS
            </div>
            <div className="hidden md:block">
              <p className="text-sm font-medium text-text-primary">John Smith</p>
              <p className="text-xs text-text-tertiary">Student</p>
            </div>
          </button>
        </div>
      </div>
    </header>
  )
}
