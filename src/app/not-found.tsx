import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-48 lg:px-8">
      <div className="text-center">
        <h1 className="mt-4 font-semibold tracking-tight text-balance text-lg">
          4040 - Page not found
        </h1>
        <p className="mt-6 text-pretty text-gray-500">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">Go back home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
