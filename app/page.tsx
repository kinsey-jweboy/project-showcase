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
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/modal';

export default function Home() {
  const list = [
    {
      title: 'Orange',
      img: '/images/fruit-1.jpeg',
      price: '$5.50',
    },
    {
      title: 'Tangerine',
      img: '/images/fruit-2.jpeg',
      price: '$3.00',
    },
    {
      title: 'Raspberry',
      img: '/images/fruit-3.jpeg',
      price: '$10.00',
    },
    {
      title: 'Lemon',
      img: '/images/fruit-4.jpeg',
      price: '$5.30',
    },
    {
      title: 'Avocado',
      img: '/images/fruit-5.jpeg',
      price: '$15.70',
    },
    {
      title: 'Lemon 2',
      img: '/images/fruit-6.jpeg',
      price: '$8.00',
    },
    {
      title: 'Banana',
      img: '/images/fruit-7.jpeg',
      price: '$7.50',
    },
    {
      title: 'Watermelon',
      img: '/images/fruit-8.jpeg',
      price: '$12.20',
    },
  ];

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
        {list.map((item, index) => (
          <Link href="/-1" target="_blank" className="block" key={index}>
            <Card shadow="sm">
              <CardBody className="overflow-visible p-0">
                <div className="overflow-hidden rounded-large">
                  <Image
                    shadow="sm"
                    radius="lg"
                    width="100%"
                    alt={item.title}
                    className="h-[200px] object-cover hover:scale-110 transform transition-transform-opacity"
                    src="https://resource.jweboy.asia/showcase%2Fmashangli%2FiShot_2024-04-09_14.46.56.png"
                  />
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex flex-col">
                  <h3 className="text-lg font-medium text-default-700 flex justify-between items-center">
                    Ma shang li
                    <Chip color="success" size="sm">
                      PC
                    </Chip>
                  </h3>
                  <p className="text-small text-default-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
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
