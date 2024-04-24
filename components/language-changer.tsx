'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { cookies } from 'next/headers';
import { Select, SelectItem } from '@nextui-org/select';
import { setCookie } from 'cookies-next';

function LanguageChanger({ locale }: Props) {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = locale || '';

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: newLocale } = evt.target;

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

    setCookie('NEXT_LOCALE', newLocale, {
      expires: date,
      path: '/',
    });

    const myCookies = document.cookie;
    console.log(myCookies);

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      // @ts-ignore
      !i18nConfig.prefixDefault
    ) {
      window.location.href = '/' + newLocale + currentPathname;
      // router.push('/' + newLocale + currentPathname);
    } else {
      window.location.href = `/${newLocale}`;
      // router.push(
      //   currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      // );
    }
  };

  return (
    <Select
      onChange={handleChange}
      defaultSelectedKeys={[currentLocale]}
      aria-label="language"
      className="w-28"
      disallowEmptySelection
    >
      <SelectItem key="en" value="en">
        English
      </SelectItem>
      <SelectItem key="zh" value="zh">
        简体中文
      </SelectItem>
    </Select>
  );
}

export default LanguageChanger;
