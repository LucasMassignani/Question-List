import React from 'react';
import { useParams } from 'react-router-dom';

export const Question = (): React.ReactElement => {
  const { questionId } = useParams<{ questionId: string }>();

  return (
    <div>
      <p>Question {questionId}</p>
    </div>
  );
};
