import { Layout, Drawer } from 'components';

import classes from './404.module.scss';
import { useState } from 'react';

const Custom404 = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} anchor="left" />
      <Layout
        hideMediaQuery={true}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setForm={true}
      >
        <div className={classes.notFound}>
          <p className={classes.notFound_title} variant="h3">
            Сторінку не знайдено
          </p>
        </div>
      </Layout>
    </>
  );
};

export default Custom404;
