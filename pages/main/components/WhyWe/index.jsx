import { WhyWeItem } from "./components/WhyWeItem";

import { items } from "./constants";

import classes from "./WhyWe.module.scss";

export const WhyWe = () => (
    <div className={classes.why_we}>
        <div className={classes.why_we_left}>
            {items.map((item, i) => (
                <WhyWeItem
                    key={i}
                    svgPath={item.svgPath}
                    title={item.title}
                    subtitle={item.subtitle}
                />
            ))}
        </div>

        <div className={classes.why_we_right}>
            <span className={classes.why_we_right_title}>
                ЧОМУ<br />МИ ВАРТІ<br />ВАШОЇ УВАГИ?
            </span>
        </div>

    </div >
)
