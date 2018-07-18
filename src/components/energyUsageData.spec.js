import energyUsageData from './energyUsageData';

test('Handles empty data gracefully', () => {
  expect(energyUsageData([])).toEqual([]);
});

test('Handles one month gracefully', () => {
  const fixture = [{ readingDate: '2017-03-31', cumulative: 17600 }];
  expect(energyUsageData(fixture)).toEqual([]);
});

test('Calculates usage for one month ', () => {
  const fixture = [
    { readingDate: '2017-03-31', cumulative: 17600 },
    { readingDate: '2017-04-30', cumulative: 17859 },
  ];
  const expected = [
    { date: '2017-04-30', energyUsage: 259 },
  ];

  expect(energyUsageData(fixture)).toEqual(expected);
});

test('Calculates usage over three months ', () => {
  const fixture = [
    { readingDate: '2017-03-31', cumulative: 17600 },
    { readingDate: '2017-04-30', cumulative: 17859 },
    { readingDate: '2017-05-31', cumulative: 18102 },
    { readingDate: '2017-06-30', cumulative: 18290 },
  ];
  const expected = [
    { date: '2017-04-30', energyUsage: 259 },
    { date: '2017-05-31', energyUsage: 243 },
    { date: '2017-06-30', energyUsage: 188 },
  ];

  expect(energyUsageData(fixture)).toEqual(expected);
});
