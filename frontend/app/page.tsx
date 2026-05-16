import { DashboardShell } from '@/components/layout/dashboard-shell'
import { TodayClasses } from '@/components/dashboard/widgets/today-classes'
import { Attendance } from '@/components/dashboard/widgets/attendance'
import { PerformanceSnapshot } from '@/components/dashboard/widgets/performance-snapshot'
import { Notifications } from '@/components/dashboard/widgets/notifications'
import { UpcomingEvents } from '@/components/dashboard/widgets/upcoming-events'

export default function HomePage() {
  return (
    <DashboardShell>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-text-primary">
          Welcome back, John
        </h1>
        <p className="mt-2 text-text-secondary">
          Here's what's happening with your academics today.
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - 2 spans */}
        <div className="lg:col-span-2 space-y-6">
          <TodayClasses />
          
          <div className="grid gap-6 md:grid-cols-2">
            <Attendance />
            <PerformanceSnapshot />
          </div>
        </div>

        {/* Right Column - 1 span */}
        <div className="space-y-6">
          <Notifications />
          <UpcomingEvents />
        </div>
      </div>
    </DashboardShell>
  )
}
