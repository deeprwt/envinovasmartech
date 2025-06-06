import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
// adding this gtag

import "./globals.scss";
import { Providers } from "@/redux/provider";

export const metadata: Metadata = {
  title: "Envinova",
  description:
    "Empower your business with CGB Solutions' IT expertise. Strategic consulting & managed services for peak performance. Contact us.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
      {/* staring here gtag */}
      <GoogleAnalytics gaId="G-FJXVS176M2" />
      {/* End here gtag */}
    </html>
  );
}
