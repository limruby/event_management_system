import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
// import * as csurf from 'csurf';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { writeSwaggerJson } from './utils/swagger';

// const initSwagger = (app) => {
//   const server = app.getHttpAdapter();
//   const options = new DocumentBuilder()
//     .setTitle('API accounts')
//     .setDescription(
//       `The api-accounts
//     [Swagger spec](/docs/idp/swagger.json)
//     `,
//     )
//     .setVersion(API_VERSION)
//     .setSchemes('https', 'http')
//     .addBearerAuth('access-token', 'header')
//     .setBasePath(API_BASE_PATH)
//     .build();
//   const document = SwaggerModule.createDocument(app, options);
//   writeSwaggerJson(`${process.cwd()}`, document);
//   server.get('/docs/idp/swagger.json', (req, res) => {
//     // swagger json
//     res.json(document);
//   });
//   server.use(
//     '/docs/idp',
//     swaggerUI.serve,
//     swaggerUI.setup(document, {
//       swaggerOptions: {
//         displayOperationId: true,
//       },
//     }),
//   ); // swagger ui
// };

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // app.use(helmet());
  // app.use(csurf());

  const config = new DocumentBuilder()
    .setTitle('EMS API')
    .setDescription('The ems-api serve for the endpoint of event management system, it will be consist of auth, user, chat, pbooth, sbooth and event modules.')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('ems')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // writeSwaggerJson('./swagger.json', document);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
