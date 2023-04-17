import { Layout, Drawer } from 'components';

import { useState } from 'react';

import classes from 'pages/404/404.module.scss';

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
          <span className={classes.notFound_title} variant="h3">
            Об&#39;яву не знайдено
          </span>
        </div>
      </Layout>
    </>
  );
};

export default Custom404;
