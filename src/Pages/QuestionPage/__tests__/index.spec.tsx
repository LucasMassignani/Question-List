import { fireEvent, render, screen } from '@testing-library/react';
import { QuestionPage } from '../index';

const mockUseQuery = jest.fn();
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
    useQuery: () => {
      return mockUseQuery();
    },
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useParams: jest.fn().mockReturnValue({
      questionId: '1',
    }),
    useNavigate: () => {
      return mockNavigate;
    },
  };
});

describe('QuestionPage', () => {
  it('must update the question', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      data: {
        id: 1,
        image_url: '',
        published_at: '',
        question: 'Questions',
        thumb_url: '',
        choices: [
          {
            votes: 10,
            choice: 'Test',
          },
        ],
      },
    });

    render(<QuestionPage />);

    const choice = screen.getByText('Test');

    fireEvent.click(choice);

    expect(mockMutate).toBeCalledWith({ choiceIndex: 0 });
  });

  it('must navigate back', () => {
    mockUseQuery.mockReturnValue({
      isLoading: false,
      data: {
        id: 1,
        image_url: '',
        published_at: '',
        question: 'Questions',
        thumb_url: '',
        choices: [
          {
            votes: 10,
            choice: 'Test',
          },
        ],
      },
    });

    render(<QuestionPage />);

    const backButton = screen.getByText('Back');

    fireEvent.click(backButton);

    expect(mockNavigate).toBeCalledWith(-1);
  });
});
