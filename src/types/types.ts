export interface CarouselItemProps {
  carouselData: CarouselItem[];
}

export interface CarouselItem {
  id: number;
  imgUrl: string;
  text: string;
}

export interface CartItems {
  _id: string;
  name: string;
  image: string;
  price: number;
  description: string;
  shop: {
    nickname: string;
    _id: string;
  };
  checked?: boolean;
}

export interface Shop {
  shopName: string;
  items: CartItems[];
}
