interface Props {
  locale: string;
}

interface BaseComponetProps {
  params: { locale: string; id?: string };
}

type List<T> = {
  items: T[];
  total: number;
};

type AnyObject = Record<string, any>;
