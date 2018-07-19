import Holen from 'holen';
import React from 'react';
import energyUsageData from '../components/energyUsageData';
import { remoteDataUrl } from '../globals';
import EnergyUsage from './EnergyUsage';

const transformResponse = data => energyUsageData(data.electricity);

export default () => (
  <Holen
    url={remoteDataUrl}
    transformResponse={transformResponse}
  >
    {({ data, fetching }) => (
      fetching
        ? <p>Loading meter readings...</p>
        : <EnergyUsage meterReadings={data} />
      )
    }
  </Holen>
);
