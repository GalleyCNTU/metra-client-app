//NextJS components

import classes from '../BuyingInfo.module.scss';

export const BuyingInfoItem = ({width, height, path, i, subtitle, title}) => (
  <>
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
      <div className={classes.item_buying_info_title}>
        <span>{title}</span>
      </div>
      <div className={classes.item_buying_info_text}>
        <span>{subtitle}</span>
      </div>
    </div>
    {i !== 3 && (
      <div className={classes.item_buying_info_arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 350 100"
          width="350"
          height="100"
        >
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 3 3.5, 0 7" fill="#FF8A00" />
            </marker>
            <marker
              id="endarrow"
              markerWidth="10"
              markerHeight="7"
              refX="0"
              refY="3.5"
              orient="auto"
              markerUnits="strokeWidth"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#FF8A00" />
            </marker>
          </defs>
          <line
            x1="0"
            y1="50"
            x2="240"
            y2="50"
            stroke="#FF8A00"
            strokeWidth="9"
            markerEnd="url(#arrowhead)"
          />
        </svg>
      </div>
    )}
  </>
);
