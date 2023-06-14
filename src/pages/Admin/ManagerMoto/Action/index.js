import classNames from 'classnames/bind';
import styles from './Action.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import {
    MDBInput,
    MDBDropdown,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';
import { AppContext } from '~/Context/AppContext';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function Action() {
    const { data, typeModal } = useContext(AppContext);
    const [maXe, setMaXe] = useState(data?.maXe ?? '');
    const [tenXe, setTenXe] = useState(data?.tenXe ?? '');
    const [hangXe, setHangXe] = useState(data?.hangXe ?? '');
    const [giaThue, setGiaThue] = useState(data?.giaThue ?? '');
    const [loaiXe, setLoaiXe] = useState(data?.loaiXe ?? '');
    const [bienSoXe, setBienSoXe] = useState(data?.bienSoXe ?? '');
    const [trangThai, setTrangThai] = useState(data?.trangThai ?? '');
    const [hinhAnh, setHinhAnh] = useState(data?.hinhAnh ?? []);
    const [multipleImages, setMultipleImages] = useState([]);
    const navigate = useNavigate();
    const formData = new FormData();

    useEffect(() => {
        setMaXe(data?.maXe ?? '');
        setTenXe(data?.tenXe ?? '');
        setHangXe(data?.hangXe ?? '');
        setGiaThue(data?.giaThue ?? '');
        setTrangThai(data?.trangThai ?? '');
        setLoaiXe(data?.loaiXe ?? '');
        setBienSoXe(data?.bienSoXe ?? '');
    }, [data]);

    // Functions to preview multiple images
    const changeMultipleFiles = (e) => {
        if (e.target.files) {
            const imageArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );
            setMultipleImages((prevImages) => prevImages.concat(imageArray));
            formData.append('images', e.target.files[0]);
        }
    };

    const removeImage = (index) => {
        setMultipleImages((prevImages) =>
            prevImages.filter((_, i) => i !== index)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        formData.append('tenXe', tenXe);
        formData.append('hangXe', hangXe);
        formData.append('bienSoXe', bienSoXe);
        formData.append('loaiXe', loaiXe);
        formData.append('giaThue', giaThue);
        formData.append('trangThai', trangThai);
        formData.append('moTa', null);

        if (typeModal !== 'ADD') {
            formData.append('maXe', maXe);
        }

        const url =
            typeModal === 'ADD'
                ? 'http://localhost:5000/addXe'
                : 'http://localhost:5000/updateXe';

        axios
            .post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            })
            .then((response) => {
                // Xử lý phản hồi thành công
                console.log('Yêu cầu POST thành công.');
                console.log('Phản hồi từ máy chủ:', response.data);
                navigate(-1);
            })
            .catch((error) => {
                // Xử lý lỗi nếu có
                console.error('Lỗi khi gửi yêu cầu POST:', error);
            });
    };

    return (
        <div>
            <h1 className={cx('header')}>
                {typeModal == 'ADD' ? 'Thêm xe' : 'Sửa thông tin xe'}
            </h1>
            <MDBInput
                className={cx('input')}
                label={'Tên xe'}
                value={tenXe}
                onChange={(e) => setTenXe(e.target.value)}
                loaiXe='text'
            />

            <MDBInput
                className={cx('input')}
                label={'Hãng xe'}
                value={hangXe}
                onChange={(e) => setHangXe(e.target.value)}
                loaiXe='text'
            />

            <MDBInput
                className={cx('input')}
                label={'giá xe'}
                value={giaThue}
                onChange={(e) => setGiaThue(e.target.value)}
                loaiXe='text'
            />

            <MDBInput
                className={cx('input')}
                label={'Biển số xe'}
                value={bienSoXe}
                onChange={(e) => setBienSoXe(e.target.value)}
                loaiXe='text'
            />
            <div className={cx('wrapper-dropdown')}>
                <MDBDropdown className={cx('dropdown')}>
                    <MDBDropdownToggle>Loại xe</MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem
                            link
                            onClick={() => {
                                setTrangThai('Hoạt động');
                            }}
                        >
                            Hoạt động
                        </MDBDropdownItem>
                        <MDBDropdownItem
                            link
                            onClick={() => {
                                setTrangThai('Ngừng hoạt động');
                            }}
                        >
                            Ngừng hoạt động
                        </MDBDropdownItem>
                        <MDBDropdownItem
                            link
                            onClick={() => {
                                setTrangThai('Mất xe');
                            }}
                        >
                            Mất xe
                        </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <div className={cx('value_dropdown')}>{trangThai}</div>
            </div>
            <div className={cx('wrapper-dropdown')}>
                <MDBDropdown className={cx('dropdown')}>
                    <MDBDropdownToggle>Loại xe</MDBDropdownToggle>
                    <MDBDropdownMenu>
                        <MDBDropdownItem
                            link
                            onClick={() => {
                                setLoaiXe('Xe côn tay');
                            }}
                        >
                            Xe côn tay
                        </MDBDropdownItem>
                        <MDBDropdownItem
                            link
                            onClick={() => {
                                setLoaiXe('Xe ga');
                            }}
                        >
                            Xe ga
                        </MDBDropdownItem>
                        <MDBDropdownItem
                            link
                            onClick={() => {
                                setLoaiXe('Xe số');
                            }}
                        >
                            Xe số
                        </MDBDropdownItem>
                    </MDBDropdownMenu>
                </MDBDropdown>
                <div className={cx('value_dropdown')}>{loaiXe}</div>
            </div>
            <div className={cx('wrapper_image')}>
                <input type='file' multiple onChange={changeMultipleFiles} />
                {multipleImages.map((image, index) => {
                    return (
                        <div
                            style={{ display: 'flex', marginTop: '10px' }}
                            key={index}
                        >
                            <img
                                className='image'
                                src={image}
                                alt=''
                                key={image}
                                width='200'
                                height='200'
                            />
                            <Button
                                style={{ marginLeft: '10px' }}
                                onClick={() => removeImage(index)}
                            >
                                <FontAwesomeIcon icon={faClose} />
                            </Button>
                        </div>
                    );
                })}
            </div>
            {typeModal == 'ADD' ? (
                <Button
                    primary
                    onClick={handleSubmit}
                    style={{ marginTop: '20px' }}
                >
                    Thêm
                </Button>
            ) : (
                <Button
                    primary
                    onClick={handleSubmit}
                    style={{ marginTop: '20px' }}
                >
                    Sửa
                </Button>
            )}
        </div>
    );
}

export default Action;
