'use client'

import { useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { 
  LayoutDashboard, 
  Calendar, 
  BookOpen, 
  Users, 
  Settings, 
  Bell,
  TrendingUp,
  Briefcase,
  ChevronLeft,
  ChevronRight
} from 'lucide-react'

interface NavItem {
  label: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/', icon: <LayoutDashboard size={20} /> },
  { label: 'Classes', href: '/classes', icon: <Calendar size={20} /> },
  { label: 'Assignments', href: '/assignments', icon: <BookOpen size={20} /> },
  { label: 'Performance', href: '/performance', icon: <TrendingUp size={20} /> },
  { label: 'Placement', href: '/placement', icon: <Briefcase size={20} /> },
  { label: 'Notifications', href: '/notifications', icon: <Bell size={20} /> },
  { label: 'Faculty', href: '/faculty', icon: <Users size={20} /> },
]

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-50 h-screen border-r border-surface-200/60 bg-surface-50/80 backdrop-blur-xl transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-20' : 'w-64'
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center justify-between border-b border-surface-200/60 px-4">
        {!isCollapsed && (
          <span className="text-xl font-semibold text-text-primary">
            CampusOS
          </span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg p-2 text-text-tertiary transition-colors hover:bg-surface-200 hover:text-text-primary"
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-1 p-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
              'text-text-secondary hover:bg-surface-200 hover:text-text-primary',
              isCollapsed && 'justify-center px-0'
            )}
          >
            <span className="flex-shrink-0">{item.icon}</span>
            {!isCollapsed && <span>{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-surface-200/60 p-3">
        <Link
          href="/settings"
          className={cn(
            'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200',
            'text-text-secondary hover:bg-surface-200 hover:text-text-primary',
            isCollapsed && 'justify-center px-0'
          )}
        >
          <Settings size={20} />
          {!isCollapsed && <span>Settings</span>}
        </Link>
      </div>
    </aside>
  )
}
