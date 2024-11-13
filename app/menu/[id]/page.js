

import { menuItems } from '../../menuData';
import CommentSection from '../../Components/CommentSection';
import Breadcrumbs from '@/app/Components/BreadcrumbsComponent';
import Image from 'next/image';
import ButtonToBuyNow from '@/app/Components/ButtonToBuyNow';
import { Container, Typography, Box, Button, TextField, Stack,  } from '@mui/material';

export const metadata = {
  title: "Details",
};

export default async function MenuItemDetails({ params }) {
  const { id } = await params;
  const menuItem = menuItems.find(item => item.id === parseInt(id));

  if (!menuItem) {
    return <Box sx={{ textAlign: 'center', my: 4 }}>Item not found</Box>;
  }



  return (
    <>
    <Breadcrumbs />
    <section>
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Image Section */}
        <div className="flex">
          <Image
            width={700}
            height={600}
            src={menuItem.imageUrl}
            alt={menuItem.name}
            className="object-fill rounded-lg shadow-md transform transition-transform hover:scale-105"
          
          />
        </div>
        
        {/* Details Section */}
        <div className="flex flex-col gap-4 sm:w-1/2">
          <Typography className="text-yellow-500" variant="h4" gutterBottom>
            {menuItem.name}
          </Typography>
          <Typography variant="body1">
            <strong>Ingredients:</strong> {menuItem.ingredients}
          </Typography>
          <Typography variant="body1">
            <strong>Chef:</strong> {menuItem.chef}
          </Typography>
          <Typography variant="body1">
            <strong>Cooking Time:</strong> {menuItem.cookingTime} min
          </Typography>
          <Typography variant="body1">
            <strong>Price:</strong> ${menuItem.price.toFixed(2)}
          </Typography>
          <ButtonToBuyNow item={{ ...menuItem }} />
        </div>
      </div>
      
      <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-8">
        <CommentSection />
      </div>
    </section>
  </>
  );
  
}

