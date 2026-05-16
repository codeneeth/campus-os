'use client'

import { TrendingUp, TrendingDown, Minus } from 'lucide-react'
import { cn } from '@/lib/utils'

interface Subject {
  name: string
  score: number
  trend: 'up' | 'down' | 'neutral'
}

const subjects: Subject[] = [
  { name: 'Data Structures', score: 92, trend: 'up' },
  { name: 'Machine Learning', score: 88, trend: 'up' },
  { name: 'Database Systems', score: 85, trend: 'neutral' },
  { name: 'Operating Systems', score: 78, trend: 'down' },
]

export function PerformanceSnapshot() {
  const averageScore = Math.round(
    subjects.reduce((acc, subject) => acc + subject.score, 0) / subjects.length
  )

  return (
    <div className="rounded-2xl bg-surface-50 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Performance</h2>
        <span className="text-sm text-text-tertiary">This Semester</span>
      </div>

      {/* Average Score */}
      <div className="mb-6 rounded-xl bg-gradient-to-br from-accent-blue/5 to-accent-green/5 p-4 border border-surface-200/60">
        <p className="text-sm text-text-tertiary">Average Score</p>
        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-3xl font-semibold text-text-primary">
            {averageScore}
          </span>
          <span className="text-sm text-text-tertiary">/ 100</span>
        </div>
      </div>

      {/* Subject List */}
      <div className="space-y-3">
        {subjects.map((subject) => (
          <div
            key={subject.name}
            className="flex items-center justify-between rounded-lg bg-surface-100/50 p-3"
          >
            <div className="flex-1">
              <p className="text-sm font-medium text-text-primary">
                {subject.name}
              </p>
              <div className="mt-1.5 h-2 w-full rounded-full bg-surface-200 overflow-hidden">
                <div
                  className={cn(
                    'h-full rounded-full transition-all duration-500',
                    subject.score >= 90
                      ? 'bg-accent-green'
                      : subject.score >= 80
                      ? 'bg-accent-blue'
                      : subject.score >= 70
                      ? 'bg-accent-amber'
                      : 'bg-accent-red'
                  )}
                  style={{ width: `${subject.score}%` }}
                />
              </div>
            </div>
            <div className="ml-4 flex items-center gap-2">
              <span className="text-sm font-semibold text-text-primary">
                {subject.score}
              </span>
              {subject.trend === 'up' && (
                <TrendingUp size={16} className="text-accent-green" />
              )}
              {subject.trend === 'down' && (
                <TrendingDown size={16} className="text-accent-red" />
              )}
              {subject.trend === 'neutral' && (
                <Minus size={16} className="text-text-tertiary" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
