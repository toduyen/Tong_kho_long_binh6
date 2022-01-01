import './App.css';
import Map from './Components/Map';
import CallApiIss from './Hook/CallApiIss';
function App() {
  const [{Data , Loading , Error},setUrl] = CallApiIss('https://api.wheretheiss.at/v1/satellites/25544');
  const key = 'AIzaSyAginVE2S49v6C42Lbijbtq_jP0hXOprfc'
  return (
    <div className="App">
          <header>
            {<div>
              <span> Tọa độ Bay: {Loading ? "_" : Data?.latitude} - {Loading ? "_" : Data?.longitude}</span> *************
              <span> Tên trạm vũ trụ: {Loading ? "_" : Data?.name}</span>*************
              <span> Vận tốc: {Loading ? "_" : Data?.velocity} (km/h)</span></div>}
          </header>
          <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
            latw={Data?.latitude}
            lonw={Data?.longitude}
          />
       </div>
  );
}

export default App;
