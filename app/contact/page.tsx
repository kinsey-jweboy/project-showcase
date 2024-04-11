import { subtitle, title } from '@/components/primitives';
import { Image } from '@nextui-org/image';
import React from 'react';

const ContactPage = () => {
  return (
    <React.Fragment>
      <h1 className={title()}>Contact Us</h1>
      <div>
        <h3 className={subtitle()}>Wechat</h3>
        <div className="grid grid-cols-2 gap-8">
          <Image
            shadow="sm"
            radius="lg"
            width={360}
            className="h-[500px]"
            src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG263.jpg"
            alt="wechat qrcode"
          />
          <Image
            shadow="sm"
            radius="lg"
            width={360}
            className="h-[500px]"
            src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG2670.jpg"
            alt="wechat qrcode"
          />
        </div>
        <h3 className={subtitle()}>Feishu</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-center items-center w-[360px]">
            <Image
              shadow="sm"
              radius="lg"
              src="https://resource.jweboy.asia/showcase%2Fteam%2FWechatIMG261.jpg"
              alt="feishu qrcode"
            />
          </div>
          <div className="flex justify-center items-center w-[360px]">
            <Image
              shadow="sm"
              radius="lg"
              src="https://resource.jweboy.asia/showcase%2Fteam%2F20240410-155044.jpeg"
              alt="feishu qrcode"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
