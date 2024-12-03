"use client"

// Using this ScheduleXCalendar the docs could be seen in this web https://schedule-x.dev/docs/calendar

import { useNextCalendarApp, ScheduleXCalendar } from '@schedule-x/react'
import {
  CalendarEventExternal,
  createViewDay,
  createViewMonthAgenda,
  createViewMonthGrid,
  createViewWeek,
} from '@schedule-x/calendar'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import '@schedule-x/theme-default/dist/index.css'
import {useEffect} from "react";
import './theme.css'

interface CalendarProps {
  events: CalendarEventExternal[]
}
 
function Calendar(props: CalendarProps) {
  const plugins = [createEventsServicePlugin()]
 
  const calendar = useNextCalendarApp({
    views: [createViewDay(), createViewWeek(), createViewMonthGrid(), createViewMonthAgenda()],
    events: props.events,
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
 
export default Calendar