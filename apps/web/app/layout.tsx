import ThemeRegistry from '../components/theme-registry/theme-registry';

export const metadata = {
  title: 'web.hanz.lol | Haniel',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
