import React from 'react';
import styled, { keyframes } from 'styled-components';

// --- Keyframe Animations ---
const slideInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const slideInRight = keyframes`
  from { opacity: 0; transform: translateX(30px); }
  to   { opacity: 1; transform: translateX(0); }
`;
const pulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(98, 0, 238, 0.4); }
  50%      { box-shadow: 0 0 0 10px rgba(98, 0, 238, 0); }
`;

// --- Styled Containers ---
const Wrapper = styled.div`
  display: flex;
  max-width: 960px;
  margin: 2rem auto;
  gap: 2rem;
  padding: 0 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Card = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 8px 24px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0,0,0,0.15);
  }
`;

const FormCard = styled(Card)`
  animation: ${slideInLeft} 0.6s ease-out both;
`;

const AddressCard = styled(Card)`
  animation: ${slideInRight} 0.6s ease-out both;
`;

// --- Form Elements ---
const Field = styled.div`
  margin-bottom: 1.5rem;
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: #333;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    outline: none;
    border-color: #6200ee;
    box-shadow: 0 0 0 3px rgba(98,0,238,0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #e0e0e0;
  border-radius: 6px;
  resize: vertical;
  transition: border-color 0.3s, box-shadow 0.3s;
  &:focus {
    outline: none;
    border-color: #6200ee;
    box-shadow: 0 0 0 3px rgba(98,0,238,0.2);
  }
`;

const Button = styled.button`
  background: #6200ee;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &:hover {
    animation: ${pulse} 1s infinite;
  }
`;

// --- Component ---
const ContactUs = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // your submit logic
    alert('Form submitted!');
  };

  return (
    <Wrapper>
      <FormCard>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <Field>
            <label htmlFor="name">Name</label>
            <Input id="name" type="text" required placeholder="Your name" />
          </Field>
          <Field>
            <label htmlFor="email">Email</label>
            <Input id="email" type="email" required placeholder="you@example.com" />
          </Field>
          <Field>
            <label htmlFor="message">Message</label>
            <TextArea
              id="message"
              rows="4"
              required
              placeholder="How can we help?"
            />
          </Field>
          <Button type="submit">Send Message</Button>
        </form>
      </FormCard>

      <AddressCard>
        <h2>Address</h2>
        <p>456 Mississippi Ave</p>
        <p>New York, USA</p>
        <p>0187 448 445</p>
        <p>info@safehaven.com</p>
      </AddressCard>
    </Wrapper>
  );
};

export default ContactUs;
