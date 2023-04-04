import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'

export const Layout = ({ children, isOpen, setIsOpen, setLogo }) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} setLogo={setLogo} />
      <main>{children}</main>
      <Contacts />
      <Footer />
    </>
  )
}