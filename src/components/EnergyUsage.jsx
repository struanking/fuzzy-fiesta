import PropTypes from 'prop-types';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import energyUsageData from './energyUsageData';
import Section, { Heading } from './Section';

const EnergyUsage = ({ meterReadings }) => (
  <Section>
    <Heading>Energy Usage</Heading>

    <BarChart width={1400} height={400} data={energyUsageData(meterReadings)}>
      <XAxis dataKey="date" />
      <YAxis dataKey="energyUsage" />
      <CartesianGrid horizontal={false} />
      <Tooltip />
      <Bar dataKey="energyUsage" fill="#03ad54" isAnimationActive={false} />
    </BarChart>
  </Section>
);

const defaultReadings = [];

EnergyUsage.defaultProps = {
  meterReadings: defaultReadings,
};

EnergyUsage.propTypes = {
  meterReadings: PropTypes.arrayOf(PropTypes.shape({
    cumulative: PropTypes.number,
    readingDate: PropTypes.string,
    unit: PropTypes.string,
  })),
};

export default EnergyUsage;
