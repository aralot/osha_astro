import React, { FunctionComponent } from 'react';
import { Title, Container } from './styles';
import { ExpandItem } from './ExpandItem';

const Faq: FunctionComponent = () => {
  return (
    <Container>
      <Title>Частые вопросы</Title>
      <ExpandItem
        title="Можно ли учиться у вас дальше?"
        text="Конечно — после прохождения мини-курса подарим скидку, чтобы ребенок
          мог продолжить обучение в Алгоритмике."
      />
      <ExpandItem
        title="Как вы отбираете преподавателей?"
        text="Мы проводим несколько этапов отбора, включая собеседование, тестирование на знание предмета, прохождение обучения по курсам Алгоритмики и контрольные уроки."
      />
      <ExpandItem
        title="Какой компьютер нужен для занятий?"
        text="Подойдет любой компьютер или ноутбук с ОС Windows 8.1, 10, MacOS или Linux последних версий."
      />
      <ExpandItem
        title="Нужно ли покупать какую-нибудь технику или программы?"
        text="Нет, не нужно. Для обучения понадобится только компьютер или ноутбук с камерой, микрофоном и доступ в интернет."
      />
      <ExpandItem
        title="Можно ли заниматься сразу на нескольких курсах?"
        text="Да, вы можете выбрать сразу два или три направления, чтобы ребенок попробовал все и понял, что ему нравится."
      />
      <ExpandItem
        title="Можно ли получить налоговый вычет за обучение?"
        text="Да, вы можете вернуть 13% суммы, которую потратили на обучение ребенка, в виде налогового вычета. Отправим вам необходимые документы."
      />
      <ExpandItem
        title="Можно ли оплатить занятия за счет материнского капитала?"
        text="Да, вы можете использовать материнский капитал для оплаты обучения в нашей школе."
      />
    </Container>
  );
};

export default Faq;
