import PropTypes from 'prop-types';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';

const EnergyUsage = ({ meterReadings }) => (
  <BarChart width={1400} height={400} data={meterReadings}>
    <XAxis dataKey="date" />
    <YAxis dataKey="energyUsage" />
    <CartesianGrid horizontal={false} />
    <Tooltip />
    <Bar dataKey="energyUsage" fill="#03ad54" isAnimationActive={false} />
  </BarChart>
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
