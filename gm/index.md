---
layout: gm
title: "Терун — ведущий НРИ"
description: "Онлайн-игры по настольным ролевым системам: ваншоты, кампании и авторские сценарии."
---

<section class="gm-hero gm-hero--profile" id="about">
  <div
    class="gm-hero__media"
    aria-hidden="true"
  ></div>

  <div class="gm-hero__shade"></div>

  <div class="gm-container gm-hero__content gm-hero-profile">
    <div class="gm-hero-profile__copy">
      <h1>Привет! Я Терун — ведущий НРИ.</h1>

      <p class="gm-hero__lead">
        Уже больше 6 лет веду ваншоты и кампании
        <span class="gm-text-accent gm-text-gold-glow">онлайн</span>.
        Делаю акцент на погружение в историю, взаимодействие между персонажами и сюжетные события. За своим столом я рад и опытным игрокам, и тем,
        кто только знакомится с настольными ролевыми играми. Присоединяйтесь ко мне в следующих приключениях!
      </p>

      <div class="gm-hero-profile__systems">
        <p>Системы, которые я успел поиграть и поводить:</p>
        <div class="gm-tag-list gm-tag-list--hero" aria-label="Системы и направления">
          <span>D&amp;D 5ed</span>
          <span>Witcher TTRPG</span>
          <span>Legend of the 5 Rings 4ed/5ed</span>
          <span>Adventures in Rokugan</span>
          <span>Cyberpunk RED</span>
          <span>Fate</span>
          <span>Vampire: The Masquerade</span>
          <span>Werewolf: The Apocalypse</span>
          <span>Hunter: The Reckoning</span>
        </div>
        <p>И некоторые другие.</p>
      </div>

      <div class="gm-actions">
        <a class="gm-button" href="#games">Записаться на игру</a>
        <a class="gm-button gm-button--ghost" href="#contact">Собрать группу</a>
      </div>
    </div>

    <aside class="gm-hero-profile__identity" aria-label="Портрет ведущего Теруна">
      <div
        class="gm-hero-profile__portrait"
        role="img"
        aria-label="Стилизованный портрет ведущего Теруна"
        style="background-image: url('{{ '/assets/images/gm/common/gm_portrait.png' | relative_url }}'); background-size: cover; background-position: center top; background-repeat: no-repeat;"
      ></div>
    </aside>
  </div>
</section>

<style>
  /*
    The games catalog is the only landing section allowed to grow beyond
    one viewport. It keeps one-screen minimum height, but never clips rows.
  */
  @media (min-width: 961px) {
    .gm-main > #games {
      height: auto;
      min-height: var(--gm-viewport-fit);
      overflow: visible;
    }

    .gm-main > #games > .gm-container {
      width: min(calc(100% - 48px), 1540px);
      height: auto;
      min-height: 0;
    }
  }

  /* Catalog cards keep the same six facts as the original large card. */
  .gm-games-grid--catalog .gm-game-card__facts > div:nth-child(2),
  .gm-games-grid--catalog .gm-game-card__facts > div:nth-child(3) {
    display: block;
  }

  /* The table image keeps its one-third column but is shown whole. */
  .gm-section--split .gm-split__media {
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
  }

  .gm-split__included {
    margin-top: clamp(20px, 3dvh, 32px);
  }

  .gm-split__included .gm-section__heading {
    margin-bottom: clamp(12px, 2dvh, 22px);
  }
</style>

<section class="gm-section gm-section--paper" id="games">
  <div class="gm-container">
    <div class="gm-section__heading gm-section__heading--stacked gm-section__heading--centered">
      <div>
        <h2>Отправиться в приключение</h2>
      </div>
      <p>
        Здесь вы можете узнать о том, какие игры планируются в ближайшее время.
        Нажав на карточку, можно подробнее узнать о конкретной истории, а затем
        записаться и присоединиться к группе.
      </p>
    </div>

    {% assign gm_game_count = site.data.gm_games | size %}
    <div class="gm-games-grid{% if gm_game_count > 1 %} gm-games-grid--catalog{% else %} gm-games-grid--single{% endif %}">
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
    style="background-image: url('{{ '/assets/images/gm/common/table_atmosphere.png' | relative_url }}'); background-size: contain; background-position: center; background-repeat: no-repeat;"
  ></div>

  <div class="gm-split__content">
    <div class="gm-section__heading gm-section__heading--stacked">
      <h2>Как я провожу игры</h2>
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

    <div class="gm-split__included">
      <div class="gm-section__heading">
        <div>
          <h2>Что потребуется для игры</h2>
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
  </div>
</section>

<section class="gm-section gm-section--reviews" id="reviews">
  <div class="gm-container">
    <div class="gm-section__heading">
      <div>
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
      <h2>Частые вопросы</h2>
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
    <h2>Напишите мне — подберём игру и формат.</h2>
    <div class="gm-actions">
      <a class="gm-button" href="https://t.me/BrotherTerun" target="_blank" rel="noopener noreferrer">Telegram</a>
      <span class="gm-contact__note">Форма записи и политика оплаты будут подключены отдельным этапом.</span>
    </div>
  </div>
</section>
