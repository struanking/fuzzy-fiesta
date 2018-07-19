import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import App from './App';
import Section, { Heading } from './components/Section';
import EnergyUsage from './EnergyUsage';
import MeterReadings from './MeterReadings';

Enzyme.configure({ adapter: new Adapter() });

describe('App component', () => {
  test('Renders app structure', () => {
    const actual = shallow(<App />);
    expect(actual.find('Layout')).toHaveLength(1);
    expect(actual.find(Section)).toHaveLength(2);
  });

  test('Renders headings structure', () => {
    const actual = shallow(<App />);
    expect(actual.find(Heading)).toHaveLength(2);
    expect(actual.find(Heading).at(0).render().text()).toEqual('Energy Usage');
    expect(actual.find(Heading).at(1).render().text()).toEqual('Meter Readings');
  });

  test('Renders EnergyUsage component', () => {
    const actual = shallow(<App />);
    expect(actual.find(EnergyUsage)).toHaveLength(1);
  });

  test('Renders MeterReadings component', () => {
    const actual = shallow(<App />);
    expect(actual.find(MeterReadings)).toHaveLength(1);
  });
});
