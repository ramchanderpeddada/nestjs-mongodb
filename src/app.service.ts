import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.models';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('user') private readonly userModel: Model<UserDocument>,
  ) {}

  //creating
  async createUser(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    const result = await newUser.save();
    return result;
  }

  //read
  async getUser() {
    const users = await this.userModel.find({});
    return users;
  }

  async getUserById(id: string) {
    const user = await this.userModel.findById(id);
    return user;
  }

  //update
  async updateUser(id, data): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return updatedUser;
  }

  //delete
  deleteUser(id: string) {
    const deletedUser = this.userModel.findByIdAndRemove(id);
    return deletedUser;
  }
}
