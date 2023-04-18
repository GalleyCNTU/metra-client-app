import classes from '../BuyingInfo.module.scss';

export const BuyingInfoItem = ({ width, height, path, subtitle, title }) => (
  <div className={classes.buying_info_column}>
    <div className={classes.item_buying_info_number}>
      <svg
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill="#FF8A00" />
      </svg>
    </div>
    <div className={classes.item_buying_info_header}>
      <span className={classes.item_buying_info_title}>{title}</span>
    </div>
    <div className={classes.item_buying_info_description}>
      <span className={classes.item_buying_info_subtitle}>{subtitle}</span>
    </div>
  </div>
);
