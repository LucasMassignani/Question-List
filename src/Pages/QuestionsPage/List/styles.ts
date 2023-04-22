import styled from 'styled-components';

export const QuestionContainer = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: #d3d3d3;
  }

  img {
    object-fit: cover;
    border-radius: 10px;
    height: 100px;
    width: 100px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    & > p {
      margin-bottom: 10px;
    }
  }

  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
`;

export const ChoiceContent = styled.span<{ background: string }>`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 6px;
  border-radius: 3px;

  background-color: ${(props): string => {
    return props.background;
  }};
`;
