import { useRouter } from 'next/navigation';

// React server components are async so you make database or API calls.
export function HelloServer() {
  useRouter();

  return <h1>Hello Server</h1>;
}
