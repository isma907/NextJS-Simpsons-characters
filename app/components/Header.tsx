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
    <header className="w-full border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-black p-4 sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-white/75 dark:bg-black/75">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <Link href="/" className="font-bold text-3xl text-amber-300">
          The Simpsons
        </Link>
        <div className="relative w-full max-w-sm flex-1">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-500" />
          </div>
          <input
            type="search"
            placeholder="Search characters..."
            className="search-input pl-10 bg-white"
            defaultValue={searchParams.get('q')?.toString() || ''}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
    </header>
  );
}
