import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import logo from "@/assets/cardDefaultImage.jpg";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const ProductCard = ({ product, index, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProduct, setEditedProduct] = useState(product);
  // console.log(`editedProduct`, editedProduct);

  const placeholderImage = logo;
  const imageUrl = editedProduct?.image || placeholderImage;

  const handleSave = () => {
    onEdit(editedProduct);
    setIsEditing(false);
  };

  return (
    <Card
      key={index}
      className="flex max-w-[370px] py-0 border-0 news-block-one"
    >
      <div className="relative bg-white rounded-[10px] overflow-hidden !shadow-custom opacity-[0.93] inner-box">
        <CardHeader className="p-0 image-holder cursor-pointer">
          {isEditing ? (
            <input
              type="text"
              value={editedProduct?.image}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, image: e.target.value })
              }
              className="w-full h-[400px] object-cover border rounded"
            />
          ) : (
            <NavLink to={`/detail/${product?.id}`}>
              {imageUrl && (
                <img
                  className="relative w-full h-[200px] object-cover"
                  alt={product?.title}
                  src={imageUrl}
                />
              )}
            </NavLink>
          )}
        </CardHeader>
        <CardContent className="relative pl-7 pt-6 flex flex-col items-start justify-center">
          {isEditing ? (
            <>
              <input
                type="text"
                value={editedProduct?.title}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, title: e.target.value })
                }
                className="border p-2 rounded w-full"
              />
              <textarea
                value={editedProduct?.description}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    description: e.target.value,
                  })
                }
                className="border p-2 rounded w-full mt-2"
              />
              <input
                type="number"
                value={editedProduct?.price}
                onChange={(e) =>
                  setEditedProduct({
                    ...editedProduct,
                    price: parseFloat(e.target.value),
                  })
                }
                className="border p-2 rounded w-full mt-2"
              />
              <Button
                onClick={handleSave}
                className="mt-2 bg-green-500 text-white"
              >
                Save
              </Button>
              <Button
                onClick={() => setIsEditing(false)}
                className="mt-2 bg-gray-500 text-white"
              >
                Cancel
              </Button>
            </>
          ) : (
            <>
              <div className="flex align-middle items-center justify-start gap-3 py-0 w-full">
                <div
                  title={product?.category || "Unknown Category"}
                  className="text-customgrey text-[14px] md:text-[15px] lg:text-[17px] tracking-[0] leading-[32px] whitespace-nowrap overflow-hidden text-ellipsis"
                >
                  {product?.category || "Unknown Category"}
                </div>
              </div>
              <div className="inline-flex pb-1">
                <CardTitle className="cursor-pointer relative min-h-[4rem] text-start font-semibold text-grey text-[16px] md:text-[20px] lg:text-[22px] tracking-[0] leading-[32px] line-clamp-2">
                  {product?.title}
                </CardTitle>
              </div>
              <div className="flex">
                <CardDescription className="relative min-h-[4rem] text-start text-customgrey text-[14px] md:text-[15px] lg:text-[17px] tracking-[0] leading-[32px] line-clamp-2">
                  {product?.description}
                </CardDescription>
              </div>
              <Button
                onClick={() => setIsEditing(true)}
                className="mt-2 bg-blue-500 text-white"
              >
                Edit
              </Button>
            </>
          )}
        </CardContent>
        <CardFooter>
          <span className="font-bold">Price: &nbsp;</span>
          {`$${product?.price.toFixed(2)}`}
        </CardFooter>
      </div>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default ProductCard;
