import { ListingType } from "./Listings";

const Listing = ({ listing }: ListingType) => {
  return (
    <div className="flex flex-col">
      <img
        className="rounded-xl  w-[300px] h-[300px] object-cover"
        src={listing.image}
        alt={listing.name}
      />
      <h3 className="font-semibold">{listing.name}</h3>
      <p>{listing.description}</p>
      <span>${listing.price}</span>
    </div>
  );
};

export default Listing;
