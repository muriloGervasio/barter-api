import { FastifyRequest } from 'fastify';

export const configuration = () => ({
  keycloak: {
    clientId: process.env.KC_CLIENT_ID,
    serverUrl: process.env.KC_URL,
    secret: process.env.KC_SECRET,
    multiTenant: {
      realmResolver: (request: FastifyRequest) => {
        return request.routerPath.includes('gd-internal')
          ? process.env.KC_REALM_INTERNAL
          : process.env.KC_REALM;
      },
      realmSecretResolver: (realm) => {
        return realm === process.env.KC_REALM_INTERNAL
          ? process.env.KC_SECRET_INTERNAL
          : process.env.KC_SECRET;
      },
    },
  },
});
