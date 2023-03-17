import React from 'react'
import { useNavigate, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme, Dropdown, Avatar, Space, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import logo from '@/assets/img/logo.svg'
import styles from './index.module.less'
const { Header, Content, Footer } = Layout;
const BaseLayout: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const push = useNavigate()
  const logOut = (): void => {
    push('/login')
    localStorage.setItem('online', '0')
  }
  const dropdownMenu: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button type='text'>关于我们</Button>
      ),
    },
    {
      key: '2',
      label: (
        <Button type='text' onClick={logOut}>注销</Button>
      ),
    },
  ]

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.menuContent}>
          <img src={logo} alt="logo" width={245} />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['home']}
            items={new Array(15).fill(null).map((_, index) => {
              const key = index + 1;
              return {
                key,
                label: `nav ${key}`,
              };
            })}
          />
        </div>

        <div className={styles.rightButton}>
          <Dropdown menu={{ items:dropdownMenu}} placement="bottomLeft" arrow autoAdjustOverflow>
            <Space size={16} wrap>
              <Avatar style={{ backgroundColor: '#8cc63f' }} icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </div>
      </Header>
      <Content className={styles.content}>
        <Breadcrumb items={[{ title: 'home' }]} />
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <Outlet />
        </div>
      </Content>
      <Footer className={styles.footer}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout>
  )
}
export default BaseLayout