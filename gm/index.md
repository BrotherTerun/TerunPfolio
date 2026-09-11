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

  /*
    Keep the screenshot whole, but frame it as a deliberate inset inside
    the one-third media column instead of letting it float in dead space.
  */
  .gm-section--split .gm-split__media {
    position: relative;
    padding: clamp(30px, 4dvh, 44px) clamp(12px, 1vw, 18px);
    background-size: contain !important;
    background-position: center !important;
    background-repeat: no-repeat !important;
    background-origin: content-box !important;
    background-clip: content-box !important;
  }

  .gm-section--split .gm-split__media::before,
  .gm-section--split .gm-split__media::after {
    content: "";
    position: absolute;
    left: 50%;
    width: min(72%, 420px);
    height: 1px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, var(--gm-transparent), var(--gm-gold-a22), var(--gm-transparent));
    pointer-events: none;
  }

  .gm-section--split .gm-split__media::before {
    top: clamp(18px, 2.5dvh, 28px);
  }

  .gm-section--split .gm-split__media::after {
    bottom: clamp(18px, 2.5dvh, 28px);
  }

  .gm-split__column--principles .gm-principles article {
    padding-left: 0;
  }

  .gm-split__column--requirements .gm-feature-grid article::before {
    content: none;
    display: none;
  }

  /*
    The right two-thirds are two equal narrative columns:
    personal principles in the middle and concrete table requirements at right.
  */
  @media (min-width: 961px) {
    .gm-section--split .gm-split__content {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: clamp(26px, 2.2vw, 42px);
      align-items: stretch;
      padding:
        clamp(30px, 4.2dvh, 48px)
        clamp(30px, 2.4vw, 46px);
    }

    .gm-split__column {
      min-width: 0;
      min-height: 0;
      display: grid;
      grid-template-rows: auto 1fr;
    }

    .gm-split__column > .gm-section__heading {
      margin-bottom: clamp(16px, 2.4dvh, 26px);
    }

    .gm-split__column > .gm-section__heading h2 {
      margin-bottom: 0;
    }

    .gm-split__column--principles .gm-principles {
      min-height: 0;
      display: grid;
      grid-template-rows: repeat(3, minmax(0, 1fr));
    }

    .gm-split__column--principles .gm-principles article {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .gm-split__column--requirements {
      padding-left: clamp(24px, 2vw, 36px);
      border-left: 1px solid var(--gm-border);
    }

    .gm-split__column--requirements .gm-section__heading p {
      max-width: none;
      margin: 12px 0 0;
      color: var(--gm-muted);
      opacity: 1;
    }

    .gm-split__column--requirements .gm-feature-grid {
      min-height: 0;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: repeat(4, minmax(0, 1fr));
    }

    .gm-split__column--requirements .gm-feature-grid article {
      min-height: 0 !important;
      padding: clamp(12px, 1.7dvh, 18px) 18px !important;
      justify-content: center;
      gap: 6px;
    }
  }

  @media (max-width: 960px) {
    .gm-section--split .gm-split__content {
      display: grid;
      grid-template-columns: 1fr;
      gap: 46px;
    }

    .gm-split__column--requirements {
      padding-top: 38px;
      border-top: 1px solid var(--gm-border);
    }

    .gm-split__column--requirements .gm-feature-grid {
      grid-template-columns: 1fr;
    }

    .gm-split__column--requirements .gm-feature-grid article {
      min-height: 0;
    }
  }

  /* =========================================================
     REVIEWS / PROJECT-CAROUSEL BEHAVIOUR
     Reuses the same data hooks and JS engine as the game-design project rail.
     ========================================================= */
  .gm-review-carousel__shell {
    position: relative;
  }

  .gm-review-carousel__heading {
    margin-bottom: clamp(20px, 3dvh, 34px);
  }

  .gm-review-carousel__stage {
    position: relative;
    display: grid;
    grid-template-columns: auto minmax(0, 1fr) auto;
    align-items: center;
    gap: clamp(12px, 1.8vw, 24px);
  }

  .gm-review-carousel__viewport {
    position: relative;
    width: 100%;
    min-width: 0;
    overflow: hidden;
    border: 1px solid var(--gm-paper-light-a22);
    background: var(--gm-review-panel-a20);
    box-shadow: var(--gm-shadow);
    outline: none;
  }

  .gm-review-carousel__viewport:focus-visible {
    border-color: var(--gm-gold);
    box-shadow:
      var(--gm-shadow),
      0 0 0 2px var(--gm-gold-a22);
  }

  .gm-review-carousel__track {
    display: flex;
    width: 100%;
    will-change: transform;
    transition: transform 1200ms cubic-bezier(.22, 1, .36, 1);
  }

  .gm-review-carousel__track.is-jumping,
  .gm-review-carousel__track.is-loop-jumping {
    transition: none;
  }

  .gm-review-slide {
    flex: 0 0 100%;
    width: 100%;
    min-width: 100%;
    min-height: clamp(320px, 44dvh, 470px);
    padding: clamp(34px, 4vw, 66px);
    border: 0;
    background:
      radial-gradient(circle at 88% 16%, var(--gm-gold-a08), var(--gm-transparent) 24%),
      linear-gradient(135deg, var(--gm-white-a012), var(--gm-review-panel-a20));
    box-shadow: none;
    transition: opacity 500ms ease;
  }

  .gm-review-slide:not(.is-active) {
    opacity: .7;
  }

  .gm-review-slide::before {
    top: clamp(14px, 2dvh, 24px);
    right: clamp(24px, 3vw, 46px);
    font-size: clamp(5rem, 10dvh, 7.5rem);
  }

  .gm-review-slide > p {
    max-width: 980px;
    margin-bottom: clamp(36px, 6dvh, 74px);
    font-size: clamp(1.65rem, min(2.35vw, 4dvh), 2.45rem);
  }

  .gm-review-slide footer {
    gap: 5px;
  }

  .gm-review-slide footer strong {
    font-size: clamp(1rem, 1.45vw, 1.2rem);
  }

  .gm-review-carousel__button {
    width: clamp(42px, 3.3vw, 54px);
    height: clamp(64px, 8dvh, 82px);
    display: grid;
    place-items: center;
    padding: 0;
    border: 1px solid var(--gm-border);
    background: var(--gm-review-panel-a20);
    color: var(--gm-text);
    font-family: var(--gm-font-display);
    font-size: clamp(2rem, 3vw, 3rem);
    cursor: pointer;
    transition:
      border-color .2s ease,
      color .2s ease,
      background-color .2s ease,
      transform .2s ease;
  }

  .gm-review-carousel__button:hover,
  .gm-review-carousel__button:focus-visible {
    color: var(--gm-gold);
    border-color: var(--gm-gold);
    background: var(--gm-gold-a08);
    transform: translateY(-2px);
  }

  .gm-review-carousel__pagination {
    min-height: 18px;
    margin-top: clamp(16px, 2.4dvh, 24px);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
  }

  .gm-review-carousel .gd-project-dot {
    width: 9px;
    height: 9px;
    padding: 0;
    border: 1px solid var(--gm-gold-a44);
    border-radius: 50%;
    background: var(--gm-transparent);
    cursor: pointer;
    transition:
      transform .2s ease,
      background-color .2s ease,
      border-color .2s ease;
  }

  .gm-review-carousel .gd-project-dot:hover,
  .gm-review-carousel .gd-project-dot:focus-visible,
  .gm-review-carousel .gd-project-dot.is-active {
    border-color: var(--gm-gold);
    background: var(--gm-gold);
    transform: scale(1.2);
  }

  .gm-review-carousel .gd-project-progress {
    position: absolute;
    z-index: 6;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    overflow: hidden;
    background: var(--gm-white-a08);
    pointer-events: none;
  }

  .gm-review-carousel .gd-project-progress__fill {
    width: 100%;
    height: 100%;
    transform: scaleX(0);
    transform-origin: left center;
    background: linear-gradient(90deg, var(--gm-teal-soft), var(--gm-gold));
  }

  .gm-review-carousel__status {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    white-space: nowrap;
    border: 0;
  }

  @media (max-width: 960px) {
    .gm-review-carousel__stage {
      grid-template-columns: 44px minmax(0, 1fr) 44px;
      gap: 10px;
    }

    .gm-review-slide {
      min-height: 360px;
      padding: 34px 30px;
    }
  }

  @media (max-width: 680px) {
    .gm-review-carousel__heading {
      display: block;
      text-align: left;
    }

    .gm-review-carousel__heading > p:last-child {
      max-width: none;
      margin-top: 12px;
    }

    .gm-review-carousel__stage {
      grid-template-columns: 36px minmax(0, 1fr) 36px;
      gap: 6px;
    }

    .gm-review-carousel__button {
      width: 36px;
      height: 58px;
      font-size: 1.8rem;
    }

    .gm-review-slide {
      min-height: 390px;
      padding: 30px 24px;
    }

    .gm-review-slide > p {
      font-size: 1.45rem;
    }
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
    <section class="gm-split__column gm-split__column--principles" aria-labelledby="gm-principles-title">
      <div class="gm-section__heading gm-section__heading--stacked">
        <h2 id="gm-principles-title">Как я провожу игры</h2>
      </div>

      <div class="gm-principles">
        <article>
          <h3>Свобода действий</h3>
          <p>Черновой тезис. Здесь будет короткое объяснение того, насколько игра поддерживает нестандартные решения и импровизацию.</p>
        </article>
        <article>
          <h3>Последствия</h3>
          <p>Черновой тезис. Здесь будет формулировка о том, как выборы игроков меняют ситуацию, отношения и дальнейший ход истории.</p>
        </article>
        <article>
          <h3>Подготовка без лишней рутины</h3>
          <p>Черновой тезис. Здесь будет описание того, что ведущий берёт на себя, а что требуется от игрока перед началом.</p>
        </article>
      </div>
    </section>

    <section class="gm-split__column gm-split__column--requirements" aria-labelledby="gm-requirements-title">
      <div class="gm-section__heading gm-section__heading--stacked">
        <h2 id="gm-requirements-title">Что потребуется для игры</h2>
        <p>Коротко о том, что понадобится игроку и что уже будет подготовлено к началу сессии.</p>
      </div>

      <div class="gm-feature-grid">
        <article><strong>Foundry VTT</strong><span>Подготовленные сцены, карты и игровые материалы.</span></article>
        <article><strong>Голосовая связь</strong><span>Discord или другой согласованный канал.</span></article>
        <article><strong>Подготовка к игре</strong><span>Черновой слот под персонажей, памятки и короткий ввод перед сессией.</span></article>
        <article><strong>Сопровождение</strong><span>Черновой слот под правила переноса, отмены и связь между играми.</span></article>
      </div>
    </section>
  </div>
</section>

<section
  class="gm-section gm-section--reviews gm-review-carousel"
  id="reviews"
  aria-labelledby="reviews-title"
  data-project-carousel
>
  <div class="gm-container gm-review-carousel__shell">
    <div class="gm-section__heading gm-review-carousel__heading">
      <div>
        <h2 id="reviews-title">Как это ощущается за столом</h2>
      </div>
      <p>Сюда пойдут реальные отзывы участников прежних игр. До публикации коммерческих кейсов не называем их «отзывами клиентов».</p>
    </div>

    <div class="gm-review-carousel__stage">
      <button
        class="gm-review-carousel__button gm-review-carousel__button--prev"
        type="button"
        data-carousel-prev
        aria-label="Предыдущий отзыв"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        class="gm-review-carousel__viewport"
        data-carousel-viewport
        tabindex="0"
        role="region"
        aria-roledescription="карусель"
        aria-label="Отзывы участников игр"
      >
        <div class="gm-review-carousel__track" data-carousel-track>
          {% for review in site.data.gm_reviews %}
            <blockquote
              class="gm-review gm-review-slide gd-project-card"
              data-project-slide
              aria-label="Отзыв — {{ review.author }}"
            >
              <p>{{ review.quote }}</p>
              <footer>
                <strong>{{ review.author }}</strong>
                <span>{{ review.context }}</span>
              </footer>
            </blockquote>
          {% endfor %}
        </div>
      </div>

      <button
        class="gm-review-carousel__button gm-review-carousel__button--next"
        type="button"
        data-carousel-next
        aria-label="Следующий отзыв"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>

    <div
      class="gm-review-carousel__pagination"
      data-carousel-pagination
      aria-label="Выбор отзыва"
    ></div>

    <p class="gm-review-carousel__status" data-carousel-status aria-live="polite"></p>
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