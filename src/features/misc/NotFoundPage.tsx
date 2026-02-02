import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function NotFoundPage() {
  const { t } = useTranslation();

  return (
    <div className="py-12 flex flex-col items-center text-center gap-3">
      <div className="text-3xl font-semibold">404</div>
      <div className="text-sm text-muted-foreground">{t('ui.states.notFound')}</div>
      <Button asChild>
        <Link to="/targets">{t('ui.action.backHome')}</Link>
      </Button>
    </div>
  );
}
