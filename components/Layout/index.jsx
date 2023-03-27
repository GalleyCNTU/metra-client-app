import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'

export const Layout = ({ children, isOpen, setIsOpen }) => {
  return (
    <>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <main>{children}</main>
      <Contacts />
      <Footer />
    </>
  )
}