import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
const inter = Inter({ subsets: ['latin'],variable:"--font-sans", })
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

 

export const metadata: Metadata = {
  title: 'Calcular GPA',
  description: 'Una calculadora de GPA para estudiantes de la Universidad San Francisco de Quito.',
  keywords: 'GPA, calculadora, USFQ, Universidad San Francisco de Quito, calculadora de GPA, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito, calculadora de GPA USFQ, calculadora de GPA Universidad San Francisco de Quito',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>

      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className,
        inter.variable
      )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
