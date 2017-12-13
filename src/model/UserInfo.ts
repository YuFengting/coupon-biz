import {Injectable} from '@angular/core';

@Injectable()
export class UserInfo {
  public nickname: string;//用户昵称
  public realname: string;//用户真实用户名
  public avatorUrl: string;//用户头像
  public mobile: string;//用户联系方式
  public gender: string;//用户性别
  public birthDate: string;//生日
  public level: string;//用户等级
  public address: string;//用户地址
  public registrationID: string//极光推送ID
  public token: string//用户token
  public isSetupPW: string//是否设置密码

}
