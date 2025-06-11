import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export default function Header() {
  return (
    <header className="py-6 px-3 md:px-0 container mx-auto">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <img className="size-10" src="/icon.png" alt="icon" />
        </Link>

        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="data-[state=open]:bg-slate-50 dark:data-[state=open]:bg-slate-900"
                  variant="ghost"
                >
                  Vehicles
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="min-w-48"
                align="start"
                sideOffset={4}
                side="bottom"
              >
                <DropdownMenuItem>Available In Kenya</DropdownMenuItem>
                <DropdownMenuItem>International Stock</DropdownMenuItem>
                <DropdownMenuItem>Direct Import</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li>
            <Button variant="ghost">Bikes</Button>
          </li>
          <li>
            <Button variant="ghost">Sell Your Car</Button>
          </li>
          <li>
            <Button variant="ghost">About</Button>
          </li>
          <li>
            <Button variant="ghost">Contact</Button>
          </li>
          <li>
            <Button variant="ghost">FAQ</Button>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
