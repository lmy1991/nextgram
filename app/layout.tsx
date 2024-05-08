import './global.css';

export const metadata = {
  title: 'NextGram',
  description:
    'A sample Next.js app showing dynamic routing with modals as a route.',
  metadataBase: new URL('https://nextgram.vercel.app'),
};

export default function RootLayout(properties: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html>
      <body>
        {properties.children}
        {properties.modal}
      </body>
    </html>
  );
}
