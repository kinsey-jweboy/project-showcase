'use client';

import { Link } from '@nextui-org/link';
import { title, subtitle } from '@/components/primitives';
import { Card, CardBody, CardFooter } from '@nextui-org/card';
import { Tab, Tabs } from '@nextui-org/tabs';
import useSWRMutation from 'swr/mutation';
import { postFetcher } from '@/utils/request/fetcher';
import { Spinner } from '@nextui-org/spinner';
import { QRCodeSVG } from 'qrcode.react';
import { Image } from '@nextui-org/image';
import React from 'react';
import { isValidUrl } from '@/utils';

type Params = {
  type: React.Key;
  isPublic: boolean;
};

function Home() {
  const { data, isMutating, trigger } = useSWRMutation<
    List<Project>,
    Error,
    string,
    Params
  >('/project/list', postFetcher);

  const handleTabChange = (value: React.Key) => {
    trigger({ type: value, isPublic: true });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>查看&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>我们的项目</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          我们在后端系统、小程序、移动端有丰富的开发经验。
        </h2>
      </div>
      <div className="flex w-full gap-4">
        <Tabs aria-label="Tabs" isVertical onSelectionChange={handleTabChange}>
          <Tab title="小程序（微信、支付宝）" key="miniprogram" />
          <Tab title="PC（管理后台系统）" key="pc"></Tab>
          <Tab title="H5（移动端页面）" key="h5"></Tab>
        </Tabs>
        <div className="flex-1">
          {!isMutating ? (
            <div className="grid grid-cols-3 gap-6">
              {data?.items.map((item, index) => (
                <Link
                  href={`/project/${item.id}`}
                  target="_blank"
                  className="block"
                  key={index}
                >
                  <Card shadow="sm" className="h-[350px] group">
                    <CardBody className="overflow-visible p-0">
                      <div className="overflow-hidden rounded-large">
                        {item.type === 'miniprogram' &&
                          isValidUrl(item.link) && (
                            <div className="group-hover:visible invisible flex items-center justify-center absolute z-50 bg-black/50 w-full h-full transition-all duration-100">
                              <QRCodeSVG value={item.link} size={200} />
                            </div>
                          )}
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          isZoomed={item.type !== 'miniprogram'}
                          loading="lazy"
                          alt={item.name}
                          className="h-[260px] object-cover"
                          src={item.screenshots[0]}
                        />
                      </div>
                    </CardBody>
                    <CardFooter>
                      <div className="flex flex-col w-full">
                        <h3 className="text-lg font-medium text-default-700 flex justify-between items-center">
                          {item.name}
                        </h3>
                        <p className="text-small text-default-500 h-10 line-clamp-2">
                          {item.description}
                        </p>
                      </div>
                    </CardFooter>
                  </Card>
                </Link>
              ))}
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      </div>
    </section>
  );
}

export default Home;
