const { test, expect } = require('@playwright/test'); //импортирование модулей

test('GET request', async ({ request }) => {
    // Выполнение GET запроса
    const response = await request.get('https://dummyjson.com/products');

    // Проверка статус-кода
    expect(response.ok()).toBeTruthy(); //проверка что ответ вернул ок
    expect(response.status()).toBe(200); // 200 

    // Получение тела ответа в формате JSON
    const responseBody = await response.json();
    console.log(responseBody);


    // Проверка наличия массива 'data'
    expect(responseBody).toHaveProperty('products'); //true 
    expect(Array.isArray(responseBody.products)).toBeTruthy();  // это выражение проверяет, является ли responseBody.data массивом. Метод Array.isArray() возвращает true, если переданное значение — массив, и false в противном случае.
    expect(responseBody).toHaveProperty('total'); //true 
    expect(typeof responseBody.total).toBe('number'); // Проверка, что 'total' — это число
    expect(responseBody.products.length).toBeGreaterThan(0); // Проверка, что список продуктов не пустой

    /*//Доступ к 4 элементу массива 'data'
    let thirdProduct = responseBody.products[2];// Индекс 2 для третьего продукта
    console.log('Third product:', thirdProduct);

    const fourthProduct = responseBody.products[3]; // Индекс 3 для четвёртого продукта
    expect(fourthProduct).toHaveProperty('rating');
    console.log(`Рейтинг четвёртого продукта: ${fourthProduct.rating}`);

    expect(fourthProduct.rating).toBe(2.51);

    thirdProduct.images.forEach((image, index) => {         // make it through the FOR
        console.log(`Изображение ${index + 1}: ${image}`);
        expect(typeof image).toBe('string'); // Проверка, что изображение — строка
        expect(image.endsWith('.png')).toBeTruthy(); // Проверка, что изображение имеет формат .png
    });
    // Заменим на цикл for:
for (let index = 0; index < thirdProduct.images.length; index++) {
    const image = thirdProduct.images[index];
    console.log(`Изображение ${index + 1}: ${image}`);
    expect(typeof image).toBe('string'); // Проверка, что изображение — строка
    expect(image.endsWith('.png')).toBeTruthy(); // Проверка, что изображение имеет формат .png
}

    let prices = [];
    for (let i = 0; i < responseBody.products.length; i++) {
        const price = responseBody.products[i].price; // Доступ к цене продукта
        prices.push(price); // Добавление цены в массив
    }
    console.log('Цены продуктов:', prices);

    // Проверка цен через цикл for
    for (let i = 0; i < prices.length; i++) {
        console.log(`Цена продукта ${i + 1}: ${prices[i]}`);
        expect(typeof prices[i]).toBe('number'); // Проверка, что цена — число
        expect(prices[i]).toBeGreaterThan(0); // Проверка, что цена больше нуля
    }
    // Вычисление суммы всех цен
    const totalSum = prices.reduce((sum, price) => sum + price, 0);
    const totalSumFormatted = totalSum.toFixed(2); // Округление суммы до 2 знаков

    console.log(`Сумма всех цен продуктов: ${totalSumFormatted}`);
    
    // Среднее значение
    const average = sum / idsArr.length;
    console.log('Average ID:', average);

    // Максимум
    const max = Math.max(...idsArr);
    console.log('Max ID:', max);

    // Минимум
    const min = Math.min(...idsArr);
    console.log('Min ID:', min);

    // Фильтрация: только ID > 150
    const filtered = idsArr.filter(id => id > 150);
    console.log('IDs > 150:', filtered);

    // Уникальность ID
    const uniqueIds = new Set(idsArr);
    expect(uniqueIds.size).toBe(idsArr.length); // Проверка на уникальность
    // const idsArr = responseBody.map(joke => joke.id);
    const sum = idsArr.reduce((acc, val) => acc + val, 0);
    const average = sum / idsArr.length;
    const max = Math.max(...idsArr);
    const min = Math.min(...idsArr);
    const filtered = idsArr.filter(id => id > 150);
    const uniqueIds = new Set(idsArr);

    // Проверка уникальности
    expect(uniqueIds.size).toBe(idsArr.length);

    // Красивый вывод
    console.table([
        { Metric: 'Sum of IDs', Value: sum },
        { Metric: 'Average ID', Value: average },
        { Metric: 'Max ID', Value: max },
        { Metric: 'Min ID', Value: min },
        { Metric: 'IDs > 150', Value: filtered.join(', ') },
        { Metric: 'Unique IDs', Value: `${uniqueIds.size} / ${idsArr.length}` },
    ]);
    Пример вывода:
    ┌─────────┬────────────────┬────────────────────┐
│ (index) │     Metric     │       Value        │
├─────────┼────────────────┼────────────────────┤
│    0    │  'Sum of IDs'  │        1683        │
│    1    │ 'Average ID'   │       168.3        │
│    2    │   'Max ID'     │        245         │
│    3    │   'Min ID'     │        102         │
│    4    │  'IDs > 150'   │ '162,168,245,...'  │
│    5    │ 'Unique IDs'   │   '10 / 10'        │
└─────────┴────────────────┴────────────────────┘
Синтаксис для POST в Playwright:
js
Copy
Edit
const response = await request.post('URL', {
  data: {
    key1: 'value1',
    key2: 'value2'
  }
});
📦 Пример — POST-запрос с JSON:
Предположим, у нас есть API, принимающее POST на https://jsonplaceholder.typicode.com/posts. Это фейковый, но рабочий тестовый сервис.

js
Copy
Edit
const { test, expect } = require('@playwright/test');

test('POST request example', async ({ request }) => {
  const postData = {
    title: 'Hello Playwright',
    body: 'This is a test post',
    userId: 1
  };

  const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
    data: postData
  });

  // Проверка ответа
  expect(response.ok()).toBeTruthy();
  expect(response.status()).toBe(201); // 201 Created

  const responseBody = await response.json();
  console.log('Response from POST:', responseBody);

  // Проверки содержимого ответа
  expect(responseBody).toMatchObject(postData);
});
💬 Что делает этот тест:
Отправляет POST-запрос с JSON-данными

Проверяет, что статус ответа 201

Проверяет, что ответ содержит те же данные, которые мы отправили

🧠 Полезно знать:
data: {} — для JSON тел

form: {} — для application/x-www-form-urlencoded

Можно добавлять заголовки через headers: {}

Установка библиотеки ajv:
Для начала установим саму библиотеку:

bash
Copy
Edit
npm install ajv
2. Пример использования с Playwright:
Предположим, у нас есть схема JSON, которая должна валидировать структуру ответов от API. Вот как можно использовать ajv в тестах:

✅ Пример — Валидация JSON-схемы с помощью ajv:
js
Copy
Edit
const { test, expect } = require('@playwright/test');
const Ajv = require('ajv'); // Импортируем Ajv

test('GET request with JSON schema validation', async ({ request }) => {
  // 1. Ожидаемая схема JSON
  const jsonSchema = {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      id: { type: 'number' },
      title: { type: 'string' },
      body: { type: 'string' },
    },
    required: ['userId', 'id', 'title', 'body'],
    additionalProperties: false,
  };

  // 2. Запрос к API
  const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  const responseBody = await response.json();
  
  // 3. Создаём инстанс AJV для валидации
  const ajv = new Ajv();
  const validate = ajv.compile(jsonSchema); // Компилируем схему
  
  // 4. Валидируем ответ с помощью нашей схемы
  const valid = validate(responseBody);

  if (!valid) {
    console.log(validate.errors); // Печатаем ошибки валидации
  }
  
  // 5. Проверка, что JSON валиден
  expect(valid).toBe(true); // Если валидно — тест пройдет, если нет — будет ошибка
});
🧠 Что здесь происходит:
Мы определяем схему JSON для ответа. В этом примере мы ожидаем объект с полями userId, id, title и body.

Мы отправляем GET-запрос и получаем ответ.

Создаём объект Ajv и компилируем схему с помощью ajv.compile().

Мы валидируем ответ API с использованием скомпилированной схемы.

Если ответ не соответствует схеме, то будет выведена ошибка, и тест не пройдет.

3. Пояснение к схеме JSON:
type: 'object' — ответ должен быть объектом.

properties — описываем свойства объекта, которые мы ожидаем.

required — список обязательных полей.

additionalProperties: false — запрещает наличие дополнительных свойств, которых нет в схеме.

4. Валидация сложных структур:
Можно валидировать и более сложные структуры — например, массивы объектов или вложенные объекты. Вот пример с массивом объектов:

js
Copy
Edit
const jsonSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      userId: { type: 'number' },
      id: { type: 'number' },
      title: { type: 'string' },
      body: { type: 'string' },
    },
    required: ['userId', 'id', 'title', 'body'],
    additionalProperties: false,
  },
};

// Это валидация для массива объектов, где каждый объект должен иметь схему, как в предыдущем примере.
💡 Дополнительные советы:
Если тебе нужно будет валидировать данные с более сложными типами (например, даты, регулярные выражения), ты можешь расширить схему с помощью дополнительных типов, например, format: 'date-time'.

ajv поддерживает схемы для валидации на уровне JSON-схемы, такие как: minimum, maximum, minLength, maxLength, и другие.

Подключение Allure-репортов
Allure — это популярный инструмент для генерации отчётов, который интегрируется с различными тестовыми фреймворками, включая Playwright.

Шаги:
Установка необходимых зависимостей:

Для начала нужно установить несколько пакетов:

bash
Copy
Edit
npm install --save-dev playwright-allure-formatter allure-playwright
Конфигурация Playwright для использования Allure:

Далее, нужно настроить Playwright для использования Allure-репортов. Для этого нужно отредактировать файл конфигурации (например, playwright.config.js).

Пример файла playwright.config.js:

js
Copy
Edit
const { defineConfig, devices } = require('@playwright/test');
const { allurePlaywright } = require('allure-playwright');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['allure-playwright']],
  use: {
    trace: 'on-first-retry', // Включить трассировку для улучшенного отчёта
  },
  projects: [
    {
      name: 'playwright-tests',
      use: {
        browserName: 'chromium',
        headless: false,
      },
    },
  ],
});
В этом примере используется репортер allure-playwright, который автоматически будет генерировать отчёты в формате Allure.

Запуск тестов с генерацией отчёта:

Чтобы запустить тесты с Allure-репортом, используй следующую команду:

bash
Copy
Edit
npx playwright test --reporter=allure-playwright
Генерация и запуск Allure-репорта:

Для генерации отчёта из Allure и его просмотра:

Сначала генерируем отчёт:

bash
Copy
Edit
allure generate allure-results --clean
Далее, запускаем сервер для отображения отчёта:

bash
Copy
Edit
allure open allure-report
Пример Allure-репорта:

Репорт будет содержать:

Статусы тестов (прошли/не прошли)

Логи ошибок

Скриншоты

Время выполнения тестов

📋 2. Подключение HTML-отчётов
Если ты хочешь создать обычный HTML-отчёт, то Playwright поддерживает несколько репортеров, включая html-репортер. Для этого нужно выполнить следующие шаги.

Шаги:
Настройка Playwright для генерации HTML-отчётов:

В файле конфигурации Playwright добавь репортер html:

js
Copy
Edit
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  reporter: [['html', { open: 'always' }]],  // Создание HTML-отчётов
  use: {
    trace: 'on-first-retry',
  },
});
Запуск тестов с генерацией HTML-отчёта:

Чтобы запустить тесты и получить HTML-отчёт, используй команду:

bash
Copy
Edit
npx playwright test
После выполнения тестов будет сгенерирован HTML-отчёт, который можно открыть в браузере.

Где будет сгенерирован отчёт?:

HTML-отчёт будет храниться в папке playwright-report по умолчанию.

📊 3. Как это выглядит:
Allure-репорты: создают интерактивные отчёты, где можно просматривать подробную информацию о тестах (скриншоты, логи, статус).

HTML-отчёты: статические отчёты, которые просто показывают результат теста в HTML-формате, с возможностью фильтрации.

🧠 Что ещё полезно:
Трэйсинг (Trace): если ты добавишь trace: 'on-first-retry' в конфигурацию Playwright, то будешь получать подробные отчёты о том, что происходило во время теста (например, скриншоты, видео).

Скриншоты и видео: оба репортора поддерживают возможность добавления скриншотов и видео для ошибок.

Автоматические проверки разных API-эндпоинтов — это важная часть тестирования API. В Playwright можно использовать те же принципы, что и для обычных UI-тестов, чтобы проверять различные GET, POST, PUT и другие запросы, а также проверять их ответы.

Вот как можно настроить автоматические проверки для разных эндпоинтов с использованием Playwright.

1. Основные шаги:
Тестируем API запросы (например, GET, POST, PUT, DELETE).

Проверяем статус-код.

Проверяем структуру ответа (валидируем JSON).

Используем общие тесты для всех эндпоинтов.

2. Пример тестирования API с Playwright
Шаги для создания теста:
Создаем базовые тесты для проверки ответов с API.

Используем параметризацию для тестирования различных эндпоинтов.

Проверяем ответы на различные HTTP-методы.

✅ Пример — Автоматические проверки API с Playwright:
js
Copy
Edit
const { test, expect } = require('@playwright/test');

const apiBaseUrl = 'https://jsonplaceholder.typicode.com'; // Пример базового URL для тестов

// Пример для GET-запроса
test.describe('GET API Endpoints', () => {
  const endpoints = ['/posts', '/users', '/comments'];

  endpoints.forEach((endpoint) => {
    test(`GET ${endpoint} should return valid data`, async ({ request }) => {
      const response = await request.get(`${apiBaseUrl}${endpoint}`);

      // Проверка, что запрос был успешным (статус 200)
      expect(response.status()).toBe(200);

      // Валидация структуры ответа
      const responseBody = await response.json();
      expect(Array.isArray(responseBody)).toBe(true); // Проверяем, что ответ — это массив

      if (endpoint === '/posts') {
        // Дополнительная проверка для эндпоинта /posts
        expect(responseBody[0]).toHaveProperty('userId');
        expect(responseBody[0]).toHaveProperty('id');
        expect(responseBody[0]).toHaveProperty('title');
      }
    });
  });
});

// Пример для POST-запроса
test('POST /posts should create a new post', async ({ request }) => {
  const postData = {
    title: 'New Post',
    body: 'This is a new post',
    userId: 1,
  };

  const response = await request.post(`${apiBaseUrl}/posts`, {
    data: postData,
  });

  // Проверка, что запрос был успешным (статус 201)
  expect(response.status()).toBe(201);

  const responseBody = await response.json();
  expect(responseBody).toMatchObject(postData); // Проверка, что ответ содержит данные, которые мы отправили
});

// Пример для PUT-запроса
test('PUT /posts/1 should update the post', async ({ request }) => {
  const updatedData = {
    title: 'Updated Title',
    body: 'Updated content',
    userId: 1,
  };

  const response = await request.put(`${apiBaseUrl}/posts/1`, {
    data: updatedData,
  });

  // Проверка, что запрос был успешным (статус 200)
  expect(response.status()).toBe(200);

  const responseBody = await response.json();
  expect(responseBody).toMatchObject(updatedData); // Проверка, что ответ содержит обновлённые данные
});

// Пример для DELETE-запроса
test('DELETE /posts/1 should delete the post', async ({ request }) => {
  const response = await request.delete(`${apiBaseUrl}/posts/1`);

  // Проверка, что запрос был успешным (статус 200)
  expect(response.status()).toBe(200);

  // Пример проверки, что пост действительно удалён (можно сделать запрос на получение того же поста и ожидать 404)
  const getResponse = await request.get(`${apiBaseUrl}/posts/1`);
  expect(getResponse.status()).toBe(404); // Ожидаем, что пост с ID 1 больше не существует
});
3. Пояснение к примерам:
Проверка разных HTTP методов:

GET — получение данных с сервера.

POST — создание нового ресурса.

PUT — обновление существующего ресурса.

DELETE — удаление ресурса.

Параметризация тестов: Мы тестируем несколько эндпоинтов (/posts, /users, /comments) с помощью цикла forEach, чтобы избежать дублирования кода.

Валидация ответов:

Проверяем, что ответ имеет статус 200 (или 201 для POST).

Валидируем структуру данных: например, проверяем, что в ответе есть определённые поля, такие как userId, id, title.

Для POST и PUT проверяем, что возвращаемые данные совпадают с теми, которые были отправлены в запросе.

4. Общие рекомендации для тестирования API:
Проверка статуса: всегда проверяй правильный HTTP-статус код, например, 200 OK, 201 Created, 404 Not Found.

Проверка тела ответа: проверь, что ответ соответствует ожидаемой структуре. Можно использовать библиотеки для валидации JSON-схем (например, ajv, как мы обсуждали ранее).

Проверка ошибок: отправляй запросы с неверными данными и проверяй, что сервер корректно обрабатывает ошибки (например, статус 400 или 404).

Параметризация тестов: если тестируешь несколько эндпоинтов, удобно использовать циклы или параметры, чтобы не дублировать код.

🔥 Рекомендации для улучшения:
Использование переменных окружения: для хранения базового URL и других конфиденциальных данных (например, токенов).

Интеграция с CI/CD: запускать тесты API в автоматическом режиме в рамках пайплайнов CI/CD.

Тестирование производительности: проверять скорость работы эндпоинтов, например, с использованием библиотеки fast-check для тестирования с рандомизированными данными.

CI/CD (Continuous Integration / Continuous Deployment) — это набор практик и инструментов, направленных на автоматизацию процессов интеграции, тестирования и развертывания кода. Это позволяет ускорить разработку и повысить качество программного обеспечения.

Давай разберемся, что такое CI/CD, как настроить его для твоих проектов, и как интегрировать тесты Playwright в этот процесс.

1. Что такое CI/CD?
Continuous Integration (CI) — это процесс, при котором разработчики регулярно (несколько раз в день) интегрируют свой код в общую репозиторную ветку. Каждый коммит запускает автоматическое тестирование и сборку приложения.

Continuous Delivery/Deployment (CD) — это процесс автоматической доставки приложения на продакшн (или на другие среды), сразу после того, как все тесты прошли успешно. В отличие от Continuous Delivery, где доставка на продакшн выполняется вручную, Continuous Deployment предполагает полную автоматизацию.

2. Как настроить CI/CD для тестов Playwright?
2.1 Инструменты для CI/CD:
Популярные инструменты для CI/CD:

GitHub Actions

GitLab CI/CD

Jenkins

CircleCI

Travis CI

Я покажу, как настроить GitHub Actions для запуска тестов Playwright, но аналогичные шаги можно выполнить и для других CI/CD сервисов.

2.2 Настройка CI/CD с GitHub Actions для Playwright:
Создайте файл конфигурации для GitHub Actions:

В корне проекта создайте папку .github/workflows, если её нет, и внутри неё файл ci.yml.

bash
Copy
Edit
mkdir -p .github/workflows
touch .github/workflows/ci.yml
Пример конфигурации для GitHub Actions:

yaml
Copy
Edit
name: Playwright Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'  # указываем нужную версию Node.js

      - name: Install dependencies
        run: |
          npm install
          npm install --save-dev @playwright/test

      - name: Run Playwright tests
        run: npx playwright test --reporter=allure-playwright
        env:
          CI: true  # указываем переменную окружения для CI

      - name: Upload Allure results
        uses: actions/upload-artifact@v2
        with:
          name: allure-results
          path: allure-results

      - name: Generate Allure Report
        run: |
          npm install -g allure-commandline --save-dev
          allure generate allure-results --clean
          allure open allure-report
Пояснение к конфигурации:

on: Определяет триггеры для запуска действия (например, push в ветку main или открытие pull request).

jobs: Определяет задачу для CI/CD. В данном случае мы проверяем код на ошибки с помощью Playwright.

steps: Каждый шаг выполнения, включая:

Checkout: Клонируем репозиторий.

Setup Node.js: Устанавливаем нужную версию Node.js.

Install dependencies: Устанавливаем все зависимости, включая Playwright.

Run Playwright tests: Запускаем тесты Playwright.

Upload Allure results: Загружаем результаты Allure для дальнейшего анализа.

Generate Allure Report: Генерируем и открываем отчёт.

Публикация отчёта Allure (по желанию): В примере выше Allure отчёт генерируется на шаге Generate Allure Report. Если ты хочешь публиковать результаты Allure на сервере, можно дополнительно настроить публикацию на GitHub Pages или другой сервис для отображения отчётов.

Запуск тестов: Когда ты делаешь push в ветку main или создаёшь pull request, GitHub Actions автоматически выполнит тесты Playwright и сгенерирует отчет.

3. CI/CD с другими инструментами
Если ты используешь другие CI/CD инструменты, настройка будет похожей:

GitLab CI/CD:
Пример файла .gitlab-ci.yml:

yaml
Copy
Edit
stages:
  - test

test:
  image: mcr.microsoft.com/playwright:v1.14.0-focal
  script:
    - npm install
    - npx playwright test
  artifacts:
    paths:
      - allure-results
Jenkins:
Установите плагин для Playwright.

В Jenkinsfile добавьте шаги для установки зависимостей и запуска тестов:

groovy
Copy
Edit
pipeline {
  agent any
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }
    stage('Run Playwright Tests') {
      steps {
        sh 'npx playwright test'
      }
    }
  }
}
4. Преимущества CI/CD для автоматических тестов:
Быстрая обратная связь: тесты запускаются автоматически с каждым коммитом или pull request, что помогает быстро находить ошибки.

Автоматизация процессов: избегаем ручного запуска тестов, уменьшаем шанс ошибки.

Контроль качества: с автоматическими тестами можно поддерживать качество на высоком уровне.

Повторяемость: тесты выполняются в одной и той же среде, что минимизирует риски "works on my machine".

5. Интеграция с другими сервисами:
Ты можешь интегрировать CI/CD с такими сервисами, как Slack, Email или Teams, чтобы получать уведомления о статусе тестов, а также использовать Docker для создания изолированных сред для тестирования.

Заключение:
Настройка CI/CD с автоматическими тестами позволяет тебе существенно ускорить разработку и обеспечивать стабильность продукта. Если тебе нужно больше примеров или помощь в интеграции с другими инструментами, не стесняйся обращаться! 🚀









    
    */

});








/*// --headless - фоновый режим
// 3 браузера - --project chromium/firefox/webkit
// npx playwright test tests/get3.spec.js --headed --project chromium



Цель задания: Научиться отправлять GET-запросы, проверять ответ от API, 
работать с массивами, выполнять проверки и проводить манипуляции с данными.

Основные задачи:
Отправка GET-запроса:
- Отправьте GET-запрос на API с использованием метода request.get.
- Получите и распарсите тело ответа с помощью response.json().
Проверка структуры ответа:
- Проверьте, что в ответе присутствуют ключи products и total.
- Убедитесь, что products — это массив.
Работа с данными продуктов:
- Проверьте, что список продуктов не пустой.
- Найдите и выведите в консоль третий продукт в списке.

- Выведите рейтинг четвертого продукта и убедитесь, что его значение равно 2.51.

Проверка изображений продуктов:
- Найдите изображения (ссылки) третьего продукта.

- Убедитесь, что все изображения — это строки и ссылки на файлы формата .png.

Работа с ценами продуктов:
- Соберите все цены продуктов в массив.
- Проверьте, что каждая цена является числом и больше нуля.
- Вычислите сумму всех цен и выведите результат в консоль с точностью до двух знаков после запятой.*/
