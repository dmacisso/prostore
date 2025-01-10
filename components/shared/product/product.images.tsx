'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
      />
      <div className="flex">
        {images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            onClick={() => setCurrent(imageIndex)}
            className={cn(
              'border mr-2 cursor-pointer hover:border-orange-600',
              current === imageIndex && 'border-orange-500'
            )}
          >
            <Image src={image} alt="image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;