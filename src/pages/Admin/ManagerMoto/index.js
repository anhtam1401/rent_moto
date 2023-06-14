import classNames from 'classnames/bind';
import styles from './ManagerMoto.module.scss';
import {
    MDBBadge,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect, useContext } from 'react';
import { AppContext } from '~/Context/AppContext';
import Button from '~/components/Button';
import config from '~/config';

const cx = classNames.bind(styles);

const TYPE_PAGE = {
    add: 'ADD',
    update: 'UPDATE',
};

function ManagerMoto() {
    const [motoData, setMotoData] = useState();
    const { setTypeModal, setData } = useContext(AppContext);

    useEffect(() => {
        const fetchData = () => {
            fetch('http://localhost:5000/getAllXe')
                .then((response) => response.json())
                .then((data) => {
                    setMotoData(data.data);
                    console.log(data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };
        fetchData();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('header')}>Cập nhật thông tin xe</h1>
            <Button
                primary
                to={config.routes.updateInfoMoto + '/action'}
                onClick={() => {
                    setTypeModal(TYPE_PAGE.add);
                    setData(undefined);
                }}
                className={cx('button_showModal')}
            >
                <FontAwesomeIcon icon={faPlus} />
            </Button>
            <MDBTable align='middle' className={cx('table')}>
                <MDBTableHead>
                    <tr>
                        <th scope='col'>ID xe</th>
                        <th scope='col'>Tên xe</th>
                        <th scope='col'>Hãng xe</th>
                        <th scope='col'>Giá xe</th>
                        <th scope='col'>Loại xe</th>
                        <th scope='col'>Trạng thái</th>
                        <th scope='col'>Biển số xe</th>
                        <th scope='col'>Mô tả</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {motoData?.map((item) => {
                        return (
                            <tr key={item.maXe}>
                                <td>
                                    <p className='fw-bold mb-1'>{item.maXe}</p>
                                </td>
                                <td>
                                    <div className='ms-3'>
                                        <p className='fw-bold mb-1'>
                                            {item.tenXe}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.hangXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.giaThue}.000
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.loaiXe}
                                    </p>
                                </td>
                                <td>
                                    {item.trangThai == 'Sẵn sàng' ? (
                                        <MDBBadge
                                            color='success'
                                            pill
                                            className='fw-normal mb-1'
                                        >
                                            {item.trangThai}
                                        </MDBBadge>
                                    ) : (
                                        <MDBBadge
                                            color='warning'
                                            pill
                                            className='fw-normal mb-1'
                                        >
                                            {item.trangThai}
                                        </MDBBadge>
                                    )}
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.bienSoXe}
                                    </p>
                                </td>
                                <td>
                                    <p className='fw-normal mb-1'>
                                        {item.moTa}
                                    </p>
                                </td>
                                <td>
                                    <Button
                                        to={
                                            config.routes.updateInfoMoto +
                                            '/action'
                                        }
                                        text
                                        color='link'
                                        rounded
                                        size='sm'
                                        onClick={() => {
                                            setTypeModal(TYPE_PAGE.update);
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

export default ManagerMoto;
