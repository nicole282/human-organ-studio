export interface OrganModel {
  id: string;
  name: string;
  subtitle: string;
  system: string;
  description: string;
  size: string;
  location: string;
  accent: string;
  structures: { name: string; detail: string }[];
  functionFlow: string[];
  commonConditions: string[];
  funFact: string;
  promptHint: {
    front: string;
    back: string;
  };
  modelUrl: string;
  fileSize: number;
  defaultRotationY: number;
  displayScale: number;
}

const BASE = import.meta.env.BASE_URL;
const asset = (path: string) => `${BASE}${path}`.replace(/\/+/g, '/');

const promptBase =
  '白色背景，1:1比例，医学教学模型风格，结构清晰，颜色区分不同组织，适合中学生科普课堂，非写实血腥风格，高质量3D render';

export const ORGANS: OrganModel[] = [
  {
    id: 'heart',
    name: '心脏',
    subtitle: '循环系统的泵',
    system: '循环系统',
    accent: '#d95f6f',
    description:
      '心脏通过有节律的收缩推动血液循环。右心负责把缺氧血送往肺部，左心负责把富氧血输送到全身，是人体能量与氧气分配的核心枢纽。',
    size: '约一个拳头大小',
    location: '胸腔中部偏左，位于两肺之间',
    structures: [
      { name: '右心房', detail: '接收来自全身的缺氧静脉血' },
      { name: '右心室', detail: '将血液泵入肺动脉，送往肺部' },
      { name: '左心房', detail: '接收来自肺静脉的富氧血' },
      { name: '左心室', detail: '心肌最厚，将血液泵入主动脉' },
      { name: '瓣膜', detail: '维持血液单向流动，防止反流' },
    ],
    functionFlow: ['全身静脉血回到右心', '右心将血液送往肺部换气', '富氧血回到左心', '左心把血液泵向全身'],
    commonConditions: ['高血压', '冠状动脉粥样硬化', '心律失常', '瓣膜病'],
    funFact: '成年人的心脏每天大约跳动十万次，像一台从不停班的精密泵。',
    promptHint: {
      front: `画一个心脏的3D医学教学模型，正面视角，核心解剖结构通过剖面的形式展示内部细节，${promptBase}`,
      back: `再画出这个心脏背面的3D医学教学模型，不需要剖面，保持和上一张图相同的材质、颜色、比例和风格，${promptBase}`,
    },
    modelUrl: asset('models/heart.glb'),
    fileSize: 1970108,
    defaultRotationY: -0.25,
    displayScale: 1.25,
  },
  {
    id: 'lungs',
    name: '肺',
    subtitle: '气体交换的森林',
    system: '呼吸系统',
    accent: '#5aa7b8',
    description:
      '肺负责把空气中的氧气送入血液，同时排出二氧化碳。支气管像树枝一样分叉，末端连向大量肺泡，为气体交换提供巨大的表面积。',
    size: '左右两肺合计约占胸腔大部分空间',
    location: '胸腔内，心脏两侧',
    structures: [
      { name: '气管', detail: '空气进入肺部的主通道' },
      { name: '支气管', detail: '逐级分支，把空气送入左右肺' },
      { name: '肺叶', detail: '右肺三叶，左肺两叶，为心脏留出空间' },
      { name: '肺泡', detail: '氧气和二氧化碳交换的微小囊泡' },
      { name: '胸膜', detail: '覆盖肺表面，减少呼吸运动摩擦' },
    ],
    functionFlow: ['空气经鼻腔和气管进入', '支气管把空气分配到肺叶', '肺泡完成氧气入血', '二氧化碳随呼气排出'],
    commonConditions: ['哮喘', '肺炎', '慢性阻塞性肺疾病', '肺栓塞'],
    funFact: '肺泡全部展开后的面积可接近一个网球场，让气体交换又快又高效。',
    promptHint: {
      front: `画一个肺的3D医学教学模型，正面视角，展示气管、支气管和肺泡局部剖面，${promptBase}`,
      back: `再画出这个肺背面的3D医学教学模型，不需要剖面，保持和上一张图相同的材质、颜色、比例和风格，${promptBase}`,
    },
    modelUrl: asset('models/lungs.glb'),
    fileSize: 1960092,
    defaultRotationY: 0.2,
    displayScale: 1.18,
  },
  {
    id: 'kidney',
    name: '肾脏',
    subtitle: '过滤与稳态调节器',
    system: '泌尿系统',
    accent: '#b36b8f',
    description:
      '肾脏不断过滤血液，排出代谢废物，同时调节水盐平衡、酸碱平衡和血压。它让身体内部环境保持稳定。',
    size: '单个约 10 - 12 厘米长',
    location: '腹膜后，脊柱两侧，右肾略低于左肾',
    structures: [
      { name: '肾皮质', detail: '含大量肾小体，是血液过滤开始的区域' },
      { name: '肾髓质', detail: '形成肾锥体，参与尿液浓缩' },
      { name: '肾盂', detail: '收集尿液并通向输尿管' },
      { name: '肾动脉', detail: '把待过滤的血液送入肾脏' },
      { name: '输尿管', detail: '将尿液输送到膀胱' },
    ],
    functionFlow: ['肾动脉送入血液', '肾单位过滤血浆', '有用物质被重吸收', '尿液经肾盂和输尿管排出'],
    commonConditions: ['肾结石', '肾炎', '慢性肾病', '尿路感染'],
    funFact: '两枚肾脏每天会过滤约 150 升原尿，但最终只排出约 1 - 2 升尿液。',
    promptHint: {
      front: `画一个肾脏的3D医学教学模型，正面视角，核心结构通过剖面展示肾皮质、肾髓质、肾盂和输尿管，${promptBase}`,
      back: `再画出这个肾脏背面的3D医学教学模型，不需要剖面，保持和上一张图相同的材质、颜色、比例和风格，${promptBase}`,
    },
    modelUrl: asset('models/kidney.glb'),
    fileSize: 1979592,
    defaultRotationY: -0.45,
    displayScale: 1.22,
  },
  {
    id: 'liver',
    name: '肝脏',
    subtitle: '代谢与解毒工厂',
    system: '消化系统',
    accent: '#b5794f',
    description:
      '肝脏参与糖、脂肪和蛋白质代谢，合成胆汁，处理药物和毒素，也是储存营养物质的重要器官。',
    size: '人体最大的实质性内脏器官',
    location: '右上腹，位于膈肌下方',
    structures: [
      { name: '肝右叶', detail: '体积较大，承担主要代谢功能' },
      { name: '肝左叶', detail: '位于左侧，覆盖胃的一部分' },
      { name: '门静脉', detail: '把来自消化道的营养丰富血液送入肝脏' },
      { name: '胆管', detail: '输送肝细胞产生的胆汁' },
      { name: '胆囊', detail: '储存并浓缩胆汁，进食后释放' },
    ],
    functionFlow: ['消化道吸收营养', '门静脉把血液送入肝脏', '肝细胞加工与解毒', '胆汁进入胆道帮助消化脂肪'],
    commonConditions: ['脂肪肝', '肝炎', '肝硬化', '胆结石'],
    funFact: '肝脏有很强的再生能力，是人体里最擅长“修复自己”的器官之一。',
    promptHint: {
      front: `画一个肝脏的3D医学教学模型，正面视角，展示肝叶、门静脉、胆管和胆囊，核心区域可用剖面展示，${promptBase}`,
      back: `再画出这个肝脏背面的3D医学教学模型，不需要剖面，保持和上一张图相同的材质、颜色、比例和风格，${promptBase}`,
    },
    modelUrl: asset('models/liver.glb'),
    fileSize: 2088572,
    defaultRotationY: -0.25,
    displayScale: 1.08,
  },
];

export const DEFAULT_ORGAN_ID = ORGANS[0].id;
