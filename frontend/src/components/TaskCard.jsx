import React from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button';
import { CheckCircle2, Circle } from 'lucide-react';
import { cn } from '@/lib/utils';

const TaskCard = (task, index) => {
    let isEditting = false;
  return (
    <Card className={cn(
        'pd-4 bg-gradient-card border-0 shadow-custom-md hover:shadow-custom-lg transition-all duration-200 animate-fade-in group',
        task.status === 'completed' && 'opacity-75'
    )}
        style={{animationDelay: `${index * 50}ms`}}
    >
        <div className="flex items-center gap-4">
            {/* Nút tròn */}
            <Button
            variant='ghost'
            size='icon'
            className={cn(
                'shrink-0 size-8 rounded-full transition-all duration-200',
                task.status === 'complete' ?
                'text-succes hover:text-success/80' : 
                'text-muted-foreground hover:text-primary'
            )}
            >
                {task.status === 'completed' ? (
                    <CheckCircle2 className='size-5'/>
                ) : (
                    <Circle className='size-5'/>
                ) }
            </Button>
            {/* Hiển thị hoặc chỉnh sửa tiêu đề */}
            <div className="flex-1 min-w-0"></div>
        </div>
    </Card>
  )
}

export default TaskCard