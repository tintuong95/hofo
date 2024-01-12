import React from 'react';
import {
	BarChartOutlined,
	CloudOutlined,
	ShopOutlined,
	TeamOutlined,
	UploadOutlined,
	UserOutlined,
	VideoCameraOutlined,
} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Layout, Menu, theme} from 'antd';
import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom';
const {Header, Content, Footer, Sider} = Layout;

const items: MenuProps['items'] = [
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	BarChartOutlined,
	CloudOutlined,

	TeamOutlined,
	ShopOutlined,
].map((icon, index) => ({
	key: String(index + 1),
	icon: React.createElement(icon),
	label: `nav ${index + 1}`,
}));

const DashBoard: React.FC = () => {
	const {
		token: {colorBgContainer, borderRadiusLG},
	} = theme.useToken();

	return (
		<Layout hasSider>
			<Sider
				className='bg-transparent p-3'
				style={{
					overflow: 'auto',
					height: '100vh',
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
				}}>
				<h1 className='font-bold text-xl text-center mb-3'>VNNIX.COM</h1>
				<Menu
					
					mode='inline'
					defaultSelectedKeys={['4']}
					items={items}
				/>
			</Sider>
			<Layout style={{marginLeft: 200}}>
			
				<Content >
					<Outlet />
				</Content>
				
			</Layout>
		</Layout>
	);
};

export default DashBoard;
