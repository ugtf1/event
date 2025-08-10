import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

// Fade-in keyframe
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

// Styled components
const Container = styled.div`
  display: flex;
  gap: 2rem;
  padding: 2rem;
  animation: ${fadeIn} 0.6s ease-out;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  background: #faf3f3ff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 8px 16px rgba(165, 162, 162, 1);
  animation: ${fadeIn} 0.8s ease-out;
`;

const LeftCard = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h2`
  margin: 0 0 1rem;
  color: #333;
`;

const Paragraph = styled.p`
  flex: 1;
  color: #555;
  line-height: 1.4;
`;

const Button = styled.button`
  align-self: flex-start;
  margin-top: 1.5rem;
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background: #6b1c04ff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  
  &:hover {
    background: #dd3c0aff;
    transform: scale(1.05);
  }
`;

const RightCard = styled(Card)`
  overflow-x: auto;
`;

const CalendarHeader = styled.div`
  text-align: center;
  margin-bottom: 1rem;
  font-weight: bold;
  color: #333;
`;

const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.25rem;
`;

const DayHeader = styled.div`
  font-size: 0.85rem;
  text-align: center;
  color: #666;
`;

const DayCell = styled.div`
  height: 2.5rem;
  text-align: center;
  line-height: 2.5rem;
  border-radius: 4px;
  transition: background 0.2s, transform 0.2s;
  cursor: pointer;
  
  &:hover {
    background: #fa0606ff;
    transform: scale(1.05);
  }
  
  &.today {
    background: #700707ff;
    color: white;
  }
`;

const CardsContainer = () => {
  const [daysMatrix, setDaysMatrix] = useState([]);

  useEffect(() => {
    // Build calendar matrix for current month
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay(); // 0=Sun
    const totalDays = new Date(year, month + 1, 0).getDate();
    
    const weeks = [];
    let currentWeek = Array(7).fill(null);
    let dayCounter = 1;
    
    // Fill the first week
    for (let i = firstDay; i < 7; i++) {
      currentWeek[i] = dayCounter++;
    }
    weeks.push(currentWeek);

    // Fill subsequent weeks
    while (dayCounter <= totalDays) {
      const week = Array(7).fill(null);
      for (let i = 0; i < 7 && dayCounter <= totalDays; i++) {
        week[i] = dayCounter++;
      }
      weeks.push(week);
    }

    setDaysMatrix(weeks);
  }, []);

  const now = new Date();
  const monthName = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();
  const todayDate = now.getDate();

  return (
    <Container>
      <LeftCard>
        <div>
          <Title>Book a Hall Now</Title>
          <Paragraph>
            We offer a variety of halls for your events. Whether it's a wedding, party, or corporate event, we have the perfect space for you. Book now to secure your date!
          </Paragraph>
        </div>
        <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
      </LeftCard>

      <RightCard>
        <CalendarHeader>
          {monthName} {year}
        </CalendarHeader>
        <CalendarGrid>
          {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d => (
            <DayHeader key={d}>{d}</DayHeader>
          ))}

          {daysMatrix.flat().map((day, idx) => (
            <DayCell
              key={idx}
              className={day === todayDate ? 'today' : ''}
            >
              {day || ''}
            </DayCell>
          ))}
        </CalendarGrid>
      </RightCard>
    </Container>
  );
};

export default CardsContainer;