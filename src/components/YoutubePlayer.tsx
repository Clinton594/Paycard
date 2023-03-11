import React from "react";

export default function YoutubePlayer({ youtubeId }: { youtubeId: string }) {
  return (
    <>
      <div className="container">
        <div className="about-expert">
          <div className="rounded-lg">
            <iframe
              width="80%"
              height="450px"
              className="zoomable"
              src={`https://www.youtube.com/embed/${youtubeId}`}
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
    </>
  );
}
