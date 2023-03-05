import classes from "./CarList.module.scss"

import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { AdvertisementItem } from "./components/AdvertisementItem";


export const CarList = ({ advertisementList }) => {

    console.log(advertisementList)

    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                minHeight:"862px",
                backgroundColor: "#1E1E1E",
                padding: "60px",
                flexWrap: "wrap"
            }}
        >
            <Grid
                container
                spacing={{ xs: 2, md: 2 }}
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                flexWrap="wrap"
            >
                {/* <Grid item style={{ width: "33%", height: "100%" }}>
                    <AdvertisementItem>xs=8</AdvertisementItem>
                </Grid> */}
                
                {advertisementList.map((item) => (
                    <Grid item style={{ width: "33%", height: "100%", minWidth: 262, maxWidth: 500 }}>
                        <AdvertisementItem
                        make={item.make}
                        model={item.model}
                        price={item.price}
                        img={item.images[0].url}
                        fuel={item.fuel}
                        transmission={item.transmission}
                        odometer={item.odometer}
                        />
                    </Grid>
                ))}
                {advertisementList.map((item) => (
                    <Grid item style={{ width: "33%", height: "100%", minWidth: 262, maxWidth: 500 }}>
                        <AdvertisementItem
                        make={item.make}
                        model={item.model}
                        price={item.price}
                        img={item.images[0].url}
                        fuel={item.fuel}
                        transmission={item.transmission}
                        odometer={item.odometer}
                        id={item.id}
                        />
                    </Grid>
                ))}
            </Grid>
            {/* {advertisementList.length > 0 ? (
                    advertisementList.map((advertisement) => (
                        <AdvertisementItem
                            key={advertisement.id}
                            advertisement={advertisement}
                            loading={loading}
                        />
                    ))
                ) : (
                    <Box
                        sx={{
                            mt: 20,
                            p: 2,
                            textAlign: "center",
                        }}
                    >
                        <Typography variant="body2" color="textSecondary">
                            Активних оголошень немає
                        </Typography>
                    </Box>
                )} */}
        </Box>
    )
}