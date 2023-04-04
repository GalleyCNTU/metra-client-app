import { useState, useEffect } from 'react';

import CarListItem from './components/CarListItem/CarListItem';

import classes from './CarList.module.scss';

//mui
import styled from '@emotion/styled';
import { Pagination } from '@mui/material';

//utils
import { getRandomKey } from 'utils';

const StyledPagination = styled(Pagination)(({ theme }) => ({
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
  filteredAdvList,
  mobileBackgroundColor,
  pagination = false,
  title = false,
}) => {
  const [advertisements, setAdvertisements] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageCount, setPageCount] = useState();

  useEffect(
    () => (currentPage === 0 ? setAdvOnPage() : setCurrentPage(0)),
    [filteredAdvList]
  );
  useEffect(() => setAdvOnPage(), [currentPage]);

  const setAdvOnPage = () => {
    if (filteredAdvList) {
      const advsOnPage = 8;
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
      <div className={title ? classes.purchased_cars_top : `${classes.purchased_cars_top} ${classes.purchased_cars_top_disabled}`}>
        <span className={classes.purchased_cars_top_title}>
          Останні викуплені автомобілі
        </span>
      </div>
      <div className={classes.purchased_cars_bottom} id="purchased_cars">
        <div className={classes.purchased_cars_bottom_list}>
          {filteredAdvList.map((item, i) => {
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
                key={getRandomKey(item[i])}
              />
            );
          })}
        </div>
      </div>
      {pagination && (
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

// // ${item.year} р., ${
//   item.odometer !== '0'
//     ? item.odometer + ' тис.'
//     : item.odometer + ' км.'
// },
