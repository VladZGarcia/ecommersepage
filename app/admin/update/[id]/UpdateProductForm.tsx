"use client";
import { updateProduct } from "@/lib/data/product-data";
import { Product } from "@/lib/interfaces/products";
import { useState, FormEvent } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface UpdateProductFormProps {
  productId: string;
  initialProductData: Product;
}

export default function UpdateProductForm({
  productId,
  initialProductData,
}: UpdateProductFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);

    // Extract form values
    const updatedData: Partial<Omit<Product, "id">> = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      brand: formData.get("brand") as string,
      price: parseFloat(formData.get("price") as string),
      stock: parseInt(formData.get("stock") as string, 10),
      category: formData.get("category") as string,
      shippingInformation: formData.get("shippingInformation") as string,
      images: (formData.get("images") as string)
        .split(",")
        .map((url) => url.trim()),
    };

    try {
      const result = await updateProduct(productId, updatedData);
      toast.success("Product updated successfully!");

      // Redirect back to admin page or refresh
      router.refresh();
      router.push("/admin");
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to update product";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto bg-white p-6 rounded shadow">
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded">
          {error}
        </div>
      )}

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block font-medium">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={initialProductData.title}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            defaultValue={initialProductData.description}
            className="w-full border p-2 rounded"
            rows={3}
            required
          />
        </div>

        <div>
          <label htmlFor="brand" className="block font-medium">
            Brand
          </label>
          <input
            type="text"
            name="brand"
            id="brand"
            defaultValue={initialProductData.brand}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block font-medium">
            Price
          </label>
          <input
            type="number"
            step="0.01"
            name="price"
            id="price"
            defaultValue={initialProductData.price}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="stock" className="block font-medium">
            Stock
          </label>
          <input
            type="number"
            name="stock"
            id="stock"
            defaultValue={initialProductData.stock}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block font-medium">
            Category
          </label>
          <input
            type="text"
            name="category"
            id="category"
            defaultValue={initialProductData.category}
            className="w-full border p-2 rounded"
            required
          />
        </div>

        <div>
          <label htmlFor="shippingInformation" className="block font-medium">
            Shipping Information
          </label>
          <textarea
            name="shippingInformation"
            id="shippingInformation"
            defaultValue={initialProductData.shippingInformation}
            className="w-full border p-2 rounded"
            rows={2}
          />
        </div>

        <div>
          <label htmlFor="images" className="block font-medium">
            Images (comma-separated URLs)
          </label>
          <input
            type="text"
            name="images"
            id="images"
            defaultValue={initialProductData.images.join(", ")}
            className="w-full border p-2 rounded"
          />
        </div>

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-blue-800"
          >
            {isLoading ? "Updating..." : "Update Product"}
          </button>

          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
