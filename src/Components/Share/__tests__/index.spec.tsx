import { fireEvent, render, screen } from '@testing-library/react';
import { Share } from '../index';

const mockMutate = jest.fn();

jest.mock('react-query', () => {
  return {
    ...jest.requireActual('react-query'),
    useMutation: jest.fn().mockReturnValue({
      isLoading: false,
      mutate: (params: { choiceIndex: number }) => {
        mockMutate(params);
      },
    }),
  };
});

describe('Share', () => {
  it('must share current url', () => {
    render(<Share />);

    const shareScreenButton = screen.getByText('Share Screen');

    fireEvent.click(shareScreenButton);

    const input = screen.getByPlaceholderText('E-mail');

    fireEvent.change(input, { target: { value: 'test@test.com' } });

    const submitButton = screen.getByText('Submit');

    fireEvent.click(submitButton);

    expect(mockMutate).toBeCalledWith({
      destination: 'test@test.com',
      url: location.href,
    });
  });
});
