import { useEffect, useState } from "react";
import Listing from "./Listing";

export type ListingType = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
};

const Listings = () => {
  const [listings, setListings] = useState<ListingType[]>([
    {
      name: "Powiat Krakowski",
      description: "lore  ",
      price: 611,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-615594602431358873/original/c16005c4-12bb-45c4-b96d-5236e25c76e6.jpeg?im_w=720",
      id: "Test",
    },
    {
      name: "Powiat Krakowski",
      description: "lore  ",
      price: 611,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-615594602431358873/original/c16005c4-12bb-45c4-b96d-5236e25c76e6.jpeg?im_w=720",
      id: "Test",
    },
    {
      name: "Powiat Krakowski",
      description: "lore  ",
      price: 611,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-615594602431358873/original/c16005c4-12bb-45c4-b96d-5236e25c76e6.jpeg?im_w=720",
      id: "Test",
    },
    {
      name: "Powiat Krakowski",
      description: "lore  ",
      price: 611,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-615594602431358873/original/c16005c4-12bb-45c4-b96d-5236e25c76e6.jpeg?im_w=720",
      id: "Test",
    },
    {
      name: "Powiat Krakowski",
      description: "lore  ",
      price: 611,
      image:
        "https://a0.muscache.com/im/pictures/miso/Hosting-615594602431358873/original/c16005c4-12bb-45c4-b96d-5236e25c76e6.jpeg?im_w=720",
      id: "Test",
    },
  ]);
  useEffect(() => {}, []);
  return (
    <section className="flex flex-wrap gap-12 items-center p-12">
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </section>
  );
};

export default Listings;
