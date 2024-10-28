'use client'

import Image from "next/image";
import styles from "../styles/page.module.scss";

import imgPortrait from "@public/img/portrait.jpg"
import EffectAmbilight from "@/components/EffectAmbilight";

import React from 'react';

//import { RevealWrapper } from 'next-reveal'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
//import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';


/*
            <EffectAmbilight />
              <Image
                className={styles.featureImage}
                priority
                src={imgPortrait}
                alt="Portrait"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
*/
export default function Home() {
  return (
    <div className={styles.page}>
      <Swiper
        direction={'vertical'}
        mousewheel={{ 'enabled': true }}
        pagination={{ type: "progressbar" }}
        modules={[Mousewheel, Pagination]}
        className="swiper__fullscreen"
        style={{
          '--swiper-pagination-color': '#444'
        }}
      >
        <SwiperSlide>
          <section className={styles.sectionFeature}>
            <div className="col-4 row-sm-2" data-swiper-parallax="-300">
              <EffectAmbilight />
              <Image
                className={styles.featureImage}
                priority
                src={imgPortrait}
                alt="Portrait"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
              />
            </div>
            <h1 className="col-8">Fullstack Developer</h1>
            <p className="col-12 col-sm-4">Fullstack-разработчик с опытом работы в создании и поддержке веб-приложений, обладающий знаниями как серверной, так и клиентской частей.
              Специализируюсь на разработке REST API, работе с базами данных и внедрении современных фронтенд-технологий.</p>
            <p className="col-12 col-sm-4">Имею практический опыт работы с популярными фреймворками и языками программирования, такими как PHP, JavaScript, Laravel, Node.js,
              React. Обладаю навыками решения сложных задач, оптимизации кода и работы в команде с применением гибких методологий разработки.</p>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <h1 className="col-12">Навыки</h1>
            <div className="col-12 col-sm-6">
              <h2>6 лет</h2>
              <p>Разработка и подддержание backend на PHP без движков, MySql, верстка интерфейса на Bootstrap и jQuery</p>
              <Image src={'/icons/skills_1.svg'} alt='php' width={330} height={48} />

              <h2>2 года</h2>
              <p>Разработка REST API на Laravel и MySQL</p>
              <Image src={'/icons/skills_2.svg'} alt='php' width={48} height={48} />
            </div>
            <div className="col-12 col-sm-6">
              <h2>2 года</h2>
              <p>Разработка лэндингов на Wordpress, c применением NextJs, SASS либо CSS без предпроцессоров</p>
              <Image src={'/icons/skills_4.svg'} alt='php' width={160} height={48} />

              <h2>1 год</h2>
              <p>Разработка REST API на NodeJS: Express и Nest; MongoDB</p>
              <Image src={'/icons/skills_3.svg'} alt='php' width={273} height={48} />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <h1 className="col-12">Опыт работы</h1>
            <div className="col-12">
              <h2>AKLABS <small>(ИП Крамаренко АЛ)</small></h2>
              <h3>Программист</h3>
              <p>Декабрь 2013 — Декабрь 2022</p>
            </div>
            <div className="col-12 col-sm-6">
              <h3>Чем занимался</h3>
              <ul>
                <li>Разработка backend: Laravel, MySQL (~2 года)</li>
                <li>Разработка backend: NodeJS (Express), MongoDB  (~1 год)</li>
                <li>Разработка REST API для мобильный приложений: Laravel, MySQL, OpenAPI (swagger) (~2 года)</li>
                <li>Поддержка и разработка fullstack легаси backend проекта: PHP7, PHP8, MySQL, jQuery, Bootstrap (~6 лет)</li>
                <li>Разработка лендингов: Bootstrap, Webpack, NextJS</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>Поддержание актуальной документации</li>
                <li>Коммуникация с клиентами на английском языке, обеспечение поддержки пользователей</li>
              </ul>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <div className="col-12">
              <h2>Руспроектнии</h2>
              <h3>Инженер-программист</h3>
              <p>Октябрь 2019 — Январь 2021</p>
            </div>
            <div className="col-12 col-sm-6">
              <h3>Чем занимался</h3>
              <ul>
                <li>Разработка и поддержка сайтов компании</li>
                <li>Лендинг компании: Laravel, Vue</li>
                <li>Внутренняя система: Laravel</li>
              </ul>
            </div>
            <div className="col-12 col-sm-6">
              <ul>
                <li>Сопровождение внутреней системы, подддержка пользователей</li>
                <li>Поддержка актуальности лендинга</li>
              </ul>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section>
            <h1 className="col-12">Образование</h1>
            <div className="col-12">
              <h2>НИУ МЭИ (СФ)</h2>
              <h3>Факультет компьютерных технологий и электроники</h3>
              <p>2006 — 2012</p>
              <p>В 2010 присвоена степень бакалавра техники и технологи по направлению &quot;Информатика и вычислительная техника&quot;.</p>
              <p>В 2012 присвоена степень инженера по спецальности &quot;Вычислительные машины, косплексы, системы и сети&quot;.</p>
            </div>
          </section>

        </SwiperSlide>
      </Swiper>
    </div>
  );
}
