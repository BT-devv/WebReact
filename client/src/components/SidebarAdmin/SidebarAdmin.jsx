import React from "react";
import "./SidebarAdmin.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ProductionQuantityLimitsOutlinedIcon from '@mui/icons-material/ProductionQuantityLimitsOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import BadgeOutlinedIcon from '@mui/icons-material/BadgeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
const SidebarAdmin = () => {
  return (
    <div className="sidebarAdmin">
        <div className="top">
            <span className="logo">TV Admin</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">MAIN</p>
                <li>
                    <DashboardIcon className="icon"/>
                    <span>Dashboard</span>
                </li>
                <p className="title">LISTS</p>
                <li>
                    <PersonOutlineOutlinedIcon className="icon"/>
                    <span>Users</span>
                </li>
                <li>
                    <ProductionQuantityLimitsOutlinedIcon className="icon"/>
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardOutlinedIcon className="icon"/>
                    <span>Orders</span>
                </li>
                <li>
                    <LocalShippingOutlinedIcon className="icon"/>
                    <span>Delivery</span>
                </li>
                <p className="title">USEFUL</p>
                <li>
                    <PollOutlinedIcon className="icon"/>
                    <span>Stats</span>
                </li>
                <li>
                    <NotificationsActiveOutlinedIcon className="icon"/>
                    <span>Notification</span>
                </li>
                <p className="title">SERVICE</p>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className="icon"/>
                    <span>System Health</span>
                </li>
                <li>
                    <PsychologyOutlinedIcon className="icon"/>
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsOutlinedIcon className="icon"/>
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <BadgeOutlinedIcon className="icon"/>
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutOutlinedIcon className="icon"/>
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  );
};

export default SidebarAdmin;