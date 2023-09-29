import ThemeRegistry from '../components/theme-registry/theme-registry';

export const metadata = {
  title: 'fivehanz.xyz | Haniel',
  description: 'Generated by create-nx-workspace',
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
