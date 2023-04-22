import React from 'react';
import { useInfiniteQuery } from 'react-query';
import { useSearchParams } from 'react-router-dom';
import { Button, ButtonGray } from '../../Components/Buttons';
import { Input } from '../../Components/Input';
import { Spinning } from '../../Components/Loading/Spinning';
import { Share } from '../../Components/Share';
import { Question } from '../../Interfaces/Question';
import { axiosInstance } from '../../Providers/ReactQueryProvider';
import { List } from './List';
import { Header, ListContainer, SearchContainer } from './styles';

const firstPage = 0;
const limit = 10;

export const QuestionsPage = (): React.ReactElement => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const filterRef = React.useRef<HTMLInputElement | null>(null);

  const searching = typeof searchParameters.get('filter') === 'string';

  React.useEffect(() => {
    const filterValue = searchParameters.get('filter');

    if (typeof filterValue === 'string' && !filterValue.length) {
      filterRef.current?.focus();
    }
  }, []);

  const {
    hasNextPage,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    data,
    remove,
  } = useInfiniteQuery({
    queryFn: async ({ pageParam = firstPage }) => {
      const response = await axiosInstance.get<Question[]>('/questions', {
        params: {
          limit,
          offset: pageParam * limit,
          filter: searchParameters.get('filter'),
        },
      });

      return response.data;
    },
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length === limit) {
        return allPages?.length || firstPage;
      }
    },
    enabled: searching,
  });

  return (
    <div>
      <Header>
        <h1>Question List</h1>
      </Header>

      <SearchContainer>
        <Input
          type="text"
          ref={filterRef}
          defaultValue={searchParameters.get('filter') || ''}
          placeholder="Search for questions..."
        />

        <Button
          onClick={(): void => {
            remove();
            setSearchParameters({
              filter: filterRef.current?.value || '',
            });
          }}
        >
          Search
        </Button>

        {searching && (
          <React.Fragment>
            <ButtonGray
              onClick={(): void => {
                if (filterRef.current) {
                  filterRef.current.value = '';
                }

                remove();
                setSearchParameters({});
              }}
            >
              Dismiss
            </ButtonGray>
            <Share />
          </React.Fragment>
        )}
      </SearchContainer>

      {isLoading ? (
        <ListContainer>
          <Spinning
            color="#d3d3d3"
            size={36}
          />
        </ListContainer>
      ) : (
        <List
          questions={
            data?.pages?.flatMap((page) => {
              return page;
            }) || []
          }
          fetchNextPage={fetchNextPage}
          hasNextPage={!!hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      )}
    </div>
  );
};
