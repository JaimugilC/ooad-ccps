import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./components/loginsystem/login";
import SignUp from "./components/loginsystem/signup";
import Application from "./components/cardholder/application";
import Status from "./components/cardholder/status";
import Applications from "./components/bank/viewapplications";
import IssueCreditCard from "./components/bank/issuecreditcard";
import ShoppingCart from "./components/loginsystem/shoppingcart";
import ViewBatch from "./components/merchant/viewbatch";
import TransferFund from "./components/bank/transferfund";
import ViewCreditCard from "./components/bank/creditcards";
import { Nav, NavDropdown } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  let account = JSON.parse(localStorage.getItem("acc-info"));
  let history = useHistory();

  function logout() {
    localStorage.clear();
    history.push("/sign-in");
    window.location.reload(false);
  }

  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <div className="navbar-brand">Credit Card Processing system</div>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              {localStorage.getItem("acc-info") ? (
                <>
                  {account.type === "user" ? (
                    <>
                      <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <Link className="nav-link" to={"/application"}>
                            Apply
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to={"/status"}>
                            Application Status
                          </Link>
                        </li>
                      </ul>
                    </>
                  ) : (
                    <>
                      {account.type === "bank" ? (
                        <>
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link className="nav-link" to={"/applications"}>
                                Applications
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to={"/issuecard"}>
                                Issue CreditCard
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to={"/transferfund"}>
                                Transfer fund
                              </Link>
                            </li>
                            <li className="nav-item">
                              <Link className="nav-link" to={"/creditcard"}>
                                View CreditCards
                              </Link>
                            </li>
                          </ul>
                        </>
                      ) : (
                        <>
                          <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                              <Link className="nav-link" to={"/batch"}>
                                View Batches
                              </Link>
                            </li>
                          </ul>
                        </>
                      )}
                    </>
                  )}
                </>
              ) : (
                <>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-in"}>
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/sign-up"}>
                        Sign up
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to={"/cart"}>
                        Shopping Cart
                      </Link>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
          {localStorage.getItem("acc-info") ? (
            <Nav>
              <NavDropdown title={account && account.username}>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          ) : null}
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route exact path="/" component={Login} />
              <Route path="/sign-in" component={Login} />
              <Route path="/sign-up" component={SignUp} />
              <Route path="/applications" component={Applications} />
              <Route path="/status" component={Status} />
              <Route path="/application" component={Application} />
              <Route path="/issuecard" component={IssueCreditCard} />
              <Route path="/cart" component={ShoppingCart} />
              <Route path="/batch" component={ViewBatch} />
              <Route path="/transferfund" component={TransferFund} />
              <Route path="/creditcard" component={ViewCreditCard} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
