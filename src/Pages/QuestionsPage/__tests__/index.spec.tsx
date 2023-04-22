import { fireEvent, render, screen } from '@testing-library/react';
import { QuestionsPage } from '../index';

const mockRemove = jest.fn();

jest.mock('react-query', () => {
  return {
    ...jest.requireActual('react-query'),
    useMutation: jest.fn().mockReturnValue({
      isLoading: false,
    }),
    useInfiniteQuery: jest.fn().mockReturnValue({
      remove: () => {
        mockRemove();
      },
    }),
  };
});

const mockGet = jest.fn();
const mockSet = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useSearchParams: jest.fn().mockReturnValue([
      {
        get: () => {
          return mockGet();
        },
      },
      (params: Record<string, string>) => {
        mockSet(params);
      },
    ]),
    useNavigate: jest.fn(),
  };
});

describe('QuestionsPage', () => {
  it('must update query params on search', () => {
    render(<QuestionsPage />);

    const input = screen.getByPlaceholderText('Search for questions...');

    fireEvent.change(input, { target: { value: 'test' } });

    const buttonSearch = screen.getByText('Search');

    fireEvent.click(buttonSearch);

    expect(mockRemove).toBeCalledTimes(1);

    expect(mockSet).toBeCalledWith({
      filter: 'test',
    });
  });

  it('must clear query params on dismiss', async () => {
    mockGet.mockReturnValue('test');

    render(<QuestionsPage />);

    const input = screen.getByPlaceholderText<HTMLInputElement>(
      'Search for questions...',
    );

    expect(input.value).toBe('test');

    const buttonDismiss = await screen.findByText('Dismiss');

    fireEvent.click(buttonDismiss);

    expect(input.value).toBe('');

    expect(mockRemove).toBeCalledTimes(1);

    expect(mockSet).toBeCalledWith({});
  });
});
