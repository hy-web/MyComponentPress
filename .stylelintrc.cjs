/*
 * @Author: 创建者
 * @Date: 2023-05-28 20:41:15
 * @LastEditors: HY
 * @LastEditTime: 2023-05-28 23:18:30
 * @FilePath: \vite-vue3-TS-demo4.0\.stylelintrc.cjs
 * @Description: 请描述此文件的作用
 */
module.exports = {
  root: true,
  defaultServerity: 'error',
  extends: [
    // 配置stylelint拓展插件
    'stylelint-config-standard',
    // 配置vue中template样式格式化
    'stylelint-config-html/vue',
    // 配置stylelint scss插件
    'stylelint-config-standard/scss',
    // 配置stylelint css属性书写顺序插件
    'stylelint-config-recess-order'
  ],
  overrides: [
		{
			files: [`**/*.{scss|css|vue|html}`],
			customSyntax: 'postcss-scss',
		},
		{
			files: [`**/*.{vue,html}`],
			customSyntax: 'postcss-html',
		}
	],
  plugins: [
    'stylelint-order',
    'stylelint-scss'
  ],
	ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml'
  ],
  rules: {
		// 在css中,使用v-bind不报错
		'value-keyword-case': null,
		// 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
		'no-descending-specificity': null,
		// 要求或禁止 RUL 的引号 "always(必须加上引号)" | "never"(没有引号)
		'function-url-quotes': 'always',
		// 关闭禁止空源码
		'no-empty-source': null,
		// 关闭强制选择器类名的格式
		'selectop-class-pattern': null,
		// 禁止未知的属性(true为不允许)
		'property-no-unknown': null,
		// 大括号之前必须有一个空格或不能有空白符
		'block-opening-brace-space-before': 'always',
		// 关闭属性值前缀--webkit-box
		'value-no-vendor-prefix': null,
		// 关闭属性前缀-webkit-mask'
		'property-no-vendor-prefix ': null,
		'selector-pseudo-class-no-unknown': [
			//不允许未知的选择器
			true,
			{
				//忽略属性,修改element黑x认样式的时候能使用到
				ignorePseudoclasses: [ 'global','v-deep','deep'],
			}
		]
	}
}