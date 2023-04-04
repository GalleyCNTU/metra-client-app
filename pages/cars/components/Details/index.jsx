import Link from "next/link";
import classes from "./Details.module.scss";

export const Details = () => (
    <div className={classes.details}>
        <Link href="/">
            <button className={classes.details_button}>Детальніше</button>
        </Link>
    </div>
)