'use client'

import { Bell, AlertCircle, CheckCircle, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Notification {
  id: string
  type: 'info' | 'success' | 'warning'
  title: string
  message: string
  time: string
}

const notifications: Notification[] = [
  {
    id: '1',
    type: 'success',
    title: 'Assignment Submitted',
    message: 'Your Machine Learning assignment has been submitted successfully.',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'warning',
    title: 'Attendance Warning',
    message: 'Your attendance for Database Systems is below 75%.',
    time: '1 day ago',
  },
  {
    id: '3',
    type: 'info',
    title: 'Exam Schedule Updated',
    message: 'Mid-term exam schedule for next week has been released.',
    time: '2 days ago',
  },
]

export function Notifications() {
  return (
    <div className="rounded-2xl bg-surface-50 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Notifications</h2>
        <span className="text-sm text-text-tertiary">{notifications.length} new</span>
      </div>

      <div className="space-y-3">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className="flex gap-3 rounded-lg bg-surface-100/50 p-4 transition-all hover:bg-surface-200/50"
          >
            <div
              className={cn(
                'mt-0.5 flex-shrink-0 rounded-full p-1.5',
                notification.type === 'success' && 'bg-accent-green/10',
                notification.type === 'warning' && 'bg-accent-amber/10',
                notification.type === 'info' && 'bg-accent-blue/10'
              )}
            >
              {notification.type === 'success' && (
                <CheckCircle size={16} className="text-accent-green" />
              )}
              {notification.type === 'warning' && (
                <AlertCircle size={16} className="text-accent-amber" />
              )}
              {notification.type === 'info' && (
                <Info size={16} className="text-accent-blue" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">
                {notification.title}
              </p>
              <p className="mt-1 text-sm text-text-secondary">
                {notification.message}
              </p>
              <p className="mt-2 text-xs text-text-tertiary">
                {notification.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {notifications.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <Bell size={48} className="text-text-muted mb-3" />
          <p className="text-sm text-text-tertiary">No new notifications</p>
        </div>
      )}
    </div>
  )
}
