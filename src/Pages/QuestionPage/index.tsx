import ColorHash from 'color-hash';
import React from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonGray } from '../../Components/Buttons';
import { Loading } from '../../Components/Loading';
import { Share } from '../../Components/Share';
import { Question } from '../../Interfaces/Question';
import { axiosInstance, queryClient } from '../../Providers/ReactQueryProvider';
import {
  ChoiceContent,
  ChoicesContainer,
  Header,
  OptionsContainer,
  QuestionContainer,
} from './styles';

const previousPage = -1;

const colorHash = new ColorHash({
  lightness: 0.7,
});

export const QuestionPage = (): React.ReactElement => {
  const [votedIndex, setVotedIndex] = React.useState<number | null>(null);

  const { questionId } = useParams<{ questionId: string }>();

  const navigate = useNavigate();

  const { isLoading, data: question } = useQuery({
    queryKey: ['question', questionId],
    queryFn: async () => {
      const response = await axiosInstance.get<Question>(
        `/questions/${questionId}`,
      );

      return response.data;
    },
    enabled: !!questionId,
  });

  const mutation = useMutation(
    async ({ choiceIndex }: { choiceIndex: number }): Promise<void> => {
      if (!question) {
        return;
      }

      const newChoices = [...question.choices];

      newChoices[choiceIndex].votes++;

      return axiosInstance.put(`/questions/${questionId}`, {
        ...question,
        choices: newChoices,
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['question', questionId]);
      },
    },
  );

  if (isLoading || !question) {
    return <Loading />;
  }

  return (
    <div>
      <Header>
        <h1>Question Description</h1>
      </Header>

      <OptionsContainer>
        <React.Fragment>
          <ButtonGray
            onClick={(): void => {
              navigate(previousPage);
            }}
          >
            Back
          </ButtonGray>
          <Share />
        </React.Fragment>
      </OptionsContainer>

      <QuestionContainer>
        <img src={question.image_url} />
        <div>
          <h2>{question.question}</h2>
          <ChoicesContainer>
            {question.choices?.map((choice, index) => {
              return (
                <ChoiceContent
                  background={colorHash.rgb(choice.choice)}
                  selected={
                    votedIndex === null ? votedIndex : votedIndex === index
                  }
                  key={choice.choice}
                  onClick={(): void => {
                    if (votedIndex !== null) {
                      return;
                    }

                    mutation.mutate({ choiceIndex: index });

                    setVotedIndex(index);
                  }}
                >
                  {choice.choice}
                  {votedIndex !== null && ` - ${choice.votes} Votes`}
                </ChoiceContent>
              );
            })}
          </ChoicesContainer>
        </div>
      </QuestionContainer>
    </div>
  );
};
