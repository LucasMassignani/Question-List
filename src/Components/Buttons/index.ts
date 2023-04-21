import styled from 'styled-components';

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 4px;

  background: #6fbbd3;
  border: 1px solid #6fbbd3;
  color: #ffffff;
  transition: background-color 0.2s;

  &:hover {
    border-color: #3ea4c4;
    background: #3ea4c4;
  }

  &:active {
    border-color: #30849e;
    background: #30849e;
  }
`;

export const ButtonSecondary = styled(Button)`
  background: #20d420;
  border: 1px solid #20d420;

  &:hover {
    border-color: #1aaa1a;
    background: #1aaa1a;
  }

  &:active {
    border-color: #158815;
    background: #158815;
  }
`;

export const ButtonError = styled(Button)`
  background: #dc3545;
  border: 1px solid #dc3545;

  &:hover {
    border-color: #ba202f;
    background: #ba202f;
  }

  &:active {
    border-color: #951a26;
    background: #951a26;
  }
`;

export const ButtonGray = styled(Button)`
  background: #6c757d;
  border: 1px solid #6c757d;

  &:hover {
    border-color: #565e64;
    background: #565e64;
  }

  &:active {
    border-color: #454b50;
    background: #454b50;
  }
`;
