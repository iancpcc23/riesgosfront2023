import { Mapper } from 'src/base/utils/mapper';
import { UserEntity } from 'src/data/entities/user.entity';
import { UserModel } from 'src/domain/models/user.model';

export class UserImplementationRepositoryMapper extends Mapper<
  UserEntity,
  UserModel
> {
  mapFrom(param: UserEntity): UserModel {
    return {
      username: param.NOMBRE,
      password: param.CLAVE,
      idagency: param.IDAGENCIA,
      email: param.EMAIL,
      createdAt: param.FECHACREACION,
      passwordChangeAt: param.FECHACAMBIOCLAVE,
      haschangedPassword: param.CAMBIACLAVE,
      daysToChangePassword: param.DIASCAMBIOCLAVE,
      hasBlocked: param.TIENEBLOQUEO,
      canAccessToSystem: param.PUEDEINGRESARSISTEMA,
      isActive: param.ACTIVO,
    };
  }
  mapTo(param: UserModel): UserEntity {
    return {
      NOMBRE: param.username,
      CLAVE: param.password,
      IDAGENCIA: param.idagency,
      EMAIL: param.email,
      FECHACREACION: param.createdAt,
      FECHACAMBIOCLAVE: param.passwordChangeAt,
      CAMBIACLAVE: param.haschangedPassword,
      DIASCAMBIOCLAVE: param.daysToChangePassword,
      TIENEBLOQUEO: param.hasBlocked,
      PUEDEINGRESARSISTEMA: param.canAccessToSystem,
      ACTIVO: param.isActive,
    };
  }
}
