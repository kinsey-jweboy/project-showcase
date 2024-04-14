import initTranslations from '@/app/i18n';
import VideoPlayer from '@/components/video';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import clsx from 'clsx';
import React from 'react';

const DetailPage = async ({ params: { locale, id } }: BaseComponetProps) => {
  const { t } = await initTranslations(locale, ['home']);
  const { t: commonTranslate } = await initTranslations(locale, ['common']);
  const { data } = await fetch(process.env.URL + '/api/products' + `/${id}`, {
    cache: 'no-cache',
  }).then((res) => res.json());

  return (
    <div>
      <div className="px-4">
        <h2 className="text-2xl font-medium mb-2">
          {t(data?.title)}{' '}
          {data?.video && (
            <Link isExternal href={data?.video}>
              {commonTranslate('more')}
            </Link>
          )}
        </h2>
        <p className="text-small">{t(data?.description)}</p>
      </div>
      <div className="mt-4">
        {(data?.images as any[])?.map((item, index) => (
          <Image
            key={index}
            src={item}
            width={data?.tag !== 'pc' ? 320 : '100%'}
            alt="detail image"
            className={data?.tag !== 'pc' ? 'h-[640px]' : ''}
          />
        ))}
      </div>
    </div>
  );
};

export default DetailPage;
