import React, { useState } from 'react';
import { Card, Button, Form } from 'antd';
import { HeartOutlined, HeartFilled, EditOutlined, DeleteFilled, MailOutlined, PhoneOutlined, GlobalOutlined } from '@ant-design/icons';
import UserModal from './UserModal';

const { Meta } = Card;

const UserCard = ({ user, onUpdate, onDelete }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue(user);
  };

  const handleOk = () => {
    form.validateFields()
      .then(values => {
        onUpdate(user._id, values);
        setIsModalVisible(false);
      })
      .catch(info => {
        console.log('Validate Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const toggleLike = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <>
      <Card
        className="card-container"
        cover={<img alt="User Avatar" src={`https://api.dicebear.com/9.x/personas/svg?seed=${user.username}`} />}
        actions={[
          <Button type="link" icon={isLiked ? <HeartFilled style={{ color: 'red' }} /> : <HeartOutlined style={{ color: 'red' }} />} onClick={toggleLike} />,
          <Button type="link" icon={<EditOutlined className='icon' />} onClick={showModal} />,
          <Button type="link" icon={<DeleteFilled className='icon' />} onClick={() => onDelete(user._id)} />,
        ]}
      >
        <Meta
          title={user.name}
          description={(
            <div>
              <p><MailOutlined style={{ marginRight: '8px', color: '#595959' }} />{user.email}</p>
              <p><PhoneOutlined style={{ marginRight: '8px', color: '#595959' }} />{user.phone}</p>
              <p><GlobalOutlined style={{ marginRight: '8px', color: '#595959' }} />http://{user.website}</p>
            </div>
          )}
        />
      </Card>
      <UserModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        user={user}
        form={form}
      />
    </>
  );
};

export default UserCard;
