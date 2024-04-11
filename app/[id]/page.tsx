import VideoPlayer from '@/components/video';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import React from 'react';

const DetailPage = async ({ params }: { params: Record<string, any> }) => {
  const { data } = await fetch(
    process.env.URL + '/api/products' + `/${params.id}`,
    { cache: 'no-cache' },
  ).then((res) => res.json());

  return (
    <div>
      <div className="px-4">
        <h2 className="text-2xl font-medium mb-2">
          {data?.title}{' '}
          <Link isExternal href={data?.video}>
            more
          </Link>
        </h2>
        <p className="text-small">{data?.description}</p>
      </div>
      <div className="mt-4">
        {(data?.images as any[])?.map((item, index) => (
          <Image
            key={index}
            src={item}
            width={320}
            alt="detail image"
            className="h-[640px]"
          />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
