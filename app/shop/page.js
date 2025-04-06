import Link from "next/link";
import Image from "next/image";
import { Filter, ChevronDown } from "lucide-react";

const categories = [
  { id: "suits", name: "Suits" },
  { id: "shirts", name: "Shirts" },
  { id: "trousers", name: "Trousers" },
  { id: "blazers", name: "Blazers" },
  { id: "accessories", name: "Accessories" },
];

const products = [
  {
    id: 1,
    name: "Classic White Shirt",
    price: 89.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shirts",
  },
  {
    id: 2,
    name: "Slim Fit Trousers",
    price: 129.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Trousers",
  },
  {
    id: 3,
    name: "Casual Blazer",
    price: 199.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Blazers",
  },
  {
    id: 4,
    name: "Premium Suit",
    price: 349.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Suits",
  },
  {
    id: 5,
    name: "Striped Dress Shirt",
    price: 99.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Shirts",
  },
  {
    id: 6,
    name: "Wool Blend Trousers",
    price: 149.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Trousers",
  },
  {
    id: 7,
    name: "Formal Blazer",
    price: 229.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Blazers",
  },
  {
    id: 8,
    name: "Three-Piece Suit",
    price: 399.99,
    image: "/placeholder.svg?height=400&width=300",
    category: "Suits",
  },
];

export default function ShopPage() {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Shop Collection</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar / Filters */}
          <div className="w-full lg:w-1/4">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Filters</h2>
                <Filter size={20} />
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <Link
                        href={`/shop/${category.id}`}
                        className="text-gray-600 hover:text-black transition-colors"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    className="w-full p-2 border rounded-md"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    className="w-full p-2 border rounded-md"
                  />
                </div>
              </div>

              <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
                Apply Filters
              </button>
            </div>
          </div>

          {/* Product Grid */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-6">
              <p className="text-gray-600">{products.length} products</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-600">Sort by:</span>
                <button className="flex items-center gap-1 border px-3 py-1 rounded-md">
                  Featured <ChevronDown size={16} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div key={product.id} className="group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      width={300}
                      height={400}
                      className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={`/products/${product.id}`}
                        className="bg-white text-black px-4 py-2 rounded-md font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
                      >
                        Quick View
                      </Link>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500 mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-semibold text-lg mb-1">
                      {product.name}
                    </h3>
                    <p className="font-medium">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <div className="flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-50">
                  &lt;
                </button>
                <button className="w-10 h-10 flex items-center justify-center border rounded-md bg-black text-white">
                  1
                </button>
                <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-50">
                  3
                </button>
                <button className="w-10 h-10 flex items-center justify-center border rounded-md hover:bg-gray-50">
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
