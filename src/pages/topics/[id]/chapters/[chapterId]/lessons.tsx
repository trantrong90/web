import { useContext, useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Container } from '@material-ui/core';
import ChaptersBreadcrumb from '@zoonk/components/ChaptersBreadcrumb';
import LessonSortableList from '@zoonk/components/LessonSortableList';
import Meta from '@zoonk/components/Meta';
import { analytics, GlobalContext } from '@zoonk/utils';

const ChapterLessons: NextPage = () => {
  const { translate } = useContext(GlobalContext);
  const { query } = useRouter();

  useEffect(() => {
    analytics().setCurrentScreen('chapter_lessons');
  }, []);

  return (
    <Container component="main">
      <Meta title={translate('lessons')} noIndex />
      <ChaptersBreadcrumb
        title={translate('chapter')}
        page={translate('lessons')}
      />
      {query.chapterId && (
        <LessonSortableList
          category="lessons"
          chapterId={String(query.chapterId)}
        />
      )}
    </Container>
  );
};

export default ChapterLessons;
