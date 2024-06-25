import Image from 'next/image';
import React, { FC } from 'react'

type PlaceAspectRating = {
  type: string;
  rating: number;
}

type Props = {
  aspects?: PlaceAspectRating[] | undefined;
  author_name: string;
  author_url?: string;
  language: string;
  profile_photo_url: string;
  rating?: number;
  relative_time_description: string;
  text: string;
  time: number;
}

const Review: FC<Props> = (props) => {
  return (
    <div>
      <p>{props.author_name}</p>
      <p>{props.author_url}</p>
      <p>{props.language}</p>
      <p>
        <div className="relative size-24">
          <Image
            src={props.profile_photo_url}
            alt={`${props.author_name}'s photo`}
            fill
            className="bg-cover bg-center"
          />
        </div>
      </p>
      <p>{props.rating}</p>
      <p>{props.relative_time_description}</p>
      <p>{props.text}</p>
      <p>{props.time}</p>
    </div>
  )
}

export default Review