import React from 'react';

const PublicationItem = ({ title, authors, venue, year, links, imageSrc }) => {
  return (
    <div className="publication-item">
      <div className="publication-thumbnail">
        {imageSrc && <img src={imageSrc} alt={title} />}
        {venue && <span className="venue-label">{venue}</span>}
      </div>
      <div className="publication-content">
        <h3>{title}</h3>
        <p>
          <strong>{authors}</strong> <br />
          {year}
        </p>
        <div className="publication-links">
          {links?.map((linkObj, index) => (
            <a
              key={index}
              href={linkObj.url}
              target="_blank"
              rel="noreferrer"
              className="publication-link"
            >
              {linkObj.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationItem;