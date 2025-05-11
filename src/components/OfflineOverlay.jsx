"use client";

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { WifiOff } from "lucide-react";

export default function OfflineOverlay() {
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center text-white text-center p-8">
      <Alert
        variant="destructive"
        className="max-w-md bg-red-900/80 text-white border-white border-opacity-20"
      >
        <WifiOff className="w-10 h-10 mb-4 mx-auto" />
        <AlertTitle className="text-2xl font-bold">You're Offline</AlertTitle>
        <AlertDescription className="mt-2">
          Please check your internet connection. We’ll reconnect once you’re
          back online.
        </AlertDescription>
      </Alert>
    </div>
  );
}
