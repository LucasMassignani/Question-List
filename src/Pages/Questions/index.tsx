import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const Questions = (): React.ReactElement => {
  const [searchParameters, setSearchParameters] = useSearchParams();

  const filterRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <div>
      <input
        type="text"
        ref={filterRef}
        defaultValue={searchParameters.get('filter') || ''}
      />

      <button
        onClick={(): void => {
          setSearchParameters({
            filter: filterRef.current?.value || '',
          });
        }}
      >
        Search
      </button>

      <p>Questions {searchParameters.get('filter')}</p>
    </div>
  );
};
