import { createFileRoute, Outlet } from '@tanstack/react-router';
import { SidebarProvider, SidebarTrigger } from '@/registry/ui/sidebar';
import { AppSidebar } from '@/registry/components/app-sidebar';
import { ModeToggle } from '@/registry/components/mode-toggle';

export const Route = createFileRoute('/_main-layout')({
  component: MainLayout
});

function MainLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 grid grid-rows-[auto_1fr]">
        <header className="flex justify-between items-center sticky top-0 bg-background h-16 shrink-0 border-b px-4">
          <SidebarTrigger />
          <ModeToggle />
        </header>
        <div className="min-h-0 min-w-0">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
