export const corsOptions = {
  origin: '*',
  credentials: true,
  headers:
    'Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, Accept, Origin, Cache-Control, X-Requested-With',
  methods: 'OPTIONS, GET, HEAD, PUT, PATCH, POST, DELETE',
  exposeHeaders: 'Content-Length',
  maxAge: 3600,
};
