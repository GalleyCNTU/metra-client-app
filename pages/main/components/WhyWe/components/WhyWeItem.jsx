import classes from "../WhyWe.module.scss"

export const WhyWeItem = ({ svgPath, title, subtitle }) => (
    <div className={classes.why_we_left_block}>
        <div className={classes.why_we_left_block_image}>
            <svg fill='orange' xmlns="http://www.w3.org/2000/svg" height="50" width="50"><path d={svgPath} /></svg>
        </div>

        <div className={classes.why_we_left_block_text}>
            <div className={classes.why_we_left_block_text_title}>
                {title}
            </div>

            <div className={classes.why_we_left_block_text_subtitle}>
                {subtitle}
            </div>
        </div>
    </div>
)