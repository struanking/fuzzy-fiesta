import PropTypes from 'prop-types';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
`;

const EnergyUsage = ({ meterReadings }) => (
  <Container>
    <BarChart width={1400} height={400} data={meterReadings}>
      <XAxis dataKey="date" />
      <YAxis dataKey="energyUsage" />
      <CartesianGrid horizontal={false} />
      <Tooltip />
      <Bar dataKey="energyUsage" fill="#03ad54" isAnimationActive={false} />
    </BarChart>
  </Container>
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
