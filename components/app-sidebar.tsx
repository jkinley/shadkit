import {
  MessageSquare,
  List,
  ReceiptText,
  Home,
  Type,
  Palette,
  BetweenHorizonalStart,
  Rocket,
  LayoutDashboard,
  Component
} from 'lucide-react';

import { Link } from '@tanstack/react-router';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from '@/components/ui/sidebar';

// Menu items.
const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home
  },
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: LayoutDashboard
  },
  {
    title: 'Chat',
    url: '/chat',
    icon: MessageSquare
  },
  {
    title: 'List',
    url: '/list',
    icon: List
  },
  {
    title: 'Detail',
    url: '/detail',
    icon: ReceiptText
  }
];

const quickstart = [
  {
    title: 'Typography',
    url: '/quickstart/typography',
    icon: Type
  },
  {
    title: 'Color',
    url: '/quickstart/color',
    icon: Palette
  },
  {
    title: 'Spacing',
    url: '/quickstart/spacing',
    icon: BetweenHorizonalStart
  },
  {
    title: 'Components',
    url: '/quickstart/components',
    icon: Component
  }
];

const components = [
  {
    title: 'Alert',
    url: '/components/alert'
  },
  {
    title: 'AutoGrid',
    url: '/components/autogrid'
  },
  {
    title: 'Card',
    url: '/components/card'
  },
  {
    title: 'External Link',
    url: '/components/external-link'
  },
  {
    title: 'Stat',
    url: '/components/stat'
  }
];

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <Rocket />
                <span className="text-lg font-bold">UI Kit</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} activeOptions={{ exact: true }} activeProps={{ 'data-active': true }}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Quickstart</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickstart.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      activeOptions={{ exact: true }}
                      activeProps={{
                        'data-active': true,
                        className: 'bg-muted hover:bg-muted'
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {components.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.url}
                      activeOptions={{ exact: true }}
                      activeProps={{
                        'data-active': true,
                        className: 'bg-muted hover:bg-muted'
                      }}
                    >
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
