import {
  Controller,
  Get,
  Post,
  Query,
  Body,
  Param,
  Headers,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  getUserList(): any {
    return this.userService.getUserList();
  }

  // @Post('add')
  // addUsers(@Body() body): any {
  //   return this.userService.addUsers(body);
  // }
  @Post('add')
  addUsers(@Body() body): any {
    return this.userService.addUsers(body);
  }

  @Get('getuser')
  getUser(@Query() query) {
    const id: number = parseInt(query.id);
    return this.userService.getUsersById(id);
  }

  @Get('del')
  delUser(@Query() query): any {
    const id: number = parseInt(query.id);
    return this.userService.delUser(id);
  }

  @Get('update')
  updateUser(@Query() query): any {
    const user = {
      id: query.id,
      password: query.password,
      ip: query.ip,
      nick: query.nick,
      headerimg: query.headerimg,
    };
    return this.userService.UpdateUser(user);
  }

  @Get('getuserbyname')
  getUserByName(@Query() query) {
    return this.userService.getUsersByname(query.nick);
  }

  //动态路由 传参
  @Get('finduserbyid/:id/:name')
  findUserById(@Param() params, @Headers() header): any {
    console.log(header);
    console.log(params.id, params.name);
  }
}
