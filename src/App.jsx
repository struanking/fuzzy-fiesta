import Holen from 'holen';
import React, { Fragment } from 'react';
import { injectGlobal } from 'styled-components';
import EnergyUsage from './components/EnergyUsage';
import Layout from './components/Layout';
import MeterReadings from './components/MeterReadings';
import globalStyles from './globalStyles';

/* eslint-disable-next-line no-unused-expressions */
injectGlobal`${globalStyles}`;

const handleResponse = data => data.electricity;

export default () => (
  <Layout>
    <Holen transformResponse={handleResponse} url="https://storage.googleapis.com/bulb-interview/meterReadingsReal.json">
      {({ data, fetching }) => (
        fetching
          ? <p>Loading meter readings...</p>
          : (
            <Fragment>
              <EnergyUsage meterReadings={data} />
              <MeterReadings meterReadings={data} />
            </Fragment>
          )
        )
      }
    </Holen>
  </Layout>
);
