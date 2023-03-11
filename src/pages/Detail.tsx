import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import { Item } from "../components/Icons";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import ScreenLoader from "../components/ScreenLoader";
import YoutubePlayer from "../components/YoutubePlayer";
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
          <div className="banner banner-style-4" style={{ backgroundImage: `url(${image})` }}>
            <div className="breadcrum-area breadcrumb-banner">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6 offset-lg-1">
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
                </div>
              </div>
            </div>
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
            <YoutubePlayer youtubeId={content.webcast} />
          </div>
        </>
      )}
      <Footer />
    </Page>
  );
}
