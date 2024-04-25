import initTranslations from '@/app/i18n';
import { Button } from '@nextui-org/button';
import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react';

const DetailPage = async ({ params: { locale, id } }: BaseComponetProps) => {
  const { t } = await initTranslations(locale, ['home']);
  const { t: commonTranslate } = await initTranslations(locale, ['common']);
  const { data } = await fetch(process.env.URL + '/api/products' + `/${id}`, {
    cache: 'no-cache',
  }).then((res) => res.json());

  return (
    <div className="pt-4">
      <div className="flex justify-between">
        <div className="px-4">
          <h2 className="text-2xl font-medium mb-2">{t(data?.title)} </h2>
          <p className="text-small text-neutral-500">{t(data?.description)}</p>
        </div>
        <div className="flex gap-x-2 items-start">
          {data?.video && (
            <Link isExternal href={data?.video}>
              <Button size="sm" color="secondary">
                {commonTranslate('video_demonstration')}
              </Button>
            </Link>
          )}
          {data?.preview && (
            <Link isExternal href={data?.preview}>
              <Button size="sm" color="primary">
                {commonTranslate('site_preview')}
              </Button>
            </Link>
          )}
        </div>
      </div>
      <div
        className={`mt-4 ${data?.tag !== 'pc' ? 'grid grid-cols-4 gap-4' : ''}`}
      >
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
