import type { District, HighSchool, HighSchoolType, MiddleSchool, ScoreLine, QuotaLine, SchoolScoreLine, SchoolQuotaLine } from '@/lib/types';

export const districts: District[] = [
  '黄浦', '徐汇', '长宁', '静安', '普陀', '虹口', '杨浦', '闵行',
  '宝山', '嘉定', '浦东', '金山', '松江', '青浦', '奉贤', '崇明',
];

export const highSchoolTypes: HighSchoolType[] = ['市重点', '区重点', '一般高中'];

// 为学校生成住宿情况的辅助函数
// function generateAccommodation(type: HighSchoolType): string {
//   const accommodations = {
//     '市重点': ['提供住宿', '部分提供住宿'],
//     '区重点': ['部分提供住宿', '走读为主'],
//     '一般高中': ['走读为主', '不提供住宿']
//   };
//   const options = accommodations[type];
//   return options[Math.floor(Math.random() * options.length)];
// }

export const highSchools: HighSchool[] = [
  {
    "id": "hs_012001",
    "name": "上海市格致中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012003",
    "name": "上海市大同中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012005",
    "name": "上海市向明中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_012007",
    "name": "上海外国语大学附属大境中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_012009",
    "name": "上海市光明中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_022001",
    "name": "上海市南洋模范中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_022003",
    "name": "上海市位育中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_022005",
    "name": "上海市南洋中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_022007",
    "name": "上海市徐汇中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_032001",
    "name": "上海市延安中学",
    "district": "长宁",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_032003",
    "name": "上海市复旦中学",
    "district": "长宁",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_032005",
    "name": "上海市天山中学",
    "district": "长宁",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_042001",
    "name": "上海市育才中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_042003",
    "name": "上海市市西中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_042005",
    "name": "上海市华东模范中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "走读为主"
  },
  {
    "id": "hs_052001",
    "name": "上海市曹杨第二中学",
    "district": "普陀",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_052003",
    "name": "上海市晋元高级中学",
    "district": "普陀",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_052005",
    "name": "上海市宜川中学",
    "district": "普陀",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_062001",
    "name": "上海市复兴高级中学",
    "district": "虹口",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_062003",
    "name": "上海市华东师范大学第一附属中学",
    "district": "虹口",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_062005",
    "name": "上海市北郊高级中学",
    "district": "虹口",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_072001",
    "name": "上海市复旦大学附属中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_072003",
    "name": "上海市上海中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_072005",
    "name": "上海市杨浦高级中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_072007",
    "name": "上海市控江中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_082001",
    "name": "上海交通大学附属中学闵行分校",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_082003",
    "name": "上海市七宝中学",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_082005",
    "name": "上海市闵行中学",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_092001",
    "name": "上海市行知中学",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_092003",
    "name": "上海大学附属中学",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_102001",
    "name": "上海市嘉定区第一中学",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_102003",
    "name": "上海市安亭高级中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_112001",
    "name": "华东师范大学第二附属中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_112003",
    "name": "上海市建平中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_112005",
    "name": "上海市进才中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_112007",
    "name": "上海市洋泾中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_112009",
    "name": "上海市川沙中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_122001",
    "name": "上海市金山中学",
    "district": "金山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_132001",
    "name": "上海市松江二中",
    "district": "松江",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_132003",
    "name": "上海市松江一中",
    "district": "松江",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_142001",
    "name": "上海市青浦高级中学",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_142003",
    "name": "上海市朱家角中学",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_152001",
    "name": "上海市奉贤中学",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_162001",
    "name": "上海市崇明中学",
    "district": "崇明",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012011",
    "name": "上海市敬业中学",
    "district": "黄浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_022011",
    "name": "上海市西南位育中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_032011",
    "name": "上海市建青实验学校",
    "district": "长宁",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "走读为主"
  },
  {
    "id": "hs_042011",
    "name": "上海市第一中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "走读为主"
  },
  {
    "id": "hs_052011",
    "name": "上海市曹杨中学",
    "district": "普陀",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_062011",
    "name": "上海市虹口高级中学",
    "district": "虹口",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_072011",
    "name": "上海市杨浦区高级中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_082011",
    "name": "上海市莘庄中学",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_092011",
    "name": "上海市吴淞中学",
    "district": "宝山",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_102011",
    "name": "上海市嘉定区第二中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_112011",
    "name": "上海市南汇中学",
    "district": "浦东",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_122011",
    "name": "上海市张堰中学",
    "district": "金山",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_132011",
    "name": "上海市松江九峰实验学校",
    "district": "松江",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_142011",
    "name": "上海市青浦第一中学",
    "district": "青浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_152011",
    "name": "上海市奉贤区曙光中学",
    "district": "奉贤",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_162011",
    "name": "上海市崇明区民本中学",
    "district": "崇明",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_012021",
    "name": "上海市第八中学",
    "district": "黄浦",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "走读为主"
  },
  {
    "id": "hs_022021",
    "name": "上海市徐汇区第二中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "走读为主"
  },
  {
    "id": "hs_032021",
    "name": "上海市长宁区第三中学",
    "district": "长宁",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_042021",
    "name": "上海市静安区第四中学",
    "district": "静安",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_052021",
    "name": "上海市普陀区第五中学",
    "district": "普陀",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_062021",
    "name": "上海市虹口区第六中学",
    "district": "虹口",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_072021",
    "name": "上海市杨浦区第七中学",
    "district": "杨浦",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_082021",
    "name": "上海市闵行区第八中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_092021",
    "name": "上海市宝山区第九中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_102021",
    "name": "上海市嘉定区第十中学",
    "district": "嘉定",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_112021",
    "name": "上海市浦东新区第十一中学",
    "district": "浦东",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_122021",
    "name": "上海市金山区第十二中学",
    "district": "金山",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_132021",
    "name": "上海市松江区第十三中学",
    "district": "松江",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_142021",
    "name": "上海市青浦区第十四中学",
    "district": "青浦",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_152021",
    "name": "上海市奉贤区第十五中学",
    "district": "奉贤",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_162021",
    "name": "上海市崇明区第十六中学",
    "district": "崇明",
    "type": "一般高中",
    "fullType": "一般高中",
    "accommodation": "不提供住宿"
  },
  {
    "id": "hs_012002",
    "name": "上海市格致中学奉贤校区",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012004",
    "name": "上海市大同中学浦江校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012006",
    "name": "上海市向明中学浦江校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012008",
    "name": "上海外国语大学附属大境中学南汇校区",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_012010",
    "name": "上海市光明中学闵行校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_022002",
    "name": "上海市南洋模范中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_022004",
    "name": "上海市位育中学闵行校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_022006",
    "name": "上海市南洋中学南汇校区",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_022008",
    "name": "上海市徐汇中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_032002",
    "name": "上海市延安中学青浦校区",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_032004",
    "name": "上海市复旦中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_032006",
    "name": "上海市天山中学闵行校区",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_042002",
    "name": "上海市育才中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_042004",
    "name": "上海市市西中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_042006",
    "name": "上海市华东模范中学闵行校区",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "走读为主"
  },
  {
    "id": "hs_052002",
    "name": "上海市曹杨第二中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_052004",
    "name": "上海市晋元高级中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_052006",
    "name": "上海市宜川中学闵行校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_062002",
    "name": "上海市复兴高级中学青浦校区",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_062004",
    "name": "上海市华东师范大学第一附属中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_062006",
    "name": "上海市北郊高级中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_072002",
    "name": "上海市复旦大学附属中学青浦校区",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_072004",
    "name": "上海市上海中学东校",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_072006",
    "name": "上海市杨浦高级中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_072008",
    "name": "上海市控江中学闵行校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_082002",
    "name": "上海交通大学附属中学闵行分校东校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_082004",
    "name": "上海市七宝中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_082006",
    "name": "上海市闵行中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_092002",
    "name": "上海市行知中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_092004",
    "name": "上海大学附属中学闵行校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_102002",
    "name": "上海市嘉定区第一中学青浦校区",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_102004",
    "name": "上海市安亭高级中学嘉定新城校区",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_112002",
    "name": "华东师范大学第二附属中学宝山校区",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_112004",
    "name": "上海市建平中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_112006",
    "name": "上海市进才中学青浦校区",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_112008",
    "name": "上海市洋泾中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_112010",
    "name": "上海市川沙中学南汇校区",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_122002",
    "name": "上海市金山中学平湖校区",
    "district": "金山",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_132002",
    "name": "上海市松江二中嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_132004",
    "name": "上海市松江一中闵行校区",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_142002",
    "name": "上海市青浦高级中学嘉定校区",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_142004",
    "name": "上海市朱家角中学青浦新城校区",
    "district": "青浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_152002",
    "name": "上海市奉贤中学临港校区",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_162002",
    "name": "上海师范大学附属崇明中学",
    "district": "崇明",
    "type": "市重点",
    "fullType": "市实验性示范性高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_172002",
    "name": "上海市松江一中",
    "district": "松江",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_182002",
    "name": "上海市青浦高级中学",
    "district": "青浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_182003",
    "name": "上海市朱家角中学",
    "district": "青浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中",
    "accommodation": "部分住宿"
  },
  {
    "id": "hs_222001",
    "name": "上海市崇明中学",
    "district": "崇明",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中",
    "accommodation": "全部住宿"
  },
  {
    "id": "hs_212001",
    "name": "上海市奉贤中学",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中",
    "accommodation": "全部住宿"
  }
];

export const middleSchools: MiddleSchool[] = [
  { "id": "ms_0101", "name": "上海市格致初级中学", "district": "黄浦", "type": "公办" },
  { "id": "ms_0102", "name": "上海市大同初级中学", "district": "黄浦", "type": "公办" },
  { "id": "ms_0103", "name": "上海市向明初级中学", "district": "黄浦", "type": "公办" },
  { "id": "ms_0104", "name": "上海市明珠中学", "district": "黄浦", "type": "民办" },
  { "id": "ms_0201", "name": "上海市南洋模范初级中学", "district": "徐汇", "type": "公办" },
  { "id": "ms_0202", "name": "上海市位育初级中学", "district": "徐汇", "type": "公办" },
  { "id": "ms_0203", "name": "上海市西南位育中学", "district": "徐汇", "type": "民办" },
  { "id": "ms_0204", "name": "上海市世界外国语中学", "district": "徐汇", "type": "民办" },
  { "id": "ms_0301", "name": "上海市延安初级中学", "district": "长宁", "type": "公办" },
  { "id": "ms_0302", "name": "上海市娄山中学", "district": "长宁", "type": "公办" },
  { "id": "ms_0303", "name": "上海市建青实验学校", "district": "长宁", "type": "公办" },
  { "id": "ms_0401", "name": "上海市市西初级中学", "district": "静安", "type": "公办" },
  { "id": "ms_0402", "name": "上海市育才初级中学", "district": "静安", "type": "公办" },
  { "id": "ms_0403", "name": "上海市静安区教育学院附属学校", "district": "静安", "type": "公办" },
  { "id": "ms_0501", "name": "上海市曹杨第二中学附属学校", "district": "普陀", "type": "公办" },
  { "id": "ms_0502", "name": "上海市晋元高级中学附属学校", "district": "普陀", "type": "公办" },
  { "id": "ms_0503", "name": "上海市宜川中学附属学校", "district": "普陀", "type": "公办" },
  { "id": "ms_0601", "name": "上海市复兴初级中学", "district": "虹口", "type": "公办" },
  { "id": "ms_0602", "name": "上海市华东师范大学第一附属初级中学", "district": "虹口", "type": "公办" },
  { "id": "ms_0603", "name": "上海市北郊学校", "district": "虹口", "type": "公办" },
  { "id": "ms_0701", "name": "上海市复旦大学第二附属学校", "district": "杨浦", "type": "公办" },
  { "id": "ms_0702", "name": "上海市杨浦初级中学", "district": "杨浦", "type": "公办" },
  { "id": "ms_0703", "name": "上海市控江初级中学", "district": "杨浦", "type": "公办" },
  { "id": "ms_0801", "name": "上海市七宝第二中学", "district": "闵行", "type": "公办" },
  { "id": "ms_0802", "name": "上海市闵行区实验学校", "district": "闵行", "type": "公办" },
  { "id": "ms_0803", "name": "上海市文来中学", "district": "闵行", "type": "民办" },
  { "id": "ms_0901", "name": "上海市宝山区实验学校", "district": "宝山", "type": "公办" },
  { "id": "ms_0902", "name": "上海市行知中学附属学校", "district": "宝山", "type": "公办" },
  { "id": "ms_1001", "name": "上海市嘉定区第一中学附属学校", "district": "嘉定", "type": "公办" },
  { "id": "ms_1002", "name": "上海市嘉定区实验学校", "district": "嘉定", "type": "公办" },
  { "id": "ms_1101", "name": "上海市浦东新区进才中学北校", "district": "浦东", "type": "公办" },
  { "id": "ms_1102", "name": "上海市浦东新区建平中学西校", "district": "浦东", "type": "公办" },
  { "id": "ms_1103", "name": "上海市浦东新区洋泾中学南校", "district": "浦东", "type": "公办" },
  { "id": "ms_1104", "name": "上海市建平实验中学", "district": "浦东", "type": "公办" },
  { "id": "ms_1201", "name": "上海市金山区第一实验小学", "district": "金山", "type": "公办" },
  { "id": "ms_1202", "name": "上海市金山区第二实验小学", "district": "金山", "type": "公办" },
  { "id": "ms_1301", "name": "上海市松江区第一中学附属学校", "district": "松江", "type": "公办" },
  { "id": "ms_1302", "name": "上海市松江区实验学校", "district": "松江", "type": "公办" },
  { "id": "ms_1401", "name": "上海市青浦区实验中学", "district": "青浦", "type": "公办" },
  { "id": "ms_1402", "name": "上海市朱家角中学附属学校", "district": "青浦", "type": "公办" },
  { "id": "ms_1501", "name": "上海市奉贤区实验中学", "district": "奉贤", "type": "公办" },
  { "id": "ms_1502", "name": "上海市奉贤中学附属学校", "district": "奉贤", "type": "公办" },
  { "id": "ms_1601", "name": "上海市崇明区实验中学", "district": "崇明", "type": "公办" },
  { "id": "ms_1602", "name": "上海市崇明中学附属学校", "district": "崇明", "type": "公办" }
];

export const scoreLines: ScoreLine[] = [];

// 为每所高中生成分数线数据
highSchools.forEach((school) => {
  districts.forEach((district) => {
    // 为2021-2023年生成数据
    for (let year = 2021; year <= 2023; year++) {
      // 根据学校类型设置基础分数
      let baseScore: number;
      if (school.type === '市重点') {
        baseScore = 680 + Math.random() * 20;
      } else if (school.type === '区重点') {
        baseScore = 650 + Math.random() * 20;
      } else {
        baseScore = 620 + Math.random() * 20;
      }

      const score = Math.round(baseScore);
      const scoreUpper = score + Math.floor(Math.random() * 5);
      const scoreLower = score - Math.floor(Math.random() * 5);

      scoreLines.push({
        id: `sl_${school.id}_${district}_${year}`,
        schoolId: school.id,
        schoolName: school.name,
        district,
        year,
        score,
        scoreUpper,
        scoreLower
      });
    }
  });
});

export const schoolScoreLines: SchoolScoreLine[] = [];

// 为每所高中和初中生成校际分数线
highSchools.forEach((school) => {
  middleSchools.forEach((middleSchool) => {
    // 根据学校类型设置基础分数
    let baseScore: number;
    if (school.type === '市重点') {
      baseScore = 685 + Math.random() * 15;
    } else if (school.type === '区重点') {
      baseScore = 655 + Math.random() * 15;
    } else {
      baseScore = 625 + Math.random() * 15;
    }

    const score = Math.round(baseScore);

    schoolScoreLines.push({
      id: `ssl_${school.id}_${middleSchool.id}`,
      schoolId: school.id,
      middleSchoolId: middleSchool.id,
      score
    });
  });
});

export const quotaLines: QuotaLine[] = [];

// 为每所高中生成招生计划
highSchools.forEach((school) => {
  districts.forEach((district) => {
    // 根据学校类型设置招生计划
    let baseQuota: number;
    if (school.type === '市重点') {
      baseQuota = 20 + Math.floor(Math.random() * 30);
    } else if (school.type === '区重点') {
      baseQuota = 15 + Math.floor(Math.random() * 20);
    } else {
      baseQuota = 10 + Math.floor(Math.random() * 15);
    }

    // 对本区学生增加招生计划
    if (school.district === district) {
      baseQuota += 30 + Math.floor(Math.random() * 20);
    }

    quotaLines.push({
      id: `ql_${school.id}_${district}`,
      schoolId: school.id,
      district,
      count: baseQuota
    });
  });
});

export const schoolQuotaLines: SchoolQuotaLine[] = [];

// 为每所高中和初中生成校际招生计划
highSchools.forEach((school) => {
  middleSchools.forEach((middleSchool) => {
    // 根据学校类型设置基础招生计划
    let baseQuota: number;
    if (school.type === '市重点') {
      baseQuota = 5 + Math.floor(Math.random() * 10);
    } else if (school.type === '区重点') {
      baseQuota = 3 + Math.floor(Math.random() * 7);
    } else {
      baseQuota = 2 + Math.floor(Math.random() * 5);
    }

    // 对本区初中增加招生计划
    if (school.district === middleSchool.district) {
      baseQuota += 2 + Math.floor(Math.random() * 5);
    }

    schoolQuotaLines.push({
      id: `sql_${school.id}_${middleSchool.id}`,
      schoolId: school.id,
      middleSchoolId: middleSchool.id,
      count: baseQuota
    });
  });
});
