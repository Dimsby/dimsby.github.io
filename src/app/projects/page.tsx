'use client'

import Well from "@/components/ui/Well";
import styles from "@/styles/page.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from "swiper/modules";

// Import Swiper styles
//import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';

export default function Page() {
    return (
        <div className={styles.page}>
            <Swiper
                direction={'vertical'}
                mousewheel={{ 'enabled': true }}
                pagination={{ type: "progressbar" }}
                modules={[Mousewheel, Pagination]}
                height={400}
                className="swiper__multiple"
                style={{
                    '--swiper-pagination-color': '#444'
                } as React.CSSProperties}
            >
                <SwiperSlide>
                    <Well imageSrc='/img/projects/gpu_1_preview.jpg'>
                        <h1>Get Picked Up</h1>
                        <h2>PHP, MySQL, Bootstrap, jQuery</h2>
                        <p>2016 - 2022. В составе команды. Fullstack разработка и поддержка сервиса онлайн-бронирования такси.
                            Backend: PHP без фреймворков, MySQL. Frontend: Bootstrap 3 и 4, jQuery, jQueryUI. Также использал
                            Google Direction Api, Google Places Api. Разработал REST API для мобильных приложений компании.
                        </p>
                        <h2>Laravel</h2>
                        <p>2022 - 2024. В составе команды переносил проект на REST API Laravel. Поддержка окончена.</p>
                        <p><a href="https://gpu.travel" target="_blank">gpu.travel</a></p>
                    </Well>
                </SwiperSlide>

                <SwiperSlide>
                    <Well imageSrc='/img/projects/sb_1_preview.jpg' even>
                        <h1>Sugarbounce</h1>
                        <h2>NodeJs, Express</h2>
                        <p>2021 - 2022. В составе команды занимался backend разработкой на Typescript с использованием фреймворка Express и
                            базы MongoDB. Разрабатывал Rest Api для фронтенда на React, JWT авторизация с использованием WEB3 кошельков. Проект NSFW, в настоящее время закрыт.</p>
                        <p>Пример кода применяемого в проекте: <a href="https://github.com/Dimsby/express_example" target="_blank">Github</a></p>
                    </Well>
                </SwiperSlide>

                <SwiperSlide>
                    <Well imageSrc='/img/projects/cf_1_preview.jpg'>
                        <h1>Центр Долг</h1>
                        <h2>Laravel, Wordpress, MySQL, Vue</h2>
                        <p>2016. Разработал сайт организациии на Wordpress и Bootstrap. Структурировал статьи, модуль галлереи.
                        </p>
                        <p>2019 - 2022. Разработал и поддерживал базу данных имен найденных погибших. Для бэкенда использовал Laravel+Mysql.
                            В публичной части интерфейс на blade шаблонах Laravel и js без фреймворков. Каждая страница базы оптимизирована для поисковых систем.
                            В приватной части интерфейс на Vue </p>
                        <p><a href="https://github.com/Dimsby/centd_base" target="_blank">Github</a> | <a href="https://xn----ftbcc6ajjnr1b.xn--p1ai/" target="blank">центр-долг.рф</a> | <a href="https://xn----ftbcc6ajjnr1b.xn--p1ai/base" target="blank">База установленных имен</a>
                        </p>
                    </Well>
                </SwiperSlide>

                <SwiperSlide>
                    <Well imageSrc='/img/projects/codeda_1_preview.jpg' even>
                        <h1>Codeda</h1>
                        <h2>Bootstrap, SCSS, jQuery, Webpack</h2>
                        <p>2021. Верстка статичный лэндинга на Wordpress + Bootstrap. Сборка через Webpack.
                            Для ускорения загрузки сначала загружаются только стили для первого видимого экрана.
                            Также с помощью сборки стилей SCSS через Webpack грузятся только нужные модули Bootstrap.
                            Применен HtmlWebpackPlugin для повторяющихся частей страницы
                        </p>
                        <p><a href="https://codeda.com" target="_blank">codeda.com</a></p>
                    </Well>
                </SwiperSlide>

                <SwiperSlide>
                    <Well imageSrc='/img/projects/avcore_1_preview.jpg'>
                        <h1>Avcore</h1>
                        <h2>Bootstrap, SCSS, jQuery, Webpack</h2>
                        <p>2021. Верстка лэндинга на Bootstrap.
                            Для сборки использована та же схема, что и в Codeda - оптимизация загрузки стилей и модулей Webpack
                        </p>
                        <p><a href="https://github.com/Dimsby/lnd_webpack" target="_blank">Github</a> | <a href="https://avcore.com" target="_blank">avcore.com</a></p>
                    </Well>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}