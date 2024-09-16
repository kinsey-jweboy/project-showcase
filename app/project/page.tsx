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
import { Tab, Tabs } from '@nextui-org/tabs';
import useSWRMutation from 'swr/mutation';
import { getFetcher, postFetcher } from '@/utils/request/fetcher';
import { serializateUrl } from '@/utils';
import { Spinner } from '@nextui-org/spinner';

function Home() {
  const params = { isPublic: true };
  const { data, isMutating, trigger } = useSWRMutation<List<Project>>(
    '/project/list',
    postFetcher,
  );

  const handleTabChange = (value) => {
    trigger({ type: value, ...params });
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>查看&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>我们的项目</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          我们在网络、小程序开发方面有丰富的经验。
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
                  <Card shadow="sm" className="h-[350px]">
                    <CardBody className="overflow-visible p-0">
                      <div className="overflow-hidden rounded-large">
                        <Image
                          shadow="sm"
                          radius="lg"
                          width="100%"
                          isZoomed
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
