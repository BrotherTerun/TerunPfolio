---
layout: project-case
published: false
case_draft: true

title: "Tactical Agents — кейс геймдизайнера"
description: "Разбор проектирования ролей, способностей, контрплея и интеграции Tactical Agents в существующую игровую систему."

header_parent: "Все проекты"
header_current: "Tactical Agents"
header_back_url: "/gamedesign/#projects"

project_index: "02 / 05"
project_title: "Tactical Agents"
project_type: "Системный дизайн / D&D 5e"
project_summary: "Кейс о проектировании хоумбрю-системы тактических ролей, наборов способностей и их интеграции в существующую среду."

hero_image: "/assets/images/projects/tactical-agents.jpg"
hero_alt: "Tactical Agents — системный дизайн для D&D 5e"

project_facts:
  - label: "Роль"
    value: "Системный геймдизайн"
  - label: "Статус"
    value: "В разработке"
  - label: "Период"
    value: "Уточнить при наполнении"
  - label: "Формат"
    value: "Авторская игровая система"

project_stack:
  - "D&D 5e"
  - "Foundry VTT"
  - "JSON"
  - "JavaScript"
  - "Game Balance"

project_media_main:
  src: "/assets/images/projects/tactical-agents.jpg"
  alt: "Tactical Agents — системный дизайн для D&D 5e"
  label: "Основной материал"
  caption: "Ключевой кадр проекта"

project_gallery_label: "Скриншоты проекта"

project_gallery:
- src: "/assets/images/projects/tactical-agents/case02_media02.png"
  available: false
  filename: "case02_media02.png"
  alt: "Tactical Agents — материал 02"
  label: "MEDIA 02"
  caption: "Скриншот интерфейса, системы или инструмента"

- src: "/assets/images/projects/tactical-agents/case02_media03.png"
  available: false
  filename: "case02_media03.png"
  alt: "Tactical Agents — материал 03"
  label: "MEDIA 03"
  caption: "Скриншот интерфейса, системы или инструмента"

- src: "/assets/images/projects/tactical-agents/case02_media04.png"
  available: false
  filename: "case02_media04.png"
  alt: "Tactical Agents — материал 04"
  label: "MEDIA 04"
  caption: "Скриншот интерфейса, системы или инструмента"

- src: "/assets/images/projects/tactical-agents/case02_media05.png"
  available: false
  filename: "case02_media05.png"
  alt: "Tactical Agents — материал 05"
  label: "MEDIA 05"
  caption: "Скриншот интерфейса, системы или инструмента"

project_video:
  src: "/assets/video/projects/tactical-agents/case02_video01.mp4"
  filename: "case02_video01.mp4"
  mime: "video/mp4"
  poster: "/assets/images/projects/tactical-agents.jpg"

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
  title: "ProjectLegend"
  url: "/projects/project-legend/"

next_project:
  title: "ProjectBonfire"
  url: "/projects/project-bonfire/"
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
        Какую проблему существующей игры решала система, для кого она создавалась и какую часть разработки выполнял лично я.
      </p>
    </header>

    <div class="pc-parallel pc-parallel--context">
      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Контекст</span>
        <h3>Задача проекта</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут зафиксированы исходные ограничения D&D 5e, назначение тактических ролей и требования к совместимости.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Моя роль</span>
        <h3>Зона ответственности</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут описаны разработка механик, способностей, контрплея, балансировка и интеграция в Foundry VTT.
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
            Здесь будут роли, ресурсные циклы, способности, взаимодействия между агентами и принципы контрплея.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Реализация</span>
        <h3>Как решение проверено</h3>

        <div class="pc-placeholder">
          <p>
            Здесь будут структура данных, импортируемые элементы, интеграция в чужой код и проверка системы в VTT.
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
            Здесь появятся собранные игровые пакеты, готовые способности, статус тестирования и ограничения текущей версии.
          </p>
        </div>
      </article>

      <article class="pc-proof-column">
        <span class="pc-proof-column__label">Подтверждение</span>
        <h3>Факты и измеримые признаки</h3>

        <div class="pc-metric-grid">
          <div class="pc-metric">
            <strong>—</strong>
            <span>роли / способности</span>
          </div>

          <div class="pc-metric">
            <strong>—</strong>
            <span>готовая интеграция</span>
          </div>
        </div>
      </article>
    </div>

    {% include project-case-endcap.html %}
  </div>
</section>
