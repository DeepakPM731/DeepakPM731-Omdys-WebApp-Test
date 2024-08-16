import './Loader.css'; // Import CSS for styling the loader
// import PuffLoader from 'react-spinners/PuffLoader';

const Loader = () => {
  return (
    <>
      <div className="loader-container">
        <div className="loader"></div>
      </div>
      {/* <div
        className="container "
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <PuffLoader color="#fd0707" size={150} />
      </div> */}
    </>
  );
};

export default Loader;
