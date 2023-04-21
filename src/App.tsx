import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Error } from './Pages/Error';
import { Question } from './Pages/Question';
import { Questions } from './Pages/Questions';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: (
          <Navigate
            to="/questions"
            replace
          />
        ),
      },
      {
        path: '/questions',
        element: <Questions />,
      },
      {
        path: '/questions/:questionId',
        element: <Question />,
      },
    ],
  },
]);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
