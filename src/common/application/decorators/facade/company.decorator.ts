import { CompanyConfig } from 'src/common/domain/company-config';

type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export function Config(str: NestedKeyOf<CompanyConfig>) {
  return function (target: Function) {
    Reflect.defineMetadata('companyConfig', str, target.prototype);
  };
}
