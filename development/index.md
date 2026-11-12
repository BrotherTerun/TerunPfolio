---
layout: development
title: "Терещенко Леонид — веб-разработка и Python"
description: "Портфолио Терещенко Леонида: разработка веб-интерфейсов на HTML, CSS и JavaScript, а также прикладные проекты на Python."
header_parent: "Portfolio"
header_current: "Development"
---

<section class="dlmt-screen dlmt-screen--with-sidebar dlmt-hero dlmt-container" id="profile">
  <div class="dlmt-hero__stage">
    <div class="dlmt-hero__content">
      <p class="dlmt-eyebrow">Терещенко Леонид · Разработка ПО</p>
      <h1>Разрабатываю веб-интерфейсы на HTML, CSS и JavaScript.</h1>
      <p class="dlmt-hero__lead">Создаю и развиваю веб-проекты: продумываю структуру страниц, работаю с разметкой и стилями, настраиваю адаптивное отображение и реализую интерактивность на JavaScript. Также занимаюсь прикладной разработкой на Python.</p>
      <div class="dlmt-hero__meta" aria-label="Основные технологии"><span>HTML · CSS · JavaScript</span><span>Jekyll · Liquid</span><span>Python · Git · GitHub</span></div>
      <div class="dlmt-actions"><a class="dlmt-button" href="#projects" data-section-link>Посмотреть проекты</a><a class="dlmt-button dlmt-button--ghost" href="#contacts" data-section-link>Связаться</a></div>
    </div>
    <div class="dlmt-hero__visual"><img src="{{ '/assets/images/avatar_1_2.png' | relative_url }}" alt="Терещенко Леонид" class="dlmt-hero__avatar"></div>
  </div>
</section>

<section class="dlmt-screen dlmt-screen--with-sidebar dlmt-section dlmt-container" id="skills" aria-labelledby="skills-title">
  <div class="dlmt-section__header dlmt-section__header--compact"><p class="dlmt-section-index">01 / SKILLS</p><h2 id="skills-title">Технические компетенции</h2></div>
  <div class="dlmt-skill-grid">
    <article class="dlmt-skill-card"><span class="dlmt-skill-card__index">01</span><h3>HTML и CSS</h3><ul><li>Семантическая разметка и структура страниц</li><li>Стилизация интерфейсов и работа с визуальной иерархией</li><li>Адаптивная вёрстка для разных размеров экранов</li><li>Поддержание единого оформления страниц и компонентов</li></ul><div class="dlmt-skill-card__cases"><span>Практика</span><a href="https://github.com/BrotherTerun/TerunPfolio" target="_blank" rel="noopener noreferrer">TerunPfolio</a></div></article>
    <article class="dlmt-skill-card"><span class="dlmt-skill-card__index">02</span><h3>JavaScript и интерфейсы</h3><ul><li>Добавление интерактивности на клиентской стороне</li><li>Обработка действий пользователя и управление состоянием элементов</li><li>Работа с событиями и динамическим содержимым страницы</li><li>Связка разметки, стилей и сценариев в интерфейсе</li></ul><div class="dlmt-skill-card__cases"><span>Практика</span><a href="https://brotherterun.github.io/TerunPfolio/" target="_blank" rel="noopener noreferrer">Интерактивные элементы портфолио</a></div></article>
    <article class="dlmt-skill-card"><span class="dlmt-skill-card__index">03</span><h3>Структура веб-проектов</h3><ul><li>Работа с шаблонами Jekyll и Liquid</li><li>Организация страниц и структурированного контента</li><li>Подключение внешних ресурсов и сервисов</li><li>Ведение проекта и публикация изменений через GitHub</li></ul><div class="dlmt-skill-card__cases"><span>Инструменты</span><a href="https://jekyllrb.com/docs/" target="_blank" rel="noopener noreferrer">Jekyll</a><a href="https://docs.github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></div></article>
    <article class="dlmt-skill-card"><span class="dlmt-skill-card__index">04</span><h3>Python и прикладная разработка</h3><ul><li>Разработка прикладной логики</li><li>Обработка и преобразование данных</li><li>Создание настольных интерфейсов на PySide6</li><li>Работа с файлами, конфигурациями и локальным хранением</li></ul><div class="dlmt-skill-card__cases"><span>Практика</span><a href="#projects">BalanceCraft</a></div></article>
  </div>
</section>

<section class="dlmt-screen dlmt-screen--with-sidebar dlmt-section dlmt-section--projects" id="projects" aria-labelledby="projects-title" data-project-carousel>
  <div class="dlmt-project-carousel">
    <div class="dlmt-project-heading"><p class="dlmt-section-index">02 / PROJECTS</p><h2 id="projects-title">Избранные проекты</h2></div>
    <button class="dlmt-carousel-button dlmt-carousel-button--prev" type="button" data-carousel-prev aria-label="Предыдущий проект"><span aria-hidden="true">‹</span></button>
    <div class="dlmt-project-viewport" data-carousel-viewport tabindex="0" role="region" aria-roledescription="карусель" aria-label="Проекты">
      <div class="dlmt-project-track" data-carousel-track>
        <article class="dlmt-project-card dlmt-project-card--legend" data-project-slide aria-label="TerunPfolio"><div class="dlmt-project-card__overlay"></div><div class="dlmt-project-card__content"><p class="dlmt-project-card__type">Личный веб-проект · В разработке</p><h3><a class="dlmt-project-card__title-link" href="https://brotherterun.github.io/TerunPfolio/" target="_blank" rel="noopener noreferrer">TerunPfolio</a></h3><p>Многостраничный сайт на Jekyll. В проекте использую шаблоны Liquid и структурированные данные, создаю отдельные разделы с собственным оформлением, адаптирую страницы под разные экраны и реализую интерактивные элементы на JavaScript.</p><p class="dlmt-project-card__stack">HTML · CSS · JavaScript · Jekyll · Liquid · YAML · GitHub Pages</p></div></article>
        <article class="dlmt-project-card dlmt-project-card--balance" data-project-slide aria-label="BalanceCraft"><div class="dlmt-project-card__overlay"></div><div class="dlmt-project-card__content"><p class="dlmt-project-card__type">Прикладной инструмент · Дипломный проект</p><h3><a class="dlmt-project-card__title-link" href="https://github.com/BrotherTerun" target="_blank" rel="noopener noreferrer">BalanceCraft</a></h3><p>Прототип настольного приложения для анализа игровых данных и показателей игровой экономики. В проекте реализованы пользовательский интерфейс, обработка данных и локальный демонстрационный режим.</p><p class="dlmt-project-card__stack">Python · PySide6 · Qt WebEngine · HTML · CSS · JavaScript · локальное хранилище</p></div></article>
      </div>
    </div>
    <button class="dlmt-carousel-button dlmt-carousel-button--next" type="button" data-carousel-next aria-label="Следующий проект"><span aria-hidden="true">›</span></button>
    <div class="dlmt-project-pagination" data-carousel-pagination aria-label="Выбор проекта"></div><p class="dlmt-carousel-status" data-carousel-status aria-live="polite"></p>
  </div>
</section>

<section class="dlmt-screen dlmt-screen--with-sidebar dlmt-section dlmt-section--background dlmt-container" id="experience" aria-labelledby="experience-title">
  <div class="dlmt-section__header dlmt-section__header--compact"><p class="dlmt-section-index">03 / EXPERIENCE & EDUCATION</p><h2 id="experience-title">Опыт и образование</h2></div>
  <div class="dlmt-background-layout dlmt-background-layout--combined">
    <article class="dlmt-background-card dlmt-background-card--profile"><span class="dlmt-label">Практический опыт · Личные и учебные проекты</span><h3>Самостоятельная разработка</h3><p>Основной практический опыт получил при самостоятельной разработке веб-проектов и прикладных программных инструментов. В веб-разработке регулярно работаю со связкой HTML, CSS и JavaScript: от построения структуры и оформления страниц до адаптивной вёрстки и клиентской интерактивности.</p><p>В проектах на Python занимаюсь прикладной логикой, обработкой данных и пользовательскими интерфейсами. Самостоятельно организую работу над задачами — от проектирования и реализации до проверки и публикации результата.</p><div class="dlmt-background-card__facts"><span>Visual Studio Code</span><span>Git и GitHub</span></div></article>
    <article class="dlmt-background-card dlmt-background-card--education"><span class="dlmt-label">2026 · Бакалавриат</span><h3>Прикладная информатика</h3><p class="dlmt-background-card__degree">Высшее образование по направлению 09.03.03 «Прикладная информатика».</p><div class="dlmt-education-details"><p><span>Выпускная работа</span>Разработка инструмента аналитики игровой экономики для инди-игр.</p><p><span>Результат защиты</span>«Отлично».</p></div></article>
  </div>
</section>

<section class="dlmt-screen dlmt-screen--with-sidebar dlmt-contact-screen" id="contacts" aria-labelledby="contacts-title">
  <div class="dlmt-contact dlmt-container">
    <div class="dlmt-contact-intro"><p class="dlmt-section-index">04 / CONTACTS</p><h2 id="contacts-title">Обсудим задачу?</h2><p>Открыт к предложениям о работе, стажировках и небольших проектах в области веб-разработки: вёрстке, создании интерфейсов и доработке сайтов. Также рассматриваю задачи по прикладной разработке на Python.</p></div>
    <div class="dlmt-contact-grid" aria-label="Способы связи">
      <a class="dlmt-contact-card" href="https://t.me/BrotherTerun" target="_blank" rel="noopener noreferrer"><span class="dlmt-contact-card__service">Telegram</span><strong class="dlmt-contact-card__value">@BrotherTerun</strong><span class="dlmt-contact-card__action">Открыть профиль <span aria-hidden="true">↗</span></span></a>
      <button class="dlmt-contact-card dlmt-contact-card--copy" type="button" data-copy-contact="leonrob34@ya.ru" aria-label="Скопировать адрес электронной почты leonrob34@ya.ru"><span class="dlmt-contact-card__service">Email</span><strong class="dlmt-contact-card__value">leonrob34@ya.ru</strong><span class="dlmt-contact-card__action" data-copy-label>Скопировать <span aria-hidden="true">⧉</span></span><span class="dlmt-contact-card__toast" data-copy-toast role="status" aria-live="polite">Скопировано!</span></button>
      <a class="dlmt-contact-card" href="https://github.com/BrotherTerun" target="_blank" rel="noopener noreferrer"><span class="dlmt-contact-card__service">GitHub</span><strong class="dlmt-contact-card__value">BrotherTerun</strong><span class="dlmt-contact-card__action">Открыть профиль <span aria-hidden="true">↗</span></span></a>
      <a class="dlmt-contact-card" href="https://vk.ru/leonid_ter" target="_blank" rel="noopener noreferrer"><span class="dlmt-contact-card__service">ВКонтакте</span><strong class="dlmt-contact-card__value">leonid_ter</strong><span class="dlmt-contact-card__action">Открыть профиль <span aria-hidden="true">↗</span></span></a>
    </div>
  </div>
  <footer class="dlmt-contact-footer dlmt-container"><span>Copyright © {{ 'now' | date: '%Y' }} Tereshenko Leonid. All rights reserved.</span><a href="{{ '/' | relative_url }}">Вернуться на главную</a></footer>
</section>
