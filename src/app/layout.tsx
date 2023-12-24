import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
 

const inter = Inter({ subsets: ['latin'],variable:"--font-sans", })
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"

 

export const metadata: Metadata = {
  title: 'Calcular GPA',
  description: 'Una calculadora de GPA para estudiantes de la Universidad de San Francisco de Quito.',
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
      </body>
    </html>
  )
}
