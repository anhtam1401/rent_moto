import classNames from 'classnames/bind';
import styles from './Action.module.scss';
import { MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { AppContext } from '~/Context/AppContext';
import { useState, useEffect, useContext } from 'react';
import { moto } from '~/data/data';
import Button from '~/components/Button';
import ModalAddError from '~/components/Modal/ModalAddError';

const cx = classNames.bind(styles);
function Action() {
    const { data, typeModal, setIsModalAddErrorVisible } =
        useContext(AppContext);
    const [checkAll, setCheckAll] = useState(false);
    const [dataModal, setDataModal] = useState(data ?? []);
    const [motoFounded, setMotoFounded] = useState([]);

    console.log(motoFounded);

    const findMotoByID = (id) => {
        const foundMoto = moto.find((item) => item.id === id);
        return { ...foundMoto, checked: false };
    };

    const founded = data?.idMoto?.map((item) => {
        return findMotoByID(item);
    });

    const handleCheckAll = () => {
        const updatedCheckboxes = motoFounded.map((checkbox) => ({
            ...checkbox,
            checked: !checkAll,
        }));
        setCheckAll(!checkAll);
        setMotoFounded(updatedCheckboxes);
    };

    const handleCheckboxChange = (checkboxId) => {
        const updatedCheckboxes = motoFounded.map((checkbox) =>
            checkbox.id === checkboxId
                ? { ...checkbox, checked: !checkbox.checked }
                : checkbox
        );
        setMotoFounded(updatedCheckboxes);
        setCheckAll(updatedCheckboxes.every((checkbox) => checkbox.checked));
    };

    const totalAmount = motoFounded?.reduce((total, item) => {
        if (item.checked) {
            return total + item.price;
        }
        return total;
    }, 0);

    useEffect(() => {
        setMotoFounded(founded);
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
                        <th scope='col'>Giá thuê</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {motoFounded?.map((item) => {
                        return (
                            <tr key={item?.id}>
                                <td>
                                    <input
                                        type='checkbox'
                                        className='fw-bold mb-1'
                                        style={{
                                            cursor: 'pointer',
                                        }}
                                        checked={item.checked}
                                        onChange={() =>
                                            handleCheckboxChange(item.id)
                                        }
                                    />
                                </td>
                                <td>
                                    <p className='fw-bold mb-1'>{item?.id}</p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item?.name}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.autoMaker}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.type}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.licensePlates}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item?.price}.000
                                    </p>
                                </td>
                                <td>
                                    {dataModal.status == 'Đã duyệt' ? (
                                        <Button
                                            color='link'
                                            size='sm'
                                            small={true}
                                            className={cx(
                                                'fw-normal',
                                                'mb-1',
                                                'btn'
                                            )}
                                        >
                                            CHI TIẾT
                                        </Button>
                                    ) : (
                                        <>
                                            <MDBBtn
                                                color='link'
                                                rounded
                                                size='sm'
                                                className={cx(
                                                    'fw-normal',
                                                    'mb-1',
                                                    'btn'
                                                )}
                                            >
                                                Duyệt
                                            </MDBBtn>
                                            {typeModal != 'ACCEPT' ? (
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
                                                        setIsModalAddErrorVisible(
                                                            true
                                                        )
                                                    }
                                                >
                                                    THÊM LỖI
                                                </Button>
                                            ) : (
                                                ''
                                            )}
                                        </>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </MDBTableBody>
                {typeModal == 'ACCEPT' ? (
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <Button
                                    color='link'
                                    size='sm'
                                    small={true}
                                    className={cx('fw-normal', 'mb-1', 'btn')}
                                >
                                    Duyệt
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                ) : (
                    <tfoot>
                        <tr>
                            <td className='fw-bold mb-1'>Tổng tiền:</td>
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
                                >
                                    XÁC NHẬN
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                )}
            </MDBTable>
            <ModalAddError />
        </div>
    );
}

export default Action;
