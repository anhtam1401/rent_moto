import {
    faGem,
    faGift,
    faHandHoldingHeart,
    faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const policy = [
    {
        id: 1,
        name: "Ưu đãi",
        description: "Nhiều ưu đãi giảm giá",
        icon: <FontAwesomeIcon icon={faGift} />,
    },
    {
        id: 2,
        name: "Thanh toán",
        description: "Thanh toán khi nhận xe",
        icon: <FontAwesomeIcon icon={faMoneyCheckDollar} />,
    },
    {
        id: 3,
        name: "Khách hàng VIP",
        description: "Ưu đãi cho khách hàng VIP",
        icon: <FontAwesomeIcon icon={faGem} />,
    },
    {
        id: 4,
        name: "Hỗ trợ",
        description: "Hỗ trợ nhiệt tình, tận tâm",
        icon: <FontAwesomeIcon icon={faHandHoldingHeart} />,
    },
];

export const account = [
        
    {
        id: 1,
        name: "Hữu Tam",
        email: "nguyenhuutam@gmail.com",
        account: "huutam",
        password: "123456abc",
        role: "Admin",
    },
    {
        id: 2,
        name: "NV1",
        email: "nv10825@gmail.com",
        account: "nhanvien01",
        password: "123456abc",
        role: "Nhân viên",
    },
    {
        id: 3,
        name: "khach",
        email: "nguyenvana@gmail.com",
        account: "Nguyễn Văn A",
        password: "123456abc",
        role: "Khách hàng",
    },
];

export const moto = [
    {
        id: 1,
        name: "Honda winner X",
        autoMaker: "Honda",
        price: 130.0,
        type: "Xe côn tay",
        status: "Sẵn sàng",
        licensePlates: "43F1-123.45",
        description: "Winner X",
        slug: "honda-winner-x",
        image: [
            {
                id: 1,
                url: "https://image.vtc.vn/resize/th/upload/2021/12/25/winnerx2021zing7-08385748.jpg",
            },
            {
                id: 2,
                url: "https://cafefcdn.com/203337114487263232/2021/12/5/2019-honda-winner-x-16386887446871901307020.jpg",
            },
        ],
    },
    {
        id: 2,
        name: "Vario 150",
        autoMaker: "Honda",
        price: 110.0,
        type: "Xe số",
        status: "Sẵn sàng",
        licensePlates: "43F1-145.12",
        description: "Vario 150",
        slug: "Vario 150",
        image: [
            {
                id: 1,
                url: "https://znews-photo.zingcdn.me/w660/Uploaded/lce_cjvcc/2020_05_29/VPT_5879_zing.jpg",
            },
            {
                id: 2,
                url: "https://imgx.gridoto.com/crop/0x0:0x0/750x500/photo/2022/01/10/modifikasi-honda-vario-150-6jpg-20220110040347.jpg",
            },
        ],
    },
    {
        id: 3,
        name: "Honda SH 150",
        autoMaker: "Honda",
        price: 180.0,
        type: "Xe ga",
        status: "Sẵn sàng",
        licensePlates: "43F1-345.45",
        description: "Honda SH 150",
        slug: "Honda SH 150",
        image: [
            {
                id: 1,
                url: "https://giaxe.2banh.vn/dataupload/products/images/1680336996-6899890309752f17d8246fdb72bdcb86.jpg",
            },
            {
                id: 2,
                url: "https://kimthanh.online/wp-content/uploads/2022/11/gia-xe-honda-sh-2023-bao-nhieu.jpg",
            },
        ],
    },
    {
        id: 4,
        name: "Honda Vision",
        autoMaker: "Honda",
        price: 165.0,
        type: "Xe ga",
        status: "Sẵn sàng",
        licensePlates: "43F1-876.45",
        description: "Honda Vision",
        slug: "Honda-Vision",
        image: [
            {
                id: 1,
                url: "https://static.automotor.vn/images/upload/2020/12/17/honda-vision.jpg",
            },
            {
                id: 2,
                url: "https://giaxe.2banh.vn/cache/dataupload/products/slides/520_368_9edfb2a5c1f01e53a8c517455d332d6f.jpg",
            },
        ],
    },
    {
        id: 5,
        name: "Honda Ware 110",
        autoMaker: "Honda",
        price: 170.0,
        type: "Xe số",
        status: "Sẵn sàng",
        licensePlates: "43F1-123.45",
        description: "Honda Ware 110",
        slug: "Honda Ware 110",
        image: [
            {
                id: 1,
                url: "https://giaxe.2banh.vn/dataupload/products/images/1669694016-058c17349b846c48cb433b0e4e4717f7.jpg",
            },
            {
                id: 2,
                url: "https://files01.danhgiaxe.com/2Pvn-ctu4_52I0jFqqqJoYqOi-k=/fit-in/1280x0/20230107/honda-wave-alpha-110-3-201701.jpg",
            },
        ],
    },
    {
        id: 6,
        name: "Honda Air Blade",
        autoMaker: "Honda",
        price: 170.0,
        type: "Xe ga",
        status: "Sẵn sàng",
        licensePlates: "43F1-123.45",
        description: "Honda Air Blade",
        slug: "Honda-Air-Blade",
        image: [
            {
                id: 1,
                url: "https://xehay.vn/uploads/images/2021/9/04/Xehay-AirBlade-27102021-3.jpg",
            },
            {
                id: 2,
                url: "https://cdn.tuoitrethudo.com.vn/stores/news_dataimages/mailinhxehay/112021/02/09/xehay-airblade-27102021-420211102093516.5507940.JPG",
            },
        ],
    },
];

export const user = {
    id: 1,
    name: "Viết Trường",
    dob: "02-08-2002",
    gender: "Nam",
    cccd: "203830627",
    phoneNumber: "0789416451",
    address: "Đà nẵng",
};

export const acceptMoto = [
    {
        id: 1,
        name: "Viết Trường",
        startDate: "07-05-2023",
        endDate: "09-05-2023",
        status: "Đã duyệt",
        price: "420.000 VNĐ",
        idMoto: [1, 2, 3],
    },
    {
        id: 2,
        name: "Đắc Toàn",
        startDate: "04-05-2023",
        endDate: "11-05-2023",
        status: "Đã duyệt",
        price: "350.000 VNĐ",
        idMoto: [1, 3, 4],
    },
    {
        id: 3,
        name: "Ngọc Trọng",
        startDate: "09-05-2023",
        endDate: "15-05-2023",
        status: "Chưa duyệt",
        price: "280.000 VNĐ",
        idMoto: [2, 3, 5],
    },
    {
        id: 4,
        name: "Hữu Tam",
        startDate: "16-05-2023",
        endDate: "27-05-2023",
        status: "Chưa duyệt",
        price: "510.000 VNĐ",
        idMoto: [1, 3, 5],
    },
];

export const acceptReturnMoto = [
    {
        id: 1,
        name: "Viết Trường",
        startDate: "07-05-2023",
        endDate: "09-05-2023",
        status: "Đang thuê",
        price: "420.000 VNĐ",
        idMoto: [1, 2, 3],
    },
    {
        id: 2,
        name: "Đắc Toàn",
        startDate: "04-05-2023",
        endDate: "11-05-2023",
        status: "Đang thuê",
        price: "350.000 VNĐ",
        idMoto: [1, 3, 4],
    },
];
