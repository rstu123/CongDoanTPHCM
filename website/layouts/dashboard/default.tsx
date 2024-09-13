/* eslint-disable prettier/prettier */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

import ProtectedRoute from "@/components/protectedRoute";
import { SidebarProvider } from '@/context/sidebarContext';
import Sidebar from "@/components/dashboard/sidebar/sidebar";
import NavbarDashboard from "@/components/dashboard/navbar/navbar";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export default function DefaultLayoutDashboard({ children, themeProps }: ProvidersProps) {

  return (
    <ProtectedRoute>
      <NextThemesProvider
        attribute='class'
        defaultTheme='system'
        {...themeProps}>
        <SidebarProvider>
          <Sidebar />
          <NavbarDashboard />
          {children}
        </SidebarProvider>
      </NextThemesProvider>
    </ProtectedRoute >
  );
}

