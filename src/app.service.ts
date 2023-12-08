import { Body, Injectable, Param } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.models';
import { UserUpdateDto } from './userUpdate.dto';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  //creating the user
  async createUser(user: User) {
    const newUser = new this.userModel(user).save();
    return newUser;
  }

  //get the user
  async getUser() {
    const users = await this.userModel.find({});
    return users;
  }

  async getUserById(@Param('id') id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  //update the user
  async updateUser(@Param('id') id: string, @Body() data: UserUpdateDto) {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, data);
    return updatedUser;
  }

  //delete the user
  deleteUser(id: string) {
    const deletedUser = this.userModel.findByIdAndRemove(id);
    return deletedUser;
  }
}
