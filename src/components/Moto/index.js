import classNames from 'classnames/bind';
import styles from './Moto.module.scss';
import { Link } from 'react-router-dom';

import React from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBRipple,
    MDBBtn,
} from 'mdb-react-ui-kit';
import Button from '../Button';
const cx = classNames.bind(styles);

function Moto(props) {
    console.log(props);
    return (
        <MDBContainer fluid>
            <MDBRow className='justify-content-center mb-0'>
                <MDBCol md='120' xl='100'>
                    <MDBCard className='shadow-0 border rounded-3 mt-5 mb-3'>
                        <MDBCardBody>
                            <MDBRow>
                                <MDBCol md='20' lg='7' className='mb-4 mb-lg-0'>
                                    <MDBRipple
                                        rippleColor='light'
                                        rippleTag='div'
                                        className='bg-image rounded hover-zoom hover-overlay'
                                    >
                                        <MDBCardImage
                                            src={props.img[0].url}
                                            fluid
                                            className='w-10'
                                        />
                                        
                                        <a href='#!'>
                                            <div
                                                className='mask'
                                                style={{
                                                    backgroundColor:
                                                        'rgba(251, 251, 251, 0.15)',
                                                }}
                                            ></div>
                                        </a>
                                    </MDBRipple>
                                </MDBCol>
                                <MDBCol md='5'>
                                    <h1 className={cx('name')}>{props.name}</h1>
                                    <h4>Giá : 
                                        {
                                            props.price
                                        }
                                        .000
                                        VNĐ / Ngày
                                    </h4>
                                    
                                    
                                    <div className='mb-2 text-muted small'>
                                        
                                    </div>
                                    <br/>
                                    
                                    <span>• Dịch vụ G7 MotorBikecho thuê các dòng 
                                    xe đời 2018 - 2021.</span><br/>
                                    <span>• Ưu đãi thuê trên 3 ngày</span><br/>
                                    <span>• Quy định: Thời gian thuê được tính 1 ngày là 24 tiếng, quá thời gian 6 tiếng sẽ tính thêm 1 ngày (được trể 1 tiếng).</span>
                                    <p className='text-truncate mb-4 mb-md-0'>
                                   

                                   
                                    • Thủ tục đầy đủ các giấy tờ nhanh gọn    
                                    xe đời 2018 - 2021. •Ưu đãi thuê trên 3 ngày
                                    ekfskfskfksfk;skf;sk;fks;fk
                                    </p>
                                </MDBCol>
                                <MDBCol
                                    md='60'
                                    lg='30'
                                    className='border-sm-start-none border-start'

                                >
                                    
                                    <div className='d-flex flex-column mt-4'>
                                        <Button
                                            to={`/moto/${props.slug}`}
                                            outline
                                            color='primary'
                                            size='sm'
                                            className='mt-2'
                                        >
                                            Thuê xe
                                        </Button>
                                    </div>
                                </MDBCol>
                            </MDBRow>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Moto;
