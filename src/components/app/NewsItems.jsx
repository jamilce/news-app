import React, { Component } from "react";

export default class NewsItems extends Component {
  render() {
    const { title, description, imgUrl, newsUrl, author, pDate, source } =
      this.props;
    return (
      <div className="col-md-4">
        <div className="card">
          <span
            style={{ left: "90%!important", zIndex: 1 }}
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          >
            {source}
          </span>
          <img src={imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {author ?? "unknown"} on
                {new Date(pDate).toUTCString()}
              </small>
            </p>
            <a
              href={newsUrl}
              target="_blank"
              className="btn btn-dark btn-small"
              rel="noreferrer"
            >
              more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
