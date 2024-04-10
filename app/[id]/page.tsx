import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';
import { Image } from '@nextui-org/image';
import React from 'react';

const DetailPage = async ({ params }: { params: Record<string, any> }) => {
  const { data } = await fetch(
    process.env.URL + '/api/products' + `/${params.id}`,
    { cache: 'no-cache' },
  ).then((res) => res.json());

  return (
    <div>
      <div className="px-4">
        <h2 className="text-2xl font-medium mb-2">{data?.title}</h2>
        <p className="text-small">{data?.description}</p>
      </div>
      <div className="mt-4">
        {data?.images?.map((item, index) => (
          <Image key={index} src={item} alt="detail image" />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
