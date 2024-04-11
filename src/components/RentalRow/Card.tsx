import { HiHeart, HiOutlineHeart, HiStar } from "react-icons/hi2";
import { IRental } from "../../@types/rental";
import { useToggle } from "usehooks-ts";
import { MouseEventHandler, useMemo } from "react";
import getImageUrl from "../../utils/getImageURL";
import randomIntFromInterval from "../../utils/getRandomInt";
export default function Card(props: IRental) {
  const [like, _, toggleLike] = useToggle(false);

  const likeRental: MouseEventHandler = (e) => {
    e.preventDefault();
    toggleLike(!like);
  };

  const imageURL = useMemo(
    () => getImageUrl(randomIntFromInterval(0, 6).toString()),
    []
  );

  return (
    <a href="#">
      <div className="flex flex-col gap-2 rounded-md">
        <div className="relative">
          <img
            src={imageURL}
            alt="image unavailable"
            className="object-cover w-full h-full rounded-xl aspect-square"
          />

          <button
            className="absolute text-white bg-transparent top-2 right-2"
            onClick={likeRental}
          >
            {like ? (
              <HiHeart className="w-6 h-6 text-red-500" />
            ) : (
              <HiOutlineHeart className="w-6 h-6" />
            )}
          </button>
        </div>
        <div className="flex flex-col">
          <span className="flex items-center justify-between font-medium text-neutral-900">
            <h1>
              {props.city}, {props.country.acronym}
            </h1>
            <p className="flex items-center gap-1 text-sm font-light">
              <HiStar className="w-4 h-4" /> {props.rating}
            </p>
          </span>
          <div className="text-sm font-light text-neutral-600">
            <p>{props.distance} kilometers away</p>
            <span className="flex items-center gap-1 mt-2 text-sm">
              <p className="font-medium text-neutral-900">
                {Intl.NumberFormat("en-US", {
                  currency: "USD",
                  style: "currency",
                }).format(props.price_per_night)}{" "}
              </p>
              night
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
