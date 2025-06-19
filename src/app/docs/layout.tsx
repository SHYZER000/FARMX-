import './layout.css';
import ClientLayout from './clientlayout';

export const metadata = {
  title: 'My App',
  description: 'Layout with aside bar',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
