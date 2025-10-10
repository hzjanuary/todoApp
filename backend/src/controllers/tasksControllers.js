import Task from '../models/Task.js';

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.status(200).json(tasks);
  } catch (error) {
    console.error('Lỗi khi gọi getAllTasks', error);
    res.status(500).json({ message: 'Lỗi hệ thống' });
  }
};

export const createTask = (req, res) => {
  res.status(201).json({ message: 'Nhiệm vụ mới đã được thêm thành công.' });
};

export const updateTask = (req, res) => {
  res
    .status(200)
    .json({ message: 'Nhiệm vụ mới đã được cập nhật thành công.' });
};

export const deleteTask = (req, res) => {
  res.status(200).json({ message: 'Nhiệm vụ mới đã được xóa thành công.' });
};
