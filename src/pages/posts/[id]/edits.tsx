import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import BackButton from '@zoonk/components/BackButton';
import EditsList from '@zoonk/components/EditsList';
import Meta from '@zoonk/components/Meta';
import { analytics, GlobalContext } from '@zoonk/utils';

const LessonEdits: NextPage = () => {
  const { translate } = useContext(GlobalContext);
  const { query } = useRouter();

  useEffect(() => {
    analytics().setCurrentScreen('lesson_edits');
  }, []);

  return (
    <Container component="main">
      <Meta title={translate('page_edits')} noIndex />
      <BackButton />
      {query.id && <EditsList itemPath={`posts/${query.id}`} />}
    </Container>
  );
};

export default LessonEdits;
