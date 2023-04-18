import Image from 'next/image';
import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

import { CarListItem } from './components/CarListItem';
import classes from './CarList.module.scss';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import lessThan from 'public/img/lessThan.svg';
import moreThan from 'public/img/moreThan.svg';

export const CarList = ({
  advertisementList,
  mobileBackgroundColor,
  advsOnPage = 9,
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

  const handlePageChange = (value) => {
    setCurrentPage(value);
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
      <div
        className={advertisements?.length ? classes.purchased_cars_bottom : ''}
        id="purchased_cars"
      >
        <div className={classes.purchased_cars_bottom_list}>
          {!advertisements ? (
            <div
              style={{
                width: '100%',
                height: 300,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <div style={{ width: 70, height: 70 }}>
                <CircularProgressbar
                  strokeWidth={8}
                  value={90}
                  styles={buildStyles({
                    textColor: '#393e46',
                    pathColor: '#ff8a00',
                    trailColor: '#393e46',
                  })}
                />
              </div>
            </div>
          ) : (
            (!advertisements.length && (
              <div
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '20vh',
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
                  isActive={item.isActive}
                  key={i}
                  id={item.id}
                />
              );
            })
          )}
        </div>
      </div>
      {advertisements?.length !== 0 && pagination && (
        <ReactPaginate
          breakLabel="..."
          nextLabel={<Image src={moreThan} alt="next" />}
          onPageChange={({ selected }) => handlePageChange(selected)}
          pageRangeDisplayed={advsOnPage}
          pageCount={pageCount}
          previousLabel={<Image src={lessThan} alt="previous" />}
          renderOnZeroPageCount={null}
          className="pagination"
          containerClassName={'pagination_container'}
          pageClassName="pagination_page"
          activeClassName="pagination_active"
          previousClassName="item pagination_previous"
          nextClassName="item pagination_next"
          pageLabelBuilder={(page) => (
            <div className="pagination_page_link">{page}</div>
          )}
          disabledClassName="pagination_disabled"
        />
      )}
    </div>
  );
};
