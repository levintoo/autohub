import { notFound } from "next/navigation";

type TCars = {
  id: number;
  name: string;
  image: string;
  price: number;
  year: number;
  capacity: number;
  transmission: string;
  sold: boolean;
  fuel: string;
  stock: string;
  description: string;
}[];

const cars: TCars = [
  {
    id: 11,
    name: "BMW 3201",
    image: "https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be",
    price: 900000,
    year: 2010,
    capacity: 3000,
    transmission: "Automatic",
    sold: false,
    fuel: "Petrol",
    stock: "in-house",
    description:
      "The BMW 3201 is a compact, economical, and versatile car. It is a 3-seater, 2.0-litre, 125 kW, 12-inch, 1.6-litre V8 engine, with a 100 kW turbocharged engine. The BMW 3201 is a compact, economical, and versatile car. It is a 3-seater, 2.0-litre, 125 kW, 12-inch, 1.6-litre V8 engine, with a 100 kW turbocharged engine.",
  },
  {
    id: 21,
    name: "Audi S5",
    image: "https://images.unsplash.com/photo-1540066019607-e5f69323a8dc",
    price: 900000,
    year: 2019,
    capacity: 3000,
    transmission: "Manual",
    sold: false,
    fuel: "Petrol",
    stock: "in-house",
    description:
      "The BMW 3201 is a compact, economical, and versatile car. It is a 3-seater, 2.0-litre, 125 kW, 12-inch, 1.6-litre V8 engine, with a 100 kW turbocharged engine. The BMW 3201 is a compact, economical, and versatile car. It is a 3-seater, 2.0-litre, 125 kW, 12-inch, 1.6-litre V8 engine, with a 100 kW turbocharged engine.",
  },
  {
    id: 31,
    name: "Audi A5",
    image: "https://images.unsplash.com/photo-1608341089966-92c09e62214f",
    price: 900000,
    year: 2019,
    capacity: 3000,
    transmission: "Manual",
    sold: true,
    fuel: "Petrol",
    stock: "international",
    description: "The BMW 3201 is a compact, economical, and versatile car.",
  },
  {
    id: 1,
    name: "Toyota Corolla",
    image: "https://images.unsplash.com/photo-1638618164682-12b986ec2a75",
    price: 15000,
    year: 2018,
    capacity: 1200,
    transmission: "Automatic",
    sold: false,
    fuel: "Petrol",
    stock: "Nairobi",
    description: "Reliable and fuel-efficient, perfect for daily commutes.",
  },
  {
    id: 2,
    name: "Honda CR-V",
    image: "https://images.unsplash.com/photo-1716433376315-665952a11d89",
    price: 22000,
    year: 2019,
    capacity: 5,
    transmission: "CVT",
    sold: false,
    fuel: "Petrol",
    stock: "Mombasa",
    description: "Spacious SUV with excellent safety ratings.",
  },
  {
    id: 3,
    name: "Mazda Demio",
    image: "https://images.unsplash.com/photo-1683406739412-5c2e53f3fd8b",
    price: 8000,
    year: 2016,
    capacity: 5,
    transmission: "Automatic",
    sold: true,
    fuel: "Petrol",
    stock: "Kisumu",
    description: "Compact and budget-friendly hatchback.",
  },
  {
    id: 4,
    name: "Nissan X-Trail",
    image: "https://images.unsplash.com/photo-1593912123154-f4c8072e9a02",
    price: 18000,
    year: 2017,
    capacity: 7,
    transmission: "Automatic",
    sold: false,
    fuel: "Diesel",
    stock: "Nakuru",
    description: "Mid-size SUV ideal for families and off-road adventures.",
  },
  {
    id: 5,
    name: "BMW 3 Series",
    image: "https://images.unsplash.com/photo-1564260686-3939531e5532",
    price: 28000,
    year: 2020,
    capacity: 5,
    transmission: "Automatic",
    sold: false,
    fuel: "Petrol",
    stock: "Nairobi",
    description: "Luxury sedan with sporty performance.",
  },
  {
    id: 6,
    name: "Toyota Land Cruiser",
    image: "https://images.unsplash.com/photo-1601232532365-9661e8b2566e",
    price: 55000,
    year: 2021,
    capacity: 7,
    transmission: "Automatic",
    sold: false,
    fuel: "Diesel",
    stock: "Eldoret",
    description: "Rugged SUV built for Kenyan terrains.",
  },
  {
    id: 7,
    name: "Mercedes-Benz C-Class",
    image: "https://images.unsplash.com/photo-1686562483617-3cf08d81e117",
    price: 35000,
    year: 2020,
    capacity: 5,
    transmission: "Automatic",
    sold: true,
    fuel: "Petrol",
    stock: "Nairobi",
    description: "Elegance meets engineering in this premium sedan.",
  },
  {
    id: 8,
    name: "Subaru Forester",
    image: "https://images.unsplash.com/photo-1687048988997-ec57f83ea3bd",
    price: 17000,
    year: 2018,
    capacity: 5,
    transmission: "Automatic",
    sold: false,
    fuel: "Petrol",
    stock: "Nyeri",
    description: "All-wheel drive SUV with strong off-road performance.",
  },
  {
    id: 9,
    name: "Volkswagen Golf",
    image: "https://images.unsplash.com/photo-1573502721625-c482d1bc3935",
    price: 14000,
    year: 2016,
    capacity: 5,
    transmission: "Manual",
    sold: false,
    fuel: "Petrol",
    stock: "Kisii",
    description: "Compact, stylish, and fun to drive.",
  },
  {
    id: 10,
    name: "Ford Ranger",
    image: "https://images.unsplash.com/photo-1677739127545-74aa2b3929cd",
    price: 26000,
    year: 2019,
    capacity: 5,
    transmission: "Automatic",
    sold: false,
    fuel: "Diesel",
    stock: "Kitale",
    description: "Reliable pickup with strong towing capability.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ slug: number }>;
}) {
  const { slug } = await params;
  const car = cars.find((c) => c.id == slug);

  if (!car) return notFound();
  return (
    <div className="py-6 container mx-auto flex gap-6">
      <div className="w-2/5">
        <img
          src={car.image}
          alt={car.name}
          className="object-cover rounded-xl"
        />
      </div>
      <div className="w-3/5">
        <h1>{car.name}</h1>
        <p>{car.description}</p>
        <div>{car.stock}</div>
      </div>
    </div>
  );
}
