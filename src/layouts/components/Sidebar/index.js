import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import image from '~/assets/image';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import {
    faUsers,
    faUser,
    faMotorcycle,
    faRotateLeft,
    faCheckCircle,
    faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('wrapper-fix')}>
                <div className={cx('header')}>
                    <div className={cx('logo')}>
                        <Link to={config.routes.home} className={'logo-link'}>
                            <Image src={image.logo} alt='Website logo' />
                        </Link>
                    </div>
                    <Image
                        className={cx('user-avatar')}
                        src={''}
                        alt={'avatar'}
                    />
                </div>
                <Menu>
                    <MenuItem
                        title={'Quản lí tài khoản'}
                        to={config.routes.admin + '/managerAccount'}
                    />
                    <MenuItem
                        title={'Xe'}
                        to={config.routes.admin + '/updateInfoMoto'}
                    />
                    <MenuItem
                        title={'Cá nhân'}
                        to={config.routes.admin + '/updateProfile'}
                    />
                    <MenuItem
                        title={'Xác nhận thuê xe'}
                        to={config.routes.admin + '/acceptRentMoto'}
                    />
                    <MenuItem
                        title={'Xác nhận trả xe'}
                        to={config.routes.admin + '/acceptReturnMoto'}
                    />
                </Menu>
                <div className={cx('footer')}>
                    <Button
                        leftIcon={<FontAwesomeIcon icon={faRightToBracket} />}
                    >
                        Đăng xuất
                    </Button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
