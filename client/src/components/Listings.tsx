import { useEffect } from "react";
import Listing from "./Listing";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { ListingType, sayHi } from "../redux/listing/listingSlice";

const Listings = () => {
  const dispatch = useAppDispatch();
  const initListings = useAppSelector((state) => state.listing.initListings);
  // const state = useAppSelector((state) => state);
  console.log(initListings);
  useEffect(() => {
    dispatch(sayHi());
  }, []);
  return (
    <section className="flex flex-wrap gap-12 items-center p-12">
      {/* {initListings.map((listing: ListingType) => (
        <Listing listing={listing} key={listing.name} />
      ))} */}
    </section>
  );
};

export default Listings;
