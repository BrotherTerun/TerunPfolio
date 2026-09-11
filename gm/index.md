---
layout: gm
title: "Терун — ведущий НРИ"
description: "Онлайн-игры по настольным ролевым системам: ваншоты, кампании и авторские сценарии."
---

<section class="gm-hero gm-hero--profile" id="about">
  <div class="gm-hero__media" aria-hidden="true"></div>
  <div class="gm-hero__shade"></div>

  <div class="gm-container gm-hero__content gm-hero-profile">
    <div class="gm-hero-profile__copy" data-reveal>
      <h1>Привет! Я Терун — ведущий НРИ.</h1>

      <p class="gm-hero__lead">
        Уже больше 6 лет веду ваншоты и кампании
        <span class="gm-text-accent gm-text-gold-glow">онлайн</span>.
        Делаю акцент на погружение в историю, взаимодействие между персонажами и сюжетные события. За своим столом я рад и опытным игрокам, и тем,
        кто только знакомится с настольными ролевыми играми. Присоединяйтесь ко мне в следующих приключениях!
      </p>

      <div class="gm-actions">
        <a class="gm-button" href="#games">Записаться на игру</a>
        <a class="gm-button gm-button--ghost" href="#contact">Собрать группу</a>
      </div>
    </div>

    <aside class="gm-hero-profile__identity" aria-label="Портрет ведущего Теруна" data-reveal>
      <div
        class="gm-hero-profile__portrait"
        role="img"
        aria-label="Стилизованный портрет ведущего Теруна"
        style="background-image: url('{{ '/assets/images/gm/common/gm_portrait.png' | relative_url }}'); background-size: cover; background-position: center top; background-repeat: no-repeat;"
      ></div>
    </aside>
  </div>

  <div class="gm-hero-systems" aria-label="Системы, которые я успел поиграть и поводить">
    <span class="gm-hero-systems__label">Системы, которые я успел поиграть и поводить</span>
    <div class="gm-hero-systems__viewport">
      <div class="gm-hero-systems__track">
        <div class="gm-hero-systems__group">
          <span>D&amp;D 5ed</span>
          <span>Witcher TTRPG</span>
          <span>Legend of the 5 Rings 4ed/5ed</span>
          <span>Adventures in Rokugan</span>
          <span>Cyberpunk RED</span>
          <span>Fate</span>
          <span>Vampire: The Masquerade</span>
          <span>Werewolf: The Apocalypse</span>
          <span>Hunter: The Reckoning</span>
          <span>И некоторые другие</span>
        </div>
        <div class="gm-hero-systems__group" aria-hidden="true">
          <span>D&amp;D 5ed</span>
          <span>Witcher TTRPG</span>
          <span>Legend of the 5 Rings 4ed/5ed</span>
          <span>Adventures in Rokugan</span>
          <span>Cyberpunk RED</span>
          <span>Fate</span>
          <span>Vampire: The Masquerade</span>
          <span>Werewolf: The Apocalypse</span>
          <span>Hunter: The Reckoning</span>
          <span>И некоторые другие</span>
        </div>
      </div>
    </div>
  </div>
</section>

<div class="gm-transition gm-transition--dark-paper" aria-hidden="true"></div>

<section class="gm-section gm-section--paper" id="games">
  <div class="gm-container">
    <div class="gm-section__heading gm-section__heading--stacked gm-section__heading--centered" data-reveal>
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
    <div class="gm-games-grid{% if gm_game_count > 1 %} gm-games-grid--catalog{% else %} gm-games-grid--single{% endif %}" data-reveal>
      {% for game in site.data.gm_games %}
        {% include gm-game-card.html game=game %}
      {% endfor %}
    </div>
  </div>
</section>

<div class="gm-transition gm-transition--paper-dark" aria-hidden="true"></div>

<section class="gm-section gm-section--table" id="table">
  <div class="gm-table__media" aria-hidden="true"></div>
  <div class="gm-table__shade" aria-hidden="true"></div>

  <div class="gm-container gm-table__content">
    <section class="gm-table__column gm-table__column--principles" aria-labelledby="gm-principles-title" data-reveal>
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

    <section class="gm-table__column gm-table__column--requirements" aria-labelledby="gm-requirements-title" data-reveal>
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

<div class="gm-transition gm-transition--dark-dark" aria-hidden="true"></div>

<section
  class="gm-section gm-section--reviews gm-review-carousel"
  id="reviews"
  aria-labelledby="reviews-title"
  data-review-carousel
>
  <div class="gm-reviews__media" aria-hidden="true"></div>
  <div class="gm-reviews__shade" aria-hidden="true"></div>

  <div class="gm-container gm-review-carousel__shell">
    <div class="gm-section__heading gm-section__heading--stacked gm-review-carousel__heading" data-reveal>
      <h2 id="reviews-title">Как это ощущается за столом</h2>
    </div>

    <div class="gm-review-carousel__stage" data-reveal>
      <button
        class="gm-review-carousel__button gm-review-carousel__button--prev"
        type="button"
        data-review-prev
        aria-label="Предыдущий отзыв"
      >
        <span aria-hidden="true">‹</span>
      </button>

      <div
        class="gm-review-carousel__viewport"
        data-review-viewport
        tabindex="0"
        role="region"
        aria-roledescription="карусель"
        aria-label="Отзывы участников игр"
      >
        <div class="gm-review-carousel__track" data-review-track>
          {% for review in site.data.gm_reviews %}
            <blockquote
              class="gm-review gm-review-slide"
              data-review-slide
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
        data-review-next
        aria-label="Следующий отзыв"
      >
        <span aria-hidden="true">›</span>
      </button>
    </div>

    <div
      class="gm-review-carousel__pagination"
      data-review-pagination
      aria-label="Выбор отзыва"
    ></div>

    <p class="gm-review-carousel__status" data-review-status aria-live="polite"></p>
  </div>
</section>

<div class="gm-transition gm-transition--dark-paper" aria-hidden="true"></div>

<section class="gm-section gm-section--faq" id="faq">
  <div class="gm-container gm-faq-layout">
    <div data-reveal>
      <h2>Частые вопросы</h2>
    </div>

    <div class="gm-faq-list" data-reveal>
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

<div class="gm-transition gm-transition--paper-dark" aria-hidden="true"></div>

<section class="gm-contact" id="contact">
  <div
    class="gm-contact__media"
    role="img"
    aria-label="Фэнтезийный пейзаж"
    style="background-image: url('{{ '/assets/images/gm/common/final-cta.png' | relative_url }}'); background-size: cover; background-position: center; background-repeat: no-repeat;"
  ></div>
  <div class="gm-contact__shade"></div>

  <div class="gm-container gm-contact__content" data-reveal>
    <h2>Напишите мне — подберём игру и формат.</h2>
    <div class="gm-actions">
      <a class="gm-button" href="https://t.me/BrotherTerun" target="_blank" rel="noopener noreferrer">Telegram</a>
      <span class="gm-contact__note">Форма записи и политика оплаты будут подключены отдельным этапом.</span>
    </div>
  </div>
</section>
