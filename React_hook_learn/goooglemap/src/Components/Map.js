import React from 'react'
import { withGoogleMap, withScriptjs, GoogleMap  , Marker } from "react-google-maps"
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import imageIcon from '../Image/956251-200.png';
const options = { closeBoxURL: '', enableEventPropagation: true };
const Map = ({latw , lonw}) => {
  return (
    <div>
    <GoogleMap
          defaultZoom={3}
          defaultCenter={{ lat: 21.027763, lng: 105.834160 }}
        >
         <Marker
              icon={{
                url: imageIcon,
                scaledSize: new window.google.maps.Size(40, 40),
              }}
              position={{  lat: latw, lng: lonw }}
          >
             <InfoBox
              options={options}
            >
              <>
                <div style={{ backgroundColor: 'green', color: 'white', borderRadius:'1em', padding: '0.2em' }}>
                    <h3>Xin chào các bạn tôi là ISS</h3>
                    <p>Giới thiệu qua với các bạn về tôi nha</p>
                    <ul style={{textAlign: "left"}}>
                      <li style={{fontSize: "10px"}}>Ngày phóng: Ngày 20 tháng 11 năm 1998</li>
                      <li style={{fontSize: "10px"}}>Khối lượng: 419.725 kg</li>
                      <li style={{fontSize: "10px"}}>Phi hành đoàn: (Expedition 64)(Soyuz MS-17)(SpaceX Crew 1)</li>
                      <li style={{fontSize: "10px"}}>Tổ chức xây dựng: NASA, RKA, JAXA, CSA, ESA</li>
                      <li style={{fontSize: "10px"}}>Ngày dừng lại: Nan</li>
                    </ul>
                    <h3>😜 Hẹn gặp lại nha 😁</h3>
                </div>
              </>
            </InfoBox>  
          </Marker>
         
      </GoogleMap>
    </div>
  );
}

export default withScriptjs(withGoogleMap(Map));