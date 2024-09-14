import initTranslations from '@/app/i18n';
import { title } from '@/components/primitives';

export default async function AboutPage({
  params: { locale },
}: BaseComponetProps) {
  const { t } = await initTranslations(locale, ['common']);
  return (
    <div>
      <h1 className={title()}>{t('about')}</h1>
    </div>
  );
}
