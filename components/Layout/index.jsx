import Header from '../Header/Header'
import Contacts from '../Contacts/Contacts'
import Footer from '../Footer/Footer'

export const Layout = ({ children }) => {
  return (
    <>
      {/* <Header /> */}
      <main>{children}</main>
      <Contacts />
      <Footer />
    </>
  )
}