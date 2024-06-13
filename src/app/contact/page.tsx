'use client'
import React, { useState } from 'react'
import { scheherazade } from '@/app/fonts'
import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import Logo from '../components/Logo/Logo.component';

const containerStyle = {
  width: '100vw',
  height: '500px'
};

const center = {
  lat: 24.150,
  lng: 120.665
};

const ContactPage = () => {

  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(center);

  return (
    <div className={`${scheherazade.className} flex flex-col items-center`}>
      <LoadScript
        googleMapsApiKey="AIzaSyAzm2c3w6UbY6MM_-sc5hi7ig_l5MRX9MY"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={14}
        >
          <Marker
            title={'陌聲行銷有限公司'}
            position={center}
            onClick={() => setSelected(center)}
          />
          {selected && (
            <InfoWindow

              position={selected}
              onCloseClick={() => setSelected(null)}
            >
              <div className="flex flex-col">
                <div className="flex justify-between items-baseline">
                  <Logo className="w-[102px]" />
                  <h3>陌聲行銷有限公司</h3>
                </div>
                <p>403518台中市西區英才路530號23樓之5</p>
                <p>營業時間：09:00-18:00</p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default ContactPage