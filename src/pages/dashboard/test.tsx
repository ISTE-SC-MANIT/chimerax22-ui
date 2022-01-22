import React from 'react';
import Instructions from '../../components/test/instructions';
import { ComponentProps } from '../_app';
import { Button, Grid, Box } from '@mui/material';
import { useRouter } from 'next/router';
import QuizPage from '../../components/test/quizPage';
import Success from '../../components/test/success';
import LoadingScreen from '../../components/loadingScreen';
import { UserQuizStatus } from '../../__generated__/globalTypes';
import { GetQuizStatusQuery } from '../../__generated__/GetQuizStatusQuery';
import { GetQuizStatus } from '../../lib/queries/GetQuizStatusQuery';
import { useMutation, useQuery } from '@apollo/client';
import { StartQuiz } from '../../lib/mutations/StartQuizMutation';
import moment from 'moment';

const Test: React.FC<ComponentProps> = ({
  viewer,
  setSuccessMessage,
  refetch,
  setErrorMessage,
}) => {
  const [quizStatus, setQuizStatus] = React.useState<UserQuizStatus>(
    UserQuizStatus.NOT_STARTED
  );

  const [disableButton, setButtonDisable] = React.useState(true);
  const { data, error, loading } = useQuery<GetQuizStatusQuery>(GetQuizStatus);
  const router = useRouter();

  React.useEffect(() => {
    if (viewer.step === 'REGISTER') {
      router.push('/dashboard/register');
    }
    if (viewer.step === 'PAYMENT') {
      router.push('/dashboard/payment');
    }
    if (viewer.step === 'TEST') {
    }
    if (viewer.step === 'CHOOSE_TEAM') {
      router.push('/dashboard/team');
    }
  }, []);

  //  React.useEffect(() => {
  //    const timer = setInterval(() => {
  //      const currentTime = moment(new Date());
  //      const enableTime = moment('19:00:00', 'hh:mm:ss');
  //      const disableTime = moment('19:06:00', 'hh:mm:ss');
  //      if (currentTime.isBetween(enableTime, disableTime)) {
  //        setButtonDisable(false);
  //      } else {
  //        setButtonDisable(true);
  //        if (currentTime.isAfter(disableTime)) clearInterval(timer);
  //      }
  //    }, 1000);

  //    return () => clearTimeout(timer);
  //  });
  React.useEffect(() => {
    if (data) {
      setQuizStatus(data.getQuizDetails.userQuizStatus);
    }
  }, [data]);

  const [StartQuizFunction, startQuizResponse] = useMutation(StartQuiz);

  const handleStartQuiz = () => {
    StartQuizFunction({
      onCompleted: () => {
        setSuccessMessage('Quiz has Started');
        setQuizStatus(UserQuizStatus.STARTED);
      },
      onError: () => {
        setErrorMessage('Something went wrong');
      },
    });
  };

  if (loading) {
    return <LoadingScreen loading={true} />;
  }
  return quizStatus === 'STARTED' ? (
    <QuizPage
      viewer={viewer}
      setSuccessMessage={setSuccessMessage}
      refetch={refetch}
      setErrorMessage={setErrorMessage}
      setQuizStatus={() => setQuizStatus(UserQuizStatus.ENDED)}
    />
  ) : quizStatus === 'NOT_STARTED' ? (
    <>
      <Instructions
        page='instructions'
        viewer={viewer}
        setSuccessMessage={setSuccessMessage}
        refetch={refetch}
        setErrorMessage={setErrorMessage}
      />
      <Grid container spacing={0} alignItems='center' justifyContent='center'>
        <Box marginBottom={4}>
          <Button
            onClick={handleStartQuiz}
            disabled={false}
            variant='contained'
            color='primary'
          >
            Start Quiz
          </Button>
        </Box>
      </Grid>
    </>
  ) : (
    <Success
      viewer={viewer}
      setSuccessMessage={setSuccessMessage}
      refetch={refetch}
      setErrorMessage={setErrorMessage}
    />
  );
};

export default Test;
