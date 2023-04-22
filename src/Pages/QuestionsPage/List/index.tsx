import ColorHash from 'color-hash';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../Components/Buttons';
import { Spinning } from '../../../Components/Loading/Spinning';
import { Question } from '../../../Interfaces/Question';
import { Footer, ListContainer } from '../styles';
import { ChoiceContent, ChoicesContainer, QuestionContainer } from './styles';

const colorHash = new ColorHash({
  lightness: 0.7,
});

export const List = ({
  questions,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: {
  questions: Question[];
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}): React.ReactElement => {
  const navigate = useNavigate();

  return (
    <ListContainer>
      {questions.map((question) => {
        return (
          <QuestionContainer
            onClick={(): void => {
              navigate(`/questions/${question.id}`);
            }}
            key={question.id}
          >
            <img src={question.thumb_url} />
            <div>
              <p>{question.question}</p>
              <ChoicesContainer>
                {question.choices.map((choice) => {
                  return (
                    <ChoiceContent
                      background={colorHash.hex(choice.choice)}
                      key={choice.choice}
                    >
                      {choice.choice}
                    </ChoiceContent>
                  );
                })}
              </ChoicesContainer>
            </div>
          </QuestionContainer>
        );
      })}

      {hasNextPage && (
        <Footer>
          <Button
            onClick={(): void => {
              fetchNextPage();
            }}
          >
            {isFetchingNextPage ? (
              <Spinning
                color="#000000"
                size={12}
              />
            ) : (
              'Load More'
            )}
          </Button>
        </Footer>
      )}
    </ListContainer>
  );
};
