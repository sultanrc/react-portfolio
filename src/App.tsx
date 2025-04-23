import Email from "./components/Email";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Links from "./components/Links";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <main className="flex w-full min-h-full h-screen overflow-y-auto">
        <Sidebar position="left">
          <Links />
        </Sidebar>
        <Main>
          <Jumbotron />
          <About />
        </Main>
        <Sidebar position="right">
          <Email />
        </Sidebar>
      </main>
    </>
  );
}

export default App;
