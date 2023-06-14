import classNames from 'classnames/bind';
import styles from './Action.module.scss';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { AppContext } from '~/Context/AppContext';
import { useState, useEffect, useContext } from 'react';
import Button from '~/components/Button';
import ModalAddError from '~/components/Modal/ModalAddError';
import axios from 'axios';

const cx = classNames.bind(styles);
function Action() {
    const { data, typeModal, setIsModalAddErrorVisible } =
        useContext(AppContext);
    const [checkAll, setCheckAll] = useState(false);
    const [dataModal, setDataModal] = useState(data || []);
    const [fouls, setFouls] = useState([]);
    console.log(dataModal);

    const handleCheckAll = () => {
        const updatedCheckboxes = dataModal?.chiTiet.map((checkbox) => ({
            ...checkbox,
            checked: !checkAll,
        }));
        setCheckAll(!checkAll);
        setDataModal((prevDataModal) => ({
            ...prevDataModal,
            chiTiet: updatedCheckboxes,
        }));
    };

    const handleCheckboxChange = (checkboxId) => {
        const updatedCheckboxes = dataModal?.chiTiet.map((checkbox) =>
            checkbox.maXe === checkboxId
                ? { ...checkbox, checked: !checkbox.checked }
                : checkbox
        );
        setDataModal((prevDataModal) => ({
            ...prevDataModal,
            chiTiet: updatedCheckboxes,
        }));

        const isAllChecked = updatedCheckboxes.every(
            (checkbox) => checkbox.checked
        );
        setCheckAll(isAllChecked);
    };

    const totalAmount = dataModal?.chiTiet?.reduce((total, item) => {
        if (item.checked) {
            return total + item.giaThue;
        }
        return total;
    }, 0);

    const handleAccept = () => {
        const selectedXe = dataModal?.chiTiet.filter((xe) => xe.checked);

        axios
            .post('http://localhost:5000/payOrder', {
                maThue: dataModal?.maThue,
                maNVNhanXe: 'NV00000001',
                xe: selectedXe,
            })
            .then((response) => {
                // Xử lý phản hồi thành công
                console.log('Yêu cầu POST thành công.');
                console.log('Phản hồi từ máy chủ:', response.data);
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error('Lỗi khi gửi yêu cầu POST:', error);
            });
    };

    useEffect(() => {
        setDataModal(data ?? []);
    }, [data]);

    return (
        <div>
            <h1>Xác nhận trả xe</h1>
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>
                            <input
                                type='checkbox'
                                style={{
                                    cursor: 'pointer',
                                }}
                                checked={checkAll}
                                onChange={handleCheckAll}
                            />
                        </th>
                        <th scope='col'>ID xe</th>
                        <th scope='col'>Tên xe</th>
                        <th scope='col'>Hãng xe</th>
                        <th scope='col'>Loại xe</th>
                        <th scope='col'>Biển số xe</th>
                        <th scope='col'>Mã nhân viên nhận xe</th>
                        <th scope='col'>Lỗi</th>
                        <th scope='col'>Giá thuê</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {dataModal?.chiTiet.map((item) => {
                        return (
                            <tr key={item?.maXe}>
                                <td>
                                    {item?.ngayTra != null ? (
                                        ''
                                    ) : (
                                        <input
                                            type='checkbox'
                                            className='fw-bold mb-1'
                                            style={{
                                                cursor: 'pointer',
                                            }}
                                            checked={item.checked}
                                            onChange={() =>
                                                handleCheckboxChange(item.maXe)
                                            }
                                        />
                                    )}
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>{item?.maXe}</p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item?.tenXe}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.hangXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.loaiXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.bienSoXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.maNVNhanXe}
                                    </p>
                                </td>
                                <td>
                                    {fouls.map((foul) => {
                                        <p className='fw-normal mb-1'>
                                            {foul?.noiDungLoi}
                                        </p>;
                                    })}
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.giaThue}.000
                                    </p>
                                </td>
                                <td>
                                    <Button
                                        color='link'
                                        size='sm'
                                        small={true}
                                        className={cx(
                                            'fw-normal',
                                            'mb-1',
                                            'btn'
                                        )}
                                        onClick={() =>
                                            setIsModalAddErrorVisible(true)
                                        }
                                    >
                                        THÊM LỖI
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
                {dataModal?.trangThai !== 'Hoàn tất' ? (
                    <tfoot>
                        <tr>
                            <td className='fw-bold mb-1'>Tổng tiền:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{totalAmount}.000</td>
                            <td>
                                <Button
                                    color='link'
                                    size='sm'
                                    small={true}
                                    className={cx('fw-normal', 'mb-1', 'btn')}
                                    onClick={handleAccept}
                                >
                                    XÁC NHẬN
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                ) : (
                    ''
                )}
            </MDBTable>
            <ModalAddError />
        </div>
    );
}

export default Action;
