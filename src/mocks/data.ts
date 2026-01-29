import type { District, HighSchool, HighSchoolType, MiddleSchool, ScoreLine, QuotaLine, SchoolQuotaLine, SchoolScoreLine } from '@/lib/types';

export const districts: District[] = [
  '黄浦', '徐汇', '长宁', '静安', '普陀', '虹口', '杨浦', '闵行',
  '宝山', '嘉定', '浦东', '金山', '松江', '青浦', '奉贤', '崇明',
];

export const highSchoolTypes: HighSchoolType[] = ['市重点', '区重点', '一般高中'];

export const highSchools: HighSchool[] = [
  {
    "id": "hs_012001",
    "name": "上海市格致中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012003",
    "name": "上海市大同中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012005",
    "name": "上海市向明中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012007",
    "name": "上海外国语大学附属大境中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012008",
    "name": "上海市光明中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012009",
    "name": "上海市敬业中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012010",
    "name": "上海市卢湾高级中学",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_012002",
    "name": "上海市格致中学(奉贤校区)",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_012006",
    "name": "上海市向明中学(浦江校区)",
    "district": "黄浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_013001",
    "name": "上海市第八中学",
    "district": "黄浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_013003",
    "name": "上海市第十中学",
    "district": "黄浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_013004",
    "name": "上海理工大学附属储能中学",
    "district": "黄浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_014001",
    "name": "上海市金陵中学",
    "district": "黄浦",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_014003",
    "name": "上海市市南中学",
    "district": "黄浦",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_014004",
    "name": "上海音乐学院附属黄浦比乐中学",
    "district": "黄浦",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_014006",
    "name": "上海市同济黄浦设计创意中学",
    "district": "黄浦",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_042001",
    "name": "上海市第二中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_042008",
    "name": "上海市南洋模范中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_042035",
    "name": "上海市位育中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_043015",
    "name": "上海市南洋中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_042002",
    "name": "上海市第二中学(梅陇校区)",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_042036",
    "name": "复旦大学附属中学徐汇分校",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_044109",
    "name": "上海市徐汇中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_044223",
    "name": "上海市紫竹园中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "市特色普通高中"
  },
  {
    "id": "hs_044103",
    "name": "上海市中国中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_044107",
    "name": "上海市第五十四中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_044111",
    "name": "上海市第四中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_044162",
    "name": "上海市西南位育中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_041363",
    "name": "上海市世外中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_044083",
    "name": "上海市民办西南高级中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_044114",
    "name": "上海市零陵中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_044133",
    "name": "华东理工大学附属中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_044164",
    "name": "上海市西南模范中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_044239",
    "name": "上海市徐汇区董恒甫高级中学",
    "district": "徐汇",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_044101",
    "name": "上海市位育附属徐汇科技实验中学",
    "district": "徐汇",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_052001",
    "name": "上海市第三女子中学",
    "district": "长宁",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_052002",
    "name": "上海市延安中学",
    "district": "长宁",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_053004",
    "name": "上海市复旦中学",
    "district": "长宁",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_054013",
    "name": "华东政法大学附属中学",
    "district": "长宁",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_053003",
    "name": "华东师范大学附属天山学校",
    "district": "长宁",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_053005",
    "name": "上海市建青实验学校",
    "district": "长宁",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_054030",
    "name": "上海市仙霞高级中学",
    "district": "长宁",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_054010",
    "name": "上海市西郊学校",
    "district": "长宁",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_054043",
    "name": "上海市民办新虹桥中学",
    "district": "长宁",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_062001",
    "name": "上海市市西中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_062002",
    "name": "上海市育才中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_062003",
    "name": "上海市新中高级中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_062004",
    "name": "上海市市北中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_062011",
    "name": "上海市回民中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_063004",
    "name": "上海市第六十中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_064001",
    "name": "上海市华东模范中学",
    "district": "静安",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_064004",
    "name": "上海戏剧学院附属高级中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_063001",
    "name": "上海市民立中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_063002",
    "name": "上海市第一中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_063003",
    "name": "上海市风华中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_063007",
    "name": "上海市彭浦中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_063008",
    "name": "上海市久隆模范中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_063077",
    "name": "上海市闸北第八中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_064003",
    "name": "同济大学附属七一中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_064020",
    "name": "上海田家炳中学",
    "district": "静安",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_064007",
    "name": "上海市向东中学",
    "district": "静安",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_064008",
    "name": "上海大学市北附属中学",
    "district": "静安",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_064021",
    "name": "上海市民办扬波中学",
    "district": "静安",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_064023",
    "name": "上海市民办新和中学",
    "district": "静安",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_064024",
    "name": "上海市民办风范中学",
    "district": "静安",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_072001",
    "name": "上海市晋元高级中学",
    "district": "普陀",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_072002",
    "name": "上海市曹杨第二中学",
    "district": "普陀",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_073003",
    "name": "上海市宜川中学",
    "district": "普陀",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_073082",
    "name": "华东师范大学第二附属中学(普陀校区)",
    "district": "普陀",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_073004",
    "name": "上海市曹杨中学",
    "district": "普陀",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_074005",
    "name": "同济大学第二附属中学",
    "district": "普陀",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_074007",
    "name": "上海市甘泉外国语中学",
    "district": "普陀",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_074016",
    "name": "上海音乐学院附属安师实验中学",
    "district": "普陀",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_074010",
    "name": "上海市长征中学",
    "district": "普陀",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_074011",
    "name": "上海市桃浦中学",
    "district": "普陀",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_074018",
    "name": "上海华东师范大学附属进华中学",
    "district": "普陀",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_074081",
    "name": "上海安生学校",
    "district": "普陀",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_074085",
    "name": "上海市曹杨第二中学东校",
    "district": "普陀",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_075013",
    "name": "上海培佳双语学校",
    "district": "普陀",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_092001",
    "name": "复旦大学附属复兴中学",
    "district": "虹口",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_092002",
    "name": "华东师范大学第一附属中学",
    "district": "虹口",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_093001",
    "name": "上海财经大学附属北郊高级中学",
    "district": "虹口",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_094005",
    "name": "上海师范大学附属虹口中学",
    "district": "虹口",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_093003",
    "name": "上海音乐学院虹口区北虹高级中学",
    "district": "虹口",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_093004",
    "name": "上海市继光高级中学",
    "district": "虹口",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_094006",
    "name": "同济大学附属澄衷中学",
    "district": "虹口",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_094001",
    "name": "上海市鲁迅中学",
    "district": "虹口",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_094003",
    "name": "上海市第五十二中学",
    "district": "虹口",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_094004",
    "name": "上海市友谊中学",
    "district": "虹口",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_094049",
    "name": "上海外国语大学附属外国语学校东校",
    "district": "虹口",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_102004",
    "name": "上海市杨浦高级中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_102032",
    "name": "上海市控江中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_103002",
    "name": "同济大学第一附属中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_103039",
    "name": "上海理工大学附属中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_103012",
    "name": "上海市市东实验学校(上海市市东中学)",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_103026",
    "name": "上海财经大学附属中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_103049",
    "name": "上海市同济中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_103061",
    "name": "上海市中原中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_103075",
    "name": "上海市复旦实验中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_104050",
    "name": "上海理工大学附属杨浦少云中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_104066",
    "name": "上海市民星中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_104073",
    "name": "上海市体育学院附属中学",
    "district": "杨浦",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_102058",
    "name": "复旦大学第二附属中学",
    "district": "杨浦",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_104021",
    "name": "上海市民办上实剑桥外国语中学",
    "district": "杨浦",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_122001",
    "name": "上海市七宝中学",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_123001",
    "name": "上海市闵行中学",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_122002",
    "name": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "闵行",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_122003",
    "name": "上海师范大学附属中学闵行分校",
    "district": "闵行",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_122004",
    "name": "上海交通大学附属中学闵行分校",
    "district": "闵行",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_124006",
    "name": "上海市闵行第三中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "市特色普通高中"
  },
  {
    "id": "hs_123002",
    "name": "上海市莘庄中学",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_123003",
    "name": "上海外国语大学闵行外国语中学",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_124005",
    "name": "华东理工大学附属闵行科技高级中学",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_124022",
    "name": "北京外国语大学附属上海闵行田园高级中学",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_124108",
    "name": "上海市文来中学",
    "district": "闵行",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_125028",
    "name": "华东师范大学附属闵行永德学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124010",
    "name": "上海市第二体育运动学校(上海市体育中学)",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124011",
    "name": "上海市七宝中学附属鑫都实验中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124012",
    "name": "上海市闵行中学东校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124013",
    "name": "上海市闵行区实验高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124015",
    "name": "上海市七宝中学浦江分校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124019",
    "name": "上海中医药大学附属浦江高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124020",
    "name": "上海市金汇高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124024",
    "name": "上海市古美高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124109",
    "name": "上海市民办文绮中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124111",
    "name": "上海协和双语高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124114",
    "name": "上海市闵行区教育学院附属中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124115",
    "name": "上海闵行区协和双语教科学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_124116",
    "name": "上海市民办燎原双语高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_125008",
    "name": "上海交通大学附属闵行实验学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_125113",
    "name": "上海星河湾双语学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_125115",
    "name": "上海闵行区万科双语学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_125117",
    "name": "上海闵行区诺达双语学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_125119",
    "name": "上海闵行区民办德闳学校",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_128100",
    "name": "上海七宝德怀特高级中学",
    "district": "闵行",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_132001",
    "name": "上海市行知中学",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_132002",
    "name": "上海大学附属中学",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_133001",
    "name": "上海市吴淞中学",
    "district": "宝山",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_132003",
    "name": "上海师范大学附属中学宝山分校",
    "district": "宝山",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_133003",
    "name": "华东师范大学第二附属中学(宝山校区)",
    "district": "宝山",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_133002",
    "name": "上海师范大学附属宝山罗店中学",
    "district": "宝山",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_134001",
    "name": "上海市宝山中学",
    "district": "宝山",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_134002",
    "name": "上海市通河中学",
    "district": "宝山",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_134004",
    "name": "上海市顾村中学",
    "district": "宝山",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_134005",
    "name": "上海市行知实验中学",
    "district": "宝山",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_134003",
    "name": "上海市淞浦中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134006",
    "name": "上海市高境第一中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134009",
    "name": "上海市宝山区海滨中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134010",
    "name": "上海民办行中中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134012",
    "name": "上海存志高级中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134013",
    "name": "上海宝山区民办维尚高级中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134014",
    "name": "上海创艺高级中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_134015",
    "name": "上海市宝山华曜高级中学",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_135001",
    "name": "上海市同洲模范学校",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_135034",
    "name": "上海宝山区世外学校",
    "district": "宝山",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_142001",
    "name": "上海市嘉定区第一中学",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_142002",
    "name": "上海交通大学附属中学嘉定分校",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_142004",
    "name": "上海师范大学附属中学嘉定新城分校",
    "district": "嘉定",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_143001",
    "name": "上海市嘉定区第二中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中 (市特色普通高中)"
  },
  {
    "id": "hs_142003",
    "name": "上海市嘉定区嘉一实验高级中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_143002",
    "name": "上海师范大学附属嘉定高级中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_143003",
    "name": "上海市嘉定区安亭高级中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_144011",
    "name": "上海大学附属嘉定高级中学",
    "district": "嘉定",
    "type": "区重点",
    "fullType": "区实验性示范性高中"
  },
  {
    "id": "hs_144010",
    "name": "上海市嘉定区中光高级中学",
    "district": "嘉定",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_144006",
    "name": "上海市嘉定区封浜高级中学",
    "district": "嘉定",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_145007",
    "name": "上海市民办远东学校",
    "district": "嘉定",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_145018",
    "name": "上海华旭双语学校",
    "district": "嘉定",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_145030",
    "name": "上海嘉定区民办华盛怀少学校",
    "district": "嘉定",
    "type": "一般高中",
    "fullType": "一般高中"
  },
  {
    "id": "hs_152001",
    "name": "上海市建平中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_152002",
    "name": "上海市进才中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_152004",
    "name": "上海南汇中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_153001",
    "name": "上海市洋泾中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_153004",
    "name": "上海市高桥中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_153005",
    "name": "上海市川沙中学",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_151078",
    "name": "上海中学东校",
    "district": "浦东",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_152005",
    "name": "上海市浦东复旦附中分校",
    "district": "浦东",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_155004",
    "name": "上海外国语大学附属浦东外国语学校",
    "district": "浦东",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_174004",
    "name": "上海师范大学附属中学松江分校",
    "district": "松江",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_174003",
    "name": "上海外国语大学附属外国语学校松江云间中学",
    "district": "松江",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_154013",
    "name": "华东师范大学第二附属中学前滩学校",
    "district": "浦东",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_024001",
    "name": "上海外国语大学附属外国语学校",
    "district": "虹口",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_155001",
    "name": "上海市实验学校",
    "district": "浦东",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_182001",
    "name": "复旦大学附属中学青浦分校",
    "district": "青浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_062006",
    "name": "上海市市北中学新校",
    "district": "静安",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_122005",
    "name": "上海师范大学附属闵行第三中学",
    "district": "闵行",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_212002",
    "name": "上海市奉贤中学临港分校",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_222002",
    "name": "上海师范大学附属崇明中学",
    "district": "崇明",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_172002",
    "name": "上海市松江一中",
    "district": "松江",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_182002",
    "name": "上海市青浦高级中学",
    "district": "青浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_182003",
    "name": "上海市朱家角中学",
    "district": "青浦",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_222001",
    "name": "上海市崇明中学",
    "district": "崇明",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_212001",
    "name": "上海市奉贤中学",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_202001",
    "name": "上海市金山中学",
    "district": "金山",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_172001",
    "name": "上海市松江二中",
    "district": "松江",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_092003",
    "name": "上海市行知中学",
    "district": "宝山",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_032001",
    "name": "上海市南洋模范中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_032002",
    "name": "上海市位育中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中"
  },
  {
    "id": "hs_042032",
    "name": "上海市上海中学",
    "district": "徐汇",
    "type": "市重点",
    "fullType": "市实验性示范性高中(委属)"
  },
  {
    "id": "hs_214002",
    "name": "华东师范大学第二附属中学临港奉贤分校",
    "district": "奉贤",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中(华二分校)"
  },
  {
    "id": "hs_064013",
    "name": "华东师范大学第二附属中学普陀分校",
    "district": "普陀",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中(华二分校)"
  },
  {
    "id": "hs_174005",
    "name": "华东师范大学第二附属中学松江分校",
    "district": "松江",
    "type": "市重点",
    "fullType": "享受市实验性示范性高中招生政策高中(华二分校)"
  },
  {
    "id": "hs_162001",
    "name": "华东师范大学第三附属中学",
    "district": "金山",
    "type": "市重点",
    "fullType": "市实验性示范性高中"
  },
  {
    "id": "hs_102057",
    "name": "复旦大学附属中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中(委属)"
  },
  {
    "id": "hs_102056",
    "name": "上海交通大学附属中学",
    "district": "杨浦",
    "type": "市重点",
    "fullType": "市实验性示范性高中(委属)"
  },
  {
    "id": "hs_152003",
    "name": "华东师范大学第二附属中学（主校区）",
    "district": "浦东",
    "type": "市重点",
    "fullType": "市实验性示范性高中(委属)"
  },
  {
    "id": "hs_152006",
    "name": "上海师范大学附属中学",
    "district": "闵行",
    "type": "市重点",
    "fullType": "市实验性示范性高中(委属)"
  }
];

export const middleSchools: MiddleSchool[] = [
  {
    "id": "ms_1",
    "name": "上海市嘉定区启良中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_2",
    "name": "上海市嘉定区方泰中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_3",
    "name": "上海市嘉定区迎园中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_4",
    "name": "上海市嘉定区南苑中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_5",
    "name": "上海市嘉定区黄渡中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_6",
    "name": "上海市嘉定区徐行中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_7",
    "name": "上海市嘉定区马陆育才联合中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_8",
    "name": "上海市民办嘉一联合中学",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_9",
    "name": "上海市嘉定区丰庄中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_10",
    "name": "上海市嘉定区外冈中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_11",
    "name": "上海民办华曜嘉定初级中学",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_12",
    "name": "上海市嘉定区震川中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_13",
    "name": "上海大学附属嘉定留云中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_14",
    "name": "交大附中附属嘉定德富中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_15",
    "name": "同济大学附属实验中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_16",
    "name": "上海市嘉定区华江中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_17",
    "name": "上海市嘉定区新城实验中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_18",
    "name": "上海市嘉定区南翔中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_19",
    "name": "上海市嘉定区疁城实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_20",
    "name": "上海市嘉定区戬浜学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_21",
    "name": "上海市嘉定区朱桥学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_22",
    "name": "上海市嘉定区苏民学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_23",
    "name": "上海市民办远东学校",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_24",
    "name": "上海市民办桃李园实验学校",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_25",
    "name": "上海市嘉定区华亭学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_26",
    "name": "上海市嘉定区娄塘学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_27",
    "name": "上海外国语大学嘉定外国语学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_28",
    "name": "上海市嘉定区练川实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_29",
    "name": "上海华旭双语学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_30",
    "name": "中科院上海实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_31",
    "name": "上海嘉定区世界外国语学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_32",
    "name": "上海市嘉定区金鹤学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_33",
    "name": "同济大学附属嘉定实验中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_34",
    "name": "交大附中附属嘉定洪德中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_35",
    "name": "上海市嘉定区嘉二实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_36",
    "name": "上海嘉定区民办华盛怀少学校",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_37",
    "name": "上海市奉贤区古华中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_38",
    "name": "上海市奉贤区实验中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_39",
    "name": "上海市奉贤中学附属南桥中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_40",
    "name": "上海市奉贤区汇贤中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_41",
    "name": "上海市奉贤区塘外中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_42",
    "name": "上海市奉贤区青村中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_43",
    "name": "上海市奉贤区奉城第二中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_44",
    "name": "上海市奉贤区头桥中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_45",
    "name": "上海市奉贤区洪庙中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_46",
    "name": "上海市奉贤区四团中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_47",
    "name": "上海市奉贤区青溪中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_48",
    "name": "上海市奉贤区尚同中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_49",
    "name": "上海市奉贤区崇实中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_50",
    "name": "上海市奉贤区待问中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_51",
    "name": "上海市奉贤中学附属初级中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_52",
    "name": "上海市奉贤区肖塘中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_53",
    "name": "上海市奉贤区育秀中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_54",
    "name": "上海市奉贤区华亭学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_55",
    "name": "上海市奉贤区西渡学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_56",
    "name": "上海市奉贤区新寺学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_57",
    "name": "上海奉贤区世外学校",
    "district": "奉贤",
    "type": "民办"
  },
  {
    "id": "ms_58",
    "name": "上海市奉贤区胡桥学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_59",
    "name": "上海市奉贤区柘林学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_60",
    "name": "上海市奉贤区阳光外国语学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_61",
    "name": "上海市奉贤区庄行学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_62",
    "name": "上海市奉贤区邬桥学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_63",
    "name": "上海市奉贤区齐贤学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_64",
    "name": "上海市奉贤区泰日学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_65",
    "name": "上海市奉贤中学附属三官堂学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_66",
    "name": "上海市奉贤区钱桥学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_67",
    "name": "上海市奉贤区平安学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_68",
    "name": "上海市奉贤区邵厂学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_69",
    "name": "上海市奉贤区弘文学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_70",
    "name": "上海市奉贤区星火学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_71",
    "name": "上海市奉贤区蓝湾五四学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_72",
    "name": "上海市奉贤区肇文学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_73",
    "name": "上海市奉贤区奉浦中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_74",
    "name": "上海大学附属奉贤实验学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_75",
    "name": "柘林学校师大附中教学点",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_76",
    "name": "上海市淞谊中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_77",
    "name": "上海市宝山区教育学院附属中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_78",
    "name": "上海市吴淞初级中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_79",
    "name": "上海市海滨第二中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_80",
    "name": "上海民办宝莲中学",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_81",
    "name": "上海市吴淞第二中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_82",
    "name": "上海市虎林中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_83",
    "name": "上海市泗塘中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_84",
    "name": "上海市宝山区求真中学北校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_85",
    "name": "上海市宝山区求真中学南校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_86",
    "name": "上海市长江第二中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_87",
    "name": "上海市宝山区求真中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_88",
    "name": "上海市大场中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_89",
    "name": "上海市大华中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_90",
    "name": "上海市月浦中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_91",
    "name": "上海市罗泾中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_92",
    "name": "上海市罗南中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_93",
    "name": "上海市民办交华中学",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_94",
    "name": "上海市宝山实验学校高境分校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_95",
    "name": "上海市宝山区罗店第二中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_96",
    "name": "上海市宝山区乐之中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_97",
    "name": "上海市宝山区美兰湖中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_98",
    "name": "上海市宝山区杨泰实验中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_99",
    "name": "上海师范大学附属宝山罗店中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_100",
    "name": "上海市宝山中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_101",
    "name": "上海市顾村中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_102",
    "name": "上海市行知实验中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_103",
    "name": "上海市高境第一中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_104",
    "name": "上海市盛桥中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_105",
    "name": "上海市同洲模范学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_106",
    "name": "上海市宝山实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_107",
    "name": "上海金瑞学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_108",
    "name": "上海市民办锦秋学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_109",
    "name": "上海市月浦实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_110",
    "name": "上海市宝钢新世纪学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_111",
    "name": "上海市吴淞实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_112",
    "name": "上海市宝山区天馨学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_113",
    "name": "上海市宝山区共富实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_114",
    "name": "华东师范大学宝山实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_115",
    "name": "上海大学附属学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_116",
    "name": "上海农场学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_117",
    "name": "上海市宝山区馨家园学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_118",
    "name": "上海市宝山区淞谊实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_119",
    "name": "上海市宝山区鹿鸣学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_120",
    "name": "上海市宝山区庙行实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_121",
    "name": "上海市宝山区顾村实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_122",
    "name": "上海市教育学会宝山实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_123",
    "name": "上海市宝山区行知外国语学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_124",
    "name": "上海市宝山区新民实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_125",
    "name": "上海市刘行新华实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_126",
    "name": "上海民办华曜宝山实验学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_127",
    "name": "上海大学附属宝山外国语学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_128",
    "name": "上海民办至德实验学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_129",
    "name": "上海宝山区世外学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_130",
    "name": "上海师范大学附属宝山实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_131",
    "name": "上海师范大学附属宝山潜溪学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_132",
    "name": "上海市宝山区南大实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_133",
    "name": "上海市存志附属宝山实验学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_134",
    "name": "上海市崇明区三星中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_135",
    "name": "上海市崇明区建设中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_136",
    "name": "上海市崇明区合兴中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_137",
    "name": "上海市崇明区向化中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_138",
    "name": "上海市崇明区崇东中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_139",
    "name": "上海市崇明区裕安中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_140",
    "name": "上海市崇明区实验中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_141",
    "name": "上海市崇明中学附属东门中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_142",
    "name": "上海市崇明区长兴中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_143",
    "name": "上海市崇明区长明中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_144",
    "name": "上海师范大学附属崇明正大中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_145",
    "name": "上海市崇明区庙镇学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_146",
    "name": "上海市崇明区大新中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_147",
    "name": "上海市崇明区三烈中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_148",
    "name": "上海市崇明区大公中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_149",
    "name": "上海民办民一中学",
    "district": "崇明",
    "type": "民办"
  },
  {
    "id": "ms_150",
    "name": "上海市崇明区横沙中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_151",
    "name": "上海新纪元双语学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_152",
    "name": "上海市实验学校附属东滩学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_153",
    "name": "上海市位育初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_154",
    "name": "上海市第二初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_155",
    "name": "上海市南洋模范初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_156",
    "name": "上海市南洋初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_157",
    "name": "上海市田林中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_158",
    "name": "上海市田林第二中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_159",
    "name": "上海市田林第三中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_160",
    "name": "上海市龙苑中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_161",
    "name": "上海市园南中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_162",
    "name": "上海市汾阳中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_163",
    "name": "上海市梅园中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_164",
    "name": "上海市紫阳中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_165",
    "name": "上海市康健外国语实验中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_166",
    "name": "上海市世外中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_167",
    "name": "上海市民办华育中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_168",
    "name": "上海市中国中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_169",
    "name": "上海市第五十四中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_170",
    "name": "上海市徐汇中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_171",
    "name": "徐汇南校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_172",
    "name": "上海市第四中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_173",
    "name": "上海市零陵中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_174",
    "name": "华东理工大学附属中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_175",
    "name": "上海市西南位育中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_176",
    "name": "上海市西南模范中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_177",
    "name": "上海民办位育中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_178",
    "name": "上海民办南模中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_179",
    "name": "上海市位育实验学校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_180",
    "name": "上海市徐汇区上汇实验学校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_181",
    "name": "上海师范大学第三附属实验学校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_182",
    "name": "上海市洵阳中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_183",
    "name": "上海市北海中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_184",
    "name": "上海市延河中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_185",
    "name": "华东师范大学第四附属中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_186",
    "name": "上海市怒江中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_187",
    "name": "上海师范大学附属第二实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_188",
    "name": "上海市真北中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_189",
    "name": "上海市普陀区教育学院附属中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_190",
    "name": "上海市梅陇中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_191",
    "name": "上海兰田中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_192",
    "name": "上海市普陀区梅陇实验中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_193",
    "name": "上海市曹杨中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_194",
    "name": "同济大学第二附属中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_195",
    "name": "上海市甘泉外国语中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_196",
    "name": "上海市新杨中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_197",
    "name": "上海市长征中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_198",
    "name": "上海市桃浦中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_199",
    "name": "上海音乐学院附属安师实验中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_200",
    "name": "上海华东师范大学附属进华中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_201",
    "name": "上海安生学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_202",
    "name": "上海培佳双语学校",
    "district": "普陀",
    "type": "民办"
  },
  {
    "id": "ms_203",
    "name": "上海市铜川学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_204",
    "name": "上海市沙田学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_205",
    "name": "上海市子长学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_206",
    "name": "上海市洛川学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_207",
    "name": "上海市宜川中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_208",
    "name": "上海市曹杨中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_209",
    "name": "上海市普陀区教育学院附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_210",
    "name": "上海市晋元高级中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_211",
    "name": "上海市曹杨第二中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_212",
    "name": "上海市民办新黄浦实验学校",
    "district": "普陀",
    "type": "民办"
  },
  {
    "id": "ms_213",
    "name": "上海市江宁学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_214",
    "name": "上海市中远实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_215",
    "name": "上海市金鼎学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_216",
    "name": "上海外国语大学尚阳外国语学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_217",
    "name": "上海市文达学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_218",
    "name": "上海理工大学附属普陀实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_219",
    "name": "上海市万里城实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_220",
    "name": "上海市铁岭中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_221",
    "name": "上海市鞍山初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_222",
    "name": "上海市十五中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_223",
    "name": "上海市杨浦初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_224",
    "name": "上海市惠民中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_225",
    "name": "上海市辽阳中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_226",
    "name": "上海市新大桥中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_227",
    "name": "上海市建设初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_228",
    "name": "上海市东辽阳中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_229",
    "name": "上海市二十五中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_230",
    "name": "上海理工大学附属初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_231",
    "name": "上海市杨浦区教育学院附属中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_232",
    "name": "上海市同济初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_233",
    "name": "上海市包头中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_234",
    "name": "上海市思源中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_235",
    "name": "上海市鞍山实验中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_236",
    "name": "上海市同济第二初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_237",
    "name": "上海市国和中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_238",
    "name": "上海理工大学附属实验初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_239",
    "name": "上海市控江初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_240",
    "name": "上海市存志学校",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_241",
    "name": "上海民办杨浦凯慧初级中学",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_242",
    "name": "上海市复旦实验中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_243",
    "name": "上海民办兰生中学",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_244",
    "name": "上海市长阳实验学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_245",
    "name": "上海民办杨浦实验学校",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_246",
    "name": "上海音乐学院实验学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_247",
    "name": "上海市黄兴学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_248",
    "name": "上海市昆明学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_249",
    "name": "上海市育鹰学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_250",
    "name": "上海杨浦双语学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_251",
    "name": "上海市市光学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_252",
    "name": "上海民办沪东外国语学校",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_253",
    "name": "上海同大实验学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_254",
    "name": "复旦大学第二附属学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_255",
    "name": "上海市松江区第七中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_256",
    "name": "上海市松江区第五中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_257",
    "name": "上海市松江四中初级中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_258",
    "name": "上海市松江区九亭中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_259",
    "name": "上海市松江区第六中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_260",
    "name": "上海市松江区九亭第二中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_261",
    "name": "上海市松江区新桥中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_262",
    "name": "上海市松江区民办茸一中学",
    "district": "松江",
    "type": "民办"
  },
  {
    "id": "ms_263",
    "name": "上海市松江九峰实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_264",
    "name": "上海领科双语学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_265",
    "name": "上海市松江区洞泾学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_266",
    "name": "上海市松江区李塔汇学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_267",
    "name": "上海市松江区古松学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_268",
    "name": "上海市松江区泖港学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_269",
    "name": "上海市松江区民乐学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_270",
    "name": "上海市松江区泗泾实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_271",
    "name": "上海市松江区五厍学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_272",
    "name": "上海市松江区仓桥学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_273",
    "name": "上海市松江区佘山学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_274",
    "name": "上海市三新学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_275",
    "name": "上海市松江区张泽学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_276",
    "name": "上海市松江区天马山学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_277",
    "name": "上海戏剧学院附属松江实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_278",
    "name": "上海市西外外国语学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_279",
    "name": "上海市松江区叶榭学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_280",
    "name": "上海外国语大学松江外国语学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_281",
    "name": "上海市松江区新浜学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_282",
    "name": "东华大学附属实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_283",
    "name": "上海赫贤学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_284",
    "name": "华东政法大学附属松江实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_285",
    "name": "上海市松江区新闵学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_286",
    "name": "上海师范大学附属松江实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_287",
    "name": "上海市三新学校松江思贤分校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_288",
    "name": "上海市三新学校松江东部分校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_289",
    "name": "上海市建平中学西校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_290",
    "name": "上海市进才中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_291",
    "name": "华东师范大学附属东昌中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_292",
    "name": "上海市洋泾中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_293",
    "name": "上海市上南中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_294",
    "name": "上海市上南中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_295",
    "name": "上海市三林中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_296",
    "name": "上海市洪山中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_297",
    "name": "上海市上南中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_298",
    "name": "上海市清流中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_299",
    "name": "上海市浦泾中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_300",
    "name": "上海交通大学附属浦东实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_301",
    "name": "上海市洋泾中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_302",
    "name": "上海市东昌东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_303",
    "name": "上海市罗山中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_304",
    "name": "上海市金杨中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_305",
    "name": "上海市金川中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_306",
    "name": "上海市华林中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_307",
    "name": "上海市孙桥中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_308",
    "name": "上海市育人中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_309",
    "name": "上海市东林中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_310",
    "name": "上海市施湾中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_311",
    "name": "上海市黄楼中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_312",
    "name": "上海市王港中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_313",
    "name": "上海市杨园中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_314",
    "name": "上海市东沟中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_315",
    "name": "上海师范大学附属高桥实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_316",
    "name": "上海市凌桥中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_317",
    "name": "上海市顾路中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_318",
    "name": "上海市浦东模范中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_319",
    "name": "上海市川沙中学华夏西校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_320",
    "name": "上海市陆行中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_321",
    "name": "上海市致远中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_322",
    "name": "上海市蔡路中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_323",
    "name": "上海市六团中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_324",
    "name": "上海戏剧学院附属浦东实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_325",
    "name": "上海市浦兴中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_326",
    "name": "上海浦东新区民办欣竹中学",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_327",
    "name": "上海市新云台中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_328",
    "name": "上海市陆行中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_329",
    "name": "上海市杨思中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_330",
    "name": "上海民办浦东交中初级中学",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_331",
    "name": "上海市建平香梅中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_332",
    "name": "上海市南汇第二中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_333",
    "name": "上海市南汇第三中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_334",
    "name": "上海市新港中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_335",
    "name": "上海市书院中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_336",
    "name": "上海市大团中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_337",
    "name": "上海市坦直中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_338",
    "name": "上海市傅雷中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_339",
    "name": "上海市澧溪中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_340",
    "name": "上海市六灶中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_341",
    "name": "上海市南汇第四中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_342",
    "name": "上海中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_343",
    "name": "上海市浦东模范中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_344",
    "name": "上海市北蔡中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_345",
    "name": "上海市临港第一中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_346",
    "name": "上海民办光华中学",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_347",
    "name": "上海市南汇第五中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_348",
    "name": "上海市浦东新区进才中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_349",
    "name": "上海市临港实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_350",
    "name": "上海市浦东新区进才中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_351",
    "name": "上海市浦东外国语学校东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_352",
    "name": "上海市浦东模范实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_353",
    "name": "上海市浦东新区三灶实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_354",
    "name": "上海市实验学校南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_355",
    "name": "上海市浦东新区新场实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_356",
    "name": "上海市浦东新区懿德中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_357",
    "name": "上海市浦东新区建平临港中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_358",
    "name": "上海师范大学附属浦东临港中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_359",
    "name": "上海市建平实验地杰中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_360",
    "name": "上海市建平实验张江中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_361",
    "name": "上海市浦东新区建平康梧中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_362",
    "name": "上海市历城中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_363",
    "name": "上海市竹园中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_364",
    "name": "上海市泾南中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_365",
    "name": "上海市香山中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_366",
    "name": "上海市沪新中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_367",
    "name": "上海市育民中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_368",
    "name": "上海第二工业大学附属龚路中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_369",
    "name": "上海市五三中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_370",
    "name": "上海市侨光中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_371",
    "name": "上海市江镇中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_372",
    "name": "上海市合庆中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_373",
    "name": "华东师范大学张江实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_374",
    "name": "上海市三林中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_375",
    "name": "上海市高东中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_376",
    "name": "上海市南汇第一中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_377",
    "name": "上海市老港中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_378",
    "name": "上海市泥城中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_379",
    "name": "上海市长岛中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_380",
    "name": "上海立信会计金融学院附属学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_381",
    "name": "上海市绿川学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_382",
    "name": "上海市洋泾菊园实验学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_383",
    "name": "上海市民办平和学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_384",
    "name": "上海市川沙中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_385",
    "name": "上海市建平实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_386",
    "name": "上海市民办金苹果学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_387",
    "name": "上海民办启能东方外国语学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_388",
    "name": "上海市民办中芯学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_389",
    "name": "上海市进才实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_390",
    "name": "上海市实验学校东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_391",
    "name": "上海市张江集团中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_392",
    "name": "上海浦东新区民办协和双语学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_393",
    "name": "上海市三灶学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_394",
    "name": "上海市黄路学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_395",
    "name": "上海市浦东新区彭镇中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_396",
    "name": "上海市秋萍学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_397",
    "name": "上海市三墩学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_398",
    "name": "上海市浦东新区进才万祥学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_399",
    "name": "上海市宣桥学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_400",
    "name": "上海市航头学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_401",
    "name": "上海市周浦育才学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_402",
    "name": "上海市实验学校附属光明学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_403",
    "name": "上海市东海学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_404",
    "name": "上海市康城学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_405",
    "name": "上海市民办尚德实验学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_406",
    "name": "上海浦东新区民办远翔实验学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_407",
    "name": "上海市周浦实验学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_408",
    "name": "上海浦东新区民办更新学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_409",
    "name": "上海民办华曜浦东实验学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_410",
    "name": "上海浦东新区民办宏文学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_411",
    "name": "上海科技大学附属学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_412",
    "name": "上海浦东民办未来科技学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_413",
    "name": "上海市浦东新区东城学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_414",
    "name": "上海市钟山初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_415",
    "name": "上海市江湾初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_416",
    "name": "上海市复兴实验中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_417",
    "name": "上海市虹口区教育学院实验中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_418",
    "name": "上海市曲阳第二中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_419",
    "name": "上海音乐学院虹口区实验中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_420",
    "name": "上海市海南中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_421",
    "name": "上海市丰镇中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_422",
    "name": "上海市鲁迅初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_423",
    "name": "上海市继光初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_424",
    "name": "华东师范大学第一附属初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_425",
    "name": "上海市民办新复兴初级中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_426",
    "name": "上海市民办新华初级中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_427",
    "name": "上海市民办新北郊初级中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_428",
    "name": "上海市第五十二中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_429",
    "name": "上海师范大学附属虹口中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_430",
    "name": "同济大学附属澄衷中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_431",
    "name": "上海市民办迅行中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_432",
    "name": "上海外国语大学第一实验学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_433",
    "name": "上海市北郊学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_434",
    "name": "上海市长青学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_435",
    "name": "上海市虹口实验学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_436",
    "name": "上海市罗星中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_437",
    "name": "上海市松隐中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_438",
    "name": "上海市亭新中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_439",
    "name": "上海市漕泾中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_440",
    "name": "上海市山阳中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_441",
    "name": "上海市张堰第二中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_442",
    "name": "上海市廊下中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_443",
    "name": "上海市蒙山中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_444",
    "name": "上海市金山区教育学院附属中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_445",
    "name": "上海市金山初级中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_446",
    "name": "上海市西林中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_447",
    "name": "上海市朱行中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_448",
    "name": "上海金山区健桥实验中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_449",
    "name": "上海市同凯中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_450",
    "name": "上海市金山实验中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_451",
    "name": "上海师范大学附属金山前京中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_452",
    "name": "华东师范大学附属枫泾中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_453",
    "name": "上海市金卫中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_454",
    "name": "上海市民办永昌中学",
    "district": "金山",
    "type": "民办"
  },
  {
    "id": "ms_455",
    "name": "上海市干巷学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_456",
    "name": "上海市新农学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_457",
    "name": "上海市民办金盟学校",
    "district": "金山",
    "type": "民办"
  },
  {
    "id": "ms_458",
    "name": "上海金山杭州湾双语学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_459",
    "name": "上海金山区世外学校",
    "district": "金山",
    "type": "民办"
  },
  {
    "id": "ms_460",
    "name": "上海市金山区吕巷学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_461",
    "name": "上海市金山区钱圩学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_462",
    "name": "上海市第三女子初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_463",
    "name": "上海市天山第二中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_464",
    "name": "上海市姚连生中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_465",
    "name": "上海市天山初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_466",
    "name": "上海市虹桥中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_467",
    "name": "上海市延安实验初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_468",
    "name": "上海市复旦初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_469",
    "name": "上海市泸定中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_470",
    "name": "上海市娄山中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_471",
    "name": "上海市西延安中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_472",
    "name": "上海市新泾中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_473",
    "name": "上海市民办新世纪中学",
    "district": "长宁",
    "type": "民办"
  },
  {
    "id": "ms_474",
    "name": "上海市延安初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_475",
    "name": "上海市建青实验学校",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_476",
    "name": "上海市西郊学校",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_477",
    "name": "华东政法大学附属中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_478",
    "name": "上海市仙霞高级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_479",
    "name": "上海市开元学校",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_480",
    "name": "上海市航华中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_481",
    "name": "上海市闵行区上虹中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_482",
    "name": "上海市龙柏中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_483",
    "name": "上海市闵行区七宝第二中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_484",
    "name": "上海市罗阳中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_485",
    "name": "上海市闵行区莘松中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_486",
    "name": "上海市闵行区北桥中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_487",
    "name": "上海市闵行区浦江第一中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_488",
    "name": "上海市闵行区浦江第二中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_489",
    "name": "上海市闵行区浦江第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_490",
    "name": "上海市闵行第四中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_491",
    "name": "上海市闵行区颛桥中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_492",
    "name": "上海市实验学校西校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_493",
    "name": "上海市闵行区鹤北初级中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_494",
    "name": "上海市闵行区龙茗中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_495",
    "name": "上海市七宝实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_496",
    "name": "上海市吴泾中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_497",
    "name": "上海市闵行区七宝第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_498",
    "name": "上海市闵行区浦航实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_499",
    "name": "上海师范大学附属闵行第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_500",
    "name": "上海市闵行区田园外国语中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_501",
    "name": "上海市闵行中学附属实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_502",
    "name": "上海尚师初级中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_503",
    "name": "上海市骏博外国语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_504",
    "name": "上海市闵行第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_505",
    "name": "上海交通大学附属第二中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_506",
    "name": "上海市民办上宝中学",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_507",
    "name": "上海市文来中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_508",
    "name": "上海市民办文绮中学",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_509",
    "name": "上海闵行区协和双语教科学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_510",
    "name": "上海市闵行区诸翟学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_511",
    "name": "华东师范大学附属闵行虹桥学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_512",
    "name": "上海市莘光学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_513",
    "name": "上海市闵行区纪王学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_514",
    "name": "上海市马桥强恕学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_515",
    "name": "上海市古美学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_516",
    "name": "上海师范大学康城实验学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_517",
    "name": "上海市莘城学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_518",
    "name": "上海市闵行区明星学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_519",
    "name": "上海市闵行区文来实验学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_520",
    "name": "上海市闵行区君莲学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_521",
    "name": "上海市闵行区华漕学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_522",
    "name": "上海市闵行区七宝文来学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_523",
    "name": "华东师范大学附属闵行永德学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_524",
    "name": "上海市民办德英乐实验学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_525",
    "name": "上海市燎原双语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_526",
    "name": "上海市民办协和双语尚音学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_527",
    "name": "上海市民办万源城协和双语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_528",
    "name": "上海星河湾双语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_529",
    "name": "上海博世凯外国语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_530",
    "name": "上海民办圣华紫竹双语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_531",
    "name": "上海市青浦区实验中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_532",
    "name": "上海市青浦区东方中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_533",
    "name": "上海市青浦区尚美中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_534",
    "name": "上海市青浦区徐泾中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_535",
    "name": "上海市青浦区凤溪中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_536",
    "name": "上海市青浦区重固中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_537",
    "name": "上海市青浦区豫才中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_538",
    "name": "上海市青浦区华新中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_539",
    "name": "上海市青浦区白鹤中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_540",
    "name": "上海市青浦区珠溪中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_541",
    "name": "上海市青浦区沈巷中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_542",
    "name": "上海市青浦区颜安中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_543",
    "name": "上海市青浦区金泽中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_544",
    "name": "上海政法学院附属青浦崧淀中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_545",
    "name": "上海市教育学会青浦清河湾中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_546",
    "name": "上海市青浦区教育学院附属中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_547",
    "name": "上海市青浦区第一中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_548",
    "name": "上海市青浦区崧泽学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_549",
    "name": "上海市博文学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_550",
    "name": "上海市青浦区少年业余体育学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_551",
    "name": "上海市毓秀学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_552",
    "name": "上海宋庆龄学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_553",
    "name": "上海五浦汇实验学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_554",
    "name": "上海青浦区世外学校",
    "district": "青浦",
    "type": "民办"
  },
  {
    "id": "ms_555",
    "name": "上海青浦平和双语学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_556",
    "name": "上海青浦区协和双语学校",
    "district": "青浦",
    "type": "民办"
  },
  {
    "id": "ms_557",
    "name": "上海青浦兰生学校",
    "district": "青浦",
    "type": "民办"
  },
  {
    "id": "ms_558",
    "name": "上海市市西初级中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_559",
    "name": "上海市育才初级中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_560",
    "name": "上海市静安区协和双语培明学校",
    "district": "静安",
    "type": "民办"
  },
  {
    "id": "ms_561",
    "name": "上海市时代中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_562",
    "name": "上海市五四中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_563",
    "name": "民办上海上外静安外国语中学",
    "district": "静安",
    "type": "民办"
  },
  {
    "id": "ms_564",
    "name": "上海市静安区市北初级中学北校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_565",
    "name": "上海市新中初级中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_566",
    "name": "上海市静安区实验中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_567",
    "name": "上海市朝阳中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_568",
    "name": "上海市市北初级中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_569",
    "name": "上海市风华初级中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_570",
    "name": "上海市彭浦初级中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_571",
    "name": "上海外国语大学苏河湾实验中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_572",
    "name": "上海市青云中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_573",
    "name": "上海市岭南中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_574",
    "name": "上海市保德中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_575",
    "name": "上海市彭浦第三中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_576",
    "name": "上海市彭浦第四中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_577",
    "name": "上海市回民中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_578",
    "name": "上海市民立中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_579",
    "name": "上海市第一中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_580",
    "name": "上海市久隆模范中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_581",
    "name": "上海市闸北第八中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_582",
    "name": "上海市华东模范中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_583",
    "name": "同济大学附属七一中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_584",
    "name": "上海市向东中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_585",
    "name": "上海田家炳中学",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_586",
    "name": "上海市民办扬波中学",
    "district": "静安",
    "type": "民办"
  },
  {
    "id": "ms_587",
    "name": "上海市民办新和中学",
    "district": "静安",
    "type": "民办"
  },
  {
    "id": "ms_588",
    "name": "上海市民办风范中学",
    "district": "静安",
    "type": "民办"
  },
  {
    "id": "ms_589",
    "name": "上海市爱国学校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_590",
    "name": "上海市静安区教育学院附属学校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_591",
    "name": "上海市华灵学校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_592",
    "name": "上海市三泉学校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_593",
    "name": "上海戏剧学院附属静安学校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_594",
    "name": "上海市静安区大宁国际学校",
    "district": "静安",
    "type": "公办"
  },
  {
    "id": "ms_595",
    "name": "上海市格致初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_596",
    "name": "上海市大同初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_597",
    "name": "上海市向明初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_598",
    "name": "上海市光明初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_599",
    "name": "上海市敬业初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_600",
    "name": "上海市卢湾中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_601",
    "name": "上海市市八初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_602",
    "name": "上海市尚文中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_603",
    "name": "上海交通大学附属黄浦实验中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_604",
    "name": "上海市清华中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_605",
    "name": "上海市民办明珠中学",
    "district": "黄浦",
    "type": "民办"
  },
  {
    "id": "ms_606",
    "name": "上海市民办立达中学",
    "district": "黄浦",
    "type": "民办"
  },
  {
    "id": "ms_607",
    "name": "上海市震旦外国语中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_608",
    "name": "上海市第十中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_609",
    "name": "上海理工大学附属储能中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_610",
    "name": "上海市金陵中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_611",
    "name": "上海市市南中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_612",
    "name": "上海音乐学院附属黄浦比乐中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_613",
    "name": "上海民办永昌学校",
    "district": "黄浦",
    "type": "民办"
  },
  {
    "id": "ms_614",
    "name": "上海师范大学附属宝山经纬实验中学",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_615",
    "name": "上海市宝山区上海大学附属中学实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_616",
    "name": "上海世外教育附属宝山大华实验学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_617",
    "name": "上海市白茅岭学校 (上海市白茅岭学校军天湖分校)",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_618",
    "name": "上海外国语大学附属宝山双语学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_619",
    "name": "上海市行知中学附属宝山实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_620",
    "name": "上海世外教育附属宝山美兰湖实验学校",
    "district": "宝山",
    "type": "民办"
  },
  {
    "id": "ms_621",
    "name": "华东师范大学附属宝山宝杨实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_622",
    "name": " 华东师范大学附属宝山宝杨实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_623",
    "name": " 上海市宝山区陈伯吹罗店实验学校",
    "district": "宝山",
    "type": "公办"
  },
  {
    "id": "ms_624",
    "name": " 上海市崇明区三星中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_625",
    "name": " 上海市崇明区建设中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_626",
    "name": " 上海市崇明区合兴中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_627",
    "name": " 上海市崇明区向化中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_628",
    "name": " 上海市崇明区崇东中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_629",
    "name": " 上海市崇明区裕安中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_630",
    "name": " 上海市崇明区实验中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_631",
    "name": " 上海市崇明中学附属东门中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_632",
    "name": " 上海市崇明区凌云中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_633",
    "name": " 上海市崇明区长兴中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_634",
    "name": " 上海市崇明区长明中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_635",
    "name": " 上海师范大学附属崇明正大中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_636",
    "name": " 上海市向明初级中学附属崇明区江帆中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_637",
    "name": " 上海市崇明区庙镇学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_638",
    "name": " 上海市崇明区大新中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_639",
    "name": " 上海市崇明区三烈中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_640",
    "name": " 上海市崇明区大公中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_641",
    "name": " 上海民办民一中学",
    "district": "崇明",
    "type": "民办"
  },
  {
    "id": "ms_642",
    "name": " 上海市崇明区横沙中学",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_643",
    "name": " 上海新纪元双语学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_644",
    "name": " 上海市崇明区长江学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_645",
    "name": " 上海市崇明区新海学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_646",
    "name": " 上海市实验学校附属东滩学校",
    "district": "崇明",
    "type": "公办"
  },
  {
    "id": "ms_647",
    "name": " 上海市奉贤区青少年业余体育学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_648",
    "name": " 上海市奉贤区古华中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_649",
    "name": " 上海市奉贤区实验中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_650",
    "name": " 上海市奉贤中学附属南桥中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_651",
    "name": " 上海市奉贤区汇贤中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_652",
    "name": " 上海市奉贤区塘外中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_653",
    "name": " 上海市奉贤区青村中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_654",
    "name": " 上海市奉贤区奉城第二中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_655",
    "name": " 上海市奉贤区头桥中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_656",
    "name": " 上海市奉贤区洪庙中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_657",
    "name": " 上海市奉贤区四团中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_658",
    "name": " 上海市奉贤区青溪中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_659",
    "name": " 上海市奉贤区尚同中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_660",
    "name": " 上海外国语大学附属奉贤实验中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_661",
    "name": " 上海市奉贤区崇实中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_662",
    "name": " 上海市奉贤区待问中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_663",
    "name": " 上海市奉贤中学附属初级中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_664",
    "name": " 上海市奉贤区肖塘中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_665",
    "name": " 上海市奉贤区育秀中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_666",
    "name": " 上海市奉贤区华亭学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_667",
    "name": " 上海市奉贤区西渡学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_668",
    "name": " 上海市奉贤区新寺学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_669",
    "name": " 上海奉贤区世外学校",
    "district": "奉贤",
    "type": "民办"
  },
  {
    "id": "ms_670",
    "name": " 上海市奉贤区胡桥学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_671",
    "name": " 上海市奉贤区柘林学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_672",
    "name": " 上海市奉贤区阳光外国语学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_673",
    "name": " 上海市奉贤区庄行学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_674",
    "name": " 上海市奉贤区邬桥学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_675",
    "name": " 上海市奉贤区齐贤学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_676",
    "name": " 上海市奉贤区泰日学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_677",
    "name": " 上海市奉贤中学附属三官堂学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_678",
    "name": " 上海市奉贤区钱桥学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_679",
    "name": " 上海市奉贤区平安学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_680",
    "name": " 上海市奉贤区邵厂学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_681",
    "name": " 上海市奉贤区弘文学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_682",
    "name": " 上海市奉贤区星火学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_683",
    "name": " 上海市奉贤区五四学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_684",
    "name": " 上海市奉贤区肇文学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_685",
    "name": " 上海市奉贤区奉浦中学",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_686",
    "name": " 上海大学附属奉贤实验学校",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_687",
    "name": " 上海奉贤区世外教育附属临港外国语学校",
    "district": "奉贤",
    "type": "民办"
  },
  {
    "id": "ms_688",
    "name": " 柘林学校师大附中教学点",
    "district": "奉贤",
    "type": "公办"
  },
  {
    "id": "ms_689",
    "name": " 上海市虹口实验学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_690",
    "name": " 上海市曲阳第二中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_691",
    "name": " 上海市钟山初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_692",
    "name": " 上海市长青学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_693",
    "name": " 上海市公办华初",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_694",
    "name": " 上海市丰镇中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_695",
    "name": " 上海市北郊学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_696",
    "name": " 上海市江湾初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_697",
    "name": " 上海市复兴实验学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_698",
    "name": " 上海市上音实验学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_699",
    "name": " 上海市实验中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_700",
    "name": " 上海市继光初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_701",
    "name": " 上海市海南中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_702",
    "name": " 上海市鲁迅初级中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_703",
    "name": " 上海市第五十二中学",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_704",
    "name": " 上海市上师虹口学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_705",
    "name": " 上海市同济澄衷学校",
    "district": "虹口",
    "type": "公办"
  },
  {
    "id": "ms_706",
    "name": " 上海市世外欧阳学校",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_707",
    "name": " 上海市民办新华初中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_708",
    "name": " 上海市民办新复兴初级中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_709",
    "name": " 上海市民办新北郊初级中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_710",
    "name": " 上海市民办迅行中学",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_711",
    "name": " 上海市民办克勒外国语学校",
    "district": "虹口",
    "type": "民办"
  },
  {
    "id": "ms_712",
    "name": " 格致初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_713",
    "name": " 大同初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_714",
    "name": " 向明初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_715",
    "name": " 大境初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_716",
    "name": " 光明初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_717",
    "name": " 敬业初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_718",
    "name": " 卢湾中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_719",
    "name": " 市八初级中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_720",
    "name": " 尚文中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_721",
    "name": " 交附黄浦实验学校",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_722",
    "name": " 清华中学",
    "district": "黄浦",
    "type": "公办"
  },
  {
    "id": "ms_723",
    "name": " 上海市嘉定区启良中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_724",
    "name": " 上海市嘉定区方泰中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_725",
    "name": " 上海市曹杨二中附属江桥实验中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_726",
    "name": " 上海市嘉定区迎园中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_727",
    "name": " 上海市嘉定区南苑中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_728",
    "name": " 上海市嘉定区黄渡中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_729",
    "name": " 上海市嘉定区徐行中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_730",
    "name": " 上海市嘉定区马陆育才联合中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_731",
    "name": " 上海市民办嘉一联合中学",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_732",
    "name": " 上海市嘉定区丰庄中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_733",
    "name": " 上海市嘉定区外冈中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_734",
    "name": " 上海民办华曜嘉定初级中学",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_735",
    "name": " 上海市嘉定区震川中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_736",
    "name": " 上海大学附属嘉定留云中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_737",
    "name": " 交大附中附属嘉定德富中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_738",
    "name": " 同济大学附属实验中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_739",
    "name": " 上海市嘉定区华江中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_740",
    "name": " 上海市嘉定区新城实验中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_741",
    "name": " 上海市嘉定区南翔中学",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_742",
    "name": " 上海市嘉定区疁城实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_743",
    "name": " 上海市嘉定区戬浜学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_744",
    "name": " 上海市嘉定区朱桥学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_745",
    "name": " 上海市民办远东学校",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_746",
    "name": " 上海市民办桃李园实验学校",
    "district": "嘉定",
    "type": "民办"
  },
  {
    "id": "ms_747",
    "name": " 上海市嘉定区华亭学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_748",
    "name": " 上海市嘉定区娄塘学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_749",
    "name": " 上海外国语大学嘉定外国语学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_750",
    "name": " 上海市嘉定区练川实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_751",
    "name": " 上海华旭双语学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_752",
    "name": " 中科院上海实验学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_753",
    "name": " 上海嘉定区世界外国语学校",
    "district": "嘉定",
    "type": "公办"
  },
  {
    "id": "ms_754",
    "name": " 上海市罗星中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_755",
    "name": " 上海市松隐中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_756",
    "name": " 上海市亭新中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_757",
    "name": " 上海市漕泾中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_758",
    "name": " 上海市山阳中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_759",
    "name": " 上海市张堰第二中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_760",
    "name": " 上海市金山区钱圩学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_761",
    "name": " 上海市廊下中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_762",
    "name": " 上海市蒙山中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_763",
    "name": " 上海市金山区教育学院附属中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_764",
    "name": " 上海市金山初级中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_765",
    "name": " 上海市西林中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_766",
    "name": " 上海市朱行中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_767",
    "name": " 上海市金山区青少年业余体育学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_768",
    "name": " 上海市同凯中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_769",
    "name": " 华东师范大学附属枫泾中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_770",
    "name": " 上海市金卫中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_771",
    "name": " 上海市干巷学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_772",
    "name": " 上海市新农学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_773",
    "name": " 上海市金山区吕巷学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_774",
    "name": " 上海市金山实验中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_775",
    "name": " 上海金山区健桥实验中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_776",
    "name": " 上海市民办金盟学校",
    "district": "金山",
    "type": "民办"
  },
  {
    "id": "ms_777",
    "name": " 上海金山杭州湾双语学校",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_778",
    "name": " 上海金山区世外学校",
    "district": "金山",
    "type": "民办"
  },
  {
    "id": "ms_779",
    "name": " 上海市民办永昌中学",
    "district": "金山",
    "type": "民办"
  },
  {
    "id": "ms_780",
    "name": " 上海师范大学附属金山前京中学",
    "district": "金山",
    "type": "公办"
  },
  {
    "id": "ms_781",
    "name": " 上海市航华中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_782",
    "name": " 上海市闵行区上虹中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_783",
    "name": " 上海市龙柏中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_784",
    "name": " 上海市闵行区七宝第二中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_785",
    "name": " 上海市罗阳中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_786",
    "name": " 上海市闵行区莘松中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_787",
    "name": " 上海市七宝中学附属闵行金都实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_788",
    "name": " 上海市闵行区北桥中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_789",
    "name": " 上海市闵行区浦江第一中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_790",
    "name": " 上海市闵行区浦江第二中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_791",
    "name": " 上海市闵行区浦江第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_792",
    "name": " 上海市闵行第四中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_793",
    "name": " 上海市闵行区颛桥中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_794",
    "name": " 上海市实验学校西校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_795",
    "name": " 上海市闵行区鹤北初级中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_796",
    "name": " 上海市闵行区龙茗中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_797",
    "name": " 上海市七宝实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_798",
    "name": " 上海市师资培训中心附属闵行实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_799",
    "name": " 上海市吴泾中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_800",
    "name": " 上海市闵行区七宝第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_801",
    "name": " 华东师范大学第二附属中学附属初级中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_802",
    "name": " 上海市闵行区浦航实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_803",
    "name": " 上海市闵行区马桥复旦万科实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_804",
    "name": " 上海中医药大学附属闵行晶城中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_805",
    "name": " 上海师范大学附属闵行第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_806",
    "name": " 上海市闵行区田园外国语中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_807",
    "name": " 上海市闵行中学附属实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_808",
    "name": " 上海尚师初级中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_809",
    "name": " 上海市骏博外国语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_810",
    "name": " 上海市闵行第三中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_811",
    "name": " 上海交通大学附属第二中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_812",
    "name": " 上海市民办上宝中学",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_813",
    "name": " 上海市七宝中学附属鑫都实验中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_814",
    "name": " 上海市文来中学",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_815",
    "name": " 上海市民办文绮中学",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_816",
    "name": " 上海闵行区协和双语教科学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_817",
    "name": " 上海市闵行区诸翟学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_818",
    "name": " 华东师范大学附属闵行虹桥学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_819",
    "name": " 上海市莘光学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_820",
    "name": " 上海市闵行区纪王学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_821",
    "name": " 上海市马桥强恕学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_822",
    "name": " 上海市古美学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_823",
    "name": " 上海师范大学康城实验学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_824",
    "name": " 上海市莘城学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_825",
    "name": " 上海市闵行区明星学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_826",
    "name": " 上海市闵行区文来实验学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_827",
    "name": " 上海市闵行区君莲学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_828",
    "name": " 上海市闵行区华漕学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_829",
    "name": " 上海世外教育附属浦江外国语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_830",
    "name": " 上海交通大学附属闵行马桥实验学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_831",
    "name": " 上海市闵行区七宝文来学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_832",
    "name": " 华东理工大学附属闵行梅陇实验学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_833",
    "name": " 华东师范大学附属闵行永德学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_834",
    "name": " 上海市民办德英乐实验学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_835",
    "name": " 上海市燎原双语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_836",
    "name": " 上海市民办协和双语尚音学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_837",
    "name": " 上海市民办协和双语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_838",
    "name": " 上海市民办万源城协和双语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_839",
    "name": " 上海星河湾双语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_840",
    "name": " 上海博世凯外国语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_841",
    "name": " 上海闵行区万科双语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_842",
    "name": " 上海闵行区民办美高双语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_843",
    "name": " 上海闵行区诺达双语学校",
    "district": "闵行",
    "type": "公办"
  },
  {
    "id": "ms_844",
    "name": " 上海民办圣华紫竹双语学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_845",
    "name": " 上海闵行区民办德闳学校",
    "district": "闵行",
    "type": "民办"
  },
  {
    "id": "ms_846",
    "name": " 上海市建平中学西校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_847",
    "name": " 上海市进才中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_848",
    "name": " 华东师范大学附属东昌中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_849",
    "name": " 上海市洋泾中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_850",
    "name": " 上海市上南中学东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_851",
    "name": " 上海市上南中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_852",
    "name": " 上海市三林中学北校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_853",
    "name": " 上海市洪山中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_854",
    "name": " 上海市上南中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_855",
    "name": " 上海市清流中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_856",
    "name": " 上海市浦泾中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_857",
    "name": " 上海交通大学附属浦东实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_858",
    "name": " 上海市浦东新区教育学院附属实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_859",
    "name": " 上海市洋泾中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_860",
    "name": " 上海市东昌东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_861",
    "name": " 上海市罗山中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_862",
    "name": " 上海市金杨中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_863",
    "name": " 上海市金川中学 (现上海市建平实验中学金川校区)",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_864",
    "name": " 上海市华林中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_865",
    "name": " 上海市孙桥中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_866",
    "name": " 上海市育人中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_867",
    "name": " 上海市东林中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_868",
    "name": " 上海市施湾中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_869",
    "name": " 上海市江镇中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_870",
    "name": " 上海市合庆中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_871",
    "name": " 上海市蔡路中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_872",
    "name": " 上海市六团中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_873",
    "name": " 上海戏剧学院附属浦东实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_874",
    "name": " 上海市浦兴中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_875",
    "name": " 上海浦东新区民办恒洋外国语学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_876",
    "name": " 上海浦东新区民办欣竹中学",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_877",
    "name": " 上海市新云台中学 (现上海市建平实验地杰中学博华路校区)",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_878",
    "name": " 上海市陆行中学南校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_879",
    "name": " 上海市杨思中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_880",
    "name": " 上海民办浦东交中初级中学",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_881",
    "name": " 上海市建平香梅中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_882",
    "name": " 上海市南汇第二中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_883",
    "name": " 上海民办启能东方外国语学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_884",
    "name": " 上海市民办中芯学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_885",
    "name": " 上海市进才实验中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_886",
    "name": " 上海市实验学校东校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_887",
    "name": " 上海市张江集团中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_888",
    "name": " 上海浦东新区民办协和双语学校",
    "district": "浦东",
    "type": "民办"
  },
  {
    "id": "ms_889",
    "name": " 上海市浦东新区建平南汇实验学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_890",
    "name": " 上海市三灶学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_891",
    "name": " 上海市黄路学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_892",
    "name": " 上海市浦东新区彭镇中学",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_893",
    "name": " 上海师范大学附属秋萍学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_894",
    "name": " 上海市三墩学校",
    "district": "浦东",
    "type": "公办"
  },
  {
    "id": "ms_895",
    "name": " 上海市洵阳中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_896",
    "name": " 上海市北海中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_897",
    "name": " 上海市延河中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_898",
    "name": " 上海市曹杨第二中学附属实验中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_899",
    "name": " 华东师范大学第四附属中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_900",
    "name": " 上海市怒江中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_901",
    "name": " 上海师范大学附属第二实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_902",
    "name": " 上海市真北中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_903",
    "name": " 上海市普陀区教育学院附属中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_904",
    "name": " 上海市梅陇中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_905",
    "name": " 上海兰田中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_906",
    "name": " 上海市普陀区梅陇实验中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_907",
    "name": " 上海市曹杨中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_908",
    "name": " 同济大学第二附属中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_909",
    "name": " 上海市甘泉外国语中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_910",
    "name": " 上海市新杨中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_911",
    "name": " 上海市长征中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_912",
    "name": " 上海市桃浦中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_913",
    "name": " 上海市晋元高级中学附属学校南校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_914",
    "name": " 上海音乐学院附属安师实验中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_915",
    "name": " 上海华东师范大学附属进华中学",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_916",
    "name": " 上海安生学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_917",
    "name": " 上海培佳双语学校",
    "district": "普陀",
    "type": "民办"
  },
  {
    "id": "ms_918",
    "name": " 上海市铜川学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_919",
    "name": " 上海市沙田学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_920",
    "name": " 华东师范大学附属外国语实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_921",
    "name": " 上海市子长学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_922",
    "name": " 上海市洛川学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_923",
    "name": " 上海市宜川中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_924",
    "name": " 上海市曹杨中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_925",
    "name": " 上海市普陀区教育学院附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_926",
    "name": " 上海市晋元高级中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_927",
    "name": " 上海市曹杨第二中学附属学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_928",
    "name": " 上海市民办新黄浦实验学校",
    "district": "普陀",
    "type": "民办"
  },
  {
    "id": "ms_929",
    "name": " 上海市江宁学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_930",
    "name": " 上海市中远实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_931",
    "name": " 上海市金鼎学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_932",
    "name": " 上海外国语大学尚阳外国语学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_933",
    "name": " 上海市文达学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_934",
    "name": " 上海理工大学附属普陀实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_935",
    "name": " 上海市万里城实验学校",
    "district": "普陀",
    "type": "公办"
  },
  {
    "id": "ms_936",
    "name": " 上海市青浦区实验中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_937",
    "name": " 上海市青浦区东方中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_938",
    "name": " 上海市青浦区尚美中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_939",
    "name": " 上海市青浦区徐泾中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_940",
    "name": " 上海市青浦区凤溪中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_941",
    "name": " 上海市青浦区重固中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_942",
    "name": " 上海市青浦区豫才中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_943",
    "name": " 上海市青浦区华新中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_944",
    "name": " 上海市青浦区白鹤中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_945",
    "name": " 上海市青浦区珠溪中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_946",
    "name": " 上海市青浦区沈巷中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_947",
    "name": " 上海市青浦区颜安中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_948",
    "name": " 上海市青浦区金泽中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_949",
    "name": " 上海政法学院附属青浦崧淀中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_950",
    "name": " 上海市教育学会青浦清河湾中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_951",
    "name": " 上海市青浦区教育学院附属中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_952",
    "name": " 上海市青浦区第一中学",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_953",
    "name": " 上海市毓华学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_954",
    "name": " 上海市青浦区崧泽学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_955",
    "name": " 上海市博文学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_956",
    "name": " 上海市青浦区少年业余体育学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_957",
    "name": " 上海市毓秀学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_958",
    "name": " 上海宋庆龄学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_959",
    "name": " 上海市佳信学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_960",
    "name": " 上海五浦汇实验学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_961",
    "name": " 上海青浦区世外学校",
    "district": "青浦",
    "type": "民办"
  },
  {
    "id": "ms_962",
    "name": " 上海青浦平和双语学校",
    "district": "青浦",
    "type": "公办"
  },
  {
    "id": "ms_963",
    "name": " 上海青浦区协和双语学校",
    "district": "青浦",
    "type": "民办"
  },
  {
    "id": "ms_964",
    "name": " 上海青浦兰生学校",
    "district": "青浦",
    "type": "民办"
  },
  {
    "id": "ms_965",
    "name": " 上海市松江区第七中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_966",
    "name": " 上海对外经贸大学附属松江实验学校花园分校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_967",
    "name": " 上海市松江区第五中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_968",
    "name": " 上海市松江四中初级中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_969",
    "name": " 上海市松江区九亭中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_970",
    "name": " 上海市松江区第六中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_971",
    "name": " 上海市松江区九亭第二中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_972",
    "name": " 上海外国语大学附属外国语学校松江云间中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_973",
    "name": " 上海市松江区新桥中学",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_974",
    "name": " 上海市松江区民办茸一中学",
    "district": "松江",
    "type": "民办"
  },
  {
    "id": "ms_975",
    "name": " 上海市松江九峰实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_976",
    "name": " 上海领科双语学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_977",
    "name": " 上海市松江区洞泾学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_978",
    "name": " 上海市松江区李塔汇学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_979",
    "name": " 上海市松江区古松学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_980",
    "name": " 上海市松江区泖港学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_981",
    "name": " 上海市松江区民乐学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_982",
    "name": " 上海市松江区泗泾实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_983",
    "name": " 上海市松江区佘山外国语实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_984",
    "name": " 上海市松江区五厍学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_985",
    "name": " 东华大学附属实验学校松江小昆山分校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_986",
    "name": " 上海市松江区仓桥学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_987",
    "name": " 上海市松江区佘山学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_988",
    "name": " 上海市三新学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_989",
    "name": " 上海市松江区车墩学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_990",
    "name": " 上海市松江区张泽学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_991",
    "name": " 上海市松江区天马山学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_992",
    "name": " 上海戏剧学院附属松江实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_993",
    "name": " 上海市西外外国语学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_994",
    "name": " 上海市松江区叶榭学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_995",
    "name": " 上海外国语大学松江外国语学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_996",
    "name": " 上海市松江区新浜学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_997",
    "name": " 东华大学附属实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_998",
    "name": " 上海赫贤学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_999",
    "name": " 华东政法大学附属松江实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_1000",
    "name": " 上海市松江区新闵学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_1001",
    "name": " 上海师范大学附属松江实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_1002",
    "name": " 上海工程技术大学附属松江泗泾实验学校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_1003",
    "name": " 上海市三新学校松江思贤分校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_1004",
    "name": " 上海市三新学校松江东部分校",
    "district": "松江",
    "type": "公办"
  },
  {
    "id": "ms_1005",
    "name": " 上海市位育初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1006",
    "name": " 上海市第二初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1007",
    "name": " 上海市南洋模范初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1008",
    "name": " 上海市南洋初级中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1009",
    "name": " 上海市田林中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1010",
    "name": " 上海市田林第二中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1011",
    "name": " 上海市田林第三中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1012",
    "name": " 上海市龙苑中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1013",
    "name": " 上海市徐汇区教育学院附属实验中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1014",
    "name": " 上海市徐汇区教育学院附属实验中学南部分校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1015",
    "name": " 上海市园南中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1016",
    "name": " 上海市汾阳中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1017",
    "name": " 上海市梅园中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1018",
    "name": " 上海市紫阳中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1019",
    "name": " 上海市康健外国语实验中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1020",
    "name": " 上海市世外中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_1021",
    "name": " 上海市民办华育中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_1022",
    "name": " 上海市中国中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1023",
    "name": " 上海市第五十四中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1024",
    "name": " 上海市徐汇中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1025",
    "name": " 徐汇南校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1026",
    "name": " 上海市第四中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1027",
    "name": " 上海市零陵中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1028",
    "name": " 华东理工大学附属中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1029",
    "name": " 上海市西南位育中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1030",
    "name": " 上海市西南模范中学",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1031",
    "name": " 上海民办位育中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_1032",
    "name": " 上海民办南模中学",
    "district": "徐汇",
    "type": "民办"
  },
  {
    "id": "ms_1033",
    "name": " 上海市位育实验学校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1034",
    "name": " 上海市徐汇区上汇实验学校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1035",
    "name": " 上海师范大学第三附属实验学校",
    "district": "徐汇",
    "type": "公办"
  },
  {
    "id": "ms_1036",
    "name": " 上海市铁岭中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1037",
    "name": " 上海市鞍山初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1038",
    "name": " 上海市十五中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1039",
    "name": " 上海市杨浦初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1040",
    "name": " 上海市惠民中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1041",
    "name": " 上海市辽阳中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1042",
    "name": " 上海市新大桥中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1043",
    "name": " 上海市建设初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1044",
    "name": " 上海市东辽阳中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1045",
    "name": " 上海市二十五中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1046",
    "name": " 上海理工大学附属初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1047",
    "name": " 上海市杨浦区教育学院附属中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1048",
    "name": " 上海市同济初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1049",
    "name": " 上海市三门中学 (上海财经大学附属初级中学)",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1050",
    "name": " 上海市包头中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1051",
    "name": " 上海市思源中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1052",
    "name": " 上海市鞍山实验中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1053",
    "name": " 上海市同济第二初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1054",
    "name": " 上海市国和中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1055",
    "name": " 上海理工大学附属实验初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1056",
    "name": " 上海市控江初级中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1057",
    "name": " 上海市存志学校",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_1058",
    "name": " 上海民办杨浦凯慧初级中学",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_1059",
    "name": " 上海市市东实验学校 (上海市市东中学)",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1060",
    "name": " 上海市复旦实验中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1061",
    "name": " 上海民办兰生中学",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_1062",
    "name": " 上海市长阳实验学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1063",
    "name": " 上海民办杨浦实验学校",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_1064",
    "name": " 上海市体育学院附属中学",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1065",
    "name": " 上海音乐学院实验学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1066",
    "name": " 上海市黄兴学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1067",
    "name": " 上海市昆明学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1068",
    "name": " 上海市育鹰学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1069",
    "name": " 上海杨浦双语学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1070",
    "name": " 上海市市光学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1071",
    "name": " 上海民办沪东外国语学校",
    "district": "杨浦",
    "type": "民办"
  },
  {
    "id": "ms_1072",
    "name": " 上海同大实验学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1073",
    "name": " 复旦大学第二附属学校",
    "district": "杨浦",
    "type": "公办"
  },
  {
    "id": "ms_1074",
    "name": " 上海市第三女子初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1075",
    "name": " 上海市天山第二中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1076",
    "name": " 上海市姚连生中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1077",
    "name": " 上海市天山初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1078",
    "name": " 上海市虹桥中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1079",
    "name": " 上海市延安实验初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1080",
    "name": " 上海市复旦初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1081",
    "name": " 上海市泸定中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1082",
    "name": " 上海市娄山中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1083",
    "name": " 上海市西延安中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1084",
    "name": " 上海市新泾中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1085",
    "name": " 上海市民办新世纪中学",
    "district": "长宁",
    "type": "民办"
  },
  {
    "id": "ms_1086",
    "name": " 上海市延安初级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1087",
    "name": " 上海市建青实验学校",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1088",
    "name": " 上海市西郊学校",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1089",
    "name": " 华东政法大学附属中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1090",
    "name": " 上海市仙霞高级中学",
    "district": "长宁",
    "type": "公办"
  },
  {
    "id": "ms_1091",
    "name": " 上海市开元学校",
    "district": "长宁",
    "type": "公办"
  }
];

export const scoreLines: ScoreLine[] = [
  {
    "id": "sl_d_0",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "嘉定",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_1",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "嘉定",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_2",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "嘉定",
    "year": 2025,
    "score": 701.0
  },
  {
    "id": "sl_d_3",
    "schoolId": "hs_012010",
    "schoolName": "上海市卢湾高级中学",
    "district": "嘉定",
    "year": 2025,
    "score": 691.5
  },
  {
    "id": "sl_d_4",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "嘉定",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_5",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "嘉定",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_6",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "嘉定",
    "year": 2025,
    "score": 759.0
  },
  {
    "id": "sl_d_7",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "嘉定",
    "year": 2025,
    "score": 746.5
  },
  {
    "id": "sl_d_8",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "嘉定",
    "year": 2025,
    "score": 754.5
  },
  {
    "id": "sl_d_9",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "嘉定",
    "year": 2025,
    "score": 715.5
  },
  {
    "id": "sl_d_10",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "嘉定",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_11",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "嘉定",
    "year": 2025,
    "score": 738.0
  },
  {
    "id": "sl_d_12",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "嘉定",
    "year": 2025,
    "score": 713.5
  },
  {
    "id": "sl_d_13",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "嘉定",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_14",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "嘉定",
    "year": 2025,
    "score": 693.0
  },
  {
    "id": "sl_d_15",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "嘉定",
    "year": 2025,
    "score": 698.0
  },
  {
    "id": "sl_d_16",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "嘉定",
    "year": 2025,
    "score": 675.0
  },
  {
    "id": "sl_d_17",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "嘉定",
    "year": 2025,
    "score": 686.0
  },
  {
    "id": "sl_d_18",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "嘉定",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_19",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "嘉定",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_20",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "嘉定",
    "year": 2025,
    "score": 694.0
  },
  {
    "id": "sl_d_21",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "嘉定",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_22",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_23",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "嘉定",
    "year": 2025,
    "score": 689.0
  },
  {
    "id": "sl_d_24",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "嘉定",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_25",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "嘉定",
    "year": 2025,
    "score": 725.5
  },
  {
    "id": "sl_d_26",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 762.5
  },
  {
    "id": "sl_d_27",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 761.5
  },
  {
    "id": "sl_d_28",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_29",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "嘉定",
    "year": 2025,
    "score": 750.5
  },
  {
    "id": "sl_d_30",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "嘉定",
    "year": 2025,
    "score": 745.5
  },
  {
    "id": "sl_d_31",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "嘉定",
    "year": 2025,
    "score": 728.5
  },
  {
    "id": "sl_d_32",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "嘉定",
    "year": 2025,
    "score": 707.0
  },
  {
    "id": "sl_d_33",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "嘉定",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_34",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_35",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "嘉定",
    "year": 2025,
    "score": 712.0
  },
  {
    "id": "sl_d_36",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "嘉定",
    "year": 2025,
    "score": 708.0
  },
  {
    "id": "sl_d_37",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "嘉定",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_38",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "嘉定",
    "year": 2025,
    "score": 760.0
  },
  {
    "id": "sl_d_39",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "嘉定",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_40",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "嘉定",
    "year": 2025,
    "score": 732.5
  },
  {
    "id": "sl_d_41",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "嘉定",
    "year": 2025,
    "score": 679.5
  },
  {
    "id": "sl_d_42",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "嘉定",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_43",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "嘉定",
    "year": 2025,
    "score": 693.5
  },
  {
    "id": "sl_d_44",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "嘉定",
    "year": 2025,
    "score": 745.0
  },
  {
    "id": "sl_d_45",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_46",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "嘉定",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_47",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "嘉定",
    "year": 2025,
    "score": 694.5
  },
  {
    "id": "sl_d_48",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "嘉定",
    "year": 2025,
    "score": 716.0
  },
  {
    "id": "sl_d_49",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "嘉定",
    "year": 2025,
    "score": 741.5
  },
  {
    "id": "sl_d_50",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "嘉定",
    "year": 2025,
    "score": 698.0
  },
  {
    "id": "sl_d_51",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "嘉定",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_52",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "嘉定",
    "year": 2025,
    "score": 700.0
  },
  {
    "id": "sl_d_53",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "嘉定",
    "year": 2025,
    "score": 730.5
  },
  {
    "id": "sl_d_54",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "嘉定",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_55",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "嘉定",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_56",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "嘉定",
    "year": 2025,
    "score": 703.0
  },
  {
    "id": "sl_d_57",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "嘉定",
    "year": 2025,
    "score": 730.5
  },
  {
    "id": "sl_d_58",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "嘉定",
    "year": 2025,
    "score": 699.5
  },
  {
    "id": "sl_d_59",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "奉贤",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_60",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "奉贤",
    "year": 2025,
    "score": 765.5
  },
  {
    "id": "sl_d_61",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "奉贤",
    "year": 2025,
    "score": 738.5
  },
  {
    "id": "sl_d_62",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "奉贤",
    "year": 2025,
    "score": 701.0
  },
  {
    "id": "sl_d_63",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "奉贤",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_64",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "奉贤",
    "year": 2025,
    "score": 709.5
  },
  {
    "id": "sl_d_65",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "奉贤",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_66",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "奉贤",
    "year": 2025,
    "score": 664.5
  },
  {
    "id": "sl_d_67",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "奉贤",
    "year": 2025,
    "score": 729.0
  },
  {
    "id": "sl_d_68",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "奉贤",
    "year": 2025,
    "score": 703.5
  },
  {
    "id": "sl_d_69",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "奉贤",
    "year": 2025,
    "score": 747.0
  },
  {
    "id": "sl_d_70",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "奉贤",
    "year": 2025,
    "score": 753.0
  },
  {
    "id": "sl_d_71",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "奉贤",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_72",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "奉贤",
    "year": 2025,
    "score": 724.5
  },
  {
    "id": "sl_d_73",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "奉贤",
    "year": 2025,
    "score": 741.5
  },
  {
    "id": "sl_d_74",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "奉贤",
    "year": 2025,
    "score": 718.0
  },
  {
    "id": "sl_d_75",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "奉贤",
    "year": 2025,
    "score": 707.5
  },
  {
    "id": "sl_d_76",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "奉贤",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_77",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "奉贤",
    "year": 2025,
    "score": 694.0
  },
  {
    "id": "sl_d_78",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "奉贤",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_79",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "奉贤",
    "year": 2025,
    "score": 708.0
  },
  {
    "id": "sl_d_80",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "奉贤",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_81",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "奉贤",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_82",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "奉贤",
    "year": 2025,
    "score": 735.0
  },
  {
    "id": "sl_d_83",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "奉贤",
    "year": 2025,
    "score": 703.5
  },
  {
    "id": "sl_d_84",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "奉贤",
    "year": 2025,
    "score": 675.5
  },
  {
    "id": "sl_d_85",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "奉贤",
    "year": 2025,
    "score": 704.0
  },
  {
    "id": "sl_d_86",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "奉贤",
    "year": 2025,
    "score": 693.5
  },
  {
    "id": "sl_d_87",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "奉贤",
    "year": 2025,
    "score": 707.5
  },
  {
    "id": "sl_d_88",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "奉贤",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_89",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "奉贤",
    "year": 2025,
    "score": 701.0
  },
  {
    "id": "sl_d_90",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "奉贤",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_91",
    "schoolId": "hs_174005",
    "schoolName": "华东师范大学第二附属中学松江分校",
    "district": "奉贤",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_92",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "奉贤",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_93",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "奉贤",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_94",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "奉贤",
    "year": 2025,
    "score": 698.0
  },
  {
    "id": "sl_d_95",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "奉贤",
    "year": 2025,
    "score": 672.5
  },
  {
    "id": "sl_d_96",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "奉贤",
    "year": 2025,
    "score": 757.0
  },
  {
    "id": "sl_d_97",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "奉贤",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_98",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "奉贤",
    "year": 2025,
    "score": 697.5
  },
  {
    "id": "sl_d_99",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "宝山",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_100",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "宝山",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_101",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "宝山",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_102",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "宝山",
    "year": 2025,
    "score": 681.5
  },
  {
    "id": "sl_d_103",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "宝山",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_104",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "宝山",
    "year": 2025,
    "score": 736.5
  },
  {
    "id": "sl_d_105",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "宝山",
    "year": 2025,
    "score": 754.0
  },
  {
    "id": "sl_d_106",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "宝山",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_107",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "宝山",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_108",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "宝山",
    "year": 2025,
    "score": 715.5
  },
  {
    "id": "sl_d_109",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "宝山",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_110",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "宝山",
    "year": 2025,
    "score": 698.0
  },
  {
    "id": "sl_d_111",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "宝山",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_112",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "宝山",
    "year": 2025,
    "score": 723.5
  },
  {
    "id": "sl_d_113",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "宝山",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_114",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "宝山",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_115",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "宝山",
    "year": 2025,
    "score": 685.0
  },
  {
    "id": "sl_d_116",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "宝山",
    "year": 2025,
    "score": 682.0
  },
  {
    "id": "sl_d_117",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "宝山",
    "year": 2025,
    "score": 683.0
  },
  {
    "id": "sl_d_118",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "宝山",
    "year": 2025,
    "score": 724.5
  },
  {
    "id": "sl_d_119",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "宝山",
    "year": 2025,
    "score": 751.0
  },
  {
    "id": "sl_d_120",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "宝山",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_121",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "宝山",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_122",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "宝山",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_123",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "宝山",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_124",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "宝山",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_125",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "宝山",
    "year": 2025,
    "score": 738.5
  },
  {
    "id": "sl_d_126",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "宝山",
    "year": 2025,
    "score": 760.0
  },
  {
    "id": "sl_d_127",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "宝山",
    "year": 2025,
    "score": 762.0
  },
  {
    "id": "sl_d_128",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "宝山",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_129",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "宝山",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_130",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "宝山",
    "year": 2025,
    "score": 751.0
  },
  {
    "id": "sl_d_131",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "宝山",
    "year": 2025,
    "score": 736.5
  },
  {
    "id": "sl_d_132",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "宝山",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_133",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "宝山",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_134",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "宝山",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_135",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "宝山",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_136",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "宝山",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_137",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "宝山",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_138",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "宝山",
    "year": 2025,
    "score": 758.0
  },
  {
    "id": "sl_d_139",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "宝山",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_140",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "宝山",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_141",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "宝山",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_142",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "宝山",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_143",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "宝山",
    "year": 2025,
    "score": 705.5
  },
  {
    "id": "sl_d_144",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "宝山",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_145",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "宝山",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_146",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "宝山",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_147",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "宝山",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_148",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "宝山",
    "year": 2025,
    "score": 697.0
  },
  {
    "id": "sl_d_149",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "宝山",
    "year": 2025,
    "score": 739.0
  },
  {
    "id": "sl_d_150",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "宝山",
    "year": 2025,
    "score": 700.5
  },
  {
    "id": "sl_d_151",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "宝山",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_152",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "宝山",
    "year": 2025,
    "score": 709.5
  },
  {
    "id": "sl_d_153",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "宝山",
    "year": 2025,
    "score": 749.5
  },
  {
    "id": "sl_d_154",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "宝山",
    "year": 2025,
    "score": 687.5
  },
  {
    "id": "sl_d_155",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "宝山",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_156",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "宝山",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_157",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "宝山",
    "year": 2025,
    "score": 703.0
  },
  {
    "id": "sl_d_158",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "崇明",
    "year": 2025,
    "score": 661.5
  },
  {
    "id": "sl_d_159",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "崇明",
    "year": 2025,
    "score": 666.5
  },
  {
    "id": "sl_d_160",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "崇明",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_161",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "崇明",
    "year": 2025,
    "score": 763.5
  },
  {
    "id": "sl_d_162",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "崇明",
    "year": 2025,
    "score": 750.5
  },
  {
    "id": "sl_d_163",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "崇明",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_164",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "崇明",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_165",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "崇明",
    "year": 2025,
    "score": 715.0
  },
  {
    "id": "sl_d_166",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "崇明",
    "year": 2025,
    "score": 697.0
  },
  {
    "id": "sl_d_167",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "崇明",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_168",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "崇明",
    "year": 2025,
    "score": 693.5
  },
  {
    "id": "sl_d_169",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "崇明",
    "year": 2025,
    "score": 691.0
  },
  {
    "id": "sl_d_170",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "崇明",
    "year": 2025,
    "score": 747.0
  },
  {
    "id": "sl_d_171",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "崇明",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_172",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "崇明",
    "year": 2025,
    "score": 687.0
  },
  {
    "id": "sl_d_173",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "崇明",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_174",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "崇明",
    "year": 2025,
    "score": 691.5
  },
  {
    "id": "sl_d_175",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "崇明",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_176",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "崇明",
    "year": 2025,
    "score": 665.5
  },
  {
    "id": "sl_d_177",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "崇明",
    "year": 2025,
    "score": 674.5
  },
  {
    "id": "sl_d_178",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "崇明",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_179",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "崇明",
    "year": 2025,
    "score": 669.5
  },
  {
    "id": "sl_d_180",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "崇明",
    "year": 2025,
    "score": 703.5
  },
  {
    "id": "sl_d_181",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "崇明",
    "year": 2025,
    "score": 725.5
  },
  {
    "id": "sl_d_182",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "徐汇",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_183",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "徐汇",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_184",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "徐汇",
    "year": 2025,
    "score": 724.5
  },
  {
    "id": "sl_d_185",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "徐汇",
    "year": 2025,
    "score": 693.5
  },
  {
    "id": "sl_d_186",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "徐汇",
    "year": 2025,
    "score": 696.0
  },
  {
    "id": "sl_d_187",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "徐汇",
    "year": 2025,
    "score": 711.5
  },
  {
    "id": "sl_d_188",
    "schoolId": "hs_012010",
    "schoolName": "上海市卢湾高级中学",
    "district": "徐汇",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_189",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "徐汇",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_190",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "徐汇",
    "year": 2025,
    "score": 758.5
  },
  {
    "id": "sl_d_191",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "徐汇",
    "year": 2025,
    "score": 760.0
  },
  {
    "id": "sl_d_192",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "徐汇",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_193",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "徐汇",
    "year": 2025,
    "score": 762.0
  },
  {
    "id": "sl_d_194",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "徐汇",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_195",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "徐汇",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_196",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "徐汇",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_197",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "徐汇",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_198",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "徐汇",
    "year": 2025,
    "score": 715.0
  },
  {
    "id": "sl_d_199",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "徐汇",
    "year": 2025,
    "score": 713.0
  },
  {
    "id": "sl_d_200",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "徐汇",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_201",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "徐汇",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_202",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "徐汇",
    "year": 2025,
    "score": 680.0
  },
  {
    "id": "sl_d_203",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "徐汇",
    "year": 2025,
    "score": 685.0
  },
  {
    "id": "sl_d_204",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "徐汇",
    "year": 2025,
    "score": 680.0
  },
  {
    "id": "sl_d_205",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "徐汇",
    "year": 2025,
    "score": 734.5
  },
  {
    "id": "sl_d_206",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "徐汇",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_207",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "徐汇",
    "year": 2025,
    "score": 705.0
  },
  {
    "id": "sl_d_208",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "徐汇",
    "year": 2025,
    "score": 708.0
  },
  {
    "id": "sl_d_209",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "徐汇",
    "year": 2025,
    "score": 734.5
  },
  {
    "id": "sl_d_210",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "徐汇",
    "year": 2025,
    "score": 756.5
  },
  {
    "id": "sl_d_211",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "徐汇",
    "year": 2025,
    "score": 760.5
  },
  {
    "id": "sl_d_212",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "徐汇",
    "year": 2025,
    "score": 749.5
  },
  {
    "id": "sl_d_213",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "徐汇",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_214",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "徐汇",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_215",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "徐汇",
    "year": 2025,
    "score": 754.5
  },
  {
    "id": "sl_d_216",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "徐汇",
    "year": 2025,
    "score": 703.0
  },
  {
    "id": "sl_d_217",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "徐汇",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_218",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "徐汇",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_219",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "徐汇",
    "year": 2025,
    "score": 713.0
  },
  {
    "id": "sl_d_220",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "徐汇",
    "year": 2025,
    "score": 729.0
  },
  {
    "id": "sl_d_221",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "徐汇",
    "year": 2025,
    "score": 753.0
  },
  {
    "id": "sl_d_222",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "徐汇",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_223",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "徐汇",
    "year": 2025,
    "score": 734.0
  },
  {
    "id": "sl_d_224",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "徐汇",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_225",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "徐汇",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_226",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "徐汇",
    "year": 2025,
    "score": 693.0
  },
  {
    "id": "sl_d_227",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "徐汇",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_228",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "徐汇",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_229",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "徐汇",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_230",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "徐汇",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_231",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "徐汇",
    "year": 2025,
    "score": 712.0
  },
  {
    "id": "sl_d_232",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "徐汇",
    "year": 2025,
    "score": 705.5
  },
  {
    "id": "sl_d_233",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "徐汇",
    "year": 2025,
    "score": 698.5
  },
  {
    "id": "sl_d_234",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "徐汇",
    "year": 2025,
    "score": 738.0
  },
  {
    "id": "sl_d_235",
    "schoolId": "hs_174005",
    "schoolName": "华东师范大学第二附属中学松江分校",
    "district": "徐汇",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_236",
    "schoolId": "hs_174004",
    "schoolName": "上海师范大学附属中学松江分校",
    "district": "徐汇",
    "year": 2025,
    "score": 705.0
  },
  {
    "id": "sl_d_237",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "徐汇",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_238",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "徐汇",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_239",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "徐汇",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_240",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "徐汇",
    "year": 2025,
    "score": 752.0
  },
  {
    "id": "sl_d_241",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "徐汇",
    "year": 2025,
    "score": 687.5
  },
  {
    "id": "sl_d_242",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "徐汇",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_243",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "徐汇",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_244",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "徐汇",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_245",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "普陀",
    "year": 2025,
    "score": 738.0
  },
  {
    "id": "sl_d_246",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "普陀",
    "year": 2025,
    "score": 732.5
  },
  {
    "id": "sl_d_247",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "普陀",
    "year": 2025,
    "score": 728.5
  },
  {
    "id": "sl_d_248",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "普陀",
    "year": 2025,
    "score": 715.5
  },
  {
    "id": "sl_d_249",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "普陀",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_250",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "普陀",
    "year": 2025,
    "score": 711.0
  },
  {
    "id": "sl_d_251",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "普陀",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_252",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "普陀",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_253",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "普陀",
    "year": 2025,
    "score": 765.0
  },
  {
    "id": "sl_d_254",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "普陀",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_255",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "普陀",
    "year": 2025,
    "score": 755.5
  },
  {
    "id": "sl_d_256",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "普陀",
    "year": 2025,
    "score": 707.0
  },
  {
    "id": "sl_d_257",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "普陀",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_258",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "普陀",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_259",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "普陀",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_260",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "普陀",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_261",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "普陀",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_262",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "普陀",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_263",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "普陀",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_264",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "普陀",
    "year": 2025,
    "score": 690.5
  },
  {
    "id": "sl_d_265",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "普陀",
    "year": 2025,
    "score": 694.0
  },
  {
    "id": "sl_d_266",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "普陀",
    "year": 2025,
    "score": 690.0
  },
  {
    "id": "sl_d_267",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "普陀",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_268",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "普陀",
    "year": 2025,
    "score": 752.0
  },
  {
    "id": "sl_d_269",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "普陀",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_270",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "普陀",
    "year": 2025,
    "score": 733.0
  },
  {
    "id": "sl_d_271",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_272",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "普陀",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_273",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "普陀",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_274",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "普陀",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_275",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 756.5
  },
  {
    "id": "sl_d_276",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 762.0
  },
  {
    "id": "sl_d_277",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_278",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "普陀",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_279",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "普陀",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_280",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "普陀",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_281",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "普陀",
    "year": 2025,
    "score": 759.0
  },
  {
    "id": "sl_d_282",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "普陀",
    "year": 2025,
    "score": 716.0
  },
  {
    "id": "sl_d_283",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "普陀",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_284",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_285",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "普陀",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_286",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "普陀",
    "year": 2025,
    "score": 718.0
  },
  {
    "id": "sl_d_287",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "普陀",
    "year": 2025,
    "score": 728.5
  },
  {
    "id": "sl_d_288",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "普陀",
    "year": 2025,
    "score": 753.0
  },
  {
    "id": "sl_d_289",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "普陀",
    "year": 2025,
    "score": 715.0
  },
  {
    "id": "sl_d_290",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "普陀",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_291",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "普陀",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_292",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "普陀",
    "year": 2025,
    "score": 703.0
  },
  {
    "id": "sl_d_293",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "普陀",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_294",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_295",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "普陀",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_296",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "普陀",
    "year": 2025,
    "score": 697.0
  },
  {
    "id": "sl_d_297",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "普陀",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_298",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "普陀",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_299",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "普陀",
    "year": 2025,
    "score": 683.5
  },
  {
    "id": "sl_d_300",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "普陀",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_301",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "普陀",
    "year": 2025,
    "score": 702.5
  },
  {
    "id": "sl_d_302",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "普陀",
    "year": 2025,
    "score": 729.0
  },
  {
    "id": "sl_d_303",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "普陀",
    "year": 2025,
    "score": 692.5
  },
  {
    "id": "sl_d_304",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "普陀",
    "year": 2025,
    "score": 748.5
  },
  {
    "id": "sl_d_305",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "普陀",
    "year": 2025,
    "score": 702.0
  },
  {
    "id": "sl_d_306",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "普陀",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_307",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "普陀",
    "year": 2025,
    "score": 705.5
  },
  {
    "id": "sl_d_308",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "杨浦",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_309",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "杨浦",
    "year": 2025,
    "score": 696.0
  },
  {
    "id": "sl_d_310",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "杨浦",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_311",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "杨浦",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_312",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "杨浦",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_313",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "杨浦",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_314",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "杨浦",
    "year": 2025,
    "score": 740.0
  },
  {
    "id": "sl_d_315",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "杨浦",
    "year": 2025,
    "score": 753.5
  },
  {
    "id": "sl_d_316",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "杨浦",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_317",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "杨浦",
    "year": 2025,
    "score": 755.0
  },
  {
    "id": "sl_d_318",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "杨浦",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_319",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "杨浦",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_320",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "杨浦",
    "year": 2025,
    "score": 735.0
  },
  {
    "id": "sl_d_321",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "杨浦",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_322",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "杨浦",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_323",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "杨浦",
    "year": 2025,
    "score": 705.0
  },
  {
    "id": "sl_d_324",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "杨浦",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_325",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "杨浦",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_326",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "杨浦",
    "year": 2025,
    "score": 677.0
  },
  {
    "id": "sl_d_327",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "杨浦",
    "year": 2025,
    "score": 689.0
  },
  {
    "id": "sl_d_328",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "杨浦",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_329",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "杨浦",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_330",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "杨浦",
    "year": 2025,
    "score": 713.5
  },
  {
    "id": "sl_d_331",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "杨浦",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_332",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "杨浦",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_333",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "杨浦",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_334",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "杨浦",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_335",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "杨浦",
    "year": 2025,
    "score": 751.5
  },
  {
    "id": "sl_d_336",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "杨浦",
    "year": 2025,
    "score": 757.0
  },
  {
    "id": "sl_d_337",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "杨浦",
    "year": 2025,
    "score": 760.0
  },
  {
    "id": "sl_d_338",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "杨浦",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_339",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "杨浦",
    "year": 2025,
    "score": 747.5
  },
  {
    "id": "sl_d_340",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "杨浦",
    "year": 2025,
    "score": 754.0
  },
  {
    "id": "sl_d_341",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "杨浦",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_342",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "杨浦",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_343",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "杨浦",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_344",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "杨浦",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_345",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "杨浦",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_346",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "杨浦",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_347",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "杨浦",
    "year": 2025,
    "score": 705.0
  },
  {
    "id": "sl_d_348",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "杨浦",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_349",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "杨浦",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_350",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "杨浦",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_351",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "杨浦",
    "year": 2025,
    "score": 737.0
  },
  {
    "id": "sl_d_352",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "杨浦",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_353",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "杨浦",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_354",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "杨浦",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_355",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "杨浦",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_356",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "杨浦",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_357",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "杨浦",
    "year": 2025,
    "score": 711.5
  },
  {
    "id": "sl_d_358",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "杨浦",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_359",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "杨浦",
    "year": 2025,
    "score": 730.5
  },
  {
    "id": "sl_d_360",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "杨浦",
    "year": 2025,
    "score": 697.5
  },
  {
    "id": "sl_d_361",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "杨浦",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_362",
    "schoolId": "hs_174005",
    "schoolName": "华东师范大学第二附属中学松江分校",
    "district": "杨浦",
    "year": 2025,
    "score": 754.0
  },
  {
    "id": "sl_d_363",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "杨浦",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_364",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "杨浦",
    "year": 2025,
    "score": 738.5
  },
  {
    "id": "sl_d_365",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "杨浦",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_366",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "杨浦",
    "year": 2025,
    "score": 757.0
  },
  {
    "id": "sl_d_367",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "杨浦",
    "year": 2025,
    "score": 685.5
  },
  {
    "id": "sl_d_368",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "杨浦",
    "year": 2025,
    "score": 734.5
  },
  {
    "id": "sl_d_369",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "杨浦",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_370",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "杨浦",
    "year": 2025,
    "score": 702.5
  },
  {
    "id": "sl_d_371",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "松江",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_372",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "松江",
    "year": 2025,
    "score": 733.0
  },
  {
    "id": "sl_d_373",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "松江",
    "year": 2025,
    "score": 698.5
  },
  {
    "id": "sl_d_374",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "松江",
    "year": 2025,
    "score": 724.0
  },
  {
    "id": "sl_d_375",
    "schoolId": "hs_012010",
    "schoolName": "上海市卢湾高级中学",
    "district": "松江",
    "year": 2025,
    "score": 711.5
  },
  {
    "id": "sl_d_376",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "松江",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_377",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "松江",
    "year": 2025,
    "score": 754.0
  },
  {
    "id": "sl_d_378",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "松江",
    "year": 2025,
    "score": 764.0
  },
  {
    "id": "sl_d_379",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "松江",
    "year": 2025,
    "score": 746.5
  },
  {
    "id": "sl_d_380",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "松江",
    "year": 2025,
    "score": 756.0
  },
  {
    "id": "sl_d_381",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "松江",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_382",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "松江",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_383",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "松江",
    "year": 2025,
    "score": 747.0
  },
  {
    "id": "sl_d_384",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "松江",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_385",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "松江",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_386",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "松江",
    "year": 2025,
    "score": 685.0
  },
  {
    "id": "sl_d_387",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "松江",
    "year": 2025,
    "score": 681.0
  },
  {
    "id": "sl_d_388",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "松江",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_389",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "松江",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_390",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "松江",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_391",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "松江",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_392",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "松江",
    "year": 2025,
    "score": 660.0
  },
  {
    "id": "sl_d_393",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "松江",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_394",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "松江",
    "year": 2025,
    "score": 770.0
  },
  {
    "id": "sl_d_395",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "松江",
    "year": 2025,
    "score": 760.0
  },
  {
    "id": "sl_d_396",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "松江",
    "year": 2025,
    "score": 763.0
  },
  {
    "id": "sl_d_397",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "松江",
    "year": 2025,
    "score": 756.0
  },
  {
    "id": "sl_d_398",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "松江",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_399",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "松江",
    "year": 2025,
    "score": 760.5
  },
  {
    "id": "sl_d_400",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "松江",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_401",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "松江",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_402",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "松江",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_403",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "松江",
    "year": 2025,
    "score": 700.5
  },
  {
    "id": "sl_d_404",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "松江",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_405",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "松江",
    "year": 2025,
    "score": 756.0
  },
  {
    "id": "sl_d_406",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "松江",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_407",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "松江",
    "year": 2025,
    "score": 734.0
  },
  {
    "id": "sl_d_408",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "松江",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_409",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "松江",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_410",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "松江",
    "year": 2025,
    "score": 715.5
  },
  {
    "id": "sl_d_411",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "松江",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_412",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "松江",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_413",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "松江",
    "year": 2025,
    "score": 709.0
  },
  {
    "id": "sl_d_414",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "松江",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_415",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "松江",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_416",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "松江",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_417",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "松江",
    "year": 2025,
    "score": 756.5
  },
  {
    "id": "sl_d_418",
    "schoolId": "hs_174005",
    "schoolName": "华东师范大学第二附属中学松江分校",
    "district": "松江",
    "year": 2025,
    "score": 760.5
  },
  {
    "id": "sl_d_419",
    "schoolId": "hs_174004",
    "schoolName": "上海师范大学附属中学松江分校",
    "district": "松江",
    "year": 2025,
    "score": 760.5
  },
  {
    "id": "sl_d_420",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "松江",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_421",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "松江",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_422",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "松江",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_423",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "松江",
    "year": 2025,
    "score": 753.0
  },
  {
    "id": "sl_d_424",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "松江",
    "year": 2025,
    "score": 703.0
  },
  {
    "id": "sl_d_425",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "松江",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_426",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "松江",
    "year": 2025,
    "score": 705.5
  },
  {
    "id": "sl_d_427",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "浦东",
    "year": 2025,
    "score": 741.5
  },
  {
    "id": "sl_d_428",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "浦东",
    "year": 2025,
    "score": 738.0
  },
  {
    "id": "sl_d_429",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "浦东",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_430",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "浦东",
    "year": 2025,
    "score": 702.5
  },
  {
    "id": "sl_d_431",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "浦东",
    "year": 2025,
    "score": 696.5
  },
  {
    "id": "sl_d_432",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "浦东",
    "year": 2025,
    "score": 712.0
  },
  {
    "id": "sl_d_433",
    "schoolId": "hs_012010",
    "schoolName": "上海市卢湾高级中学",
    "district": "浦东",
    "year": 2025,
    "score": 698.5
  },
  {
    "id": "sl_d_434",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "浦东",
    "year": 2025,
    "score": 718.0
  },
  {
    "id": "sl_d_435",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "浦东",
    "year": 2025,
    "score": 751.0
  },
  {
    "id": "sl_d_436",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "浦东",
    "year": 2025,
    "score": 750.5
  },
  {
    "id": "sl_d_437",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "浦东",
    "year": 2025,
    "score": 740.0
  },
  {
    "id": "sl_d_438",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "浦东",
    "year": 2025,
    "score": 759.5
  },
  {
    "id": "sl_d_439",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "浦东",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_440",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "浦东",
    "year": 2025,
    "score": 714.5
  },
  {
    "id": "sl_d_441",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "浦东",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_442",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "浦东",
    "year": 2025,
    "score": 709.0
  },
  {
    "id": "sl_d_443",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "浦东",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_444",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "浦东",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_445",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "浦东",
    "year": 2025,
    "score": 707.5
  },
  {
    "id": "sl_d_446",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "浦东",
    "year": 2025,
    "score": 711.0
  },
  {
    "id": "sl_d_447",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "浦东",
    "year": 2025,
    "score": 682.0
  },
  {
    "id": "sl_d_448",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "浦东",
    "year": 2025,
    "score": 678.5
  },
  {
    "id": "sl_d_449",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "浦东",
    "year": 2025,
    "score": 692.5
  },
  {
    "id": "sl_d_450",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "浦东",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_451",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "浦东",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_452",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "浦东",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_453",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "浦东",
    "year": 2025,
    "score": 738.5
  },
  {
    "id": "sl_d_454",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_455",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "浦东",
    "year": 2025,
    "score": 705.0
  },
  {
    "id": "sl_d_456",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "浦东",
    "year": 2025,
    "score": 724.5
  },
  {
    "id": "sl_d_457",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "浦东",
    "year": 2025,
    "score": 738.5
  },
  {
    "id": "sl_d_458",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 756.5
  },
  {
    "id": "sl_d_459",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 761.0
  },
  {
    "id": "sl_d_460",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 718.0
  },
  {
    "id": "sl_d_461",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "浦东",
    "year": 2025,
    "score": 753.0
  },
  {
    "id": "sl_d_462",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "浦东",
    "year": 2025,
    "score": 749.5
  },
  {
    "id": "sl_d_463",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "浦东",
    "year": 2025,
    "score": 733.0
  },
  {
    "id": "sl_d_464",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "浦东",
    "year": 2025,
    "score": 752.0
  },
  {
    "id": "sl_d_465",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "浦东",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_466",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "浦东",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_467",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_468",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "浦东",
    "year": 2025,
    "score": 714.5
  },
  {
    "id": "sl_d_469",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "浦东",
    "year": 2025,
    "score": 714.0
  },
  {
    "id": "sl_d_470",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "浦东",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_471",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "浦东",
    "year": 2025,
    "score": 748.5
  },
  {
    "id": "sl_d_472",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "浦东",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_473",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "浦东",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_474",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "浦东",
    "year": 2025,
    "score": 753.5
  },
  {
    "id": "sl_d_475",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "浦东",
    "year": 2025,
    "score": 749.0
  },
  {
    "id": "sl_d_476",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "浦东",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_477",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "浦东",
    "year": 2025,
    "score": 756.0
  },
  {
    "id": "sl_d_478",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_479",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "浦东",
    "year": 2025,
    "score": 738.5
  },
  {
    "id": "sl_d_480",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "浦东",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_481",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "浦东",
    "year": 2025,
    "score": 735.0
  },
  {
    "id": "sl_d_482",
    "schoolId": "hs_155001",
    "schoolName": "上海市实验学校",
    "district": "浦东",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_483",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "浦东",
    "year": 2025,
    "score": 716.0
  },
  {
    "id": "sl_d_484",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "浦东",
    "year": 2025,
    "score": 693.5
  },
  {
    "id": "sl_d_485",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "浦东",
    "year": 2025,
    "score": 735.0
  },
  {
    "id": "sl_d_486",
    "schoolId": "hs_174005",
    "schoolName": "华东师范大学第二附属中学松江分校",
    "district": "浦东",
    "year": 2025,
    "score": 742.0
  },
  {
    "id": "sl_d_487",
    "schoolId": "hs_174004",
    "schoolName": "上海师范大学附属中学松江分校",
    "district": "浦东",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_488",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "浦东",
    "year": 2025,
    "score": 711.5
  },
  {
    "id": "sl_d_489",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "浦东",
    "year": 2025,
    "score": 728.5
  },
  {
    "id": "sl_d_490",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "浦东",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_491",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "浦东",
    "year": 2025,
    "score": 747.0
  },
  {
    "id": "sl_d_492",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "浦东",
    "year": 2025,
    "score": 699.5
  },
  {
    "id": "sl_d_493",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "浦东",
    "year": 2025,
    "score": 732.5
  },
  {
    "id": "sl_d_494",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "浦东",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_495",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "浦东",
    "year": 2025,
    "score": 700.0
  },
  {
    "id": "sl_d_496",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "虹口",
    "year": 2025,
    "score": 740.0
  },
  {
    "id": "sl_d_497",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "虹口",
    "year": 2025,
    "score": 683.5
  },
  {
    "id": "sl_d_498",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "虹口",
    "year": 2025,
    "score": 690.0
  },
  {
    "id": "sl_d_499",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "虹口",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_500",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "虹口",
    "year": 2025,
    "score": 671.5
  },
  {
    "id": "sl_d_501",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "虹口",
    "year": 2025,
    "score": 741.0
  },
  {
    "id": "sl_d_502",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "虹口",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_503",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "虹口",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_504",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "虹口",
    "year": 2025,
    "score": 700.0
  },
  {
    "id": "sl_d_505",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "虹口",
    "year": 2025,
    "score": 712.0
  },
  {
    "id": "sl_d_506",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "虹口",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_507",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "虹口",
    "year": 2025,
    "score": 697.5
  },
  {
    "id": "sl_d_508",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "虹口",
    "year": 2025,
    "score": 716.0
  },
  {
    "id": "sl_d_509",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "虹口",
    "year": 2025,
    "score": 696.5
  },
  {
    "id": "sl_d_510",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "虹口",
    "year": 2025,
    "score": 723.0
  },
  {
    "id": "sl_d_511",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "虹口",
    "year": 2025,
    "score": 694.0
  },
  {
    "id": "sl_d_512",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "虹口",
    "year": 2025,
    "score": 688.5
  },
  {
    "id": "sl_d_513",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "虹口",
    "year": 2025,
    "score": 715.5
  },
  {
    "id": "sl_d_514",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "虹口",
    "year": 2025,
    "score": 742.0
  },
  {
    "id": "sl_d_515",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "虹口",
    "year": 2025,
    "score": 685.5
  },
  {
    "id": "sl_d_516",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "虹口",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_517",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "虹口",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_518",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "虹口",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_519",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "虹口",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_520",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "虹口",
    "year": 2025,
    "score": 741.5
  },
  {
    "id": "sl_d_521",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "虹口",
    "year": 2025,
    "score": 755.5
  },
  {
    "id": "sl_d_522",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "虹口",
    "year": 2025,
    "score": 755.0
  },
  {
    "id": "sl_d_523",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "虹口",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_524",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "虹口",
    "year": 2025,
    "score": 746.5
  },
  {
    "id": "sl_d_525",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "虹口",
    "year": 2025,
    "score": 747.5
  },
  {
    "id": "sl_d_526",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "虹口",
    "year": 2025,
    "score": 692.5
  },
  {
    "id": "sl_d_527",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "虹口",
    "year": 2025,
    "score": 696.5
  },
  {
    "id": "sl_d_528",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "虹口",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_529",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "虹口",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_530",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "虹口",
    "year": 2025,
    "score": 704.0
  },
  {
    "id": "sl_d_531",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "虹口",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_532",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "虹口",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_533",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "虹口",
    "year": 2025,
    "score": 745.5
  },
  {
    "id": "sl_d_534",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "虹口",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_535",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "虹口",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_536",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "虹口",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_537",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "虹口",
    "year": 2025,
    "score": 697.0
  },
  {
    "id": "sl_d_538",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "虹口",
    "year": 2025,
    "score": 748.5
  },
  {
    "id": "sl_d_539",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "虹口",
    "year": 2025,
    "score": 711.0
  },
  {
    "id": "sl_d_540",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "虹口",
    "year": 2025,
    "score": 678.5
  },
  {
    "id": "sl_d_541",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "虹口",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_542",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "虹口",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_543",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "虹口",
    "year": 2025,
    "score": 674.5
  },
  {
    "id": "sl_d_544",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "虹口",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_545",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "虹口",
    "year": 2025,
    "score": 689.5
  },
  {
    "id": "sl_d_546",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "虹口",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_547",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "虹口",
    "year": 2025,
    "score": 697.5
  },
  {
    "id": "sl_d_548",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "虹口",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_549",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "虹口",
    "year": 2025,
    "score": 656.0
  },
  {
    "id": "sl_d_550",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "虹口",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_551",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "虹口",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_552",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "虹口",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_553",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "金山",
    "year": 2025,
    "score": 708.0
  },
  {
    "id": "sl_d_554",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "金山",
    "year": 2025,
    "score": 748.5
  },
  {
    "id": "sl_d_555",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "金山",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_556",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "金山",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_557",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "金山",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_558",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "金山",
    "year": 2025,
    "score": 741.0
  },
  {
    "id": "sl_d_559",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "金山",
    "year": 2025,
    "score": 718.0
  },
  {
    "id": "sl_d_560",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "金山",
    "year": 2025,
    "score": 672.0
  },
  {
    "id": "sl_d_561",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "金山",
    "year": 2025,
    "score": 680.5
  },
  {
    "id": "sl_d_562",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "金山",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_563",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "金山",
    "year": 2025,
    "score": 689.0
  },
  {
    "id": "sl_d_564",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "金山",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_565",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "金山",
    "year": 2025,
    "score": 753.5
  },
  {
    "id": "sl_d_566",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "金山",
    "year": 2025,
    "score": 755.0
  },
  {
    "id": "sl_d_567",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "金山",
    "year": 2025,
    "score": 744.5
  },
  {
    "id": "sl_d_568",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "金山",
    "year": 2025,
    "score": 725.5
  },
  {
    "id": "sl_d_569",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "金山",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_570",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "金山",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_571",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "金山",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_572",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "金山",
    "year": 2025,
    "score": 702.0
  },
  {
    "id": "sl_d_573",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "金山",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_574",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "金山",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_575",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "金山",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_576",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "金山",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_577",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "金山",
    "year": 2025,
    "score": 698.5
  },
  {
    "id": "sl_d_578",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "金山",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_579",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "金山",
    "year": 2025,
    "score": 709.5
  },
  {
    "id": "sl_d_580",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "金山",
    "year": 2025,
    "score": 697.0
  },
  {
    "id": "sl_d_581",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "金山",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_582",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "金山",
    "year": 2025,
    "score": 748.5
  },
  {
    "id": "sl_d_583",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "金山",
    "year": 2025,
    "score": 712.0
  },
  {
    "id": "sl_d_584",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "金山",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_585",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "金山",
    "year": 2025,
    "score": 713.5
  },
  {
    "id": "sl_d_586",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "金山",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_587",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "金山",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_588",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "金山",
    "year": 2025,
    "score": 749.0
  },
  {
    "id": "sl_d_589",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "金山",
    "year": 2025,
    "score": 690.5
  },
  {
    "id": "sl_d_590",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "金山",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_591",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "金山",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_592",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "金山",
    "year": 2025,
    "score": 696.5
  },
  {
    "id": "sl_d_593",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "长宁",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_594",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "长宁",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_595",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "长宁",
    "year": 2025,
    "score": 700.0
  },
  {
    "id": "sl_d_596",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "长宁",
    "year": 2025,
    "score": 691.5
  },
  {
    "id": "sl_d_597",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "长宁",
    "year": 2025,
    "score": 715.5
  },
  {
    "id": "sl_d_598",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "长宁",
    "year": 2025,
    "score": 751.0
  },
  {
    "id": "sl_d_599",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "长宁",
    "year": 2025,
    "score": 751.0
  },
  {
    "id": "sl_d_600",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "长宁",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_601",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "长宁",
    "year": 2025,
    "score": 686.5
  },
  {
    "id": "sl_d_602",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "长宁",
    "year": 2025,
    "score": 718.0
  },
  {
    "id": "sl_d_603",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "长宁",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_604",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "长宁",
    "year": 2025,
    "score": 725.5
  },
  {
    "id": "sl_d_605",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "长宁",
    "year": 2025,
    "score": 733.0
  },
  {
    "id": "sl_d_606",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "长宁",
    "year": 2025,
    "score": 725.5
  },
  {
    "id": "sl_d_607",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "长宁",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_608",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "长宁",
    "year": 2025,
    "score": 715.0
  },
  {
    "id": "sl_d_609",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "长宁",
    "year": 2025,
    "score": 670.0
  },
  {
    "id": "sl_d_610",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "长宁",
    "year": 2025,
    "score": 690.0
  },
  {
    "id": "sl_d_611",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "长宁",
    "year": 2025,
    "score": 682.0
  },
  {
    "id": "sl_d_612",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "长宁",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_613",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "长宁",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_614",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "长宁",
    "year": 2025,
    "score": 713.0
  },
  {
    "id": "sl_d_615",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "长宁",
    "year": 2025,
    "score": 730.5
  },
  {
    "id": "sl_d_616",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "长宁",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_617",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "长宁",
    "year": 2025,
    "score": 719.0
  },
  {
    "id": "sl_d_618",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "长宁",
    "year": 2025,
    "score": 756.5
  },
  {
    "id": "sl_d_619",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "长宁",
    "year": 2025,
    "score": 758.0
  },
  {
    "id": "sl_d_620",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "长宁",
    "year": 2025,
    "score": 754.0
  },
  {
    "id": "sl_d_621",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "长宁",
    "year": 2025,
    "score": 752.0
  },
  {
    "id": "sl_d_622",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "长宁",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_623",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "长宁",
    "year": 2025,
    "score": 762.0
  },
  {
    "id": "sl_d_624",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "长宁",
    "year": 2025,
    "score": 696.5
  },
  {
    "id": "sl_d_625",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "长宁",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_626",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "长宁",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_627",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "长宁",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_628",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "长宁",
    "year": 2025,
    "score": 698.5
  },
  {
    "id": "sl_d_629",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "长宁",
    "year": 2025,
    "score": 713.0
  },
  {
    "id": "sl_d_630",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "长宁",
    "year": 2025,
    "score": 745.5
  },
  {
    "id": "sl_d_631",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "长宁",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_632",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "长宁",
    "year": 2025,
    "score": 738.0
  },
  {
    "id": "sl_d_633",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "长宁",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_634",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "长宁",
    "year": 2025,
    "score": 738.0
  },
  {
    "id": "sl_d_635",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "长宁",
    "year": 2025,
    "score": 681.5
  },
  {
    "id": "sl_d_636",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "长宁",
    "year": 2025,
    "score": 734.0
  },
  {
    "id": "sl_d_637",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "长宁",
    "year": 2025,
    "score": 661.5
  },
  {
    "id": "sl_d_638",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "长宁",
    "year": 2025,
    "score": 681.0
  },
  {
    "id": "sl_d_639",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "长宁",
    "year": 2025,
    "score": 704.0
  },
  {
    "id": "sl_d_640",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "长宁",
    "year": 2025,
    "score": 694.0
  },
  {
    "id": "sl_d_641",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "长宁",
    "year": 2025,
    "score": 680.5
  },
  {
    "id": "sl_d_642",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "长宁",
    "year": 2025,
    "score": 734.0
  },
  {
    "id": "sl_d_643",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "长宁",
    "year": 2025,
    "score": 691.0
  },
  {
    "id": "sl_d_644",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "长宁",
    "year": 2025,
    "score": 734.0
  },
  {
    "id": "sl_d_645",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "长宁",
    "year": 2025,
    "score": 709.5
  },
  {
    "id": "sl_d_646",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "长宁",
    "year": 2025,
    "score": 753.0
  },
  {
    "id": "sl_d_647",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "长宁",
    "year": 2025,
    "score": 681.0
  },
  {
    "id": "sl_d_648",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "长宁",
    "year": 2025,
    "score": 732.5
  },
  {
    "id": "sl_d_649",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "长宁",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_650",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "长宁",
    "year": 2025,
    "score": 680.5
  },
  {
    "id": "sl_d_651",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "闵行",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_652",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "闵行",
    "year": 2025,
    "score": 729.5
  },
  {
    "id": "sl_d_653",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "闵行",
    "year": 2025,
    "score": 694.5
  },
  {
    "id": "sl_d_654",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "闵行",
    "year": 2025,
    "score": 705.5
  },
  {
    "id": "sl_d_655",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "闵行",
    "year": 2025,
    "score": 709.0
  },
  {
    "id": "sl_d_656",
    "schoolId": "hs_012010",
    "schoolName": "上海市卢湾高级中学",
    "district": "闵行",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_657",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "闵行",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_658",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "闵行",
    "year": 2025,
    "score": 763.0
  },
  {
    "id": "sl_d_659",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "闵行",
    "year": 2025,
    "score": 741.0
  },
  {
    "id": "sl_d_660",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "闵行",
    "year": 2025,
    "score": 759.0
  },
  {
    "id": "sl_d_661",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "闵行",
    "year": 2025,
    "score": 723.5
  },
  {
    "id": "sl_d_662",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "闵行",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_663",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "闵行",
    "year": 2025,
    "score": 747.5
  },
  {
    "id": "sl_d_664",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "闵行",
    "year": 2025,
    "score": 727.0
  },
  {
    "id": "sl_d_665",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "闵行",
    "year": 2025,
    "score": 736.5
  },
  {
    "id": "sl_d_666",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "闵行",
    "year": 2025,
    "score": 726.5
  },
  {
    "id": "sl_d_667",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "闵行",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_668",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "闵行",
    "year": 2025,
    "score": 701.0
  },
  {
    "id": "sl_d_669",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "闵行",
    "year": 2025,
    "score": 689.0
  },
  {
    "id": "sl_d_670",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "闵行",
    "year": 2025,
    "score": 681.0
  },
  {
    "id": "sl_d_671",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "闵行",
    "year": 2025,
    "score": 693.0
  },
  {
    "id": "sl_d_672",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "闵行",
    "year": 2025,
    "score": 742.5
  },
  {
    "id": "sl_d_673",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "闵行",
    "year": 2025,
    "score": 709.0
  },
  {
    "id": "sl_d_674",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_675",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "闵行",
    "year": 2025,
    "score": 701.5
  },
  {
    "id": "sl_d_676",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "闵行",
    "year": 2025,
    "score": 729.0
  },
  {
    "id": "sl_d_677",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "闵行",
    "year": 2025,
    "score": 740.0
  },
  {
    "id": "sl_d_678",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 760.0
  },
  {
    "id": "sl_d_679",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 763.0
  },
  {
    "id": "sl_d_680",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 725.0
  },
  {
    "id": "sl_d_681",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "闵行",
    "year": 2025,
    "score": 759.5
  },
  {
    "id": "sl_d_682",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "闵行",
    "year": 2025,
    "score": 757.5
  },
  {
    "id": "sl_d_683",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "闵行",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_684",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "闵行",
    "year": 2025,
    "score": 761.0
  },
  {
    "id": "sl_d_685",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "闵行",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_686",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "闵行",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_687",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_688",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "闵行",
    "year": 2025,
    "score": 715.0
  },
  {
    "id": "sl_d_689",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "闵行",
    "year": 2025,
    "score": 704.0
  },
  {
    "id": "sl_d_690",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "闵行",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_691",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "闵行",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_692",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "闵行",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_693",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "闵行",
    "year": 2025,
    "score": 734.5
  },
  {
    "id": "sl_d_694",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "闵行",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_695",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "闵行",
    "year": 2025,
    "score": 745.0
  },
  {
    "id": "sl_d_696",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "闵行",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_697",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "闵行",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_698",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 730.5
  },
  {
    "id": "sl_d_699",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "闵行",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_700",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "闵行",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_701",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "闵行",
    "year": 2025,
    "score": 721.5
  },
  {
    "id": "sl_d_702",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "闵行",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_703",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "闵行",
    "year": 2025,
    "score": 690.0
  },
  {
    "id": "sl_d_704",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "闵行",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_705",
    "schoolId": "hs_174005",
    "schoolName": "华东师范大学第二附属中学松江分校",
    "district": "闵行",
    "year": 2025,
    "score": 753.5
  },
  {
    "id": "sl_d_706",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "闵行",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_707",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "闵行",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_708",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "闵行",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_709",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "闵行",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_710",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "闵行",
    "year": 2025,
    "score": 702.0
  },
  {
    "id": "sl_d_711",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "闵行",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_712",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "闵行",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_713",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "闵行",
    "year": 2025,
    "score": 704.5
  },
  {
    "id": "sl_d_714",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "青浦",
    "year": 2025,
    "score": 735.0
  },
  {
    "id": "sl_d_715",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "青浦",
    "year": 2025,
    "score": 713.5
  },
  {
    "id": "sl_d_716",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "青浦",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_717",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "青浦",
    "year": 2025,
    "score": 765.0
  },
  {
    "id": "sl_d_718",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "青浦",
    "year": 2025,
    "score": 739.0
  },
  {
    "id": "sl_d_719",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "青浦",
    "year": 2025,
    "score": 695.0
  },
  {
    "id": "sl_d_720",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "青浦",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_721",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "青浦",
    "year": 2025,
    "score": 747.0
  },
  {
    "id": "sl_d_722",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "青浦",
    "year": 2025,
    "score": 728.5
  },
  {
    "id": "sl_d_723",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "青浦",
    "year": 2025,
    "score": 678.0
  },
  {
    "id": "sl_d_724",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "青浦",
    "year": 2025,
    "score": 691.5
  },
  {
    "id": "sl_d_725",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "青浦",
    "year": 2025,
    "score": 667.0
  },
  {
    "id": "sl_d_726",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "青浦",
    "year": 2025,
    "score": 727.5
  },
  {
    "id": "sl_d_727",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "青浦",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_728",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "青浦",
    "year": 2025,
    "score": 707.5
  },
  {
    "id": "sl_d_729",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "青浦",
    "year": 2025,
    "score": 698.0
  },
  {
    "id": "sl_d_730",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "青浦",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_731",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "青浦",
    "year": 2025,
    "score": 739.0
  },
  {
    "id": "sl_d_732",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "青浦",
    "year": 2025,
    "score": 757.0
  },
  {
    "id": "sl_d_733",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "青浦",
    "year": 2025,
    "score": 762.5
  },
  {
    "id": "sl_d_734",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "青浦",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_735",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "青浦",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_736",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "青浦",
    "year": 2025,
    "score": 750.5
  },
  {
    "id": "sl_d_737",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "青浦",
    "year": 2025,
    "score": 690.0
  },
  {
    "id": "sl_d_738",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "青浦",
    "year": 2025,
    "score": 723.5
  },
  {
    "id": "sl_d_739",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "青浦",
    "year": 2025,
    "score": 703.5
  },
  {
    "id": "sl_d_740",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "青浦",
    "year": 2025,
    "score": 698.5
  },
  {
    "id": "sl_d_741",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "青浦",
    "year": 2025,
    "score": 724.5
  },
  {
    "id": "sl_d_742",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "青浦",
    "year": 2025,
    "score": 757.5
  },
  {
    "id": "sl_d_743",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "青浦",
    "year": 2025,
    "score": 716.5
  },
  {
    "id": "sl_d_744",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "青浦",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_745",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "青浦",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_746",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "青浦",
    "year": 2025,
    "score": 707.5
  },
  {
    "id": "sl_d_747",
    "schoolId": "hs_152006",
    "schoolName": "上海师范大学附属中学",
    "district": "青浦",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_748",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "青浦",
    "year": 2025,
    "score": 687.0
  },
  {
    "id": "sl_d_749",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "青浦",
    "year": 2025,
    "score": 694.0
  },
  {
    "id": "sl_d_750",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "青浦",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_751",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "青浦",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_752",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "青浦",
    "year": 2025,
    "score": 692.5
  },
  {
    "id": "sl_d_753",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "青浦",
    "year": 2025,
    "score": 737.5
  },
  {
    "id": "sl_d_754",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "青浦",
    "year": 2025,
    "score": 710.0
  },
  {
    "id": "sl_d_755",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "青浦",
    "year": 2025,
    "score": 734.0
  },
  {
    "id": "sl_d_756",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "青浦",
    "year": 2025,
    "score": 737.0
  },
  {
    "id": "sl_d_757",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "青浦",
    "year": 2025,
    "score": 763.5
  },
  {
    "id": "sl_d_758",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "青浦",
    "year": 2025,
    "score": 708.5
  },
  {
    "id": "sl_d_759",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "青浦",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_760",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "青浦",
    "year": 2025,
    "score": 697.0
  },
  {
    "id": "sl_d_761",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "静安",
    "year": 2025,
    "score": 744.0
  },
  {
    "id": "sl_d_762",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "静安",
    "year": 2025,
    "score": 740.0
  },
  {
    "id": "sl_d_763",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "静安",
    "year": 2025,
    "score": 730.0
  },
  {
    "id": "sl_d_764",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "静安",
    "year": 2025,
    "score": 710.5
  },
  {
    "id": "sl_d_765",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "静安",
    "year": 2025,
    "score": 708.0
  },
  {
    "id": "sl_d_766",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "静安",
    "year": 2025,
    "score": 724.0
  },
  {
    "id": "sl_d_767",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "静安",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_768",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "静安",
    "year": 2025,
    "score": 742.0
  },
  {
    "id": "sl_d_769",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "静安",
    "year": 2025,
    "score": 739.0
  },
  {
    "id": "sl_d_770",
    "schoolId": "hs_042036",
    "schoolName": "复旦大学附属中学徐汇分校",
    "district": "静安",
    "year": 2025,
    "score": 758.0
  },
  {
    "id": "sl_d_771",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "静安",
    "year": 2025,
    "score": 705.0
  },
  {
    "id": "sl_d_772",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "静安",
    "year": 2025,
    "score": 715.0
  },
  {
    "id": "sl_d_773",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "静安",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_774",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "静安",
    "year": 2025,
    "score": 713.0
  },
  {
    "id": "sl_d_775",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "静安",
    "year": 2025,
    "score": 745.0
  },
  {
    "id": "sl_d_776",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "静安",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_777",
    "schoolId": "hs_062003",
    "schoolName": "上海市新中高级中学",
    "district": "静安",
    "year": 2025,
    "score": 716.0
  },
  {
    "id": "sl_d_778",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "静安",
    "year": 2025,
    "score": 722.0
  },
  {
    "id": "sl_d_779",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "静安",
    "year": 2025,
    "score": 668.5
  },
  {
    "id": "sl_d_780",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "静安",
    "year": 2025,
    "score": 689.5
  },
  {
    "id": "sl_d_781",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "静安",
    "year": 2025,
    "score": 674.0
  },
  {
    "id": "sl_d_782",
    "schoolId": "hs_072001",
    "schoolName": "上海市晋元高级中学",
    "district": "静安",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_783",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "静安",
    "year": 2025,
    "score": 749.0
  },
  {
    "id": "sl_d_784",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "静安",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_785",
    "schoolId": "hs_092001",
    "schoolName": "复旦大学附属复兴中学",
    "district": "静安",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_786",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "静安",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_787",
    "schoolId": "hs_093001",
    "schoolName": "上海财经大学附属北郊高级中学",
    "district": "静安",
    "year": 2025,
    "score": 706.0
  },
  {
    "id": "sl_d_788",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "静安",
    "year": 2025,
    "score": 721.0
  },
  {
    "id": "sl_d_789",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "静安",
    "year": 2025,
    "score": 742.0
  },
  {
    "id": "sl_d_790",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "静安",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_791",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "静安",
    "year": 2025,
    "score": 758.5
  },
  {
    "id": "sl_d_792",
    "schoolId": "hs_103002",
    "schoolName": "同济大学第一附属中学",
    "district": "静安",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_793",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "静安",
    "year": 2025,
    "score": 750.5
  },
  {
    "id": "sl_d_794",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "静安",
    "year": 2025,
    "score": 753.5
  },
  {
    "id": "sl_d_795",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "静安",
    "year": 2025,
    "score": 735.5
  },
  {
    "id": "sl_d_796",
    "schoolId": "hs_122004",
    "schoolName": "上海交通大学附属中学闵行分校",
    "district": "静安",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_797",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "静安",
    "year": 2025,
    "score": 662.0
  },
  {
    "id": "sl_d_798",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "静安",
    "year": 2025,
    "score": 720.0
  },
  {
    "id": "sl_d_799",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "静安",
    "year": 2025,
    "score": 713.5
  },
  {
    "id": "sl_d_800",
    "schoolId": "hs_132003",
    "schoolName": "上海师范大学附属中学宝山分校",
    "district": "静安",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_801",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "静安",
    "year": 2025,
    "score": 713.5
  },
  {
    "id": "sl_d_802",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "静安",
    "year": 2025,
    "score": 730.5
  },
  {
    "id": "sl_d_803",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "静安",
    "year": 2025,
    "score": 750.0
  },
  {
    "id": "sl_d_804",
    "schoolId": "hs_142004",
    "schoolName": "上海师范大学附属中学嘉定新城分校",
    "district": "静安",
    "year": 2025,
    "score": 731.5
  },
  {
    "id": "sl_d_805",
    "schoolId": "hs_151078",
    "schoolName": "上海中学东校",
    "district": "静安",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_806",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "静安",
    "year": 2025,
    "score": 692.0
  },
  {
    "id": "sl_d_807",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "静安",
    "year": 2025,
    "score": 740.5
  },
  {
    "id": "sl_d_808",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "静安",
    "year": 2025,
    "score": 699.0
  },
  {
    "id": "sl_d_809",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "静安",
    "year": 2025,
    "score": 743.5
  },
  {
    "id": "sl_d_810",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "静安",
    "year": 2025,
    "score": 701.5
  },
  {
    "id": "sl_d_811",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "静安",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_812",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "静安",
    "year": 2025,
    "score": 717.5
  },
  {
    "id": "sl_d_813",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "静安",
    "year": 2025,
    "score": 675.5
  },
  {
    "id": "sl_d_814",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "静安",
    "year": 2025,
    "score": 736.0
  },
  {
    "id": "sl_d_815",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "静安",
    "year": 2025,
    "score": 696.0
  },
  {
    "id": "sl_d_816",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "静安",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_817",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "静安",
    "year": 2025,
    "score": 701.0
  },
  {
    "id": "sl_d_818",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "静安",
    "year": 2025,
    "score": 741.5
  },
  {
    "id": "sl_d_819",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "静安",
    "year": 2025,
    "score": 683.0
  },
  {
    "id": "sl_d_820",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "静安",
    "year": 2025,
    "score": 726.0
  },
  {
    "id": "sl_d_821",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "静安",
    "year": 2025,
    "score": 731.0
  },
  {
    "id": "sl_d_822",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "静安",
    "year": 2025,
    "score": 702.0
  },
  {
    "id": "sl_d_823",
    "schoolId": "hs_012001",
    "schoolName": "上海市格致中学",
    "district": "黄浦",
    "year": 2025,
    "score": 747.5
  },
  {
    "id": "sl_d_824",
    "schoolId": "hs_012003",
    "schoolName": "上海市大同中学",
    "district": "黄浦",
    "year": 2025,
    "score": 746.0
  },
  {
    "id": "sl_d_825",
    "schoolId": "hs_012005",
    "schoolName": "上海市向明中学",
    "district": "黄浦",
    "year": 2025,
    "score": 732.0
  },
  {
    "id": "sl_d_826",
    "schoolId": "hs_012007",
    "schoolName": "上海外国语大学附属大境中学",
    "district": "黄浦",
    "year": 2025,
    "score": 709.0
  },
  {
    "id": "sl_d_827",
    "schoolId": "hs_012008",
    "schoolName": "上海市光明中学",
    "district": "黄浦",
    "year": 2025,
    "score": 691.0
  },
  {
    "id": "sl_d_828",
    "schoolId": "hs_012009",
    "schoolName": "上海市敬业中学",
    "district": "黄浦",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_829",
    "schoolId": "hs_012010",
    "schoolName": "上海市卢湾高级中学",
    "district": "黄浦",
    "year": 2025,
    "score": 709.0
  },
  {
    "id": "sl_d_830",
    "schoolId": "hs_042001",
    "schoolName": "上海市第二中学",
    "district": "黄浦",
    "year": 2025,
    "score": 723.5
  },
  {
    "id": "sl_d_831",
    "schoolId": "hs_032001",
    "schoolName": "上海市南洋模范中学",
    "district": "黄浦",
    "year": 2025,
    "score": 756.0
  },
  {
    "id": "sl_d_832",
    "schoolId": "hs_042032",
    "schoolName": "上海市上海中学",
    "district": "黄浦",
    "year": 2025,
    "score": 761.5
  },
  {
    "id": "sl_d_833",
    "schoolId": "hs_032002",
    "schoolName": "上海市位育中学",
    "district": "黄浦",
    "year": 2025,
    "score": 739.5
  },
  {
    "id": "sl_d_834",
    "schoolId": "hs_043015",
    "schoolName": "上海市南洋中学",
    "district": "黄浦",
    "year": 2025,
    "score": 728.0
  },
  {
    "id": "sl_d_835",
    "schoolId": "hs_052001",
    "schoolName": "上海市第三女子中学",
    "district": "黄浦",
    "year": 2025,
    "score": 709.5
  },
  {
    "id": "sl_d_836",
    "schoolId": "hs_052002",
    "schoolName": "上海市延安中学",
    "district": "黄浦",
    "year": 2025,
    "score": 737.0
  },
  {
    "id": "sl_d_837",
    "schoolId": "hs_053004",
    "schoolName": "上海市复旦中学",
    "district": "黄浦",
    "year": 2025,
    "score": 693.5
  },
  {
    "id": "sl_d_838",
    "schoolId": "hs_062001",
    "schoolName": "上海市市西中学",
    "district": "黄浦",
    "year": 2025,
    "score": 733.5
  },
  {
    "id": "sl_d_839",
    "schoolId": "hs_062002",
    "schoolName": "上海市育才中学",
    "district": "黄浦",
    "year": 2025,
    "score": 706.5
  },
  {
    "id": "sl_d_840",
    "schoolId": "hs_062004",
    "schoolName": "上海市市北中学",
    "district": "黄浦",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_841",
    "schoolId": "hs_062011",
    "schoolName": "上海市回民中学",
    "district": "黄浦",
    "year": 2025,
    "score": 691.5
  },
  {
    "id": "sl_d_842",
    "schoolId": "hs_063004",
    "schoolName": "上海市第六十中学",
    "district": "黄浦",
    "year": 2025,
    "score": 680.5
  },
  {
    "id": "sl_d_843",
    "schoolId": "hs_064001",
    "schoolName": "上海市华东模范中学",
    "district": "黄浦",
    "year": 2025,
    "score": 678.0
  },
  {
    "id": "sl_d_844",
    "schoolId": "hs_072002",
    "schoolName": "上海市曹杨第二中学",
    "district": "黄浦",
    "year": 2025,
    "score": 758.0
  },
  {
    "id": "sl_d_845",
    "schoolId": "hs_073003",
    "schoolName": "上海市宜川中学",
    "district": "黄浦",
    "year": 2025,
    "score": 694.5
  },
  {
    "id": "sl_d_846",
    "schoolId": "hs_092002",
    "schoolName": "华东师范大学第一附属中学",
    "district": "黄浦",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_847",
    "schoolId": "hs_102004",
    "schoolName": "上海市杨浦高级中学",
    "district": "黄浦",
    "year": 2025,
    "score": 722.5
  },
  {
    "id": "sl_d_848",
    "schoolId": "hs_102032",
    "schoolName": "上海市控江中学",
    "district": "黄浦",
    "year": 2025,
    "score": 732.5
  },
  {
    "id": "sl_d_849",
    "schoolId": "hs_102056",
    "schoolName": "上海交通大学附属中学",
    "district": "黄浦",
    "year": 2025,
    "score": 762.5
  },
  {
    "id": "sl_d_850",
    "schoolId": "hs_102057",
    "schoolName": "复旦大学附属中学",
    "district": "黄浦",
    "year": 2025,
    "score": 757.5
  },
  {
    "id": "sl_d_851",
    "schoolId": "hs_122001",
    "schoolName": "上海市七宝中学",
    "district": "黄浦",
    "year": 2025,
    "score": 748.5
  },
  {
    "id": "sl_d_852",
    "schoolId": "hs_122002",
    "schoolName": "华东师范大学第二附属中学闵行紫竹分校",
    "district": "黄浦",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_853",
    "schoolId": "hs_122003",
    "schoolName": "上海师范大学附属中学闵行分校",
    "district": "黄浦",
    "year": 2025,
    "score": 720.5
  },
  {
    "id": "sl_d_854",
    "schoolId": "hs_123001",
    "schoolName": "上海市闵行中学",
    "district": "黄浦",
    "year": 2025,
    "score": 705.5
  },
  {
    "id": "sl_d_855",
    "schoolId": "hs_092003",
    "schoolName": "上海市行知中学",
    "district": "黄浦",
    "year": 2025,
    "score": 717.0
  },
  {
    "id": "sl_d_856",
    "schoolId": "hs_132002",
    "schoolName": "上海大学附属中学",
    "district": "黄浦",
    "year": 2025,
    "score": 707.5
  },
  {
    "id": "sl_d_857",
    "schoolId": "hs_133001",
    "schoolName": "上海市吴淞中学",
    "district": "黄浦",
    "year": 2025,
    "score": 695.0
  },
  {
    "id": "sl_d_858",
    "schoolId": "hs_142001",
    "schoolName": "上海市嘉定区第一中学",
    "district": "黄浦",
    "year": 2025,
    "score": 725.5
  },
  {
    "id": "sl_d_859",
    "schoolId": "hs_142002",
    "schoolName": "上海交通大学附属中学嘉定分校",
    "district": "黄浦",
    "year": 2025,
    "score": 747.5
  },
  {
    "id": "sl_d_860",
    "schoolId": "hs_152001",
    "schoolName": "上海市建平中学",
    "district": "黄浦",
    "year": 2025,
    "score": 750.5
  },
  {
    "id": "sl_d_861",
    "schoolId": "hs_152002",
    "schoolName": "上海市进才中学",
    "district": "黄浦",
    "year": 2025,
    "score": 741.0
  },
  {
    "id": "sl_d_862",
    "schoolId": "hs_152004",
    "schoolName": "上海南汇中学",
    "district": "黄浦",
    "year": 2025,
    "score": 700.5
  },
  {
    "id": "sl_d_863",
    "schoolId": "hs_152005",
    "schoolName": "上海市浦东复旦附中分校",
    "district": "黄浦",
    "year": 2025,
    "score": 748.0
  },
  {
    "id": "sl_d_864",
    "schoolId": "hs_153001",
    "schoolName": "上海市洋泾中学",
    "district": "黄浦",
    "year": 2025,
    "score": 718.5
  },
  {
    "id": "sl_d_865",
    "schoolId": "hs_153004",
    "schoolName": "上海市高桥中学",
    "district": "黄浦",
    "year": 2025,
    "score": 702.5
  },
  {
    "id": "sl_d_866",
    "schoolId": "hs_153005",
    "schoolName": "上海市川沙中学",
    "district": "黄浦",
    "year": 2025,
    "score": 712.5
  },
  {
    "id": "sl_d_867",
    "schoolId": "hs_202001",
    "schoolName": "上海市金山中学",
    "district": "黄浦",
    "year": 2025,
    "score": 703.5
  },
  {
    "id": "sl_d_868",
    "schoolId": "hs_162001",
    "schoolName": "华东师范大学第三附属中学",
    "district": "黄浦",
    "year": 2025,
    "score": 700.5
  },
  {
    "id": "sl_d_869",
    "schoolId": "hs_172001",
    "schoolName": "上海市松江二中",
    "district": "黄浦",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_870",
    "schoolId": "hs_172002",
    "schoolName": "上海市松江一中",
    "district": "黄浦",
    "year": 2025,
    "score": 700.5
  },
  {
    "id": "sl_d_871",
    "schoolId": "hs_174003",
    "schoolName": "上海外国语大学附属外国语学校松江云间中学",
    "district": "黄浦",
    "year": 2025,
    "score": 733.0
  },
  {
    "id": "sl_d_872",
    "schoolId": "hs_182002",
    "schoolName": "上海市青浦高级中学",
    "district": "黄浦",
    "year": 2025,
    "score": 719.5
  },
  {
    "id": "sl_d_873",
    "schoolId": "hs_182001",
    "schoolName": "复旦大学附属中学青浦分校",
    "district": "黄浦",
    "year": 2025,
    "score": 752.5
  },
  {
    "id": "sl_d_874",
    "schoolId": "hs_182003",
    "schoolName": "上海市朱家角中学",
    "district": "黄浦",
    "year": 2025,
    "score": 659.5
  },
  {
    "id": "sl_d_875",
    "schoolId": "hs_212001",
    "schoolName": "上海市奉贤中学",
    "district": "黄浦",
    "year": 2025,
    "score": 743.0
  },
  {
    "id": "sl_d_876",
    "schoolId": "hs_214002",
    "schoolName": "华东师范大学第二附属中学临港奉贤分校",
    "district": "黄浦",
    "year": 2025,
    "score": 737.0
  },
  {
    "id": "sl_d_877",
    "schoolId": "hs_222001",
    "schoolName": "上海市崇明中学",
    "district": "黄浦",
    "year": 2025,
    "score": 688.5
  }
];

export const schoolScoreLines: SchoolScoreLine[] = [
  {
    "id": "sl_s_0",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_1",
    "score": 721.5
  },
  {
    "id": "sl_s_1",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_1",
    "score": 726.5
  },
  {
    "id": "sl_s_2",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_2",
    "score": 730.0
  },
  {
    "id": "sl_s_3",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_2",
    "score": 733.5
  },
  {
    "id": "sl_s_4",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_3",
    "score": 729.0
  },
  {
    "id": "sl_s_5",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_3",
    "score": 737.0
  },
  {
    "id": "sl_s_6",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_4",
    "score": 716.0
  },
  {
    "id": "sl_s_7",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_4",
    "score": 729.0
  },
  {
    "id": "sl_s_8",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_5",
    "score": 722.5
  },
  {
    "id": "sl_s_9",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_5",
    "score": 730.5
  },
  {
    "id": "sl_s_10",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_6",
    "score": 697.5
  },
  {
    "id": "sl_s_11",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_6",
    "score": 690.5
  },
  {
    "id": "sl_s_12",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_7",
    "score": 703.5
  },
  {
    "id": "sl_s_13",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_8",
    "score": 757.5
  },
  {
    "id": "sl_s_14",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_8",
    "score": 726.5
  },
  {
    "id": "sl_s_15",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_8",
    "score": 743.0
  },
  {
    "id": "sl_s_16",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_9",
    "score": 752.0
  },
  {
    "id": "sl_s_17",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_9",
    "score": 709.5
  },
  {
    "id": "sl_s_18",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_9",
    "score": 730.0
  },
  {
    "id": "sl_s_19",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_10",
    "score": 693.5
  },
  {
    "id": "sl_s_20",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_10",
    "score": 715.5
  },
  {
    "id": "sl_s_21",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_11",
    "score": 722.0
  },
  {
    "id": "sl_s_22",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_11",
    "score": 747.5
  },
  {
    "id": "sl_s_23",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_12",
    "score": 725.0
  },
  {
    "id": "sl_s_24",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_12",
    "score": 733.5
  },
  {
    "id": "sl_s_25",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_13",
    "score": 720.0
  },
  {
    "id": "sl_s_26",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_13",
    "score": 734.0
  },
  {
    "id": "sl_s_27",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_14",
    "score": 714.5
  },
  {
    "id": "sl_s_28",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_14",
    "score": 750.0
  },
  {
    "id": "sl_s_29",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_15",
    "score": 719.0
  },
  {
    "id": "sl_s_30",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_15",
    "score": 750.0
  },
  {
    "id": "sl_s_31",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_16",
    "score": 725.5
  },
  {
    "id": "sl_s_32",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_16",
    "score": 739.0
  },
  {
    "id": "sl_s_33",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_17",
    "score": 722.5
  },
  {
    "id": "sl_s_34",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_17",
    "score": 744.0
  },
  {
    "id": "sl_s_35",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_18",
    "score": 723.0
  },
  {
    "id": "sl_s_36",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_18",
    "score": 739.0
  },
  {
    "id": "sl_s_37",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_19",
    "score": 695.5
  },
  {
    "id": "sl_s_38",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_19",
    "score": 724.5
  },
  {
    "id": "sl_s_39",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_19",
    "score": 732.0
  },
  {
    "id": "sl_s_40",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_20",
    "score": 728.5
  },
  {
    "id": "sl_s_41",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_20",
    "score": 702.0
  },
  {
    "id": "sl_s_42",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_20",
    "score": 723.5
  },
  {
    "id": "sl_s_43",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_21",
    "score": 752.0
  },
  {
    "id": "sl_s_44",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_21",
    "score": 714.0
  },
  {
    "id": "sl_s_45",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_21",
    "score": 736.5
  },
  {
    "id": "sl_s_46",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_22",
    "score": 751.5
  },
  {
    "id": "sl_s_47",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_22",
    "score": 727.5
  },
  {
    "id": "sl_s_48",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_22",
    "score": 749.0
  },
  {
    "id": "sl_s_49",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_23",
    "score": 726.0
  },
  {
    "id": "sl_s_50",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_23",
    "score": 745.5
  },
  {
    "id": "sl_s_51",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_24",
    "score": 760.0
  },
  {
    "id": "sl_s_52",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_24",
    "score": 725.5
  },
  {
    "id": "sl_s_53",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_24",
    "score": 752.0
  },
  {
    "id": "sl_s_54",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_25",
    "score": 709.0
  },
  {
    "id": "sl_s_55",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_25",
    "score": 698.0
  },
  {
    "id": "sl_s_56",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_26",
    "score": 705.0
  },
  {
    "id": "sl_s_57",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_26",
    "score": 749.5
  },
  {
    "id": "sl_s_58",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_27",
    "score": 725.0
  },
  {
    "id": "sl_s_59",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_28",
    "score": 757.5
  },
  {
    "id": "sl_s_60",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_28",
    "score": 720.0
  },
  {
    "id": "sl_s_61",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_28",
    "score": 723.0
  },
  {
    "id": "sl_s_62",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_29",
    "score": 685.5
  },
  {
    "id": "sl_s_63",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_29",
    "score": 745.5
  },
  {
    "id": "sl_s_64",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_29",
    "score": 730.0
  },
  {
    "id": "sl_s_65",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_30",
    "score": 733.0
  },
  {
    "id": "sl_s_66",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_30",
    "score": 740.0
  },
  {
    "id": "sl_s_67",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_31",
    "score": 728.0
  },
  {
    "id": "sl_s_68",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_31",
    "score": 748.5
  },
  {
    "id": "sl_s_69",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_32",
    "score": 717.5
  },
  {
    "id": "sl_s_70",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_32",
    "score": 727.0
  },
  {
    "id": "sl_s_71",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_33",
    "score": 720.5
  },
  {
    "id": "sl_s_72",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_33",
    "score": 743.0
  },
  {
    "id": "sl_s_73",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_34",
    "score": 750.0
  },
  {
    "id": "sl_s_74",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_34",
    "score": 719.5
  },
  {
    "id": "sl_s_75",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_34",
    "score": 737.5
  },
  {
    "id": "sl_s_76",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_35",
    "score": 718.0
  },
  {
    "id": "sl_s_77",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_35",
    "score": 722.0
  },
  {
    "id": "sl_s_78",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_36",
    "score": 713.0
  },
  {
    "id": "sl_s_79",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_36",
    "score": 741.5
  },
  {
    "id": "sl_s_80",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_37",
    "score": 719.0
  },
  {
    "id": "sl_s_81",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_38",
    "score": 738.0
  },
  {
    "id": "sl_s_82",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_39",
    "score": 720.5
  },
  {
    "id": "sl_s_83",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_40",
    "score": 742.0
  },
  {
    "id": "sl_s_84",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_41",
    "score": 697.5
  },
  {
    "id": "sl_s_85",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_42",
    "score": 696.0
  },
  {
    "id": "sl_s_86",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_43",
    "score": 718.5
  },
  {
    "id": "sl_s_87",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_44",
    "score": 682.0
  },
  {
    "id": "sl_s_88",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_45",
    "score": 671.0
  },
  {
    "id": "sl_s_89",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_46",
    "score": 700.0
  },
  {
    "id": "sl_s_90",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_47",
    "score": 740.0
  },
  {
    "id": "sl_s_91",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_48",
    "score": 719.5
  },
  {
    "id": "sl_s_92",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_49",
    "score": 753.5
  },
  {
    "id": "sl_s_93",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_49",
    "score": 743.5
  },
  {
    "id": "sl_s_94",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_50",
    "score": 716.0
  },
  {
    "id": "sl_s_95",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_51",
    "score": 742.0
  },
  {
    "id": "sl_s_96",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_52",
    "score": 710.0
  },
  {
    "id": "sl_s_97",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_53",
    "score": 752.0
  },
  {
    "id": "sl_s_98",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_53",
    "score": 748.0
  },
  {
    "id": "sl_s_99",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_53",
    "score": 737.5
  },
  {
    "id": "sl_s_100",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_54",
    "score": 721.5
  },
  {
    "id": "sl_s_101",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_54",
    "score": 727.5
  },
  {
    "id": "sl_s_102",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_55",
    "score": 716.0
  },
  {
    "id": "sl_s_103",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_56",
    "score": 672.0
  },
  {
    "id": "sl_s_104",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_57",
    "score": 715.0
  },
  {
    "id": "sl_s_105",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_58",
    "score": 705.0
  },
  {
    "id": "sl_s_106",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_59",
    "score": 724.5
  },
  {
    "id": "sl_s_107",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_60",
    "score": 728.0
  },
  {
    "id": "sl_s_108",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_61",
    "score": 724.0
  },
  {
    "id": "sl_s_109",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_62",
    "score": 682.5
  },
  {
    "id": "sl_s_110",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_63",
    "score": 718.5
  },
  {
    "id": "sl_s_111",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_64",
    "score": 715.5
  },
  {
    "id": "sl_s_112",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_65",
    "score": 739.5
  },
  {
    "id": "sl_s_113",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_66",
    "score": 715.5
  },
  {
    "id": "sl_s_114",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_67",
    "score": 709.5
  },
  {
    "id": "sl_s_115",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_68",
    "score": 677.0
  },
  {
    "id": "sl_s_116",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_69",
    "score": 744.5
  },
  {
    "id": "sl_s_117",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_70",
    "score": 710.5
  },
  {
    "id": "sl_s_118",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_71",
    "score": 663.5
  },
  {
    "id": "sl_s_119",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_72",
    "score": 702.5
  },
  {
    "id": "sl_s_120",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_73",
    "score": 722.5
  },
  {
    "id": "sl_s_121",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_73",
    "score": 716.5
  },
  {
    "id": "sl_s_122",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_74",
    "score": 706.0
  },
  {
    "id": "sl_s_123",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_75",
    "score": 721.5
  },
  {
    "id": "sl_s_124",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_76",
    "score": 742.0
  },
  {
    "id": "sl_s_125",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_76",
    "score": 714.5
  },
  {
    "id": "sl_s_126",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_76",
    "score": 730.0
  },
  {
    "id": "sl_s_127",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_76",
    "score": 721.0
  },
  {
    "id": "sl_s_128",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_77",
    "score": 731.5
  },
  {
    "id": "sl_s_129",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_77",
    "score": 713.0
  },
  {
    "id": "sl_s_130",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_77",
    "score": 713.5
  },
  {
    "id": "sl_s_131",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_78",
    "score": 673.0
  },
  {
    "id": "sl_s_132",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_78",
    "score": 668.5
  },
  {
    "id": "sl_s_133",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_78",
    "score": 677.5
  },
  {
    "id": "sl_s_134",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_78",
    "score": 699.5
  },
  {
    "id": "sl_s_135",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_79",
    "score": 755.0
  },
  {
    "id": "sl_s_136",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_79",
    "score": 710.5
  },
  {
    "id": "sl_s_137",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_79",
    "score": 723.5
  },
  {
    "id": "sl_s_138",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_79",
    "score": 713.5
  },
  {
    "id": "sl_s_139",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_79",
    "score": 705.5
  },
  {
    "id": "sl_s_140",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_80",
    "score": 732.5
  },
  {
    "id": "sl_s_141",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_80",
    "score": 719.0
  },
  {
    "id": "sl_s_142",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_80",
    "score": 733.5
  },
  {
    "id": "sl_s_143",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_80",
    "score": 719.5
  },
  {
    "id": "sl_s_144",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_81",
    "score": 718.5
  },
  {
    "id": "sl_s_145",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_81",
    "score": 685.5
  },
  {
    "id": "sl_s_146",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_81",
    "score": 716.0
  },
  {
    "id": "sl_s_147",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_81",
    "score": 694.5
  },
  {
    "id": "sl_s_148",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_82",
    "score": 725.0
  },
  {
    "id": "sl_s_149",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_82",
    "score": 716.5
  },
  {
    "id": "sl_s_150",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_82",
    "score": 717.5
  },
  {
    "id": "sl_s_151",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_82",
    "score": 711.0
  },
  {
    "id": "sl_s_152",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_83",
    "score": 727.5
  },
  {
    "id": "sl_s_153",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_83",
    "score": 718.0
  },
  {
    "id": "sl_s_154",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_83",
    "score": 736.0
  },
  {
    "id": "sl_s_155",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_83",
    "score": 712.0
  },
  {
    "id": "sl_s_156",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_84",
    "score": 719.5
  },
  {
    "id": "sl_s_157",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_84",
    "score": 699.5
  },
  {
    "id": "sl_s_158",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_84",
    "score": 665.0
  },
  {
    "id": "sl_s_159",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_84",
    "score": 719.5
  },
  {
    "id": "sl_s_160",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_85",
    "score": 734.0
  },
  {
    "id": "sl_s_161",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_85",
    "score": 694.5
  },
  {
    "id": "sl_s_162",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_85",
    "score": 677.0
  },
  {
    "id": "sl_s_163",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_85",
    "score": 688.0
  },
  {
    "id": "sl_s_164",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_86",
    "score": 724.0
  },
  {
    "id": "sl_s_165",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_86",
    "score": 708.0
  },
  {
    "id": "sl_s_166",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_86",
    "score": 719.0
  },
  {
    "id": "sl_s_167",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_86",
    "score": 713.5
  },
  {
    "id": "sl_s_168",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_87",
    "score": 741.5
  },
  {
    "id": "sl_s_169",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_87",
    "score": 715.0
  },
  {
    "id": "sl_s_170",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_87",
    "score": 728.5
  },
  {
    "id": "sl_s_171",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_87",
    "score": 714.0
  },
  {
    "id": "sl_s_172",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_88",
    "score": 729.0
  },
  {
    "id": "sl_s_173",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_88",
    "score": 708.0
  },
  {
    "id": "sl_s_174",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_88",
    "score": 718.5
  },
  {
    "id": "sl_s_175",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_88",
    "score": 711.5
  },
  {
    "id": "sl_s_176",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_89",
    "score": 732.5
  },
  {
    "id": "sl_s_177",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_89",
    "score": 714.5
  },
  {
    "id": "sl_s_178",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_89",
    "score": 725.0
  },
  {
    "id": "sl_s_179",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_89",
    "score": 708.0
  },
  {
    "id": "sl_s_180",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_90",
    "score": 748.5
  },
  {
    "id": "sl_s_181",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_90",
    "score": 722.0
  },
  {
    "id": "sl_s_182",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_90",
    "score": 713.5
  },
  {
    "id": "sl_s_183",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_90",
    "score": 719.0
  },
  {
    "id": "sl_s_184",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_90",
    "score": 715.0
  },
  {
    "id": "sl_s_185",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_91",
    "score": 710.0
  },
  {
    "id": "sl_s_186",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_91",
    "score": 705.5
  },
  {
    "id": "sl_s_187",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_91",
    "score": 691.0
  },
  {
    "id": "sl_s_188",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_91",
    "score": 703.0
  },
  {
    "id": "sl_s_189",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_92",
    "score": 752.0
  },
  {
    "id": "sl_s_190",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_92",
    "score": 732.5
  },
  {
    "id": "sl_s_191",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_92",
    "score": 720.0
  },
  {
    "id": "sl_s_192",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_92",
    "score": 728.5
  },
  {
    "id": "sl_s_193",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_92",
    "score": 717.5
  },
  {
    "id": "sl_s_194",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_93",
    "score": 721.5
  },
  {
    "id": "sl_s_195",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_93",
    "score": 714.0
  },
  {
    "id": "sl_s_196",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_93",
    "score": 722.5
  },
  {
    "id": "sl_s_197",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_93",
    "score": 708.5
  },
  {
    "id": "sl_s_198",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_94",
    "score": 729.0
  },
  {
    "id": "sl_s_199",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_94",
    "score": 707.0
  },
  {
    "id": "sl_s_200",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_94",
    "score": 711.5
  },
  {
    "id": "sl_s_201",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_94",
    "score": 700.0
  },
  {
    "id": "sl_s_202",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_95",
    "score": 736.0
  },
  {
    "id": "sl_s_203",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_95",
    "score": 706.5
  },
  {
    "id": "sl_s_204",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_95",
    "score": 729.0
  },
  {
    "id": "sl_s_205",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_95",
    "score": 713.5
  },
  {
    "id": "sl_s_206",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_96",
    "score": 713.5
  },
  {
    "id": "sl_s_207",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_96",
    "score": 711.0
  },
  {
    "id": "sl_s_208",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_96",
    "score": 722.0
  },
  {
    "id": "sl_s_209",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_96",
    "score": 694.5
  },
  {
    "id": "sl_s_210",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_97",
    "score": 717.0
  },
  {
    "id": "sl_s_211",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_97",
    "score": 710.0
  },
  {
    "id": "sl_s_212",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_97",
    "score": 733.5
  },
  {
    "id": "sl_s_213",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_97",
    "score": 693.5
  },
  {
    "id": "sl_s_214",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_98",
    "score": 753.5
  },
  {
    "id": "sl_s_215",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_98",
    "score": 738.0
  },
  {
    "id": "sl_s_216",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_98",
    "score": 717.0
  },
  {
    "id": "sl_s_217",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_98",
    "score": 734.5
  },
  {
    "id": "sl_s_218",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_98",
    "score": 717.0
  },
  {
    "id": "sl_s_219",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_99",
    "score": 716.5
  },
  {
    "id": "sl_s_220",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_99",
    "score": 698.5
  },
  {
    "id": "sl_s_221",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_99",
    "score": 694.5
  },
  {
    "id": "sl_s_222",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_99",
    "score": 689.0
  },
  {
    "id": "sl_s_223",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_100",
    "score": 748.0
  },
  {
    "id": "sl_s_224",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_100",
    "score": 734.5
  },
  {
    "id": "sl_s_225",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_100",
    "score": 737.0
  },
  {
    "id": "sl_s_226",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_100",
    "score": 719.5
  },
  {
    "id": "sl_s_227",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_101",
    "score": 727.0
  },
  {
    "id": "sl_s_228",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_101",
    "score": 705.0
  },
  {
    "id": "sl_s_229",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_101",
    "score": 715.5
  },
  {
    "id": "sl_s_230",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_101",
    "score": 698.0
  },
  {
    "id": "sl_s_231",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_102",
    "score": 758.0
  },
  {
    "id": "sl_s_232",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_102",
    "score": 721.5
  },
  {
    "id": "sl_s_233",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_102",
    "score": 721.0
  },
  {
    "id": "sl_s_234",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_102",
    "score": 724.0
  },
  {
    "id": "sl_s_235",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_102",
    "score": 712.0
  },
  {
    "id": "sl_s_236",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_103",
    "score": 714.0
  },
  {
    "id": "sl_s_237",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_103",
    "score": 704.5
  },
  {
    "id": "sl_s_238",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_103",
    "score": 709.0
  },
  {
    "id": "sl_s_239",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_103",
    "score": 695.0
  },
  {
    "id": "sl_s_240",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_104",
    "score": 723.0
  },
  {
    "id": "sl_s_241",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_104",
    "score": 707.5
  },
  {
    "id": "sl_s_242",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_104",
    "score": 717.5
  },
  {
    "id": "sl_s_243",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_104",
    "score": 712.0
  },
  {
    "id": "sl_s_244",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_105",
    "score": 732.0
  },
  {
    "id": "sl_s_245",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_105",
    "score": 720.5
  },
  {
    "id": "sl_s_246",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_105",
    "score": 729.5
  },
  {
    "id": "sl_s_247",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_105",
    "score": 714.0
  },
  {
    "id": "sl_s_248",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_106",
    "score": 759.5
  },
  {
    "id": "sl_s_249",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_106",
    "score": 737.5
  },
  {
    "id": "sl_s_250",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_106",
    "score": 713.5
  },
  {
    "id": "sl_s_251",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_106",
    "score": 728.5
  },
  {
    "id": "sl_s_252",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_106",
    "score": 712.5
  },
  {
    "id": "sl_s_253",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_107",
    "score": 708.5
  },
  {
    "id": "sl_s_254",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_107",
    "score": 660.5
  },
  {
    "id": "sl_s_255",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_108",
    "score": 733.5
  },
  {
    "id": "sl_s_256",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_108",
    "score": 714.5
  },
  {
    "id": "sl_s_257",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_108",
    "score": 676.5
  },
  {
    "id": "sl_s_258",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_108",
    "score": 713.0
  },
  {
    "id": "sl_s_259",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_109",
    "score": 732.0
  },
  {
    "id": "sl_s_260",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_109",
    "score": 712.5
  },
  {
    "id": "sl_s_261",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_109",
    "score": 729.5
  },
  {
    "id": "sl_s_262",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_109",
    "score": 717.0
  },
  {
    "id": "sl_s_263",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_110",
    "score": 738.0
  },
  {
    "id": "sl_s_264",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_110",
    "score": 711.0
  },
  {
    "id": "sl_s_265",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_110",
    "score": 732.5
  },
  {
    "id": "sl_s_266",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_110",
    "score": 720.5
  },
  {
    "id": "sl_s_267",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_111",
    "score": 732.0
  },
  {
    "id": "sl_s_268",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_111",
    "score": 700.0
  },
  {
    "id": "sl_s_269",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_111",
    "score": 724.0
  },
  {
    "id": "sl_s_270",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_111",
    "score": 715.0
  },
  {
    "id": "sl_s_271",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_112",
    "score": 719.0
  },
  {
    "id": "sl_s_272",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_112",
    "score": 701.0
  },
  {
    "id": "sl_s_273",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_112",
    "score": 714.5
  },
  {
    "id": "sl_s_274",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_112",
    "score": 704.5
  },
  {
    "id": "sl_s_275",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_113",
    "score": 724.5
  },
  {
    "id": "sl_s_276",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_113",
    "score": 714.5
  },
  {
    "id": "sl_s_277",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_113",
    "score": 730.0
  },
  {
    "id": "sl_s_278",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_113",
    "score": 710.0
  },
  {
    "id": "sl_s_279",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_114",
    "score": 729.0
  },
  {
    "id": "sl_s_280",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_114",
    "score": 707.5
  },
  {
    "id": "sl_s_281",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_114",
    "score": 739.5
  },
  {
    "id": "sl_s_282",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_114",
    "score": 706.5
  },
  {
    "id": "sl_s_283",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_115",
    "score": 728.0
  },
  {
    "id": "sl_s_284",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_115",
    "score": 718.5
  },
  {
    "id": "sl_s_285",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_115",
    "score": 725.0
  },
  {
    "id": "sl_s_286",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_115",
    "score": 706.0
  },
  {
    "id": "sl_s_287",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_116",
    "score": 747.5
  },
  {
    "id": "sl_s_288",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_116",
    "score": 690.5
  },
  {
    "id": "sl_s_289",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_116",
    "score": 729.5
  },
  {
    "id": "sl_s_290",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_116",
    "score": 683.5
  },
  {
    "id": "sl_s_291",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_117",
    "score": 717.0
  },
  {
    "id": "sl_s_292",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_117",
    "score": 707.5
  },
  {
    "id": "sl_s_293",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_117",
    "score": 724.0
  },
  {
    "id": "sl_s_294",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_117",
    "score": 695.5
  },
  {
    "id": "sl_s_295",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_118",
    "score": 687.5
  },
  {
    "id": "sl_s_296",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_118",
    "score": 703.5
  },
  {
    "id": "sl_s_297",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_118",
    "score": 687.0
  },
  {
    "id": "sl_s_298",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_118",
    "score": 708.5
  },
  {
    "id": "sl_s_299",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_119",
    "score": 726.0
  },
  {
    "id": "sl_s_300",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_119",
    "score": 708.0
  },
  {
    "id": "sl_s_301",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_119",
    "score": 705.0
  },
  {
    "id": "sl_s_302",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_119",
    "score": 706.0
  },
  {
    "id": "sl_s_303",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_120",
    "score": 725.5
  },
  {
    "id": "sl_s_304",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_120",
    "score": 706.5
  },
  {
    "id": "sl_s_305",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_120",
    "score": 726.5
  },
  {
    "id": "sl_s_306",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_120",
    "score": 706.5
  },
  {
    "id": "sl_s_307",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_121",
    "score": 732.0
  },
  {
    "id": "sl_s_308",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_121",
    "score": 704.5
  },
  {
    "id": "sl_s_309",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_121",
    "score": 743.0
  },
  {
    "id": "sl_s_310",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_121",
    "score": 706.5
  },
  {
    "id": "sl_s_311",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_122",
    "score": 733.5
  },
  {
    "id": "sl_s_312",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_122",
    "score": 719.5
  },
  {
    "id": "sl_s_313",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_122",
    "score": 723.5
  },
  {
    "id": "sl_s_314",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_122",
    "score": 701.0
  },
  {
    "id": "sl_s_315",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_123",
    "score": 717.5
  },
  {
    "id": "sl_s_316",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_123",
    "score": 713.0
  },
  {
    "id": "sl_s_317",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_123",
    "score": 737.0
  },
  {
    "id": "sl_s_318",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_123",
    "score": 708.0
  },
  {
    "id": "sl_s_319",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_124",
    "score": 702.5
  },
  {
    "id": "sl_s_320",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_124",
    "score": 711.5
  },
  {
    "id": "sl_s_321",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_124",
    "score": 718.0
  },
  {
    "id": "sl_s_322",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_124",
    "score": 707.0
  },
  {
    "id": "sl_s_323",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_125",
    "score": 731.0
  },
  {
    "id": "sl_s_324",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_125",
    "score": 713.0
  },
  {
    "id": "sl_s_325",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_125",
    "score": 741.5
  },
  {
    "id": "sl_s_326",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_125",
    "score": 710.5
  },
  {
    "id": "sl_s_327",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_126",
    "score": 736.0
  },
  {
    "id": "sl_s_328",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_126",
    "score": 717.5
  },
  {
    "id": "sl_s_329",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_126",
    "score": 736.0
  },
  {
    "id": "sl_s_330",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_126",
    "score": 706.0
  },
  {
    "id": "sl_s_331",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_127",
    "score": 723.0
  },
  {
    "id": "sl_s_332",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_127",
    "score": 707.5
  },
  {
    "id": "sl_s_333",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_127",
    "score": 707.5
  },
  {
    "id": "sl_s_334",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_127",
    "score": 706.5
  },
  {
    "id": "sl_s_335",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_128",
    "score": 739.0
  },
  {
    "id": "sl_s_336",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_128",
    "score": 712.0
  },
  {
    "id": "sl_s_337",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_128",
    "score": 728.5
  },
  {
    "id": "sl_s_338",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_128",
    "score": 719.0
  },
  {
    "id": "sl_s_339",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_129",
    "score": 737.5
  },
  {
    "id": "sl_s_340",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_129",
    "score": 719.0
  },
  {
    "id": "sl_s_341",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_129",
    "score": 730.0
  },
  {
    "id": "sl_s_342",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_129",
    "score": 702.0
  },
  {
    "id": "sl_s_343",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_130",
    "score": 730.5
  },
  {
    "id": "sl_s_344",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_130",
    "score": 723.5
  },
  {
    "id": "sl_s_345",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_130",
    "score": 714.0
  },
  {
    "id": "sl_s_346",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_131",
    "score": 759.0
  },
  {
    "id": "sl_s_347",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_131",
    "score": 719.0
  },
  {
    "id": "sl_s_348",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_131",
    "score": 704.5
  },
  {
    "id": "sl_s_349",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_132",
    "score": 730.0
  },
  {
    "id": "sl_s_350",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_132",
    "score": 713.0
  },
  {
    "id": "sl_s_351",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_132",
    "score": 717.0
  },
  {
    "id": "sl_s_352",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_132",
    "score": 701.0
  },
  {
    "id": "sl_s_353",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_133",
    "score": 724.0
  },
  {
    "id": "sl_s_354",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_133",
    "score": 694.5
  },
  {
    "id": "sl_s_355",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_133",
    "score": 698.0
  },
  {
    "id": "sl_s_356",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_133",
    "score": 705.5
  },
  {
    "id": "sl_s_357",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_134",
    "score": 671.5
  },
  {
    "id": "sl_s_358",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_135",
    "score": 713.5
  },
  {
    "id": "sl_s_359",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_135",
    "score": 704.5
  },
  {
    "id": "sl_s_360",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_136",
    "score": 686.0
  },
  {
    "id": "sl_s_361",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_137",
    "score": 681.0
  },
  {
    "id": "sl_s_362",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_138",
    "score": 667.0
  },
  {
    "id": "sl_s_363",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_139",
    "score": 688.5
  },
  {
    "id": "sl_s_364",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_140",
    "score": 690.0
  },
  {
    "id": "sl_s_365",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_141",
    "score": 694.5
  },
  {
    "id": "sl_s_366",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_142",
    "score": 689.5
  },
  {
    "id": "sl_s_367",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_143",
    "score": 684.5
  },
  {
    "id": "sl_s_368",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_144",
    "score": 719.0
  },
  {
    "id": "sl_s_369",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_144",
    "score": 679.0
  },
  {
    "id": "sl_s_370",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_145",
    "score": 670.5
  },
  {
    "id": "sl_s_371",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_146",
    "score": 674.5
  },
  {
    "id": "sl_s_372",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_147",
    "score": 680.0
  },
  {
    "id": "sl_s_373",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_148",
    "score": 681.0
  },
  {
    "id": "sl_s_374",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_149",
    "score": 710.0
  },
  {
    "id": "sl_s_375",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_150",
    "score": 665.5
  },
  {
    "id": "sl_s_376",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_151",
    "score": 655.0
  },
  {
    "id": "sl_s_377",
    "schoolId": "hs_222001",
    "middleSchoolId": "ms_152",
    "score": 673.5
  },
  {
    "id": "sl_s_378",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_153",
    "score": 726.5
  },
  {
    "id": "sl_s_379",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_153",
    "score": 745.0
  },
  {
    "id": "sl_s_380",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_153",
    "score": 739.5
  },
  {
    "id": "sl_s_381",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_153",
    "score": 755.0
  },
  {
    "id": "sl_s_382",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_153",
    "score": 712.0
  },
  {
    "id": "sl_s_383",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_154",
    "score": 723.5
  },
  {
    "id": "sl_s_384",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_154",
    "score": 737.5
  },
  {
    "id": "sl_s_385",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_154",
    "score": 752.0
  },
  {
    "id": "sl_s_386",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_154",
    "score": 728.5
  },
  {
    "id": "sl_s_387",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_154",
    "score": 739.5
  },
  {
    "id": "sl_s_388",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_154",
    "score": 711.0
  },
  {
    "id": "sl_s_389",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_155",
    "score": 728.5
  },
  {
    "id": "sl_s_390",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_155",
    "score": 748.5
  },
  {
    "id": "sl_s_391",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_155",
    "score": 739.0
  },
  {
    "id": "sl_s_392",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_155",
    "score": 753.0
  },
  {
    "id": "sl_s_393",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_155",
    "score": 712.5
  },
  {
    "id": "sl_s_394",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_155",
    "score": 736.0
  },
  {
    "id": "sl_s_395",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_156",
    "score": 721.0
  },
  {
    "id": "sl_s_396",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_156",
    "score": 746.5
  },
  {
    "id": "sl_s_397",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_156",
    "score": 730.5
  },
  {
    "id": "sl_s_398",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_156",
    "score": 753.5
  },
  {
    "id": "sl_s_399",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_156",
    "score": 715.0
  },
  {
    "id": "sl_s_400",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_157",
    "score": 727.0
  },
  {
    "id": "sl_s_401",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_157",
    "score": 739.5
  },
  {
    "id": "sl_s_402",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_157",
    "score": 735.5
  },
  {
    "id": "sl_s_403",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_157",
    "score": 754.0
  },
  {
    "id": "sl_s_404",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_157",
    "score": 716.0
  },
  {
    "id": "sl_s_405",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_157",
    "score": 755.0
  },
  {
    "id": "sl_s_406",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_158",
    "score": 720.0
  },
  {
    "id": "sl_s_407",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_158",
    "score": 725.5
  },
  {
    "id": "sl_s_408",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_158",
    "score": 722.0
  },
  {
    "id": "sl_s_409",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_158",
    "score": 757.5
  },
  {
    "id": "sl_s_410",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_158",
    "score": 711.0
  },
  {
    "id": "sl_s_411",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_159",
    "score": 723.0
  },
  {
    "id": "sl_s_412",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_159",
    "score": 743.0
  },
  {
    "id": "sl_s_413",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_159",
    "score": 754.0
  },
  {
    "id": "sl_s_414",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_159",
    "score": 730.0
  },
  {
    "id": "sl_s_415",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_159",
    "score": 749.0
  },
  {
    "id": "sl_s_416",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_159",
    "score": 715.0
  },
  {
    "id": "sl_s_417",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_160",
    "score": 674.0
  },
  {
    "id": "sl_s_418",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_160",
    "score": 737.0
  },
  {
    "id": "sl_s_419",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_160",
    "score": 758.0
  },
  {
    "id": "sl_s_420",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_160",
    "score": 734.5
  },
  {
    "id": "sl_s_421",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_160",
    "score": 747.0
  },
  {
    "id": "sl_s_422",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_160",
    "score": 721.0
  },
  {
    "id": "sl_s_423",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_161",
    "score": 719.5
  },
  {
    "id": "sl_s_424",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_161",
    "score": 746.5
  },
  {
    "id": "sl_s_425",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_161",
    "score": 758.5
  },
  {
    "id": "sl_s_426",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_161",
    "score": 739.0
  },
  {
    "id": "sl_s_427",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_161",
    "score": 756.0
  },
  {
    "id": "sl_s_428",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_161",
    "score": 717.0
  },
  {
    "id": "sl_s_429",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_161",
    "score": 726.5
  },
  {
    "id": "sl_s_430",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_162",
    "score": 718.5
  },
  {
    "id": "sl_s_431",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_162",
    "score": 730.0
  },
  {
    "id": "sl_s_432",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_162",
    "score": 737.0
  },
  {
    "id": "sl_s_433",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_162",
    "score": 727.0
  },
  {
    "id": "sl_s_434",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_162",
    "score": 722.5
  },
  {
    "id": "sl_s_435",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_162",
    "score": 719.5
  },
  {
    "id": "sl_s_436",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_163",
    "score": 725.0
  },
  {
    "id": "sl_s_437",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_163",
    "score": 738.5
  },
  {
    "id": "sl_s_438",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_163",
    "score": 733.0
  },
  {
    "id": "sl_s_439",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_163",
    "score": 750.5
  },
  {
    "id": "sl_s_440",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_163",
    "score": 727.5
  },
  {
    "id": "sl_s_441",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_164",
    "score": 707.5
  },
  {
    "id": "sl_s_442",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_164",
    "score": 733.0
  },
  {
    "id": "sl_s_443",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_164",
    "score": 760.0
  },
  {
    "id": "sl_s_444",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_164",
    "score": 723.5
  },
  {
    "id": "sl_s_445",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_164",
    "score": 757.5
  },
  {
    "id": "sl_s_446",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_164",
    "score": 717.0
  },
  {
    "id": "sl_s_447",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_165",
    "score": 720.5
  },
  {
    "id": "sl_s_448",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_165",
    "score": 744.0
  },
  {
    "id": "sl_s_449",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_165",
    "score": 757.5
  },
  {
    "id": "sl_s_450",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_165",
    "score": 733.5
  },
  {
    "id": "sl_s_451",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_165",
    "score": 749.0
  },
  {
    "id": "sl_s_452",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_165",
    "score": 714.5
  },
  {
    "id": "sl_s_453",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_165",
    "score": 727.0
  },
  {
    "id": "sl_s_454",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_166",
    "score": 704.5
  },
  {
    "id": "sl_s_455",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_166",
    "score": 746.5
  },
  {
    "id": "sl_s_456",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_166",
    "score": 759.5
  },
  {
    "id": "sl_s_457",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_166",
    "score": 729.0
  },
  {
    "id": "sl_s_458",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_166",
    "score": 756.0
  },
  {
    "id": "sl_s_459",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_166",
    "score": 698.0
  },
  {
    "id": "sl_s_460",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_166",
    "score": 759.5
  },
  {
    "id": "sl_s_461",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_167",
    "score": 713.0
  },
  {
    "id": "sl_s_462",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_167",
    "score": 744.0
  },
  {
    "id": "sl_s_463",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_167",
    "score": 757.5
  },
  {
    "id": "sl_s_464",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_167",
    "score": 730.5
  },
  {
    "id": "sl_s_465",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_167",
    "score": 755.5
  },
  {
    "id": "sl_s_466",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_167",
    "score": 705.0
  },
  {
    "id": "sl_s_467",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_168",
    "score": 722.0
  },
  {
    "id": "sl_s_468",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_168",
    "score": 742.0
  },
  {
    "id": "sl_s_469",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_168",
    "score": 737.5
  },
  {
    "id": "sl_s_470",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_168",
    "score": 751.0
  },
  {
    "id": "sl_s_471",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_168",
    "score": 718.5
  },
  {
    "id": "sl_s_472",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_168",
    "score": 727.0
  },
  {
    "id": "sl_s_473",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_169",
    "score": 718.5
  },
  {
    "id": "sl_s_474",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_169",
    "score": 727.0
  },
  {
    "id": "sl_s_475",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_169",
    "score": 718.5
  },
  {
    "id": "sl_s_476",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_169",
    "score": 751.5
  },
  {
    "id": "sl_s_477",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_169",
    "score": 715.5
  },
  {
    "id": "sl_s_478",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_169",
    "score": 726.0
  },
  {
    "id": "sl_s_479",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_170",
    "score": 725.0
  },
  {
    "id": "sl_s_480",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_170",
    "score": 742.0
  },
  {
    "id": "sl_s_481",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_170",
    "score": 750.5
  },
  {
    "id": "sl_s_482",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_170",
    "score": 733.5
  },
  {
    "id": "sl_s_483",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_170",
    "score": 751.5
  },
  {
    "id": "sl_s_484",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_170",
    "score": 708.0
  },
  {
    "id": "sl_s_485",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_170",
    "score": 735.5
  },
  {
    "id": "sl_s_486",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_171",
    "score": 716.5
  },
  {
    "id": "sl_s_487",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_171",
    "score": 745.0
  },
  {
    "id": "sl_s_488",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_171",
    "score": 733.0
  },
  {
    "id": "sl_s_489",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_171",
    "score": 752.0
  },
  {
    "id": "sl_s_490",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_171",
    "score": 713.5
  },
  {
    "id": "sl_s_491",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_171",
    "score": 759.5
  },
  {
    "id": "sl_s_492",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_172",
    "score": 722.5
  },
  {
    "id": "sl_s_493",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_172",
    "score": 739.5
  },
  {
    "id": "sl_s_494",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_172",
    "score": 754.5
  },
  {
    "id": "sl_s_495",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_172",
    "score": 731.5
  },
  {
    "id": "sl_s_496",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_172",
    "score": 756.5
  },
  {
    "id": "sl_s_497",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_172",
    "score": 719.0
  },
  {
    "id": "sl_s_498",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_172",
    "score": 756.0
  },
  {
    "id": "sl_s_499",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_172",
    "score": 725.5
  },
  {
    "id": "sl_s_500",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_173",
    "score": 705.0
  },
  {
    "id": "sl_s_501",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_173",
    "score": 733.5
  },
  {
    "id": "sl_s_502",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_173",
    "score": 728.5
  },
  {
    "id": "sl_s_503",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_173",
    "score": 727.5
  },
  {
    "id": "sl_s_504",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_173",
    "score": 731.0
  },
  {
    "id": "sl_s_505",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_173",
    "score": 702.5
  },
  {
    "id": "sl_s_506",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_174",
    "score": 717.0
  },
  {
    "id": "sl_s_507",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_174",
    "score": 739.5
  },
  {
    "id": "sl_s_508",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_174",
    "score": 735.0
  },
  {
    "id": "sl_s_509",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_174",
    "score": 758.0
  },
  {
    "id": "sl_s_510",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_174",
    "score": 717.5
  },
  {
    "id": "sl_s_511",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_175",
    "score": 714.5
  },
  {
    "id": "sl_s_512",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_175",
    "score": 740.5
  },
  {
    "id": "sl_s_513",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_175",
    "score": 754.0
  },
  {
    "id": "sl_s_514",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_175",
    "score": 726.0
  },
  {
    "id": "sl_s_515",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_175",
    "score": 749.0
  },
  {
    "id": "sl_s_516",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_175",
    "score": 708.0
  },
  {
    "id": "sl_s_517",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_175",
    "score": 705.5
  },
  {
    "id": "sl_s_518",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_176",
    "score": 724.5
  },
  {
    "id": "sl_s_519",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_176",
    "score": 745.0
  },
  {
    "id": "sl_s_520",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_176",
    "score": 759.5
  },
  {
    "id": "sl_s_521",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_176",
    "score": 737.5
  },
  {
    "id": "sl_s_522",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_176",
    "score": 753.5
  },
  {
    "id": "sl_s_523",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_176",
    "score": 715.0
  },
  {
    "id": "sl_s_524",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_176",
    "score": 759.0
  },
  {
    "id": "sl_s_525",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_177",
    "score": 723.5
  },
  {
    "id": "sl_s_526",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_177",
    "score": 747.5
  },
  {
    "id": "sl_s_527",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_177",
    "score": 759.5
  },
  {
    "id": "sl_s_528",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_177",
    "score": 732.5
  },
  {
    "id": "sl_s_529",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_177",
    "score": 757.5
  },
  {
    "id": "sl_s_530",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_177",
    "score": 716.0
  },
  {
    "id": "sl_s_531",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_178",
    "score": 727.0
  },
  {
    "id": "sl_s_532",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_178",
    "score": 752.0
  },
  {
    "id": "sl_s_533",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_178",
    "score": 736.5
  },
  {
    "id": "sl_s_534",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_178",
    "score": 757.5
  },
  {
    "id": "sl_s_535",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_178",
    "score": 713.0
  },
  {
    "id": "sl_s_536",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_178",
    "score": 756.5
  },
  {
    "id": "sl_s_537",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_179",
    "score": 719.5
  },
  {
    "id": "sl_s_538",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_179",
    "score": 745.5
  },
  {
    "id": "sl_s_539",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_179",
    "score": 753.5
  },
  {
    "id": "sl_s_540",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_179",
    "score": 734.0
  },
  {
    "id": "sl_s_541",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_179",
    "score": 751.5
  },
  {
    "id": "sl_s_542",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_179",
    "score": 716.0
  },
  {
    "id": "sl_s_543",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_180",
    "score": 698.5
  },
  {
    "id": "sl_s_544",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_180",
    "score": 731.5
  },
  {
    "id": "sl_s_545",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_180",
    "score": 735.0
  },
  {
    "id": "sl_s_546",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_180",
    "score": 741.0
  },
  {
    "id": "sl_s_547",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_180",
    "score": 699.5
  },
  {
    "id": "sl_s_548",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_180",
    "score": 754.0
  },
  {
    "id": "sl_s_549",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_181",
    "score": 725.5
  },
  {
    "id": "sl_s_550",
    "schoolId": "hs_032001",
    "middleSchoolId": "ms_181",
    "score": 740.5
  },
  {
    "id": "sl_s_551",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_181",
    "score": 757.5
  },
  {
    "id": "sl_s_552",
    "schoolId": "hs_032002",
    "middleSchoolId": "ms_181",
    "score": 734.0
  },
  {
    "id": "sl_s_553",
    "schoolId": "hs_042036",
    "middleSchoolId": "ms_181",
    "score": 750.0
  },
  {
    "id": "sl_s_554",
    "schoolId": "hs_043015",
    "middleSchoolId": "ms_181",
    "score": 719.0
  },
  {
    "id": "sl_s_555",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_182",
    "score": 715.0
  },
  {
    "id": "sl_s_556",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_182",
    "score": 733.5
  },
  {
    "id": "sl_s_557",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_182",
    "score": 711.5
  },
  {
    "id": "sl_s_558",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_183",
    "score": 724.0
  },
  {
    "id": "sl_s_559",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_183",
    "score": 741.5
  },
  {
    "id": "sl_s_560",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_183",
    "score": 705.0
  },
  {
    "id": "sl_s_561",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_183",
    "score": 753.5
  },
  {
    "id": "sl_s_562",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_184",
    "score": 716.0
  },
  {
    "id": "sl_s_563",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_184",
    "score": 724.0
  },
  {
    "id": "sl_s_564",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_184",
    "score": 714.5
  },
  {
    "id": "sl_s_565",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_185",
    "score": 726.0
  },
  {
    "id": "sl_s_566",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_185",
    "score": 742.5
  },
  {
    "id": "sl_s_567",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_185",
    "score": 717.5
  },
  {
    "id": "sl_s_568",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_186",
    "score": 723.5
  },
  {
    "id": "sl_s_569",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_186",
    "score": 732.0
  },
  {
    "id": "sl_s_570",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_186",
    "score": 717.0
  },
  {
    "id": "sl_s_571",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_187",
    "score": 729.5
  },
  {
    "id": "sl_s_572",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_187",
    "score": 732.5
  },
  {
    "id": "sl_s_573",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_187",
    "score": 713.0
  },
  {
    "id": "sl_s_574",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_188",
    "score": 762.5
  },
  {
    "id": "sl_s_575",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_188",
    "score": 721.5
  },
  {
    "id": "sl_s_576",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_188",
    "score": 738.0
  },
  {
    "id": "sl_s_577",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_188",
    "score": 716.0
  },
  {
    "id": "sl_s_578",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_189",
    "score": 719.5
  },
  {
    "id": "sl_s_579",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_189",
    "score": 732.0
  },
  {
    "id": "sl_s_580",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_189",
    "score": 712.0
  },
  {
    "id": "sl_s_581",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_190",
    "score": 724.5
  },
  {
    "id": "sl_s_582",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_190",
    "score": 743.0
  },
  {
    "id": "sl_s_583",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_190",
    "score": 711.5
  },
  {
    "id": "sl_s_584",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_191",
    "score": 748.5
  },
  {
    "id": "sl_s_585",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_191",
    "score": 724.0
  },
  {
    "id": "sl_s_586",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_191",
    "score": 736.5
  },
  {
    "id": "sl_s_587",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_191",
    "score": 708.0
  },
  {
    "id": "sl_s_588",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_192",
    "score": 727.0
  },
  {
    "id": "sl_s_589",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_192",
    "score": 739.5
  },
  {
    "id": "sl_s_590",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_192",
    "score": 714.5
  },
  {
    "id": "sl_s_591",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_192",
    "score": 761.5
  },
  {
    "id": "sl_s_592",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_193",
    "score": 719.0
  },
  {
    "id": "sl_s_593",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_193",
    "score": 736.0
  },
  {
    "id": "sl_s_594",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_193",
    "score": 702.5
  },
  {
    "id": "sl_s_595",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_194",
    "score": 721.5
  },
  {
    "id": "sl_s_596",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_194",
    "score": 736.5
  },
  {
    "id": "sl_s_597",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_194",
    "score": 714.5
  },
  {
    "id": "sl_s_598",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_194",
    "score": 759.0
  },
  {
    "id": "sl_s_599",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_195",
    "score": 745.5
  },
  {
    "id": "sl_s_600",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_196",
    "score": 724.5
  },
  {
    "id": "sl_s_601",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_196",
    "score": 730.0
  },
  {
    "id": "sl_s_602",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_196",
    "score": 715.0
  },
  {
    "id": "sl_s_603",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_196",
    "score": 752.5
  },
  {
    "id": "sl_s_604",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_197",
    "score": 726.0
  },
  {
    "id": "sl_s_605",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_197",
    "score": 744.5
  },
  {
    "id": "sl_s_606",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_197",
    "score": 718.0
  },
  {
    "id": "sl_s_607",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_197",
    "score": 748.5
  },
  {
    "id": "sl_s_608",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_198",
    "score": 730.0
  },
  {
    "id": "sl_s_609",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_198",
    "score": 743.0
  },
  {
    "id": "sl_s_610",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_198",
    "score": 718.0
  },
  {
    "id": "sl_s_611",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_199",
    "score": 664.0
  },
  {
    "id": "sl_s_612",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_199",
    "score": 689.5
  },
  {
    "id": "sl_s_613",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_199",
    "score": 686.0
  },
  {
    "id": "sl_s_614",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_199",
    "score": 740.0
  },
  {
    "id": "sl_s_615",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_200",
    "score": 720.5
  },
  {
    "id": "sl_s_616",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_200",
    "score": 742.0
  },
  {
    "id": "sl_s_617",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_200",
    "score": 709.5
  },
  {
    "id": "sl_s_618",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_200",
    "score": 761.0
  },
  {
    "id": "sl_s_619",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_201",
    "score": 706.5
  },
  {
    "id": "sl_s_620",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_201",
    "score": 733.5
  },
  {
    "id": "sl_s_621",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_201",
    "score": 723.0
  },
  {
    "id": "sl_s_622",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_202",
    "score": 725.0
  },
  {
    "id": "sl_s_623",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_202",
    "score": 743.0
  },
  {
    "id": "sl_s_624",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_202",
    "score": 716.5
  },
  {
    "id": "sl_s_625",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_202",
    "score": 759.0
  },
  {
    "id": "sl_s_626",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_203",
    "score": 724.5
  },
  {
    "id": "sl_s_627",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_203",
    "score": 739.5
  },
  {
    "id": "sl_s_628",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_203",
    "score": 720.5
  },
  {
    "id": "sl_s_629",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_204",
    "score": 723.0
  },
  {
    "id": "sl_s_630",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_204",
    "score": 737.0
  },
  {
    "id": "sl_s_631",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_204",
    "score": 707.5
  },
  {
    "id": "sl_s_632",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_205",
    "score": 717.5
  },
  {
    "id": "sl_s_633",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_205",
    "score": 711.0
  },
  {
    "id": "sl_s_634",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_205",
    "score": 711.5
  },
  {
    "id": "sl_s_635",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_205",
    "score": 749.5
  },
  {
    "id": "sl_s_636",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_206",
    "score": 727.5
  },
  {
    "id": "sl_s_637",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_206",
    "score": 733.5
  },
  {
    "id": "sl_s_638",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_206",
    "score": 717.5
  },
  {
    "id": "sl_s_639",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_207",
    "score": 719.0
  },
  {
    "id": "sl_s_640",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_207",
    "score": 733.0
  },
  {
    "id": "sl_s_641",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_207",
    "score": 711.0
  },
  {
    "id": "sl_s_642",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_208",
    "score": 723.5
  },
  {
    "id": "sl_s_643",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_208",
    "score": 732.5
  },
  {
    "id": "sl_s_644",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_208",
    "score": 713.5
  },
  {
    "id": "sl_s_645",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_209",
    "score": 728.5
  },
  {
    "id": "sl_s_646",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_209",
    "score": 739.0
  },
  {
    "id": "sl_s_647",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_209",
    "score": 707.0
  },
  {
    "id": "sl_s_648",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_210",
    "score": 731.5
  },
  {
    "id": "sl_s_649",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_210",
    "score": 744.5
  },
  {
    "id": "sl_s_650",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_210",
    "score": 714.0
  },
  {
    "id": "sl_s_651",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_210",
    "score": 761.0
  },
  {
    "id": "sl_s_652",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_211",
    "score": 727.0
  },
  {
    "id": "sl_s_653",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_211",
    "score": 741.0
  },
  {
    "id": "sl_s_654",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_211",
    "score": 713.0
  },
  {
    "id": "sl_s_655",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_212",
    "score": 755.5
  },
  {
    "id": "sl_s_656",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_212",
    "score": 729.0
  },
  {
    "id": "sl_s_657",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_212",
    "score": 742.0
  },
  {
    "id": "sl_s_658",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_212",
    "score": 726.0
  },
  {
    "id": "sl_s_659",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_213",
    "score": 732.5
  },
  {
    "id": "sl_s_660",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_213",
    "score": 745.5
  },
  {
    "id": "sl_s_661",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_213",
    "score": 717.5
  },
  {
    "id": "sl_s_662",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_214",
    "score": 720.5
  },
  {
    "id": "sl_s_663",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_214",
    "score": 743.5
  },
  {
    "id": "sl_s_664",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_214",
    "score": 710.5
  },
  {
    "id": "sl_s_665",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_214",
    "score": 709.5
  },
  {
    "id": "sl_s_666",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_215",
    "score": 671.5
  },
  {
    "id": "sl_s_667",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_216",
    "score": 722.0
  },
  {
    "id": "sl_s_668",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_216",
    "score": 740.5
  },
  {
    "id": "sl_s_669",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_216",
    "score": 711.0
  },
  {
    "id": "sl_s_670",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_217",
    "score": 714.0
  },
  {
    "id": "sl_s_671",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_217",
    "score": 733.0
  },
  {
    "id": "sl_s_672",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_217",
    "score": 708.0
  },
  {
    "id": "sl_s_673",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_218",
    "score": 706.0
  },
  {
    "id": "sl_s_674",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_218",
    "score": 736.0
  },
  {
    "id": "sl_s_675",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_218",
    "score": 700.5
  },
  {
    "id": "sl_s_676",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_219",
    "score": 725.5
  },
  {
    "id": "sl_s_677",
    "schoolId": "hs_072002",
    "middleSchoolId": "ms_219",
    "score": 750.0
  },
  {
    "id": "sl_s_678",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_219",
    "score": 710.0
  },
  {
    "id": "sl_s_679",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_220",
    "score": 723.5
  },
  {
    "id": "sl_s_680",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_220",
    "score": 743.5
  },
  {
    "id": "sl_s_681",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_220",
    "score": 757.5
  },
  {
    "id": "sl_s_682",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_220",
    "score": 711.0
  },
  {
    "id": "sl_s_683",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_221",
    "score": 720.5
  },
  {
    "id": "sl_s_684",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_221",
    "score": 740.0
  },
  {
    "id": "sl_s_685",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_221",
    "score": 757.0
  },
  {
    "id": "sl_s_686",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_221",
    "score": 711.5
  },
  {
    "id": "sl_s_687",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_222",
    "score": 729.0
  },
  {
    "id": "sl_s_688",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_222",
    "score": 749.0
  },
  {
    "id": "sl_s_689",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_222",
    "score": 759.0
  },
  {
    "id": "sl_s_690",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_222",
    "score": 718.0
  },
  {
    "id": "sl_s_691",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_223",
    "score": 729.0
  },
  {
    "id": "sl_s_692",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_223",
    "score": 743.0
  },
  {
    "id": "sl_s_693",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_223",
    "score": 747.5
  },
  {
    "id": "sl_s_694",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_223",
    "score": 716.0
  },
  {
    "id": "sl_s_695",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_224",
    "score": 718.5
  },
  {
    "id": "sl_s_696",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_224",
    "score": 734.0
  },
  {
    "id": "sl_s_697",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_224",
    "score": 750.5
  },
  {
    "id": "sl_s_698",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_224",
    "score": 708.5
  },
  {
    "id": "sl_s_699",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_225",
    "score": 729.0
  },
  {
    "id": "sl_s_700",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_225",
    "score": 738.0
  },
  {
    "id": "sl_s_701",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_225",
    "score": 754.0
  },
  {
    "id": "sl_s_702",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_225",
    "score": 717.5
  },
  {
    "id": "sl_s_703",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_226",
    "score": 724.0
  },
  {
    "id": "sl_s_704",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_226",
    "score": 730.0
  },
  {
    "id": "sl_s_705",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_226",
    "score": 714.5
  },
  {
    "id": "sl_s_706",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_227",
    "score": 739.0
  },
  {
    "id": "sl_s_707",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_227",
    "score": 741.5
  },
  {
    "id": "sl_s_708",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_227",
    "score": 714.5
  },
  {
    "id": "sl_s_709",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_228",
    "score": 714.0
  },
  {
    "id": "sl_s_710",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_228",
    "score": 746.0
  },
  {
    "id": "sl_s_711",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_228",
    "score": 725.0
  },
  {
    "id": "sl_s_712",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_229",
    "score": 724.5
  },
  {
    "id": "sl_s_713",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_229",
    "score": 732.0
  },
  {
    "id": "sl_s_714",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_229",
    "score": 714.5
  },
  {
    "id": "sl_s_715",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_230",
    "score": 717.0
  },
  {
    "id": "sl_s_716",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_230",
    "score": 731.0
  },
  {
    "id": "sl_s_717",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_230",
    "score": 706.5
  },
  {
    "id": "sl_s_718",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_231",
    "score": 717.0
  },
  {
    "id": "sl_s_719",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_231",
    "score": 723.5
  },
  {
    "id": "sl_s_720",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_231",
    "score": 724.5
  },
  {
    "id": "sl_s_721",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_231",
    "score": 714.5
  },
  {
    "id": "sl_s_722",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_232",
    "score": 722.0
  },
  {
    "id": "sl_s_723",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_232",
    "score": 739.5
  },
  {
    "id": "sl_s_724",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_232",
    "score": 713.0
  },
  {
    "id": "sl_s_725",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_233",
    "score": 720.0
  },
  {
    "id": "sl_s_726",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_233",
    "score": 724.0
  },
  {
    "id": "sl_s_727",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_233",
    "score": 703.5
  },
  {
    "id": "sl_s_728",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_234",
    "score": 718.0
  },
  {
    "id": "sl_s_729",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_234",
    "score": 721.5
  },
  {
    "id": "sl_s_730",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_234",
    "score": 759.5
  },
  {
    "id": "sl_s_731",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_234",
    "score": 711.5
  },
  {
    "id": "sl_s_732",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_235",
    "score": 727.5
  },
  {
    "id": "sl_s_733",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_235",
    "score": 738.5
  },
  {
    "id": "sl_s_734",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_235",
    "score": 720.0
  },
  {
    "id": "sl_s_735",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_236",
    "score": 722.0
  },
  {
    "id": "sl_s_736",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_236",
    "score": 732.0
  },
  {
    "id": "sl_s_737",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_236",
    "score": 755.5
  },
  {
    "id": "sl_s_738",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_236",
    "score": 708.5
  },
  {
    "id": "sl_s_739",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_237",
    "score": 720.0
  },
  {
    "id": "sl_s_740",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_237",
    "score": 729.5
  },
  {
    "id": "sl_s_741",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_237",
    "score": 759.5
  },
  {
    "id": "sl_s_742",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_237",
    "score": 713.5
  },
  {
    "id": "sl_s_743",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_238",
    "score": 720.5
  },
  {
    "id": "sl_s_744",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_238",
    "score": 732.0
  },
  {
    "id": "sl_s_745",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_238",
    "score": 750.0
  },
  {
    "id": "sl_s_746",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_238",
    "score": 716.0
  },
  {
    "id": "sl_s_747",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_239",
    "score": 753.5
  },
  {
    "id": "sl_s_748",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_239",
    "score": 723.0
  },
  {
    "id": "sl_s_749",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_239",
    "score": 741.5
  },
  {
    "id": "sl_s_750",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_239",
    "score": 715.5
  },
  {
    "id": "sl_s_751",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_240",
    "score": 724.5
  },
  {
    "id": "sl_s_752",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_240",
    "score": 742.0
  },
  {
    "id": "sl_s_753",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_240",
    "score": 759.5
  },
  {
    "id": "sl_s_754",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_240",
    "score": 708.5
  },
  {
    "id": "sl_s_755",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_241",
    "score": 724.5
  },
  {
    "id": "sl_s_756",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_241",
    "score": 736.5
  },
  {
    "id": "sl_s_757",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_241",
    "score": 753.0
  },
  {
    "id": "sl_s_758",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_241",
    "score": 715.5
  },
  {
    "id": "sl_s_759",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_242",
    "score": 724.5
  },
  {
    "id": "sl_s_760",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_242",
    "score": 742.5
  },
  {
    "id": "sl_s_761",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_242",
    "score": 759.5
  },
  {
    "id": "sl_s_762",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_242",
    "score": 715.0
  },
  {
    "id": "sl_s_763",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_243",
    "score": 717.5
  },
  {
    "id": "sl_s_764",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_243",
    "score": 745.0
  },
  {
    "id": "sl_s_765",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_243",
    "score": 758.0
  },
  {
    "id": "sl_s_766",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_243",
    "score": 703.5
  },
  {
    "id": "sl_s_767",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_244",
    "score": 728.0
  },
  {
    "id": "sl_s_768",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_244",
    "score": 740.0
  },
  {
    "id": "sl_s_769",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_244",
    "score": 709.5
  },
  {
    "id": "sl_s_770",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_245",
    "score": 725.0
  },
  {
    "id": "sl_s_771",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_245",
    "score": 743.5
  },
  {
    "id": "sl_s_772",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_245",
    "score": 759.0
  },
  {
    "id": "sl_s_773",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_245",
    "score": 718.0
  },
  {
    "id": "sl_s_774",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_246",
    "score": 760.0
  },
  {
    "id": "sl_s_775",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_246",
    "score": 720.5
  },
  {
    "id": "sl_s_776",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_246",
    "score": 748.5
  },
  {
    "id": "sl_s_777",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_246",
    "score": 719.5
  },
  {
    "id": "sl_s_778",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_247",
    "score": 714.0
  },
  {
    "id": "sl_s_779",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_247",
    "score": 733.0
  },
  {
    "id": "sl_s_780",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_247",
    "score": 708.0
  },
  {
    "id": "sl_s_781",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_248",
    "score": 728.5
  },
  {
    "id": "sl_s_782",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_248",
    "score": 745.0
  },
  {
    "id": "sl_s_783",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_248",
    "score": 750.0
  },
  {
    "id": "sl_s_784",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_248",
    "score": 713.0
  },
  {
    "id": "sl_s_785",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_249",
    "score": 719.0
  },
  {
    "id": "sl_s_786",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_249",
    "score": 743.5
  },
  {
    "id": "sl_s_787",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_249",
    "score": 717.5
  },
  {
    "id": "sl_s_788",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_250",
    "score": 726.5
  },
  {
    "id": "sl_s_789",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_250",
    "score": 748.0
  },
  {
    "id": "sl_s_790",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_250",
    "score": 758.0
  },
  {
    "id": "sl_s_791",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_250",
    "score": 710.0
  },
  {
    "id": "sl_s_792",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_251",
    "score": 723.5
  },
  {
    "id": "sl_s_793",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_251",
    "score": 731.5
  },
  {
    "id": "sl_s_794",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_251",
    "score": 715.0
  },
  {
    "id": "sl_s_795",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_252",
    "score": 728.0
  },
  {
    "id": "sl_s_796",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_252",
    "score": 737.0
  },
  {
    "id": "sl_s_797",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_252",
    "score": 756.5
  },
  {
    "id": "sl_s_798",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_252",
    "score": 719.0
  },
  {
    "id": "sl_s_799",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_253",
    "score": 730.0
  },
  {
    "id": "sl_s_800",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_253",
    "score": 743.5
  },
  {
    "id": "sl_s_801",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_253",
    "score": 723.5
  },
  {
    "id": "sl_s_802",
    "schoolId": "hs_102004",
    "middleSchoolId": "ms_254",
    "score": 722.0
  },
  {
    "id": "sl_s_803",
    "schoolId": "hs_102032",
    "middleSchoolId": "ms_254",
    "score": 735.5
  },
  {
    "id": "sl_s_804",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_254",
    "score": 760.0
  },
  {
    "id": "sl_s_805",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_254",
    "score": 707.5
  },
  {
    "id": "sl_s_806",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_255",
    "score": 741.5
  },
  {
    "id": "sl_s_807",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_255",
    "score": 730.5
  },
  {
    "id": "sl_s_808",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_255",
    "score": 722.5
  },
  {
    "id": "sl_s_809",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_256",
    "score": 745.0
  },
  {
    "id": "sl_s_810",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_256",
    "score": 742.5
  },
  {
    "id": "sl_s_811",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_256",
    "score": 717.0
  },
  {
    "id": "sl_s_812",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_257",
    "score": 736.5
  },
  {
    "id": "sl_s_813",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_257",
    "score": 712.0
  },
  {
    "id": "sl_s_814",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_257",
    "score": 710.5
  },
  {
    "id": "sl_s_815",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_258",
    "score": 743.0
  },
  {
    "id": "sl_s_816",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_258",
    "score": 732.5
  },
  {
    "id": "sl_s_817",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_258",
    "score": 720.5
  },
  {
    "id": "sl_s_818",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_259",
    "score": 741.0
  },
  {
    "id": "sl_s_819",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_259",
    "score": 711.5
  },
  {
    "id": "sl_s_820",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_259",
    "score": 722.0
  },
  {
    "id": "sl_s_821",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_260",
    "score": 740.0
  },
  {
    "id": "sl_s_822",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_260",
    "score": 726.5
  },
  {
    "id": "sl_s_823",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_260",
    "score": 713.0
  },
  {
    "id": "sl_s_824",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_261",
    "score": 745.0
  },
  {
    "id": "sl_s_825",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_261",
    "score": 731.0
  },
  {
    "id": "sl_s_826",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_261",
    "score": 708.0
  },
  {
    "id": "sl_s_827",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_261",
    "score": 720.5
  },
  {
    "id": "sl_s_828",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_262",
    "score": 739.5
  },
  {
    "id": "sl_s_829",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_262",
    "score": 726.5
  },
  {
    "id": "sl_s_830",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_262",
    "score": 715.5
  },
  {
    "id": "sl_s_831",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_263",
    "score": 758.0
  },
  {
    "id": "sl_s_832",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_263",
    "score": 742.5
  },
  {
    "id": "sl_s_833",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_263",
    "score": 739.5
  },
  {
    "id": "sl_s_834",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_263",
    "score": 721.5
  },
  {
    "id": "sl_s_835",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_264",
    "score": 758.5
  },
  {
    "id": "sl_s_836",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_264",
    "score": 735.5
  },
  {
    "id": "sl_s_837",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_264",
    "score": 741.0
  },
  {
    "id": "sl_s_838",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_264",
    "score": 719.5
  },
  {
    "id": "sl_s_839",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_265",
    "score": 722.0
  },
  {
    "id": "sl_s_840",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_265",
    "score": 729.5
  },
  {
    "id": "sl_s_841",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_265",
    "score": 717.0
  },
  {
    "id": "sl_s_842",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_266",
    "score": 730.5
  },
  {
    "id": "sl_s_843",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_266",
    "score": 733.0
  },
  {
    "id": "sl_s_844",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_266",
    "score": 720.0
  },
  {
    "id": "sl_s_845",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_266",
    "score": 724.5
  },
  {
    "id": "sl_s_846",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_267",
    "score": 715.0
  },
  {
    "id": "sl_s_847",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_267",
    "score": 693.0
  },
  {
    "id": "sl_s_848",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_267",
    "score": 672.0
  },
  {
    "id": "sl_s_849",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_268",
    "score": 728.0
  },
  {
    "id": "sl_s_850",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_268",
    "score": 727.0
  },
  {
    "id": "sl_s_851",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_268",
    "score": 718.0
  },
  {
    "id": "sl_s_852",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_268",
    "score": 696.0
  },
  {
    "id": "sl_s_853",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_269",
    "score": 745.0
  },
  {
    "id": "sl_s_854",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_269",
    "score": 725.5
  },
  {
    "id": "sl_s_855",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_269",
    "score": 720.0
  },
  {
    "id": "sl_s_856",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_270",
    "score": 744.0
  },
  {
    "id": "sl_s_857",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_270",
    "score": 731.0
  },
  {
    "id": "sl_s_858",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_270",
    "score": 723.5
  },
  {
    "id": "sl_s_859",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_271",
    "score": 754.0
  },
  {
    "id": "sl_s_860",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_271",
    "score": 687.5
  },
  {
    "id": "sl_s_861",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_271",
    "score": 684.0
  },
  {
    "id": "sl_s_862",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_272",
    "score": 738.5
  },
  {
    "id": "sl_s_863",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_272",
    "score": 727.5
  },
  {
    "id": "sl_s_864",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_272",
    "score": 722.5
  },
  {
    "id": "sl_s_865",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_273",
    "score": 728.0
  },
  {
    "id": "sl_s_866",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_273",
    "score": 725.5
  },
  {
    "id": "sl_s_867",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_273",
    "score": 696.5
  },
  {
    "id": "sl_s_868",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_274",
    "score": 760.0
  },
  {
    "id": "sl_s_869",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_274",
    "score": 742.0
  },
  {
    "id": "sl_s_870",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_274",
    "score": 740.5
  },
  {
    "id": "sl_s_871",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_274",
    "score": 719.5
  },
  {
    "id": "sl_s_872",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_275",
    "score": 720.0
  },
  {
    "id": "sl_s_873",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_275",
    "score": 715.5
  },
  {
    "id": "sl_s_874",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_275",
    "score": 693.0
  },
  {
    "id": "sl_s_875",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_276",
    "score": 749.5
  },
  {
    "id": "sl_s_876",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_276",
    "score": 725.0
  },
  {
    "id": "sl_s_877",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_276",
    "score": 700.5
  },
  {
    "id": "sl_s_878",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_277",
    "score": 656.0
  },
  {
    "id": "sl_s_879",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_277",
    "score": 698.5
  },
  {
    "id": "sl_s_880",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_278",
    "score": 760.5
  },
  {
    "id": "sl_s_881",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_278",
    "score": 744.5
  },
  {
    "id": "sl_s_882",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_278",
    "score": 733.5
  },
  {
    "id": "sl_s_883",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_278",
    "score": 714.5
  },
  {
    "id": "sl_s_884",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_279",
    "score": 712.0
  },
  {
    "id": "sl_s_885",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_279",
    "score": 723.5
  },
  {
    "id": "sl_s_886",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_279",
    "score": 709.5
  },
  {
    "id": "sl_s_887",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_280",
    "score": 740.5
  },
  {
    "id": "sl_s_888",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_280",
    "score": 719.5
  },
  {
    "id": "sl_s_889",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_281",
    "score": 719.5
  },
  {
    "id": "sl_s_890",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_281",
    "score": 691.0
  },
  {
    "id": "sl_s_891",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_281",
    "score": 664.0
  },
  {
    "id": "sl_s_892",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_282",
    "score": 744.0
  },
  {
    "id": "sl_s_893",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_282",
    "score": 736.5
  },
  {
    "id": "sl_s_894",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_282",
    "score": 722.5
  },
  {
    "id": "sl_s_895",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_283",
    "score": 713.5
  },
  {
    "id": "sl_s_896",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_283",
    "score": 703.0
  },
  {
    "id": "sl_s_897",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_283",
    "score": 671.5
  },
  {
    "id": "sl_s_898",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_284",
    "score": 741.5
  },
  {
    "id": "sl_s_899",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_284",
    "score": 716.0
  },
  {
    "id": "sl_s_900",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_285",
    "score": 744.0
  },
  {
    "id": "sl_s_901",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_285",
    "score": 729.5
  },
  {
    "id": "sl_s_902",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_285",
    "score": 713.5
  },
  {
    "id": "sl_s_903",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_286",
    "score": 741.0
  },
  {
    "id": "sl_s_904",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_286",
    "score": 720.0
  },
  {
    "id": "sl_s_905",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_287",
    "score": 747.0
  },
  {
    "id": "sl_s_906",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_287",
    "score": 721.5
  },
  {
    "id": "sl_s_907",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_287",
    "score": 711.0
  },
  {
    "id": "sl_s_908",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_288",
    "score": 743.5
  },
  {
    "id": "sl_s_909",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_288",
    "score": 729.0
  },
  {
    "id": "sl_s_910",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_288",
    "score": 724.5
  },
  {
    "id": "sl_s_911",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_289",
    "score": 736.5
  },
  {
    "id": "sl_s_912",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_289",
    "score": 750.5
  },
  {
    "id": "sl_s_913",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_289",
    "score": 745.0
  },
  {
    "id": "sl_s_914",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_289",
    "score": 713.0
  },
  {
    "id": "sl_s_915",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_289",
    "score": 732.0
  },
  {
    "id": "sl_s_916",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_289",
    "score": 713.5
  },
  {
    "id": "sl_s_917",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_289",
    "score": 727.5
  },
  {
    "id": "sl_s_918",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_290",
    "score": 760.0
  },
  {
    "id": "sl_s_919",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_290",
    "score": 735.0
  },
  {
    "id": "sl_s_920",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_290",
    "score": 752.5
  },
  {
    "id": "sl_s_921",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_290",
    "score": 747.5
  },
  {
    "id": "sl_s_922",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_290",
    "score": 711.0
  },
  {
    "id": "sl_s_923",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_290",
    "score": 758.5
  },
  {
    "id": "sl_s_924",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_290",
    "score": 734.0
  },
  {
    "id": "sl_s_925",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_290",
    "score": 717.5
  },
  {
    "id": "sl_s_926",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_290",
    "score": 727.5
  },
  {
    "id": "sl_s_927",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_291",
    "score": 745.0
  },
  {
    "id": "sl_s_928",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_291",
    "score": 745.5
  },
  {
    "id": "sl_s_929",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_291",
    "score": 744.0
  },
  {
    "id": "sl_s_930",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_291",
    "score": 721.5
  },
  {
    "id": "sl_s_931",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_291",
    "score": 755.0
  },
  {
    "id": "sl_s_932",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_291",
    "score": 733.0
  },
  {
    "id": "sl_s_933",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_291",
    "score": 713.0
  },
  {
    "id": "sl_s_934",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_291",
    "score": 729.0
  },
  {
    "id": "sl_s_935",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_291",
    "score": 759.5
  },
  {
    "id": "sl_s_936",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_292",
    "score": 720.0
  },
  {
    "id": "sl_s_937",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_292",
    "score": 746.0
  },
  {
    "id": "sl_s_938",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_292",
    "score": 742.0
  },
  {
    "id": "sl_s_939",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_292",
    "score": 709.5
  },
  {
    "id": "sl_s_940",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_292",
    "score": 732.5
  },
  {
    "id": "sl_s_941",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_292",
    "score": 703.5
  },
  {
    "id": "sl_s_942",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_292",
    "score": 708.0
  },
  {
    "id": "sl_s_943",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_293",
    "score": 731.5
  },
  {
    "id": "sl_s_944",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_293",
    "score": 745.5
  },
  {
    "id": "sl_s_945",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_293",
    "score": 738.5
  },
  {
    "id": "sl_s_946",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_293",
    "score": 714.0
  },
  {
    "id": "sl_s_947",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_293",
    "score": 751.5
  },
  {
    "id": "sl_s_948",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_293",
    "score": 732.5
  },
  {
    "id": "sl_s_949",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_293",
    "score": 712.5
  },
  {
    "id": "sl_s_950",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_293",
    "score": 727.5
  },
  {
    "id": "sl_s_951",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_294",
    "score": 736.0
  },
  {
    "id": "sl_s_952",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_294",
    "score": 732.5
  },
  {
    "id": "sl_s_953",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_294",
    "score": 700.0
  },
  {
    "id": "sl_s_954",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_294",
    "score": 707.5
  },
  {
    "id": "sl_s_955",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_294",
    "score": 734.5
  },
  {
    "id": "sl_s_956",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_294",
    "score": 727.0
  },
  {
    "id": "sl_s_957",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_294",
    "score": 710.5
  },
  {
    "id": "sl_s_958",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_294",
    "score": 720.5
  },
  {
    "id": "sl_s_959",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_295",
    "score": 756.0
  },
  {
    "id": "sl_s_960",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_295",
    "score": 727.5
  },
  {
    "id": "sl_s_961",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_295",
    "score": 734.5
  },
  {
    "id": "sl_s_962",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_295",
    "score": 734.5
  },
  {
    "id": "sl_s_963",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_295",
    "score": 713.0
  },
  {
    "id": "sl_s_964",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_295",
    "score": 745.5
  },
  {
    "id": "sl_s_965",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_295",
    "score": 728.5
  },
  {
    "id": "sl_s_966",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_295",
    "score": 707.5
  },
  {
    "id": "sl_s_967",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_295",
    "score": 715.0
  },
  {
    "id": "sl_s_968",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_296",
    "score": 748.0
  },
  {
    "id": "sl_s_969",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_296",
    "score": 725.0
  },
  {
    "id": "sl_s_970",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_296",
    "score": 728.5
  },
  {
    "id": "sl_s_971",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_296",
    "score": 717.5
  },
  {
    "id": "sl_s_972",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_296",
    "score": 703.5
  },
  {
    "id": "sl_s_973",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_296",
    "score": 744.0
  },
  {
    "id": "sl_s_974",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_296",
    "score": 724.5
  },
  {
    "id": "sl_s_975",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_296",
    "score": 706.0
  },
  {
    "id": "sl_s_976",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_296",
    "score": 715.0
  },
  {
    "id": "sl_s_977",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_297",
    "score": 750.0
  },
  {
    "id": "sl_s_978",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_297",
    "score": 728.5
  },
  {
    "id": "sl_s_979",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_297",
    "score": 749.0
  },
  {
    "id": "sl_s_980",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_297",
    "score": 730.5
  },
  {
    "id": "sl_s_981",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_297",
    "score": 713.0
  },
  {
    "id": "sl_s_982",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_297",
    "score": 748.5
  },
  {
    "id": "sl_s_983",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_297",
    "score": 725.5
  },
  {
    "id": "sl_s_984",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_297",
    "score": 709.0
  },
  {
    "id": "sl_s_985",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_297",
    "score": 725.0
  },
  {
    "id": "sl_s_986",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_298",
    "score": 755.5
  },
  {
    "id": "sl_s_987",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_298",
    "score": 729.5
  },
  {
    "id": "sl_s_988",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_298",
    "score": 739.5
  },
  {
    "id": "sl_s_989",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_298",
    "score": 734.5
  },
  {
    "id": "sl_s_990",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_298",
    "score": 710.0
  },
  {
    "id": "sl_s_991",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_298",
    "score": 755.0
  },
  {
    "id": "sl_s_992",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_298",
    "score": 729.0
  },
  {
    "id": "sl_s_993",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_298",
    "score": 710.0
  },
  {
    "id": "sl_s_994",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_298",
    "score": 727.0
  },
  {
    "id": "sl_s_995",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_299",
    "score": 726.5
  },
  {
    "id": "sl_s_996",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_299",
    "score": 737.5
  },
  {
    "id": "sl_s_997",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_299",
    "score": 732.0
  },
  {
    "id": "sl_s_998",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_299",
    "score": 714.0
  },
  {
    "id": "sl_s_999",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_299",
    "score": 732.0
  },
  {
    "id": "sl_s_1000",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_299",
    "score": 727.5
  },
  {
    "id": "sl_s_1001",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_299",
    "score": 679.5
  },
  {
    "id": "sl_s_1002",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_299",
    "score": 666.0
  },
  {
    "id": "sl_s_1003",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_299",
    "score": 718.5
  },
  {
    "id": "sl_s_1004",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_300",
    "score": 752.5
  },
  {
    "id": "sl_s_1005",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_300",
    "score": 739.0
  },
  {
    "id": "sl_s_1006",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_300",
    "score": 739.5
  },
  {
    "id": "sl_s_1007",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_300",
    "score": 738.0
  },
  {
    "id": "sl_s_1008",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_300",
    "score": 707.0
  },
  {
    "id": "sl_s_1009",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_300",
    "score": 752.5
  },
  {
    "id": "sl_s_1010",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_300",
    "score": 726.5
  },
  {
    "id": "sl_s_1011",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_300",
    "score": 711.5
  },
  {
    "id": "sl_s_1012",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_300",
    "score": 723.5
  },
  {
    "id": "sl_s_1013",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_301",
    "score": 723.5
  },
  {
    "id": "sl_s_1014",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_301",
    "score": 737.5
  },
  {
    "id": "sl_s_1015",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_301",
    "score": 753.5
  },
  {
    "id": "sl_s_1016",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_301",
    "score": 735.0
  },
  {
    "id": "sl_s_1017",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_301",
    "score": 709.0
  },
  {
    "id": "sl_s_1018",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_301",
    "score": 756.0
  },
  {
    "id": "sl_s_1019",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_301",
    "score": 723.0
  },
  {
    "id": "sl_s_1020",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_301",
    "score": 710.5
  },
  {
    "id": "sl_s_1021",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_301",
    "score": 731.0
  },
  {
    "id": "sl_s_1022",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_302",
    "score": 722.5
  },
  {
    "id": "sl_s_1023",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_302",
    "score": 738.0
  },
  {
    "id": "sl_s_1024",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_302",
    "score": 733.5
  },
  {
    "id": "sl_s_1025",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_302",
    "score": 691.0
  },
  {
    "id": "sl_s_1026",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_302",
    "score": 752.0
  },
  {
    "id": "sl_s_1027",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_302",
    "score": 724.0
  },
  {
    "id": "sl_s_1028",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_302",
    "score": 712.0
  },
  {
    "id": "sl_s_1029",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_302",
    "score": 698.5
  },
  {
    "id": "sl_s_1030",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_303",
    "score": 729.0
  },
  {
    "id": "sl_s_1031",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_303",
    "score": 750.0
  },
  {
    "id": "sl_s_1032",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_303",
    "score": 740.0
  },
  {
    "id": "sl_s_1033",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_303",
    "score": 719.5
  },
  {
    "id": "sl_s_1034",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_303",
    "score": 747.5
  },
  {
    "id": "sl_s_1035",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_303",
    "score": 730.5
  },
  {
    "id": "sl_s_1036",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_303",
    "score": 724.0
  },
  {
    "id": "sl_s_1037",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_303",
    "score": 728.5
  },
  {
    "id": "sl_s_1038",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_304",
    "score": 730.5
  },
  {
    "id": "sl_s_1039",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_304",
    "score": 741.0
  },
  {
    "id": "sl_s_1040",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_304",
    "score": 731.0
  },
  {
    "id": "sl_s_1041",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_304",
    "score": 712.0
  },
  {
    "id": "sl_s_1042",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_304",
    "score": 754.5
  },
  {
    "id": "sl_s_1043",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_304",
    "score": 722.5
  },
  {
    "id": "sl_s_1044",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_304",
    "score": 711.0
  },
  {
    "id": "sl_s_1045",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_304",
    "score": 714.0
  },
  {
    "id": "sl_s_1046",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_305",
    "score": 734.5
  },
  {
    "id": "sl_s_1047",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_305",
    "score": 744.5
  },
  {
    "id": "sl_s_1048",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_305",
    "score": 691.5
  },
  {
    "id": "sl_s_1049",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_305",
    "score": 738.5
  },
  {
    "id": "sl_s_1050",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_305",
    "score": 711.0
  },
  {
    "id": "sl_s_1051",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_305",
    "score": 666.5
  },
  {
    "id": "sl_s_1052",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_305",
    "score": 663.5
  },
  {
    "id": "sl_s_1053",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_305",
    "score": 691.0
  },
  {
    "id": "sl_s_1054",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_306",
    "score": 732.0
  },
  {
    "id": "sl_s_1055",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_306",
    "score": 727.5
  },
  {
    "id": "sl_s_1056",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_306",
    "score": 730.5
  },
  {
    "id": "sl_s_1057",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_306",
    "score": 696.5
  },
  {
    "id": "sl_s_1058",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_306",
    "score": 738.0
  },
  {
    "id": "sl_s_1059",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_306",
    "score": 725.5
  },
  {
    "id": "sl_s_1060",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_306",
    "score": 706.5
  },
  {
    "id": "sl_s_1061",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_306",
    "score": 714.5
  },
  {
    "id": "sl_s_1062",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_306",
    "score": 734.0
  },
  {
    "id": "sl_s_1063",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_307",
    "score": 702.5
  },
  {
    "id": "sl_s_1064",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_307",
    "score": 726.5
  },
  {
    "id": "sl_s_1065",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_307",
    "score": 727.5
  },
  {
    "id": "sl_s_1066",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_307",
    "score": 695.0
  },
  {
    "id": "sl_s_1067",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_307",
    "score": 692.0
  },
  {
    "id": "sl_s_1068",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_307",
    "score": 706.0
  },
  {
    "id": "sl_s_1069",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_307",
    "score": 693.0
  },
  {
    "id": "sl_s_1070",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_307",
    "score": 690.0
  },
  {
    "id": "sl_s_1071",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_308",
    "score": 703.0
  },
  {
    "id": "sl_s_1072",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_308",
    "score": 751.5
  },
  {
    "id": "sl_s_1073",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_308",
    "score": 737.5
  },
  {
    "id": "sl_s_1074",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_308",
    "score": 704.0
  },
  {
    "id": "sl_s_1075",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_308",
    "score": 742.0
  },
  {
    "id": "sl_s_1076",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_308",
    "score": 727.0
  },
  {
    "id": "sl_s_1077",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_308",
    "score": 697.0
  },
  {
    "id": "sl_s_1078",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_308",
    "score": 701.0
  },
  {
    "id": "sl_s_1079",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_309",
    "score": 680.5
  },
  {
    "id": "sl_s_1080",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_309",
    "score": 703.5
  },
  {
    "id": "sl_s_1081",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_309",
    "score": 679.5
  },
  {
    "id": "sl_s_1082",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_309",
    "score": 661.0
  },
  {
    "id": "sl_s_1083",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_309",
    "score": 711.5
  },
  {
    "id": "sl_s_1084",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_309",
    "score": 709.0
  },
  {
    "id": "sl_s_1085",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_309",
    "score": 684.5
  },
  {
    "id": "sl_s_1086",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_309",
    "score": 693.5
  },
  {
    "id": "sl_s_1087",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_310",
    "score": 735.0
  },
  {
    "id": "sl_s_1088",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_310",
    "score": 700.5
  },
  {
    "id": "sl_s_1089",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_310",
    "score": 714.5
  },
  {
    "id": "sl_s_1090",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_310",
    "score": 704.5
  },
  {
    "id": "sl_s_1091",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_310",
    "score": 735.0
  },
  {
    "id": "sl_s_1092",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_310",
    "score": 715.5
  },
  {
    "id": "sl_s_1093",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_310",
    "score": 687.0
  },
  {
    "id": "sl_s_1094",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_310",
    "score": 673.0
  },
  {
    "id": "sl_s_1095",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_310",
    "score": 690.0
  },
  {
    "id": "sl_s_1096",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_311",
    "score": 702.5
  },
  {
    "id": "sl_s_1097",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_311",
    "score": 731.5
  },
  {
    "id": "sl_s_1098",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_311",
    "score": 689.5
  },
  {
    "id": "sl_s_1099",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_311",
    "score": 730.0
  },
  {
    "id": "sl_s_1100",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_311",
    "score": 719.5
  },
  {
    "id": "sl_s_1101",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_311",
    "score": 725.5
  },
  {
    "id": "sl_s_1102",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_311",
    "score": 680.0
  },
  {
    "id": "sl_s_1103",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_311",
    "score": 706.0
  },
  {
    "id": "sl_s_1104",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_312",
    "score": 700.5
  },
  {
    "id": "sl_s_1105",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_312",
    "score": 731.0
  },
  {
    "id": "sl_s_1106",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_312",
    "score": 729.0
  },
  {
    "id": "sl_s_1107",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_312",
    "score": 727.0
  },
  {
    "id": "sl_s_1108",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_312",
    "score": 732.0
  },
  {
    "id": "sl_s_1109",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_312",
    "score": 718.5
  },
  {
    "id": "sl_s_1110",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_312",
    "score": 698.0
  },
  {
    "id": "sl_s_1111",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_312",
    "score": 729.5
  },
  {
    "id": "sl_s_1112",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_313",
    "score": 730.0
  },
  {
    "id": "sl_s_1113",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_313",
    "score": 751.5
  },
  {
    "id": "sl_s_1114",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_313",
    "score": 739.0
  },
  {
    "id": "sl_s_1115",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_313",
    "score": 721.5
  },
  {
    "id": "sl_s_1116",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_313",
    "score": 755.5
  },
  {
    "id": "sl_s_1117",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_313",
    "score": 724.0
  },
  {
    "id": "sl_s_1118",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_313",
    "score": 730.5
  },
  {
    "id": "sl_s_1119",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_313",
    "score": 730.0
  },
  {
    "id": "sl_s_1120",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_314",
    "score": 717.0
  },
  {
    "id": "sl_s_1121",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_314",
    "score": 748.5
  },
  {
    "id": "sl_s_1122",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_314",
    "score": 747.0
  },
  {
    "id": "sl_s_1123",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_314",
    "score": 717.5
  },
  {
    "id": "sl_s_1124",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_314",
    "score": 721.0
  },
  {
    "id": "sl_s_1125",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_314",
    "score": 712.5
  },
  {
    "id": "sl_s_1126",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_314",
    "score": 711.5
  },
  {
    "id": "sl_s_1127",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_314",
    "score": 710.5
  },
  {
    "id": "sl_s_1128",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_315",
    "score": 755.5
  },
  {
    "id": "sl_s_1129",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_315",
    "score": 732.0
  },
  {
    "id": "sl_s_1130",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_315",
    "score": 736.0
  },
  {
    "id": "sl_s_1131",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_315",
    "score": 737.5
  },
  {
    "id": "sl_s_1132",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_315",
    "score": 699.0
  },
  {
    "id": "sl_s_1133",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_315",
    "score": 752.5
  },
  {
    "id": "sl_s_1134",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_315",
    "score": 725.5
  },
  {
    "id": "sl_s_1135",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_315",
    "score": 715.0
  },
  {
    "id": "sl_s_1136",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_315",
    "score": 719.0
  },
  {
    "id": "sl_s_1137",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_316",
    "score": 715.0
  },
  {
    "id": "sl_s_1138",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_316",
    "score": 718.0
  },
  {
    "id": "sl_s_1139",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_316",
    "score": 713.5
  },
  {
    "id": "sl_s_1140",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_316",
    "score": 699.5
  },
  {
    "id": "sl_s_1141",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_316",
    "score": 727.0
  },
  {
    "id": "sl_s_1142",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_316",
    "score": 706.5
  },
  {
    "id": "sl_s_1143",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_316",
    "score": 725.0
  },
  {
    "id": "sl_s_1144",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_316",
    "score": 690.0
  },
  {
    "id": "sl_s_1145",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_317",
    "score": 703.0
  },
  {
    "id": "sl_s_1146",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_317",
    "score": 729.5
  },
  {
    "id": "sl_s_1147",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_317",
    "score": 702.5
  },
  {
    "id": "sl_s_1148",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_317",
    "score": 746.5
  },
  {
    "id": "sl_s_1149",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_317",
    "score": 724.5
  },
  {
    "id": "sl_s_1150",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_317",
    "score": 704.5
  },
  {
    "id": "sl_s_1151",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_317",
    "score": 719.5
  },
  {
    "id": "sl_s_1152",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_318",
    "score": 737.0
  },
  {
    "id": "sl_s_1153",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_318",
    "score": 748.0
  },
  {
    "id": "sl_s_1154",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_318",
    "score": 746.0
  },
  {
    "id": "sl_s_1155",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_318",
    "score": 714.0
  },
  {
    "id": "sl_s_1156",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_318",
    "score": 754.0
  },
  {
    "id": "sl_s_1157",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_318",
    "score": 727.5
  },
  {
    "id": "sl_s_1158",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_318",
    "score": 718.0
  },
  {
    "id": "sl_s_1159",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_318",
    "score": 727.5
  },
  {
    "id": "sl_s_1160",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_319",
    "score": 733.0
  },
  {
    "id": "sl_s_1161",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_319",
    "score": 748.0
  },
  {
    "id": "sl_s_1162",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_319",
    "score": 744.5
  },
  {
    "id": "sl_s_1163",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_319",
    "score": 720.5
  },
  {
    "id": "sl_s_1164",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_319",
    "score": 752.0
  },
  {
    "id": "sl_s_1165",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_319",
    "score": 726.0
  },
  {
    "id": "sl_s_1166",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_319",
    "score": 716.5
  },
  {
    "id": "sl_s_1167",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_319",
    "score": 732.5
  },
  {
    "id": "sl_s_1168",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_320",
    "score": 733.5
  },
  {
    "id": "sl_s_1169",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_320",
    "score": 751.0
  },
  {
    "id": "sl_s_1170",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_320",
    "score": 742.5
  },
  {
    "id": "sl_s_1171",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_320",
    "score": 700.0
  },
  {
    "id": "sl_s_1172",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_320",
    "score": 752.5
  },
  {
    "id": "sl_s_1173",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_320",
    "score": 712.5
  },
  {
    "id": "sl_s_1174",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_320",
    "score": 715.5
  },
  {
    "id": "sl_s_1175",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_320",
    "score": 716.5
  },
  {
    "id": "sl_s_1176",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_321",
    "score": 735.0
  },
  {
    "id": "sl_s_1177",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_321",
    "score": 749.0
  },
  {
    "id": "sl_s_1178",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_321",
    "score": 748.0
  },
  {
    "id": "sl_s_1179",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_321",
    "score": 716.5
  },
  {
    "id": "sl_s_1180",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_321",
    "score": 753.0
  },
  {
    "id": "sl_s_1181",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_321",
    "score": 744.5
  },
  {
    "id": "sl_s_1182",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_321",
    "score": 736.0
  },
  {
    "id": "sl_s_1183",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_321",
    "score": 730.0
  },
  {
    "id": "sl_s_1184",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_321",
    "score": 722.5
  },
  {
    "id": "sl_s_1185",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_322",
    "score": 724.0
  },
  {
    "id": "sl_s_1186",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_322",
    "score": 704.5
  },
  {
    "id": "sl_s_1187",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_322",
    "score": 714.5
  },
  {
    "id": "sl_s_1188",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_322",
    "score": 727.5
  },
  {
    "id": "sl_s_1189",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_322",
    "score": 699.0
  },
  {
    "id": "sl_s_1190",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_322",
    "score": 714.5
  },
  {
    "id": "sl_s_1191",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_322",
    "score": 707.0
  },
  {
    "id": "sl_s_1192",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_322",
    "score": 697.0
  },
  {
    "id": "sl_s_1193",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_322",
    "score": 707.0
  },
  {
    "id": "sl_s_1194",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_323",
    "score": 663.5
  },
  {
    "id": "sl_s_1195",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_323",
    "score": 705.5
  },
  {
    "id": "sl_s_1196",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_323",
    "score": 678.0
  },
  {
    "id": "sl_s_1197",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_323",
    "score": 671.5
  },
  {
    "id": "sl_s_1198",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_323",
    "score": 717.0
  },
  {
    "id": "sl_s_1199",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_323",
    "score": 663.0
  },
  {
    "id": "sl_s_1200",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_324",
    "score": 720.0
  },
  {
    "id": "sl_s_1201",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_324",
    "score": 733.0
  },
  {
    "id": "sl_s_1202",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_324",
    "score": 738.5
  },
  {
    "id": "sl_s_1203",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_324",
    "score": 715.5
  },
  {
    "id": "sl_s_1204",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_324",
    "score": 701.5
  },
  {
    "id": "sl_s_1205",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_324",
    "score": 679.0
  },
  {
    "id": "sl_s_1206",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_324",
    "score": 699.5
  },
  {
    "id": "sl_s_1207",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_324",
    "score": 723.0
  },
  {
    "id": "sl_s_1208",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_325",
    "score": 741.0
  },
  {
    "id": "sl_s_1209",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_325",
    "score": 740.5
  },
  {
    "id": "sl_s_1210",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_325",
    "score": 741.5
  },
  {
    "id": "sl_s_1211",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_325",
    "score": 701.0
  },
  {
    "id": "sl_s_1212",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_325",
    "score": 754.5
  },
  {
    "id": "sl_s_1213",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_325",
    "score": 733.5
  },
  {
    "id": "sl_s_1214",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_325",
    "score": 717.0
  },
  {
    "id": "sl_s_1215",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_325",
    "score": 731.5
  },
  {
    "id": "sl_s_1216",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_326",
    "score": 733.0
  },
  {
    "id": "sl_s_1217",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_326",
    "score": 751.0
  },
  {
    "id": "sl_s_1218",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_326",
    "score": 744.0
  },
  {
    "id": "sl_s_1219",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_326",
    "score": 716.5
  },
  {
    "id": "sl_s_1220",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_326",
    "score": 755.5
  },
  {
    "id": "sl_s_1221",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_326",
    "score": 732.5
  },
  {
    "id": "sl_s_1222",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_326",
    "score": 731.5
  },
  {
    "id": "sl_s_1223",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_326",
    "score": 714.5
  },
  {
    "id": "sl_s_1224",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_326",
    "score": 724.5
  },
  {
    "id": "sl_s_1225",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_327",
    "score": 763.0
  },
  {
    "id": "sl_s_1226",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_327",
    "score": 688.0
  },
  {
    "id": "sl_s_1227",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_327",
    "score": 714.5
  },
  {
    "id": "sl_s_1228",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_327",
    "score": 701.0
  },
  {
    "id": "sl_s_1229",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_327",
    "score": 683.0
  },
  {
    "id": "sl_s_1230",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_327",
    "score": 725.0
  },
  {
    "id": "sl_s_1231",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_327",
    "score": 708.5
  },
  {
    "id": "sl_s_1232",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_327",
    "score": 678.0
  },
  {
    "id": "sl_s_1233",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_327",
    "score": 708.0
  },
  {
    "id": "sl_s_1234",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_328",
    "score": 734.0
  },
  {
    "id": "sl_s_1235",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_328",
    "score": 758.5
  },
  {
    "id": "sl_s_1236",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_328",
    "score": 751.0
  },
  {
    "id": "sl_s_1237",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_328",
    "score": 713.5
  },
  {
    "id": "sl_s_1238",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_328",
    "score": 736.0
  },
  {
    "id": "sl_s_1239",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_328",
    "score": 737.0
  },
  {
    "id": "sl_s_1240",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_328",
    "score": 721.5
  },
  {
    "id": "sl_s_1241",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_328",
    "score": 725.5
  },
  {
    "id": "sl_s_1242",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_329",
    "score": 715.5
  },
  {
    "id": "sl_s_1243",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_329",
    "score": 749.0
  },
  {
    "id": "sl_s_1244",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_329",
    "score": 729.0
  },
  {
    "id": "sl_s_1245",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_329",
    "score": 701.5
  },
  {
    "id": "sl_s_1246",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_329",
    "score": 749.5
  },
  {
    "id": "sl_s_1247",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_329",
    "score": 727.5
  },
  {
    "id": "sl_s_1248",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_329",
    "score": 719.0
  },
  {
    "id": "sl_s_1249",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_329",
    "score": 711.0
  },
  {
    "id": "sl_s_1250",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_329",
    "score": 718.0
  },
  {
    "id": "sl_s_1251",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_330",
    "score": 728.5
  },
  {
    "id": "sl_s_1252",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_330",
    "score": 746.0
  },
  {
    "id": "sl_s_1253",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_330",
    "score": 743.5
  },
  {
    "id": "sl_s_1254",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_330",
    "score": 705.0
  },
  {
    "id": "sl_s_1255",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_330",
    "score": 755.5
  },
  {
    "id": "sl_s_1256",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_330",
    "score": 735.0
  },
  {
    "id": "sl_s_1257",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_330",
    "score": 705.0
  },
  {
    "id": "sl_s_1258",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_330",
    "score": 723.5
  },
  {
    "id": "sl_s_1259",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_330",
    "score": 755.0
  },
  {
    "id": "sl_s_1260",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_331",
    "score": 757.5
  },
  {
    "id": "sl_s_1261",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_331",
    "score": 735.0
  },
  {
    "id": "sl_s_1262",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_331",
    "score": 750.0
  },
  {
    "id": "sl_s_1263",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_331",
    "score": 742.5
  },
  {
    "id": "sl_s_1264",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_331",
    "score": 707.0
  },
  {
    "id": "sl_s_1265",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_331",
    "score": 750.5
  },
  {
    "id": "sl_s_1266",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_331",
    "score": 732.5
  },
  {
    "id": "sl_s_1267",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_331",
    "score": 716.0
  },
  {
    "id": "sl_s_1268",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_331",
    "score": 728.5
  },
  {
    "id": "sl_s_1269",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_332",
    "score": 758.0
  },
  {
    "id": "sl_s_1270",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_332",
    "score": 738.5
  },
  {
    "id": "sl_s_1271",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_332",
    "score": 749.5
  },
  {
    "id": "sl_s_1272",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_332",
    "score": 741.5
  },
  {
    "id": "sl_s_1273",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_332",
    "score": 723.5
  },
  {
    "id": "sl_s_1274",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_332",
    "score": 757.0
  },
  {
    "id": "sl_s_1275",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_332",
    "score": 728.0
  },
  {
    "id": "sl_s_1276",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_332",
    "score": 713.0
  },
  {
    "id": "sl_s_1277",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_332",
    "score": 728.5
  },
  {
    "id": "sl_s_1278",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_333",
    "score": 742.0
  },
  {
    "id": "sl_s_1279",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_333",
    "score": 745.0
  },
  {
    "id": "sl_s_1280",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_333",
    "score": 749.0
  },
  {
    "id": "sl_s_1281",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_333",
    "score": 731.5
  },
  {
    "id": "sl_s_1282",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_333",
    "score": 722.0
  },
  {
    "id": "sl_s_1283",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_333",
    "score": 744.5
  },
  {
    "id": "sl_s_1284",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_333",
    "score": 714.0
  },
  {
    "id": "sl_s_1285",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_333",
    "score": 716.0
  },
  {
    "id": "sl_s_1286",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_333",
    "score": 735.0
  },
  {
    "id": "sl_s_1287",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_334",
    "score": 705.5
  },
  {
    "id": "sl_s_1288",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_334",
    "score": 719.5
  },
  {
    "id": "sl_s_1289",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_334",
    "score": 725.0
  },
  {
    "id": "sl_s_1290",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_334",
    "score": 737.5
  },
  {
    "id": "sl_s_1291",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_334",
    "score": 684.0
  },
  {
    "id": "sl_s_1292",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_334",
    "score": 725.5
  },
  {
    "id": "sl_s_1293",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_334",
    "score": 689.5
  },
  {
    "id": "sl_s_1294",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_334",
    "score": 683.0
  },
  {
    "id": "sl_s_1295",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_334",
    "score": 710.5
  },
  {
    "id": "sl_s_1296",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_335",
    "score": 713.5
  },
  {
    "id": "sl_s_1297",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_335",
    "score": 687.0
  },
  {
    "id": "sl_s_1298",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_335",
    "score": 704.0
  },
  {
    "id": "sl_s_1299",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_335",
    "score": 683.5
  },
  {
    "id": "sl_s_1300",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_335",
    "score": 713.0
  },
  {
    "id": "sl_s_1301",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_335",
    "score": 673.5
  },
  {
    "id": "sl_s_1302",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_335",
    "score": 680.5
  },
  {
    "id": "sl_s_1303",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_335",
    "score": 674.5
  },
  {
    "id": "sl_s_1304",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_336",
    "score": 712.0
  },
  {
    "id": "sl_s_1305",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_336",
    "score": 703.0
  },
  {
    "id": "sl_s_1306",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_336",
    "score": 717.5
  },
  {
    "id": "sl_s_1307",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_336",
    "score": 707.0
  },
  {
    "id": "sl_s_1308",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_336",
    "score": 669.5
  },
  {
    "id": "sl_s_1309",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_336",
    "score": 715.5
  },
  {
    "id": "sl_s_1310",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_336",
    "score": 683.0
  },
  {
    "id": "sl_s_1311",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_336",
    "score": 685.0
  },
  {
    "id": "sl_s_1312",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_336",
    "score": 673.5
  },
  {
    "id": "sl_s_1313",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_337",
    "score": 706.0
  },
  {
    "id": "sl_s_1314",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_337",
    "score": 669.0
  },
  {
    "id": "sl_s_1315",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_337",
    "score": 698.5
  },
  {
    "id": "sl_s_1316",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_337",
    "score": 681.5
  },
  {
    "id": "sl_s_1317",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_337",
    "score": 684.0
  },
  {
    "id": "sl_s_1318",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_337",
    "score": 699.5
  },
  {
    "id": "sl_s_1319",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_337",
    "score": 679.5
  },
  {
    "id": "sl_s_1320",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_337",
    "score": 691.5
  },
  {
    "id": "sl_s_1321",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_338",
    "score": 736.5
  },
  {
    "id": "sl_s_1322",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_338",
    "score": 743.0
  },
  {
    "id": "sl_s_1323",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_338",
    "score": 739.5
  },
  {
    "id": "sl_s_1324",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_338",
    "score": 720.0
  },
  {
    "id": "sl_s_1325",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_338",
    "score": 723.5
  },
  {
    "id": "sl_s_1326",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_338",
    "score": 716.0
  },
  {
    "id": "sl_s_1327",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_338",
    "score": 731.5
  },
  {
    "id": "sl_s_1328",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_339",
    "score": 728.0
  },
  {
    "id": "sl_s_1329",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_339",
    "score": 743.5
  },
  {
    "id": "sl_s_1330",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_339",
    "score": 741.0
  },
  {
    "id": "sl_s_1331",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_339",
    "score": 717.0
  },
  {
    "id": "sl_s_1332",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_339",
    "score": 750.5
  },
  {
    "id": "sl_s_1333",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_339",
    "score": 724.0
  },
  {
    "id": "sl_s_1334",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_339",
    "score": 714.5
  },
  {
    "id": "sl_s_1335",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_339",
    "score": 724.5
  },
  {
    "id": "sl_s_1336",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_339",
    "score": 754.5
  },
  {
    "id": "sl_s_1337",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_340",
    "score": 724.5
  },
  {
    "id": "sl_s_1338",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_340",
    "score": 745.5
  },
  {
    "id": "sl_s_1339",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_340",
    "score": 716.0
  },
  {
    "id": "sl_s_1340",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_340",
    "score": 756.5
  },
  {
    "id": "sl_s_1341",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_340",
    "score": 731.5
  },
  {
    "id": "sl_s_1342",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_340",
    "score": 701.0
  },
  {
    "id": "sl_s_1343",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_340",
    "score": 707.0
  },
  {
    "id": "sl_s_1344",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_341",
    "score": 753.0
  },
  {
    "id": "sl_s_1345",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_341",
    "score": 737.0
  },
  {
    "id": "sl_s_1346",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_341",
    "score": 746.0
  },
  {
    "id": "sl_s_1347",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_341",
    "score": 740.0
  },
  {
    "id": "sl_s_1348",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_341",
    "score": 719.0
  },
  {
    "id": "sl_s_1349",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_341",
    "score": 757.5
  },
  {
    "id": "sl_s_1350",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_341",
    "score": 725.5
  },
  {
    "id": "sl_s_1351",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_341",
    "score": 715.0
  },
  {
    "id": "sl_s_1352",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_341",
    "score": 727.5
  },
  {
    "id": "sl_s_1353",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_342",
    "score": 739.0
  },
  {
    "id": "sl_s_1354",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_342",
    "score": 751.0
  },
  {
    "id": "sl_s_1355",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_342",
    "score": 742.0
  },
  {
    "id": "sl_s_1356",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_342",
    "score": 717.5
  },
  {
    "id": "sl_s_1357",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_342",
    "score": 757.5
  },
  {
    "id": "sl_s_1358",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_342",
    "score": 722.0
  },
  {
    "id": "sl_s_1359",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_342",
    "score": 709.0
  },
  {
    "id": "sl_s_1360",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_342",
    "score": 718.0
  },
  {
    "id": "sl_s_1361",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_343",
    "score": 754.5
  },
  {
    "id": "sl_s_1362",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_343",
    "score": 734.5
  },
  {
    "id": "sl_s_1363",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_343",
    "score": 753.5
  },
  {
    "id": "sl_s_1364",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_343",
    "score": 741.5
  },
  {
    "id": "sl_s_1365",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_343",
    "score": 715.0
  },
  {
    "id": "sl_s_1366",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_343",
    "score": 744.5
  },
  {
    "id": "sl_s_1367",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_343",
    "score": 726.5
  },
  {
    "id": "sl_s_1368",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_343",
    "score": 718.0
  },
  {
    "id": "sl_s_1369",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_343",
    "score": 734.5
  },
  {
    "id": "sl_s_1370",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_344",
    "score": 736.0
  },
  {
    "id": "sl_s_1371",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_344",
    "score": 747.0
  },
  {
    "id": "sl_s_1372",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_344",
    "score": 746.0
  },
  {
    "id": "sl_s_1373",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_344",
    "score": 713.5
  },
  {
    "id": "sl_s_1374",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_344",
    "score": 731.0
  },
  {
    "id": "sl_s_1375",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_344",
    "score": 711.5
  },
  {
    "id": "sl_s_1376",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_344",
    "score": 726.0
  },
  {
    "id": "sl_s_1377",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_345",
    "score": 757.0
  },
  {
    "id": "sl_s_1378",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_345",
    "score": 740.0
  },
  {
    "id": "sl_s_1379",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_345",
    "score": 733.5
  },
  {
    "id": "sl_s_1380",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_345",
    "score": 706.0
  },
  {
    "id": "sl_s_1381",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_345",
    "score": 728.0
  },
  {
    "id": "sl_s_1382",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_345",
    "score": 748.0
  },
  {
    "id": "sl_s_1383",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_345",
    "score": 737.5
  },
  {
    "id": "sl_s_1384",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_345",
    "score": 714.0
  },
  {
    "id": "sl_s_1385",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_345",
    "score": 729.0
  },
  {
    "id": "sl_s_1386",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_346",
    "score": 695.0
  },
  {
    "id": "sl_s_1387",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_346",
    "score": 705.0
  },
  {
    "id": "sl_s_1388",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_346",
    "score": 708.5
  },
  {
    "id": "sl_s_1389",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_346",
    "score": 668.0
  },
  {
    "id": "sl_s_1390",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_346",
    "score": 730.5
  },
  {
    "id": "sl_s_1391",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_346",
    "score": 659.5
  },
  {
    "id": "sl_s_1392",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_346",
    "score": 661.0
  },
  {
    "id": "sl_s_1393",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_346",
    "score": 692.0
  },
  {
    "id": "sl_s_1394",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_347",
    "score": 733.0
  },
  {
    "id": "sl_s_1395",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_347",
    "score": 720.0
  },
  {
    "id": "sl_s_1396",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_347",
    "score": 735.0
  },
  {
    "id": "sl_s_1397",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_347",
    "score": 710.0
  },
  {
    "id": "sl_s_1398",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_347",
    "score": 741.5
  },
  {
    "id": "sl_s_1399",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_347",
    "score": 705.0
  },
  {
    "id": "sl_s_1400",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_347",
    "score": 703.5
  },
  {
    "id": "sl_s_1401",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_347",
    "score": 732.5
  },
  {
    "id": "sl_s_1402",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_347",
    "score": 735.0
  },
  {
    "id": "sl_s_1403",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_348",
    "score": 723.0
  },
  {
    "id": "sl_s_1404",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_348",
    "score": 738.5
  },
  {
    "id": "sl_s_1405",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_348",
    "score": 736.5
  },
  {
    "id": "sl_s_1406",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_348",
    "score": 708.0
  },
  {
    "id": "sl_s_1407",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_348",
    "score": 750.0
  },
  {
    "id": "sl_s_1408",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_348",
    "score": 715.0
  },
  {
    "id": "sl_s_1409",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_348",
    "score": 717.0
  },
  {
    "id": "sl_s_1410",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_348",
    "score": 730.5
  },
  {
    "id": "sl_s_1411",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_349",
    "score": 736.0
  },
  {
    "id": "sl_s_1412",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_349",
    "score": 739.5
  },
  {
    "id": "sl_s_1413",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_349",
    "score": 731.0
  },
  {
    "id": "sl_s_1414",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_349",
    "score": 727.5
  },
  {
    "id": "sl_s_1415",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_349",
    "score": 718.0
  },
  {
    "id": "sl_s_1416",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_349",
    "score": 733.0
  },
  {
    "id": "sl_s_1417",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_349",
    "score": 719.0
  },
  {
    "id": "sl_s_1418",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_349",
    "score": 709.5
  },
  {
    "id": "sl_s_1419",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_349",
    "score": 722.0
  },
  {
    "id": "sl_s_1420",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_350",
    "score": 733.0
  },
  {
    "id": "sl_s_1421",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_350",
    "score": 734.5
  },
  {
    "id": "sl_s_1422",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_350",
    "score": 743.5
  },
  {
    "id": "sl_s_1423",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_350",
    "score": 719.5
  },
  {
    "id": "sl_s_1424",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_350",
    "score": 741.0
  },
  {
    "id": "sl_s_1425",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_350",
    "score": 727.5
  },
  {
    "id": "sl_s_1426",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_350",
    "score": 713.0
  },
  {
    "id": "sl_s_1427",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_350",
    "score": 727.5
  },
  {
    "id": "sl_s_1428",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_351",
    "score": 714.0
  },
  {
    "id": "sl_s_1429",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_351",
    "score": 743.0
  },
  {
    "id": "sl_s_1430",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_351",
    "score": 743.0
  },
  {
    "id": "sl_s_1431",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_351",
    "score": 712.5
  },
  {
    "id": "sl_s_1432",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_351",
    "score": 737.5
  },
  {
    "id": "sl_s_1433",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_351",
    "score": 704.0
  },
  {
    "id": "sl_s_1434",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_351",
    "score": 733.0
  },
  {
    "id": "sl_s_1435",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_352",
    "score": 741.5
  },
  {
    "id": "sl_s_1436",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_352",
    "score": 751.5
  },
  {
    "id": "sl_s_1437",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_352",
    "score": 747.0
  },
  {
    "id": "sl_s_1438",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_352",
    "score": 723.5
  },
  {
    "id": "sl_s_1439",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_352",
    "score": 735.5
  },
  {
    "id": "sl_s_1440",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_352",
    "score": 728.5
  },
  {
    "id": "sl_s_1441",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_352",
    "score": 714.0
  },
  {
    "id": "sl_s_1442",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_353",
    "score": 716.5
  },
  {
    "id": "sl_s_1443",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_353",
    "score": 723.0
  },
  {
    "id": "sl_s_1444",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_353",
    "score": 733.5
  },
  {
    "id": "sl_s_1445",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_353",
    "score": 715.0
  },
  {
    "id": "sl_s_1446",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_353",
    "score": 702.5
  },
  {
    "id": "sl_s_1447",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_353",
    "score": 713.0
  },
  {
    "id": "sl_s_1448",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_353",
    "score": 704.0
  },
  {
    "id": "sl_s_1449",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_353",
    "score": 706.5
  },
  {
    "id": "sl_s_1450",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_354",
    "score": 737.5
  },
  {
    "id": "sl_s_1451",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_354",
    "score": 737.0
  },
  {
    "id": "sl_s_1452",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_354",
    "score": 732.5
  },
  {
    "id": "sl_s_1453",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_354",
    "score": 719.0
  },
  {
    "id": "sl_s_1454",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_354",
    "score": 752.0
  },
  {
    "id": "sl_s_1455",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_354",
    "score": 729.0
  },
  {
    "id": "sl_s_1456",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_354",
    "score": 710.0
  },
  {
    "id": "sl_s_1457",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_354",
    "score": 727.5
  },
  {
    "id": "sl_s_1458",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_355",
    "score": 745.5
  },
  {
    "id": "sl_s_1459",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_355",
    "score": 725.0
  },
  {
    "id": "sl_s_1460",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_355",
    "score": 724.5
  },
  {
    "id": "sl_s_1461",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_355",
    "score": 722.5
  },
  {
    "id": "sl_s_1462",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_355",
    "score": 712.0
  },
  {
    "id": "sl_s_1463",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_355",
    "score": 741.0
  },
  {
    "id": "sl_s_1464",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_355",
    "score": 713.5
  },
  {
    "id": "sl_s_1465",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_355",
    "score": 705.0
  },
  {
    "id": "sl_s_1466",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_355",
    "score": 710.0
  },
  {
    "id": "sl_s_1467",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_356",
    "score": 708.0
  },
  {
    "id": "sl_s_1468",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_356",
    "score": 719.0
  },
  {
    "id": "sl_s_1469",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_356",
    "score": 716.0
  },
  {
    "id": "sl_s_1470",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_356",
    "score": 712.5
  },
  {
    "id": "sl_s_1471",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_356",
    "score": 737.5
  },
  {
    "id": "sl_s_1472",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_356",
    "score": 711.5
  },
  {
    "id": "sl_s_1473",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_356",
    "score": 695.5
  },
  {
    "id": "sl_s_1474",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_356",
    "score": 709.5
  },
  {
    "id": "sl_s_1475",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_357",
    "score": 726.0
  },
  {
    "id": "sl_s_1476",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_357",
    "score": 724.5
  },
  {
    "id": "sl_s_1477",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_357",
    "score": 729.0
  },
  {
    "id": "sl_s_1478",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_357",
    "score": 705.5
  },
  {
    "id": "sl_s_1479",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_357",
    "score": 716.0
  },
  {
    "id": "sl_s_1480",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_357",
    "score": 703.0
  },
  {
    "id": "sl_s_1481",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_357",
    "score": 703.5
  },
  {
    "id": "sl_s_1482",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_357",
    "score": 713.0
  },
  {
    "id": "sl_s_1483",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_358",
    "score": 745.5
  },
  {
    "id": "sl_s_1484",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_358",
    "score": 711.5
  },
  {
    "id": "sl_s_1485",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_358",
    "score": 734.5
  },
  {
    "id": "sl_s_1486",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_358",
    "score": 726.0
  },
  {
    "id": "sl_s_1487",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_358",
    "score": 682.0
  },
  {
    "id": "sl_s_1488",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_358",
    "score": 726.5
  },
  {
    "id": "sl_s_1489",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_358",
    "score": 704.0
  },
  {
    "id": "sl_s_1490",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_358",
    "score": 691.0
  },
  {
    "id": "sl_s_1491",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_358",
    "score": 697.0
  },
  {
    "id": "sl_s_1492",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_359",
    "score": 760.0
  },
  {
    "id": "sl_s_1493",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_359",
    "score": 736.0
  },
  {
    "id": "sl_s_1494",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_359",
    "score": 752.5
  },
  {
    "id": "sl_s_1495",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_359",
    "score": 743.5
  },
  {
    "id": "sl_s_1496",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_359",
    "score": 710.0
  },
  {
    "id": "sl_s_1497",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_359",
    "score": 729.5
  },
  {
    "id": "sl_s_1498",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_359",
    "score": 710.5
  },
  {
    "id": "sl_s_1499",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_359",
    "score": 726.5
  },
  {
    "id": "sl_s_1500",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_360",
    "score": 736.5
  },
  {
    "id": "sl_s_1501",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_360",
    "score": 752.5
  },
  {
    "id": "sl_s_1502",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_360",
    "score": 744.0
  },
  {
    "id": "sl_s_1503",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_360",
    "score": 715.0
  },
  {
    "id": "sl_s_1504",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_360",
    "score": 753.0
  },
  {
    "id": "sl_s_1505",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_360",
    "score": 738.5
  },
  {
    "id": "sl_s_1506",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_360",
    "score": 732.0
  },
  {
    "id": "sl_s_1507",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_360",
    "score": 720.0
  },
  {
    "id": "sl_s_1508",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_360",
    "score": 724.0
  },
  {
    "id": "sl_s_1509",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_361",
    "score": 715.0
  },
  {
    "id": "sl_s_1510",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_361",
    "score": 716.5
  },
  {
    "id": "sl_s_1511",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_361",
    "score": 723.5
  },
  {
    "id": "sl_s_1512",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_361",
    "score": 710.0
  },
  {
    "id": "sl_s_1513",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_361",
    "score": 735.0
  },
  {
    "id": "sl_s_1514",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_361",
    "score": 722.0
  },
  {
    "id": "sl_s_1515",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_361",
    "score": 716.0
  },
  {
    "id": "sl_s_1516",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_361",
    "score": 724.5
  },
  {
    "id": "sl_s_1517",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_362",
    "score": 709.0
  },
  {
    "id": "sl_s_1518",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_362",
    "score": 722.5
  },
  {
    "id": "sl_s_1519",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_362",
    "score": 719.0
  },
  {
    "id": "sl_s_1520",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_362",
    "score": 702.5
  },
  {
    "id": "sl_s_1521",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_362",
    "score": 729.0
  },
  {
    "id": "sl_s_1522",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_362",
    "score": 708.0
  },
  {
    "id": "sl_s_1523",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_362",
    "score": 693.5
  },
  {
    "id": "sl_s_1524",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_362",
    "score": 698.5
  },
  {
    "id": "sl_s_1525",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_363",
    "score": 712.5
  },
  {
    "id": "sl_s_1526",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_363",
    "score": 750.0
  },
  {
    "id": "sl_s_1527",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_363",
    "score": 734.0
  },
  {
    "id": "sl_s_1528",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_363",
    "score": 709.5
  },
  {
    "id": "sl_s_1529",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_363",
    "score": 739.5
  },
  {
    "id": "sl_s_1530",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_363",
    "score": 715.5
  },
  {
    "id": "sl_s_1531",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_363",
    "score": 722.5
  },
  {
    "id": "sl_s_1532",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_363",
    "score": 729.5
  },
  {
    "id": "sl_s_1533",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_364",
    "score": 716.0
  },
  {
    "id": "sl_s_1534",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_364",
    "score": 746.5
  },
  {
    "id": "sl_s_1535",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_364",
    "score": 719.5
  },
  {
    "id": "sl_s_1536",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_364",
    "score": 701.0
  },
  {
    "id": "sl_s_1537",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_364",
    "score": 722.0
  },
  {
    "id": "sl_s_1538",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_364",
    "score": 737.0
  },
  {
    "id": "sl_s_1539",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_364",
    "score": 707.0
  },
  {
    "id": "sl_s_1540",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_364",
    "score": 709.5
  },
  {
    "id": "sl_s_1541",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_365",
    "score": 682.0
  },
  {
    "id": "sl_s_1542",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_365",
    "score": 715.0
  },
  {
    "id": "sl_s_1543",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_365",
    "score": 712.0
  },
  {
    "id": "sl_s_1544",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_365",
    "score": 659.5
  },
  {
    "id": "sl_s_1545",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_365",
    "score": 694.5
  },
  {
    "id": "sl_s_1546",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_365",
    "score": 703.5
  },
  {
    "id": "sl_s_1547",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_365",
    "score": 671.0
  },
  {
    "id": "sl_s_1548",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_365",
    "score": 661.0
  },
  {
    "id": "sl_s_1549",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_366",
    "score": 719.5
  },
  {
    "id": "sl_s_1550",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_366",
    "score": 660.0
  },
  {
    "id": "sl_s_1551",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_366",
    "score": 698.5
  },
  {
    "id": "sl_s_1552",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_366",
    "score": 690.0
  },
  {
    "id": "sl_s_1553",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_366",
    "score": 676.5
  },
  {
    "id": "sl_s_1554",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_366",
    "score": 707.5
  },
  {
    "id": "sl_s_1555",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_366",
    "score": 716.5
  },
  {
    "id": "sl_s_1556",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_366",
    "score": 726.5
  },
  {
    "id": "sl_s_1557",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_367",
    "score": 734.5
  },
  {
    "id": "sl_s_1558",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_367",
    "score": 671.0
  },
  {
    "id": "sl_s_1559",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_367",
    "score": 750.5
  },
  {
    "id": "sl_s_1560",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_367",
    "score": 714.0
  },
  {
    "id": "sl_s_1561",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_367",
    "score": 742.5
  },
  {
    "id": "sl_s_1562",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_367",
    "score": 717.0
  },
  {
    "id": "sl_s_1563",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_367",
    "score": 717.0
  },
  {
    "id": "sl_s_1564",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_367",
    "score": 717.5
  },
  {
    "id": "sl_s_1565",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_368",
    "score": 715.0
  },
  {
    "id": "sl_s_1566",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_368",
    "score": 745.5
  },
  {
    "id": "sl_s_1567",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_368",
    "score": 747.5
  },
  {
    "id": "sl_s_1568",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_368",
    "score": 713.5
  },
  {
    "id": "sl_s_1569",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_368",
    "score": 756.5
  },
  {
    "id": "sl_s_1570",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_368",
    "score": 736.5
  },
  {
    "id": "sl_s_1571",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_368",
    "score": 705.5
  },
  {
    "id": "sl_s_1572",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_368",
    "score": 714.0
  },
  {
    "id": "sl_s_1573",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_368",
    "score": 719.0
  },
  {
    "id": "sl_s_1574",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_369",
    "score": 728.0
  },
  {
    "id": "sl_s_1575",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_369",
    "score": 740.0
  },
  {
    "id": "sl_s_1576",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_369",
    "score": 739.5
  },
  {
    "id": "sl_s_1577",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_369",
    "score": 716.0
  },
  {
    "id": "sl_s_1578",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_369",
    "score": 745.5
  },
  {
    "id": "sl_s_1579",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_369",
    "score": 719.0
  },
  {
    "id": "sl_s_1580",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_369",
    "score": 719.0
  },
  {
    "id": "sl_s_1581",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_369",
    "score": 733.5
  },
  {
    "id": "sl_s_1582",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_370",
    "score": 741.0
  },
  {
    "id": "sl_s_1583",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_370",
    "score": 746.5
  },
  {
    "id": "sl_s_1584",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_370",
    "score": 744.0
  },
  {
    "id": "sl_s_1585",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_370",
    "score": 713.5
  },
  {
    "id": "sl_s_1586",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_370",
    "score": 756.0
  },
  {
    "id": "sl_s_1587",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_370",
    "score": 732.5
  },
  {
    "id": "sl_s_1588",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_370",
    "score": 723.5
  },
  {
    "id": "sl_s_1589",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_370",
    "score": 705.0
  },
  {
    "id": "sl_s_1590",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_370",
    "score": 734.5
  },
  {
    "id": "sl_s_1591",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_371",
    "score": 723.5
  },
  {
    "id": "sl_s_1592",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_371",
    "score": 728.0
  },
  {
    "id": "sl_s_1593",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_371",
    "score": 730.0
  },
  {
    "id": "sl_s_1594",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_371",
    "score": 714.5
  },
  {
    "id": "sl_s_1595",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_371",
    "score": 731.5
  },
  {
    "id": "sl_s_1596",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_371",
    "score": 721.5
  },
  {
    "id": "sl_s_1597",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_371",
    "score": 705.0
  },
  {
    "id": "sl_s_1598",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_371",
    "score": 717.5
  },
  {
    "id": "sl_s_1599",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_371",
    "score": 734.0
  },
  {
    "id": "sl_s_1600",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_372",
    "score": 716.5
  },
  {
    "id": "sl_s_1601",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_372",
    "score": 712.0
  },
  {
    "id": "sl_s_1602",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_372",
    "score": 719.0
  },
  {
    "id": "sl_s_1603",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_372",
    "score": 695.0
  },
  {
    "id": "sl_s_1604",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_372",
    "score": 712.0
  },
  {
    "id": "sl_s_1605",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_372",
    "score": 700.0
  },
  {
    "id": "sl_s_1606",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_372",
    "score": 691.5
  },
  {
    "id": "sl_s_1607",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_372",
    "score": 726.0
  },
  {
    "id": "sl_s_1608",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_373",
    "score": 716.5
  },
  {
    "id": "sl_s_1609",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_373",
    "score": 736.5
  },
  {
    "id": "sl_s_1610",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_373",
    "score": 733.0
  },
  {
    "id": "sl_s_1611",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_373",
    "score": 707.0
  },
  {
    "id": "sl_s_1612",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_373",
    "score": 745.5
  },
  {
    "id": "sl_s_1613",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_373",
    "score": 724.5
  },
  {
    "id": "sl_s_1614",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_373",
    "score": 706.5
  },
  {
    "id": "sl_s_1615",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_373",
    "score": 707.0
  },
  {
    "id": "sl_s_1616",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_373",
    "score": 718.0
  },
  {
    "id": "sl_s_1617",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_374",
    "score": 721.0
  },
  {
    "id": "sl_s_1618",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_374",
    "score": 743.5
  },
  {
    "id": "sl_s_1619",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_374",
    "score": 735.5
  },
  {
    "id": "sl_s_1620",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_374",
    "score": 686.0
  },
  {
    "id": "sl_s_1621",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_374",
    "score": 707.5
  },
  {
    "id": "sl_s_1622",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_374",
    "score": 712.0
  },
  {
    "id": "sl_s_1623",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_374",
    "score": 693.0
  },
  {
    "id": "sl_s_1624",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_374",
    "score": 715.0
  },
  {
    "id": "sl_s_1625",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_375",
    "score": 742.0
  },
  {
    "id": "sl_s_1626",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_375",
    "score": 706.0
  },
  {
    "id": "sl_s_1627",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_375",
    "score": 716.5
  },
  {
    "id": "sl_s_1628",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_375",
    "score": 728.5
  },
  {
    "id": "sl_s_1629",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_375",
    "score": 691.5
  },
  {
    "id": "sl_s_1630",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_375",
    "score": 712.0
  },
  {
    "id": "sl_s_1631",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_375",
    "score": 721.0
  },
  {
    "id": "sl_s_1632",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_375",
    "score": 694.5
  },
  {
    "id": "sl_s_1633",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_375",
    "score": 703.5
  },
  {
    "id": "sl_s_1634",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_376",
    "score": 727.0
  },
  {
    "id": "sl_s_1635",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_376",
    "score": 729.5
  },
  {
    "id": "sl_s_1636",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_376",
    "score": 726.5
  },
  {
    "id": "sl_s_1637",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_376",
    "score": 717.0
  },
  {
    "id": "sl_s_1638",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_376",
    "score": 757.5
  },
  {
    "id": "sl_s_1639",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_376",
    "score": 715.0
  },
  {
    "id": "sl_s_1640",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_376",
    "score": 715.0
  },
  {
    "id": "sl_s_1641",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_376",
    "score": 723.0
  },
  {
    "id": "sl_s_1642",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_377",
    "score": 687.5
  },
  {
    "id": "sl_s_1643",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_377",
    "score": 710.5
  },
  {
    "id": "sl_s_1644",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_377",
    "score": 712.5
  },
  {
    "id": "sl_s_1645",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_377",
    "score": 674.5
  },
  {
    "id": "sl_s_1646",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_377",
    "score": 698.5
  },
  {
    "id": "sl_s_1647",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_377",
    "score": 711.0
  },
  {
    "id": "sl_s_1648",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_377",
    "score": 684.5
  },
  {
    "id": "sl_s_1649",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_377",
    "score": 712.0
  },
  {
    "id": "sl_s_1650",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_378",
    "score": 731.0
  },
  {
    "id": "sl_s_1651",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_378",
    "score": 744.0
  },
  {
    "id": "sl_s_1652",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_378",
    "score": 718.0
  },
  {
    "id": "sl_s_1653",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_378",
    "score": 676.5
  },
  {
    "id": "sl_s_1654",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_378",
    "score": 741.0
  },
  {
    "id": "sl_s_1655",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_378",
    "score": 676.5
  },
  {
    "id": "sl_s_1656",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_378",
    "score": 662.5
  },
  {
    "id": "sl_s_1657",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_378",
    "score": 703.0
  },
  {
    "id": "sl_s_1658",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_379",
    "score": 729.0
  },
  {
    "id": "sl_s_1659",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_379",
    "score": 738.5
  },
  {
    "id": "sl_s_1660",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_379",
    "score": 724.5
  },
  {
    "id": "sl_s_1661",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_379",
    "score": 707.0
  },
  {
    "id": "sl_s_1662",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_379",
    "score": 724.5
  },
  {
    "id": "sl_s_1663",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_379",
    "score": 706.0
  },
  {
    "id": "sl_s_1664",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_379",
    "score": 730.0
  },
  {
    "id": "sl_s_1665",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_379",
    "score": 721.0
  },
  {
    "id": "sl_s_1666",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_379",
    "score": 720.0
  },
  {
    "id": "sl_s_1667",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_380",
    "score": 759.5
  },
  {
    "id": "sl_s_1668",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_380",
    "score": 728.0
  },
  {
    "id": "sl_s_1669",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_380",
    "score": 745.0
  },
  {
    "id": "sl_s_1670",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_380",
    "score": 732.5
  },
  {
    "id": "sl_s_1671",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_380",
    "score": 709.0
  },
  {
    "id": "sl_s_1672",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_380",
    "score": 748.5
  },
  {
    "id": "sl_s_1673",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_380",
    "score": 727.0
  },
  {
    "id": "sl_s_1674",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_380",
    "score": 720.5
  },
  {
    "id": "sl_s_1675",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_380",
    "score": 722.5
  },
  {
    "id": "sl_s_1676",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_381",
    "score": 731.0
  },
  {
    "id": "sl_s_1677",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_381",
    "score": 728.0
  },
  {
    "id": "sl_s_1678",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_381",
    "score": 721.0
  },
  {
    "id": "sl_s_1679",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_381",
    "score": 729.5
  },
  {
    "id": "sl_s_1680",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_381",
    "score": 735.0
  },
  {
    "id": "sl_s_1681",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_381",
    "score": 723.5
  },
  {
    "id": "sl_s_1682",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_381",
    "score": 700.5
  },
  {
    "id": "sl_s_1683",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_381",
    "score": 718.5
  },
  {
    "id": "sl_s_1684",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_382",
    "score": 734.5
  },
  {
    "id": "sl_s_1685",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_382",
    "score": 746.0
  },
  {
    "id": "sl_s_1686",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_382",
    "score": 744.0
  },
  {
    "id": "sl_s_1687",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_382",
    "score": 712.0
  },
  {
    "id": "sl_s_1688",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_382",
    "score": 756.5
  },
  {
    "id": "sl_s_1689",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_382",
    "score": 733.5
  },
  {
    "id": "sl_s_1690",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_382",
    "score": 709.5
  },
  {
    "id": "sl_s_1691",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_382",
    "score": 722.5
  },
  {
    "id": "sl_s_1692",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_383",
    "score": 735.0
  },
  {
    "id": "sl_s_1693",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_383",
    "score": 744.5
  },
  {
    "id": "sl_s_1694",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_383",
    "score": 741.0
  },
  {
    "id": "sl_s_1695",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_383",
    "score": 714.0
  },
  {
    "id": "sl_s_1696",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_383",
    "score": 756.5
  },
  {
    "id": "sl_s_1697",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_383",
    "score": 725.0
  },
  {
    "id": "sl_s_1698",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_383",
    "score": 686.0
  },
  {
    "id": "sl_s_1699",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_383",
    "score": 728.5
  },
  {
    "id": "sl_s_1700",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_383",
    "score": 735.0
  },
  {
    "id": "sl_s_1701",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_384",
    "score": 738.0
  },
  {
    "id": "sl_s_1702",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_384",
    "score": 750.5
  },
  {
    "id": "sl_s_1703",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_384",
    "score": 740.0
  },
  {
    "id": "sl_s_1704",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_384",
    "score": 719.5
  },
  {
    "id": "sl_s_1705",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_384",
    "score": 754.0
  },
  {
    "id": "sl_s_1706",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_384",
    "score": 746.0
  },
  {
    "id": "sl_s_1707",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_384",
    "score": 728.5
  },
  {
    "id": "sl_s_1708",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_384",
    "score": 714.0
  },
  {
    "id": "sl_s_1709",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_384",
    "score": 735.5
  },
  {
    "id": "sl_s_1710",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_385",
    "score": 733.5
  },
  {
    "id": "sl_s_1711",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_385",
    "score": 751.5
  },
  {
    "id": "sl_s_1712",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_385",
    "score": 741.0
  },
  {
    "id": "sl_s_1713",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_385",
    "score": 713.0
  },
  {
    "id": "sl_s_1714",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_385",
    "score": 757.5
  },
  {
    "id": "sl_s_1715",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_385",
    "score": 732.5
  },
  {
    "id": "sl_s_1716",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_385",
    "score": 732.5
  },
  {
    "id": "sl_s_1717",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_385",
    "score": 717.5
  },
  {
    "id": "sl_s_1718",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_385",
    "score": 725.5
  },
  {
    "id": "sl_s_1719",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_386",
    "score": 756.5
  },
  {
    "id": "sl_s_1720",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_386",
    "score": 729.0
  },
  {
    "id": "sl_s_1721",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_386",
    "score": 751.0
  },
  {
    "id": "sl_s_1722",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_386",
    "score": 747.5
  },
  {
    "id": "sl_s_1723",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_386",
    "score": 710.5
  },
  {
    "id": "sl_s_1724",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_386",
    "score": 739.5
  },
  {
    "id": "sl_s_1725",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_386",
    "score": 724.5
  },
  {
    "id": "sl_s_1726",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_386",
    "score": 717.0
  },
  {
    "id": "sl_s_1727",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_386",
    "score": 724.0
  },
  {
    "id": "sl_s_1728",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_387",
    "score": 757.5
  },
  {
    "id": "sl_s_1729",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_387",
    "score": 726.0
  },
  {
    "id": "sl_s_1730",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_387",
    "score": 738.0
  },
  {
    "id": "sl_s_1731",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_387",
    "score": 731.0
  },
  {
    "id": "sl_s_1732",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_387",
    "score": 709.5
  },
  {
    "id": "sl_s_1733",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_387",
    "score": 751.5
  },
  {
    "id": "sl_s_1734",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_387",
    "score": 709.5
  },
  {
    "id": "sl_s_1735",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_387",
    "score": 709.5
  },
  {
    "id": "sl_s_1736",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_387",
    "score": 710.0
  },
  {
    "id": "sl_s_1737",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_388",
    "score": 735.5
  },
  {
    "id": "sl_s_1738",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_388",
    "score": 738.0
  },
  {
    "id": "sl_s_1739",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_388",
    "score": 746.0
  },
  {
    "id": "sl_s_1740",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_388",
    "score": 721.0
  },
  {
    "id": "sl_s_1741",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_388",
    "score": 745.5
  },
  {
    "id": "sl_s_1742",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_388",
    "score": 725.5
  },
  {
    "id": "sl_s_1743",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_388",
    "score": 723.0
  },
  {
    "id": "sl_s_1744",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_388",
    "score": 711.5
  },
  {
    "id": "sl_s_1745",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_389",
    "score": 734.0
  },
  {
    "id": "sl_s_1746",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_389",
    "score": 754.0
  },
  {
    "id": "sl_s_1747",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_389",
    "score": 742.0
  },
  {
    "id": "sl_s_1748",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_389",
    "score": 710.0
  },
  {
    "id": "sl_s_1749",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_389",
    "score": 757.0
  },
  {
    "id": "sl_s_1750",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_389",
    "score": 737.5
  },
  {
    "id": "sl_s_1751",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_389",
    "score": 728.5
  },
  {
    "id": "sl_s_1752",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_389",
    "score": 718.0
  },
  {
    "id": "sl_s_1753",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_389",
    "score": 720.5
  },
  {
    "id": "sl_s_1754",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_390",
    "score": 728.5
  },
  {
    "id": "sl_s_1755",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_390",
    "score": 751.5
  },
  {
    "id": "sl_s_1756",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_390",
    "score": 733.5
  },
  {
    "id": "sl_s_1757",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_390",
    "score": 708.5
  },
  {
    "id": "sl_s_1758",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_390",
    "score": 758.5
  },
  {
    "id": "sl_s_1759",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_390",
    "score": 726.5
  },
  {
    "id": "sl_s_1760",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_390",
    "score": 711.5
  },
  {
    "id": "sl_s_1761",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_390",
    "score": 727.0
  },
  {
    "id": "sl_s_1762",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_391",
    "score": 757.0
  },
  {
    "id": "sl_s_1763",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_391",
    "score": 737.5
  },
  {
    "id": "sl_s_1764",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_391",
    "score": 748.0
  },
  {
    "id": "sl_s_1765",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_391",
    "score": 741.5
  },
  {
    "id": "sl_s_1766",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_391",
    "score": 707.5
  },
  {
    "id": "sl_s_1767",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_391",
    "score": 754.5
  },
  {
    "id": "sl_s_1768",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_391",
    "score": 731.0
  },
  {
    "id": "sl_s_1769",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_391",
    "score": 718.0
  },
  {
    "id": "sl_s_1770",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_391",
    "score": 724.5
  },
  {
    "id": "sl_s_1771",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_392",
    "score": 754.5
  },
  {
    "id": "sl_s_1772",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_392",
    "score": 713.0
  },
  {
    "id": "sl_s_1773",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_392",
    "score": 721.5
  },
  {
    "id": "sl_s_1774",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_392",
    "score": 730.0
  },
  {
    "id": "sl_s_1775",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_392",
    "score": 698.0
  },
  {
    "id": "sl_s_1776",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_392",
    "score": 725.5
  },
  {
    "id": "sl_s_1777",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_392",
    "score": 696.0
  },
  {
    "id": "sl_s_1778",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_392",
    "score": 677.5
  },
  {
    "id": "sl_s_1779",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_392",
    "score": 723.5
  },
  {
    "id": "sl_s_1780",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_393",
    "score": 729.0
  },
  {
    "id": "sl_s_1781",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_393",
    "score": 725.5
  },
  {
    "id": "sl_s_1782",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_393",
    "score": 702.5
  },
  {
    "id": "sl_s_1783",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_393",
    "score": 705.0
  },
  {
    "id": "sl_s_1784",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_393",
    "score": 718.5
  },
  {
    "id": "sl_s_1785",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_393",
    "score": 716.0
  },
  {
    "id": "sl_s_1786",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_393",
    "score": 685.5
  },
  {
    "id": "sl_s_1787",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_393",
    "score": 714.0
  },
  {
    "id": "sl_s_1788",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_394",
    "score": 713.0
  },
  {
    "id": "sl_s_1789",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_394",
    "score": 702.0
  },
  {
    "id": "sl_s_1790",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_394",
    "score": 702.5
  },
  {
    "id": "sl_s_1791",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_394",
    "score": 706.0
  },
  {
    "id": "sl_s_1792",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_394",
    "score": 698.5
  },
  {
    "id": "sl_s_1793",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_394",
    "score": 709.5
  },
  {
    "id": "sl_s_1794",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_394",
    "score": 702.5
  },
  {
    "id": "sl_s_1795",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_395",
    "score": 712.5
  },
  {
    "id": "sl_s_1796",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_395",
    "score": 725.0
  },
  {
    "id": "sl_s_1797",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_395",
    "score": 717.0
  },
  {
    "id": "sl_s_1798",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_395",
    "score": 706.0
  },
  {
    "id": "sl_s_1799",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_395",
    "score": 745.5
  },
  {
    "id": "sl_s_1800",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_395",
    "score": 700.0
  },
  {
    "id": "sl_s_1801",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_395",
    "score": 689.0
  },
  {
    "id": "sl_s_1802",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_395",
    "score": 710.0
  },
  {
    "id": "sl_s_1803",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_396",
    "score": 732.0
  },
  {
    "id": "sl_s_1804",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_396",
    "score": 684.0
  },
  {
    "id": "sl_s_1805",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_396",
    "score": 695.0
  },
  {
    "id": "sl_s_1806",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_396",
    "score": 694.5
  },
  {
    "id": "sl_s_1807",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_396",
    "score": 718.0
  },
  {
    "id": "sl_s_1808",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_396",
    "score": 723.0
  },
  {
    "id": "sl_s_1809",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_396",
    "score": 683.5
  },
  {
    "id": "sl_s_1810",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_396",
    "score": 675.5
  },
  {
    "id": "sl_s_1811",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_396",
    "score": 684.0
  },
  {
    "id": "sl_s_1812",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_397",
    "score": 718.5
  },
  {
    "id": "sl_s_1813",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_397",
    "score": 657.0
  },
  {
    "id": "sl_s_1814",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_397",
    "score": 717.0
  },
  {
    "id": "sl_s_1815",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_398",
    "score": 709.5
  },
  {
    "id": "sl_s_1816",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_398",
    "score": 720.5
  },
  {
    "id": "sl_s_1817",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_398",
    "score": 684.0
  },
  {
    "id": "sl_s_1818",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_398",
    "score": 685.0
  },
  {
    "id": "sl_s_1819",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_398",
    "score": 716.5
  },
  {
    "id": "sl_s_1820",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_398",
    "score": 689.0
  },
  {
    "id": "sl_s_1821",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_398",
    "score": 684.5
  },
  {
    "id": "sl_s_1822",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_398",
    "score": 692.5
  },
  {
    "id": "sl_s_1823",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_398",
    "score": 749.0
  },
  {
    "id": "sl_s_1824",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_399",
    "score": 737.0
  },
  {
    "id": "sl_s_1825",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_399",
    "score": 734.5
  },
  {
    "id": "sl_s_1826",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_399",
    "score": 728.0
  },
  {
    "id": "sl_s_1827",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_399",
    "score": 722.5
  },
  {
    "id": "sl_s_1828",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_399",
    "score": 726.0
  },
  {
    "id": "sl_s_1829",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_399",
    "score": 724.5
  },
  {
    "id": "sl_s_1830",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_399",
    "score": 729.0
  },
  {
    "id": "sl_s_1831",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_399",
    "score": 708.0
  },
  {
    "id": "sl_s_1832",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_399",
    "score": 737.5
  },
  {
    "id": "sl_s_1833",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_400",
    "score": 727.0
  },
  {
    "id": "sl_s_1834",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_400",
    "score": 740.0
  },
  {
    "id": "sl_s_1835",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_400",
    "score": 732.5
  },
  {
    "id": "sl_s_1836",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_400",
    "score": 719.0
  },
  {
    "id": "sl_s_1837",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_400",
    "score": 743.5
  },
  {
    "id": "sl_s_1838",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_400",
    "score": 715.5
  },
  {
    "id": "sl_s_1839",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_400",
    "score": 726.5
  },
  {
    "id": "sl_s_1840",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_400",
    "score": 715.0
  },
  {
    "id": "sl_s_1841",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_400",
    "score": 724.0
  },
  {
    "id": "sl_s_1842",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_401",
    "score": 734.0
  },
  {
    "id": "sl_s_1843",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_401",
    "score": 698.0
  },
  {
    "id": "sl_s_1844",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_401",
    "score": 706.5
  },
  {
    "id": "sl_s_1845",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_401",
    "score": 701.0
  },
  {
    "id": "sl_s_1846",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_401",
    "score": 706.0
  },
  {
    "id": "sl_s_1847",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_401",
    "score": 694.0
  },
  {
    "id": "sl_s_1848",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_401",
    "score": 681.0
  },
  {
    "id": "sl_s_1849",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_401",
    "score": 678.0
  },
  {
    "id": "sl_s_1850",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_402",
    "score": 738.5
  },
  {
    "id": "sl_s_1851",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_402",
    "score": 716.0
  },
  {
    "id": "sl_s_1852",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_402",
    "score": 736.0
  },
  {
    "id": "sl_s_1853",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_402",
    "score": 727.5
  },
  {
    "id": "sl_s_1854",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_402",
    "score": 714.0
  },
  {
    "id": "sl_s_1855",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_402",
    "score": 741.0
  },
  {
    "id": "sl_s_1856",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_402",
    "score": 702.5
  },
  {
    "id": "sl_s_1857",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_402",
    "score": 710.5
  },
  {
    "id": "sl_s_1858",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_402",
    "score": 718.0
  },
  {
    "id": "sl_s_1859",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_403",
    "score": 718.0
  },
  {
    "id": "sl_s_1860",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_403",
    "score": 695.0
  },
  {
    "id": "sl_s_1861",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_403",
    "score": 697.5
  },
  {
    "id": "sl_s_1862",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_403",
    "score": 699.0
  },
  {
    "id": "sl_s_1863",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_403",
    "score": 682.5
  },
  {
    "id": "sl_s_1864",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_404",
    "score": 727.0
  },
  {
    "id": "sl_s_1865",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_404",
    "score": 726.0
  },
  {
    "id": "sl_s_1866",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_404",
    "score": 737.0
  },
  {
    "id": "sl_s_1867",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_404",
    "score": 713.0
  },
  {
    "id": "sl_s_1868",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_404",
    "score": 749.0
  },
  {
    "id": "sl_s_1869",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_404",
    "score": 736.0
  },
  {
    "id": "sl_s_1870",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_404",
    "score": 720.0
  },
  {
    "id": "sl_s_1871",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_404",
    "score": 712.0
  },
  {
    "id": "sl_s_1872",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_404",
    "score": 729.5
  },
  {
    "id": "sl_s_1873",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_405",
    "score": 738.0
  },
  {
    "id": "sl_s_1874",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_405",
    "score": 749.0
  },
  {
    "id": "sl_s_1875",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_405",
    "score": 746.0
  },
  {
    "id": "sl_s_1876",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_405",
    "score": 714.0
  },
  {
    "id": "sl_s_1877",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_405",
    "score": 756.0
  },
  {
    "id": "sl_s_1878",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_405",
    "score": 731.0
  },
  {
    "id": "sl_s_1879",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_405",
    "score": 717.5
  },
  {
    "id": "sl_s_1880",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_405",
    "score": 729.0
  },
  {
    "id": "sl_s_1881",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_406",
    "score": 729.5
  },
  {
    "id": "sl_s_1882",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_406",
    "score": 746.0
  },
  {
    "id": "sl_s_1883",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_406",
    "score": 745.5
  },
  {
    "id": "sl_s_1884",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_406",
    "score": 715.0
  },
  {
    "id": "sl_s_1885",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_406",
    "score": 752.0
  },
  {
    "id": "sl_s_1886",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_406",
    "score": 714.0
  },
  {
    "id": "sl_s_1887",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_406",
    "score": 736.0
  },
  {
    "id": "sl_s_1888",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_406",
    "score": 712.5
  },
  {
    "id": "sl_s_1889",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_406",
    "score": 724.5
  },
  {
    "id": "sl_s_1890",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_407",
    "score": 754.0
  },
  {
    "id": "sl_s_1891",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_407",
    "score": 729.5
  },
  {
    "id": "sl_s_1892",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_407",
    "score": 737.0
  },
  {
    "id": "sl_s_1893",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_407",
    "score": 727.5
  },
  {
    "id": "sl_s_1894",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_407",
    "score": 710.5
  },
  {
    "id": "sl_s_1895",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_407",
    "score": 752.0
  },
  {
    "id": "sl_s_1896",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_407",
    "score": 722.5
  },
  {
    "id": "sl_s_1897",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_407",
    "score": 709.5
  },
  {
    "id": "sl_s_1898",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_407",
    "score": 723.5
  },
  {
    "id": "sl_s_1899",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_408",
    "score": 715.5
  },
  {
    "id": "sl_s_1900",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_408",
    "score": 703.5
  },
  {
    "id": "sl_s_1901",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_408",
    "score": 730.0
  },
  {
    "id": "sl_s_1902",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_408",
    "score": 699.5
  },
  {
    "id": "sl_s_1903",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_409",
    "score": 755.5
  },
  {
    "id": "sl_s_1904",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_409",
    "score": 732.5
  },
  {
    "id": "sl_s_1905",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_409",
    "score": 746.5
  },
  {
    "id": "sl_s_1906",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_409",
    "score": 739.0
  },
  {
    "id": "sl_s_1907",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_409",
    "score": 708.5
  },
  {
    "id": "sl_s_1908",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_409",
    "score": 752.0
  },
  {
    "id": "sl_s_1909",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_409",
    "score": 725.5
  },
  {
    "id": "sl_s_1910",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_409",
    "score": 713.5
  },
  {
    "id": "sl_s_1911",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_409",
    "score": 728.0
  },
  {
    "id": "sl_s_1912",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_410",
    "score": 698.5
  },
  {
    "id": "sl_s_1913",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_410",
    "score": 738.0
  },
  {
    "id": "sl_s_1914",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_410",
    "score": 725.0
  },
  {
    "id": "sl_s_1915",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_410",
    "score": 661.0
  },
  {
    "id": "sl_s_1916",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_410",
    "score": 732.5
  },
  {
    "id": "sl_s_1917",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_410",
    "score": 702.5
  },
  {
    "id": "sl_s_1918",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_410",
    "score": 692.5
  },
  {
    "id": "sl_s_1919",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_410",
    "score": 670.0
  },
  {
    "id": "sl_s_1920",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_411",
    "score": 738.0
  },
  {
    "id": "sl_s_1921",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_411",
    "score": 750.5
  },
  {
    "id": "sl_s_1922",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_411",
    "score": 745.5
  },
  {
    "id": "sl_s_1923",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_411",
    "score": 715.5
  },
  {
    "id": "sl_s_1924",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_411",
    "score": 752.0
  },
  {
    "id": "sl_s_1925",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_411",
    "score": 734.0
  },
  {
    "id": "sl_s_1926",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_411",
    "score": 715.0
  },
  {
    "id": "sl_s_1927",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_411",
    "score": 732.5
  },
  {
    "id": "sl_s_1928",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_412",
    "score": 731.0
  },
  {
    "id": "sl_s_1929",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_412",
    "score": 750.0
  },
  {
    "id": "sl_s_1930",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_412",
    "score": 741.5
  },
  {
    "id": "sl_s_1931",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_412",
    "score": 723.0
  },
  {
    "id": "sl_s_1932",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_412",
    "score": 755.5
  },
  {
    "id": "sl_s_1933",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_412",
    "score": 723.5
  },
  {
    "id": "sl_s_1934",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_412",
    "score": 719.5
  },
  {
    "id": "sl_s_1935",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_412",
    "score": 721.0
  },
  {
    "id": "sl_s_1936",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_413",
    "score": 681.5
  },
  {
    "id": "sl_s_1937",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_414",
    "score": 733.0
  },
  {
    "id": "sl_s_1938",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_414",
    "score": 715.5
  },
  {
    "id": "sl_s_1939",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_414",
    "score": 703.0
  },
  {
    "id": "sl_s_1940",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_415",
    "score": 735.5
  },
  {
    "id": "sl_s_1941",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_415",
    "score": 724.0
  },
  {
    "id": "sl_s_1942",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_415",
    "score": 709.0
  },
  {
    "id": "sl_s_1943",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_415",
    "score": 751.0
  },
  {
    "id": "sl_s_1944",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_416",
    "score": 734.0
  },
  {
    "id": "sl_s_1945",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_416",
    "score": 714.5
  },
  {
    "id": "sl_s_1946",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_416",
    "score": 703.5
  },
  {
    "id": "sl_s_1947",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_417",
    "score": 727.5
  },
  {
    "id": "sl_s_1948",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_417",
    "score": 706.5
  },
  {
    "id": "sl_s_1949",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_418",
    "score": 730.5
  },
  {
    "id": "sl_s_1950",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_418",
    "score": 709.0
  },
  {
    "id": "sl_s_1951",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_419",
    "score": 733.5
  },
  {
    "id": "sl_s_1952",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_419",
    "score": 703.5
  },
  {
    "id": "sl_s_1953",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_419",
    "score": 695.5
  },
  {
    "id": "sl_s_1954",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_419",
    "score": 752.5
  },
  {
    "id": "sl_s_1955",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_420",
    "score": 717.0
  },
  {
    "id": "sl_s_1956",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_420",
    "score": 723.5
  },
  {
    "id": "sl_s_1957",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_420",
    "score": 715.0
  },
  {
    "id": "sl_s_1958",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_421",
    "score": 726.5
  },
  {
    "id": "sl_s_1959",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_421",
    "score": 710.0
  },
  {
    "id": "sl_s_1960",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_421",
    "score": 703.0
  },
  {
    "id": "sl_s_1961",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_422",
    "score": 730.5
  },
  {
    "id": "sl_s_1962",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_422",
    "score": 716.0
  },
  {
    "id": "sl_s_1963",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_422",
    "score": 698.5
  },
  {
    "id": "sl_s_1964",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_423",
    "score": 687.0
  },
  {
    "id": "sl_s_1965",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_423",
    "score": 711.0
  },
  {
    "id": "sl_s_1966",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_423",
    "score": 706.0
  },
  {
    "id": "sl_s_1967",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_424",
    "score": 739.0
  },
  {
    "id": "sl_s_1968",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_424",
    "score": 716.5
  },
  {
    "id": "sl_s_1969",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_424",
    "score": 753.0
  },
  {
    "id": "sl_s_1970",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_425",
    "score": 715.5
  },
  {
    "id": "sl_s_1971",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_425",
    "score": 703.5
  },
  {
    "id": "sl_s_1972",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_425",
    "score": 754.5
  },
  {
    "id": "sl_s_1973",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_426",
    "score": 738.0
  },
  {
    "id": "sl_s_1974",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_426",
    "score": 720.0
  },
  {
    "id": "sl_s_1975",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_426",
    "score": 696.5
  },
  {
    "id": "sl_s_1976",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_427",
    "score": 737.0
  },
  {
    "id": "sl_s_1977",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_427",
    "score": 718.5
  },
  {
    "id": "sl_s_1978",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_427",
    "score": 702.0
  },
  {
    "id": "sl_s_1979",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_428",
    "score": 734.5
  },
  {
    "id": "sl_s_1980",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_428",
    "score": 710.0
  },
  {
    "id": "sl_s_1981",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_428",
    "score": 692.0
  },
  {
    "id": "sl_s_1982",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_429",
    "score": 734.0
  },
  {
    "id": "sl_s_1983",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_429",
    "score": 720.0
  },
  {
    "id": "sl_s_1984",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_429",
    "score": 704.5
  },
  {
    "id": "sl_s_1985",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_429",
    "score": 740.5
  },
  {
    "id": "sl_s_1986",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_430",
    "score": 707.0
  },
  {
    "id": "sl_s_1987",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_430",
    "score": 691.5
  },
  {
    "id": "sl_s_1988",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_430",
    "score": 691.5
  },
  {
    "id": "sl_s_1989",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_430",
    "score": 739.5
  },
  {
    "id": "sl_s_1990",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_431",
    "score": 732.0
  },
  {
    "id": "sl_s_1991",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_431",
    "score": 722.5
  },
  {
    "id": "sl_s_1992",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_431",
    "score": 706.5
  },
  {
    "id": "sl_s_1993",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_432",
    "score": 749.0
  },
  {
    "id": "sl_s_1994",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_432",
    "score": 735.0
  },
  {
    "id": "sl_s_1995",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_432",
    "score": 719.0
  },
  {
    "id": "sl_s_1996",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_432",
    "score": 688.5
  },
  {
    "id": "sl_s_1997",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_432",
    "score": 754.0
  },
  {
    "id": "sl_s_1998",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_433",
    "score": 732.0
  },
  {
    "id": "sl_s_1999",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_433",
    "score": 715.5
  },
  {
    "id": "sl_s_2000",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_433",
    "score": 700.0
  },
  {
    "id": "sl_s_2001",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_434",
    "score": 726.5
  },
  {
    "id": "sl_s_2002",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_434",
    "score": 719.5
  },
  {
    "id": "sl_s_2003",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_434",
    "score": 702.5
  },
  {
    "id": "sl_s_2004",
    "schoolId": "hs_092001",
    "middleSchoolId": "ms_435",
    "score": 734.0
  },
  {
    "id": "sl_s_2005",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_435",
    "score": 718.0
  },
  {
    "id": "sl_s_2006",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_435",
    "score": 700.0
  },
  {
    "id": "sl_s_2007",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_436",
    "score": 731.5
  },
  {
    "id": "sl_s_2008",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_436",
    "score": 687.5
  },
  {
    "id": "sl_s_2009",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_437",
    "score": 683.5
  },
  {
    "id": "sl_s_2010",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_437",
    "score": 680.5
  },
  {
    "id": "sl_s_2011",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_438",
    "score": 717.0
  },
  {
    "id": "sl_s_2012",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_438",
    "score": 692.5
  },
  {
    "id": "sl_s_2013",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_439",
    "score": 684.5
  },
  {
    "id": "sl_s_2014",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_439",
    "score": 674.0
  },
  {
    "id": "sl_s_2015",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_440",
    "score": 694.5
  },
  {
    "id": "sl_s_2016",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_440",
    "score": 666.5
  },
  {
    "id": "sl_s_2017",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_441",
    "score": 710.0
  },
  {
    "id": "sl_s_2018",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_441",
    "score": 699.5
  },
  {
    "id": "sl_s_2019",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_442",
    "score": 686.5
  },
  {
    "id": "sl_s_2020",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_443",
    "score": 727.0
  },
  {
    "id": "sl_s_2021",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_443",
    "score": 702.0
  },
  {
    "id": "sl_s_2022",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_444",
    "score": 744.0
  },
  {
    "id": "sl_s_2023",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_444",
    "score": 714.0
  },
  {
    "id": "sl_s_2024",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_444",
    "score": 699.5
  },
  {
    "id": "sl_s_2025",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_445",
    "score": 722.5
  },
  {
    "id": "sl_s_2026",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_445",
    "score": 703.0
  },
  {
    "id": "sl_s_2027",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_446",
    "score": 730.0
  },
  {
    "id": "sl_s_2028",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_446",
    "score": 700.5
  },
  {
    "id": "sl_s_2029",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_447",
    "score": 734.0
  },
  {
    "id": "sl_s_2030",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_447",
    "score": 699.0
  },
  {
    "id": "sl_s_2031",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_448",
    "score": 723.5
  },
  {
    "id": "sl_s_2032",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_448",
    "score": 694.5
  },
  {
    "id": "sl_s_2033",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_449",
    "score": 722.0
  },
  {
    "id": "sl_s_2034",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_449",
    "score": 702.5
  },
  {
    "id": "sl_s_2035",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_450",
    "score": 746.5
  },
  {
    "id": "sl_s_2036",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_450",
    "score": 727.0
  },
  {
    "id": "sl_s_2037",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_450",
    "score": 696.5
  },
  {
    "id": "sl_s_2038",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_451",
    "score": 737.0
  },
  {
    "id": "sl_s_2039",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_451",
    "score": 726.5
  },
  {
    "id": "sl_s_2040",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_451",
    "score": 707.0
  },
  {
    "id": "sl_s_2041",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_452",
    "score": 703.0
  },
  {
    "id": "sl_s_2042",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_452",
    "score": 687.5
  },
  {
    "id": "sl_s_2043",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_453",
    "score": 700.5
  },
  {
    "id": "sl_s_2044",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_453",
    "score": 690.5
  },
  {
    "id": "sl_s_2045",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_454",
    "score": 693.5
  },
  {
    "id": "sl_s_2046",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_454",
    "score": 657.5
  },
  {
    "id": "sl_s_2047",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_455",
    "score": 726.0
  },
  {
    "id": "sl_s_2048",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_455",
    "score": 713.0
  },
  {
    "id": "sl_s_2049",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_456",
    "score": 700.5
  },
  {
    "id": "sl_s_2050",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_456",
    "score": 685.5
  },
  {
    "id": "sl_s_2051",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_457",
    "score": 749.0
  },
  {
    "id": "sl_s_2052",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_457",
    "score": 722.0
  },
  {
    "id": "sl_s_2053",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_457",
    "score": 698.5
  },
  {
    "id": "sl_s_2054",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_458",
    "score": 713.5
  },
  {
    "id": "sl_s_2055",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_459",
    "score": 721.5
  },
  {
    "id": "sl_s_2056",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_459",
    "score": 693.0
  },
  {
    "id": "sl_s_2057",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_460",
    "score": 682.0
  },
  {
    "id": "sl_s_2058",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_460",
    "score": 681.5
  },
  {
    "id": "sl_s_2059",
    "schoolId": "hs_202001",
    "middleSchoolId": "ms_461",
    "score": 673.5
  },
  {
    "id": "sl_s_2060",
    "schoolId": "hs_162001",
    "middleSchoolId": "ms_461",
    "score": 661.0
  },
  {
    "id": "sl_s_2061",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_462",
    "score": 702.5
  },
  {
    "id": "sl_s_2062",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_462",
    "score": 733.5
  },
  {
    "id": "sl_s_2063",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_462",
    "score": 715.5
  },
  {
    "id": "sl_s_2064",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_463",
    "score": 693.0
  },
  {
    "id": "sl_s_2065",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_463",
    "score": 718.5
  },
  {
    "id": "sl_s_2066",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_463",
    "score": 714.0
  },
  {
    "id": "sl_s_2067",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_464",
    "score": 692.5
  },
  {
    "id": "sl_s_2068",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_464",
    "score": 725.0
  },
  {
    "id": "sl_s_2069",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_464",
    "score": 716.0
  },
  {
    "id": "sl_s_2070",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_465",
    "score": 695.0
  },
  {
    "id": "sl_s_2071",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_465",
    "score": 736.0
  },
  {
    "id": "sl_s_2072",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_465",
    "score": 721.5
  },
  {
    "id": "sl_s_2073",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_466",
    "score": 666.5
  },
  {
    "id": "sl_s_2074",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_466",
    "score": 718.0
  },
  {
    "id": "sl_s_2075",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_466",
    "score": 698.5
  },
  {
    "id": "sl_s_2076",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_467",
    "score": 745.0
  },
  {
    "id": "sl_s_2077",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_467",
    "score": 695.0
  },
  {
    "id": "sl_s_2078",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_467",
    "score": 724.5
  },
  {
    "id": "sl_s_2079",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_467",
    "score": 714.5
  },
  {
    "id": "sl_s_2080",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_468",
    "score": 747.0
  },
  {
    "id": "sl_s_2081",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_468",
    "score": 692.0
  },
  {
    "id": "sl_s_2082",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_468",
    "score": 725.0
  },
  {
    "id": "sl_s_2083",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_468",
    "score": 713.5
  },
  {
    "id": "sl_s_2084",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_468",
    "score": 754.5
  },
  {
    "id": "sl_s_2085",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_469",
    "score": 694.5
  },
  {
    "id": "sl_s_2086",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_469",
    "score": 720.0
  },
  {
    "id": "sl_s_2087",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_469",
    "score": 700.5
  },
  {
    "id": "sl_s_2088",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_469",
    "score": 724.5
  },
  {
    "id": "sl_s_2089",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_470",
    "score": 701.0
  },
  {
    "id": "sl_s_2090",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_470",
    "score": 738.5
  },
  {
    "id": "sl_s_2091",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_470",
    "score": 718.0
  },
  {
    "id": "sl_s_2092",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_470",
    "score": 753.5
  },
  {
    "id": "sl_s_2093",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_471",
    "score": 693.5
  },
  {
    "id": "sl_s_2094",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_471",
    "score": 734.5
  },
  {
    "id": "sl_s_2095",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_471",
    "score": 714.5
  },
  {
    "id": "sl_s_2096",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_472",
    "score": 694.5
  },
  {
    "id": "sl_s_2097",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_472",
    "score": 726.5
  },
  {
    "id": "sl_s_2098",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_472",
    "score": 716.0
  },
  {
    "id": "sl_s_2099",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_473",
    "score": 689.5
  },
  {
    "id": "sl_s_2100",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_473",
    "score": 738.0
  },
  {
    "id": "sl_s_2101",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_473",
    "score": 720.5
  },
  {
    "id": "sl_s_2102",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_473",
    "score": 746.0
  },
  {
    "id": "sl_s_2103",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_474",
    "score": 695.0
  },
  {
    "id": "sl_s_2104",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_474",
    "score": 737.0
  },
  {
    "id": "sl_s_2105",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_474",
    "score": 713.0
  },
  {
    "id": "sl_s_2106",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_474",
    "score": 758.0
  },
  {
    "id": "sl_s_2107",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_475",
    "score": 681.0
  },
  {
    "id": "sl_s_2108",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_475",
    "score": 734.0
  },
  {
    "id": "sl_s_2109",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_475",
    "score": 718.5
  },
  {
    "id": "sl_s_2110",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_476",
    "score": 706.5
  },
  {
    "id": "sl_s_2111",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_476",
    "score": 692.0
  },
  {
    "id": "sl_s_2112",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_477",
    "score": 697.5
  },
  {
    "id": "sl_s_2113",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_477",
    "score": 734.5
  },
  {
    "id": "sl_s_2114",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_477",
    "score": 716.0
  },
  {
    "id": "sl_s_2115",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_478",
    "score": 702.5
  },
  {
    "id": "sl_s_2116",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_478",
    "score": 730.5
  },
  {
    "id": "sl_s_2117",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_478",
    "score": 717.0
  },
  {
    "id": "sl_s_2118",
    "schoolId": "hs_052001",
    "middleSchoolId": "ms_479",
    "score": 682.5
  },
  {
    "id": "sl_s_2119",
    "schoolId": "hs_052002",
    "middleSchoolId": "ms_479",
    "score": 736.0
  },
  {
    "id": "sl_s_2120",
    "schoolId": "hs_053004",
    "middleSchoolId": "ms_479",
    "score": 704.5
  },
  {
    "id": "sl_s_2121",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_480",
    "score": 724.5
  },
  {
    "id": "sl_s_2122",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_480",
    "score": 715.0
  },
  {
    "id": "sl_s_2123",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_480",
    "score": 709.0
  },
  {
    "id": "sl_s_2124",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_480",
    "score": 712.0
  },
  {
    "id": "sl_s_2125",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_480",
    "score": 721.5
  },
  {
    "id": "sl_s_2126",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_481",
    "score": 752.5
  },
  {
    "id": "sl_s_2127",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_481",
    "score": 747.0
  },
  {
    "id": "sl_s_2128",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_481",
    "score": 732.5
  },
  {
    "id": "sl_s_2129",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_481",
    "score": 733.5
  },
  {
    "id": "sl_s_2130",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_481",
    "score": 715.5
  },
  {
    "id": "sl_s_2131",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_482",
    "score": 758.5
  },
  {
    "id": "sl_s_2132",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_482",
    "score": 733.0
  },
  {
    "id": "sl_s_2133",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_482",
    "score": 742.0
  },
  {
    "id": "sl_s_2134",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_482",
    "score": 746.0
  },
  {
    "id": "sl_s_2135",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_483",
    "score": 754.5
  },
  {
    "id": "sl_s_2136",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_483",
    "score": 729.0
  },
  {
    "id": "sl_s_2137",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_483",
    "score": 747.0
  },
  {
    "id": "sl_s_2138",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_483",
    "score": 719.5
  },
  {
    "id": "sl_s_2139",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_484",
    "score": 757.0
  },
  {
    "id": "sl_s_2140",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_484",
    "score": 744.5
  },
  {
    "id": "sl_s_2141",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_484",
    "score": 736.0
  },
  {
    "id": "sl_s_2142",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_484",
    "score": 749.5
  },
  {
    "id": "sl_s_2143",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_484",
    "score": 724.5
  },
  {
    "id": "sl_s_2144",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_485",
    "score": 753.0
  },
  {
    "id": "sl_s_2145",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_485",
    "score": 733.0
  },
  {
    "id": "sl_s_2146",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_485",
    "score": 750.0
  },
  {
    "id": "sl_s_2147",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_485",
    "score": 721.0
  },
  {
    "id": "sl_s_2148",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_485",
    "score": 737.5
  },
  {
    "id": "sl_s_2149",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_486",
    "score": 736.0
  },
  {
    "id": "sl_s_2150",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_486",
    "score": 726.5
  },
  {
    "id": "sl_s_2151",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_486",
    "score": 759.0
  },
  {
    "id": "sl_s_2152",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_486",
    "score": 719.0
  },
  {
    "id": "sl_s_2153",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_486",
    "score": 705.5
  },
  {
    "id": "sl_s_2154",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_487",
    "score": 742.5
  },
  {
    "id": "sl_s_2155",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_487",
    "score": 727.0
  },
  {
    "id": "sl_s_2156",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_487",
    "score": 744.0
  },
  {
    "id": "sl_s_2157",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_487",
    "score": 719.5
  },
  {
    "id": "sl_s_2158",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_488",
    "score": 761.5
  },
  {
    "id": "sl_s_2159",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_488",
    "score": 727.0
  },
  {
    "id": "sl_s_2160",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_488",
    "score": 715.0
  },
  {
    "id": "sl_s_2161",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_488",
    "score": 733.0
  },
  {
    "id": "sl_s_2162",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_488",
    "score": 714.0
  },
  {
    "id": "sl_s_2163",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_489",
    "score": 706.0
  },
  {
    "id": "sl_s_2164",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_489",
    "score": 706.5
  },
  {
    "id": "sl_s_2165",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_489",
    "score": 709.0
  },
  {
    "id": "sl_s_2166",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_489",
    "score": 703.5
  },
  {
    "id": "sl_s_2167",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_489",
    "score": 710.0
  },
  {
    "id": "sl_s_2168",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_490",
    "score": 708.0
  },
  {
    "id": "sl_s_2169",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_490",
    "score": 714.5
  },
  {
    "id": "sl_s_2170",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_490",
    "score": 731.0
  },
  {
    "id": "sl_s_2171",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_490",
    "score": 721.5
  },
  {
    "id": "sl_s_2172",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_490",
    "score": 691.5
  },
  {
    "id": "sl_s_2173",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_491",
    "score": 760.0
  },
  {
    "id": "sl_s_2174",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_491",
    "score": 753.5
  },
  {
    "id": "sl_s_2175",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_491",
    "score": 730.5
  },
  {
    "id": "sl_s_2176",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_491",
    "score": 755.5
  },
  {
    "id": "sl_s_2177",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_491",
    "score": 725.0
  },
  {
    "id": "sl_s_2178",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_492",
    "score": 762.5
  },
  {
    "id": "sl_s_2179",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_492",
    "score": 756.0
  },
  {
    "id": "sl_s_2180",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_492",
    "score": 737.0
  },
  {
    "id": "sl_s_2181",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_492",
    "score": 752.0
  },
  {
    "id": "sl_s_2182",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_492",
    "score": 715.0
  },
  {
    "id": "sl_s_2183",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_493",
    "score": 746.0
  },
  {
    "id": "sl_s_2184",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_493",
    "score": 728.5
  },
  {
    "id": "sl_s_2185",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_493",
    "score": 732.0
  },
  {
    "id": "sl_s_2186",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_493",
    "score": 750.0
  },
  {
    "id": "sl_s_2187",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_493",
    "score": 724.0
  },
  {
    "id": "sl_s_2188",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_494",
    "score": 751.5
  },
  {
    "id": "sl_s_2189",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_494",
    "score": 726.5
  },
  {
    "id": "sl_s_2190",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_494",
    "score": 746.5
  },
  {
    "id": "sl_s_2191",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_494",
    "score": 720.5
  },
  {
    "id": "sl_s_2192",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_495",
    "score": 748.5
  },
  {
    "id": "sl_s_2193",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_495",
    "score": 746.0
  },
  {
    "id": "sl_s_2194",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_495",
    "score": 731.0
  },
  {
    "id": "sl_s_2195",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_495",
    "score": 729.5
  },
  {
    "id": "sl_s_2196",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_495",
    "score": 724.5
  },
  {
    "id": "sl_s_2197",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_496",
    "score": 742.5
  },
  {
    "id": "sl_s_2198",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_496",
    "score": 726.5
  },
  {
    "id": "sl_s_2199",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_496",
    "score": 759.5
  },
  {
    "id": "sl_s_2200",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_496",
    "score": 713.5
  },
  {
    "id": "sl_s_2201",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_496",
    "score": 744.0
  },
  {
    "id": "sl_s_2202",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_497",
    "score": 760.0
  },
  {
    "id": "sl_s_2203",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_497",
    "score": 753.5
  },
  {
    "id": "sl_s_2204",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_497",
    "score": 729.0
  },
  {
    "id": "sl_s_2205",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_497",
    "score": 741.5
  },
  {
    "id": "sl_s_2206",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_497",
    "score": 714.5
  },
  {
    "id": "sl_s_2207",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_498",
    "score": 746.5
  },
  {
    "id": "sl_s_2208",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_498",
    "score": 730.5
  },
  {
    "id": "sl_s_2209",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_498",
    "score": 752.0
  },
  {
    "id": "sl_s_2210",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_498",
    "score": 720.0
  },
  {
    "id": "sl_s_2211",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_499",
    "score": 750.0
  },
  {
    "id": "sl_s_2212",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_499",
    "score": 749.0
  },
  {
    "id": "sl_s_2213",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_499",
    "score": 720.5
  },
  {
    "id": "sl_s_2214",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_500",
    "score": 760.0
  },
  {
    "id": "sl_s_2215",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_500",
    "score": 744.5
  },
  {
    "id": "sl_s_2216",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_500",
    "score": 728.0
  },
  {
    "id": "sl_s_2217",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_500",
    "score": 750.5
  },
  {
    "id": "sl_s_2218",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_500",
    "score": 722.0
  },
  {
    "id": "sl_s_2219",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_501",
    "score": 740.5
  },
  {
    "id": "sl_s_2220",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_501",
    "score": 730.5
  },
  {
    "id": "sl_s_2221",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_501",
    "score": 746.5
  },
  {
    "id": "sl_s_2222",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_501",
    "score": 724.5
  },
  {
    "id": "sl_s_2223",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_502",
    "score": 757.5
  },
  {
    "id": "sl_s_2224",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_502",
    "score": 753.5
  },
  {
    "id": "sl_s_2225",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_502",
    "score": 749.0
  },
  {
    "id": "sl_s_2226",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_502",
    "score": 757.0
  },
  {
    "id": "sl_s_2227",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_502",
    "score": 723.0
  },
  {
    "id": "sl_s_2228",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_503",
    "score": 757.0
  },
  {
    "id": "sl_s_2229",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_503",
    "score": 749.0
  },
  {
    "id": "sl_s_2230",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_503",
    "score": 734.0
  },
  {
    "id": "sl_s_2231",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_503",
    "score": 749.5
  },
  {
    "id": "sl_s_2232",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_503",
    "score": 715.5
  },
  {
    "id": "sl_s_2233",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_504",
    "score": 749.0
  },
  {
    "id": "sl_s_2234",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_504",
    "score": 732.5
  },
  {
    "id": "sl_s_2235",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_504",
    "score": 729.0
  },
  {
    "id": "sl_s_2236",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_504",
    "score": 750.0
  },
  {
    "id": "sl_s_2237",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_504",
    "score": 715.0
  },
  {
    "id": "sl_s_2238",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_505",
    "score": 759.5
  },
  {
    "id": "sl_s_2239",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_505",
    "score": 732.0
  },
  {
    "id": "sl_s_2240",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_505",
    "score": 724.0
  },
  {
    "id": "sl_s_2241",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_505",
    "score": 759.5
  },
  {
    "id": "sl_s_2242",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_505",
    "score": 720.0
  },
  {
    "id": "sl_s_2243",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_506",
    "score": 754.0
  },
  {
    "id": "sl_s_2244",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_506",
    "score": 730.5
  },
  {
    "id": "sl_s_2245",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_506",
    "score": 749.5
  },
  {
    "id": "sl_s_2246",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_506",
    "score": 717.0
  },
  {
    "id": "sl_s_2247",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_506",
    "score": 732.5
  },
  {
    "id": "sl_s_2248",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_507",
    "score": 757.5
  },
  {
    "id": "sl_s_2249",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_507",
    "score": 755.0
  },
  {
    "id": "sl_s_2250",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_507",
    "score": 733.5
  },
  {
    "id": "sl_s_2251",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_507",
    "score": 749.0
  },
  {
    "id": "sl_s_2252",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_507",
    "score": 719.0
  },
  {
    "id": "sl_s_2253",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_508",
    "score": 745.0
  },
  {
    "id": "sl_s_2254",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_508",
    "score": 725.0
  },
  {
    "id": "sl_s_2255",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_508",
    "score": 745.5
  },
  {
    "id": "sl_s_2256",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_508",
    "score": 724.5
  },
  {
    "id": "sl_s_2257",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_509",
    "score": 753.5
  },
  {
    "id": "sl_s_2258",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_509",
    "score": 734.5
  },
  {
    "id": "sl_s_2259",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_509",
    "score": 754.0
  },
  {
    "id": "sl_s_2260",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_509",
    "score": 721.0
  },
  {
    "id": "sl_s_2261",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_510",
    "score": 730.0
  },
  {
    "id": "sl_s_2262",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_510",
    "score": 736.5
  },
  {
    "id": "sl_s_2263",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_510",
    "score": 755.0
  },
  {
    "id": "sl_s_2264",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_510",
    "score": 717.5
  },
  {
    "id": "sl_s_2265",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_511",
    "score": 746.0
  },
  {
    "id": "sl_s_2266",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_511",
    "score": 714.5
  },
  {
    "id": "sl_s_2267",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_512",
    "score": 759.0
  },
  {
    "id": "sl_s_2268",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_512",
    "score": 750.5
  },
  {
    "id": "sl_s_2269",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_512",
    "score": 735.0
  },
  {
    "id": "sl_s_2270",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_512",
    "score": 742.5
  },
  {
    "id": "sl_s_2271",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_512",
    "score": 720.5
  },
  {
    "id": "sl_s_2272",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_513",
    "score": 750.5
  },
  {
    "id": "sl_s_2273",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_513",
    "score": 745.5
  },
  {
    "id": "sl_s_2274",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_513",
    "score": 740.5
  },
  {
    "id": "sl_s_2275",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_513",
    "score": 746.5
  },
  {
    "id": "sl_s_2276",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_513",
    "score": 713.5
  },
  {
    "id": "sl_s_2277",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_514",
    "score": 727.5
  },
  {
    "id": "sl_s_2278",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_514",
    "score": 724.0
  },
  {
    "id": "sl_s_2279",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_514",
    "score": 716.5
  },
  {
    "id": "sl_s_2280",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_514",
    "score": 709.5
  },
  {
    "id": "sl_s_2281",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_515",
    "score": 758.0
  },
  {
    "id": "sl_s_2282",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_515",
    "score": 714.5
  },
  {
    "id": "sl_s_2283",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_515",
    "score": 750.0
  },
  {
    "id": "sl_s_2284",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_515",
    "score": 722.5
  },
  {
    "id": "sl_s_2285",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_516",
    "score": 761.0
  },
  {
    "id": "sl_s_2286",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_516",
    "score": 748.0
  },
  {
    "id": "sl_s_2287",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_516",
    "score": 734.5
  },
  {
    "id": "sl_s_2288",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_516",
    "score": 747.0
  },
  {
    "id": "sl_s_2289",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_516",
    "score": 716.5
  },
  {
    "id": "sl_s_2290",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_517",
    "score": 750.5
  },
  {
    "id": "sl_s_2291",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_517",
    "score": 736.5
  },
  {
    "id": "sl_s_2292",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_517",
    "score": 747.0
  },
  {
    "id": "sl_s_2293",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_517",
    "score": 726.5
  },
  {
    "id": "sl_s_2294",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_518",
    "score": 753.5
  },
  {
    "id": "sl_s_2295",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_518",
    "score": 733.5
  },
  {
    "id": "sl_s_2296",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_518",
    "score": 724.5
  },
  {
    "id": "sl_s_2297",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_518",
    "score": 746.0
  },
  {
    "id": "sl_s_2298",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_518",
    "score": 725.5
  },
  {
    "id": "sl_s_2299",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_519",
    "score": 757.5
  },
  {
    "id": "sl_s_2300",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_519",
    "score": 750.0
  },
  {
    "id": "sl_s_2301",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_519",
    "score": 722.5
  },
  {
    "id": "sl_s_2302",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_519",
    "score": 743.5
  },
  {
    "id": "sl_s_2303",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_519",
    "score": 719.0
  },
  {
    "id": "sl_s_2304",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_520",
    "score": 754.5
  },
  {
    "id": "sl_s_2305",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_520",
    "score": 692.5
  },
  {
    "id": "sl_s_2306",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_520",
    "score": 739.5
  },
  {
    "id": "sl_s_2307",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_520",
    "score": 745.0
  },
  {
    "id": "sl_s_2308",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_520",
    "score": 717.5
  },
  {
    "id": "sl_s_2309",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_521",
    "score": 758.0
  },
  {
    "id": "sl_s_2310",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_521",
    "score": 741.0
  },
  {
    "id": "sl_s_2311",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_521",
    "score": 730.0
  },
  {
    "id": "sl_s_2312",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_521",
    "score": 745.5
  },
  {
    "id": "sl_s_2313",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_521",
    "score": 715.5
  },
  {
    "id": "sl_s_2314",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_522",
    "score": 761.0
  },
  {
    "id": "sl_s_2315",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_522",
    "score": 753.0
  },
  {
    "id": "sl_s_2316",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_522",
    "score": 733.5
  },
  {
    "id": "sl_s_2317",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_522",
    "score": 753.0
  },
  {
    "id": "sl_s_2318",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_522",
    "score": 718.0
  },
  {
    "id": "sl_s_2319",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_523",
    "score": 759.0
  },
  {
    "id": "sl_s_2320",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_523",
    "score": 735.5
  },
  {
    "id": "sl_s_2321",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_523",
    "score": 708.5
  },
  {
    "id": "sl_s_2322",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_524",
    "score": 756.5
  },
  {
    "id": "sl_s_2323",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_524",
    "score": 731.0
  },
  {
    "id": "sl_s_2324",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_524",
    "score": 756.5
  },
  {
    "id": "sl_s_2325",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_524",
    "score": 722.5
  },
  {
    "id": "sl_s_2326",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_525",
    "score": 727.0
  },
  {
    "id": "sl_s_2327",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_525",
    "score": 708.0
  },
  {
    "id": "sl_s_2328",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_525",
    "score": 702.5
  },
  {
    "id": "sl_s_2329",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_525",
    "score": 734.5
  },
  {
    "id": "sl_s_2330",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_525",
    "score": 712.5
  },
  {
    "id": "sl_s_2331",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_526",
    "score": 754.5
  },
  {
    "id": "sl_s_2332",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_526",
    "score": 725.5
  },
  {
    "id": "sl_s_2333",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_526",
    "score": 755.5
  },
  {
    "id": "sl_s_2334",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_526",
    "score": 730.5
  },
  {
    "id": "sl_s_2335",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_526",
    "score": 731.5
  },
  {
    "id": "sl_s_2336",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_527",
    "score": 759.0
  },
  {
    "id": "sl_s_2337",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_527",
    "score": 710.5
  },
  {
    "id": "sl_s_2338",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_528",
    "score": 732.0
  },
  {
    "id": "sl_s_2339",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_528",
    "score": 721.0
  },
  {
    "id": "sl_s_2340",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_529",
    "score": 760.0
  },
  {
    "id": "sl_s_2341",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_529",
    "score": 745.5
  },
  {
    "id": "sl_s_2342",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_529",
    "score": 756.5
  },
  {
    "id": "sl_s_2343",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_529",
    "score": 725.0
  },
  {
    "id": "sl_s_2344",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_530",
    "score": 757.5
  },
  {
    "id": "sl_s_2345",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_530",
    "score": 732.0
  },
  {
    "id": "sl_s_2346",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_530",
    "score": 755.5
  },
  {
    "id": "sl_s_2347",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_530",
    "score": 718.5
  },
  {
    "id": "sl_s_2348",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_531",
    "score": 718.5
  },
  {
    "id": "sl_s_2349",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_531",
    "score": 746.5
  },
  {
    "id": "sl_s_2350",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_531",
    "score": 689.0
  },
  {
    "id": "sl_s_2351",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_532",
    "score": 722.0
  },
  {
    "id": "sl_s_2352",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_532",
    "score": 743.5
  },
  {
    "id": "sl_s_2353",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_532",
    "score": 693.0
  },
  {
    "id": "sl_s_2354",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_533",
    "score": 718.5
  },
  {
    "id": "sl_s_2355",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_533",
    "score": 744.5
  },
  {
    "id": "sl_s_2356",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_533",
    "score": 684.0
  },
  {
    "id": "sl_s_2357",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_534",
    "score": 714.0
  },
  {
    "id": "sl_s_2358",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_534",
    "score": 736.5
  },
  {
    "id": "sl_s_2359",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_534",
    "score": 687.0
  },
  {
    "id": "sl_s_2360",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_535",
    "score": 748.5
  },
  {
    "id": "sl_s_2361",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_535",
    "score": 726.5
  },
  {
    "id": "sl_s_2362",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_535",
    "score": 745.0
  },
  {
    "id": "sl_s_2363",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_535",
    "score": 703.0
  },
  {
    "id": "sl_s_2364",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_536",
    "score": 702.5
  },
  {
    "id": "sl_s_2365",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_536",
    "score": 740.0
  },
  {
    "id": "sl_s_2366",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_536",
    "score": 676.0
  },
  {
    "id": "sl_s_2367",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_537",
    "score": 721.5
  },
  {
    "id": "sl_s_2368",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_537",
    "score": 746.0
  },
  {
    "id": "sl_s_2369",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_537",
    "score": 690.0
  },
  {
    "id": "sl_s_2370",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_538",
    "score": 726.0
  },
  {
    "id": "sl_s_2371",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_538",
    "score": 714.0
  },
  {
    "id": "sl_s_2372",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_538",
    "score": 735.0
  },
  {
    "id": "sl_s_2373",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_538",
    "score": 695.5
  },
  {
    "id": "sl_s_2374",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_539",
    "score": 740.0
  },
  {
    "id": "sl_s_2375",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_539",
    "score": 708.5
  },
  {
    "id": "sl_s_2376",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_539",
    "score": 720.0
  },
  {
    "id": "sl_s_2377",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_539",
    "score": 688.5
  },
  {
    "id": "sl_s_2378",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_540",
    "score": 748.5
  },
  {
    "id": "sl_s_2379",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_540",
    "score": 705.5
  },
  {
    "id": "sl_s_2380",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_540",
    "score": 734.0
  },
  {
    "id": "sl_s_2381",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_540",
    "score": 692.5
  },
  {
    "id": "sl_s_2382",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_541",
    "score": 689.5
  },
  {
    "id": "sl_s_2383",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_541",
    "score": 738.5
  },
  {
    "id": "sl_s_2384",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_541",
    "score": 679.5
  },
  {
    "id": "sl_s_2385",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_542",
    "score": 697.5
  },
  {
    "id": "sl_s_2386",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_542",
    "score": 728.0
  },
  {
    "id": "sl_s_2387",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_542",
    "score": 686.5
  },
  {
    "id": "sl_s_2388",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_543",
    "score": 679.0
  },
  {
    "id": "sl_s_2389",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_543",
    "score": 750.5
  },
  {
    "id": "sl_s_2390",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_543",
    "score": 668.0
  },
  {
    "id": "sl_s_2391",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_544",
    "score": 709.5
  },
  {
    "id": "sl_s_2392",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_544",
    "score": 728.0
  },
  {
    "id": "sl_s_2393",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_544",
    "score": 676.0
  },
  {
    "id": "sl_s_2394",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_545",
    "score": 719.5
  },
  {
    "id": "sl_s_2395",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_545",
    "score": 745.0
  },
  {
    "id": "sl_s_2396",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_545",
    "score": 688.0
  },
  {
    "id": "sl_s_2397",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_546",
    "score": 717.5
  },
  {
    "id": "sl_s_2398",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_546",
    "score": 731.0
  },
  {
    "id": "sl_s_2399",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_546",
    "score": 697.0
  },
  {
    "id": "sl_s_2400",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_547",
    "score": 762.0
  },
  {
    "id": "sl_s_2401",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_547",
    "score": 722.5
  },
  {
    "id": "sl_s_2402",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_547",
    "score": 748.0
  },
  {
    "id": "sl_s_2403",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_547",
    "score": 696.0
  },
  {
    "id": "sl_s_2404",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_548",
    "score": 712.5
  },
  {
    "id": "sl_s_2405",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_548",
    "score": 729.5
  },
  {
    "id": "sl_s_2406",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_548",
    "score": 701.0
  },
  {
    "id": "sl_s_2407",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_549",
    "score": 705.5
  },
  {
    "id": "sl_s_2408",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_549",
    "score": 736.5
  },
  {
    "id": "sl_s_2409",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_549",
    "score": 675.0
  },
  {
    "id": "sl_s_2410",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_550",
    "score": 724.0
  },
  {
    "id": "sl_s_2411",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_550",
    "score": 747.0
  },
  {
    "id": "sl_s_2412",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_550",
    "score": 719.0
  },
  {
    "id": "sl_s_2413",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_551",
    "score": 718.5
  },
  {
    "id": "sl_s_2414",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_551",
    "score": 743.0
  },
  {
    "id": "sl_s_2415",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_551",
    "score": 690.5
  },
  {
    "id": "sl_s_2416",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_552",
    "score": 666.0
  },
  {
    "id": "sl_s_2417",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_552",
    "score": 746.5
  },
  {
    "id": "sl_s_2418",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_552",
    "score": 660.0
  },
  {
    "id": "sl_s_2419",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_553",
    "score": 715.5
  },
  {
    "id": "sl_s_2420",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_553",
    "score": 749.5
  },
  {
    "id": "sl_s_2421",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_553",
    "score": 694.5
  },
  {
    "id": "sl_s_2422",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_554",
    "score": 701.0
  },
  {
    "id": "sl_s_2423",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_554",
    "score": 749.5
  },
  {
    "id": "sl_s_2424",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_554",
    "score": 678.5
  },
  {
    "id": "sl_s_2425",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_555",
    "score": 659.0
  },
  {
    "id": "sl_s_2426",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_555",
    "score": 719.0
  },
  {
    "id": "sl_s_2427",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_555",
    "score": 656.0
  },
  {
    "id": "sl_s_2428",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_556",
    "score": 715.5
  },
  {
    "id": "sl_s_2429",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_556",
    "score": 733.5
  },
  {
    "id": "sl_s_2430",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_556",
    "score": 666.5
  },
  {
    "id": "sl_s_2431",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_557",
    "score": 719.5
  },
  {
    "id": "sl_s_2432",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_557",
    "score": 744.5
  },
  {
    "id": "sl_s_2433",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_557",
    "score": 692.0
  },
  {
    "id": "sl_s_2434",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_558",
    "score": 737.5
  },
  {
    "id": "sl_s_2435",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_558",
    "score": 717.5
  },
  {
    "id": "sl_s_2436",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_558",
    "score": 705.5
  },
  {
    "id": "sl_s_2437",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_558",
    "score": 718.0
  },
  {
    "id": "sl_s_2438",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_558",
    "score": 661.5
  },
  {
    "id": "sl_s_2439",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_558",
    "score": 659.5
  },
  {
    "id": "sl_s_2440",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_558",
    "score": 667.0
  },
  {
    "id": "sl_s_2441",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_559",
    "score": 736.5
  },
  {
    "id": "sl_s_2442",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_559",
    "score": 715.0
  },
  {
    "id": "sl_s_2443",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_559",
    "score": 705.5
  },
  {
    "id": "sl_s_2444",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_559",
    "score": 727.0
  },
  {
    "id": "sl_s_2445",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_559",
    "score": 670.0
  },
  {
    "id": "sl_s_2446",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_559",
    "score": 664.0
  },
  {
    "id": "sl_s_2447",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_560",
    "score": 738.5
  },
  {
    "id": "sl_s_2448",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_560",
    "score": 692.0
  },
  {
    "id": "sl_s_2449",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_560",
    "score": 699.5
  },
  {
    "id": "sl_s_2450",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_560",
    "score": 712.5
  },
  {
    "id": "sl_s_2451",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_560",
    "score": 657.5
  },
  {
    "id": "sl_s_2452",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_560",
    "score": 671.0
  },
  {
    "id": "sl_s_2453",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_560",
    "score": 676.5
  },
  {
    "id": "sl_s_2454",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_561",
    "score": 739.5
  },
  {
    "id": "sl_s_2455",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_561",
    "score": 719.0
  },
  {
    "id": "sl_s_2456",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_561",
    "score": 704.5
  },
  {
    "id": "sl_s_2457",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_561",
    "score": 712.0
  },
  {
    "id": "sl_s_2458",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_561",
    "score": 665.0
  },
  {
    "id": "sl_s_2459",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_561",
    "score": 693.5
  },
  {
    "id": "sl_s_2460",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_561",
    "score": 751.0
  },
  {
    "id": "sl_s_2461",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_562",
    "score": 731.0
  },
  {
    "id": "sl_s_2462",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_562",
    "score": 703.5
  },
  {
    "id": "sl_s_2463",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_562",
    "score": 707.5
  },
  {
    "id": "sl_s_2464",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_562",
    "score": 699.5
  },
  {
    "id": "sl_s_2465",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_562",
    "score": 659.5
  },
  {
    "id": "sl_s_2466",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_562",
    "score": 670.0
  },
  {
    "id": "sl_s_2467",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_562",
    "score": 659.5
  },
  {
    "id": "sl_s_2468",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_563",
    "score": 729.5
  },
  {
    "id": "sl_s_2469",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_563",
    "score": 716.5
  },
  {
    "id": "sl_s_2470",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_563",
    "score": 698.5
  },
  {
    "id": "sl_s_2471",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_563",
    "score": 723.0
  },
  {
    "id": "sl_s_2472",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_563",
    "score": 674.0
  },
  {
    "id": "sl_s_2473",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_563",
    "score": 677.0
  },
  {
    "id": "sl_s_2474",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_563",
    "score": 666.0
  },
  {
    "id": "sl_s_2475",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_564",
    "score": 725.0
  },
  {
    "id": "sl_s_2476",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_564",
    "score": 710.5
  },
  {
    "id": "sl_s_2477",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_564",
    "score": 704.5
  },
  {
    "id": "sl_s_2478",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_564",
    "score": 718.5
  },
  {
    "id": "sl_s_2479",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_564",
    "score": 657.0
  },
  {
    "id": "sl_s_2480",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_564",
    "score": 682.5
  },
  {
    "id": "sl_s_2481",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_564",
    "score": 658.0
  },
  {
    "id": "sl_s_2482",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_565",
    "score": 731.5
  },
  {
    "id": "sl_s_2483",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_565",
    "score": 706.5
  },
  {
    "id": "sl_s_2484",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_565",
    "score": 710.5
  },
  {
    "id": "sl_s_2485",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_565",
    "score": 722.0
  },
  {
    "id": "sl_s_2486",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_565",
    "score": 655.0
  },
  {
    "id": "sl_s_2487",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_565",
    "score": 676.0
  },
  {
    "id": "sl_s_2488",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_565",
    "score": 661.5
  },
  {
    "id": "sl_s_2489",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_566",
    "score": 724.0
  },
  {
    "id": "sl_s_2490",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_566",
    "score": 701.5
  },
  {
    "id": "sl_s_2491",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_566",
    "score": 710.5
  },
  {
    "id": "sl_s_2492",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_566",
    "score": 716.5
  },
  {
    "id": "sl_s_2493",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_566",
    "score": 660.0
  },
  {
    "id": "sl_s_2494",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_566",
    "score": 686.5
  },
  {
    "id": "sl_s_2495",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_566",
    "score": 670.0
  },
  {
    "id": "sl_s_2496",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_566",
    "score": 668.5
  },
  {
    "id": "sl_s_2497",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_567",
    "score": 724.5
  },
  {
    "id": "sl_s_2498",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_567",
    "score": 688.0
  },
  {
    "id": "sl_s_2499",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_567",
    "score": 656.5
  },
  {
    "id": "sl_s_2500",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_567",
    "score": 686.5
  },
  {
    "id": "sl_s_2501",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_567",
    "score": 742.5
  },
  {
    "id": "sl_s_2502",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_568",
    "score": 731.0
  },
  {
    "id": "sl_s_2503",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_568",
    "score": 710.0
  },
  {
    "id": "sl_s_2504",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_568",
    "score": 708.5
  },
  {
    "id": "sl_s_2505",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_568",
    "score": 724.5
  },
  {
    "id": "sl_s_2506",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_568",
    "score": 660.5
  },
  {
    "id": "sl_s_2507",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_568",
    "score": 678.0
  },
  {
    "id": "sl_s_2508",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_568",
    "score": 661.0
  },
  {
    "id": "sl_s_2509",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_569",
    "score": 734.5
  },
  {
    "id": "sl_s_2510",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_569",
    "score": 712.5
  },
  {
    "id": "sl_s_2511",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_569",
    "score": 712.5
  },
  {
    "id": "sl_s_2512",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_569",
    "score": 725.0
  },
  {
    "id": "sl_s_2513",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_569",
    "score": 658.5
  },
  {
    "id": "sl_s_2514",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_569",
    "score": 672.0
  },
  {
    "id": "sl_s_2515",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_569",
    "score": 663.5
  },
  {
    "id": "sl_s_2516",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_570",
    "score": 737.0
  },
  {
    "id": "sl_s_2517",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_570",
    "score": 716.0
  },
  {
    "id": "sl_s_2518",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_570",
    "score": 710.5
  },
  {
    "id": "sl_s_2519",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_570",
    "score": 724.0
  },
  {
    "id": "sl_s_2520",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_570",
    "score": 662.0
  },
  {
    "id": "sl_s_2521",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_570",
    "score": 655.5
  },
  {
    "id": "sl_s_2522",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_570",
    "score": 660.5
  },
  {
    "id": "sl_s_2523",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_571",
    "score": 726.0
  },
  {
    "id": "sl_s_2524",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_571",
    "score": 698.0
  },
  {
    "id": "sl_s_2525",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_571",
    "score": 695.5
  },
  {
    "id": "sl_s_2526",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_571",
    "score": 714.0
  },
  {
    "id": "sl_s_2527",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_571",
    "score": 673.5
  },
  {
    "id": "sl_s_2528",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_571",
    "score": 661.5
  },
  {
    "id": "sl_s_2529",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_572",
    "score": 730.0
  },
  {
    "id": "sl_s_2530",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_572",
    "score": 708.5
  },
  {
    "id": "sl_s_2531",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_572",
    "score": 711.5
  },
  {
    "id": "sl_s_2532",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_572",
    "score": 721.5
  },
  {
    "id": "sl_s_2533",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_572",
    "score": 655.0
  },
  {
    "id": "sl_s_2534",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_572",
    "score": 683.5
  },
  {
    "id": "sl_s_2535",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_572",
    "score": 668.5
  },
  {
    "id": "sl_s_2536",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_572",
    "score": 752.5
  },
  {
    "id": "sl_s_2537",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_573",
    "score": 735.0
  },
  {
    "id": "sl_s_2538",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_573",
    "score": 698.0
  },
  {
    "id": "sl_s_2539",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_573",
    "score": 706.5
  },
  {
    "id": "sl_s_2540",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_573",
    "score": 714.5
  },
  {
    "id": "sl_s_2541",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_573",
    "score": 683.5
  },
  {
    "id": "sl_s_2542",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_573",
    "score": 668.5
  },
  {
    "id": "sl_s_2543",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_574",
    "score": 714.5
  },
  {
    "id": "sl_s_2544",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_574",
    "score": 692.0
  },
  {
    "id": "sl_s_2545",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_574",
    "score": 697.0
  },
  {
    "id": "sl_s_2546",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_574",
    "score": 714.5
  },
  {
    "id": "sl_s_2547",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_574",
    "score": 658.5
  },
  {
    "id": "sl_s_2548",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_574",
    "score": 671.5
  },
  {
    "id": "sl_s_2549",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_574",
    "score": 661.0
  },
  {
    "id": "sl_s_2550",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_575",
    "score": 736.0
  },
  {
    "id": "sl_s_2551",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_575",
    "score": 715.5
  },
  {
    "id": "sl_s_2552",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_575",
    "score": 709.0
  },
  {
    "id": "sl_s_2553",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_575",
    "score": 725.0
  },
  {
    "id": "sl_s_2554",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_575",
    "score": 655.5
  },
  {
    "id": "sl_s_2555",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_575",
    "score": 675.5
  },
  {
    "id": "sl_s_2556",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_575",
    "score": 663.0
  },
  {
    "id": "sl_s_2557",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_576",
    "score": 723.0
  },
  {
    "id": "sl_s_2558",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_576",
    "score": 695.5
  },
  {
    "id": "sl_s_2559",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_576",
    "score": 694.5
  },
  {
    "id": "sl_s_2560",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_576",
    "score": 706.5
  },
  {
    "id": "sl_s_2561",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_576",
    "score": 656.0
  },
  {
    "id": "sl_s_2562",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_576",
    "score": 685.5
  },
  {
    "id": "sl_s_2563",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_576",
    "score": 683.0
  },
  {
    "id": "sl_s_2564",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_577",
    "score": 717.0
  },
  {
    "id": "sl_s_2565",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_577",
    "score": 691.5
  },
  {
    "id": "sl_s_2566",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_577",
    "score": 701.0
  },
  {
    "id": "sl_s_2567",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_577",
    "score": 709.5
  },
  {
    "id": "sl_s_2568",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_577",
    "score": 660.0
  },
  {
    "id": "sl_s_2569",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_577",
    "score": 670.0
  },
  {
    "id": "sl_s_2570",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_578",
    "score": 722.0
  },
  {
    "id": "sl_s_2571",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_578",
    "score": 702.5
  },
  {
    "id": "sl_s_2572",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_578",
    "score": 694.5
  },
  {
    "id": "sl_s_2573",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_578",
    "score": 711.0
  },
  {
    "id": "sl_s_2574",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_578",
    "score": 665.5
  },
  {
    "id": "sl_s_2575",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_579",
    "score": 733.5
  },
  {
    "id": "sl_s_2576",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_579",
    "score": 707.5
  },
  {
    "id": "sl_s_2577",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_579",
    "score": 701.5
  },
  {
    "id": "sl_s_2578",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_579",
    "score": 702.5
  },
  {
    "id": "sl_s_2579",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_579",
    "score": 657.5
  },
  {
    "id": "sl_s_2580",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_579",
    "score": 667.0
  },
  {
    "id": "sl_s_2581",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_579",
    "score": 670.5
  },
  {
    "id": "sl_s_2582",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_579",
    "score": 757.5
  },
  {
    "id": "sl_s_2583",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_580",
    "score": 723.5
  },
  {
    "id": "sl_s_2584",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_580",
    "score": 706.5
  },
  {
    "id": "sl_s_2585",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_580",
    "score": 701.5
  },
  {
    "id": "sl_s_2586",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_580",
    "score": 715.5
  },
  {
    "id": "sl_s_2587",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_580",
    "score": 665.5
  },
  {
    "id": "sl_s_2588",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_580",
    "score": 658.0
  },
  {
    "id": "sl_s_2589",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_581",
    "score": 725.0
  },
  {
    "id": "sl_s_2590",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_581",
    "score": 702.5
  },
  {
    "id": "sl_s_2591",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_581",
    "score": 700.5
  },
  {
    "id": "sl_s_2592",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_581",
    "score": 719.5
  },
  {
    "id": "sl_s_2593",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_581",
    "score": 664.5
  },
  {
    "id": "sl_s_2594",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_581",
    "score": 677.5
  },
  {
    "id": "sl_s_2595",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_581",
    "score": 668.5
  },
  {
    "id": "sl_s_2596",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_582",
    "score": 716.5
  },
  {
    "id": "sl_s_2597",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_582",
    "score": 696.5
  },
  {
    "id": "sl_s_2598",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_582",
    "score": 691.5
  },
  {
    "id": "sl_s_2599",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_582",
    "score": 697.5
  },
  {
    "id": "sl_s_2600",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_582",
    "score": 678.0
  },
  {
    "id": "sl_s_2601",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_582",
    "score": 666.0
  },
  {
    "id": "sl_s_2602",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_582",
    "score": 685.5
  },
  {
    "id": "sl_s_2603",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_582",
    "score": 730.0
  },
  {
    "id": "sl_s_2604",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_583",
    "score": 741.5
  },
  {
    "id": "sl_s_2605",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_583",
    "score": 714.5
  },
  {
    "id": "sl_s_2606",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_583",
    "score": 708.5
  },
  {
    "id": "sl_s_2607",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_583",
    "score": 725.0
  },
  {
    "id": "sl_s_2608",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_583",
    "score": 656.5
  },
  {
    "id": "sl_s_2609",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_583",
    "score": 667.0
  },
  {
    "id": "sl_s_2610",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_583",
    "score": 671.0
  },
  {
    "id": "sl_s_2611",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_583",
    "score": 745.5
  },
  {
    "id": "sl_s_2612",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_584",
    "score": 720.5
  },
  {
    "id": "sl_s_2613",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_584",
    "score": 699.0
  },
  {
    "id": "sl_s_2614",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_584",
    "score": 692.0
  },
  {
    "id": "sl_s_2615",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_584",
    "score": 705.0
  },
  {
    "id": "sl_s_2616",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_584",
    "score": 681.0
  },
  {
    "id": "sl_s_2617",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_584",
    "score": 677.5
  },
  {
    "id": "sl_s_2618",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_584",
    "score": 713.0
  },
  {
    "id": "sl_s_2619",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_585",
    "score": 734.5
  },
  {
    "id": "sl_s_2620",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_585",
    "score": 722.0
  },
  {
    "id": "sl_s_2621",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_585",
    "score": 714.5
  },
  {
    "id": "sl_s_2622",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_585",
    "score": 724.0
  },
  {
    "id": "sl_s_2623",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_585",
    "score": 656.0
  },
  {
    "id": "sl_s_2624",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_585",
    "score": 675.5
  },
  {
    "id": "sl_s_2625",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_585",
    "score": 666.0
  },
  {
    "id": "sl_s_2626",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_586",
    "score": 745.0
  },
  {
    "id": "sl_s_2627",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_586",
    "score": 731.5
  },
  {
    "id": "sl_s_2628",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_586",
    "score": 705.0
  },
  {
    "id": "sl_s_2629",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_586",
    "score": 705.0
  },
  {
    "id": "sl_s_2630",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_586",
    "score": 723.5
  },
  {
    "id": "sl_s_2631",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_586",
    "score": 662.0
  },
  {
    "id": "sl_s_2632",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_586",
    "score": 686.0
  },
  {
    "id": "sl_s_2633",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_586",
    "score": 659.5
  },
  {
    "id": "sl_s_2634",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_587",
    "score": 714.5
  },
  {
    "id": "sl_s_2635",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_587",
    "score": 701.5
  },
  {
    "id": "sl_s_2636",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_587",
    "score": 693.5
  },
  {
    "id": "sl_s_2637",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_587",
    "score": 712.5
  },
  {
    "id": "sl_s_2638",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_587",
    "score": 680.0
  },
  {
    "id": "sl_s_2639",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_587",
    "score": 657.5
  },
  {
    "id": "sl_s_2640",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_587",
    "score": 723.0
  },
  {
    "id": "sl_s_2641",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_588",
    "score": 730.5
  },
  {
    "id": "sl_s_2642",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_588",
    "score": 718.5
  },
  {
    "id": "sl_s_2643",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_588",
    "score": 708.5
  },
  {
    "id": "sl_s_2644",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_588",
    "score": 729.0
  },
  {
    "id": "sl_s_2645",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_588",
    "score": 661.0
  },
  {
    "id": "sl_s_2646",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_588",
    "score": 683.0
  },
  {
    "id": "sl_s_2647",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_588",
    "score": 666.0
  },
  {
    "id": "sl_s_2648",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_588",
    "score": 731.0
  },
  {
    "id": "sl_s_2649",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_589",
    "score": 722.5
  },
  {
    "id": "sl_s_2650",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_589",
    "score": 690.5
  },
  {
    "id": "sl_s_2651",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_589",
    "score": 692.5
  },
  {
    "id": "sl_s_2652",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_589",
    "score": 712.0
  },
  {
    "id": "sl_s_2653",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_589",
    "score": 681.0
  },
  {
    "id": "sl_s_2654",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_589",
    "score": 664.0
  },
  {
    "id": "sl_s_2655",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_590",
    "score": 733.0
  },
  {
    "id": "sl_s_2656",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_590",
    "score": 719.0
  },
  {
    "id": "sl_s_2657",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_590",
    "score": 711.5
  },
  {
    "id": "sl_s_2658",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_590",
    "score": 726.0
  },
  {
    "id": "sl_s_2659",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_590",
    "score": 661.0
  },
  {
    "id": "sl_s_2660",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_590",
    "score": 748.5
  },
  {
    "id": "sl_s_2661",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_591",
    "score": 725.5
  },
  {
    "id": "sl_s_2662",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_591",
    "score": 707.0
  },
  {
    "id": "sl_s_2663",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_591",
    "score": 710.5
  },
  {
    "id": "sl_s_2664",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_591",
    "score": 712.0
  },
  {
    "id": "sl_s_2665",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_591",
    "score": 674.5
  },
  {
    "id": "sl_s_2666",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_591",
    "score": 669.0
  },
  {
    "id": "sl_s_2667",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_591",
    "score": 658.5
  },
  {
    "id": "sl_s_2668",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_591",
    "score": 703.0
  },
  {
    "id": "sl_s_2669",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_592",
    "score": 686.5
  },
  {
    "id": "sl_s_2670",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_592",
    "score": 698.0
  },
  {
    "id": "sl_s_2671",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_592",
    "score": 687.5
  },
  {
    "id": "sl_s_2672",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_592",
    "score": 687.0
  },
  {
    "id": "sl_s_2673",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_592",
    "score": 658.0
  },
  {
    "id": "sl_s_2674",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_592",
    "score": 671.5
  },
  {
    "id": "sl_s_2675",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_592",
    "score": 658.5
  },
  {
    "id": "sl_s_2676",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_593",
    "score": 742.5
  },
  {
    "id": "sl_s_2677",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_593",
    "score": 694.0
  },
  {
    "id": "sl_s_2678",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_593",
    "score": 669.0
  },
  {
    "id": "sl_s_2679",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_593",
    "score": 700.0
  },
  {
    "id": "sl_s_2680",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_593",
    "score": 657.5
  },
  {
    "id": "sl_s_2681",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_594",
    "score": 731.5
  },
  {
    "id": "sl_s_2682",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_594",
    "score": 710.5
  },
  {
    "id": "sl_s_2683",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_594",
    "score": 708.0
  },
  {
    "id": "sl_s_2684",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_594",
    "score": 717.5
  },
  {
    "id": "sl_s_2685",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_594",
    "score": 692.5
  },
  {
    "id": "sl_s_2686",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_594",
    "score": 663.0
  },
  {
    "id": "sl_s_2687",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_594",
    "score": 750.0
  },
  {
    "id": "sl_s_2688",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_595",
    "score": 741.0
  },
  {
    "id": "sl_s_2689",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_595",
    "score": 735.5
  },
  {
    "id": "sl_s_2690",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_595",
    "score": 717.5
  },
  {
    "id": "sl_s_2691",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_595",
    "score": 683.0
  },
  {
    "id": "sl_s_2692",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_595",
    "score": 656.5
  },
  {
    "id": "sl_s_2693",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_595",
    "score": 689.0
  },
  {
    "id": "sl_s_2694",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_595",
    "score": 669.0
  },
  {
    "id": "sl_s_2695",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_596",
    "score": 734.0
  },
  {
    "id": "sl_s_2696",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_596",
    "score": 739.5
  },
  {
    "id": "sl_s_2697",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_596",
    "score": 701.5
  },
  {
    "id": "sl_s_2698",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_596",
    "score": 680.5
  },
  {
    "id": "sl_s_2699",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_596",
    "score": 661.5
  },
  {
    "id": "sl_s_2700",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_596",
    "score": 697.5
  },
  {
    "id": "sl_s_2701",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_596",
    "score": 674.0
  },
  {
    "id": "sl_s_2702",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_597",
    "score": 735.0
  },
  {
    "id": "sl_s_2703",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_597",
    "score": 736.0
  },
  {
    "id": "sl_s_2704",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_597",
    "score": 716.5
  },
  {
    "id": "sl_s_2705",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_597",
    "score": 675.0
  },
  {
    "id": "sl_s_2706",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_597",
    "score": 655.5
  },
  {
    "id": "sl_s_2707",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_597",
    "score": 693.5
  },
  {
    "id": "sl_s_2708",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_597",
    "score": 673.0
  },
  {
    "id": "sl_s_2709",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_598",
    "score": 727.0
  },
  {
    "id": "sl_s_2710",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_598",
    "score": 723.0
  },
  {
    "id": "sl_s_2711",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_598",
    "score": 705.0
  },
  {
    "id": "sl_s_2712",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_598",
    "score": 677.0
  },
  {
    "id": "sl_s_2713",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_598",
    "score": 667.0
  },
  {
    "id": "sl_s_2714",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_598",
    "score": 704.0
  },
  {
    "id": "sl_s_2715",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_598",
    "score": 677.0
  },
  {
    "id": "sl_s_2716",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_598",
    "score": 748.0
  },
  {
    "id": "sl_s_2717",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_599",
    "score": 724.5
  },
  {
    "id": "sl_s_2718",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_599",
    "score": 728.5
  },
  {
    "id": "sl_s_2719",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_599",
    "score": 707.0
  },
  {
    "id": "sl_s_2720",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_599",
    "score": 696.5
  },
  {
    "id": "sl_s_2721",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_599",
    "score": 671.5
  },
  {
    "id": "sl_s_2722",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_599",
    "score": 704.5
  },
  {
    "id": "sl_s_2723",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_599",
    "score": 676.5
  },
  {
    "id": "sl_s_2724",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_599",
    "score": 743.5
  },
  {
    "id": "sl_s_2725",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_600",
    "score": 731.5
  },
  {
    "id": "sl_s_2726",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_600",
    "score": 732.5
  },
  {
    "id": "sl_s_2727",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_600",
    "score": 721.0
  },
  {
    "id": "sl_s_2728",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_600",
    "score": 672.0
  },
  {
    "id": "sl_s_2729",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_600",
    "score": 666.5
  },
  {
    "id": "sl_s_2730",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_600",
    "score": 691.5
  },
  {
    "id": "sl_s_2731",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_600",
    "score": 675.5
  },
  {
    "id": "sl_s_2732",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_600",
    "score": 751.0
  },
  {
    "id": "sl_s_2733",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_601",
    "score": 725.0
  },
  {
    "id": "sl_s_2734",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_601",
    "score": 716.0
  },
  {
    "id": "sl_s_2735",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_601",
    "score": 702.0
  },
  {
    "id": "sl_s_2736",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_601",
    "score": 681.0
  },
  {
    "id": "sl_s_2737",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_601",
    "score": 666.0
  },
  {
    "id": "sl_s_2738",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_601",
    "score": 688.5
  },
  {
    "id": "sl_s_2739",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_601",
    "score": 663.0
  },
  {
    "id": "sl_s_2740",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_602",
    "score": 712.0
  },
  {
    "id": "sl_s_2741",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_602",
    "score": 723.5
  },
  {
    "id": "sl_s_2742",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_602",
    "score": 713.0
  },
  {
    "id": "sl_s_2743",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_602",
    "score": 697.0
  },
  {
    "id": "sl_s_2744",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_602",
    "score": 679.5
  },
  {
    "id": "sl_s_2745",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_602",
    "score": 701.5
  },
  {
    "id": "sl_s_2746",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_602",
    "score": 680.0
  },
  {
    "id": "sl_s_2747",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_603",
    "score": 725.5
  },
  {
    "id": "sl_s_2748",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_603",
    "score": 728.5
  },
  {
    "id": "sl_s_2749",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_603",
    "score": 689.5
  },
  {
    "id": "sl_s_2750",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_603",
    "score": 682.0
  },
  {
    "id": "sl_s_2751",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_603",
    "score": 672.5
  },
  {
    "id": "sl_s_2752",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_603",
    "score": 697.5
  },
  {
    "id": "sl_s_2753",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_603",
    "score": 685.5
  },
  {
    "id": "sl_s_2754",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_603",
    "score": 752.0
  },
  {
    "id": "sl_s_2755",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_604",
    "score": 729.0
  },
  {
    "id": "sl_s_2756",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_604",
    "score": 749.5
  },
  {
    "id": "sl_s_2757",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_604",
    "score": 708.0
  },
  {
    "id": "sl_s_2758",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_604",
    "score": 678.5
  },
  {
    "id": "sl_s_2759",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_604",
    "score": 661.5
  },
  {
    "id": "sl_s_2760",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_604",
    "score": 674.5
  },
  {
    "id": "sl_s_2761",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_604",
    "score": 685.0
  },
  {
    "id": "sl_s_2762",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_605",
    "score": 730.0
  },
  {
    "id": "sl_s_2763",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_605",
    "score": 721.5
  },
  {
    "id": "sl_s_2764",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_605",
    "score": 712.5
  },
  {
    "id": "sl_s_2765",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_605",
    "score": 688.5
  },
  {
    "id": "sl_s_2766",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_605",
    "score": 673.0
  },
  {
    "id": "sl_s_2767",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_605",
    "score": 702.0
  },
  {
    "id": "sl_s_2768",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_605",
    "score": 675.0
  },
  {
    "id": "sl_s_2769",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_606",
    "score": 736.0
  },
  {
    "id": "sl_s_2770",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_606",
    "score": 738.5
  },
  {
    "id": "sl_s_2771",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_606",
    "score": 719.5
  },
  {
    "id": "sl_s_2772",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_606",
    "score": 666.0
  },
  {
    "id": "sl_s_2773",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_606",
    "score": 657.0
  },
  {
    "id": "sl_s_2774",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_606",
    "score": 693.5
  },
  {
    "id": "sl_s_2775",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_606",
    "score": 656.0
  },
  {
    "id": "sl_s_2776",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_607",
    "score": 732.5
  },
  {
    "id": "sl_s_2777",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_607",
    "score": 730.5
  },
  {
    "id": "sl_s_2778",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_607",
    "score": 723.5
  },
  {
    "id": "sl_s_2779",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_607",
    "score": 688.5
  },
  {
    "id": "sl_s_2780",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_607",
    "score": 666.0
  },
  {
    "id": "sl_s_2781",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_607",
    "score": 702.0
  },
  {
    "id": "sl_s_2782",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_607",
    "score": 691.5
  },
  {
    "id": "sl_s_2783",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_608",
    "score": 729.0
  },
  {
    "id": "sl_s_2784",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_608",
    "score": 739.5
  },
  {
    "id": "sl_s_2785",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_608",
    "score": 710.0
  },
  {
    "id": "sl_s_2786",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_608",
    "score": 682.0
  },
  {
    "id": "sl_s_2787",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_608",
    "score": 671.0
  },
  {
    "id": "sl_s_2788",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_608",
    "score": 693.0
  },
  {
    "id": "sl_s_2789",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_608",
    "score": 677.5
  },
  {
    "id": "sl_s_2790",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_609",
    "score": 723.5
  },
  {
    "id": "sl_s_2791",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_609",
    "score": 722.5
  },
  {
    "id": "sl_s_2792",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_609",
    "score": 699.5
  },
  {
    "id": "sl_s_2793",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_609",
    "score": 679.5
  },
  {
    "id": "sl_s_2794",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_609",
    "score": 664.0
  },
  {
    "id": "sl_s_2795",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_609",
    "score": 668.0
  },
  {
    "id": "sl_s_2796",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_609",
    "score": 665.5
  },
  {
    "id": "sl_s_2797",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_609",
    "score": 745.0
  },
  {
    "id": "sl_s_2798",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_610",
    "score": 728.5
  },
  {
    "id": "sl_s_2799",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_610",
    "score": 732.5
  },
  {
    "id": "sl_s_2800",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_610",
    "score": 724.5
  },
  {
    "id": "sl_s_2801",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_610",
    "score": 676.5
  },
  {
    "id": "sl_s_2802",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_610",
    "score": 677.0
  },
  {
    "id": "sl_s_2803",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_610",
    "score": 691.0
  },
  {
    "id": "sl_s_2804",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_610",
    "score": 686.0
  },
  {
    "id": "sl_s_2805",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_611",
    "score": 720.5
  },
  {
    "id": "sl_s_2806",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_611",
    "score": 728.5
  },
  {
    "id": "sl_s_2807",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_611",
    "score": 704.5
  },
  {
    "id": "sl_s_2808",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_611",
    "score": 684.0
  },
  {
    "id": "sl_s_2809",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_611",
    "score": 657.5
  },
  {
    "id": "sl_s_2810",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_611",
    "score": 703.0
  },
  {
    "id": "sl_s_2811",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_611",
    "score": 668.0
  },
  {
    "id": "sl_s_2812",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_611",
    "score": 756.5
  },
  {
    "id": "sl_s_2813",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_612",
    "score": 737.0
  },
  {
    "id": "sl_s_2814",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_612",
    "score": 729.5
  },
  {
    "id": "sl_s_2815",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_612",
    "score": 718.5
  },
  {
    "id": "sl_s_2816",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_612",
    "score": 677.5
  },
  {
    "id": "sl_s_2817",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_612",
    "score": 674.5
  },
  {
    "id": "sl_s_2818",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_612",
    "score": 707.5
  },
  {
    "id": "sl_s_2819",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_612",
    "score": 682.5
  },
  {
    "id": "sl_s_2820",
    "schoolId": "hs_012001",
    "middleSchoolId": "ms_613",
    "score": 739.0
  },
  {
    "id": "sl_s_2821",
    "schoolId": "hs_012003",
    "middleSchoolId": "ms_613",
    "score": 738.0
  },
  {
    "id": "sl_s_2822",
    "schoolId": "hs_012005",
    "middleSchoolId": "ms_613",
    "score": 710.5
  },
  {
    "id": "sl_s_2823",
    "schoolId": "hs_012007",
    "middleSchoolId": "ms_613",
    "score": 672.0
  },
  {
    "id": "sl_s_2824",
    "schoolId": "hs_012008",
    "middleSchoolId": "ms_613",
    "score": 681.5
  },
  {
    "id": "sl_s_2825",
    "schoolId": "hs_012009",
    "middleSchoolId": "ms_613",
    "score": 690.5
  },
  {
    "id": "sl_s_2826",
    "schoolId": "hs_012010",
    "middleSchoolId": "ms_613",
    "score": 659.0
  }
];

export const quotaLines: QuotaLine[] = [
  {
    "id": "ql_d_0",
    "schoolId": "hs_042032",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_1",
    "schoolId": "hs_102056",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_2",
    "schoolId": "hs_102057",
    "district": "嘉定",
    "count": 11
  },
  {
    "id": "ql_d_3",
    "schoolId": "hs_152006",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_4",
    "schoolId": "hs_012001",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_5",
    "schoolId": "hs_012003",
    "district": "嘉定",
    "count": 8
  },
  {
    "id": "ql_d_6",
    "schoolId": "hs_012008",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_7",
    "schoolId": "hs_012010",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_8",
    "schoolId": "hs_042001",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_9",
    "schoolId": "hs_032001",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_10",
    "schoolId": "hs_032002",
    "district": "嘉定",
    "count": 1
  },
  {
    "id": "ql_d_11",
    "schoolId": "hs_043015",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_12",
    "schoolId": "hs_042036",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_13",
    "schoolId": "hs_052001",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_14",
    "schoolId": "hs_052002",
    "district": "嘉定",
    "count": 5
  },
  {
    "id": "ql_d_15",
    "schoolId": "hs_053004",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_16",
    "schoolId": "hs_062002",
    "district": "嘉定",
    "count": 8
  },
  {
    "id": "ql_d_17",
    "schoolId": "hs_062003",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_18",
    "schoolId": "hs_062004",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_19",
    "schoolId": "hs_062011",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_20",
    "schoolId": "hs_064001",
    "district": "嘉定",
    "count": 5
  },
  {
    "id": "ql_d_21",
    "schoolId": "hs_072001",
    "district": "嘉定",
    "count": 12
  },
  {
    "id": "ql_d_22",
    "schoolId": "hs_072002",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_23",
    "schoolId": "hs_073003",
    "district": "嘉定",
    "count": 9
  },
  {
    "id": "ql_d_24",
    "schoolId": "hs_073082",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_25",
    "schoolId": "hs_092001",
    "district": "嘉定",
    "count": 5
  },
  {
    "id": "ql_d_26",
    "schoolId": "hs_092002",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_27",
    "schoolId": "hs_093001",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_28",
    "schoolId": "hs_102004",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_29",
    "schoolId": "hs_102032",
    "district": "嘉定",
    "count": 5
  },
  {
    "id": "ql_d_30",
    "schoolId": "hs_103002",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_31",
    "schoolId": "hs_122001",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_32",
    "schoolId": "hs_123001",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_33",
    "schoolId": "hs_122002",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_34",
    "schoolId": "hs_122003",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_35",
    "schoolId": "hs_092003",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_36",
    "schoolId": "hs_132002",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_37",
    "schoolId": "hs_133001",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_38",
    "schoolId": "hs_132003",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_39",
    "schoolId": "hs_133003",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_40",
    "schoolId": "hs_142001",
    "district": "嘉定",
    "count": 9
  },
  {
    "id": "ql_d_41",
    "schoolId": "hs_142002",
    "district": "嘉定",
    "count": 10
  },
  {
    "id": "ql_d_42",
    "schoolId": "hs_142004",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_43",
    "schoolId": "hs_152001",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_44",
    "schoolId": "hs_152002",
    "district": "嘉定",
    "count": 8
  },
  {
    "id": "ql_d_45",
    "schoolId": "hs_152004",
    "district": "嘉定",
    "count": 14
  },
  {
    "id": "ql_d_46",
    "schoolId": "hs_153001",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_47",
    "schoolId": "hs_153004",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_48",
    "schoolId": "hs_153005",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_49",
    "schoolId": "hs_151078",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_50",
    "schoolId": "hs_152005",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_51",
    "schoolId": "hs_202001",
    "district": "嘉定",
    "count": 1
  },
  {
    "id": "ql_d_52",
    "schoolId": "hs_162001",
    "district": "嘉定",
    "count": 3
  },
  {
    "id": "ql_d_53",
    "schoolId": "hs_172001",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_54",
    "schoolId": "hs_172002",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_55",
    "schoolId": "hs_174003",
    "district": "嘉定",
    "count": 6
  },
  {
    "id": "ql_d_56",
    "schoolId": "hs_182002",
    "district": "嘉定",
    "count": 12
  },
  {
    "id": "ql_d_57",
    "schoolId": "hs_182003",
    "district": "嘉定",
    "count": 8
  },
  {
    "id": "ql_d_58",
    "schoolId": "hs_182001",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_59",
    "schoolId": "hs_212001",
    "district": "嘉定",
    "count": 2
  },
  {
    "id": "ql_d_60",
    "schoolId": "hs_222001",
    "district": "嘉定",
    "count": 4
  },
  {
    "id": "ql_d_61",
    "schoolId": "hs_042032",
    "district": "宝山",
    "count": 11
  },
  {
    "id": "ql_d_62",
    "schoolId": "hs_102056",
    "district": "宝山",
    "count": 22
  },
  {
    "id": "ql_d_63",
    "schoolId": "hs_102057",
    "district": "宝山",
    "count": 16
  },
  {
    "id": "ql_d_64",
    "schoolId": "hs_012001",
    "district": "宝山",
    "count": 17
  },
  {
    "id": "ql_d_65",
    "schoolId": "hs_012003",
    "district": "宝山",
    "count": 7
  },
  {
    "id": "ql_d_66",
    "schoolId": "hs_012007",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_67",
    "schoolId": "hs_012008",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_68",
    "schoolId": "hs_042001",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_69",
    "schoolId": "hs_032001",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_70",
    "schoolId": "hs_032002",
    "district": "宝山",
    "count": 4
  },
  {
    "id": "ql_d_71",
    "schoolId": "hs_043015",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_72",
    "schoolId": "hs_052001",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_73",
    "schoolId": "hs_052002",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_74",
    "schoolId": "hs_053004",
    "district": "宝山",
    "count": 1
  },
  {
    "id": "ql_d_75",
    "schoolId": "hs_062001",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_76",
    "schoolId": "hs_062002",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_77",
    "schoolId": "hs_062003",
    "district": "宝山",
    "count": 27
  },
  {
    "id": "ql_d_78",
    "schoolId": "hs_062004",
    "district": "宝山",
    "count": 9
  },
  {
    "id": "ql_d_79",
    "schoolId": "hs_062011",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_80",
    "schoolId": "hs_063004",
    "district": "宝山",
    "count": 12
  },
  {
    "id": "ql_d_81",
    "schoolId": "hs_064001",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_82",
    "schoolId": "hs_072001",
    "district": "宝山",
    "count": 32
  },
  {
    "id": "ql_d_83",
    "schoolId": "hs_072002",
    "district": "宝山",
    "count": 9
  },
  {
    "id": "ql_d_84",
    "schoolId": "hs_073003",
    "district": "宝山",
    "count": 9
  },
  {
    "id": "ql_d_85",
    "schoolId": "hs_092001",
    "district": "宝山",
    "count": 12
  },
  {
    "id": "ql_d_86",
    "schoolId": "hs_092002",
    "district": "宝山",
    "count": 4
  },
  {
    "id": "ql_d_87",
    "schoolId": "hs_093001",
    "district": "宝山",
    "count": 6
  },
  {
    "id": "ql_d_88",
    "schoolId": "hs_102004",
    "district": "宝山",
    "count": 9
  },
  {
    "id": "ql_d_89",
    "schoolId": "hs_102032",
    "district": "宝山",
    "count": 10
  },
  {
    "id": "ql_d_90",
    "schoolId": "hs_103002",
    "district": "宝山",
    "count": 20
  },
  {
    "id": "ql_d_91",
    "schoolId": "hs_122001",
    "district": "宝山",
    "count": 6
  },
  {
    "id": "ql_d_92",
    "schoolId": "hs_123001",
    "district": "宝山",
    "count": 10
  },
  {
    "id": "ql_d_93",
    "schoolId": "hs_122002",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_94",
    "schoolId": "hs_122003",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_95",
    "schoolId": "hs_092003",
    "district": "宝山",
    "count": 10
  },
  {
    "id": "ql_d_96",
    "schoolId": "hs_132002",
    "district": "宝山",
    "count": 10
  },
  {
    "id": "ql_d_97",
    "schoolId": "hs_133001",
    "district": "宝山",
    "count": 10
  },
  {
    "id": "ql_d_98",
    "schoolId": "hs_132003",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_99",
    "schoolId": "hs_133003",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_100",
    "schoolId": "hs_142001",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_101",
    "schoolId": "hs_142002",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_102",
    "schoolId": "hs_142004",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_103",
    "schoolId": "hs_152001",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_104",
    "schoolId": "hs_152002",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_105",
    "schoolId": "hs_152004",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_106",
    "schoolId": "hs_153001",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_107",
    "schoolId": "hs_153004",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_108",
    "schoolId": "hs_153005",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_109",
    "schoolId": "hs_151078",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_110",
    "schoolId": "hs_202001",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_111",
    "schoolId": "hs_162001",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_112",
    "schoolId": "hs_172001",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_113",
    "schoolId": "hs_172002",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_114",
    "schoolId": "hs_174003",
    "district": "宝山",
    "count": 4
  },
  {
    "id": "ql_d_115",
    "schoolId": "hs_182002",
    "district": "宝山",
    "count": 5
  },
  {
    "id": "ql_d_116",
    "schoolId": "hs_182003",
    "district": "宝山",
    "count": 7
  },
  {
    "id": "ql_d_117",
    "schoolId": "hs_182001",
    "district": "宝山",
    "count": 3
  },
  {
    "id": "ql_d_118",
    "schoolId": "hs_212001",
    "district": "宝山",
    "count": 2
  },
  {
    "id": "ql_d_119",
    "schoolId": "hs_214002",
    "district": "宝山",
    "count": 1
  },
  {
    "id": "ql_d_120",
    "schoolId": "hs_222001",
    "district": "宝山",
    "count": 8
  },
  {
    "id": "ql_d_121",
    "schoolId": "hs_042032",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_122",
    "schoolId": "hs_102056",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_123",
    "schoolId": "hs_102057",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_124",
    "schoolId": "hs_062002",
    "district": "崇明",
    "count": 1
  },
  {
    "id": "ql_d_125",
    "schoolId": "hs_062003",
    "district": "崇明",
    "count": 1
  },
  {
    "id": "ql_d_126",
    "schoolId": "hs_073003",
    "district": "崇明",
    "count": 3
  },
  {
    "id": "ql_d_127",
    "schoolId": "hs_102004",
    "district": "崇明",
    "count": 1
  },
  {
    "id": "ql_d_128",
    "schoolId": "hs_102032",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_129",
    "schoolId": "hs_123001",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_130",
    "schoolId": "hs_122003",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_131",
    "schoolId": "hs_092003",
    "district": "崇明",
    "count": 16
  },
  {
    "id": "ql_d_132",
    "schoolId": "hs_132002",
    "district": "崇明",
    "count": 4
  },
  {
    "id": "ql_d_133",
    "schoolId": "hs_133001",
    "district": "崇明",
    "count": 4
  },
  {
    "id": "ql_d_134",
    "schoolId": "hs_132003",
    "district": "崇明",
    "count": 3
  },
  {
    "id": "ql_d_135",
    "schoolId": "hs_133003",
    "district": "崇明",
    "count": 4
  },
  {
    "id": "ql_d_136",
    "schoolId": "hs_142001",
    "district": "崇明",
    "count": 2
  },
  {
    "id": "ql_d_137",
    "schoolId": "hs_152001",
    "district": "崇明",
    "count": 4
  },
  {
    "id": "ql_d_138",
    "schoolId": "hs_152002",
    "district": "崇明",
    "count": 4
  },
  {
    "id": "ql_d_139",
    "schoolId": "hs_152004",
    "district": "崇明",
    "count": 6
  },
  {
    "id": "ql_d_140",
    "schoolId": "hs_153001",
    "district": "崇明",
    "count": 4
  },
  {
    "id": "ql_d_141",
    "schoolId": "hs_153004",
    "district": "崇明",
    "count": 6
  },
  {
    "id": "ql_d_142",
    "schoolId": "hs_153005",
    "district": "崇明",
    "count": 1
  },
  {
    "id": "ql_d_143",
    "schoolId": "hs_042032",
    "district": "奉贤",
    "count": 4
  },
  {
    "id": "ql_d_144",
    "schoolId": "hs_102056",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_145",
    "schoolId": "hs_102057",
    "district": "奉贤",
    "count": 4
  },
  {
    "id": "ql_d_146",
    "schoolId": "hs_152006",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_147",
    "schoolId": "hs_012002",
    "district": "奉贤",
    "count": 20
  },
  {
    "id": "ql_d_148",
    "schoolId": "hs_042001",
    "district": "奉贤",
    "count": 1
  },
  {
    "id": "ql_d_149",
    "schoolId": "hs_032002",
    "district": "奉贤",
    "count": 1
  },
  {
    "id": "ql_d_150",
    "schoolId": "hs_043015",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_151",
    "schoolId": "hs_053004",
    "district": "奉贤",
    "count": 1
  },
  {
    "id": "ql_d_152",
    "schoolId": "hs_062002",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_153",
    "schoolId": "hs_072001",
    "district": "奉贤",
    "count": 1
  },
  {
    "id": "ql_d_154",
    "schoolId": "hs_073003",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_155",
    "schoolId": "hs_092002",
    "district": "奉贤",
    "count": 1
  },
  {
    "id": "ql_d_156",
    "schoolId": "hs_102004",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_157",
    "schoolId": "hs_122001",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_158",
    "schoolId": "hs_123001",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_159",
    "schoolId": "hs_122003",
    "district": "奉贤",
    "count": 7
  },
  {
    "id": "ql_d_160",
    "schoolId": "hs_122004",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_161",
    "schoolId": "hs_092003",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_162",
    "schoolId": "hs_132002",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_163",
    "schoolId": "hs_133001",
    "district": "奉贤",
    "count": 4
  },
  {
    "id": "ql_d_164",
    "schoolId": "hs_133003",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_165",
    "schoolId": "hs_142001",
    "district": "奉贤",
    "count": 4
  },
  {
    "id": "ql_d_166",
    "schoolId": "hs_142004",
    "district": "奉贤",
    "count": 5
  },
  {
    "id": "ql_d_167",
    "schoolId": "hs_152001",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_168",
    "schoolId": "hs_152002",
    "district": "奉贤",
    "count": 5
  },
  {
    "id": "ql_d_169",
    "schoolId": "hs_152004",
    "district": "奉贤",
    "count": 15
  },
  {
    "id": "ql_d_170",
    "schoolId": "hs_153001",
    "district": "奉贤",
    "count": 4
  },
  {
    "id": "ql_d_171",
    "schoolId": "hs_153004",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_172",
    "schoolId": "hs_153005",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_173",
    "schoolId": "hs_151078",
    "district": "奉贤",
    "count": 4
  },
  {
    "id": "ql_d_174",
    "schoolId": "hs_202001",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_175",
    "schoolId": "hs_162001",
    "district": "奉贤",
    "count": 5
  },
  {
    "id": "ql_d_176",
    "schoolId": "hs_172001",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_177",
    "schoolId": "hs_172002",
    "district": "奉贤",
    "count": 7
  },
  {
    "id": "ql_d_178",
    "schoolId": "hs_174005",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_179",
    "schoolId": "hs_174003",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_180",
    "schoolId": "hs_182002",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_181",
    "schoolId": "hs_182003",
    "district": "奉贤",
    "count": 6
  },
  {
    "id": "ql_d_182",
    "schoolId": "hs_212001",
    "district": "奉贤",
    "count": 5
  },
  {
    "id": "ql_d_183",
    "schoolId": "hs_214002",
    "district": "奉贤",
    "count": 2
  },
  {
    "id": "ql_d_184",
    "schoolId": "hs_222001",
    "district": "奉贤",
    "count": 3
  },
  {
    "id": "ql_d_185",
    "schoolId": "hs_042032",
    "district": "虹口",
    "count": 7
  },
  {
    "id": "ql_d_186",
    "schoolId": "hs_102056",
    "district": "虹口",
    "count": 19
  },
  {
    "id": "ql_d_187",
    "schoolId": "hs_102057",
    "district": "虹口",
    "count": 13
  },
  {
    "id": "ql_d_188",
    "schoolId": "hs_012001",
    "district": "虹口",
    "count": 9
  },
  {
    "id": "ql_d_189",
    "schoolId": "hs_012007",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_190",
    "schoolId": "hs_012008",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_191",
    "schoolId": "hs_012009",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_192",
    "schoolId": "hs_042001",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_193",
    "schoolId": "hs_032001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_194",
    "schoolId": "hs_032002",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_195",
    "schoolId": "hs_043015",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_196",
    "schoolId": "hs_052001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_197",
    "schoolId": "hs_052002",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_198",
    "schoolId": "hs_053004",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_199",
    "schoolId": "hs_062002",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_200",
    "schoolId": "hs_062003",
    "district": "虹口",
    "count": 6
  },
  {
    "id": "ql_d_201",
    "schoolId": "hs_062004",
    "district": "虹口",
    "count": 5
  },
  {
    "id": "ql_d_202",
    "schoolId": "hs_062011",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_203",
    "schoolId": "hs_063004",
    "district": "虹口",
    "count": 6
  },
  {
    "id": "ql_d_204",
    "schoolId": "hs_064001",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_205",
    "schoolId": "hs_072001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_206",
    "schoolId": "hs_072002",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_207",
    "schoolId": "hs_073003",
    "district": "虹口",
    "count": 6
  },
  {
    "id": "ql_d_208",
    "schoolId": "hs_073082",
    "district": "虹口",
    "count": 5
  },
  {
    "id": "ql_d_209",
    "schoolId": "hs_092001",
    "district": "虹口",
    "count": 8
  },
  {
    "id": "ql_d_210",
    "schoolId": "hs_092002",
    "district": "虹口",
    "count": 7
  },
  {
    "id": "ql_d_211",
    "schoolId": "hs_093001",
    "district": "虹口",
    "count": 6
  },
  {
    "id": "ql_d_212",
    "schoolId": "hs_102004",
    "district": "虹口",
    "count": 10
  },
  {
    "id": "ql_d_213",
    "schoolId": "hs_102032",
    "district": "虹口",
    "count": 10
  },
  {
    "id": "ql_d_214",
    "schoolId": "hs_103002",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_215",
    "schoolId": "hs_122001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_216",
    "schoolId": "hs_123001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_217",
    "schoolId": "hs_122002",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_218",
    "schoolId": "hs_122003",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_219",
    "schoolId": "hs_092003",
    "district": "虹口",
    "count": 5
  },
  {
    "id": "ql_d_220",
    "schoolId": "hs_132002",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_221",
    "schoolId": "hs_133001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_222",
    "schoolId": "hs_132003",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_223",
    "schoolId": "hs_133003",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_224",
    "schoolId": "hs_142001",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_225",
    "schoolId": "hs_142002",
    "district": "虹口",
    "count": 12
  },
  {
    "id": "ql_d_226",
    "schoolId": "hs_152001",
    "district": "虹口",
    "count": 10
  },
  {
    "id": "ql_d_227",
    "schoolId": "hs_152002",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_228",
    "schoolId": "hs_152004",
    "district": "虹口",
    "count": 8
  },
  {
    "id": "ql_d_229",
    "schoolId": "hs_153001",
    "district": "虹口",
    "count": 7
  },
  {
    "id": "ql_d_230",
    "schoolId": "hs_153004",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_231",
    "schoolId": "hs_153005",
    "district": "虹口",
    "count": 9
  },
  {
    "id": "ql_d_232",
    "schoolId": "hs_151078",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_233",
    "schoolId": "hs_152005",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_234",
    "schoolId": "hs_202001",
    "district": "虹口",
    "count": 1
  },
  {
    "id": "ql_d_235",
    "schoolId": "hs_162001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_236",
    "schoolId": "hs_172001",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_237",
    "schoolId": "hs_172002",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_238",
    "schoolId": "hs_174003",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_239",
    "schoolId": "hs_182002",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_240",
    "schoolId": "hs_182003",
    "district": "虹口",
    "count": 4
  },
  {
    "id": "ql_d_241",
    "schoolId": "hs_182001",
    "district": "虹口",
    "count": 3
  },
  {
    "id": "ql_d_242",
    "schoolId": "hs_212001",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_243",
    "schoolId": "hs_214002",
    "district": "虹口",
    "count": 1
  },
  {
    "id": "ql_d_244",
    "schoolId": "hs_222001",
    "district": "虹口",
    "count": 2
  },
  {
    "id": "ql_d_245",
    "schoolId": "hs_042032",
    "district": "黄浦",
    "count": 8
  },
  {
    "id": "ql_d_246",
    "schoolId": "hs_102056",
    "district": "黄浦",
    "count": 9
  },
  {
    "id": "ql_d_247",
    "schoolId": "hs_102057",
    "district": "黄浦",
    "count": 10
  },
  {
    "id": "ql_d_248",
    "schoolId": "hs_012001",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_249",
    "schoolId": "hs_012003",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_250",
    "schoolId": "hs_012005",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_251",
    "schoolId": "hs_012007",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_252",
    "schoolId": "hs_012008",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_253",
    "schoolId": "hs_012009",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_254",
    "schoolId": "hs_012010",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_255",
    "schoolId": "hs_012002",
    "district": "黄浦",
    "count": 20
  },
  {
    "id": "ql_d_256",
    "schoolId": "hs_012006",
    "district": "黄浦",
    "count": 15
  },
  {
    "id": "ql_d_257",
    "schoolId": "hs_042001",
    "district": "黄浦",
    "count": 6
  },
  {
    "id": "ql_d_258",
    "schoolId": "hs_032001",
    "district": "黄浦",
    "count": 8
  },
  {
    "id": "ql_d_259",
    "schoolId": "hs_032002",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_260",
    "schoolId": "hs_043015",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_261",
    "schoolId": "hs_052001",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_262",
    "schoolId": "hs_052002",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_263",
    "schoolId": "hs_053004",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_264",
    "schoolId": "hs_062001",
    "district": "黄浦",
    "count": 6
  },
  {
    "id": "ql_d_265",
    "schoolId": "hs_062002",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_266",
    "schoolId": "hs_062004",
    "district": "黄浦",
    "count": 5
  },
  {
    "id": "ql_d_267",
    "schoolId": "hs_062011",
    "district": "黄浦",
    "count": 1
  },
  {
    "id": "ql_d_268",
    "schoolId": "hs_063004",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_269",
    "schoolId": "hs_064001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_270",
    "schoolId": "hs_072002",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_271",
    "schoolId": "hs_073003",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_272",
    "schoolId": "hs_073082",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_273",
    "schoolId": "hs_092002",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_274",
    "schoolId": "hs_102004",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_275",
    "schoolId": "hs_102032",
    "district": "黄浦",
    "count": 7
  },
  {
    "id": "ql_d_276",
    "schoolId": "hs_122001",
    "district": "黄浦",
    "count": 5
  },
  {
    "id": "ql_d_277",
    "schoolId": "hs_123001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_278",
    "schoolId": "hs_122002",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_279",
    "schoolId": "hs_122003",
    "district": "黄浦",
    "count": 5
  },
  {
    "id": "ql_d_280",
    "schoolId": "hs_092003",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_281",
    "schoolId": "hs_132002",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_282",
    "schoolId": "hs_133001",
    "district": "黄浦",
    "count": 1
  },
  {
    "id": "ql_d_283",
    "schoolId": "hs_133003",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_284",
    "schoolId": "hs_142001",
    "district": "黄浦",
    "count": 5
  },
  {
    "id": "ql_d_285",
    "schoolId": "hs_142002",
    "district": "黄浦",
    "count": 4
  },
  {
    "id": "ql_d_286",
    "schoolId": "hs_152001",
    "district": "黄浦",
    "count": 10
  },
  {
    "id": "ql_d_287",
    "schoolId": "hs_152002",
    "district": "黄浦",
    "count": 7
  },
  {
    "id": "ql_d_288",
    "schoolId": "hs_152004",
    "district": "黄浦",
    "count": 6
  },
  {
    "id": "ql_d_289",
    "schoolId": "hs_153001",
    "district": "黄浦",
    "count": 8
  },
  {
    "id": "ql_d_290",
    "schoolId": "hs_153004",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_291",
    "schoolId": "hs_153005",
    "district": "黄浦",
    "count": 8
  },
  {
    "id": "ql_d_292",
    "schoolId": "hs_152005",
    "district": "黄浦",
    "count": 12
  },
  {
    "id": "ql_d_293",
    "schoolId": "hs_202001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_294",
    "schoolId": "hs_162001",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_295",
    "schoolId": "hs_172001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_296",
    "schoolId": "hs_172002",
    "district": "黄浦",
    "count": 5
  },
  {
    "id": "ql_d_297",
    "schoolId": "hs_174003",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_298",
    "schoolId": "hs_182002",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_299",
    "schoolId": "hs_182003",
    "district": "黄浦",
    "count": 3
  },
  {
    "id": "ql_d_300",
    "schoolId": "hs_182001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_301",
    "schoolId": "hs_212001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_302",
    "schoolId": "hs_214002",
    "district": "黄浦",
    "count": 4
  },
  {
    "id": "ql_d_303",
    "schoolId": "hs_222001",
    "district": "黄浦",
    "count": 2
  },
  {
    "id": "ql_d_304",
    "schoolId": "hs_042032",
    "district": "金山",
    "count": 4
  },
  {
    "id": "ql_d_305",
    "schoolId": "hs_102056",
    "district": "金山",
    "count": 3
  },
  {
    "id": "ql_d_306",
    "schoolId": "hs_102057",
    "district": "金山",
    "count": 4
  },
  {
    "id": "ql_d_307",
    "schoolId": "hs_152006",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_308",
    "schoolId": "hs_042001",
    "district": "金山",
    "count": 3
  },
  {
    "id": "ql_d_309",
    "schoolId": "hs_032001",
    "district": "金山",
    "count": 5
  },
  {
    "id": "ql_d_310",
    "schoolId": "hs_032002",
    "district": "金山",
    "count": 5
  },
  {
    "id": "ql_d_311",
    "schoolId": "hs_043015",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_312",
    "schoolId": "hs_052002",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_313",
    "schoolId": "hs_053004",
    "district": "金山",
    "count": 1
  },
  {
    "id": "ql_d_314",
    "schoolId": "hs_062002",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_315",
    "schoolId": "hs_073003",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_316",
    "schoolId": "hs_092002",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_317",
    "schoolId": "hs_093001",
    "district": "金山",
    "count": 1
  },
  {
    "id": "ql_d_318",
    "schoolId": "hs_102004",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_319",
    "schoolId": "hs_122001",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_320",
    "schoolId": "hs_123001",
    "district": "金山",
    "count": 5
  },
  {
    "id": "ql_d_321",
    "schoolId": "hs_122003",
    "district": "金山",
    "count": 3
  },
  {
    "id": "ql_d_322",
    "schoolId": "hs_132002",
    "district": "金山",
    "count": 1
  },
  {
    "id": "ql_d_323",
    "schoolId": "hs_133001",
    "district": "金山",
    "count": 1
  },
  {
    "id": "ql_d_324",
    "schoolId": "hs_142001",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_325",
    "schoolId": "hs_142002",
    "district": "金山",
    "count": 4
  },
  {
    "id": "ql_d_326",
    "schoolId": "hs_152001",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_327",
    "schoolId": "hs_152002",
    "district": "金山",
    "count": 7
  },
  {
    "id": "ql_d_328",
    "schoolId": "hs_152004",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_329",
    "schoolId": "hs_153001",
    "district": "金山",
    "count": 4
  },
  {
    "id": "ql_d_330",
    "schoolId": "hs_153004",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_331",
    "schoolId": "hs_153005",
    "district": "金山",
    "count": 1
  },
  {
    "id": "ql_d_332",
    "schoolId": "hs_151078",
    "district": "金山",
    "count": 4
  },
  {
    "id": "ql_d_333",
    "schoolId": "hs_202001",
    "district": "金山",
    "count": 8
  },
  {
    "id": "ql_d_334",
    "schoolId": "hs_162001",
    "district": "金山",
    "count": 8
  },
  {
    "id": "ql_d_335",
    "schoolId": "hs_172001",
    "district": "金山",
    "count": 12
  },
  {
    "id": "ql_d_336",
    "schoolId": "hs_172002",
    "district": "金山",
    "count": 5
  },
  {
    "id": "ql_d_337",
    "schoolId": "hs_174003",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_338",
    "schoolId": "hs_182002",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_339",
    "schoolId": "hs_182003",
    "district": "金山",
    "count": 6
  },
  {
    "id": "ql_d_340",
    "schoolId": "hs_182001",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_341",
    "schoolId": "hs_212001",
    "district": "金山",
    "count": 15
  },
  {
    "id": "ql_d_342",
    "schoolId": "hs_214002",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_343",
    "schoolId": "hs_222001",
    "district": "金山",
    "count": 2
  },
  {
    "id": "ql_d_344",
    "schoolId": "hs_042032",
    "district": "静安",
    "count": 9
  },
  {
    "id": "ql_d_345",
    "schoolId": "hs_102056",
    "district": "静安",
    "count": 28
  },
  {
    "id": "ql_d_346",
    "schoolId": "hs_102057",
    "district": "静安",
    "count": 24
  },
  {
    "id": "ql_d_347",
    "schoolId": "hs_012001",
    "district": "静安",
    "count": 24
  },
  {
    "id": "ql_d_348",
    "schoolId": "hs_012003",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_349",
    "schoolId": "hs_012005",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_350",
    "schoolId": "hs_012008",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_351",
    "schoolId": "hs_012009",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_352",
    "schoolId": "hs_042001",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_353",
    "schoolId": "hs_032001",
    "district": "静安",
    "count": 10
  },
  {
    "id": "ql_d_354",
    "schoolId": "hs_032002",
    "district": "静安",
    "count": 3
  },
  {
    "id": "ql_d_355",
    "schoolId": "hs_043015",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_356",
    "schoolId": "hs_042036",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_357",
    "schoolId": "hs_052001",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_358",
    "schoolId": "hs_052002",
    "district": "静安",
    "count": 8
  },
  {
    "id": "ql_d_359",
    "schoolId": "hs_053004",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_360",
    "schoolId": "hs_062001",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_361",
    "schoolId": "hs_062002",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_362",
    "schoolId": "hs_062003",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_363",
    "schoolId": "hs_062004",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_364",
    "schoolId": "hs_062011",
    "district": "静安",
    "count": 3
  },
  {
    "id": "ql_d_365",
    "schoolId": "hs_063004",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_366",
    "schoolId": "hs_064001",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_367",
    "schoolId": "hs_072001",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_368",
    "schoolId": "hs_072002",
    "district": "静安",
    "count": 13
  },
  {
    "id": "ql_d_369",
    "schoolId": "hs_073003",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_370",
    "schoolId": "hs_073082",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_371",
    "schoolId": "hs_092001",
    "district": "静安",
    "count": 12
  },
  {
    "id": "ql_d_372",
    "schoolId": "hs_092002",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_373",
    "schoolId": "hs_093001",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_374",
    "schoolId": "hs_102004",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_375",
    "schoolId": "hs_102032",
    "district": "静安",
    "count": 10
  },
  {
    "id": "ql_d_376",
    "schoolId": "hs_103002",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_377",
    "schoolId": "hs_122001",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_378",
    "schoolId": "hs_123001",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_379",
    "schoolId": "hs_122002",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_380",
    "schoolId": "hs_122003",
    "district": "静安",
    "count": 3
  },
  {
    "id": "ql_d_381",
    "schoolId": "hs_122004",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_382",
    "schoolId": "hs_092003",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_383",
    "schoolId": "hs_132002",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_384",
    "schoolId": "hs_133001",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_385",
    "schoolId": "hs_132003",
    "district": "静安",
    "count": 3
  },
  {
    "id": "ql_d_386",
    "schoolId": "hs_133003",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_387",
    "schoolId": "hs_142001",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_388",
    "schoolId": "hs_142002",
    "district": "静安",
    "count": 8
  },
  {
    "id": "ql_d_389",
    "schoolId": "hs_142004",
    "district": "静安",
    "count": 1
  },
  {
    "id": "ql_d_390",
    "schoolId": "hs_152001",
    "district": "静安",
    "count": 9
  },
  {
    "id": "ql_d_391",
    "schoolId": "hs_152002",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_392",
    "schoolId": "hs_152004",
    "district": "静安",
    "count": 8
  },
  {
    "id": "ql_d_393",
    "schoolId": "hs_153001",
    "district": "静安",
    "count": 9
  },
  {
    "id": "ql_d_394",
    "schoolId": "hs_153004",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_395",
    "schoolId": "hs_153005",
    "district": "静安",
    "count": 9
  },
  {
    "id": "ql_d_396",
    "schoolId": "hs_151078",
    "district": "静安",
    "count": 7
  },
  {
    "id": "ql_d_397",
    "schoolId": "hs_152005",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_398",
    "schoolId": "hs_202001",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_399",
    "schoolId": "hs_162001",
    "district": "静安",
    "count": 3
  },
  {
    "id": "ql_d_400",
    "schoolId": "hs_172001",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_401",
    "schoolId": "hs_172002",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_402",
    "schoolId": "hs_174003",
    "district": "静安",
    "count": 3
  },
  {
    "id": "ql_d_403",
    "schoolId": "hs_182002",
    "district": "静安",
    "count": 4
  },
  {
    "id": "ql_d_404",
    "schoolId": "hs_182003",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_405",
    "schoolId": "hs_182001",
    "district": "静安",
    "count": 5
  },
  {
    "id": "ql_d_406",
    "schoolId": "hs_212001",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_407",
    "schoolId": "hs_214002",
    "district": "静安",
    "count": 6
  },
  {
    "id": "ql_d_408",
    "schoolId": "hs_222001",
    "district": "静安",
    "count": 2
  },
  {
    "id": "ql_d_409",
    "schoolId": "hs_042032",
    "district": "闵行",
    "count": 55
  },
  {
    "id": "ql_d_410",
    "schoolId": "hs_102056",
    "district": "闵行",
    "count": 36
  },
  {
    "id": "ql_d_411",
    "schoolId": "hs_102057",
    "district": "闵行",
    "count": 30
  },
  {
    "id": "ql_d_412",
    "schoolId": "hs_152006",
    "district": "闵行",
    "count": 39
  },
  {
    "id": "ql_d_413",
    "schoolId": "hs_012001",
    "district": "闵行",
    "count": 6
  },
  {
    "id": "ql_d_414",
    "schoolId": "hs_012003",
    "district": "闵行",
    "count": 20
  },
  {
    "id": "ql_d_415",
    "schoolId": "hs_012007",
    "district": "闵行",
    "count": 15
  },
  {
    "id": "ql_d_416",
    "schoolId": "hs_012008",
    "district": "闵行",
    "count": 11
  },
  {
    "id": "ql_d_417",
    "schoolId": "hs_012009",
    "district": "闵行",
    "count": 10
  },
  {
    "id": "ql_d_418",
    "schoolId": "hs_012010",
    "district": "闵行",
    "count": 20
  },
  {
    "id": "ql_d_419",
    "schoolId": "hs_012006",
    "district": "闵行",
    "count": 23
  },
  {
    "id": "ql_d_420",
    "schoolId": "hs_032001",
    "district": "闵行",
    "count": 16
  },
  {
    "id": "ql_d_421",
    "schoolId": "hs_032002",
    "district": "闵行",
    "count": 33
  },
  {
    "id": "ql_d_422",
    "schoolId": "hs_043015",
    "district": "闵行",
    "count": 20
  },
  {
    "id": "ql_d_423",
    "schoolId": "hs_042002",
    "district": "闵行",
    "count": 13
  },
  {
    "id": "ql_d_424",
    "schoolId": "hs_042036",
    "district": "闵行",
    "count": 10
  },
  {
    "id": "ql_d_425",
    "schoolId": "hs_052001",
    "district": "闵行",
    "count": 4
  },
  {
    "id": "ql_d_426",
    "schoolId": "hs_052002",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_427",
    "schoolId": "hs_053004",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_428",
    "schoolId": "hs_062001",
    "district": "闵行",
    "count": 5
  },
  {
    "id": "ql_d_429",
    "schoolId": "hs_062002",
    "district": "闵行",
    "count": 5
  },
  {
    "id": "ql_d_430",
    "schoolId": "hs_062003",
    "district": "闵行",
    "count": 2
  },
  {
    "id": "ql_d_431",
    "schoolId": "hs_062004",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_432",
    "schoolId": "hs_062011",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_433",
    "schoolId": "hs_063004",
    "district": "闵行",
    "count": 2
  },
  {
    "id": "ql_d_434",
    "schoolId": "hs_064001",
    "district": "闵行",
    "count": 2
  },
  {
    "id": "ql_d_435",
    "schoolId": "hs_072002",
    "district": "闵行",
    "count": 6
  },
  {
    "id": "ql_d_436",
    "schoolId": "hs_073003",
    "district": "闵行",
    "count": 4
  },
  {
    "id": "ql_d_437",
    "schoolId": "hs_092002",
    "district": "闵行",
    "count": 1
  },
  {
    "id": "ql_d_438",
    "schoolId": "hs_093001",
    "district": "闵行",
    "count": 4
  },
  {
    "id": "ql_d_439",
    "schoolId": "hs_102004",
    "district": "闵行",
    "count": 4
  },
  {
    "id": "ql_d_440",
    "schoolId": "hs_102032",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_441",
    "schoolId": "hs_103002",
    "district": "闵行",
    "count": 1
  },
  {
    "id": "ql_d_442",
    "schoolId": "hs_122001",
    "district": "闵行",
    "count": 12
  },
  {
    "id": "ql_d_443",
    "schoolId": "hs_123001",
    "district": "闵行",
    "count": 12
  },
  {
    "id": "ql_d_444",
    "schoolId": "hs_122002",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_445",
    "schoolId": "hs_122003",
    "district": "闵行",
    "count": 9
  },
  {
    "id": "ql_d_446",
    "schoolId": "hs_122004",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_447",
    "schoolId": "hs_092003",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_448",
    "schoolId": "hs_132002",
    "district": "闵行",
    "count": 14
  },
  {
    "id": "ql_d_449",
    "schoolId": "hs_133001",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_450",
    "schoolId": "hs_132003",
    "district": "闵行",
    "count": 2
  },
  {
    "id": "ql_d_451",
    "schoolId": "hs_133003",
    "district": "闵行",
    "count": 5
  },
  {
    "id": "ql_d_452",
    "schoolId": "hs_142001",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_453",
    "schoolId": "hs_142002",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_454",
    "schoolId": "hs_142004",
    "district": "闵行",
    "count": 2
  },
  {
    "id": "ql_d_455",
    "schoolId": "hs_152001",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_456",
    "schoolId": "hs_152002",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_457",
    "schoolId": "hs_152004",
    "district": "闵行",
    "count": 14
  },
  {
    "id": "ql_d_458",
    "schoolId": "hs_153001",
    "district": "闵行",
    "count": 10
  },
  {
    "id": "ql_d_459",
    "schoolId": "hs_153004",
    "district": "闵行",
    "count": 6
  },
  {
    "id": "ql_d_460",
    "schoolId": "hs_153005",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_461",
    "schoolId": "hs_151078",
    "district": "闵行",
    "count": 16
  },
  {
    "id": "ql_d_462",
    "schoolId": "hs_152005",
    "district": "闵行",
    "count": 4
  },
  {
    "id": "ql_d_463",
    "schoolId": "hs_202001",
    "district": "闵行",
    "count": 14
  },
  {
    "id": "ql_d_464",
    "schoolId": "hs_162001",
    "district": "闵行",
    "count": 10
  },
  {
    "id": "ql_d_465",
    "schoolId": "hs_172001",
    "district": "闵行",
    "count": 12
  },
  {
    "id": "ql_d_466",
    "schoolId": "hs_172002",
    "district": "闵行",
    "count": 7
  },
  {
    "id": "ql_d_467",
    "schoolId": "hs_174005",
    "district": "闵行",
    "count": 5
  },
  {
    "id": "ql_d_468",
    "schoolId": "hs_174004",
    "district": "闵行",
    "count": 10
  },
  {
    "id": "ql_d_469",
    "schoolId": "hs_174003",
    "district": "闵行",
    "count": 16
  },
  {
    "id": "ql_d_470",
    "schoolId": "hs_182002",
    "district": "闵行",
    "count": 15
  },
  {
    "id": "ql_d_471",
    "schoolId": "hs_182003",
    "district": "闵行",
    "count": 14
  },
  {
    "id": "ql_d_472",
    "schoolId": "hs_182001",
    "district": "闵行",
    "count": 5
  },
  {
    "id": "ql_d_473",
    "schoolId": "hs_212001",
    "district": "闵行",
    "count": 16
  },
  {
    "id": "ql_d_474",
    "schoolId": "hs_214002",
    "district": "闵行",
    "count": 6
  },
  {
    "id": "ql_d_475",
    "schoolId": "hs_222001",
    "district": "闵行",
    "count": 8
  },
  {
    "id": "ql_d_476",
    "schoolId": "hs_042032",
    "district": "浦东",
    "count": 43
  },
  {
    "id": "ql_d_477",
    "schoolId": "hs_102056",
    "district": "浦东",
    "count": 66
  },
  {
    "id": "ql_d_478",
    "schoolId": "hs_102057",
    "district": "浦东",
    "count": 42
  },
  {
    "id": "ql_d_479",
    "schoolId": "hs_152006",
    "district": "浦东",
    "count": 105
  },
  {
    "id": "ql_d_480",
    "schoolId": "hs_155001",
    "district": "浦东",
    "count": 52
  },
  {
    "id": "ql_d_481",
    "schoolId": "hs_012001",
    "district": "浦东",
    "count": 25
  },
  {
    "id": "ql_d_482",
    "schoolId": "hs_012003",
    "district": "浦东",
    "count": 60
  },
  {
    "id": "ql_d_483",
    "schoolId": "hs_012005",
    "district": "浦东",
    "count": 27
  },
  {
    "id": "ql_d_484",
    "schoolId": "hs_012007",
    "district": "浦东",
    "count": 59
  },
  {
    "id": "ql_d_485",
    "schoolId": "hs_012008",
    "district": "浦东",
    "count": 46
  },
  {
    "id": "ql_d_486",
    "schoolId": "hs_012009",
    "district": "浦东",
    "count": 45
  },
  {
    "id": "ql_d_487",
    "schoolId": "hs_012010",
    "district": "浦东",
    "count": 35
  },
  {
    "id": "ql_d_488",
    "schoolId": "hs_042001",
    "district": "浦东",
    "count": 3
  },
  {
    "id": "ql_d_489",
    "schoolId": "hs_032001",
    "district": "浦东",
    "count": 9
  },
  {
    "id": "ql_d_490",
    "schoolId": "hs_032002",
    "district": "浦东",
    "count": 14
  },
  {
    "id": "ql_d_491",
    "schoolId": "hs_043015",
    "district": "浦东",
    "count": 20
  },
  {
    "id": "ql_d_492",
    "schoolId": "hs_042036",
    "district": "浦东",
    "count": 6
  },
  {
    "id": "ql_d_493",
    "schoolId": "hs_052001",
    "district": "浦东",
    "count": 9
  },
  {
    "id": "ql_d_494",
    "schoolId": "hs_052002",
    "district": "浦东",
    "count": 10
  },
  {
    "id": "ql_d_495",
    "schoolId": "hs_053004",
    "district": "浦东",
    "count": 8
  },
  {
    "id": "ql_d_496",
    "schoolId": "hs_062001",
    "district": "浦东",
    "count": 15
  },
  {
    "id": "ql_d_497",
    "schoolId": "hs_062002",
    "district": "浦东",
    "count": 13
  },
  {
    "id": "ql_d_498",
    "schoolId": "hs_062003",
    "district": "浦东",
    "count": 5
  },
  {
    "id": "ql_d_499",
    "schoolId": "hs_062004",
    "district": "浦东",
    "count": 20
  },
  {
    "id": "ql_d_500",
    "schoolId": "hs_062011",
    "district": "浦东",
    "count": 10
  },
  {
    "id": "ql_d_501",
    "schoolId": "hs_063004",
    "district": "浦东",
    "count": 13
  },
  {
    "id": "ql_d_502",
    "schoolId": "hs_064001",
    "district": "浦东",
    "count": 13
  },
  {
    "id": "ql_d_503",
    "schoolId": "hs_072001",
    "district": "浦东",
    "count": 7
  },
  {
    "id": "ql_d_504",
    "schoolId": "hs_072002",
    "district": "浦东",
    "count": 16
  },
  {
    "id": "ql_d_505",
    "schoolId": "hs_073003",
    "district": "浦东",
    "count": 7
  },
  {
    "id": "ql_d_506",
    "schoolId": "hs_092001",
    "district": "浦东",
    "count": 15
  },
  {
    "id": "ql_d_507",
    "schoolId": "hs_092002",
    "district": "浦东",
    "count": 19
  },
  {
    "id": "ql_d_508",
    "schoolId": "hs_093001",
    "district": "浦东",
    "count": 15
  },
  {
    "id": "ql_d_509",
    "schoolId": "hs_102004",
    "district": "浦东",
    "count": 33
  },
  {
    "id": "ql_d_510",
    "schoolId": "hs_102032",
    "district": "浦东",
    "count": 22
  },
  {
    "id": "ql_d_511",
    "schoolId": "hs_103002",
    "district": "浦东",
    "count": 48
  },
  {
    "id": "ql_d_512",
    "schoolId": "hs_122001",
    "district": "浦东",
    "count": 22
  },
  {
    "id": "ql_d_513",
    "schoolId": "hs_123001",
    "district": "浦东",
    "count": 28
  },
  {
    "id": "ql_d_514",
    "schoolId": "hs_122002",
    "district": "浦东",
    "count": 18
  },
  {
    "id": "ql_d_515",
    "schoolId": "hs_122003",
    "district": "浦东",
    "count": 15
  },
  {
    "id": "ql_d_516",
    "schoolId": "hs_122004",
    "district": "浦东",
    "count": 20
  },
  {
    "id": "ql_d_517",
    "schoolId": "hs_092003",
    "district": "浦东",
    "count": 20
  },
  {
    "id": "ql_d_518",
    "schoolId": "hs_132002",
    "district": "浦东",
    "count": 22
  },
  {
    "id": "ql_d_519",
    "schoolId": "hs_133001",
    "district": "浦东",
    "count": 24
  },
  {
    "id": "ql_d_520",
    "schoolId": "hs_132003",
    "district": "浦东",
    "count": 4
  },
  {
    "id": "ql_d_521",
    "schoolId": "hs_133003",
    "district": "浦东",
    "count": 6
  },
  {
    "id": "ql_d_522",
    "schoolId": "hs_142001",
    "district": "浦东",
    "count": 10
  },
  {
    "id": "ql_d_523",
    "schoolId": "hs_142002",
    "district": "浦东",
    "count": 10
  },
  {
    "id": "ql_d_524",
    "schoolId": "hs_142004",
    "district": "浦东",
    "count": 5
  },
  {
    "id": "ql_d_525",
    "schoolId": "hs_152001",
    "district": "浦东",
    "count": 11
  },
  {
    "id": "ql_d_526",
    "schoolId": "hs_152002",
    "district": "浦东",
    "count": 11
  },
  {
    "id": "ql_d_527",
    "schoolId": "hs_152004",
    "district": "浦东",
    "count": 14
  },
  {
    "id": "ql_d_528",
    "schoolId": "hs_153001",
    "district": "浦东",
    "count": 11
  },
  {
    "id": "ql_d_529",
    "schoolId": "hs_153004",
    "district": "浦东",
    "count": 10
  },
  {
    "id": "ql_d_530",
    "schoolId": "hs_153005",
    "district": "浦东",
    "count": 9
  },
  {
    "id": "ql_d_531",
    "schoolId": "hs_151078",
    "district": "浦东",
    "count": 14
  },
  {
    "id": "ql_d_532",
    "schoolId": "hs_152005",
    "district": "浦东",
    "count": 6
  },
  {
    "id": "ql_d_533",
    "schoolId": "hs_202001",
    "district": "浦东",
    "count": 12
  },
  {
    "id": "ql_d_534",
    "schoolId": "hs_162001",
    "district": "浦东",
    "count": 13
  },
  {
    "id": "ql_d_535",
    "schoolId": "hs_172001",
    "district": "浦东",
    "count": 11
  },
  {
    "id": "ql_d_536",
    "schoolId": "hs_172002",
    "district": "浦东",
    "count": 8
  },
  {
    "id": "ql_d_537",
    "schoolId": "hs_174005",
    "district": "浦东",
    "count": 16
  },
  {
    "id": "ql_d_538",
    "schoolId": "hs_174004",
    "district": "浦东",
    "count": 2
  },
  {
    "id": "ql_d_539",
    "schoolId": "hs_174003",
    "district": "浦东",
    "count": 13
  },
  {
    "id": "ql_d_540",
    "schoolId": "hs_182002",
    "district": "浦东",
    "count": 12
  },
  {
    "id": "ql_d_541",
    "schoolId": "hs_182003",
    "district": "浦东",
    "count": 13
  },
  {
    "id": "ql_d_542",
    "schoolId": "hs_182001",
    "district": "浦东",
    "count": 5
  },
  {
    "id": "ql_d_543",
    "schoolId": "hs_212001",
    "district": "浦东",
    "count": 20
  },
  {
    "id": "ql_d_544",
    "schoolId": "hs_214002",
    "district": "浦东",
    "count": 10
  },
  {
    "id": "ql_d_545",
    "schoolId": "hs_222001",
    "district": "浦东",
    "count": 8
  },
  {
    "id": "ql_d_546",
    "schoolId": "hs_042032",
    "district": "普陀",
    "count": 10
  },
  {
    "id": "ql_d_547",
    "schoolId": "hs_102056",
    "district": "普陀",
    "count": 22
  },
  {
    "id": "ql_d_548",
    "schoolId": "hs_102057",
    "district": "普陀",
    "count": 14
  },
  {
    "id": "ql_d_549",
    "schoolId": "hs_152006",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_550",
    "schoolId": "hs_012001",
    "district": "普陀",
    "count": 10
  },
  {
    "id": "ql_d_551",
    "schoolId": "hs_012003",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_552",
    "schoolId": "hs_012005",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_553",
    "schoolId": "hs_012007",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_554",
    "schoolId": "hs_012008",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_555",
    "schoolId": "hs_012009",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_556",
    "schoolId": "hs_042001",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_557",
    "schoolId": "hs_032001",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_558",
    "schoolId": "hs_032002",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_559",
    "schoolId": "hs_043015",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_560",
    "schoolId": "hs_042036",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_561",
    "schoolId": "hs_052001",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_562",
    "schoolId": "hs_052002",
    "district": "普陀",
    "count": 9
  },
  {
    "id": "ql_d_563",
    "schoolId": "hs_053004",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_564",
    "schoolId": "hs_062001",
    "district": "普陀",
    "count": 12
  },
  {
    "id": "ql_d_565",
    "schoolId": "hs_062002",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_566",
    "schoolId": "hs_062003",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_567",
    "schoolId": "hs_062004",
    "district": "普陀",
    "count": 7
  },
  {
    "id": "ql_d_568",
    "schoolId": "hs_062011",
    "district": "普陀",
    "count": 7
  },
  {
    "id": "ql_d_569",
    "schoolId": "hs_063004",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_570",
    "schoolId": "hs_064001",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_571",
    "schoolId": "hs_072001",
    "district": "普陀",
    "count": 8
  },
  {
    "id": "ql_d_572",
    "schoolId": "hs_072002",
    "district": "普陀",
    "count": 8
  },
  {
    "id": "ql_d_573",
    "schoolId": "hs_073003",
    "district": "普陀",
    "count": 9
  },
  {
    "id": "ql_d_574",
    "schoolId": "hs_073082",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_575",
    "schoolId": "hs_092001",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_576",
    "schoolId": "hs_092002",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_577",
    "schoolId": "hs_093001",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_578",
    "schoolId": "hs_102004",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_579",
    "schoolId": "hs_102032",
    "district": "普陀",
    "count": 7
  },
  {
    "id": "ql_d_580",
    "schoolId": "hs_103002",
    "district": "普陀",
    "count": 1
  },
  {
    "id": "ql_d_581",
    "schoolId": "hs_122001",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_582",
    "schoolId": "hs_123001",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_583",
    "schoolId": "hs_122002",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_584",
    "schoolId": "hs_122003",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_585",
    "schoolId": "hs_122004",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_586",
    "schoolId": "hs_092003",
    "district": "普陀",
    "count": 7
  },
  {
    "id": "ql_d_587",
    "schoolId": "hs_132002",
    "district": "普陀",
    "count": 9
  },
  {
    "id": "ql_d_588",
    "schoolId": "hs_133001",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_589",
    "schoolId": "hs_132003",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_590",
    "schoolId": "hs_142001",
    "district": "普陀",
    "count": 6
  },
  {
    "id": "ql_d_591",
    "schoolId": "hs_142002",
    "district": "普陀",
    "count": 12
  },
  {
    "id": "ql_d_592",
    "schoolId": "hs_142004",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_593",
    "schoolId": "hs_152001",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_594",
    "schoolId": "hs_152002",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_595",
    "schoolId": "hs_152004",
    "district": "普陀",
    "count": 8
  },
  {
    "id": "ql_d_596",
    "schoolId": "hs_153001",
    "district": "普陀",
    "count": 9
  },
  {
    "id": "ql_d_597",
    "schoolId": "hs_153004",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_598",
    "schoolId": "hs_153005",
    "district": "普陀",
    "count": 8
  },
  {
    "id": "ql_d_599",
    "schoolId": "hs_152005",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_600",
    "schoolId": "hs_202001",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_601",
    "schoolId": "hs_162001",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_602",
    "schoolId": "hs_172001",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_603",
    "schoolId": "hs_172002",
    "district": "普陀",
    "count": 5
  },
  {
    "id": "ql_d_604",
    "schoolId": "hs_174003",
    "district": "普陀",
    "count": 1
  },
  {
    "id": "ql_d_605",
    "schoolId": "hs_182002",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_606",
    "schoolId": "hs_182003",
    "district": "普陀",
    "count": 4
  },
  {
    "id": "ql_d_607",
    "schoolId": "hs_182001",
    "district": "普陀",
    "count": 3
  },
  {
    "id": "ql_d_608",
    "schoolId": "hs_212001",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_609",
    "schoolId": "hs_222001",
    "district": "普陀",
    "count": 2
  },
  {
    "id": "ql_d_610",
    "schoolId": "hs_042032",
    "district": "青浦",
    "count": 4
  },
  {
    "id": "ql_d_611",
    "schoolId": "hs_102056",
    "district": "青浦",
    "count": 7
  },
  {
    "id": "ql_d_612",
    "schoolId": "hs_102057",
    "district": "青浦",
    "count": 4
  },
  {
    "id": "ql_d_613",
    "schoolId": "hs_152006",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_614",
    "schoolId": "hs_012003",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_615",
    "schoolId": "hs_042001",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_616",
    "schoolId": "hs_032001",
    "district": "青浦",
    "count": 4
  },
  {
    "id": "ql_d_617",
    "schoolId": "hs_032002",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_618",
    "schoolId": "hs_043015",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_619",
    "schoolId": "hs_052001",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_620",
    "schoolId": "hs_052002",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_621",
    "schoolId": "hs_053004",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_622",
    "schoolId": "hs_062002",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_623",
    "schoolId": "hs_062003",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_624",
    "schoolId": "hs_062011",
    "district": "青浦",
    "count": 1
  },
  {
    "id": "ql_d_625",
    "schoolId": "hs_072001",
    "district": "青浦",
    "count": 1
  },
  {
    "id": "ql_d_626",
    "schoolId": "hs_072002",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_627",
    "schoolId": "hs_073003",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_628",
    "schoolId": "hs_092002",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_629",
    "schoolId": "hs_102004",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_630",
    "schoolId": "hs_102032",
    "district": "青浦",
    "count": 1
  },
  {
    "id": "ql_d_631",
    "schoolId": "hs_122001",
    "district": "青浦",
    "count": 8
  },
  {
    "id": "ql_d_632",
    "schoolId": "hs_123001",
    "district": "青浦",
    "count": 6
  },
  {
    "id": "ql_d_633",
    "schoolId": "hs_122003",
    "district": "青浦",
    "count": 4
  },
  {
    "id": "ql_d_634",
    "schoolId": "hs_122004",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_635",
    "schoolId": "hs_092003",
    "district": "青浦",
    "count": 5
  },
  {
    "id": "ql_d_636",
    "schoolId": "hs_132002",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_637",
    "schoolId": "hs_133001",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_638",
    "schoolId": "hs_133003",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_639",
    "schoolId": "hs_142001",
    "district": "青浦",
    "count": 5
  },
  {
    "id": "ql_d_640",
    "schoolId": "hs_142002",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_641",
    "schoolId": "hs_142004",
    "district": "青浦",
    "count": 4
  },
  {
    "id": "ql_d_642",
    "schoolId": "hs_152001",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_643",
    "schoolId": "hs_152002",
    "district": "青浦",
    "count": 5
  },
  {
    "id": "ql_d_644",
    "schoolId": "hs_152004",
    "district": "青浦",
    "count": 5
  },
  {
    "id": "ql_d_645",
    "schoolId": "hs_153001",
    "district": "青浦",
    "count": 5
  },
  {
    "id": "ql_d_646",
    "schoolId": "hs_153004",
    "district": "青浦",
    "count": 6
  },
  {
    "id": "ql_d_647",
    "schoolId": "hs_153005",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_648",
    "schoolId": "hs_202001",
    "district": "青浦",
    "count": 5
  },
  {
    "id": "ql_d_649",
    "schoolId": "hs_162001",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_650",
    "schoolId": "hs_172001",
    "district": "青浦",
    "count": 11
  },
  {
    "id": "ql_d_651",
    "schoolId": "hs_172002",
    "district": "青浦",
    "count": 8
  },
  {
    "id": "ql_d_652",
    "schoolId": "hs_174003",
    "district": "青浦",
    "count": 10
  },
  {
    "id": "ql_d_653",
    "schoolId": "hs_182002",
    "district": "青浦",
    "count": 12
  },
  {
    "id": "ql_d_654",
    "schoolId": "hs_182003",
    "district": "青浦",
    "count": 13
  },
  {
    "id": "ql_d_655",
    "schoolId": "hs_182001",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_656",
    "schoolId": "hs_212001",
    "district": "青浦",
    "count": 3
  },
  {
    "id": "ql_d_657",
    "schoolId": "hs_222001",
    "district": "青浦",
    "count": 2
  },
  {
    "id": "ql_d_658",
    "schoolId": "hs_042032",
    "district": "松江",
    "count": 10
  },
  {
    "id": "ql_d_659",
    "schoolId": "hs_102056",
    "district": "松江",
    "count": 15
  },
  {
    "id": "ql_d_660",
    "schoolId": "hs_102057",
    "district": "松江",
    "count": 10
  },
  {
    "id": "ql_d_661",
    "schoolId": "hs_152006",
    "district": "松江",
    "count": 9
  },
  {
    "id": "ql_d_662",
    "schoolId": "hs_012001",
    "district": "松江",
    "count": 9
  },
  {
    "id": "ql_d_663",
    "schoolId": "hs_012003",
    "district": "松江",
    "count": 8
  },
  {
    "id": "ql_d_664",
    "schoolId": "hs_012008",
    "district": "松江",
    "count": 5
  },
  {
    "id": "ql_d_665",
    "schoolId": "hs_012009",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_666",
    "schoolId": "hs_012010",
    "district": "松江",
    "count": 15
  },
  {
    "id": "ql_d_667",
    "schoolId": "hs_042001",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_668",
    "schoolId": "hs_032001",
    "district": "松江",
    "count": 5
  },
  {
    "id": "ql_d_669",
    "schoolId": "hs_032002",
    "district": "松江",
    "count": 4
  },
  {
    "id": "ql_d_670",
    "schoolId": "hs_043015",
    "district": "松江",
    "count": 6
  },
  {
    "id": "ql_d_671",
    "schoolId": "hs_042036",
    "district": "松江",
    "count": 2
  },
  {
    "id": "ql_d_672",
    "schoolId": "hs_052001",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_673",
    "schoolId": "hs_052002",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_674",
    "schoolId": "hs_053004",
    "district": "松江",
    "count": 2
  },
  {
    "id": "ql_d_675",
    "schoolId": "hs_062002",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_676",
    "schoolId": "hs_062011",
    "district": "松江",
    "count": 1
  },
  {
    "id": "ql_d_677",
    "schoolId": "hs_064001",
    "district": "松江",
    "count": 1
  },
  {
    "id": "ql_d_678",
    "schoolId": "hs_072001",
    "district": "松江",
    "count": 10
  },
  {
    "id": "ql_d_679",
    "schoolId": "hs_072002",
    "district": "松江",
    "count": 2
  },
  {
    "id": "ql_d_680",
    "schoolId": "hs_073003",
    "district": "松江",
    "count": 4
  },
  {
    "id": "ql_d_681",
    "schoolId": "hs_092002",
    "district": "松江",
    "count": 6
  },
  {
    "id": "ql_d_682",
    "schoolId": "hs_093001",
    "district": "松江",
    "count": 2
  },
  {
    "id": "ql_d_683",
    "schoolId": "hs_102004",
    "district": "松江",
    "count": 6
  },
  {
    "id": "ql_d_684",
    "schoolId": "hs_102032",
    "district": "松江",
    "count": 1
  },
  {
    "id": "ql_d_685",
    "schoolId": "hs_122001",
    "district": "松江",
    "count": 16
  },
  {
    "id": "ql_d_686",
    "schoolId": "hs_123001",
    "district": "松江",
    "count": 11
  },
  {
    "id": "ql_d_687",
    "schoolId": "hs_122003",
    "district": "松江",
    "count": 11
  },
  {
    "id": "ql_d_688",
    "schoolId": "hs_122004",
    "district": "松江",
    "count": 4
  },
  {
    "id": "ql_d_689",
    "schoolId": "hs_092003",
    "district": "松江",
    "count": 1
  },
  {
    "id": "ql_d_690",
    "schoolId": "hs_132002",
    "district": "松江",
    "count": 2
  },
  {
    "id": "ql_d_691",
    "schoolId": "hs_133001",
    "district": "松江",
    "count": 7
  },
  {
    "id": "ql_d_692",
    "schoolId": "hs_142001",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_693",
    "schoolId": "hs_142002",
    "district": "松江",
    "count": 2
  },
  {
    "id": "ql_d_694",
    "schoolId": "hs_142004",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_695",
    "schoolId": "hs_152001",
    "district": "松江",
    "count": 5
  },
  {
    "id": "ql_d_696",
    "schoolId": "hs_152002",
    "district": "松江",
    "count": 10
  },
  {
    "id": "ql_d_697",
    "schoolId": "hs_152004",
    "district": "松江",
    "count": 7
  },
  {
    "id": "ql_d_698",
    "schoolId": "hs_153001",
    "district": "松江",
    "count": 8
  },
  {
    "id": "ql_d_699",
    "schoolId": "hs_153004",
    "district": "松江",
    "count": 10
  },
  {
    "id": "ql_d_700",
    "schoolId": "hs_153005",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_701",
    "schoolId": "hs_151078",
    "district": "松江",
    "count": 7
  },
  {
    "id": "ql_d_702",
    "schoolId": "hs_202001",
    "district": "松江",
    "count": 12
  },
  {
    "id": "ql_d_703",
    "schoolId": "hs_162001",
    "district": "松江",
    "count": 7
  },
  {
    "id": "ql_d_704",
    "schoolId": "hs_172001",
    "district": "松江",
    "count": 8
  },
  {
    "id": "ql_d_705",
    "schoolId": "hs_172002",
    "district": "松江",
    "count": 8
  },
  {
    "id": "ql_d_706",
    "schoolId": "hs_174005",
    "district": "松江",
    "count": 3
  },
  {
    "id": "ql_d_707",
    "schoolId": "hs_174004",
    "district": "松江",
    "count": 1
  },
  {
    "id": "ql_d_708",
    "schoolId": "hs_174003",
    "district": "松江",
    "count": 8
  },
  {
    "id": "ql_d_709",
    "schoolId": "hs_182002",
    "district": "松江",
    "count": 16
  },
  {
    "id": "ql_d_710",
    "schoolId": "hs_182003",
    "district": "松江",
    "count": 13
  },
  {
    "id": "ql_d_711",
    "schoolId": "hs_182001",
    "district": "松江",
    "count": 6
  },
  {
    "id": "ql_d_712",
    "schoolId": "hs_212001",
    "district": "松江",
    "count": 8
  },
  {
    "id": "ql_d_713",
    "schoolId": "hs_222001",
    "district": "松江",
    "count": 6
  },
  {
    "id": "ql_d_714",
    "schoolId": "hs_042032",
    "district": "徐汇",
    "count": 92
  },
  {
    "id": "ql_d_715",
    "schoolId": "hs_102056",
    "district": "徐汇",
    "count": 21
  },
  {
    "id": "ql_d_716",
    "schoolId": "hs_102057",
    "district": "徐汇",
    "count": 17
  },
  {
    "id": "ql_d_717",
    "schoolId": "hs_152006",
    "district": "徐汇",
    "count": 20
  },
  {
    "id": "ql_d_718",
    "schoolId": "hs_012001",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_719",
    "schoolId": "hs_012003",
    "district": "徐汇",
    "count": 15
  },
  {
    "id": "ql_d_720",
    "schoolId": "hs_012005",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_721",
    "schoolId": "hs_012007",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_722",
    "schoolId": "hs_012008",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_723",
    "schoolId": "hs_012009",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_724",
    "schoolId": "hs_012010",
    "district": "徐汇",
    "count": 13
  },
  {
    "id": "ql_d_725",
    "schoolId": "hs_042001",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_726",
    "schoolId": "hs_032001",
    "district": "徐汇",
    "count": 9
  },
  {
    "id": "ql_d_727",
    "schoolId": "hs_032002",
    "district": "徐汇",
    "count": 9
  },
  {
    "id": "ql_d_728",
    "schoolId": "hs_043015",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_729",
    "schoolId": "hs_042002",
    "district": "徐汇",
    "count": 40
  },
  {
    "id": "ql_d_730",
    "schoolId": "hs_042036",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_731",
    "schoolId": "hs_052001",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_732",
    "schoolId": "hs_052002",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_733",
    "schoolId": "hs_053004",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_734",
    "schoolId": "hs_062001",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_735",
    "schoolId": "hs_062002",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_736",
    "schoolId": "hs_062003",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_737",
    "schoolId": "hs_062004",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_738",
    "schoolId": "hs_062011",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_739",
    "schoolId": "hs_063004",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_740",
    "schoolId": "hs_064001",
    "district": "徐汇",
    "count": 5
  },
  {
    "id": "ql_d_741",
    "schoolId": "hs_072002",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_742",
    "schoolId": "hs_073003",
    "district": "徐汇",
    "count": 6
  },
  {
    "id": "ql_d_743",
    "schoolId": "hs_073082",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_744",
    "schoolId": "hs_093001",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_745",
    "schoolId": "hs_102004",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_746",
    "schoolId": "hs_102032",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_747",
    "schoolId": "hs_122001",
    "district": "徐汇",
    "count": 16
  },
  {
    "id": "ql_d_748",
    "schoolId": "hs_123001",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_749",
    "schoolId": "hs_122002",
    "district": "徐汇",
    "count": 15
  },
  {
    "id": "ql_d_750",
    "schoolId": "hs_122003",
    "district": "徐汇",
    "count": 9
  },
  {
    "id": "ql_d_751",
    "schoolId": "hs_122004",
    "district": "徐汇",
    "count": 14
  },
  {
    "id": "ql_d_752",
    "schoolId": "hs_132002",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_753",
    "schoolId": "hs_133001",
    "district": "徐汇",
    "count": 1
  },
  {
    "id": "ql_d_754",
    "schoolId": "hs_132003",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_755",
    "schoolId": "hs_133003",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_756",
    "schoolId": "hs_142001",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_757",
    "schoolId": "hs_142002",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_758",
    "schoolId": "hs_142004",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_759",
    "schoolId": "hs_152001",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_760",
    "schoolId": "hs_152002",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_761",
    "schoolId": "hs_152004",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_762",
    "schoolId": "hs_153001",
    "district": "徐汇",
    "count": 6
  },
  {
    "id": "ql_d_763",
    "schoolId": "hs_153004",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_764",
    "schoolId": "hs_153005",
    "district": "徐汇",
    "count": 6
  },
  {
    "id": "ql_d_765",
    "schoolId": "hs_151078",
    "district": "徐汇",
    "count": 12
  },
  {
    "id": "ql_d_766",
    "schoolId": "hs_152005",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_767",
    "schoolId": "hs_202001",
    "district": "徐汇",
    "count": 8
  },
  {
    "id": "ql_d_768",
    "schoolId": "hs_162001",
    "district": "徐汇",
    "count": 5
  },
  {
    "id": "ql_d_769",
    "schoolId": "hs_172001",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_770",
    "schoolId": "hs_172002",
    "district": "徐汇",
    "count": 5
  },
  {
    "id": "ql_d_771",
    "schoolId": "hs_174005",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_772",
    "schoolId": "hs_174004",
    "district": "徐汇",
    "count": 5
  },
  {
    "id": "ql_d_773",
    "schoolId": "hs_174003",
    "district": "徐汇",
    "count": 5
  },
  {
    "id": "ql_d_774",
    "schoolId": "hs_182002",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_775",
    "schoolId": "hs_182003",
    "district": "徐汇",
    "count": 4
  },
  {
    "id": "ql_d_776",
    "schoolId": "hs_182001",
    "district": "徐汇",
    "count": 3
  },
  {
    "id": "ql_d_777",
    "schoolId": "hs_212001",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_778",
    "schoolId": "hs_214002",
    "district": "徐汇",
    "count": 7
  },
  {
    "id": "ql_d_779",
    "schoolId": "hs_222001",
    "district": "徐汇",
    "count": 2
  },
  {
    "id": "ql_d_780",
    "schoolId": "hs_042032",
    "district": "杨浦",
    "count": 8
  },
  {
    "id": "ql_d_781",
    "schoolId": "hs_102056",
    "district": "杨浦",
    "count": 45
  },
  {
    "id": "ql_d_782",
    "schoolId": "hs_102057",
    "district": "杨浦",
    "count": 45
  },
  {
    "id": "ql_d_783",
    "schoolId": "hs_012001",
    "district": "杨浦",
    "count": 9
  },
  {
    "id": "ql_d_784",
    "schoolId": "hs_012005",
    "district": "杨浦",
    "count": 6
  },
  {
    "id": "ql_d_785",
    "schoolId": "hs_012007",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_786",
    "schoolId": "hs_012008",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_787",
    "schoolId": "hs_012009",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_788",
    "schoolId": "hs_042001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_789",
    "schoolId": "hs_032001",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_790",
    "schoolId": "hs_032002",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_791",
    "schoolId": "hs_043015",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_792",
    "schoolId": "hs_042036",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_793",
    "schoolId": "hs_052001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_794",
    "schoolId": "hs_052002",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_795",
    "schoolId": "hs_053004",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_796",
    "schoolId": "hs_062001",
    "district": "杨浦",
    "count": 5
  },
  {
    "id": "ql_d_797",
    "schoolId": "hs_062002",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_798",
    "schoolId": "hs_062003",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_799",
    "schoolId": "hs_062004",
    "district": "杨浦",
    "count": 6
  },
  {
    "id": "ql_d_800",
    "schoolId": "hs_062011",
    "district": "杨浦",
    "count": 6
  },
  {
    "id": "ql_d_801",
    "schoolId": "hs_063004",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_802",
    "schoolId": "hs_072001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_803",
    "schoolId": "hs_072002",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_804",
    "schoolId": "hs_073003",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_805",
    "schoolId": "hs_092001",
    "district": "杨浦",
    "count": 16
  },
  {
    "id": "ql_d_806",
    "schoolId": "hs_092002",
    "district": "杨浦",
    "count": 14
  },
  {
    "id": "ql_d_807",
    "schoolId": "hs_093001",
    "district": "杨浦",
    "count": 11
  },
  {
    "id": "ql_d_808",
    "schoolId": "hs_102004",
    "district": "杨浦",
    "count": 10
  },
  {
    "id": "ql_d_809",
    "schoolId": "hs_102032",
    "district": "杨浦",
    "count": 10
  },
  {
    "id": "ql_d_810",
    "schoolId": "hs_103002",
    "district": "杨浦",
    "count": 8
  },
  {
    "id": "ql_d_811",
    "schoolId": "hs_122001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_812",
    "schoolId": "hs_123001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_813",
    "schoolId": "hs_122002",
    "district": "杨浦",
    "count": 5
  },
  {
    "id": "ql_d_814",
    "schoolId": "hs_122003",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_815",
    "schoolId": "hs_122004",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_816",
    "schoolId": "hs_092003",
    "district": "杨浦",
    "count": 8
  },
  {
    "id": "ql_d_817",
    "schoolId": "hs_132002",
    "district": "杨浦",
    "count": 10
  },
  {
    "id": "ql_d_818",
    "schoolId": "hs_133001",
    "district": "杨浦",
    "count": 10
  },
  {
    "id": "ql_d_819",
    "schoolId": "hs_132003",
    "district": "杨浦",
    "count": 5
  },
  {
    "id": "ql_d_820",
    "schoolId": "hs_133003",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_821",
    "schoolId": "hs_142001",
    "district": "杨浦",
    "count": 7
  },
  {
    "id": "ql_d_822",
    "schoolId": "hs_142002",
    "district": "杨浦",
    "count": 10
  },
  {
    "id": "ql_d_823",
    "schoolId": "hs_142004",
    "district": "杨浦",
    "count": 1
  },
  {
    "id": "ql_d_824",
    "schoolId": "hs_152001",
    "district": "杨浦",
    "count": 12
  },
  {
    "id": "ql_d_825",
    "schoolId": "hs_152002",
    "district": "杨浦",
    "count": 7
  },
  {
    "id": "ql_d_826",
    "schoolId": "hs_152004",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_827",
    "schoolId": "hs_153001",
    "district": "杨浦",
    "count": 10
  },
  {
    "id": "ql_d_828",
    "schoolId": "hs_153004",
    "district": "杨浦",
    "count": 6
  },
  {
    "id": "ql_d_829",
    "schoolId": "hs_153005",
    "district": "杨浦",
    "count": 8
  },
  {
    "id": "ql_d_830",
    "schoolId": "hs_151078",
    "district": "杨浦",
    "count": 12
  },
  {
    "id": "ql_d_831",
    "schoolId": "hs_152005",
    "district": "杨浦",
    "count": 11
  },
  {
    "id": "ql_d_832",
    "schoolId": "hs_202001",
    "district": "杨浦",
    "count": 1
  },
  {
    "id": "ql_d_833",
    "schoolId": "hs_162001",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_834",
    "schoolId": "hs_172001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_835",
    "schoolId": "hs_172002",
    "district": "杨浦",
    "count": 4
  },
  {
    "id": "ql_d_836",
    "schoolId": "hs_174005",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_837",
    "schoolId": "hs_174003",
    "district": "杨浦",
    "count": 1
  },
  {
    "id": "ql_d_838",
    "schoolId": "hs_182002",
    "district": "杨浦",
    "count": 5
  },
  {
    "id": "ql_d_839",
    "schoolId": "hs_182003",
    "district": "杨浦",
    "count": 6
  },
  {
    "id": "ql_d_840",
    "schoolId": "hs_182001",
    "district": "杨浦",
    "count": 3
  },
  {
    "id": "ql_d_841",
    "schoolId": "hs_212001",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_842",
    "schoolId": "hs_214002",
    "district": "杨浦",
    "count": 1
  },
  {
    "id": "ql_d_843",
    "schoolId": "hs_222001",
    "district": "杨浦",
    "count": 2
  },
  {
    "id": "ql_d_844",
    "schoolId": "hs_042032",
    "district": "长宁",
    "count": 9
  },
  {
    "id": "ql_d_845",
    "schoolId": "hs_102056",
    "district": "长宁",
    "count": 8
  },
  {
    "id": "ql_d_846",
    "schoolId": "hs_102057",
    "district": "长宁",
    "count": 9
  },
  {
    "id": "ql_d_847",
    "schoolId": "hs_152006",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_848",
    "schoolId": "hs_012001",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_849",
    "schoolId": "hs_012005",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_850",
    "schoolId": "hs_012007",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_851",
    "schoolId": "hs_012008",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_852",
    "schoolId": "hs_042001",
    "district": "长宁",
    "count": 6
  },
  {
    "id": "ql_d_853",
    "schoolId": "hs_032001",
    "district": "长宁",
    "count": 6
  },
  {
    "id": "ql_d_854",
    "schoolId": "hs_032002",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_855",
    "schoolId": "hs_043015",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_856",
    "schoolId": "hs_052001",
    "district": "长宁",
    "count": 5
  },
  {
    "id": "ql_d_857",
    "schoolId": "hs_052002",
    "district": "长宁",
    "count": 6
  },
  {
    "id": "ql_d_858",
    "schoolId": "hs_053004",
    "district": "长宁",
    "count": 5
  },
  {
    "id": "ql_d_859",
    "schoolId": "hs_062001",
    "district": "长宁",
    "count": 7
  },
  {
    "id": "ql_d_860",
    "schoolId": "hs_062002",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_861",
    "schoolId": "hs_062003",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_862",
    "schoolId": "hs_062004",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_863",
    "schoolId": "hs_062011",
    "district": "长宁",
    "count": 1
  },
  {
    "id": "ql_d_864",
    "schoolId": "hs_063004",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_865",
    "schoolId": "hs_064001",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_866",
    "schoolId": "hs_072001",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_867",
    "schoolId": "hs_072002",
    "district": "长宁",
    "count": 6
  },
  {
    "id": "ql_d_868",
    "schoolId": "hs_073003",
    "district": "长宁",
    "count": 5
  },
  {
    "id": "ql_d_869",
    "schoolId": "hs_073082",
    "district": "长宁",
    "count": 5
  },
  {
    "id": "ql_d_870",
    "schoolId": "hs_092001",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_871",
    "schoolId": "hs_092002",
    "district": "长宁",
    "count": 1
  },
  {
    "id": "ql_d_872",
    "schoolId": "hs_102004",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_873",
    "schoolId": "hs_122001",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_874",
    "schoolId": "hs_123001",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_875",
    "schoolId": "hs_122002",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_876",
    "schoolId": "hs_122003",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_877",
    "schoolId": "hs_122004",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_878",
    "schoolId": "hs_092003",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_879",
    "schoolId": "hs_132002",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_880",
    "schoolId": "hs_133001",
    "district": "长宁",
    "count": 1
  },
  {
    "id": "ql_d_881",
    "schoolId": "hs_132003",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_882",
    "schoolId": "hs_133003",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_883",
    "schoolId": "hs_142001",
    "district": "长宁",
    "count": 6
  },
  {
    "id": "ql_d_884",
    "schoolId": "hs_142002",
    "district": "长宁",
    "count": 7
  },
  {
    "id": "ql_d_885",
    "schoolId": "hs_142004",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_886",
    "schoolId": "hs_152001",
    "district": "长宁",
    "count": 6
  },
  {
    "id": "ql_d_887",
    "schoolId": "hs_152002",
    "district": "长宁",
    "count": 7
  },
  {
    "id": "ql_d_888",
    "schoolId": "hs_152004",
    "district": "长宁",
    "count": 10
  },
  {
    "id": "ql_d_889",
    "schoolId": "hs_153001",
    "district": "长宁",
    "count": 5
  },
  {
    "id": "ql_d_890",
    "schoolId": "hs_153004",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_891",
    "schoolId": "hs_153005",
    "district": "长宁",
    "count": 7
  },
  {
    "id": "ql_d_892",
    "schoolId": "hs_151078",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_893",
    "schoolId": "hs_202001",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_894",
    "schoolId": "hs_162001",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_895",
    "schoolId": "hs_172001",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_896",
    "schoolId": "hs_172002",
    "district": "长宁",
    "count": 5
  },
  {
    "id": "ql_d_897",
    "schoolId": "hs_174003",
    "district": "长宁",
    "count": 1
  },
  {
    "id": "ql_d_898",
    "schoolId": "hs_182002",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_899",
    "schoolId": "hs_182003",
    "district": "长宁",
    "count": 4
  },
  {
    "id": "ql_d_900",
    "schoolId": "hs_182001",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_901",
    "schoolId": "hs_212001",
    "district": "长宁",
    "count": 2
  },
  {
    "id": "ql_d_902",
    "schoolId": "hs_214002",
    "district": "长宁",
    "count": 3
  },
  {
    "id": "ql_d_903",
    "schoolId": "hs_222001",
    "district": "长宁",
    "count": 2
  }
];

export const schoolQuotaLines: SchoolQuotaLine[] = [
  {
    "id": "ql_s_0",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_558",
    "count": 10
  },
  {
    "id": "ql_s_1",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_558",
    "count": 9
  },
  {
    "id": "ql_s_2",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_558",
    "count": 9
  },
  {
    "id": "ql_s_3",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_558",
    "count": 10
  },
  {
    "id": "ql_s_4",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_558",
    "count": 5
  },
  {
    "id": "ql_s_5",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_558",
    "count": 7
  },
  {
    "id": "ql_s_6",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_558",
    "count": 5
  },
  {
    "id": "ql_s_7",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_559",
    "count": 5
  },
  {
    "id": "ql_s_8",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_559",
    "count": 5
  },
  {
    "id": "ql_s_9",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_559",
    "count": 5
  },
  {
    "id": "ql_s_10",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_559",
    "count": 5
  },
  {
    "id": "ql_s_11",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_559",
    "count": 3
  },
  {
    "id": "ql_s_12",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_559",
    "count": 4
  },
  {
    "id": "ql_s_13",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_559",
    "count": 3
  },
  {
    "id": "ql_s_14",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_15",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_16",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_17",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_18",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_19",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_20",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_560",
    "count": 2
  },
  {
    "id": "ql_s_21",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_22",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_23",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_24",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_25",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_26",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_27",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_561",
    "count": 2
  },
  {
    "id": "ql_s_28",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_561",
    "count": 1
  },
  {
    "id": "ql_s_29",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_562",
    "count": 3
  },
  {
    "id": "ql_s_30",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_562",
    "count": 2
  },
  {
    "id": "ql_s_31",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_562",
    "count": 2
  },
  {
    "id": "ql_s_32",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_562",
    "count": 3
  },
  {
    "id": "ql_s_33",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_562",
    "count": 2
  },
  {
    "id": "ql_s_34",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_562",
    "count": 2
  },
  {
    "id": "ql_s_35",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_562",
    "count": 2
  },
  {
    "id": "ql_s_36",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_563",
    "count": 4
  },
  {
    "id": "ql_s_37",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_563",
    "count": 4
  },
  {
    "id": "ql_s_38",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_563",
    "count": 4
  },
  {
    "id": "ql_s_39",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_563",
    "count": 4
  },
  {
    "id": "ql_s_40",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_563",
    "count": 3
  },
  {
    "id": "ql_s_41",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_563",
    "count": 3
  },
  {
    "id": "ql_s_42",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_563",
    "count": 3
  },
  {
    "id": "ql_s_43",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_564",
    "count": 7
  },
  {
    "id": "ql_s_44",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_564",
    "count": 6
  },
  {
    "id": "ql_s_45",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_564",
    "count": 6
  },
  {
    "id": "ql_s_46",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_564",
    "count": 7
  },
  {
    "id": "ql_s_47",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_564",
    "count": 4
  },
  {
    "id": "ql_s_48",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_564",
    "count": 5
  },
  {
    "id": "ql_s_49",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_564",
    "count": 4
  },
  {
    "id": "ql_s_50",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_565",
    "count": 8
  },
  {
    "id": "ql_s_51",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_565",
    "count": 8
  },
  {
    "id": "ql_s_52",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_565",
    "count": 8
  },
  {
    "id": "ql_s_53",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_565",
    "count": 9
  },
  {
    "id": "ql_s_54",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_565",
    "count": 5
  },
  {
    "id": "ql_s_55",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_565",
    "count": 6
  },
  {
    "id": "ql_s_56",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_565",
    "count": 5
  },
  {
    "id": "ql_s_57",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_566",
    "count": 3
  },
  {
    "id": "ql_s_58",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_566",
    "count": 3
  },
  {
    "id": "ql_s_59",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_566",
    "count": 3
  },
  {
    "id": "ql_s_60",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_566",
    "count": 3
  },
  {
    "id": "ql_s_61",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_566",
    "count": 2
  },
  {
    "id": "ql_s_62",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_566",
    "count": 2
  },
  {
    "id": "ql_s_63",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_566",
    "count": 2
  },
  {
    "id": "ql_s_64",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_566",
    "count": 1
  },
  {
    "id": "ql_s_65",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_66",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_67",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_68",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_69",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_70",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_71",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_72",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_567",
    "count": 1
  },
  {
    "id": "ql_s_73",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_568",
    "count": 10
  },
  {
    "id": "ql_s_74",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_568",
    "count": 9
  },
  {
    "id": "ql_s_75",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_568",
    "count": 9
  },
  {
    "id": "ql_s_76",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_568",
    "count": 11
  },
  {
    "id": "ql_s_77",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_568",
    "count": 6
  },
  {
    "id": "ql_s_78",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_568",
    "count": 7
  },
  {
    "id": "ql_s_79",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_568",
    "count": 6
  },
  {
    "id": "ql_s_80",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_569",
    "count": 20
  },
  {
    "id": "ql_s_81",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_569",
    "count": 19
  },
  {
    "id": "ql_s_82",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_569",
    "count": 19
  },
  {
    "id": "ql_s_83",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_569",
    "count": 22
  },
  {
    "id": "ql_s_84",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_569",
    "count": 11
  },
  {
    "id": "ql_s_85",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_569",
    "count": 14
  },
  {
    "id": "ql_s_86",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_569",
    "count": 11
  },
  {
    "id": "ql_s_87",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_570",
    "count": 7
  },
  {
    "id": "ql_s_88",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_570",
    "count": 6
  },
  {
    "id": "ql_s_89",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_570",
    "count": 6
  },
  {
    "id": "ql_s_90",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_570",
    "count": 7
  },
  {
    "id": "ql_s_91",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_570",
    "count": 4
  },
  {
    "id": "ql_s_92",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_570",
    "count": 5
  },
  {
    "id": "ql_s_93",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_570",
    "count": 4
  },
  {
    "id": "ql_s_94",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_571",
    "count": 3
  },
  {
    "id": "ql_s_95",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_571",
    "count": 3
  },
  {
    "id": "ql_s_96",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_571",
    "count": 3
  },
  {
    "id": "ql_s_97",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_571",
    "count": 3
  },
  {
    "id": "ql_s_98",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_571",
    "count": 2
  },
  {
    "id": "ql_s_99",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_571",
    "count": 2
  },
  {
    "id": "ql_s_100",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_571",
    "count": 2
  },
  {
    "id": "ql_s_101",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_572",
    "count": 6
  },
  {
    "id": "ql_s_102",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_572",
    "count": 6
  },
  {
    "id": "ql_s_103",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_572",
    "count": 6
  },
  {
    "id": "ql_s_104",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_572",
    "count": 7
  },
  {
    "id": "ql_s_105",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_572",
    "count": 4
  },
  {
    "id": "ql_s_106",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_572",
    "count": 5
  },
  {
    "id": "ql_s_107",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_572",
    "count": 4
  },
  {
    "id": "ql_s_108",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_572",
    "count": 1
  },
  {
    "id": "ql_s_109",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_573",
    "count": 3
  },
  {
    "id": "ql_s_110",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_573",
    "count": 3
  },
  {
    "id": "ql_s_111",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_573",
    "count": 3
  },
  {
    "id": "ql_s_112",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_573",
    "count": 4
  },
  {
    "id": "ql_s_113",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_573",
    "count": 2
  },
  {
    "id": "ql_s_114",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_573",
    "count": 3
  },
  {
    "id": "ql_s_115",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_573",
    "count": 2
  },
  {
    "id": "ql_s_116",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_117",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_118",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_119",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_120",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_121",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_122",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_574",
    "count": 2
  },
  {
    "id": "ql_s_123",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_575",
    "count": 5
  },
  {
    "id": "ql_s_124",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_575",
    "count": 5
  },
  {
    "id": "ql_s_125",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_575",
    "count": 5
  },
  {
    "id": "ql_s_126",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_575",
    "count": 5
  },
  {
    "id": "ql_s_127",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_575",
    "count": 3
  },
  {
    "id": "ql_s_128",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_575",
    "count": 4
  },
  {
    "id": "ql_s_129",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_575",
    "count": 3
  },
  {
    "id": "ql_s_130",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_576",
    "count": 3
  },
  {
    "id": "ql_s_131",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_576",
    "count": 3
  },
  {
    "id": "ql_s_132",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_576",
    "count": 3
  },
  {
    "id": "ql_s_133",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_576",
    "count": 3
  },
  {
    "id": "ql_s_134",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_576",
    "count": 2
  },
  {
    "id": "ql_s_135",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_576",
    "count": 2
  },
  {
    "id": "ql_s_136",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_576",
    "count": 2
  },
  {
    "id": "ql_s_137",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_576",
    "count": 1
  },
  {
    "id": "ql_s_138",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_577",
    "count": 3
  },
  {
    "id": "ql_s_139",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_577",
    "count": 3
  },
  {
    "id": "ql_s_140",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_577",
    "count": 3
  },
  {
    "id": "ql_s_141",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_577",
    "count": 3
  },
  {
    "id": "ql_s_142",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_577",
    "count": 21
  },
  {
    "id": "ql_s_143",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_577",
    "count": 2
  },
  {
    "id": "ql_s_144",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_577",
    "count": 2
  },
  {
    "id": "ql_s_145",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_578",
    "count": 3
  },
  {
    "id": "ql_s_146",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_578",
    "count": 2
  },
  {
    "id": "ql_s_147",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_578",
    "count": 2
  },
  {
    "id": "ql_s_148",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_578",
    "count": 3
  },
  {
    "id": "ql_s_149",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_578",
    "count": 2
  },
  {
    "id": "ql_s_150",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_578",
    "count": 2
  },
  {
    "id": "ql_s_151",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_578",
    "count": 2
  },
  {
    "id": "ql_s_152",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_579",
    "count": 3
  },
  {
    "id": "ql_s_153",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_579",
    "count": 3
  },
  {
    "id": "ql_s_154",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_579",
    "count": 3
  },
  {
    "id": "ql_s_155",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_579",
    "count": 4
  },
  {
    "id": "ql_s_156",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_579",
    "count": 2
  },
  {
    "id": "ql_s_157",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_579",
    "count": 3
  },
  {
    "id": "ql_s_158",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_579",
    "count": 2
  },
  {
    "id": "ql_s_159",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_579",
    "count": 1
  },
  {
    "id": "ql_s_160",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_580",
    "count": 4
  },
  {
    "id": "ql_s_161",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_580",
    "count": 4
  },
  {
    "id": "ql_s_162",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_580",
    "count": 4
  },
  {
    "id": "ql_s_163",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_580",
    "count": 4
  },
  {
    "id": "ql_s_164",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_580",
    "count": 3
  },
  {
    "id": "ql_s_165",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_580",
    "count": 3
  },
  {
    "id": "ql_s_166",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_580",
    "count": 3
  },
  {
    "id": "ql_s_167",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_581",
    "count": 4
  },
  {
    "id": "ql_s_168",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_581",
    "count": 4
  },
  {
    "id": "ql_s_169",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_581",
    "count": 4
  },
  {
    "id": "ql_s_170",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_581",
    "count": 4
  },
  {
    "id": "ql_s_171",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_581",
    "count": 3
  },
  {
    "id": "ql_s_172",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_581",
    "count": 3
  },
  {
    "id": "ql_s_173",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_581",
    "count": 2
  },
  {
    "id": "ql_s_174",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_582",
    "count": 3
  },
  {
    "id": "ql_s_175",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_582",
    "count": 3
  },
  {
    "id": "ql_s_176",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_582",
    "count": 3
  },
  {
    "id": "ql_s_177",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_582",
    "count": 3
  },
  {
    "id": "ql_s_178",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_582",
    "count": 2
  },
  {
    "id": "ql_s_179",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_582",
    "count": 2
  },
  {
    "id": "ql_s_180",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_582",
    "count": 2
  },
  {
    "id": "ql_s_181",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_582",
    "count": 1
  },
  {
    "id": "ql_s_182",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_583",
    "count": 5
  },
  {
    "id": "ql_s_183",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_583",
    "count": 5
  },
  {
    "id": "ql_s_184",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_583",
    "count": 5
  },
  {
    "id": "ql_s_185",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_583",
    "count": 6
  },
  {
    "id": "ql_s_186",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_583",
    "count": 3
  },
  {
    "id": "ql_s_187",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_583",
    "count": 4
  },
  {
    "id": "ql_s_188",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_583",
    "count": 3
  },
  {
    "id": "ql_s_189",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_583",
    "count": 1
  },
  {
    "id": "ql_s_190",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_584",
    "count": 2
  },
  {
    "id": "ql_s_191",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_584",
    "count": 2
  },
  {
    "id": "ql_s_192",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_584",
    "count": 2
  },
  {
    "id": "ql_s_193",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_584",
    "count": 2
  },
  {
    "id": "ql_s_194",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_584",
    "count": 1
  },
  {
    "id": "ql_s_195",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_584",
    "count": 2
  },
  {
    "id": "ql_s_196",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_584",
    "count": 1
  },
  {
    "id": "ql_s_197",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_584",
    "count": 1
  },
  {
    "id": "ql_s_198",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_585",
    "count": 4
  },
  {
    "id": "ql_s_199",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_585",
    "count": 4
  },
  {
    "id": "ql_s_200",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_585",
    "count": 4
  },
  {
    "id": "ql_s_201",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_585",
    "count": 4
  },
  {
    "id": "ql_s_202",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_585",
    "count": 3
  },
  {
    "id": "ql_s_203",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_585",
    "count": 3
  },
  {
    "id": "ql_s_204",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_585",
    "count": 2
  },
  {
    "id": "ql_s_205",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_586",
    "count": 6
  },
  {
    "id": "ql_s_206",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_586",
    "count": 5
  },
  {
    "id": "ql_s_207",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_586",
    "count": 5
  },
  {
    "id": "ql_s_208",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_586",
    "count": 6
  },
  {
    "id": "ql_s_209",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_586",
    "count": 3
  },
  {
    "id": "ql_s_210",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_586",
    "count": 4
  },
  {
    "id": "ql_s_211",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_586",
    "count": 3
  },
  {
    "id": "ql_s_212",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_586",
    "count": 1
  },
  {
    "id": "ql_s_213",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_587",
    "count": 4
  },
  {
    "id": "ql_s_214",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_587",
    "count": 4
  },
  {
    "id": "ql_s_215",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_587",
    "count": 4
  },
  {
    "id": "ql_s_216",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_587",
    "count": 5
  },
  {
    "id": "ql_s_217",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_587",
    "count": 3
  },
  {
    "id": "ql_s_218",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_587",
    "count": 3
  },
  {
    "id": "ql_s_219",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_587",
    "count": 3
  },
  {
    "id": "ql_s_220",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_587",
    "count": 1
  },
  {
    "id": "ql_s_221",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_222",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_223",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_224",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_225",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_226",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_227",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_588",
    "count": 2
  },
  {
    "id": "ql_s_228",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_588",
    "count": 1
  },
  {
    "id": "ql_s_229",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_589",
    "count": 2
  },
  {
    "id": "ql_s_230",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_589",
    "count": 2
  },
  {
    "id": "ql_s_231",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_589",
    "count": 2
  },
  {
    "id": "ql_s_232",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_589",
    "count": 2
  },
  {
    "id": "ql_s_233",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_589",
    "count": 1
  },
  {
    "id": "ql_s_234",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_589",
    "count": 2
  },
  {
    "id": "ql_s_235",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_589",
    "count": 2
  },
  {
    "id": "ql_s_236",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_590",
    "count": 5
  },
  {
    "id": "ql_s_237",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_590",
    "count": 4
  },
  {
    "id": "ql_s_238",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_590",
    "count": 4
  },
  {
    "id": "ql_s_239",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_590",
    "count": 5
  },
  {
    "id": "ql_s_240",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_590",
    "count": 3
  },
  {
    "id": "ql_s_241",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_590",
    "count": 3
  },
  {
    "id": "ql_s_242",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_590",
    "count": 3
  },
  {
    "id": "ql_s_243",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_590",
    "count": 1
  },
  {
    "id": "ql_s_244",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_245",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_246",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_247",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_248",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_249",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_250",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_591",
    "count": 2
  },
  {
    "id": "ql_s_251",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_591",
    "count": 1
  },
  {
    "id": "ql_s_252",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_592",
    "count": 3
  },
  {
    "id": "ql_s_253",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_592",
    "count": 3
  },
  {
    "id": "ql_s_254",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_592",
    "count": 3
  },
  {
    "id": "ql_s_255",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_592",
    "count": 3
  },
  {
    "id": "ql_s_256",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_592",
    "count": 2
  },
  {
    "id": "ql_s_257",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_592",
    "count": 2
  },
  {
    "id": "ql_s_258",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_592",
    "count": 2
  },
  {
    "id": "ql_s_259",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_593",
    "count": 2
  },
  {
    "id": "ql_s_260",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_593",
    "count": 2
  },
  {
    "id": "ql_s_261",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_593",
    "count": 2
  },
  {
    "id": "ql_s_262",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_593",
    "count": 2
  },
  {
    "id": "ql_s_263",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_593",
    "count": 1
  },
  {
    "id": "ql_s_264",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_593",
    "count": 2
  },
  {
    "id": "ql_s_265",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_593",
    "count": 1
  },
  {
    "id": "ql_s_266",
    "schoolId": "hs_062001",
    "middleSchoolId": "ms_594",
    "count": 3
  },
  {
    "id": "ql_s_267",
    "schoolId": "hs_062002",
    "middleSchoolId": "ms_594",
    "count": 3
  },
  {
    "id": "ql_s_268",
    "schoolId": "hs_062003",
    "middleSchoolId": "ms_594",
    "count": 3
  },
  {
    "id": "ql_s_269",
    "schoolId": "hs_062004",
    "middleSchoolId": "ms_594",
    "count": 3
  },
  {
    "id": "ql_s_270",
    "schoolId": "hs_062011",
    "middleSchoolId": "ms_594",
    "count": 2
  },
  {
    "id": "ql_s_271",
    "schoolId": "hs_063004",
    "middleSchoolId": "ms_594",
    "count": 2
  },
  {
    "id": "ql_s_272",
    "schoolId": "hs_064001",
    "middleSchoolId": "ms_594",
    "count": 2
  },
  {
    "id": "ql_s_273",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_594",
    "count": 1
  },
  {
    "id": "ql_s_274",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_76",
    "count": 8
  },
  {
    "id": "ql_s_275",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_76",
    "count": 8
  },
  {
    "id": "ql_s_276",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_76",
    "count": 8
  },
  {
    "id": "ql_s_277",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_76",
    "count": 2
  },
  {
    "id": "ql_s_278",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_77",
    "count": 6
  },
  {
    "id": "ql_s_279",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_77",
    "count": 6
  },
  {
    "id": "ql_s_280",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_77",
    "count": 6
  },
  {
    "id": "ql_s_281",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_77",
    "count": 3
  },
  {
    "id": "ql_s_282",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_77",
    "count": 2
  },
  {
    "id": "ql_s_283",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_78",
    "count": 1
  },
  {
    "id": "ql_s_284",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_78",
    "count": 1
  },
  {
    "id": "ql_s_285",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_78",
    "count": 1
  },
  {
    "id": "ql_s_286",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_78",
    "count": 1
  },
  {
    "id": "ql_s_287",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_78",
    "count": 1
  },
  {
    "id": "ql_s_288",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_79",
    "count": 1
  },
  {
    "id": "ql_s_289",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_79",
    "count": 2
  },
  {
    "id": "ql_s_290",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_79",
    "count": 1
  },
  {
    "id": "ql_s_291",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_79",
    "count": 1
  },
  {
    "id": "ql_s_292",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_79",
    "count": 1
  },
  {
    "id": "ql_s_293",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_80",
    "count": 10
  },
  {
    "id": "ql_s_294",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_80",
    "count": 7
  },
  {
    "id": "ql_s_295",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_80",
    "count": 7
  },
  {
    "id": "ql_s_296",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_80",
    "count": 3
  },
  {
    "id": "ql_s_297",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_80",
    "count": 2
  },
  {
    "id": "ql_s_298",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_81",
    "count": 2
  },
  {
    "id": "ql_s_299",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_81",
    "count": 2
  },
  {
    "id": "ql_s_300",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_81",
    "count": 3
  },
  {
    "id": "ql_s_301",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_81",
    "count": 2
  },
  {
    "id": "ql_s_302",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_81",
    "count": 1
  },
  {
    "id": "ql_s_303",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_82",
    "count": 3
  },
  {
    "id": "ql_s_304",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_82",
    "count": 3
  },
  {
    "id": "ql_s_305",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_82",
    "count": 4
  },
  {
    "id": "ql_s_306",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_82",
    "count": 1
  },
  {
    "id": "ql_s_307",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_82",
    "count": 1
  },
  {
    "id": "ql_s_308",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_83",
    "count": 3
  },
  {
    "id": "ql_s_309",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_83",
    "count": 4
  },
  {
    "id": "ql_s_310",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_83",
    "count": 4
  },
  {
    "id": "ql_s_311",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_83",
    "count": 1
  },
  {
    "id": "ql_s_312",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_83",
    "count": 1
  },
  {
    "id": "ql_s_313",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_84",
    "count": 1
  },
  {
    "id": "ql_s_314",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_84",
    "count": 1
  },
  {
    "id": "ql_s_315",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_84",
    "count": 2
  },
  {
    "id": "ql_s_316",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_84",
    "count": 2
  },
  {
    "id": "ql_s_317",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_84",
    "count": 1
  },
  {
    "id": "ql_s_318",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_85",
    "count": 3
  },
  {
    "id": "ql_s_319",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_85",
    "count": 3
  },
  {
    "id": "ql_s_320",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_85",
    "count": 1
  },
  {
    "id": "ql_s_321",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_85",
    "count": 1
  },
  {
    "id": "ql_s_322",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_86",
    "count": 5
  },
  {
    "id": "ql_s_323",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_86",
    "count": 6
  },
  {
    "id": "ql_s_324",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_86",
    "count": 6
  },
  {
    "id": "ql_s_325",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_86",
    "count": 3
  },
  {
    "id": "ql_s_326",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_86",
    "count": 1
  },
  {
    "id": "ql_s_327",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_87",
    "count": 6
  },
  {
    "id": "ql_s_328",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_87",
    "count": 7
  },
  {
    "id": "ql_s_329",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_87",
    "count": 7
  },
  {
    "id": "ql_s_330",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_87",
    "count": 3
  },
  {
    "id": "ql_s_331",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_87",
    "count": 2
  },
  {
    "id": "ql_s_332",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_88",
    "count": 4
  },
  {
    "id": "ql_s_333",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_88",
    "count": 3
  },
  {
    "id": "ql_s_334",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_88",
    "count": 3
  },
  {
    "id": "ql_s_335",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_88",
    "count": 2
  },
  {
    "id": "ql_s_336",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_89",
    "count": 2
  },
  {
    "id": "ql_s_337",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_89",
    "count": 3
  },
  {
    "id": "ql_s_338",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_89",
    "count": 2
  },
  {
    "id": "ql_s_339",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_89",
    "count": 2
  },
  {
    "id": "ql_s_340",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_89",
    "count": 1
  },
  {
    "id": "ql_s_341",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_90",
    "count": 3
  },
  {
    "id": "ql_s_342",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_90",
    "count": 4
  },
  {
    "id": "ql_s_343",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_90",
    "count": 3
  },
  {
    "id": "ql_s_344",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_90",
    "count": 2
  },
  {
    "id": "ql_s_345",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_90",
    "count": 1
  },
  {
    "id": "ql_s_346",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_91",
    "count": 4
  },
  {
    "id": "ql_s_347",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_91",
    "count": 4
  },
  {
    "id": "ql_s_348",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_91",
    "count": 3
  },
  {
    "id": "ql_s_349",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_91",
    "count": 2
  },
  {
    "id": "ql_s_350",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_91",
    "count": 1
  },
  {
    "id": "ql_s_351",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_92",
    "count": 4
  },
  {
    "id": "ql_s_352",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_92",
    "count": 3
  },
  {
    "id": "ql_s_353",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_92",
    "count": 3
  },
  {
    "id": "ql_s_354",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_92",
    "count": 2
  },
  {
    "id": "ql_s_355",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_92",
    "count": 1
  },
  {
    "id": "ql_s_356",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_93",
    "count": 6
  },
  {
    "id": "ql_s_357",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_93",
    "count": 6
  },
  {
    "id": "ql_s_358",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_93",
    "count": 7
  },
  {
    "id": "ql_s_359",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_93",
    "count": 2
  },
  {
    "id": "ql_s_360",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_93",
    "count": 2
  },
  {
    "id": "ql_s_361",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_94",
    "count": 3
  },
  {
    "id": "ql_s_362",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_94",
    "count": 4
  },
  {
    "id": "ql_s_363",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_94",
    "count": 3
  },
  {
    "id": "ql_s_364",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_94",
    "count": 1
  },
  {
    "id": "ql_s_365",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_94",
    "count": 2
  },
  {
    "id": "ql_s_366",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_95",
    "count": 3
  },
  {
    "id": "ql_s_367",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_95",
    "count": 3
  },
  {
    "id": "ql_s_368",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_95",
    "count": 4
  },
  {
    "id": "ql_s_369",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_95",
    "count": 2
  },
  {
    "id": "ql_s_370",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_95",
    "count": 1
  },
  {
    "id": "ql_s_371",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_96",
    "count": 2
  },
  {
    "id": "ql_s_372",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_96",
    "count": 3
  },
  {
    "id": "ql_s_373",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_96",
    "count": 2
  },
  {
    "id": "ql_s_374",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_96",
    "count": 2
  },
  {
    "id": "ql_s_375",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_96",
    "count": 1
  },
  {
    "id": "ql_s_376",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_97",
    "count": 2
  },
  {
    "id": "ql_s_377",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_97",
    "count": 3
  },
  {
    "id": "ql_s_378",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_97",
    "count": 2
  },
  {
    "id": "ql_s_379",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_97",
    "count": 1
  },
  {
    "id": "ql_s_380",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_97",
    "count": 1
  },
  {
    "id": "ql_s_381",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_98",
    "count": 9
  },
  {
    "id": "ql_s_382",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_98",
    "count": 8
  },
  {
    "id": "ql_s_383",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_98",
    "count": 8
  },
  {
    "id": "ql_s_384",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_98",
    "count": 4
  },
  {
    "id": "ql_s_385",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_98",
    "count": 2
  },
  {
    "id": "ql_s_386",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_614",
    "count": 8
  },
  {
    "id": "ql_s_387",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_614",
    "count": 6
  },
  {
    "id": "ql_s_388",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_614",
    "count": 7
  },
  {
    "id": "ql_s_389",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_614",
    "count": 3
  },
  {
    "id": "ql_s_390",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_614",
    "count": 2
  },
  {
    "id": "ql_s_391",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_614",
    "count": 1
  },
  {
    "id": "ql_s_392",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_99",
    "count": 2
  },
  {
    "id": "ql_s_393",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_99",
    "count": 2
  },
  {
    "id": "ql_s_394",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_99",
    "count": 2
  },
  {
    "id": "ql_s_395",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_99",
    "count": 1
  },
  {
    "id": "ql_s_396",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_99",
    "count": 1
  },
  {
    "id": "ql_s_397",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_100",
    "count": 1
  },
  {
    "id": "ql_s_398",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_100",
    "count": 2
  },
  {
    "id": "ql_s_399",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_100",
    "count": 1
  },
  {
    "id": "ql_s_400",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_100",
    "count": 1
  },
  {
    "id": "ql_s_401",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_100",
    "count": 1
  },
  {
    "id": "ql_s_402",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_101",
    "count": 7
  },
  {
    "id": "ql_s_403",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_101",
    "count": 6
  },
  {
    "id": "ql_s_404",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_101",
    "count": 6
  },
  {
    "id": "ql_s_405",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_101",
    "count": 2
  },
  {
    "id": "ql_s_406",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_101",
    "count": 1
  },
  {
    "id": "ql_s_407",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_102",
    "count": 3
  },
  {
    "id": "ql_s_408",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_102",
    "count": 2
  },
  {
    "id": "ql_s_409",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_102",
    "count": 2
  },
  {
    "id": "ql_s_410",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_102",
    "count": 1
  },
  {
    "id": "ql_s_411",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_102",
    "count": 1
  },
  {
    "id": "ql_s_412",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_102",
    "count": 1
  },
  {
    "id": "ql_s_413",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_103",
    "count": 1
  },
  {
    "id": "ql_s_414",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_103",
    "count": 1
  },
  {
    "id": "ql_s_415",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_103",
    "count": 1
  },
  {
    "id": "ql_s_416",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_103",
    "count": 1
  },
  {
    "id": "ql_s_417",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_103",
    "count": 1
  },
  {
    "id": "ql_s_418",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_104",
    "count": 1
  },
  {
    "id": "ql_s_419",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_104",
    "count": 2
  },
  {
    "id": "ql_s_420",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_104",
    "count": 2
  },
  {
    "id": "ql_s_421",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_104",
    "count": 1
  },
  {
    "id": "ql_s_422",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_104",
    "count": 1
  },
  {
    "id": "ql_s_423",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_105",
    "count": 3
  },
  {
    "id": "ql_s_424",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_105",
    "count": 3
  },
  {
    "id": "ql_s_425",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_105",
    "count": 4
  },
  {
    "id": "ql_s_426",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_105",
    "count": 1
  },
  {
    "id": "ql_s_427",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_105",
    "count": 1
  },
  {
    "id": "ql_s_428",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_106",
    "count": 10
  },
  {
    "id": "ql_s_429",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_106",
    "count": 9
  },
  {
    "id": "ql_s_430",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_106",
    "count": 10
  },
  {
    "id": "ql_s_431",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_106",
    "count": 4
  },
  {
    "id": "ql_s_432",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_106",
    "count": 3
  },
  {
    "id": "ql_s_433",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_107",
    "count": 1
  },
  {
    "id": "ql_s_434",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_107",
    "count": 1
  },
  {
    "id": "ql_s_435",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_107",
    "count": 1
  },
  {
    "id": "ql_s_436",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_108",
    "count": 1
  },
  {
    "id": "ql_s_437",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_108",
    "count": 1
  },
  {
    "id": "ql_s_438",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_108",
    "count": 1
  },
  {
    "id": "ql_s_439",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_108",
    "count": 1
  },
  {
    "id": "ql_s_440",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_108",
    "count": 1
  },
  {
    "id": "ql_s_441",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_109",
    "count": 7
  },
  {
    "id": "ql_s_442",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_109",
    "count": 4
  },
  {
    "id": "ql_s_443",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_109",
    "count": 4
  },
  {
    "id": "ql_s_444",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_109",
    "count": 2
  },
  {
    "id": "ql_s_445",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_109",
    "count": 1
  },
  {
    "id": "ql_s_446",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_110",
    "count": 4
  },
  {
    "id": "ql_s_447",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_110",
    "count": 4
  },
  {
    "id": "ql_s_448",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_110",
    "count": 3
  },
  {
    "id": "ql_s_449",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_110",
    "count": 2
  },
  {
    "id": "ql_s_450",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_110",
    "count": 1
  },
  {
    "id": "ql_s_451",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_111",
    "count": 3
  },
  {
    "id": "ql_s_452",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_111",
    "count": 4
  },
  {
    "id": "ql_s_453",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_111",
    "count": 4
  },
  {
    "id": "ql_s_454",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_111",
    "count": 1
  },
  {
    "id": "ql_s_455",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_111",
    "count": 1
  },
  {
    "id": "ql_s_456",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_112",
    "count": 3
  },
  {
    "id": "ql_s_457",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_112",
    "count": 2
  },
  {
    "id": "ql_s_458",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_112",
    "count": 3
  },
  {
    "id": "ql_s_459",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_112",
    "count": 2
  },
  {
    "id": "ql_s_460",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_112",
    "count": 1
  },
  {
    "id": "ql_s_461",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_615",
    "count": 5
  },
  {
    "id": "ql_s_462",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_615",
    "count": 5
  },
  {
    "id": "ql_s_463",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_615",
    "count": 5
  },
  {
    "id": "ql_s_464",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_615",
    "count": 3
  },
  {
    "id": "ql_s_465",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_615",
    "count": 1
  },
  {
    "id": "ql_s_466",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_113",
    "count": 8
  },
  {
    "id": "ql_s_467",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_113",
    "count": 9
  },
  {
    "id": "ql_s_468",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_113",
    "count": 8
  },
  {
    "id": "ql_s_469",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_113",
    "count": 3
  },
  {
    "id": "ql_s_470",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_113",
    "count": 2
  },
  {
    "id": "ql_s_471",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_114",
    "count": 4
  },
  {
    "id": "ql_s_472",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_114",
    "count": 3
  },
  {
    "id": "ql_s_473",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_114",
    "count": 4
  },
  {
    "id": "ql_s_474",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_114",
    "count": 2
  },
  {
    "id": "ql_s_475",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_114",
    "count": 1
  },
  {
    "id": "ql_s_476",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_115",
    "count": 9
  },
  {
    "id": "ql_s_477",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_115",
    "count": 9
  },
  {
    "id": "ql_s_478",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_115",
    "count": 8
  },
  {
    "id": "ql_s_479",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_115",
    "count": 4
  },
  {
    "id": "ql_s_480",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_115",
    "count": 2
  },
  {
    "id": "ql_s_481",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_116",
    "count": 0
  },
  {
    "id": "ql_s_482",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_116",
    "count": 1
  },
  {
    "id": "ql_s_483",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_116",
    "count": 1
  },
  {
    "id": "ql_s_484",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_116",
    "count": 1
  },
  {
    "id": "ql_s_485",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_116",
    "count": 1
  },
  {
    "id": "ql_s_486",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_116",
    "count": 1
  },
  {
    "id": "ql_s_487",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_117",
    "count": 3
  },
  {
    "id": "ql_s_488",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_117",
    "count": 3
  },
  {
    "id": "ql_s_489",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_117",
    "count": 3
  },
  {
    "id": "ql_s_490",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_117",
    "count": 1
  },
  {
    "id": "ql_s_491",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_117",
    "count": 1
  },
  {
    "id": "ql_s_492",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_616",
    "count": 1
  },
  {
    "id": "ql_s_493",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_616",
    "count": 1
  },
  {
    "id": "ql_s_494",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_616",
    "count": 2
  },
  {
    "id": "ql_s_495",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_616",
    "count": 2
  },
  {
    "id": "ql_s_496",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_616",
    "count": 1
  },
  {
    "id": "ql_s_497",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_118",
    "count": 2
  },
  {
    "id": "ql_s_498",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_118",
    "count": 2
  },
  {
    "id": "ql_s_499",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_118",
    "count": 2
  },
  {
    "id": "ql_s_500",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_118",
    "count": 1
  },
  {
    "id": "ql_s_501",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_118",
    "count": 1
  },
  {
    "id": "ql_s_502",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_119",
    "count": 4
  },
  {
    "id": "ql_s_503",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_119",
    "count": 3
  },
  {
    "id": "ql_s_504",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_119",
    "count": 4
  },
  {
    "id": "ql_s_505",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_119",
    "count": 1
  },
  {
    "id": "ql_s_506",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_119",
    "count": 1
  },
  {
    "id": "ql_s_507",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_120",
    "count": 4
  },
  {
    "id": "ql_s_508",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_120",
    "count": 4
  },
  {
    "id": "ql_s_509",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_120",
    "count": 4
  },
  {
    "id": "ql_s_510",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_120",
    "count": 2
  },
  {
    "id": "ql_s_511",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_120",
    "count": 2
  },
  {
    "id": "ql_s_512",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_121",
    "count": 3
  },
  {
    "id": "ql_s_513",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_121",
    "count": 4
  },
  {
    "id": "ql_s_514",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_121",
    "count": 3
  },
  {
    "id": "ql_s_515",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_121",
    "count": 1
  },
  {
    "id": "ql_s_516",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_121",
    "count": 1
  },
  {
    "id": "ql_s_517",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_122",
    "count": 2
  },
  {
    "id": "ql_s_518",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_122",
    "count": 3
  },
  {
    "id": "ql_s_519",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_122",
    "count": 3
  },
  {
    "id": "ql_s_520",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_122",
    "count": 1
  },
  {
    "id": "ql_s_521",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_122",
    "count": 1
  },
  {
    "id": "ql_s_522",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_123",
    "count": 3
  },
  {
    "id": "ql_s_523",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_123",
    "count": 2
  },
  {
    "id": "ql_s_524",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_123",
    "count": 2
  },
  {
    "id": "ql_s_525",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_123",
    "count": 1
  },
  {
    "id": "ql_s_526",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_123",
    "count": 1
  },
  {
    "id": "ql_s_527",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_124",
    "count": 3
  },
  {
    "id": "ql_s_528",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_124",
    "count": 3
  },
  {
    "id": "ql_s_529",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_124",
    "count": 3
  },
  {
    "id": "ql_s_530",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_124",
    "count": 1
  },
  {
    "id": "ql_s_531",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_124",
    "count": 1
  },
  {
    "id": "ql_s_532",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_125",
    "count": 6
  },
  {
    "id": "ql_s_533",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_125",
    "count": 4
  },
  {
    "id": "ql_s_534",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_125",
    "count": 6
  },
  {
    "id": "ql_s_535",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_125",
    "count": 3
  },
  {
    "id": "ql_s_536",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_125",
    "count": 1
  },
  {
    "id": "ql_s_537",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_126",
    "count": 5
  },
  {
    "id": "ql_s_538",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_126",
    "count": 6
  },
  {
    "id": "ql_s_539",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_126",
    "count": 6
  },
  {
    "id": "ql_s_540",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_126",
    "count": 3
  },
  {
    "id": "ql_s_541",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_126",
    "count": 1
  },
  {
    "id": "ql_s_542",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_127",
    "count": 5
  },
  {
    "id": "ql_s_543",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_127",
    "count": 5
  },
  {
    "id": "ql_s_544",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_127",
    "count": 5
  },
  {
    "id": "ql_s_545",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_127",
    "count": 2
  },
  {
    "id": "ql_s_546",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_127",
    "count": 1
  },
  {
    "id": "ql_s_547",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_617",
    "count": 1
  },
  {
    "id": "ql_s_548",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_618",
    "count": 2
  },
  {
    "id": "ql_s_549",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_618",
    "count": 3
  },
  {
    "id": "ql_s_550",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_618",
    "count": 3
  },
  {
    "id": "ql_s_551",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_618",
    "count": 1
  },
  {
    "id": "ql_s_552",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_618",
    "count": 1
  },
  {
    "id": "ql_s_553",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_618",
    "count": 1
  },
  {
    "id": "ql_s_554",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_619",
    "count": 1
  },
  {
    "id": "ql_s_555",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_619",
    "count": 1
  },
  {
    "id": "ql_s_556",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_619",
    "count": 0
  },
  {
    "id": "ql_s_557",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_619",
    "count": 1
  },
  {
    "id": "ql_s_558",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_619",
    "count": 1
  },
  {
    "id": "ql_s_559",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_619",
    "count": 1
  },
  {
    "id": "ql_s_560",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_128",
    "count": 7
  },
  {
    "id": "ql_s_561",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_128",
    "count": 6
  },
  {
    "id": "ql_s_562",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_128",
    "count": 8
  },
  {
    "id": "ql_s_563",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_128",
    "count": 3
  },
  {
    "id": "ql_s_564",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_128",
    "count": 2
  },
  {
    "id": "ql_s_565",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_129",
    "count": 2
  },
  {
    "id": "ql_s_566",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_129",
    "count": 2
  },
  {
    "id": "ql_s_567",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_129",
    "count": 2
  },
  {
    "id": "ql_s_568",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_129",
    "count": 1
  },
  {
    "id": "ql_s_569",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_129",
    "count": 1
  },
  {
    "id": "ql_s_570",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_130",
    "count": 1
  },
  {
    "id": "ql_s_571",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_130",
    "count": 1
  },
  {
    "id": "ql_s_572",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_130",
    "count": 1
  },
  {
    "id": "ql_s_573",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_130",
    "count": 1
  },
  {
    "id": "ql_s_574",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_130",
    "count": 1
  },
  {
    "id": "ql_s_575",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_131",
    "count": 1
  },
  {
    "id": "ql_s_576",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_131",
    "count": 1
  },
  {
    "id": "ql_s_577",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_131",
    "count": 0
  },
  {
    "id": "ql_s_578",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_131",
    "count": 1
  },
  {
    "id": "ql_s_579",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_131",
    "count": 1
  },
  {
    "id": "ql_s_580",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_131",
    "count": 1
  },
  {
    "id": "ql_s_581",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_132",
    "count": 1
  },
  {
    "id": "ql_s_582",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_132",
    "count": 1
  },
  {
    "id": "ql_s_583",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_132",
    "count": 2
  },
  {
    "id": "ql_s_584",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_132",
    "count": 1
  },
  {
    "id": "ql_s_585",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_132",
    "count": 1
  },
  {
    "id": "ql_s_586",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_620",
    "count": 1
  },
  {
    "id": "ql_s_587",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_620",
    "count": 1
  },
  {
    "id": "ql_s_588",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_620",
    "count": 1
  },
  {
    "id": "ql_s_589",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_620",
    "count": 1
  },
  {
    "id": "ql_s_590",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_620",
    "count": 1
  },
  {
    "id": "ql_s_591",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_133",
    "count": 1
  },
  {
    "id": "ql_s_592",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_133",
    "count": 1
  },
  {
    "id": "ql_s_593",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_133",
    "count": 1
  },
  {
    "id": "ql_s_594",
    "schoolId": "hs_133003",
    "middleSchoolId": "ms_133",
    "count": 1
  },
  {
    "id": "ql_s_595",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_133",
    "count": 1
  },
  {
    "id": "ql_s_596",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_621",
    "count": 5
  },
  {
    "id": "ql_s_597",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_622",
    "count": 3
  },
  {
    "id": "ql_s_598",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_622",
    "count": 3
  },
  {
    "id": "ql_s_599",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_622",
    "count": 1
  },
  {
    "id": "ql_s_600",
    "schoolId": "hs_092003",
    "middleSchoolId": "ms_623",
    "count": 2
  },
  {
    "id": "ql_s_601",
    "schoolId": "hs_133001",
    "middleSchoolId": "ms_623",
    "count": 1
  },
  {
    "id": "ql_s_602",
    "schoolId": "hs_132002",
    "middleSchoolId": "ms_623",
    "count": 2
  },
  {
    "id": "ql_s_603",
    "schoolId": "hs_132003",
    "middleSchoolId": "ms_623",
    "count": 1
  },
  {
    "id": "ql_s_604",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_625",
    "count": 1
  },
  {
    "id": "ql_s_605",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_647",
    "count": 1
  },
  {
    "id": "ql_s_606",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_647",
    "count": 1
  },
  {
    "id": "ql_s_607",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_648",
    "count": 7
  },
  {
    "id": "ql_s_608",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_648",
    "count": 1
  },
  {
    "id": "ql_s_609",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_649",
    "count": 16
  },
  {
    "id": "ql_s_610",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_649",
    "count": 2
  },
  {
    "id": "ql_s_611",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_650",
    "count": 9
  },
  {
    "id": "ql_s_612",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_650",
    "count": 2
  },
  {
    "id": "ql_s_613",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_651",
    "count": 13
  },
  {
    "id": "ql_s_614",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_651",
    "count": 2
  },
  {
    "id": "ql_s_615",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_652",
    "count": 2
  },
  {
    "id": "ql_s_616",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_652",
    "count": 1
  },
  {
    "id": "ql_s_617",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_653",
    "count": 2
  },
  {
    "id": "ql_s_618",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_653",
    "count": 1
  },
  {
    "id": "ql_s_619",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_654",
    "count": 6
  },
  {
    "id": "ql_s_620",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_654",
    "count": 1
  },
  {
    "id": "ql_s_621",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_655",
    "count": 2
  },
  {
    "id": "ql_s_622",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_655",
    "count": 1
  },
  {
    "id": "ql_s_623",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_656",
    "count": 3
  },
  {
    "id": "ql_s_624",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_656",
    "count": 1
  },
  {
    "id": "ql_s_625",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_657",
    "count": 3
  },
  {
    "id": "ql_s_626",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_657",
    "count": 1
  },
  {
    "id": "ql_s_627",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_658",
    "count": 10
  },
  {
    "id": "ql_s_628",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_658",
    "count": 2
  },
  {
    "id": "ql_s_629",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_659",
    "count": 5
  },
  {
    "id": "ql_s_630",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_659",
    "count": 1
  },
  {
    "id": "ql_s_631",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_660",
    "count": 5
  },
  {
    "id": "ql_s_632",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_660",
    "count": 1
  },
  {
    "id": "ql_s_633",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_661",
    "count": 11
  },
  {
    "id": "ql_s_634",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_661",
    "count": 1
  },
  {
    "id": "ql_s_635",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_661",
    "count": 2
  },
  {
    "id": "ql_s_636",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_662",
    "count": 7
  },
  {
    "id": "ql_s_637",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_662",
    "count": 1
  },
  {
    "id": "ql_s_638",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_663",
    "count": 1
  },
  {
    "id": "ql_s_639",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_664",
    "count": 3
  },
  {
    "id": "ql_s_640",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_664",
    "count": 1
  },
  {
    "id": "ql_s_641",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_665",
    "count": 15
  },
  {
    "id": "ql_s_642",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_665",
    "count": 1
  },
  {
    "id": "ql_s_643",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_665",
    "count": 1
  },
  {
    "id": "ql_s_644",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_665",
    "count": 2
  },
  {
    "id": "ql_s_645",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_666",
    "count": 9
  },
  {
    "id": "ql_s_646",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_666",
    "count": 1
  },
  {
    "id": "ql_s_647",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_666",
    "count": 2
  },
  {
    "id": "ql_s_648",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_667",
    "count": 6
  },
  {
    "id": "ql_s_649",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_667",
    "count": 1
  },
  {
    "id": "ql_s_650",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_668",
    "count": 2
  },
  {
    "id": "ql_s_651",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_668",
    "count": 1
  },
  {
    "id": "ql_s_652",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_669",
    "count": 2
  },
  {
    "id": "ql_s_653",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_669",
    "count": 1
  },
  {
    "id": "ql_s_654",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_670",
    "count": 1
  },
  {
    "id": "ql_s_655",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_670",
    "count": 1
  },
  {
    "id": "ql_s_656",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_671",
    "count": 2
  },
  {
    "id": "ql_s_657",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_671",
    "count": 1
  },
  {
    "id": "ql_s_658",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_672",
    "count": 7
  },
  {
    "id": "ql_s_659",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_672",
    "count": 2
  },
  {
    "id": "ql_s_660",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_673",
    "count": 3
  },
  {
    "id": "ql_s_661",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_673",
    "count": 1
  },
  {
    "id": "ql_s_662",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_674",
    "count": 2
  },
  {
    "id": "ql_s_663",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_674",
    "count": 1
  },
  {
    "id": "ql_s_664",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_675",
    "count": 3
  },
  {
    "id": "ql_s_665",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_675",
    "count": 1
  },
  {
    "id": "ql_s_666",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_676",
    "count": 5
  },
  {
    "id": "ql_s_667",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_676",
    "count": 1
  },
  {
    "id": "ql_s_668",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_677",
    "count": 1
  },
  {
    "id": "ql_s_669",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_678",
    "count": 1
  },
  {
    "id": "ql_s_670",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_678",
    "count": 1
  },
  {
    "id": "ql_s_671",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_679",
    "count": 4
  },
  {
    "id": "ql_s_672",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_679",
    "count": 1
  },
  {
    "id": "ql_s_673",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_680",
    "count": 2
  },
  {
    "id": "ql_s_674",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_680",
    "count": 1
  },
  {
    "id": "ql_s_675",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_681",
    "count": 7
  },
  {
    "id": "ql_s_676",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_681",
    "count": 2
  },
  {
    "id": "ql_s_677",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_682",
    "count": 3
  },
  {
    "id": "ql_s_678",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_682",
    "count": 1
  },
  {
    "id": "ql_s_679",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_683",
    "count": 2
  },
  {
    "id": "ql_s_680",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_683",
    "count": 1
  },
  {
    "id": "ql_s_681",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_684",
    "count": 4
  },
  {
    "id": "ql_s_682",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_684",
    "count": 1
  },
  {
    "id": "ql_s_683",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_685",
    "count": 4
  },
  {
    "id": "ql_s_684",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_685",
    "count": 1
  },
  {
    "id": "ql_s_685",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_685",
    "count": 1
  },
  {
    "id": "ql_s_686",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_686",
    "count": 2
  },
  {
    "id": "ql_s_687",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_686",
    "count": 1
  },
  {
    "id": "ql_s_688",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_687",
    "count": 2
  },
  {
    "id": "ql_s_689",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_687",
    "count": 1
  },
  {
    "id": "ql_s_690",
    "schoolId": "hs_212001",
    "middleSchoolId": "ms_688",
    "count": 1
  },
  {
    "id": "ql_s_691",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_688",
    "count": 1
  },
  {
    "id": "ql_s_692",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_689",
    "count": 13
  },
  {
    "id": "ql_s_693",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_689",
    "count": 10
  },
  {
    "id": "ql_s_694",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_690",
    "count": 11
  },
  {
    "id": "ql_s_695",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_691",
    "count": 7
  },
  {
    "id": "ql_s_696",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_691",
    "count": 6
  },
  {
    "id": "ql_s_697",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_692",
    "count": 8
  },
  {
    "id": "ql_s_698",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_692",
    "count": 7
  },
  {
    "id": "ql_s_699",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_693",
    "count": 10
  },
  {
    "id": "ql_s_700",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_693",
    "count": 9
  },
  {
    "id": "ql_s_701",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_694",
    "count": 4
  },
  {
    "id": "ql_s_702",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_694",
    "count": 3
  },
  {
    "id": "ql_s_703",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_695",
    "count": 6
  },
  {
    "id": "ql_s_704",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_695",
    "count": 5
  },
  {
    "id": "ql_s_705",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_696",
    "count": 5
  },
  {
    "id": "ql_s_706",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_696",
    "count": 4
  },
  {
    "id": "ql_s_707",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_697",
    "count": 7
  },
  {
    "id": "ql_s_708",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_697",
    "count": 6
  },
  {
    "id": "ql_s_709",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_698",
    "count": 6
  },
  {
    "id": "ql_s_710",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_698",
    "count": 5
  },
  {
    "id": "ql_s_711",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_699",
    "count": 8
  },
  {
    "id": "ql_s_712",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_699",
    "count": 7
  },
  {
    "id": "ql_s_713",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_700",
    "count": 3
  },
  {
    "id": "ql_s_714",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_700",
    "count": 2
  },
  {
    "id": "ql_s_715",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_701",
    "count": 2
  },
  {
    "id": "ql_s_716",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_701",
    "count": 1
  },
  {
    "id": "ql_s_717",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_702",
    "count": 4
  },
  {
    "id": "ql_s_718",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_702",
    "count": 3
  },
  {
    "id": "ql_s_719",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_703",
    "count": 2
  },
  {
    "id": "ql_s_720",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_703",
    "count": 2
  },
  {
    "id": "ql_s_721",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_704",
    "count": 5
  },
  {
    "id": "ql_s_722",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_704",
    "count": 4
  },
  {
    "id": "ql_s_723",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_705",
    "count": 2
  },
  {
    "id": "ql_s_724",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_705",
    "count": 2
  },
  {
    "id": "ql_s_725",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_706",
    "count": 2
  },
  {
    "id": "ql_s_726",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_706",
    "count": 2
  },
  {
    "id": "ql_s_727",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_707",
    "count": 15
  },
  {
    "id": "ql_s_728",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_707",
    "count": 11
  },
  {
    "id": "ql_s_729",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_708",
    "count": 15
  },
  {
    "id": "ql_s_730",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_708",
    "count": 12
  },
  {
    "id": "ql_s_731",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_709",
    "count": 15
  },
  {
    "id": "ql_s_732",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_709",
    "count": 12
  },
  {
    "id": "ql_s_733",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_710",
    "count": 5
  },
  {
    "id": "ql_s_734",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_710",
    "count": 4
  },
  {
    "id": "ql_s_735",
    "schoolId": "hs_092002",
    "middleSchoolId": "ms_711",
    "count": 10
  },
  {
    "id": "ql_s_736",
    "schoolId": "hs_093001",
    "middleSchoolId": "ms_711",
    "count": 8
  },
  {
    "id": "ql_s_737",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_716",
    "count": 1
  },
  {
    "id": "ql_s_738",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_717",
    "count": 1
  },
  {
    "id": "ql_s_739",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_718",
    "count": 1
  },
  {
    "id": "ql_s_740",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_721",
    "count": 1
  },
  {
    "id": "ql_s_741",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_723",
    "count": 6
  },
  {
    "id": "ql_s_742",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_723",
    "count": 7
  },
  {
    "id": "ql_s_743",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_723",
    "count": 2
  },
  {
    "id": "ql_s_744",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_724",
    "count": 1
  },
  {
    "id": "ql_s_745",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_724",
    "count": 2
  },
  {
    "id": "ql_s_746",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_724",
    "count": 1
  },
  {
    "id": "ql_s_747",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_725",
    "count": 8
  },
  {
    "id": "ql_s_748",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_725",
    "count": 10
  },
  {
    "id": "ql_s_749",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_725",
    "count": 3
  },
  {
    "id": "ql_s_750",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_726",
    "count": 11
  },
  {
    "id": "ql_s_751",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_726",
    "count": 13
  },
  {
    "id": "ql_s_752",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_726",
    "count": 4
  },
  {
    "id": "ql_s_753",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_727",
    "count": 4
  },
  {
    "id": "ql_s_754",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_727",
    "count": 5
  },
  {
    "id": "ql_s_755",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_727",
    "count": 1
  },
  {
    "id": "ql_s_756",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_728",
    "count": 6
  },
  {
    "id": "ql_s_757",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_728",
    "count": 6
  },
  {
    "id": "ql_s_758",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_728",
    "count": 2
  },
  {
    "id": "ql_s_759",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_729",
    "count": 2
  },
  {
    "id": "ql_s_760",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_729",
    "count": 2
  },
  {
    "id": "ql_s_761",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_729",
    "count": 1
  },
  {
    "id": "ql_s_762",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_730",
    "count": 4
  },
  {
    "id": "ql_s_763",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_730",
    "count": 4
  },
  {
    "id": "ql_s_764",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_730",
    "count": 2
  },
  {
    "id": "ql_s_765",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_731",
    "count": 1
  },
  {
    "id": "ql_s_766",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_731",
    "count": 8
  },
  {
    "id": "ql_s_767",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_731",
    "count": 11
  },
  {
    "id": "ql_s_768",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_731",
    "count": 3
  },
  {
    "id": "ql_s_769",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_732",
    "count": 1
  },
  {
    "id": "ql_s_770",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_732",
    "count": 6
  },
  {
    "id": "ql_s_771",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_732",
    "count": 6
  },
  {
    "id": "ql_s_772",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_732",
    "count": 2
  },
  {
    "id": "ql_s_773",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_733",
    "count": 3
  },
  {
    "id": "ql_s_774",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_733",
    "count": 4
  },
  {
    "id": "ql_s_775",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_733",
    "count": 1
  },
  {
    "id": "ql_s_776",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_734",
    "count": 7
  },
  {
    "id": "ql_s_777",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_734",
    "count": 8
  },
  {
    "id": "ql_s_778",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_734",
    "count": 3
  },
  {
    "id": "ql_s_779",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_735",
    "count": 12
  },
  {
    "id": "ql_s_780",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_735",
    "count": 14
  },
  {
    "id": "ql_s_781",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_735",
    "count": 5
  },
  {
    "id": "ql_s_782",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_736",
    "count": 5
  },
  {
    "id": "ql_s_783",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_736",
    "count": 6
  },
  {
    "id": "ql_s_784",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_736",
    "count": 2
  },
  {
    "id": "ql_s_785",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_737",
    "count": 8
  },
  {
    "id": "ql_s_786",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_737",
    "count": 9
  },
  {
    "id": "ql_s_787",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_737",
    "count": 3
  },
  {
    "id": "ql_s_788",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_738",
    "count": 7
  },
  {
    "id": "ql_s_789",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_738",
    "count": 9
  },
  {
    "id": "ql_s_790",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_738",
    "count": 3
  },
  {
    "id": "ql_s_791",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_739",
    "count": 5
  },
  {
    "id": "ql_s_792",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_739",
    "count": 6
  },
  {
    "id": "ql_s_793",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_739",
    "count": 2
  },
  {
    "id": "ql_s_794",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_740",
    "count": 7
  },
  {
    "id": "ql_s_795",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_740",
    "count": 9
  },
  {
    "id": "ql_s_796",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_740",
    "count": 3
  },
  {
    "id": "ql_s_797",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_741",
    "count": 6
  },
  {
    "id": "ql_s_798",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_741",
    "count": 8
  },
  {
    "id": "ql_s_799",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_741",
    "count": 2
  },
  {
    "id": "ql_s_800",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_742",
    "count": 1
  },
  {
    "id": "ql_s_801",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_742",
    "count": 8
  },
  {
    "id": "ql_s_802",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_742",
    "count": 11
  },
  {
    "id": "ql_s_803",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_742",
    "count": 4
  },
  {
    "id": "ql_s_804",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_743",
    "count": 1
  },
  {
    "id": "ql_s_805",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_743",
    "count": 1
  },
  {
    "id": "ql_s_806",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_743",
    "count": 1
  },
  {
    "id": "ql_s_807",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_743",
    "count": 1
  },
  {
    "id": "ql_s_808",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_744",
    "count": 1
  },
  {
    "id": "ql_s_809",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_744",
    "count": 2
  },
  {
    "id": "ql_s_810",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_744",
    "count": 1
  },
  {
    "id": "ql_s_811",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_744",
    "count": 1
  },
  {
    "id": "ql_s_812",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_745",
    "count": 4
  },
  {
    "id": "ql_s_813",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_745",
    "count": 5
  },
  {
    "id": "ql_s_814",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_745",
    "count": 1
  },
  {
    "id": "ql_s_815",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_746",
    "count": 1
  },
  {
    "id": "ql_s_816",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_746",
    "count": 11
  },
  {
    "id": "ql_s_817",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_746",
    "count": 12
  },
  {
    "id": "ql_s_818",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_746",
    "count": 4
  },
  {
    "id": "ql_s_819",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_747",
    "count": 1
  },
  {
    "id": "ql_s_820",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_747",
    "count": 1
  },
  {
    "id": "ql_s_821",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_747",
    "count": 1
  },
  {
    "id": "ql_s_822",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_748",
    "count": 1
  },
  {
    "id": "ql_s_823",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_748",
    "count": 1
  },
  {
    "id": "ql_s_824",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_748",
    "count": 1
  },
  {
    "id": "ql_s_825",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_749",
    "count": 8
  },
  {
    "id": "ql_s_826",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_749",
    "count": 10
  },
  {
    "id": "ql_s_827",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_749",
    "count": 3
  },
  {
    "id": "ql_s_828",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_750",
    "count": 1
  },
  {
    "id": "ql_s_829",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_750",
    "count": 5
  },
  {
    "id": "ql_s_830",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_750",
    "count": 6
  },
  {
    "id": "ql_s_831",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_750",
    "count": 1
  },
  {
    "id": "ql_s_832",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_751",
    "count": 1
  },
  {
    "id": "ql_s_833",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_751",
    "count": 1
  },
  {
    "id": "ql_s_834",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_751",
    "count": 1
  },
  {
    "id": "ql_s_835",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_751",
    "count": 1
  },
  {
    "id": "ql_s_836",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_752",
    "count": 10
  },
  {
    "id": "ql_s_837",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_752",
    "count": 13
  },
  {
    "id": "ql_s_838",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_752",
    "count": 4
  },
  {
    "id": "ql_s_839",
    "schoolId": "hs_142001",
    "middleSchoolId": "ms_753",
    "count": 4
  },
  {
    "id": "ql_s_840",
    "schoolId": "hs_142002",
    "middleSchoolId": "ms_753",
    "count": 4
  },
  {
    "id": "ql_s_841",
    "schoolId": "hs_142004",
    "middleSchoolId": "ms_753",
    "count": 1
  },
  {
    "id": "ql_s_842",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_781",
    "count": 5
  },
  {
    "id": "ql_s_843",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_781",
    "count": 3
  },
  {
    "id": "ql_s_844",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_781",
    "count": 2
  },
  {
    "id": "ql_s_845",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_781",
    "count": 2
  },
  {
    "id": "ql_s_846",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_781",
    "count": 2
  },
  {
    "id": "ql_s_847",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_781",
    "count": 1
  },
  {
    "id": "ql_s_848",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_782",
    "count": 3
  },
  {
    "id": "ql_s_849",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_782",
    "count": 2
  },
  {
    "id": "ql_s_850",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_782",
    "count": 2
  },
  {
    "id": "ql_s_851",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_782",
    "count": 2
  },
  {
    "id": "ql_s_852",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_782",
    "count": 1
  },
  {
    "id": "ql_s_853",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_782",
    "count": 1
  },
  {
    "id": "ql_s_854",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_782",
    "count": 1
  },
  {
    "id": "ql_s_855",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_783",
    "count": 1
  },
  {
    "id": "ql_s_856",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_783",
    "count": 1
  },
  {
    "id": "ql_s_857",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_783",
    "count": 1
  },
  {
    "id": "ql_s_858",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_783",
    "count": 1
  },
  {
    "id": "ql_s_859",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_783",
    "count": 1
  },
  {
    "id": "ql_s_860",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_783",
    "count": 2
  },
  {
    "id": "ql_s_861",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_784",
    "count": 16
  },
  {
    "id": "ql_s_862",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_784",
    "count": 19
  },
  {
    "id": "ql_s_863",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_784",
    "count": 10
  },
  {
    "id": "ql_s_864",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_784",
    "count": 11
  },
  {
    "id": "ql_s_865",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_784",
    "count": 11
  },
  {
    "id": "ql_s_866",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_784",
    "count": 6
  },
  {
    "id": "ql_s_867",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_785",
    "count": 2
  },
  {
    "id": "ql_s_868",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_785",
    "count": 2
  },
  {
    "id": "ql_s_869",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_785",
    "count": 1
  },
  {
    "id": "ql_s_870",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_785",
    "count": 2
  },
  {
    "id": "ql_s_871",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_785",
    "count": 1
  },
  {
    "id": "ql_s_872",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_785",
    "count": 1
  },
  {
    "id": "ql_s_873",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_786",
    "count": 28
  },
  {
    "id": "ql_s_874",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_786",
    "count": 28
  },
  {
    "id": "ql_s_875",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_786",
    "count": 15
  },
  {
    "id": "ql_s_876",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_786",
    "count": 20
  },
  {
    "id": "ql_s_877",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_786",
    "count": 17
  },
  {
    "id": "ql_s_878",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_786",
    "count": 12
  },
  {
    "id": "ql_s_879",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_786",
    "count": 1
  },
  {
    "id": "ql_s_880",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_787",
    "count": 2
  },
  {
    "id": "ql_s_881",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_787",
    "count": 2
  },
  {
    "id": "ql_s_882",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_787",
    "count": 1
  },
  {
    "id": "ql_s_883",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_787",
    "count": 2
  },
  {
    "id": "ql_s_884",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_787",
    "count": 1
  },
  {
    "id": "ql_s_885",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_787",
    "count": 1
  },
  {
    "id": "ql_s_886",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_788",
    "count": 3
  },
  {
    "id": "ql_s_887",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_788",
    "count": 3
  },
  {
    "id": "ql_s_888",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_788",
    "count": 1
  },
  {
    "id": "ql_s_889",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_788",
    "count": 3
  },
  {
    "id": "ql_s_890",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_788",
    "count": 1
  },
  {
    "id": "ql_s_891",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_788",
    "count": 2
  },
  {
    "id": "ql_s_892",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_788",
    "count": 1
  },
  {
    "id": "ql_s_893",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_789",
    "count": 5
  },
  {
    "id": "ql_s_894",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_789",
    "count": 5
  },
  {
    "id": "ql_s_895",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_789",
    "count": 3
  },
  {
    "id": "ql_s_896",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_789",
    "count": 3
  },
  {
    "id": "ql_s_897",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_789",
    "count": 3
  },
  {
    "id": "ql_s_898",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_789",
    "count": 3
  },
  {
    "id": "ql_s_899",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_790",
    "count": 4
  },
  {
    "id": "ql_s_900",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_790",
    "count": 4
  },
  {
    "id": "ql_s_901",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_790",
    "count": 2
  },
  {
    "id": "ql_s_902",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_790",
    "count": 2
  },
  {
    "id": "ql_s_903",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_790",
    "count": 2
  },
  {
    "id": "ql_s_904",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_790",
    "count": 1
  },
  {
    "id": "ql_s_905",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_790",
    "count": 1
  },
  {
    "id": "ql_s_906",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_791",
    "count": 4
  },
  {
    "id": "ql_s_907",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_791",
    "count": 4
  },
  {
    "id": "ql_s_908",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_791",
    "count": 3
  },
  {
    "id": "ql_s_909",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_791",
    "count": 4
  },
  {
    "id": "ql_s_910",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_791",
    "count": 3
  },
  {
    "id": "ql_s_911",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_791",
    "count": 2
  },
  {
    "id": "ql_s_912",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_791",
    "count": 1
  },
  {
    "id": "ql_s_913",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_792",
    "count": 3
  },
  {
    "id": "ql_s_914",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_792",
    "count": 3
  },
  {
    "id": "ql_s_915",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_792",
    "count": 3
  },
  {
    "id": "ql_s_916",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_792",
    "count": 3
  },
  {
    "id": "ql_s_917",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_792",
    "count": 2
  },
  {
    "id": "ql_s_918",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_792",
    "count": 1
  },
  {
    "id": "ql_s_919",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_793",
    "count": 4
  },
  {
    "id": "ql_s_920",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_793",
    "count": 4
  },
  {
    "id": "ql_s_921",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_793",
    "count": 4
  },
  {
    "id": "ql_s_922",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_793",
    "count": 3
  },
  {
    "id": "ql_s_923",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_793",
    "count": 2
  },
  {
    "id": "ql_s_924",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_794",
    "count": 8
  },
  {
    "id": "ql_s_925",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_794",
    "count": 9
  },
  {
    "id": "ql_s_926",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_794",
    "count": 6
  },
  {
    "id": "ql_s_927",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_794",
    "count": 5
  },
  {
    "id": "ql_s_928",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_794",
    "count": 5
  },
  {
    "id": "ql_s_929",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_794",
    "count": 1
  },
  {
    "id": "ql_s_930",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_795",
    "count": 5
  },
  {
    "id": "ql_s_931",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_795",
    "count": 4
  },
  {
    "id": "ql_s_932",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_795",
    "count": 3
  },
  {
    "id": "ql_s_933",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_795",
    "count": 2
  },
  {
    "id": "ql_s_934",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_795",
    "count": 2
  },
  {
    "id": "ql_s_935",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_795",
    "count": 1
  },
  {
    "id": "ql_s_936",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_796",
    "count": 4
  },
  {
    "id": "ql_s_937",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_796",
    "count": 4
  },
  {
    "id": "ql_s_938",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_796",
    "count": 2
  },
  {
    "id": "ql_s_939",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_796",
    "count": 4
  },
  {
    "id": "ql_s_940",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_796",
    "count": 2
  },
  {
    "id": "ql_s_941",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_797",
    "count": 6
  },
  {
    "id": "ql_s_942",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_797",
    "count": 6
  },
  {
    "id": "ql_s_943",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_797",
    "count": 2
  },
  {
    "id": "ql_s_944",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_797",
    "count": 3
  },
  {
    "id": "ql_s_945",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_797",
    "count": 3
  },
  {
    "id": "ql_s_946",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_797",
    "count": 2
  },
  {
    "id": "ql_s_947",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_797",
    "count": 1
  },
  {
    "id": "ql_s_948",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_798",
    "count": 3
  },
  {
    "id": "ql_s_949",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_798",
    "count": 3
  },
  {
    "id": "ql_s_950",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_798",
    "count": 2
  },
  {
    "id": "ql_s_951",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_798",
    "count": 4
  },
  {
    "id": "ql_s_952",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_798",
    "count": 2
  },
  {
    "id": "ql_s_953",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_799",
    "count": 2
  },
  {
    "id": "ql_s_954",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_799",
    "count": 3
  },
  {
    "id": "ql_s_955",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_799",
    "count": 1
  },
  {
    "id": "ql_s_956",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_799",
    "count": 1
  },
  {
    "id": "ql_s_957",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_799",
    "count": 1
  },
  {
    "id": "ql_s_958",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_799",
    "count": 1
  },
  {
    "id": "ql_s_959",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_799",
    "count": 1
  },
  {
    "id": "ql_s_960",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_800",
    "count": 7
  },
  {
    "id": "ql_s_961",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_800",
    "count": 7
  },
  {
    "id": "ql_s_962",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_800",
    "count": 5
  },
  {
    "id": "ql_s_963",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_800",
    "count": 6
  },
  {
    "id": "ql_s_964",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_800",
    "count": 6
  },
  {
    "id": "ql_s_965",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_800",
    "count": 1
  },
  {
    "id": "ql_s_966",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_801",
    "count": 7
  },
  {
    "id": "ql_s_967",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_801",
    "count": 6
  },
  {
    "id": "ql_s_968",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_801",
    "count": 4
  },
  {
    "id": "ql_s_969",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_801",
    "count": 5
  },
  {
    "id": "ql_s_970",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_801",
    "count": 4
  },
  {
    "id": "ql_s_971",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_801",
    "count": 2
  },
  {
    "id": "ql_s_972",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_801",
    "count": 1
  },
  {
    "id": "ql_s_973",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_802",
    "count": 4
  },
  {
    "id": "ql_s_974",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_802",
    "count": 5
  },
  {
    "id": "ql_s_975",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_802",
    "count": 3
  },
  {
    "id": "ql_s_976",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_802",
    "count": 4
  },
  {
    "id": "ql_s_977",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_802",
    "count": 2
  },
  {
    "id": "ql_s_978",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_802",
    "count": 1
  },
  {
    "id": "ql_s_979",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_803",
    "count": 3
  },
  {
    "id": "ql_s_980",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_803",
    "count": 3
  },
  {
    "id": "ql_s_981",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_803",
    "count": 2
  },
  {
    "id": "ql_s_982",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_803",
    "count": 2
  },
  {
    "id": "ql_s_983",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_803",
    "count": 3
  },
  {
    "id": "ql_s_984",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_803",
    "count": 2
  },
  {
    "id": "ql_s_985",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_804",
    "count": 4
  },
  {
    "id": "ql_s_986",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_804",
    "count": 4
  },
  {
    "id": "ql_s_987",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_804",
    "count": 2
  },
  {
    "id": "ql_s_988",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_804",
    "count": 4
  },
  {
    "id": "ql_s_989",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_804",
    "count": 3
  },
  {
    "id": "ql_s_990",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_805",
    "count": 3
  },
  {
    "id": "ql_s_991",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_805",
    "count": 3
  },
  {
    "id": "ql_s_992",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_805",
    "count": 1
  },
  {
    "id": "ql_s_993",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_805",
    "count": 2
  },
  {
    "id": "ql_s_994",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_805",
    "count": 1
  },
  {
    "id": "ql_s_995",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_805",
    "count": 1
  },
  {
    "id": "ql_s_996",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_806",
    "count": 4
  },
  {
    "id": "ql_s_997",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_806",
    "count": 6
  },
  {
    "id": "ql_s_998",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_806",
    "count": 2
  },
  {
    "id": "ql_s_999",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_806",
    "count": 4
  },
  {
    "id": "ql_s_1000",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_806",
    "count": 2
  },
  {
    "id": "ql_s_1001",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_806",
    "count": 1
  },
  {
    "id": "ql_s_1002",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_807",
    "count": 3
  },
  {
    "id": "ql_s_1003",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_807",
    "count": 4
  },
  {
    "id": "ql_s_1004",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_807",
    "count": 3
  },
  {
    "id": "ql_s_1005",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_807",
    "count": 2
  },
  {
    "id": "ql_s_1006",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_807",
    "count": 2
  },
  {
    "id": "ql_s_1007",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_808",
    "count": 3
  },
  {
    "id": "ql_s_1008",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_808",
    "count": 2
  },
  {
    "id": "ql_s_1009",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_808",
    "count": 1
  },
  {
    "id": "ql_s_1010",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_808",
    "count": 1
  },
  {
    "id": "ql_s_1011",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_808",
    "count": 1
  },
  {
    "id": "ql_s_1012",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_809",
    "count": 7
  },
  {
    "id": "ql_s_1013",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_809",
    "count": 4
  },
  {
    "id": "ql_s_1014",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_809",
    "count": 2
  },
  {
    "id": "ql_s_1015",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_809",
    "count": 3
  },
  {
    "id": "ql_s_1016",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_809",
    "count": 2
  },
  {
    "id": "ql_s_1017",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_810",
    "count": 3
  },
  {
    "id": "ql_s_1018",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_810",
    "count": 3
  },
  {
    "id": "ql_s_1019",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_810",
    "count": 2
  },
  {
    "id": "ql_s_1020",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_810",
    "count": 2
  },
  {
    "id": "ql_s_1021",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_810",
    "count": 2
  },
  {
    "id": "ql_s_1022",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_810",
    "count": 1
  },
  {
    "id": "ql_s_1023",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_811",
    "count": 8
  },
  {
    "id": "ql_s_1024",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_811",
    "count": 7
  },
  {
    "id": "ql_s_1025",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_811",
    "count": 5
  },
  {
    "id": "ql_s_1026",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_811",
    "count": 6
  },
  {
    "id": "ql_s_1027",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_811",
    "count": 5
  },
  {
    "id": "ql_s_1028",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_811",
    "count": 1
  },
  {
    "id": "ql_s_1029",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_812",
    "count": 8
  },
  {
    "id": "ql_s_1030",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_812",
    "count": 7
  },
  {
    "id": "ql_s_1031",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_812",
    "count": 3
  },
  {
    "id": "ql_s_1032",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_812",
    "count": 4
  },
  {
    "id": "ql_s_1033",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_812",
    "count": 4
  },
  {
    "id": "ql_s_1034",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_812",
    "count": 1
  },
  {
    "id": "ql_s_1035",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_813",
    "count": 10
  },
  {
    "id": "ql_s_1036",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_813",
    "count": 11
  },
  {
    "id": "ql_s_1037",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_813",
    "count": 6
  },
  {
    "id": "ql_s_1038",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_813",
    "count": 7
  },
  {
    "id": "ql_s_1039",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_813",
    "count": 7
  },
  {
    "id": "ql_s_1040",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_813",
    "count": 1
  },
  {
    "id": "ql_s_1041",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_814",
    "count": 9
  },
  {
    "id": "ql_s_1042",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_814",
    "count": 10
  },
  {
    "id": "ql_s_1043",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_814",
    "count": 5
  },
  {
    "id": "ql_s_1044",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_814",
    "count": 6
  },
  {
    "id": "ql_s_1045",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_814",
    "count": 4
  },
  {
    "id": "ql_s_1046",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_814",
    "count": 1
  },
  {
    "id": "ql_s_1047",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_815",
    "count": 10
  },
  {
    "id": "ql_s_1048",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_815",
    "count": 7
  },
  {
    "id": "ql_s_1049",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_815",
    "count": 4
  },
  {
    "id": "ql_s_1050",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_815",
    "count": 6
  },
  {
    "id": "ql_s_1051",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_815",
    "count": 4
  },
  {
    "id": "ql_s_1052",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_816",
    "count": 4
  },
  {
    "id": "ql_s_1053",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_816",
    "count": 3
  },
  {
    "id": "ql_s_1054",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_816",
    "count": 1
  },
  {
    "id": "ql_s_1055",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_816",
    "count": 2
  },
  {
    "id": "ql_s_1056",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_816",
    "count": 1
  },
  {
    "id": "ql_s_1057",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_817",
    "count": 3
  },
  {
    "id": "ql_s_1058",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_817",
    "count": 3
  },
  {
    "id": "ql_s_1059",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_817",
    "count": 1
  },
  {
    "id": "ql_s_1060",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_817",
    "count": 4
  },
  {
    "id": "ql_s_1061",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_817",
    "count": 1
  },
  {
    "id": "ql_s_1062",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_818",
    "count": 2
  },
  {
    "id": "ql_s_1063",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_818",
    "count": 1
  },
  {
    "id": "ql_s_1064",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_818",
    "count": 1
  },
  {
    "id": "ql_s_1065",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_818",
    "count": 1
  },
  {
    "id": "ql_s_1066",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_818",
    "count": 1
  },
  {
    "id": "ql_s_1067",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_819",
    "count": 11
  },
  {
    "id": "ql_s_1068",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_819",
    "count": 12
  },
  {
    "id": "ql_s_1069",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_819",
    "count": 6
  },
  {
    "id": "ql_s_1070",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_819",
    "count": 8
  },
  {
    "id": "ql_s_1071",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_819",
    "count": 6
  },
  {
    "id": "ql_s_1072",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_819",
    "count": 1
  },
  {
    "id": "ql_s_1073",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_820",
    "count": 2
  },
  {
    "id": "ql_s_1074",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_820",
    "count": 3
  },
  {
    "id": "ql_s_1075",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_820",
    "count": 1
  },
  {
    "id": "ql_s_1076",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_820",
    "count": 1
  },
  {
    "id": "ql_s_1077",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_820",
    "count": 1
  },
  {
    "id": "ql_s_1078",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_820",
    "count": 1
  },
  {
    "id": "ql_s_1079",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_820",
    "count": 1
  },
  {
    "id": "ql_s_1080",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_821",
    "count": 4
  },
  {
    "id": "ql_s_1081",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_821",
    "count": 3
  },
  {
    "id": "ql_s_1082",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_821",
    "count": 2
  },
  {
    "id": "ql_s_1083",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_821",
    "count": 2
  },
  {
    "id": "ql_s_1084",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_821",
    "count": 1
  },
  {
    "id": "ql_s_1085",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_821",
    "count": 1
  },
  {
    "id": "ql_s_1086",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_822",
    "count": 1
  },
  {
    "id": "ql_s_1087",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_822",
    "count": 1
  },
  {
    "id": "ql_s_1088",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_822",
    "count": 2
  },
  {
    "id": "ql_s_1089",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_822",
    "count": 1
  },
  {
    "id": "ql_s_1090",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_822",
    "count": 1
  },
  {
    "id": "ql_s_1091",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_822",
    "count": 1
  },
  {
    "id": "ql_s_1092",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_823",
    "count": 6
  },
  {
    "id": "ql_s_1093",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_823",
    "count": 9
  },
  {
    "id": "ql_s_1094",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_823",
    "count": 3
  },
  {
    "id": "ql_s_1095",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_823",
    "count": 4
  },
  {
    "id": "ql_s_1096",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_823",
    "count": 4
  },
  {
    "id": "ql_s_1097",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_823",
    "count": 1
  },
  {
    "id": "ql_s_1098",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_824",
    "count": 7
  },
  {
    "id": "ql_s_1099",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_824",
    "count": 7
  },
  {
    "id": "ql_s_1100",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_824",
    "count": 4
  },
  {
    "id": "ql_s_1101",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_824",
    "count": 4
  },
  {
    "id": "ql_s_1102",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_824",
    "count": 4
  },
  {
    "id": "ql_s_1103",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_824",
    "count": 2
  },
  {
    "id": "ql_s_1104",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_825",
    "count": 2
  },
  {
    "id": "ql_s_1105",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_825",
    "count": 2
  },
  {
    "id": "ql_s_1106",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_825",
    "count": 2
  },
  {
    "id": "ql_s_1107",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_825",
    "count": 1
  },
  {
    "id": "ql_s_1108",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_825",
    "count": 1
  },
  {
    "id": "ql_s_1109",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_826",
    "count": 2
  },
  {
    "id": "ql_s_1110",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_826",
    "count": 2
  },
  {
    "id": "ql_s_1111",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_826",
    "count": 1
  },
  {
    "id": "ql_s_1112",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_826",
    "count": 2
  },
  {
    "id": "ql_s_1113",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_826",
    "count": 2
  },
  {
    "id": "ql_s_1114",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_827",
    "count": 2
  },
  {
    "id": "ql_s_1115",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_827",
    "count": 3
  },
  {
    "id": "ql_s_1116",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_827",
    "count": 2
  },
  {
    "id": "ql_s_1117",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_827",
    "count": 1
  },
  {
    "id": "ql_s_1118",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_827",
    "count": 1
  },
  {
    "id": "ql_s_1119",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_827",
    "count": 1
  },
  {
    "id": "ql_s_1120",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_827",
    "count": 1
  },
  {
    "id": "ql_s_1121",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_828",
    "count": 3
  },
  {
    "id": "ql_s_1122",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_828",
    "count": 4
  },
  {
    "id": "ql_s_1123",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_828",
    "count": 1
  },
  {
    "id": "ql_s_1124",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_828",
    "count": 2
  },
  {
    "id": "ql_s_1125",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_828",
    "count": 2
  },
  {
    "id": "ql_s_1126",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_828",
    "count": 1
  },
  {
    "id": "ql_s_1127",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_829",
    "count": 2
  },
  {
    "id": "ql_s_1128",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_829",
    "count": 2
  },
  {
    "id": "ql_s_1129",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_829",
    "count": 2
  },
  {
    "id": "ql_s_1130",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_829",
    "count": 1
  },
  {
    "id": "ql_s_1131",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_829",
    "count": 1
  },
  {
    "id": "ql_s_1132",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_830",
    "count": 2
  },
  {
    "id": "ql_s_1133",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_830",
    "count": 2
  },
  {
    "id": "ql_s_1134",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_830",
    "count": 1
  },
  {
    "id": "ql_s_1135",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_830",
    "count": 1
  },
  {
    "id": "ql_s_1136",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_830",
    "count": 1
  },
  {
    "id": "ql_s_1137",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_831",
    "count": 4
  },
  {
    "id": "ql_s_1138",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_831",
    "count": 4
  },
  {
    "id": "ql_s_1139",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_831",
    "count": 2
  },
  {
    "id": "ql_s_1140",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_831",
    "count": 4
  },
  {
    "id": "ql_s_1141",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_831",
    "count": 3
  },
  {
    "id": "ql_s_1142",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_831",
    "count": 1
  },
  {
    "id": "ql_s_1143",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_832",
    "count": 2
  },
  {
    "id": "ql_s_1144",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_832",
    "count": 1
  },
  {
    "id": "ql_s_1145",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_832",
    "count": 1
  },
  {
    "id": "ql_s_1146",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_832",
    "count": 1
  },
  {
    "id": "ql_s_1147",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_832",
    "count": 1
  },
  {
    "id": "ql_s_1148",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_832",
    "count": 1
  },
  {
    "id": "ql_s_1149",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_833",
    "count": 4
  },
  {
    "id": "ql_s_1150",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_833",
    "count": 3
  },
  {
    "id": "ql_s_1151",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_833",
    "count": 1
  },
  {
    "id": "ql_s_1152",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_833",
    "count": 2
  },
  {
    "id": "ql_s_1153",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_833",
    "count": 2
  },
  {
    "id": "ql_s_1154",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_833",
    "count": 1
  },
  {
    "id": "ql_s_1155",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_834",
    "count": 3
  },
  {
    "id": "ql_s_1156",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_834",
    "count": 2
  },
  {
    "id": "ql_s_1157",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_834",
    "count": 1
  },
  {
    "id": "ql_s_1158",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_834",
    "count": 2
  },
  {
    "id": "ql_s_1159",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_834",
    "count": 1
  },
  {
    "id": "ql_s_1160",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1161",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1162",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1163",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1164",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1165",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1166",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_835",
    "count": 1
  },
  {
    "id": "ql_s_1167",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_836",
    "count": 2
  },
  {
    "id": "ql_s_1168",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_836",
    "count": 2
  },
  {
    "id": "ql_s_1169",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_836",
    "count": 1
  },
  {
    "id": "ql_s_1170",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_836",
    "count": 2
  },
  {
    "id": "ql_s_1171",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_836",
    "count": 1
  },
  {
    "id": "ql_s_1172",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_836",
    "count": 1
  },
  {
    "id": "ql_s_1173",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_837",
    "count": 1
  },
  {
    "id": "ql_s_1174",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_837",
    "count": 1
  },
  {
    "id": "ql_s_1175",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_837",
    "count": 1
  },
  {
    "id": "ql_s_1176",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_837",
    "count": 1
  },
  {
    "id": "ql_s_1177",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_837",
    "count": 1
  },
  {
    "id": "ql_s_1178",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_838",
    "count": 1
  },
  {
    "id": "ql_s_1179",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_838",
    "count": 1
  },
  {
    "id": "ql_s_1180",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_838",
    "count": 1
  },
  {
    "id": "ql_s_1181",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_838",
    "count": 2
  },
  {
    "id": "ql_s_1182",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_838",
    "count": 1
  },
  {
    "id": "ql_s_1183",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_838",
    "count": 1
  },
  {
    "id": "ql_s_1184",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_839",
    "count": 1
  },
  {
    "id": "ql_s_1185",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_839",
    "count": 1
  },
  {
    "id": "ql_s_1186",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_839",
    "count": 1
  },
  {
    "id": "ql_s_1187",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_839",
    "count": 1
  },
  {
    "id": "ql_s_1188",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_839",
    "count": 1
  },
  {
    "id": "ql_s_1189",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_840",
    "count": 1
  },
  {
    "id": "ql_s_1190",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_840",
    "count": 2
  },
  {
    "id": "ql_s_1191",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_840",
    "count": 1
  },
  {
    "id": "ql_s_1192",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_840",
    "count": 1
  },
  {
    "id": "ql_s_1193",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_840",
    "count": 1
  },
  {
    "id": "ql_s_1194",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_840",
    "count": 1
  },
  {
    "id": "ql_s_1195",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_841",
    "count": 1
  },
  {
    "id": "ql_s_1196",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_841",
    "count": 1
  },
  {
    "id": "ql_s_1197",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_841",
    "count": 1
  },
  {
    "id": "ql_s_1198",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_841",
    "count": 1
  },
  {
    "id": "ql_s_1199",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_841",
    "count": 1
  },
  {
    "id": "ql_s_1200",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_842",
    "count": 1
  },
  {
    "id": "ql_s_1201",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_842",
    "count": 1
  },
  {
    "id": "ql_s_1202",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_842",
    "count": 1
  },
  {
    "id": "ql_s_1203",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_842",
    "count": 1
  },
  {
    "id": "ql_s_1204",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_842",
    "count": 1
  },
  {
    "id": "ql_s_1205",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_843",
    "count": 1
  },
  {
    "id": "ql_s_1206",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_843",
    "count": 1
  },
  {
    "id": "ql_s_1207",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_843",
    "count": 1
  },
  {
    "id": "ql_s_1208",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_843",
    "count": 1
  },
  {
    "id": "ql_s_1209",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_843",
    "count": 1
  },
  {
    "id": "ql_s_1210",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_844",
    "count": 2
  },
  {
    "id": "ql_s_1211",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_844",
    "count": 3
  },
  {
    "id": "ql_s_1212",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_844",
    "count": 1
  },
  {
    "id": "ql_s_1213",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_844",
    "count": 3
  },
  {
    "id": "ql_s_1214",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_844",
    "count": 1
  },
  {
    "id": "ql_s_1215",
    "schoolId": "hs_122001",
    "middleSchoolId": "ms_845",
    "count": 1
  },
  {
    "id": "ql_s_1216",
    "schoolId": "hs_123001",
    "middleSchoolId": "ms_845",
    "count": 1
  },
  {
    "id": "ql_s_1217",
    "schoolId": "hs_122002",
    "middleSchoolId": "ms_845",
    "count": 1
  },
  {
    "id": "ql_s_1218",
    "schoolId": "hs_122003",
    "middleSchoolId": "ms_845",
    "count": 1
  },
  {
    "id": "ql_s_1219",
    "schoolId": "hs_122004",
    "middleSchoolId": "ms_845",
    "count": 1
  },
  {
    "id": "ql_s_1220",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1221",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1222",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1223",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1224",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1225",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_846",
    "count": 10
  },
  {
    "id": "ql_s_1226",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_846",
    "count": 10
  },
  {
    "id": "ql_s_1227",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_846",
    "count": 9
  },
  {
    "id": "ql_s_1228",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_846",
    "count": 7
  },
  {
    "id": "ql_s_1229",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_846",
    "count": 15
  },
  {
    "id": "ql_s_1230",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_846",
    "count": 8
  },
  {
    "id": "ql_s_1231",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1232",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_846",
    "count": 7
  },
  {
    "id": "ql_s_1233",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_846",
    "count": 0
  },
  {
    "id": "ql_s_1234",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_847",
    "count": 1
  },
  {
    "id": "ql_s_1235",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_847",
    "count": 0
  },
  {
    "id": "ql_s_1236",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_847",
    "count": 0
  },
  {
    "id": "ql_s_1237",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_847",
    "count": 0
  },
  {
    "id": "ql_s_1238",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_847",
    "count": 0
  },
  {
    "id": "ql_s_1239",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_847",
    "count": 8
  },
  {
    "id": "ql_s_1240",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_847",
    "count": 7
  },
  {
    "id": "ql_s_1241",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_847",
    "count": 7
  },
  {
    "id": "ql_s_1242",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_847",
    "count": 6
  },
  {
    "id": "ql_s_1243",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_847",
    "count": 10
  },
  {
    "id": "ql_s_1244",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_847",
    "count": 6
  },
  {
    "id": "ql_s_1245",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_847",
    "count": 1
  },
  {
    "id": "ql_s_1246",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_847",
    "count": 6
  },
  {
    "id": "ql_s_1247",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_847",
    "count": 0
  },
  {
    "id": "ql_s_1248",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_848",
    "count": 0
  },
  {
    "id": "ql_s_1249",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_848",
    "count": 0
  },
  {
    "id": "ql_s_1250",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_848",
    "count": 0
  },
  {
    "id": "ql_s_1251",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_848",
    "count": 0
  },
  {
    "id": "ql_s_1252",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_848",
    "count": 1
  },
  {
    "id": "ql_s_1253",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_848",
    "count": 3
  },
  {
    "id": "ql_s_1254",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_848",
    "count": 2
  },
  {
    "id": "ql_s_1255",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_848",
    "count": 2
  },
  {
    "id": "ql_s_1256",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_848",
    "count": 1
  },
  {
    "id": "ql_s_1257",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_848",
    "count": 3
  },
  {
    "id": "ql_s_1258",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_848",
    "count": 2
  },
  {
    "id": "ql_s_1259",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_848",
    "count": 1
  },
  {
    "id": "ql_s_1260",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_848",
    "count": 1
  },
  {
    "id": "ql_s_1261",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_848",
    "count": 0
  },
  {
    "id": "ql_s_1262",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1263",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1264",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1265",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1266",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1267",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1268",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1269",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1270",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1271",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1272",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1273",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1274",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_849",
    "count": 1
  },
  {
    "id": "ql_s_1275",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_849",
    "count": 0
  },
  {
    "id": "ql_s_1276",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_850",
    "count": 0
  },
  {
    "id": "ql_s_1277",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_850",
    "count": 0
  },
  {
    "id": "ql_s_1278",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_850",
    "count": 0
  },
  {
    "id": "ql_s_1279",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_850",
    "count": 0
  },
  {
    "id": "ql_s_1280",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_850",
    "count": 0
  },
  {
    "id": "ql_s_1281",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_850",
    "count": 3
  },
  {
    "id": "ql_s_1282",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_850",
    "count": 4
  },
  {
    "id": "ql_s_1283",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_850",
    "count": 3
  },
  {
    "id": "ql_s_1284",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_850",
    "count": 2
  },
  {
    "id": "ql_s_1285",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_850",
    "count": 5
  },
  {
    "id": "ql_s_1286",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_850",
    "count": 2
  },
  {
    "id": "ql_s_1287",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_850",
    "count": 1
  },
  {
    "id": "ql_s_1288",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_850",
    "count": 2
  },
  {
    "id": "ql_s_1289",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_850",
    "count": 0
  },
  {
    "id": "ql_s_1290",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_851",
    "count": 0
  },
  {
    "id": "ql_s_1291",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_851",
    "count": 0
  },
  {
    "id": "ql_s_1292",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_851",
    "count": 0
  },
  {
    "id": "ql_s_1293",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_851",
    "count": 0
  },
  {
    "id": "ql_s_1294",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_851",
    "count": 0
  },
  {
    "id": "ql_s_1295",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_851",
    "count": 1
  },
  {
    "id": "ql_s_1296",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_851",
    "count": 2
  },
  {
    "id": "ql_s_1297",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_851",
    "count": 1
  },
  {
    "id": "ql_s_1298",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_851",
    "count": 1
  },
  {
    "id": "ql_s_1299",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_851",
    "count": 2
  },
  {
    "id": "ql_s_1300",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_851",
    "count": 1
  },
  {
    "id": "ql_s_1301",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_851",
    "count": 1
  },
  {
    "id": "ql_s_1302",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_851",
    "count": 1
  },
  {
    "id": "ql_s_1303",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_851",
    "count": 0
  },
  {
    "id": "ql_s_1304",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_852",
    "count": 1
  },
  {
    "id": "ql_s_1305",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_852",
    "count": 0
  },
  {
    "id": "ql_s_1306",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_852",
    "count": 0
  },
  {
    "id": "ql_s_1307",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_852",
    "count": 0
  },
  {
    "id": "ql_s_1308",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_852",
    "count": 0
  },
  {
    "id": "ql_s_1309",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_852",
    "count": 2
  },
  {
    "id": "ql_s_1310",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_852",
    "count": 2
  },
  {
    "id": "ql_s_1311",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_852",
    "count": 3
  },
  {
    "id": "ql_s_1312",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_852",
    "count": 3
  },
  {
    "id": "ql_s_1313",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_852",
    "count": 3
  },
  {
    "id": "ql_s_1314",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_852",
    "count": 3
  },
  {
    "id": "ql_s_1315",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_852",
    "count": 1
  },
  {
    "id": "ql_s_1316",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_852",
    "count": 3
  },
  {
    "id": "ql_s_1317",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_852",
    "count": 0
  },
  {
    "id": "ql_s_1318",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_853",
    "count": 0
  },
  {
    "id": "ql_s_1319",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_853",
    "count": 1
  },
  {
    "id": "ql_s_1320",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_853",
    "count": 0
  },
  {
    "id": "ql_s_1321",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_853",
    "count": 0
  },
  {
    "id": "ql_s_1322",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_853",
    "count": 0
  },
  {
    "id": "ql_s_1323",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_853",
    "count": 2
  },
  {
    "id": "ql_s_1324",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_853",
    "count": 1
  },
  {
    "id": "ql_s_1325",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_853",
    "count": 1
  },
  {
    "id": "ql_s_1326",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_853",
    "count": 2
  },
  {
    "id": "ql_s_1327",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_853",
    "count": 2
  },
  {
    "id": "ql_s_1328",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_853",
    "count": 2
  },
  {
    "id": "ql_s_1329",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_853",
    "count": 1
  },
  {
    "id": "ql_s_1330",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_853",
    "count": 2
  },
  {
    "id": "ql_s_1331",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_853",
    "count": 0
  },
  {
    "id": "ql_s_1332",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_854",
    "count": 0
  },
  {
    "id": "ql_s_1333",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_854",
    "count": 0
  },
  {
    "id": "ql_s_1334",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_854",
    "count": 1
  },
  {
    "id": "ql_s_1335",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_854",
    "count": 0
  },
  {
    "id": "ql_s_1336",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_854",
    "count": 0
  },
  {
    "id": "ql_s_1337",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_854",
    "count": 1
  },
  {
    "id": "ql_s_1338",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_854",
    "count": 2
  },
  {
    "id": "ql_s_1339",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_854",
    "count": 2
  },
  {
    "id": "ql_s_1340",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_854",
    "count": 1
  },
  {
    "id": "ql_s_1341",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_854",
    "count": 1
  },
  {
    "id": "ql_s_1342",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_854",
    "count": 1
  },
  {
    "id": "ql_s_1343",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_854",
    "count": 1
  },
  {
    "id": "ql_s_1344",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_854",
    "count": 2
  },
  {
    "id": "ql_s_1345",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_854",
    "count": 0
  },
  {
    "id": "ql_s_1346",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_855",
    "count": 1
  },
  {
    "id": "ql_s_1347",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_855",
    "count": 0
  },
  {
    "id": "ql_s_1348",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_855",
    "count": 0
  },
  {
    "id": "ql_s_1349",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_855",
    "count": 0
  },
  {
    "id": "ql_s_1350",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_855",
    "count": 0
  },
  {
    "id": "ql_s_1351",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_855",
    "count": 4
  },
  {
    "id": "ql_s_1352",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_855",
    "count": 3
  },
  {
    "id": "ql_s_1353",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_855",
    "count": 4
  },
  {
    "id": "ql_s_1354",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_855",
    "count": 2
  },
  {
    "id": "ql_s_1355",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_855",
    "count": 4
  },
  {
    "id": "ql_s_1356",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_855",
    "count": 2
  },
  {
    "id": "ql_s_1357",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_855",
    "count": 1
  },
  {
    "id": "ql_s_1358",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_855",
    "count": 2
  },
  {
    "id": "ql_s_1359",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_855",
    "count": 0
  },
  {
    "id": "ql_s_1360",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_856",
    "count": 0
  },
  {
    "id": "ql_s_1361",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_856",
    "count": 0
  },
  {
    "id": "ql_s_1362",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_856",
    "count": 0
  },
  {
    "id": "ql_s_1363",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_856",
    "count": 0
  },
  {
    "id": "ql_s_1364",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1365",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1366",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1367",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1368",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1369",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1370",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1371",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1372",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_856",
    "count": 1
  },
  {
    "id": "ql_s_1373",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_856",
    "count": 0
  },
  {
    "id": "ql_s_1374",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_857",
    "count": 0
  },
  {
    "id": "ql_s_1375",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_857",
    "count": 0
  },
  {
    "id": "ql_s_1376",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1377",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_857",
    "count": 0
  },
  {
    "id": "ql_s_1378",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_857",
    "count": 0
  },
  {
    "id": "ql_s_1379",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_857",
    "count": 2
  },
  {
    "id": "ql_s_1380",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1381",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_857",
    "count": 2
  },
  {
    "id": "ql_s_1382",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1383",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1384",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1385",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1386",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_857",
    "count": 1
  },
  {
    "id": "ql_s_1387",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_857",
    "count": 0
  },
  {
    "id": "ql_s_1388",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_858",
    "count": 0
  },
  {
    "id": "ql_s_1389",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_858",
    "count": 0
  },
  {
    "id": "ql_s_1390",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_858",
    "count": 0
  },
  {
    "id": "ql_s_1391",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_858",
    "count": 0
  },
  {
    "id": "ql_s_1392",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_858",
    "count": 0
  },
  {
    "id": "ql_s_1393",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1394",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1395",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1396",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1397",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1398",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1399",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1400",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_858",
    "count": 1
  },
  {
    "id": "ql_s_1401",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_858",
    "count": 0
  },
  {
    "id": "ql_s_1402",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_859",
    "count": 0
  },
  {
    "id": "ql_s_1403",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_859",
    "count": 0
  },
  {
    "id": "ql_s_1404",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1405",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_859",
    "count": 0
  },
  {
    "id": "ql_s_1406",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_859",
    "count": 0
  },
  {
    "id": "ql_s_1407",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1408",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1409",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1410",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1411",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_859",
    "count": 2
  },
  {
    "id": "ql_s_1412",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1413",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1414",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_859",
    "count": 1
  },
  {
    "id": "ql_s_1415",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_859",
    "count": 0
  },
  {
    "id": "ql_s_1416",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_860",
    "count": 0
  },
  {
    "id": "ql_s_1417",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_860",
    "count": 0
  },
  {
    "id": "ql_s_1418",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_860",
    "count": 0
  },
  {
    "id": "ql_s_1419",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_860",
    "count": 0
  },
  {
    "id": "ql_s_1420",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_860",
    "count": 0
  },
  {
    "id": "ql_s_1421",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1422",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1423",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1424",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1425",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1426",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1427",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1428",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_860",
    "count": 1
  },
  {
    "id": "ql_s_1429",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_860",
    "count": 0
  },
  {
    "id": "ql_s_1430",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_861",
    "count": 0
  },
  {
    "id": "ql_s_1431",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_861",
    "count": 0
  },
  {
    "id": "ql_s_1432",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_861",
    "count": 0
  },
  {
    "id": "ql_s_1433",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_861",
    "count": 0
  },
  {
    "id": "ql_s_1434",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_861",
    "count": 0
  },
  {
    "id": "ql_s_1435",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_861",
    "count": 3
  },
  {
    "id": "ql_s_1436",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_861",
    "count": 3
  },
  {
    "id": "ql_s_1437",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_861",
    "count": 3
  },
  {
    "id": "ql_s_1438",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_861",
    "count": 1
  },
  {
    "id": "ql_s_1439",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_861",
    "count": 3
  },
  {
    "id": "ql_s_1440",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_861",
    "count": 1
  },
  {
    "id": "ql_s_1441",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_861",
    "count": 1
  },
  {
    "id": "ql_s_1442",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_861",
    "count": 1
  },
  {
    "id": "ql_s_1443",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_861",
    "count": 0
  },
  {
    "id": "ql_s_1444",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_862",
    "count": 0
  },
  {
    "id": "ql_s_1445",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_862",
    "count": 0
  },
  {
    "id": "ql_s_1446",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_862",
    "count": 0
  },
  {
    "id": "ql_s_1447",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_862",
    "count": 0
  },
  {
    "id": "ql_s_1448",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_862",
    "count": 0
  },
  {
    "id": "ql_s_1449",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1450",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1451",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1452",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1453",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_862",
    "count": 2
  },
  {
    "id": "ql_s_1454",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1455",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1456",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_862",
    "count": 1
  },
  {
    "id": "ql_s_1457",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_862",
    "count": 0
  },
  {
    "id": "ql_s_1458",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_864",
    "count": 0
  },
  {
    "id": "ql_s_1459",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_864",
    "count": 0
  },
  {
    "id": "ql_s_1460",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_864",
    "count": 0
  },
  {
    "id": "ql_s_1461",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_864",
    "count": 0
  },
  {
    "id": "ql_s_1462",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1463",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1464",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1465",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1466",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1467",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1468",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1469",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1470",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_864",
    "count": 1
  },
  {
    "id": "ql_s_1471",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_864",
    "count": 0
  },
  {
    "id": "ql_s_1472",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_865",
    "count": 0
  },
  {
    "id": "ql_s_1473",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_865",
    "count": 0
  },
  {
    "id": "ql_s_1474",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_865",
    "count": 0
  },
  {
    "id": "ql_s_1475",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_865",
    "count": 0
  },
  {
    "id": "ql_s_1476",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_865",
    "count": 0
  },
  {
    "id": "ql_s_1477",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1478",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1479",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1480",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1481",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1482",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1483",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1484",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_865",
    "count": 1
  },
  {
    "id": "ql_s_1485",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_865",
    "count": 0
  },
  {
    "id": "ql_s_1486",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_866",
    "count": 0
  },
  {
    "id": "ql_s_1487",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_866",
    "count": 0
  },
  {
    "id": "ql_s_1488",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_866",
    "count": 0
  },
  {
    "id": "ql_s_1489",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_866",
    "count": 0
  },
  {
    "id": "ql_s_1490",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_866",
    "count": 0
  },
  {
    "id": "ql_s_1491",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_866",
    "count": 1
  },
  {
    "id": "ql_s_1492",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_866",
    "count": 2
  },
  {
    "id": "ql_s_1493",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_866",
    "count": 2
  },
  {
    "id": "ql_s_1494",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_866",
    "count": 2
  },
  {
    "id": "ql_s_1495",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_866",
    "count": 3
  },
  {
    "id": "ql_s_1496",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_866",
    "count": 1
  },
  {
    "id": "ql_s_1497",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_866",
    "count": 1
  },
  {
    "id": "ql_s_1498",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_866",
    "count": 2
  },
  {
    "id": "ql_s_1499",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_866",
    "count": 0
  },
  {
    "id": "ql_s_1500",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_867",
    "count": 0
  },
  {
    "id": "ql_s_1501",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_867",
    "count": 0
  },
  {
    "id": "ql_s_1502",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_867",
    "count": 0
  },
  {
    "id": "ql_s_1503",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_867",
    "count": 0
  },
  {
    "id": "ql_s_1504",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_867",
    "count": 0
  },
  {
    "id": "ql_s_1505",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1506",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1507",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1508",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1509",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1510",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1511",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1512",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_867",
    "count": 1
  },
  {
    "id": "ql_s_1513",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_867",
    "count": 0
  },
  {
    "id": "ql_s_1514",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_868",
    "count": 0
  },
  {
    "id": "ql_s_1515",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_868",
    "count": 0
  },
  {
    "id": "ql_s_1516",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_868",
    "count": 0
  },
  {
    "id": "ql_s_1517",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1518",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_868",
    "count": 0
  },
  {
    "id": "ql_s_1519",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1520",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1521",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1522",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1523",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1524",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1525",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1526",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_868",
    "count": 1
  },
  {
    "id": "ql_s_1527",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_868",
    "count": 0
  },
  {
    "id": "ql_s_1528",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_869",
    "count": 0
  },
  {
    "id": "ql_s_1529",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_869",
    "count": 0
  },
  {
    "id": "ql_s_1530",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_869",
    "count": 0
  },
  {
    "id": "ql_s_1531",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_869",
    "count": 0
  },
  {
    "id": "ql_s_1532",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_869",
    "count": 0
  },
  {
    "id": "ql_s_1533",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1534",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1535",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1536",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1537",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1538",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1539",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1540",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_869",
    "count": 1
  },
  {
    "id": "ql_s_1541",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_869",
    "count": 0
  },
  {
    "id": "ql_s_1542",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_870",
    "count": 0
  },
  {
    "id": "ql_s_1543",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_870",
    "count": 0
  },
  {
    "id": "ql_s_1544",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_870",
    "count": 0
  },
  {
    "id": "ql_s_1545",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1546",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_870",
    "count": 0
  },
  {
    "id": "ql_s_1547",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1548",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1549",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1550",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1551",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1552",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1553",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1554",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_870",
    "count": 1
  },
  {
    "id": "ql_s_1555",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_870",
    "count": 0
  },
  {
    "id": "ql_s_1556",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_871",
    "count": 0
  },
  {
    "id": "ql_s_1557",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_871",
    "count": 0
  },
  {
    "id": "ql_s_1558",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1559",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_871",
    "count": 0
  },
  {
    "id": "ql_s_1560",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_871",
    "count": 0
  },
  {
    "id": "ql_s_1561",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1562",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1563",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1564",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1565",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1566",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1567",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1568",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_871",
    "count": 1
  },
  {
    "id": "ql_s_1569",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_871",
    "count": 0
  },
  {
    "id": "ql_s_1570",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_872",
    "count": 0
  },
  {
    "id": "ql_s_1571",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_872",
    "count": 0
  },
  {
    "id": "ql_s_1572",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_872",
    "count": 0
  },
  {
    "id": "ql_s_1573",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_872",
    "count": 0
  },
  {
    "id": "ql_s_1574",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_872",
    "count": 0
  },
  {
    "id": "ql_s_1575",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1576",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1577",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1578",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1579",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1580",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1581",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1582",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_872",
    "count": 1
  },
  {
    "id": "ql_s_1583",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_872",
    "count": 0
  },
  {
    "id": "ql_s_1584",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_873",
    "count": 0
  },
  {
    "id": "ql_s_1585",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_873",
    "count": 0
  },
  {
    "id": "ql_s_1586",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_873",
    "count": 0
  },
  {
    "id": "ql_s_1587",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_873",
    "count": 0
  },
  {
    "id": "ql_s_1588",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_873",
    "count": 0
  },
  {
    "id": "ql_s_1589",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1590",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1591",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1592",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1593",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1594",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1595",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1596",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_873",
    "count": 1
  },
  {
    "id": "ql_s_1597",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_873",
    "count": 0
  },
  {
    "id": "ql_s_1598",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_874",
    "count": 0
  },
  {
    "id": "ql_s_1599",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_874",
    "count": 0
  },
  {
    "id": "ql_s_1600",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_874",
    "count": 0
  },
  {
    "id": "ql_s_1601",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_874",
    "count": 0
  },
  {
    "id": "ql_s_1602",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_874",
    "count": 0
  },
  {
    "id": "ql_s_1603",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_874",
    "count": 2
  },
  {
    "id": "ql_s_1604",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_874",
    "count": 1
  },
  {
    "id": "ql_s_1605",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_874",
    "count": 1
  },
  {
    "id": "ql_s_1606",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_874",
    "count": 1
  },
  {
    "id": "ql_s_1607",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_874",
    "count": 2
  },
  {
    "id": "ql_s_1608",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_874",
    "count": 2
  },
  {
    "id": "ql_s_1609",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_874",
    "count": 1
  },
  {
    "id": "ql_s_1610",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_874",
    "count": 1
  },
  {
    "id": "ql_s_1611",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_874",
    "count": 0
  },
  {
    "id": "ql_s_1612",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_875",
    "count": 0
  },
  {
    "id": "ql_s_1613",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_875",
    "count": 0
  },
  {
    "id": "ql_s_1614",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_875",
    "count": 1
  },
  {
    "id": "ql_s_1615",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_875",
    "count": 0
  },
  {
    "id": "ql_s_1616",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_875",
    "count": 0
  },
  {
    "id": "ql_s_1617",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_875",
    "count": 2
  },
  {
    "id": "ql_s_1618",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_875",
    "count": 1
  },
  {
    "id": "ql_s_1619",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_875",
    "count": 1
  },
  {
    "id": "ql_s_1620",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_875",
    "count": 2
  },
  {
    "id": "ql_s_1621",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_875",
    "count": 2
  },
  {
    "id": "ql_s_1622",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_875",
    "count": 2
  },
  {
    "id": "ql_s_1623",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_875",
    "count": 1
  },
  {
    "id": "ql_s_1624",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_875",
    "count": 1
  },
  {
    "id": "ql_s_1625",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_875",
    "count": 0
  },
  {
    "id": "ql_s_1626",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_876",
    "count": 0
  },
  {
    "id": "ql_s_1627",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_876",
    "count": 0
  },
  {
    "id": "ql_s_1628",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_876",
    "count": 1
  },
  {
    "id": "ql_s_1629",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_876",
    "count": 0
  },
  {
    "id": "ql_s_1630",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_876",
    "count": 0
  },
  {
    "id": "ql_s_1631",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_876",
    "count": 4
  },
  {
    "id": "ql_s_1632",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_876",
    "count": 3
  },
  {
    "id": "ql_s_1633",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_876",
    "count": 3
  },
  {
    "id": "ql_s_1634",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_876",
    "count": 3
  },
  {
    "id": "ql_s_1635",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_876",
    "count": 4
  },
  {
    "id": "ql_s_1636",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_876",
    "count": 3
  },
  {
    "id": "ql_s_1637",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_876",
    "count": 1
  },
  {
    "id": "ql_s_1638",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_876",
    "count": 3
  },
  {
    "id": "ql_s_1639",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_876",
    "count": 0
  },
  {
    "id": "ql_s_1640",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1641",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1642",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_878",
    "count": 1
  },
  {
    "id": "ql_s_1643",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1644",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1645",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_878",
    "count": 1
  },
  {
    "id": "ql_s_1646",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_878",
    "count": 1
  },
  {
    "id": "ql_s_1647",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_878",
    "count": 1
  },
  {
    "id": "ql_s_1648",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_878",
    "count": 1
  },
  {
    "id": "ql_s_1649",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_878",
    "count": 2
  },
  {
    "id": "ql_s_1650",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1651",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_878",
    "count": 1
  },
  {
    "id": "ql_s_1652",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1653",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_878",
    "count": 0
  },
  {
    "id": "ql_s_1654",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_879",
    "count": 0
  },
  {
    "id": "ql_s_1655",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_879",
    "count": 0
  },
  {
    "id": "ql_s_1656",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_879",
    "count": 1
  },
  {
    "id": "ql_s_1657",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_879",
    "count": 0
  },
  {
    "id": "ql_s_1658",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_879",
    "count": 0
  },
  {
    "id": "ql_s_1659",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_879",
    "count": 2
  },
  {
    "id": "ql_s_1660",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_879",
    "count": 3
  },
  {
    "id": "ql_s_1661",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_879",
    "count": 2
  },
  {
    "id": "ql_s_1662",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_879",
    "count": 2
  },
  {
    "id": "ql_s_1663",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_879",
    "count": 4
  },
  {
    "id": "ql_s_1664",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_879",
    "count": 2
  },
  {
    "id": "ql_s_1665",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_879",
    "count": 1
  },
  {
    "id": "ql_s_1666",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_879",
    "count": 2
  },
  {
    "id": "ql_s_1667",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_879",
    "count": 0
  },
  {
    "id": "ql_s_1668",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_880",
    "count": 0
  },
  {
    "id": "ql_s_1669",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_880",
    "count": 0
  },
  {
    "id": "ql_s_1670",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_880",
    "count": 0
  },
  {
    "id": "ql_s_1671",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_880",
    "count": 1
  },
  {
    "id": "ql_s_1672",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_880",
    "count": 0
  },
  {
    "id": "ql_s_1673",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_880",
    "count": 1
  },
  {
    "id": "ql_s_1674",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_880",
    "count": 1
  },
  {
    "id": "ql_s_1675",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_880",
    "count": 1
  },
  {
    "id": "ql_s_1676",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_880",
    "count": 2
  },
  {
    "id": "ql_s_1677",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_880",
    "count": 1
  },
  {
    "id": "ql_s_1678",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_880",
    "count": 2
  },
  {
    "id": "ql_s_1679",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_880",
    "count": 1
  },
  {
    "id": "ql_s_1680",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_880",
    "count": 2
  },
  {
    "id": "ql_s_1681",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_880",
    "count": 0
  },
  {
    "id": "ql_s_1682",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_881",
    "count": 1
  },
  {
    "id": "ql_s_1683",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_881",
    "count": 0
  },
  {
    "id": "ql_s_1684",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_881",
    "count": 0
  },
  {
    "id": "ql_s_1685",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_881",
    "count": 0
  },
  {
    "id": "ql_s_1686",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_881",
    "count": 0
  },
  {
    "id": "ql_s_1687",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_881",
    "count": 2
  },
  {
    "id": "ql_s_1688",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_881",
    "count": 3
  },
  {
    "id": "ql_s_1689",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_881",
    "count": 2
  },
  {
    "id": "ql_s_1690",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_881",
    "count": 2
  },
  {
    "id": "ql_s_1691",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_881",
    "count": 4
  },
  {
    "id": "ql_s_1692",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_881",
    "count": 2
  },
  {
    "id": "ql_s_1693",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_881",
    "count": 1
  },
  {
    "id": "ql_s_1694",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_881",
    "count": 2
  },
  {
    "id": "ql_s_1695",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_881",
    "count": 0
  },
  {
    "id": "ql_s_1696",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_882",
    "count": 0
  },
  {
    "id": "ql_s_1697",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_882",
    "count": 0
  },
  {
    "id": "ql_s_1698",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_882",
    "count": 0
  },
  {
    "id": "ql_s_1699",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_882",
    "count": 0
  },
  {
    "id": "ql_s_1700",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_882",
    "count": 0
  },
  {
    "id": "ql_s_1701",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_882",
    "count": 5
  },
  {
    "id": "ql_s_1702",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_882",
    "count": 5
  },
  {
    "id": "ql_s_1703",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_882",
    "count": 6
  },
  {
    "id": "ql_s_1704",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_882",
    "count": 4
  },
  {
    "id": "ql_s_1705",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_882",
    "count": 7
  },
  {
    "id": "ql_s_1706",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_882",
    "count": 3
  },
  {
    "id": "ql_s_1707",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_882",
    "count": 1
  },
  {
    "id": "ql_s_1708",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_882",
    "count": 4
  },
  {
    "id": "ql_s_1709",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_882",
    "count": 0
  },
  {
    "id": "ql_s_1710",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_883",
    "count": 0
  },
  {
    "id": "ql_s_1711",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1712",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_883",
    "count": 0
  },
  {
    "id": "ql_s_1713",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_883",
    "count": 0
  },
  {
    "id": "ql_s_1714",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_883",
    "count": 0
  },
  {
    "id": "ql_s_1715",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1716",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1717",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1718",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1719",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1720",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1721",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1722",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_883",
    "count": 1
  },
  {
    "id": "ql_s_1723",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_883",
    "count": 0
  },
  {
    "id": "ql_s_1724",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_884",
    "count": 0
  },
  {
    "id": "ql_s_1725",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_884",
    "count": 0
  },
  {
    "id": "ql_s_1726",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_884",
    "count": 0
  },
  {
    "id": "ql_s_1727",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_884",
    "count": 0
  },
  {
    "id": "ql_s_1728",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_884",
    "count": 0
  },
  {
    "id": "ql_s_1729",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1730",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1731",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1732",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1733",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1734",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1735",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1736",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_884",
    "count": 1
  },
  {
    "id": "ql_s_1737",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_884",
    "count": 0
  },
  {
    "id": "ql_s_1738",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_885",
    "count": 0
  },
  {
    "id": "ql_s_1739",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_885",
    "count": 0
  },
  {
    "id": "ql_s_1740",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_885",
    "count": 0
  },
  {
    "id": "ql_s_1741",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_885",
    "count": 1
  },
  {
    "id": "ql_s_1742",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_885",
    "count": 0
  },
  {
    "id": "ql_s_1743",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_885",
    "count": 3
  },
  {
    "id": "ql_s_1744",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_885",
    "count": 4
  },
  {
    "id": "ql_s_1745",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_885",
    "count": 4
  },
  {
    "id": "ql_s_1746",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_885",
    "count": 3
  },
  {
    "id": "ql_s_1747",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_885",
    "count": 5
  },
  {
    "id": "ql_s_1748",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_885",
    "count": 3
  },
  {
    "id": "ql_s_1749",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_885",
    "count": 1
  },
  {
    "id": "ql_s_1750",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_885",
    "count": 4
  },
  {
    "id": "ql_s_1751",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_885",
    "count": 0
  },
  {
    "id": "ql_s_1752",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_886",
    "count": 0
  },
  {
    "id": "ql_s_1753",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_886",
    "count": 0
  },
  {
    "id": "ql_s_1754",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_886",
    "count": 0
  },
  {
    "id": "ql_s_1755",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_886",
    "count": 0
  },
  {
    "id": "ql_s_1756",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_886",
    "count": 0
  },
  {
    "id": "ql_s_1757",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_886",
    "count": 2
  },
  {
    "id": "ql_s_1758",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_886",
    "count": 3
  },
  {
    "id": "ql_s_1759",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_886",
    "count": 3
  },
  {
    "id": "ql_s_1760",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_886",
    "count": 2
  },
  {
    "id": "ql_s_1761",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_886",
    "count": 5
  },
  {
    "id": "ql_s_1762",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_886",
    "count": 2
  },
  {
    "id": "ql_s_1763",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_886",
    "count": 1
  },
  {
    "id": "ql_s_1764",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_886",
    "count": 3
  },
  {
    "id": "ql_s_1765",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_886",
    "count": 0
  },
  {
    "id": "ql_s_1766",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_887",
    "count": 0
  },
  {
    "id": "ql_s_1767",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_887",
    "count": 1
  },
  {
    "id": "ql_s_1768",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_887",
    "count": 0
  },
  {
    "id": "ql_s_1769",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_887",
    "count": 0
  },
  {
    "id": "ql_s_1770",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_887",
    "count": 0
  },
  {
    "id": "ql_s_1771",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_887",
    "count": 3
  },
  {
    "id": "ql_s_1772",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_887",
    "count": 3
  },
  {
    "id": "ql_s_1773",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_887",
    "count": 2
  },
  {
    "id": "ql_s_1774",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_887",
    "count": 1
  },
  {
    "id": "ql_s_1775",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_887",
    "count": 3
  },
  {
    "id": "ql_s_1776",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_887",
    "count": 2
  },
  {
    "id": "ql_s_1777",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_887",
    "count": 1
  },
  {
    "id": "ql_s_1778",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_887",
    "count": 1
  },
  {
    "id": "ql_s_1779",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_887",
    "count": 0
  },
  {
    "id": "ql_s_1780",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1781",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_888",
    "count": 0
  },
  {
    "id": "ql_s_1782",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_888",
    "count": 0
  },
  {
    "id": "ql_s_1783",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_888",
    "count": 0
  },
  {
    "id": "ql_s_1784",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_888",
    "count": 0
  },
  {
    "id": "ql_s_1785",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1786",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1787",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1788",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1789",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1790",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1791",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1792",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_888",
    "count": 1
  },
  {
    "id": "ql_s_1793",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_888",
    "count": 0
  },
  {
    "id": "ql_s_1794",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_889",
    "count": 0
  },
  {
    "id": "ql_s_1795",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_889",
    "count": 0
  },
  {
    "id": "ql_s_1796",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_889",
    "count": 0
  },
  {
    "id": "ql_s_1797",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_889",
    "count": 0
  },
  {
    "id": "ql_s_1798",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_889",
    "count": 0
  },
  {
    "id": "ql_s_1799",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_889",
    "count": 1
  },
  {
    "id": "ql_s_1800",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_889",
    "count": 2
  },
  {
    "id": "ql_s_1801",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_889",
    "count": 1
  },
  {
    "id": "ql_s_1802",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_889",
    "count": 1
  },
  {
    "id": "ql_s_1803",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_889",
    "count": 2
  },
  {
    "id": "ql_s_1804",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_889",
    "count": 1
  },
  {
    "id": "ql_s_1805",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_889",
    "count": 1
  },
  {
    "id": "ql_s_1806",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_889",
    "count": 1
  },
  {
    "id": "ql_s_1807",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_889",
    "count": 0
  },
  {
    "id": "ql_s_1808",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_890",
    "count": 0
  },
  {
    "id": "ql_s_1809",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_890",
    "count": 0
  },
  {
    "id": "ql_s_1810",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_890",
    "count": 0
  },
  {
    "id": "ql_s_1811",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_890",
    "count": 0
  },
  {
    "id": "ql_s_1812",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_890",
    "count": 0
  },
  {
    "id": "ql_s_1813",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1814",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1815",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1816",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1817",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1818",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1819",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1820",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_890",
    "count": 1
  },
  {
    "id": "ql_s_1821",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_890",
    "count": 0
  },
  {
    "id": "ql_s_1822",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_891",
    "count": 0
  },
  {
    "id": "ql_s_1823",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_891",
    "count": 0
  },
  {
    "id": "ql_s_1824",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_891",
    "count": 0
  },
  {
    "id": "ql_s_1825",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_891",
    "count": 0
  },
  {
    "id": "ql_s_1826",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_891",
    "count": 0
  },
  {
    "id": "ql_s_1827",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1828",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1829",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1830",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1831",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_891",
    "count": 2
  },
  {
    "id": "ql_s_1832",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1833",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1834",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_891",
    "count": 1
  },
  {
    "id": "ql_s_1835",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_891",
    "count": 0
  },
  {
    "id": "ql_s_1836",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_892",
    "count": 0
  },
  {
    "id": "ql_s_1837",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_892",
    "count": 0
  },
  {
    "id": "ql_s_1838",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_892",
    "count": 0
  },
  {
    "id": "ql_s_1839",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_892",
    "count": 0
  },
  {
    "id": "ql_s_1840",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_892",
    "count": 0
  },
  {
    "id": "ql_s_1841",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_892",
    "count": 1
  },
  {
    "id": "ql_s_1842",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_892",
    "count": 2
  },
  {
    "id": "ql_s_1843",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_892",
    "count": 2
  },
  {
    "id": "ql_s_1844",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_892",
    "count": 1
  },
  {
    "id": "ql_s_1845",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_892",
    "count": 3
  },
  {
    "id": "ql_s_1846",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_892",
    "count": 1
  },
  {
    "id": "ql_s_1847",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_892",
    "count": 1
  },
  {
    "id": "ql_s_1848",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_892",
    "count": 2
  },
  {
    "id": "ql_s_1849",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_892",
    "count": 0
  },
  {
    "id": "ql_s_1850",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_893",
    "count": 0
  },
  {
    "id": "ql_s_1851",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_893",
    "count": 0
  },
  {
    "id": "ql_s_1852",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1853",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_893",
    "count": 0
  },
  {
    "id": "ql_s_1854",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_893",
    "count": 0
  },
  {
    "id": "ql_s_1855",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1856",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1857",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1858",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1859",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1860",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1861",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1862",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_893",
    "count": 1
  },
  {
    "id": "ql_s_1863",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_893",
    "count": 0
  },
  {
    "id": "ql_s_1864",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_894",
    "count": 0
  },
  {
    "id": "ql_s_1865",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_894",
    "count": 0
  },
  {
    "id": "ql_s_1866",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_894",
    "count": 0
  },
  {
    "id": "ql_s_1867",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1868",
    "schoolId": "hs_155001",
    "middleSchoolId": "ms_894",
    "count": 0
  },
  {
    "id": "ql_s_1869",
    "schoolId": "hs_152001",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1870",
    "schoolId": "hs_152002",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1871",
    "schoolId": "hs_153001",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1872",
    "schoolId": "hs_153005",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1873",
    "schoolId": "hs_152004",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1874",
    "schoolId": "hs_153004",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1875",
    "schoolId": "hs_152005",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1876",
    "schoolId": "hs_151078",
    "middleSchoolId": "ms_894",
    "count": 1
  },
  {
    "id": "ql_s_1877",
    "schoolId": "hs_214002",
    "middleSchoolId": "ms_894",
    "count": 0
  },
  {
    "id": "ql_s_1878",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_895",
    "count": 0
  },
  {
    "id": "ql_s_1879",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_895",
    "count": 0
  },
  {
    "id": "ql_s_1880",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_895",
    "count": 0
  },
  {
    "id": "ql_s_1881",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_895",
    "count": 0
  },
  {
    "id": "ql_s_1882",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_895",
    "count": 1
  },
  {
    "id": "ql_s_1883",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_895",
    "count": 2
  },
  {
    "id": "ql_s_1884",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_895",
    "count": 2
  },
  {
    "id": "ql_s_1885",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_895",
    "count": 2
  },
  {
    "id": "ql_s_1886",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_896",
    "count": 0
  },
  {
    "id": "ql_s_1887",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_896",
    "count": 0
  },
  {
    "id": "ql_s_1888",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_896",
    "count": 1
  },
  {
    "id": "ql_s_1889",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_896",
    "count": 0
  },
  {
    "id": "ql_s_1890",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_896",
    "count": 1
  },
  {
    "id": "ql_s_1891",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_896",
    "count": 4
  },
  {
    "id": "ql_s_1892",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_896",
    "count": 3
  },
  {
    "id": "ql_s_1893",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_896",
    "count": 4
  },
  {
    "id": "ql_s_1894",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_897",
    "count": 0
  },
  {
    "id": "ql_s_1895",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_897",
    "count": 0
  },
  {
    "id": "ql_s_1896",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_897",
    "count": 0
  },
  {
    "id": "ql_s_1897",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_897",
    "count": 0
  },
  {
    "id": "ql_s_1898",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_897",
    "count": 1
  },
  {
    "id": "ql_s_1899",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_897",
    "count": 4
  },
  {
    "id": "ql_s_1900",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_897",
    "count": 3
  },
  {
    "id": "ql_s_1901",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_897",
    "count": 3
  },
  {
    "id": "ql_s_1902",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_898",
    "count": 0
  },
  {
    "id": "ql_s_1903",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_898",
    "count": 0
  },
  {
    "id": "ql_s_1904",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_898",
    "count": 0
  },
  {
    "id": "ql_s_1905",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_898",
    "count": 0
  },
  {
    "id": "ql_s_1906",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_898",
    "count": 1
  },
  {
    "id": "ql_s_1907",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_898",
    "count": 5
  },
  {
    "id": "ql_s_1908",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_898",
    "count": 4
  },
  {
    "id": "ql_s_1909",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_898",
    "count": 4
  },
  {
    "id": "ql_s_1910",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_899",
    "count": 0
  },
  {
    "id": "ql_s_1911",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_899",
    "count": 0
  },
  {
    "id": "ql_s_1912",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_899",
    "count": 0
  },
  {
    "id": "ql_s_1913",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_899",
    "count": 0
  },
  {
    "id": "ql_s_1914",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_899",
    "count": 2
  },
  {
    "id": "ql_s_1915",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_899",
    "count": 8
  },
  {
    "id": "ql_s_1916",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_899",
    "count": 7
  },
  {
    "id": "ql_s_1917",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_899",
    "count": 8
  },
  {
    "id": "ql_s_1918",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_900",
    "count": 0
  },
  {
    "id": "ql_s_1919",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_900",
    "count": 0
  },
  {
    "id": "ql_s_1920",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_900",
    "count": 0
  },
  {
    "id": "ql_s_1921",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_900",
    "count": 0
  },
  {
    "id": "ql_s_1922",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_900",
    "count": 1
  },
  {
    "id": "ql_s_1923",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_900",
    "count": 1
  },
  {
    "id": "ql_s_1924",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_900",
    "count": 1
  },
  {
    "id": "ql_s_1925",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_900",
    "count": 1
  },
  {
    "id": "ql_s_1926",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_901",
    "count": 0
  },
  {
    "id": "ql_s_1927",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_901",
    "count": 0
  },
  {
    "id": "ql_s_1928",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_901",
    "count": 0
  },
  {
    "id": "ql_s_1929",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_901",
    "count": 0
  },
  {
    "id": "ql_s_1930",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_901",
    "count": 2
  },
  {
    "id": "ql_s_1931",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_901",
    "count": 4
  },
  {
    "id": "ql_s_1932",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_901",
    "count": 5
  },
  {
    "id": "ql_s_1933",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_901",
    "count": 4
  },
  {
    "id": "ql_s_1934",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_902",
    "count": 1
  },
  {
    "id": "ql_s_1935",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_902",
    "count": 0
  },
  {
    "id": "ql_s_1936",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_902",
    "count": 0
  },
  {
    "id": "ql_s_1937",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_902",
    "count": 0
  },
  {
    "id": "ql_s_1938",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_902",
    "count": 1
  },
  {
    "id": "ql_s_1939",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_902",
    "count": 3
  },
  {
    "id": "ql_s_1940",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_902",
    "count": 3
  },
  {
    "id": "ql_s_1941",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_902",
    "count": 3
  },
  {
    "id": "ql_s_1942",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_903",
    "count": 0
  },
  {
    "id": "ql_s_1943",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_903",
    "count": 0
  },
  {
    "id": "ql_s_1944",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_903",
    "count": 0
  },
  {
    "id": "ql_s_1945",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_903",
    "count": 0
  },
  {
    "id": "ql_s_1946",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_903",
    "count": 3
  },
  {
    "id": "ql_s_1947",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_903",
    "count": 8
  },
  {
    "id": "ql_s_1948",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_903",
    "count": 7
  },
  {
    "id": "ql_s_1949",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_903",
    "count": 8
  },
  {
    "id": "ql_s_1950",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_904",
    "count": 0
  },
  {
    "id": "ql_s_1951",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_904",
    "count": 0
  },
  {
    "id": "ql_s_1952",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_904",
    "count": 0
  },
  {
    "id": "ql_s_1953",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_904",
    "count": 0
  },
  {
    "id": "ql_s_1954",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_904",
    "count": 6
  },
  {
    "id": "ql_s_1955",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_904",
    "count": 18
  },
  {
    "id": "ql_s_1956",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_904",
    "count": 18
  },
  {
    "id": "ql_s_1957",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_904",
    "count": 18
  },
  {
    "id": "ql_s_1958",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_905",
    "count": 1
  },
  {
    "id": "ql_s_1959",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_905",
    "count": 0
  },
  {
    "id": "ql_s_1960",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_905",
    "count": 0
  },
  {
    "id": "ql_s_1961",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_905",
    "count": 0
  },
  {
    "id": "ql_s_1962",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_905",
    "count": 2
  },
  {
    "id": "ql_s_1963",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_905",
    "count": 7
  },
  {
    "id": "ql_s_1964",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_905",
    "count": 7
  },
  {
    "id": "ql_s_1965",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_905",
    "count": 8
  },
  {
    "id": "ql_s_1966",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_906",
    "count": 0
  },
  {
    "id": "ql_s_1967",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_906",
    "count": 1
  },
  {
    "id": "ql_s_1968",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_906",
    "count": 0
  },
  {
    "id": "ql_s_1969",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_906",
    "count": 0
  },
  {
    "id": "ql_s_1970",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_906",
    "count": 2
  },
  {
    "id": "ql_s_1971",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_906",
    "count": 5
  },
  {
    "id": "ql_s_1972",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_906",
    "count": 4
  },
  {
    "id": "ql_s_1973",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_906",
    "count": 5
  },
  {
    "id": "ql_s_1974",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_907",
    "count": 0
  },
  {
    "id": "ql_s_1975",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_907",
    "count": 0
  },
  {
    "id": "ql_s_1976",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_907",
    "count": 0
  },
  {
    "id": "ql_s_1977",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_907",
    "count": 0
  },
  {
    "id": "ql_s_1978",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_907",
    "count": 2
  },
  {
    "id": "ql_s_1979",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_907",
    "count": 6
  },
  {
    "id": "ql_s_1980",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_907",
    "count": 7
  },
  {
    "id": "ql_s_1981",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_907",
    "count": 6
  },
  {
    "id": "ql_s_1982",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_908",
    "count": 0
  },
  {
    "id": "ql_s_1983",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_908",
    "count": 1
  },
  {
    "id": "ql_s_1984",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_908",
    "count": 0
  },
  {
    "id": "ql_s_1985",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_908",
    "count": 0
  },
  {
    "id": "ql_s_1986",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_908",
    "count": 3
  },
  {
    "id": "ql_s_1987",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_908",
    "count": 8
  },
  {
    "id": "ql_s_1988",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_908",
    "count": 8
  },
  {
    "id": "ql_s_1989",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_908",
    "count": 9
  },
  {
    "id": "ql_s_1990",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_909",
    "count": 0
  },
  {
    "id": "ql_s_1991",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_909",
    "count": 0
  },
  {
    "id": "ql_s_1992",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_909",
    "count": 0
  },
  {
    "id": "ql_s_1993",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_909",
    "count": 0
  },
  {
    "id": "ql_s_1994",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_909",
    "count": 1
  },
  {
    "id": "ql_s_1995",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_909",
    "count": 1
  },
  {
    "id": "ql_s_1996",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_909",
    "count": 1
  },
  {
    "id": "ql_s_1997",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_909",
    "count": 1
  },
  {
    "id": "ql_s_1998",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_910",
    "count": 0
  },
  {
    "id": "ql_s_1999",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_910",
    "count": 0
  },
  {
    "id": "ql_s_2000",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_910",
    "count": 1
  },
  {
    "id": "ql_s_2001",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_910",
    "count": 0
  },
  {
    "id": "ql_s_2002",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_910",
    "count": 2
  },
  {
    "id": "ql_s_2003",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_910",
    "count": 8
  },
  {
    "id": "ql_s_2004",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_910",
    "count": 8
  },
  {
    "id": "ql_s_2005",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_910",
    "count": 7
  },
  {
    "id": "ql_s_2006",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_911",
    "count": 0
  },
  {
    "id": "ql_s_2007",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_911",
    "count": 0
  },
  {
    "id": "ql_s_2008",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_911",
    "count": 1
  },
  {
    "id": "ql_s_2009",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_911",
    "count": 0
  },
  {
    "id": "ql_s_2010",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_911",
    "count": 2
  },
  {
    "id": "ql_s_2011",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_911",
    "count": 7
  },
  {
    "id": "ql_s_2012",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_911",
    "count": 7
  },
  {
    "id": "ql_s_2013",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_911",
    "count": 6
  },
  {
    "id": "ql_s_2014",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_912",
    "count": 0
  },
  {
    "id": "ql_s_2015",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_912",
    "count": 0
  },
  {
    "id": "ql_s_2016",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_912",
    "count": 0
  },
  {
    "id": "ql_s_2017",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_912",
    "count": 0
  },
  {
    "id": "ql_s_2018",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_912",
    "count": 1
  },
  {
    "id": "ql_s_2019",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_912",
    "count": 2
  },
  {
    "id": "ql_s_2020",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_912",
    "count": 3
  },
  {
    "id": "ql_s_2021",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_912",
    "count": 3
  },
  {
    "id": "ql_s_2022",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_913",
    "count": 0
  },
  {
    "id": "ql_s_2023",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_913",
    "count": 0
  },
  {
    "id": "ql_s_2024",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_913",
    "count": 0
  },
  {
    "id": "ql_s_2025",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_913",
    "count": 0
  },
  {
    "id": "ql_s_2026",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_913",
    "count": 1
  },
  {
    "id": "ql_s_2027",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_913",
    "count": 1
  },
  {
    "id": "ql_s_2028",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_913",
    "count": 2
  },
  {
    "id": "ql_s_2029",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_913",
    "count": 2
  },
  {
    "id": "ql_s_2030",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_914",
    "count": 0
  },
  {
    "id": "ql_s_2031",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_914",
    "count": 0
  },
  {
    "id": "ql_s_2032",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_914",
    "count": 1
  },
  {
    "id": "ql_s_2033",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_914",
    "count": 0
  },
  {
    "id": "ql_s_2034",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_914",
    "count": 1
  },
  {
    "id": "ql_s_2035",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_914",
    "count": 1
  },
  {
    "id": "ql_s_2036",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_914",
    "count": 1
  },
  {
    "id": "ql_s_2037",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_914",
    "count": 1
  },
  {
    "id": "ql_s_2038",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_915",
    "count": 0
  },
  {
    "id": "ql_s_2039",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_915",
    "count": 0
  },
  {
    "id": "ql_s_2040",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_915",
    "count": 1
  },
  {
    "id": "ql_s_2041",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_915",
    "count": 0
  },
  {
    "id": "ql_s_2042",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_915",
    "count": 3
  },
  {
    "id": "ql_s_2043",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_915",
    "count": 8
  },
  {
    "id": "ql_s_2044",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_915",
    "count": 9
  },
  {
    "id": "ql_s_2045",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_915",
    "count": 8
  },
  {
    "id": "ql_s_2046",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_916",
    "count": 0
  },
  {
    "id": "ql_s_2047",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_916",
    "count": 0
  },
  {
    "id": "ql_s_2048",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_916",
    "count": 0
  },
  {
    "id": "ql_s_2049",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_916",
    "count": 0
  },
  {
    "id": "ql_s_2050",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_916",
    "count": 1
  },
  {
    "id": "ql_s_2051",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_916",
    "count": 1
  },
  {
    "id": "ql_s_2052",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_916",
    "count": 1
  },
  {
    "id": "ql_s_2053",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_916",
    "count": 1
  },
  {
    "id": "ql_s_2054",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_917",
    "count": 0
  },
  {
    "id": "ql_s_2055",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_917",
    "count": 1
  },
  {
    "id": "ql_s_2056",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_917",
    "count": 0
  },
  {
    "id": "ql_s_2057",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_917",
    "count": 0
  },
  {
    "id": "ql_s_2058",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_917",
    "count": 2
  },
  {
    "id": "ql_s_2059",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_917",
    "count": 7
  },
  {
    "id": "ql_s_2060",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_917",
    "count": 7
  },
  {
    "id": "ql_s_2061",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_917",
    "count": 6
  },
  {
    "id": "ql_s_2062",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_918",
    "count": 0
  },
  {
    "id": "ql_s_2063",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_918",
    "count": 0
  },
  {
    "id": "ql_s_2064",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_918",
    "count": 0
  },
  {
    "id": "ql_s_2065",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_918",
    "count": 0
  },
  {
    "id": "ql_s_2066",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_918",
    "count": 2
  },
  {
    "id": "ql_s_2067",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_918",
    "count": 2
  },
  {
    "id": "ql_s_2068",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_918",
    "count": 3
  },
  {
    "id": "ql_s_2069",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_918",
    "count": 2
  },
  {
    "id": "ql_s_2070",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_919",
    "count": 0
  },
  {
    "id": "ql_s_2071",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_919",
    "count": 0
  },
  {
    "id": "ql_s_2072",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_919",
    "count": 0
  },
  {
    "id": "ql_s_2073",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_919",
    "count": 0
  },
  {
    "id": "ql_s_2074",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_919",
    "count": 1
  },
  {
    "id": "ql_s_2075",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_919",
    "count": 2
  },
  {
    "id": "ql_s_2076",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_919",
    "count": 3
  },
  {
    "id": "ql_s_2077",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_919",
    "count": 2
  },
  {
    "id": "ql_s_2078",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_920",
    "count": 0
  },
  {
    "id": "ql_s_2079",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_920",
    "count": 0
  },
  {
    "id": "ql_s_2080",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_920",
    "count": 0
  },
  {
    "id": "ql_s_2081",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_920",
    "count": 0
  },
  {
    "id": "ql_s_2082",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_920",
    "count": 1
  },
  {
    "id": "ql_s_2083",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_920",
    "count": 6
  },
  {
    "id": "ql_s_2084",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_920",
    "count": 5
  },
  {
    "id": "ql_s_2085",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_920",
    "count": 6
  },
  {
    "id": "ql_s_2086",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_921",
    "count": 0
  },
  {
    "id": "ql_s_2087",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_921",
    "count": 0
  },
  {
    "id": "ql_s_2088",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_921",
    "count": 1
  },
  {
    "id": "ql_s_2089",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_921",
    "count": 0
  },
  {
    "id": "ql_s_2090",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_921",
    "count": 1
  },
  {
    "id": "ql_s_2091",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_921",
    "count": 2
  },
  {
    "id": "ql_s_2092",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_921",
    "count": 2
  },
  {
    "id": "ql_s_2093",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_921",
    "count": 1
  },
  {
    "id": "ql_s_2094",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_922",
    "count": 0
  },
  {
    "id": "ql_s_2095",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_922",
    "count": 0
  },
  {
    "id": "ql_s_2096",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_922",
    "count": 0
  },
  {
    "id": "ql_s_2097",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_922",
    "count": 0
  },
  {
    "id": "ql_s_2098",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_922",
    "count": 1
  },
  {
    "id": "ql_s_2099",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_922",
    "count": 2
  },
  {
    "id": "ql_s_2100",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_922",
    "count": 2
  },
  {
    "id": "ql_s_2101",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_922",
    "count": 2
  },
  {
    "id": "ql_s_2102",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_923",
    "count": 0
  },
  {
    "id": "ql_s_2103",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_923",
    "count": 0
  },
  {
    "id": "ql_s_2104",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_923",
    "count": 0
  },
  {
    "id": "ql_s_2105",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_923",
    "count": 0
  },
  {
    "id": "ql_s_2106",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_923",
    "count": 1
  },
  {
    "id": "ql_s_2107",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_923",
    "count": 3
  },
  {
    "id": "ql_s_2108",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_923",
    "count": 4
  },
  {
    "id": "ql_s_2109",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_923",
    "count": 4
  },
  {
    "id": "ql_s_2110",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_924",
    "count": 0
  },
  {
    "id": "ql_s_2111",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_924",
    "count": 0
  },
  {
    "id": "ql_s_2112",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_924",
    "count": 0
  },
  {
    "id": "ql_s_2113",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_924",
    "count": 0
  },
  {
    "id": "ql_s_2114",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_924",
    "count": 1
  },
  {
    "id": "ql_s_2115",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_924",
    "count": 4
  },
  {
    "id": "ql_s_2116",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_924",
    "count": 4
  },
  {
    "id": "ql_s_2117",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_924",
    "count": 5
  },
  {
    "id": "ql_s_2118",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_925",
    "count": 0
  },
  {
    "id": "ql_s_2119",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_925",
    "count": 0
  },
  {
    "id": "ql_s_2120",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_925",
    "count": 0
  },
  {
    "id": "ql_s_2121",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_925",
    "count": 0
  },
  {
    "id": "ql_s_2122",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_925",
    "count": 1
  },
  {
    "id": "ql_s_2123",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_925",
    "count": 1
  },
  {
    "id": "ql_s_2124",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_925",
    "count": 2
  },
  {
    "id": "ql_s_2125",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_925",
    "count": 2
  },
  {
    "id": "ql_s_2126",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_926",
    "count": 0
  },
  {
    "id": "ql_s_2127",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_926",
    "count": 1
  },
  {
    "id": "ql_s_2128",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_926",
    "count": 0
  },
  {
    "id": "ql_s_2129",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_926",
    "count": 0
  },
  {
    "id": "ql_s_2130",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_926",
    "count": 4
  },
  {
    "id": "ql_s_2131",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_926",
    "count": 12
  },
  {
    "id": "ql_s_2132",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_926",
    "count": 12
  },
  {
    "id": "ql_s_2133",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_926",
    "count": 12
  },
  {
    "id": "ql_s_2134",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_927",
    "count": 0
  },
  {
    "id": "ql_s_2135",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_927",
    "count": 0
  },
  {
    "id": "ql_s_2136",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_927",
    "count": 0
  },
  {
    "id": "ql_s_2137",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_927",
    "count": 0
  },
  {
    "id": "ql_s_2138",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_927",
    "count": 3
  },
  {
    "id": "ql_s_2139",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_927",
    "count": 8
  },
  {
    "id": "ql_s_2140",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_927",
    "count": 9
  },
  {
    "id": "ql_s_2141",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_927",
    "count": 8
  },
  {
    "id": "ql_s_2142",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_928",
    "count": 1
  },
  {
    "id": "ql_s_2143",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_928",
    "count": 0
  },
  {
    "id": "ql_s_2144",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_928",
    "count": 0
  },
  {
    "id": "ql_s_2145",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_928",
    "count": 0
  },
  {
    "id": "ql_s_2146",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_928",
    "count": 1
  },
  {
    "id": "ql_s_2147",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_928",
    "count": 3
  },
  {
    "id": "ql_s_2148",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_928",
    "count": 3
  },
  {
    "id": "ql_s_2149",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_928",
    "count": 3
  },
  {
    "id": "ql_s_2150",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_929",
    "count": 0
  },
  {
    "id": "ql_s_2151",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_929",
    "count": 0
  },
  {
    "id": "ql_s_2152",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_929",
    "count": 0
  },
  {
    "id": "ql_s_2153",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_929",
    "count": 0
  },
  {
    "id": "ql_s_2154",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_929",
    "count": 3
  },
  {
    "id": "ql_s_2155",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_929",
    "count": 5
  },
  {
    "id": "ql_s_2156",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_929",
    "count": 6
  },
  {
    "id": "ql_s_2157",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_929",
    "count": 6
  },
  {
    "id": "ql_s_2158",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_930",
    "count": 0
  },
  {
    "id": "ql_s_2159",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_930",
    "count": 0
  },
  {
    "id": "ql_s_2160",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_930",
    "count": 0
  },
  {
    "id": "ql_s_2161",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_930",
    "count": 1
  },
  {
    "id": "ql_s_2162",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_930",
    "count": 3
  },
  {
    "id": "ql_s_2163",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_930",
    "count": 5
  },
  {
    "id": "ql_s_2164",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_930",
    "count": 5
  },
  {
    "id": "ql_s_2165",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_930",
    "count": 6
  },
  {
    "id": "ql_s_2166",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_931",
    "count": 0
  },
  {
    "id": "ql_s_2167",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_931",
    "count": 0
  },
  {
    "id": "ql_s_2168",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_931",
    "count": 0
  },
  {
    "id": "ql_s_2169",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_931",
    "count": 0
  },
  {
    "id": "ql_s_2170",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_931",
    "count": 1
  },
  {
    "id": "ql_s_2171",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_931",
    "count": 1
  },
  {
    "id": "ql_s_2172",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_931",
    "count": 1
  },
  {
    "id": "ql_s_2173",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_931",
    "count": 1
  },
  {
    "id": "ql_s_2174",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_932",
    "count": 0
  },
  {
    "id": "ql_s_2175",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_932",
    "count": 0
  },
  {
    "id": "ql_s_2176",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_932",
    "count": 0
  },
  {
    "id": "ql_s_2177",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_932",
    "count": 0
  },
  {
    "id": "ql_s_2178",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_932",
    "count": 1
  },
  {
    "id": "ql_s_2179",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_932",
    "count": 5
  },
  {
    "id": "ql_s_2180",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_932",
    "count": 5
  },
  {
    "id": "ql_s_2181",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_932",
    "count": 5
  },
  {
    "id": "ql_s_2182",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_933",
    "count": 0
  },
  {
    "id": "ql_s_2183",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_933",
    "count": 0
  },
  {
    "id": "ql_s_2184",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_933",
    "count": 0
  },
  {
    "id": "ql_s_2185",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_933",
    "count": 0
  },
  {
    "id": "ql_s_2186",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_933",
    "count": 1
  },
  {
    "id": "ql_s_2187",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_933",
    "count": 4
  },
  {
    "id": "ql_s_2188",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_933",
    "count": 4
  },
  {
    "id": "ql_s_2189",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_933",
    "count": 4
  },
  {
    "id": "ql_s_2190",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_934",
    "count": 0
  },
  {
    "id": "ql_s_2191",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_934",
    "count": 0
  },
  {
    "id": "ql_s_2192",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_934",
    "count": 0
  },
  {
    "id": "ql_s_2193",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_934",
    "count": 0
  },
  {
    "id": "ql_s_2194",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_934",
    "count": 1
  },
  {
    "id": "ql_s_2195",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_934",
    "count": 2
  },
  {
    "id": "ql_s_2196",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_934",
    "count": 1
  },
  {
    "id": "ql_s_2197",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_934",
    "count": 2
  },
  {
    "id": "ql_s_2198",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_935",
    "count": 0
  },
  {
    "id": "ql_s_2199",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_935",
    "count": 0
  },
  {
    "id": "ql_s_2200",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_935",
    "count": 0
  },
  {
    "id": "ql_s_2201",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_935",
    "count": 0
  },
  {
    "id": "ql_s_2202",
    "schoolId": "hs_064013",
    "middleSchoolId": "ms_935",
    "count": 2
  },
  {
    "id": "ql_s_2203",
    "schoolId": "hs_042001",
    "middleSchoolId": "ms_935",
    "count": 6
  },
  {
    "id": "ql_s_2204",
    "schoolId": "hs_072001",
    "middleSchoolId": "ms_935",
    "count": 7
  },
  {
    "id": "ql_s_2205",
    "schoolId": "hs_073003",
    "middleSchoolId": "ms_935",
    "count": 7
  },
  {
    "id": "ql_s_2206",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_936",
    "count": 0
  },
  {
    "id": "ql_s_2207",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_936",
    "count": 0
  },
  {
    "id": "ql_s_2208",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_936",
    "count": 0
  },
  {
    "id": "ql_s_2209",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_936",
    "count": 0
  },
  {
    "id": "ql_s_2210",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_936",
    "count": 15
  },
  {
    "id": "ql_s_2211",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_936",
    "count": 35
  },
  {
    "id": "ql_s_2212",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_936",
    "count": 35
  },
  {
    "id": "ql_s_2213",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_937",
    "count": 0
  },
  {
    "id": "ql_s_2214",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_937",
    "count": 0
  },
  {
    "id": "ql_s_2215",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_937",
    "count": 0
  },
  {
    "id": "ql_s_2216",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_937",
    "count": 0
  },
  {
    "id": "ql_s_2217",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_937",
    "count": 11
  },
  {
    "id": "ql_s_2218",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_937",
    "count": 25
  },
  {
    "id": "ql_s_2219",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_937",
    "count": 25
  },
  {
    "id": "ql_s_2220",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_938",
    "count": 0
  },
  {
    "id": "ql_s_2221",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_938",
    "count": 0
  },
  {
    "id": "ql_s_2222",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_938",
    "count": 0
  },
  {
    "id": "ql_s_2223",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_938",
    "count": 0
  },
  {
    "id": "ql_s_2224",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_938",
    "count": 2
  },
  {
    "id": "ql_s_2225",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_938",
    "count": 5
  },
  {
    "id": "ql_s_2226",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_938",
    "count": 5
  },
  {
    "id": "ql_s_2227",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_939",
    "count": 0
  },
  {
    "id": "ql_s_2228",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_939",
    "count": 0
  },
  {
    "id": "ql_s_2229",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_939",
    "count": 0
  },
  {
    "id": "ql_s_2230",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_939",
    "count": 0
  },
  {
    "id": "ql_s_2231",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_939",
    "count": 7
  },
  {
    "id": "ql_s_2232",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_939",
    "count": 15
  },
  {
    "id": "ql_s_2233",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_939",
    "count": 15
  },
  {
    "id": "ql_s_2234",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_940",
    "count": 0
  },
  {
    "id": "ql_s_2235",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_940",
    "count": 0
  },
  {
    "id": "ql_s_2236",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_940",
    "count": 1
  },
  {
    "id": "ql_s_2237",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_940",
    "count": 0
  },
  {
    "id": "ql_s_2238",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_940",
    "count": 3
  },
  {
    "id": "ql_s_2239",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_940",
    "count": 7
  },
  {
    "id": "ql_s_2240",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_940",
    "count": 7
  },
  {
    "id": "ql_s_2241",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_941",
    "count": 0
  },
  {
    "id": "ql_s_2242",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_941",
    "count": 0
  },
  {
    "id": "ql_s_2243",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_941",
    "count": 0
  },
  {
    "id": "ql_s_2244",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_941",
    "count": 0
  },
  {
    "id": "ql_s_2245",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_941",
    "count": 3
  },
  {
    "id": "ql_s_2246",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_941",
    "count": 6
  },
  {
    "id": "ql_s_2247",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_941",
    "count": 6
  },
  {
    "id": "ql_s_2248",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_942",
    "count": 0
  },
  {
    "id": "ql_s_2249",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_942",
    "count": 0
  },
  {
    "id": "ql_s_2250",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_942",
    "count": 0
  },
  {
    "id": "ql_s_2251",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_942",
    "count": 0
  },
  {
    "id": "ql_s_2252",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_942",
    "count": 6
  },
  {
    "id": "ql_s_2253",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_942",
    "count": 14
  },
  {
    "id": "ql_s_2254",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_942",
    "count": 14
  },
  {
    "id": "ql_s_2255",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_943",
    "count": 0
  },
  {
    "id": "ql_s_2256",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_943",
    "count": 0
  },
  {
    "id": "ql_s_2257",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_943",
    "count": 0
  },
  {
    "id": "ql_s_2258",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_943",
    "count": 1
  },
  {
    "id": "ql_s_2259",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_943",
    "count": 7
  },
  {
    "id": "ql_s_2260",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_943",
    "count": 15
  },
  {
    "id": "ql_s_2261",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_943",
    "count": 15
  },
  {
    "id": "ql_s_2262",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_944",
    "count": 1
  },
  {
    "id": "ql_s_2263",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_944",
    "count": 0
  },
  {
    "id": "ql_s_2264",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_944",
    "count": 0
  },
  {
    "id": "ql_s_2265",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_944",
    "count": 0
  },
  {
    "id": "ql_s_2266",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_944",
    "count": 3
  },
  {
    "id": "ql_s_2267",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_944",
    "count": 7
  },
  {
    "id": "ql_s_2268",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_944",
    "count": 7
  },
  {
    "id": "ql_s_2269",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_945",
    "count": 0
  },
  {
    "id": "ql_s_2270",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_945",
    "count": 1
  },
  {
    "id": "ql_s_2271",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_945",
    "count": 0
  },
  {
    "id": "ql_s_2272",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_945",
    "count": 0
  },
  {
    "id": "ql_s_2273",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_945",
    "count": 4
  },
  {
    "id": "ql_s_2274",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_945",
    "count": 10
  },
  {
    "id": "ql_s_2275",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_945",
    "count": 10
  },
  {
    "id": "ql_s_2276",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_946",
    "count": 0
  },
  {
    "id": "ql_s_2277",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_946",
    "count": 0
  },
  {
    "id": "ql_s_2278",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_946",
    "count": 0
  },
  {
    "id": "ql_s_2279",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_946",
    "count": 0
  },
  {
    "id": "ql_s_2280",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_946",
    "count": 1
  },
  {
    "id": "ql_s_2281",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_946",
    "count": 3
  },
  {
    "id": "ql_s_2282",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_946",
    "count": 3
  },
  {
    "id": "ql_s_2283",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_947",
    "count": 0
  },
  {
    "id": "ql_s_2284",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_947",
    "count": 0
  },
  {
    "id": "ql_s_2285",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_947",
    "count": 0
  },
  {
    "id": "ql_s_2286",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_947",
    "count": 0
  },
  {
    "id": "ql_s_2287",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_947",
    "count": 3
  },
  {
    "id": "ql_s_2288",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_947",
    "count": 7
  },
  {
    "id": "ql_s_2289",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_947",
    "count": 7
  },
  {
    "id": "ql_s_2290",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_948",
    "count": 0
  },
  {
    "id": "ql_s_2291",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_948",
    "count": 0
  },
  {
    "id": "ql_s_2292",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_948",
    "count": 0
  },
  {
    "id": "ql_s_2293",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_948",
    "count": 0
  },
  {
    "id": "ql_s_2294",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_948",
    "count": 1
  },
  {
    "id": "ql_s_2295",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_948",
    "count": 3
  },
  {
    "id": "ql_s_2296",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_948",
    "count": 3
  },
  {
    "id": "ql_s_2297",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_949",
    "count": 0
  },
  {
    "id": "ql_s_2298",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_949",
    "count": 0
  },
  {
    "id": "ql_s_2299",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_949",
    "count": 0
  },
  {
    "id": "ql_s_2300",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_949",
    "count": 0
  },
  {
    "id": "ql_s_2301",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_949",
    "count": 2
  },
  {
    "id": "ql_s_2302",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_949",
    "count": 4
  },
  {
    "id": "ql_s_2303",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_949",
    "count": 4
  },
  {
    "id": "ql_s_2304",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_950",
    "count": 0
  },
  {
    "id": "ql_s_2305",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_950",
    "count": 0
  },
  {
    "id": "ql_s_2306",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_950",
    "count": 0
  },
  {
    "id": "ql_s_2307",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_950",
    "count": 0
  },
  {
    "id": "ql_s_2308",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_950",
    "count": 7
  },
  {
    "id": "ql_s_2309",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_950",
    "count": 16
  },
  {
    "id": "ql_s_2310",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_950",
    "count": 16
  },
  {
    "id": "ql_s_2311",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_951",
    "count": 0
  },
  {
    "id": "ql_s_2312",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_951",
    "count": 0
  },
  {
    "id": "ql_s_2313",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_951",
    "count": 0
  },
  {
    "id": "ql_s_2314",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_951",
    "count": 0
  },
  {
    "id": "ql_s_2315",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_951",
    "count": 4
  },
  {
    "id": "ql_s_2316",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_951",
    "count": 9
  },
  {
    "id": "ql_s_2317",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_951",
    "count": 9
  },
  {
    "id": "ql_s_2318",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_952",
    "count": 0
  },
  {
    "id": "ql_s_2319",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_952",
    "count": 0
  },
  {
    "id": "ql_s_2320",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_952",
    "count": 0
  },
  {
    "id": "ql_s_2321",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_952",
    "count": 0
  },
  {
    "id": "ql_s_2322",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_952",
    "count": 7
  },
  {
    "id": "ql_s_2323",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_952",
    "count": 15
  },
  {
    "id": "ql_s_2324",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_952",
    "count": 15
  },
  {
    "id": "ql_s_2325",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_953",
    "count": 0
  },
  {
    "id": "ql_s_2326",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_953",
    "count": 0
  },
  {
    "id": "ql_s_2327",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_953",
    "count": 0
  },
  {
    "id": "ql_s_2328",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_953",
    "count": 0
  },
  {
    "id": "ql_s_2329",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_953",
    "count": 1
  },
  {
    "id": "ql_s_2330",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_953",
    "count": 1
  },
  {
    "id": "ql_s_2331",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_953",
    "count": 1
  },
  {
    "id": "ql_s_2332",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_954",
    "count": 0
  },
  {
    "id": "ql_s_2333",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_954",
    "count": 0
  },
  {
    "id": "ql_s_2334",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_954",
    "count": 0
  },
  {
    "id": "ql_s_2335",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_954",
    "count": 0
  },
  {
    "id": "ql_s_2336",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_954",
    "count": 4
  },
  {
    "id": "ql_s_2337",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_954",
    "count": 9
  },
  {
    "id": "ql_s_2338",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_954",
    "count": 9
  },
  {
    "id": "ql_s_2339",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_955",
    "count": 0
  },
  {
    "id": "ql_s_2340",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_955",
    "count": 0
  },
  {
    "id": "ql_s_2341",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_955",
    "count": 0
  },
  {
    "id": "ql_s_2342",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_955",
    "count": 0
  },
  {
    "id": "ql_s_2343",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_955",
    "count": 1
  },
  {
    "id": "ql_s_2344",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_955",
    "count": 3
  },
  {
    "id": "ql_s_2345",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_955",
    "count": 3
  },
  {
    "id": "ql_s_2346",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_956",
    "count": 0
  },
  {
    "id": "ql_s_2347",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_956",
    "count": 0
  },
  {
    "id": "ql_s_2348",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_956",
    "count": 0
  },
  {
    "id": "ql_s_2349",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_956",
    "count": 0
  },
  {
    "id": "ql_s_2350",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_956",
    "count": 1
  },
  {
    "id": "ql_s_2351",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_956",
    "count": 1
  },
  {
    "id": "ql_s_2352",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_956",
    "count": 1
  },
  {
    "id": "ql_s_2353",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_957",
    "count": 0
  },
  {
    "id": "ql_s_2354",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_957",
    "count": 0
  },
  {
    "id": "ql_s_2355",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_957",
    "count": 0
  },
  {
    "id": "ql_s_2356",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_957",
    "count": 0
  },
  {
    "id": "ql_s_2357",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_957",
    "count": 8
  },
  {
    "id": "ql_s_2358",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_957",
    "count": 18
  },
  {
    "id": "ql_s_2359",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_957",
    "count": 18
  },
  {
    "id": "ql_s_2360",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_958",
    "count": 0
  },
  {
    "id": "ql_s_2361",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_958",
    "count": 0
  },
  {
    "id": "ql_s_2362",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_958",
    "count": 0
  },
  {
    "id": "ql_s_2363",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_958",
    "count": 0
  },
  {
    "id": "ql_s_2364",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_958",
    "count": 1
  },
  {
    "id": "ql_s_2365",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_958",
    "count": 3
  },
  {
    "id": "ql_s_2366",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_958",
    "count": 3
  },
  {
    "id": "ql_s_2367",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_959",
    "count": 0
  },
  {
    "id": "ql_s_2368",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_959",
    "count": 0
  },
  {
    "id": "ql_s_2369",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_959",
    "count": 0
  },
  {
    "id": "ql_s_2370",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_959",
    "count": 0
  },
  {
    "id": "ql_s_2371",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_959",
    "count": 1
  },
  {
    "id": "ql_s_2372",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_959",
    "count": 1
  },
  {
    "id": "ql_s_2373",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_959",
    "count": 1
  },
  {
    "id": "ql_s_2374",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_960",
    "count": 0
  },
  {
    "id": "ql_s_2375",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_960",
    "count": 0
  },
  {
    "id": "ql_s_2376",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_960",
    "count": 0
  },
  {
    "id": "ql_s_2377",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_960",
    "count": 0
  },
  {
    "id": "ql_s_2378",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_960",
    "count": 5
  },
  {
    "id": "ql_s_2379",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_960",
    "count": 11
  },
  {
    "id": "ql_s_2380",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_960",
    "count": 11
  },
  {
    "id": "ql_s_2381",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_961",
    "count": 0
  },
  {
    "id": "ql_s_2382",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_961",
    "count": 0
  },
  {
    "id": "ql_s_2383",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_961",
    "count": 0
  },
  {
    "id": "ql_s_2384",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_961",
    "count": 0
  },
  {
    "id": "ql_s_2385",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_961",
    "count": 2
  },
  {
    "id": "ql_s_2386",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_961",
    "count": 4
  },
  {
    "id": "ql_s_2387",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_961",
    "count": 4
  },
  {
    "id": "ql_s_2388",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_962",
    "count": 0
  },
  {
    "id": "ql_s_2389",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_962",
    "count": 0
  },
  {
    "id": "ql_s_2390",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_962",
    "count": 0
  },
  {
    "id": "ql_s_2391",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_962",
    "count": 0
  },
  {
    "id": "ql_s_2392",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_962",
    "count": 2
  },
  {
    "id": "ql_s_2393",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_962",
    "count": 4
  },
  {
    "id": "ql_s_2394",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_962",
    "count": 4
  },
  {
    "id": "ql_s_2395",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_963",
    "count": 0
  },
  {
    "id": "ql_s_2396",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_963",
    "count": 0
  },
  {
    "id": "ql_s_2397",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_963",
    "count": 0
  },
  {
    "id": "ql_s_2398",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_963",
    "count": 0
  },
  {
    "id": "ql_s_2399",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_963",
    "count": 1
  },
  {
    "id": "ql_s_2400",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_963",
    "count": 3
  },
  {
    "id": "ql_s_2401",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_963",
    "count": 3
  },
  {
    "id": "ql_s_2402",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_964",
    "count": 0
  },
  {
    "id": "ql_s_2403",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_964",
    "count": 0
  },
  {
    "id": "ql_s_2404",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_964",
    "count": 0
  },
  {
    "id": "ql_s_2405",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_964",
    "count": 0
  },
  {
    "id": "ql_s_2406",
    "schoolId": "hs_182001",
    "middleSchoolId": "ms_964",
    "count": 2
  },
  {
    "id": "ql_s_2407",
    "schoolId": "hs_182002",
    "middleSchoolId": "ms_964",
    "count": 6
  },
  {
    "id": "ql_s_2408",
    "schoolId": "hs_182003",
    "middleSchoolId": "ms_964",
    "count": 6
  },
  {
    "id": "ql_s_2409",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_965",
    "count": 15
  },
  {
    "id": "ql_s_2410",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_965",
    "count": 14
  },
  {
    "id": "ql_s_2411",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_965",
    "count": 15
  },
  {
    "id": "ql_s_2412",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_965",
    "count": 6
  },
  {
    "id": "ql_s_2413",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_965",
    "count": 1
  },
  {
    "id": "ql_s_2414",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_966",
    "count": 10
  },
  {
    "id": "ql_s_2415",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_966",
    "count": 10
  },
  {
    "id": "ql_s_2416",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_966",
    "count": 10
  },
  {
    "id": "ql_s_2417",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_966",
    "count": 4
  },
  {
    "id": "ql_s_2418",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_966",
    "count": 1
  },
  {
    "id": "ql_s_2419",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_967",
    "count": 5
  },
  {
    "id": "ql_s_2420",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_967",
    "count": 6
  },
  {
    "id": "ql_s_2421",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_967",
    "count": 5
  },
  {
    "id": "ql_s_2422",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_967",
    "count": 2
  },
  {
    "id": "ql_s_2423",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_967",
    "count": 1
  },
  {
    "id": "ql_s_2424",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_968",
    "count": 5
  },
  {
    "id": "ql_s_2425",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_968",
    "count": 5
  },
  {
    "id": "ql_s_2426",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_968",
    "count": 5
  },
  {
    "id": "ql_s_2427",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_968",
    "count": 2
  },
  {
    "id": "ql_s_2428",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_968",
    "count": 1
  },
  {
    "id": "ql_s_2429",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_969",
    "count": 13
  },
  {
    "id": "ql_s_2430",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_969",
    "count": 14
  },
  {
    "id": "ql_s_2431",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_969",
    "count": 14
  },
  {
    "id": "ql_s_2432",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_969",
    "count": 5
  },
  {
    "id": "ql_s_2433",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_969",
    "count": 1
  },
  {
    "id": "ql_s_2434",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_970",
    "count": 8
  },
  {
    "id": "ql_s_2435",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_970",
    "count": 7
  },
  {
    "id": "ql_s_2436",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_970",
    "count": 8
  },
  {
    "id": "ql_s_2437",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_970",
    "count": 2
  },
  {
    "id": "ql_s_2438",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_970",
    "count": 1
  },
  {
    "id": "ql_s_2439",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_971",
    "count": 4
  },
  {
    "id": "ql_s_2440",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_971",
    "count": 5
  },
  {
    "id": "ql_s_2441",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_971",
    "count": 5
  },
  {
    "id": "ql_s_2442",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_971",
    "count": 2
  },
  {
    "id": "ql_s_2443",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_971",
    "count": 1
  },
  {
    "id": "ql_s_2444",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_972",
    "count": 7
  },
  {
    "id": "ql_s_2445",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_972",
    "count": 6
  },
  {
    "id": "ql_s_2446",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_972",
    "count": 6
  },
  {
    "id": "ql_s_2447",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_972",
    "count": 2
  },
  {
    "id": "ql_s_2448",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_972",
    "count": 1
  },
  {
    "id": "ql_s_2449",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_973",
    "count": 3
  },
  {
    "id": "ql_s_2450",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_973",
    "count": 3
  },
  {
    "id": "ql_s_2451",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_973",
    "count": 3
  },
  {
    "id": "ql_s_2452",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_973",
    "count": 1
  },
  {
    "id": "ql_s_2453",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_973",
    "count": 1
  },
  {
    "id": "ql_s_2454",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_973",
    "count": 0
  },
  {
    "id": "ql_s_2455",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_974",
    "count": 7
  },
  {
    "id": "ql_s_2456",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_974",
    "count": 7
  },
  {
    "id": "ql_s_2457",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_974",
    "count": 6
  },
  {
    "id": "ql_s_2458",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_974",
    "count": 2
  },
  {
    "id": "ql_s_2459",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_974",
    "count": 1
  },
  {
    "id": "ql_s_2460",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_975",
    "count": 7
  },
  {
    "id": "ql_s_2461",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_975",
    "count": 6
  },
  {
    "id": "ql_s_2462",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_975",
    "count": 7
  },
  {
    "id": "ql_s_2463",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_975",
    "count": 2
  },
  {
    "id": "ql_s_2464",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_975",
    "count": 1
  },
  {
    "id": "ql_s_2465",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_975",
    "count": 0
  },
  {
    "id": "ql_s_2466",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_976",
    "count": 2
  },
  {
    "id": "ql_s_2467",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_976",
    "count": 2
  },
  {
    "id": "ql_s_2468",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_976",
    "count": 2
  },
  {
    "id": "ql_s_2469",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_976",
    "count": 1
  },
  {
    "id": "ql_s_2470",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_976",
    "count": 1
  },
  {
    "id": "ql_s_2471",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_976",
    "count": 0
  },
  {
    "id": "ql_s_2472",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_977",
    "count": 5
  },
  {
    "id": "ql_s_2473",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_977",
    "count": 5
  },
  {
    "id": "ql_s_2474",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_977",
    "count": 5
  },
  {
    "id": "ql_s_2475",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_977",
    "count": 1
  },
  {
    "id": "ql_s_2476",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_977",
    "count": 1
  },
  {
    "id": "ql_s_2477",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_978",
    "count": 1
  },
  {
    "id": "ql_s_2478",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_978",
    "count": 1
  },
  {
    "id": "ql_s_2479",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_978",
    "count": 1
  },
  {
    "id": "ql_s_2480",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_978",
    "count": 1
  },
  {
    "id": "ql_s_2481",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_978",
    "count": 1
  },
  {
    "id": "ql_s_2482",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_979",
    "count": 1
  },
  {
    "id": "ql_s_2483",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_979",
    "count": 1
  },
  {
    "id": "ql_s_2484",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_979",
    "count": 1
  },
  {
    "id": "ql_s_2485",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_979",
    "count": 1
  },
  {
    "id": "ql_s_2486",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_979",
    "count": 1
  },
  {
    "id": "ql_s_2487",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_979",
    "count": 0
  },
  {
    "id": "ql_s_2488",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_980",
    "count": 1
  },
  {
    "id": "ql_s_2489",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_980",
    "count": 1
  },
  {
    "id": "ql_s_2490",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_980",
    "count": 1
  },
  {
    "id": "ql_s_2491",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_980",
    "count": 1
  },
  {
    "id": "ql_s_2492",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_980",
    "count": 1
  },
  {
    "id": "ql_s_2493",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_980",
    "count": 0
  },
  {
    "id": "ql_s_2494",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_981",
    "count": 7
  },
  {
    "id": "ql_s_2495",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_981",
    "count": 7
  },
  {
    "id": "ql_s_2496",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_981",
    "count": 6
  },
  {
    "id": "ql_s_2497",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_981",
    "count": 3
  },
  {
    "id": "ql_s_2498",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_981",
    "count": 2
  },
  {
    "id": "ql_s_2499",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_982",
    "count": 3
  },
  {
    "id": "ql_s_2500",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_982",
    "count": 3
  },
  {
    "id": "ql_s_2501",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_982",
    "count": 3
  },
  {
    "id": "ql_s_2502",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_982",
    "count": 1
  },
  {
    "id": "ql_s_2503",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_982",
    "count": 1
  },
  {
    "id": "ql_s_2504",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_983",
    "count": 2
  },
  {
    "id": "ql_s_2505",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_983",
    "count": 2
  },
  {
    "id": "ql_s_2506",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_983",
    "count": 2
  },
  {
    "id": "ql_s_2507",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_983",
    "count": 1
  },
  {
    "id": "ql_s_2508",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_983",
    "count": 1
  },
  {
    "id": "ql_s_2509",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_984",
    "count": 1
  },
  {
    "id": "ql_s_2510",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_984",
    "count": 1
  },
  {
    "id": "ql_s_2511",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_984",
    "count": 1
  },
  {
    "id": "ql_s_2512",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_984",
    "count": 1
  },
  {
    "id": "ql_s_2513",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_984",
    "count": 1
  },
  {
    "id": "ql_s_2514",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_985",
    "count": 2
  },
  {
    "id": "ql_s_2515",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_985",
    "count": 2
  },
  {
    "id": "ql_s_2516",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_985",
    "count": 3
  },
  {
    "id": "ql_s_2517",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_985",
    "count": 1
  },
  {
    "id": "ql_s_2518",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_985",
    "count": 1
  },
  {
    "id": "ql_s_2519",
    "schoolId": "hs_152006",
    "middleSchoolId": "ms_985",
    "count": 0
  },
  {
    "id": "ql_s_2520",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_986",
    "count": 6
  },
  {
    "id": "ql_s_2521",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_986",
    "count": 5
  },
  {
    "id": "ql_s_2522",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_986",
    "count": 6
  },
  {
    "id": "ql_s_2523",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_986",
    "count": 2
  },
  {
    "id": "ql_s_2524",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_986",
    "count": 1
  },
  {
    "id": "ql_s_2525",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_987",
    "count": 2
  },
  {
    "id": "ql_s_2526",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_987",
    "count": 2
  },
  {
    "id": "ql_s_2527",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_987",
    "count": 2
  },
  {
    "id": "ql_s_2528",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_987",
    "count": 1
  },
  {
    "id": "ql_s_2529",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_987",
    "count": 1
  },
  {
    "id": "ql_s_2530",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_988",
    "count": 8
  },
  {
    "id": "ql_s_2531",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_988",
    "count": 8
  },
  {
    "id": "ql_s_2532",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_988",
    "count": 8
  },
  {
    "id": "ql_s_2533",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_988",
    "count": 3
  },
  {
    "id": "ql_s_2534",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_988",
    "count": 1
  },
  {
    "id": "ql_s_2535",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_989",
    "count": 2
  },
  {
    "id": "ql_s_2536",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_989",
    "count": 2
  },
  {
    "id": "ql_s_2537",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_989",
    "count": 2
  },
  {
    "id": "ql_s_2538",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_989",
    "count": 1
  },
  {
    "id": "ql_s_2539",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_989",
    "count": 1
  },
  {
    "id": "ql_s_2540",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_990",
    "count": 1
  },
  {
    "id": "ql_s_2541",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_990",
    "count": 1
  },
  {
    "id": "ql_s_2542",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_990",
    "count": 1
  },
  {
    "id": "ql_s_2543",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_990",
    "count": 1
  },
  {
    "id": "ql_s_2544",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_990",
    "count": 1
  },
  {
    "id": "ql_s_2545",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_991",
    "count": 1
  },
  {
    "id": "ql_s_2546",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_991",
    "count": 1
  },
  {
    "id": "ql_s_2547",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_991",
    "count": 1
  },
  {
    "id": "ql_s_2548",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_991",
    "count": 1
  },
  {
    "id": "ql_s_2549",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_991",
    "count": 1
  },
  {
    "id": "ql_s_2550",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_992",
    "count": 1
  },
  {
    "id": "ql_s_2551",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_992",
    "count": 1
  },
  {
    "id": "ql_s_2552",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_992",
    "count": 1
  },
  {
    "id": "ql_s_2553",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_992",
    "count": 1
  },
  {
    "id": "ql_s_2554",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_992",
    "count": 1
  },
  {
    "id": "ql_s_2555",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_993",
    "count": 7
  },
  {
    "id": "ql_s_2556",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_993",
    "count": 7
  },
  {
    "id": "ql_s_2557",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_993",
    "count": 6
  },
  {
    "id": "ql_s_2558",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_993",
    "count": 3
  },
  {
    "id": "ql_s_2559",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_993",
    "count": 1
  },
  {
    "id": "ql_s_2560",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_993",
    "count": 0
  },
  {
    "id": "ql_s_2561",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_994",
    "count": 1
  },
  {
    "id": "ql_s_2562",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_994",
    "count": 1
  },
  {
    "id": "ql_s_2563",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_994",
    "count": 1
  },
  {
    "id": "ql_s_2564",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_994",
    "count": 1
  },
  {
    "id": "ql_s_2565",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_994",
    "count": 1
  },
  {
    "id": "ql_s_2566",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_995",
    "count": 12
  },
  {
    "id": "ql_s_2567",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_995",
    "count": 13
  },
  {
    "id": "ql_s_2568",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_995",
    "count": 13
  },
  {
    "id": "ql_s_2569",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_995",
    "count": 4
  },
  {
    "id": "ql_s_2570",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_995",
    "count": 1
  },
  {
    "id": "ql_s_2571",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_996",
    "count": 1
  },
  {
    "id": "ql_s_2572",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_996",
    "count": 1
  },
  {
    "id": "ql_s_2573",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_996",
    "count": 1
  },
  {
    "id": "ql_s_2574",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_996",
    "count": 1
  },
  {
    "id": "ql_s_2575",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_996",
    "count": 1
  },
  {
    "id": "ql_s_2576",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_997",
    "count": 10
  },
  {
    "id": "ql_s_2577",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_997",
    "count": 10
  },
  {
    "id": "ql_s_2578",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_997",
    "count": 10
  },
  {
    "id": "ql_s_2579",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_997",
    "count": 3
  },
  {
    "id": "ql_s_2580",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_997",
    "count": 1
  },
  {
    "id": "ql_s_2581",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_998",
    "count": 1
  },
  {
    "id": "ql_s_2582",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_998",
    "count": 1
  },
  {
    "id": "ql_s_2583",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_998",
    "count": 1
  },
  {
    "id": "ql_s_2584",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_998",
    "count": 1
  },
  {
    "id": "ql_s_2585",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_998",
    "count": 1
  },
  {
    "id": "ql_s_2586",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_999",
    "count": 9
  },
  {
    "id": "ql_s_2587",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_999",
    "count": 9
  },
  {
    "id": "ql_s_2588",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_999",
    "count": 9
  },
  {
    "id": "ql_s_2589",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_999",
    "count": 4
  },
  {
    "id": "ql_s_2590",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_999",
    "count": 1
  },
  {
    "id": "ql_s_2591",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_1000",
    "count": 5
  },
  {
    "id": "ql_s_2592",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_1000",
    "count": 5
  },
  {
    "id": "ql_s_2593",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_1000",
    "count": 5
  },
  {
    "id": "ql_s_2594",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_1000",
    "count": 2
  },
  {
    "id": "ql_s_2595",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_1000",
    "count": 1
  },
  {
    "id": "ql_s_2596",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_1001",
    "count": 4
  },
  {
    "id": "ql_s_2597",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_1001",
    "count": 5
  },
  {
    "id": "ql_s_2598",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_1001",
    "count": 4
  },
  {
    "id": "ql_s_2599",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_1001",
    "count": 1
  },
  {
    "id": "ql_s_2600",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_1001",
    "count": 1
  },
  {
    "id": "ql_s_2601",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_1002",
    "count": 3
  },
  {
    "id": "ql_s_2602",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_1002",
    "count": 3
  },
  {
    "id": "ql_s_2603",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_1002",
    "count": 3
  },
  {
    "id": "ql_s_2604",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_1002",
    "count": 1
  },
  {
    "id": "ql_s_2605",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_1002",
    "count": 1
  },
  {
    "id": "ql_s_2606",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_1003",
    "count": 1
  },
  {
    "id": "ql_s_2607",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_1003",
    "count": 2
  },
  {
    "id": "ql_s_2608",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_1003",
    "count": 2
  },
  {
    "id": "ql_s_2609",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_1003",
    "count": 1
  },
  {
    "id": "ql_s_2610",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_1003",
    "count": 1
  },
  {
    "id": "ql_s_2611",
    "schoolId": "hs_172001",
    "middleSchoolId": "ms_1004",
    "count": 7
  },
  {
    "id": "ql_s_2612",
    "schoolId": "hs_172002",
    "middleSchoolId": "ms_1004",
    "count": 6
  },
  {
    "id": "ql_s_2613",
    "schoolId": "hs_174003",
    "middleSchoolId": "ms_1004",
    "count": 6
  },
  {
    "id": "ql_s_2614",
    "schoolId": "hs_174005",
    "middleSchoolId": "ms_1004",
    "count": 2
  },
  {
    "id": "ql_s_2615",
    "schoolId": "hs_174004",
    "middleSchoolId": "ms_1004",
    "count": 1
  },
  {
    "id": "ql_s_2616",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1036",
    "count": 13
  },
  {
    "id": "ql_s_2617",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1036",
    "count": 1
  },
  {
    "id": "ql_s_2618",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1037",
    "count": 7
  },
  {
    "id": "ql_s_2619",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1037",
    "count": 1
  },
  {
    "id": "ql_s_2620",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1038",
    "count": 4
  },
  {
    "id": "ql_s_2621",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1038",
    "count": 1
  },
  {
    "id": "ql_s_2622",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1039",
    "count": 2
  },
  {
    "id": "ql_s_2623",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1039",
    "count": 1
  },
  {
    "id": "ql_s_2624",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1040",
    "count": 4
  },
  {
    "id": "ql_s_2625",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1040",
    "count": 1
  },
  {
    "id": "ql_s_2626",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1041",
    "count": 7
  },
  {
    "id": "ql_s_2627",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1041",
    "count": 1
  },
  {
    "id": "ql_s_2628",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1042",
    "count": 3
  },
  {
    "id": "ql_s_2629",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1043",
    "count": 2
  },
  {
    "id": "ql_s_2630",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1044",
    "count": 1
  },
  {
    "id": "ql_s_2631",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1045",
    "count": 3
  },
  {
    "id": "ql_s_2632",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1046",
    "count": 8
  },
  {
    "id": "ql_s_2633",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1047",
    "count": 2
  },
  {
    "id": "ql_s_2634",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1047",
    "count": 1
  },
  {
    "id": "ql_s_2635",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1048",
    "count": 6
  },
  {
    "id": "ql_s_2636",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1050",
    "count": 3
  },
  {
    "id": "ql_s_2637",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1051",
    "count": 4
  },
  {
    "id": "ql_s_2638",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1051",
    "count": 1
  },
  {
    "id": "ql_s_2639",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1052",
    "count": 4
  },
  {
    "id": "ql_s_2640",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1053",
    "count": 5
  },
  {
    "id": "ql_s_2641",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1053",
    "count": 1
  },
  {
    "id": "ql_s_2642",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1054",
    "count": 8
  },
  {
    "id": "ql_s_2643",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1054",
    "count": 1
  },
  {
    "id": "ql_s_2644",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1055",
    "count": 5
  },
  {
    "id": "ql_s_2645",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1055",
    "count": 1
  },
  {
    "id": "ql_s_2646",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1056",
    "count": 9
  },
  {
    "id": "ql_s_2647",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_1056",
    "count": 1
  },
  {
    "id": "ql_s_2648",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1057",
    "count": 6
  },
  {
    "id": "ql_s_2649",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1057",
    "count": 1
  },
  {
    "id": "ql_s_2650",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1058",
    "count": 4
  },
  {
    "id": "ql_s_2651",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1058",
    "count": 1
  },
  {
    "id": "ql_s_2652",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1060",
    "count": 9
  },
  {
    "id": "ql_s_2653",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1060",
    "count": 1
  },
  {
    "id": "ql_s_2654",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1061",
    "count": 6
  },
  {
    "id": "ql_s_2655",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1061",
    "count": 1
  },
  {
    "id": "ql_s_2656",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1062",
    "count": 4
  },
  {
    "id": "ql_s_2657",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1063",
    "count": 4
  },
  {
    "id": "ql_s_2658",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1063",
    "count": 1
  },
  {
    "id": "ql_s_2659",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1064",
    "count": 1
  },
  {
    "id": "ql_s_2660",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1065",
    "count": 11
  },
  {
    "id": "ql_s_2661",
    "schoolId": "hs_042032",
    "middleSchoolId": "ms_1065",
    "count": 1
  },
  {
    "id": "ql_s_2662",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1066",
    "count": 4
  },
  {
    "id": "ql_s_2663",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1067",
    "count": 5
  },
  {
    "id": "ql_s_2664",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1067",
    "count": 1
  },
  {
    "id": "ql_s_2665",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1068",
    "count": 2
  },
  {
    "id": "ql_s_2666",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1069",
    "count": 7
  },
  {
    "id": "ql_s_2667",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1069",
    "count": 1
  },
  {
    "id": "ql_s_2668",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1070",
    "count": 6
  },
  {
    "id": "ql_s_2669",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1071",
    "count": 2
  },
  {
    "id": "ql_s_2670",
    "schoolId": "hs_102056",
    "middleSchoolId": "ms_1071",
    "count": 1
  },
  {
    "id": "ql_s_2671",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1072",
    "count": 3
  },
  {
    "id": "ql_s_2672",
    "schoolId": "hs_103002",
    "middleSchoolId": "ms_1073",
    "count": 9
  },
  {
    "id": "ql_s_2673",
    "schoolId": "hs_102057",
    "middleSchoolId": "ms_1073",
    "count": 1
  }
];

