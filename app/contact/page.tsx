import { subtitle, title } from '@/components/primitives';
import { Image } from '@nextui-org/image';
import React from 'react';

const ContactPage = () => {
  return (
    <React.Fragment>
      <h1 className={title()}>Contact Us</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col">
          <h3 className={subtitle()}>Wechat</h3>
          <div className="flex gap-x-4">
            <Image
              shadow="sm"
              radius="lg"
              src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG260.jpg"
              alt="wechat qrcode"
            />
            <Image
              shadow="sm"
              radius="lg"
              src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG260.jpg"
              alt="wechat qrcode"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h3 className={subtitle()}>Feishu</h3>
          <div className="flex gap-x-4">
            <Image
              shadow="sm"
              radius="lg"
              src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG261.jpg"
              alt="feishu qrcode"
            />
            <Image
              shadow="sm"
              radius="lg"
              src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG261.jpg"
              alt="feishu qrcode"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
