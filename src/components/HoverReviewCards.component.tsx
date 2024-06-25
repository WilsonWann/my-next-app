import React, { FC } from 'react'
import { CalendarDays } from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./ui/avatar"
import { Button } from "./ui/button"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  HoverCardPortal
} from "./ui/hover-card"
import { ScrollArea } from './ui/scroll-area'
import { Separator } from './ui/separator'

type PlaceAspectRating = {
  type: string;
  rating: number;
}

type ReviewProps = {
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

type Props = {
  reviews: ReviewProps[]
  userRatingsTotal?: number
}

const HoverReviewCards: FC<Props> = (props) => {
  if (!props.userRatingsTotal) return null

  const { reviews } = props
  const scrollAreaHeight = () => {
    const maxReviews = 5
    if (reviews.length > maxReviews) {
      return `h-[${maxReviews * 70}px]`
    } else {
      return `h-[${reviews.length * 70}px]`
    }
  }
  return (
    <HoverCard openDelay={100} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className="p-0 md:text-xs text-base text-blue-500 hover:decoration-blue-500 hover:underline"
        >
          {props.userRatingsTotal} 篇評論
        </Button>
      </HoverCardTrigger>

      <HoverCardPortal>
        <HoverCardContent className="w-80" avoidCollisions sideOffset={15} side="left">
          <ScrollArea className={`w-full rounded-md h-32`}>
            {reviews.map((review, index) => (
              <>
                <div key={index} className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src={review.profile_photo_url} />
                    <AvatarFallback>G</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">{review.author_name}</h4>
                    <p className="text-sm">
                      {review.text}
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>
                <Separator className="my-2" />
              </>
            ))}
          </ScrollArea>
        </HoverCardContent>
      </HoverCardPortal>
    </HoverCard >
  )
}

export default HoverReviewCards