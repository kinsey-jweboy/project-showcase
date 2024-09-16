'use client';

import { serializateUrl } from '@/utils';
import { getFetcher } from '@/utils/request/fetcher';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import { useParams } from 'next/navigation';
import React from 'react';
import useSWR from 'swr';

const DetailPage = () => {
  const params = useParams();
  const { data } = useSWR<Project>(
    params.id ? serializateUrl('/project/detail', { id: params.id }) : null,
    getFetcher,
  );

  return (
    <div className="pt-4">
      <div className="flex justify-between">
        <div className="px-4">
          <h2 className="text-2xl font-medium mb-2">{data?.name} </h2>
          <p className="text-small text-neutral-500">{data?.description}</p>
        </div>
        <div className="flex gap-x-2 items-start">
          {data?.video && (
            <Link isExternal href={data?.video}>
              <Button size="sm" color="secondary">
                演示视频
              </Button>
            </Link>
          )}
          {data?.link && (
            <Link isExternal href={data?.link}>
              <Button size="sm" color="primary">
                效果预览
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div
        className={clsx(
          'mt-4',
          data?.type !== 'pc' && 'grid grid-cols-4 gap-4',
        )}
      >
        {data?.screenshots.map((item, index) => (
          <Link target="_blank" href={item} key={index}>
            <Image
              src={item}
              width={data?.type !== 'pc' ? 320 : '100%'}
              alt="detail image"
              className={data?.type !== 'pc' ? 'h-[640px]' : ''}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
