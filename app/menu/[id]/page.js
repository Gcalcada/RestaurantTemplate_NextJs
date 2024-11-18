// app/[id]/page.js

import CommentSection from "../../Components/CommentSection";
import Breadcrumbs from "@/app/Components/BreadcrumbsComponent";
import { Typography, Box } from "@mui/material";
import { FaStar, FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import ButtonToBuyNow from "@/app/Components/ButtonToBuyNow";
import { menuItems } from "../../menuData";
import ImageGaleryDetail from "@/app/Components/ImageGaleryDetails"; // Image gallery component

export const metadata = {
  title: "Details",
};

export default async function MenuItemDetails({ params }) {
  const { id } = await params;
  const menuItem = menuItems.find((item) => item.id === parseInt(id));
  console.log(menuItem.id); // Fetch the menu item data using the id
  if (!menuItem) {
    return <Box sx={{ textAlign: "center", my: 4 }}>Item not found</Box>;
  }

  return (
    <>
      <Breadcrumbs />
      <section className="mx-6 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col lg:flex-row grid-rows-3 items-start gap-8 ">
        {/* Pass relevant data to ImageGaleryDetail */}
        <ImageGaleryDetail
          menuItemId={menuItem.id}
          menuItemImageUrl={menuItem.imageUrl}
          menuItemImageUrl2={menuItem.imageUrl2}
        />

        {/* Product Details */}
        <div className="w-full ">
          <Typography
            variant="h5"
            gutterBottom
            className="text-yellow-500 text-2xl font-bold">
            {menuItem.name}
          </Typography>
          <Typography variant="subtitle1" className=" mb-2">
            <strong>Price:</strong> ${menuItem.price}
          </Typography>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <Typography variant="subtitle2">
              <span className="ml-2 text-white">5 Customer Reviews</span>
            </Typography>
          </div>
          <Typography variant="subtitle2" className="merda2 mb-4">
            {menuItem.description}
          </Typography>

          {/* Additional Info */}
          <Typography variant="subtitle2">
            <strong>Ingredients:</strong> {menuItem.ingredients}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Chef:</strong> {menuItem.chef}
          </Typography>
          <Typography variant="subtitle2">
            <strong>Cooking Time:</strong> {menuItem.cookingTime} min
          </Typography>

          {/* Add to Cart / Buy Now Button */}
          <ButtonToBuyNow item={{ ...menuItem }} />

          {/* Product Info */}
          <div className="mt-8 border-t pt-4">
            <p>
              <span className="font-semibold">Category</span>:{" "}
            </p>
          </div>

          {/* Social Share */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="">
              <FaFacebookF />
            </a>
            <a href="#" className="">
              <FaLinkedinIn />
            </a>
            <a href="#" className="">
              <FaTwitter />
            </a>
          </div>
        </div>
      </section>

      <div className="mx-6 sm:mx-8 md:mx-16 lg:mx-24 mt-8">
        <CommentSection productId={menuItem.id} />
      </div>
    </>
  );
}
