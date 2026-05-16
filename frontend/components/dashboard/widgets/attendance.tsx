'use client'

import { CheckCircle, XCircle, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AttendanceData {
  present: number
  absent: number
  total: number
  percentage: number
}

interface AttendanceProps {
  data?: AttendanceData
}

export function Attendance({ data }: AttendanceProps) {
  if (!data) {
    return (
      <div className="rounded-2xl bg-surface-50 p-6 shadow-soft">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-text-primary">Attendance</h2>
          <span className="text-sm text-text-tertiary">This Semester</span>
        </div>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <Clock size={48} className="text-text-muted mb-3" />
          <p className="text-sm text-text-tertiary">No attendance data available</p>
          <p className="text-xs text-text-muted mt-1">Data will appear once classes start</p>
        </div>
      </div>
    )
  }

  return (
    <div className="rounded-2xl bg-surface-50 p-6 shadow-soft">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-text-primary">Attendance</h2>
        <span className="text-sm text-text-tertiary">This Semester</span>
      </div>

      {/* Circular Progress */}
      <div className="mb-6 flex items-center justify-center">
        <div className="relative h-32 w-32">
          <svg className="h-full w-full -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              className="text-surface-200"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeDasharray={`${data.percentage}, 100`}
              className="text-accent-green"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-semibold text-text-primary">
              {data.percentage}%
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-3">
        <div className="flex items-center justify-between rounded-lg bg-surface-100/50 p-3">
          <div className="flex items-center gap-3">
            <CheckCircle size={18} className="text-accent-green" />
            <span className="text-sm text-text-secondary">Present</span>
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {data.present}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-surface-100/50 p-3">
          <div className="flex items-center gap-3">
            <XCircle size={18} className="text-accent-red" />
            <span className="text-sm text-text-secondary">Absent</span>
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {data.absent}
          </span>
        </div>

        <div className="flex items-center justify-between rounded-lg bg-surface-100/50 p-3">
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-accent-amber" />
            <span className="text-sm text-text-secondary">Total Classes</span>
          </div>
          <span className="text-sm font-semibold text-text-primary">
            {data.total}
          </span>
        </div>
      </div>
    </div>
  )
}
