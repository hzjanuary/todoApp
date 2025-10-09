export const getAllTasks = (req, res) => {
    res.status(200).send("Bạn có 1 task mới");
};

export const createTask = (req, res) => {
    res.status(201).json({message: "Nhiệm vụ mới đã được thêm thành công."});
};

export const updateTask = (req, res) => {
    res.status(200).json({message: "Nhiệm vụ mới đã được cập nhật thành công."});
};

export const deleteTask = (req, res) => {
    res.status(200).json({message: "Nhiệm vụ mới đã được xóa thành công."});
};
