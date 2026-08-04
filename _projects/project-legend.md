---
layout: project-case
published: true
case_draft: true

title: "ProjectLegend — кейс геймдизайнера"
description: "Разбор проектирования систем, контентной архитектуры и инструментов визуальной новеллы ProjectLegend."

header_parent: "Все проекты"
header_current: "ProjectLegend"
header_back_url: "/gamedesign/#projects"

project_index: "01 / 05"
project_title: "ProjectLegend"
project_type: "Визуальная новелла · Unity-прототип"
project_summary: "Авторская визуальная новелла «Самурайская Смерть», для которой я проектирую игровые системы, data-driven архитектуру диалогов и инструменты производства контента. Решения проверяются в рабочем Unity-прототипе."

hero_image: "/assets/images/projects/project-legend.jpg"
hero_alt: "ProjectLegend — визуальная новелла"

project_facts:
  - label: "Роль"
    value: "Системный и технический геймдизайнер"
  - label: "Статус"
    value: "Рабочий прототип"
  - label: "Период"
    value: "2026 — настоящее время"
  - label: "Формат"
    value: "Самостоятельный проект"

project_stack:
  - "Unity"
  - "C#"
  - "JSON"
  - "XNode"
  - "Editor Tooling"

project_media_main:
  src: "/assets/images/projects/project-legend.jpg"
  alt: "ProjectLegend — основной визуальный материал"
  label: "Основной материал"
  caption: "Игровая сцена и граф диалога"

project_gallery_label: "Скриншоты интерфейса и инструментов"

project_gallery:
  - src: "/assets/images/projects/project-legend/case01_media02.png"
    available: false
    filename: "case01_media02.png"
    alt: "ProjectLegend — материал 02"
    label: "MEDIA 02"
    caption: "Рабочая диалоговая сцена в Unity"

  - src: "/assets/images/projects/project-legend/case01_media03.png"
    available: false
    filename: "case01_media03.png"
    alt: "ProjectLegend — материал 03"
    label: "MEDIA 03"
    caption: "Визуальный граф диалога в XNode"

  - src: "/assets/images/projects/project-legend/case01_media04.png"
    available: false
    filename: "case01_media04.png"
    alt: "ProjectLegend — материал 04"
    label: "MEDIA 04"
    caption: "Структура данных диалогового узла"

  - src: "/assets/images/projects/project-legend/case01_media05.png"
    available: false
    filename: "case01_media05.png"
    alt: "ProjectLegend — материал 05"
    label: "MEDIA 05"
    caption: "Проверка и валидация контента"

project_video:
  src: "/assets/video/projects/project-legend/case01_video01.mp4"
  filename: "case01_video01.mp4"
  mime: "video/mp4"
  poster: "/assets/images/projects/project-legend.jpg"

case_nav:
  - id: "overview"
    label: "Обзор"
  - id: "context-role"
    label: "Контекст и роль"
  - id: "design-build"
    label: "Дизайн и реализация"
  - id: "result"
    label: "Результат"

next_project:
  title: "Tactical Agents"
  url: "/projects/tactical-agents/"
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
        ProjectLegend требует одновременно поддерживать большой объём
        ветвящегося контента и сохранять возможность быстро проверять
        его в Unity. Поэтому контентная архитектура и инструменты автора
        стали частью основного дизайн-решения.
      </p>
    </header>

    <div class="pc-parallel pc-parallel--context">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Контекст</span>
        <h3>Задача проекта</h3>

        <div class="pc-proof-content">
          <p>
            Визуальная новелла предполагает большой объём связанных
            диалогов, выборов, портретов и изменений игрового состояния.
            Хранение такого контента непосредственно в коде усложняет
            редактирование, повышает риск ошибок в переходах и замедляет
            проверку сцен.
          </p>

          <p>
            Поэтому проект строится вокруг отделения контента от
            runtime-логики: сцены описываются данными, редактируются
            через визуальный граф и проверяются перед запуском.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Моя роль</span>
        <h3>Зона ответственности</h3>

        <div class="pc-proof-content">
          <p>
            Я самостоятельно проектирую игровые и контентные системы,
            определяю структуру данных и пользовательский workflow,
            а затем проверяю решения в рабочем Unity-прототипе.
          </p>

          <p>
            В мою зону ответственности входят диалоговая модель,
            выборы и переходы, параметры персонажа, редактор графов,
            парсер и валидатор данных, runtime-интерфейс сцен и
            документация системы.
          </p>
        </div>
      </article>
    </div>

    <div class="pc-proof-strip">
      <div>
        <span>Ограничение</span>
        <strong>
          Большой объём ветвящегося контента не должен храниться в коде
        </strong>
      </div>

      <div>
        <span>Цель</span>
        <strong>
          Ускорить создание, изменение и проверку диалоговых сцен
        </strong>
      </div>

      <div>
        <span>Критерий результата</span>
        <strong>
          Сцена собирается из данных, проверяется и запускается в Unity
        </strong>
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
        Дизайн-решение и его рабочая реализация показаны параллельно:
        структура системы рядом с тем, как она представлена в данных,
        инструментах и runtime-прототипе.
      </p>
    </header>

    <div class="pc-parallel pc-parallel--design">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Проектирование</span>
        <h3>Как устроена система</h3>

        <div class="pc-proof-content pc-proof-groups">
          <div class="pc-proof-group">
            <strong>Модель диалога</strong>
            <p>
              Узел содержит идентификатор, автора реплики, текст,
              переходы, варианты выбора и связанные портреты.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Ветвление</strong>
            <p>
              Каждый выбор явно определяет следующую точку графа,
              поэтому структуру сцены можно проверить до запуска.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Игровое состояние</strong>
            <p>
              Параметры персонажа и сюжетные значения вынесены
              в отдельную модель и могут влиять на последствия выбора.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Workflow автора</strong>
            <p>
              Создание узлов → соединение переходов → заполнение данных
              → проверка структуры → запуск сцены.
            </p>
          </div>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Реализация</span>
        <h3>Как решение проверено</h3>

        <div class="pc-proof-content pc-proof-groups">
          <div class="pc-proof-group">
            <strong>Data-driven runtime</strong>
            <p>
              Диалоги хранятся в JSON отдельно от исполняющего кода
              и загружаются Unity при запуске сцены.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Визуальный редактор</strong>
            <p>
              Граф на базе XNode показывает узлы и связи между ними
              до запуска игры.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Парсер и валидатор</strong>
            <p>
              Структура данных и ссылки между узлами проверяются
              до передачи сцены в runtime.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Интерфейс сцены</strong>
            <p>
              В прототипе собраны вывод реплик, портретов, вариантов
              выбора и журнал истории диалога.
            </p>
          </div>
        </div>
      </article>
    </div>

    <div class="pc-evidence-line">
      <div class="pc-evidence-line__item">
        <span>DESIGN</span>
        <strong>
          Модель узла, ветвления и состояния диалоговой сцены
        </strong>
      </div>

      <div class="pc-evidence-line__item">
        <span>BUILD</span>
        <strong>
          Графовый редактор, валидация данных и запуск в Unity
        </strong>
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
        Проект уже демонстрирует полный путь контента от структуры
        диалога и визуального графа до рабочей сцены в Unity.
        Количественные метрики будут добавлены после проверки
        актуальной версии прототипа.
      </p>
    </header>

    <div class="pc-result-grid">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Готовый результат</span>
        <h3>Рабочий прототип и инструменты</h3>

        <div class="pc-proof-content pc-proof-groups">
          <div class="pc-proof-group">
            <strong>Контент</strong>
            <p>
              Последовательные и ветвящиеся диалоги, варианты ответа,
              портреты персонажей и переходы между узлами.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Инструменты</strong>
            <p>
              Визуальный редактор графа, парсер данных и валидатор
              структуры диалоговой сцены.
            </p>
          </div>

          <div class="pc-proof-group">
            <strong>Runtime</strong>
            <p>
              Игровой интерфейс сцены, вывод выбора, журнал истории
              и обработка данных в Unity.
            </p>
          </div>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Подтверждение</span>
        <h3>Проверяемые признаки</h3>

        <div class="pc-metric-grid">
          <div class="pc-metric">
            <strong class="pc-metric__status">WORKING</strong>
            <span>Граф → JSON → Unity</span>
          </div>

          <div class="pc-metric">
            <strong class="pc-metric__status">VALIDATED</strong>
            <span>Структура проверяется до запуска</span>
          </div>
        </div>
      </article>
    </div>

    {% include project-case-endcap.html %}
  </div>
</section>
