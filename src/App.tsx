import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { Root } from './Layout/Root';
import { QuestionPage } from './Pages/QuestionPage';
import { QuestionsPage } from './Pages/QuestionsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: (
      <Navigate
        to="/questions"
        replace
      />
    ),
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
        element: <QuestionsPage />,
      },
      {
        path: '/questions/:questionId',
        element: <QuestionPage />,
      },
    ],
  },
]);

const App = (): React.ReactElement => {
  return <RouterProvider router={router} />;
};

export default App;
