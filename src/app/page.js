import ProductList from '../components/ProductList';

export const metadata = {
  title: 'Clothes',
  description: 'description',
};

export default function Home() {
  return (
    <>
      <div className="mx-auto p-6">
        <ProductList />
      </div>
    </>
  );
}
