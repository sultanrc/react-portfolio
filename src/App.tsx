import Email from "./components/sidebar/Email";
import Jumbotron from "./components/jumbotron/Jumbotron";
import About from "./components/about/About";
import Links from "./components/sidebar/Links";
import Main from "./components/Main";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import Experiences from "./components/experiences/Experiences";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex h-screen">
        <Sidebar position="left">
          <Links />
        </Sidebar>
        <Main>
          <Jumbotron />
          <About />
          <Experiences />
          <Projects />
          <Contact />
          <Footer />
        </Main>
        <Sidebar position="right">
          <Email />
        </Sidebar>
      </main>
    </>
  );
}

export default App;
