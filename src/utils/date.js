// import subDays from "date-fns/subDays"
// import isWithinInterval from "date-fns/isWithinInterval"
// import parseISO from "date-fns/parseISO"

export function daysFromNow(date) {
  if (!date) {
    return false
  }
  const today = new Date()
  const dayMilliseconds = 1000 * 60 * 60 * 24
  const diffMilliseconds = date.getTime() - today.getTime()
  const days = Math.round(diffMilliseconds / dayMilliseconds)
  return days
}
