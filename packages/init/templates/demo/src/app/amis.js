/**
 * amis env 配置
 * 文档: https://baidu.github.io/amis/docs/getting-started
 *
 * 可重写 ovine 内部对 amis 一些列 env 配置
 */

import { definitions } from './common/renderers'

export const amis = {
  definitions, // ovine 扩展可用全局的定义，使用 $ref 引用
  // apiResAdapter 用于重写 ovine 内部对请求返回值的扩展
}
