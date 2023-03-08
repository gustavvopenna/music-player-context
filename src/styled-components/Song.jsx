import styled from "styled-components";

export const Song = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #e5e5e5;
  
  &:last-child {
    border-bottom: none;
  }
`