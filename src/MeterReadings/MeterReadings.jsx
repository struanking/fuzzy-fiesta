import PropTypes from 'prop-types';
import React from 'react';
import Table, { Body, Cell, ColHeading, Head, Row } from '../components/Table';

const MeterReadings = ({ meterReadings }) => (
  <Table>
    <Head>
      <Row>
        <ColHeading>Date</ColHeading>
        <ColHeading>Reading</ColHeading>
        <ColHeading>Unit</ColHeading>
      </Row>
    </Head>
    <Body>
      {meterReadings.map(reading => (
        <Row key={reading.readingDate}>
          <Cell>{reading.readingDate}</Cell>
          <Cell>{reading.cumulative}</Cell>
          <Cell>{reading.unit}</Cell>
        </Row>
      ))}
    </Body>
  </Table>
);

const defaultReadings = [];

MeterReadings.defaultProps = {
  meterReadings: defaultReadings,
};

MeterReadings.propTypes = {
  meterReadings: PropTypes.arrayOf(PropTypes.shape({
    cumulative: PropTypes.number,
    readingDate: PropTypes.string,
    unit: PropTypes.string,
  })),
};

export default MeterReadings;
