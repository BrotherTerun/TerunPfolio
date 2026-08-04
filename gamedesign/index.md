---
layout: gamedesign
title: "Терещенко Леонид — геймдизайнер"
description: "Портфолио геймдизайнера: игровые системы, прототипирование, редакторские инструменты, алгоритмы и аналитика."
---

<section class="gd-screen gd-hero gd-container" id="profile">
  <aside class="gd-profile-card gd-hero__profile" aria-label="Профессиональный профиль">
    <div class="gd-profile-card__item">
      <span class="gd-label">Специализация</span>
      <strong>Системный и технический геймдизайн</strong>
    </div>

    <div class="gd-profile-card__item">
      <span class="gd-label">Фокус</span>
      <strong>Прототипы · Контентные системы · Инструменты</strong>
    </div>

    <div class="gd-profile-card__item">
      <span class="gd-label">Статус</span>
      <strong>Открыт к предложениям</strong>
    </div>

    <div class="gd-profile-card__item">
      <span class="gd-label">Формат</span>
      <strong>Удалённо · Проектно · Полная занятость</strong>
    </div>
  </aside>

  <div class="gd-hero__stage">
    <div class="gd-hero__content">
      <p class="gd-eyebrow">Терещенко Леонид · Геймдизайнер</p>

      <h1>Проектирую игровые системы и довожу их до рабочего прототипа.</h1>

      <p class="gd-hero__lead">
        Работаю на стыке системного и технического геймдизайна:
        проектирую и балансирую игровые системы, проверяю решения в Unity,
        создаю инструменты для контента и готовлю понятную документацию для команды.
      </p>

      <div class="gd-hero__meta" aria-label="Технические компетенции">
        <span>Unity · C# · Python</span>
        <span>Data-driven systems</span>
        <span>Editor tooling · Validation</span>
      </div>

      <div class="gd-actions">
        <a class="gd-button" href="#projects">Посмотреть проекты</a>
        <a class="gd-button gd-button--ghost" href="mailto:{{ site.email }}">Связаться</a>
      </div>
    </div>

    <div class="gd-hero__visual">
      <img
        src="{{ '/assets/images/avatar_1_1.png' | relative_url }}"
        alt="Терещенко Леонид"
        class="gd-hero__avatar"
      >
    </div>
  </div>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-section gd-container" id="skills" aria-labelledby="skills-title">
  <div class="gd-section__header gd-section__header--compact">
    <p class="gd-section-index">01 / HARD SKILLS</p>
    <h2 id="skills-title">Мои компетенции</h2>
  </div>

  <div class="gd-skill-grid">
    <article class="gd-skill-card">
      <span class="gd-skill-card__index">01</span>
      <h3>Системный дизайн</h3>

      <ul>
        <li>Системы, механики и игровые циклы</li>
        <li>Состояния, зависимости и ограничения</li>
        <li>Способности, роли и контрплей</li>
        <li>Декомпозиция систем и граничные случаи</li>
      </ul>

      <div class="gd-skill-card__cases">
        <span>Кейсы</span>
        <a href="{{ '/projects/tactical-agents/' | relative_url }}">Tactical Agents</a>
        <a href="{{ '/projects/project-bonfire/' | relative_url }}">ProjectBonfire</a>
      </div>
    </article>

    <article class="gd-skill-card">
      <span class="gd-skill-card__index">02</span>
      <h3>Баланс и игровая экономика</h3>

      <ul>
        <li>Баланс игровых механик и параметров</li>
        <li>Прогрессия и игровая экономика</li>
        <li>Моделирование и проверка изменений</li>
        <li>Метрики, события и поиск дисбаланса</li>
      </ul>

      <div class="gd-skill-card__cases">
        <span>Кейсы</span>
        <a href="{{ '/projects/balance-craft/' | relative_url }}">BalanceCraft</a>
        <a href="{{ '/projects/tactical-agents/' | relative_url }}">Tactical Agents</a>
      </div>
    </article>

    <article class="gd-skill-card">
      <span class="gd-skill-card__index">03</span>
      <h3>Технический геймдизайн и прототипирование</h3>

      <ul>
        <li>Прототипирование механик в Unity</li>
        <li>C#, Python и компонентный подход</li>
        <li>Конфиги, JSON и data-driven-системы</li>
        <li>Интеграция механик и редакторские инструменты</li>
      </ul>

      <div class="gd-skill-card__cases">
        <span>Кейсы</span>
        <a href="{{ '/projects/project-legend/' | relative_url }}">ProjectLegend</a>
        <a href="{{ '/projects/project-bonfire/' | relative_url }}">ProjectBonfire</a>
      </div>
    </article>

    <article class="gd-skill-card">
      <span class="gd-skill-card__index">04</span>
      <h3>Документация и сопровождение фич</h3>

      <ul>
        <li>Концепт-документы, GDD и спецификации</li>
        <li>Технические задания для разработки</li>
        <li>Сценарии, состояния и критерии приёмки</li>
        <li>Сопровождение реализации и итерации по фидбеку</li>
      </ul>

      <div class="gd-skill-card__cases">
        <span>Кейсы</span>
        <a href="{{ '/projects/project-legend/' | relative_url }}">ProjectLegend</a>
        <a href="{{ '/projects/tactical-agents/' | relative_url }}">Tactical Agents</a>
      </div>
    </article>
  </div>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-section gd-section--projects" id="projects" aria-labelledby="projects-title">
  <div class="gd-container gd-section__header gd-section__header--row gd-section__header--compact">
    <div>
      <p class="gd-section-index">02 / PROJECTS</p>
      <h2 id="projects-title">Проектная лента</h2>
    </div>

    <div class="gd-project-controls" aria-label="Управление проектной лентой">
      <button class="gd-rail-button" type="button" data-rail-direction="-1" aria-label="Предыдущий проект">←</button>
      <button class="gd-rail-button" type="button" data-rail-direction="1" aria-label="Следующий проект">→</button>
    </div>
  </div>

  <div class="gd-project-rail" data-project-rail aria-label="Проекты">
    <article class="gd-project-card gd-project-card--legend">
      <div class="gd-project-card__overlay"></div>
      <div class="gd-project-card__content">
        <p class="gd-project-card__type">Визуальная новелла · В разработке</p>
        <h3>ProjectLegend</h3>
        <p>
          Ветвящаяся визуальная новелла с data-driven-диалогами,
          визуальным графом и автоматической валидацией контента.
        </p>
        <p class="gd-project-card__stack">Unity · C# · JSON · XNode · TextMeshPro</p>
        <a href="{{ '/projects/project-legend/' | relative_url }}">Открыть кейс →</a>
      </div>
    </article>

    <article class="gd-project-card gd-project-card--agents">
      <div class="gd-project-card__overlay"></div>
      <div class="gd-project-card__content">
        <p class="gd-project-card__type">Системный дизайн · Модуль</p>
        <h3>Tactical Agents</h3>
        <p>
          Тактическая система ролей, способностей и состояний,
          встроенная в существующую игровую среду.
        </p>
        <p class="gd-project-card__stack">JavaScript · HTML/CSS · Foundry VTT · D&D 5e</p>
        <a href="{{ '/projects/tactical-agents/' | relative_url }}">Открыть кейс →</a>
      </div>
    </article>

    <article class="gd-project-card gd-project-card--bonfire">
      <div class="gd-project-card__overlay"></div>
      <div class="gd-project-card__content">
        <p class="gd-project-card__type">Игровой прототип · В разработке</p>
        <h3>ProjectBonfire</h3>
        <p>
          Самостоятельный игровой прототип, построенный короткими итерациями
          от дизайн-гипотезы до рабочих взаимодействий.
        </p>
        <p class="gd-project-card__stack">Unity · C# · Git</p>
        <a href="{{ '/projects/project-bonfire/' | relative_url }}">Открыть кейс →</a>
      </div>
    </article>

    <article class="gd-project-card gd-project-card--maze">
      <div class="gd-project-card__overlay"></div>
      <div class="gd-project-card__content">
        <p class="gd-project-card__type">Технический прототип</p>
        <h3>ProjectMaze</h3>
        <p>
          Многоэтапный генератор уровней с построением связей,
          поиском пути и проверкой достижимости.
        </p>
        <p class="gd-project-card__stack">Unity · C# · A* · BFS</p>
        <a href="{{ '/projects/project-maze/' | relative_url }}">Открыть кейс →</a>
      </div>
    </article>

    <article class="gd-project-card gd-project-card--balance">
      <div class="gd-project-card__overlay"></div>
      <div class="gd-project-card__content">
        <p class="gd-project-card__type">Аналитический инструмент</p>
        <h3>BalanceCraft</h3>
        <p>
          Инструмент для импорта игровых событий, расчёта метрик
          и анализа состояния игровой экономики.
        </p>
        <p class="gd-project-card__stack">Data Processing · Metrics · Visualisation</p>
        <a href="{{ '/projects/balance-craft/' | relative_url }}">Открыть кейс →</a>
      </div>
    </article>
  </div>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-section gd-container" id="professional-profile" aria-labelledby="about-title">
  <div class="gd-section__header">
    <p class="gd-section-index">03 / PROFILE</p>
    <h2 id="about-title">Не только описываю механику — довожу её до проверяемого результата</h2>
  </div>

  <div class="gd-copy gd-copy--wide">
    <p>
      Начинающий геймдизайнер с практическим опытом разработки собственных игровых прототипов,
      инструментов и контентных систем. Основной интерес — системный дизайн, игровые взаимодействия,
      процедурная генерация и инструменты, упрощающие работу с контентом.
    </p>

    <p>
      Технический бэкграунд позволяет мне не ограничиваться концепцией: я могу самостоятельно
      проверить гипотезу в коде, встроить механику в существующий проект и выявить ограничения
      решения до передачи в полноценную разработку.
    </p>
  </div>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-section gd-container" id="workflow" aria-labelledby="workflow-title">
  <div class="gd-section__header gd-section__header--compact">
    <p class="gd-section-index">04 / WORKFLOW</p>
    <h2 id="workflow-title">Как я работаю</h2>
  </div>

  <ol class="gd-workflow">
    <li>
      <span>01</span>
      <strong>Цель</strong>
      <p>Формулирую ожидаемый опыт игрока и назначение механики.</p>
    </li>
    <li>
      <span>02</span>
      <strong>Декомпозиция</strong>
      <p>Разделяю систему на состояния, правила и ограничения.</p>
    </li>
    <li>
      <span>03</span>
      <strong>Прототип</strong>
      <p>Собираю минимальную рабочую модель или механику.</p>
    </li>
    <li>
      <span>04</span>
      <strong>Проверка</strong>
      <p>Тестирую основные сценарии и граничные случаи.</p>
    </li>
    <li>
      <span>05</span>
      <strong>Документация</strong>
      <p>Фиксирую решение и готовлю его к следующей итерации.</p>
    </li>
  </ol>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-section gd-container" id="tools" aria-labelledby="tools-title">
  <div class="gd-section__header gd-section__header--compact">
    <p class="gd-section-index">05 / TOOLS</p>
    <h2 id="tools-title">Технологии и рабочие форматы</h2>
  </div>

  <div class="gd-tool-grid">
    <article>
      <span class="gd-label">Дизайн</span>
      <p>Спецификации · Диаграммы · Таблицы баланса · Тестовые сценарии</p>
    </article>
    <article>
      <span class="gd-label">Прототипирование</span>
      <p>Unity · C# · Git · Visual Studio Code</p>
    </article>
    <article>
      <span class="gd-label">Контент</span>
      <p>JSON · XNode · TextMeshPro · Редакторские инструменты Unity</p>
    </article>
    <article>
      <span class="gd-label">Алгоритмы и данные</span>
      <p>Python · SQL · A* · BFS · Обработка и визуализация данных</p>
    </article>
  </div>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-section gd-container" id="experience" aria-labelledby="experience-title">
  <div class="gd-section__header gd-section__header--compact">
    <p class="gd-section-index">06 / BACKGROUND</p>
    <h2 id="experience-title">Образование и настольный геймдизайн</h2>
  </div>

  <div class="gd-two-column">
    <article class="gd-info-card">
      <span class="gd-label">Образование</span>
      <h3>Прикладная информатика</h3>
      <p>
        Высшее образование, 2026. Выпускная квалификационная работа защищена на «отлично».
        Подготовка в области программирования, баз данных, моделирования
        и проектирования информационных систем.
      </p>
    </article>

    <article class="gd-info-card">
      <span class="gd-label">Настольный геймдизайн</span>
      <h3>Земли Былых Легенд</h3>
      <p>
        Опыт работы с правилами, игровым контентом и подготовкой материалов
        для настольного проекта. Блок требует уточнения издателя, года,
        формата публикации и личной зоны ответственности.
      </p>
    </article>
  </div>
</section>

<section class="gd-screen gd-screen--with-sidebar gd-contact-screen" id="contacts" aria-labelledby="contacts-title">
  <div class="gd-contact gd-container">
    <div>
      <p class="gd-section-index">07 / CONTACTS</p>
      <h2 id="contacts-title">Обсудим проект?</h2>
      <p>
        Готов выполнить тестовое задание, подробнее рассказать о любом кейсе
        или показать текущую версию прототипа.
      </p>
    </div>

    <div class="gd-actions gd-actions--contact">
      <a class="gd-button" href="https://t.me/BrotherTerun" target="_blank" rel="noopener noreferrer">
        Telegram
      </a>
      <a class="gd-button gd-button--ghost" href="mailto:{{ site.email }}">
        Email
      </a>
      <a class="gd-button gd-button--ghost" href="https://github.com/BrotherTerun" target="_blank" rel="noopener noreferrer">
        GitHub
      </a>
    </div>
  </div>
</section>
