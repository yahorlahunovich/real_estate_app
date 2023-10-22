import { useEffect } from "react";
import Listing from "./Listing";
import { useAppSelector } from "../redux/hooks";

const Listings = () => {
  const state = useAppSelector((state) => state.listing);
  console.log(state);
  useEffect(() => {}, []);
  return (
    <section className="flex flex-wrap gap-12 items-center p-12">
      {/* {listings.map((listing) => (
        <Listing listing={listing} />
      ))} */}
    </section>
  );
};

export default Listings;
