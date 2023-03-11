import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { Item, Play } from "../components/Icons";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import ScreenLoader from "../components/ScreenLoader";
import { ILaunch } from "../constants/interface";
import launch from "../constants/launch";
import { extractLaunchData, fetchData, get_random, scrollTo } from "../helpers/functions";

export default function Detail() {
  const [content, setLaunch] = useState<ILaunch>(launch);
  const [loading, setLoading] = useState(true);
  const [image, setImage] = useState("");
  const { id } = useParams();
  const navref = useRef<HTMLDivElement>(null);
  const youtubePlayer = useRef<HTMLDivElement>(null);

  const date = new Date(content.date_utc).toDateString();

  useEffect(() => {
    let interval: any;
    scrollTo(navref);
    if (id) {
      fetchData(`/${id}`)
        .then((res) => {
          const data = extractLaunchData(res);
          setLaunch(data);
          setImage(get_random(data.slides, true));
          interval = setInterval(() => setImage(get_random(data.slides, true)), 3000);
        })
        .catch((error) => toast.error(error.message))
        .finally(() => setLoading(false));
    }
    return () => interval && clearInterval(interval);
  }, [id]);
  return (
    <Page variant="detail">
      <div ref={navref}></div>
      <Navbar />
      {loading && (
        <ScreenLoader float loading={loading}>
          <PulseLoader color="white" />
        </ScreenLoader>
      )}
      {!loading && (
        <>
          <div className="breadcrum-area breadcrumb-banner single-breadcrumb">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="section-heading heading-left">
                    <h1 className="title h2">{content.name}</h1>
                    <span>
                      A quick view of {content.name} launch event and the problem solving processes underwent with the
                      awesome team and crew members on the {date}.
                    </span>
                    <button
                      onClick={() => scrollTo(youtubePlayer)}
                      type="button"
                      className="axil-btn btn-fill-primary mt-3"
                    >
                      Watch Now
                    </button>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="banner-thumbnail">
                    <div className="Illustration">
                      <img className="zoomable" src={image} alt="Illustration" />
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
                      <span>Time: {new Date(content.date_utc).toString()}</span>
                    </span>
                    <h3 className="title">Launch Briefing</h3>
                  </div>
                  <p>{content.details || "No briefing available at the moment !!!."}</p>
                </div>
                <div className="col-lg-6 offset-xl-1">
                  {
                    <div className="why-choose-us">
                      <div className="section-heading heading-left">
                        <h3 className="title">Mission Log</h3>
                      </div>
                      <div className="accordion">
                        {content.failures.length > 0 &&
                          content.failures.map((l, i) => (
                            <div className="accordion-item">
                              <h2 className="accordion-header">
                                <button type="button" aria-expanded="true" className="accordion-button">
                                  <Item />
                                  Altitude : {l.altitude}
                                </button>
                              </h2>
                              <div className="accordion-collapse collapse show">
                                <div className="accordion-body">{l.reason}</div>
                              </div>
                            </div>
                          ))}
                        {
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <span className="accordion-button">
                                <Item /> {content.success ? "Mission was succcessful" : "Mission Failed"}
                              </span>
                            </h2>
                          </div>
                        }
                      </div>
                    </div>
                  }
                </div>
              </div>
            </div>
          </section>

          <div className="section call-to-action-area" ref={youtubePlayer}>
            <div className="container">
              <div className="about-expert">
                <div className="rounded-lg">
                  <iframe
                    width="100%"
                    height="550px"
                    className="rounded-lg"
                    src={`https://www.youtube.com/embed/${content.webcast}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
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
        </>
      )}
      <Footer />
    </Page>
  );
}
