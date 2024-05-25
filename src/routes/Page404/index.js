import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Random from '../../functions/Random';
import './styles.css';
import PropTypes from 'prop-types';

Page404.propTypes = {
  images: PropTypes.array.isRequired,
};

function Page404({ images }) {
  const [myImage, setMyImage] = useState({ imgPath: '', errTitle: '', errText: '' });
  const { imgPath, errTitle, errText } = myImage;

  useEffect(() => {
    setMyImage(Random(images));
  }, [images]);

  const handleChange = () => {
    setMyImage(Random(images));
  };

  return (
    <section className="not-found-section">
      <div className="image-404">
        <button onClick={handleChange} className="change-image-button">
          <img src={`${process.env.PUBLIC_URL + imgPath}`} alt="" />
        </button>
      </div>
      <div className="text-404">
        <h4>{errTitle}</h4>
        <p>{errText}</p>
      </div>
      <div className="logo-container">
        <div className="site-logo">
          <Link to='/' className="logo-link">
            <img src={process.env.PUBLIC_URL + `/images/logoNav.png`} className="small-logo" alt={`Logo`} />
            <p>{` `}Go Back</p>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Page404;