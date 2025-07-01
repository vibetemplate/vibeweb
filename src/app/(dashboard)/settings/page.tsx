'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { 
  User,
  Bell,
  Shield,
  Palette,
  Database,
  Key,
  Globe,
  Download,
  Trash2,
  Save,
  Upload,
  Eye,
  EyeOff,
  AlertTriangle
} from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/lib/auth';
import { useToast } from '@/hooks/use-toast';

export default function SettingsPage() {
  const { user } = useAuth();
  const { toast } = useToast();
  
  // Profile settings
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: '',
    website: '',
    location: '',
    avatar: ''
  });

  // Notification settings
  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    projectUpdates: true,
    securityAlerts: true,
    marketingEmails: false,
    weeklyDigest: true
  });

  // Security settings
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  // Preferences
  const [preferences, setPreferences] = useState({
    theme: 'system',
    language: 'zh-CN',
    timezone: 'Asia/Shanghai',
    defaultFramework: 'Next.js',
    autoSave: true,
    showTooltips: true
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSaveProfile = async () => {
    setIsLoading(true);
    try {
      // 模拟保存过程
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: '个人资料已更新',
        description: '您的个人资料信息已成功保存'
      });
    } catch (error) {
      toast({
        title: '保存失败',
        description: '个人资料更新失败，请稍后重试',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChangePassword = async () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast({
        title: '密码不匹配',
        description: '新密码和确认密码不一致',
        variant: 'destructive'
      });
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast({
        title: '密码已更新',
        description: '您的密码已成功更改'
      });
      setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
    } catch (error) {
      toast({
        title: '密码更新失败',
        description: '密码更改失败，请检查当前密码是否正确',
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = () => {
    toast({
      title: '账户删除确认',
      description: '此操作不可逆，请确认您真的要删除账户',
      variant: 'destructive'
    });
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">设置</h1>
        <p className="text-muted-foreground">
          管理您的账户设置和应用偏好
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Settings Navigation */}
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-4">
              <nav className="space-y-2">
                {[
                  { id: 'profile', label: '个人资料', icon: User },
                  { id: 'notifications', label: '通知设置', icon: Bell },
                  { id: 'security', label: '安全设置', icon: Shield },
                  { id: 'preferences', label: '偏好设置', icon: Palette },
                  { id: 'data', label: '数据管理', icon: Database },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-accent transition-colors"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Profile Settings */}
          <Card id="profile">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                个人资料
              </CardTitle>
              <CardDescription>
                管理您的基本信息和公开资料
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">姓名</Label>
                  <Input
                    id="name"
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">邮箱</Label>
                  <Input
                    id="email"
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">个人简介</Label>
                <Textarea
                  id="bio"
                  placeholder="介绍一下自己..."
                  rows={3}
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="website">个人网站</Label>
                  <Input
                    id="website"
                    placeholder="https://yourwebsite.com"
                    value={profileData.website}
                    onChange={(e) => setProfileData({...profileData, website: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">所在地</Label>
                  <Input
                    id="location"
                    placeholder="北京, 中国"
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button onClick={handleSaveProfile} disabled={isLoading}>
                  <Save className="mr-2 h-4 w-4" />
                  {isLoading ? '保存中...' : '保存更改'}
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card id="notifications">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5" />
                通知设置
              </CardTitle>
              <CardDescription>
                选择您希望接收的通知类型
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {[
                { key: 'emailNotifications', label: '邮件通知', description: '接收重要的邮件通知' },
                { key: 'projectUpdates', label: '项目更新', description: '项目生成完成时通知我' },
                { key: 'securityAlerts', label: '安全警报', description: '账户安全相关的重要通知' },
                { key: 'marketingEmails', label: '营销邮件', description: '产品更新和优惠信息' },
                { key: 'weeklyDigest', label: '周报摘要', description: '每周项目和活动总结' },
              ].map((notification) => (
                <div key={notification.key} className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>{notification.label}</Label>
                    <p className="text-xs text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                  <Switch
                    checked={notifications[notification.key as keyof typeof notifications]}
                    onCheckedChange={(checked) => 
                      setNotifications({...notifications, [notification.key]: checked})
                    }
                  />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card id="security">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                安全设置
              </CardTitle>
              <CardDescription>
                管理您的账户安全和密码
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Password Change */}
              <div className="space-y-4">
                <h4 className="font-medium">更改密码</h4>
                <div className="space-y-3">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">当前密码</Label>
                    <div className="relative">
                      <Input
                        id="currentPassword"
                        type={showCurrentPassword ? 'text' : 'password'}
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                      >
                        {showCurrentPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">新密码</Label>
                    <div className="relative">
                      <Input
                        id="newPassword"
                        type={showNewPassword ? 'text' : 'password'}
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute right-0 top-0 h-full px-3"
                        onClick={() => setShowNewPassword(!showNewPassword)}
                      >
                        {showNewPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">确认新密码</Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      value={passwordData.confirmPassword}
                      onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    />
                  </div>
                  <Button onClick={handleChangePassword} disabled={isLoading}>
                    <Key className="mr-2 h-4 w-4" />
                    更新密码
                  </Button>
                </div>
              </div>

              <Separator />

              {/* Two-Factor Authentication */}
              <div className="space-y-3">
                <h4 className="font-medium">两步验证</h4>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm">为您的账户添加额外的安全保护</p>
                    <p className="text-xs text-muted-foreground">推荐开启</p>
                  </div>
                  <Button variant="outline">
                    <Shield className="mr-2 h-4 w-4" />
                    设置两步验证
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Preferences */}
          <Card id="preferences">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5" />
                偏好设置
              </CardTitle>
              <CardDescription>
                自定义您的使用体验
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>主题</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={preferences.theme}
                    onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                  >
                    <option value="light">浅色</option>
                    <option value="dark">深色</option>
                    <option value="system">跟随系统</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>语言</Label>
                  <select 
                    className="w-full p-2 border rounded-md"
                    value={preferences.language}
                    onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                  >
                    <option value="zh-CN">简体中文</option>
                    <option value="en-US">English</option>
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { key: 'autoSave', label: '自动保存', description: '自动保存项目配置' },
                  { key: 'showTooltips', label: '显示提示', description: '显示功能使用提示' },
                ].map((pref) => (
                  <div key={pref.key} className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <Label>{pref.label}</Label>
                      <p className="text-xs text-muted-foreground">{pref.description}</p>
                    </div>
                    <Switch
                      checked={preferences[pref.key as keyof typeof preferences] as boolean}
                      onCheckedChange={(checked) => 
                        setPreferences({...preferences, [pref.key]: checked})
                      }
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Data Management */}
          <Card id="data">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5" />
                数据管理
              </CardTitle>
              <CardDescription>
                导出或删除您的数据
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">导出数据</h4>
                    <p className="text-sm text-muted-foreground">
                      下载您的所有项目和设置数据
                    </p>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    导出
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg border-red-200 bg-red-50 dark:bg-red-900/20">
                  <div>
                    <h4 className="font-medium text-red-900 dark:text-red-100">删除账户</h4>
                    <p className="text-sm text-red-700 dark:text-red-300">
                      永久删除您的账户和所有数据，此操作不可撤销
                    </p>
                  </div>
                  <Button variant="destructive" onClick={handleDeleteAccount}>
                    <Trash2 className="mr-2 h-4 w-4" />
                    删除账户
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}