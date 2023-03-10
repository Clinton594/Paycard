import React from "react";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";
import { ILaunch } from "../constants/interface";
import routes from "../constants/routes";
import { get_random } from "../helpers/functions";

export default function LaunchCards({ launches = [], loading = false }: { launches: ILaunch[]; loading: boolean }) {
  if (loading) return <PulseLoader />;
  return (
    <>
      {launches.length > 0 && (
        <div className="row row-35">
          {launches.slice(0, 20).map((launch) => (
            <div className="col-md-3" key={launch.id}>
              <div className="project-grid">
                <div className="thumbnail">
                  <Link to={`${routes.detail}/${launch.id}`}>
                    <img src={get_random(launch.slides)} alt="icon" />
                  </Link>
                </div>
                <div className="content">
                  <h4 className="title">
                    <Link to={`${routes.detail}/${launch.id}`}>{launch.name}</Link>
                  </h4>
                  <span className="subtitle">
                    <span>{new Date(launch.date_utc).toDateString()}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {!launches.length && <p>No result found</p>}
    </>
  );
}
