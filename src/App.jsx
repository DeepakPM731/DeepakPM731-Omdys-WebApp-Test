import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
// import About from './components/About';
import AboutPage from './components/about/AboutPage';
import CoreValues from './components/CoreValues';
import ServiceOne from './components/services/ServiceOne';
import ServiceTwo from './components/services/ServiceTwo';
import ServiceThree from './components/services/ServiceThree';
import ServiceFour from './components/services/ServiceFour';
import Activities from './components/Activities';
import ActivityOne from './components/activities/ActivityOne';
import ActivityTwo from './components/activities/ActivityTwo';
import ActivityThree from './components/activities/ActivityThree';
import ActivityFive from './components/activities/ActivityFive';
import ActivitySix from './components/activities/ActivitySix';
import TeamPage from './components/TeamPage';
import ActivityFour from './components/activities/ActivityFour';
import ContactPage from './components/ContactPage';
import News from './components/News';
import ServiceSingle from './components/services/ServiceSingle';
import TestFour from './components/activities/TestFour';
import ContactForm from './components/ContactForm';
import MainServices from './components/services/MainServices';
import IC from './components/activities/activity-sub/activity-two/IC';
import ActiveC from './components/activities/activity-sub/activity-two/ActiveC';
import Passive from './components/activities/activity-sub/activity-two/Passive';
import Sensor from './components/activities/activity-sub/activity-two/Sensor';
import Connectors from './components/activities/activity-sub/activity-two/Connectors';
import SwitchRelay from './components/activities/activity-sub/activity-two/SwitchRelay';
import Led from './components/activities/activity-sub/activity-two/Led';
import PowerBaterry from './components/activities/activity-sub/activity-two/PowerBaterry';
import SemiC from './components/activities/activity-sub/activity-two/SemiC';
import Tools from './components/activities/activity-sub/activity-three/Tools';
import Valves from './components/activities/activity-sub/activity-four/Valves';
import Instrumentation from './components/activities/activity-sub/activity-four/Instrumentation';
import Bolts from './components/activities/activity-sub/activity-four/Bolts';
import Hoses from './components/activities/activity-sub/activity-four/Hoses';
import Gaskets from './components/activities/activity-sub/activity-four/Gaskets';
import Pipes from './components/activities/activity-sub/activity-four/Pipes';
import Connector from './components/activities/activity-sub/activity-four/Connector';
import HandTools from './components/activities/activity-sub/activity-three/HandTools';
import PowerTools from './components/activities/activity-sub/activity-three/PowerTools';
import ElectricalTools from './components/activities/activity-sub/activity-three/ElectricalTools';
import PlumbingTools from './components/activities/activity-sub/activity-three/PlumbingTools';
import Uv from './components/activities/activity-sub/activity-one/Uv';
import EcoSolvent from './components/activities/activity-sub/activity-one/EcoSolvent';
import Media from './components/activities/activity-sub/activity-one/Media';
import PrintingEquip from './components/activities/activity-sub/activity-one/PrintingEquip';
import Solvent from './components/activities/activity-sub/activity-one/Solvent';
import Safety from './components/activities/activity-sub/activity-three/Safety';
import FaceMask from './components/activities/activity-sub/activity-five/FaceMask';
import ProtectiveApparel from './components/activities/activity-sub/activity-five/ProtectiveApparel';
import Gloves from './components/activities/activity-sub/activity-five/Gloves';
import EyeProtection from './components/activities/activity-sub/activity-five/EyeProtection';
import Sanitizers from './components/activities/activity-sub/activity-five/Sanitizers';
import CleaningSolution from './components/activities/activity-sub/activity-five/CleaningSolution';
import CSR from './components/CSR';
import TermConditions from './components/TermConditions';
import PrivacyPolicy from './components/PrivacyPolicy';
import Chat from './components/Chat';
import Redirections from './components/Redirections';
import Testimonials from './components/Testimonials';
import Chatbot from './components/Chatbot';
import NotFound from './components/NotFound';
import Loader from './components/Loader';

const App = () => {
  // const [showChat, setShowChat] = useState(false);
  // useEffect(() => {
  //   const currentTime = new Date().getTime();
  //   sessionStorage.setItem('entryTime', currentTime.toString());

  //   const checkChatVisibility = () => {
  //     const storedTime = parseInt(sessionStorage.getItem('entryTime'), 10);
  //     const currentTime = new Date().getTime();
  //     const timeDifference = (currentTime - storedTime) / 1000; // Convert to seconds

  //     if (timeDifference >= 5) {
  //       setShowChat(true);
  //     } else {
  //       setTimeout(() => {
  //         setShowChat(true);
  //       }, (5 - timeDifference) * 1000);
  //     }
  //   };

  //   checkChatVisibility();
  // }, []);
  // =======================================
 
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getTime();

    // Check if 'chatVisible' is already set in sessionStorage
    const chatVisible = sessionStorage.getItem('chatVisible');

    // If 'chatVisible' is not set, store the entry time
    if (!chatVisible) {
      sessionStorage.setItem('entryTime', currentTime.toString());
    }

    const checkChatVisibility = () => {
      // If chatVisible is set to 'true', show chat immediately
      if (chatVisible === 'true') {
        setShowChat(true);
        return;
      }

      const storedTime = parseInt(sessionStorage.getItem('entryTime'), 10);
      const currentTime = new Date().getTime();
      const timeDifference = (currentTime - storedTime) / 1000;

      if (timeDifference >= 10) {
        setShowChat(true);

        sessionStorage.setItem('chatVisible', 'true');
      } else {
        setTimeout(() => {
          setShowChat(true);

          sessionStorage.setItem('chatVisible', 'true');
        }, (10 - timeDifference) * 1000);
      }
    };

    checkChatVisibility();
  }, []);
  // =======================================
  useEffect(() => {
    setTimeout(() => {
      window.$('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
      });
    }, 300);
  }, []);

  // useEffect(() => {
  //   // disabling easy access to developer tools
  //   document.addEventListener('contextmenu', (e) => {
  //     e.preventDefault();
  //   });
  //   const disableDevToolsShortcuts = (e) => {
  //     // Disable F12
  //     if (e.key === 'F12') {
  //       e.preventDefault();
  //     }

  //     // Disable Ctrl+Shift+I or Cmd+Option+I
  //     if (
  //       (e.ctrlKey && e.shiftKey && e.key === 'I') ||
  //       (e.metaKey && e.altKey && e.key === 'I')
  //     ) {
  //       e.preventDefault();
  //     }

  //     // Disable Ctrl+Shift+C or Cmd+Option+C (for element inspection)
  //     if (
  //       (e.ctrlKey && e.shiftKey && e.key === 'C') ||
  //       (e.metaKey && e.altKey && e.key === 'C')
  //     ) {
  //       e.preventDefault();
  //     }

  //     // Disable Ctrl+Shift+J or Cmd+Option+J (for opening console)
  //     if (
  //       (e.ctrlKey && e.shiftKey && e.key === 'J') ||
  //       (e.metaKey && e.altKey && e.key === 'J')
  //     ) {
  //       e.preventDefault();
  //     }

  //     // Disable Ctrl+U (for viewing source code)
  //     if (e.ctrlKey && e.key === 'U') {
  //       e.preventDefault();
  //     }
  //   };

  //   window.addEventListener('keydown', disableDevToolsShortcuts);

  //   return () => {
  //     window.removeEventListener('keydown', disableDevToolsShortcuts);
  //   };
  // }, []);

  return (
    <>
      <Router>
        <>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/team" element={<TeamPage />} />
            <Route path="/core-values" element={<CoreValues />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/contact-form" element={<ContactForm />} />
            <Route path="/news" element={<News />} />
            <Route path="/service-single" element={<ServiceSingle />} />
            <Route path="/service-main" element={<MainServices />} />
            <Route path="/service-one" element={<ServiceOne />} />
            <Route path="/service-two" element={<ServiceTwo />} />
            <Route path="/service-three" element={<ServiceThree />} />
            <Route path="/service-four" element={<ServiceFour />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/testimonials" element={<Testimonials />} />
            {/* <Route path="/chat" element={<Chat />} /> */}
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/connect" element={<Redirections />} />
            <Route path="/printing-solutions" element={<ActivityOne />} />
            <Route path="/electronics" element={<ActivityTwo />} />
            <Route path="/tools-equip" element={<ActivityThree />} />
            <Route path="/oil-gas" element={<ActivityFour />} />
            <Route path="/health-care" element={<ActivityFive />} />
            <Route path="/activity-six" element={<ActivitySix />} />
            <Route path="/activity-test" element={<TestFour />} />
            <Route path="/csr" element={<CSR />} />
            <Route path="/terms" element={<TermConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            {/* -------------activity-one-sub starts------------ */}
            <Route path="/ecosolvent" element={<EcoSolvent />} />
            <Route path="/uv" element={<Uv />} />
            <Route path="/solvent" element={<Solvent />} />
            <Route path="/printequip" element={<PrintingEquip />} />
            <Route path="/media" element={<Media />} />
            {/* -------------activity-one-sub ends------------ */}
            {/* -------------activity-two-sub starts------------ */}
            <Route path="/ic" element={<IC />} />
            <Route path="/active" element={<ActiveC />} />
            <Route path="/passive" element={<Passive />} />
            <Route path="/sensor" element={<Sensor />} />
            <Route path="/connector" element={<Connectors />} />
            <Route path="/switch" element={<SwitchRelay />} />
            <Route path="/led" element={<Led />} />
            <Route path="/power" element={<PowerBaterry />} />
            <Route path="/semi" element={<SemiC />} />
            {/* -------------activity-sub ends------------ */}
            {/* -------------activity-three-sub starts------------ */}
            <Route path="/tools" element={<Tools />} />
            <Route path="/hand-tools" element={<HandTools />} />
            <Route path="/power-tools" element={<PowerTools />} />
            <Route path="/electrical-tools" element={<ElectricalTools />} />
            <Route path="/plumbing-tools" element={<PlumbingTools />} />
            <Route path="/safety" element={<Safety />} />
            {/* -------------activity-three-sub starts------------ */}
            {/* -------------activity-four-sub starts------------ */}
            <Route path="/valves" element={<Valves />} />
            <Route path="/pipes" element={<Pipes />} />
            <Route path="/connectors" element={<Connector />} />
            <Route path="/gaskets" element={<Gaskets />} />
            <Route path="/hoses" element={<Hoses />} />
            <Route path="/bolts" element={<Bolts />} />
            <Route path="/instrumentation" element={<Instrumentation />} />
            {/* -------------activity-four-sub ends------------ */}
            {/* -------------activity-five-sub starts------------ */}
            <Route path="/mask" element={<FaceMask />} />
            <Route path="/protective" element={<ProtectiveApparel />} />
            <Route path="/gloves" element={<Gloves />} />
            <Route path="/eye" element={<EyeProtection />} />
            <Route path="/sanitizer" element={<Sanitizers />} />
            <Route path="/cleaning" element={<CleaningSolution />} />
            {/* -------------activity-five-sub ends------------ */}
            {/* -------------NOt Found------------ */}
            <Route path="*" element={<NotFound />} /> {/* 404 Route */}
          </Routes>
          {/* <Chat /> */}
          {/* {showChat && <Chat />} */}
          <Footer />
        </>
      </Router>
    </>
  );
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleBackButton = () => {
      window.location.reload();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, []);

  return null;
}

export default App;
