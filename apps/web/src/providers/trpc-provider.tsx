"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { trpc } from "@/lib/trpc";

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const session = useSession();
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1 minute
          },
        },
      })
  );

  const [trpcClient] = useState(() => {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";
    const trpcUrl = baseUrl.endsWith("/trpc") ? baseUrl : `${baseUrl}/trpc`;

    return trpc.createClient({
      links: [
        httpBatchLink({
          url: trpcUrl,
          async headers() {
            const token = (session.data as any)?.accessToken;
            if (token) {
              return {
                authorization: `Bearer ${token}`,
              };
            }
            return {};
          },
        }),
      ],
    });
  });

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
}
