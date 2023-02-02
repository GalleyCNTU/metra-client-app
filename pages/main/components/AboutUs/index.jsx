import classes from './AboutUs.module.scss';

import { AboutUsItem } from './components/AboutUsItem';

import { items } from './constants';

export const AboutUs = () => {

    return (
        <div className={classes.about_us}>
            {
                items.map((item, i) => (
                    <AboutUsItem 
                    key={i}
                    count={i}
                    svgPath={item.svgPath}
                    title={item.title}
                    subtitle={item.subtitle}
                    />
                ))
            }
        </div>
    )
}