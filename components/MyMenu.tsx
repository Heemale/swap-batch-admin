import {Menu} from 'react-admin';
import LabelIcon from '@mui/icons-material/Label';

export const MyMenu = () => (
    <Menu>
        <Menu.DashboardItem/>
        <Menu.Item to="/gas/collect" primaryText="归集gas" leftIcon={<LabelIcon/>}/>
    </Menu>
);