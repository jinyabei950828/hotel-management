import React from "react";
import './style.scss'
import {Form,Input,Button} from 'antd'

export default function Login(){
  let [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  return(
    <div className="login">
      <div className="content">
      <h2>酒店后台管理系统</h2>
      
      
      <Form
          name="basic"
          form={form}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ 
            loginId: '' ,
            loginPwd:''
          }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="账号"
            name="loginId"
            rules={[{ required: true, message: '请输入账号' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="loginPwd"
            rules={[{ required: true, message: '请输入密码' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button onClick={()=>{
              form.resetFields()
            }}style={{marginLeft:'10px'}}>
              取消
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}