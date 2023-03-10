import { useState, useEffect } from 'react';

import { Grid, Pagination } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import styled from '@emotion/styled';

import { AdvertisementItem } from './components/AdvertisementItem';
import { getRandomKey } from '@/utils/getRandomKey';
import { CardLayout } from './components/CardLayout';

// Створюємо стилі для Pagination
const StyledPagination = styled(Pagination)(({ theme }) => ({
  '& .MuiPagination-ul': {
    display: 'flex',
    justifyContent: 'center',
  },
  '& .MuiPaginationItem-root': {
    color: '#ff8a00',
    border: `1px solid #ff8a00`,
    borderRadius: 4,
    '&.Mui-selected': {
      backgroundColor: '#ff8a00',
      color: '#fff',
      border: `1px solid #ff8a00`,
    },
    '&:hover': {
      backgroundColor: '#ff8a00',
      color: '#fff',
      border: `1px solid #ff8a00`,
    },
  },
}));

export const CarList = ({ filteredAdvList }) => {
  const [advertisements, setAdvertisements] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState(1);

  useEffect(
    () => (currentPage === 0 ? setAdvOnPage() : setCurrentPage(0)),
    [filteredAdvList]
  );
  useEffect(() => setAdvOnPage(), [currentPage]);

  const setAdvOnPage = () => {
    if (filteredAdvList) {
      const advsOnPage = 1;
      const advsLength = filteredAdvList.length;
      const visibleAdvCount = advsLength > advsOnPage ? advsOnPage : advsLength;
      const start = currentPage * visibleAdvCount;
      const end = start + visibleAdvCount;

      setPageCount(Math.ceil(advsLength / visibleAdvCount));
      setAdvertisements(filteredAdvList.slice(start, end));
    } else if (filteredAdvList === null) setAdvertisements(null);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value - 1);
  };

  return (
    <>
      <CardLayout>
        {advertisements === null ? (
          <div
            style={{
              width: '100%',
              height: '10vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <CircularProgress sx={{ color: '#ff8a00' }} />
          </div>
        ) : (
          (!advertisements.length && (
            <div
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span
                style={{
                  color: 'white',
                  fontFamily: 'Gilroy',
                  fontSize: 48,
                  textAlign: 'center',
                }}
              >
                Об&#39;яв не знайдено
              </span>
            </div>
          )) ||
          advertisements.map((item) => (
            <Grid
              spacing={25}
              item
              key={getRandomKey()}
              style={{
                width: '25%',
                height: '100%',
                minWidth: 262,
                maxWidth: 500,
              }}
            >
              <AdvertisementItem
                make={item.make}
                model={item.model}
                price={item.price}
                img={item.images[0].url}
                fuel={item.fuel}
                transmission={item.transmission}
                odometer={item.odometer}
                id={item.id}
                key={getRandomKey()}
              />
            </Grid>
          ))
        )}
      </CardLayout>
      <StyledPagination
        count={pageCount}
        page={currentPage + 1}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    </>
  );
};
