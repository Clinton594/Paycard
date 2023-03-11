import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import LaunchCards from "../components/LaunchCards";
import Navbar from "../components/Navbar";
import Page from "../components/Page";
import { ILaunch } from "../constants/interface";
import launch from "../constants/launch";
import routes from "../constants/routes";
import { extractLaunchData, fetchData, scrollTo } from "../helpers/functions";

export default function Home() {
  const [latestLaunch, setLatest] = useState<ILaunch>(launch);
  const [nextLaunch, setNextLaunch] = useState<ILaunch>(launch);
  const [launches, setLaunches] = useState<ILaunch[]>([]);
  const [loading, setLoading] = useState(true);
  const elementRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState("");

  // Handle filtering of launch events
  let filtered = launches;
  if (filter) {
    const date = new Date(filter);
    filtered = launches.filter((launch) => {
      const thisdate = new Date(launch.date_utc);
      return (
        thisdate.getDate() === date.getDate() &&
        thisdate.getFullYear() === date.getFullYear() &&
        thisdate.getMonth() === date.getMonth()
      );
    });
  } else filtered = launches.filter((x) => x.slides.length);

  useEffect(() => {
    if (!filtered.length && filter) {
      toast.error("No result found");
      scrollTo(elementRef);
    }
  }, [filtered]);

  useEffect(() => {
    const endpoints = ["/latest", "/next"];
    Promise.all(endpoints.map((x) => fetchData(x))).then((result) => {
      const formatted = result.map((x) => extractLaunchData(x));
      console.log(formatted);

      setLatest(formatted[0]);
      setNextLaunch(formatted[1]);
    });

    fetchData("")
      .then((response: any) => {
        const formatted = response.map((x: any) => extractLaunchData(x));
        formatted.sort((a: ILaunch, b: ILaunch) => b.date_unix - a.date_unix);
        setLaunches(formatted);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
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
                <div className="action-buttons">
                  <Link
                    className="axil-btn btn-fill-white btn-secondary btn-largee"
                    to={latestLaunch.id ? `${routes.detail}/${latestLaunch.id}` : routes.home}
                  >
                    View Latest Launch <PulseLoader size={10} loading={loading} />
                  </Link>
                  <Link
                    className="axil-btn btn-fill-secondary btn-secondary btn-large"
                    to={nextLaunch.id ? `${routes.detail}/${nextLaunch.id}` : routes.home}
                  >
                    Explore Next Launch <PulseLoader size={10} loading={loading} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 justify-content-center d-flex">
              <div className="banner-form mt-5">
                <div className="contact-form-box shadow-box">
                  <h3 className="title">Search Launches by selecting a date</h3>
                  <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                      <form className="axil-contact-form">
                        <div className="form-group">
                          <label>Select Launch Date</label>
                          <input
                            title="date"
                            type="date"
                            className="form-control"
                            name="contact-name"
                            placeholder="John Smith"
                            required
                            onChange={(e) => setFilter(e.target.value)}
                          />
                        </div>

                        <div className="form-group">
                          <button
                            onClick={() => setFilter("")}
                            type="reset"
                            className="axil-btn btn-fill-primary btn-fluid btn-primary"
                            name="submit-btn"
                          >
                            Clear Filter
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section section-padding-2 bg-color-light" ref={elementRef}>
        <div className="container">
          <div className="section-heading heading-left mb--40 mt-5">
            <div className="subtitle">Launch Events</div>
            <h2 className="title">
              Showing
              <br />
              {filter ? new Date(filter).toDateString() : "Some Recent Launches"}
            </h2>
          </div>

          <LaunchCards launches={filtered} loading={loading} />
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
