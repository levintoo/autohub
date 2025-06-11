import {
  Apple,
  ChevronDown,
  ChevronsRightLeft,
  Mail,
  MapPin,
  Minus,
  Phone,
  SendHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/mode-toggle";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Footer from "@/components/footer";

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

export default function Home() {
  return (
    <div>
      <div className="py-6 bg-slate-50 dark:bg-slate-900 border-b border-t border-slate-200 dark:border-slate-700">
        <div className="px-3 md:px-0 container mx-auto flex justify-between items-center gap-4">
          <p className="text-sm text-slate-700 dark:text-slate-300">
            Autohub provides a secure car trading platform but is only liable
            for transactions made through our offices call 0722-AUTO for
            clarification.
          </p>
          <Button size="icon" variant="ghost">
            <X />
          </Button>
        </div>
      </div>

      <main className="container px-3 md:px-0 relative mx-auto flex flex-col md:flex-row flex-1">
        <aside className="space-y-6 py-3 pr-6 pl-1 w-full md:w-[300px] md:sticky top-0 self-start overflow-y-auto">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Vehicles</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div>
            <Label htmlFor="search">Search</Label>
            <Input
              className="bg-white mt-2"
              id="search"
              placeholder="Search for a vehicle"
            />
          </div>

          <div>
            <p>Price</p>
            <div className="flex items-center gap-3 mt-2">
              <Input className="bg-white" id="search" placeholder="min" />
              <Minus />
              <Input className="bg-white" id="search" placeholder="max" />
            </div>
          </div>

          <div>
            <p>YOM</p>
            <div className="flex items-center gap-3 mt-2">
              <Input className="bg-white" placeholder="min" />
              <Minus />
              <Input className="bg-white" placeholder="max" />
            </div>
          </div>

          <div>
            <p>Mileage</p>
            <div className="flex items-center gap-3 mt-2">
              <Input className="bg-white" placeholder="min" />
              <Minus />
              <Input className="bg-white" placeholder="max" />
            </div>
          </div>

          <div>
            <p>Make</p>
            <div className="flex items-center gap-3 mt-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a manufucturer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Brand</SelectLabel>
                    <SelectItem value="mazda">Mazda</SelectItem>
                    <SelectItem value="volkswagen">
                      Volkswagen (6,8273)
                    </SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <p>Model</p>
            <div className="flex items-center gap-3 mt-2">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Model</SelectLabel>
                    <SelectItem value="axela">Axela</SelectItem>
                    <SelectItem value="mazda6">Atenza</SelectItem>
                    <SelectItem value="cx3">CX-3</SelectItem>
                    <SelectItem value="cx5">CX-5 (2,150)</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <p>Transmission</p>

            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=false]]:text-muted-foreground has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox className="data-[state=checked]:font-bold data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
              <p className="text-sm">Automatic (2,847)</p>
            </Label>

            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=false]]:text-muted-foreground has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox className="data-[state=checked]:font-bold data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
              <p className="text-sm">Manual (879)</p>
            </Label>

            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=false]]:text-muted-foreground has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox className="data-[state=checked]:font-bold data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
              <p className="text-sm">CVT (3)</p>
            </Label>
          </div>

          <div className="space-y-2">
            <p>Condition</p>

            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=false]]:text-muted-foreground has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox className="data-[state=checked]:font-bold data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
              <p className="text-sm">Brand New (2,847)</p>
            </Label>

            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=false]]:text-muted-foreground has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox className="data-[state=checked]:font-bold data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
              <p className="text-sm">Local Used (879)</p>
            </Label>

            <Label className="hover:bg-accent/50 flex items-start gap-3 rounded-lg border p-3 has-[[aria-checked=false]]:text-muted-foreground has-[[aria-checked=true]]:bg-blue-50 dark:has-[[aria-checked=true]]:border-blue-900 dark:has-[[aria-checked=true]]:bg-blue-950">
              <Checkbox className="data-[state=checked]:font-bold data-[state=checked]:border-blue-600 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white dark:data-[state=checked]:border-blue-700 dark:data-[state=checked]:bg-blue-700" />
              <p className="text-sm">Foreign Used (3)</p>
            </Label>
          </div>
        </aside>

        <section className="flex-1 overflow-auto p-4">
          <div className="flex-1 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {cars.map((car) => (
              <div
                key={car.id}
                className="shadow-lg shadow-slate-50 dark:shadow-slate-900 border rounded-lg overflow-hidden"
              >
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
                    <Link
                      href={`/${car.id}`}
                      title={car.name}
                      className="line-clamp-1 font-semibold hover:underline"
                    >
                      {car.name}
                    </Link>
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

                      <div className="flex items-center gap-3">
                        {/*<Badge>In House Stock</Badge>*/}
                        <Button size="icon" variant="secondary">
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
