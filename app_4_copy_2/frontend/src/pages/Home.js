import PageContent from '../components/PageContent';
import img1 from '../assets/Group 14.png';
import img2 from '../assets/art image.png';
import img3 from '../assets/Rectangle 40.png';
import img4 from '../assets/art image2.png';
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import Cloths from '../Cloths';
import useHttp from '../hooks/useHttp';
import Error from './Error.js';
import { useState } from 'react';

const requestConfig = {};

function HomePage() {
  const navigate = useNavigate();

  const [startIndex, setStartIndex] = useState(0); // Index for first visible item

  const handleViewGallery = () => {
    navigate('/gallery');
  };

  const handleViewMerchandise = () => {
    navigate('/merchandise');
  };


  // Handle forward scroll (next item)
  const handleNext = () => {
    if (startIndex + 4 < loadedMeals.length) {
      setStartIndex(startIndex + 1); // Move to the next item
    }
  };

  // Handle backward scroll (previous item)
  const handlePrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1); // Move back one item
    }
  };

  const {
    data: loadedMeals,
    isLoading,
    error
  } = useHttp('http://localhost:3000/meals', requestConfig, []);


  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <Error title="Failed to fetch meals" message={error} />;
  }

  // Slice the meals to only show the next 4 items starting from startIndex
  const visibleMeals = loadedMeals.slice(startIndex, startIndex + 4);

  return (
    <PageContent title={""}>
      <h2 style={{
        fontSize: '75px',
        lineHeight: '1.4',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        Love of Beauty is Taste. The <br />Creation of <span style={{ color: 'skyblue' }}> Beauty is Art</span>
      </h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit bibendum cras augue<br />
        donec porttitor risus, quisque. Tristique quis ullamcorper tempus nisi.</p>
      <img src={img1} alt='A restaurant' />

      <h2 style={{
        fontSize: '75px',
        lineHeight: '1.4',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        Our <span style={{ color: 'skyblue' }}>Gallery</span>
      </h2>

      <img src={img2} alt="A restaurant" style={{ width: '400px', height: '461px' }} />
      <img src={img3} alt="A restaurant" style={{ width: '400px', height: '461px' }} />
      <img src={img4} alt="A restaurant" style={{ width: '400px', height: '461px' }} /><br /><br />

      <Button style={{
        fontSize: '16px',
        padding: '10px 20px',
        marginBottom: '100px',
      }} onClick={handleViewGallery}>View Gallery</Button>

      

      <h2 style={{
        fontSize: '75px',
        lineHeight: '1.4',
        textAlign: 'center',
        margin: '20px 0'
      }}>
        Your <span style={{ color: 'skyblue' }}>Merchandise</span>
      </h2>

      {/* Merchandise List */}
      <ul id="meals" style={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: '80px',
        margin: '40px',
        gap: '0px',
        justifyContent: 'space-between',
      }}>
        {visibleMeals.map((meal) => (
          <Cloths key={meal.id} meal={meal} showBuyNowButton={false} />
        ))}
      </ul>

      {/* Navigation Buttons */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <Button
          style={{
            fontSize: '16px',
            padding: '10px 20px',
            marginRight: '10px',
          }}
          onClick={handlePrevious}
          disabled={startIndex === 0} // Disable if at the beginning
        >
          Previous
        </Button>

        <Button
          style={{
            fontSize: '16px',
            padding: '10px 20px',
          }}
          onClick={handleNext}
          disabled={startIndex + 4 >= loadedMeals.length} // Disable if no more items
        >
          Next
        </Button>
      </div>

      <Button style={{
        fontSize: '16px',
        padding: '10px 20px',
        marginBottom: '100px',
      }} onClick={handleViewMerchandise}>View More</Button>

    </PageContent>
  );
}

export default HomePage;
