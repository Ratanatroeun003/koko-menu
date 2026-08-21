import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
const StoreLayout = ({ children }: LayoutProps<'/'>) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default StoreLayout;
