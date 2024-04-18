import { PropsWithChildren } from 'react';
import 'devicon';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Analytics /> 
      <SpeedInsights/>
      {children}
    </>
  );
}
