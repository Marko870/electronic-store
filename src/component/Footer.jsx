import Logo from "../assets/electronic-store-logo.svg"
import { footerLinks } from "../constants"
const Footer = () => {
  return (
    <footer id="footerPart" className=' padding-x padding-y bg-gray-200 bg-'>
      <main className="max-w-[1440px] mx-auto">
        <section className="flex gap-20">
          <div>
            <img src={Logo} alt="Logo" />
          </div>
          {footerLinks.map((el,id) => (
            <div key={id}>
              <h3>{el.heading}</h3>
              <ul>
                {el.links.map((link, id) => (
                  <li key={id}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
        <section>
        </section>
      </main>
    </footer>
  )
}

export default Footer
