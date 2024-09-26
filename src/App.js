import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/about/AboutUs';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import WelcomeMessage from './pages/about/WelcomeMessage';
import Abstract from './pages/about/Abstract';
import MissionGoals from './pages/about/MissionGoals';
import ManagementCommittee from './pages/about/ManagementCommittee';
import ProjectOverview from './pages/subtopics/ProjectOverview';
import Subtopic from './pages/subtopics/Subtopic';
import News from './pages/News';
import Event from './pages/events/Event';
import TRSSymposium from './pages/events/TRSSymposium';
import JournalPapers from './pages/JournalPapers';
import ConferencePapers from './pages/ConferencePapers';

const subtopicsContent = [
  {
      "title": "Real-time Sensing and Perception",
      "pi": "Prof. Liu Yunhui",
      "co-pi": "Prof. Chiu Philip Wai Yan",
      "description": "To perform surgical procedures, a robot needs information including 3D structure and biomechanical properties of surgical objects, shape of the instruments, its interaction forces with surgical objects, etc. The scientific objective of this topic is to develop innovative solutions to these sensing problems. The challenges lie in three aspects: Firstly, deformation of soft tissues and light-deficient surgical field leads to various noises in imaging. Secondly, the sensors must be embedded into small tips of the instruments. Thirdly, the real-time efficiency is crucial for automated operation of robots."
  },
  {
      "title": "Image-guided Surgery Planning and Navigation",
      "pi": "Prof. Meng Max Qing Hu",
      "co-pi": "Prof. Kwok Ka Wai, Prof. Chan Jason Ying Kuen",
      "description": "Surgical planning is an essential component in automated robotic surgery, which deals with robots’ actions deforming, moving on, cutting and suturing soft tissues, etc. The problem is much more challenging than classical robot motion planning because surgical tasks are too complicated to mathematically model and surgical objects vary significantly with individuals. The objective of this topic is to develop a data-driven method to cope with the challenges by making use of the huge image data of robotic surgery at Prince of Wales Hospital (PWH) and Intuitive Surgical Inc."
  },
  {
      "title": "Image-guided Motion/Action Control",
      "pi": "Prof. Sun Dong",
      "co-pi": "Prof. Tong Michael Chi Fai",
      "description": "MIS procedures involve pushing, pulling, dissecting and suturing soft tissues. Images from laparoscopes are the primary sensor information in MIS. There are three major challenges in the motion control of surgical robots using laparoscopic images. First, the surgical objects are highly deformable and their physical models are not available. Designing controllers using inaccurate models or even no model is challenging. Second, the robot has limited degrees of freedom, so to what extent can the highly deformable soft tissues be controlled? Third, how to guarantee the safety is critical for surgical robots. We will develop innovative solutions to the problems in three conventional MIS settings: manipulation of tissues by a single robot, coordinated manipulation by multiple robots, and collaboration between robots and surgeons. The objective of this topic is to build up new theories for the image-based control of surgical robots interacting on soft tissues."
  },
  {
      "title": "Robotic Surgery Intelligence",
      "pi": "Prof. Heng Pheng Ann",
      "co-pi": "NG Siu Man Simon",
      "description": "During surgical operations, the workflow cannot be carried out as previously planned. Many unexpected happenings occur for various reasons including sensing errors and mis-manipulation. To ensure safety, surgical robots must be equipped with high-level intelligence of making smart decisions under different situations, which is a learning process from experiences. The difficulties in learning or making decisions lie in two factors. Firstly, the surgical situations vary significantly with individuals and the workflow, and currently their perception relies on human intelligence, which is hardly simulated by computers. Secondly, the situation perception involves processing and matching big image data, which can hardly be completed in real-time. Deep learning provides one of the innovative solutions to robotic surgery intelligence. By learning the mapping from the situations to surgical actions, it would be possible for the robot to acquire the required high-level intelligence. The scientific objective of this topic is to develop an approach learning the surgical intelligence from the huge data of robotic surgery at PWH and Intuitive Surgical Inc."
  },
  {
      "title": "System Integration, Prototyping, and Experimental Evaluation",
      "pi": "Prof. Au Samuel Kwok Wai",
      "co-pi": "Dr. Cheung Tak Hong",
      "description": "The objective of this topic is to develop prototypes, integrate the enabling technologies, and verify their performance for real surgical procedures by ex-vivo experiments, and clinical trials, if allowed."
  },
]
const newsContent = [
  {
    "year": 2019,
    "news": []
  },
  {
    "year": 2018,
    "news": [
      {"date": "16 July 2018", "url": "https://www.info.gov.hk/gia/general/201807/16/P2018071600385.htm?fontSize=1", "img": "./images/event1.jpg", "title": "Funding results of Theme-based Research Scheme 2018/19 announced"}
    ]
  }
]
const eventContent = [
  {
    "year": 2019,
    "events": [
      {"date": "9 Nov 2019", "venue": "YIA LT1, CUHK", "url": "/trs-symposium-2019", "img": "./images/TRS-symposium.jpg", "title": "TRS Symposium 2019"}
    ]
  }
]

function App() {
  return (
    <Router basename='/cuhk-trs'>
      <div>
        <NavigationBar />
        <main className='py-4'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/welcome-message" element={<WelcomeMessage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/abstract" element={<Abstract />} />
            <Route path="/mission-goals" element={<MissionGoals />} />
            <Route path="/management-committee" element={<ManagementCommittee />} />
            <Route path="/project-overview" element={<ProjectOverview subTopicCount={subtopicsContent.length}/>} />
            {subtopicsContent.map((subtopic, index) => (
              <Route 
                key={"subtopic_" + index.toString()}
                path={"/subtopic-" + (index+1).toString()} 
                element={<Subtopic content={subtopic} subTopicCount={subtopicsContent.length}/>} />
            ))}
            <Route 
                path={"/news"} 
                element={<News content={newsContent[0]} newsYearList={newsContent.map(item => item.year)}/>} 
            />
            {newsContent.map((news, index) => (
              <Route 
                key={"news_" + news.year.toString()}
                path={"/news-" + news.year.toString()} 
                element={<News content={news} newsYearList={newsContent.map(item => item.year)}/>} />
            ))}
            <Route 
                path={"/events"} 
                element={<Event content={eventContent[0]} eventsYearList={eventContent.map(item => item.year)}/>} 
            />
            {eventContent.map((events, index) => (
              <Route 
                key={"events_" + events.year.toString()}
                path={"/events-" + events.year.toString()} 
                element={<Event content={events} eventsYearList={eventContent.map(item => item.year)}/>} />
              ))}
              <Route path="/trs-symposium-2019" element={<TRSSymposium />} />
              <Route path="/journal-papers" element={<JournalPapers />} />
              <Route path="/conference-papers" element={<ConferencePapers />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
