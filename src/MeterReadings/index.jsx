import Holen from 'holen';
import React from 'react';
import { remoteDataUrl } from '../globals';
import MeterReadings from './MeterReadings';

export default () => (
  <Holen url={remoteDataUrl}>
    {({ data, fetching }) => (
      fetching
        ? <p>Loading meter readings...</p>
        : <MeterReadings meterReadings={data.electricity} />
      )
    }
  </Holen>
);
