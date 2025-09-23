import React from 'react';
import { 
  Dialog, DialogTitle, DialogContent, IconButton, Typography, Box, List, ListItem, ListItemIcon, 
  Checkbox, ListItemText, Divider, TextField, Button 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.4 } },
};

function TaskDetailModal({ task, open, onClose }) {
  if (!task) return null;

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" PaperProps={{ sx: { bgcolor: 'background.default' } }}>
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h5">{task.content}</Typography>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </DialogTitle>
      
      <DialogContent dividers sx={{ borderColor: 'rgba(244, 10, 10, 0.2)' }}>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          
          <motion.div variants={itemVariants}>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              {task.description}
            </Typography>
          </motion.div>

          {task.subtasks.length > 0 && (
            <motion.div variants={itemVariants}>
              <Typography variant="h6" gutterBottom>Чек-лист</Typography>
              <List sx={{ mb: 2 }}>
                {task.subtasks.map(sub => (
                  <ListItem key={sub.id} disablePadding>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <Checkbox edge="start" checked={sub.completed} disableRipple />
                    </ListItemIcon>
                    <ListItemText primary={sub.text} sx={{ textDecoration: sub.completed ? 'line-through' : 'none' }} />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          )}

          {task.files.length > 0 && (
            <motion.div variants={itemVariants}>
              <Typography variant="h6" gutterBottom>Прикрепленные файлы</Typography>
              <List sx={{ mb: 2 }}>
                {task.files.map(file => (
                  <ListItem key={file.name} secondaryAction={<IconButton edge="end"><DownloadIcon /></IconButton>}>
                    <ListItemIcon><AttachmentIcon /></ListItemIcon>
                    <ListItemText primary={file.name} secondary={file.size} />
                  </ListItem>
                ))}
              </List>
            </motion.div>
          )}

          <motion.div variants={itemVariants}>
            <Typography variant="h6" gutterBottom>Комментарии</Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {task.comments.map((comment, index) => (
                <Box key={index}>
                  <Typography variant="subtitle2" component="span" fontWeight="bold">{comment.author}</Typography>
                  <Typography variant="caption" color="text.secondary" component="span" sx={{ ml: 1 }}>{comment.date}</Typography>
                  <Typography variant="body2">{comment.text}</Typography>
                </Box>
              ))}
              <Divider sx={{ my: 1, borderColor: 'rgba(244, 10, 10, 0.2)' }}/>
              <TextField fullWidth multiline rows={2} label="Ваш комментарий" variant="outlined" />
              <Button variant="contained" sx={{ alignSelf: 'flex-end' }}>Отправить</Button>
            </Box>
          </motion.div>

        </motion.div>
      </DialogContent>
    </Dialog>
  );
}

export default TaskDetailModal;