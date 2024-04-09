import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/breadcrumbs';
import { Image } from '@nextui-org/image';
import React from 'react';

const DetailPage = () => {
  return (
    <div>
      <div className="px-4">
        {' '}
        <h2 className="text-2xl font-medium mb-2">Ma shang li</h2>
        <p className="text-small">
          Unlock the full power of Acme! Gain expertise and insights from top
          organizations through guided tutorials, boosting productivity,
          enhancing security, and enabling seamless collaboration.
        </p>
      </div>
      <div className="mt-4">
        <Image
          className="block"
          src="https://resource.jweboy.asia/showcase%2Fmashangli%2FiShot_2024-04-09_14.41.37.png"
          alt="detail image"
        />
        <Image
          src="https://resource.jweboy.asia/showcase%2Fmashangli%2FiShot_2024-04-09_14.46.56.png"
          alt="detail image"
        />
        <Image
          src="https://resource.jweboy.asia/showcase%2Fmashangli%2FiShot_2024-04-09_15.01.38.png"
          alt="detail image"
        />
      </div>
    </div>
  );
};

export default DetailPage;
