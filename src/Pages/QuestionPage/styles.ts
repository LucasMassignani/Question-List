import styled from 'styled-components';

export const Header = styled.div`
  font-size: 20px;
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 10px;
`;

export const OptionsContainer = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 0px 10px 10px 10px;
  width: 100%;

  & > * {
    margin-right: 10px;
    margin-top: 10px;
  }
`;

export const QuestionContainer = styled.div`
  border-bottom: 1px solid rgb(239, 243, 244);
  padding: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background-color 0.2s;

  img {
    object-fit: cover;
    border-radius: 10px;
    width: 100%;
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
    margin-top: 10px;
  }
`;

export const ChoicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 10px;
`;

export const ChoiceContent = styled.span<{
  background: [number, number, number];
  selected: boolean | null;
}>`
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 6px;
  border-radius: 3px;

  cursor: ${(props): string => {
    if (props.selected === null) {
      return 'pointer';
    }

    return 'not-allowed';
  }};

  opacity: ${(props): string => {
    if (props.selected || props.selected === null) {
      return '1';
    }

    return '0.5';
  }};

  background-color: ${(props): string => {
    const [r, g, b] = props.background;
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }};

  border: ${(props): string => {
    const [r, g, b] = props.background;

    return `2px solid rgb(${r}, ${g}, ${b}, 0.5)`;
  }};

  &:hover {
    background-color: ${(props): string => {
      const [r, g, b] = props.background;
      return `rgba(${r}, ${g}, ${b}, 0.8)`;
    }};
  }

  &:active {
    background-color: ${(props): string => {
      const [r, g, b] = props.background;
      return `rgb(${r}, ${g}, ${b})`;
    }};
  }
`;
