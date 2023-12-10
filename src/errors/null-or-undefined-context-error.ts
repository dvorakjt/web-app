export class NullOrUndefinedContextError extends Error {
  name = 'NullOrUndefinedContextError';

  constructor(componentName: string, contextName: string) {
    super(
      `${componentName} cannot read properties of null or undefined ${contextName}`,
    );
  }
}
