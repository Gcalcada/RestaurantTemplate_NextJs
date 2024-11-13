

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
    <Container maxWidth="lg" sx={{ py: 4, color: 'text.primary' }}>
      <Breadcrumbs />
      <Box 
        sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, p: 2  }}
      >
        {/* Image Section */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            mb: { xs: 4, lg: 0 },
            width: { xs: '100%', lg: '50%' }
          }}
        >
          <Image
            width={600}
            height={400}
            src={menuItem.imageUrl}
            alt={menuItem.name}
            className="object-fill rounded-lg shadow-lg transform transition-transform hover:scale-105"
            style={{ maxHeight: 'calc(100vh - 150px)' }}
          />
        </Box>

        {/* Details Section */}
        <Stack
          spacing={3}
          sx={{ width: { xs: '100%', lg: '50%' }, pl: { lg: 4 } }}
        >
          <Typography  className='text-yellow-500' variant="h4"  gutterBottom>
            {menuItem.name}
          </Typography>
          <Typography  className='merda' variant="body1" >
            <strong>Ingredients:</strong> {menuItem.ingredients}
          </Typography>
          <Typography   variant="body1" className='merda'>
            <strong>Chef:</strong> {menuItem.chef}
          </Typography>
          <Typography  className='merda' variant="body1" >
            <strong>Cooking Time:</strong> {menuItem.cookingTime} min
          </Typography>
          <Typography variant="body1" className='merda' >
            <strong >Price:</strong> ${menuItem.price.toFixed(2)}
          </Typography>

          <ButtonToBuyNow item={{ ...menuItem }} />
        </Stack>
      </Box>

      <CommentSection />
    </Container>
  );
}

