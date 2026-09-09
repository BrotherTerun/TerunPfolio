---
layout: gm
title: "Терун — ведущий НРИ"
description: "Онлайн-игры по настольным ролевым системам: ваншоты, кампании и авторские сценарии."
---

<section class="gm-hero" id="top">
  <div
    class="gm-hero__media"
    aria-hidden="true"
    style="background-image: url('{{ '/assets/images/gm/common/hero_key_art.png' | relative_url }}'); background-size: cover; background-position: center; background-repeat: no-repeat;"
  ></div>

  <div class="gm-hero__shade"></div>

  <div class="gm-container gm-hero__content">
    <p class="gm-eyebrow">Онлайн НРИ · Foundry VTT · Discord</p>
    <h1>Истории, в которых решения игроков действительно что-то меняют.</h1>
    <p class="gm-hero__lead">
      Провожу ваншоты и кампании с акцентом на выбор, последствия, атмосферу и понятные правила за столом.
    </p>

    <div class="gm-actions">
      <a class="gm-button" href="#games">Выбрать приключение</a>
      <a class="gm-button gm-button--ghost" href="#contact">Собрать свою группу</a>
    </div>

    <div class="gm-hero__facts" aria-label="Коротко о формате">
      <span>6+ лет за столом</span>
      <span>Онлайн</span>
      <span>Русский язык</span>
    </div>
  </div>
</section>

<section class="gm-section gm-section--paper" id="games">
  <div class="gm-container">
    <div class="gm-section__heading">
      <div>
        <p class="gm-eyebrow">Сейчас можно сыграть</p>
        <h2>Приключения</h2>
      </div>
      <p>
        Здесь будут появляться игры с актуальным набором. Каждая карточка ведёт на отдельную страницу сценария с полным описанием формата и условий.
      </p>
    </div>

    <div class="gm-games-grid">
      {% for game in site.data.gm_games %}
        {% include gm-game-card.html game=game %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="gm-section gm-section--split" id="table">
  <div
    class="gm-split__media"
    role="img"
    aria-label="Онлайн-сессия: камеры игроков и игровой стол Foundry VTT"
    style="background-image: url('{{ '/assets/images/gm/common/table_atmosphere.png' | relative_url }}'); background-size: cover; background-position: center top; background-repeat: no-repeat;"
  ></div>

  <div class="gm-split__content">
    <div class="gm-section__heading gm-section__heading--stacked">
      <p class="gm-eyebrow">Что будет за столом</p>
      <h2>Не экскурсия по сценарию, а игра про решения.</h2>
    </div>

    <div class="gm-principles">
      <article>
        <span>01</span>
        <h3>Свобода действий</h3>
        <p>Черновой тезис. Здесь будет короткое объяснение того, насколько игра поддерживает нестандартные решения и импровизацию.</p>
      </article>
      <article>
        <span>02</span>
        <h3>Последствия</h3>
        <p>Черновой тезис. Здесь будет формулировка о том, как выборы игроков меняют ситуацию, отношения и дальнейший ход истории.</p>
      </article>
      <article>
        <span>03</span>
        <h3>Подготовка без лишней рутины</h3>
        <p>Черновой тезис. Здесь будет описание того, что ведущий берёт на себя, а что требуется от игрока перед началом.</p>
      </article>
    </div>
  </div>
</section>

<section class="gm-section gm-section--dark" id="included">
  <div class="gm-container">
    <div class="gm-section__heading">
      <div>
        <p class="gm-eyebrow">Что входит в игру</p>
        <h2>Всё необходимое для старта</h2>
      </div>
      <p>Этот блок — не про «премиальность», а про конкретику: за что именно платит игрок и что уже подготовлено к сессии.</p>
    </div>

    <div class="gm-feature-grid">
      <article><strong>Foundry VTT</strong><span>Подготовленные сцены, карты и игровые материалы.</span></article>
      <article><strong>Голосовая связь</strong><span>Discord или другой согласованный канал.</span></article>
      <article><strong>Подготовка к игре</strong><span>Черновой слот под персонажей, памятки и короткий ввод перед сессией.</span></article>
      <article><strong>Сопровождение</strong><span>Черновой слот под правила переноса, отмены и связь между играми.</span></article>
    </div>
  </div>
</section>

<section class="gm-section gm-section--about" id="about">
  <div class="gm-container gm-about">
    <div
      class="gm-about__portrait"
      role="img"
      aria-label="Стилизованный портрет ведущего Теруна"
      style="background-image: url('{{ '/assets/images/gm/common/gm_portrait.png' | relative_url }}'); background-size: cover; background-position: center top; background-repeat: no-repeat;"
    ></div>

    <div class="gm-about__content">
      <p class="gm-eyebrow">О ведущем</p>
      <h2>Терун</h2>
      <p class="gm-about__lead">
        Более шести лет играю и веду настольные ролевые игры. Работал с D&D, Pathfinder, Legend of the Five Rings, Vampire: The Masquerade и другими системами.
      </p>
      <p>
        Здесь позже будет короткий личный текст: какие истории мне интереснее всего вести, что я считаю хорошей игрой и кому мой стиль подходит лучше всего.
      </p>

      <div class="gm-tag-list" aria-label="Системы и направления">
        <span>D&D</span>
        <span>Pathfinder</span>
        <span>L5R</span>
        <span>Vampire: The Masquerade</span>
        <span>Авторские сценарии</span>
      </div>
    </div>
  </div>
</section>

<section class="gm-section gm-section--reviews" id="reviews">
  <div class="gm-container">
    <div class="gm-section__heading">
      <div>
        <p class="gm-eyebrow">Отзывы игроков</p>
        <h2>Как это ощущается за столом</h2>
      </div>
      <p>Сюда пойдут реальные отзывы участников прежних игр. До публикации коммерческих кейсов не называем их «отзывами клиентов».</p>
    </div>

    <div class="gm-review-grid">
      {% for review in site.data.gm_reviews %}
        <blockquote class="gm-review">
          <p>{{ review.quote }}</p>
          <footer>
            <strong>{{ review.author }}</strong>
            <span>{{ review.context }}</span>
          </footer>
        </blockquote>
      {% endfor %}
    </div>
  </div>
</section>

<section class="gm-section gm-section--process" id="process">
  <div class="gm-container">
    <div class="gm-section__heading gm-section__heading--stacked">
      <p class="gm-eyebrow">Как попасть за стол</p>
      <h2>Четыре шага до игры</h2>
    </div>

    <ol class="gm-process">
      <li><span>01</span><strong>Выберите игру</strong><p>Посмотрите актуальные приключения или предложите свой формат.</p></li>
      <li><span>02</span><strong>Оставьте заявку</strong><p>Напишите в Telegram. Форму записи подключим после утверждения структуры.</p></li>
      <li><span>03</span><strong>Согласуем детали</strong><p>Дата, состав группы, опыт игроков и необходимые организационные моменты.</p></li>
      <li><span>04</span><strong>Играем</strong><p>Получаете материалы для подключения и приходите к назначенному времени.</p></li>
    </ol>
  </div>
</section>

<section class="gm-section gm-section--faq" id="faq">
  <div class="gm-container gm-faq-layout">
    <div>
      <p class="gm-eyebrow">FAQ</p>
      <h2>Перед первой игрой</h2>
    </div>

    <div class="gm-faq-list">
      <details>
        <summary>Можно прийти без опыта в НРИ?</summary>
        <p>[Ответ готовим после утверждения правил конкретного продукта.]</p>
      </details>
      <details>
        <summary>Можно записаться своей компанией?</summary>
        <p>[Здесь будут условия частного бронирования стола.]</p>
      </details>
      <details>
        <summary>Нужно ли заранее создавать персонажа?</summary>
        <p>[Ответ зависит от конкретной игры и будет вынесен также на страницу сценария.]</p>
      </details>
      <details>
        <summary>Как проходят оплата, переносы и отмены?</summary>
        <p>[Политика будет сформулирована до публичного запуска продаж.]</p>
      </details>
    </div>
  </div>
</section>

<section class="gm-contact" id="contact">
  <div
    class="gm-contact__media"
    role="img"
    aria-label="Игровая компания за общим столом"
    style="background-image: url('{{ '/assets/images/gm/common/final-cta.png' | relative_url }}'); background-size: cover; background-position: center; background-repeat: no-repeat;"
  ></div>
  <div class="gm-contact__shade"></div>

  <div class="gm-container gm-contact__content">
    <p class="gm-eyebrow">Готовы собрать стол?</p>
    <h2>Напишите мне — подберём игру и формат.</h2>
    <div class="gm-actions">
      <a class="gm-button" href="https://t.me/BrotherTerun" target="_blank" rel="noopener noreferrer">Telegram</a>
      <span class="gm-contact__note">Форма записи и политика оплаты будут подключены отдельным этапом.</span>
    </div>
  </div>
</section>
