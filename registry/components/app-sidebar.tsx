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

const getStarted = [
  {
    title: 'Introduction',
    url: '/'
  },
  {
    title: 'Typography',
    url: '/quickstart/typography'
  },
  {
    title: 'Color',
    url: '/quickstart/color'
  },
  {
    title: 'Spacing',
    url: '/quickstart/spacing'
  },
  {
    title: 'Components',
    url: '/quickstart/components'
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
    title: 'Badge',
    url: '/components/badge'
  },
  {
    title: 'Button',
    url: '/components/button'
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

const blocks = [
  {
    title: 'Hero',
    url: '/blocks/hero'
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
                <span className="text-lg font-bold">ShadKit</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Get Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {getStarted.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} activeOptions={{ exact: true }} activeProps={{ 'data-active': true }}>
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
        <SidebarGroup>
          <SidebarGroupLabel>Components</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {blocks.map((item) => (
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
