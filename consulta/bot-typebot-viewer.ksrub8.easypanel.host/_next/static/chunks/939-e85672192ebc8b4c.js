(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    2283: (e, t, n) => {
      "use strict";
      n.d(t, {
        $H: () => s,
        Im: () => i,
        Jf: () => u,
        O9: () => r,
        _C: () => c,
        hj: () => l,
        pN: () => o,
        w$: () => a,
      });
      let a = async (e) => {
          let t;
          try {
            let n = "string" == typeof e ? e : e.url;
            t = await fetch(n, {
              method: "string" == typeof e ? "GET" : e.method,
              mode: "cors",
              headers:
                "string" != typeof e && r(e.body)
                  ? { "Content-Type": "application/json" }
                  : void 0,
              body:
                "string" != typeof e && r(e.body)
                  ? JSON.stringify(e.body)
                  : void 0,
            });
            let a = await t.json();
            if (!t.ok) throw "error" in a ? a.error : a;
            return { data: a, response: t };
          } catch (e) {
            return console.error(e), { error: e, response: t };
          }
        },
        r = (e) => null != e,
        o = (e) => null == e,
        i = (e) => null == e || "" === e,
        l = (e) => null != e && "" !== e,
        s = (e) => (t) => t.id === e,
        d = (e) => /^\{\{.*\}\}$/.test(e),
        u = (e) =>
          e.startsWith("http") ||
          e.startsWith("mailto:") ||
          e.startsWith("tel:") ||
          e.startsWith("sms:") ||
          d(e)
            ? e
            : "https://".concat(e),
        c = (e) => {
          e.split("</noscript>").forEach((e) => {
            let [t, n] = e.split("<noscript>"),
              a = document
                .createRange()
                .createContextualFragment(null != t ? t : "");
            if ((document.head.append(a), o(n))) return;
            let r = document.createElement("noscript"),
              i = document.createRange().createContextualFragment(n);
            r.append(i), document.head.append(r);
          });
        };
    },
    3735: (e, t, n) => {
      "use strict";
      n.d(t, { _: () => L });
      var a,
        r = n(79616),
        o = n(31078);
      n(33601);
      let i = (e, t) => {
        var n;
        return window.__ENV ? (null != (n = window.__ENV[e]) ? n : t) : void 0;
      };
      var l = n(33601);
      let s = o.z.enum(["true", "false"]).transform((e) => "true" === e),
        d = {
          server: {
            NODE_ENV: o.z
              .enum(["development", "staging", "production", "test"])
              .optional(),
            DATABASE_URL: o.z
              .string()
              .url()
              .refine((e) => e.startsWith("postgres") || e.startsWith("mysql")),
            ENCRYPTION_SECRET: o.z.string().length(32),
            NEXTAUTH_URL: o.z.preprocess(
              (e) =>
                (e && "string" == typeof e && e.length > 0) ||
                "preview" !== l.env.VERCEL_ENV ||
                !l.env.VERCEL_BUILDER_PROJECT_NAME ||
                !l.env.NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME
                  ? e
                  : l.env.VERCEL_BRANCH_URL.includes(
                      l.env.VERCEL_BUILDER_PROJECT_NAME
                    )
                  ? "https://".concat(l.env.VERCEL_BRANCH_URL)
                  : "https://"
                      .concat(l.env.VERCEL_BRANCH_URL)
                      .replace(
                        l.env.NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME,
                        l.env.VERCEL_BUILDER_PROJECT_NAME
                      ),
              o.z.string().url()
            ),
            DISABLE_SIGNUP: s.optional().default("false"),
            ADMIN_EMAIL: o.z
              .string()
              .min(1)
              .optional()
              .transform((e) => (null == e ? void 0 : e.split(","))),
            DEFAULT_WORKSPACE_PLAN: o.z
              .enum(["FREE", "STARTER", "PRO", "LIFETIME", "UNLIMITED"])
              .refine((e) =>
                ["FREE", "STARTER", "PRO", "LIFETIME", "UNLIMITED"].includes(e)
              )
              .default("FREE"),
            DEBUG: s.optional().default("false"),
            CHAT_API_TIMEOUT: o.z.coerce.number().optional(),
            RADAR_HIGH_RISK_KEYWORDS: o.z
              .string()
              .min(1)
              .transform((e) => e.split(","))
              .optional(),
            RADAR_INTERMEDIATE_RISK_KEYWORDS: o.z
              .string()
              .min(1)
              .transform((e) => e.split(","))
              .optional(),
            RADAR_CUMULATIVE_KEYWORDS: o.z
              .string()
              .min(1)
              .transform((e) =>
                e.split("/").map((e) => e.split(",").map((e) => e.split("|")))
              )
              .optional(),
            LANDING_PAGE_URL: o.z.preprocess(
              (e) =>
                (e && "string" == typeof e && e.length > 0) ||
                "preview" !== l.env.VERCEL_ENV ||
                !l.env.VERCEL_LANDING_PROJECT_NAME
                  ? e
                  : "https://".concat(l.env.VERCEL_BRANCH_URL),
              o.z.string().url().optional()
            ),
          },
          client: {
            NEXT_PUBLIC_E2E_TEST: s.optional(),
            NEXT_PUBLIC_VIEWER_URL: o.z.preprocess(
              (e) =>
                (e && "string" == typeof e && e.length > 0) ||
                "preview" !== l.env.VERCEL_ENV ||
                !l.env.VERCEL_BUILDER_PROJECT_NAME ||
                !l.env.NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME
                  ? e
                  : l.env.VERCEL_BRANCH_URL.includes(
                      l.env.NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME
                    )
                  ? "https://".concat(l.env.VERCEL_BRANCH_URL)
                  : "https://"
                      .concat(l.env.VERCEL_BRANCH_URL)
                      .replace(
                        l.env.VERCEL_BUILDER_PROJECT_NAME,
                        l.env.NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME
                      ),
              o.z
                .string()
                .min(1)
                .transform((e) => e.split(","))
            ),
            NEXT_PUBLIC_ONBOARDING_TYPEBOT_ID: o.z.string().min(1).optional(),
            NEXT_PUBLIC_BOT_FILE_UPLOAD_MAX_SIZE: o.z.coerce
              .number()
              .optional(),
            NEXT_PUBLIC_CHAT_API_URL: o.z.string().url().optional(),
            NEXT_PUBLIC_VIEWER_404_TITLE: o.z
              .string()
              .optional()
              .default("404"),
            NEXT_PUBLIC_VIEWER_404_SUBTITLE: o.z
              .string()
              .optional()
              .default("The bot you're looking for doesn't exist"),
          },
          runtimeEnv: {
            NEXT_PUBLIC_E2E_TEST: i("NEXT_PUBLIC_E2E_TEST"),
            NEXT_PUBLIC_VIEWER_URL: i("NEXT_PUBLIC_VIEWER_URL"),
            NEXT_PUBLIC_ONBOARDING_TYPEBOT_ID: i(
              "NEXT_PUBLIC_ONBOARDING_TYPEBOT_ID"
            ),
            NEXT_PUBLIC_BOT_FILE_UPLOAD_MAX_SIZE: i(
              "NEXT_PUBLIC_BOT_FILE_UPLOAD_MAX_SIZE"
            ),
            NEXT_PUBLIC_CHAT_API_URL: i("NEXT_PUBLIC_CHAT_API_URL"),
            NEXT_PUBLIC_USE_EXPERIMENTAL_CHAT_API_ON: i(
              "NEXT_PUBLIC_USE_EXPERIMENTAL_CHAT_API_ON"
            ),
            NEXT_PUBLIC_VIEWER_404_TITLE: i("NEXT_PUBLIC_VIEWER_404_TITLE"),
            NEXT_PUBLIC_VIEWER_404_SUBTITLE: i(
              "NEXT_PUBLIC_VIEWER_404_SUBTITLE"
            ),
          },
        },
        u = {
          server: {
            GITHUB_CLIENT_ID: o.z.string().min(1).optional(),
            GITHUB_CLIENT_SECRET: o.z.string().min(1).optional(),
          },
        },
        c = {
          server: {
            FACEBOOK_CLIENT_ID: o.z.string().min(1).optional(),
            FACEBOOK_CLIENT_SECRET: o.z.string().min(1).optional(),
          },
        },
        p = {
          server: {
            SMTP_USERNAME: o.z.string().min(1).optional(),
            SMTP_PASSWORD: o.z.string().min(1).optional(),
            SMTP_HOST: o.z.string().min(1).optional(),
            SMTP_PORT: o.z.coerce.number().optional().default(25),
            SMTP_AUTH_DISABLED: s.optional().default("false"),
            SMTP_SECURE: s.optional().default("false"),
            SMTP_IGNORE_TLS: s.optional(),
          },
          client: { NEXT_PUBLIC_SMTP_FROM: o.z.string().min(1).optional() },
          runtimeEnv: { NEXT_PUBLIC_SMTP_FROM: i("NEXT_PUBLIC_SMTP_FROM") },
        },
        m = {
          server: {
            GITLAB_CLIENT_ID: o.z.string().min(1).optional(),
            GITLAB_CLIENT_SECRET: o.z.string().min(1).optional(),
            GITLAB_BASE_URL: o.z
              .string()
              .url()
              .optional()
              .default("https://gitlab.com"),
            GITLAB_NAME: o.z.string().min(1).optional().default("GitLab"),
            GITLAB_REQUIRED_GROUPS: o.z
              .string()
              .transform((e) => (e ? e.split(",") : void 0))
              .optional(),
          },
        },
        b = {
          server: {
            AZURE_AD_CLIENT_ID: o.z.string().min(1).optional(),
            AZURE_AD_CLIENT_SECRET: o.z.string().min(1).optional(),
            AZURE_AD_TENANT_ID: o.z.string().min(1).optional(),
          },
        },
        g = {
          server: {
            CUSTOM_OAUTH_NAME: o.z
              .string()
              .min(1)
              .optional()
              .default("Custom OAuth"),
            CUSTOM_OAUTH_SCOPE: o.z
              .string()
              .min(1)
              .optional()
              .default("openid profile email"),
            CUSTOM_OAUTH_CLIENT_ID: o.z.string().min(1).optional(),
            CUSTOM_OAUTH_CLIENT_SECRET: o.z.string().min(1).optional(),
            CUSTOM_OAUTH_WELL_KNOWN_URL: o.z.string().url().optional(),
            CUSTOM_OAUTH_USER_ID_PATH: o.z
              .string()
              .min(1)
              .optional()
              .default("id"),
            CUSTOM_OAUTH_USER_EMAIL_PATH: o.z
              .string()
              .min(1)
              .optional()
              .default("email"),
            CUSTOM_OAUTH_USER_NAME_PATH: o.z
              .string()
              .min(1)
              .optional()
              .default("name"),
            CUSTOM_OAUTH_USER_IMAGE_PATH: o.z
              .string()
              .min(1)
              .optional()
              .default("image"),
            CUSTOM_OAUTH_ISSUER: o.z.preprocess((e) => {
              var t;
              return (
                e ||
                (null == (t = l.env.CUSTOM_OAUTH_WELL_KNOWN_URL)
                  ? void 0
                  : t.split("/.well-known")[0])
              );
            }, o.z.string().url().optional()),
          },
        },
        h = {
          server: {
            GOOGLE_AUTH_CLIENT_ID: o.z.string().min(1).optional(),
            GOOGLE_AUTH_CLIENT_SECRET: o.z.string().min(1).optional(),
          },
        },
        y = {
          server: {
            GOOGLE_SHEETS_CLIENT_ID: o.z.string().min(1).optional(),
            GOOGLE_SHEETS_CLIENT_SECRET: o.z.string().min(1).optional(),
          },
          client: {
            NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY: o.z.string().min(1).optional(),
          },
          runtimeEnv: {
            NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY: i(
              "NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY"
            ),
          },
        },
        f = {
          client: {
            NEXT_PUBLIC_GOOGLE_FONTS_API_KEY: o.z.string().min(1).optional(),
          },
          runtimeEnv: {
            NEXT_PUBLIC_GOOGLE_FONTS_API_KEY: i(
              "NEXT_PUBLIC_GOOGLE_FONTS_API_KEY"
            ),
          },
        },
        v = {
          server: {
            STRIPE_SECRET_KEY: o.z.string().min(1).optional(),
            STRIPE_WEBHOOK_SECRET: o.z.string().min(1).optional(),
            STRIPE_STARTER_PRICE_ID: o.z.string().min(1).optional(),
            STRIPE_STARTER_CHATS_PRICE_ID: o.z.string().min(1).optional(),
            STRIPE_PRO_PRICE_ID: o.z.string().min(1).optional(),
            STRIPE_PRO_CHATS_PRICE_ID: o.z.string().min(1).optional(),
          },
          client: {
            NEXT_PUBLIC_STRIPE_PUBLIC_KEY: o.z.string().min(1).optional(),
          },
          runtimeEnv: {
            NEXT_PUBLIC_STRIPE_PUBLIC_KEY: i("NEXT_PUBLIC_STRIPE_PUBLIC_KEY"),
          },
        },
        w = {
          server: {
            S3_ACCESS_KEY: o.z.string().min(1).optional(),
            S3_SECRET_KEY: o.z.string().min(1).optional(),
            S3_BUCKET: o.z.string().min(1).optional().default("typebot"),
            S3_PORT: o.z.coerce.number().optional(),
            S3_ENDPOINT: o.z.string().min(1).optional(),
            S3_SSL: s.optional().default("true"),
            S3_REGION: o.z.string().min(1).optional(),
            S3_PUBLIC_CUSTOM_DOMAIN: o.z.string().url().optional(),
          },
        },
        I = {
          client: { NEXT_PUBLIC_GIPHY_API_KEY: o.z.string().min(1).optional() },
          runtimeEnv: {
            NEXT_PUBLIC_GIPHY_API_KEY: i("NEXT_PUBLIC_GIPHY_API_KEY"),
          },
        },
        x = {
          server: {
            VERCEL_TOKEN: o.z.string().min(1).optional(),
            VERCEL_TEAM_ID: o.z.string().min(1).optional(),
            VERCEL_GIT_COMMIT_SHA: o.z.string().min(1).optional(),
            VERCEL_BUILDER_PROJECT_NAME: o.z.string().min(1).optional(),
            VERCEL_LANDING_PROJECT_NAME: o.z.string().min(1).optional(),
          },
          client: {
            NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME: o.z
              .string()
              .min(1)
              .optional(),
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: o.z.string().min(1).optional(),
            NEXT_PUBLIC_VERCEL_ENV: o.z.string().min(1).optional(),
          },
          runtimeEnv: {
            NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME: i(
              "NEXT_PUBLIC_VERCEL_VIEWER_PROJECT_NAME"
            ),
            NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: i(
              "NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA"
            ),
            NEXT_PUBLIC_VERCEL_ENV: i("NEXT_PUBLIC_VERCEL_ENV"),
          },
        },
        E = { server: { SLEEKPLAN_SSO_KEY: o.z.string().min(1).optional() } },
        _ = {
          client: {
            NEXT_PUBLIC_UNSPLASH_APP_NAME: o.z.string().min(1).optional(),
            NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: o.z.string().min(1).optional(),
          },
          runtimeEnv: {
            NEXT_PUBLIC_UNSPLASH_APP_NAME: i("NEXT_PUBLIC_UNSPLASH_APP_NAME"),
            NEXT_PUBLIC_UNSPLASH_ACCESS_KEY: i(
              "NEXT_PUBLIC_UNSPLASH_ACCESS_KEY"
            ),
          },
        },
        T = {
          client: {
            NEXT_PUBLIC_PEXELS_API_KEY: o.z.string().min(1).optional(),
          },
          runtimeEnv: {
            NEXT_PUBLIC_PEXELS_API_KEY: i("NEXT_PUBLIC_PEXELS_API_KEY"),
          },
        },
        C = {
          server: {
            META_SYSTEM_USER_TOKEN: o.z.string().min(1).optional(),
            WHATSAPP_PREVIEW_FROM_PHONE_NUMBER_ID: o.z
              .string()
              .min(1)
              .optional(),
            WHATSAPP_PREVIEW_TEMPLATE_NAME: o.z.string().min(1).optional(),
            WHATSAPP_PREVIEW_TEMPLATE_LANG: o.z
              .string()
              .min(1)
              .optional()
              .default("en_US"),
            WHATSAPP_CLOUD_API_URL: o.z
              .string()
              .url()
              .optional()
              .default("https://graph.facebook.com"),
            WHATSAPP_INTERACTIVE_GROUP_SIZE: o.z.coerce
              .number()
              .optional()
              .default(3),
          },
        },
        S = { server: { REDIS_URL: o.z.string().url().optional() } },
        k = {
          server: {
            SENTRY_DSN: o.z.string().min(1).optional(),
            SENTRY_AUTH_TOKEN: o.z.string().min(1).optional(),
            SENTRY_PROJECT: o.z.string().min(1).optional(),
            SENTRY_ORG: o.z.string().min(1).optional(),
          },
        },
        N = {
          server: {
            MESSAGE_WEBHOOK_URL: o.z.string().url().optional(),
            USER_CREATED_WEBHOOK_URL: o.z.string().url().optional(),
          },
        },
        A = {
          client: { NEXT_PUBLIC_POSTHOG_KEY: o.z.string().min(1).optional() },
          server: {
            POSTHOG_API_HOST: o.z.preprocess(
              (e) => e || l.env.POSTHOG_API_HOST,
              o.z.string().url().optional().default("https://us.posthog.com")
            ),
            POSTHOG_PERSONAL_API_KEY: o.z.string().min(1).optional(),
            POSTHOG_PROJECT_ID: o.z.string().min(1).optional(),
          },
          runtimeEnv: { NEXT_PUBLIC_POSTHOG_KEY: i("NEXT_PUBLIC_POSTHOG_KEY") },
        },
        P = {
          client: {
            NEXT_PUBLIC_TOLGEE_API_KEY: o.z.string().min(1).optional(),
            NEXT_PUBLIC_TOLGEE_API_URL: o.z
              .string()
              .url()
              .optional()
              .default('https://tolgee.server.baptistearno.com"'),
          },
          runtimeEnv: {
            NEXT_PUBLIC_TOLGEE_API_KEY: i("NEXT_PUBLIC_TOLGEE_API_KEY"),
            NEXT_PUBLIC_TOLGEE_API_URL:
              null != (a = i("NEXT_PUBLIC_TOLGEE_API_URL"))
                ? a
                : "https://tolgee.server.baptistearno.com",
          },
        },
        R = {
          server: {
            KEYCLOAK_CLIENT_ID: o.z.string().min(1).optional(),
            KEYCLOAK_CLIENT_SECRET: o.z.string().min(1).optional(),
            KEYCLOAK_REALM: o.z.string().min(1).optional(),
            KEYCLOAK_BASE_URL: o.z.string().url().optional(),
          },
        },
        j = {
          client: { NEXT_PUBLIC_PARTYKIT_HOST: o.z.string().min(1).optional() },
          runtimeEnv: {
            NEXT_PUBLIC_PARTYKIT_HOST: i("NEXT_PUBLIC_PARTYKIT_HOST"),
          },
        },
        L = (0, r.w)({
          server: {
            ...d.server,
            ...u.server,
            ...c.server,
            ...p.server,
            ...h.server,
            ...y.server,
            ...v.server,
            ...w.server,
            ...x.server,
            ...E.server,
            ...C.server,
            ...S.server,
            ...m.server,
            ...b.server,
            ...g.server,
            ...k.server,
            ...N.server,
            ...R.server,
            ...A.server,
          },
          client: {
            ...d.client,
            ...p.client,
            ...y.client,
            ...f.client,
            ...v.client,
            ...I.client,
            ...x.client,
            ..._.client,
            ...T.client,
            ...A.client,
            ...P.client,
            ...j.client,
          },
          experimental__runtimeEnv: {
            ...d.runtimeEnv,
            ...p.runtimeEnv,
            ...y.runtimeEnv,
            ...f.runtimeEnv,
            ...v.runtimeEnv,
            ...I.runtimeEnv,
            ...x.runtimeEnv,
            ..._.runtimeEnv,
            ...T.runtimeEnv,
            ...A.runtimeEnv,
            ...P.runtimeEnv,
            ...j.runtimeEnv,
          },
          skipValidation:
            "true" === l.env.SKIP_ENV_CHECK || void 0 === window.__ENV,
          onValidationError(e) {
            throw (
              (console.error(
                "❌ Invalid environment variables:",
                e.flatten().fieldErrors
              ),
              Error(
                "Invalid environment variables: ".concat(
                  JSON.stringify(e.flatten().fieldErrors)
                )
              ))
            );
          },
          onInvalidAccess: (e) => {
            throw Error(
              "❌ Attempted to access a server-side environment variable on the client: ".concat(
                e
              )
            );
          },
        });
    },
    10760: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => rP });
      var a,
        r = n(6029),
        o = n(2283);
      let i = async (e) =>
          (0, o.w$)({
            url: "/api/typebots/t/results/r/answers",
            method: "PUT",
            body: e,
          }),
        l = async (e) =>
          (0, o.w$)({
            url: "/api/typebots/".concat(e, "/results"),
            method: "POST",
          }),
        s = async (e, t) =>
          (0, o.w$)({
            url: "/api/typebots/t/results/".concat(e),
            method: "PATCH",
            body: t,
          }),
        d = "resultId",
        u = () => {
          try {
            return sessionStorage.getItem(d);
          } catch (e) {}
        },
        c = (e) => {
          try {
            return sessionStorage.setItem(d, e);
          } catch (e) {}
        };
      var p = n(51511),
        m = n(69443),
        b = n(96059),
        g = n(3735),
        h = n(28157),
        y = n(55729),
        f = (function (e) {
          return (
            (e.TEXT = "text"),
            (e.IMAGE = "image"),
            (e.VIDEO = "video"),
            (e.EMBED = "embed"),
            (e.AUDIO = "audio"),
            e
          );
        })({}),
        v = (function (e) {
          return (
            (e.TEXT = "text input"),
            (e.NUMBER = "number input"),
            (e.EMAIL = "email input"),
            (e.URL = "url input"),
            (e.DATE = "date input"),
            (e.TIME = "time input"),
            (e.PHONE = "phone number input"),
            (e.CHOICE = "choice input"),
            (e.PICTURE_CHOICE = "picture choice input"),
            (e.PAYMENT = "payment input"),
            (e.RATING = "rating input"),
            (e.FILE = "file input"),
            (e.CARDS = "cards"),
            e
          );
        })({}),
        w = (function (e) {
          return (
            (e.GOOGLE_SHEETS = "Google Sheets"),
            (e.OPEN_AI = "OpenAI"),
            (e.GOOGLE_ANALYTICS = "Google Analytics"),
            (e.HTTP_REQUEST = "Webhook"),
            (e.EMAIL = "Email"),
            (e.ZAPIER = "Zapier"),
            (e.MAKE_COM = "Make.com"),
            (e.PABBLY_CONNECT = "Pabbly"),
            (e.CHATWOOT = "Chatwoot"),
            (e.PIXEL = "Pixel"),
            e
          );
        })({}),
        I = (function (e) {
          return (
            (e.SET_VARIABLE = "Set variable"),
            (e.CONDITION = "Condition"),
            (e.REDIRECT = "Redirect"),
            (e.SCRIPT = "Code"),
            (e.TYPEBOT_LINK = "Typebot link"),
            (e.WAIT = "Wait"),
            (e.AB_TEST = "AB test"),
            (e.WEBHOOK = "webhook"),
            (e.JUMP = "Jump"),
            (e.RETURN = "Return"),
            e
          );
        })({});
      let x = [
          "openai",
          "cal-com",
          "chat-node",
          "qr-code",
          "dify-ai",
          "mistral",
          "elevenlabs",
          "anthropic",
          "together-ai",
          "open-router",
          "nocodb",
          "segment",
          "posthog",
          "groq",
          "zendesk",
          "perplexity",
          "deepseek",
          "blink",
        ],
        E = (e) => {
          if ("number" == typeof e) return e;
          if (!e) return;
          let t = Number.parseFloat(e.toString().replace(",", "."));
          return isNaN(t) ? void 0 : t;
        };
      var _ = n(31078),
        T = n(61686);
      ((e) => {
        void 0 === e.ZodType.prototype.layout &&
          (e.ZodType.prototype.layout = function (e) {
            return new this.constructor({ ...this._def, layout: e });
          });
      })(_.z),
        (0, T.I)(_.z);
      let C = (e) =>
          !!e &&
          e.startsWith("{{") &&
          e.endsWith("}}") &&
          2 === e.split("{{").length,
        S = _.z.array(_.z.string().nullable()),
        k = _.z.object({
          id: _.z.string(),
          name: _.z.string(),
          isSessionVariable: _.z.boolean().optional(),
        });
      k.extend({ value: _.z.string().or(S).nullish() }),
        k.extend({ value: _.z.string().or(S) }),
        k.extend({ value: _.z.unknown() }),
        _.z.custom((e) => /^{{.+}}$/g.test(e));
      let N = _.z
        .string()
        .or(_.z.number())
        .transform((e) => ("string" == typeof e ? (C(e) ? e : E(e)) : e))
        .openapi({ effectType: "input" });
      _.z.object({
        resultId: _.z.string(),
        index: _.z.number(),
        blockId: _.z.string(),
        variableId: _.z.string(),
        value: _.z.string().or(S).nullable(),
      });
      let A = {
          object: (e) => _.z.object(e),
          literal: (e) => _.z.literal(e),
          string: _.z.string().optional(),
          boolean: _.z.boolean().optional(),
          enum: (e) => _.z.enum(e).optional(),
          number: N.optional(),
          array: (e) => _.z.array(e).optional(),
          discriminatedUnion: (e, t) =>
            _.z.discriminatedUnion(e, [
              _.z.object({ [e]: _.z.undefined() }),
              ...t,
            ]),
          saveResponseArray: (e, t) => {
            var n, a;
            return _.z
              .array(
                _.z.object({
                  item: _.z
                    .enum(e)
                    .optional()
                    .layout({
                      ...(null != (n = null == t ? void 0 : t.item) ? n : {}),
                      placeholder: "Select a response",
                    }),
                  variableId: _.z
                    .string()
                    .optional()
                    .layout({
                      ...(null != (a = null == t ? void 0 : t.variableId)
                        ? a
                        : {}),
                      inputType: "variableDropdown",
                    }),
                })
              )
              .optional();
          },
          filter: (e) => {
            let { operators: t = P, isJoinerHidden: n } = e;
            return _.z
              .object({
                comparisons: _.z.array(
                  _.z.object({
                    input: _.z
                      .string()
                      .optional()
                      .layout({ label: "Enter a field " }),
                    operator: _.z
                      .enum(t)
                      .optional()
                      .layout({ defaultValue: "Equal to" }),
                    value: _.z
                      .string()
                      .optional()
                      .layout({ placeholder: "Enter a value" }),
                  })
                ),
                joiner: _.z
                  .enum(["AND", "OR"])
                  .optional()
                  .layout({ placeholder: "Select joiner", isHidden: n }),
              })
              .optional();
          },
        },
        P = [
          "Equal to",
          "Not equal",
          "Contains",
          "Does not contain",
          "Greater than",
          "Less than",
          "Is set",
          "Is empty",
          "Starts with",
          "Ends with",
          "Matches regex",
          "Does not match regex",
        ];
      var R = n(68140);
      let j = (e) => {
        var t, n;
        return null == (n = e.responseMapping) ||
          null == (t = n.find((e) => "Message content" === e.item || !e.item))
          ? void 0
          : t.variableId;
      };
      var L = n(24586);
      let U = async (e) => {
          let { err: t, context: n } = e;
          try {
            if ("string" == typeof t)
              return { context: n, description: t, details: void 0 };
            if (t instanceof Error)
              return {
                context: n,
                description: t.message,
                details: await D(t),
              };
            return { context: n, description: JSON.stringify(t) };
          } catch (e) {
            return (
              L.Cp(e),
              { context: n, description: "Unknown error (failed to parse)" }
            );
          }
        },
        O = (e) => {
          let { err: t, context: n } = e;
          try {
            if ("string" == typeof t)
              return { context: n, description: t, details: void 0 };
            if (t instanceof Error)
              return { context: n, description: t.message, details: V(t) };
            return { context: n, description: JSON.stringify(t) };
          } catch (e) {
            return (
              L.Cp(e),
              { context: n, description: "Unknown error (failed to parse)" }
            );
          }
        },
        V = (e) =>
          "responseBody" in e
            ? "string" == typeof e.responseBody
              ? e.responseBody
              : JSON.stringify(e.responseBody)
            : "string" == typeof e.cause
            ? e.cause
            : JSON.stringify(e.cause),
        D = async (e) =>
          "responseBody" in e
            ? "string" == typeof e.responseBody
              ? e.responseBody
              : JSON.stringify(e.responseBody)
            : "response" in e &&
              "object" == typeof e.response &&
              e.response &&
              "text" in e.response &&
              "function" == typeof e.response.text
            ? await e.response.text()
            : "string" == typeof e.cause
            ? e.cause
            : JSON.stringify(e.cause);
      var B = n(17072),
        z = n(70491),
        M = n(11335);
      let H = async (e) => {
          let { input: t, shouldDownloadImages: n } = e,
            a = t.split("\n\n"),
            r = [];
          for (let e of a) {
            var o, i;
            if (e.startsWith("http") || e.startsWith('["http'))
              for (let t of e.startsWith("[") ? JSON.parse(e) : [e]) {
                let e = t.trim();
                try {
                  let a = await z.Ay.get(e);
                  a.ok &&
                  (null == (o = a.headers.get("content-type"))
                    ? void 0
                    : o.startsWith("image/"))
                    ? r.push({
                        type: "image",
                        image: n ? await a.arrayBuffer() : t.trim(),
                      })
                    : r.push({ type: "text", text: e });
                } catch (e) {
                  e instanceof M.H
                    ? console.log(e.response.status, await e.response.text())
                    : console.error(e);
                }
              }
            else if ((null == (i = r.at(-1)) ? void 0 : i.type) === "text") {
              let t = r.at(-1);
              (r = r.slice(0, -1)).push({
                type: "text",
                text: t.text + "\n\n" + e,
              });
            } else r.push({ type: "text", text: e });
          }
          return r;
        },
        K = async (e) => {
          let {
            messages: t,
            isVisionEnabled: n,
            shouldDownloadImages: a,
            variables: r,
          } = e;
          return t
            ? (
                await Promise.all(
                  t.map(async (e) => {
                    if (e.role)
                      return "Dialogue" === e.role
                        ? W({
                            message: e,
                            variables: r,
                            isVisionEnabled: n,
                            shouldDownloadImages: a,
                          })
                        : F({
                            message: e,
                            variables: r,
                            isVisionEnabled: n,
                            shouldDownloadImages: a,
                          });
                  })
                )
              )
                .flat()
                .filter(o.O9)
            : [];
        },
        W = async (e) => {
          var t;
          let {
            message: n,
            variables: a,
            isVisionEnabled: r,
            shouldDownloadImages: o,
          } = e;
          if (!n.dialogueVariableId) return;
          let i = null != (t = a.get(n.dialogueVariableId)) ? t : [];
          return Promise.all(
            (Array.isArray(i) ? i : [i]).map(async (e, t) => {
              if (e)
                return 0 === t && "assistant" === n.startsBy
                  ? { role: "assistant", content: e }
                  : t % ("assistant" === n.startsBy ? 1 : 2) == 0
                  ? {
                      role: "user",
                      content: r
                        ? await H({
                            input: null != e ? e : "",
                            shouldDownloadImages: o,
                          })
                        : e,
                    }
                  : { role: "assistant", content: e };
            })
          );
        },
        F = async (e) => {
          let {
            message: t,
            variables: n,
            isVisionEnabled: a,
            shouldDownloadImages: r,
          } = e;
          if (!t.content) return;
          let i = n.parse(t.content);
          if (!(0, o.Im)(i))
            return "user" === t.role
              ? {
                  role: "user",
                  content: a
                    ? await H({ input: i, shouldDownloadImages: r })
                    : i,
                }
              : { role: t.role, content: i };
        },
        G = (e) => {
          if ((0, o.pN)(e)) return null;
          if ("string" == typeof e) return e;
          try {
            return JSON.stringify(e);
          } catch (t) {
            return (
              console.warn("Failed to safely stringify variable value", e), null
            );
          }
        };
      var q = n(47668),
        X = n.n(q);
      let Y = (e) => {
          if (null === e) return null;
          if (void 0 === e) return;
          if ("string" != typeof e) return e;
          let t = e.startsWith("0") && !e.startsWith("0.") && e.length > 1;
          if ("string" == typeof e && t) return e;
          let n = e.startsWith("+");
          return ("string" == typeof e && n) || "number" == typeof e
            ? e
            : "true" === e ||
                ("false" !== e &&
                  ("null" === e
                    ? null
                    : "undefined" !== e
                    ? isNaN(e)
                      ? e
                      : Number(e)
                    : void 0));
        },
        J = (e) => {
          let { variables: t, sessionStore: n } = e,
            a = n.getOrCreateIsolate().createContextSync(),
            r = a.global;
          return (
            r.setSync("global", r.derefInto()),
            t.forEach((e) => {
              r.setSync(e.id, $(Y(e.value)));
            }),
            (e) =>
              a.evalClosureSync(
                "return (function() {\n    return new Function($0)();\n  }())",
                [e],
                { result: { copy: !0 }, timeout: 1e4 }
              )
          );
        },
        $ = (e) =>
          "object" == typeof e ? new (X().ExternalCopy)(e).copyInto() : e,
        Q = (e) => (t) =>
          [...t.matchAll(/\{\{(.*?)\}\}/g)].reduce((t, n) => {
            let a = n[1],
              r = e.find((e) => e.name === a);
            return !r || t.find((e) => e.id === r.id) ? t : [...t, r];
          }, []),
        Z = /\{\{=(.+?)=\}\}/g,
        ee = /\{\{([^{}]+)\}\}|(\$)\{\{([^{}]+)\}\}/g,
        et = (e, t) => {
          let {
            variables: n,
            sessionStore: a,
            fieldToParse: r = "value",
            isInsideJson: i = !1,
            takeLatestIfList: l = !1,
            isInsideHtml: s = !1,
          } = t;
          return e && "" !== e
            ? e
                .replace(Z, (e, t) => {
                  var r;
                  let o = en(t, { variables: n, sessionStore: a });
                  return null != (r = G(o)) ? r : o;
                })
                .replace(ee, (e, t, a, d) => {
                  let u = null != a ? a : "",
                    c = null != t ? t : d,
                    p = n.find(
                      (e) => c === e.name && ("id" === r || (0, o.O9)(e.value))
                    );
                  if (!p) return u + "";
                  if ("id" === r) return u + p.id;
                  let { value: m } = p;
                  if (i) return u + ea(m);
                  let b = u + G(l && Array.isArray(m) ? m[m.length - 1] : m);
                  return b ? (s ? er(b) : b) : u + "";
                })
            : "";
        },
        en = (e, t) => {
          let { variables: n, sessionStore: a } = t;
          try {
            let t = et(e, {
              variables: n,
              sessionStore: a,
              fieldToParse: "id",
            });
            return J({ variables: n, sessionStore: a })(
              t.includes("return ") ? t : "return ".concat(t)
            );
          } catch (t) {
            return et(e, { variables: n, sessionStore: a });
          }
        },
        ea = (e) => {
          let t = JSON.stringify(e);
          return "string" == typeof e ? t.slice(1, -1) : t;
        },
        er = (e) =>
          "string" == typeof e
            ? e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
            : JSON.stringify(e).replace(/</g, "&lt;").replace(/>/g, "&gt;"),
        eo = async (e) => {
          let { variables: t, body: n, sessionStore: a, args: r } = e,
            i = et(n, { fieldToParse: "id", variables: t, sessionStore: a }),
            l = Q(t)(n)
              .map((e) => ({ id: e.id, value: Y(e.value) }))
              .concat(
                r
                  ? Object.entries(r).map((e) => {
                      let [t, n] = e;
                      return { id: t, value: n };
                    })
                  : []
              ),
            s = new Map(),
            d = a.getOrCreateIsolate().createContextSync(),
            u = d.global;
          u.setSync("global", u.derefInto()),
            d.evalClosure(
              "globalThis.setVariable = (...args) => $0.apply(undefined, args, { arguments: { copy: true }, promise: true, result: { copy: true, promise: true } })",
              [
                new q.Reference((e, t) => {
                  s.set(e, t);
                }),
              ]
            ),
            d.evalClosure(
              "globalThis.fetch = (...args) => $0.apply(undefined, args, { arguments: { copy: true }, promise: true, result: { copy: true, promise: true } })",
              [
                new q.Reference(async function () {
                  for (
                    var e = arguments.length, t = Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return (await fetch(...t)).text();
                }),
              ]
            ),
            l.forEach((e) => {
              let { id: t, value: n } = e;
              u.setSync(t, $(n));
            });
          try {
            let e = await d.evalClosure(
              "return (async function() {\n		const AsyncFunction = async function () {}.constructor;\n		return new AsyncFunction($0)();\n	}())",
              [i],
              { result: { copy: !0, promise: !0 }, timeout: 1e4 }
            );
            return (
              d.release(),
              {
                output: e,
                newVariables: Array.from(s.entries())
                  .map((e) => {
                    let [n, a] = e,
                      r = t.find((e) => e.name === n);
                    if (r) return { id: r.id, name: r.name, value: a };
                  })
                  .filter(o.O9),
              }
            );
          } catch (t) {
            d.release(),
              "development" === g._.NODE_ENV &&
                (console.log("Error while executing the function"),
                console.error(t));
            let e = await U({ err: t, context: "While executing function" });
            return { error: e, output: e };
          }
        },
        ei = (e) => {
          let { tools: t, variables: n, sessionStore: a } = e;
          return (null == t ? void 0 : t.length)
            ? t.reduce(
                (e, t) => (
                  t.code &&
                    t.name &&
                    (e[t.name] = {
                      description: t.description,
                      parameters: el(t.parameters),
                      execute: async (e) => {
                        var r;
                        let { output: o, newVariables: i } = await eo({
                          sessionStore: a,
                          variables: n.list(),
                          args: e,
                          body: t.code,
                        });
                        return (
                          i && i.length > 0 && n.set(i),
                          null != (r = G(o)) ? r : ""
                        );
                      },
                    }),
                  e
                ),
                {}
              )
            : {};
        },
        el = (e) => {
          if (!e || (null == e ? void 0 : e.length) === 0)
            return _.z.object({});
          let t = {};
          return (
            e.forEach((e) => {
              if (e.name) {
                switch (e.type) {
                  case "string":
                    t[e.name] = _.z.string();
                    break;
                  case "number":
                    t[e.name] = _.z.number();
                    break;
                  case "boolean":
                    t[e.name] = _.z.boolean();
                    break;
                  case "enum":
                    if (!e.values || 0 === e.values.length) return;
                    t[e.name] = _.z.enum(e.values);
                }
                (0, o.hj)(e.description) &&
                  (t[e.name] = t[e.name].describe(e.description)),
                  !1 === e.required && (t[e.name] = t[e.name].optional());
              }
            }),
            _.z.object(t)
          );
        },
        es = async (e) => {
          let {
            variables: t,
            messages: n,
            model: a,
            isVisionEnabled: r,
            temperature: o,
            tools: i,
            responseMapping: l,
            logs: s,
            sessionStore: d,
          } = e;
          try {
            let { text: e, usage: s } = await (0, B.Df)({
              model: a,
              temperature: o,
              messages: await K({
                messages: n,
                variables: t,
                isVisionEnabled: r,
                shouldDownloadImages: !1,
              }),
              tools: ei({ tools: i, variables: t, sessionStore: d }),
              maxSteps: 6,
            });
            null == l ||
              l.forEach((n) => {
                n.variableId &&
                  ((n.item && "Message content" !== n.item) ||
                    t.set([{ id: n.variableId, value: e }]),
                  "Total tokens" === n.item &&
                    t.set([{ id: n.variableId, value: s.totalTokens }]),
                  "Prompt tokens" === n.item &&
                    t.set([{ id: n.variableId, value: s.promptTokens }]),
                  "Completion tokens" === n.item &&
                    t.set([{ id: n.variableId, value: s.completionTokens }]));
              });
          } catch (e) {
            s.add(
              await U({ err: e, context: "While generating chat completion" })
            );
          }
        },
        ed = async (e) => {
          let {
            variables: t,
            messages: n,
            model: a,
            isVisionEnabled: r,
            temperature: o,
            tools: i,
            responseMapping: l,
            sessionStore: s,
          } = e;
          try {
            return {
              stream: (0, B.gM)({
                model: a,
                messages: await K({
                  messages: n,
                  isVisionEnabled: r,
                  shouldDownloadImages: !1,
                  variables: t,
                }),
                temperature: o,
                tools: ei({ tools: i, variables: t, sessionStore: s }),
                maxSteps: 6,
                onFinish: (e) => {
                  null == l ||
                    l.forEach((n) => {
                      n.variableId &&
                        ("Total tokens" === n.item &&
                          t.set([
                            { id: n.variableId, value: e.usage.totalTokens },
                          ]),
                        "Prompt tokens" === n.item &&
                          t.set([
                            { id: n.variableId, value: e.usage.promptTokens },
                          ]),
                        "Completion tokens" === n.item &&
                          t.set([
                            {
                              id: n.variableId,
                              value: e.usage.completionTokens,
                            },
                          ]));
                    });
                },
              }).toDataStream({
                getErrorMessage: (e) =>
                  JSON.stringify(O({ err: e, context: "While streaming AI" })),
                sendUsage: !1,
              }),
            };
          } catch (e) {
            return {
              error: await U({
                err: e,
                context: "While running chat completion stream",
              }),
            };
          }
        },
        eu = {
          name: A.string.layout({
            label: "Name",
            placeholder: "myVariable",
            withVariableButton: !1,
          }),
          description: A.string.layout({
            label: "Description",
            withVariableButton: !1,
          }),
          required: A.boolean.layout({ label: "Is required?" }),
        },
        ec = A.array(
          A.discriminatedUnion("type", [
            A.object({ type: A.literal("string") }).extend(eu),
            A.object({ type: A.literal("number") }).extend(eu),
            A.object({ type: A.literal("boolean") }).extend(eu),
            A.object({
              type: A.literal("enum"),
              values: A.array(A.string).layout({ itemLabel: "possible value" }),
            }).extend(eu),
          ])
        ).layout({ accordion: "Parameters", itemLabel: "parameter" }),
        ep = A.object({
          type: A.literal("function"),
          name: A.string.layout({
            label: "Name",
            placeholder: "myFunctionName",
            withVariableButton: !1,
          }),
          description: A.string.layout({
            label: "Description",
            placeholder: "A brief description of what this function does.",
            withVariableButton: !1,
          }),
          parameters: ec,
          code: A.string.layout({
            inputType: "code",
            label: "Code",
            lang: "javascript",
            moreInfoTooltip:
              "A javascript code snippet that can use the defined parameters. It should return a value.",
            withVariableButton: !1,
          }),
        }),
        em = A.array(A.discriminatedUnion("type", [ep])).layout({
          accordion: "Tools",
          itemLabel: "tool",
        }),
        eb = {
          type: "encryptedCredentials",
          name: "Anthropic account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an API key [here](https://console.anthropic.com/settings/keys).",
              placeholder: "sk-...",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        eg = [
          "claude-3-7-sonnet-latest",
          "claude-3-5-haiku-latest",
          "claude-3-5-sonnet-latest",
          "claude-3-opus-latest",
        ],
        eh = ["claude-3*"];
      function ey(e) {
        return "-" === e ||
          "^" === e ||
          "$" === e ||
          "+" === e ||
          "." === e ||
          "(" === e ||
          ")" === e ||
          "|" === e ||
          "[" === e ||
          "]" === e ||
          "{" === e ||
          "}" === e ||
          "*" === e ||
          "?" === e ||
          "\\" === e
          ? "\\".concat(e)
          : e;
      }
      function ef(e, t) {
        if ("string" != typeof t)
          throw TypeError(
            "Sample must be a string, but ".concat(typeof t, " given")
          );
        return e.test(t);
      }
      let ev = (e, t) => {
          if ("string" != typeof e && !Array.isArray(e))
            throw TypeError(
              "The first argument must be a single pattern string or an array of patterns, but ".concat(
                typeof e,
                " given"
              )
            );
          if (
            (("string" == typeof t || "boolean" == typeof t) &&
              (t = { separator: t }),
            "\\" === (t = t || {}).separator)
          )
            throw Error(
              "\\ is not a valid separator because it is used for escaping. Try setting the separator to `true` instead"
            );
          let n = (function e(t) {
              let n =
                !(arguments.length > 1) ||
                void 0 === arguments[1] ||
                arguments[1];
              if (Array.isArray(t)) {
                let a = t.map((t) => "^".concat(e(t, n), "$"));
                return "(?:".concat(a.join("|"), ")");
              }
              let a = "",
                r = "",
                o = ".";
              !0 === n
                ? ((a = "/"), (r = "[/\\\\]"), (o = "[^/\\\\]"))
                : n &&
                  ((r = (function (e) {
                    let t = "";
                    for (let n = 0; n < e.length; n++) t += ey(e[n]);
                    return t;
                  })((a = n))).length > 1
                    ? ((r = "(?:".concat(r, ")")),
                      (o = "((?!".concat(r, ").)")))
                    : (o = "[^".concat(r, "]")));
              let i = n ? "".concat(r, "+?") : "",
                l = n ? "".concat(r, "*?") : "",
                s = n ? t.split(a) : [t],
                d = "";
              for (let e = 0; e < s.length; e++) {
                let t = s[e],
                  a = s[e + 1],
                  r = "";
                if (t || !(e > 0)) {
                  if (
                    (n && (r = e === s.length - 1 ? l : "**" !== a ? i : ""),
                    n && "**" === t)
                  ) {
                    r &&
                      ((d += 0 === e ? "" : r),
                      (d += "(?:".concat(o, "*?").concat(r, ")*?")));
                    continue;
                  }
                  if (t) {
                    for (let e = 0; e < t.length; e++) {
                      let n = t[e];
                      "\\" === n
                        ? e < t.length - 1 && ((d += ey(t[e + 1])), e++)
                        : "?" === n
                        ? (d += o)
                        : "*" === n
                        ? (d += "".concat(o, "*?"))
                        : (d += ey(n));
                    }
                    d += r;
                  }
                }
              }
              return d;
            })(e, t.separator),
            a = new RegExp("^".concat(n, "$"), t.flags),
            r = ef.bind(null, a);
          return (r.options = t), (r.pattern = e), (r.regexp = a), r;
        },
        ew = (e) => !!e && ev(eh)(e),
        eI = {
          content: A.string.layout({
            inputType: "textarea",
            placeholder: "Content",
          }),
        },
        ex = A.object({ role: A.literal("user") }).extend(eI),
        eE = A.object({ role: A.literal("assistant") }).extend(eI),
        e_ = A.object({
          role: A.literal("Dialogue"),
          dialogueVariableId: A.string.layout({
            inputType: "variableDropdown",
            placeholder: "Dialogue variable",
          }),
          startsBy: A.enum(["user", "assistant"]).layout({
            label: "starts by",
            direction: "row",
            defaultValue: "user",
          }),
        }),
        eT = A.object({
          model: A.string.layout({
            placeholder: "Select a model",
            allowCustomValue: !0,
            autoCompleteItems: eg,
            label: "Model",
          }),
          messages: A.array(A.discriminatedUnion("role", [ex, eE, e_])).layout({
            accordion: "Messages",
            itemLabel: "message",
            isOrdered: !0,
          }),
          tools: em,
          systemMessage: A.string.layout({
            accordion: "Advanced Settings",
            label: "System prompt",
            direction: "row",
            inputType: "textarea",
          }),
          temperature: A.number.layout({
            accordion: "Advanced Settings",
            label: "Temperature",
            direction: "row",
            placeholder: "1",
          }),
          maxTokens: A.number.layout({
            accordion: "Advanced Settings",
            label: "Max Tokens",
            direction: "row",
            defaultValue: 1024,
          }),
          responseMapping: _.z.preprocess(
            (e) =>
              Array.isArray(e)
                ? e.map((e) =>
                    "Message Content" === e.item
                      ? { ...e, item: "Message content" }
                      : e
                  )
                : void 0,
            A.saveResponseArray(["Message content"]).layout({
              accordion: "Save Response",
            })
          ),
        }),
        eC = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
            ...e,
            model: t ? void 0 : e.model,
            action: "Create chat completion",
          };
        },
        eS = {
          variableId: A.string.layout({ inputType: "variableDropdown" }),
          description: A.string.layout({
            label: "Description",
            accordion: "Advanced",
          }),
          isRequired: A.boolean.layout({
            label: "Is required",
            moreInfoTooltip:
              "If set to false, there is a chance the variable will be empty",
            accordion: "Advanced",
            defaultValue: !0,
          }),
        },
        ek = A.array(
          A.discriminatedUnion("type", [
            A.object({ type: A.literal("string") }).extend(eS),
            A.object({ type: A.literal("number") }).extend(eS),
            A.object({ type: A.literal("boolean") }).extend(eS),
            A.object({
              type: A.literal("enum"),
              values: A.array(A.string).layout({
                itemLabel: "possible value",
                mergeWithLastField: !0,
              }),
            }).extend(eS),
          ])
        ).layout({ itemLabel: "variable mapping", accordion: "Schema" }),
        eN = (e) => {
          let { models: t } = e;
          return A.object({
            model: A.string.layout({
              placeholder: "Select a model",
              label: "Model",
              allowCustomValue: !0,
              helperText: t.helperText,
              autoCompleteItems: "static" === t.type ? t.models : void 0,
              fetcher: "fetcher" === t.type ? t.id : void 0,
            }),
            prompt: A.string.layout({
              label: "Prompt",
              placeholder: "Type your text here",
              inputType: "textarea",
              isRequired: !0,
              moreInfoTooltip:
                'Meant to guide the model on what to generate. i.e. "Generate a role-playing game character", "Extract the company name from this text", etc.',
            }),
            variablesToExtract: ek,
          });
        },
        eA = async (e) => {
          let {
            variablesToExtract: t,
            model: n,
            prompt: a,
            variables: r,
            logs: o,
          } = e;
          if (!a) return o.add("No prompt provided");
          let i = r.list(),
            l = eP({ variablesToExtract: t, variables: i });
          if (!l) return void o.add("Could not parse variables to extract");
          let s = null == t ? void 0 : t.some((e) => !1 === e.isRequired);
          try {
            let { object: e } = await (0, B.pY)({
              model: n,
              schema: l,
              prompt:
                "".concat(a, "\n\nYou should generate a JSON object") +
                (s
                  ? " and provide empty values if the information is not there or if you are unsure."
                  : "."),
            });
            Object.entries(e).forEach((e) => {
              let [t, n] = e;
              if (null === n) return;
              let a = i.find((e) => e.name === t);
              a && r.set([{ id: a.id, value: n }]);
            });
          } catch (e) {
            o.add(await U({ err: e }));
          }
        },
        eP = (e) => {
          let { variablesToExtract: t, variables: n } = e;
          if (!t || (null == t ? void 0 : t.length) === 0) return;
          let a = {};
          return (
            t.forEach((e) => {
              if (!e) return;
              let t = n.find((t) => t.id === e.variableId);
              if (t) {
                switch (e.type) {
                  case "string":
                    a[t.name] = _.z.string();
                    break;
                  case "number":
                    a[t.name] = _.z.number();
                    break;
                  case "boolean":
                    a[t.name] = _.z.boolean();
                    break;
                  case "enum":
                    if (!e.values || 0 === e.values.length) return;
                    a[t.name] = _.z.enum(e.values);
                }
                !1 === e.isRequired && (a[t.name] = a[t.name].nullish()),
                  (0, o.hj)(e.description) &&
                    (a[t.name] = a[t.name].describe(e.description));
              }
            }),
            _.z.object(a)
          );
        },
        eR = {
          name: "Generate variables",
          auth: eb,
          options: eN({ models: { type: "static", models: eg } }),
          turnableInto: [{ blockId: "openai" }, { blockId: "mistral" }],
          aiGenerate: {
            fetcherId: "anthropicModels",
            getModel: (e) => {
              let { credentials: t, model: n } = e;
              return (0, R.n)({ apiKey: t.apiKey })(n);
            },
          },
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.variablesToExtract)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: (e) => {
              let { credentials: t, options: n, variables: a, logs: r } = e;
              return (null == t ? void 0 : t.apiKey) === void 0
                ? r.add("No API key provided")
                : void 0 === n.model
                ? r.add("No model provided")
                : eA({
                    model: (0, R.n)({ apiKey: t.apiKey })(n.model),
                    prompt: n.prompt,
                    variablesToExtract: n.variablesToExtract,
                    variables: a,
                    logs: r,
                  });
            },
          },
        },
        ej = {
          type: "encryptedCredentials",
          name: "Blink app",
          schema: A.object({
            apiKey: A.string.layout({
              label: "App token",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an app token by following [the official Blink instructions](https://developer.joinblink.com/docs/creating-an-integration).",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        eL = {
          email: "Emails",
          company_name: "Company Names",
          first_name: "First Names",
          second_name: "Second Names",
          display_name: "Display Names",
          initials: "Initials",
          job_title: "Job Titles",
          profile_photo_id: "Profile Photo IDs",
          timezone: "Timezones",
          manager_id: "Manager IDs",
          department_name: "Department Names",
          account_status: "Account Statuses",
          id: "User IDs",
          employee_id: "Employee IDs",
        },
        eU = "https://api.joinblink.com/v2",
        eO = {
          name: "Get Users",
          auth: ej,
          options: A.object({
            filter: A.discriminatedUnion("type", [
              A.object({ type: A.literal("User ID"), userId: A.string }),
              A.object({
                type: A.literal("Employee ID"),
                employeeId: A.string,
              }),
            ])
              .optional()
              .layout({ accordion: "Filter" }),
            responseMapping: A.saveResponseArray(Object.values(eL)).layout({
              accordion: "Save in variables",
            }),
          }),
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.responseMapping)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: async (e) => {
              let { credentials: t, options: n, variables: a, logs: r } = e;
              if ((null == t ? void 0 : t.apiKey) === void 0)
                return r.add("No API key provided");
              if (!n.filter) return r.add("No filter provided");
              try {
                var i;
                let e = await z.Ay.get("".concat(eU, "/user"), {
                    headers: { Authorization: "Bearer ".concat(t.apiKey) },
                    searchParams:
                      "Employee ID" === n.filter.type && n.filter.employeeId
                        ? { employeeId: n.filter.employeeId }
                        : "User ID" === n.filter.type && n.filter.userId
                        ? { userId: n.filter.userId }
                        : void 0,
                  }).json(),
                  r =
                    null == (i = n.responseMapping)
                      ? void 0
                      : i
                          .map((t) => {
                            if (!t.variableId) return;
                            let n = Object.keys(eL).find(
                              (e) => eL[e] === t.item
                            );
                            if (!n) return;
                            let a = e.data.flatMap((e) => e[n]);
                            return {
                              id: t.variableId,
                              value: a.length > 1 ? a : a[0],
                            };
                          })
                          .filter(o.O9);
                if (!r) return;
                a.set(r);
              } catch (e) {
                if (e instanceof M.H)
                  return r.add(
                    await U({ err: e, context: "While searching Blink users" })
                  );
                console.error(e);
              }
            },
          },
        };
      var eV = (function (e) {
        return (
          (e.URL = "url"),
          (e.YOUTUBE = "youtube"),
          (e.VIMEO = "vimeo"),
          (e.TIKTOK = "tiktok"),
          (e.GUMLET = "gumlet"),
          e
        );
      })({});
      let eD = { aspectRatio: "16/9", maxWidth: "100%" },
        eB = { aspectRatio: "9/16", maxWidth: "400px" },
        ez =
          /youtube\.com\/(watch\?v=|shorts\/)([\w-]+)|youtu\.be\/([\w-]+)(\?.+)*/,
        eM = { t: "start" },
        eH = /vimeo\.com\/(\d+)/,
        eK = /tiktok\.com\/@[\w-]+\/video\/(\d+)/,
        eW = /gumlet\.(com|tv)\/watch\/(\w+)/,
        eF = /https:\/\/onedrive.live.com\/embed\?[^"]+/,
        eG = (e) => {
          var t, n, a, r, o, i, l;
          if (ez.test(e)) {
            let a = e.match(ez),
              r =
                null != (t = null == a ? void 0 : a.at(2))
                  ? t
                  : null == a
                  ? void 0
                  : a.at(3),
              o = (null == a ? void 0 : a.at(4))
                ? new URLSearchParams(a.at(4))
                : void 0;
            Object.entries(eM).forEach((e) => {
              let [t, n] = e;
              (null == o ? void 0 : o.has(t)) &&
                (o.set(n, o.get(t)), o.delete(t));
            });
            let i = null != (n = null == a ? void 0 : a.at(0)) ? n : e;
            return r
              ? {
                  type: eV.YOUTUBE,
                  url: i,
                  id: r,
                  queryParamsStr: o ? "?" + o.toString() : void 0,
                  videoSizeSuggestion: e.includes("shorts") ? eB : eD,
                }
              : { type: eV.URL, url: i };
          }
          if (eH.test(e)) {
            let t = e.match(eH),
              n = null == t ? void 0 : t.at(1),
              r = null != (a = null == t ? void 0 : t.at(0)) ? a : e;
            return n
              ? { type: eV.VIMEO, url: r, id: n, videoSizeSuggestion: eD }
              : { type: eV.URL, url: r };
          }
          if (eK.test(e)) {
            let t = e.match(eK),
              n = null == (r = e.match(eK)) ? void 0 : r.at(1),
              a = null != (o = null == t ? void 0 : t.at(0)) ? o : e;
            return n
              ? { type: eV.TIKTOK, url: a, id: n, videoSizeSuggestion: eB }
              : { type: eV.URL, url: a };
          }
          if (eW.test(e)) {
            let t = e.match(eW),
              n = null == t ? void 0 : t.at(2),
              a = null != (i = null == t ? void 0 : t.at(0)) ? i : e;
            return n
              ? { type: eV.GUMLET, url: a, id: n, videoSizeSuggestion: eD }
              : { type: eV.URL, url: a };
          }
          if (eF.test(e)) {
            let t = e.match(eF),
              n = null != (l = null == t ? void 0 : t.at(0)) ? l : e;
            return { type: eV.URL, url: n.replace("/embed", "/download") };
          }
          return { type: eV.URL, url: e };
        },
        eq = {
          "audio/aac": "aac",
          "audio/mp3": "mp3",
          "audio/mp4": "m4a",
          "audio/mpeg": "mp3",
          "audio/ogg": "ogg",
          "audio/wav": "wav",
          "audio/wave": "wav",
          "audio/webm": "weba",
          "image/avif": "avif",
          "image/bmp": "bmp",
          "image/gif": "gif",
          "image/heic": "heic",
          "image/heif": "heif",
          "image/jpeg": "jpeg",
          "image/jpg": "jpg",
          "image/png": "png",
          "image/svg+xml": "svg",
          "image/tiff": "tif",
          "image/webp": "webp",
          "image/wmf": "wmf",
          "video/mp4": "mp4",
          "video/mpeg": "mpeg",
          "video/ogg": "ogv",
          "video/quicktime": "mov",
          "video/webm": "webm",
          "application/pdf": "pdf",
          "application/msword": "doc",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            "docx",
          "application/vnd.ms-excel": "xls",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
            "xlsx",
          "application/vnd.ms-powerpoint": "ppt",
          "application/vnd.openxmlformats-officedocument.presentationml.presentation":
            "pptx",
          "application/zip": "zip",
          "application/x-rar-compressed": "rar",
          "application/x-7z-compressed": "7z",
          "application/json": "json",
          "application/xml": "xml",
          "application/javascript": "js",
          "application/x-tar": "tar",
          "application/gzip": "gz",
          "application/vnd.android.package-archive": "apk",
          "application/x-executable": "exe",
          "application/vnd.apple.installer+xml": "mpkg",
          "application/rtf": "rtf",
          "application/x-sh": "sh",
          "application/x-font-ttf": "ttf",
          "application/vnd.oasis.opendocument.text": "odt",
          "application/vnd.oasis.opendocument.spreadsheet": "ods",
          "application/vnd.oasis.opendocument.presentation": "odp",
        },
        eX = A.discriminatedUnion("type", [
          A.object({
            type: A.literal("Header"),
            title: A.string,
            iconUrl: A.string.layout({
              label: "Icon URL",
              placeholder: "https://example.com/icon.png",
            }),
          }),
          A.object({
            type: A.literal("Text"),
            value: A.string.layout({ inputType: "textarea" }),
          }),
          A.object({
            type: A.literal("Labelled Text"),
            label: A.string.layout({ label: "Label" }),
            value: A.string.layout({ label: "Value", inputType: "textarea" }),
            iconUrl: A.string.layout({
              label: "Icon URL",
              placeholder: "https://example.com/icon.png",
            }),
          }),
          A.object({
            type: A.literal("Image"),
            imageUrl: A.string.layout({
              placeholder: "https://example.com/image.jpg",
            }),
            fitImage: A.boolean.layout({ label: "Fit Image" }),
            width: A.number.layout({ label: "Width (px)", direction: "row" }),
            height: A.number.layout({ label: "Height (px)", direction: "row" }),
          }),
          A.object({
            type: A.literal("Image gallery"),
            imageUrls: A.array(A.string).layout({
              label: "URLs",
              itemLabel: "Image URL",
            }),
          }),
          A.object({
            type: A.literal("YouTube"),
            link: A.string.layout({
              placeholder: "i.e. https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            }),
          }),
          A.object({
            type: A.literal("Link"),
            url: A.string.layout({ placeholder: "https://example.com" }),
            title: A.string.layout({ label: "Title" }),
            description: A.string.layout({ label: "Description" }),
            imageUrl: A.string.layout({ label: "Image URL" }),
            imagePlacement: A.enum(["left", "right", "top"]).layout({
              label: "Image Placement",
              defaultValue: "left",
            }),
          }),
          A.object({
            type: A.literal("Buttons"),
            buttons: A.array(
              A.object({
                clientAction: A.discriminatedUnion("type", [
                  A.object({
                    type: A.literal("Open Link"),
                    url: A.string.layout({
                      placeholder: "https://example.com",
                    }),
                  }),
                  A.object({
                    type: A.literal("Open Webview"),
                    url: A.string.layout({
                      placeholder: "https://example.com",
                    }),
                  }),
                ]),
                label: A.string.layout({ label: "Label" }),
                iconUrl: A.string.layout({ label: "Icon URL" }),
              })
            ),
          }),
          A.object({
            type: A.literal("Attachment"),
            url: A.string.layout({ placeholder: "https://example.com" }),
          }),
          A.object({
            type: A.literal("Event"),
            title: A.string.layout({ label: "Title" }),
            description: A.string.layout({
              label: "Description",
              inputType: "textarea",
            }),
            start: A.string.layout({
              label: "Start Date",
              placeholder: "2025-01-01T00:00:00Z",
            }),
            end: A.string.layout({
              label: "End Date",
              placeholder: "2025-01-01T08:00:00Z",
            }),
            allDay: A.boolean.layout({ label: "All‑day Event" }),
          }),
          A.object({
            type: A.literal("Horizontal Bar Chart"),
            total: A.number.layout({ label: "Global Total" }),
            data: A.array(
              A.object({
                name: A.string.layout({ label: "Name" }),
                value: A.number.layout({ label: "Total" }),
                label: A.string.layout({ label: "Total label" }),
              })
            ).layout({ itemLabel: "bar" }),
          }),
        ]),
        eY = {
          name: "Send Feed Event",
          auth: ej,
          options: A.object({
            categoryId: A.string.layout({ label: "Category ID" }),
            ribbonColor: A.string.layout({
              label: "Ribbon Color",
              placeholder: "#FF0000",
              accordion: "Card Content",
            }),
            sections: A.array(eX).layout({
              accordion: "Card Content",
              isOrdered: !0,
            }),
            allowComments: A.boolean.layout({
              label: "Allow Comments",
              accordion: "Options",
            }),
            allowReactions: A.boolean.layout({
              label: "Allow Reactions",
              accordion: "Options",
            }),
            userIds: A.array(A.string).layout({
              label: "User IDs",
              accordion: "Send to",
            }),
            groupIds: A.array(A.string).layout({
              label: "Group IDs",
              accordion: "Send to",
            }),
            pushNotification: A.object({
              title: A.string.layout({
                label: "Title",
                accordion: "Push Notification",
              }),
              text: A.string.layout({
                label: "Text",
                accordion: "Push Notification",
              }),
            }).optional(),
            responseMapping: A.saveResponseArray(["Event ID"])
              .optional()
              .layout({ accordion: "Save in variables" }),
          }),
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.responseMapping)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: async (e) => {
              var t, n, a;
              let { credentials: r, options: i, variables: l, logs: s } = e;
              if (!(null == r ? void 0 : r.apiKey))
                return s.add("No API key provided.");
              if (!i.userIds && !i.groupIds)
                return s.add(
                  "You must supply at least one user ID or group ID."
                );
              if (!i.sections || 0 === i.sections.length)
                return s.add("No card content provided.");
              let d = (
                  await Promise.all(
                    i.sections.map(async (e) => {
                      var t, n, a, r, i, l;
                      switch (e.type) {
                        case "Header":
                          return {
                            type: "header",
                            title: e.title,
                            icon_url: e.iconUrl,
                          };
                        case "Text":
                          return {
                            type: "text",
                            value: e.value,
                            is_markdown: !0,
                          };
                        case "Labelled Text":
                          return {
                            type: "labelled_text",
                            label: e.label,
                            value: e.value,
                            icon_url: e.iconUrl,
                            is_markdown: !0,
                          };
                        case "Image":
                          return {
                            type: "image",
                            image_url: e.imageUrl,
                            fit_image: e.fitImage,
                            width: e.width,
                            height: e.height,
                          };
                        case "Image gallery":
                          return {
                            type: "gallery",
                            data:
                              null == (t = e.imageUrls)
                                ? void 0
                                : t.map((e) => ({
                                    type: "gallery_image",
                                    image_url: e,
                                  })),
                          };
                        case "YouTube":
                          if (!e.link) return;
                          let { id: d } = eG(e.link);
                          if (!d) return s.add("Invalid YouTube URL.");
                          return { type: "youtube", video_id: d };
                        case "Link":
                          return {
                            type: "link",
                            title: e.title,
                            url: e.url,
                            subtitle: e.description,
                            image_url: e.imageUrl,
                            image_placement: e.imagePlacement,
                          };
                        case "Buttons":
                          return {
                            type: "buttons",
                            data:
                              null == (n = e.buttons)
                                ? void 0
                                : n
                                    .map((e) => {
                                      if (!e.clientAction.url) return;
                                      let t = btoa(e.clientAction.url),
                                        n = "";
                                      return (
                                        "Open Link" === e.clientAction.type &&
                                          (n = "blink:link?url=".concat(
                                            t,
                                            "&action=open"
                                          )),
                                        "Open Webview" ===
                                          e.clientAction.type &&
                                          (n = "blink:webview?url=".concat(
                                            t,
                                            "&action=open"
                                          )),
                                        {
                                          label: e.label,
                                          client_action: n,
                                          icon_url: e.iconUrl,
                                        }
                                      );
                                    })
                                    .filter(o.O9),
                          };
                        case "Attachment": {
                          if (!e.url) return;
                          let { headers: t } = await z.Ay.head(e.url),
                            n =
                              eq[null != (r = t.get("content-type")) ? r : ""],
                            o =
                              null !=
                              (i =
                                null == (a = t.get("content-disposition"))
                                  ? void 0
                                  : a.split("filename=")[1])
                                ? i
                                : e.url.split("/").pop(),
                            l = Number(t.get("content-length"));
                          if (!o || !n || !l || isNaN(l))
                            return s.add(
                              "Could not get proper file attachement metadata."
                            );
                          return {
                            type: "attachment",
                            file_name: o,
                            file_ext: n,
                            file_size: l,
                            download_url: e.url,
                            open_url: e.url,
                          };
                        }
                        case "Event":
                          return {
                            type: "event",
                            title: e.title,
                            start: e.start,
                            end: e.end,
                            subtitle: e.description,
                            all_day: e.allDay,
                          };
                        case "Horizontal Bar Chart":
                          return {
                            type: "horizontal_bar_chart",
                            total_raw_value: e.total,
                            data:
                              null == (l = e.data)
                                ? void 0
                                : l.map((e) => ({
                                    name: e.name,
                                    raw_value: e.value,
                                    display_value: e.label,
                                  })),
                          };
                      }
                    })
                  )
                ).filter(o.O9),
                u = {
                  body: { ribbon_color: i.ribbonColor, sections: d },
                  category: i.categoryId,
                  user_ids: i.userIds,
                  group_ids: i.groupIds,
                  notification_title:
                    null == (t = i.pushNotification) ? void 0 : t.title,
                  notification_text:
                    null == (n = i.pushNotification) ? void 0 : n.text,
                  allow_comments: i.allowComments,
                  allow_reactions: i.allowReactions,
                };
              try {
                let { data: e } = await z.Ay.post(
                  "".concat(eU, "/feed/events"),
                  {
                    headers: {
                      Authorization: "Bearer ".concat(r.apiKey),
                      "Content-Type": "application/json",
                    },
                    json: u,
                  }
                ).json();
                null == (a = i.responseMapping) ||
                  a
                    .filter((e) => (0, o.O9)(e.variableId))
                    .forEach((t) =>
                      l.set([{ id: t.variableId, value: e.event_id }])
                    );
              } catch (e) {
                e instanceof M.H
                  ? s.add(
                      await U({
                        err: e,
                        context: "While sending Blink feed event",
                      })
                    )
                  : e instanceof SyntaxError
                  ? s.add("Invalid JSON provided for the body.")
                  : (console.error(e),
                    s.add(
                      "Unexpected error. Check function logs for details."
                    ));
              }
            },
          },
        },
        eJ = "https://app.cal.com",
        e$ = A.object({
          baseUrl: A.string.layout({
            label: "Base origin",
            placeholder: "https://cal.com",
            defaultValue: eJ,
            accordion: "Customize host",
          }),
        }),
        eQ = {
          name: "Book event",
          baseOptions: e$,
          options: A.object({
            link: A.string.layout({
              label: "Event link",
              placeholder: "https://cal.com/...",
            }),
            layout: A.enum(["Month", "Weekly", "Columns"]).layout({
              label: "Layout:",
              defaultValue: "Month",
              direction: "row",
            }),
            name: A.string.layout({
              accordion: "Prefill information",
              label: "Name",
              placeholder: "John Doe",
            }),
            email: A.string.layout({
              accordion: "Prefill information",
              label: "Email",
              placeholder: "johndoe@gmail.com",
            }),
            additionalNotes: A.string.layout({
              accordion: "Prefill information",
              label: "Additional notes",
            }),
            phone: A.string.layout({
              accordion: "Prefill information",
              label: "Attendee Phone Number",
              moreInfoTooltip: "Will be used as meeting location",
              placeholder: "+919999999999",
            }),
            anyPrefilledInformations: A.array(
              A.object({
                questionId: A.string.layout({ label: "Question Identifier" }),
                value: A.string.layout({ label: "Value" }),
              })
            ).layout({ accordion: "Prefill information" }),
            saveBookedDateInVariableId: A.string.layout({
              label: "Save booked date",
              inputType: "variableDropdown",
            }),
          }),
          getSetVariableIds: (e) => {
            let { saveBookedDateInVariableId: t } = e;
            return t ? [t] : [];
          },
          run: {
            web: {
              displayEmbedBubble: {
                parseUrl: (e) => {
                  let { options: t } = e;
                  return t.link;
                },
                waitForEvent: {
                  getSaveVariableId: (e) => {
                    let { saveBookedDateInVariableId: t } = e;
                    return t;
                  },
                  parseFunction: () => ({
                    args: {},
                    content:
                      '{\n                const callback = (e) => {\n                  continueFlow(e.detail.data.date)\n                  Cal("off", {\n                    action: "bookingSuccessful",\n                    callback\n                  })\n                }\n\n                Cal("on", {\n                  action: "bookingSuccessful",\n                  callback\n                })\n              }',
                  }),
                },
                parseInitFunction: (e) => {
                  var t, n, a, r, o, i, l, s;
                  let { options: d } = e;
                  if (!d.link) throw Error("Missing link");
                  let u = null != (a = d.baseUrl) ? a : eJ,
                    c = (null == (t = d.link) ? void 0 : t.startsWith("http"))
                      ? d.link.replace(/http.+:\/\/[^\/]+\//, "")
                      : d.link;
                  return {
                    args: {
                      baseUrl: u,
                      link: null != c ? c : "",
                      name: null != (r = d.name) ? r : null,
                      email: null != (o = d.email) ? o : null,
                      layout: eZ(d.layout),
                      phone: null != (i = d.phone) ? i : null,
                      additionalNotes:
                        null != (l = d.additionalNotes) ? l : null,
                      otherPrefilledInformations:
                        null !=
                        (s =
                          null == (n = d.anyPrefilledInformations)
                            ? void 0
                            : n.reduce(
                                (e, t) => (
                                  t.questionId &&
                                    t.value &&
                                    (e[t.questionId] = t.value),
                                  e
                                ),
                                {}
                              ))
                          ? s
                          : null,
                    },
                    content:
                      '(function (C, A, L) {\n                let p = function (a, ar) {\n                  a.q.push(ar);\n                };\n                let d = C.document;\n                C.Cal =\n                  C.Cal ||\n                  function () {\n                    let cal = C.Cal;\n                    let ar = arguments;\n                    if (!cal.loaded) {\n                      cal.ns = {};\n                      cal.q = cal.q || [];\n                      d.head.appendChild(d.createElement("script")).src = A;\n                      cal.loaded = true;\n                    }\n                    if (ar[0] === L) {\n                      const api = function () {\n                        p(api, arguments);\n                      };\n                      const namespace = ar[1];\n                      api.q = api.q || [];\n                      typeof namespace === "string"\n                        ? (cal.ns[namespace] = api) && p(api, ar)\n                        : p(cal, ar);\n                      return;\n                    }\n                    p(cal, ar);\n                  };\n              })(window, baseUrl + "/embed/embed.js", "init");\n\n              Cal("init", { origin: baseUrl });\n\n              const location = phone ? JSON.stringify({\n                value: "phone",\n                optionValue: phone\n              }) : undefined\n\n              Cal("inline", {\n                elementOrSelector: typebotElement,\n                calLink: link,\n                layout,\n                config: {\n                  name: name ?? undefined,\n                  email: email ?? undefined,\n                  notes: additionalNotes ?? undefined,\n                  location,\n                  ...otherPrefilledInformations,\n                }\n              });\n\n              Cal("ui", {"hideEventTypeDetails":false,layout});',
                  };
                },
              },
            },
          },
        },
        eZ = (e) => {
          switch (e) {
            case "Weekly":
              return "week_view";
            case "Columns":
              return "column_view";
            default:
              return "month_view";
          }
        },
        e0 = {
          type: "encryptedCredentials",
          name: "ChatNode account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              helperText:
                "You can generate an API key [here](https://go.chatnode.ai/typebot).",
              inputType: "password",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        e1 = {
          auth: e0,
          name: "Send Message",
          turnableInto: void 0,
          options: A.object({
            botId: A.string.layout({
              label: "Bot ID",
              placeholder: "68c052c5c3680f63",
              moreInfoTooltip:
                "The bot_id you want to ask question to. You can find it at the end of your ChatBot URl in your dashboard",
            }),
            threadId: A.string.layout({
              label: "Thread ID",
              moreInfoTooltip:
                "Used to remember the conversation with the user. If empty, a new thread is created.",
            }),
            message: A.string.layout({
              label: "Message",
              placeholder: "Hi, what can I do with ChatNode",
              inputType: "textarea",
            }),
            responseMapping: A.saveResponseArray([
              "Message",
              "Thread ID",
            ]).layout({ accordion: "Save response" }),
          }),
          getSetVariableIds: (e) => {
            var t;
            let { responseMapping: n } = e;
            return null !=
              (t = null == n ? void 0 : n.map((e) => e.variableId).filter(o.O9))
              ? t
              : [];
          },
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t },
                options: {
                  botId: n,
                  message: a,
                  responseMapping: r,
                  threadId: i,
                },
                variables: l,
                logs: s,
              } = e;
              try {
                let e = await z.Ay.post(
                  "https://api.public.chatnode.ai/v1/" + n,
                  {
                    headers: { Authorization: "Bearer ".concat(t) },
                    json: {
                      message: a,
                      chat_session_id: (0, o.Im)(i) ? void 0 : i,
                    },
                    timeout: !1,
                  }
                ).json();
                null == r ||
                  r.forEach((t) => {
                    var n;
                    if (!t.variableId) return;
                    let a = null != (n = t.item) ? n : "Message";
                    "Message" === a &&
                      l.set([{ id: t.variableId, value: e.message }]),
                      "Thread ID" === a &&
                        l.set([{ id: t.variableId, value: e.chat_session_id }]);
                  });
              } catch (e) {
                if (e instanceof M.H)
                  return s.add(
                    await U({
                      err: e,
                      context: "While sending message to ChatNode",
                    })
                  );
              }
            },
          },
        };
      var e2 = n(27896);
      let e5 = (e) => {
          var t, n;
          return null !=
            (n =
              null == (t = e.responseMapping)
                ? void 0
                : t.map((e) => e.variableId).filter(o.O9))
            ? n
            : [];
        },
        e3 = {
          content: A.string.layout({
            inputType: "textarea",
            placeholder: "Content",
          }),
        },
        e4 = A.object({ role: A.literal("system") }).extend(e3),
        e9 = A.object({ role: A.literal("user") }).extend(e3),
        e6 = A.object({ role: A.literal("assistant") }).extend(e3),
        e7 = A.object({
          role: A.literal("Dialogue"),
          dialogueVariableId: A.string.layout({
            inputType: "variableDropdown",
            placeholder: "Dialogue variable",
          }),
          startsBy: A.enum(["user", "assistant"]).layout({
            label: "starts by",
            direction: "row",
            defaultValue: "user",
          }),
        }),
        e8 = (e) => {
          let { models: t } = e;
          return A.object({
            model: A.string.layout({
              placeholder: "Select a model",
              label: "Model",
              allowCustomValue: !0,
              helperText: t.helperText,
              autoCompleteItems: "static" === t.type ? t.models : void 0,
              fetcher: "fetcher" === t.type ? t.id : void 0,
            }),
            messages: A.array(
              A.discriminatedUnion("role", [e4, e9, e6, e7])
            ).layout({
              accordion: "Messages",
              itemLabel: "message",
              isOrdered: !0,
            }),
            tools: em,
            temperature: A.number.layout({
              accordion: "Advanced settings",
              label: "Temperature",
              direction: "row",
              defaultValue: 1,
            }),
            responseMapping: A.saveResponseArray([
              "Message content",
              "Total tokens",
              "Prompt tokens",
              "Completion tokens",
            ]).layout({ accordion: "Save response" }),
          });
        },
        te = {
          type: "encryptedCredentials",
          name: "DeepSeek account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an API key [here](https://platform.deepseek.com/api_keys).",
              placeholder: "sk-...",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
            baseUrl: A.string.layout({
              label: "Base URL",
              defaultValue: "https://api.deepseek.com/v1",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        tt = {
          name: "Create chat completion",
          auth: te,
          options: e8({
            models: {
              type: "static",
              models: ["deepseek-chat", "deepseek-reasoner"],
            },
          }),
          getSetVariableIds: e5,
          turnableInto: [
            { blockId: "open-router" },
            { blockId: "together-ai" },
            { blockId: "groq", transform: (e) => ({ ...e, model: void 0 }) },
            {
              blockId: "perplexity",
              transform: (e) => ({ ...e, model: void 0 }),
            },
            {
              blockId: "anthropic",
              transform: (e) => ({
                ...e,
                model: void 0,
                action: "Create Chat Message",
              }),
            },
            { blockId: "openai", transform: (e) => ({ ...e, model: void 0 }) },
            { blockId: "mistral", transform: (e) => ({ ...e, model: void 0 }) },
          ],
          run: {
            server: (e) => {
              var t;
              let {
                credentials: { apiKey: n, baseUrl: a },
                options: r,
                variables: o,
                logs: i,
                sessionStore: l,
              } = e;
              if (!n) return i.add("No API key provided");
              let s = null == (t = r.model) ? void 0 : t.trim();
              return s
                ? r.messages
                  ? es({
                      model: (0, e2.P)({
                        apiKey: n,
                        baseURL: null != a ? a : void 0,
                      })(s),
                      variables: o,
                      messages: r.messages,
                      tools: r.tools,
                      isVisionEnabled: !1,
                      temperature: r.temperature,
                      logs: i,
                      responseMapping: r.responseMapping,
                      sessionStore: l,
                    })
                  : i.add("No messages provided")
                : i.add("No model provided");
            },
            stream: {
              getStreamVariableId: j,
              run: async (e) => {
                var t;
                let {
                  credentials: { apiKey: n, baseUrl: a },
                  options: r,
                  variables: o,
                  sessionStore: i,
                } = e;
                if (!n)
                  return { error: { description: "No API key provided" } };
                let l = null == (t = r.model) ? void 0 : t.trim();
                return l
                  ? r.messages
                    ? ed({
                        model: (0, e2.P)({
                          apiKey: n,
                          baseURL: null != a ? a : void 0,
                        })(l),
                        variables: o,
                        messages: r.messages,
                        isVisionEnabled: !1,
                        responseMapping: r.responseMapping,
                        tools: r.tools,
                        temperature: r.temperature,
                        sessionStore: i,
                      })
                    : { error: { description: "No messages provided" } }
                  : { error: { description: "No model provided" } };
              },
            },
          },
        };
      var tn = n(87765),
        ta = n(20248);
      let tr = (e, t) =>
          (0, ta.isURL)(e, {
            protocols: ["https", "http"],
            require_protocol: !0,
            ...t,
          }),
        to = "https://api.dify.ai",
        ti = {
          type: "encryptedCredentials",
          name: "Dify.AI account",
          schema: A.object({
            apiEndpoint: A.string
              .layout({
                label: "API Endpoint",
                isRequired: !0,
                withVariableButton: !1,
                defaultValue: to,
              })
              .refine((e) => !e || tr(e))
              .transform((e) => (e ? new URL(e).origin : e)),
            apiKey: A.string.layout({
              label: "App API key",
              inputType: "password",
              placeholder: "app-...",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
            knowledgeApiKey: A.string.layout({
              label: "Knowledge API key",
              inputType: "password",
              placeholder: "dataset-...",
              withVariableButton: !1,
            }),
          }),
        },
        tl = A.object({
          conversation_id: A.string
            .layout({
              label: "Conversation ID",
              moreInfoTooltip:
                "Used to remember the conversation with the user. If empty, a new conversation id is created.",
              isHidden: !0,
            })
            .describe("Deprecated, use `conversationVariableId` instead"),
        }),
        ts = {
          auth: ti,
          name: "Create Chat Message",
          options: A.object({
            query: A.string.layout({
              label: "Query",
              placeholder: "User input/question content",
              inputType: "textarea",
              isRequired: !0,
            }),
            conversationVariableId: A.string.layout({
              label: "Conversation ID",
              moreInfoTooltip:
                "Used to remember the conversation with the user. If empty, a new conversation ID is created.",
              inputType: "variableDropdown",
            }),
            user: A.string.layout({
              label: "User",
              moreInfoTooltip:
                "The user identifier, defined by the developer, must ensure uniqueness within the app.",
            }),
            inputs: A.array(
              A.object({
                key: A.string.layout({ label: "Key" }),
                value: A.string.layout({ label: "Value" }),
              })
            ).layout({ accordion: "Inputs" }),
            responseMapping: A.saveResponseArray(
              ["Answer", "Conversation ID", "Total Tokens"],
              { item: { hiddenItems: ["Conversation ID"] } }
            ).layout({ accordion: "Save response" }),
          }).merge(tl),
          getSetVariableIds: (e) => {
            var t;
            let { responseMapping: n } = e;
            return null !=
              (t = null == n ? void 0 : n.map((e) => e.variableId).filter(o.O9))
              ? t
              : [];
          },
          run: {
            stream: {
              getStreamVariableId: (e) => {
                var t;
                let { responseMapping: n } = e;
                return null == n ||
                  null == (t = n.find((e) => !e.item || "Answer" === e.item))
                  ? void 0
                  : t.variableId;
              },
              run: async (e) => {
                let {
                    credentials: { apiEndpoint: t, apiKey: n },
                    options: {
                      conversation_id: a,
                      conversationVariableId: r,
                      query: i,
                      user: l,
                      inputs: s,
                      responseMapping: d,
                    },
                    variables: u,
                  } = e,
                  c = r ? u.get(r) : a;
                try {
                  var p, m;
                  let e =
                    null ==
                    (p = (
                      await (0, z.Ay)(
                        (null != t ? t : to) + "/v1/chat-messages",
                        {
                          method: "POST",
                          headers: {
                            Authorization: "Bearer ".concat(n),
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            inputs:
                              null !=
                              (m =
                                null == s
                                  ? void 0
                                  : s.reduce((e, t) => {
                                      let { key: n, value: a } = t;
                                      return (0, o.Im)(n) || (0, o.Im)(a)
                                        ? e
                                        : { ...e, [n]: a };
                                    }, {}))
                                ? m
                                : {},
                            query: i,
                            response_mode: "streaming",
                            conversation_id: c,
                            user: l,
                            files: [],
                            timeout: !1,
                          }),
                        }
                      )
                    ).body)
                      ? void 0
                      : p.getReader();
                  if (!e)
                    return {
                      httpError: {
                        status: 500,
                        message: "Could not get reader from Dify response",
                      },
                    };
                  return {
                    stream: new ReadableStream({
                      async start(t) {
                        try {
                          await tu(e, {
                            onDone: () => {
                              t.close();
                            },
                            onMessage: (e) => {
                              t.enqueue(
                                new TextEncoder().encode((0, tn.H4)("text", e))
                              );
                            },
                            async onMessageEnd(e) {
                              var t;
                              let { totalTokens: n, conversationId: a } = e;
                              if (
                                (r &&
                                  (0, o.hj)(a) &&
                                  (0, o.Im)(
                                    null == c ? void 0 : c.toString()
                                  ) &&
                                  (await u.set([{ id: r, value: a }])),
                                (null != (t = null == d ? void 0 : d.length)
                                  ? t
                                  : 0) !== 0)
                              )
                                for (let e of null != d ? d : [])
                                  e.variableId &&
                                    ("Conversation ID" === e.item &&
                                      (0, o.hj)(a) &&
                                      (0, o.Im)(
                                        null == c ? void 0 : c.toString()
                                      ) &&
                                      (await u.set([
                                        { id: e.variableId, value: a },
                                      ])),
                                    "Total Tokens" === e.item &&
                                      (await u.set([
                                        { id: e.variableId, value: n },
                                      ])));
                            },
                          });
                        } catch (e) {
                          console.error(e), t.error(e);
                        }
                      },
                    }),
                  };
                } catch (e) {
                  return {
                    error: await U({
                      err: e,
                      context: "While streaming Dify chat message",
                    }),
                  };
                }
              },
            },
            server: async (e) => {
              let {
                  credentials: { apiEndpoint: t, apiKey: n },
                  options: {
                    conversationVariableId: a,
                    conversation_id: r,
                    query: i,
                    user: l,
                    inputs: s,
                    responseMapping: d,
                  },
                  variables: u,
                  logs: c,
                } = e,
                p = a ? u.get(a) : r;
              try {
                var m, b;
                let e =
                  null ==
                  (m = (
                    await (0, z.Ay)(
                      (null != t ? t : to) + "/v1/chat-messages",
                      {
                        method: "POST",
                        headers: {
                          Authorization: "Bearer ".concat(n),
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          inputs:
                            null !=
                            (b =
                              null == s
                                ? void 0
                                : s.reduce((e, t) => {
                                    let { key: n, value: a } = t;
                                    return (0, o.Im)(n) || (0, o.Im)(a)
                                      ? e
                                      : { ...e, [n]: a };
                                  }, {}))
                              ? b
                              : {},
                          query: i,
                          response_mode: "streaming",
                          conversation_id: p,
                          user: l,
                          files: [],
                          timeout: !1,
                        }),
                      }
                    )
                  ).body)
                    ? void 0
                    : m.getReader();
                if (!e)
                  return c.add({
                    status: "error",
                    description: "Failed to read response stream",
                  });
                let {
                  answer: r,
                  conversationId: g,
                  totalTokens: h,
                } = await new Promise(async (t, n) => {
                  let a,
                    r,
                    o = "";
                  try {
                    await tu(e, {
                      onMessage: (e) => {
                        o += e;
                      },
                      onMessageEnd: async (e) => {
                        let { totalTokens: t, conversationId: n } = e;
                        (r = t), (a = n);
                      },
                      onDone: () => {
                        t({ answer: o, conversationId: a, totalTokens: r });
                      },
                    });
                  } catch (e) {
                    n(e);
                  }
                });
                a &&
                  (0, o.hj)(g) &&
                  (0, o.Im)(null == p ? void 0 : p.toString()) &&
                  u.set([{ id: a, value: g }]),
                  null == d ||
                    d.forEach((e) => {
                      var t;
                      if (!e.variableId) return;
                      let n = null != (t = e.item) ? t : "Answer";
                      "Answer" === n &&
                        u.set([{ id: e.variableId, value: td(r) }]),
                        "Conversation ID" === n &&
                          (0, o.hj)(g) &&
                          (0, o.Im)(null == p ? void 0 : p.toString()) &&
                          u.set([{ id: e.variableId, value: g }]),
                        "Total Tokens" === n &&
                          u.set([{ id: e.variableId, value: h }]);
                    });
              } catch (e) {
                return c.add(
                  await U({
                    err: e,
                    context: "While creating Dify chat message",
                  })
                );
              }
            },
          },
        },
        td = (e) => {
          let t = RegExp("(?<![\\([])https?:\\/\\/\\S+", "g");
          return e.replace(t, (e) => "[".concat(e, "](").concat(e, ")"));
        },
        tu = async (e, t) => {
          let n = "";
          for (;;) {
            let { value: o, done: i } = await e.read();
            if (i) return void t.onDone();
            for (let e of new TextDecoder()
              .decode(o)
              .toString()
              .split("\n")
              .filter((e) => e.length > 0 && "\n" !== e)) {
              if ((n += e).startsWith("event: ")) {
                n = "";
                continue;
              }
              if (!n.startsWith("data: ") || !n.endsWith("}")) continue;
              let o = JSON.parse(n.slice(6));
              if (
                ((n = ""),
                ("message" === o.event || "agent_message" === o.event) &&
                  t.onMessage(o.answer),
                "message_end" === o.event)
              ) {
                var a, r;
                await (null == (r = t.onMessageEnd)
                  ? void 0
                  : r.call(t, {
                      totalTokens:
                        null == (a = o.metadata.usage)
                          ? void 0
                          : a.total_tokens,
                      conversationId: o.conversation_id,
                    }));
              }
            }
          }
        },
        tc = {
          name: "Query Knowledge Base",
          auth: ti,
          fetchers: [
            {
              id: "fetchKnowledgeBases",
              dependencies: [],
              fetch: async (e) => {
                let {
                  credentials: { knowledgeApiKey: t, apiEndpoint: n } = {},
                } = e;
                return t
                  ? {
                      data: (
                        await z.Ay.get(
                          "".concat(null != n ? n : to, "/v1/datasets"),
                          {
                            headers: { Authorization: "Bearer ".concat(t) },
                            searchParams: { limit: 100 },
                          }
                        ).json()
                      ).data
                        .sort(
                          (e, t) =>
                            new Date(t.created_at).getTime() -
                            new Date(e.created_at).getTime()
                        )
                        .map((e) => {
                          let { id: t, name: n } = e;
                          return { label: n, value: t };
                        }),
                    }
                  : { data: [] };
              },
            },
          ],
          options: A.object({
            datasetId: A.string.layout({
              label: "Knowledge Base ID",
              isRequired: !0,
              fetcher: "fetchKnowledgeBases",
            }),
            query: A.string.layout({
              label: "Query",
              isRequired: !0,
              inputType: "textarea",
            }),
            responseMapping: A.saveResponseArray(["Retrieved chunks"]).layout({
              accordion: "Save response",
            }),
          }),
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.responseMapping)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: async (e) => {
              let {
                credentials: { knowledgeApiKey: t, apiEndpoint: n },
                options: a,
                variables: r,
                logs: o,
              } = e;
              if (!a.datasetId) return o.add("Knowledge Base ID is empty");
              if (!a.query) return o.add("Query is empty");
              if (!a.responseMapping) return o.add("Missing result variable");
              try {
                var i;
                let e = await z.Ay.post(
                  ""
                    .concat(null != n ? n : to, "/v1/datasets/")
                    .concat(a.datasetId, "/retrieve"),
                  {
                    headers: { Authorization: "Bearer ".concat(t) },
                    json: { query: a.query },
                  }
                ).json();
                null == (i = a.responseMapping) ||
                  i.forEach((t) => {
                    t.variableId &&
                      (!t.item || "Retrieved chunks" === t.item) &&
                      r.set([
                        {
                          id: t.variableId,
                          value: e.records.map((e) => e.segment.content),
                        },
                      ]);
                  });
              } catch (e) {
                return o.add(
                  await U({
                    err: e,
                    context: "While querying Dify knowledge base",
                  })
                );
              }
            },
          },
        };
      var tp = n(26739),
        tm = n(57608);
      let tb = () => {
          if (!g._.S3_ENDPOINT || !g._.S3_ACCESS_KEY || !g._.S3_SECRET_KEY)
            throw Error(
              "S3 not properly configured. Missing one of those variables: S3_ENDPOINT, S3_ACCESS_KEY, S3_SECRET_KEY"
            );
          return new tm.Client({
            endPoint: g._.S3_ENDPOINT,
            port: g._.S3_PORT,
            useSSL: g._.S3_SSL,
            accessKey: g._.S3_ACCESS_KEY,
            secretKey: g._.S3_SECRET_KEY,
            region: g._.S3_REGION,
          });
        },
        tg = () =>
          g._.S3_PUBLIC_CUSTOM_DOMAIN
            ? g._.S3_PUBLIC_CUSTOM_DOMAIN
            : "http"
                .concat(g._.S3_SSL ? "s" : "", "://")
                .concat(g._.S3_ENDPOINT)
                .concat(g._.S3_PORT ? ":".concat(g._.S3_PORT) : "", "/")
                .concat(g._.S3_BUCKET),
        th = async (e) => {
          let { key: t, file: n, mimeType: a } = e,
            r = tb();
          return (
            await r.putObject(g._.S3_BUCKET, "public/" + t, n, {
              "Content-Type": a,
              "Cache-Control": "public, max-age=86400",
            }),
            "".concat(tg(), "/public/").concat(t)
          );
        },
        ty = {
          type: "encryptedCredentials",
          name: "ElevenLabs account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an API key in your ElevenLabs dashboard in the Profile menu.",
              isDebounceDisabled: !0,
              withVariableButton: !1,
            }),
          }),
        },
        tf = "https://api.elevenlabs.io";
      var tv = n(51642).Buffer;
      let tw = {
        name: "Convert text to speech",
        auth: ty,
        options: A.object({
          text: A.string.layout({
            label: "Text",
            inputType: "textarea",
            placeholder: "Enter the text to convert to speech",
          }),
          voiceId: A.string.layout({
            fetcher: "fetchVoices",
            label: "Voice",
            placeholder: "Select a voice",
          }),
          modelId: A.string.layout({
            fetcher: "fetchModels",
            label: "Model",
            placeholder: "Select a model",
          }),
          saveUrlInVariableId: A.string.layout({
            label: "Save audio URL in variable",
            placeholder: "Select a variable",
            inputType: "variableDropdown",
          }),
        }),
        getSetVariableIds: (e) => {
          let { saveUrlInVariableId: t } = e;
          return t ? [t] : [];
        },
        fetchers: [
          {
            id: "fetchVoices",
            fetch: async (e) => {
              let { credentials: t } = e;
              if (!(null == t ? void 0 : t.apiKey)) return { data: [] };
              try {
                return {
                  data: (
                    await z.Ay.get(tf + "/v1/voices", {
                      headers: { "xi-api-key": t.apiKey },
                    }).json()
                  ).voices.map((e) => ({ value: e.voice_id, label: e.name })),
                };
              } catch (e) {
                return { error: await U({ err: e }) };
              }
            },
            dependencies: [],
          },
          {
            id: "fetchModels",
            fetch: async (e) => {
              let { credentials: t } = e;
              if (!(null == t ? void 0 : t.apiKey)) return { data: [] };
              try {
                return {
                  data: (
                    await z.Ay.get(tf + "/v1/models", {
                      headers: { "xi-api-key": t.apiKey },
                    }).json()
                  )
                    .filter((e) => e.can_do_text_to_speech)
                    .map((e) => ({ value: e.model_id, label: e.name })),
                };
              } catch (e) {
                return { error: await U({ err: e }) };
              }
            },
            dependencies: [],
          },
        ],
        run: {
          server: async (e) => {
            let { credentials: t, options: n, variables: a, logs: r } = e;
            if (!n.voiceId) return r.add("Voice ID is missing");
            if (!n.text) return r.add("Text is missing");
            if (!n.saveUrlInVariableId)
              return r.add("Save variable is missing");
            try {
              let e = await z.Ay.post(tf + "/v1/text-to-speech/" + n.voiceId, {
                  headers: { Accept: "audio/mpeg", "xi-api-key": t.apiKey },
                  json: { model_id: n.modelId, text: n.text },
                  timeout: !1,
                }).arrayBuffer(),
                r = await th({
                  file: tv.from(e),
                  key: "tmp/elevenlabs/audio/".concat(
                    (0, tp.sX)() + (0, tp.sX)(),
                    ".mp3"
                  ),
                  mimeType: "audio/mpeg",
                });
              a.set([{ id: n.saveUrlInVariableId, value: r }]);
            } catch (e) {
              return r.add(
                await U({
                  err: e,
                  context: "While converting text to ElevenLabs speech",
                })
              );
            }
          },
        },
      };
      var tI = n(50183);
      let tx = "https://api.groq.com/openai/v1",
        tE = {
          type: "encryptedCredentials",
          name: "Groq account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an API key [here](https://console.groq.com/keys).",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
            baseUrl: A.string.layout({
              label: "Base URL",
              defaultValue: tx,
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        t_ = {
          name: "Create chat completion",
          auth: tE,
          options: e8({ models: { type: "fetcher", id: "fetchModels" } }),
          fetchers: [
            {
              id: "fetchModels",
              fetch: async (e) => {
                let { credentials: t } = e;
                if (!(null == t ? void 0 : t.apiKey)) return { data: [] };
                try {
                  return {
                    data: (
                      await z.Ay.get("".concat(tx, "/models"), {
                        headers: { authorization: "Bearer ".concat(t.apiKey) },
                      }).json()
                    ).data
                      .sort((e, t) => t.created - e.created)
                      .map((e) => e.id),
                  };
                } catch (e) {
                  return { error: await U({ err: e }) };
                }
              },
              dependencies: [],
            },
          ],
          turnableInto: [
            { blockId: "openai" },
            { blockId: "open-router" },
            { blockId: "mistral" },
            {
              blockId: "anthropic",
              transform: (e) => ({ ...e, action: "Create Chat Message" }),
            },
            { blockId: "perplexity" },
            { blockId: "together-ai" },
            { blockId: "deepseek" },
          ],
          getSetVariableIds: e5,
          run: {
            server: (e) => {
              var t;
              let {
                credentials: { apiKey: n },
                options: a,
                variables: r,
                logs: o,
                sessionStore: i,
              } = e;
              if (!n) return o.add("No API key provided");
              let l = null == (t = a.model) ? void 0 : t.trim();
              return l
                ? a.messages
                  ? es({
                      model: (0, tI.c)({ apiKey: n })(l),
                      variables: r,
                      messages: a.messages,
                      tools: a.tools,
                      isVisionEnabled: !1,
                      temperature: a.temperature,
                      responseMapping: a.responseMapping,
                      logs: o,
                      sessionStore: i,
                    })
                  : o.add("No messages provided")
                : o.add("No model provided");
            },
            stream: {
              getStreamVariableId: j,
              run: async (e) => {
                var t;
                let {
                  credentials: { apiKey: n },
                  options: a,
                  variables: r,
                  sessionStore: o,
                } = e;
                if (!n)
                  return { error: { description: "No API key provided" } };
                let i = null == (t = a.model) ? void 0 : t.trim();
                return i
                  ? a.messages
                    ? ed({
                        model: (0, tI.c)({ apiKey: n })(i),
                        variables: r,
                        messages: a.messages,
                        isVisionEnabled: !1,
                        tools: a.tools,
                        temperature: a.temperature,
                        responseMapping: a.responseMapping,
                        sessionStore: o,
                      })
                    : { error: { description: "No messages provided" } }
                  : { error: { description: "No model provided" } };
              },
            },
          },
        };
      var tT = n(44288);
      let tC = {
          type: "encryptedCredentials",
          name: "Mistral account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              withVariableButton: !1,
              helperText:
                "You can generate an API key [here](https://console.mistral.ai/api-keys).",
              isDebounceDisabled: !0,
            }),
          }),
        },
        tS = [
          "mistral-large-latest",
          "pixtral-large-latest",
          "mistral-small-latest",
          "mistral-saba-latest",
          "ministral-3b-latest",
          "ministral-8b-latest",
        ],
        tk = {
          name: "Create chat completion",
          auth: tC,
          options: e8({ models: { type: "static", models: tS } }),
          turnableInto: [
            { blockId: "openai", transform: (e) => ({ ...e, model: void 0 }) },
            { blockId: "groq", transform: (e) => ({ ...e, model: void 0 }) },
            { blockId: "together-ai" },
            { blockId: "open-router" },
            {
              blockId: "anthropic",
              transform: (e) => ({
                ...e,
                model: void 0,
                action: "Create Chat Message",
              }),
            },
            {
              blockId: "perplexity",
              transform: (e) => ({ ...e, model: void 0 }),
            },
            {
              blockId: "deepseek",
              transform: (e) => ({ ...e, model: void 0 }),
            },
          ],
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.responseMapping)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: (e) => {
              var t;
              let {
                credentials: { apiKey: n },
                options: a,
                variables: r,
                logs: o,
                sessionStore: i,
              } = e;
              if (!n) return o.add("No API key provided");
              let l = null == (t = a.model) ? void 0 : t.trim();
              return l
                ? a.messages
                  ? es({
                      model: (0, tT.T)({ apiKey: n }).chat(l),
                      variables: r,
                      messages: a.messages,
                      tools: a.tools,
                      isVisionEnabled: !1,
                      temperature: a.temperature,
                      responseMapping: a.responseMapping,
                      logs: o,
                      sessionStore: i,
                    })
                  : o.add("No messages provided")
                : o.add("No model provided");
            },
            stream: {
              getStreamVariableId: j,
              run: async (e) => {
                var t;
                let {
                  credentials: { apiKey: n },
                  options: a,
                  variables: r,
                  sessionStore: o,
                } = e;
                if (!n)
                  return { error: { description: "No API key provided" } };
                let i = null == (t = a.model) ? void 0 : t.trim();
                return i
                  ? a.messages
                    ? ed({
                        model: (0, tT.T)({ apiKey: n }).chat(i),
                        variables: r,
                        messages: a.messages,
                        isVisionEnabled: !1,
                        tools: a.tools,
                        temperature: a.temperature,
                        responseMapping: a.responseMapping,
                        sessionStore: o,
                      })
                    : { error: { description: "No messages provided" } }
                  : { error: { description: "No model provided" } };
              },
            },
          },
        },
        tN = {
          name: "Generate variables",
          auth: tC,
          options: eN({ models: { type: "static", models: tS } }),
          turnableInto: [
            { blockId: "openai" },
            {
              blockId: "anthropic",
              transform: (e) => ({ ...e, model: void 0 }),
            },
          ],
          aiGenerate: {
            fetcherId: "fetchModels",
            getModel: (e) => {
              let { credentials: t, model: n } = e;
              return (0, tT.T)({ apiKey: t.apiKey })(n);
            },
          },
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.variablesToExtract)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: (e) => {
              let { credentials: t, options: n, variables: a, logs: r } = e;
              return (null == t ? void 0 : t.apiKey) === void 0
                ? r.add("No API key provided")
                : void 0 === n.model
                ? r.add("No model provided")
                : eA({
                    model: (0, tT.T)({ apiKey: t.apiKey })(n.model),
                    variablesToExtract: n.variablesToExtract,
                    prompt: n.prompt,
                    variables: a,
                    logs: r,
                  });
            },
          },
        },
        tA = "https://app.nocodb.com",
        tP = [
          "Equal to",
          "Not equal",
          "Contains",
          "Greater than",
          "Less than",
          "Is set",
          "Is empty",
          "Starts with",
          "Ends with",
        ],
        tR = {
          type: "encryptedCredentials",
          name: "NocoDB account",
          schema: A.object({
            baseUrl: A.string
              .layout({
                label: "Base URL",
                isRequired: !0,
                helperText: "Change it only if you are self-hosting NocoDB.",
                withVariableButton: !1,
                defaultValue: tA,
              })
              .transform((e) => (null == e ? void 0 : e.replace(/\/$/, ""))),
            apiKey: A.string.layout({
              label: "API Token",
              isRequired: !0,
              helperText:
                "You can generate an API token [here](https://app.nocodb.com/#/account/tokens)",
              inputType: "password",
              withVariableButton: !1,
            }),
          }),
        },
        tj = async (e) => {
          let {
            baseUrl: t,
            apiKey: n,
            tableId: a,
            updates: r,
            recordIdsToUpdate: i,
          } = e;
          for (let e of (
            await z.Ay.get(
              "".concat(null != t ? t : tA, "/api/v2/meta/tables/").concat(a),
              { headers: { "xc-token": n } }
            ).json()
          ).columns
            .filter((e) => "LinkToAnotherRecord" === e.uidt)
            .map((e) => {
              var t;
              return {
                id: e.id,
                value: tL(
                  null == (t = r.find((t) => t.fieldName === e.title))
                    ? void 0
                    : t.value
                ),
              };
            })
            .filter((e) => (0, o.O9)(e.value)))
            for (let r of i)
              console.log(e),
                await z.Ay.post(
                  ""
                    .concat(null != t ? t : tA, "/api/v2/tables/")
                    .concat(a, "/links/")
                    .concat(e.id, "/records/")
                    .concat(r),
                  {
                    headers: { "xc-token": n },
                    json: e.value.map((e) => ({ Id: e })),
                  }
                ).json();
        },
        tL = (e) => {
          if (e) {
            if (e.startsWith("[") && e.endsWith("]"))
              try {
                return JSON.parse(e);
              } catch (t) {
                console.error("Failed to parse JSON value:", e, t);
              }
            return [e];
          }
        },
        tU = (e) => {
          let t = {};
          return (
            e.forEach((e) => {
              let { key: n, value: a } = e;
              n && a && (t[n] = a);
            }),
            t
          );
        },
        tO = {
          auth: tR,
          name: "Create Record",
          options: A.object({
            tableId: A.string.layout({
              label: "Table ID",
              isRequired: !0,
              helperText: "Identifier of the table to create records in.",
            }),
            fields: A.array(
              A.object({
                key: A.string.layout({ label: "Field", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({ itemLabel: "field" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { baseUrl: t, apiKey: n },
                options: { tableId: a, fields: r },
                logs: o,
              } = e;
              try {
                if (!r || 0 === r.length) return;
                if (!n) return o.add("API key is required");
                if (!a) return o.add("Table ID is required");
                let e = await z.Ay.post(
                  ""
                    .concat(null != t ? t : tA, "/api/v2/tables/")
                    .concat(a, "/records"),
                  { headers: { "xc-token": n }, json: tU(r) }
                ).json();
                await tj({
                  baseUrl: t,
                  apiKey: n,
                  tableId: a,
                  updates: r,
                  recordIdsToUpdate: [e.Id],
                });
              } catch (e) {
                o.add(
                  await U({ err: e, context: "While creating NocoDB record" })
                );
              }
            },
          },
        },
        tV = (e) => {
          if (!e || !e.comparisons || 0 === e.comparisons.length) return;
          let t = e.comparisons
            .map((e) => {
              switch (e.operator) {
                case "Not equal":
                  return "(".concat(e.input, ",ne,").concat(e.value, ")");
                case "Contains":
                  return "(".concat(e.input, ",like,%").concat(e.value, "%)");
                case "Greater than":
                  return "(".concat(e.input, ",gt,").concat(e.value, ")");
                case "Less than":
                  return "(".concat(e.input, ",lt,").concat(e.value, ")");
                case "Is set":
                  return "(".concat(e.input, ",isnot,null)");
                case "Is empty":
                  return "(".concat(e.input, ",is,null)");
                case "Starts with":
                  return "(".concat(e.input, ",like,").concat(e.value, "%)");
                case "Ends with":
                  return "(".concat(e.input, ",like,%").concat(e.value, ")");
                default:
                  return "(".concat(e.input, ",eq,").concat(e.value, ")");
              }
            })
            .filter(Boolean)
            .join("~" + ("OR" === e.joiner ? "or" : "and"));
          if (!(0, o.Im)(t)) return t;
        },
        tD = (e) =>
          Object.entries(e).reduce((e, t) => {
            let [n, a] = t;
            return null == a ? e : { ...e, [n]: a.toString() };
          }, {}),
        tB = {
          auth: tR,
          name: "Search Records",
          options: A.object({
            tableId: A.string.layout({
              label: "Table ID",
              moreInfoTooltip:
                "Can be found by clicking on the 3 dots next to the table name.",
              isRequired: !0,
            }),
            viewId: A.string.layout({
              label: "View ID",
              moreInfoTooltip:
                "Can be found by clicking on the 3 dots next to the view name.",
            }),
            returnType: A.enum(["All", "First", "Last", "Random"]).layout({
              accordion: "Filter",
              defaultValue: "All",
            }),
            filter: A.filter({
              operators: tP,
              isJoinerHidden: (e) => {
                let { filter: t } = e;
                return (
                  !(null == t ? void 0 : t.comparisons) ||
                  t.comparisons.length < 2
                );
              },
            }).layout({ accordion: "Filter" }),
            responseMapping: A.array(
              A.object({
                fieldName: A.string.layout({ label: "Enter a field name" }),
                variableId: A.string.layout({ inputType: "variableDropdown" }),
              })
            ).layout({ accordion: "Response Mapping" }),
          }),
          getSetVariableIds: (e) => {
            var t;
            let { responseMapping: n } = e;
            return null !=
              (t = null == n ? void 0 : n.map((e) => e.variableId).filter(o.O9))
              ? t
              : [];
          },
          run: {
            server: async (e) => {
              let {
                credentials: { baseUrl: t, apiKey: n },
                options: {
                  tableId: a,
                  responseMapping: r,
                  filter: i,
                  returnType: l,
                  viewId: s,
                },
                variables: d,
                logs: u,
              } = e;
              if (!n) return u.add("API key is required");
              try {
                let e,
                  c = await z.Ay.get(
                    ""
                      .concat(null != t ? t : tA, "/api/v2/tables/")
                      .concat(a, "/records"),
                    {
                      headers: { "xc-token": n },
                      searchParams: tD({ where: tV(i), viewId: s, limit: 1e3 }),
                    }
                  ).json();
                if (l && "All" !== l) {
                  let t = c.pageInfo.totalRows;
                  "First" === l
                    ? (e = 0)
                    : "Last" === l
                    ? (e = t - 1)
                    : "Random" === l && (e = Math.floor(Math.random() * t));
                }
                let p = (0, o.O9)(e) && c.list[e] ? [c.list[e]] : c.list;
                if (0 === p.length)
                  return u.add({
                    status: "info",
                    description: "Couldn't find any rows matching the filter",
                    details: JSON.stringify(i, null, 2),
                  });
                null == r ||
                  r.forEach((e) => {
                    if (!e.fieldName || !e.variableId) return;
                    if ((0, o.pN)(p[0][e.fieldName]))
                      return void u.add(
                        "Field ".concat(
                          e.fieldName,
                          " does not exist in the table"
                        )
                      );
                    let t = p.map((t) => t[e.fieldName]);
                    d.set([
                      { id: e.variableId, value: 1 === t.length ? t[0] : t },
                    ]);
                  });
              } catch (e) {
                u.add(
                  await U({ err: e, context: "While searching NocoDB records" })
                );
              }
            },
          },
        },
        tz = (e, t) =>
          e.map((e) => {
            let n = { Id: e };
            return (
              t.forEach((e) => {
                let { fieldName: t, value: a } = e;
                t && (n[t] = null != a ? a : null);
              }),
              n
            );
          }),
        tM = {
          auth: tR,
          name: "Update Existing Record",
          options: A.object({
            tableId: A.string.layout({
              label: "Table ID",
              isRequired: !0,
              moreInfoTooltip:
                "Can be found by clicking on the 3 dots next to the table name.",
            }),
            viewId: A.string.layout({
              label: "View ID",
              moreInfoTooltip:
                "Can be found by clicking on the 3 dots next to the view name.",
            }),
            filter: A.filter({
              operators: tP,
              isJoinerHidden: (e) => {
                let { filter: t } = e;
                return (
                  !(null == t ? void 0 : t.comparisons) ||
                  t.comparisons.length < 2
                );
              },
            }).layout({ accordion: "Select Records" }),
            updates: A.array(
              A.object({
                fieldName: A.string.layout({ label: "Enter a field name" }),
                value: A.string.layout({ placeholder: "Enter a value" }),
              })
            ).layout({ accordion: "Updates" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { baseUrl: t, apiKey: n },
                options: { tableId: a, filter: r, viewId: o, updates: i },
                logs: l,
              } = e;
              if (!n) return l.add("API key is required");
              if (!i) return l.add("At least one update is required");
              if (!a) return l.add("Table ID is required");
              if (
                !(null == r ? void 0 : r.comparisons) ||
                0 === r.comparisons.length
              )
                return l.add("At least one filter is required");
              try {
                let e = await z.Ay.get(
                  ""
                    .concat(null != t ? t : tA, "/api/v2/tables/")
                    .concat(a, "/records"),
                  {
                    headers: { "xc-token": n },
                    searchParams: tD({ where: tV(r), viewId: o, limit: 1e3 }),
                  }
                ).json();
                await z.Ay.patch(
                  ""
                    .concat(null != t ? t : tA, "/api/v2/tables/")
                    .concat(a, "/records"),
                  {
                    headers: { "xc-token": n },
                    json: tz(
                      e.list.map((e) => e.Id),
                      i
                    ),
                  }
                ),
                  await tj({
                    baseUrl: t,
                    apiKey: n,
                    tableId: a,
                    updates: i,
                    recordIdsToUpdate: e.list.map((e) => e.Id),
                  });
              } catch (e) {
                l.add(
                  await U({
                    err: e,
                    context: "While updating NocoDB existing record",
                  })
                );
              }
            },
          },
        },
        tH = {
          id: "nocodb",
          name: "NocoDB",
          tags: ["database"],
          LightLogo: (e) =>
            (0, r.jsxs)("svg", {
              viewBox: "0 0 32 32",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              ...e,
              children: [
                (0, r.jsx)("rect", {
                  width: "32",
                  height: "32",
                  rx: "4",
                  fill: "url(#paint0_linear_1871_109536)",
                }),
                (0, r.jsx)("path", {
                  d: "M8.3335 15.1562L12.0047 18.8297V24.6454H8.3335V15.1562ZM23.7533 7.34649V24.0464C23.7533 24.3894 23.4738 24.6665 23.1309 24.6665C22.9665 24.6665 22.8092 24.6031 22.6917 24.4857L8.3335 11.5367V7.8726C8.3335 7.52968 8.61066 7.25253 8.95359 7.25253H8.98648C9.1509 7.25253 9.3106 7.31831 9.42569 7.4334L20.0798 16.6783V7.34649H23.7533Z",
                  fill: "white",
                }),
                (0, r.jsx)("defs", {
                  children: (0, r.jsxs)("linearGradient", {
                    id: "paint0_linear_1871_109536",
                    x1: "15.9976",
                    y1: "42.7731",
                    x2: "15.9976",
                    y2: "-8.9707",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, r.jsx)("stop", { stopColor: "#4351E8" }),
                      (0, r.jsx)("stop", { offset: "1", stopColor: "#2A1EA5" }),
                    ],
                  }),
                }),
              ],
            }),
          auth: tR,
          actions: [tB, tO, tM],
          docsUrl: "https://docs.typebot.io/editor/blocks/integrations/nocodb",
          onboarding: {
            youtubeId: "ViKETDQ8Sfg",
            deployedAt: new Date("2023-06-20"),
          },
        };
      var tK = n(95901);
      let tW = {
          type: "encryptedCredentials",
          name: "OpenRouter account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an API key [here](https://openrouter.ai/keys).",
              isDebounceDisabled: !0,
            }),
          }),
        },
        tF = { baseUrl: "https://openrouter.ai/api/v1" },
        tG = {
          name: "Create chat completion",
          auth: tW,
          turnableInto: [
            { blockId: "openai" },
            { blockId: "groq" },
            { blockId: "together-ai" },
            { blockId: "mistral" },
            { blockId: "perplexity" },
            {
              blockId: "anthropic",
              transform: (e) => ({ ...e, action: "Create Chat Message" }),
            },
            {
              blockId: "deepseek",
              transform: (e) => ({ ...e, model: void 0 }),
            },
          ],
          options: e8({ models: { type: "fetcher", id: "fetchModels" } }),
          getSetVariableIds: e5,
          fetchers: [
            {
              id: "fetchModels",
              dependencies: [],
              fetch: async () => {
                try {
                  return {
                    data: (
                      await z.Ay.get(tF.baseUrl + "/models").json()
                    ).data.map((e) => ({ value: e.id, label: e.name })),
                  };
                } catch (e) {
                  return {
                    error: await U({ err: e, context: "Fetching models" }),
                  };
                }
              },
            },
          ],
          run: {
            server: (e) => {
              var t;
              let {
                credentials: { apiKey: n },
                options: a,
                variables: r,
                logs: o,
                sessionStore: i,
              } = e;
              if (!n) return o.add("No API key provided");
              let l = null == (t = a.model) ? void 0 : t.trim();
              return l
                ? a.messages
                  ? es({
                      model: (0, tK.ER)({ apiKey: n }).chat(l),
                      variables: r,
                      messages: a.messages,
                      tools: a.tools,
                      isVisionEnabled: !1,
                      temperature: a.temperature,
                      responseMapping: a.responseMapping,
                      logs: o,
                      sessionStore: i,
                    })
                  : o.add("No messages provided")
                : o.add("No model provided");
            },
            stream: {
              getStreamVariableId: j,
              run: async (e) => {
                var t;
                let {
                  credentials: { apiKey: n },
                  options: a,
                  variables: r,
                  sessionStore: o,
                } = e;
                if (!n)
                  return { error: { description: "No API key provided" } };
                let i = null == (t = a.model) ? void 0 : t.trim();
                return i
                  ? a.messages
                    ? ed({
                        model: (0, tK.ER)({ apiKey: n }).chat(i),
                        variables: r,
                        messages: a.messages,
                        tools: a.tools,
                        isVisionEnabled: !1,
                        temperature: a.temperature,
                        responseMapping: a.responseMapping,
                        sessionStore: o,
                      })
                    : { error: { description: "No messages provided" } }
                  : { error: { description: "No model provided" } };
              },
            },
          },
        };
      var tq = n(52175);
      let tX = {
          type: "encryptedCredentials",
          name: "OpenAI account",
          schema: A.object({
            apiKey: A.string.layout({
              isRequired: !0,
              label: "API key",
              placeholder: "sk-...",
              inputType: "password",
              helperText:
                "You can generate an API key [here](https://platform.openai.com/account/api-keys).",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
            baseUrl: A.string.layout({
              label: "Base URL",
              defaultValue: "https://api.openai.com/v1",
              moreInfoTooltip:
                "Use a different URL prefix for API calls, e.g. to use proxy servers.",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        tY = A.object({
          baseUrl: A.string.layout({
            accordion: "Customize provider",
            label: "Base URL",
          }),
          apiVersion: A.string.layout({
            accordion: "Customize provider",
            label: "API version",
          }),
        })
          .layout({ isHidden: !0 })
          .describe(
            "Deprecated, use other dedicated OpenAI compatible blocks instead"
          ),
        tJ = A.object({
          threadId: A.string.layout({
            label: "Thread ID",
            moreInfoTooltip:
              "Used to remember the conversation with the user. If empty, a new thread is created.",
            isHidden: !0,
          }),
        }),
        t$ = [
          "gpt-4.1",
          "gpt-4.5-preview",
          "gpt-4o",
          "gpt-4.1-mini",
          "gpt-4.1-nano",
          "gpt-4o-mini",
        ],
        tQ = ["o3-mini", "o1", "o1-mini"],
        tZ = ["gpt-4-turbo*", "gpt-4o*", "gpt-4*vision-preview"],
        t0 = ["gpt-4-turbo-preview"],
        t1 = { voiceModel: "tts-1" },
        t2 = (e) => !(!e || t0.includes(e)) && ev(tZ)(e),
        t5 = async (e) => {
          let t = e.split("\n\n"),
            n = [];
          for (let e of t) {
            var a, r;
            if (e.startsWith("http") || e.startsWith('["http'))
              for (let t of e.startsWith("[") ? JSON.parse(e) : [e]) {
                let e = t.trim();
                try {
                  let r = await z.Ay.get(e);
                  r.ok &&
                  (null == (a = r.headers.get("content-type"))
                    ? void 0
                    : a.startsWith("image/"))
                    ? n.push({ type: "image_url", image_url: t.trim() })
                    : n.push({ type: "text", text: e });
                } catch (e) {
                  e instanceof M.H
                    ? console.log(e.response.status, await e.response.text())
                    : console.error(e);
                }
              }
            else if ((null == (r = n.at(-1)) ? void 0 : r.type) === "text") {
              let t = n.at(-1);
              (n = n.slice(0, -1)).push({
                type: "text",
                text: t.text + "\n\n" + e,
              });
            } else n.push({ type: "text", text: e });
          }
          return n;
        },
        t3 = {
          auth: tX,
          baseOptions: tY,
          name: "Ask Assistant",
          options: A.object({
            assistantId: A.string.layout({
              label: "Assistant ID",
              placeholder: "Select an assistant",
              moreInfoTooltip:
                "The OpenAI assistant you want to ask question to.",
              fetcher: "fetchAssistants",
            }),
            threadVariableId: A.string.layout({
              label: "Thread ID",
              moreInfoTooltip:
                "Used to remember the conversation with the user. If empty, a new thread is created.",
              inputType: "variableDropdown",
            }),
            message: A.string.layout({
              label: "Message",
              inputType: "textarea",
            }),
            functions: A.array(
              A.object({
                name: A.string.layout({
                  fetcher: "fetchAssistantFunctions",
                  label: "Name",
                }),
                code: A.string.layout({
                  inputType: "code",
                  label: "Code",
                  lang: "javascript",
                  moreInfoTooltip:
                    "A javascript code snippet that can use the defined parameters. It should return a value.",
                  withVariableButton: !1,
                }),
              })
            ).layout({ accordion: "Functions", itemLabel: "function" }),
            additionalInstructions: A.string.layout({
              label: "Additional Instructions",
              inputType: "textarea",
              accordion: "Advanced settings",
            }),
            responseMapping: A.saveResponseArray(["Message", "Thread ID"], {
              item: { hiddenItems: ["Thread ID"] },
            }).layout({ accordion: "Save response" }),
          }).merge(tJ),
          fetchers: [
            {
              id: "fetchAssistants",
              fetch: async (e) => {
                let { options: t, credentials: n } = e;
                if (!(null == n ? void 0 : n.apiKey)) return { data: [] };
                let a = {
                    apiKey: n.apiKey,
                    baseURL: t.baseUrl,
                    defaultHeaders: { "api-key": n.apiKey },
                    defaultQuery: t.apiVersion
                      ? { "api-version": t.apiVersion }
                      : void 0,
                  },
                  r = new tq.z4(a);
                try {
                  return {
                    data: (await r.beta.assistants.list({ limit: 100 })).data
                      .map((e) =>
                        e.name ? { label: e.name, value: e.id } : void 0
                      )
                      .filter(o.O9),
                  };
                } catch (e) {
                  return { error: await U({ err: e }) };
                }
              },
              dependencies: ["baseUrl", "apiVersion"],
            },
            {
              id: "fetchAssistantFunctions",
              fetch: async (e) => {
                let { options: t, credentials: n } = e;
                if (!t.assistantId || !(null == n ? void 0 : n.apiKey))
                  return { data: [] };
                let a = {
                    apiKey: n.apiKey,
                    baseURL: t.baseUrl,
                    defaultHeaders: { "api-key": n.apiKey },
                    defaultQuery: t.apiVersion
                      ? { "api-version": t.apiVersion }
                      : void 0,
                  },
                  r = new tq.z4(a);
                try {
                  return {
                    data: (
                      await r.beta.assistants.retrieve(t.assistantId)
                    ).tools
                      .filter((e) => "function" === e.type)
                      .map((e) =>
                        "function" === e.type && e.function.name
                          ? e.function.name
                          : void 0
                      )
                      .filter(o.O9),
                  };
                } catch (e) {
                  return { error: await U({ err: e }) };
                }
              },
              dependencies: ["baseUrl", "apiVersion", "assistantId"],
            },
          ],
          getSetVariableIds: (e) => {
            var t;
            let { responseMapping: n } = e;
            return null !=
              (t = null == n ? void 0 : n.map((e) => e.variableId).filter(o.O9))
              ? t
              : [];
          },
          run: {
            stream: {
              getStreamVariableId: (e) => {
                var t;
                let { responseMapping: n } = e;
                return null == n ||
                  null == (t = n.find((e) => !e.item || "Message" === e.item))
                  ? void 0
                  : t.variableId;
              },
              run: async (e) => {
                let {
                  credentials: t,
                  options: n,
                  variables: a,
                  sessionStore: r,
                } = e;
                return {
                  stream: await t4({
                    apiKey: t.apiKey,
                    assistantId: n.assistantId,
                    message: n.message,
                    baseUrl: n.baseUrl,
                    apiVersion: n.apiVersion,
                    threadVariableId: n.threadVariableId,
                    variables: a,
                    functions: n.functions,
                    responseMapping: n.responseMapping,
                    additionalInstructions: n.additionalInstructions,
                    sessionStore: r,
                  }),
                };
              },
            },
            server: async (e) => {
              let {
                  credentials: { apiKey: t },
                  options: {
                    baseUrl: n,
                    apiVersion: a,
                    assistantId: r,
                    message: o,
                    responseMapping: i,
                    threadId: l,
                    threadVariableId: s,
                    functions: d,
                    additionalInstructions: u,
                  },
                  variables: c,
                  logs: p,
                  sessionStore: m,
                } = e,
                b = await t4({
                  apiKey: t,
                  assistantId: r,
                  logs: p,
                  message: o,
                  baseUrl: n,
                  apiVersion: a,
                  threadVariableId: s,
                  variables: c,
                  threadId: l,
                  functions: d,
                  additionalInstructions: u,
                  sessionStore: m,
                });
              if (!b)
                return void p.add("createAssistantStream returned undefined");
              let g = "";
              await (0, tn.EC)({
                stream: b,
                onTextPart: (e) => {
                  g += e;
                },
                onErrorPart: (e) => {
                  null == p || p.add(e);
                },
              }),
                null == i ||
                  i.forEach((e) => {
                    e.variableId &&
                      (!e.item || "Message" === e.item) &&
                      c.set([
                        { id: e.variableId, value: g.replace(/【.+】/g, "") },
                      ]);
                  });
            },
          },
        },
        t4 = async (e) => {
          var t, n;
          let a,
            {
              apiKey: r,
              assistantId: i,
              logs: l,
              message: s,
              baseUrl: d,
              apiVersion: u,
              threadVariableId: c,
              variables: p,
              threadId: m,
              functions: b,
              responseMapping: g,
              additionalInstructions: h,
              sessionStore: y,
            } = e;
          if ((0, o.Im)(i)) {
            null == l || l.add("Assistant ID is empty");
            return;
          }
          if ((0, o.Im)(s)) {
            null == l || l.add("Message is empty");
            return;
          }
          let f = new tq.z4({
            apiKey: r,
            baseURL: d,
            defaultHeaders: { "api-key": r },
            defaultQuery: u ? { "api-version": u } : void 0,
          });
          if (c && (0, o.hj)(null == (t = p.get(c)) ? void 0 : t.toString()))
            a = null == (n = p.get(c)) ? void 0 : n.toString();
          else if ((0, o.hj)(m)) a = m;
          else {
            a = (await f.beta.threads.create({})).id;
            let e = null == g ? void 0 : g.find((e) => "Thread ID" === e.item);
            (null == e ? void 0 : e.variableId)
              ? await p.set([{ id: e.variableId, value: a }])
              : c && (await p.set([{ id: c, value: a }]));
          }
          if (!a) {
            null == l || l.add("Could not get thread ID");
            return;
          }
          try {
            let e = await f.beta.assistants.retrieve(i);
            return (
              await f.beta.threads.messages.create(a, {
                role: "user",
                content: t2(e.model) ? await t5(s) : s,
              }),
              t9(async (e) => {
                var t;
                let { forwardStream: n } = e;
                if (!a) return;
                let r = f.beta.threads.runs.stream(a, {
                    assistant_id: i,
                    additional_instructions: h,
                  }),
                  l = await n(r);
                for (
                  ;
                  (null == l ? void 0 : l.status) === "requires_action" &&
                  (null == (t = l.required_action) ? void 0 : t.type) ===
                    "submit_tool_outputs";

                ) {
                  let e = (
                    await Promise.all(
                      l.required_action.submit_tool_outputs.tool_calls.map(
                        async (e) => {
                          var t;
                          let n = JSON.parse(e.function.arguments),
                            a =
                              null == b
                                ? void 0
                                : b.find((t) => t.name === e.function.name);
                          if (!a || !e.function.name || !a.code) return;
                          let { output: r, newVariables: o } = await eo({
                            variables: p.list(),
                            body: a.code,
                            args: n,
                            sessionStore: y,
                          });
                          return (
                            o && o.length > 0 && (await p.set(o)),
                            {
                              tool_call_id: e.id,
                              output: null != (t = G(r)) ? t : "",
                            }
                          );
                        }
                      )
                    )
                  ).filter(o.O9);
                  l = await n(
                    f.beta.threads.runs.submitToolOutputsStream(a, l.id, {
                      tool_outputs: e,
                    })
                  );
                }
              })
            );
          } catch (e) {
            null == l || l.add(await U({ err: e }));
          }
        },
        t9 = (e) =>
          new ReadableStream({
            async start(t) {
              let n = new TextEncoder(),
                a = async (e) => {
                  let a;
                  for await (let i of e)
                    switch (i.event) {
                      case "thread.message.delta": {
                        var r, o;
                        let e =
                          null == (r = i.data.delta.content) ? void 0 : r[0];
                        (null == e ? void 0 : e.type) === "text" &&
                          (null == (o = e.text) ? void 0 : o.value) != null &&
                          t.enqueue(n.encode((0, tn.H4)("text", e.text.value)));
                        break;
                      }
                      case "thread.run.completed":
                      case "thread.run.requires_action":
                        a = i.data;
                    }
                  return a;
                };
              try {
                await e({ forwardStream: a });
              } catch (e) {
                var r, o;
                (o = null != (r = e.message) ? r : "".concat(e)),
                  t.enqueue(n.encode((0, tn.H4)("error", o)));
              } finally {
                t.close();
              }
            },
            pull() {},
            cancel() {},
          });
      var t6 = n(41880);
      let t7 = {
        name: "Create chat completion",
        auth: tX,
        baseOptions: tY,
        options: e8({ models: { type: "static", models: t$.concat(tQ) } }),
        getSetVariableIds: e5,
        turnableInto: [
          { blockId: "open-router" },
          { blockId: "together-ai" },
          { blockId: "mistral", transform: (e) => ({ ...e, model: void 0 }) },
          { blockId: "groq" },
          {
            blockId: "perplexity",
            transform: (e) => ({ ...e, model: void 0 }),
          },
          {
            blockId: "anthropic",
            transform: (e) => ({
              ...e,
              model: void 0,
              action: "Create Chat Message",
            }),
          },
          { blockId: "deepseek", transform: (e) => ({ ...e, model: void 0 }) },
        ],
        run: {
          server: (e) => {
            var t;
            let {
              credentials: { apiKey: n, baseUrl: a },
              options: r,
              variables: o,
              logs: i,
              sessionStore: l,
            } = e;
            if (!n) return i.add("No API key provided");
            let s = null == (t = r.model) ? void 0 : t.trim();
            return s
              ? r.messages
                ? es({
                    model: (0, t6.r)({
                      baseURL: null != a ? a : r.baseUrl,
                      apiKey: n,
                      compatibility: "strict",
                    })(s),
                    variables: o,
                    messages: r.messages,
                    tools: r.tools,
                    isVisionEnabled: t2(s),
                    temperature: r.temperature,
                    responseMapping: r.responseMapping,
                    logs: i,
                    sessionStore: l,
                  })
                : i.add("No messages provided")
              : i.add("No model provided");
          },
          stream: {
            getStreamVariableId: j,
            run: async (e) => {
              var t;
              let {
                  credentials: { apiKey: n, baseUrl: a },
                  options: r,
                  variables: o,
                  sessionStore: i,
                } = e,
                l = "While streaming OpenAI chat completion";
              if (!n)
                return {
                  error: { description: "No API key provided", context: l },
                };
              let s = null == (t = r.model) ? void 0 : t.trim();
              return s
                ? r.messages
                  ? ed({
                      model: (0, t6.r)({
                        baseURL: null != a ? a : r.baseUrl,
                        apiKey: n,
                        compatibility: "strict",
                      })(s),
                      variables: o,
                      messages: r.messages,
                      isVisionEnabled: t2(s),
                      tools: r.tools,
                      temperature: r.temperature,
                      responseMapping: r.responseMapping,
                      sessionStore: i,
                    })
                  : {
                      error: {
                        description: "No messages provided",
                        context: l,
                      },
                    }
                : { error: { description: "No model provided", context: l } };
            },
          },
        },
      };
      var t8 = n(51642).Buffer;
      let ne = {
          name: "Create speech",
          auth: tX,
          baseOptions: tY,
          options: A.object({
            model: A.string.layout({
              fetcher: "fetchSpeechModels",
              defaultValue: "tts-1",
              placeholder: "Select a model",
            }),
            input: A.string.layout({ label: "Input", inputType: "textarea" }),
            voice: A.enum([
              "alloy",
              "echo",
              "fable",
              "onyx",
              "nova",
              "shimmer",
            ]).layout({ label: "Voice", placeholder: "Select a voice" }),
            saveUrlInVariableId: A.string.layout({
              inputType: "variableDropdown",
              label: "Save URL in variable",
            }),
          }),
          getSetVariableIds: (e) =>
            e.saveUrlInVariableId ? [e.saveUrlInVariableId] : [],
          fetchers: [
            {
              id: "fetchSpeechModels",
              dependencies: ["baseUrl", "apiVersion"],
              fetch: async (e) => {
                let { credentials: t, options: n } = e;
                if (!(null == t ? void 0 : t.apiKey)) return { data: [] };
                let a = null == n ? void 0 : n.baseUrl,
                  r = {
                    apiKey: t.apiKey,
                    baseURL: a,
                    defaultHeaders: { "api-key": t.apiKey },
                    defaultQuery: (null == n ? void 0 : n.apiVersion)
                      ? { "api-version": n.apiVersion }
                      : void 0,
                  },
                  o = new tq.Ay(r);
                try {
                  var i;
                  return {
                    data:
                      null !=
                      (i = (await o.models.list()).data
                        .filter((e) => e.id.includes("tts"))
                        .sort((e, t) => t.created - e.created)
                        .map((e) => e.id))
                        ? i
                        : [],
                  };
                } catch (e) {
                  return {
                    error: await U({
                      err: e,
                      context: "While fetching OpenAI speech models",
                    }),
                  };
                }
              },
            },
          ],
          run: {
            server: async (e) => {
              var t;
              let {
                credentials: { apiKey: n },
                options: a,
                variables: r,
                logs: i,
              } = e;
              if (!a.input) return i.add("Create speech input is empty");
              if (!a.voice) return i.add("Create speech voice is empty");
              if (!a.saveUrlInVariableId)
                return i.add("Create speech save variable is empty");
              let l = {
                  apiKey: n,
                  baseURL: a.baseUrl,
                  defaultHeaders: { "api-key": n },
                  defaultQuery: (0, o.hj)(a.apiVersion)
                    ? { "api-version": a.apiVersion }
                    : void 0,
                },
                s = new tq.Ay(l),
                d = null != (t = a.model) ? t : t1.voiceModel;
              try {
                let e = await s.audio.speech.create({
                    input: a.input,
                    voice: a.voice,
                    model: d,
                  }),
                  t = await th({
                    file: t8.from(await e.arrayBuffer()),
                    key: "tmp/openai/audio/".concat(
                      (0, tp.sX)() + (0, tp.sX)(),
                      ".mp3"
                    ),
                    mimeType: "audio/mpeg",
                  });
                r.set([{ id: a.saveUrlInVariableId, value: t }]);
              } catch (e) {
                i.add(await U({ err: e, context: "While generating speech" }));
              }
            },
          },
        },
        nt = {
          name: "Create transcription",
          auth: tX,
          baseOptions: tY,
          options: A.object({
            url: A.string.layout({ label: "Audio URL" }),
            transcriptionVariableId: A.string.layout({
              label: "Save result to",
              inputType: "variableDropdown",
            }),
          }),
          getSetVariableIds: (e) =>
            e.transcriptionVariableId ? [e.transcriptionVariableId] : [],
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t },
                options: n,
                variables: a,
                logs: r,
              } = e;
              if (!n.url) return r.add("Audio URL is empty");
              if (!n.transcriptionVariableId)
                return r.add("Missing transcription variable");
              let i = {
                  apiKey: t,
                  baseURL: n.baseUrl,
                  defaultHeaders: { "api-key": t },
                  defaultQuery: (0, o.hj)(n.apiVersion)
                    ? { "api-version": n.apiVersion }
                    : void 0,
                },
                l = new tq.Ay(i),
                s = await l.audio.transcriptions.create({
                  file: await fetch(n.url),
                  model: "whisper-1",
                });
              a.set([{ id: n.transcriptionVariableId, value: s.text }]);
            },
          },
        },
        nn = {
          name: "Generate variables",
          auth: tX,
          baseOptions: tY,
          options: eN({ models: { type: "static", models: t$.concat(tQ) } }),
          aiGenerate: {
            fetcherId: "fetchModels",
            getModel: (e) => {
              let { credentials: t, model: n } = e;
              return (0, t6.r)({ apiKey: t.apiKey, compatibility: "strict" })(
                n
              );
            },
          },
          turnableInto: [
            { blockId: "mistral" },
            {
              blockId: "anthropic",
              transform: (e) => ({ ...e, model: void 0 }),
            },
          ],
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.variablesToExtract)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: (e) => {
              let { credentials: t, options: n, variables: a, logs: r } = e;
              return (null == t ? void 0 : t.apiKey) === void 0
                ? r.add("No API key provided")
                : void 0 === n.model
                ? r.add("No model provided")
                : eA({
                    model: (0, t6.r)({
                      apiKey: t.apiKey,
                      compatibility: "strict",
                    })(n.model),
                    prompt: n.prompt,
                    variablesToExtract: n.variablesToExtract,
                    variables: a,
                    logs: r,
                  });
            },
          },
        };
      var na = n(61956);
      let nr = {
          type: "encryptedCredentials",
          name: "Perplexity account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can generate an API key [here](https://www.perplexity.ai/settings/api)",
              placeholder: "pplx-...",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
            baseUrl: A.string.layout({
              label: "Base URL",
              defaultValue: "https://api.perplexity.ai",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        no = {
          name: "Create chat completion",
          auth: nr,
          options: e8({
            models: {
              type: "static",
              models: [
                "sonar-deep-research",
                "sonar-reasoning-pro",
                "sonar-reasoning",
                "sonar-pro",
                "sonar",
              ],
            },
          }),
          turnableInto: [
            { blockId: "openai", transform: (e) => ({ ...e, model: void 0 }) },
            { blockId: "mistral", transform: (e) => ({ ...e, model: void 0 }) },
            { blockId: "groq", transform: (e) => ({ ...e, model: void 0 }) },
            { blockId: "together-ai" },
            { blockId: "open-router" },
            {
              blockId: "anthropic",
              transform: (e) => ({
                ...e,
                model: void 0,
                action: "Create Chat Message",
              }),
            },
            {
              blockId: "deepseek",
              transform: (e) => ({ ...e, model: void 0 }),
            },
          ],
          getSetVariableIds: (e) => {
            var t, n;
            return null !=
              (n =
                null == (t = e.responseMapping)
                  ? void 0
                  : t.map((e) => e.variableId).filter(o.O9))
              ? n
              : [];
          },
          run: {
            server: (e) => {
              var t;
              let {
                credentials: { apiKey: n, baseUrl: a },
                options: r,
                variables: o,
                logs: i,
                sessionStore: l,
              } = e;
              if (!n) return i.add("No API key provided");
              let s = null == (t = r.model) ? void 0 : t.trim();
              return s
                ? r.messages
                  ? es({
                      model: (0, na.d)({
                        apiKey: n,
                        baseURL: null != a ? a : void 0,
                      })(s),
                      variables: o,
                      messages: r.messages,
                      tools: r.tools,
                      isVisionEnabled: !1,
                      temperature: r.temperature,
                      responseMapping: r.responseMapping,
                      logs: i,
                      sessionStore: l,
                    })
                  : i.add("No messages provided")
                : i.add("No model provided");
            },
            stream: {
              getStreamVariableId: j,
              run: async (e) => {
                var t;
                let {
                  credentials: { apiKey: n, baseUrl: a },
                  options: r,
                  variables: o,
                  sessionStore: i,
                } = e;
                if (!n)
                  return { error: { description: "No API key provided" } };
                let l = null == (t = r.model) ? void 0 : t.trim();
                return l
                  ? r.messages
                    ? ed({
                        model: (0, na.d)({
                          apiKey: n,
                          baseURL: null != a ? a : void 0,
                        })(l),
                        variables: o,
                        messages: r.messages,
                        isVisionEnabled: !1,
                        tools: r.tools,
                        temperature: r.temperature,
                        responseMapping: r.responseMapping,
                        sessionStore: i,
                      })
                    : { error: { description: "No messages provided" } }
                  : { error: { description: "No model provided" } };
              },
            },
          },
        },
        ni = "https://us.i.posthog.com",
        nl = {
          type: "encryptedCredentials",
          name: "Posthog account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "Project API key",
              isRequired: !0,
              inputType: "password",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
            host: A.string.layout({
              label: "Host",
              withVariableButton: !1,
              isDebounceDisabled: !0,
              defaultValue: ni,
            }),
          }),
        };
      var ns = n(59674);
      let nd = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ni;
          return new ns.f2(e, { host: t, requestTimeout: 5e3 });
        },
        nu = (e) => {
          if (!e) return;
          let t = {};
          return (
            e.forEach((e) => {
              let { type: n, key: a } = e;
              (null == a ? void 0 : a.trim()) &&
                (null == n ? void 0 : n.trim()) &&
                (t[n] = a);
            }),
            t
          );
        },
        nc = (e) => {
          let { properties: t, personProperties: n, isAnonymous: a } = e;
          if (!t) return;
          let r = {};
          if (
            (t.forEach((e) => {
              let { key: t, value: n } = e;
              t && n && (r[t] = n);
            }),
            a)
          )
            r.$process_person_profile = !1;
          else if (n) {
            let e = {};
            n.forEach((t) => {
              let { key: n, value: a } = t;
              n && a && (e[n] = a);
            }),
              (r.$set = e);
          }
          return r;
        },
        np = {
          auth: nl,
          name: "Capture",
          parseBlockNodeLabel: (e) => "Capture ".concat(e.event),
          options: A.object({
            isAnonymous: A.boolean.layout({
              label: "Anonymous",
              isRequired: !1,
              defaultValue: !1,
            }),
            distinctId: A.string.layout({
              label: "Distinct ID",
              isRequired: !1,
              isHidden: (e) => e.isAnonymous,
            }),
            event: A.string.layout({ label: "Event", isRequired: !0 }),
            properties: A.array(
              A.object({
                key: A.string.layout({ label: "Key", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({ itemLabel: "a property", accordion: "Properties" }),
            personProperties: A.array(
              A.object({
                key: A.string.layout({ label: "Key", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({
              itemLabel: "a property",
              accordion: "Person properties",
            }),
            groups: A.array(
              A.object({
                type: A.string.layout({ label: "Type", isRequired: !0 }),
                key: A.string.layout({ label: "Key", isRequired: !0 }),
              })
            ).layout({ itemLabel: "a group", accordion: "Associated groups" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t, host: n },
                options: {
                  event: a,
                  distinctId: r,
                  isAnonymous: o,
                  groups: i,
                  properties: l,
                  personProperties: s,
                },
                logs: d,
              } = e;
              if (
                void 0 === a ||
                0 === a.length ||
                !r ||
                0 === r.length ||
                void 0 === t ||
                void 0 === n
              )
                return void d.add("PostHog Capture: Missing required fields");
              let u = nd(t, n);
              u.capture({
                distinctId: o ? (0, tp.sX)() : r,
                event: a,
                properties: nc({
                  properties: l,
                  personProperties: s,
                  isAnonymous: o,
                }),
                groups: nu(i),
              }),
                await u.shutdown();
            },
          },
        },
        nm = {
          auth: nl,
          name: "Identify Group",
          options: A.object({
            distinctId: A.string.layout({
              label: "Distinct ID",
              isRequired: !1,
            }),
            groupType: A.string.layout({ label: "Type", isRequired: !0 }),
            groupKey: A.string.layout({ label: "Key", isRequired: !0 }),
            properties: A.array(
              A.object({
                key: A.string.layout({ label: "Key", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({ itemLabel: "property" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t, host: n },
                options: {
                  distinctId: a,
                  groupKey: r,
                  groupType: o,
                  properties: i,
                },
                logs: l,
              } = e;
              if (!t) return;
              let s = nd(t, n);
              return a
                ? r && o
                  ? void (s.groupIdentify({
                      distinctId: a,
                      groupType: o,
                      groupKey: r,
                      properties: nc({ properties: i }),
                    }),
                    await s.shutdown())
                  : l.add("Group type and key are required")
                : l.add("Distinct ID is required");
            },
          },
        };
      var nb = n(27693);
      let ng = {
        name: "Generate a QR Code",
        options: A.object({
          data: A.string.layout({
            label: "Data",
            helperText:
              "This can be a URL, or any text data you want to encode into a QR code.",
          }),
          saveUrlInVariableId: A.string.layout({
            label: "Save QR code image URL",
            inputType: "variableDropdown",
          }),
        }),
        getSetVariableIds: (e) =>
          e.saveUrlInVariableId ? [e.saveUrlInVariableId] : [],
        run: {
          server: async (e) => {
            let { options: t, variables: n, logs: a } = e;
            if (!t.data)
              return a.add(
                "QR code data is empty. Please provide the data to be encoded into the QR code."
              );
            if (!t.saveUrlInVariableId)
              return a.add(
                "QR code image URL is not specified. Please select a variable to save the generated QR code image."
              );
            let r = await th({
              file: await (0, nb.toBuffer)(t.data),
              key: "tmp/qrcodes/".concat((0, tp.sX)() + (0, tp.sX)(), ".png"),
              mimeType: "image/png",
            });
            n.set([{ id: t.saveUrlInVariableId, value: r }]);
          },
        },
      };
      var nh = n(45819);
      let ny = {
          type: "encryptedCredentials",
          name: "Segment account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "Write Key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can find your Write Key in your Segment source settings.",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        nf = {
          auth: ny,
          name: "Alias",
          options: A.object({
            userId: A.string.layout({
              label: "User ID",
              isRequired: !0,
              moreInfoTooltip: "New ID of the user.",
            }),
            previousId: A.string.layout({
              label: "Previous ID",
              moreInfoTooltip: "Previous ID of the user to alias.",
            }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t },
                options: { userId: n, previousId: a },
              } = e;
              if (!n || 0 === n.length || !a || 0 === a.length || void 0 === t)
                return;
              let r = new nh.j0({ writeKey: t });
              r.alias({ userId: n, previousId: a }), await r.closeAndFlush();
            },
          },
        },
        nv = {
          auth: ny,
          name: "Identify User",
          options: A.object({
            userId: A.string.layout({ label: "User ID", isRequired: !0 }),
            email: A.string.layout({ label: "Email", isRequired: !1 }),
            traits: A.array(
              A.object({
                key: A.string.layout({ label: "Key", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({ itemLabel: "trait" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t },
                options: { userId: n, email: a, traits: r },
              } = e;
              if (!a || 0 === a.length || !n || 0 === n.length || void 0 === t)
                return;
              let o = new nh.j0({ writeKey: t });
              void 0 === r || 0 === r.length
                ? o.identify({ userId: n, traits: { email: a } })
                : o.identify({ userId: n, traits: nw(r, a) }),
                await o.closeAndFlush();
            },
          },
        },
        nw = (e, t) => {
          let n = {};
          return (
            e.push({ key: "email", value: t }),
            e.forEach((e) => {
              let { key: t, value: a } = e;
              t && a && (n[t] = a);
            }),
            n
          );
        },
        nI = {
          auth: ny,
          name: "Track",
          options: A.object({
            eventName: A.string.layout({ label: "Name", isRequired: !0 }),
            userId: A.string.layout({ label: "User ID", isRequired: !0 }),
            properties: A.array(
              A.object({
                key: A.string.layout({ label: "Key", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({ itemLabel: "property" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t },
                options: { eventName: n, userId: a, properties: r },
              } = e;
              if (!n || 0 === n.length || !a || 0 === a.length || void 0 === t)
                return;
              let o = new nh.j0({ writeKey: t });
              void 0 === r || 0 === r.length
                ? o.track({ userId: a, event: n })
                : o.track({ userId: a, event: n, properties: nx(r) }),
                await o.closeAndFlush();
            },
          },
        },
        nx = (e) => {
          let t = {};
          return (
            e.forEach((e) => {
              let { key: n, value: a } = e;
              n && a && (t[n] = a);
            }),
            t
          );
        },
        nE = {
          auth: ny,
          name: "Page",
          options: A.object({
            userId: A.string.layout({ label: "User ID", isRequired: !0 }),
            name: A.string.layout({ label: "Name", isRequired: !0 }),
            category: A.string.layout({ label: "Category", isRequired: !1 }),
            properties: A.array(
              A.object({
                key: A.string.layout({ label: "Key", isRequired: !0 }),
                value: A.string.layout({ label: "Value", isRequired: !0 }),
              })
            ).layout({ itemLabel: "property" }),
          }),
          run: {
            server: async (e) => {
              let {
                credentials: { apiKey: t },
                options: { userId: n, name: a, category: r, properties: o },
              } = e;
              if (!a || 0 === a.length || !n || 0 === n.length || void 0 === t)
                return;
              let i = new nh.j0({ writeKey: t });
              void 0 === o || 0 === o.length
                ? i.page({
                    userId: n,
                    name: a,
                    category: void 0 !== r ? r : "",
                  })
                : i.page({
                    userId: n,
                    name: a,
                    category: void 0 !== r ? r : "",
                    properties: n_(o),
                  }),
                await i.closeAndFlush();
            },
          },
        },
        n_ = (e) => {
          let t = {};
          return (
            e.forEach((e) => {
              let { key: n, value: a } = e;
              n && a && (t[n] = a);
            }),
            t
          );
        };
      var nT = n(54634);
      let nC = {
          type: "encryptedCredentials",
          name: "Together account",
          schema: A.object({
            apiKey: A.string.layout({
              label: "API key",
              isRequired: !0,
              inputType: "password",
              helperText:
                "You can get your API key [here](https://api.together.xyz/settings/api-keys).",
              isDebounceDisabled: !0,
            }),
          }),
        },
        nS = {
          name: "Create chat completion",
          auth: nC,
          options: e8({
            models: {
              type: "text",
              helperText:
                "You can find the list of all the models available [here](https://docs.together.ai/docs/inference-models#chat-models). Copy the model string for API.",
            },
          }),
          turnableInto: [
            { blockId: "openai" },
            { blockId: "open-router" },
            { blockId: "mistral" },
            { blockId: "perplexity" },
            {
              blockId: "anthropic",
              transform: (e) => ({ ...e, action: "Create Chat Message" }),
            },
            { blockId: "groq" },
            { blockId: "deepseek" },
          ],
          getSetVariableIds: e5,
          run: {
            server: (e) => {
              var t;
              let {
                credentials: { apiKey: n },
                options: a,
                variables: r,
                logs: o,
                sessionStore: i,
              } = e;
              if (!n) return o.add("No API key provided");
              let l = null == (t = a.model) ? void 0 : t.trim();
              return l
                ? a.messages
                  ? es({
                      model: (0, nT.F)({ apiKey: n })(l),
                      variables: r,
                      messages: a.messages,
                      tools: a.tools,
                      isVisionEnabled: !1,
                      temperature: a.temperature,
                      responseMapping: a.responseMapping,
                      logs: o,
                      sessionStore: i,
                    })
                  : o.add("No messages provided")
                : o.add("No model provided");
            },
            stream: {
              getStreamVariableId: j,
              run: async (e) => {
                var t;
                let {
                  credentials: { apiKey: n },
                  options: a,
                  variables: r,
                  sessionStore: o,
                } = e;
                if (!n)
                  return { error: { description: "No API key provided" } };
                let i = null == (t = a.model) ? void 0 : t.trim();
                return i
                  ? a.messages
                    ? ed({
                        model: (0, nT.F)({ apiKey: n })(i),
                        variables: r,
                        messages: a.messages,
                        tools: a.tools,
                        isVisionEnabled: !1,
                        temperature: a.temperature,
                        responseMapping: a.responseMapping,
                        sessionStore: o,
                      })
                    : { error: { description: "No messages provided" } }
                  : { error: { description: "No model provided" } };
              },
            },
          },
        };
      var nk = n(51429);
      let nN = {
          type: "encryptedCredentials",
          name: "Zendesk Conversations API",
          schema: A.object({
            conversationsKeyId: A.string.layout({
              label: "Conversations Key ID",
              isRequired: !0,
              withVariableButton: !1,
              isDebounceDisabled: !0,
              helperText:
                "[How to find my Zendesk Key ID and Secret Key?](https://docs.typebot.io/editor/blocks/integrations/zendesk#how-to-find-my-zendesk-key-id-and-secret-key)",
            }),
            conversationsSecretKey: A.string.layout({
              label: "Conversations Secret Key",
              isRequired: !0,
              inputType: "password",
              withVariableButton: !1,
              isDebounceDisabled: !0,
            }),
          }),
        },
        nA = {
          auth: nN,
          name: "Open Web Widget",
          options: A.object({
            userId: A.string.layout({ label: "User ID" }),
            name: A.string.layout({ label: "Name" }),
            email: A.string.layout({ label: "Email" }),
            webWidgetKey: A.string.layout({
              label: "Web Widget Key",
              helperText:
                "[Finding web widget key](https://docs.typebot.io/editor/blocks/integrations/zendesk#open-web-widget)",
            }),
          }),
          run: {
            web: {
              parseFunction: (e) => {
                let {
                    credentials: {
                      conversationsSecretKey: t,
                      conversationsKeyId: n,
                    },
                    options: { userId: a, name: r, email: o, webWidgetKey: i },
                  } = e,
                  l = "";
                return (
                  a && o
                    ? (l = (0, nk.sign)(
                        {
                          scope: "user",
                          external_id: null != a ? a : "",
                          name: null != r ? r : "",
                          email: o,
                          email_verified: "true",
                        },
                        null != t ? t : "",
                        { algorithm: "HS256", keyid: null != n ? n : "" }
                      ))
                    : a &&
                      (l = (0, nk.sign)(
                        {
                          scope: "user",
                          external_id: null != a ? a : "",
                          name: null != r ? r : "",
                        },
                        null != t ? t : "",
                        { algorithm: "HS256", keyid: null != n ? n : "" }
                      )),
                  {
                    args: {
                      isAuthEnabled:
                        void 0 !== a && "" !== a ? "true" : "false",
                      token: l,
                      key: null != i ? i : "",
                    },
                    content: nP(),
                  }
                );
              },
            },
          },
        },
        nP = () =>
          '(function (d, t) {\n    var ZD_URL = "https://static.zdassets.com/ekr/snippet.js?key=" + key;\n\n    var ze_script = d.createElement(t);\n    var s = d.getElementsByTagName(t)[0];\n\n    ze_script.id="ze-snippet";\n    ze_script.src = ZD_URL;\n    ze_script.crossorigin = "anonymous";\n    ze_script.defer = true;\n    ze_script.async = true;\n    s.parentNode.insertBefore(ze_script, s);\n\n    ze_script.onload = function () {\n      if ( isAuthEnabled === "true" && token != "") {\n        zE("messenger", "loginUser", function (callback) {\n          callback(token);\n          zE("messenger", "open");\n        });\n      } else {\n        zE("messenger", "open");\n      }\n    };\n  })(document, "script");\n\n  return "'.concat(
            "Zendesk Web Widget Opened",
            '"\n  '
          );
      tH.id;
      let nR = (e) => Object.values(v).includes(e.type),
        nj = (e) => Object.values(f).includes(e.type),
        nL = (e) => Object.values(I).includes(e.type),
        nU = (e) => e.type === v.CHOICE,
        nO = (e) => Object.values(w).concat(x).includes(e.type),
        nV = (e) => Object.values(f).includes(e);
      var nD = n(92349),
        nB = (function (e) {
          return (
            (e.GET = "Get data from sheet"),
            (e.INSERT_ROW = "Insert a row"),
            (e.UPDATE_ROW = "Update a row"),
            e
          );
        })({}),
        nz = n(97036),
        nM = (function (e) {
          return (e.OR = "OR"), (e.AND = "AND"), e;
        })({}),
        nH = (function (e) {
          return (
            (e.EQUAL = "Equal to"),
            (e.NOT_EQUAL = "Not equal"),
            (e.CONTAINS = "Contains"),
            (e.NOT_CONTAINS = "Does not contain"),
            (e.GREATER = "Greater than"),
            (e.GREATER_OR_EQUAL = "Greater or equal to"),
            (e.LESS = "Less than"),
            (e.LESS_OR_EQUAL = "Less or equal to"),
            (e.IS_SET = "Is set"),
            (e.IS_EMPTY = "Is empty"),
            (e.STARTS_WITH = "Starts with"),
            (e.ENDS_WITH = "Ends with"),
            (e.MATCHES_REGEX = "Matches regex"),
            (e.NOT_MATCH_REGEX = "Does not match regex"),
            e
          );
        })({}),
        nK = n(95232);
      let nW = (e, t) => {
        for (let s = 0; s < t.length; s++) {
          var n, a, r, o, i, l;
          for (
            let d = 0;
            d <
            (null !=
            (r =
              null == (a = t.at(s)) || null == (n = a.blocks)
                ? void 0
                : n.length)
              ? r
              : 0);
            d++
          )
            if (
              (null == (l = t.at(s)) ||
              null == (i = l.blocks) ||
              null == (o = i.at(d))
                ? void 0
                : o.id) === e
            )
              return {
                block: t[s].blocks[d],
                group: t[s],
                blockIndex: d,
                groupIndex: s,
              };
        }
        throw Error("Block with id ".concat(e, " was not found"));
      };
      var nF = n(98088),
        nG = n(38852),
        nq = n(86387);
      let nX = {
        labels: {
          placeholder:
            "<strong>\n      Click to upload\n    </strong> or drag and drop<br>\n    (size limit: 10MB)",
          button: "Upload",
          clear: "Clear",
          skip: "Skip",
          success: {
            single: "File uploaded",
            multiple: "{total} files uploaded",
          },
        },
      };
      var nY = (function (e) {
          return (e.STRIPE = "Stripe"), e;
        })({}),
        nJ = n(78895);
      let n$ = { length: 10 };
      var nQ = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : { fieldToParse: "value", escapeForJson: !1 };
          return (n) =>
            n && "" !== n
              ? n.replace(/\{\{(.*?)\}\}/g, (n, a) => {
                  let r = a.replace(/{{|}}/g, ""),
                    i = e.find(
                      (e) =>
                        r === e.name &&
                        ("id" === t.fieldToParse || (0, o.O9)(e.value))
                    );
                  if (!i) return "";
                  if ("id" === t.fieldToParse) return i.id;
                  let { value: l } = i;
                  return t.escapeForJson
                    ? n1("string" == typeof l ? l : JSON.stringify(l))
                    : nZ(l) || "";
                })
              : "";
        },
        nZ = (e) => {
          if ((0, o.pN)(e)) return null;
          if ("string" == typeof e) return e;
          try {
            return JSON.stringify(e);
          } catch (t) {
            return (
              console.warn("Failed to safely stringify variable value", e), null
            );
          }
        },
        n0 = (e) => {
          if (null === e) return null;
          if (void 0 !== e) {
            if (Array.isArray(e) || "number" == typeof e) return e;
            if ("true" === e) return !0;
            if ("false" === e) return !1;
            if ("null" === e) return null;
            if ("undefined" !== e)
              try {
                return JSON.parse(e);
              } catch (t) {
                return e;
              }
          }
        },
        n1 = (e) =>
          e
            .replace(/\n/g, "\\n")
            .replace(/"/g, '\\"')
            .replace(/\\[^n"]/g, "\\\\ "),
        n2 = (e, t) =>
          Object.keys(e).reduce((n, a) => {
            let r = e[a];
            return { ...n, [a]: "string" == typeof r ? nQ(t)(r) : r };
          }, {}),
        n5 = (0, y.createContext)({}),
        n3 = (e) => {
          let {
              children: t,
              resultId: n,
              onNewAnswer: a,
              onVariablesUpdated: i,
            } = e,
            [l, s] = (0, y.useState)({
              answers: [],
              variables: [],
              createdAt: new Date(),
            }),
            d = (e) => {
              let t = e.map((e) => ({ ...e, value: nZ(e.value) }));
              s((e) => {
                let n = [
                  ...e.variables.filter((e) =>
                    t.every((t) => t.id !== e.id || t.name !== e.name)
                  ),
                  ...t,
                ].filter((e) => (0, o.O9)(e.value));
                return i && i(n), { ...e, variables: n };
              });
            };
          return (0, r.jsx)(n5.Provider, {
            value: {
              resultId: n,
              resultValues: l,
              addAnswer: (e) => (t) => {
                var n, r;
                return (
                  t.variableId &&
                    d([
                      {
                        id: t.variableId,
                        value: t.content,
                        name:
                          null !=
                          (r =
                            null == (n = e.find((e) => e.id === t.variableId))
                              ? void 0
                              : n.name)
                            ? r
                            : "",
                      },
                    ]),
                  s((e) => ({ ...e, answers: [...e.answers, t] })),
                  a && a(t)
                );
              },
              updateVariables: d,
            },
            children: t,
          });
        },
        n4 = () => (0, y.useContext)(n5),
        n9 = (e) => {
          var t;
          return null == (t = e.filter((e) => nj(e) || nR(e)).pop())
            ? void 0
            : t.type;
        },
        n6 = (e) => {
          try {
            var t;
            null == (t = window.top) ||
              t.postMessage({ from: "typebot", ...e }, "*");
          } catch (e) {
            console.error(e);
          }
        },
        n7 = (0, y.createContext)({}),
        n8 = (e) => {
          let {
              children: t,
              typebot: n,
              apiHost: a,
              isPreview: i,
              isLoading: l,
              onNewLog: s,
            } = e,
            [d, u] = (0, y.useState)(n),
            [c, p] = (0, y.useState)([]),
            [m, b] = (0, y.useState)(n.typebotId),
            [g, h] = (0, y.useState)([]),
            [f, v] = (0, y.useState)([]);
          (0, y.useEffect)(() => {
            u((e) => ({ ...e, theme: n.theme, settings: n.settings }));
          }, [n.theme, n.settings]);
          let w = (e, t) =>
            e.map((e) => {
              var n;
              let a = t.find((t) => t.name === e.name);
              return {
                ...e,
                value: null != (n = null == a ? void 0 : a.value) ? n : e.value,
              };
            });
          return (0, r.jsx)(n7.Provider, {
            value: {
              typebot: d,
              linkedTypebots: c,
              apiHost: a,
              isPreview: i,
              updateVariableValue: (e, t) => {
                var n, a;
                let r = nZ(t);
                n6({
                  newVariableValue: {
                    name:
                      null !=
                      (a =
                        null == (n = d.variables.find((t) => t.id === e))
                          ? void 0
                          : n.name)
                        ? a
                        : "",
                    value: null != r ? r : "",
                  },
                });
                let i = d.variables.find((t) => t.id === e),
                  l = d.variables.filter(
                    (t) =>
                      t.name === (null == i ? void 0 : i.name) && t.id !== e
                  ),
                  s = [i, ...l].filter(o.O9);
                u((e) => ({
                  ...e,
                  variables: e.variables.map((e) =>
                    s.some((t) => t.id === e.id) ? { ...e, value: r } : e
                  ),
                }));
              },
              createEdge: (e) => {
                u((t) => ({ ...t, edges: [...t.edges, e] }));
              },
              injectLinkedTypebot: (e) => {
                let t = w(e.variables, d.variables),
                  n = {
                    id: "typebotId" in e ? e.typebotId : e.id,
                    groups: e.groups,
                    edges: e.edges,
                    variables: t,
                  };
                return (
                  p((e) => [...e, n]),
                  u({
                    ...d,
                    groups: [...d.groups, ...n.groups],
                    variables: [...d.variables, ...n.variables],
                    edges: [...d.edges, ...n.edges],
                  }),
                  n
                );
              },
              onNewLog: s,
              linkedBotQueue: g,
              isLoading: l,
              parentTypebotIds: f,
              pushParentTypebotId: (e) => {
                v((t) => [...t, e]);
              },
              pushEdgeIdInLinkedTypebotQueue: (e) => h((t) => [...t, e]),
              popEdgeIdFromLinkedTypebotQueue: () => {
                h((e) => e.slice(1)), v((e) => e.slice(1)), b(g[0].typebotId);
              },
              currentTypebotId: m,
              setCurrentTypebotId: b,
            },
            children: t,
          });
        },
        ae = () => (0, y.useContext)(n7),
        at = {
          general: {
            bgImage: "--typebot-container-bg-image",
            bgColor: "--typebot-container-bg-color",
            fontFamily: "--typebot-container-font-family",
          },
          chat: {
            hostBubbles: {
              bgColor: "--typebot-host-bubble-bg-color",
              color: "--typebot-host-bubble-color",
            },
            guestBubbles: {
              bgColor: "--typebot-guest-bubble-bg-color",
              color: "--typebot-guest-bubble-color",
            },
            inputs: {
              bgColor: "--typebot-input-bg-color",
              color: "--typebot-input-color",
              placeholderColor: "--typebot-input-placeholder-color",
            },
            buttons: {
              bgColor: "--typebot-button-bg-color",
              color: "--typebot-button-color",
            },
          },
        },
        an = (e, t) => {
          e && (e.general && aa(e.general, t), e.chat && ar(e.chat, t));
        },
        aa = (e, t) => {
          let { background: n, font: a } = e;
          a && "string" == typeof a && t.setProperty(at.general.fontFamily, a);
        },
        ar = (e, t) => {
          let { hostBubbles: n, guestBubbles: a, buttons: r, inputs: o } = e;
          n && ao(n, t), a && ai(a, t), r && al(r, t), o && as(o, t);
        },
        ao = (e, t) => {
          e.backgroundColor &&
            t.setProperty(at.chat.hostBubbles.bgColor, e.backgroundColor),
            e.color && t.setProperty(at.chat.hostBubbles.color, e.color);
        },
        ai = (e, t) => {
          e.backgroundColor &&
            t.setProperty(at.chat.guestBubbles.bgColor, e.backgroundColor),
            e.color && t.setProperty(at.chat.guestBubbles.color, e.color);
        },
        al = (e, t) => {
          e.backgroundColor &&
            t.setProperty(at.chat.buttons.bgColor, e.backgroundColor),
            e.color && t.setProperty(at.chat.buttons.color, e.color);
        },
        as = (e, t) => {
          e.backgroundColor &&
            t.setProperty(at.chat.inputs.bgColor, e.backgroundColor),
            e.color && t.setProperty(at.chat.inputs.color, e.color),
            e.placeholderColor &&
              t.setProperty(
                at.chat.inputs.placeholderColor,
                e.placeholderColor
              );
        },
        ad = (0, y.createContext)({}),
        au = (e) => {
          let { children: t, onScroll: n } = e;
          return (0, r.jsx)(ad.Provider, { value: { scroll: n }, children: t });
        },
        ac = () => (0, y.useContext)(ad),
        ap = window.matchMedia("only screen and (max-width: 760px)").matches,
        am =
          window.parent &&
          window.location !== (null == (a = window.top) ? void 0 : a.location),
        ab = (e, t, n) => ({
          status: e ? "error" : "success",
          description: e ? n : t,
          details: e && JSON.stringify(e, null, 2).substring(0, 1e3),
        }),
        ag = (e) => {
          var t;
          return '\nwindow.$chatwoot.setUser("'
            .concat(
              null != (t = null == e ? void 0 : e.id) ? t : "",
              '", {\n  email: '
            )
            .concat(
              (null == e ? void 0 : e.email)
                ? '"'.concat(e.email, '"')
                : "undefined",
              ",\n  name: "
            )
            .concat(
              (null == e ? void 0 : e.name)
                ? '"'.concat(e.name, '"')
                : "undefined",
              ",\n  avatar_url: "
            )
            .concat(
              (null == e ? void 0 : e.avatarUrl)
                ? '"'.concat(e.avatarUrl, '"')
                : "undefined",
              ",\n  phone_number: "
            )
            .concat(
              (null == e ? void 0 : e.phoneNumber)
                ? '"'.concat(e.phoneNumber, '"')
                : "undefined",
              ",\n});\n\n"
            );
        },
        ah = function () {
          let {
            baseUrl: e,
            websiteToken: t,
            user: n,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          return "\nif (window.$chatwoot) {\n  if("
            .concat(!!n, ") {\n    ")
            .concat(
              ag(n),
              '\n  }\n  window.$chatwoot.toggle("open");\n} else {\n  (function (d, t) {\n    var BASE_URL = "'
            )
            .concat(
              e,
              '";\n    var g = d.createElement(t),\n      s = d.getElementsByTagName(t)[0];\n    g.src = BASE_URL + "/packs/js/sdk";\n    g.defer = true;\n    g.async = true;\n    s.parentNode.insertBefore(g, s);\n    g.onload = function () {\n      window.chatwootSDK.run({\n        websiteToken: "'
            )
            .concat(
              t,
              '",\n        baseUrl: BASE_URL,\n      });\n      window.addEventListener("chatwoot:ready", function () {\n        if('
            )
            .concat(
              !!((null == n ? void 0 : n.id) || (null == n ? void 0 : n.email)),
              ") {\n          "
            )
            .concat(
              ag(n),
              '\n        }\n        window.$chatwoot.toggle("open");\n      });\n    };\n  })(document, "script");\n}'
            );
        },
        ay = (e, t) => {
          let { variables: n, isPreview: a, onNewLog: r } = t;
          if (a)
            r({
              status: "info",
              description: "Chatwoot won't open in preview mode",
            });
          else if (am)
            n6({ closeChatBubble: !0 }),
              n6({ codeToExecute: nQ(n)(ah(e.options)) });
          else {
            let t = Function(nQ(n)(ah(e.options)));
            try {
              t();
            } catch (e) {
              console.error(e);
            }
          }
          return e.outgoingEdgeId;
        },
        af = async (e, t) => {
          var a;
          let { variables: r } = t;
          if (!(null == (a = e.options) ? void 0 : a.trackingId))
            return e.outgoingEdgeId;
          let { default: o } = await n.e(36).then(n.bind(n, 11036));
          return (
            await o(e.options.trackingId),
            (0, b.a)(n2(e.options, r)),
            e.outgoingEdgeId
          );
        },
        av = async (e, t) => {
          if (!e.options || !("action" in e.options)) return e.outgoingEdgeId;
          switch (e.options.action) {
            case nB.INSERT_ROW:
              aw(e.options, t);
              break;
            case nB.UPDATE_ROW:
              aI(e.options, t);
              break;
            case nB.GET:
              await ax(e.options, t);
          }
          return e.outgoingEdgeId;
        },
        aw = (e, t) => {
          let { variables: n, apiHost: a, onNewLog: r, resultId: i } = t;
          if (!e.cellsToInsert)
            return void r({
              status: "warning",
              description: "Cells to insert are undefined",
            });
          (0, o.w$)({
            url: ""
              .concat(a, "/api/integrations/google-sheets/spreadsheets/")
              .concat(e.spreadsheetId, "/sheets/")
              .concat(e.sheetId),
            method: "POST",
            body: {
              action: nB.INSERT_ROW,
              credentialsId: e.credentialsId,
              resultId: i,
              values: aE(e.cellsToInsert, n),
            },
          }).then((e) => {
            let { error: t } = e;
            r(
              ab(
                t,
                "Succesfully inserted a row in the sheet",
                "Failed to insert a row in the sheet"
              )
            );
          });
        },
        aI = (e, t) => {
          var n, a, r;
          let { variables: i, apiHost: l, onNewLog: s, resultId: d } = t;
          e.cellsToUpsert &&
            "referenceCell" in e &&
            (0, o.w$)({
              url: ""
                .concat(l, "/api/integrations/google-sheets/spreadsheets/")
                .concat(e.spreadsheetId, "/sheets/")
                .concat(e.sheetId),
              method: "POST",
              body: {
                action: nB.UPDATE_ROW,
                credentialsId: e.credentialsId,
                values: aE(e.cellsToUpsert, i),
                resultId: d,
                referenceCell: {
                  column: null == (n = e.referenceCell) ? void 0 : n.column,
                  value: nQ(i)(
                    null !=
                      (r = null == (a = e.referenceCell) ? void 0 : a.value)
                      ? r
                      : ""
                  ),
                },
              },
            }).then((e) => {
              let { error: t } = e;
              s(
                ab(
                  t,
                  "Succesfully updated a row in the sheet",
                  "Failed to update a row in the sheet"
                )
              );
            });
        },
        ax = async (e, t) => {
          var n, a, r, i, l, s;
          let {
            variables: d,
            updateVariableValue: u,
            updateVariables: c,
            apiHost: p,
            onNewLog: m,
            resultId: b,
          } = t;
          if (!e.cellsToExtract) return;
          let { data: g, error: h } = await (0, o.w$)({
            url: ""
              .concat(p, "/api/integrations/google-sheets/spreadsheets/")
              .concat(e.spreadsheetId, "/sheets/")
              .concat(e.sheetId),
            method: "POST",
            body: {
              action: nB.GET,
              credentialsId: e.credentialsId,
              referenceCell:
                "referenceCell" in e
                  ? {
                      column: null == (n = e.referenceCell) ? void 0 : n.column,
                      value: nQ(d)(
                        null !=
                          (l = null == (a = e.referenceCell) ? void 0 : a.value)
                          ? l
                          : ""
                      ),
                    }
                  : void 0,
              filter: e.filter
                ? {
                    comparisons:
                      null == (r = e.filter.comparisons)
                        ? void 0
                        : r.map((e) => ({ ...e, value: nQ(d)(e.value) })),
                    logicalOperator:
                      null !=
                      (s = null == (i = e.filter) ? void 0 : i.logicalOperator)
                        ? s
                        : "AND",
                  }
                : void 0,
              columns: e.cellsToExtract.map((e) => e.column),
              resultId: b,
            },
          });
          m(
            ab(
              h,
              "Succesfully fetched data from sheet",
              "Failed to fetch data from sheet"
            )
          ),
            g &&
              c(
                e.cellsToExtract.reduce((e, t) => {
                  var n, a;
                  let r = d.find((0, o.$H)(t.variableId)),
                    i = g.rows,
                    l =
                      null !=
                      (a =
                        i[Math.floor(Math.random() * i.length)][
                          null != (n = t.column) ? n : ""
                        ])
                        ? a
                        : null;
                  return r ? (u(r.id, l), [...e, { ...r, value: l }]) : e;
                }, [])
              );
        },
        aE = (e, t) =>
          e.reduce(
            (e, n) =>
              n.column && n.value ? { ...e, [n.column]: nQ(t)(n.value) } : e,
            {}
          ),
        a_ = (e, t) => {
          var n, a, r, i, l, s;
          let {
            variables: d,
            apiHost: u,
            isPreview: c,
            onNewLog: p,
            resultId: m,
            typebotId: b,
            resultValues: g,
          } = t;
          if (c)
            return (
              p({
                status: "info",
                description: "Emails are not sent in preview mode",
              }),
              e.outgoingEdgeId
            );
          let { options: h } = e;
          return (
            (0, o.w$)({
              url: ""
                .concat(u, "/api/typebots/")
                .concat(b, "/integrations/email?resultId=")
                .concat(m),
              method: "POST",
              body: {
                credentialsId: null == h ? void 0 : h.credentialsId,
                recipients:
                  null == h || null == (n = h.recipients)
                    ? void 0
                    : n.map(nQ(d)),
                subject: nQ(d)(
                  null != (r = null == h ? void 0 : h.subject) ? r : ""
                ),
                body: nQ(d)(null != (i = null == h ? void 0 : h.body) ? i : ""),
                cc: (null != (l = null == h ? void 0 : h.cc) ? l : []).map(
                  nQ(d)
                ),
                bcc: (null != (s = null == h ? void 0 : h.bcc) ? s : []).map(
                  nQ(d)
                ),
                replyTo: (null == h ? void 0 : h.replyTo)
                  ? nQ(d)(h.replyTo)
                  : void 0,
                fileUrls:
                  null ==
                  (a = d.find(
                    (0, o.$H)(null == h ? void 0 : h.attachmentsVariableId)
                  ))
                    ? void 0
                    : a.value,
                isCustomBody: null == h ? void 0 : h.isCustomBody,
                isBodyCode: null == h ? void 0 : h.isBodyCode,
                resultValues: g,
              },
            }).then((e) => {
              let { error: t } = e;
              p(ab(t, "Succesfully sent an email", "Failed to send an email"));
            }),
            e.outgoingEdgeId
          );
        },
        aT = async (e, t) => {
          var n, a;
          let {
              blockId: r,
              variables: i,
              updateVariableValue: l,
              updateVariables: s,
              typebotId: d,
              apiHost: u,
              resultValues: c,
              onNewLog: p,
              resultId: m,
              parentTypebotIds: b,
            } = t,
            g = (0, nz.stringify)({ resultId: m }),
            { data: h, error: y } = await (0, o.w$)({
              url: ""
                .concat(u, "/api/typebots/")
                .concat(d, "/blocks/")
                .concat(r, "/executeWebhook?")
                .concat(g),
              method: "POST",
              body: { variables: i, resultValues: c, parentTypebotIds: b },
            }),
            f = null == h ? void 0 : h.statusCode.toString(),
            v =
              !f ||
              (null == f ? void 0 : f.startsWith("4")) ||
              (null == f ? void 0 : f.startsWith("5"));
          p({
            status: y ? "error" : v ? "warning" : "success",
            description: v
              ? "Webhook returned an error"
              : "Webhook successfuly executed",
            details: JSON.stringify(null != y ? y : h, null, 2).substring(
              0,
              1e3
            ),
          });
          let w =
            null == (a = e.options) || null == (n = a.responseVariableMapping)
              ? void 0
              : n.reduce((e, t) => {
                  if (!(null == t ? void 0 : t.bodyPath) || !t.variableId)
                    return e;
                  let n = i.find((0, o.$H)(t.variableId));
                  if (!n) return e;
                  let a = Function(
                    "data",
                    "return data.".concat(
                      nQ(i)(null == t ? void 0 : t.bodyPath)
                    )
                  );
                  try {
                    let t = a(h);
                    return (
                      l(null == n ? void 0 : n.id, t),
                      [...e, { ...n, value: t }]
                    );
                  } catch (t) {
                    return e;
                  }
                }, []);
          return w && s(w), e.outgoingEdgeId;
        },
        aC = (e) => {
          let { block: t, context: n } = e;
          switch (t.type) {
            case w.GOOGLE_SHEETS:
              return av(t, n);
            case w.GOOGLE_ANALYTICS:
              return af(t, n);
            case w.ZAPIER:
            case w.MAKE_COM:
            case w.PABBLY_CONNECT:
            case w.HTTP_REQUEST:
              return aT(t, n);
            case w.EMAIL:
              return a_(t, n);
            case w.CHATWOOT:
              return ay(t, n);
            default:
              return;
          }
        },
        aS = (e, t) => {
          let {
              typebot: { variables: n },
            } = t,
            a = e.items.find((e) => {
              var t, a;
              let { content: r } = e;
              return (null == r ? void 0 : r.logicalOperator) === nM.AND
                ? null == (t = r.comparisons)
                  ? void 0
                  : t.every(ak(n))
                : null == r || null == (a = r.comparisons)
                ? void 0
                : a.some(ak(n));
            });
          return a ? a.outgoingEdgeId : e.outgoingEdgeId;
        },
        ak = (e) => (t) => {
          var n, a;
          if (!(null == t ? void 0 : t.variableId)) return !1;
          let r = (
              null !=
              (a =
                null == (n = e.find((e) => e.id === t.variableId))
                  ? void 0
                  : n.value)
                ? a
                : ""
            )
              .toString()
              .trim(),
            i = nQ(e)(t.value).trim();
          return (
            !(0, o.pN)(i) &&
            !!t.comparisonOperator &&
            aN(r, t.comparisonOperator, i)
          );
        },
        aN = (e, t, n) => {
          switch (t) {
            case nH.CONTAINS:
              return e.toLowerCase().includes(n.toLowerCase());
            case nH.EQUAL:
              return e === n;
            case nH.NOT_EQUAL:
              return e !== n;
            case nH.GREATER:
              return Number.parseFloat(e) > Number.parseFloat(n);
            case nH.LESS:
              return Number.parseFloat(e) < Number.parseFloat(n);
            case nH.IS_SET:
              return (0, o.O9)(e) && e.length > 0;
          }
        },
        aA = (e, t) => {
          var n, a;
          let {
            typebot: { variables: r },
          } = t;
          if (!(null == (n = e.options) ? void 0 : n.url))
            return { nextEdgeId: e.outgoingEdgeId };
          let i = (0, o.Jf)(nQ(r)(e.options.url)),
            l =
              window.parent &&
              window.location !==
                (null == (a = window.top) ? void 0 : a.location),
            s = null;
          if (l) {
            if (!e.options.isNewTab)
              return (
                (window.top.location.href = i), { nextEdgeId: e.outgoingEdgeId }
              );
            try {
              s = window.open(i);
            } catch (e) {
              n6({ redirectUrl: i });
            }
          } else s = window.open(i, e.options.isNewTab ? "_blank" : "_self");
          return {
            nextEdgeId: e.outgoingEdgeId,
            blockedPopupUrl: s ? void 0 : i,
          };
        },
        aP = async (e, t) => {
          var n;
          let {
            typebot: { variables: a },
          } = t;
          if (null == (n = e.options) ? void 0 : n.content) {
            if (e.options.shouldExecuteInParentContext && am)
              n6({ codeToExecute: nQ(a)(e.options.content) });
            else {
              let t = Function(
                ...a.map((e) => e.id),
                nQ(a, { fieldToParse: "id" })(e.options.content)
              );
              try {
                await t(...a.map((e) => n0(e.value)));
              } catch (e) {
                console.error(e);
              }
            }
            return e.outgoingEdgeId;
          }
        },
        aR = (e, t) => {
          var n;
          let {
            typebot: { variables: a },
            updateVariableValue: r,
            updateVariables: i,
          } = t;
          if (
            !(null == (n = e.options) ? void 0 : n.variableId) ||
            (void 0 !== e.options.type && "Custom" !== e.options.type)
          )
            return e.outgoingEdgeId;
          let l = e.options.expressionToEvaluate
              ? aj(a)(e.options.expressionToEvaluate)
              : void 0,
            s = a.find((0, o.$H)(e.options.variableId));
          return s && (r(s.id, l), i([{ ...s, value: l }])), e.outgoingEdgeId;
        },
        aj = (e) => (t) => {
          let n = nQ(e, { fieldToParse: "id" })(
            t.includes("return ") ? t : "return ".concat(t)
          );
          try {
            return Function(
              ...e.map((e) => e.id),
              n
            )(...e.map((e) => n0(e.value)));
          } catch (n) {
            return nQ(e)(t);
          }
        },
        aL = async (e, t) => {
          var n, a;
          let { apiHost: r, injectLinkedTypebot: i, isPreview: l } = t,
            { data: s, error: d } = l
              ? await (0, o.w$)(
                  "/api/typebots/".concat(
                    null == (n = e.options) ? void 0 : n.typebotId
                  )
                )
              : await (0, o.w$)(
                  ""
                    .concat(r, "/api/publicTypebots/")
                    .concat(null == (a = e.options) ? void 0 : a.typebotId)
                );
          if (!(!s || d)) return i(s.typebot);
        },
        aU = async (e, t) => {
          var n, a, r, o, i;
          let {
              typebot: l,
              linkedTypebots: s,
              onNewLog: d,
              createEdge: u,
              setCurrentTypebotId: c,
              pushEdgeIdInLinkedTypebotQueue: p,
              pushParentTypebotId: m,
              currentTypebotId: b,
            } = t,
            g =
              (null == (n = e.options) ? void 0 : n.typebotId) === "current"
                ? l
                : null !=
                  (o = [l, ...s].find((t) => {
                    var n, a;
                    return "typebotId" in t
                      ? t.typebotId ===
                          (null == (n = e.options) ? void 0 : n.typebotId)
                      : t.id ===
                          (null == (a = e.options) ? void 0 : a.typebotId);
                  }))
                ? o
                : await aL(e, t);
          if (!g)
            return (
              d({
                status: "error",
                description: "Failed to link typebot",
                details: "",
              }),
              { nextEdgeId: e.outgoingEdgeId }
            );
          e.outgoingEdgeId && p({ edgeId: e.outgoingEdgeId, typebotId: b }),
            m(b),
            c("typebotId" in g ? g.typebotId : g.id);
          let h =
            null != (i = null == (a = e.options) ? void 0 : a.groupId)
              ? i
              : null ==
                (r = g.groups.find((e) =>
                  e.blocks.some((e) => "start" === e.type)
                ))
              ? void 0
              : r.id;
          if (!h) return { nextEdgeId: e.outgoingEdgeId };
          let y = {
            id: (1e3 * Math.random()).toString(),
            from: { blockId: "" },
            to: { groupId: h },
          };
          return (
            u(y),
            {
              nextEdgeId: y.id,
              linkedTypebot: { ...g, edges: [...g.edges, y] },
            }
          );
        },
        aO = async (e, t) => {
          var n;
          let {
            typebot: { variables: a },
          } = t;
          if (!(null == (n = e.options) ? void 0 : n.secondsToWaitFor))
            return e.outgoingEdgeId;
          let r = nQ(a)(e.options.secondsToWaitFor);
          return (
            isNaN(r) ||
              (await new Promise((e) =>
                setTimeout(e, 1e3 * Number.parseInt(r))
              )),
            e.outgoingEdgeId
          );
        },
        aV = async (e, t) => {
          switch (e.type) {
            case I.SET_VARIABLE:
              return { nextEdgeId: aR(e, t) };
            case I.CONDITION:
              return { nextEdgeId: aS(e, t) };
            case I.REDIRECT:
              return aA(e, t);
            case I.SCRIPT:
              return { nextEdgeId: await aP(e, t) };
            case I.TYPEBOT_LINK:
              return aU(e, t);
            case I.WAIT:
              return { nextEdgeId: await aO(e, t) };
            default:
              return {};
          }
        },
        aD = (e) =>
          (0, r.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 512",
            width: "19px",
            color: "white",
            ...e,
            children: (0, r.jsx)("path", {
              d: "M476.59 227.05l-.16-.07L49.35 49.84A23.56 23.56 0 0027.14 52 24.65 24.65 0 0016 72.59v113.29a24 24 0 0019.52 23.57l232.93 43.07a4 4 0 010 7.86L35.53 303.45A24 24 0 0016 327v113.31A23.57 23.57 0 0026.59 460a23.94 23.94 0 0013.22 4 24.55 24.55 0 009.52-1.93L476.4 285.94l.19-.09a32 32 0 000-58.8z",
            }),
          }),
        aB = (e) => {
          let {
            label: t,
            isDisabled: n,
            isLoading: a,
            disableIcon: o,
            ...i
          } = e;
          return (0, r.jsxs)("button", {
            type: "submit",
            disabled: n || a,
            ...i,
            className:
              "py-2 px-4 justify-center font-semibold rounded-md text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 typebot-button " +
              i.className,
            children: [
              a && (0, r.jsx)(az, { className: "text-white" }),
              (0, r.jsx)("span", {
                className: "xs:flex " + (o ? "" : "hidden"),
                children: t,
              }),
              (0, r.jsx)(aD, {
                className: "send-icon flex " + (o ? "hidden" : "xs:hidden"),
              }),
            ],
          });
        },
        az = (e) =>
          (0, r.jsxs)("svg", {
            ...e,
            className: "animate-spin -ml-1 mr-3 h-5 w-5 " + e.className,
            xmlns: "http://www.w3.org/2000/svg",
            fill: "none",
            viewBox: "0 0 24 24",
            "data-testid": "loading-spinner",
            children: [
              (0, r.jsx)("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "4",
              }),
              (0, r.jsx)("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              }),
            ],
          }),
        aM = y.forwardRef(function (e, t) {
          let { onChange: n, ...a } = e;
          return (0,
          r.jsx)("input", { ref: t, className: "focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input", type: "text", style: { fontSize: "16px" }, autoFocus: !ap, onChange: (e) => n(e.target.value), ...a });
        }),
        aH = (e) => {
          var t, n, a, o, i, l;
          let { block: s, onSubmit: d, defaultValue: u, hasGuestAvatar: c } = e,
            [p, m] = (0, y.useState)(null != u ? u : ""),
            b = (0, y.useRef)(null),
            g = () => {
              var e;
              return (
                "" !== p &&
                (null == (e = b.current) ? void 0 : e.reportValidity())
              );
            },
            h = () => {
              g() && d({ value: p });
            };
          return (0, r.jsxs)("div", {
            className:
              "flex items-end justify-between rounded-lg pr-2 typebot-input w-full",
            "data-testid": "input",
            style: { marginRight: c ? "50px" : "0.5rem", maxWidth: "350px" },
            onKeyDown: (e) => {
              "Enter" === e.key && h();
            },
            children: [
              (0, r.jsx)(aM, {
                ref: b,
                value: p,
                placeholder:
                  null !=
                  (i =
                    null == (n = s.options) || null == (t = n.labels)
                      ? void 0
                      : t.placeholder)
                    ? i
                    : "Type your email...",
                onChange: (e) => m(e),
                type: "email",
                autoComplete: "email",
              }),
              (0, r.jsx)(aB, {
                type: "button",
                label:
                  null !=
                  (l =
                    null == (o = s.options) || null == (a = o.labels)
                      ? void 0
                      : a.button)
                    ? l
                    : "Send",
                isDisabled: "" === p,
                className: "my-2 ml-2",
                onClick: h,
              }),
            ],
          });
        },
        aK =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        aW = (e) => aK.test(e),
        aF = (e) => {
          var t, n, a, o, i, l, s;
          let { block: d, onSubmit: u, defaultValue: c, hasGuestAvatar: p } = e,
            [m, b] = (0, y.useState)(null != c ? c : ""),
            g = (0, y.useRef)(null),
            h = () => {
              var e;
              return (
                "" !== m &&
                (null == (e = g.current) ? void 0 : e.reportValidity())
              );
            },
            f = () => {
              h() && u({ value: m });
            };
          return (0, r.jsxs)("div", {
            className:
              "flex items-end justify-between rounded-lg pr-2 typebot-input w-full",
            "data-testid": "input",
            style: { marginRight: p ? "50px" : "0.5rem", maxWidth: "350px" },
            onKeyDown: (e) => {
              "Enter" === e.key && f();
            },
            children: [
              (0, r.jsx)(nK.Ay, {
                ref: g,
                value: m,
                onChange: (e) => b(e),
                placeholder:
                  null !=
                  (l =
                    null == (n = d.options) || null == (t = n.labels)
                      ? void 0
                      : t.placeholder)
                    ? l
                    : "Your phone number...",
                defaultCountry:
                  null == (a = d.options) ? void 0 : a.defaultCountryCode,
                autoFocus: !ap,
              }),
              (0, r.jsx)(aB, {
                type: "button",
                label:
                  null !=
                  (s =
                    null == (i = d.options) || null == (o = i.labels)
                      ? void 0
                      : o.button)
                    ? s
                    : "Send",
                isDisabled: "" === m,
                className: "my-2 ml-2",
                onClick: f,
              }),
            ],
          });
        },
        aG = (e) => (0, nK.h1)(e),
        aq = (e) => {
          var t, n, a, o, i, l;
          let { block: s, onSubmit: d, defaultValue: u, hasGuestAvatar: c } = e,
            [p, m] = (0, y.useState)(null != u ? u : ""),
            b = (0, y.useRef)(null),
            g = () => {
              var e;
              return (
                "" !== p &&
                (null == (e = b.current) ? void 0 : e.reportValidity())
              );
            },
            h = () => {
              g() && d({ value: p });
            };
          return (0, r.jsxs)("div", {
            className:
              "flex items-end justify-between rounded-lg pr-2 typebot-input w-full",
            "data-testid": "input",
            style: { marginRight: c ? "50px" : "0.5rem", maxWidth: "350px" },
            onKeyDown: (e) => {
              "Enter" === e.key && h();
            },
            children: [
              (0, r.jsx)(aM, {
                ref: b,
                value: p,
                placeholder:
                  null !=
                  (i =
                    null == (n = s.options) || null == (t = n.labels)
                      ? void 0
                      : t.placeholder)
                    ? i
                    : "Type your URL...",
                onChange: (e) => {
                  if (!e.startsWith("https://"))
                    return "https:/" === e ? void 0 : m("https://".concat(e));
                  m(e);
                },
                type: "url",
                autoComplete: "url",
              }),
              (0, r.jsx)(aB, {
                type: "button",
                label:
                  null !=
                  (l =
                    null == (o = s.options) || null == (a = o.labels)
                      ? void 0
                      : a.button)
                    ? l
                    : "Send",
                isDisabled: "" === p,
                className: "my-2 ml-2",
                onClick: h,
              }),
            ],
          });
        },
        aX =
          /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/,
        aY = (e) => aX.test(e),
        aJ = (e, t) => {
          switch (t) {
            case v.EMAIL:
              return aW(e);
            case v.PHONE:
              return aG(e);
            case v.URL:
              return aY(e);
          }
          return !0;
        },
        a$ = (e) =>
          nR(e) && (0, o.O9)(e.options) && "retryMessageContent" in e.options,
        aQ = (e, t, n, a) => {
          var r;
          let o = nQ(n)(
              null == (r = e.options) ? void 0 : r.retryMessageContent
            ),
            i = e.id + 1e3 * Math.random(),
            l = {
              id: (1e3 * Math.random()).toString(),
              from: { blockId: i },
              to: { groupId: t, blockId: e.id },
            };
          return (
            a(l),
            {
              id: i,
              type: f.TEXT,
              content: {
                html: "<div>".concat(o, "</div>"),
                richText: [],
                plainText: o,
              },
              outgoingEdgeId: l.id,
            }
          );
        },
        aZ = (e) => {
          let { url: t, onLinkClick: n } = e;
          return (0, r.jsxs)("div", {
            className:
              "w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow flex flex-col gap-2",
            role: "alert",
            children: [
              (0, r.jsx)("span", {
                className: "mb-1 text-sm font-semibold text-gray-900",
                children: "Popup blocked",
              }),
              (0, r.jsx)("div", {
                className: "mb-2 text-sm font-normal",
                children:
                  "The bot wants to open a new tab but it was blocked by your broswer. It needs a manual approval.",
              }),
              (0, r.jsx)("a", {
                href: t,
                target: "_blank",
                className:
                  "py-1 px-4 justify-center text-sm font-semibold rounded-md text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 typebot-button",
                rel: "noreferrer",
                onClick: n,
                children: "Continue in new tab",
              }),
            ],
          });
        },
        a0 = () =>
          (0, r.jsx)("figure", {
            className:
              "flex justify-center items-center rounded-full text-white w-6 h-6 text-sm relative xs:w-10 xs:h-10 xs:text-xl",
            "data-testid": "default-avatar",
            children: (0, r.jsxs)("svg", {
              width: "75",
              height: "75",
              viewBox: "0 0 75 75",
              fill: "none",
              xmlns: "http://www.w3.org/2000/svg",
              className:
                "absolute top-0 left-0 w-6 h-6 xs:w-full xs:h-full xs:text-xl",
              children: [
                (0, r.jsx)("mask", {
                  id: "mask0",
                  x: "0",
                  y: "0",
                  "mask-type": "alpha",
                  children: (0, r.jsx)("circle", {
                    cx: "37.5",
                    cy: "37.5",
                    r: "37.5",
                    fill: "#0042DA",
                  }),
                }),
                (0, r.jsxs)("g", {
                  mask: "url(#mask0)",
                  children: [
                    (0, r.jsx)("rect", {
                      x: "-30",
                      y: "-43",
                      width: "131",
                      height: "154",
                      fill: "#0042DA",
                    }),
                    (0, r.jsx)("rect", {
                      x: "2.50413",
                      y: "120.333",
                      width: "81.5597",
                      height: "86.4577",
                      rx: "2.5",
                      transform: "rotate(-52.6423 2.50413 120.333)",
                      stroke: "#FED23D",
                      strokeWidth: "5",
                    }),
                    (0, r.jsx)("circle", {
                      cx: "76.5",
                      cy: "-1.5",
                      r: "29",
                      stroke: "#FF8E20",
                      strokeWidth: "5",
                    }),
                    (0, r.jsx)("path", {
                      d: "M-49.8224 22L-15.5 -40.7879L18.8224 22H-49.8224Z",
                      stroke: "#F7F8FF",
                      strokeWidth: "5",
                    }),
                  ],
                }),
              ],
            }),
          }),
        a1 = (e) => {
          let { avatarSrc: t } = e,
            [n] = (0, y.useState)(t);
          return "" === n
            ? (0, r.jsx)(r.Fragment, {})
            : (0, o.O9)(n)
            ? (0, r.jsx)("figure", {
                className:
                  "flex justify-center items-center rounded-full text-white w-6 h-6 text-sm relative xs:w-10 xs:h-10 xs:text-xl",
                children: (0, r.jsx)("img", {
                  src: n,
                  alt: "Bot avatar",
                  className: "rounded-full object-cover w-full h-full",
                }),
              })
            : (0, r.jsx)(a0, {});
        },
        a2 = (0, y.forwardRef)(function (e, t) {
          let { hostAvatarSrc: n, keepShowing: a } = e,
            [o, i] = (0, y.useState)(!1),
            [l, s] = (0, y.useState)(0),
            d = () => {
              if (!u.current || !c.current) return;
              let { height: e } = u.current.getBoundingClientRect(),
                { height: t } = c.current.getBoundingClientRect();
              s(e - t);
            },
            u = (0, y.useRef)(null),
            c = (0, y.useRef)(null);
          return (
            (0, y.useImperativeHandle)(t, () => ({ refreshTopOffset: d })),
            (0, y.useEffect)(() => {
              if (!document) return;
              i(!0);
              let e = new nq.tb(d);
              return (
                e.observe(document.body),
                () => {
                  e.disconnect();
                }
              );
            }, []),
            (0, r.jsx)("div", {
              className:
                "flex w-6 xs:w-10 mr-2 mb-2 flex-shrink-0 items-center relative typebot-avatar-container ",
              ref: u,
              children: (0, r.jsx)(nG.A, {
                classNames: "bubble",
                timeout: 500,
                in: o && a,
                unmountOnExit: !0,
                children: (0, r.jsx)("div", {
                  className:
                    "absolute w-6 xs:w-10 h-6 xs:h-10 mb-4 xs:mb-2 flex items-center top-0",
                  ref: c,
                  style: {
                    top: "".concat(l, "px"),
                    transition: "top 350ms ease-out, opacity 500ms",
                  },
                  children: (0, r.jsx)(a1, { avatarSrc: n }),
                }),
              }),
            })
          );
        }),
        a5 = (e) => {
          var t, n;
          let { block: a, onSubmit: o } = e,
            {
              typebot: { variables: i },
            } = ae(),
            { resultValues: l } = n4(),
            [s, d] = (0, y.useState)([]),
            u = (e) => (t) => {
              var n;
              t.preventDefault(),
                (null == (n = a.options) ? void 0 : n.isMultipleChoice)
                  ? c(e)
                  : o({
                      value: nQ(i)(a.items[e].content),
                      itemId: a.items[e].id,
                    });
            },
            c = (e) => {
              let t = s.indexOf(e);
              -1 !== t ? (s.splice(t, 1), d([...s])) : d([...s, e]);
            },
            p = l && 0 === l.answers.length && 1 === a.items.length;
          return (0, r.jsxs)("form", {
            className: "flex flex-col items-end",
            onSubmit: () =>
              o({ value: s.map((e) => nQ(i)(a.items[e].content)).join(", ") }),
            children: [
              (0, r.jsx)("div", {
                className: "flex flex-wrap justify-end",
                children: a.items.map((e, t) => {
                  var n, o;
                  return (0, r.jsxs)(
                    "span",
                    {
                      className: "relative inline-flex ml-2 mb-2",
                      children: [
                        (0, r.jsx)("button", {
                          role: (
                            null == (n = a.options)
                              ? void 0
                              : n.isMultipleChoice
                          )
                            ? "checkbox"
                            : "button",
                          onClick: u(t),
                          className:
                            "py-2 px-4 text-left font-semibold rounded-md transition-all filter hover:brightness-90 active:brightness-75 duration-100 focus:outline-none typebot-button " +
                            (!s.includes(t) &&
                            (null == (o = a.options)
                              ? void 0
                              : o.isMultipleChoice)
                              ? "selectable"
                              : ""),
                          "data-testid": "button",
                          "data-itemid": e.id,
                          children: nQ(i)(e.content),
                        }),
                        p &&
                          (0, r.jsxs)("span", {
                            className:
                              "flex h-3 w-3 absolute top-0 right-0 -mt-1 -mr-1 ping",
                            children: [
                              (0, r.jsx)("span", {
                                className:
                                  "animate-ping absolute inline-flex h-full w-full rounded-full brightness-225 opacity-75",
                              }),
                              (0, r.jsx)("span", {
                                className:
                                  "relative inline-flex rounded-full h-3 w-3 brightness-200",
                              }),
                            ],
                          }),
                      ],
                    },
                    e.id
                  );
                }),
              }),
              (0, r.jsx)("div", {
                className: "flex",
                children:
                  s.length > 0 &&
                  (0, r.jsx)(aB, {
                    label:
                      null !=
                      (n = null == (t = a.options) ? void 0 : t.buttonLabel)
                        ? n
                        : "Send",
                    disableIcon: !0,
                  }),
              }),
            ],
          });
        },
        a3 = (e) => {
          let { from: t, to: n, hasTime: a, isRange: r } = e,
            o = window.navigator.language,
            i = {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
              hour: a ? "2-digit" : void 0,
              minute: a ? "2-digit" : void 0,
            },
            l = new Date(a ? t : t.replace(/-/g, "/")).toLocaleString(o, i),
            s = new Date(a ? n : n.replace(/-/g, "/")).toLocaleString(o, i);
          return "".concat(l).concat(r ? " to ".concat(s) : "");
        },
        a4 = (e) => {
          var t, n, a;
          let { onSubmit: o, options: i } = e,
            { hasTime: l, isRange: s, labels: d } = null != i ? i : {},
            [u, c] = (0, y.useState)({ from: "", to: "" });
          return (0, r.jsx)("div", {
            className: "flex flex-col w-full lg:w-4/6",
            children: (0, r.jsx)("div", {
              className: "flex items-center",
              children: (0, r.jsxs)("form", {
                className:
                  "flex justify-between rounded-lg typebot-input pr-2 items-end",
                onSubmit: (e) => {
                  ("" === u.from && "" === u.to) ||
                    (e.preventDefault(),
                    o({
                      value: ""
                        .concat(u.from)
                        .concat(s ? " to ".concat(u.to) : ""),
                      label: a3({ ...u, hasTime: l, isRange: s }),
                    }));
                },
                children: [
                  (0, r.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center p-4 " + (s ? "pb-0" : ""),
                        children: [
                          s &&
                            (0, r.jsx)("p", {
                              className: "font-semibold mr-2",
                              children:
                                null != (t = null == d ? void 0 : d.from)
                                  ? t
                                  : "From:",
                            }),
                          (0, r.jsx)("input", {
                            className:
                              "focus:outline-none flex-1 w-full text-input",
                            style: {
                              minHeight: "2rem",
                              minWidth: "100px",
                              fontSize: "16px",
                            },
                            type: l ? "datetime-local" : "date",
                            onChange: (e) => c({ ...u, from: e.target.value }),
                            "data-testid": "from-date",
                          }),
                        ],
                      }),
                      s &&
                        (0, r.jsxs)("div", {
                          className: "flex items-center p-4",
                          children: [
                            s &&
                              (0, r.jsx)("p", {
                                className: "font-semibold",
                                children:
                                  null != (n = null == d ? void 0 : d.to)
                                    ? n
                                    : "To:",
                              }),
                            (0, r.jsx)("input", {
                              className:
                                "focus:outline-none flex-1 w-full text-input ml-2",
                              style: {
                                minHeight: "2rem",
                                minWidth: "100px",
                                fontSize: "16px",
                              },
                              type: l ? "datetime-local" : "date",
                              onChange: (e) => c({ ...u, to: e.target.value }),
                              "data-testid": "to-date",
                            }),
                          ],
                        }),
                    ],
                  }),
                  (0, r.jsx)(aB, {
                    label:
                      null != (a = null == d ? void 0 : d.button) ? a : "Send",
                    isDisabled: "" === u.to && "" === u.from,
                    className: "my-2 ml-2",
                  }),
                ],
              }),
            }),
          });
        },
        a9 = async (e) => {
          let { basePath: t = "/api", files: n, onUploadProgress: a } = e,
            r = [],
            i = 0;
          for (let { file: e, path: l } of n) {
            a && a((i / n.length) * 100), (i += 1);
            let { data: s } = await (0, o.w$)(
              ""
                .concat(t, "/storage/upload-url?filePath=")
                .concat(encodeURIComponent(l), "&fileType=")
                .concat(e.type)
            );
            if (!(null == s ? void 0 : s.presignedUrl)) continue;
            let d = s.presignedUrl;
            if (s.hasReachedStorageLimit) r.push(null);
            else {
              if (!(await fetch(d, { method: "PUT", body: e })).ok) continue;
              r.push(d.split("?")[0]);
            }
          }
          return r;
        },
        a6 = (e) => {
          var t, n, a, o;
          let {
              block: { id: i, options: l },
              onSubmit: s,
              onSkip: d,
            } = e,
            {
              isMultipleAllowed: u,
              labels: c,
              isRequired: p,
            } = null != l ? l : {},
            m =
              l && "sizeLimit" in l
                ? null == l
                  ? void 0
                  : l.sizeLimit
                : void 0,
            { isPreview: b, currentTypebotId: g } = ae(),
            { resultId: h } = n4(),
            [f, v] = (0, y.useState)([]),
            [w, I] = (0, y.useState)(!1),
            [x, E] = (0, y.useState)(0),
            [_, T] = (0, y.useState)(!1),
            [C, S] = (0, y.useState)(),
            k = async (e) => {
              e.target.files && N(e.target.files);
            },
            N = (e) => {
              S(void 0);
              let t = Array.from(e);
              return t.some((e) => e.size > (null != m ? m : 10) * 1048576)
                ? S("A file is larger than ".concat(null != m ? m : 10, "MB"))
                : !u && e
                ? P(t[0])
                : void v([...f, ...t]);
            },
            A = async (e) => {
              e.preventDefault(), 0 !== f.length && R(f);
            },
            P = async (e) => {
              var t;
              if (b)
                return s({
                  label: "File uploaded",
                  value: "http://fake-upload-url.com",
                });
              I(!0);
              let n = await a9({
                basePath: "/api/typebots/".concat(g, "/blocks/").concat(i),
                files: [
                  {
                    file: e,
                    path: "public/results/"
                      .concat(h, "/")
                      .concat(i, "/")
                      .concat(e.name),
                  },
                ],
              });
              if ((I(!1), n.length))
                return s({
                  label: "File uploaded",
                  value: null != (t = n[0]) ? t : "",
                });
              S("An error occured while uploading the file");
            },
            R = async (e) => {
              if (b)
                return s({
                  label: ""
                    .concat(e.length, " file")
                    .concat(e.length > 1 ? "s" : "", " uploaded"),
                  value: e
                    .map((e, t) => "http://fake-upload-url.com/".concat(t))
                    .join(", "),
                });
              I(!0);
              let t = await a9({
                basePath: "/api/typebots/".concat(g, "/blocks/").concat(i),
                files: e.map((e) => ({
                  file: e,
                  path: "public/results/"
                    .concat(h, "/")
                    .concat(i, "/")
                    .concat(e.name),
                })),
                onUploadProgress: E,
              });
              if ((I(!1), E(0), t.length !== e.length))
                return S("An error occured while uploading the files");
              s({
                label: ""
                  .concat(t.length, " file")
                  .concat(t.length > 1 ? "s" : "", " uploaded"),
                value: t.join(", "),
              });
            };
          return (0, r.jsxs)("form", {
            className: "flex flex-col w-full",
            onSubmit: A,
            children: [
              (0, r.jsx)("label", {
                htmlFor: "dropzone-file",
                className:
                  "typebot-upload-input py-6 flex flex-col justify-center items-center w-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 px-8 mb-2 " +
                  (_ ? "dragging-over" : ""),
                onDragOver: (e) => {
                  e.preventDefault(), T(!0);
                },
                onDragLeave: () => T(!1),
                onDrop: (e) => {
                  e.preventDefault(),
                    e.stopPropagation(),
                    e.dataTransfer.files && N(e.dataTransfer.files);
                },
                children: w
                  ? (0, r.jsx)(r.Fragment, {
                      children:
                        1 === f.length
                          ? (0, r.jsx)(az, {})
                          : (0, r.jsx)("div", {
                              className:
                                "w-full bg-gray-200 rounded-full h-2.5",
                              children: (0, r.jsx)("div", {
                                className:
                                  "upload-progress-bar h-2.5 rounded-full",
                                style: {
                                  width: "".concat(x > 0 ? x : 10, "%"),
                                  transition:
                                    "width 150ms cubic-bezier(0.4, 0, 0.2, 1)",
                                },
                              }),
                            }),
                    })
                  : (0, r.jsxs)(r.Fragment, {
                      children: [
                        (0, r.jsxs)("div", {
                          className:
                            "flex flex-col justify-center items-center",
                          children: [
                            f.length
                              ? (0, r.jsxs)("span", {
                                  className: "relative",
                                  children: [
                                    (0, r.jsx)(a8, {}),
                                    (0, r.jsx)("div", {
                                      className:
                                        "total-files-indicator flex items-center justify-center absolute -right-1 rounded-full px-1 h-4",
                                      style: { bottom: "5px" },
                                      children: f.length,
                                    }),
                                  ],
                                })
                              : (0, r.jsx)(a7, {}),
                            (0, r.jsx)("p", {
                              className: "text-sm text-gray-500 text-center",
                              dangerouslySetInnerHTML: {
                                __html:
                                  null !=
                                  (t = null == c ? void 0 : c.placeholder)
                                    ? t
                                    : "",
                              },
                            }),
                          ],
                        }),
                        (0, r.jsx)("input", {
                          id: "dropzone-file",
                          type: "file",
                          className: "hidden",
                          multiple: u,
                          onChange: k,
                        }),
                      ],
                    }),
              }),
              0 === f.length &&
                !1 === p &&
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsx)("button", {
                    className:
                      "py-2 px-4 justify-center font-semibold rounded-md text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 typebot-button ",
                    onClick: d,
                    children:
                      null != (n = null == c ? void 0 : c.skip)
                        ? n
                        : nX.labels.skip,
                  }),
                }),
              u &&
                f.length > 0 &&
                !w &&
                (0, r.jsx)("div", {
                  className: "flex justify-end",
                  children: (0, r.jsxs)("div", {
                    className: "flex",
                    children: [
                      f.length &&
                        (0, r.jsx)("button", {
                          className:
                            "secondary-button py-2 px-4 justify-center font-semibold rounded-md text-white focus:outline-none flex items-center disabled:opacity-50 disabled:cursor-not-allowed disabled:brightness-100 transition-all filter hover:brightness-90 active:brightness-75 mr-2",
                          onClick: () => v([]),
                          children:
                            null != (a = null == c ? void 0 : c.clear)
                              ? a
                              : nX.labels.clear,
                        }),
                      (0, r.jsx)(aB, {
                        type: "submit",
                        label:
                          (null == c ? void 0 : c.button) === nX.labels.button
                            ? ""
                                .concat(c.button, " ")
                                .concat(f.length, " file")
                                .concat(f.length > 1 ? "s" : "")
                            : null != (o = null == c ? void 0 : c.button)
                            ? o
                            : "",
                        disableIcon: !0,
                      }),
                    ],
                  }),
                }),
              C &&
                (0, r.jsx)("p", {
                  className: "text-red-500 text-sm",
                  children: C,
                }),
            ],
          });
        },
        a7 = () =>
          (0, r.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "mb-3",
            children: [
              (0, r.jsx)("polyline", { points: "16 16 12 12 8 16" }),
              (0, r.jsx)("line", { x1: "12", y1: "12", x2: "12", y2: "21" }),
              (0, r.jsx)("path", {
                d: "M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3",
              }),
              (0, r.jsx)("polyline", { points: "16 16 12 12 8 16" }),
            ],
          }),
        a8 = () =>
          (0, r.jsxs)("svg", {
            className: "mb-3",
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
              (0, r.jsx)("path", {
                d: "M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z",
              }),
              (0, r.jsx)("polyline", { points: "13 2 13 9 20 9" }),
            ],
          }),
        re = (e) => {
          var t, n, a, o, i, l, s, d, u, c;
          let { block: p, onSubmit: m, defaultValue: b, hasGuestAvatar: g } = e,
            [h, f] = (0, y.useState)(null != b ? b : ""),
            v = (0, y.useRef)(null),
            w = () => {
              var e;
              return (
                "" !== h &&
                (null == (e = v.current) ? void 0 : e.reportValidity())
              );
            },
            I = () => {
              w() && m({ value: h });
            };
          return (0, r.jsxs)("div", {
            className:
              "flex items-end justify-between rounded-lg pr-2 typebot-input w-full",
            "data-testid": "input",
            style: { marginRight: g ? "50px" : "0.5rem", maxWidth: "350px" },
            onKeyDown: (e) => {
              "Enter" === e.key && I();
            },
            children: [
              (0, r.jsx)(aM, {
                ref: v,
                value: h,
                placeholder:
                  null !=
                  (d =
                    null == (n = p.options) || null == (t = n.labels)
                      ? void 0
                      : t.placeholder)
                    ? d
                    : "Type your answer...",
                onChange: (e) => f(e),
                type: "number",
                style: { appearance: "auto" },
                min: null == (a = p.options) ? void 0 : a.min,
                max: null == (o = p.options) ? void 0 : o.max,
                step:
                  null != (u = null == (i = p.options) ? void 0 : i.step)
                    ? u
                    : "any",
              }),
              (0, r.jsx)(aB, {
                type: "button",
                label:
                  null !=
                  (c =
                    null == (s = p.options) || null == (l = s.labels)
                      ? void 0
                      : l.button)
                    ? c
                    : "Send",
                isDisabled: "" === h,
                className: "my-2 ml-2",
                onClick: I,
              }),
            ],
          });
        },
        rt = (e) =>
          new Promise((t) => {
            if (e.getElementById("stripe-script")) return t();
            let n = e.createElement("script");
            (n.src = "https://js.stripe.com/v3"),
              (n.id = "stripe-script"),
              e.body.appendChild(n),
              (n.onload = () => {
                t();
              });
          }),
        rn = (e) => {
          let { apiHost: t, isPreview: n, inputOptions: a, variables: r } = e;
          return (0, o.w$)({
            url: "".concat(t, "/api/integrations/stripe/createPaymentIntent"),
            method: "POST",
            body: { inputOptions: a, isPreview: n, variables: r },
          });
        },
        ra = (e) => {
          let { options: t, onSuccess: n } = e,
            {
              apiHost: a,
              isPreview: o,
              typebot: { variables: i },
              onNewLog: l,
            } = ae(),
            [s, d] = (0, y.useState)(null),
            [u, c] = (0, y.useState)(""),
            [p, m] = (0, y.useState)("");
          return (
            (0, y.useEffect)(() => {
              (async () => {
                var e;
                let { data: n, error: r } = await rn({
                  apiHost: a,
                  isPreview: o,
                  variables: i,
                  inputOptions: t,
                });
                if (r)
                  return l({
                    status: "error",
                    description: r.name + " " + r.message,
                    details: r.message,
                  });
                !n ||
                  !document ||
                  (await rt(document),
                  (null == (e = window) ? void 0 : e.Stripe) &&
                    (d(window.Stripe(n.publicKey)),
                    c(n.clientSecret),
                    m(n.amountLabel)));
              })();
            }, []),
            s && u
              ? (0, r.jsx)(nJ.Elements, {
                  stripe: s,
                  options: { clientSecret: u },
                  children: (0, r.jsx)(rr, {
                    onSuccess: n,
                    clientSecret: u,
                    amountLabel: p,
                    options: t,
                    variables: i,
                    viewerHost: a,
                  }),
                })
              : (0, r.jsx)(az, { className: "text-blue-500" })
          );
        },
        rr = (e) => {
          var t;
          let {
              onSuccess: n,
              clientSecret: a,
              amountLabel: o,
              options: i,
              variables: l,
              viewerHost: s,
            } = e,
            { scroll: d } = ac(),
            [u, c] = (0, y.useState)(!0),
            p = (0, nJ.useStripe)(),
            m = (0, nJ.useElements)(),
            [b, g] = (0, y.useState)(),
            [h, f] = (0, y.useState)(!1),
            [v, w] = (0, y.useState)(!1);
          return (
            (0, y.useEffect)(() => {
              if (!(!p || !a)) {
                if (u) return c(!1);
                p.retrievePaymentIntent(a).then((e) => {
                  let { paymentIntent: t } = e;
                  switch (null == t ? void 0 : t.status) {
                    case "succeeded":
                      g("Payment succeeded!");
                      break;
                    case "processing":
                      g("Your payment is processing.");
                      break;
                    case "requires_payment_method":
                      g("Your payment was not successful, please try again.");
                      break;
                    default:
                      g("Something went wrong.");
                  }
                });
              }
            }, [p, a]),
            (0, r.jsxs)("form", {
              id: "payment-form",
              onSubmit: async (e) => {
                var t, a, r, o, d;
                if ((e.preventDefault(), !p || !m)) return;
                f(!0);
                let { error: u, paymentIntent: c } = await p.confirmPayment({
                  elements: m,
                  confirmParams: {
                    return_url: s,
                    payment_method_data: {
                      billing_details: {
                        name: (
                          null == i || null == (t = i.additionalInformation)
                            ? void 0
                            : t.name
                        )
                          ? nQ(l)(i.additionalInformation.name)
                          : void 0,
                        email: (
                          null == i || null == (a = i.additionalInformation)
                            ? void 0
                            : a.email
                        )
                          ? nQ(l)(
                              null == (r = i.additionalInformation)
                                ? void 0
                                : r.email
                            )
                          : void 0,
                        phone: (
                          null == i || null == (o = i.additionalInformation)
                            ? void 0
                            : o.phoneNumber
                        )
                          ? nQ(l)(
                              null == (d = i.additionalInformation)
                                ? void 0
                                : d.phoneNumber
                            )
                          : void 0,
                      },
                    },
                  },
                  redirect: "if_required",
                });
                if (
                  (f(!1), (null == u ? void 0 : u.type) !== "validation_error")
                ) {
                  if ((null == u ? void 0 : u.type) === "card_error")
                    return g(u.message);
                  if (!u && "succeeded" === c.status) return n();
                }
              },
              className:
                "flex flex-col rounded-lg p-4 typebot-input w-full items-center",
              children: [
                (0, r.jsx)(nJ.PaymentElement, {
                  id: "payment-element",
                  className: "w-full",
                  onReady: () => {
                    w(!0), d();
                  },
                }),
                v &&
                  (0, r.jsx)(aB, {
                    label: ""
                      .concat(
                        null == i || null == (t = i.labels) ? void 0 : t.button,
                        " "
                      )
                      .concat(o),
                    isDisabled: h || !p || !m,
                    isLoading: h,
                    className: "mt-4 w-full max-w-lg",
                    disableIcon: !0,
                  }),
                b &&
                  (0, r.jsx)("div", {
                    id: "payment-message",
                    className: "typebot-input-error-message mt-4 text-center",
                    children: b,
                  }),
              ],
            })
          );
        },
        ro = (e) => {
          let { onSuccess: t, options: n } = e;
          switch (null == n ? void 0 : n.provider) {
            case void 0:
            case nY.STRIPE:
              return (0, r.jsx)(ra, { onSuccess: t, options: n });
          }
        },
        ri = (e) => {
          var t, n, a, i, l, s, d, u, c, p;
          let { block: m, onSubmit: b } = e,
            [g, h] = (0, y.useState)(),
            f = (e) => {
              var t;
              (null == (t = m.options) ? void 0 : t.isOneClickSubmitEnabled) &&
                b({ value: e.toString() }),
                h(e);
            };
          return (0, r.jsxs)("form", {
            className: "flex flex-col",
            onSubmit: (e) => {
              e.preventDefault(), (0, o.pN)(g) || b({ value: g.toString() });
            },
            children: [
              (null == (n = m.options) || null == (t = n.labels)
                ? void 0
                : t.left) &&
                (0, r.jsx)("span", {
                  className: "text-sm w-full mb-2 rating-label",
                  children: m.options.labels.left,
                }),
              (0, r.jsx)("div", {
                className: "flex flex-wrap justify-center",
                children: Array.from(
                  Array(
                    (null != (c = null == (a = m.options) ? void 0 : a.length)
                      ? c
                      : n$.length) +
                      +(
                        (null == (i = m.options) ? void 0 : i.buttonType) ===
                        "Numbers"
                      )
                  )
                ).map((e, t) => {
                  var n;
                  return (0, y.createElement)(rl, {
                    ...m.options,
                    key: t,
                    rating: g,
                    idx:
                      t +
                      +(
                        (null == (n = m.options) ? void 0 : n.buttonType) !==
                        "Numbers"
                      ),
                    onClick: f,
                  });
                }),
              }),
              (null == (s = m.options) || null == (l = s.labels)
                ? void 0
                : l.right) &&
                (0, r.jsx)("span", {
                  className: "text-sm w-full text-right mb-2 pr-2 rating-label",
                  children: m.options.labels.right,
                }),
              (0, r.jsx)("div", {
                className: "flex justify-end mr-2",
                children:
                  (0, o.O9)(g) &&
                  (0, r.jsx)(aB, {
                    label:
                      null !=
                      (p =
                        null == (u = m.options) || null == (d = u.labels)
                          ? void 0
                          : d.button)
                        ? p
                        : "Send",
                    disableIcon: !0,
                  }),
              }),
            ],
          });
        },
        rl = (e) => {
          let {
            rating: t,
            idx: n,
            buttonType: a,
            customIcon: i,
            onClick: l,
          } = e;
          return "Numbers" === a
            ? (0, r.jsx)("button", {
                onClick: (e) => {
                  e.preventDefault(), l(n);
                },
                className:
                  "py-2 px-4 mr-2 mb-2 text-left font-semibold rounded-md transition-all filter hover:brightness-90 active:brightness-75 duration-100 focus:outline-none typebot-button " +
                  ((0, o.O9)(t) && n <= t ? "" : "selectable"),
                children: n,
              })
            : (0, r.jsx)("div", {
                className:
                  "flex justify-center items-center rating-icon-container cursor-pointer mr-2 mb-2 " +
                  ((0, o.O9)(t) && n <= t ? "selected" : ""),
                onClick: () => l(n),
                dangerouslySetInnerHTML: {
                  __html:
                    (null == i ? void 0 : i.isEnabled) && !(0, o.Im)(i.svg)
                      ? i.svg
                      : rs,
                },
              });
        },
        rs =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>',
        rd = y.forwardRef(function (e, t) {
          let { onChange: n, ...a } = e;
          return (0,
          r.jsx)("textarea", { ref: t, className: "focus:outline-none bg-transparent px-4 py-4 flex-1 w-full text-input", rows: 6, "data-testid": "textarea", required: !0, style: { fontSize: "16px" }, autoFocus: !ap, onChange: (e) => n(e.target.value), ...a });
        }),
        ru = (e) => {
          var t, n, a, o, i, l, s, d, u, c;
          let { block: p, onSubmit: m, defaultValue: b, hasGuestAvatar: g } = e,
            [h, f] = (0, y.useState)(null != b ? b : ""),
            v = (0, y.useRef)(null),
            w = null == (t = p.options) ? void 0 : t.isLong,
            I = (e) => f(e),
            x = () => {
              var e;
              return (
                "" !== h &&
                (null == (e = v.current) ? void 0 : e.reportValidity())
              );
            },
            E = () => {
              x() && m({ value: h });
            };
          return (0, r.jsxs)("div", {
            className:
              "flex items-end justify-between rounded-lg pr-2 typebot-input w-full",
            "data-testid": "input",
            style: {
              marginRight: g ? "50px" : "0.5rem",
              maxWidth: w ? void 0 : "350px",
            },
            onKeyDown: (e) => {
              w || ("Enter" === e.key && E());
            },
            children: [
              w
                ? (0, r.jsx)(rd, {
                    ref: v,
                    onChange: I,
                    value: h,
                    placeholder:
                      null !=
                      (d =
                        null == (a = p.options) || null == (n = a.labels)
                          ? void 0
                          : n.placeholder)
                        ? d
                        : "Type your answer...",
                  })
                : (0, r.jsx)(aM, {
                    ref: v,
                    onChange: I,
                    value: h,
                    placeholder:
                      null !=
                      (u =
                        null == (i = p.options) || null == (o = i.labels)
                          ? void 0
                          : o.placeholder)
                        ? u
                        : "Type your answer...",
                  }),
              (0, r.jsx)(aB, {
                type: "button",
                label:
                  null !=
                  (c =
                    null == (s = p.options) || null == (l = s.labels)
                      ? void 0
                      : l.button)
                    ? c
                    : "Send",
                isDisabled: "" === h,
                className: "my-2 ml-2",
                onClick: E,
              }),
            ],
          });
        },
        rc = (e) => {
          let { message: t, showAvatar: n, avatarSrc: a } = e,
            [o] = (0, y.useState)(t);
          return (0, r.jsx)(nG.A, {
            classNames: "bubble",
            timeout: 1e3,
            children: (0, r.jsxs)("div", {
              className: "flex justify-end mb-2 items-end",
              style: { marginLeft: "50px" },
              children: [
                (0, r.jsx)("span", {
                  className:
                    "px-4 py-2 rounded-lg mr-2 whitespace-pre-wrap max-w-full typebot-guest-bubble cursor-pointer",
                  "data-testid": "guest-bubble",
                  children: o,
                }),
                n && (0, r.jsx)(a1, { avatarSrc: a }),
              ],
            }),
          });
        },
        rp = (e) => {
          var t, n, a, i, l, s, d, u, c;
          let {
              block: p,
              hasAvatar: b,
              hasGuestAvatar: g,
              onTransitionEnd: h,
              onSkip: f,
            } = e,
            { typebot: w, isLoading: I } = ae(),
            { addAnswer: x } = n4(),
            [E, _] = (0, y.useState)(),
            [T, C] = (0, y.useState)(!1),
            { variableId: S } = null != (a = p.options) ? a : {},
            k =
              (null !=
              (i =
                null == (t = w.settings.general)
                  ? void 0
                  : t.isInputPrefillEnabled)
                ? i
                : m.L6.general.isInputPrefillEnabled) && S
                ? null ==
                  (n = w.variables.find((e) => {
                    var t;
                    return (
                      e.name ===
                      (null == (t = w.variables.find((0, o.$H)(S)))
                        ? void 0
                        : t.name)
                    );
                  }))
                  ? void 0
                  : n.value
                : void 0,
            N = async (e) => {
              let { label: t, value: n, itemId: a } = e;
              _(null != t ? t : n);
              let r = !aJ(n, p.type);
              if (!r && x) {
                let { group: e } = nW(p.id, w.groups);
                await x(w.variables)({
                  blockId: p.id,
                  groupId: e.id,
                  content: n,
                  variableId: S,
                  uploadedFiles: p.type === v.FILE,
                });
              }
              T || h({ label: t, value: n, itemId: a }, r), C(!1);
            };
          if (I) return null;
          if (E) {
            let e =
              null == (s = w.theme.chat) || null == (l = s.guestAvatar)
                ? void 0
                : l.url;
            return (0, r.jsx)(rc, {
              message: E,
              showAvatar:
                null !=
                  (c =
                    null == (u = w.theme.chat) || null == (d = u.guestAvatar)
                      ? void 0
                      : d.isEnabled) && c,
              avatarSrc: e && nQ(w.variables)(e),
            });
          }
          return (0, r.jsxs)("div", {
            className: "flex justify-end",
            children: [
              b &&
                (0, r.jsx)("div", {
                  className:
                    "flex w-6 xs:w-10 h-6 xs:h-10 mr-2 mb-2 mt-1 flex-shrink-0 items-center",
                }),
              (0, r.jsx)(rm, {
                block: p,
                onSubmit: N,
                onSkip: f,
                defaultValue: null == k ? void 0 : k.toString(),
                hasGuestAvatar: g,
              }),
            ],
          });
        },
        rm = (e) => {
          let {
            block: t,
            onSubmit: n,
            onSkip: a,
            defaultValue: o,
            hasGuestAvatar: i,
          } = e;
          switch (t.type) {
            case v.TEXT:
              return (0, r.jsx)(ru, {
                block: t,
                onSubmit: n,
                defaultValue: o,
                hasGuestAvatar: i,
              });
            case v.NUMBER:
              return (0, r.jsx)(re, {
                block: t,
                onSubmit: n,
                defaultValue: o,
                hasGuestAvatar: i,
              });
            case v.EMAIL:
              return (0, r.jsx)(aH, {
                block: t,
                onSubmit: n,
                defaultValue: o,
                hasGuestAvatar: i,
              });
            case v.URL:
              return (0, r.jsx)(aq, {
                block: t,
                onSubmit: n,
                defaultValue: o,
                hasGuestAvatar: i,
              });
            case v.PHONE:
              return (0, r.jsx)(aF, {
                block: t,
                onSubmit: n,
                defaultValue: o,
                hasGuestAvatar: i,
              });
            case v.DATE:
              return (0, r.jsx)(a4, { options: t.options, onSubmit: n });
            case v.CHOICE:
              return (0, r.jsx)(a5, { block: t, onSubmit: n });
            case v.PAYMENT:
              return (0, r.jsx)(ro, {
                options: t.options,
                onSuccess: () => {
                  var e, a, r;
                  return n({
                    value:
                      null !=
                      (r =
                        null == (a = t.options) || null == (e = a.labels)
                          ? void 0
                          : e.success)
                        ? r
                        : "Success",
                  });
                },
              });
            case v.RATING:
              return (0, r.jsx)(ri, { block: t, onSubmit: n });
            case v.FILE:
              return (0, r.jsx)(a6, { block: t, onSubmit: n, onSkip: a });
            default:
              return null;
          }
        },
        rb = () =>
          (0, r.jsxs)("div", {
            className: "flex items-center",
            children: [
              (0, r.jsx)("div", {
                className: "w-2 h-2 mr-1 rounded-full bubble1",
              }),
              (0, r.jsx)("div", {
                className: "w-2 h-2 mr-1 rounded-full bubble2",
              }),
              (0, r.jsx)("div", { className: "w-2 h-2 rounded-full bubble3" }),
            ],
          }),
        rg = (e) => {
          let { url: t, onTransitionEnd: n } = e,
            { typebot: a, isLoading: o } = ae(),
            i = (0, y.useRef)(null),
            [l, s] = (0, y.useState)(!0),
            [d] = (0, y.useState)(nQ(a.variables)(t));
          return (
            (0, y.useEffect)(() => {
              if (!l || o) return;
              let e = setTimeout(() => {
                s(!1),
                  setTimeout(() => {
                    n();
                  }, 400);
              }, 500);
              return () => {
                clearTimeout(e);
              };
            }, [o, l, n]),
            (0, r.jsx)("div", {
              className: "flex flex-col",
              children: (0, r.jsx)("div", {
                className: "flex mb-2 w-full lg:w-11/12 items-center",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex relative z-10 items-start typebot-host-bubble",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "flex items-center absolute px-4 py-2 rounded-lg bubble-typing z-10 ",
                      style: {
                        width: l ? "4rem" : "100%",
                        height: l ? "2rem" : "100%",
                      },
                      children: l ? (0, r.jsx)(rb, {}) : null,
                    }),
                    (0, r.jsx)("audio", {
                      ref: i,
                      src: d,
                      className:
                        "z-10 content-opacity m-2 " +
                        (l ? "opacity-0" : "opacity-100"),
                      style: { height: l ? "2rem" : "revert" },
                      autoPlay: !0,
                      controls: !0,
                    }),
                  ],
                }),
              }),
            })
          );
        },
        rh = (e) => {
          var t, n;
          let { block: a, onTransitionEnd: o } = e,
            { typebot: i, isLoading: l } = ae(),
            s = (0, y.useRef)(null),
            [d, u] = (0, y.useState)(!0),
            [c] = (0, y.useState)(
              nQ(i.variables)(null == (t = a.content) ? void 0 : t.url)
            ),
            p = (0, y.useCallback)(() => {
              u(!1),
                setTimeout(() => {
                  o();
                }, 400);
            }, [o]);
          (0, y.useEffect)(() => {
            if (!d || l) return;
            let e = setTimeout(() => {
              u(!1), p();
            }, 1e3);
            return () => {
              clearTimeout(e);
            };
          }, [l, d, p]);
          let m = (null == (n = a.content) ? void 0 : n.height)
            ? "string" == typeof a.content.height
              ? nQ(i.variables)(a.content.height) + "px"
              : a.content.height
            : "2rem";
          return (0, r.jsx)("div", {
            className: "flex flex-col w-full",
            ref: s,
            children: (0, r.jsx)("div", {
              className: "flex mb-2 w-full lg:w-11/12 items-center",
              children: (0, r.jsxs)("div", {
                className:
                  "flex relative z-10 items-start typebot-host-bubble w-full",
                children: [
                  (0, r.jsx)("div", {
                    className:
                      "flex items-center absolute px-4 py-2 rounded-lg bubble-typing z-10 ",
                    style: {
                      width: d ? "4rem" : "100%",
                      height: d ? "2rem" : "100%",
                    },
                    children: d
                      ? (0, r.jsx)(rb, {})
                      : (0, r.jsx)(r.Fragment, {}),
                  }),
                  (0, r.jsx)("iframe", {
                    id: "embed-bubble-content",
                    src: c,
                    className:
                      "w-full z-20 p-4 content-opacity " +
                      (d ? "opacity-0" : "opacity-100"),
                    style: { height: d ? "2rem" : m, borderRadius: "15px" },
                  }),
                ],
              }),
            }),
          });
        },
        ry = (e) => {
          var t;
          let { block: n, onTransitionEnd: a } = e,
            { typebot: o, isLoading: i } = ae(),
            l = (0, y.useRef)(null),
            s = (0, y.useRef)(null),
            [d, u] = (0, y.useState)(!0),
            [c] = (0, y.useState)(
              nQ(o.variables)(null == (t = n.content) ? void 0 : t.url)
            ),
            p = (0, y.useCallback)(() => {
              u(!1),
                setTimeout(() => {
                  a();
                }, 400);
            }, [a]);
          return (
            (0, y.useEffect)(() => {
              if (!d || i) return;
              let e = setTimeout(() => {
                u(!1), p();
              }, 5e3);
              return () => {
                clearTimeout(e);
              };
            }, [i, d, p]),
            (0, y.useEffect)(() => {
              let e = s.current;
              if (!(!e || i || !d))
                return (
                  (e.onload = () => {
                    u(!1), p();
                  }),
                  () => {
                    e.onload = null;
                  }
                );
            }, [i, d, p]),
            (0, r.jsx)("div", {
              className: "flex flex-col",
              ref: l,
              children: (0, r.jsx)("div", {
                className: "flex mb-2 w-full lg:w-11/12 items-center",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex relative z-10 items-start typebot-host-bubble",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "flex items-center absolute px-4 py-2 rounded-lg bubble-typing z-10 ",
                      style: {
                        width: d ? "4rem" : "100%",
                        height: d ? "2rem" : "100%",
                      },
                      children: d ? (0, r.jsx)(rb, {}) : null,
                    }),
                    (0, r.jsx)("img", {
                      ref: s,
                      src: c,
                      className:
                        "p-4 content-opacity z-10 w-auto rounded-lg " +
                        (d ? "opacity-0" : "opacity-100"),
                      style: {
                        maxHeight: "32rem",
                        height: d ? "2rem" : "auto",
                        maxWidth: "100%",
                      },
                      alt: "Bubble image",
                    }),
                  ],
                }),
              }),
            })
          );
        },
        rf = (e) => {
          var t, n, a, r, o;
          let { bubbleContent: i, typingSettings: l } = e,
            s =
              null != (n = null == (t = i.match(/(\w+)/g)) ? void 0 : t.length)
                ? n
                : 0;
          0 === s && (s = i.length);
          let {
              enabled: d,
              speed: u,
              maxDelay: c,
            } = {
              enabled:
                null != (a = null == l ? void 0 : l.enabled)
                  ? a
                  : m.L6.typingEmulation.enabled,
              speed:
                null != (r = null == l ? void 0 : l.speed)
                  ? r
                  : m.L6.typingEmulation.speed,
              maxDelay:
                null != (o = null == l ? void 0 : l.maxDelay)
                  ? o
                  : m.L6.typingEmulation.maxDelay,
            },
            p = d ? (s / u) * 6e4 : 0;
          return p > 1e3 * c && (p = 1e3 * c), p;
        },
        rv = (e) => {
          var t, n, a;
          let { block: o, onTransitionEnd: i } = e,
            { typebot: l, isLoading: s } = ae(),
            d = (0, y.useRef)(null),
            [u, c] = (0, y.useState)(!0),
            [p] = (0, y.useState)(
              nQ(l.variables)(null == (t = o.content) ? void 0 : t.html)
            ),
            m = (0, y.useCallback)(() => {
              c(!1),
                setTimeout(() => {
                  i();
                }, 400);
            }, [i]);
          return (
            (0, y.useEffect)(() => {
              var e, t, n;
              if (!u || s) return;
              let a = setTimeout(() => {
                m();
              }, rf({ bubbleContent: null != (n = null == (e = o.content) ? void 0 : e.plainText) ? n : "", typingSettings: null == (t = l.settings) ? void 0 : t.typingEmulation }));
              return () => {
                clearTimeout(a);
              };
            }, [
              null == (n = o.content) ? void 0 : n.plainText,
              s,
              u,
              m,
              null == (a = l.settings) ? void 0 : a.typingEmulation,
            ]),
            (0, r.jsx)("div", {
              className: "flex flex-col",
              ref: d,
              children: (0, r.jsx)("div", {
                className: "flex mb-2 w-full items-center",
                children: (0, r.jsxs)("div", {
                  className: "flex relative items-start typebot-host-bubble",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "flex items-center absolute px-4 py-2 rounded-lg bubble-typing ",
                      style: {
                        width: u ? "4rem" : "100%",
                        height: u ? "2rem" : "100%",
                      },
                      "data-testid": "host-bubble",
                      children: u ? (0, r.jsx)(rb, {}) : null,
                    }),
                    o.type === f.TEXT &&
                      (0, r.jsx)("p", {
                        style: { textOverflow: "ellipsis" },
                        className:
                          "overflow-hidden content-opacity mx-4 my-2 whitespace-pre-wrap slate-html-container relative " +
                          (u ? "opacity-0 h-6" : "opacity-100 h-full"),
                        dangerouslySetInnerHTML: { __html: p },
                      }),
                  ],
                }),
              }),
            })
          );
        },
        rw = (e) => {
          let { block: t, onTransitionEnd: n } = e,
            { typebot: a, isLoading: o } = ae(),
            i = (0, y.useRef)(null),
            [l, s] = (0, y.useState)(!0),
            d = (0, y.useCallback)(() => {
              s(!1),
                setTimeout(() => {
                  n();
                }, 400);
            }, [n]);
          return (
            (0, y.useEffect)(() => {
              if (!l || o) return;
              let e = setTimeout(() => {
                s(!1), d();
              }, 1e3);
              return () => {
                clearTimeout(e);
              };
            }, [o, l, d]),
            (0, r.jsx)("div", {
              className: "flex flex-col",
              ref: i,
              children: (0, r.jsx)("div", {
                className: "flex mb-2 w-full lg:w-11/12 items-center",
                children: (0, r.jsxs)("div", {
                  className:
                    "flex relative z-10 items-start typebot-host-bubble",
                  children: [
                    (0, r.jsx)("div", {
                      className:
                        "flex items-center absolute px-4 py-2 rounded-lg bubble-typing z-10 ",
                      style: {
                        width: l ? "4rem" : "100%",
                        height: l ? "2rem" : "100%",
                      },
                      children: l
                        ? (0, r.jsx)(rb, {})
                        : (0, r.jsx)(r.Fragment, {}),
                    }),
                    (0, r.jsx)(rI, {
                      content: t.content,
                      isTyping: l,
                      variables: a.variables,
                    }),
                  ],
                }),
              }),
            })
          );
        },
        rI = (e) => {
          let { content: t, isTyping: n, variables: a } = e,
            [o] = (0, y.useState)(nQ(a)(null == t ? void 0 : t.url));
          if (!(null == t ? void 0 : t.type)) return (0, r.jsx)(r.Fragment, {});
          switch (t.type) {
            case eV.URL: {
              let e = window.navigator.vendor.match(/apple/i);
              return (0, r.jsxs)("video", {
                controls: !0,
                className:
                  "p-4 focus:outline-none w-full z-10 content-opacity rounded-md " +
                  (n ? "opacity-0" : "opacity-100"),
                style: {
                  height: n ? "2rem" : "auto",
                  maxHeight: e ? "40vh" : "",
                },
                autoPlay: !0,
                children: [
                  (0, r.jsx)("source", { src: o, type: "video/mp4" }),
                  "Sorry, your browser doesn't support embedded videos.",
                ],
              });
            }
            case eV.VIMEO:
            case eV.YOUTUBE: {
              let e =
                t.type === eV.VIMEO
                  ? "https://player.vimeo.com/video"
                  : "https://www.youtube.com/embed";
              return (0, r.jsx)("iframe", {
                src: "".concat(e, "/").concat(t.id),
                className:
                  "w-full p-4 content-opacity z-10 rounded-md " +
                  (n ? "opacity-0" : "opacity-100"),
                height: n ? "2rem" : "200px",
                allow:
                  "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                allowFullScreen: !0,
              });
            }
            default:
              return null;
          }
        },
        rx = (e) => {
          let { block: t, onTransitionEnd: n } = e;
          switch (t.type) {
            case f.TEXT:
              return (0, r.jsx)(rv, { block: t, onTransitionEnd: n });
            case f.IMAGE:
              return (0, r.jsx)(ry, { block: t, onTransitionEnd: n });
            case f.VIDEO:
              return (0, r.jsx)(rw, { block: t, onTransitionEnd: n });
            case f.EMBED:
              return (0, r.jsx)(rh, { block: t, onTransitionEnd: n });
            case f.AUDIO:
              var a;
              return (0, r.jsx)(rg, {
                url: null == (a = t.content) ? void 0 : a.url,
                onTransitionEnd: n,
              });
          }
        },
        rE = (e) => {
          var t, n;
          let {
              blocks: a,
              startBlockIndex: i,
              groupTitle: l,
              onGroupEnd: s,
              keepShowingHostAvatar: d,
            } = e,
            {
              currentTypebotId: u,
              typebot: c,
              updateVariableValue: p,
              createEdge: m,
              apiHost: b,
              isPreview: g,
              parentTypebotIds: h,
              onNewLog: f,
              injectLinkedTypebot: v,
              linkedTypebots: w,
              setCurrentTypebotId: x,
              pushEdgeIdInLinkedTypebotQueue: E,
              pushParentTypebotId: _,
            } = ae(),
            { resultValues: T, updateVariables: C, resultId: S } = n4(),
            { scroll: k } = ac(),
            [N, A] = (0, y.useState)([]),
            [P, R] = (0, y.useState)([]),
            [j, L] = (0, y.useState)(),
            U = (e) => {
              if ((A([...N, e]), nj(e))) {
                let t = n9(N);
                t && nV(t)
                  ? R(
                      P.map((t, n) =>
                        n === P.length - 1 ? { bubbles: [...t.bubbles, e] } : t
                      )
                    )
                  : R([...P, { bubbles: [e] }]);
              }
              nR(e) &&
                (0 === P.length || (0, o.O9)(P[P.length - 1].input)
                  ? R([...P, { bubbles: [], input: e }])
                  : R(
                      P.map((t, n) =>
                        n === P.length - 1 ? { ...t, input: e } : t
                      )
                    ));
            };
          (0, y.useEffect)(() => {
            let e = a[i];
            e && U(e);
          }, []),
            (0, y.useEffect)(() => {
              k(), O();
            }, [N]);
          let O = async () => {
              let e = [...N].pop();
              if (e) {
                if (nL(e)) {
                  var t;
                  let {
                    nextEdgeId: n,
                    linkedTypebot: a,
                    blockedPopupUrl: r,
                  } = await aV(e, {
                    isPreview: g,
                    apiHost: b,
                    typebot: c,
                    linkedTypebots: w,
                    updateVariableValue: p,
                    updateVariables: C,
                    injectLinkedTypebot: v,
                    onNewLog: f,
                    createEdge: m,
                    setCurrentTypebotId: x,
                    pushEdgeIdInLinkedTypebotQueue: E,
                    currentTypebotId: u,
                    pushParentTypebotId: _,
                  });
                  if (
                    (r && L(r),
                    e.type === I.REDIRECT &&
                      (null == (t = e.options) ? void 0 : t.isNewTab) === !1)
                  )
                    return;
                  n ? s({ edgeId: n, updatedTypebot: a }) : V();
                }
                if (nO(e)) {
                  let { group: t } = nW(e.id, c.groups),
                    n = await aC({
                      block: e,
                      context: {
                        apiHost: b,
                        typebotId: u,
                        groupId: t.id,
                        blockId: e.id,
                        variables: c.variables,
                        isPreview: g,
                        updateVariableValue: p,
                        updateVariables: C,
                        resultValues: T,
                        groups: c.groups,
                        onNewLog: f,
                        resultId: S,
                        parentTypebotIds: h,
                      },
                    });
                  n ? s({ edgeId: n }) : V();
                }
                "start" === e.type && s({ edgeId: e.outgoingEdgeId });
              }
            },
            V = (e, t) => {
              k();
              let n = [...N].pop();
              if (n) {
                var r, l, d;
                if (t && a$(n)) {
                  let { group: e } = nW(n.id, c.groups);
                  return U(aQ(n, e.id, c.variables, m));
                }
                if (
                  (nR(n) &&
                    (null == (r = n.options) ? void 0 : r.variableId) &&
                    e &&
                    p(n.options.variableId, e.value),
                  nU(n) &&
                    !(null == (l = n.options) ? void 0 : l.isMultipleChoice))
                ) {
                  let t =
                    null ==
                    (d = n.items.find((0, o.$H)(null == e ? void 0 : e.itemId)))
                      ? void 0
                      : d.outgoingEdgeId;
                  if (t) return s({ edgeId: t });
                }
                if (
                  (null == n ? void 0 : n.outgoingEdgeId) ||
                  N.length === a.length
                )
                  return s({ edgeId: n.outgoingEdgeId });
              }
              let u = a[N.length + i];
              u ? U(u) : s({});
            },
            D =
              null == (n = c.theme.chat) || null == (t = n.hostAvatar)
                ? void 0
                : t.url;
          return (0, r.jsx)("div", {
            className: "flex w-full",
            "data-group-name": l,
            children: (0, r.jsx)("div", {
              className: "flex flex-col w-full min-w-0",
              children: P.map((e, t) => {
                var n, a, o, i, l, s;
                return (0, r.jsx)(
                  r_,
                  {
                    displayChunk: e,
                    hostAvatar: {
                      isEnabled:
                        null ==
                          (l =
                            null == (a = c.theme.chat) ||
                            null == (n = a.hostAvatar)
                              ? void 0
                              : n.isEnabled) || l,
                      src: D && nQ(c.variables)(D),
                    },
                    hasGuestAvatar:
                      null !=
                        (s =
                          null == (i = c.theme.chat) ||
                          null == (o = i.guestAvatar)
                            ? void 0
                            : o.isEnabled) && s,
                    onDisplayNextBlock: V,
                    keepShowingHostAvatar: d,
                    blockedPopupUrl: j,
                    onBlockedPopupLinkClick: () => L(void 0),
                  },
                  t
                );
              }),
            }),
          });
        },
        r_ = (e) => {
          let {
              displayChunk: { bubbles: t, input: n },
              hostAvatar: a,
              hasGuestAvatar: i,
              keepShowingHostAvatar: l,
              blockedPopupUrl: s,
              onBlockedPopupLinkClick: d,
              onDisplayNextBlock: u,
            } = e,
            [c, p] = (0, y.useState)(!1),
            m = (0, y.useRef)();
          (0, y.useEffect)(() => {
            b();
          });
          let b = () => {
            var e;
            return null == (e = m.current) ? void 0 : e.refreshTopOffset();
          };
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("div", {
                className: "flex",
                children: [
                  a.isEnabled &&
                    t.length > 0 &&
                    (0, r.jsx)(a2, {
                      ref: m,
                      hostAvatarSrc: a.src,
                      keepShowing: (l || (0, o.O9)(n)) && !c,
                    }),
                  (0, r.jsx)("div", {
                    className: "flex-1",
                    style: { marginRight: i ? "50px" : "0.5rem" },
                    children: (0, r.jsx)(nF.A, {
                      children: t.map((e) =>
                        (0, r.jsx)(
                          nG.A,
                          {
                            classNames: "bubble",
                            timeout: 500,
                            unmountOnExit: !0,
                            children: (0, r.jsx)(rx, {
                              block: e,
                              onTransitionEnd: () => {
                                u(), b();
                              },
                            }),
                          },
                          e.id
                        )
                      ),
                    }),
                  }),
                ],
              }),
              !c &&
                (0, r.jsx)(nG.A, {
                  classNames: "bubble",
                  timeout: 500,
                  unmountOnExit: !0,
                  in: (0, o.O9)(n),
                  children: n
                    ? (0, r.jsx)(rp, {
                        block: n,
                        onTransitionEnd: u,
                        onSkip: () => {
                          u(), p(!0);
                        },
                        hasAvatar: a.isEnabled,
                        hasGuestAvatar: i,
                      })
                    : (0, r.jsx)("div", {}),
                }),
              s
                ? (0, r.jsx)("div", {
                    className: "flex justify-end",
                    children: (0, r.jsx)(aZ, { url: s, onLinkClick: d }),
                  })
                : null,
            ],
          });
        },
        rT = (e) => {
          let {
              theme: t,
              predefinedVariables: n,
              startGroupId: a,
              onNewGroupVisible: i,
              onCompleted: l,
            } = e,
            {
              typebot: s,
              updateVariableValue: d,
              linkedBotQueue: u,
              popEdgeIdFromLinkedTypebotQueue: c,
            } = ae(),
            [p, m] = (0, y.useState)([]),
            { updateVariables: b } = n4(),
            g = (0, y.useRef)(null),
            h = (0, y.useRef)(null),
            [f, v] = (0, y.useState)(!1),
            w = (e) => {
              let { edgeId: t, updatedTypebot: n, groupId: a } = e,
                r = null != n ? n : s;
              if (a) {
                let e = r.groups.find((0, o.$H)(a));
                return e
                  ? (i({
                      id: "edgeId",
                      from: { blockId: "block" },
                      to: { groupId: a },
                    }),
                    m([...p, { group: e, startBlockIndex: 0 }]))
                  : void 0;
              }
              let d = r.edges.find((0, o.$H)(t));
              if (!d) {
                if (u.length > 0) {
                  let e = u[0].edgeId;
                  c(), w({ edgeId: e });
                }
                return l();
              }
              let b = r.groups.find((0, o.$H)(d.to.groupId));
              if (!b) return l();
              let g = d.to.blockId
                ? b.blocks.findIndex((0, o.$H)(d.to.blockId))
                : 0;
              i(d), m([...p, { group: b, startBlockIndex: -1 === g ? 0 : g }]);
            };
          (0, y.useEffect)(() => {
            if (f) return;
            (0, o.O9)(n) && Object.keys(n).length > 0 && b(I(n)), v(!0);
            let e = s.groups[0].blocks[0].outgoingEdgeId;
            (e || a) && w({ edgeId: a ? void 0 : e, groupId: a });
          }, [n]);
          let I = (e) => {
            let t = [];
            return (
              Object.keys(e).forEach((n) => {
                let a = s.variables.find(
                  (e) => e.name.toLowerCase() === n.toLowerCase()
                );
                if (!e || (0, o.pN)(a)) return;
                let r = e[n];
                r &&
                  (d(null == a ? void 0 : a.id, r), t.push({ ...a, value: r }));
              }),
              t
            );
          };
          return (
            (0, y.useEffect)(() => {
              document && an(t, document.body.style);
            }, [t]),
            (0, r.jsxs)("div", {
              ref: h,
              className:
                "overflow-y-scroll w-full lg:w-3/4 min-h-full rounded lg:px-5 px-3 pt-10 relative scrollable-container typebot-chat-view",
              children: [
                (0, r.jsx)(au, {
                  onScroll: () => {
                    h.current &&
                      setTimeout(() => {
                        nD.Nk.scrollToBottom({
                          duration: 500,
                          container: h.current,
                        });
                      }, 1);
                  },
                  children: p.map((e, t) => {
                    let n = p[t + 1],
                      a = n && nR(n.group.blocks[n.startBlockIndex]);
                    return (0, r.jsx)(
                      rE,
                      {
                        blocks: e.group.blocks,
                        startBlockIndex: e.startBlockIndex,
                        onGroupEnd: w,
                        groupTitle: e.group.title,
                        keepShowingHostAvatar: t === p.length - 1 || a,
                      },
                      e.group.id + t
                    );
                  }),
                }),
                (0, r.jsx)("div", { className: "w-full h-32", ref: g }),
              ],
            })
          );
        },
        rC = () => {
          let e = (0, y.useRef)(null);
          return (
            (0, y.useEffect)(() => {
              if (!document) return;
              let t = document.querySelector('[data-testid="container"]'),
                n = new MutationObserver((n) => {
                  n.forEach((n) => {
                    n.removedNodes.forEach((n) => {
                      "lite-badge" === n.id && t.append(e.current);
                    });
                  });
                });
              return (
                n.observe(t, { subtree: !1, childList: !0 }),
                () => {
                  n.disconnect();
                }
              );
            }, []),
            (0, r.jsxs)("a", {
              ref: e,
              href: "https://www.typebot.io/?utm_source=litebadge",
              target: "_blank",
              rel: "noopener noreferrer",
              className:
                "fixed py-1 px-2 bg-white z-50 rounded shadow-md lite-badge",
              style: { bottom: "20px" },
              id: "lite-badge",
              children: [
                "Made with ",
                (0, r.jsx)("span", {
                  className: "text-blue-500",
                  children: "Typebot",
                }),
                ".",
              ],
            })
          );
        },
        rS = (e) => {
          var t, n, a, o, i, l, s, d;
          let {
              typebot: u,
              apiHost: c = g._.NEXT_PUBLIC_VIEWER_URL[0],
              isPreview: p = !1,
              isLoading: m = !1,
              resultId: b,
              startGroupId: f,
              predefinedVariables: v,
              onNewLog: w,
              onNewGroupVisible: I,
              onNewAnswer: x,
              onCompleted: E,
              onVariablesUpdated: _,
            } = e,
            T = (0, y.useMemo)(() => {
              var e, t, n;
              return (null == u ||
              null == (n = u.theme) ||
              null == (t = n.general) ||
              null == (e = t.background)
                ? void 0
                : e.type) === h.hK.COLOR
                ? u.theme.general.background.content
                : "transparent";
            }, [
              null == u || null == (n = u.theme) || null == (t = n.general)
                ? void 0
                : t.background,
            ]);
          return (0, r.jsxs)(r.Fragment, {
            children: [
              (0, r.jsxs)("style", {
                children: [
                  '/* CSS variables. */\n:root {\n  --PhoneInput-color--focus: #03b2cb;\n  --PhoneInputInternationalIconPhone-opacity: 0.8;\n  --PhoneInputInternationalIconGlobe-opacity: 0.65;\n  --PhoneInputCountrySelect-marginRight: 0.35em;\n  --PhoneInputCountrySelectArrow-width: 0.3em;\n  --PhoneInputCountrySelectArrow-marginLeft: var(\n    --PhoneInputCountrySelect-marginRight\n  );\n  --PhoneInputCountrySelectArrow-borderWidth: 1px;\n  --PhoneInputCountrySelectArrow-opacity: 0.45;\n  --PhoneInputCountrySelectArrow-color: currentColor;\n  --PhoneInputCountrySelectArrow-color--focus: var(--PhoneInput-color--focus);\n  --PhoneInputCountrySelectArrow-transform: rotate(45deg);\n  --PhoneInputCountryFlag-aspectRatio: 1.5;\n  --PhoneInputCountryFlag-height: 1em;\n  --PhoneInputCountryFlag-borderWidth: 1px;\n  --PhoneInputCountryFlag-borderColor: rgba(0, 0, 0, 0.5);\n  --PhoneInputCountryFlag-borderColor--focus: var(--PhoneInput-color--focus);\n  --PhoneInputCountryFlag-backgroundColor--loading: rgba(0, 0, 0, 0.1);\n}\n\n.PhoneInput {\n  /* This is done to stretch the contents of this component. */\n  display: flex;\n  align-items: center;\n}\n\n.PhoneInputInput {\n  /* The phone number input stretches to fill all empty space */\n  flex: 1;\n  /* The phone number input should shrink\n	   to make room for the extension input */\n  min-width: 0;\n}\n\n.PhoneInputCountryIcon {\n  width: calc(\n    var(--PhoneInputCountryFlag-height) *\n    var(--PhoneInputCountryFlag-aspectRatio)\n  );\n  height: var(--PhoneInputCountryFlag-height);\n}\n\n.PhoneInputCountryIcon--square {\n  width: var(--PhoneInputCountryFlag-height);\n}\n\n.PhoneInputCountryIcon--border {\n  /* Removed `background-color` because when an `<img/>` was still loading\n	   it would show a dark gray rectangle. */\n  /* For some reason the `<img/>` is not stretched to 100% width and height\n	   and sometime there can be seen white pixels of the background at top and bottom. */\n  background-color: var(--PhoneInputCountryFlag-backgroundColor--loading);\n  /* Border is added via `box-shadow` because `border` interferes with `width`/`height`. */\n  /* For some reason the `<img/>` is not stretched to 100% width and height\n	   and sometime there can be seen white pixels of the background at top and bottom,\n	   so an additional "inset" border is added. */\n  box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)\n    var(--PhoneInputCountryFlag-borderColor), inset 0 0 0\n    var(--PhoneInputCountryFlag-borderWidth)\n    var(--PhoneInputCountryFlag-borderColor);\n}\n\n.PhoneInputCountryIconImg {\n  /* Fixes weird vertical space above the flag icon. */\n  /* https://gitlab.com/catamphetamine/react-phone-number-input/-/issues/7#note_348586559 */\n  display: block;\n  /* 3rd party <SVG/> flag icons won\'t stretch if they have `width` and `height`.\n	   Also, if an <SVG/> icon\'s aspect ratio was different, it wouldn\'t fit too. */\n  width: 100%;\n  height: 100%;\n}\n\n.PhoneInputInternationalIconPhone {\n  opacity: var(--PhoneInputInternationalIconPhone-opacity);\n}\n\n.PhoneInputInternationalIconGlobe {\n  opacity: var(--PhoneInputInternationalIconGlobe-opacity);\n}\n\n/* Styling native country `<select/>`. */\n\n.PhoneInputCountry {\n  position: relative;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n  margin-right: var(--PhoneInputCountrySelect-marginRight);\n}\n\n.PhoneInputCountrySelect {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  border: 0;\n  opacity: 0;\n  cursor: pointer;\n}\n\n.PhoneInputCountrySelect[disabled],\n.PhoneInputCountrySelect[readonly] {\n  cursor: default;\n}\n\n.PhoneInputCountrySelectArrow {\n  display: block;\n  content: "";\n  width: var(--PhoneInputCountrySelectArrow-width);\n  height: var(--PhoneInputCountrySelectArrow-width);\n  margin-left: var(--PhoneInputCountrySelectArrow-marginLeft);\n  border-style: solid;\n  border-color: var(--PhoneInputCountrySelectArrow-color);\n  border-top-width: 0;\n  border-bottom-width: var(--PhoneInputCountrySelectArrow-borderWidth);\n  border-left-width: 0;\n  border-right-width: var(--PhoneInputCountrySelectArrow-borderWidth);\n  transform: var(--PhoneInputCountrySelectArrow-transform);\n  opacity: var(--PhoneInputCountrySelectArrow-opacity);\n}\n\n.PhoneInputCountrySelect:focus\n  + .PhoneInputCountryIcon\n  + .PhoneInputCountrySelectArrow {\n  opacity: 1;\n  color: var(--PhoneInputCountrySelectArrow-color--focus);\n}\n\n.PhoneInputCountrySelect:focus + .PhoneInputCountryIcon--border {\n  box-shadow: 0 0 0 var(--PhoneInputCountryFlag-borderWidth)\n    var(--PhoneInputCountryFlag-borderColor--focus), inset 0 0 0\n    var(--PhoneInputCountryFlag-borderWidth)\n    var(--PhoneInputCountryFlag-borderColor--focus);\n}\n\n.PhoneInputCountrySelect:focus\n  + .PhoneInputCountryIcon\n  .PhoneInputInternationalIconGlobe {\n  opacity: 1;\n  color: var(--PhoneInputCountrySelectArrow-color--focus);\n}\n\n.PhoneInputInput {\n  padding: 1rem 0.5rem;\n  outline: none !important;\n  background: transparent;\n  flex: 1 1 0%;\n  width: 100%;\n  font-size: 16px;\n}\n\n.PhoneInputCountry {\n  padding-left: 0.5rem;\n}\n\n.PhoneInputCountryIcon,\n.PhoneInputCountryIconImg {\n  border-radius: 3px;\n}\n\ninput.PhoneInputInput::-moz-placeholder {\n  color: var(--typebot-input-placeholder-color);\n}\n\ninput.PhoneInputInput::placeholder {\n  color: var(--typebot-input-placeholder-color);\n}\n',
                  "*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n  --tw-contain-size:  ;\n  --tw-contain-layout:  ;\n  --tw-contain-paint:  ;\n  --tw-contain-style:  ;\n}/*\n! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n7. Disable tap highlights on iOS\n*/\n\nhtml,\n:host {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n  -webkit-tap-highlight-color: transparent; /* 7 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font-family by default.\n2. Use the user's configured `mono` font-feature-settings by default.\n3. Use the user's configured `mono` font-variation-settings by default.\n4. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-feature-settings: normal; /* 2 */\n  font-variation-settings: normal; /* 3 */\n  font-size: 1em; /* 4 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  letter-spacing: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\ninput:where([type='button']),\ninput:where([type='reset']),\ninput:where([type='submit']) {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden]:where(:not([hidden=\"until-found\"])) {\n  display: none;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 400px) {\n\n  .container {\n    max-width: 400px;\n  }\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.relative {\n  position: relative;\n}\n.-right-1 {\n  right: -0.25rem;\n}\n.left-0 {\n  left: 0px;\n}\n.right-0 {\n  right: 0px;\n}\n.top-0 {\n  top: 0px;\n}\n.z-10 {\n  z-index: 10;\n}\n.z-20 {\n  z-index: 20;\n}\n.z-50 {\n  z-index: 50;\n}\n.m-2 {\n  margin: 0.5rem;\n}\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n.-ml-1 {\n  margin-left: -0.25rem;\n}\n.-mr-1 {\n  margin-right: -0.25rem;\n}\n.-mt-1 {\n  margin-top: -0.25rem;\n}\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-2 {\n  margin-left: 0.5rem;\n}\n.mr-1 {\n  margin-right: 0.25rem;\n}\n.mr-2 {\n  margin-right: 0.5rem;\n}\n.mr-3 {\n  margin-right: 0.75rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.mt-4 {\n  margin-top: 1rem;\n}\n.\\!block {\n  display: block !important;\n}\n.block {\n  display: block;\n}\n.inline {\n  display: inline;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.hidden {\n  display: none;\n}\n.h-2 {\n  height: 0.5rem;\n}\n.h-2\\.5 {\n  height: 0.625rem;\n}\n.h-3 {\n  height: 0.75rem;\n}\n.h-32 {\n  height: 8rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.w-2 {\n  width: 0.5rem;\n}\n.w-3 {\n  width: 0.75rem;\n}\n.w-5 {\n  width: 1.25rem;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n.w-screen {\n  width: 100vw;\n}\n.min-w-0 {\n  min-width: 0px;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-lg {\n  max-width: 32rem;\n}\n.max-w-xs {\n  max-width: 20rem;\n}\n.flex-1 {\n  flex: 1 1 0%;\n}\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@keyframes ping {\n\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n@keyframes spin {\n\n  to {\n    transform: rotate(360deg);\n  }\n}\n.animate-spin {\n  animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.flex-col {\n  flex-direction: column;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-2 {\n  gap: 0.5rem;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-full {\n  border-radius: 9999px;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border-2 {\n  border-width: 2px;\n}\n.border-dashed {\n  border-style: dashed;\n}\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity, 1));\n}\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));\n}\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1));\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n}\n.bg-cover {\n  background-size: cover;\n}\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.pb-0 {\n  padding-bottom: 0px;\n}\n.pr-2 {\n  padding-right: 0.5rem;\n}\n.pt-10 {\n  padding-top: 2.5rem;\n}\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n.font-normal {\n  font-weight: 400;\n}\n.font-semibold {\n  font-weight: 600;\n}\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity, 1));\n}\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity, 1));\n}\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity, 1));\n}\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity, 1));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity, 1));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-100 {\n  opacity: 1;\n}\n.opacity-25 {\n  opacity: 0.25;\n}\n.opacity-75 {\n  opacity: 0.75;\n}\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.brightness-200 {\n  --tw-brightness: brightness(2);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.brightness-225 {\n  --tw-brightness: brightness(2.25);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n:root {\n  --typebot-container-bg-image: none;\n  --typebot-container-bg-color: transparent;\n  --typebot-container-font-family: \"Open Sans\";\n\n  --typebot-button-bg-color: #0042da;\n  --typebot-button-color: #ffffff;\n\n  --typebot-host-bubble-bg-color: #f7f8ff;\n  --typebot-host-bubble-color: #303235;\n\n  --typebot-guest-bubble-bg-color: #ff8e21;\n  --typebot-guest-bubble-color: #ffffff;\n\n  --typebot-input-bg-color: #ffffff;\n  --typebot-input-color: #303235;\n  --typebot-input-placeholder-color: #9095a0;\n\n  --typebot-header-bg-color: #ffffff;\n  --typebot-header-color: #303235;\n\n  /* Phone input */\n  --PhoneInputCountryFlag-borderColor: transparent;\n  --PhoneInput-color--focus: transparent;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n.scrollable-container::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n.scrollable-container {\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n}\n\n/* Transitions */\n.bubble-enter {\n  opacity: 0;\n}\n.bubble-enter-active {\n  opacity: 1;\n  transition-property: opacity;\n  transition-duration: 500ms;\n  transition-timing-function: ease-out;\n}\n.bubble-exit {\n  opacity: 1;\n}\n.bubble-exit-active {\n  opacity: 0;\n  transition-delay: 0ms !important;\n  transition-property: opacity;\n  transition-duration: 400ms;\n  transition-timing-function: ease-out;\n}\n\n.bubble-typing {\n  transition: width 400ms ease-out, height 400ms ease-out;\n}\n\n.content-opacity {\n  transition: opacity 400ms ease-in 200ms;\n}\n\n.bubble1,\n.bubble2,\n.bubble3 {\n  background-color: var(--typebot-host-bubble-color);\n  opacity: 0.5;\n}\n\n.bubble1 {\n  animation: chatBubbles 1s ease-in-out infinite;\n}\n\n.bubble2 {\n  animation: chatBubbles 1s ease-in-out infinite;\n  animation-delay: 0.3s;\n}\n\n.bubble3 {\n  animation: chatBubbles 1s ease-in-out infinite;\n  animation-delay: 0.5s;\n}\n\n@keyframes chatBubbles {\n  0% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-5px);\n  }\n  100% {\n    transform: translateY(0);\n  }\n}\n\nbutton,\ninput,\ntextarea {\n  font-weight: 300;\n}\n\n.slate-a {\n  text-decoration: underline;\n}\n\n.slate-html-container > div {\n  min-height: 24px;\n}\n\n.slate-bold {\n  font-weight: bold;\n}\n\n.slate-italic {\n  font-style: oblique;\n}\n\n.slate-underline {\n  text-decoration: underline;\n}\n.text-input::-moz-placeholder {\n  color: var(--typebot-input-placeholder-color) !important;\n  opacity: 1 !important;\n}\n.text-input::placeholder {\n  color: var(--typebot-input-placeholder-color) !important;\n  opacity: 1 !important;\n}\n\n.typebot-container {\n  background-image: var(--typebot-container-bg-image);\n  background-color: var(--typebot-container-bg-color);\n  font-family: var(--typebot-container-font-family);\n}\n\n.custom-header {\n  color: var(--typebot-header-color);\n  background-color: var(--typebot-header-bg-color);\n}\n\n.typebot-button {\n  color: var(--typebot-button-color);\n  background-color: var(--typebot-button-bg-color);\n  border: 1px solid var(--typebot-button-bg-color);\n}\n\n.typebot-button.selectable {\n  color: var(--typebot-host-bubble-color);\n  background-color: var(--typebot-host-bubble-bg-color);\n  border: 1px solid var(--typebot-button-bg-color);\n}\n\n.typebot-host-bubble {\n  color: var(--typebot-host-bubble-color);\n}\n\n.typebot-host-bubble > .bubble-typing {\n  background-color: var(--typebot-host-bubble-bg-color);\n  border: var(--typebot-host-bubble-border);\n}\n\n.typebot-guest-bubble {\n  color: var(--typebot-guest-bubble-color);\n  background-color: var(--typebot-guest-bubble-bg-color);\n}\n\n.typebot-input {\n  color: var(--typebot-input-color);\n  background-color: var(--typebot-input-bg-color);\n  box-shadow: 0 2px 6px -1px rgba(0, 0, 0, 0.1);\n}\n\n.typebot-input-error-message {\n  color: var(--typebot-input-color);\n}\n\n.typebot-button > .send-icon {\n  fill: var(--typebot-button-color);\n}\n\n.typebot-chat-view {\n  max-width: 800px;\n}\n\n.ping span {\n  background-color: var(--typebot-button-bg-color);\n}\n\n.rating-icon-container svg {\n  width: 42px;\n  height: 42px;\n  stroke: var(--typebot-button-bg-color);\n  fill: var(--typebot-host-bubble-bg-color);\n  transition: fill 100ms ease-out;\n}\n\n.rating-icon-container.selected svg {\n  fill: var(--typebot-button-bg-color);\n}\n\n.rating-icon-container:hover svg {\n  filter: brightness(0.9);\n}\n\n.rating-icon-container:active svg {\n  filter: brightness(0.75);\n}\n\n.upload-progress-bar {\n  background-color: var(--typebot-button-bg-color);\n}\n\n.total-files-indicator {\n  background-color: var(--typebot-button-bg-color);\n  color: var(--typebot-button-color);\n  font-size: 10px;\n}\n\n.typebot-upload-input {\n  transition: border-color 100ms ease-out;\n}\n\n.typebot-upload-input.dragging-over {\n  border-color: var(--typebot-button-bg-color);\n}\n\n.secondary-button {\n  background-color: var(--typebot-host-bubble-bg-color);\n  color: var(--typebot-host-bubble-color);\n}\n\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1));\n}\n\n.hover\\:brightness-90:hover {\n  --tw-brightness: brightness(.9);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.active\\:brightness-75:active {\n  --tw-brightness: brightness(.75);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.disabled\\:cursor-not-allowed:disabled {\n  cursor: not-allowed;\n}\n\n.disabled\\:opacity-50:disabled {\n  opacity: 0.5;\n}\n\n.disabled\\:brightness-100:disabled {\n  --tw-brightness: brightness(1);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n@media (min-width: 400px) {\n\n  .xs\\:mb-2 {\n    margin-bottom: 0.5rem;\n  }\n\n  .xs\\:flex {\n    display: flex;\n  }\n\n  .xs\\:hidden {\n    display: none;\n  }\n\n  .xs\\:h-10 {\n    height: 2.5rem;\n  }\n\n  .xs\\:h-full {\n    height: 100%;\n  }\n\n  .xs\\:w-10 {\n    width: 2.5rem;\n  }\n\n  .xs\\:w-full {\n    width: 100%;\n  }\n\n  .xs\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n}\n\n@media (min-width: 1024px) {\n\n  .lg\\:w-11\\/12 {\n    width: 91.666667%;\n  }\n\n  .lg\\:w-3\\/4 {\n    width: 75%;\n  }\n\n  .lg\\:w-4\\/6 {\n    width: 66.666667%;\n  }\n\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n}\n",
                ],
              }),
              (0, r.jsx)("style", {
                children: null == (a = u.theme) ? void 0 : a.customCss,
              }),
              (0, r.jsx)("style", {
                children: ".lite-badge {\n  display: block !important;\n}\n",
              }),
              (null == u || null == (i = u.theme) || null == (o = i.general)
                ? void 0
                : o.font) &&
                (0, r.jsx)("style", {
                  dangerouslySetInnerHTML: {
                    __html:
                      "@import url('https://fonts.googleapis.com/css2?family=".concat(
                        null !=
                          (d = null == (l = u.theme.general) ? void 0 : l.font)
                          ? d
                          : "Open Sans",
                        ":ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');"
                      ),
                  },
                }),
              (0, r.jsx)(n8, {
                typebot: u,
                apiHost: c,
                isPreview: p,
                onNewLog: (e) => w && w(e),
                isLoading: m,
                children: (0, r.jsx)(n3, {
                  resultId: b,
                  onNewAnswer: (e) => x && x(e),
                  onVariablesUpdated: _,
                  children: (0, r.jsxs)("div", {
                    className:
                      "flex text-base overflow-hidden bg-cover h-screen w-screen flex-col items-center typebot-container",
                    style: { backgroundColor: null != T ? T : "transparent" },
                    "data-testid": "container",
                    children: [
                      (0, r.jsx)("div", {
                        className: "flex w-full h-full justify-center",
                        children: (0, r.jsx)(rT, {
                          theme: u.theme,
                          onNewGroupVisible: (e) => I && I(e),
                          onCompleted: () => E && E(),
                          predefinedVariables: v,
                          startGroupId: f,
                        }),
                      }),
                      (null == (s = u.settings.general)
                        ? void 0
                        : s.isBrandingEnabled) && (0, r.jsx)(rC, {}),
                    ],
                  }),
                }),
              }),
            ],
          });
        },
        rk = n(81278),
        rN = n(59393),
        rA = n(98965);
      let rP = (e) => {
        let { publishedTypebot: t, isIE: n, url: a, customHeadCode: d } = e,
          { asPath: b, push: g } = (0, rk.useRouter)(),
          [h, f] = (0, y.useState)(!1),
          [v, w] = (0, y.useState)(),
          [I, x] = (0, y.useState)(
            n ? Error("Internet explorer is not supported") : void 0
          ),
          [E, _] = (0, y.useState)(),
          [T, C] = (0, y.useState)([]),
          [S, k] = (0, y.useState)(!1);
        (0, y.useEffect)(() => {
          var e;
          f(!0);
          let n = new URLSearchParams(location.search);
          N();
          let a = {};
          n.forEach((e, t) => {
            a[t] = e;
          }),
            w(a),
            A().then(),
            (0, o.O9)(d) && (0, o._C)(d);
          let r =
            null == (e = t.settings.metadata) ? void 0 : e.googleTagManagerId;
          (0, o.hj)(r) && document.body.prepend((0, p.f)(r));
        }, []);
        let N = () => {
            var e, n;
            b.includes("?") &&
              (null !=
              (n =
                null == (e = t.settings.general)
                  ? void 0
                  : e.isHideQueryParamsEnabled)
                ? n
                : m.L6.general.isHideQueryParamsEnabled) !== !1 &&
              g(b.split("?")[0], void 0, { shallow: !0 });
          },
          A = async () => {
            let e = u();
            if (e) _(e);
            else {
              let { error: e, data: a } = await l(t.typebotId);
              if (e) return x(e);
              if (null == a ? void 0 : a.hasReachedLimit)
                return x(Error("This bot is now closed."));
              if (null == a ? void 0 : a.result) {
                var n;
                _(a.result.id),
                  (null == (n = t.settings.general)
                    ? void 0
                    : n.isNewResultOnRefreshEnabled) !== !0 && c(a.result.id);
              }
            }
          };
        (0, y.useEffect)(() => {
          E && 0 !== T.length && (Promise.all(T.map(R(E))).then(), C([]));
        }, [E]);
        let P = async (e) => {
            if (!E) return C([...T, e]);
            await R(E)(e);
          },
          R = (e) => async (t) => {
            let { error: n } = await s(e, { variables: t });
            n && x(n);
          },
          j = async (e) => {
            if (!E) return x(Error("Error: result was not created"));
            let { error: t } = await i({ ...e, resultId: E });
            t && x(t),
              S ||
                s(E, { hasStarted: !0 }).then((e) => {
                  let { error: t } = e;
                  return t ? x(t) : k(!0);
                });
          },
          L = async () => {
            if (!E) return x(Error("Error: result was not created"));
            let { error: e } = await s(E, { isCompleted: !0 });
            e && x(e);
          };
        return I
          ? (0, r.jsx)(rN.M, { error: I })
          : (0, r.jsxs)("div", {
              style: { height: "100dvh" },
              children: [
                (0, r.jsx)(rA.k, {
                  url: a,
                  typebotName: t.typebot.name,
                  metadata: t.settings.metadata,
                }),
                h &&
                  (0, r.jsx)(rS, {
                    typebot: t,
                    resultId: E,
                    predefinedVariables: v,
                    onNewAnswer: j,
                    onCompleted: L,
                    onVariablesUpdated: P,
                    isLoading: (0, o.pN)(E),
                  }),
              ],
            });
      };
    },
    27693: () => {},
    28157: (e, t, n) => {
      "use strict";
      n.d(t, { hK: () => r, lG: () => i, at: () => o });
      let a = {
        orange: {
          light: {
            1: "#fefcfb",
            2: "#fff4f0",
            3: "#ffe8de",
            4: "#ffd6c7",
            5: "#ffc8b5",
            6: "#ffb8a0",
            7: "#ffa286",
            8: "#f98868",
            9: "#ff5924",
            10: "#f24905",
            11: "#dc3b00",
            12: "#5b2a1c",
          },
          dark: {
            1: "#120b09",
            2: "#1f1411",
            3: "#371810",
            4: "#4e1606",
            5: "#5e1e0b",
            6: "#6e2c18",
            7: "#873c26",
            8: "#ad4d31",
            9: "#ff5924",
            10: "#f14b0f",
            11: "#ff9776",
            12: "#ffd7ca",
          },
        },
        gray: {
          light: {
            1: "#ffffff",
            2: "#f1f1f1",
            3: "#f0f0f0",
            4: "#e8e8e8",
            5: "#e0e0e0",
            6: "#dfdfdf",
            7: "#cecece",
            8: "#bbbbbb",
            9: "#8d8d8d",
            10: "#838383",
            11: "#464646",
            12: "#202020",
          },
          dark: {
            1: "#0D0D0D",
            2: "#1D1D1D",
            3: "#222222",
            4: "#2a2a2a",
            5: "#313131",
            6: "#3a3a3a",
            7: "#484848",
            8: "#606060",
            9: "#6e6e6e",
            10: "#7b7b7b",
            11: "#b4b4b4",
            12: "#eeeeee",
          },
        },
      };
      var r = (function (e) {
        return (e.COLOR = "Color"), (e.IMAGE = "Image"), (e.NONE = "None"), e;
      })({});
      let o = "Color",
        i = { 6: "#FFFFFF", 6.1: a.gray.light["2"] };
      a.orange.light["9"],
        a.gray.light["3"],
        a.gray.light["9"],
        a.gray.light["1"],
        a.gray.light["12"],
        a.gray.light["6"],
        a.orange.light["9"],
        a.gray.light["1"],
        a.orange.light["6"],
        a.orange.light["9"],
        a.gray.light["1"],
        a.orange.light["8"],
        a.gray.light["12"],
        a.gray.light["7"];
    },
    47668: () => {},
    51511: (e, t, n) => {
      "use strict";
      n.d(t, { Y: () => a, f: () => r });
      let a = (e) =>
          "\x3c!-- Google Tag Manager --\x3e\n(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\nnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\nj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n})(window,document,'script','dataLayer','".concat(
            e,
            "');\n\x3c!-- End Google Tag Manager --\x3e"
          ),
        r = (e) => {
          if (document.getElementById("gtm-noscript")) return "";
          let t = document.createElement("noscript");
          t.id = "gtm-noscript";
          let n = document.createElement("iframe");
          return (
            (n.src = "https://www.googletagmanager.com/ns.html?id=".concat(e)),
            (n.height = "0"),
            (n.width = "0"),
            (n.style.display = "none"),
            (n.style.visibility = "hidden"),
            t.appendChild(n),
            t
          );
        };
    },
    57608: () => {},
    59393: (e, t, n) => {
      "use strict";
      n.d(t, { M: () => o });
      var a = n(6029),
        r = n(3735);
      n(55729);
      let o = (e) => {
        let { error: t } = e;
        return (0, a.jsx)("div", {
          style: {
            height: "100dvh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "0 1rem",
          },
          children: r._.NEXT_PUBLIC_VIEWER_URL[0]
            ? (0, a.jsx)("p", {
                style: { fontSize: "24px", textAlign: "center" },
                children: t.message,
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("h1", {
                    style: { fontWeight: "bold", fontSize: "30px" },
                    children: "NEXT_PUBLIC_VIEWER_URL is missing",
                  }),
                  (0, a.jsxs)("h2", {
                    children: [
                      "Make sure to configure the app properly (",
                      (0, a.jsx)("a", {
                        href: "https://docs.typebot.io/self-hosting/configuration",
                        children:
                          "https://docs.typebot.io/self-hosting/configuration",
                      }),
                      ")",
                    ],
                  }),
                ],
              }),
        });
      };
    },
    69443: (e, t, n) => {
      "use strict";
      n.d(t, { L6: () => a });
      let a = {
        general: {
          isInputPrefillEnabled: !1,
          isHideQueryParamsEnabled: !0,
          isNewResultOnRefreshEnabled: !0,
          rememberUser: { isEnabled: !1, storage: "session" },
          isBrandingEnabled: !1,
          isTypingEmulationEnabled: !0,
        },
        typingEmulation: {
          enabled: !0,
          speed: 400,
          maxDelay: 3,
          delayBetweenBubbles: 0,
          isDisabledOnFirstMessage: !0,
        },
        metadata: {
          description:
            "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.",
          favIconUrl: (e) => e + "/favicon.svg",
          imageUrl: (e) => e + "/site-preview.png",
        },
      };
    },
    83814: (e, t, n) => {
      "use strict";
      n.d(t, { j: () => o });
      var a = n(6029),
        r = n(3735);
      let o = () =>
        (0, a.jsxs)("div", {
          style: {
            height: "100dvh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          },
          children: [
            (0, a.jsx)("h1", {
              style: { fontWeight: "bold", fontSize: "30px" },
              children: r._.NEXT_PUBLIC_VIEWER_404_TITLE,
            }),
            (0, a.jsx)("h2", { children: r._.NEXT_PUBLIC_VIEWER_404_SUBTITLE }),
          ],
        });
    },
    86973: () => {},
    96059: (e, t, n) => {
      "use strict";
      n.d(t, { a: () => a, b: () => r });
      var a = (e) => {
          e &&
            gtag("event", e.action, {
              event_category: e.category,
              event_label: e.label,
              value: e.value,
            });
        },
        r = (e) =>
          new Promise((t) => {
            let n = document.getElementById("gtag");
            if (!n) {
              let n = document.createElement("script");
              (n.src = "https://www.googletagmanager.com/gtag/js?id=".concat(
                e
              )),
                (n.id = "gtag");
              let a = document.createElement("script");
              (a.innerHTML =
                "window.dataLayer = window.dataLayer || [];\n      function gtag(){dataLayer.push(arguments);}\n      gtag('js', new Date());\n\n      gtag('config', '".concat(
                  e,
                  "');\n      "
                )),
                document.body.appendChild(n),
                document.body.appendChild(a),
                (n.onload = () => {
                  t();
                });
            }
            n && t();
          });
    },
    98965: (e, t, n) => {
      "use strict";
      n.d(t, { k: () => p });
      var a = n(6029),
        r = n(51511),
        o = n(3735),
        i = n(2283),
        l = n(69443),
        s = n(95669),
        d = n.n(s),
        u = n(6772),
        c = n.n(u);
      n(55729);
      let p = (e) => {
        let {
          url: t,
          typebotName: n,
          isMatchingViewerUrl: s,
          metadata: {
            title: u,
            description: p,
            favIconUrl: m,
            imageUrl: b,
            googleTagManagerId: g,
            allowIndexing: h,
          } = {},
        } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)(
              d(),
              {
                children: [
                  (0, a.jsx)("title", { children: null != u ? u : n }),
                  s && !0 !== h
                    ? (0, a.jsx)("meta", { name: "robots", content: "noindex" })
                    : null,
                  (0, a.jsx)("link", {
                    rel: "icon",
                    type: m ? "image/png" : "images/svg+xml",
                    href:
                      null != m
                        ? m
                        : l.L6.metadata.favIconUrl(
                            o._.NEXT_PUBLIC_VIEWER_URL[0]
                          ),
                  }),
                  (0, a.jsx)("meta", {
                    name: "title",
                    content: null != u ? u : n,
                  }),
                  (0, a.jsx)("meta", {
                    name: "description",
                    content:
                      null != p
                        ? p
                        : "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:type",
                    content: "website",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:url",
                    content: null != t ? t : "https://bot.typebot.io",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:title",
                    content: null != u ? u : n,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:site_name",
                    content: null != u ? u : n,
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:description",
                    content:
                      null != p
                        ? p
                        : "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.",
                  }),
                  (0, a.jsx)("meta", {
                    property: "og:image",
                    itemProp: "image",
                    content:
                      null != b
                        ? b
                        : l.L6.metadata.imageUrl(o._.NEXT_PUBLIC_VIEWER_URL[0]),
                  }),
                  (0, a.jsx)("meta", {
                    property: "twitter:card",
                    content: "summary_large_image",
                  }),
                  (0, a.jsx)("meta", {
                    property: "twitter:url",
                    content: null != t ? t : "https://bot.typebot.io",
                  }),
                  (0, a.jsx)("meta", {
                    property: "twitter:title",
                    content: null != u ? u : n,
                  }),
                  (0, a.jsx)("meta", {
                    property: "twitter:description",
                    content:
                      null != p
                        ? p
                        : "Build beautiful conversational forms and embed them directly in your applications without a line of code. Triple your response rate and collect answers that has more value compared to a traditional form.",
                  }),
                  (0, a.jsx)("meta", {
                    property: "twitter:image",
                    content:
                      null != b
                        ? b
                        : l.L6.metadata.imageUrl(o._.NEXT_PUBLIC_VIEWER_URL[0]),
                  }),
                ],
              },
              "seo"
            ),
            (0, i.hj)(g) &&
              (0, a.jsx)(c(), {
                id: "google-tag-manager",
                children: (0, r.Y)(g),
              }),
          ],
        });
      };
    },
  },
]);
