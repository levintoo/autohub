"use client";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";

export default function AnnouncementBanner() {
  const [show, setShow] = useState(true);

  return (
    <>
      {show && (
        <div className="py-6 bg-slate-50 dark:bg-slate-900 border-b border-t border-slate-200 dark:border-slate-700">
          <div className="px-3 md:px-0 container mx-auto flex justify-between items-center gap-4">
            <p className="text-sm text-slate-700 dark:text-slate-300">
              Autohub provides a secure car trading platform but is only liable
              for transactions made through our offices call 0722-AUTO for
              clarification.
            </p>
            <Button onClick={() => setShow(false)} size="icon" variant="ghost">
              <X />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
