import classNames from 'classnames/bind';
import styles from './AcceptReturnMoto.module.scss';
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '~/Context/AppContext';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);
function AcceptReturnMoto() {
    const { setTypeModal, setData } = useContext(AppContext);
    const [acceptReturnMoto, setAcceptReturnMoto] = useState();
    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:5000/getAllOrder')
                .then((response) => response.json())
                .then((data) => {
                    setAcceptReturnMoto(data.data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };
        fetchData();
    }, []);

    const handleTotalOneRent = (item) => {
        if (item?.chiTiet) {
            return item.chiTiet.reduce((total, item) => {
                return total + item.giaThue;
            }, 0);
        }
        return 0;
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>Xác nhận trả xe</h1>
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>Mã đơn thuê</th>
                        <th scope='col'>Tên khách hàng</th>
                        <th scope='col'>Ngày bắt đầu</th>
                        <th scope='col'>Ngày kết thúc</th>
                        <th scope='col'>Trạng thái</th>
                        <th scope='col'>Mã nhân viên duyệt</th>
                        <th scope='col'>Giá thuê</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {acceptReturnMoto?.map((item) => {
                        return (
                            <tr key={item.id}>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.maThue}
                                    </p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item.hoTen}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.ngayBD}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.ngayKT}
                                    </p>
                                </td>
                                <td>
                                    <MDBBadge
                                        color='success'
                                        pill
                                        className='fw-bold mb-1'
                                    >
                                        {item.trangThai}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {item.maNVDuyet}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>
                                        {handleTotalOneRent(item)}.000
                                    </p>
                                </td>
                                <td>
                                    <Button
                                        to={
                                            config.routes.acceptReturnMoto +
                                            '/action'
                                        }
                                        color='link'
                                        rounded
                                        size='sm'
                                        className='fw-bold mb-1'
                                        onClick={() => {
                                            setData(item);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faPen}
                                            className={cx('actions-btn')}
                                        />
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
            </MDBTable>
        </div>
    );
}

export default AcceptReturnMoto;
