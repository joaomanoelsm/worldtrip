import Header from './components/header';
import Home from './components/home';
import Benefits from './components/benefits';
import Expeditions from './components/expeditions';
import Plans from './components/plans';
import Assessments from './components/assessments';
import Faq from './components/faq';
import Footer from './components/footer';

export const App = () => {

  return (
    <>
      <main>
        <Header />
        <Home />
        <Benefits />
        <Expeditions />
        <Plans />
        <Assessments />
        <Faq />
        <Footer />
      </main>
    </>
  )
}
