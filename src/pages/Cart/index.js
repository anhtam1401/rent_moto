import { CartContext } from "~/Context/CartContext";
import { useContext } from "react";
import { Button } from "antd";
import dayjs from "dayjs";

function Cart() {
    const { cartItems } = useContext(CartContext);
    return (
        <div class="container" style={{ marginTop: "5rem" }}>
            <div class="wrapper wrapper-content animated fadeInRight">
                <div class="row">
                    <div class="col-md-9">
                        <div class="ibox">
                            {cartItems.map((cartItem) => {
                                const startDateParts =
                                    cartItem.date.startDate.split("-");
                                const endDateParts =
                                    cartItem.date.endDate.split("-");

                                const startDate = new Date(
                                    parseInt(startDateParts[2]), // Year
                                    parseInt(startDateParts[1]) - 1, // Month (Note: Month is zero-based)
                                    parseInt(startDateParts[0]) // Day
                                );

                                const endDate = new Date(
                                    parseInt(endDateParts[2]), // Year
                                    parseInt(endDateParts[1]) - 1, // Month (Note: Month is zero-based)
                                    parseInt(endDateParts[0]) // Day
                                );
                                return (
                                    <>
                                        <input
                                            type="date"
                                            id="start"
                                            name="trip-start"
                                            value={
                                                startDate
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                        />
                                        <input
                                            type="date"
                                            id="end"
                                            name="trip-start"
                                            value={
                                                endDate
                                                    .toISOString()
                                                    .split("T")[0]
                                            }
                                        />
                                        <div>
                                            {cartItem.data_moto.map((item) => (
                                                <div class="ibox-content">
                                                    <div class="table-responsive">
                                                        <table class="table shoping-cart-table">
                                                            <tbody>
                                                                <tr>
                                                                    <td width="90">
                                                                        <div
                                                                            class="cart-product-imitation"
                                                                            style={{
                                                                                paddingTop: 0,
                                                                            }}
                                                                        >
                                                                            <img
                                                                                src={
                                                                                    item.image
                                                                                }
                                                                                style={{
                                                                                    width: "100%",
                                                                                    height: "100%",
                                                                                    objectFit:
                                                                                        "cover",
                                                                                }}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td class="desc">
                                                                        <h3>
                                                                            <a
                                                                                href="#"
                                                                                class="text-navy"
                                                                            >
                                                                                {
                                                                                    item.name
                                                                                }
                                                                            </a>
                                                                        </h3>
                                                                        <p class="small">
                                                                            {
                                                                                item.description
                                                                            }
                                                                        </p>
                                                                    </td>
                                                                    <td>
                                                                        <h4>
                                                                            {
                                                                                item.price
                                                                            }
                                                                            .000
                                                                            VNĐ
                                                                        </h4>
                                                                        <div class="m-t-sm">
                                                                            |
                                                                            <a
                                                                                href="#"
                                                                                class="text-muted"
                                                                            >
                                                                                <i class="fa fa-trash"></i>{" "}
                                                                                Xóa
                                                                            </a>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="ibox">
                            <div class="ibox-title">
                                <Button>Thanh Toán</Button>
                            </div>
                            <div class="ibox-content">
                                <span>Tổng tiền</span>
                                <h2 class="font-bold">000 VND</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart;
