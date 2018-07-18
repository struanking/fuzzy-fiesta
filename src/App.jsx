import React from 'react';
import { injectGlobal } from 'styled-components';
import EnergyUsage from './components/EnergyUsage';
import Layout from './components/Layout';
import MeterReadings from './components/MeterReadings';
import meterReadingsData from './data/meterReadingsSample.json';
import globalStyles from './globalStyles';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`${globalStyles}`;

export default () => (
  <Layout>
    <EnergyUsage meterReadings={meterReadingsData.electricity} />
    <MeterReadings meterReadings={meterReadingsData.electricity} />
  </Layout>
);
