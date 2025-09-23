import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import KanbanCard from './KanbanCard';

// Прокидываем onClick дальше в KanbanCard
export function SortableKanbanCard({ id, content, onClick }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <KanbanCard
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      content={content}
      onClick={onClick} // Передаем onClick
    />
  );
}