import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Page from "../components/Page";

export default function Detail() {
  return (
    <Page variant="detail">
      <Navbar />
      <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-heading heading-left">
                <h1 className="title h2">Plan Management</h1>
                <p>A quick view of industry specific problems solved with design by the awesome team at Keystroke.</p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-thumbnail">
                <div className="Illustration">
                  <img
                    src="/img/project/project-4.png"
                    alt="Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-8 list-unstyled">
          <li className="shape shape-1">
            <img src="/img/others/bubble-9.png" alt="Bubble" />
          </li>
          <li className="shape shape-2">
            <img src="/img/others/bubble-20.png" alt="Bubble" />
          </li>
          <li className="shape shape-3">
            <img src="/img/others/line-4.png" alt="Line" />
          </li>
        </ul>
      </div>
      <section className="section-padding single-portfolio-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="section-heading heading-left mb-0">
                <span className="subtitle">
                  <span>Branding</span>
                  <span>Website</span>
                  <span>Mobile</span>
                </span>
                <h3 className="title">Plan Management</h3>
              </div>
              <p>
                From the designers and engineers who are creating the next generation of web and mobile experiences, to
                anyone putting a website together for the first time. We provide elegant solutions that set new
                standards for online publishing.
              </p>
              <p>
                Digital technology has made our world more transparent and interconnected, posing new challenges and
                opportunities for every business. A holistic, user-centric perspective is what truly sets one apart.
              </p>
              <a className="axil-btn btn-fill-primary" href="/demo/react/abstrak/project-details/plan-management">
                Get it Now
              </a>
            </div>
            <div className="col-lg-6 offset-xl-1">
              <div className="why-choose-us">
                <div className="section-heading heading-left">
                  <h3 className="title">We delivered</h3>
                  <p>
                    Digital technology has made our world more transparent and interconnected, posing new challenges and
                    opportunities for every business.
                  </p>
                </div>
                <div className="accordion">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button type="button" aria-expanded="true" className="accordion-button">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 448 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M436 192H312c-13.3 0-24-10.7-24-24V44c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v84h84c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm-276-24V44c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v84H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h124c13.3 0 24-10.7 24-24zm0 300V344c0-13.3-10.7-24-24-24H12c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h84v84c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-84h84c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12H312c-13.3 0-24 10.7-24 24v124c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12z"></path>
                        </svg>
                        Strategy
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse show">
                      <div className="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button type="button" aria-expanded="false" className="accordion-button collapsed">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 640 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z"></path>
                        </svg>
                        Design
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button type="button" aria-expanded="false" className="accordion-button collapsed">
                        <svg
                          stroke="currentColor"
                          fill="currentColor"
                          stroke-width="0"
                          viewBox="0 0 496 512"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path>
                        </svg>
                        Development
                      </button>
                    </h2>
                    <div className="accordion-collapse collapse">
                      <div className="accordion-body">
                        Aenean hendrerit laoreet vehicula. Nullam convallis augue at enim gravida pellentesque.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="section call-to-action-area">
        <div className="container">
          <div className="about-expert">
            <div className="thumbnail">
              <img src="/img/about/about-1.png" alt="Thumbnail" />
              <div className="popup-video">
                <button title="Play button" type="button" className="play-btn">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 448 512"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <ul className="shape-group-16 list-unstyled">
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
        <ul className="list-unstyled shape-group-9">
          <li className="shape shape-1">
            <img src="/img/others/bubble-12.png" alt="Comments" />
          </li>
          <li className="shape shape-2">
            <img src="/img/others/bubble-16.png" alt="Comments" />
          </li>
          <li className="shape shape-3">
            <img src="/img/others/bubble-13.png" alt="Comments" />
          </li>
          <li className="shape shape-4">
            <img src="/img/others/bubble-14.png" alt="Comments" />
          </li>
          <li className="shape shape-5">
            <img src="/img/others/bubble-16.png" alt="Comments" />
          </li>
          <li className="shape shape-6">
            <img src="/img/others/bubble-15.png" alt="Comments" />
          </li>
          <li className="shape shape-7">
            <img src="/img/others/bubble-16.png" alt="Comments" />
          </li>
        </ul>
      </div>
      <Footer />
    </Page>
  );
}
