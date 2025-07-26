"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Minus } from "lucide-react";
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

export default function HomeSidebar() {
  return (
    <aside className="space-y-6 py-3 pr-6 w-full md:w-[300px] self-start overflow-y-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink>Home</BreadcrumbLink>
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
                <SelectItem value="volkswagen">Volkswagen (6,8273)</SelectItem>
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
  );
}
