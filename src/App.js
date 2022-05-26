import "./App.css";
import Footer from "./Components/Footer";
import Layout from "./Components/Layout";
import Main from "./Components/Main";

function App() {
  // nav hide
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse.classList.remove("show");
    });
  });

  let buttonBar = document.querySelectorAll(".main-btn");
  let navCollapse1 = document.querySelector(".navbar-collapse.collapse");
  buttonBar.forEach(function (a) {
    a.addEventListener("click", function () {
      navCollapse1.classList.remove("show");
    });
  });

  return (
    <>
      <Layout />
      <div style={{ marginTop: "35px" }}>
        <Main />
      </div>
      <Footer/>
    </>
  );
}

export default App;
