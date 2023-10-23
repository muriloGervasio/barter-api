import { IConfig } from 'src/common/domain/interface/config.interface';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export function Config(str: NestedKeyOf<IConfig>) {
  return function (target: Function) {
    Reflect.defineMetadata('companyConfig', str, target.prototype);
  };
}
