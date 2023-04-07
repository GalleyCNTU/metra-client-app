import { CarForm } from '../CarForm';
import { Header, Footer, Contacts } from './components';

export const Layout = ({
  children,
  isOpen,
  setIsOpen,
  setLogo,
  hideMediaQuery = false,
  makes = null,
}) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} setLogo={setLogo} />
      <main>{children}</main>
      <CarForm makes={makes} hideMediaQuery={hideMediaQuery} />
      <Contacts hideMediaQuery={hideMediaQuery} />
      <Footer />
    </>
  );
};
