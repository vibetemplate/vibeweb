'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { 
  Mail,
  MessageSquare,
  User,
  Send,
  Phone,
  MapPin,
  Clock,
  Heart,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Briefcase,
  HelpCircle,
  Bug,
  Lightbulb
} from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

const contactInfo = {
  name: 'Coso Huang',
  title: 'VibeCLI 创始人 & 首席开发者',
  wechat: 'wutongci',
  email: 'wutongci@gmail.com',
  emailAlt: 'wutongci@qq.com',
  location: '中国·北京',
  timezone: 'UTC+8',
  bio: '专注于AI驱动开发工具的创新，致力于让每个人都能轻松构建优秀的软件产品。',
};

const contactMethods = [
  {
    type: '技术支持',
    icon: HelpCircle,
    description: '遇到使用问题？获取快速技术支持',
    color: 'from-blue-500 to-cyan-500',
    channels: [
      { name: '邮件支持', value: contactInfo.email, icon: Mail },
      { name: '微信咨询', value: contactInfo.wechat, icon: MessageSquare },
    ]
  },
  {
    type: '商务合作',
    icon: Briefcase,
    description: '商务合作、投资洽谈、企业服务',
    color: 'from-purple-500 to-pink-500',
    channels: [
      { name: '商务邮箱', value: contactInfo.email, icon: Mail },
      { name: '直接联系', value: contactInfo.wechat, icon: MessageSquare },
    ]
  },
  {
    type: 'Bug反馈',
    icon: Bug,
    description: '发现Bug？帮助我们改进产品',
    color: 'from-red-500 to-orange-500',
    channels: [
      { name: 'GitHub Issues', value: 'github.com/vibetemplate/vibecli', icon: Github },
      { name: '邮件反馈', value: contactInfo.email, icon: Mail },
    ]
  },
  {
    type: '功能建议',
    icon: Lightbulb,
    description: '有好想法？我们期待您的建议',
    color: 'from-green-500 to-emerald-500',
    channels: [
      { name: '功能建议', value: contactInfo.email, icon: Mail },
      { name: '社区讨论', value: '微信群', icon: MessageSquare },
    ]
  }
];

const ContactAvatar = () => (
  <svg width="120" height="120" viewBox="0 0 120 120" className="rounded-full bg-gradient-to-br from-blue-400 to-purple-600">
    {/* 头部轮廓 */}
    <circle cx="60" cy="45" r="18" fill="#fbbf24" />
    
    {/* 头发 */}
    <path d="M42 30 Q60 20 78 30 Q78 25 60 25 Q42 25 42 30" fill="#374151" />
    
    {/* 眼睛 */}
    <circle cx="54" cy="42" r="2" fill="#1f2937" />
    <circle cx="66" cy="42" r="2" fill="#1f2937" />
    <circle cx="54.5" cy="41.5" r="0.5" fill="white" />
    <circle cx="66.5" cy="41.5" r="0.5" fill="white" />
    
    {/* 鼻子 */}
    <circle cx="60" cy="47" r="1" fill="#f59e0b" />
    
    {/* 嘴巴 */}
    <path d="M56 52 Q60 55 64 52" stroke="#1f2937" strokeWidth="1" fill="none" strokeLinecap="round" />
    
    {/* 身体 */}
    <rect x="45" y="65" width="30" height="35" rx="5" fill="#3b82f6" />
    
    {/* 衣领 */}
    <path d="M50 65 L70 65 Q65 70 60 70 Q55 70 50 65" fill="#1e40af" />
    
    {/* 手臂 */}
    <rect x="35" y="70" width="10" height="20" rx="5" fill="#fbbf24" />
    <rect x="75" y="70" width="10" height="20" rx="5" fill="#fbbf24" />
    
    {/* 装饰元素 - 代码符号 */}
    <text x="25" y="15" fontSize="8" fill="#60a5fa" opacity="0.7">&lt;/&gt;</text>
    <text x="85" y="110" fontSize="6" fill="#a78bfa" opacity="0.7">AI</text>
    <circle cx="15" cy="105" r="2" fill="#34d399" opacity="0.6" />
    <circle cx="105" cy="20" r="1.5" fill="#fb7185" opacity="0.6" />
  </svg>
);

export function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 模拟提交
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: '消息已发送',
        description: '感谢您的联系！我们会在24小时内回复您。'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        type: 'general'
      });
    } catch (error) {
      toast({
        title: '发送失败',
        description: '消息发送失败，请稍后重试或直接发送邮件。',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: '已复制',
      description: `${type}已复制到剪贴板`
    });
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <Badge variant="outline" className="mb-4">
          联系我们
        </Badge>
        <h1 className="text-4xl font-bold">
          与VibeCLI团队取得联系
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          无论是技术支持、商务合作还是产品反馈，我们都非常期待听到您的声音
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="lg:col-span-1 space-y-6">
          {/* Creator Profile */}
          <Card className="text-center">
            <CardContent className="p-6 space-y-4">
              <div className="flex justify-center">
                <ContactAvatar />
              </div>
              <div>
                <h3 className="text-xl font-bold">{contactInfo.name}</h3>
                <p className="text-sm text-muted-foreground">{contactInfo.title}</p>
                <p className="text-xs text-muted-foreground mt-2">{contactInfo.bio}</p>
              </div>
              
              <Separator />
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 justify-center">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{contactInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span>{contactInfo.timezone}</span>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <MessageSquare className="h-4 w-4 text-muted-foreground" />
                  <button 
                    onClick={() => copyToClipboard(contactInfo.wechat, '微信号')}
                    className="text-blue-600 hover:underline"
                  >
                    {contactInfo.wechat}
                  </button>
                </div>
                <div className="flex items-center gap-2 justify-center">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <button 
                    onClick={() => copyToClipboard(contactInfo.email, '邮箱')}
                    className="text-blue-600 hover:underline"
                  >
                    {contactInfo.email}
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">快速联系</CardTitle>
              <CardDescription>选择最适合的联系方式</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button variant="gradient" className="w-full" asChild>
                <a href={`mailto:${contactInfo.email}?subject=VibeCLI咨询`}>
                  <Mail className="mr-2 h-4 w-4" />
                  发送邮件
                </a>
              </Button>
              <Button variant="outline" className="w-full" onClick={() => copyToClipboard(contactInfo.wechat, '微信号')}>
                <MessageSquare className="mr-2 h-4 w-4" />
                复制微信号
              </Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="https://github.com/vibetemplate/vibecli" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  GitHub项目
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Response Time */}
          <Card className="bg-green-50 dark:bg-green-900/20 border-green-200">
            <CardContent className="p-4 text-center">
              <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h4 className="font-medium text-green-900 dark:text-green-100 mb-1">
                快速响应
              </h4>
              <p className="text-sm text-green-700 dark:text-green-300">
                我们承诺在24小时内回复您的消息
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Methods & Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${method.color}`}>
                      <method.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.type}</CardTitle>
                      <CardDescription>{method.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {method.channels.map((channel, channelIndex) => (
                      <div key={channelIndex} className="flex items-center justify-between p-2 rounded-lg hover:bg-accent/50 transition-colors">
                        <div className="flex items-center gap-2">
                          <channel.icon className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{channel.name}</span>
                        </div>
                        <button 
                          onClick={() => {
                            if (channel.name.includes('邮件') || channel.name.includes('邮箱')) {
                              window.location.href = `mailto:${channel.value}?subject=VibeCLI ${method.type}`;
                            } else {
                              copyToClipboard(channel.value, channel.name);
                            }
                          }}
                          className="text-blue-600 hover:underline text-xs"
                        >
                          {channel.name.includes('邮件') || channel.name.includes('邮箱') ? '发送' : '复制'}
                        </button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                发送消息
              </CardTitle>
              <CardDescription>
                填写下面的表单，我们会尽快回复您
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">姓名 *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">邮箱 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">咨询类型</Label>
                  <select 
                    id="type"
                    className="w-full p-2 border rounded-md"
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                  >
                    <option value="general">一般咨询</option>
                    <option value="technical">技术支持</option>
                    <option value="business">商务合作</option>
                    <option value="bug">Bug反馈</option>
                    <option value="feature">功能建议</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">主题 *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">详细描述 *</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="请详细描述您的问题、建议或需求..."
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="gradient" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? '发送中...' : '发送消息'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Additional Info */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <Heart className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4">
            感谢您对VibeCLI的关注！
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            VibeCLI是一个开源项目，我们相信AI能够让每个人都成为出色的开发者。
            您的反馈和建议对我们来说非常宝贵，帮助我们不断改进产品。
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" asChild>
              <Link href="/story">
                <Lightbulb className="mr-2 h-4 w-4" />
                了解项目故事
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/docs/contributing">
                <Github className="mr-2 h-4 w-4" />
                参与贡献
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}