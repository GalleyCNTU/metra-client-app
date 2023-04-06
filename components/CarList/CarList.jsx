import { useState, useEffect } from 'react';

import { CarListItem } from './components/CarListItem';
import classes from './CarList.module.scss';

//mui
import styled from '@emotion/styled';
import { CircularProgress, Pagination } from '@mui/material';

export const StyledPagination = styled(Pagination)(() => ({
  '& .MuiPagination-ul': {
    display: 'flex',
    justifyContent: 'center',
  },
  '& .MuiPaginationItem-root': {
    color: 'white',
    border: `2px solid #ff8a00`,
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
  '@media screen and (max-width: 1150px)': {
    '& .MuiPaginationItem-root': {
      color: '#393E46',
    },
  },
}));

export const CarList = ({
  advertisementList,
  mobileBackgroundColor,
  advsOnPage = 8,
  pagination = false,
  title = false,
}) => {
  const [advertisements, setAdvertisements] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState();

  useEffect(
    () => (currentPage === 0 ? setAdvOnPage() : setCurrentPage(0)),
    [advertisementList]
  );
  useEffect(() => setAdvOnPage(), [currentPage]);

  const setAdvOnPage = () => {
    if (advertisementList) {
      const advsLength = advertisementList.length;
      const visibleAdvCount = advsLength > advsOnPage ? advsOnPage : advsLength;
      const start = currentPage * visibleAdvCount;
      const end = start + visibleAdvCount;

      setPageCount(Math.ceil(advsLength / visibleAdvCount));
      setAdvertisements(advertisementList.slice(start, end));
    } else if (advertisementList === null) setAdvertisements(null);
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value - 1);
    window.location.href = '#purchased_cars';
  };

  return (
    <div
      className={
        mobileBackgroundColor
          ? `${classes.purchased_cars} ${classes.purchased_cars_white}`
          : `${classes.purchased_cars} ${classes.purchased_cars_dark}`
      }
      id="purchased"
    >
      <div
        className={
          title
            ? classes.purchased_cars_top
            : `${classes.purchased_cars_top} ${classes.purchased_cars_top_disabled}`
        }
      >
        <span className={classes.purchased_cars_top_title}>
          Останні викуплені автомобілі
        </span>
      </div>
      <div className={classes.purchased_cars_bottom} id="purchased_cars">
        <div className={classes.purchased_cars_bottom_list}>
          {!advertisements ? (
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
                <span className={classes.notFound}>Об&#39;яв не знайдено</span>
              </div>
            )) ||
            advertisements.map((item, i) => {
              return (
                <CarListItem
                  images={item.images}
                  purchasedCarTitle={`${item.make} ${item.model}`}
                  transmission={item.transmission}
                  drive={item.drive}
                  fuel={item.fuel}
                  engine={item.engine}
                  odometer={item.odometer}
                  purchasedCarPrice={item.price}
                  key={i}
                  id={item.id}
                />
              );
            })
          )}
        </div>
      </div>
      {advertisements?.length !== 0 && pagination && (
        <StyledPagination
          count={pageCount}
          page={currentPage + 1}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          showFirstButton
          showLastButton
          className="customPagination"
        />
      )}
    </div>
  );
};
