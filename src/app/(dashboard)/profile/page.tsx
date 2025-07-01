'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  User,
  Camera,
  Star,
  Award,
  Calendar,
  Clock,
  TrendingUp,
  FolderOpen,
  Github,
  ExternalLink,
  Mail,
  MapPin,
  Link as LinkIcon,
  Edit,
  Save,
  Share,
  Trophy,
  Target,
  Zap
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const achievements = [
  {
    id: 1,
    title: '首个项目',
    description: '成功创建了第一个VibeCLI项目',
    icon: Star,
    unlocked: true,
    date: '2024-06-15'
  },
  {
    id: 2,
    title: '快速学习者',
    description: '在一周内创建了5个不同类型的项目',
    icon: Zap,
    unlocked: true,
    date: '2024-06-20'
  },
  {
    id: 3,
    title: '探索者',
    description: '使用了超过3种不同的项目模板',
    icon: Target,
    unlocked: true,
    date: '2024-06-22'
  },
  {
    id: 4,
    title: '效率专家',
    description: '单月创建项目超过10个',
    icon: Trophy,
    unlocked: false,
    date: null
  },
  {
    id: 5,
    title: '社区贡献者',
    description: '分享项目被其他用户收藏超过10次',
    icon: Award,
    unlocked: false,
    date: null
  }
];

const recentProjects = [
  {
    id: '1',
    name: 'E-commerce Platform',
    type: 'Next.js',
    status: 'completed',
    createdAt: '2024-06-28',
    url: 'https://ecommerce-demo.vercel.app',
    githubUrl: 'https://github.com/user/ecommerce-platform',
    stars: 15
  },
  {
    id: '2',
    name: 'SaaS Dashboard',
    type: 'React',
    status: 'completed',
    createdAt: '2024-06-25',
    url: 'https://saas-demo.vercel.app',
    githubUrl: 'https://github.com/user/saas-dashboard',
    stars: 8
  },
  {
    id: '3',
    name: 'Blog Platform',
    type: 'Next.js',
    status: 'completed',
    createdAt: '2024-06-20',
    url: 'https://blog-demo.vercel.app',
    githubUrl: 'https://github.com/user/blog-platform',
    stars: 12
  }
];

const stats = [
  {
    title: '总项目数',
    value: 24,
    icon: FolderOpen,
    color: 'blue'
  },
  {
    title: '完成项目',
    value: 18,
    icon: Star,
    color: 'green'
  },
  {
    title: '获得收藏',
    value: 35,
    icon: Award,
    color: 'purple'
  },
  {
    title: '使用天数',
    value: 45,
    icon: Calendar,
    color: 'orange'
  }
];

const skillProgress = [
  { skill: 'React/Next.js', level: 85, projects: 12 },
  { skill: 'Vue.js', level: 60, projects: 5 },
  { skill: 'Node.js API', level: 70, projects: 8 },
  { skill: 'UI/UX Design', level: 45, projects: 3 },
  { skill: 'Database Design', level: 55, projects: 6 }
];

export default function ProfilePage() {
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || 'VibeCLI用户',
    email: user?.email || 'demo@vibecli.com',
    bio: '热衷于AI驱动开发的产品经理，正在探索VibeCLI的无限可能。',
    location: '北京, 中国',
    website: 'https://vibecli.com',
    github: 'vibecli-user',
    joinDate: '2024-06-15',
    lastActive: '2小时前'
  });

  const handleSaveProfile = async () => {
    try {
      // 模拟保存
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: '个人资料已更新',
        description: '您的个人资料信息已成功保存'
      });
      
      setIsEditing(false);
    } catch (error) {
      toast({
        title: '保存失败',
        description: '个人资料更新失败，请稍后重试',
        variant: 'destructive'
      });
    }
  };

  const handleShareProfile = () => {
    navigator.clipboard.writeText(`${window.location.origin}/user/${user?.email?.split('@')[0]}`);
    toast({
      title: '链接已复制',
      description: '个人资料链接已复制到剪贴板'
    });
  };

  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const completionRate = Math.round((stats[1].value / stats[0].value) * 100);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">个人中心</h1>
        <p className="text-muted-foreground">
          查看您的个人资料、项目统计和成就
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Info */}
        <div className="lg:col-span-1 space-y-6">
          {/* Basic Profile */}
          <Card>
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="relative inline-block">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src="/avatars/01.png" alt="用户头像" />
                    <AvatarFallback className="text-lg">
                      {profileData.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
                  >
                    <Camera className="h-4 w-4" />
                  </Button>
                </div>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <Input
                      value={profileData.name}
                      onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                      className="text-center"
                    />
                    <Textarea
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      rows={3}
                      className="text-center"
                    />
                    <div className="flex gap-2">
                      <Button onClick={handleSaveProfile} size="sm" className="flex-1">
                        <Save className="mr-2 h-4 w-4" />
                        保存
                      </Button>
                      <Button variant="outline" onClick={() => setIsEditing(false)} size="sm">
                        取消
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <h2 className="text-xl font-bold">{profileData.name}</h2>
                    <p className="text-sm text-muted-foreground">{profileData.bio}</p>
                    <div className="flex justify-center gap-2">
                      <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                        <Edit className="mr-2 h-4 w-4" />
                        编辑
                      </Button>
                      <Button variant="outline" size="sm" onClick={handleShareProfile}>
                        <Share className="mr-2 h-4 w-4" />
                        分享
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-4" />

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{profileData.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <LinkIcon className="h-4 w-4 text-muted-foreground" />
                  <Link href={profileData.website} className="text-blue-600 hover:underline">
                    {profileData.website}
                  </Link>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Github className="h-4 w-4 text-muted-foreground" />
                  <Link href={`https://github.com/${profileData.github}`} className="text-blue-600 hover:underline">
                    @{profileData.github}
                  </Link>
                </div>
              </div>

              <Separator className="my-4" />

              {/* Account Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>加入时间</span>
                  <span>{profileData.joinDate}</span>
                </div>
                <div className="flex justify-between">
                  <span>最后活跃</span>
                  <span>{profileData.lastActive}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">统计概览</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <stat.icon className={`h-4 w-4 text-${stat.color}-600`} />
                    <span className="text-sm">{stat.title}</span>
                  </div>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
              <Separator />
              <div className="flex items-center justify-between">
                <span className="text-sm">项目完成率</span>
                <span className="font-semibold">{completionRate}%</span>
              </div>
              <Progress value={completionRate} className="h-2" />
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Recent Projects */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FolderOpen className="h-5 w-5" />
                最近项目
              </CardTitle>
              <CardDescription>
                您最近创建和更新的项目
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentProjects.map((project) => (
                  <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{project.name}</h4>
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                        <Badge variant="success" className="text-xs">
                          {project.status === 'completed' ? '已完成' : '进行中'}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>创建于 {project.createdAt}</span>
                        <span className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {project.stars} 收藏
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.url} target="_blank">
                          <ExternalLink className="h-3 w-3 mr-1" />
                          预览
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="h-3 w-3 mr-1" />
                          代码
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t mt-4">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/projects">
                    查看所有项目
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                技能发展
              </CardTitle>
              <CardDescription>
                基于您的项目类型统计的技能熟练度
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {skillProgress.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{skill.skill}</span>
                      <span className="text-muted-foreground">
                        {skill.projects} 个项目
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={skill.level} className="flex-1 h-2" />
                      <span className="text-sm font-medium w-12 text-right">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                成就徽章
              </CardTitle>
              <CardDescription>
                您已解锁 {unlockedAchievements.length} / {achievements.length} 个成就
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 border rounded-lg transition-all ${
                      achievement.unlocked
                        ? 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800'
                        : 'bg-gray-50 dark:bg-gray-900/20 border-gray-200 dark:border-gray-800 opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${
                        achievement.unlocked
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-600'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-400'
                      }`}>
                        <achievement.icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.unlocked && achievement.date && (
                          <p className="text-xs text-green-600 mt-1">
                            解锁于 {achievement.date}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}