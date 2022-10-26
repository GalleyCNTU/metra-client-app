import Link from 'next/link';

export default function PageNotFound() {
  return (
    <>
      <h1>404 Page not found</h1>
      <Link href="/">Back to Home</Link>
    </>
  );
}
