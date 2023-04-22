import { fireEvent, render, screen } from '@testing-library/react';
import { List } from '../index';

jest.mock('react-query', () => {
  return {
    ...jest.requireActual('react-query'),
    useMutation: jest.fn().mockReturnValue({
      isLoading: false,
    }),
    useInfiniteQuery: jest.fn().mockReturnValue({
      remove: jest.fn(),
    }),
  };
});

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useSearchParams: jest.fn().mockReturnValue([
      {
        get: jest.fn(),
      },
      jest.fn(),
    ]),
    useNavigate: () => {
      return mockNavigate;
    },
  };
});

describe('List', () => {
  it('must navigate to the question', () => {
    render(
      <List
        fetchNextPage={jest.fn()}
        hasNextPage={true}
        isFetchingNextPage={false}
        questions={[
          {
            id: 1,
            image_url: '',
            published_at: '',
            question: 'Questions',
            thumb_url: '',
            choices: [],
          },
        ]}
      />,
    );

    const question = screen.getByText('Questions');

    fireEvent.click(question);

    expect(mockNavigate).toBeCalledWith('/questions/1');
  });

  it('must load more questions', () => {
    const mockFetchNextPage = jest.fn();

    render(
      <List
        fetchNextPage={mockFetchNextPage}
        hasNextPage={true}
        isFetchingNextPage={false}
        questions={[
          {
            id: 1,
            image_url: '',
            published_at: '',
            question: 'Questions',
            thumb_url: '',
            choices: [],
          },
        ]}
      />,
    );

    const loadMore = screen.getByText('Load More');

    fireEvent.click(loadMore);

    expect(mockFetchNextPage).toBeCalledTimes(1);
  });
});
