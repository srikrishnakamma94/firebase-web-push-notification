import Model from '../models/model';
import { sendNotificationToClient } from '../notify';

const messagesModel = new Model('messages');

export const messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select('name, message');
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};

export const addMessage = async (req, res) => {
  const { name, message } = req.body;
  const columns = 'name, message';
  const values = `'${name}', '${message}'`;
  try {
    const data = await messagesModel.insertWithReturn(columns, values);
    const tokens = [
      'fR5gdZbwb1wjZj8iisldT6:APA91bHxZd2asbPVj068GT9JNl9xXdnTvfwnoZ_ljFknRRAilFMqzCYdTk5_E5eOQ-h6ZCLkBKQ41WIuq35ZM1cDhzbTqukJmOYzPAry_p9hnSpvzcNqiDL4JiCM2qW37u_KcSYNnOuL'
    ];
    const notificationData = {
      title: 'New message',
      body: message,
    };
    sendNotificationToClient(tokens, notificationData);
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
