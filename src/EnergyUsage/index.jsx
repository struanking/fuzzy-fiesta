import Holen from 'holen';
import React from 'react';
import { remoteDataUrl } from '../globals';
import endOfMonthReading from './endOfMonthReading';
import EnergyUsage from './EnergyUsage';
import energyUsageData from './energyUsageData';

// original transform
const transformResponse = data => energyUsageData(data.electricity);
const estimatedEndOfMonth = data => endOfMonthReading(data.electricity);

export default () => (
  <Holen
    url={remoteDataUrl}
    transformResponse={estimatedEndOfMonth}
  >
    {({ data, fetching }) => (
      fetching
        ? <p>Loading meter readings...</p>
        : <EnergyUsage meterReadings={data} />
      )
    }
  </Holen>
);
