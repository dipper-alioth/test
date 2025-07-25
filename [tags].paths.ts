import { dynamicPages } from 'vitepress-theme-async/plugin/page'
import config from './.vitepress/config'

export default {
  async paths() {
    return dynamicPages(config, 'tags')
  },
}
