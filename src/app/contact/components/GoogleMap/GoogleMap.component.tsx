import React, { FC, useState } from 'react'
import { GoogleMap as ReactGoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import Logo from '@/app/components/Logo/Logo.component';
import CopyToText from '../CopyToText/CopyToText.component';

const center = {
  lat: 24.150,
  lng: 120.665
};

type Props = {
  className?: string
}

const GoogleMap: FC<Props> = ({ className = '' }) => {

  const [selected, setSelected] = useState<{ lat: number; lng: number } | null>(center);

  return (
    <div className={`${className}`}>
      <LoadScript
        googleMapsApiKey="AIzaSyAzm2c3w6UbY6MM_-sc5hi7ig_l5MRX9MY"
      >
        <ReactGoogleMap
          mapContainerClassName="w-screen h-[500px]"
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
                  <Logo imageClassName="w-[102px]" />
                  <h3>陌聲行銷有限公司</h3>
                </div>
                <p>地址：<CopyToText copyText={"403518台中市西區英才路530號23樓之5"} /></p>
                <p>電話：<a href="tel:0422010520" className="text-blue-500">0422010520</a></p>
                <p>營業時間：09:00-18:00</p>
                <p>電子信箱：<a href="mailto:service@musense.tw" className="text-blue-500">service@musense.tw</a></p>
              </div>
            </InfoWindow>
          )}
        </ReactGoogleMap>
      </LoadScript>
    </div >
  )
}

export default GoogleMap