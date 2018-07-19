import React from 'react';
import renderer from 'react-test-renderer';
import EnergyUsage from './EnergyUsage';

test('renders Layout correctly', () => {
  const meterReadings = [
    { date: '2017-04-30', energyUsage: 259 },
    { date: '2017-05-31', energyUsage: 243 },
    { date: '2017-06-30', energyUsage: 188 },
  ];
  const tree = renderer
    .create(<EnergyUsage meterReadings={meterReadings} />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
