import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodotaskModule } from './todotask/todotask.module';
import { StaffModule } from './staff/staff.module';
import { StudentModule } from './student/student.module';
import { StudentfeesModule } from './studentfees/studentfees.module';
import { ExamsModule } from './exams/exams.module';
import { OnwerModule } from './onwer/onwer.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TodotaskModule,
    StaffModule,
    StudentModule,
    StudentfeesModule,
    ExamsModule,
    OnwerModule,
    AttendanceModule,
    AuthModule,
    // MongooseModule.forRoot('mongodb+srv://osama:osama1234@my-app.2o9zgoi.mongodb.net/?retryWrites=true&w=majority')
    // MongooseModule.forRoot("")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

