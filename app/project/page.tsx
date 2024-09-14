'use client';

import { Link } from '@nextui-org/link';
import { Snippet } from '@nextui-org/snippet';
import { Code } from '@nextui-org/code';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { title, subtitle } from '@/components/primitives';
import { GithubIcon } from '@/components/icons';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Image } from '@nextui-org/image';
import { Chip } from '@nextui-org/chip';
import { Button } from '@nextui-org/button';
import Loading from '@/components/loading';
import initTranslations from '@/app/i18n';
import { Tab, Tabs } from '@nextui-org/tabs';
import useSWR from 'swr';
import { getFetcher } from '@/utils/request/fetcher';

function Home({ params: { locale } }: BaseComponetProps) {
  const { data } = useSWR('/api/products', getFetcher);
  // const { t } = await initTranslations(locale, ['home']);
  // const { data } = await fetch(process.env.URL + '/api/products', {
  //   cache: 'no-cache',
  // }).then((res) => res.json());
  // const items = data as any[];

  console.log(data);

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      {/* <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>{t('check')}&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>{t('our_project')}</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>{t('description')}</h2>
      </div> */}
      {/* <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.about}
          className={buttonStyles({ variant: 'bordered', radius: 'full' })}
        >
          About
        </Link>
        <Link href={siteConfig.links.contact} isExternal>
          <Button color="primary" radius="full">
            Contact
          </Button>
        </Link>
      </div> */}
      <div className="flex w-full gap-4">
        <Tabs aria-label="Tabs" isVertical>
          <Tab title="小程序（微信、支付宝）"></Tab>
          <Tab title="PC（管理后台系统）"></Tab>
          <Tab title="H5（移动端页面）"></Tab>
        </Tabs>
        <div className="flex-1">
          <div className="grid grid-cols-3 gap-6">
            {data?.map((item, index) => (
              <Link
                href={`/${item.id}`}
                target="_blank"
                className="block"
                key={index}
              >
                <Card shadow="sm" className="h-[350px]">
                  <CardBody className="overflow-visible p-0">
                    <div className="overflow-hidden rounded-large">
                      <Image
                        shadow="sm"
                        radius="lg"
                        width="100%"
                        isZoomed
                        loading="lazy"
                        alt={item.title}
                        className="h-[260px] object-cover"
                        src={item.images[0]}
                      />
                    </div>
                  </CardBody>
                  <CardFooter>
                    <div className="flex flex-col w-full">
                      <h3 className="text-lg font-medium text-default-700 flex justify-between items-center">
                        {/* {t(item.title)} */}
                        {item.title}
                        <Chip color={item.tag_color} size="sm">
                          {/* {t(item.tag)} */}
                          {item.tag}
                        </Chip>
                      </h3>
                      <p className="text-small text-default-500 h-10 line-clamp-2">
                        {/* {t(item.description)} */}
                        {item.description}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
