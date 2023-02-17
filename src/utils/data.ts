export interface IProduct {
  name: string;
  slug: string;
  category: string;
  image: IStoreImage;
  secondaryImages: IStoreImage[];
  price: number;
  rating: number;
  numReviews: number;
  countInStock: number;
  description: string;
  brand?: string;
  isFeatured?: boolean;
  quantity?: number;
}
export interface IUser {
  name: string;
  email: string;
  password: string;
  isAdmin: boolean;
}
export interface IStoreImage {
  name: string;
  src: string;
}

const data = {
  users: [
    {
      name: "Annet",
      email: "annet.loft35@gmail.com",
      password: "123456",
      isAdmin: true,
    },
    {
      name: "Mely",
      email: "mely.loft35@gmail.com",
      password: "123456",
      isAdmin: true,
    },
    {
      name: "Julio",
      email: "julio.sergio2709@gmail.com",
      password: "123456",
      isAdmin: true,
    },
    {
      name: "Morel",
      email: "morel.fiftychen@gmail.com",
      password: "123456",
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Red Shirt",
      slug: "red-shirt",
      category: "Shirts",
      image: {
        name: "bianca",
        src: "/images/products/bianca.jpg",
      },
      secondaryImages: [],
      price: 24,
      brand: undefined,
      rating: 4.5,
      numReviews: 8,
      countInStock: 3,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
      isFeatured: true,
    },
    {
      name: "Beige Blouse",
      slug: "beige-blouse",
      category: "Blouses",
      image: {
        name: "bianca_1",
        src: "/images/products/bianca_1.jpg",
      },
      secondaryImages: [],
      price: 46,
      brand: undefined,
      rating: 3.2,
      numReviews: 10,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
      isFeatured: true,
    },
    {
      name: "Black T-Shirt",
      slug: "black-tshirt",
      category: "T-Shirts",
      image: {
        name: "mart",
        src: "/images/products/mart.jpg",
      },
      secondaryImages: [
        {
          name: "mart_1",
          src: "/images/products/mart_1.jpg",
        },
      ],
      price: 30,
      brand: undefined,
      rating: 4,
      numReviews: 3,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
      isFeatured: true,
    },
    {
      name: "Pink Long T-Shirt",
      slug: "Pink-long-tshirt",
      category: "T-Shirts",
      image: {
        name: "mart-production",
        src: "/images/products/mart-production.jpg",
      },
      secondaryImages: [
        {
          name: "mart-production_1",
          src: "/images/products/mart-production_1.jpg",
        },
      ],
      price: 90,
      brand: undefined,
      rating: 2.9,
      numReviews: 13,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "White T-Shirt",
      slug: "white-tshirt",
      category: "T-Shirts",
      image: {
        name: "mockupbee",
        src: "/images/products/mockupbee.jpg",
      },
      secondaryImages: [],
      price: 25,
      brand: undefined,
      rating: 3.5,
      numReviews: 7,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
    {
      name: "Denim Pants",
      slug: "denim-pants",
      category: "Pants",
      image: {
        name: "cotton-studio",
        src: "/images/products/cotton-studio.jpg",
      },
      secondaryImages: [],
      price: 75,
      brand: undefined,
      rating: 2.4,
      numReviews: 14,
      countInStock: 1,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quo amet, aut maiores vitae necessitatibus praesentium facere voluptatibus animi voluptas earum exercitationem a, commodi temporibus excepturi soluta dignissimos omnis laudantium.",
    },
  ],
};

export default data;
