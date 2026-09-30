import './globals.css';

export const metadata = {
  title: 'Cedar Paediatric Clinic | Website Concept',
  description: 'A website concept prepared for Cedar Paediatric Clinic, Kaduna.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
