import React from 'react';
import { injectGlobal } from 'styled-components';
import Layout from './components/Layout';
import Section, { Heading } from './components/Section';
import EnergyUsage from './EnergyUsage';
import { styles } from './globals';
import MeterReadings from './MeterReadings';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`${styles}`;

export default () => (
  <Layout>
    <Section>
      <Heading>Energy Usage</Heading>
      <EnergyUsage />
    </Section>

    <Section>
      <Heading>Meter Readings</Heading>
      <MeterReadings />
    </Section>
  </Layout>
);
