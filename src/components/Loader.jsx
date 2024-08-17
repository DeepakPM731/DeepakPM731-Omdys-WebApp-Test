import './Loader.css'; // Import CSS for styling the loader
import PuffLoader from 'react-spinners/PuffLoader';

const Loader = () => {
  return (
    <>
      {/* <div className="loader-container">
        <div className="loader"></div>
      </div> */}
      <div
        className="container"
        style={{
          height: '100vh',

          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="item">
          <PuffLoader color="#fd0707" size={250} />
        </div>
      </div>
    </>
  );
};

export default Loader;
