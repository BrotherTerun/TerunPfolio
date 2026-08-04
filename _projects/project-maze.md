---
layout: project-case
published: false
case_draft: true

title: "ProjectMaze — кейс геймдизайнера"
description: "Разбор алгоритмов генерации, проверки связности и валидации процедурных уровней ProjectMaze."

header_parent: "Все проекты"
header_current: "ProjectMaze"
header_back_url: "/gamedesign/#projects"

project_index: "04 / 05"
project_title: "ProjectMaze"
project_type: "Процедурная генерация"
project_summary: "Кейс о процедурной генерации уровней: алгоритмы, контроль связности, ограничения и автоматическая проверка результата."

hero_image: "/assets/images/projects/project-maze.jpg"
hero_alt: "ProjectMaze — процедурная генерация лабиринтов"

project_facts:
  - label: "Роль"
    value: "Technical Game Designer"
  - label: "Статус"
    value: "Прототип"
  - label: "Период"
    value: "Уточнить при наполнении"
  - label: "Формат"
    value: "Учебный / портфолийный проект"

project_stack:
  - "Algorithms"
  - "Procedural Generation"
  - "Validation"
  - "C#"
  - "Unity"

project_media_main:
  src: "/assets/images/projects/project-maze.jpg"
  alt: "ProjectMaze — процедурная генерация лабиринтов"
  label: "Основной материал"
  caption: "Ключевой кадр проекта"

project_gallery_label: "Скриншоты проекта"

project_gallery:
- src: "/assets/images/projects/project-maze/case04_media02.png"
  available: false
  filename: "case04_media02.png"
  alt: "ProjectMaze — материал 02"
  label: "MEDIA 02"
  caption: "Скриншот интерфейса, системы или инструмента"

- src: "/assets/images/projects/project-maze/case04_media03.png"
  available: false
  filename: "case04_media03.png"
  alt: "ProjectMaze — материал 03"
  label: "MEDIA 03"
  caption: "Скриншот интерфейса, системы или инструмента"

- src: "/assets/images/projects/project-maze/case04_media04.png"
  available: false
  filename: "case04_media04.png"
  alt: "ProjectMaze — материал 04"
  label: "MEDIA 04"
  caption: "Скриншот интерфейса, системы или инструмента"

- src: "/assets/images/projects/project-maze/case04_media05.png"
  available: false
  filename: "case04_media05.png"
  alt: "ProjectMaze — материал 05"
  label: "MEDIA 05"
  caption: "Скриншот интерфейса, системы или инструмента"

project_video:
  src: "/assets/video/projects/project-maze/case04_video01.mp4"
  filename: "case04_video01.mp4"
  mime: "video/mp4"
  poster: "/assets/images/projects/project-maze.jpg"

case_nav:
  - id: "overview"
    label: "Обзор"
  - id: "context-role"
    label: "Контекст и роль"
  - id: "design-build"
    label: "Дизайн и реализация"
  - id: "result"
    label: "Результат"

previous_project:
  title: "ProjectBonfire"
  url: "/projects/project-bonfire/"

next_project:
  title: "BalanceCraft"
  url: "/projects/balance-craft/"
---

<section
  class="pc-screen pc-case-screen"
  id="context-role"
  data-case-screen
>
  <div class="pc-screen__inner gd-container">
    <header class="pc-screen__heading">
      <p class="pc-section-index">01 / CONTEXT</p>
      <h2>Контекст и моя роль</h2>
      <p>
        Какую задачу генерации требовалось решить, какие свойства уровня были обязательными и за что отвечал лично я.
      </p>
    </header>

    <div class="pc-parallel pc-parallel--context">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Контекст</span>
        <h3>Задача проекта</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут требования к структуре лабиринта, связности, вариативности и предсказуемости результата.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Моя роль</span>
        <h3>Зона ответственности</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут описаны выбор алгоритмов, реализация генератора, проверки корректности и визуализация результатов.
          </p>
        </div>
      </article>
    </div>

    <div class="pc-proof-strip">
      <div>
        <span>Ограничение</span>
        <strong>Заполнить при разборе проекта</strong>
      </div>

      <div>
        <span>Цель</span>
        <strong>Заполнить при разборе проекта</strong>
      </div>

      <div>
        <span>Критерий результата</span>
        <strong>Заполнить при разборе проекта</strong>
      </div>
    </div>
  </div>
</section>

<section
  class="pc-screen pc-case-screen"
  id="design-build"
  data-case-screen
>
  <div class="pc-screen__inner gd-container">
    <header class="pc-screen__heading">
      <p class="pc-section-index">02 / DESIGN &amp; BUILD</p>
      <h2>Проектирование и реализация</h2>
      <p>
        Дизайн-решение и его рабочая реализация показываются
        параллельно: правило рядом с тем, как оно было проверено.
      </p>
    </header>

    <div class="pc-parallel pc-parallel--design">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Проектирование</span>
        <h3>Как устроена система</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут правила построения, ограничения пространства, параметры генерации и критерии допустимого уровня.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Реализация</span>
        <h3>Как решение проверено</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут алгоритмы, проверка связности, валидация и инструменты анализа сгенерированных карт.
          </p>
        </div>
      </article>
    </div>

    <div class="pc-evidence-line">
      <div class="pc-evidence-line__item">
        <span>DESIGN</span>
        <strong>Место под схему или фрагмент документации</strong>
      </div>

      <div class="pc-evidence-line__item">
        <span>BUILD</span>
        <strong>Место под скриншот инструмента или прототипа</strong>
      </div>
    </div>
  </div>
</section>

<section
  class="pc-screen pc-case-screen pc-result-screen"
  id="result"
  data-case-screen
>
  <div class="pc-screen__inner gd-container">
    <header class="pc-screen__heading">
      <p class="pc-section-index">03 / RESULT</p>
      <h2>Результат</h2>
      <p>
        Что существует в рабочем виде и какие факты подтверждают
        полезность выполненной работы.
      </p>
    </header>

    <div class="pc-result-grid">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Готовый результат</span>
        <h3>Что было доведено до работы</h3>

        <div class="pc-placeholder">
          <p>
            Здесь появятся рабочий генератор, примеры уровней, проверяемые свойства и ограничения текущей реализации.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Подтверждение</span>
        <h3>Факты и измеримые признаки</h3>

        <div class="pc-metric-grid">
          <div class="pc-metric">
            <strong>—</strong>
            <span>варианты генерации</span>
          </div>

          <div class="pc-metric">
            <strong>—</strong>
            <span>автовалидация</span>
          </div>
        </div>
      </article>
    </div>

    {% include project-case-endcap.html %}
  </div>
</section>
