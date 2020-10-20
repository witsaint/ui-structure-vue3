import mixins from '../src/mixins/locale';
import locale from '../src/locale';
import zhCN from '../src/locale/lang/zh-CN';
import enUS from '../src/locale/lang/en-US';

const langMap = {
  'zh-CN': zhCN,
  'en-US': enUS,
};

export const setLang = (
  lang = top.router.history.current.path.match(/\/([^/]+)/)[1],
) => {
  locale.use(lang, langMap[lang]);
  top.router.push(top.router.history.current.path.replace(/\/[^/]+/, `/${lang}`));
};
setLang();

export default {
  ...mixins,
  beforeCreate() {
    const { i18n, name } = this.$options;
    if (i18n && name) {
      const formattedI18n = {};
      const camelizedName = name.replace(/-(\w)/g, (_, c) => c.toUpperCase());
      Object.keys(i18n).forEach((key) => {
        formattedI18n[key] = { [camelizedName]: i18n[key] };
      });
      locale.add(formattedI18n);
    }
  },
};
