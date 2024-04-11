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

async function Home() {
  const { data } = await fetch(process.env.URL + '/api/products', {
    cache: 'no-cache',
  }).then((res) => res.json());
  const items = data as any[];

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Meet&nbsp;</h1>
        <h1 className={title({ color: 'violet' })}>Our Project</h1>
        <h2 className={subtitle({ class: 'mt-4' })}>
          We have rich experience in web, small program development.
        </h2>
      </div>
      <div className="flex gap-3">
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
      </div>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {items?.map((item, index) => (
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
                    {item.title}
                    <Chip color={item.tag_color} size="sm">
                      {item.tag}
                    </Chip>
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
    </section>
  );
}

export default Home;
