import React, { useMemo } from 'react';
import styled, { keyframes } from 'styled-components';

// Fade-in animation for cards
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
`;

const Card = styled.div`
  flex: 1 1 calc(50% - 1.5rem);
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  animation: ${fadeIn} 0.5s ease-out;
  
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Header = styled.div`
  text-align: center;
  background: #f7f7f7;
  padding: 0.75rem;
  font-weight: bold;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
  padding: 1rem;
`;

const DayName = styled.div`
  text-align: center;
  font-size: 0.85rem;
  color: #555;
`;

const DayCell = styled.div`
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  background: ${({ booked }) => (booked ? '#f28b82' : '#ccff90')};
  color: ${({ booked }) => (booked ? '#800000' : '#33691e')};
  cursor: default;
  transition: transform 0.15s, box-shadow 0.15s;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 6px rgba(0,0,0,0.2);
  }
`;

const Legend = styled.p`
  text-align: center;
  padding: 0.75rem 1rem 1.5rem;
  margin: 0;
  font-size: 0.9rem;
  color: #444;
`;

/**
 * Generates a matrix of weeks for a given month/year.
 * Each week is an array of 7 entries: either a day number or null.
 */
function generateMonthMatrix(year, month) {
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const weeks = [];
  let dayCounter = 1;
  let week = Array(7).fill(null);

  // Fill first week
  for (let i = firstDayIndex; i < 7; i++) {
    week[i] = dayCounter++;
  }
  weeks.push(week);

  // Fill remaining weeks
  while (dayCounter <= daysInMonth) {
    week = Array(7).fill(null);
    for (let i = 0; i < 7 && dayCounter <= daysInMonth; i++) {
      week[i] = dayCounter++;
    }
    weeks.push(week);
  }

  return weeks;
}

/**
 * Formats a date to 'YYYY-MM-DD' for easy comparison.
 */
function formatISO(year, month, day) {
  const mm = String(month + 1).padStart(2, '0');
  const dd = String(day).padStart(2, '0');
  return `${year}-${mm}-${dd}`;
}

const EventHallBookingCalendar = ({ bookedDates = [] }) => {
  const today = new Date();
  const startMonth = today.getMonth();
  const startYear = today.getFullYear();

  // Precompute 4 months starting from current
  const monthsToShow = useMemo(() => {
    return [0, 1, 2, 3].map((offset) => {
      const date = new Date(startYear, startMonth + offset, 1);
      return {
        year: date.getFullYear(),
        month: date.getMonth(),
        label: date.toLocaleString('default', { month: 'long', year: 'numeric' }),
        matrix: generateMonthMatrix(date.getFullYear(), date.getMonth()),
      };
    });
  }, [startYear, startMonth]);

  return (
    <Container>
      {monthsToShow.map(({ year, month, label, matrix }) => (
        <Card key={`${year}-${month}`}>
          <Header>{label}</Header>
          <Grid>
            {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map((d) => (
              <DayName key={d}>{d}</DayName>
            ))}

            {matrix.flat().map((day, idx) => {
              if (!day) {
                return <div key={idx} />; 
              }
              const iso = formatISO(year, month, day);
              const isBooked = bookedDates.includes(iso);
              return (
                <DayCell key={idx} booked={isBooked}>
                  {day}
                </DayCell>
              );
            })}
          </Grid>
          <Legend>
            <span style={{ color: '#f28b82' }}>red</span> = booked &nbsp; | &nbsp;
            <span style={{ color: '#33691e' }}>green</span> = available
          </Legend>
        </Card>
      ))}
    </Container>
  );
};

export default EventHallBookingCalendar;
