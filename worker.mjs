// Portfólio fsdev.site (Cloudflare Worker + arquivos estáticos de out/).
// - www.fsdev.site → fsdev.site (uma cópia só para o Google)
// - /adelmo e /gta6 são sites de outros repos (Workers próprios), entregues aqui pelo service binding
//   (o visitante continua em fsdev.site/adelmo/..., como era com o proxy da Netlify).
const CLIENTES = [
  ['/adelmo', 'ADELMO'],
  ['/gta6', 'GTA6'],
];

export default {
  fetch(req, env) {
    const url = new URL(req.url);
    if (url.hostname === 'www.fsdev.site') {
      url.hostname = 'fsdev.site';
      return Response.redirect(url.toString(), 301);
    }
    for (const [pasta, binding] of CLIENTES) {
      if (url.pathname === pasta) return Response.redirect(`${url.origin}${pasta}/${url.search}`, 301);
      if (url.pathname.startsWith(pasta + '/')) return env[binding].fetch(req);
    }
    return env.ASSETS.fetch(req);
  },
};
