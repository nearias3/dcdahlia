import { useEffect, useMemo, useState } from "react";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function getMonthStart(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function getDateKey(value) {
  if (value.date) {
    return value.date;
  }

  const date = new Date(value.dateTime);

  return [
    date.getFullYear(),
    String(date.getMonth() + 1).padStart(2, "0"),
    String(date.getDate()).padStart(2, "0"),
  ].join("-");
}

function formatEventDate(event, timeZone) {
  if (event.start.date) {
    return new Date(`${event.start.date}T12:00:00`).toLocaleDateString(
      "en-US",
      {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      },
    );
  }

  return new Date(event.start.dateTime).toLocaleString("en-US", {
    timeZone,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default function InvestigatorCalendar({
  calendarId,
  timeZone = "America/Los_Angeles",
}) {
  const [visibleMonth, setVisibleMonth] = useState(() =>
    getMonthStart(new Date()),
  );
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [status, setStatus] = useState("loading");
  const [errorMessage, setErrorMessage] = useState("");

  const apiKey = import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY;

  useEffect(() => {
    if (!apiKey || !calendarId) {
      setStatus("error");
      setErrorMessage("The events calendar has not been connected yet.");
      return;
    }

    const controller = new AbortController();

    async function loadEvents() {
      setStatus("loading");
      setErrorMessage("");

      const monthStart = new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth(),
        1,
      );

      const monthEnd = new Date(
        visibleMonth.getFullYear(),
        visibleMonth.getMonth() + 1,
        1,
      );

      const parameters = new URLSearchParams({
        key: apiKey,
        timeMin: monthStart.toISOString(),
        timeMax: monthEnd.toISOString(),
        singleEvents: "true",
        orderBy: "startTime",
        timeZone,
      });

      const encodedCalendarId = encodeURIComponent(calendarId);
      const endpoint =
        `https://www.googleapis.com/calendar/v3/calendars/` +
        `${encodedCalendarId}/events?${parameters}`;

      try {
        const response = await fetch(endpoint, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error(`Google Calendar returned ${response.status}.`);
        }

        const data = await response.json();
        const nextEvents = data.items || [];

        setEvents(nextEvents);
        setSelectedEvent(nextEvents[0] || null);
        setStatus("success");
      } catch (error) {
        if (error.name === "AbortError") {
          return;
        }

        console.error(error);
        setStatus("error");
        setErrorMessage(
          "The case files could not be retrieved. Please try again shortly.",
        );
      }
    }

    loadEvents();

    return () => controller.abort();
  }, [apiKey, calendarId, timeZone, visibleMonth]);

  const calendarDays = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const firstWeekday = new Date(year, month, 1).getDay();
    const days = [];

    for (let position = 0; position < 42; position += 1) {
      const date = new Date(year, month, position - firstWeekday + 1);
      days.push(date);
    }

    return days;
  }, [visibleMonth]);

  const eventsByDate = useMemo(() => {
    return events.reduce((groups, event) => {
      if (!event.start) {
        return groups;
      }

      const key = getDateKey(event.start);
      groups[key] = [...(groups[key] || []), event];
      return groups;
    }, {});
  }, [events]);

  const monthLabel = visibleMonth.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  function changeMonth(amount) {
    setVisibleMonth(
      new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + amount, 1),
    );
  }

  function returnToToday() {
    setVisibleMonth(getMonthStart(new Date()));
  }

  function dateKey(date) {
    return [
      date.getFullYear(),
      String(date.getMonth() + 1).padStart(2, "0"),
      String(date.getDate()).padStart(2, "0"),
    ].join("-");
  }

  const todayKey = dateKey(new Date());

  return (
    <div className="investigator-calendar">
      <div className="investigator-calendar__toolbar">
        <div>
          <p className="investigator-calendar__label">Active Case Calendar</p>
          <h3>{monthLabel}</h3>
        </div>

        <div className="investigator-calendar__controls">
          <button
            type="button"
            onClick={() => changeMonth(-1)}
            aria-label="View previous month"
          >
            ←
          </button>

          <button type="button" onClick={returnToToday}>
            Today
          </button>

          <button
            type="button"
            onClick={() => changeMonth(1)}
            aria-label="View next month"
          >
            →
          </button>
        </div>
      </div>

      <div className="investigator-calendar__layout">
        <div className="planner-sheet">
          <div className="planner-weekdays">
            {WEEKDAYS.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>

          <div className="planner-grid">
            {calendarDays.map((date) => {
              const key = dateKey(date);
              const dateEvents = eventsByDate[key] || [];
              const belongsToMonth =
                date.getMonth() === visibleMonth.getMonth();
              const isToday = key === todayKey;

              return (
                <div
                  className={[
                    "planner-day",
                    !belongsToMonth ? "planner-day--outside" : "",
                    isToday ? "planner-day--today" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  key={key}
                >
                  <span className="planner-day__number">{date.getDate()}</span>

                  <div className="planner-day__events">
                    {dateEvents.slice(0, 2).map((event) => (
                      <button
                        type="button"
                        className="planner-event"
                        key={event.id}
                        onClick={() => setSelectedEvent(event)}
                        title={event.summary}
                      >
                        <span aria-hidden="true" />
                        {event.summary || "Untitled event"}
                      </button>
                    ))}

                    {dateEvents.length > 2 && (
                      <span className="planner-day__more">
                        +{dateEvents.length - 2} more
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <aside className="calendar-case-notes">
          <div className="calendar-case-notes__heading">
            <p>Case Notes</p>
            <span>Public Appearance Record</span>
          </div>

          {status === "loading" && (
            <div className="calendar-case-notes__empty">
              <p>Retrieving evidence…</p>
            </div>
          )}

          {status === "error" && (
            <div className="calendar-case-notes__empty">
              <p>{errorMessage}</p>
            </div>
          )}

          {status === "success" && !selectedEvent && (
            <div className="calendar-case-notes__empty">
              <span className="calendar-case-notes__stamp">No Leads</span>
              <p>No public appearances are currently recorded this month.</p>
            </div>
          )}

          {status === "success" && selectedEvent && (
            <article className="calendar-event-details">
              <p className="calendar-event-details__date">
                {formatEventDate(selectedEvent, timeZone)}
              </p>

              <h4>{selectedEvent.summary || "Upcoming Appearance"}</h4>

              {selectedEvent.location && (
                <p>
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
              )}

              {selectedEvent.description && <p>{selectedEvent.description}</p>}

              {selectedEvent.htmlLink && (
                <a
                  className="button-link"
                  href={selectedEvent.htmlLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Full Report
                </a>
              )}
            </article>
          )}
        </aside>
      </div>
    </div>
  );
}
