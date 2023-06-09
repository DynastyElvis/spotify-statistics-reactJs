import React from 'react';

import creatorItems from './creator-items';

import './_style.css';

const Footer = () => {
  const mapCreators = creators => {
    return creators.map((creator, index) => {
      return (
        <div key={index} className="creator-area">
          <div className="creator-info">
            <img src={creator.image} alt={creator.name} className="creator-image" />
            <p>{creator.name}</p>
          </div>
          {creator.links.map((link, i) => {
            return (
              <a key={`${index}_${i}`} href={link.href} className="footer-link">
                <div className="creator-link">
                  <img
                    src={link.image}
                    alt={`${creator.name} ${link.name}`}
                    className="creator-link-image"
                  />
                  <p className="creator-link-label">{link.name}</p>
                </div>
              </a>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className="footer">
      <h3>STATFY</h3>
      <div className="separator-short" />
      <p className="opaque">PERSONALIZED STATISTICS</p>
      {/* <div className="disclaimer">
        <p>
          This app was developed as part of a school project. The developers do not have any rights
          on the trademarks shown on the page.
        </p>
      </div> */}
      <div className="separator" />
      <div className="creators">{mapCreators(creatorItems)}</div>

      <div className="separator" />
      <p>CONTACT</p>
      <p className="opaque-text" style={{ textAlign: 'center' }}>
        If you have questions or suggestions on how we could make our app more user friendly or if
        you want to request a feature, feel free to contact us!
      </p>
      <a href="mailto:dev.statify@gmail.com">dev.statify@gmail.com</a>
    </div>
  );
};

export default Footer;
