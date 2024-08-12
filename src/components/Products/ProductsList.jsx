import React, { useState } from "react";
import {
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/rtkSlice/productSlicle";
import { Spinner } from "@/components/ui/spinner";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data, error, isLoading, refetch } = useGetProductsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });
  console.log("ProductData", data);
  const [updateProduct] = useUpdateProductMutation();
  const [editingProduct, setEditingProduct] = useState(null);

  const handleEditProduct = async (product) => {
    try {
      const updatedProduct = await updateProduct({
        id: product.id,
        ...product,
      }).unwrap();
      setEditingProduct(null);
      console.log("updatedProduct", updatedProduct);
      await refetch();
      console.log("Product updated successfully");
    } catch (error) {
      console.error("Failed to update product:", error);
    }
  };

  if (error) return <div>Failed to load</div>;
  if (isLoading)
    return (
      <div className="flex items-center justify-center h-[calc(100vh-100px)] gap-3">
        <Spinner size="large" testId="loading-spinner" />
      </div>
    );

  const products = data || [];

  return (
    <div className="relative py-16">
      <div className="container mx-auto px-4">
        <div className="innermain flex w-3/4 mr-auto ml-auto mb-32 pt-10">
          <div className="flex flex-col w-full justify-center items-center relative">
            <div className="flex flex-col w-full items-start gap-4 relative">
              <div className="flex flex-col w-full items-center gap-2 relative">
                <div className="relative w-fit font-medium text-primary text-4 text-center tracking-[3.00px] whitespace-nowrap uppercase">
                  FakeStore Products
                </div>
                <div className="relative w-fit font-bold text-darkgrey text-4xl text-center leading-tight whitespace-nowrap">
                  Most Popular Products
                </div>
              </div>
            </div>
            <div className="flex align-middle items-center justify-center pt-10">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-8">
                {products.map((product, index) => (
                  // console.log("product",product),
                  <ProductCard
                    product={product}
                    index={index}
                    key={product.id}
                    onEdit={handleEditProduct}
                  />
                ))}
              </div>
            </div>
            <button
              onClick={refetch}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Refetch Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
