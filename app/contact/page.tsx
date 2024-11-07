import LanguageChanger from '@/components/language-changer';
import { subtitle, title } from '@/components/primitives';
import { Image } from '@nextui-org/image';
import React from 'react';

const ContactPage = async () => {
  return (
    <React.Fragment>
      <h1 className={title()}>联系方式</h1>
      <div>
        <h3 className={subtitle()}>微信</h3>
        <div className="grid grid-cols-2 gap-8 mb-4">
          <Image
            shadow="sm"
            radius="lg"
            width={360}
            className="h-[500px]"
            src="https://assets.jweboy.asia/showcase%2Fteam%2FWechatIMG263.jpg"
            alt="wechat qrcode"
          />
          <Image
            shadow="sm"
            radius="lg"
            width={360}
            className="h-[500px]"
            src="https://assets.jweboy.asia/showcase%2Fteam%2FWechatIMG2670.jpg"
            alt="wechat qrcode"
          />
        </div>
        <h3 className={subtitle()}>飞书</h3>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex justify-center items-center w-[360px]">
            <Image
              shadow="sm"
              radius="lg"
              src="https://assets.jweboy.asia/showcase%2Fteam%2FWechatIMG261.jpg"
              alt="feishu qrcode"
            />
          </div>
          <div className="flex justify-center items-center w-[360px]">
            <Image
              shadow="sm"
              radius="lg"
              src="https://assets.jweboy.asia/showcase%2Fteam%2F20240410-155044.jpeg"
              alt="feishu qrcode"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContactPage;
