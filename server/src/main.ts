import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin: 'https://mindful-ai-rosy.vercel.app/', // Replace '*' with your frontend URL for better security
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Set to true if cookies need to be included
  });

  await app.listen(process.env.PORT ?? 5000);
}
bootstrap();
