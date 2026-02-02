import { Button } from '@/components/ui/button';
import { AppShell } from '@/components/Shared/AppShell';
import { PageHeader } from '@/components/Shared/PageHeader';
import { SectionCard } from '@/components/Shared/SectionCard';
import { FormSection } from '@/components/Shared/FormSection';
import { FormField } from '@/components/Shared/FormField';
import { LoadingSkeleton } from '@/components/Shared/states/LoadingSkeleton';
import { ErrorState } from '@/components/Shared/states/ErrorState';
import StateContainer from '@/components/Shared/states/StateContainer';
import { FilterBar } from '@/components/Shared/FilterBar';
import { BottomTabs, BottomTabsList } from '@/components/Shared/BottomTabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useQuery } from '@tanstack/react-query';
import type { ApiResponse } from '@/lib/api';
import { listSchools } from '@/lib/dataClient';
import type { HighSchool } from '@/lib/types';
import { useState } from 'react';
import { BarChart3, School, Settings, LayoutDashboard, MapPin, TrendingUp, Users } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function DemoPage() {
   const [activeTab, setActiveTab] = useState("dashboard");

   // Mock Schools Data
   const { data: schoolsData, isLoading: schoolsLoading, error: schoolsError, refetch: refetchSchools } = useQuery<ApiResponse<HighSchool[]>>({
      queryKey: ['schools:list'],
      queryFn: async () => {
         // Simulating API delay
         await new Promise(resolve => setTimeout(resolve, 1000));
         // Using the data client which already handles fallbacks
         return await listSchools({ district: '全部', type: '全部' });
      },
      retry: false
   });

   return (
      <AppShell hideFooter>
         <div>
            <div className="bg-background border-b pb-4 pt-4 -mx-4 px-4 md:p-0 md:border-none md:mx-0 shadow-sm md:shadow-none">
               <PageHeader
                  title="教育洞察"
                  subtitle="上海高中综合分析与学校发现平台"
                  actions={
                     <Button size="sm">导出报告</Button>
                  }
                  className="mb-0"
               />
            </div>

            <BottomTabs
               value={activeTab}
               onValueChange={setActiveTab}
               className="mt-4"
               list={
                  <BottomTabsList className="shadow-none">
                     <TabsTrigger value="dashboard" className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all">
                        <LayoutDashboard className="h-5 w-5 md:h-4 md:w-4" />
                        <span className="text-[10px] md:text-sm font-medium">概览</span>
                     </TabsTrigger>
                     <TabsTrigger value="schools" className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all">
                        <School className="h-5 w-5 md:h-4 md:w-4" />
                        <span className="text-[10px] md:text-sm font-medium">学校</span>
                     </TabsTrigger>
                     <TabsTrigger value="analysis" className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all">
                        <BarChart3 className="h-5 w-5 md:h-4 md:w-4" />
                        <span className="text-[10px] md:text-sm font-medium">分析</span>
                     </TabsTrigger>
                     <TabsTrigger value="settings" className="flex flex-col gap-0.5 py-1 h-full rounded-none border-t-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none md:flex-row md:h-full md:rounded-sm md:border-none md:data-[state=active]:bg-background md:data-[state=active]:text-foreground md:data-[state=active]:shadow-sm transition-all">
                        <Settings className="h-5 w-5 md:h-4 md:w-4" />
                        <span className="text-[10px] md:text-sm font-medium">设置</span>
                     </TabsTrigger>
                  </BottomTabsList>
               }
            >

               {/* Tab 1: Dashboard */}
               <TabsContent value="dashboard" className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4">
                     <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                           <CardTitle className="text-sm font-medium">收录学校</CardTitle>
                           <School className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                           <div className="text-2xl font-bold">248</div>
                           <p className="text-xs text-muted-foreground text-green-600 flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              较去年 +4
                           </p>
                        </CardContent>
                     </Card>
                     <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                           <CardTitle className="text-sm font-medium">平均分数线</CardTitle>
                           <TrendingUp className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                           <div className="text-2xl font-bold">624.5</div>
                           <p className="text-xs text-muted-foreground text-green-600 flex items-center">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              +2.1%
                           </p>
                        </CardContent>
                     </Card>
                     <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                           <CardTitle className="text-sm font-medium">覆盖区域</CardTitle>
                           <MapPin className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                           <div className="text-2xl font-bold">16</div>
                           <p className="text-xs text-muted-foreground">上海全境</p>
                        </CardContent>
                     </Card>
                     <Card className="shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 p-4">
                           <CardTitle className="text-sm font-medium">关注考生</CardTitle>
                           <Users className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                           <div className="text-2xl font-bold">5.8万</div>
                           <p className="text-xs text-muted-foreground">活跃用户</p>
                        </CardContent>
                     </Card>
                  </div>

                  <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                     <SectionCard title="最新动态" className="col-span-1 md:col-span-2 lg:col-span-4 shadow-sm" divider gap="sm">
                        <div className="space-y-0 divide-y">
                           {[1, 2, 3].map((i) => (
                              <div key={i} className="flex items-center gap-3 py-3 first:pt-0 last:pb-0">
                                 <div className="h-2 w-2 rounded-full bg-primary/80 shrink-0" />
                                 <div className="space-y-1 flex-1 min-w-0">
                                    <p className="text-sm font-medium leading-none truncate">2026年上海中考招生政策解读</p>
                                    <p className="text-xs text-muted-foreground truncate">市教委发布最新指导意见，重点关注名额分配变化。</p>
                                 </div>
                                 <div className="text-[10px] text-muted-foreground whitespace-nowrap">2小时前</div>
                              </div>
                           ))}
                        </div>
                     </SectionCard>
                     <SectionCard title="快捷入口" className="col-span-1 md:col-span-2 lg:col-span-3 shadow-sm" divider gap="sm">
                        <div className="grid grid-cols-2 gap-2">
                           <Button variant="outline" className="h-auto py-3 flex flex-col items-center justify-center gap-1 hover:bg-muted/50">
                              <BarChart3 className="h-5 w-5 text-primary" />
                              <span className="text-xs">分数统计</span>
                           </Button>
                           <Button variant="outline" className="h-auto py-3 flex flex-col items-center justify-center gap-1 hover:bg-muted/50">
                              <School className="h-5 w-5 text-primary" />
                              <span className="text-xs">学校对比</span>
                           </Button>
                           <Button variant="outline" className="h-auto py-3 flex flex-col items-center justify-center gap-1 hover:bg-muted/50">
                              <MapPin className="h-5 w-5 text-primary" />
                              <span className="text-xs">地图找校</span>
                           </Button>
                           <Button variant="outline" className="h-auto py-3 flex flex-col items-center justify-center gap-1 hover:bg-muted/50">
                              <Settings className="h-5 w-5 text-primary" />
                              <span className="text-xs">偏好设置</span>
                           </Button>
                        </div>
                     </SectionCard>
                  </div>
               </TabsContent>

               {/* Tab 2: Schools */}
               <TabsContent value="schools" className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <FilterBar onReset={() => console.log('reset')} onApply={() => console.log('apply')} sticky>
                     <FormField label="搜索">
                        <Input placeholder="输入学校名称..." className="bg-muted/50" />
                     </FormField>
                     <FormField label="区域">
                        <Select>
                           <SelectTrigger className="bg-muted/50"><SelectValue placeholder="全部区域" /></SelectTrigger>
                           <SelectContent>
                              <SelectItem value="xuhui">徐汇区</SelectItem>
                              <SelectItem value="pudong">浦东新区</SelectItem>
                              <SelectItem value="minhang">闵行区</SelectItem>
                              <SelectItem value="yangpu">杨浦区</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormField>
                     <FormField label="性质">
                        <Select>
                           <SelectTrigger className="bg-muted/50"><SelectValue placeholder="全部性质" /></SelectTrigger>
                           <SelectContent>
                              <SelectItem value="public">公办</SelectItem>
                              <SelectItem value="private">民办</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormField>
                  </FilterBar>

                  <StateContainer>
                     {schoolsLoading && <LoadingSkeleton count={5} />}
                     {schoolsError && <ErrorState message="加载失败" onRetry={() => refetchSchools()} />}
                     {!schoolsLoading && !schoolsError && (schoolsData as any)?.data && (
                        <>
                           {(schoolsData as any).data.map((school: any) => (
                              <Card key={school.id} className="shadow-sm active:scale-[0.99] transition-transform">
                                 <CardContent className="p-4 flex items-center justify-between">
                                    <div className="space-y-1">
                                       <div className="flex items-center gap-2">
                                          <h4 className="font-semibold text-base">{school.name}</h4>
                                          <Badge variant={school.type === '公办' ? 'default' : 'secondary'} className="text-[10px] px-1 h-5">{school.type}</Badge>
                                       </div>
                                       <div className="text-xs text-muted-foreground flex items-center gap-2">
                                          <MapPin className="h-3 w-3" /> {school.district}
                                       </div>
                                    </div>
                                    <div className="text-right pl-4 border-l ml-4">
                                       <div className="text-xl font-bold text-primary">{school.score}</div>
                                       <div className="text-[10px] text-muted-foreground">分数线</div>
                                    </div>
                                 </CardContent>
                              </Card>
                           ))}
                           <div className="text-center text-xs text-muted-foreground py-4">
                              已加载全部 {(schoolsData as any).meta?.total} 所学校
                           </div>
                        </>
                     )}
                  </StateContainer>
               </TabsContent>

               {/* Tab 3: Analysis */}
               <TabsContent value="analysis" className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <SectionCard title="分数趋势" description="近五年全市平均录取分数线走势" divider className="shadow-sm">
                     <div className="h-[300px] flex items-center justify-center bg-gradient-to-br from-muted/50 to-muted/10 rounded-lg border border-dashed">
                        <div className="text-center text-muted-foreground">
                           <BarChart3 className="h-12 w-12 mx-auto mb-3 opacity-30" />
                           <p className="font-medium">图表区域</p>
                           <p className="text-xs mt-1">集成 Recharts 可视化组件</p>
                        </div>
                     </div>
                  </SectionCard>
               </TabsContent>

               {/* Tab 4: Settings */}
               <TabsContent value="settings" className="space-y-4 animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
                  <FormSection
                     title="账户设置"
                     description="管理您的个人资料与偏好设置"
                     onSubmit={() => { }}
                     submitText="保存更改"
                     cancelText="取消"
                     bodyClassName="grid gap-4 max-w-2xl bg-card p-4 rounded-lg border shadow-sm"
                  >
                     <FormField label="显示名称" required>
                        <Input defaultValue="管理员" />
                     </FormField>
                     <FormField label="绑定邮箱" required>
                        <Input defaultValue="admin@example.com" disabled className="bg-muted" />
                     </FormField>
                     <FormField label="通知频率">
                        <Select defaultValue="daily">
                           <SelectTrigger><SelectValue /></SelectTrigger>
                           <SelectContent>
                              <SelectItem value="realtime">实时推送</SelectItem>
                              <SelectItem value="daily">每日摘要</SelectItem>
                              <SelectItem value="weekly">每周汇总</SelectItem>
                           </SelectContent>
                        </Select>
                     </FormField>
                     <FormField label="界面主题">
                        <div className="flex items-center gap-4 pt-2">
                           <div className="flex items-center space-x-2">
                              <RadioGroup defaultValue="system" className="flex gap-4">
                                 <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="light" id="theme-light" />
                                    <Label htmlFor="theme-light">浅色</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="dark" id="theme-dark" />
                                    <Label htmlFor="theme-dark">深色</Label>
                                 </div>
                                 <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="system" id="theme-system" />
                                    <Label htmlFor="theme-system">跟随系统</Label>
                                 </div>
                              </RadioGroup>
                           </div>
                        </div>
                     </FormField>
                  </FormSection>

                  <div className="w-full">
                     <Button variant="destructive" className="w-full md:w-auto" size="lg">退出登录</Button>
                  </div>
               </TabsContent>

            </BottomTabs>
         </div>
      </AppShell>
   );
}
