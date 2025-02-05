import { useEffect, useState } from "react";

export function useSocket(eventName: string) {
  const [message, setMessage] = useState<any>(null);
  const [isConnected, setIsConnected] = useState(false);

  return { message, isConnected, setIsConnected, eventName };
}
