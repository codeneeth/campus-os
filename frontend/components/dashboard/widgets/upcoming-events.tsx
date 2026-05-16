'use client'

import { Calendar, MapPin, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  type: 'academic' | 'extracurricular' | 'placement'
}

interface UpcomingEventsProps {
  events?: Event[]
}

export function UpcomingEvents({ events = [] }: UpcomingEventsProps) {
  return (
    <div className="rounded-2xl bg-surface-50 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Upcoming Events</h2>
        <span className="text-sm text-text-tertiary">{events.length} events</span>
      </div>

      {events.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <Calendar size={48} className="text-text-muted mb-3" />
          <p className="text-sm text-text-tertiary">No upcoming events</p>
          <p className="text-xs text-text-muted mt-1">Check back later for updates</p>
        </div>
      ) : (
        <div className="space-y-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="group rounded-xl border border-surface-200/60 bg-surface-100/50 p-4 transition-all duration-200 hover:border-surface-300 hover:shadow-medium"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className={cn(
                        'rounded-full px-2 py-0.5 text-xs font-medium',
                        event.type === 'academic' && 'bg-accent-blue/10 text-accent-blue',
                        event.type === 'placement' && 'bg-accent-green/10 text-accent-green',
                        event.type === 'extracurricular' && 'bg-accent-amber/10 text-accent-amber'
                      )}
                    >
                      {event.type}
                    </span>
                  </div>
                  <h3 className="font-medium text-text-primary group-hover:text-accent-blue transition-colors">
                    {event.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-sm text-text-tertiary">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink-0 text-right">
                  <p className="text-sm font-medium text-text-primary">{event.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
