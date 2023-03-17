import styles from './index.module.less'
import { Button, Form, Input, Checkbox , Row , Col } from 'antd'
import { useNavigate } from 'react-router-dom'
function Login() {
    const push = useNavigate()
    const goHome = (): void => {
        push('/home')
        localStorage.setItem('online','1')
    }
    return <div className={styles.login}>
        <div className={styles.content}>
            <div className={styles.left}>
            </div>
            <div className={styles.right}>
                <Form
                    name="basic"
                    style={{ width:'30vw'}}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    labelCol={{ span: 5 }}
                    wrapperCol={{ span: 18 }}
                >
                    <Form.Item
                        label="用户名"
                        name="用户名"
                        rules={[{ required: true, message: '请输入用户名' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="密码"
                        rules={[{ required: true, message: '请输入密码' }]}
                    >
                        <Input.Password className={styles.LoginPass} />
                    </Form.Item>
                    <Form.Item label="验证码">
                        <Row>
                            <Col span={12}>
                                <Form.Item
                                    name="captcha"
                                    noStyle
                                    rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Button>验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item name="记住密码" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>记住密码</Checkbox>
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                        <Button type="primary" htmlType="submit" onClick={goHome} className={styles.Loginbtn}>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    </div>
}
export default Login