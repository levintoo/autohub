import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, Phone } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Twitter } from "@/components/icons/twitter";
import { Facebook } from "@/components/icons/facebook";
import { Instagram } from "@/components/icons/instagram";
import { Whatsapp } from "@/components/icons/whatsapp";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const car = cars.find((c) => c.slug == slug);

  if (!car) return notFound();
  return (
    <div className="py-3 container mx-auto flex flex-col gap-6 px-3 lg:px-0">
      <div>
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/">Vehicles</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{car.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/5 flex flex-col gap-3">
          <div className="w-full md:max-h-[330px]">
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="flex justify-between items-center gap-6">
            <div>Price</div>
            <div className="text-xl font-semibold">KES {car.price}</div>
          </div>
          <div className="flex flex-col justify-between gap-3 py-3">
            <div className="line-clamp-1 font-semibold text-lg">
              Vehicle Details
            </div>
            <Separator />
            <div className="flex justify-between gap-3">
              <p className="text-slate-800/80 dark:text-white/70">
                Year of manufacture
              </p>
              <div className="text-slate-800/80 dark:text-white/70">2009</div>
            </div>
            <Separator />
            <div className="flex justify-between gap-3">
              <p className="text-slate-800/80 dark:text-white/70">
                Current Location
              </p>
              <div className="text-slate-800/80 dark:text-white/70">
                Nairobi, Kenya
              </div>
            </div>
            <Separator />
            <div className="flex justify-between gap-3">
              <p className="text-slate-800/80 dark:text-white/70">Mileage</p>
              <div className="text-slate-800/80 dark:text-white/70">
                123,000km
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-3/5 space-y-4">
          <h1 className="line-clamp-1 font-semibold text-xl">{car.name}</h1>
          <p className="text-slate-700/80 dark:text-white/70">
            {car.description}
          </p>
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  Specifications
                  <ChevronRight />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{car.name} Specifications</SheetTitle>
                  <SheetDescription>Details go here</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <Separator />
          <div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" className="w-full justify-between">
                  Running Costs
                  <ChevronRight />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>{car.name} Running Costs</SheetTitle>
                  <SheetDescription>Details goes here</SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <Separator />
          <div className="flex gap-4">
            <Button className="bg-[#24cc63] hover:bg-[#24cc63]/80">
              <Whatsapp />
              Enquire Via Whatsapp
            </Button>
            <Button>
              <Phone />
              Call Now
            </Button>
          </div>
          <div className="flex flex-col gap-4">
            <p>Share this:</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Instagram />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook />
              </Button>
              <Button variant="outline" size="icon">
                <Twitter />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
