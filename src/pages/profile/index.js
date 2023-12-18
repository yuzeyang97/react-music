import React, { useState } from "react";
import { Form, Button, Input, Tabs } from '@nutui/nutui-react';
import Style from './index.module.scss'

const Login = ({ setIsLogin }) => {
  return (
    <div className={Style.loginContent}>
      <Form
        labelPosition="right"
        footer={
          <>
            <Button nativeType="submit"
              block
              type="primary"
              className={Style.submitBtn}
              onClick={() => { setIsLogin(true); localStorage.setItem('isLogin', true) }}
            >
              提交
            </Button>
          </>
        }
      >
        <Form.Item
          required
          label="账号"
          name="username"
          rules={[
            { required: true, message: '请输入用户名/手机号' },
          ]}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入用户名/手机号"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
          ]}
        >
          <Input
            type="password"
            className="nut-input-text"
            placeholder="请输入密码"
          />
        </Form.Item>
      </Form>
    </div>)
}

const Regist = ({ setIsLogin }) => {
  return (
    <div className={Style.registContent}>
      <Form
        labelPosition="right"
        footer={
          <>
            <Button
              nativeType="submit"
              block
              type="primary"
              className={Style.submitBtn}
              onClick={() => { setIsLogin(true); localStorage.setItem('isLogin', true) }}>
              提交
            </Button>
          </>
        }
      >
        <Form.Item
          required
          label="用户名"
          name="username"
          rules={[
            { required: true, message: '请输入用户名' },
          ]}
        >
          <Input
            className="nut-input-text"
            placeholder="请输入用户名"
            type="text"
          />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            { required: true, message: '请输入密码' },
          ]}
        >
          <Input
            type="password"
            className="nut-input-text"
            placeholder="请输入密码"
          />
        </Form.Item>
        <Form.Item
          label="确认密码"
          name="passwordConfirm"
          rules={[
            { required: true, message: '请确认密码' },
          ]}
        >
          <Input
            type="password"
            className="nut-input-text"
            placeholder="请确认密码"
          />
        </Form.Item>
        <Form.Item
          label="手机号"
          name="phone"
          rules={[
            { required: true, message: '请确认手机号' },
          ]}
        >
          <Input
            type="text"
            className="nut-input-text"
            placeholder="请确认手机号"
          />
        </Form.Item>
        <Form.Item
          label="验证码"
          name="identifyCode"
          rules={[
            { required: true, message: '请输入验证码' },
          ]}
        >
          <Input
            type="text"
            className="nut-input-text"
            placeholder="请输入验证码"
          />
        </Form.Item>
        <Form.Item
          label="渠道（选填）"
          name="channel"
        >
          <Input
            type="text"
            className="nut-input-text"
            placeholder="请输入来源渠道"
          />
        </Form.Item>
      </Form>
    </div>)
}

const ProfileDetail = () => <div className={Style.profileDetailContent}>
  <div className={Style.userCard}>
    <img
      src="https://himg.bdimg.com/sys/portraitn/item/public.1.77e315b7.-vcvVxWK88BUC_PpTGY5Bw"
      style={{
        width: 80,
        height: 80,
        borderRadius: '50%'
      }} />
    <div className={Style.cardRight}>
      <div>用户名: YZY</div>
      <div>用户ID: 0000001</div>
      <div>个性签名: 音乐使我快乐</div>
    </div>
  </div>
  <div className={Style.list}>
    <div className={Style.listTitle}>最近浏览</div>
    <div style={{
      marginTop: 10
    }}>
      {[{ title: 'Goldberg Variations, BWV 988 Aria', user: 'Bach/Glenn Gould' }].map(item => <div className={Style.listItem}>
        <div>{item.title}</div>
        <div style={{ fontSize: 10 }}>{item.user}</div>
      </div>)}
    </div>
  </div>
</div>

const Profile = () => {
  const [tab1value, setTab1value] = useState('0');
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  return (
    <div className={Style.profileContent}>
      {isLogin ? <ProfileDetail /> : <Tabs value={tab1value} onChange={(value) => {
        setTab1value(value)
      }} activeType="smile" className={Style.tabsWrapper} align="left">
        <Tabs.TabPane title="登陆"> {<Login setIsLogin={setIsLogin} />} </Tabs.TabPane>
        <Tabs.TabPane title="注册"> {<Regist setIsLogin={setIsLogin} />} </Tabs.TabPane>
      </Tabs>}
    </div>
  );

}

export default Profile;
