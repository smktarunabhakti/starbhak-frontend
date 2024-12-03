"use client"

// Using this ScheduleXCalendar the docs could be seen in this web https://schedule-x.dev/docs/calendar

import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import '@schedule-x/theme-default/dist/index.css'
import {useEffect} from "react";
import './theme.css'
 
function CalendarApp(props: any) {
  const plugins = [createEventsServicePlugin()]
 
  const calendar = useNextCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: [
      {
        id: '1',
        title: 'Event 1',
        start: '2024-12-02',
        end: '2024-12-02',
      },
      {
        id: '2',
        title: 'Event 2',
        start: '2024-12-02 10:00',
        end: '2024-12-02 12:00',
      },
    ],
  }, plugins)
 
 useEffect(() => {
    calendar?.events.getAll()
 })

  return (
    <div>
      <ScheduleXCalendar calendarApp={calendar} />
    </div>
  )
}
 
export default CalendarApp