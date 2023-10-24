import { createSlice } from "@reduxjs/toolkit";

export type ListingType = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
};
type ListingState = {
  initListings: ListingType[];
};

const initialState: ListingState = {
  initListings: [
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
  ],
};

export const listingSlice = createSlice({
  name: "listing",
  initialState,
  reducers: {
    sayHi: () => console.log('hi!'),
  },
});

export const { sayHi } = listingSlice.actions;
export const listingReducer = listingSlice.reducer;
