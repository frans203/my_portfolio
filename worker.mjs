// Portfólio fsdev.site (Cloudflare Worker + arquivos estáticos de out/).
// Só faz uma coisa além de servir os arquivos: www.fsdev.site → fsdev.site (uma cópia só para o Google).
export default {
  fetch(req, env) {
    const url = new URL(req.url);
    if (url.hostname === 'www.fsdev.site') {
      url.hostname = 'fsdev.site';
      return Response.redirect(url.toString(), 301);
    }
    return env.ASSETS.fetch(req);
  },
};
