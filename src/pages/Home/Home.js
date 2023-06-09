import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import Slider from "~/components/Slider";
import { slider_data } from "~/data/slide";
import { policy } from "~/data/data";
import { useState } from "react";
import Moto from "~/components/Moto";
import { moto as motors } from "~/data/data";

const cx = classNames.bind(styles);
function Home() {

    return (
        <div className={cx("home")}>
            <Slider
                data={slider_data}
                timeOut={5000}
                auto={true}
                control={true}
            />
            <div className={cx("main-content")}>
                <h2 className={cx("content__title")}>
                     XE ĐANG ĐƯỢC CHO THUÊ TẠI G7 MOTORBIKE
                </h2>
                <div className={cx("wrapper-car")}>
                    {motors.map((item, index) => {
                        return (
                            <figure key={index}>
                                <Moto
                                    img={item.image}
                                    name={item.name}
                                    price={item.price}
                                    slug={item.slug}
                                />
                            </figure>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Home;
