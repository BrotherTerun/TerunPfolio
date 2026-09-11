---
layout: gm
title: "Терун — ведущий НРИ"
description: "Онлайн-игры по настольным ролевым системам: ваншоты, кампании и авторские сценарии."
---

<style>
  @media (min-width: 961px) {
    /* Reframe the live-table photo around the people rather than the raw photo
       center. A small overscan gives us room to move the image left/up without
       exposing a hard bitmap edge; the existing section shade handles the fade. */
    #reviews .gm-reviews__media {
      background-size: 112% auto;
      background-position: 62% 60%;
      transform: none;
    }

    /* Keep the section balanced, but let the rail sit a little lower so faces
       have more breathing room above the active card. Move pagination with it
       so the carousel still reads as one composition. */
    #reviews .gm-review-carousel__stage,
    #reviews .gm-review-carousel__pagination {
      transform: translateY(clamp(18px, 2.4dvh, 28px));
    }
  }
</style>

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
          <h3>Для меня главное — повествование</h3>
          <p>Для меня игру определяет история, которую мы с игроками хотим расказать. Основную часть времени в течении подготовки игры у меня занимает проработка мотиваций неигровых персонажей, событий в рамках линии повествования. Я стремлюсь быстро адаптировать свой сюжет к отыгрышу игроков, стараясь в итоге расказать законченную историю.</p>
        </article>
        <article>
          <h3>Погружение</h3>
          <p>Мне нравится создавать и поддерживать за своим атмосферу, чтобы игроки могли погрузиться в персонажей и прочувствовать сцену. Зачастую много времени в подготовке у меня занимает подбор саундтрека к игре, а социальные сцены сопровождаются красочными заставками.</p>
        </article>
        <article>
          <h3>Импровизация — часть роли мастера</h3>
          <p>Несмотря на тщательную подготовку, я не исключаю импровизацию из своего арсенала. Часто наиболее интересные, яркие и запоминающиеся моменты с моих игр рождались именно когда игроки заставляли меня импровизировать, отходя от задуманных заранее событий. И это — классно!</p>
        </article>
        <article>
          <h3>Мы всё ещё играем в игру</h3>
          <p>Слегка противореча предыдущим пунктам, но всё же вынужден отметить, что моя любовь к серьёзному восприятию происходящего за столом, я не забываю, что всё это — игра. За моим столом можно и шутить, и смеяться. В конце концов все мы собираемся чтобы хорошо провести время.</p>
        </article>
      </div>
    </section>

    <section class="gm-table__column gm-table__column--requirements" aria-labelledby="gm-requirements-title" data-reveal>
      <div class="gm-section__heading gm-section__heading--stacked">
        <h2 id="gm-requirements-title">Что потребуется для игры</h2>
      </div>

      <div class="gm-feature-grid">
        <article><strong>ZeroTier</strong><span>Это программное обеспечение для соединения компьютеров в виртуальную локальную сеть. Без него вы не сможете подключиться на виртуальный стол Foundry VTT. Я помогу с настройкой и объясню, как подключиться к нужной сети.</span></article>
        <article><strong>Голосовая связь</strong><span>Требуется наличие нормального микрофона, отсутствие громкого отвлекающего шума на фоне (или умение пользоваться режимом рации). Обычно для связи используется Discord (могу помочь восстановить доступ) или Яндекс Телемост при возниковении проблем с первым.</span></article>
        <article><strong>Базовое ознакомление с системой</strong><span>Как мастер я ожидаю, что перед игрой вы успеете ознакомиться с правилами, по которым нам предстоит играть, хотя бы на поверхностном уровне. Я ожидаю, что во время игры вы будете знать возможности своего персонажа. Как ведущий я готов оказать вам любую посильную помощь в разъяснении правил, создании персонажа и другой подготовке к игре.</span></article>
        <article><strong>Нулевая сессия</strong><span>Я всегда провожу нулевую сессию перед игрой, даже если это ваншот. Это нужно для знакомства группы между собой и обсуждения ожиданий перед игрой. Дату проведения нулевой сессии мы согласуем вместе, когда будет завершён набор на игру.</span></article>
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
        <summary>Можно прийти новичку НРИ?</summary>
        <p>Да, разумеется. Как правило я с удовольствием знакомлю новых людей с нашим хобби. Я бы настоятельно рекомендовал вам не избегать при этом подготовки, элементарного ознакомления с основой выбранной системы, но в остальном вам всегда будут рады за моим столом. Хотя, стоит отметить, что некоторые модули, которые будут появляться на этом сайте подразумевают наличие у игроков определённого опыта. Об этом будет указано в описании игры, и я обязательно предупрежу всех игроков об этом на нулевой сессии.</p>
      </details>
      <details>
        <summary>Можно записаться своей компанией?</summary>
        <p>Форма записи предусматривает запись нескольких людей на одну игру. Если свободных мест хватает — можете смело записываться, занимая вместе с друзьями хоть весь стол.</p>
      </details>
      <details>
        <summary>Проводите ли вы офлайн игры?</summary>
        <p>Я обитаю в Волгограде, потому увы, до культурных центров Москвы и Питера добраться чтобы провести игру в живую не смогу. Однако, если вам нужен будет мастер для игры в живую в Волгограде или Волжском — можете смело связываться со мной, уверен, мы сможем договориться о проведении подобной игры.</p>
      </details>
      <details>
        <summary>Как проходят оплата, переносы и отмены?</summary>
        <p>Перед первой сессией я прошу предоплату, после проведения нулевой сессии. Это необходимо воизбежание недопониманий и других возможных казусов. В случае если проводится длительная кампания, начиная со второй сессии оплата совершается по факту присутствия игрока на сессии. Если по какой-то причине игрок не присутствовал на игре, за которую заплатил, или сама игра была отменена после оплаты по моей вине, деньги возвращаются в полном объёме. Оплата производится на счёт в Сбере по реквизитам/номеру телефона.</p>
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
    <h2>Хотите заказать игру для себя и своих друзей или остались другие вопросы? Напишите мне!</h2>

    <div class="gm-contact-links" aria-label="Связаться со мной">
      <a
        class="gm-contact-link gm-contact-link--telegram gm-contact-link--primary"
        href="{{ site.data.gm.contacts.telegram_url }}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 3 4.2 9.4c-1 .4-1 1-.1 1.3l4.3 1.4 1.7 5.1c.2.7.8.8 1.3.4l2.6-2.5 4.3 3.2c.8.6 1.4.2 1.6-.8L22 4.1C22.2 3.2 21.8 2.7 21 3Z"></path>
          <path d="m8.4 12.1 8.9-5.8-7.2 7.7"></path>
        </svg>
        <span>Telegram</span>
      </a>

      <button
        class="gm-contact-link gm-contact-link--discord"
        type="button"
        data-copy-contact="{{ site.data.gm.contacts.discord_handle }}"
        aria-label="Скопировать Discord: {{ site.data.gm.contacts.discord_handle }}"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 7.8c3.2-1.5 6.4-1.5 9.6 0 1.2 1.8 1.8 4 1.8 6.6-1.6 1.4-3.3 2.2-5 2.5l-1.1-1.5h-1l-1.1 1.5c-1.7-.3-3.4-1.1-5-2.5 0-2.6.6-4.8 1.8-6.6Z"></path>
          <circle cx="9.4" cy="12.2" r="1"></circle>
          <circle cx="14.6" cy="12.2" r="1"></circle>
          <path d="M9.6 14.4c1.6.7 3.2.7 4.8 0"></path>
        </svg>
        <span>Discord</span>
        <span class="gm-contact-link__toast" data-copy-toast role="status" aria-live="polite">Ник скопирован!</span>
      </button>

      <a
        class="gm-contact-link gm-contact-link--vk"
        href="{{ site.data.gm.contacts.vk_url }}"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5.4 7.2h2.8c.2 2.1 1.2 4 2.7 5.3V7.2h2.7v3c1.5-.2 2.5-1.7 2.9-3h2.7c-.4 1.8-1.5 3.4-3 4.4 1.6.9 2.9 2.5 3.5 4.4h-3c-.5-1.3-1.5-2.5-3.1-2.8V16h-.7C8.6 16 5.8 12.9 5.4 7.2Z"></path>
        </svg>
        <span>VK</span>
      </a>
    </div>
  </div>
</section>
