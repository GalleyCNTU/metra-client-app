import classes from '../WhyWe.module.scss';

export const WhyWeItem = ({ title, subtitle }) => (
  <div className={classes.why_we_item_block}>
    <div className={classes.why_we_item_info}>
      <div className={classes.why_we_item_header}>
        <span className={classes.why_we_item_title}>{title}</span>
        <span
          className={`${classes.why_we_item_title} ${classes.why_we_item_plus}`}
        >
          +
        </span>
      </div>
      <span className={classes.why_we_item_subtitle}>{subtitle}</span>
    </div>
  </div>
);
