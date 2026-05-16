'use client'

import { Clock, MapPin } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Class {
  id: string
  subject: string
  time: string
  location: string
  status: 'upcoming' | 'ongoing' | 'completed'
}

interface TodayClassesProps {
  classes?: Class[]
}

export function TodayClasses({ classes = [] }: TodayClassesProps) {
  return (
    <div className="rounded-2xl bg-surface-50 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Today's Classes</h2>
        <span className="text-sm text-text-tertiary">{classes.length} classes</span>
      </div>

      {classes.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Clock size={48} className="text-text-muted mb-3" />
          <p className="text-sm text-text-tertiary">No classes scheduled for today</p>
          <p className="text-xs text-text-muted mt-1">Enjoy your free time!</p>
        </div>
      ) : (
        <div className="space-y-3">
          {classes.map((classItem) => (
            <div
              key={classItem.id}
              className={cn(
                'group rounded-xl border border-surface-200/60 bg-surface-100/50 p-4 transition-all duration-200 hover:border-surface-300 hover:shadow-medium',
                classItem.status === 'ongoing' && 'border-l-4 border-l-accent-blue'
              )}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                    {classItem.subject}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-text-tertiary">
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{classItem.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{classItem.location}</span>
                    </div>
                  </div>
                </div>
                {classItem.status === 'ongoing' && (
                  <span className="flex-shrink-0 rounded-full bg-accent-blue/10 px-3 py-1 text-xs font-medium text-accent-blue">
                    Now
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
