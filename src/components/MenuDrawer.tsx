import { Fragment, memo, useContext } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Button, CircularProgress, Divider } from '@material-ui/core';
import { GlobalContext, theme } from '@zoonk/utils';
import LanguageFilter from './LanguageFilter';
import MenuPages from './MenuPages';
import SocialLinks from './SocialLinks';

const loading = { loading: () => <CircularProgress /> };
const MenuUser = dynamic(() => import('./MenuUser'), loading);

/**
 * Side-nav/menu containing a menu with all pages and user info.
 */
const MenuDrawer = () => {
  const { translate, user } = useContext(GlobalContext);

  return (
    <Fragment>
      {!user && (
        <div style={{ margin: theme.spacing(2) }}>
          <Link href="/login" passHref>
            <Button variant="contained" color="primary">
              {translate('login')}
            </Button>
          </Link>
        </div>
      )}

      {user && <MenuUser />}

      <Divider />
      <MenuPages />
      <Divider />
      <SocialLinks />
      <Divider />
      <LanguageFilter style={{ width: 'auto', margin: theme.spacing(2) }} />
    </Fragment>
  );
};

export default memo(MenuDrawer);
