import Email from "./components/Email";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Links from "./components/Links";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Experiences from "./components/Experiences";

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
        </Main>
        <Sidebar position="right">
          <Email />
        </Sidebar>
      </main>
    </>
  );
}

export default App;
