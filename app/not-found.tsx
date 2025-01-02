'use client';

import { Button } from '@/components/ui/button';
import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image
        src="/images/logo.svg"
        width={48}
        height={48}
        alt={`${APP_NAME} logo`}
        priority={true} /* see Note below */
      />
      <div className="p-6 w-1/3 rounded-lg shadow-md  text-center ">
        <h1 className="text-3xl font-bold mb-4">Not Found</h1>
        <p className="text-destructive">Could not find requested page</p>
        <Button
          onClick={() => (window.location.href = '/')}
          className="mt-4 ml-2"
          variant="outline"
        >
          Back to Home 🏡
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;

//* MARK: Note
//* In Next.js, the priority={true} image attribute preloads an image for lazy loading, which can improve application performance:
