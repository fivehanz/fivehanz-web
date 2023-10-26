import { UserProvider } from '@auth0/nextjs-auth0/client';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: React.ReactNode;
}

export function Layout(props: LayoutProps) {
  return <UserProvider>{props.children}</UserProvider>;
}

export default Layout;
