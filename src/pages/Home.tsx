import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import { fetch } from "../helpers/ajax";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAll = async () => {
    try {
      setLoading(true);
      const response = await fetch({ endpoint: "" });
      console.log(response);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);
  return (
    <Page>
      <Navbar />

      <div className="banner banner-style-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-xl-7">
              <div className="banner-content">
                <h1 className="title mb-1">Paycard Space Launch</h1>
                <h3 className="text-white">Rendering services to Earth orbit, Moon, Mars and beyond.</h3>
                <div>
                  <a className="axil-btn btn-fill-white btn-large" href="#launches">
                    Latest Launches
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 justify-content-center d-flex">
              <div className="banner-form">
                <div className="contact-form-box shadow-box">
                  <h3 className="title">Search Launches by selecting a date</h3>
                  <div className="row">
                    <div className="col-lg-7">
                      <form className="axil-contact-form">
                        <div className="form-group">
                          <label>Launch Date</label>
                          <input
                            type="date"
                            className="form-control"
                            name="contact-name"
                            placeholder="John Smith"
                            required
                          />
                        </div>

                        <div className="form-group">
                          <button
                            type="submit"
                            className="axil-btn btn-fill-primary btn-fluid btn-primary"
                            name="submit-btn"
                          >
                            Search Now
                          </button>
                        </div>
                        <div className="form-group"></div>
                      </form>
                    </div>
                    <div className="col-lg-5">
                      <div className="form-group height-down">
                        <span>OR</span>
                        <button
                          type="submit"
                          className="axil-btn btn-fill-secondary btn-fluid btn-secondary"
                          name="submit-btn"
                        >
                          Preview next launch
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-padding-2 bg-color-light">
        <div className="container">
          <div className="section-heading heading-left mb--40 mt-5">
            <div className="subtitle">Launch Events</div>
            <h2 className="title">
              Showing
              <br />
              Latest Launch
            </h2>
            <p></p>
          </div>

          <div className="row row-35">
            <div className="col-md-6">
              <div className="project-grid">
                <div className="thumbnail">
                  <a href="/demo/react/abstrak/project-details/creative-agency">
                    <img src="/img/project/project-1.png" alt="icon" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/demo/react/abstrak/project-details/creative-agency">Creative Agency</a>
                  </h4>
                  <span className="subtitle">
                    <span>Branding</span>
                    <span>Website</span>
                    <span>App</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-grid">
                <div className="thumbnail">
                  <a href="/demo/react/abstrak/project-details/digital-marketing">
                    <img src="/img/project/project-2.png" alt="icon" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/demo/react/abstrak/project-details/digital-marketing">Digital Marketing</a>
                  </h4>
                  <span className="subtitle">
                    <span>Logo</span>
                    <span>Website</span>
                    <span>Mobile</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-grid">
                <div className="thumbnail">
                  <a href="/demo/react/abstrak/project-details/digital-agency">
                    <img src="/img/project/project-3.png" alt="icon" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/demo/react/abstrak/project-details/digital-agency">Digital Agency</a>
                  </h4>
                  <span className="subtitle">
                    <span>Website</span>
                    <span>UI/UX</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-grid">
                <div className="thumbnail">
                  <a href="/demo/react/abstrak/project-details/plan-management">
                    <img src="/img/project/project-4.png" alt="icon" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/demo/react/abstrak/project-details/plan-management">Plan Management</a>
                  </h4>
                  <span className="subtitle">
                    <span>Branding</span>
                    <span>Website</span>
                    <span>Mobile</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-grid">
                <div className="thumbnail">
                  <a href="/demo/react/abstrak/project-details/social-engagement">
                    <img src="/img/project/project-5.png" alt="icon" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/demo/react/abstrak/project-details/social-engagement">Social Engagement</a>
                  </h4>
                  <span className="subtitle">
                    <span>Design</span>
                    <span>Development</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="project-grid">
                <div className="thumbnail">
                  <a href="/demo/react/abstrak/project-details/web-application">
                    <img src="/img/project/project-6.png" alt="icon" />
                  </a>
                </div>
                <div className="content">
                  <h4 className="title">
                    <a href="/demo/react/abstrak/project-details/web-application">Web Application</a>
                  </h4>
                  <span className="subtitle">
                    <span>Logo</span>
                    <span>Webapp</span>
                    <span>Mobile</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-7 list-unstyled">
          <li className="shape shape-1">
            <img src="/img/others/circle-2.png" alt="circle" />
          </li>
          <li className="shape shape-2">
            <img src="/img/others/bubble-2.png" alt="Line" />
          </li>
          <li className="shape shape-3">
            <img src="/img/others/bubble-1.png" alt="Line" />
          </li>
        </ul>
      </div>
      <Footer />
    </Page>
  );
}
