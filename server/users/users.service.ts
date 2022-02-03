import { Injectable } from '@nestjs/common';
import { genSalt, hash } from 'bcryptjs';
import { Collection, Get, Index, Match, Ref } from 'faunadb';
import { FaunaDbService } from 'server/db/faunadb.service';
import { IDbUser } from 'src/app/shared/interfaces/db-user.interface';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private faunaDbService: FaunaDbService) {}
  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;
    const salt = await genSalt();
    const hashedPassword = await hash(password, salt);
    const storedPass = salt + ':' + hashedPassword;
    return storedPass;
  }

  findAll() {
    return `This action returns all users`;
  }

  async findOne(id: number): Promise<IDbUser | undefined> {
    const result = await this.faunaDbService.query<IDbUser>(
      Get(Match(Index('user_by_id'), id))
    );
    if (!result) {
      return undefined;
    }
    return result;
  }

  async findOneByEmail(email: string) {
    const result = await this.faunaDbService.query<IDbUser>(
      Get(Match(Index('user_by_email'), email))
    );
    if (!result) {
      return undefined;
    }
    return result;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
