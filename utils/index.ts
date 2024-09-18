import dayjs from 'dayjs';
import QueryString from 'qs';
import toast from 'react-hot-toast';

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const openNewWindow = (url: string) => {
  const link = document.createElement('a');
  link.target = '_blank';
  link.href = url;
  link.click();
};

export const formatTime = (
  value: string | number,
  format?: 'YYYY-MM-DD HH:mm:ss',
) => {
  if (value) {
    format = format || 'YYYY-MM-DD HH:mm:ss';
    return dayjs(value).format(format);
  }
};

export function serializateQuery(
  data: Record<string, any>,
  addQueryPrefix: boolean = true,
) {
  return QueryString.stringify(data, { addQueryPrefix });
}

export function serializateUrl<T extends object>(url: string, param: T) {
  const query = serializateQuery(param);
  return url + query;
}

// 复制到剪切板
export const copyToClipboard = async (
  {
    value,
    target,
  }: {
    value?: string | number;
    target?: string;
  },
  evt: React.MouseEvent,
) => {
  if (value) {
    evt.stopPropagation();
    try {
      await navigator.clipboard.writeText('' + value);
      toast.success(`${target || '文本'}复制成功`);
    } catch (err) {
      toast.error('复制失败');
    }
  }
};

export const isValidUrl = (str: string) =>
  /^https:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/\S*)?$/.test(str);
