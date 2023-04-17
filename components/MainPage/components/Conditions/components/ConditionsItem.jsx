import Image from 'next/image';

import classes from '../Conditions.module.scss';

export const ConditionsItem = ({ img, title, subtitle, index, icon }) => {
  return (
    <div className={classes.container}>
      {index % 2 !== 0 ? (
        <div className={classes.conditionItem_body}>
          <div className={classes.conditionItem_unevenRow}>
            <div className={classes.conditionItem_img}>
              <Image src={img} alt="" />
            </div>
            <div className={classes.conditionItem_container}>
              <div className={classes.conditionItem_unevenIcon}>
                <Image src={icon} alt={`${icon}`} />
              </div>
              <div className={classes.conditionItem_info}>
                <span className={classes.conditionItem_info_title}>
                  {title}
                </span>
                <span className={classes.conditionItem_info_subtitle}>
                  {subtitle}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={classes.conditionItem_body}>
          <div className={classes.conditionItem_evenRow}>
            <div className={classes.conditionItem_container}>
              <div className={classes.conditionItem_evenIcon}>
                <Image src={icon} alt={`${icon}`} />
              </div>
              <div className={classes.conditionItem_info}>
                <span className={classes.conditionItem_info_title}>
                  {title}
                </span>
                <span className={classes.conditionItem_info_subtitle}>
                  {subtitle}
                </span>
              </div>
            </div>
            <div className={classes.conditionItem_img}>
              <Image src={img} alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
