import ProductCard from "../cards/ProductCard";

export default function ProductsGrid() {
  const products = [
    { id: 1, image: "/product-demo4.png", price: "$29.99" },
    { id: 2, image: "/product-demo3.png", price: "$29.99" },
    { id: 3, image: "/product-demo2.png", price: "$29.99" },
    { id: 4, image: "/product-demo.png", price: "$29.99" },
    { id: 5, image: "/product-demo5.png", price: "$29.99" },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-scree mt-12">
      <div className="w-full max-w-6xl bg-gray-100 border-4 border-lime-400 p-6 text-center">
        <h2 className="text-black text-base mb-5 font-prestiege">
          a monochromatic logo of a Japanese&apos;s restaurant
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
