import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
const StoreLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default StoreLayout;
