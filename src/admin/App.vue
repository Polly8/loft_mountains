<template lang="pug">

  .maincontent-cover
    section.entrance
      .entrance-wrapper
        .entrance__content
          button.entrance__close
          .entrance__title Авторизация
          form.entrance__form
            label.entrance__form-block.entrance__form-block--login
              .entrance__form-title Логин
              input.entrance__input(type="text", name="name" required)
            label.entrance__form-block.entrance__form-block--password
              .entrance__form-title Пароль
              input.entrance__input(type="password", name="password" required)
            button.entrance__form-submit(type="submit") Отправить
    header.admin-header
      .container.admin-container
        .admin-header__left
          .admin-header__user
            .admin-header__avatar
              img(src=("../images/content/user.jpg")).admin-header__avatar-img
            .admin-header__name Полина Совершенная
          .admin-header__title Панель администрирования
        a(href="#").admin-header__exit Выйти
    nav.menu-admin
      .container
        ul.menu-admin__list
          li.menu-admin__item
            a(href="#").menu-admin__link Обо мне
          li.menu__item
            a(href="#").menu-admin__link Работы
          li.menu__item
            a(href="#").menu-admin__link Отзывы
    main.content-admin
      .about-admin
        .about-admin-cover
          .container
            .about-admin__top
              .admin__top-title Блок "Обо мне"
              .admin__top-add
                a(href="#").admin__top-add-link Добавить группу
            .about-admin__content
              form.form.about-form
                .form__header.form__header-new
                  input(type="text" placeholder="Название новой группы").form__title
                  .form__btns
                    button(name="add").form__btns-tick
                    button(name="remove").form__btns-cross
                .form__content
                .form__bottom
                  input(type="text" placeholder="Новый навык").form__bottom-text
                  .form__bottom-percent-wrapper
                    input(type="number" placeholder="100" min="0" max="100").form__bottom-percent
                  button.form__bottom-add
              form.form.about-form
                .form__header.form__header-edit
                  input(type="text" value="Workflow" placeholder="Название новой группы").form__title
                  .form__btns
                    button(name="edit").form__btns-edit
                .form__content
                  .form__row
                    input(type="text" value="Git" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="100").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                  .form__row
                    input(type="text" value="Terminal" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="90").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                  .form__row
                    input(type="text" value="Gulp" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="80").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                  .form__row
                    input(type="text" value="Webpack" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="85").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                .form__bottom
                  input(type="text" placeholder="Новый навык").form__bottom-text
                  .form__bottom-percent-wrapper
                    input(type="number" placeholder="100" min="0" max="100").form__bottom-percent
                  button.form__bottom-add
              form.form.about-form
                .form__header.form__header-saved
                  input(type="text" value="Frontend").form__title
                  .form__btns
                    button(name="edit").form__btns-edit
                .form__content
                  .form__row
                    input(type="text" value="Html5" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="100").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                  .form__row.form__row--active
                    input(type="text" value="CSS3" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="90").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                  .form__row
                    input(type="text" value="JavaScript" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="80").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                  .form__row
                    input(type="text" value="Jquery и Vue.js" name="name").form__content-row-input
                    .form__row-percent-wrapper
                      input(type="number" value="85").form__row-percent
                    .form__row-btns
                      button(name="add").form__row-btns-edit
                      button(name="remove").form__row-btns-delete
                .form__bottom
                  input(type="text" placeholder="Новый навык").form__bottom-text
                  .form__bottom-percent-wrapper
                    input(type="number" placeholder="100" min="0" max="100").form__bottom-percent
                  button.form__bottom-add
      .works-admin
        .container.works-admin-container
          .admin__top-title Блок "Работы"
          .works-add-section
            form.works-add-form.form
              .works-add-form__top Редактирование работы
              .works-add-form__content
                .works-add-form__content-left
                  .works-add-form__left-row
                   label(for=image).works-add-form__upload
                    .works-add-form__upload-text Перетащите или загрузите для загрузки изрбражения
                    input(type="file" name="image" placeholder="item").works-add-form__upload-img
                    button.works-add-form__upload-btn Загрузить
                .works-add-form__content-right
                  .works-add-form__right-row
                    label(for="name").works-add-form__label Название
                    input(type="text" name="name").works-add-form__input
                  .works-add-form__right-row
                    label(for="link").works-add-form__label Ссылка
                    input(type="text" name="link").works-add-form__input
                  .works-add-form__right-row
                    label(for="description").works-add-form__label Описание
                    textarea(type="text" name="description" rows="4").works-add-form__textarea
                  .works-add-form__right-row
                    label(for="tags").works-add-form__label Добавление тэга
                    input(type="text" name="tags").works-add-form__input
                    .works-add-form__tags
                      .works-add-form__tag HTML
                      .works-add-form__tag CSS
                      .works-add-form__tag Javascript
              .works-add-form__bottom
                a(href).works-add-form__btn--cancel Отмена
                button.works-add-form__btn--save Сохранить 

            
          .works-section
            .works-section__item.works-section__add
              a(href).works-section__add-link 
                .works-section__add-link-circle 
                .works-section__add-link-text Добавить работу
            .works-section__item
              .works-section__item-image
                img(src=("../images/content/1.jpg")).works-section__item-img
                .works-section__item-tags
                  .works-section__item-tag HTML
                  .works-section__item-tag CSS
                  .works-section__item-tag Javascript

              .works-section__item-content
                .works-section__item-title Сайт школы образования
                .works-section__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href).works-section__item-link www.google.com
                .works-section__item-btns
                  a(href).works-section__item-btn.works-section__item-btn-edit Править
                  a(href).works-section__item-btn.works-section__item-btn-del Удалить
            .works-section__item
              .works-section__item-image
                img(src=("../images/content/2.jpg")).works-section__item-img
                .works-section__item-tags
                  .works-section__item-tag HTML
                  .works-section__item-tag CSS
                  .works-section__item-tag Javascript

              .works-section__item-content
                .works-section__item-title Сайт школы образования
                .works-section__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href).works-section__item-link www.google.com
                .works-section__item-btns
                  a(href).works-section__item-btn.works-section__item-btn-edit  Править
                  a(href).works-section__item-btn.works-section__item-btn-del Удалить
            .works-section__item
              .works-section__item-image
                img(src=("../images/content/3.jpg")).works-section__item-img
                .works-section__item-tags
                  .works-section__item-tag HTML
                  .works-section__item-tag CSS
                  .works-section__item-tag Javascript

              .works-section__item-content
                .works-section__item-title Сайт школы образования
                .works-section__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href).works-section__item-link www.google.com
                .works-section__item-btns
                  a(href).works-section__item-btn.works-section__item-btn-edit  Править
                  a(href).works-section__item-btn.works-section__item-btn-del Удалить
            .works-section__item
              .works-section__item-image
                img(src=("../images/content/4.jpg")).works-section__item-img
                .works-section__item-tags
                  .works-section__item-tag HTML
                  .works-section__item-tag CSS
                  .works-section__item-tag Javascript

              .works-section__item-content
                .works-section__item-title Сайт школы образования
                .works-section__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href).works-section__item-link www.google.com
                .works-section__item-btns
                  a(href).works-section__item-btn.works-section__item-btn-edit  Править
                  a(href).works-section__item-btn.works-section__item-btn-del Удалить
            .works-section__item
              .works-section__item-image
                img(src=("../images/content/5.jpg")).works-section__item-img
                .works-section__item-tags
                  .works-section__item-tag HTML
                  .works-section__item-tag CSS
                  .works-section__item-tag Javascript

              .works-section__item-content
                .works-section__item-title Сайт школы образования
                .works-section__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                a(href).works-section__item-link www.google.com
                .works-section__item-btns
                  a(href).works-section__item-btn.works-section__item-btn-edit  Править 
                  a(href).works-section__item-btn.works-section__item-btn-del Удалить
      .reviews-admin
        .container.reviews-admin-container
          .admin__top-title Блок "Отзывы"
          .reviews-add-section
            form.reviews-admin__form.form
              .reviews-add-form__top Новый отзыв
              .reviews-add-form__content
                .reviews-add-form__content-left
                  .reviews-add-form__content-left-header__avatar
                    img(src=("../images/content/user.jpg")).reviews-add-form__content-avatar-img
                  a(href).reviews-add-form__content-left-link Добавить фото
                  
                .reviews-add-form__content-right
                  .reviews-add-form__right-row
                    .reviews-add-form__right-row-item
                      label(for="name").reviews-add-form__label Имя автора
                      input(type="text" name="name").reviews-add-form__input
                    .reviews-add-form__right-row-item
                      label(for="link").reviews-add-form__label Титул автора
                      input(type="text" name="link").reviews-add-form__input
                  .reviews-add-form__right-row.reviews-add-form__right-row-text
                    label(for="description").reviews-add-form__label Отзыв
                    textarea(type="text" name="description" rows="3").reviews-add-form__textarea.works-add-form__textarea
                  .reviews-admin-buttons
                    a(href).works-add-form__btn--cancel Отмена
                    button.works-add-form__btn--save Сохранить 

          .reviews-admin-section    
            .reviews-section__item.reviews-section__add
              a(href).reviews-section__add-link
                .reviews-section__add-link-circle
                .reviews-section__add-link-text Добавить отзыв
            .reviews-section__item
              .reviews-section__item-author
                .reviews-section__item-author-avatar
                  img(src=("../images/content/sab.png")).reviews-section__item-author-image
                .reviews-section__item-author-info
                  .reviews-section__item-author-name Владимир Сабанцев
                  .reviews-section__item-author-pos Преподаватель

              .reviews-section__item-content
                .reviews-section__item-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews-section__item-btns
                  a(href).reviews-section__item-btn.reviews-section__item-btn-edit Править
                  a(href).reviews-section__item-btn.reviews-section__item-btn-del Удалить
            .reviews-section__item
              .reviews-section__item-author
                .reviews-section__item-author-avatar
                  img(src=("../images/content/koval.png")).reviews-section__item-author-image
                .reviews-section__item-author-info
                  .reviews-section__item-author-name Ковальчук Дмитрий
                  .reviews-section__item-author-pos Основатель Loftschool

              .reviews-section__item-content
                .reviews-section__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .reviews-section__item-btns
                  a(href).reviews-section__item-btn.reviews-section__item-btn-edit Править
                  a(href).reviews-section__item-btn.reviews-section__item-btn-del Удалить
            .reviews-section__item
              .reviews-section__item-author
                .reviews-section__item-author-avatar
                  img(src=("../images/content/sab.png")).reviews-section__item-author-image
                .reviews-section__item-author-info
                  .reviews-section__item-author-name Владимир Сабанцев
                  .reviews-section__item-author-pos Преподаватель

              .reviews-section__item-content
                .reviews-section__item-text Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews-section__item-btns
                  a(href).reviews-section__item-btn.reviews-section__item-btn-edit Править
                  a(href).reviews-section__item-btn.reviews-section__item-btn-del Удалить
    .notification.notification--green Сообщение отправлено
    .notification.notification--yellow Сервер перегружен
    .notification.notification--red Сообщение не отправлено

            




</template>