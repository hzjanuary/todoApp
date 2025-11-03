import AddTask from '@/components/AddTask';
import DateTimeFilter from '@/components/DateTimeFilter';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import StatsAndFilter from '@/components/StatsAndFilter';
import TaskList from '@/components/TaskList';
import TaskListPagination from '@/components/TaskListPagination';
import React from 'react';

const HomePage = () => {
  return (
    <div className="container pt-8 mx-auto">
      <div className="w-full max-w-2xl -6 mx-auto space-y-6">
        {/* Đầu trang */}
        <Header />
        {/* Tạo nhiệm vụ */}
        <AddTask />
        {/* Thống kê và bộ lọc */}
        <StatsAndFilter />
        {/* Danh sách công việc*/}
        <TaskList />
        {/* Phân Trang và lọc theo Date*/}
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <TaskListPagination />
          <DateTimeFilter />
        </div>
        {/* Chân trang*/}
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
