import "./App.css";
import CookieClickerComponent from "./components/cookieClickerComponent.jsx";
import CatFactsComponent from "./components/CatFactsComponent.jsx";
import UsersComponent from "./components/UsersComponent.jsx";

function App() {
  return (
    <div className="container">
      <section className="cookie-section">
        <h2>
          C
          <img
            className="cookie-letter"
            src="./cookie.png"
            alt="image of a cookie"
          />
          <img
            className="cookie-letter"
            src="./cookie.png"
            alt="image of a cookie"
          />
          kie C
          <img
            className="cookie-letter"
            src="./cookie.png"
            alt="image of a cookie"
          />
          unter
        </h2>
        <CookieClickerComponent />
      </section>
      <section className="cat-section">
        <h2>
          R<img className="cat-icon" src="./cat-figma.png" alt="cat icon" />
          ndom C
          <img className="cat-icon" src="./cat-figma.png" alt="cat icon" />t F
          <img className="cat-icon" src="./cat-figma.png" alt="cat icon" />
          cts
        </h2>
        <CatFactsComponent />
      </section>
      <section className="user-section">
        <h2>Users</h2>
        <UsersComponent />
      </section>
    </div>
  );
}

export default App;
