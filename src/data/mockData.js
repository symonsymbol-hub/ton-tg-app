export const initialTasks = {
  'К сделать': [
    { 
      id: '1', 
      content: 'Разработать креативы',
      description: 'Создать 3 уникальных визуальных концепции для рекламной кампании в Telegram. Основной посыл - скорость и агрессивный рост.',
      subtasks: [
        { id: 'sub1', text: 'Проанализировать референсы конкурентов', completed: true },
        { id: 'sub2', text: 'Создать 3 черновых концепта', completed: true },
        { id: 'sub3', text: 'Подготовить финальные макеты', completed: false },
        { id: 'sub4', text: 'Адаптировать макеты под форматы Telegram Stories', completed: false },
      ],
      files: [
        { name: 'brief_campaign_alpha.pdf', size: '1.2MB' },
        { name: 'references_pack.zip', size: '15.4MB' },
      ],
      comments: [
        { author: 'Менеджер', text: 'Коллеги, начинаем работу. Дедлайн по концептам - 26.09.', date: '24.09.2025' },
      ]
    },
    { 
      id: '2', 
      content: 'Настроить таргетинг',
      description: 'Настроить целевую аудиторию для кампании "Новый продукт".',
      subtasks: [],
      files: [],
      comments: []
    }
  ],
  'В работе': [
    { 
      id: '3', 
      content: 'Запустить A/B тест',
      description: 'Провести A/B тестирование двух вариантов креативов.',
      subtasks: [],
      files: [],
      comments: []
    }
  ],
  'Готово': [
    { 
      id: '4', 
      content: 'Собрать аналитику за прошлый месяц',
      description: 'Подготовить и оформить отчет по ключевым метрикам.',
      subtasks: [],
      files: [],
      comments: []
    }
  ],
};