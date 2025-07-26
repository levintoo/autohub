import { ChevronsRightLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Badge } from "@/components/ui/badge";
import HomeSidebar from "@/components/home-sidebar";

type TCars = {
  id: number;
  name: string;
  slug: string;
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
    slug: "bmw-3201",
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
    slug: "audi-s5",
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
    slug: "audi-a5",
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
    slug: "toyota-corolla",
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
    slug: "honda-cr-v",
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
    slug: "mazda-demio",
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
    slug: "nissan-x-trail",
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
    slug: "bmw-3-series",
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
    slug: "toyota-land-cruiser",
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
    slug: "mercedes-benz-c-class",
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
    slug: "subaru-forester",
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
    slug: "volkswagen-golf",
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
    slug: "ford-ranger",
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

export default function Home() {
  return (
    <div>
      <main className="container px-3 md:px-0 relative mx-auto flex flex-col md:flex-row flex-1">
        <HomeSidebar />

        <section className="flex-1 overflow-auto p-4">
          <div className="flex-1 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {cars.map((car) => (
              <div
                key={car.id}
                className="relative shadow-lg shadow-slate-50 dark:shadow-slate-900 border rounded-lg overflow-hidden"
              >
                <Link
                  href={`/${car.slug}`}
                  title={car.name}
                  className="absolute inset-0 z-10"
                ></Link>
                <div className="relative">
                  <div className="bg-slate-100 max-h-[200px] flex items-center justify-center overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="object-cover min-h-[200px]"
                    />
                  </div>

                  <div className="absolute top-0 right-0 p-2">
                    {car.sold ? (
                      <Badge variant="destructive">Sold</Badge>
                    ) : (
                      <Badge
                        className="border border-green-600/30 dark:border-green-900/30 text-green-600 dark:text-green-900 bg-green-100 dark:bg-green-400"
                        variant="secondary"
                      >
                        Available
                      </Badge>
                    )}
                  </div>
                </div>
                <div className="p-4 space-y-6">
                  <div className="flex gap-3 items-center">
                    <Badge variant="secondary">{car.year}</Badge>
                    <p className="line-clamp-1 font-semibold">{car.name}</p>
                  </div>

                  <div>
                    <div className="flex gap-3 items-center">
                      <Badge variant="secondary">{car.transmission}</Badge>
                      <Badge variant="secondary">{car.capacity} CC</Badge>
                      <Badge variant="secondary">{car.stock}</Badge>
                    </div>
                    <p title={car.description} className="line-clamp-3 mt-3">
                      {car.description}
                    </p>
                    <hr className="my-3" />
                    <div className="py-1 flex justify-between items-center gap-3">
                      <p className="font-semibold">
                        KSH {car.price.toLocaleString()}
                      </p>

                      <div className="flex items-center gap-3 z-20">
                        <Button size="icon" variant="secondary" title="Compare">
                          <ChevronsRightLeft />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <div className="py-6 container mx-auto">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
