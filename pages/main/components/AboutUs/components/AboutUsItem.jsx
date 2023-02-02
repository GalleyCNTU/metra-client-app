import classes from "../AboutUs.module.scss"

export const AboutUsItem = ({ svgPath, title, subtitle, count }) => (
    <div className={`${count !== 3 ? classes.about_us_bar_chart : classes.about_us_schedule} ${classes.about_us_block}`}>
        <svg fill="orange" className={classes.about_us_image} xmlns="http://www.w3.org/2000/svg" ><path d={svgPath} /></svg>
        <span className={classes.about_us_title}>
            {title}
        </span>
        <span className={classes.about_us_subtitle}>
            {subtitle}
        </span>
    </div>
)