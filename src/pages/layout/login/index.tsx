import styles from './index.module.less'
import {Button , Form , Input , Checkbox} from 'antd'
import {useNavigate} from 'react-router-dom'
function Login(){
    const push=useNavigate()
    const goHome=():void=>{
        push('/home')
    }   
    return <div className={styles.login}>
        <div className={styles.content}>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                autoComplete="off"
            >
                <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                >
                <Input />
                </Form.Item>

                <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
                >
                <Input.Password />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit" onClick={goHome}>
                    Submit
                </Button>
                </Form.Item>
            </Form>
        </div>
    </div>
}
export default Login