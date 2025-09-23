import React, { useState } from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { motion } from 'framer-motion';
import { SortableKanbanCard } from '../components/SortableKanbanCard';
import TaskDetailModal from '../components/TaskDetailModal'; // Импортируем модальное окно
import { initialTasks } from '../data/mockData'; // Импортируем новые данные

const containerVariants = { /* ... */ };
const itemVariants = { /* ... */ };

function Projects() {
  const [tasks, setTasks] = useState(initialTasks);
  
  // Состояние для модального окна
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleDragEnd = () => {};

  // Функция для открытия модального окна
  const handleOpenTask = (task) => {
    setSelectedTask(task);
    setModalOpen(true);
  };

  // Функция для закрытия модального окна
  const handleCloseTask = () => {
    setModalOpen(false);
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={containerVariants}>
        <motion.div variants={itemVariants}>
          <Typography variant="h4" gutterBottom>Проекты</Typography>
        </motion.div>

        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <Box 
            sx={{ 
              display: 'flex', 
              gap: 3,
              flexDirection: { xs: 'column', md: 'row' },
              overflowX: { xs: 'hidden', md: 'auto' },
              pb: 2,
            }}
          >
            {Object.keys(tasks).map((columnId) => (
              <motion.div variants={itemVariants} key={columnId}>
                <Paper 
                  sx={{ 
                    p: 2,
                    bgcolor: 'rgba(10, 10, 10, 0.7)',
                    width: { xs: '100%', md: 320 },
                    flexShrink: 0,
                  }}
                >
                  <Typography variant="h6" sx={{ mb: 2, pl: 1, borderLeft: '3px solid', borderColor: 'primary.main' }}>
                    {columnId}
                  </Typography>
                  <SortableContext items={tasks[columnId]} strategy={verticalListSortingStrategy}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                      {tasks[columnId].map((task) => (
                        <SortableKanbanCard 
                          key={task.id} 
                          id={task.id} 
                          content={task.content} 
                          // При клике вызываем функцию открытия модального окна с данными этой задачи
                          onClick={() => handleOpenTask(task)}
                        />
                      ))}
                    </Box>
                  </SortableContext>
                </Paper>
              </motion.div>
            ))}
          </Box>
        </DndContext>
      </motion.div>

      {/* Рендерим модальное окно */}
      <TaskDetailModal open={modalOpen} onClose={handleCloseTask} task={selectedTask} />
    </>
  );
}

export default Projects;