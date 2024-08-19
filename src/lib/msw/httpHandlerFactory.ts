import { http, HttpResponse, HttpResponseResolver } from "msw";

type HandlerFactoryArgs = {
  isNetworkError?: boolean;
  error?: {
    message: string;
    status: number;
  };
  resolver?: HttpResponseResolver;
};

export const httpHandlerFactory = (
  method: keyof typeof http,
  path: string,
  defaultResolver: HttpResponseResolver,
) => {
  return (args?: HandlerFactoryArgs) => {
    if (!args) {
      return http[method](path, defaultResolver);
    }
    const { error, isNetworkError, resolver } = args;

    if (isNetworkError) {
      return http[method](path, () => {
        return HttpResponse.error();
      });
    } else if (error) {
      return http[method](path, () => {
        return HttpResponse.json(
          {
            error: error.message,
          },
          {
            status: error.status,
          },
        );
      });
    } else if (resolver) {
      return http[method](path, resolver);
    } else {
      return http[method](path, defaultResolver);
    }
  };
};
