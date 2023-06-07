import Layout from "../Layout";
import SupportPage from "../Support/page";
import HeroMainPage from "../HeroSection/HeroMainPage";
import ContributorsMainPage from "../Contributors/page";
import ServicesMainPage from "../Services/ServicesMainPage";

function Homepage() {
  return (
    <Layout hideNavbarAndFooter={false}>
      <HeroMainPage />
      <ServicesMainPage />
      <ContributorsMainPage />
      <SupportPage />
    </Layout>
  )
}

export default Homepage;