import { CarForm } from '../CarForm';
import { Header, Footer, Contacts } from './components';

export const Layout = ({
  children,
  isOpen,
  setIsOpen,
  setLogo,
  hideMediaQuery = false,
  makes = null,
  advMenu = false,
}) => {
  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setLogo={setLogo}
        advMenu={advMenu}
      />
      <main>{children}</main>
      <CarForm makes={makes} hideMediaQuery={hideMediaQuery} />
      <Contacts hideMediaQuery={hideMediaQuery} />
      <Footer />
    </>
  );
};
