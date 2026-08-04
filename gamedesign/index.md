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

<section
  class="gd-screen gd-screen--with-sidebar gd-section gd-section--projects"
  id="projects"
  aria-labelledby="projects-title"
  data-project-carousel
>
  <div class="gd-project-carousel">
    <div class="gd-project-heading">
      <p class="gd-section-index">02 / PROJECTS</p>
      <h2 id="projects-title">Мои проекты</h2>
    </div>

    <button
      class="gd-carousel-button gd-carousel-button--prev"
      type="button"
      data-carousel-prev
      aria-label="Предыдущий проект"
    >
      <span aria-hidden="true">‹</span>
    </button>

    <div
      class="gd-project-viewport"
      data-carousel-viewport
      tabindex="0"
      role="region"
      aria-roledescription="карусель"
      aria-label="Проекты"
    >
      <div class="gd-project-track" data-carousel-track>
        <article
          class="gd-project-card gd-project-card--legend"
          data-project-slide
          aria-label="ProjectLegend"
        >
          <div class="gd-project-card__overlay"></div>
          <div class="gd-project-card__content">
            <p class="gd-project-card__type">Визуальная новелла · В разработке</p>
            <h3><a class="gd-project-card__title-link" href="{{ '/projects/project-legend/' | relative_url }}">ProjectLegend</a></h3>
            <p>
              Ветвящаяся визуальная новелла с data-driven-диалогами,
              визуальным графом и автоматической валидацией контента.
            </p>
            <p class="gd-project-card__stack">
              Unity · C# · JSON · XNode · TextMeshPro
            </p>

          </div>
        </article>

        <article
          class="gd-project-card gd-project-card--agents"
          data-project-slide
          aria-label="Tactical Agents"
        >
          <div class="gd-project-card__overlay"></div>
          <div class="gd-project-card__content">
            <p class="gd-project-card__type">Системный дизайн · Модуль</p>
            <h3><a class="gd-project-card__title-link" href="{{ '/projects/tactical-agents/' | relative_url }}">Tactical Agents</a></h3>
            <p>
              Тактическая система ролей, способностей и состояний,
              встроенная в существующую игровую среду.
            </p>
            <p class="gd-project-card__stack">
              JavaScript · HTML/CSS · Foundry VTT · D&amp;D 5e
            </p>

          </div>
        </article>

        <article
          class="gd-project-card gd-project-card--bonfire"
          data-project-slide
          aria-label="ProjectBonfire"
        >
          <div class="gd-project-card__overlay"></div>
          <div class="gd-project-card__content">
            <p class="gd-project-card__type">Игровой прототип · В разработке</p>
            <h3><a class="gd-project-card__title-link" href="{{ '/projects/project-bonfire/' | relative_url }}">ProjectBonfire</a></h3>
            <p>
              Самостоятельный игровой прототип, построенный короткими
              итерациями от дизайн-гипотезы до рабочих взаимодействий.
            </p>
            <p class="gd-project-card__stack">Unity · C# · Git</p>

          </div>
        </article>

        <article
          class="gd-project-card gd-project-card--maze"
          data-project-slide
          aria-label="ProjectMaze"
        >
          <div class="gd-project-card__overlay"></div>
          <div class="gd-project-card__content">
            <p class="gd-project-card__type">Технический прототип</p>
            <h3><a class="gd-project-card__title-link" href="{{ '/projects/project-maze/' | relative_url }}">ProjectMaze</a></h3>
            <p>
              Многоэтапный генератор уровней с построением связей,
              поиском пути и проверкой достижимости.
            </p>
            <p class="gd-project-card__stack">Unity · C# · A* · BFS</p>

          </div>
        </article>

        <article
          class="gd-project-card gd-project-card--balance"
          data-project-slide
          aria-label="BalanceCraft"
        >
          <div class="gd-project-card__overlay"></div>
          <div class="gd-project-card__content">
            <p class="gd-project-card__type">Аналитический инструмент</p>
            <h3><a class="gd-project-card__title-link" href="{{ '/projects/balance-craft/' | relative_url }}">BalanceCraft</a></h3>
            <p>
              Инструмент для импорта игровых событий, расчёта метрик
              и анализа состояния игровой экономики.
            </p>
            <p class="gd-project-card__stack">
              Data Processing · Metrics · Visualisation
            </p>

          </div>
        </article>
      </div>
    </div>

    <button
      class="gd-carousel-button gd-carousel-button--next"
      type="button"
      data-carousel-next
      aria-label="Следующий проект"
    >
      <span aria-hidden="true">›</span>
    </button>

    <div
      class="gd-project-pagination"
      data-carousel-pagination
      aria-label="Выбор проекта"
    ></div>

    <p class="gd-carousel-status" data-carousel-status aria-live="polite"></p>
  </div>
</section>

<section
  class="gd-screen gd-screen--with-sidebar gd-section gd-section--background gd-container"
  id="background"
  aria-labelledby="background-title"
>
  <div class="gd-section__header gd-section__header--compact">
    <p class="gd-section-index">03 / BACKGROUND</p>
    <h2 id="background-title">Образование и профессиональный профиль</h2>
  </div>

  <div class="gd-background-layout">
    <article class="gd-background-card gd-background-card--education">
      <div class="gd-education-heading">
        <span class="gd-label">Образование</span>

        <h3>
          <a
            class="gd-background-card__school-link"
            href="https://mif.vspu.ru/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ИМИФ — ВГСПУ
          </a>
        </h3>
      </div>

      <p class="gd-background-card__degree">
        Бакалавр по направлению «Прикладная информатика»
      </p>

      <div class="gd-education-details">
        <p>
          <span>Тема ВКР</span>
          «Разработка инструмента аналитики игровой экономики для инди-игр»
        </p>

        <p>
          <span>Результат</span>
          ВКР защищена на «отлично»
        </p>
      </div>

      <div class="gd-background-card__facts" aria-label="Профильные дисциплины">
        <span>Теория систем и системный анализ</span>
        <span>Проектирование информационных систем</span>
        <span>Алгоритмизация и программирование</span>
        <span>Базы данных</span>
        <span>Математическое и имитационное моделирование</span>
        <span>Теория вероятностей и матстатистика</span>
      </div>
    </article>

    <div class="gd-background-stack">
      <article class="gd-background-card gd-background-card--profile">
        <span class="gd-label">Профессиональный профиль</span>
        <h3>Системный и технический геймдизайн</h3>

        <p>
          Имеется практический опыт разработки собственных игровых
          прототипов, инструментов и контентных систем. Основной интерес —
          системный дизайн, игровые взаимодействия, нарративный дизайн
          и разработка инструментов, упрощающих работу с контентом.
        </p>

        <p>
          Технический бэкграунд позволяет самостоятельно проверить
          гипотезу в коде, встроить механику в существующий проект
          и выявить ограничения решения до передачи в разработку.
        </p>
      </article>

      <div class="gd-background-secondary-grid">
        <article class="gd-background-card gd-background-card--reading">
          <span class="gd-label">Профессиональная литература</span>
          <h3>Знакомство с профильной литературой</h3>

          <div class="gd-reading-list">
            <div>
              <strong>«Искусство геймдизайна»</strong>
              <span>Джесси Шелл</span>
            </div>

            <div>
              <strong>«Кровь, пот и пиксели»</strong>
              <span>Джейсон Шрайер</span>
            </div>
          </div>
        </article>

        <article class="gd-background-card gd-background-card--tabletop">
          <span class="gd-label">Дополнительный опыт</span>
          <h3>Настольные системы и НРИ</h3>

          <p>
            Участие в разработке
            <a
              class="gd-background-card__inline-link"
              href="https://crowdrepublic.ru/projects/1058011?ysclid=msel35iqxw930164197"
              target="_blank"
              rel="noopener noreferrer"
            >«Земель Былых Легенд»</a>
            и практический опыт проектирования правил, сценариев
            и игрового контента для настольных ролевых игр.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>

<section
  class="gd-screen gd-screen--with-sidebar gd-section gd-section--workflow-tools gd-container"
  id="workflow"
  aria-labelledby="workflow-title"
>
  <div class="gd-workflow-heading">
    <div>
      <p class="gd-section-index">04 / WORKFLOW</p>
      <h2 id="workflow-title">
        От задачи к<br>
        проверяемому решению
      </h2>
    </div>

    <p class="gd-workflow-heading__lead">
      Процесс строю вокруг конкретного результата: сначала определяю,
      какой опыт должна создать механика, затем проектирую систему,
      проверяю её на прототипе и фиксирую решение для следующей итерации.
    </p>
  </div>

  <div class="gd-workflow-pipeline" aria-label="Рабочий процесс">
    <article class="gd-workflow-stage">
      <div class="gd-workflow-stage__header">
        <span class="gd-workflow-stage__number">01</span>
        <p>Постановка</p>
      </div>

      <h3>Формулирую задачу</h3>

      <p class="gd-workflow-stage__description">
        Определяю ожидаемый опыт игрока, назначение механики,
        ограничения проекта и критерии, по которым можно оценить результат.
      </p>

      <div class="gd-workflow-stage__result">
        <span>Результат</span>
        <strong>Цель фичи и критерии успеха</strong>
      </div>

      <div class="gd-workflow-stage__tags" aria-label="Методы этапа">
        <span>Игровой опыт</span>
        <span>Требования</span>
        <span>Ограничения</span>
      </div>
    </article>

    <article class="gd-workflow-stage">
      <div class="gd-workflow-stage__header">
        <span class="gd-workflow-stage__number">02</span>
        <p>Проектирование</p>
      </div>

      <h3>Собираю систему</h3>

      <p class="gd-workflow-stage__description">
        Раскладываю механику на правила, состояния, зависимости,
        ресурсы и граничные случаи. Проверяю, как она взаимодействует
        с уже существующими системами.
      </p>

      <div class="gd-workflow-stage__result">
        <span>Результат</span>
        <strong>Спецификация и модель поведения</strong>
      </div>

      <div class="gd-workflow-stage__tags" aria-label="Инструменты этапа">
        <span>GDD</span>
        <span>Диаграммы</span>
        <span>Таблицы</span>
        <span>JSON</span>
      </div>
    </article>

    <article class="gd-workflow-stage">
      <div class="gd-workflow-stage__header">
        <span class="gd-workflow-stage__number">03</span>
        <p>Прототип</p>
      </div>

      <h3>Проверяю в работе</h3>

      <p class="gd-workflow-stage__description">
        Собираю минимальную рабочую реализацию ключевого взаимодействия,
        чтобы проверить дизайн до затрат на полноценную разработку.
      </p>

      <div class="gd-workflow-stage__result">
        <span>Результат</span>
        <strong>Рабочий прототип механики</strong>
      </div>

      <div class="gd-workflow-stage__tags" aria-label="Инструменты этапа">
        <span>Unity</span>
        <span>C#</span>
        <span>Python</span>
        <span>Foundry VTT</span>
      </div>
    </article>

    <article class="gd-workflow-stage">
      <div class="gd-workflow-stage__header">
        <span class="gd-workflow-stage__number">04</span>
        <p>Валидация</p>
      </div>

      <h3>Проверяю и фиксирую</h3>

      <p class="gd-workflow-stage__description">
        Тестирую основные сценарии и крайние случаи, сравниваю результат
        с исходной целью, документирую ограничения и готовлю следующую
        итерацию или передачу решения.
      </p>

      <div class="gd-workflow-stage__result">
        <span>Результат</span>
        <strong>Проверенное и описанное решение</strong>
      </div>

      <div class="gd-workflow-stage__tags" aria-label="Инструменты этапа">
        <span>Тест-сценарии</span>
        <span>Метрики</span>
        <span>SQL</span>
        <span>Git</span>
      </div>
    </article>
  </div>

  <div class="gd-workflow-principle">
    <span>Рабочий принцип</span>
    <strong>
      Сначала сделать решение проверяемым — затем масштабировать
      и передавать в полноценную разработку.
    </strong>
  </div>
</section>

<section
  class="gd-screen gd-screen--with-sidebar gd-contact-screen"
  id="contacts"
  aria-labelledby="contacts-title"
>
  <div class="gd-contact gd-container">
    <div class="gd-contact-intro">
      <p class="gd-section-index">05 / CONTACTS</p>
      <h2 id="contacts-title">Связаться со мной</h2>

      <p>
        Готов выполнить тестовое задание, подробнее рассказать о любом
        кейсе или показать текущую версию прототипа.
      </p>
    </div>

    <div class="gd-contact-grid" aria-label="Способы связи">
      <a
        class="gd-contact-card"
        href="https://t.me/BrotherTerun"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="gd-contact-card__service">Telegram</span>
        <strong class="gd-contact-card__value">@BrotherTerun</strong>
        <span class="gd-contact-card__action">
          Открыть профиль <span aria-hidden="true">↗</span>
        </span>
      </a>

      <button
        class="gd-contact-card gd-contact-card--copy"
        type="button"
        data-copy-contact="leonrob34@ya.ru"
        aria-label="Скопировать адрес электронной почты leonrob34@ya.ru"
      >
        <span class="gd-contact-card__service">Email</span>
        <strong class="gd-contact-card__value">leonrob34@ya.ru</strong>
        <span class="gd-contact-card__action" data-copy-label>
          Скопировать <span aria-hidden="true">⧉</span>
        </span>

        <span
          class="gd-contact-card__toast"
          data-copy-toast
          role="status"
          aria-live="polite"
        >
          Скопировано!
        </span>
      </button>

      <a
        class="gd-contact-card gd-contact-card--phone"
        href="tel:+79377252054"
      >
        <span class="gd-contact-card__service">Телефон</span>
        <strong class="gd-contact-card__value">
          +7 (937) 725-20-54
        </strong>
        <span class="gd-contact-card__action">
          Позвонить <span aria-hidden="true">↗</span>
        </span>
      </a>

      <a
        class="gd-contact-card"
        href="https://github.com/BrotherTerun"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="gd-contact-card__service">GitHub</span>
        <strong class="gd-contact-card__value">BrotherTerun</strong>
        <span class="gd-contact-card__action">
          Открыть профиль <span aria-hidden="true">↗</span>
        </span>
      </a>

      <a
        class="gd-contact-card"
        href="https://vk.ru/leonid_ter"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span class="gd-contact-card__service">ВКонтакте</span>
        <strong class="gd-contact-card__value">leonid_ter</strong>
        <span class="gd-contact-card__action">
          Открыть профиль <span aria-hidden="true">↗</span>
        </span>
      </a>
    </div>
  </div>
</section>
