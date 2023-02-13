import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUser() {
    return this.appService.getUser();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string) {
    return this.appService.getUserById(id);
  }

  @Post()
  async createUser(@Body() userDto: User) {
    return this.appService.createUser(userDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() userUpdateDto: UserUpdateDto,
  ): Promise<User> {
    return this.appService.updateUser(id, userUpdateDto);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.appService.deleteUser(id);
  }
}
