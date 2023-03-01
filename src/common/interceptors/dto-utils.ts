import { ClassTransformOptions } from 'class-transformer';

const classTransformerOptions: Record<string, ClassTransformOptions> = {};

export function getClassTransformerOptions(
  className: string,
): ClassTransformOptions {
  if (!classTransformerOptions[className]) {
    classTransformerOptions[className] = {
      excludeExtraneousValues: true,
    };
  }

  return classTransformerOptions[className];
}
