import 'reflect-metadata';

export function CompanyConfigValue(type: string) {
  return function (target: unknown, _, descriptor: PropertyDescriptor) {
    let executor = Reflect.getMetadata('executor', target) as Map<
      string,
      () => unknown
    >;
    if (!executor) {
      executor = new Map<string, () => unknown>();
      Reflect.defineMetadata('executor', executor, target);
    }

    executor.set(type, descriptor.value);
    Reflect.defineMetadata('executor', executor, target);
  };
}
