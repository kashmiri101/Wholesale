import SmoothScroll from './SmoothScroll';

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SmoothScroll />
      {children}
    </>
  );
}