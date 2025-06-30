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
} from '@/registry/ui/sidebar';

// Navigation configuration - conventional approach
const navigation = {
  'Get Started': [
    { title: 'Introduction', url: '/' },
    { title: 'Typography', url: '/get-started/typography' }
  ],
  Components: [
    { title: 'Accordion', url: '/components/accordion' },
    { title: 'Alert', url: '/components/alert' },
    { title: 'AutoGrid', url: '/components/autogrid' },
    { title: 'Badge', url: '/components/badge' },
    { title: 'Button', url: '/components/button' },
    { title: 'Card', url: '/components/card' },
    { title: 'External Link', url: '/components/external-link' },
    { title: 'Stat', url: '/components/stat' }
  ],
  Blocks: [{ title: 'Hero', url: '/blocks/hero' }]
};

export function AppSidebar() {
  return (
    <Sidebar variant="sidebar">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link to="/">
                <span className="text-lg font-bold">Shad Kit</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {Object.entries(navigation).map(([section, items]) => (
          <SidebarGroup key={section}>
            <SidebarGroupLabel>{section}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
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
        ))}
      </SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
    </Sidebar>
  );
}
