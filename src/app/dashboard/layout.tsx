'use client';

import { ThemeProvider } from '@/context/ThemeContext';
import '../../../i18n';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
