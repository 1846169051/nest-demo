import { Injectable } from '@nestjs/common';
import { Repository, Like } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

interface body {
  id: number;
  username: string;
  password: string;
  ip: string;
  nick: string;
}

const datas: any = { code: 0, data: null, msg: '操作失败', err: null };

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly User: Repository<User>,
  ) {}

  addUsers(body: body) {
    try {
      if (body.username == '' || body.password == '') {
        datas.msg = '账号或者密码为空！?';
        return datas;
      }
      const data = new User();
        (data.ip = body.ip),
        (data.username = body.username),
        (data.password = body.password),
        (data.nick = '新用户某人');
      datas.code = 1;
      datas.msg = '注册成功';
      this.User.save(data);
    } catch (err) {
      datas.err = err;
    }
    return datas;
  }

  /**
   * 删除指定用户
   * @param id
   */
  async delUser(id: number) {
    try {
      if (!id) {
        datas.msg = 'id不能为空';
        return datas;
      }
      await this.User.delete(id); // 使用 await 等待删除操作
      datas.code = 1;
      datas.msg = '删除成功。';
    } catch (err) {
      datas.err = err;
    }
    return datas;
  }

  /**
   * @author 某人
   * 获取用户列表
   */
  async getUserList() {
    try {
      const data = await this.User.find();
      datas.code = 1;
      datas.data = data;
      datas.msg = '查询成功';
    } catch (err) {
      datas.err = err;
    }
    return datas;
  }

  /**
   * 修改用户信息
   */
  async UpdateUser(user: any) {
    const data = new User();
    try {
      data.ip = user.ip;
      data.headerimg = user.ip;
      data.nick = user.ip;
      data.password = user.password;
      await this.User.update(user.id, data);
      datas.code = 1;
      datas.msg = '修改成功';
    } catch (err) {
      datas.err = err;
    }
    return datas;
  }

  /**
   * 根据id查询user
   * @param id
   */
  async getUsersById(id: number) {
    try {

      datas.msg = '查询成功' + id;
    } catch (err) {
      datas.err = err;
    }
    return datas;
  }

  /**
   * @author 徐君爵
   * 模糊查询用户
   * @param nick
   */
  async getUsersByname(nick: string) {
    try {
      const data = await this.User.find({
        where: {
          nick: Like(`%${nick}%`),
        },
      });
      datas.code = 1;
      datas.data = data;
      datas.msg = '查询成功';
    } catch (err) {
      datas.err = err;
    }
    return datas;
  }
}
