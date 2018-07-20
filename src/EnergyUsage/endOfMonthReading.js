import moment from 'moment';

/**
 * Returns the difference between two moment objects in number of days.
 * @param {moment} mmt1
 * @param {moment} mm2
 */
function getDiffInDays(mmt1, mm2) {
  return mmt1.diff(mm2, 'days');
}

/**
 * Return the number of days between the given moment object
 * and the end of the month of this moment object.
 * @param {moment} mmt
 */
function getDaysUntilMonthEnd(mmt) {
  return getDiffInDays(moment.utc(mmt).endOf('month'), mmt);
}

/**
 * Calcualte average energy usage between two readings
 * @param {object} reading1
 * @param {object} reading2
 * @param {boolean} toMonthEnd
 */
function averageUsageInPeriod(reading1, reading2, toMonthEnd) {
  const reading1Date = moment(reading1.readingDate);
  const reading2Date = moment(reading2.readingDate);
  const daysDiff = getDiffInDays(reading2Date, reading1Date);
  const daysToEndOfMonth = getDaysUntilMonthEnd(reading1Date);
  const averageUsagePerDay = (reading2.cumulative - reading1.cumulative) / daysDiff;
  const multiplier = toMonthEnd ? daysToEndOfMonth : daysDiff - daysToEndOfMonth;
  return averageUsagePerDay * multiplier;
}
/**
 * Return the estimated end-of-month by interpolating
 * values on dates either side of the month end.
 * @param {numver} prevReadingValue
 * @param {object} currReading
 * @param {object} nextReading
 */
function estimateEndOfMonthReading(prevReading, currReading, nextReading) {
  const period1 = averageUsageInPeriod(prevReading, currReading);
  const period2 = averageUsageInPeriod(currReading, nextReading, true);
  return Math.floor(period1 + period2); // always round down to give customer smaller usage
}

/**
 * Calculate end-of-month readings
 * @param {array} readings
 */
const endOfMonthReadings = readings => (
  readings.reduce((estimatedReadings, currReading, index, allReadings) => {
    // avoid edges of the dataset
    if (index > 0 && index < allReadings.length - 1) {
      const prevReading = allReadings[index - 1];
      const nextReading = allReadings[index + 1];
      const energyUsage = estimateEndOfMonthReading(prevReading, currReading, nextReading);
      const date = moment.utc(moment(currReading.readingDate))
        .endOf('month')
        .startOf('day')
        .format('YYYY-MM-DD');

      estimatedReadings.push({ date, energyUsage });
    }
    return estimatedReadings;
  }, [])
);

export default endOfMonthReadings;
