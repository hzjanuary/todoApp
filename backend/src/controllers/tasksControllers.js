export const getAllTasks = (res, req) => {
    res.status(200).send("Bạn có 1 task mới")
};

export const createTasks = (req, res) => {
    res.status(201).json({message: "Nhiệm vụ mới đã được thêm thành công."});
};

export const updateTasks = (req, res) => {
    res.status(200).json({message: "Nhiệm vụ mới đã được cập nhật thành công."});
};

export const deleteTasks = (req, res) => {
    res.status(200).json({message: "Nhiệm vụ mới đã được xóa thành công."});
};
