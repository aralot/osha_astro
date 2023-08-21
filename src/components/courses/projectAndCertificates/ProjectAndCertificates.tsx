import React from 'react';

import Certificates from './certificates';
import {
  Container,
  Grid,
  BadgeProject,
  BadgeCertificate,
  Project,
  ProjectIframe,
} from './styles';

const ProjectAndCertificates = () => {
  return (
    <Container>
      <Grid>
        <Project>
          <ProjectIframe src="https://www.youtube.com/embed/yc3HqFUtp4I?&amp;loop=1&amp;playlist=yc3HqFUtp4I&amp;mute=1&amp;autoplay=1" />
        </Project>
        <Certificates />
      </Grid>

      <BadgeProject>
        <div>За 3 урока ваш ребенок</div>
        <span>погрузится в предмет</span>
      </BadgeProject>

      <BadgeCertificate>
        <div>И получит сертификат</div>
        <span>об окончании курса</span>
      </BadgeCertificate>
    </Container>
  );
};

export default ProjectAndCertificates;
