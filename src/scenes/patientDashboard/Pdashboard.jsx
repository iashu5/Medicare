import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f4f6f8;
  flex-grow: 1;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 10px;
  color: #333;
`;

const Card = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Stat = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StatLabel = styled.span`
  font-weight: bold;
  color: #555;
`;

const StatValue = styled.span`
  color: #000;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const PDashboard = () => {
  return (
    <DashboardContainer>
      <Section>
        <SectionTitle>Personal Health Records</SectionTitle>
        <Card>
          <Stat>
            <StatLabel>Blood Pressure:</StatLabel>
            <StatValue>120/80 mmHg</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Weight:</StatLabel>
            <StatValue>70 kg</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Heart Rate:</StatLabel>
            <StatValue>72 bpm</StatValue>
          </Stat>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Appointments</SectionTitle>
        <Card>
          <Stat>
            <StatLabel>Next Appointment:</StatLabel>
            <StatValue>Dr. Smith - Jun 25, 2024 - 10:00 AM</StatValue>
          </Stat>
          <Button>Schedule New Appointment</Button>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Prescriptions</SectionTitle>
        <Card>
          <Stat>
            <StatLabel>Current Medication:</StatLabel>
            <StatValue>Med 1: Dosage - Frequency</StatValue>
          </Stat>
          <Stat>
            <StatLabel>Medication History:</StatLabel>
            <StatValue>Med 2: Dosage - End Date</StatValue>
          </Stat>
          <Button>Request Refill</Button>
        </Card>
      </Section>
    </DashboardContainer>
  );
};

export default PDashboard;
