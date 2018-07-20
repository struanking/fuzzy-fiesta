import endOfMonthReading from './endOfMonthReading';

test('Handles empty data gracefully', () => {
  expect(endOfMonthReading([])).toEqual([]);
});

test('Calculates usage for one months', () => {
  const fixture = [
    { cumulative: 17580, readingDate: '2017-03-28T00:00:00.000Z' },
    { cumulative: 17759, readingDate: '2017-04-15T00:00:00.000Z' },
    { cumulative: 18002, readingDate: '2017-05-08T00:00:00.000Z' },
  ];
  const expected = [
    { date: '2017-04-30', energyUsage: 307 },
  ];

  expect(endOfMonthReading(fixture)).toEqual(expected);
});

test('Calculates usage for two months', () => {
  const fixture = [
    { cumulative: 17580, readingDate: '2017-03-28T00:00:00.000Z' },
    { cumulative: 17759, readingDate: '2017-04-15T00:00:00.000Z' },
    { cumulative: 18002, readingDate: '2017-05-08T00:00:00.000Z' },
    { cumulative: 18270, readingDate: '2017-06-18T00:00:00.000Z' },
  ];
  const expected = [
    { date: '2017-04-30', energyUsage: 307 },
    { date: '2017-05-31', energyUsage: 234 },
  ];

  expect(endOfMonthReading(fixture)).toEqual(expected);
});
