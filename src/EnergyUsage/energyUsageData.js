const energyUsageData = readings => readings.reduce((accum, curr, index, arr) => {
  if (index < arr.length - 1) {
    const next = arr[index + 1];
    accum.push({
      date: next.readingDate,
      energyUsage: next.cumulative - curr.cumulative,
    });
  }
  return accum;
}, []);

export default energyUsageData;
