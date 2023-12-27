// https://github.com/yagop/node-telegram-bot-api/issues/319#issuecomment-324963294
// Fixes an error with Promise cancellation
process.env.NTBA_FIX_319 = 'test'

// Подключаем библиотеку Telegram Bot API
const TelegramBot = require('node-telegram-bot-api')

// Массив случайных вопросов
const questions = [
  'Как я могу признать, что прокрастинация — это проблема, требующая внимания?',
  'В чем заключается моя личная ответственность за прокрастинацию?',
  'Каковы мои основные страхи и сомнения, способствующие прокрастинации?',
  'Какие привычки и убеждения подпитывают мою склонность к откладыванию дел?',
  'Как я могу использовать медитацию для борьбы с прокрастинацией?',
  'Как мне принять свои ошибки в прошлом и двигаться вперед?',
  'Какие конкретные действия я могу предпринять, чтобы бороться с прокрастинацией?',
  'Как мне оставаться честным с собой относительно моих успехов и неудач в этой борьбе?',
  'Как я могу искать поддержку и руководство для преодоления прокрастинации?',
  'Как я могу использовать свои успехи для помощи другим в борьбе с прокрастинацией?',
  'Как я могу улучшить свои отношения с окружающими, преодолевая прокрастинацию?',
  'Какие духовные практики могут помочь мне в преодолении прокрастинации?',
  'Как я могу оставаться смиренным и открытым для изменений в процессе борьбы с прокрастинацией?',
  'Как я могу применить принципы 12 шагов к другим областям моей жизни?',
  'Как мне поддерживать свои успехи и продолжать расти в преодолении прокрастинации?',
  'Истинная природа быть прокрастинатором, или же это духовная болезнь меня так накручивает?',
  'ВС может даровать нам Силы не прокрастинировать сегодня?',
  'Могли бы мы просить его Волю дать нам здравомыслия не откладывать дела, а делать их вовремя?',
  // Дополнительные вопросы
]

const ideasWithEmojis = [
  '📝 Составить план дня',
  '🧘‍♂️ Медитация 10 минут',
  '🏃‍♀️ Короткая пробежка',
  '📚 Чтение книги на 20 минут',
  '🎨 Рисование или занятия художественным творчеством',
  '📔 Ведение дневника',
  '🍳 Готовка нового блюда',
  '🧩 Сборка пазла',
  '🌱 Уход за комнатными растениями',
  '🎹 Игра на музыкальном инструменте',
  '🚶‍♂️ Прогулка на свежем воздухе',
  '🧹 Уборка в комнате',
  '💪 Короткая тренировка',
  '💌 Написание письма другу',
  '📸 Фотографирование',
  '📅 Планирование будущих мероприятий',
  '🧶 Вязание или рукоделие',
  '🎮 Игра в обучающие игры',
  '💼 Изучение новых навыков онлайн',
  '🌟 Установка и достижение маленьких целей',
  '🎭 Посещение культурных мероприятий',
  '🚴‍♀️ Велосипедная прогулка',
  '🥗 Приготовление здорового снэка',
  '🧘‍♀️ Йога',
  '🎲 Игры в настольные игры',
  '📖 Изучение иностранного языка',
  '🌳 Посадка растений или уход за садом',
  '🧩 Головоломки',
  '🎥 Смотреть обучающие видео',
  '👥 Встреча с друзьями',
  '🛠 Мелкий ремонт',
  '🎤 Пение или караоке',
  '🎨 Изучение новых видов искусства',
  '📚 Чтение профессиональной литературы',
  '🛒 Планирование покупок',
  '🧼 Создание ручной работы',
  '🐶 Прогулка с питомцем',
  '🌐 Изучение новых тем в интернете',
  '🎥 Создание видео или блога',
  '🌍 Изучение географии или истории',
  '🚀 Разработка персонального проекта',
  '📈 Изучение финансов и инвестиций',
  '🎵 Слушать образовательные подкасты',
  '🌌 Наблюдение за звездами',
  '🏞 Походы и пикники',
  '🛍 Посещение выставок и ярмарок',
  '📱 Организация цифровых файлов',
  '🎥 Посещение кинотеатра на обучающие сессии',
  '🧠 Игры для развития памяти и внимания',
  '🌐 Сетевое волонтерство или участие в онлайн-проектах',
  // Дополнительные идеи
]

const setMood = [
  '🌟 Сегодня я сделаю первый шаг, несмотря на сомнения и страх.',
  '🎯 Я выбираю сосредоточенность вместо отвлечения.',
  '⏰ Каждая минута сегодня – это шанс изменить жизнь к лучшему.',
  '💪 Я достоин успеха и сегодня буду работать над своими целями.',
  '🌱 Моя способность преодолевать прокрастинацию растет с каждым днем.',
  '🚀 Я освобождаюсь от перфекционизма и действую, делая лучшее на данный момент.',
  '🛤 Сегодня я буду прогрессировать, даже если это будет маленький шаг.',
  '🎉 Я признаю свои достижения и ценю свои усилия.',
  '🧘‍♂️ Я нахожу время для покоя и восстановления энергии.',
  '🤝 Я открыт к помощи и поддержке от других.',
  '🔥 "Сегодня я использую свое время эффективно и с удовольствием."',
  '🌈 "Я нахожу радость и вдохновение в каждой задаче, которую делаю сегодня."',
  '🌟 "Я ценю каждый шаг вперед, каким бы маленьким он ни был."',
  '💡 "Я открыт для новых идей и способов преодоления прокрастинации."',
  '🙌 "Я верю в себя и свою способность преодолеть любые препятствия."',
]

// Экспортируем функцию как асинхронную
module.exports = async (request, response) => {
  try {
    // Создаем новый экземпляр бота с токеном от BotFather
    const bot = new TelegramBot('6662031438:AAGGh0ZaoFbyDhrlUbr5dotx23QQDOySrUY')

    // Получаем тело POST-запроса от Telegram
    const { body } = request

    // Проверяем, что это сообщение
    if (body.message) {
      const {
        chat: { id },
        text,
      } = body.message

      // Обработка команды /q для случайного вопроса
      if (text === '/q') {
        const randomIndex = Math.floor(Math.random() * questions.length)
        const question = questions[randomIndex]
        // Форматирование сообщения с жирным шрифтом для вопроса
        const message = `🎁 Рандомая тема: \n\n*"${question}"*`
        // Отправляем сообщение обратно
        await bot.sendMessage(id, message, { parse_mode: 'Markdown' })
      }
      if (text === '/idea') {
        const randomIndex = Math.floor(Math.random() * ideasWithEmojis.length)
        const idea = ideasWithEmojis[randomIndex]
        // Форматирование сообщения с жирным шрифтом для вопроса
        const message = `Для вас нашлась идея: \n\n*${idea}*`
        // Отправляем сообщение обратно
        await bot.sendMessage(id, message, { parse_mode: 'Markdown' })
      }
       if (text === '/set') {
         const randomIndex = Math.floor(Math.random() * setMood.length)
         const mood = setMood[randomIndex]
         // Форматирование сообщения с жирным шрифтом для вопроса
         const message = `Ваша установка на день: \n\n*${mood}*`
         // Отправляем сообщение обратно
         await bot.sendMessage(id, message, { parse_mode: 'Markdown' })
       }
    }
  } catch (error) {
    // Логируем ошибки в консоль Vercel
    console.error('Error sending message')
    console.log(error.toString())
  }

  // Подтверждаем получение сообщения Telegram
  response.send('OK')
}
