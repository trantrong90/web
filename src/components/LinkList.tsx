import { useContext } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { Post } from '@zoonk/models';
import { GlobalContext } from '@zoonk/utils';
import LinkCard from './LinkCard';

interface LinkListProps {
  sites: Post.Link[];
}

const LinkList = ({ sites }: LinkListProps) => {
  const { translate } = useContext(GlobalContext);

  if (sites.length === 0) return null;

  return (
    <Grid container spacing={1}>
      <Typography variant="h6" gutterBottom>
        {translate('references')}
      </Typography>
      {sites.map((site) => (
        <Grid item key={site.url} xs={12}>
          <LinkCard site={site} />
        </Grid>
      ))}
    </Grid>
  );
};

export default LinkList;
