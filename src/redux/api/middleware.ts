import { adminApis, companyApi } from "./api";

const middleware = {
  middleware: (getDefaultMiddleware: any): any =>
    getDefaultMiddleware()
      .concat(adminApis.middleware)
      .concat(companyApi.middleware),
};

export default middleware;
