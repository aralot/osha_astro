import React from 'react';

import Certificates from './certificates';
import Project from './project';
import {
  Container,
  Grid,
  BadgeProject,
  BadgeCertificate,
  ProjectIframe,
} from './styles';

const ProjectAndCertificates = () => {
  return (
    <Container>
      <Grid>
        <Project />
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
