import { MENU } from '@/config/menu';
import MenuDetail from '@/components/pages/MenuDetail';
import { notFound } from 'next/navigation';
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const menu = MENU.find((m) => m.id === id);
  if (!menu) {
    notFound();
  }
  return <MenuDetail menu={menu} />;
}
