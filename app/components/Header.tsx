'use client';

import { useDebouncedCallback } from 'use-debounce';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', '1');
    if (term) {
      params.set('q', term);
    } else {
      params.delete('q');
    }
    router.replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <header className="sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-white/75 dark:bg-black/75">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-xl tracking-tight text-yellow-500 whitespace-nowrap drop-shadow-sm">
          The Simpsons
        </Link>
        <div className="relative w-full max-w-sm flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="search"
            placeholder="Search characters..."
            className="w-full h-10 pl-10 pr-4 rounded-full border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all text-sm"
            defaultValue={searchParams.get('q')?.toString() || ''}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
