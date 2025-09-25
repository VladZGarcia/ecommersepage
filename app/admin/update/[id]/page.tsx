import { fetchProductById } from "@/lib/data/product-data";
import UpdateProductForm from "./UpdateProductForm";

// Define the page parameters type explicitly
type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function UpdateProduct({ params }: PageProps) {
  // Next.js 15: params is async — await it before use
  const { id } = await params;
  const productData = await fetchProductById(id);

  return (
    <div className="p-6 bg-slate-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-neutral-800">
            Update Product
          </h1>
          <p className="text-neutral-600">Product ID: {id}</p>
        </header>

        <UpdateProductForm productId={id} initialProductData={productData} />
      </div>
    </div>
  );
}
