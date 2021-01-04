import subDays from "date-fns/subDays"
import isWithinInterval from "date-fns/isWithinInterval"

export function daysFromNow(date, maxDays = 20) {
  return isWithinInterval(date, {
    start: subDays(new Date(), maxDays),
    end: new Date(),
  })
}
