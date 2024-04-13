'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '@/i18nConfig';
import { cookies } from 'next/headers';
import { Select, SelectItem } from '@nextui-org/select';

function LanguageChanger({ locale }: Props) {
  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = locale || '';

  const handleChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const { value: newLocale } = evt.target;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    const expires = date.toUTCString();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      // @ts-ignore
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
      );
    }

    router.refresh();
  };

  return (
    <Select
      onChange={handleChange}
      defaultSelectedKeys={[currentLocale]}
      aria-label="language"
      className="w-28"
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
