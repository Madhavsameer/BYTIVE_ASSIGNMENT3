import React from 'react';
import { Modal, Form, Input } from 'antd';

const UserModal = ({ visible, onOk, onCancel, user, form }) => {
  return (
    <Modal
      title="Basic Modal"
      visible={visible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Ok"
    >
      <Form
        form={form}
        layout="vertical"
        name="userForm"
        initialValues={user}
      >
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: 'Please enter the name!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: 'Please enter the email!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Phone"
          rules={[{ required: true, message: 'Please enter the phone number!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="website"
          label="Website"
          rules={[{ required: true, message: 'Please enter the website!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default UserModal;
