import Link from "next/link"
import { fetchProductsData } from "@/lib/data/product-data"
import { Product } from "@/lib/interfaces/products";

export default async function AdminPage() {
const response = await fetchProductsData(0, 0)
const products: Product[] = response.products || [];

    return (
        <>
            <header className="flex justify-between items-center bg-slate-50 p-8">
                <h1 className="text-3xl text-neutral-800 font-semibold">Products</h1>

                <Link href="pages/admin/create" className="text-lg bg-blue-900 rounded-full text-white px-4 py-0.5 hover:bg-blue-800">
                    Add product
                </Link>
            </header>

            <section className="px-8 pb-8 bg-slate-50 ">
                <table className="w-full border-collapse bg-white">
                    <thead>
                        <tr>
                            <th scope="col" className="border p-2 ">ID</th>
                            <th scope="col" className="border p-2">Name</th>
                            <th scope="col" className="border p-2">Stock</th>
                            <th scope="col" className="border p-2">Price</th>
                            <th scope="col" className="border p-2">Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td className="border p-2">{p.id}</td>
                                <td className="border p-2">{p.title}</td>
                                <td className="border p-2">{p.stock}</td>
                                <td className="border p-2">$ {p.price}</td>
                                <td className="border p-2 space-x-4">
                                    <Link href={`/pages/products/${p.id}`} className="bg-blue-900 rounded-full text-white px-4 py-1 hover:bg-blue-800">
                                        View Product
                                    </Link>
                                    {/* add formAction={} to buttons */}
                                    <button className=" bg-red-600 rounded-full text-white px-4 hover:bg-red-500 hover:cursor-pointer">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    )
}