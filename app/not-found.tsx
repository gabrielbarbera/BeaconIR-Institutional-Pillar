import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ padding: '2rem', textAlign: 'center', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p style={{ marginBottom: '1rem' }}>The page you are looking for does not exist.</p>
      <Link href="/" style={{ color: '#3B82F6', textDecoration: 'underline' }}>Go back home</Link>
    </div>
  );
}
